import { setRequestLocale } from 'next-intl/server';
import en from '@/legacy-html/security';
import ar from '@/legacy-html/security.ar-EG';
import LegacyBody from '@/components/LegacyBody';
import LegacyScripts from '@/components/LegacyScripts';
import BodyNav from '@/components/BodyNav';
import { pageMetadata } from '@/i18n/seo';
import '@/styles/pages/security.css';

export const generateMetadata = pageMetadata({ route: '/security', seoKey: 'security' });

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <BodyNav value="security" />
      <LegacyBody locale={locale} route="/security" en={en} ar={ar} />
      <LegacyScripts scripts={["/genu/genu-robot.js","/js/concept.js"]} />
    </>
  );
}
