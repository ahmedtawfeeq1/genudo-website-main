import { setRequestLocale } from 'next-intl/server';
import en from '@/legacy-html/who-is-genu';
import ar from '@/legacy-html/who-is-genu.ar-EG';
import LegacyBody from '@/components/LegacyBody';
import LegacyScripts from '@/components/LegacyScripts';
import BodyNav from '@/components/BodyNav';
import { pageMetadata } from '@/i18n/seo';
import '@/styles/pages/who-is-genu.css';

/**
 * WHO IS GENU — value-led rewrite (EN + ar-EG). See docs/website/BUILD-BRIEF.md.
 *
 * GENU (the film-rig character) introduces the AI workforce: the GENU family
 * (Aaref, Adnan, ROZ), five narrated "how it works with you" steps built from the
 * mockup kit, the AI-workforce film, the character's poses, and a CTA.
 * who-is-genu.js reads the narration lines from the markup, so both locales narrate
 * in their own language. The page no longer uses the legacy genu-robot.js rig.
 */
export const generateMetadata = pageMetadata({ route: '/who-is-genu', seoKey: 'whoIsGenu' });

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <BodyNav value="whoisgenu" />
      <LegacyBody locale={locale} route="/who-is-genu" en={en} ar={ar} />
      <LegacyScripts scripts={['/js/who-is-genu.js']} />
    </>
  );
}
