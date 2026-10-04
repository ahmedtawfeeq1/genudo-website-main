import { setRequestLocale } from 'next-intl/server';
import en from '@/legacy-html/sol-operations';
import ar from '@/legacy-html/sol-operations.ar-EG';
import LegacyBody from '@/components/LegacyBody';
import LegacyScripts from '@/components/LegacyScripts';
import BodyNav from '@/components/BodyNav';
import { pageMetadata } from '@/i18n/seo';
import '@/styles/pages/sol-operations.css';

export const generateMetadata = pageMetadata({ route: '/sol-operations', seoKey: 'solOperations' });

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <BodyNav value="solutions" />
      <LegacyBody locale={locale} en={en} ar={ar} />
      <LegacyScripts scripts={["/genu/genu-robot.js"]} />
    </>
  );
}
