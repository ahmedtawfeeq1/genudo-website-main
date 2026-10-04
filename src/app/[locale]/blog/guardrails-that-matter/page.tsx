import { setRequestLocale } from 'next-intl/server';
import en from '@/legacy-html/blog-guardrails-that-matter';
import ar from '@/legacy-html/blog-guardrails-that-matter.ar-EG';
import LegacyBody from '@/components/LegacyBody';
import LegacyScripts from '@/components/LegacyScripts';
import BodyNav from '@/components/BodyNav';
import { pageMetadata } from '@/i18n/seo';
import '@/styles/pages/blog.css';

export const generateMetadata = pageMetadata({ route: '/blog/guardrails-that-matter', seoKey: 'blogGuardrailsThatMatter' });

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <BodyNav value="resources" />
      <LegacyBody locale={locale} en={en} ar={ar} />
      <LegacyScripts scripts={["/genu/genu-robot.js"]} />
    </>
  );
}
