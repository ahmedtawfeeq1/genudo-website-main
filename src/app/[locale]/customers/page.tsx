import { setRequestLocale } from 'next-intl/server';
import en from '@/legacy-html/customers';
import ar from '@/legacy-html/customers.ar-EG';
import LegacyBody from '@/components/LegacyBody';
import LegacyScripts from '@/components/LegacyScripts';
import BodyNav from '@/components/BodyNav';
import { pageMetadata } from '@/i18n/seo';
import '@/styles/pages/customers.css';

export const generateMetadata = pageMetadata({ route: '/customers', seoKey: 'customers' });

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <BodyNav value="customers" />
      <LegacyBody locale={locale} route="/customers" en={en} ar={ar} />
      <LegacyScripts scripts={["/genu/genu-robot.js","/js/concept.js"]} />
    </>
  );
}
