import { setRequestLocale } from 'next-intl/server';
import en from '@/legacy-html/pricing';
import ar from '@/legacy-html/pricing.ar-EG';
import LegacyBody from '@/components/LegacyBody';
import LegacyScripts from '@/components/LegacyScripts';
import BodyNav from '@/components/BodyNav';
import { pageMetadata } from '@/i18n/seo';
import '@/styles/pages/pricing.css';

export const generateMetadata = pageMetadata({ route: '/pricing', seoKey: 'pricing' });

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <BodyNav value="pricing" />
      <LegacyBody locale={locale} route="/pricing" en={en} ar={ar} />
      <LegacyScripts scripts={["/genu/genu-robot.js"]} />
    </>
  );
}
