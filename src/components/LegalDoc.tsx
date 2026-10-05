import fs from 'node:fs';
import path from 'node:path';
import { Marked } from 'marked';
import { pageJsonLd } from '@/i18n/schema';
import '@/styles/pages/legal.css';

/**
 * Legal pages (privacy policy, terms of service) rendered at build time from
 * content/legal/<doc>.<en|ar>.md, so counsel can edit plain Markdown.
 * Arabic falls back to English until a translation exists.
 */
export type LegalSlug = 'privacy-policy' | 'terms-of-service';

const COPY = {
  en: {
    toc: 'On this page',
    note: 'This document is also available in Arabic. If the versions differ, the English version prevails unless the law that applies to you requires otherwise.',
    contact: 'Questions about this document? Email',
    fallback: 'The Arabic version of this document is being finalised. The English version is shown below.'
  },
  ar: {
    toc: 'محتويات الصفحة',
    note: 'هذه الوثيقة متاحة أيضًا باللغة الإنجليزية. في حال وجود اختلاف بين النسختين، تسود النسخة الإنجليزية ما لم يقتضِ القانون المطبق عليك خلاف ذلك.',
    contact: 'لأي استفسار عن هذه الوثيقة، راسلنا على',
    fallback: 'جارٍ إعداد النسخة العربية من هذه الوثيقة. النسخة الإنجليزية معروضة أدناه.'
  }
};

export function load(doc: LegalSlug, lang: 'en' | 'ar') {
  const file = path.join(process.cwd(), 'content', 'legal', `${doc}.${lang}.md`);
  return fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : null;
}

/** GFM autolinks swallow a trailing "]" or Arabic comma (e.g. "[https://genudo.ai/legal/dpa]،"). */
export const fixHrefs = (html: string) => html.replace(/href="([^"]*?)(?:%5D|\]|%D8%8C|،)+"/g, 'href="$1"');

/**
 * One section of a legal document, by its English heading. Arabic uses the same
 * heading position (the translation is verified 1:1), so both stay in sync.
 */
export function extract(doc: LegalSlug, lang: 'en' | 'ar', level: 2 | 3, enHeading: string) {
  const en = load(doc, 'en') ?? '';
  const src = (lang === 'ar' && load(doc, 'ar')) || en;
  const re = new RegExp(`^#{${level}} .*$`, 'gm');
  const idx = [...en.matchAll(re)].findIndex((m) => m[0].toUpperCase().includes(enHeading.toUpperCase()));
  const heads = [...src.matchAll(re)];
  if (idx < 0 || !heads[idx]) return '';
  const start = heads[idx].index!;
  const after = src.slice(start + heads[idx][0].length);
  const stop = after.search(new RegExp(`^#{1,${level}} `, 'm'));
  const md = src.slice(start, stop < 0 ? undefined : start + heads[idx][0].length + stop).replace(/\n---\s*$/, '');
  return fixHrefs(new Marked({ gfm: true }).parse(md) as string);
}

export function render(md: string) {
  const toc: { id: string; text: string }[] = [];
  const marked = new Marked({ gfm: true });
  marked.use({
    renderer: {
      heading({ tokens, depth }) {
        const text = this.parser.parseInline(tokens);
        if (depth !== 2) return `<h${depth}>${text}</h${depth}>\n`;
        const id = `s${toc.length + 1}`;
        toc.push({ id, text: text.replace(/<[^>]+>/g, '') });
        return `<h2 id="${id}">${text}</h2>\n`;
      }
    }
  });
  // Title and "Last updated" line are shown in the page header, not the body.
  const title = md.match(/^# (.*)$/m)?.[1]?.trim() ?? '';
  const updatedLine = md.match(/^\*\*(?:Last Updated|تاريخ آخر تحديث|آخر تحديث)[^\n]*$/m)?.[0] ?? '';
  const updated = updatedLine.replace(/[*[\]]/g, '').trim();
  const body = (marked.parse(md.replace(/^# .*\n/, '').replace(updatedLine, '')) as string).replace(/^\s*<hr>\s*/, '');
  return { body: fixHrefs(body), toc, title, updated };
}

export default function LegalDoc({ locale, doc, route }: { locale: string; doc: LegalSlug; route: string }) {
  const lang = locale.startsWith('ar') ? 'ar' : 'en';
  const ar = lang === 'ar' ? load(doc, 'ar') : null;
  const en = load(doc, 'en') ?? '';
  const shownLang = ar ? 'ar' : 'en';
  const { body, toc, title, updated } = render(ar ?? en);
  const c = COPY[lang];
  const ld = pageJsonLd({ locale, route, html: `<h1>${title}</h1>`, en: '' });

  return (
    // Trusted content: repo-owned Markdown rendered at build time, not user input.
    <div className={`legacy-page pg-legal${shownLang === 'ar' ? ' legacy-rtl' : ''}`} dir={shownLang === 'ar' ? 'rtl' : 'ltr'} lang={shownLang === 'ar' ? 'ar' : 'en'}>
      {ld && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld).replace(/</g, '\\u003c') }} />}
      <header className="legal-head">
        <div className="container">
          <h1>{title}</h1>
          {updated && <p className="legal-updated">{updated}</p>}
          <p className="legal-note">{lang === 'ar' && !ar ? c.fallback : c.note}</p>
        </div>
      </header>
      <div className="container legal-grid">
        <nav className="legal-toc" aria-label={c.toc}>
          <details open>
            <summary>{c.toc}</summary>
            <ol>
              {toc.map((t) => (
                <li key={t.id}>
                  <a href={`#${t.id}`}>{t.text}</a>
                </li>
              ))}
            </ol>
          </details>
        </nav>
        <article className="legal-body" dangerouslySetInnerHTML={{ __html: body }} />
      </div>
      <div className="container legal-foot">
        {c.contact} <a href="mailto:info@genudo.ai">info@genudo.ai</a>
      </div>
    </div>
  );
}
