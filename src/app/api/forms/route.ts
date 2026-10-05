import { NextRequest, NextResponse } from 'next/server';
import { SITE_URL } from '@/i18n/seo';

/**
 * Website form intake. Every form on the site posts here; we validate, drop bots,
 * add server-side metadata and forward one JSON envelope to the n8n webhook.
 * Envelope contract: docs/website/FORMS-WEBHOOK.md.
 *
 * Env: FORMS_WEBHOOK_URL (defaults to the GenuDo n8n webhook), FORMS_WEBHOOK_SECRET
 * (optional; sent as X-GenuDo-Signature so n8n can reject spoofed calls),
 * FORMS_CLIENT_IP_HEADER (header the proxy overwrites; default x-real-ip),
 * FORMS_GLOBAL_PER_MIN (site-wide submission cap; default 60).
 */
const WEBHOOK = process.env.FORMS_WEBHOOK_URL || 'https://automationv2.loop-x.co/webhook/genudo-website-forms';
const FORMS = new Set(['demo_request', 'privacy_request', 'document_request']);
const MAX_FIELDS = 40;
const MAX_VALUE = 5000;

const MAX_BODY = 32_000; // bytes; the largest real form is a few KB

// Two in-memory limits, per container (move to Redis/the proxy for several replicas):
// - per client IP: 8/min, best effort (only as trustworthy as the proxy header);
// - site-wide: FORMS_GLOBAL_PER_MIN (default 60/min). This one cannot be bypassed by
//   spoofing addresses, so floods fail closed instead of reaching n8n.
const PER_IP = 8;
const GLOBAL = Number(process.env.FORMS_GLOBAL_PER_MIN) || 60;
const MAX_KEYS = 5_000;
const hits = new Map<string, number[]>();
let globalHits: number[] = [];

/** Per-IP limit (best effort). Rejected requests do not touch the site-wide budget. */
function ipLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 60_000);
  recent.push(now);
  hits.delete(ip); // re-insert so Map order = least recently seen first
  hits.set(ip, recent);
  // Bound memory by evicting the least recently seen keys; never reset everyone.
  for (const k of hits.keys()) {
    if (hits.size <= MAX_KEYS) break;
    hits.delete(k);
  }
  return recent.length > PER_IP;
}

/**
 * Site-wide budget, spent only by valid submissions about to be forwarded, so junk,
 * malformed and per-IP-blocked requests cannot lock real visitors out.
 * ponytail: a flood of valid-looking submissions from spoofed IPs can still use it up;
 * that is the deliberate trade-off (n8n stays protected). Add a CAPTCHA if it happens.
 */
function globalBudgetSpent() {
  const now = Date.now();
  globalHits = globalHits.filter((t) => now - t < 60_000);
  if (globalHits.length >= GLOBAL) return true;
  globalHits.push(now);
  return false;
}

/**
 * Client IP from ONE header that the reverse proxy overwrites on every request
 * (FORMS_CLIENT_IP_HEADER, default "x-real-ip"; nginx: proxy_set_header X-Real-IP
 * $remote_addr). Never read a header the proxy only appends to. For
 * x-forwarded-for, the last hop is the one the proxy added.
 */
const IP_HEADER = (process.env.FORMS_CLIENT_IP_HEADER || 'x-real-ip').toLowerCase();
function clientIp(req: NextRequest) {
  const raw = req.headers.get(IP_HEADER) ?? '';
  const hop = IP_HEADER === 'x-forwarded-for' ? raw.split(',').map((h) => h.trim()).filter(Boolean).pop() : raw.trim();
  return hop || 'unknown';
}

const clean = (v: unknown) =>
  typeof v === 'string' ? v.slice(0, MAX_VALUE).trim() : Array.isArray(v) ? v.slice(0, 20).map((x) => String(x).slice(0, 200)) : undefined;

export async function POST(req: NextRequest) {
  const ip = clientIp(req);
  if (ipLimited(ip)) return NextResponse.json({ ok: false, error: 'rate_limited' }, { status: 429 });
  if (Number(req.headers.get('content-length') ?? 0) > MAX_BODY) return NextResponse.json({ ok: false, error: 'too_large' }, { status: 413 });

  let body: { form?: string; data?: Record<string, unknown>; meta?: Record<string, unknown> };
  try {
    // Read with a hard cap: content-length can be absent (chunked) or wrong.
    const reader = req.body?.getReader();
    const chunks: Uint8Array[] = [];
    let size = 0;
    while (reader) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > MAX_BODY) {
        await reader.cancel();
        return NextResponse.json({ ok: false, error: 'too_large' }, { status: 413 });
      }
      chunks.push(value);
    }
    body = JSON.parse(Buffer.concat(chunks).toString('utf8'));
  } catch {
    return NextResponse.json({ ok: false, error: 'bad_json' }, { status: 400 });
  }
  if (!body || typeof body !== 'object') return NextResponse.json({ ok: false, error: 'bad_json' }, { status: 400 });
  const form = String(body.form ?? '');
  if (!FORMS.has(form) || !body.data || typeof body.data !== 'object') {
    return NextResponse.json({ ok: false, error: 'unknown_form' }, { status: 400 });
  }

  const entries = Object.entries(body.data).slice(0, MAX_FIELDS);
  // Honeypot: real visitors never see or fill the "website" field.
  if (entries.some(([k, v]) => k === 'website' && String(v).trim())) return NextResponse.json({ ok: true });
  const data = Object.fromEntries(entries.filter(([k]) => k !== 'website').map(([k, v]) => [k.slice(0, 60), clean(v)]).filter(([, v]) => v !== undefined));
  if (!data.email && !data.work_email) return NextResponse.json({ ok: false, error: 'email_required' }, { status: 400 });

  if (globalBudgetSpent()) return NextResponse.json({ ok: false, error: 'busy' }, { status: 429 });

  const m = body.meta ?? {};
  const pick = (k: string) => (typeof m[k] === 'string' ? (m[k] as string).slice(0, 500) : undefined);
  const envelope = {
    form,
    data,
    meta: {
      submittedAt: new Date().toISOString(),
      locale: pick('locale'),
      page: pick('page'),
      pageTitle: pick('pageTitle'),
      referrer: pick('referrer'),
      utm: typeof m.utm === 'object' && m.utm ? Object.fromEntries(Object.entries(m.utm as Record<string, unknown>).slice(0, 8).map(([k, v]) => [k, String(v).slice(0, 200)])) : {},
      timezone: pick('timezone'),
      ip,
      userAgent: (req.headers.get('user-agent') ?? '').slice(0, 300),
      country: req.headers.get('cf-ipcountry') || req.headers.get('x-vercel-ip-country') || undefined,
      // Configured public URL. Never derive it from Host/X-Forwarded-Host (client-controlled).
      site: SITE_URL
    }
  };

  try {
    const res = await fetch(WEBHOOK, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(process.env.FORMS_WEBHOOK_SECRET ? { 'X-GenuDo-Signature': process.env.FORMS_WEBHOOK_SECRET } : {})
      },
      body: JSON.stringify(envelope),
      signal: AbortSignal.timeout(10_000)
    });
    if (!res.ok) throw new Error(`webhook ${res.status}`);
  } catch (err) {
    console.error('[forms] forward failed', form, (err as Error).message);
    return NextResponse.json({ ok: false, error: 'delivery_failed' }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
