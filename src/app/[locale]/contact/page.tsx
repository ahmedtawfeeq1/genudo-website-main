import { setRequestLocale } from 'next-intl/server';
import en from '@/legacy-html/contact';
import ar from '@/legacy-html/contact.ar-EG';
import LegacyBody from '@/components/LegacyBody';
import LegacyScripts from '@/components/LegacyScripts';
import { pageMetadata } from '@/i18n/seo';
import '@/styles/pages/contact.css';

export const generateMetadata = pageMetadata({ route: '/contact', seoKey: 'contact' });

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <LegacyBody locale={locale} route="/contact" en={en} ar={ar} />
      <LegacyScripts scripts={["/genu/genu-robot.js", "/js/forms.js"]} />
    </>
  );
}
