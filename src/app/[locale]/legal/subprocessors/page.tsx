import { setRequestLocale } from 'next-intl/server';
import { pageMetadata } from '@/i18n/seo';
import { Shell, Html, lang, SUBPROCESSORS } from '@/components/LegalPages';
import { extract, load, render } from '@/components/LegalDoc';

export const generateMetadata = pageMetadata({ route: '/legal/subprocessors', seoKey: 'subprocessors' });

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const ar = lang(locale) === 'ar';
  const { updated } = render(load('privacy-policy', ar ? 'ar' : 'en') ?? '');
  return (
    <Shell locale={locale} route="/legal/subprocessors" title={ar ? 'المعالجون الفرعيون' : 'Sub-processors'} updated={updated}
      intro={ar ? 'مزوّدو الخدمات من الأطراف الثالثة الذين قد يعالجون البيانات الشخصية نيابةً عن جينـو دو لتقديم الخدمة.' : 'Third-party service providers that may process personal data on behalf of GenuDo to provide the Service.'}>
      <div className="legal-body">
        <div className="legal-table">
          <table>
            <thead><tr><th>{ar ? 'المعالج الفرعي' : 'Sub-processor'}</th><th>{ar ? 'الغرض' : 'Purpose'}</th></tr></thead>
            <tbody>{SUBPROCESSORS.map((s) => <tr key={s.name}><td dir="ltr">{s.name}</td><td>{ar ? s.ar : s.en}</td></tr>)}</tbody>
          </table>
        </div>
      </div>
      <Html html={extract('terms-of-service', ar ? 'ar' : 'en', 3, '5.9 Sub-Processors')} />
    </Shell>
  );
}
