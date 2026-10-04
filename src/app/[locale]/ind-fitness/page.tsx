import { setRequestLocale } from 'next-intl/server';
import en from '@/legacy-html/ind-fitness';
import ar from '@/legacy-html/ind-fitness.ar-EG';
import LegacyBody from '@/components/LegacyBody';
import LegacyScripts from '@/components/LegacyScripts';
import BodyNav from '@/components/BodyNav';
import { pageMetadata } from '@/i18n/seo';
import '@/styles/pages/ind-fitness.css';

export const generateMetadata = pageMetadata({ route: '/ind-fitness', seoKey: 'indFitness' });

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <BodyNav value="solutions" />
      <LegacyBody locale={locale} en={en} ar={ar} />
      <LegacyScripts scripts={['/genu/genu-robot.js', '/js/concept.js']} />
    </>
  );
}
