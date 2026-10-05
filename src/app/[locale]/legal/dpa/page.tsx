import { setRequestLocale } from 'next-intl/server';
import { pageMetadata } from '@/i18n/seo';
import { Shell, Html, lang, DocumentRequestForm } from '@/components/LegalPages';
import { extract } from '@/components/LegalDoc';

export const generateMetadata = pageMetadata({ route: '/legal/dpa', seoKey: 'dpa' });

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const ar = lang(locale) === 'ar';
  return (
    <Shell locale={locale} route="/legal/dpa" title={ar ? 'اتفاقية معالجة البيانات (DPA)' : 'Data Processing Agreement (DPA)'}
      intro={ar ? 'نوفّر اتفاقية معالجة البيانات لعملائنا من الشركات عند الطلب. املأ النموذج وسنرسلها إليك.' : 'We provide our Data Processing Agreement to business customers on request. Fill in the form and we will send it to you.'}>
      <DocumentRequestForm locale={locale} doc="dpa" />
      <Html html={extract('terms-of-service', ar ? 'ar' : 'en', 3, '5.3 Data Processing Agreement')} />
    </Shell>
  );
}
