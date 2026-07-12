// AUTO-GENERATED reference route (island bootstrap). Review + componentize per MIGRATION-GUIDE.md.
import { setRequestLocale } from 'next-intl/server';
import html from '@/legacy-html/use-cases';
import LegacyScripts from '@/components/LegacyScripts';
import BodyNav from '@/components/BodyNav';
import { pageMetadata } from '@/i18n/seo';

export const generateMetadata = pageMetadata({ route: '/use-cases', seoKey: 'useCases' });

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <BodyNav value="solutions" />
      <div className="legacy-page" dangerouslySetInnerHTML={{ __html: html }} />
      <LegacyScripts scripts={["/genu/genu-robot.js","/js/concept.js"]} />
    </>
  );
}
