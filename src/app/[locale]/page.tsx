import { setRequestLocale } from 'next-intl/server';
import en from '@/legacy-html/home';
import ar from '@/legacy-html/home.ar-EG';
import LegacyBody from '@/components/LegacyBody';
import { pageMetadata } from '@/i18n/seo';
import '@/styles/pages/home.css';

/**
 * HOME (/) — value-led rewrite (EN + ar-EG). See docs/website/BUILD-BRIEF.md.
 *
 * The body is static markup (hero, the 2 a.m. problem, five value pillars with
 * kit mockups, the AI team, 3 steps, industries, the film, final CTA). It needs
 * no page scripts: the old hero/concept/site2/robot scripts drove elements that
 * no longer exist, so LegacyScripts is not mounted. Motion is pure CSS.
 */
export const generateMetadata = pageMetadata({ route: '/', seoKey: 'home' });

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <LegacyBody locale={locale} en={en} ar={ar} />;
}
