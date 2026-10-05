import { setRequestLocale } from 'next-intl/server';
import { pageMetadata } from '@/i18n/seo';
import { Shell, lang } from '@/components/LegalPages';

export const generateMetadata = pageMetadata({ route: '/legal/privacy-history', seoKey: 'privacyHistory' });

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const ar = lang(locale) === 'ar';
  const rows = ar
    ? [['5 أكتوبر 2026', 'سياسة الخصوصية', 'تحديث قائمة المعالجين الفرعيين (الاستضافة، ومزوّدو نماذج الذكاء الاصطناعي، وقنوات المراسلة، ومعالجة المدفوعات)، ونشر النسختين العربية والإنجليزية على الموقع الجديد.'],
       ['30 نوفمبر 2025', 'سياسة الخصوصية وشروط الخدمة', 'الإصدار السابق. شروط الخدمة الحالية هي إصدار 30 نوفمبر 2025.']]
    : [['5 October 2026', 'Privacy Policy', 'Sub-processor list updated (hosting, AI model providers, messaging channels, payment processing). Published in English and Arabic on the new website.'],
       ['30 November 2025', 'Privacy Policy and Terms of Service', 'Previous version. The current Terms of Service are the 30 November 2025 version.']];
  return (
    <Shell locale={locale} route="/legal/privacy-history" title={ar ? 'سجل تحديثات الوثائق القانونية' : 'Legal document history'}
      intro={ar ? 'التغييرات الجوهرية على سياسة الخصوصية وشروط الخدمة، من الأحدث إلى الأقدم.' : 'Material changes to our Privacy Policy and Terms of Service, newest first.'}>
      <div className="legal-body">
        <div className="legal-table">
          <table>
            <thead><tr><th>{ar ? 'التاريخ' : 'Date'}</th><th>{ar ? 'الوثيقة' : 'Document'}</th><th>{ar ? 'التغيير' : 'Change'}</th></tr></thead>
            <tbody>{rows.map((r) => <tr key={r[0] + r[1]}><td>{r[0]}</td><td>{r[1]}</td><td>{r[2]}</td></tr>)}</tbody>
          </table>
        </div>
        <p><a href={`/${locale}/legal/privacy-policy`}>{ar ? 'سياسة الخصوصية' : 'Privacy Policy'}</a> · <a href={`/${locale}/legal/terms-of-service`}>{ar ? 'شروط الخدمة' : 'Terms of Service'}</a></p>
      </div>
    </Shell>
  );
}
