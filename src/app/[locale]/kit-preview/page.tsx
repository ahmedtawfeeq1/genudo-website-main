// /kit-preview — INTERNAL preview of the shared product-UI mockup kit (src/styles/mockups.css).
// Not in the nav, not in the sitemap, noindex. EN snippets on /en, AR (RTL) snippets on /ar-*.
// Snippet source: ./kit-snippets.ts (also mirrored in docs/website/MOCKUP-KIT.md).
import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import LegacyBody from '@/components/LegacyBody';
import snippets from './kit-snippets';
import '@/styles/pages/kit-preview.css';

export const metadata: Metadata = {
  title: 'Mockup kit preview',
  robots: { index: false, follow: false },
};

const AVATARS = [
  { file: 'genu.svg', en: 'GENU · mascot', ar: 'جينـو · الشخصية' },
  { file: 'aaref.svg', en: 'Aaref · Sales', ar: 'عارف · المبيعات' },
  { file: 'adnan.svg', en: 'Adnan · Support', ar: 'عدنان · خدمة العملاء' },
  { file: 'roz-v2.svg', en: 'ROZ · Quality', ar: 'روز · مراقبة الجودة' },
];

function build(lang: 'en' | 'ar'): string {
  const ar = lang === 'ar';
  const avatars = AVATARS.map(
    (a) =>
      `<figure class="pg-kit-preview__av"><img src="/media/img/${a.file}" alt="" width="120" height="131"><figcaption>${ar ? a.ar : a.en}<code>/media/img/${a.file}</code></figcaption></figure>`,
  ).join('');
  const sections = snippets
    .map(
      (s) => `<section class="pg-kit-preview__sec" id="${s.id}">
  <div class="pg-kit-preview__head"><h2>${s.title}</h2><code>#${s.id}</code></div>
  <p class="pg-kit-preview__note">${s.note}</p>
  <div class="pg-kit-preview__demo">
    <div class="pg-kit-preview__wide"><span class="pg-kit-preview__tag">fluid</span>${ar ? s.ar : s.en}</div>
    <div class="pg-kit-preview__narrow"><span class="pg-kit-preview__tag">360px</span>${ar ? s.ar : s.en}</div>
  </div>
</section>`,
    )
    .join('');
  const toc = snippets.map((s) => `<a href="#${s.id}">${s.title}</a>`).join('');
  return `<div class="pg-kit-preview">
  <header class="pg-kit-preview__top">
    <p class="pg-kit-preview__eyebrow">Internal · noindex</p>
    <h1>Product-UI mockup kit</h1>
    <p>Shared classes from <code>src/styles/mockups.css</code>. Copy-paste snippets: <code>docs/website/MOCKUP-KIT.md</code>. This page shows the ${ar ? 'Arabic (RTL)' : 'English'} snippets; switch locale to see the other set. Each component is shown fluid and in a 360px column.</p>
    <nav class="pg-kit-preview__toc">${toc}</nav>
  </header>
  <section class="pg-kit-preview__sec" id="avatars">
    <div class="pg-kit-preview__head"><h2>Avatars</h2><code>#avatars</code></div>
    <p class="pg-kit-preview__note">Static SVGs ported from the video rig (transparent, viewBox-based; aspect 216:236).</p>
    <div class="pg-kit-preview__avs">${avatars}</div>
  </section>
  ${sections}
</div>`;
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <LegacyBody locale={locale} en={build('en')} ar={build('ar')} />;
}
