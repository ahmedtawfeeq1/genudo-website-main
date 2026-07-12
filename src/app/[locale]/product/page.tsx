// AUTO-GENERATED reference route (island bootstrap). Review + componentize per MIGRATION-GUIDE.md.
import { setRequestLocale } from 'next-intl/server';
import html from '@/legacy-html/product';
import LegacyScripts from '@/components/LegacyScripts';
import { pageMetadata } from '@/i18n/seo';

export const generateMetadata = pageMetadata({ route: '/product', seoKey: 'product' });

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <div className="legacy-page" dangerouslySetInnerHTML={{ __html: html }} />
      <LegacyScripts scripts={["/genu/genu-robot.js","/js/site2.js"]} />
    </>
  );
}
