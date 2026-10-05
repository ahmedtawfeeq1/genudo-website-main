import { setRequestLocale } from 'next-intl/server';
import { pageMetadata } from '@/i18n/seo';
import { Shell, Html, lang } from '@/components/LegalPages';
import { extract, load, render } from '@/components/LegalDoc';

export const generateMetadata = pageMetadata({ route: '/legal/cookies', seoKey: 'cookiePolicy' });

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const ar = lang(locale) === 'ar';
  const { updated } = render(load('privacy-policy', ar ? 'ar' : 'en') ?? '');
  return (
    <Shell locale={locale} route="/legal/cookies" title={ar ? 'سياسة ملفات تعريف الارتباط' : 'Cookie Policy'} updated={updated}
      intro={ar ? <>تعرض هذه الصفحة قسم ملفات تعريف الارتباط من <a href={`/${locale}/legal/privacy-policy`}>سياسة الخصوصية</a>.</> : <>This page sets out the cookies section of our <a href={`/${locale}/legal/privacy-policy`}>Privacy Policy</a>.</>}>
      <Html html={extract('privacy-policy', ar ? 'ar' : 'en', 2, 'COOKIES AND TRACKING')} />
    </Shell>
  );
}
