import { setRequestLocale } from 'next-intl/server';
import en from '@/legacy-html/use-cases';
import ar from '@/legacy-html/use-cases.ar-EG';
import LegacyBody from '@/components/LegacyBody';
import LegacyScripts from '@/components/LegacyScripts';
import BodyNav from '@/components/BodyNav';
import { pageMetadata } from '@/i18n/seo';
import '@/styles/pages/use-cases.css';

export const generateMetadata = pageMetadata({ route: '/use-cases', seoKey: 'useCases' });

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <BodyNav value="solutions" />
      <LegacyBody locale={locale} route="/use-cases" en={en} ar={ar} />
      <LegacyScripts scripts={["/genu/genu-robot.js","/js/concept.js"]} />
    </>
  );
}
