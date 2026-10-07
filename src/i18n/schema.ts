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

const EMPLOYEES: Record<string, { en: [string, string]; ar: [string, string]; type: string; channels: string[] }> = {
  '/sol-sales-agent': {
    type: 'AI sales employee',
    channels: ['WhatsApp', 'Instagram', 'Messenger', 'Website chat'],
    en: ['Aaref, AI sales employee', 'Answers every lead in seconds and follows up until it becomes a sale: a booking, a registration, a store order, a request for your team or a qualified lead. Stages move by the rules you set.'],
    ar: ['عارف، موظف مبيعات بالذكاء الاصطناعي', 'بيرد على كل عميل محتمل في ثواني، ويتابع معاه لحد ما يتحوّل لبيع: حجز أو تسجيل أو أوردر في متجرك أو طلب لفريقك أو عميل مؤهَّل. والمراحل بتتحرك حسب القواعد اللي إنت حددتها.']
  },
  '/sol-customer-service': {
    type: 'AI customer service and success employee',
    channels: ['WhatsApp', 'Instagram', 'Messenger', 'Website chat'],
    en: ['Adnan, AI customer service & success employee', 'Answers customers instantly from your own information, handles routine requests by your policy, sets up new customers, keeps them, and hands over to your team with context.'],
    ar: ['عدنان، موظف خدمة ونجاح العملاء بالذكاء الاصطناعي', 'بيرد على عملائك فورًا من معلومات شركتك، وبينفّذ الطلبات الروتينية حسب سياستك، وبيستقبل العملاء الجدد ويحافظ عليهم، وبيحوّل لفريقك ومعاه السياق.']
  },
  '/sol-operations': {
    type: 'AI quality control employee',
    channels: ['WhatsApp'],
    en: ['Roz, AI quality control employee', "Linked to your company WhatsApp numbers with one QR scan, covering chats and groups. Ask her about any conversation in Claude or ChatGPT, get scheduled reports, and see who waited and what stalled. She never replies to customers."],
    ar: ['روز، موظفة مراقبة الجودة بالذكاء الاصطناعي', 'متربطة بأرقام WhatsApp الشركة بمسح كود QR واحد، للمحادثات والجروبات. اسألها عن أي محادثة من Claude أو ChatGPT، واستلم تقارير في مواعيدها، واعرف مين استنى وإيه اللي وقف. ومبتردش على العملاء.']
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
      availableChannel: emp.channels.map((n) => ({ '@type': 'ServiceChannel', name: n })),
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
      image: `${SITE_URL}/og/${locale}/${route.slice(1).replace(/\//g, '-')}.jpg?v=20261007`,
      ...(published ? { datePublished: published, dateModified: published } : {}),
      ...(author ? { author: { '@type': 'Person', name: author } } : {}),
      publisher: { '@id': `${SITE_URL}/#organization` }
    });
  }

  return graph.length ? { '@context': 'https://schema.org', '@graph': graph } : null;
}
