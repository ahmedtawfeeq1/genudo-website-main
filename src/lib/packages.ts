/**
 * Live plans for /pricing, read from the GenuDo admin API: the same packages
 * app.genudo.ai/subscription sells. Change a price or feature in the admin and
 * the site follows within REVALIDATE seconds.
 *
 * The API gives prices, benefits (months, pipelines, support hours) and feature
 * lists. Rows of the comparison table that only exist as free text are kept in
 * STATIC_ROWS, keyed by plan length; update them when the packages change.
 * If the API is down, the build/render falls back to src/data/packages-snapshot.json.
 */
import snapshot from '@/data/packages-snapshot.json';

const API = 'https://api.genudo.ai/api/packages';
export const REVALIDATE = 600;
const SIGN_UP = 'https://app.genudo.ai/auth/register';
const EN = 1;
const AR = 2;

type Pkg = {
  id: number;
  type: string;
  is_active: boolean;
  order: number;
  price: string;
  currency_code: string;
  title: string;
  description: string | null;
  benefits: { benefit: string; value: number }[];
  features: { name: string; translations: { language_id: number; name: string }[] }[];
};

export async function getPackages(): Promise<Pkg[]> {
  try {
    const res = await fetch(API, { next: { revalidate: REVALIDATE }, signal: AbortSignal.timeout(8000) });
    if (!res.ok) throw new Error(`packages ${res.status}`);
    const json = await res.json();
    if (!Array.isArray(json?.data)) throw new Error('packages: no data');
    return json.data;
  } catch (err) {
    console.error('[pricing] using snapshot:', (err as Error).message);
    return snapshot as Pkg[];
  }
}

// Admin text goes into raw HTML, so escape it.
const esc = (s: unknown) =>
  String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);
const num = (n: number | string) => (Number.isFinite(Number(n)) ? Number(n).toLocaleString('en-US') : '—');
// Benefit values reach raw HTML unescaped, so accept finite numbers only.
const benefit = (p: Pkg, key: string) => {
  const v = Number(p.benefits.find((b) => b.benefit === key)?.value);
  return Number.isFinite(v) ? v : undefined;
};
const months = (p: Pkg) => benefit(p, 'subscription') ?? 0;
const cur = (ar: boolean) => (ar ? 'جنيه' : 'EGP');
const tr = (f: Pkg['features'][number], ar: boolean) =>
  f.translations.find((t) => t.language_id === (ar ? AR : EN))?.name || f.name;

const active = (pkgs: Pkg[], type: string) => pkgs.filter((p) => p.is_active && p.type === type).sort((a, b) => a.order - b.order);

const CHECK =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 7"/></svg>';
const YES = `<span class="yes">${CHECK.replace('stroke-width="2"', 'stroke-width="2.4"')}</span>`;

const AR_DESC: Record<number, string> = {
  6: 'مناسبة للشركات اللي بتبدأ مع موظفين الذكاء الاصطناعي.',
  12: 'مناسبة للشركات اللي بتكبر ومحتاجة إمكانيات أكتر.'
};
const planName = (p: Pkg, ar: boolean) => {
  if (!ar) return esc(p.title);
  const m = months(p);
  return m === 12 ? 'الباقة السنوية' : `باقة <bdi>${m}</bdi> شهور`;
};
const period = (m: number, ar: boolean) =>
  ar ? (m === 12 ? 'سنة' : `${m} شهور`) : m === 12 ? 'yr' : `${m} mo`;
const billing = (m: number, ar: boolean) =>
  ar
    ? `${m === 12 ? 'بتتدفع سنويًا' : `بتتدفع عن ${m} شهور`} · بالإضافة لضريبة القيمة المضافة <bdi>14%</bdi>`
    : `${m === 12 ? 'billed annually' : `billed every ${m} months`} · <bdi>+ 14%</bdi> VAT`;

export function plansHtml(pkgs: Pkg[], ar: boolean) {
  const plans = active(pkgs, 'subscription');
  const cards = plans.map((p) => {
    const desc = ar ? AR_DESC[months(p)] : p.description;
    return `<div class="plan">
      <div class="pn">${planName(p, ar)}</div>
      ${desc ? `<div class="pd">${esc(desc)}</div>` : ''}
      <div class="price"><span class="amt"><bdi>${num(p.price)}</bdi></span><span class="cur">${cur(ar)}</span></div>
      <div class="bill">${billing(months(p), ar)}</div>
      <a href="${SIGN_UP}" class="pbtn solid">${ar ? 'ابدأ دلوقتي' : 'Get started'}</a>
      <div class="inc">${ar ? 'الباقة فيها' : "What's included"}</div>
      <ul>${p.features.map((f) => `<li>${CHECK}${esc(tr(f, ar))}</li>`).join('')}</ul>
    </div>`;
  });
  return `<div class="plans">${cards.join('\n')}</div>`;
}

