import { setRequestLocale } from 'next-intl/server';
import homeHtml from '@/legacy-html/home';
import homeArEG from '@/legacy-html/home.ar-EG';
import LegacyScripts from '@/components/LegacyScripts';
import { pageMetadata } from '@/i18n/seo';

// Translated body twins per locale. When a locale has one, the body renders
// RTL-Arabic (marketing translated; app-UI mockups inside stay dir="ltr" English).
// Otherwise the original English body renders (LTR fallback).
const TWINS: Record<string, string> = { 'ar-EG': homeArEG };

/**
 * HOME — reference conversion.
 *
 * The page shell (nav + footer) is real React chrome from the layout. The page
 * body is the original homepage markup, server-rendered as-is so the UI is
 * pixel-identical, with its animation scripts mounted afterwards. This is the
 * migration bootstrap: replace the island section-by-section with real React
 * components wired to next-intl messages (see MIGRATION-GUIDE.md).
 */
export const generateMetadata = pageMetadata({ route: '/', seoKey: 'home' });

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const twin = TWINS[locale];
  return (
    <>
      <div
        className={`legacy-page${twin ? ' legacy-rtl' : ''}`}
        dangerouslySetInnerHTML={{ __html: twin ?? homeHtml }}
      />
      <LegacyScripts scripts={['/genu/genu-robot.js', '/js/site2.js', '/js/concept.js', '/js/hero.js']} />
    </>
  );
}
