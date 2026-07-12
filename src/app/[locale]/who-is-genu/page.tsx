import { setRequestLocale } from 'next-intl/server';
import whoIsGenuHtml from '@/legacy-html/who-is-genu';
import LegacyScripts from '@/components/LegacyScripts';
import BodyNav from '@/components/BodyNav';
import { pageMetadata } from '@/i18n/seo';

/**
 * WHO IS GENU — reference conversion of the narrated, animated scroll page.
 *
 * The whole experience is JS-driven (flying avatar, welcome overlay, narration,
 * the dark-glass header theme). We keep it identical by rendering the original
 * markup + page-scoped styles and mounting genu-robot.js + who-is-genu.js.
 * <BodyNav> restores <body data-nav="whoisgenu"> that the header styling needs.
 */
export const generateMetadata = pageMetadata({ route: '/who-is-genu', seoKey: 'whoIsGenu' });

export default async function WhoIsGenuPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <BodyNav value="whoisgenu" />
      <div className="legacy-page" dangerouslySetInnerHTML={{ __html: whoIsGenuHtml }} />
      <LegacyScripts scripts={['/genu/genu-robot.js', '/js/concept.js', '/js/who-is-genu.js']} />
    </>
  );
}
