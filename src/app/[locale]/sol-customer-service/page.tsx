import { setRequestLocale } from 'next-intl/server';
import en from '@/legacy-html/sol-customer-service';
import ar from '@/legacy-html/sol-customer-service.ar-EG';
import LegacyBody from '@/components/LegacyBody';
import LegacyScripts from '@/components/LegacyScripts';
import BodyNav from '@/components/BodyNav';
import { pageMetadata } from '@/i18n/seo';
import '@/styles/pages/sol-customer-service.css';

export const generateMetadata = pageMetadata({ route: '/sol-customer-service', seoKey: 'solCustomerService' });

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <BodyNav value="solutions" />
      <LegacyBody locale={locale} route="/sol-customer-service" en={en} ar={ar} />
      <LegacyScripts scripts={["/genu/genu-robot.js","/js/concept.js"]} />
    </>
  );
}
