/**
 * Per-page JSON-LD built from the page body itself, so structured data always
 * matches the visible text (Google requires it; AI engines reward it):
 * BreadcrumbList on every page, FAQPage from `<details class="faq-item">`,
 * BlogPosting for posts, Service for the three AI employees, and
 * SoftwareApplication on the product-defining pages.
 * The Organization + WebSite graph lives in seo.ts (root layout).
 */
import { SITE_URL, ENTITY, ORG } from './seo';

const strip = (s: string) =>
  s
    .replace(/<span class="pm">[\s\S]*?<\/span>/g, '')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;| /g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&rsquo;|&#8217;/g, '’')
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, ' ')
    .trim();

export function faqs(html: string): { q: string; a: string }[] {
  const out: { q: string; a: string }[] = [];
  for (const m of html.matchAll(/<details class="faq-item"[^>]*>\s*<summary>([\s\S]*?)<\/summary>([\s\S]*?)<\/details>/g)) {
    const q = strip(m[1]);
    const a = strip(m[2]);
    if (q && a) out.push({ q, a });
  }
  return out;
}

const h1 = (html: string) => strip(html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1] ?? '');

const EMPLOYEES: Record<string, { en: [string, string]; ar: [string, string]; type: string }> = {
  '/sol-sales-agent': {
    type: 'AI sales agent',
    en: ['Aaref, AI sales employee', 'Answers every inquiry on WhatsApp, Instagram, Messenger and website chat, qualifies leads, follows up with quiet ones, books meetings and updates your CRM.'],
    ar: ['عارف، موظف مبيعات بالذكاء الاصطناعي', 'بيرد على كل استفسار على WhatsApp و Instagram و Messenger وشات الموقع، ويسأل الأسئلة الصح، ويتابع اللي سكت، ويحجز المواعيد ويحدّث الـ CRM.']
  },
  '/sol-customer-service': {
    type: 'AI customer service agent',
    en: ['Adnan, AI customer support employee', 'Answers customers from your own knowledge and policies at any hour, understands voice notes and images, and hands complex cases to your team or helpdesk.'],
    ar: ['عدنان، موظف خدمة عملاء بالذكاء الاصطناعي', 'بيرد على عملائك من معلوماتك وسياساتك في أي ساعة، وبيفهم الفويس نوت والصور، وبيحوّل الحالات المعقدة لفريقك.']
  },
  '/sol-operations': {
    type: 'WhatsApp conversation quality control',
    en: ['ROZ, AI quality control for WhatsApp', "Reviews your team's WhatsApp conversations on company lines, flags slow replies, stalled deals and missed opportunities, and transcribes voice notes."],
    ar: ['روز، مراجعة جودة محادثات WhatsApp بالذكاء الاصطناعي', 'بتراجع محادثات فريقك على خطوط WhatsApp الشركة، وتنبّهك للرد المتأخر والصفقة الواقفة والفرصة الضايعة، وبتفرّغ الفويس نوتس.']
  }
};

const SOFTWARE_PAGES = new Set(['/', '/how-it-works', '/ai-workforce']);

export function pageJsonLd({ locale, route, html, en }: { locale: string; route: string; html: string; en: string }) {
  const ar = locale.startsWith('ar');
  const path = route === '/' ? '' : route;
  const url = `${SITE_URL}/${locale}${path}`;
  const home = `${SITE_URL}/${locale}`;
  const title = h1(html);
  const graph: Record<string, unknown>[] = [];

  const crumbs = [{ name: ar ? 'جينـو دو' : 'GenuDo', item: home }];
  if (route.startsWith('/blog/')) crumbs.push({ name: ar ? 'المدونة' : 'Blog', item: `${home}/blog` });
  if (path && title) crumbs.push({ name: title, item: url });
  if (crumbs.length > 1) {
    graph.push({
      '@type': 'BreadcrumbList',
      itemListElement: crumbs.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: c.item }))
    });
  }

  const qa = faqs(html);
  if (qa.length) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${url}#faq`,
      inLanguage: locale,
      mainEntity: qa.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } }))
    });
  }

  if (SOFTWARE_PAGES.has(route)) {
    graph.push({
      '@type': 'SoftwareApplication',
      '@id': `${SITE_URL}/#software`,
      name: ORG.name,
      alternateName: ORG.alternateName,
      applicationCategory: 'BusinessApplication',
      applicationSubCategory: 'AI agents for customer conversations',
      operatingSystem: 'Web, iOS, Android',
      url: home,
      description: ar ? ENTITY.ar : ENTITY.en,
      inLanguage: ['ar', 'en'],
      publisher: { '@id': `${SITE_URL}/#organization` }
    });
  }

  const emp = EMPLOYEES[route];
  if (emp) {
    const [name, description] = ar ? emp.ar : emp.en;
    graph.push({
      '@type': 'Service',
      '@id': `${url}#service`,
      name,
      description,
      serviceType: emp.type,
      url,
      inLanguage: locale,
      areaServed: [{ '@type': 'Place', name: 'Middle East and North Africa' }],
      availableChannel: ['WhatsApp', 'Instagram', 'Messenger', 'Website chat'].map((n) => ({ '@type': 'ServiceChannel', name: n })),
      provider: { '@id': `${SITE_URL}/#organization` }
    });
  }

  if (route.startsWith('/blog/')) {
    // Author and date come from the English byline so both locales share one dateline.
    const meta = en.match(/<div class="p-meta">([\s\S]*?)<\/div>/)?.[1] ?? '';
    const [, author = '', date = ''] = meta.split(/<span class="(?:av|dot)">[\s\S]*?<\/span>|<span class="dot"><\/span>/).map(strip);
    const published = date && !Number.isNaN(Date.parse(date)) ? new Date(`${date} 12:00 UTC`).toISOString().slice(0, 10) : undefined;
    graph.push({
      '@type': 'BlogPosting',
      '@id': `${url}#article`,
      headline: title,
      inLanguage: locale,
      mainEntityOfPage: url,
      image: `${SITE_URL}/og/${locale}/${route.slice(1).replace(/\//g, '-')}.jpg`,
      ...(published ? { datePublished: published, dateModified: published } : {}),
      ...(author ? { author: { '@type': 'Person', name: author } } : {}),
      publisher: { '@id': `${SITE_URL}/#organization` }
    });
  }

  return graph.length ? { '@context': 'https://schema.org', '@graph': graph } : null;
}
