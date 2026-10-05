// Validates JSON-LD on a running site: every page parses, has Organization + WebSite,
// a BreadcrumbList on inner pages, and FAQPage entries match the visible FAQ count.
// Usage: node scripts/check-jsonld.mjs http://localhost:3199
const base = process.argv[2] ?? 'http://localhost:3000';
const sm = await (await fetch(`${base}/sitemap.xml`)).text();
const routes = [...sm.matchAll(/<loc>[^<]*\/en([^<]*)<\/loc>/g)].map((m) => m[1]);
let bad = 0;
for (const loc of ['en', 'ar-EG']) for (const r of routes) {
  const html = await (await fetch(`${base}/${loc}${r}`)).text();
  const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => JSON.parse(m[1]));
  const types = blocks.flatMap((b) => (b['@graph'] ?? [b]).map((n) => n['@type']));
  const faqVisible = (html.match(/<details class="faq-item"/g) ?? []).length;
  const faqLd = blocks.flatMap((b) => b['@graph'] ?? []).find((n) => n['@type'] === 'FAQPage')?.mainEntity?.length ?? 0;
  const problems = [];
  if (!types.includes('Organization') || !types.includes('WebSite')) problems.push('no org/site');
  if (r && !types.includes('BreadcrumbList')) problems.push('no breadcrumb');
  if (faqVisible !== faqLd) problems.push(`faq ${faqLd}/${faqVisible}`);
  if (problems.length) { bad++; console.log(`${loc}${r || '/'}: ${problems.join(', ')} [${types.join(' ')}]`); }
}
console.log(`${routes.length * 2} pages checked, ${bad} with problems`);
process.exit(bad ? 1 : 0);
