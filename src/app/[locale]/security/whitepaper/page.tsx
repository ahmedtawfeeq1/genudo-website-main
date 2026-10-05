import { setRequestLocale } from 'next-intl/server';
import { pageMetadata } from '@/i18n/seo';
import { Shell, lang, DocumentRequestForm } from '@/components/LegalPages';

export const generateMetadata = pageMetadata({ route: '/security/whitepaper', seoKey: 'securityWhitepaper' });

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const ar = lang(locale) === 'ar';
  return (
    <Shell locale={locale} route="/security/whitepaper" title={ar ? 'الورقة البيضاء للأمان' : 'Security whitepaper'}
      intro={ar ? <>تشرح الورقة البيضاء ضوابط الأمان التقنية والتنظيمية في جينـو دو. نشاركها مع العملاء والعملاء المحتملين عند الطلب. للاطلاع على ملخص، راجع <a href={`/${locale}/security`}>صفحة الثقة والأمان</a>.</> : <>Our security whitepaper explains GenuDo&rsquo;s technical and organisational security controls. We share it with customers and prospects on request. For a summary, see <a href={`/${locale}/security`}>Trust &amp; Security</a>.</>}>
      <DocumentRequestForm locale={locale} doc="security_whitepaper" />
    </Shell>
  );
}
