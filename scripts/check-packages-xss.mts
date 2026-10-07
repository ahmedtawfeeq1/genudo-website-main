// Self-check: admin API data must never inject markup into /pricing. Run: npx tsx --tsconfig tsconfig.json scripts/check-packages-xss.mts
import assert from 'node:assert';
const mod = await import('../src/lib/packages.ts');
const evil = '<img src=x onerror=alert(1)>';
const pkgs = [{ id: 1, type: 'subscription', is_active: true, order: 1, price: evil, currency_code: 'EGP', title: evil, description: evil,
  benefits: [{ benefit: 'subscription', value: evil }, { benefit: 'pipelines', value: evil }, { benefit: 'support', value: evil }],
  features: [{ name: evil, translations: [{ language_id: 2, name: evil }] }] },
  { id: 2, type: 'topup', is_active: true, order: 2, price: evil, currency_code: 'EGP', title: evil, description: evil,
  benefits: [{ benefit: 'credit', value: evil }], features: [] }];
for (const ar of [false, true]) for (const fn of [mod.plansHtml, mod.addonsHtml, mod.compareHtml]) {
  const html = fn(pkgs as any, ar);
  assert(!html.includes('<img'), `${fn.name} ar=${ar} leaked markup`);
}
console.log('no markup leaks');
