import { setRequestLocale } from 'next-intl/server';
import en from '@/legacy-html/pricing';
import ar from '@/legacy-html/pricing.ar-EG';
import LegacyBody from '@/components/LegacyBody';
import LegacyScripts from '@/components/LegacyScripts';
import BodyNav from '@/components/BodyNav';
import { pageMetadata } from '@/i18n/seo';
import { getPackages, plansHtml, addonsHtml, compareHtml } from '@/lib/packages';
import '@/styles/pages/pricing.css';

// Plans come live from the admin API (src/lib/packages.ts); keep in sync with REVALIDATE there.
export const revalidate = 600;

export const generateMetadata = pageMetadata({ route: '/pricing', seoKey: 'pricing' });

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const pkgs = await getPackages();
  const fill = (html: string, ar: boolean) =>
    html.replace('<!--PLANS-->', plansHtml(pkgs, ar)).replace('<!--ADDONS-->', addonsHtml(pkgs, ar)).replace('<!--COMPARE-->', compareHtml(pkgs, ar));
  return (
    <>
      <BodyNav value="pricing" />
      <LegacyBody locale={locale} route="/pricing" en={fill(en, false)} ar={fill(ar, true)} />
      <LegacyScripts scripts={["/genu/genu-robot.js"]} />
    </>
  );
}
