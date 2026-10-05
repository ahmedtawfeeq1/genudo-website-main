import { setRequestLocale } from 'next-intl/server';
import LegalDoc from '@/components/LegalDoc';
import { pageMetadata } from '@/i18n/seo';

export const generateMetadata = pageMetadata({ route: '/legal/terms-of-service', seoKey: 'termsOfService' });

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <LegalDoc locale={locale} doc="terms-of-service" route="/legal/terms-of-service" />;
}
