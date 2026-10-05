import { NextRequest, NextResponse } from 'next/server';

/**
 * Website form intake. Every form on the site posts here; we validate, drop bots,
 * add server-side metadata and forward one JSON envelope to the n8n webhook.
 * Envelope contract: docs/website/FORMS-WEBHOOK.md.
 *
 * Env: FORMS_WEBHOOK_URL (defaults to the GenuDo n8n webhook), FORMS_WEBHOOK_SECRET
 * (optional; sent as X-GenuDo-Signature so n8n can reject spoofed calls).
 */
const WEBHOOK = process.env.FORMS_WEBHOOK_URL || 'https://automationv2.loop-x.co/webhook/genudo-website-forms';
const FORMS = new Set(['demo_request', 'privacy_request', 'document_request']);
const MAX_FIELDS = 40;
const MAX_VALUE = 5000;

// ponytail: in-memory per-IP limit; resets on restart and is per container. Move to
// Redis or the reverse proxy if the site runs more than one replica.
const hits = new Map<string, number[]>();
function limited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 60_000);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 8;
}

const clean = (v: unknown) =>
  typeof v === 'string' ? v.slice(0, MAX_VALUE).trim() : Array.isArray(v) ? v.slice(0, 20).map((x) => String(x).slice(0, 200)) : undefined;

export async function POST(req: NextRequest) {
  const ip = (req.headers.get('x-forwarded-for') ?? '').split(',')[0].trim() || req.headers.get('x-real-ip') || 'unknown';
  if (limited(ip)) return NextResponse.json({ ok: false, error: 'rate_limited' }, { status: 429 });

  let body: { form?: string; data?: Record<string, unknown>; meta?: Record<string, unknown> };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'bad_json' }, { status: 400 });
  }
  const form = String(body.form ?? '');
  if (!FORMS.has(form) || !body.data || typeof body.data !== 'object') {
    return NextResponse.json({ ok: false, error: 'unknown_form' }, { status: 400 });
  }

  const entries = Object.entries(body.data).slice(0, MAX_FIELDS);
  // Honeypot: real visitors never see or fill the "website" field.
  if (entries.some(([k, v]) => k === 'website' && String(v).trim())) return NextResponse.json({ ok: true });
  const data = Object.fromEntries(entries.filter(([k]) => k !== 'website').map(([k, v]) => [k.slice(0, 60), clean(v)]).filter(([, v]) => v !== undefined));
  if (!data.email && !data.work_email) return NextResponse.json({ ok: false, error: 'email_required' }, { status: 400 });

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
      site: req.nextUrl.origin
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
