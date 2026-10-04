import { setRequestLocale } from 'next-intl/server';
import en from '@/legacy-html/api-mcp';
import ar from '@/legacy-html/api-mcp.ar-EG';
import LegacyBody from '@/components/LegacyBody';
import LegacyScripts from '@/components/LegacyScripts';
import BodyNav from '@/components/BodyNav';
import { pageMetadata } from '@/i18n/seo';
import '@/styles/pages/api-mcp.css';

export const generateMetadata = pageMetadata({ route: '/api-mcp', seoKey: 'apiMcp' });

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <BodyNav value="resources" />
      <LegacyBody locale={locale} en={en} ar={ar} />
      <LegacyScripts scripts={["/genu/genu-robot.js","/js/concept.js"]} />
    </>
  );
}
