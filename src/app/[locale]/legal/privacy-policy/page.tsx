import { setRequestLocale } from 'next-intl/server';
import LegalDoc from '@/components/LegalDoc';
import { pageMetadata } from '@/i18n/seo';

export const generateMetadata = pageMetadata({ route: '/legal/privacy-policy', seoKey: 'privacyPolicy' });

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <LegalDoc locale={locale} doc="privacy-policy" route="/legal/privacy-policy" />;
}
