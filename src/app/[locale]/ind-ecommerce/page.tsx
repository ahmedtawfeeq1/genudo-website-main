import { setRequestLocale } from 'next-intl/server';
import en from '@/legacy-html/ind-ecommerce';
import ar from '@/legacy-html/ind-ecommerce.ar-EG';
import LegacyBody from '@/components/LegacyBody';
import LegacyScripts from '@/components/LegacyScripts';
import BodyNav from '@/components/BodyNav';
import { pageMetadata } from '@/i18n/seo';
import '@/styles/pages/ind-ecommerce.css';

export const generateMetadata = pageMetadata({ route: '/ind-ecommerce', seoKey: 'indEcommerce' });

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <BodyNav value="solutions" />
      <LegacyBody locale={locale} route="/ind-ecommerce" en={en} ar={ar} />
      <LegacyScripts scripts={["/genu/genu-robot.js", "/js/concept.js"]} />
    </>
  );
}
