/**
 * Renders a page body island in the visitor's language.
 * Arabic locales get the Egyptian twin (`ar`) with the RTL body styles
 * (`legacy-rtl`, see rtl.css). Pages without a twin fall back to English/LTR.
 * Root-relative links (href="/pricing") are prefixed with the locale so
 * navigation never bounces through the middleware or switches language.
 */
import { routing } from '@/i18n/routing';

const INLINE = new Set(['bdi', 'b', 'strong', 'em', 'code', 'small']);
const RAW = new Set(['script', 'style', 'pre', 'textarea']);

/**
 * Wraps each run of text mixed with text-level tags (e.g. `لازم أغيّر الـ <bdi>CRM</bdi>`)
 * in one <span>. Inside a flex/grid container every bare text run and every inline
 * child becomes its own item, so justify-content/gap tore mixed Arabic + Latin
 * lines apart (FAQ questions, chips, buttons). One span = one item; in normal
 * flow the extra span changes nothing.
 * ponytail: tag-level tokenizer, not a full HTML parser. Unbalanced runs and
 * anything inside script/style/pre/textarea are left untouched.
 */
export function wrapMixedRuns(html: string): string {
  const out: string[] = [];
  let run: string[] = [];
  let depth = 0;
  let tagged = false;
  let bare = false;
  let raw = '';
  const flush = () => {
    const text = run.join('');
    out.push(tagged && bare && depth === 0 ? `<span class="mixrun">${text}</span>` : text);
    run = []; depth = 0; tagged = false; bare = false;
  };
  for (const p of html.split(/(<[^>]+>)/)) {
    if (!p) continue;
    const m = p.match(/^<(\/?)([a-z0-9]+)/i);
    const name = m ? m[2].toLowerCase() : '';
    if (raw) { out.push(p); if (m && m[1] && name === raw) raw = ''; continue; }
    if (!m) { if (depth === 0 && p.trim()) bare = true; run.push(p); continue; }
    if (INLINE.has(name)) {
      if (m[1]) { if (depth === 0) { flush(); out.push(p); continue; } depth--; }
      else { depth++; tagged = true; }
      run.push(p);
      continue;
    }
    flush();
    out.push(p);
    if (!m[1] && RAW.has(name)) raw = name;
  }
  flush();
  return out.join('');
}

export default function LegacyBody({ locale: raw, en, ar }: { locale: string; en: string; ar?: string }) {
  // Allowlist: the locale is interpolated into raw HTML below.
  const locale = (routing.locales as readonly string[]).includes(raw) ? raw : routing.defaultLocale;
  const rtl = locale.startsWith('ar') && !!ar;
  const html = wrapMixedRuns(rtl ? ar! : en)
    .replace(/href="\/(?=[a-z])(?!media\/|genu\/|assets\/|logos\/|channels\/|shots\/)/g, `href="/${locale}/`)
    .replace(/href="\/"/g, `href="/${locale}"`);
  return <div className={`legacy-page${rtl ? ' legacy-rtl' : ''}`} dangerouslySetInnerHTML={{ __html: html }} />;
}
