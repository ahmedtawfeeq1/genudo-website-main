// /ai-workforce — pillar guide: "What is an AI workforce / AI employee?" (EN + ar-EG).
// GEO target page (see docs/seo/GEO-STRATEGY.md §3). The ar-EG body is the primary version.
import { setRequestLocale } from 'next-intl/server';
import en from '@/legacy-html/ai-workforce';
import ar from '@/legacy-html/ai-workforce.ar-EG';
import LegacyBody from '@/components/LegacyBody';
import LegacyScripts from '@/components/LegacyScripts';
import BodyNav from '@/components/BodyNav';
import { pageMetadata } from '@/i18n/seo';
import '@/styles/pages/ai-workforce.css';

export const generateMetadata = pageMetadata({ route: '/ai-workforce', seoKey: 'aiWorkforce' });

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <BodyNav value="resources" />
      <LegacyBody locale={locale} route="/ai-workforce" en={en} ar={ar} />
      <LegacyScripts scripts={['/genu/genu-robot.js']} />
    </>
  );
}
