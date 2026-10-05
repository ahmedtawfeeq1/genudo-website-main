// /how-it-works — value-framed product tour (EN + ar-EG). Replaces the dropped
// feature pages; their 301s land on the section ids in this body (see next.config.mjs).
import { setRequestLocale } from 'next-intl/server';
import en from '@/legacy-html/how-it-works';
import ar from '@/legacy-html/how-it-works.ar-EG';
import LegacyBody from '@/components/LegacyBody';
import LegacyScripts from '@/components/LegacyScripts';
import BodyNav from '@/components/BodyNav';
import { pageMetadata } from '@/i18n/seo';
import '@/styles/pages/how-it-works.css';

export const generateMetadata = pageMetadata({ route: '/how-it-works', seoKey: 'howItWorks' });

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <BodyNav value="product" />
      <LegacyBody locale={locale} route="/how-it-works" en={en} ar={ar} />
      <LegacyScripts scripts={['/genu/genu-robot.js']} />
    </>
  );
}
