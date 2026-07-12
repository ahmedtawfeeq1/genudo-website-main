import { setRequestLocale } from 'next-intl/server';
import homeHtml from '@/legacy-html/home';
import LegacyScripts from '@/components/LegacyScripts';
import { pageMetadata } from '@/i18n/seo';

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

  return (
    <>
      <div className="legacy-page" dangerouslySetInnerHTML={{ __html: homeHtml }} />
      <LegacyScripts scripts={['/genu/genu-robot.js', '/js/site2.js', '/js/concept.js', '/js/hero.js']} />
    </>
  );
}
