import { setRequestLocale } from 'next-intl/server';
import { pageMetadata } from '@/i18n/seo';
import { Shell, lang, PrivacyRequestForm } from '@/components/LegalPages';

export const generateMetadata = pageMetadata({ route: '/privacy/requests', seoKey: 'privacyRequests' });

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const ar = lang(locale) === 'ar';
  return (
    <Shell locale={locale} route="/privacy/requests" title={ar ? 'طلبات أصحاب البيانات' : 'Data subject requests'}
      intro={ar ? <>استخدم هذا النموذج لممارسة حقوقك في حماية البيانات، مثل الاطلاع على بياناتك أو تصحيحها أو حذفها. يمكنك أيضًا مراسلة مسؤول حماية البيانات على <a href="mailto:dpo@genudo.ai">dpo@genudo.ai</a>. التفاصيل في <a href={`/${locale}/legal/privacy-policy`}>سياسة الخصوصية</a>.</> : <>Use this form to exercise your data protection rights, such as accessing, correcting or deleting your data. You can also email our Data Protection Officer at <a href="mailto:dpo@genudo.ai">dpo@genudo.ai</a>. Details are in our <a href={`/${locale}/legal/privacy-policy`}>Privacy Policy</a>.</>}>
      <PrivacyRequestForm locale={locale} />
    </Shell>
  );
}