export function addonsHtml(pkgs: Pkg[], ar: boolean) {
  const items = active(pkgs, 'topup')
    .map((p) => {
      const pipelines = benefit(p, 'pipelines');
      const credit = benefit(p, 'credit');
      const label = pipelines
        ? ar ? 'موظف ومسار إضافي' : 'Extra AI employee &amp; pipeline'
        : ar ? `رصيد ذكاء اصطناعي <bdi>$${num(credit ?? 0)}</bdi>` : `<bdi>$${num(credit ?? 0)}</bdi> AI credits`;
      return { sort: pipelines ? -1 : credit ?? 0, html: `<div class="addon"><span>${label}</span><b><bdi>${num(p.price)}</bdi> ${cur(ar)}</b></div>` };
    })
    .sort((a, b) => a.sort - b.sort);
  if (!items.length) return '';
  return `<div class="addons">
    <div class="addons-head"><h3>${ar ? 'زوّد باقتك' : 'Add to any plan'}</h3><p>${
      ar ? 'ضيف موظف ومسار، أو اشحن رصيد ذكاء اصطناعي في أي وقت. الأسعار بالجنيه المصري.' : 'Add an AI employee and pipeline, or top up AI credits whenever you need. Prices in Egyptian pounds.'
    }</p></div>
    <div class="addon-list">${items.map((i) => i.html).join('')}</div>
  </div>`;
}

// Comparison rows the API only has as free text, by plan length in months.
type Cell = string | boolean;
const STATIC_ROWS: { group?: [string, string]; label: [string, string]; by: Record<number, Cell | [string, string]> }[] = [
  { label: ['Add extra employees', 'إضافة موظفين زيادة'], by: { 6: false, 12: true } },
  { label: ['Multi-employee teamwork', 'شغل جماعي بين الموظفين'], by: { 6: false, 12: true } },
  { group: ['Knowledge &amp; automation', 'المعرفة والأتمتة'], label: ['Knowledge rows', 'صفوف في قاعدة المعرفة'], by: { 6: '10,000', 12: '10,000+' } },
  { label: ['Automation tasks / month', 'مهام أتمتة في الشهر'], by: { 6: '500', 12: '1,000' } },
  { label: ['Active workflows', 'سير عمل نشط'], by: { 6: '3', 12: '15' } },
  { label: ['AI credits', 'رصيد الذكاء الاصطناعي'], by: { 6: ['140,000 / 6 mo', '140,000 لـ 6 شهور'], 12: ['280,000 / 12 mo', '280,000 لـ 12 شهر'] } },
  { group: ['Channels &amp; integrations', 'القنوات والتكاملات'], label: ['WhatsApp, Messenger, Instagram', 'WhatsApp و Messenger و Instagram'], by: { 6: true, 12: true } },
  { label: ['Deploy on unlimited websites', 'على عدد غير محدود من المواقع'], by: { 6: true, 12: true } },
  { label: ['API &amp; SDK access', 'وصول لـ API و SDK'], by: { 6: true, 12: true } },
  { group: ['Support', 'الدعم'], label: ['Unified inbox &amp; analytics', 'صندوق وارد موحّد وتحليلات'], by: { 6: true, 12: true } }
];

export function compareHtml(pkgs: Pkg[], ar: boolean) {
  const plans = active(pkgs, 'subscription');
  const i = ar ? 1 : 0;
  const cell = (v: Cell | [string, string] | undefined) =>
    v === true ? `<td>${YES}</td>` : v === false || v === undefined ? '<td class="no">—</td>' : Array.isArray(v) ? `<td><b>${v[i]}</b></td>` : `<td><b><bdi dir="ltr">${v}</bdi></b></td>`;
  const group = (label: string) => `<tr class="grouprow"><td colspan="${plans.length + 1}">${label}</td></tr>`;
  const row = (label: string, cells: string[]) => `<tr><td class="feat">${label}</td>${cells.join('')}</tr>`;

  const rows = [
    group(ar ? 'الموظفين والمسارات' : 'Employees &amp; pipelines'),
    row(ar ? 'موظفين الذكاء الاصطناعي والمسارات' : 'AI employees &amp; pipelines', plans.map((p) => cell(String(benefit(p, 'pipelines') ?? '—')))),
    ...STATIC_ROWS.flatMap((r) => [...(r.group ? [group(r.group[i])] : []), row(r.label[i], plans.map((p) => cell(r.by[months(p)])))]),
    row(ar ? 'ساعات الدعم الفني' : 'Technical support', plans.map((p) => cell(ar ? `${benefit(p, 'support') ?? 0} ساعة` : `${benefit(p, 'support') ?? 0} hrs`)))
  ];
  const head = plans
    .map((p) => `<th><div class="pn">${planName(p, ar)}</div><div class="pp"><bdi>${num(p.price)}</bdi> ${cur(ar)} · ${period(months(p), ar)}</div></th>`)
    .join('');
  return `<table class="cmp"><thead><tr><th class="feat"></th>${head}</tr></thead><tbody>${rows.join('\n')}</tbody></table>`;
}
