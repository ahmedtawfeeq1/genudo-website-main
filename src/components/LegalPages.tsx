import type { ReactNode } from 'react';
import LegacyScripts from '@/components/LegacyScripts';
import { pageJsonLd } from '@/i18n/schema';
import '@/styles/pages/legal.css';

/**
 * Shell + request forms for the legal hub pages (cookies, sub-processors,
 * version history, DPA, security whitepaper, data-subject requests).
 * Forms post through public/js/forms.js -> /api/forms -> n8n webhook.
 */
type L = 'en' | 'ar';
export const lang = (locale: string): L => (locale.startsWith('ar') ? 'ar' : 'en');

export function Shell({ locale, route, title, intro, updated, children }: { locale: string; route: string; title: string; intro?: ReactNode; updated?: string; children: ReactNode }) {
  const ar = lang(locale) === 'ar';
  const ld = pageJsonLd({ locale, route, html: `<h1>${title}</h1>`, en: '' });
  return (
    <div className={`legacy-page pg-legal${ar ? ' legacy-rtl' : ''}`} dir={ar ? 'rtl' : 'ltr'} lang={ar ? 'ar' : 'en'}>
      {ld && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld).replace(/</g, '\\u003c') }} />}
      <header className="legal-head">
        <div className="container">
          <h1>{title}</h1>
          {updated && <p className="legal-updated">{updated}</p>}
          {intro && <p className="legal-note">{intro}</p>}
        </div>
      </header>
      <div className="container legal-solo">{children}</div>
    </div>
  );
}

/** Repo-owned legal Markdown rendered at build time (trusted, not user input). */
export const Html = ({ html }: { html: string }) => <article className="legal-body" dangerouslySetInnerHTML={{ __html: html }} />;

const T = {
  en: {
    name: 'Full name', email: 'Email', workEmail: 'Work email', phone: 'Phone (optional)', company: 'Company', role: 'Your role (optional)',
    country: 'Country', details: 'Details', message: 'Anything we should know? (optional)', submit: 'Send request',
    sending: 'Sending…', err: "Sorry, that didn't go through. Please try again or email info@genudo.ai.",
    countries: ['Egypt', 'Saudi Arabia', 'United Arab Emirates', 'Bahrain', 'EU / EEA', 'Other'],
    privacy: {
      ok: 'Request received. We will confirm by email and may ask you to verify your identity before we act on it.',
      type: 'What would you like to do?',
      types: [['access', 'Get a copy of my data'], ['correction', 'Correct my data'], ['deletion', 'Delete my data'], ['portability', 'Move my data to another service'], ['objection', 'Object to processing'], ['restriction', 'Restrict processing'], ['withdraw_consent', 'Withdraw my consent'], ['complaint', 'Make a privacy complaint'], ['other', 'Something else']],
      rel: 'Your relationship with GenuDo',
      rels: [['customer', 'I have a GenuDo account'], ['end_user', 'I messaged a business that uses GenuDo'], ['employee_of_customer', 'I work for a business that uses GenuDo'], ['visitor', 'I visited this website'], ['other', 'Other']],
      companyLabel: 'Business you contacted or work for (optional)',
      detailsPh: 'Tell us what you need. If you messaged a business on WhatsApp, include the number you used.',
      confirm: 'I confirm this information is accurate and that I am the person concerned or authorised to act for them. GenuDo may contact me to verify my identity.'
    },
    doc: {
      ok: 'Thanks. We will review your request and email you the document.',
      dpa: 'Data Processing Agreement (DPA)',
      security_whitepaper: 'Security whitepaper'
    }
  },
  ar: {
    name: 'الاسم الكامل', email: 'البريد الإلكتروني', workEmail: 'البريد الإلكتروني للعمل', phone: 'رقم الهاتف (اختياري)', company: 'الشركة', role: 'وظيفتك (اختياري)',
    country: 'الدولة', details: 'التفاصيل', message: 'أي معلومات إضافية؟ (اختياري)', submit: 'إرسال الطلب',
    sending: 'جارٍ الإرسال…', err: 'تعذّر إرسال الطلب. يُرجى المحاولة مرة أخرى أو مراسلتنا على info@genudo.ai.',
    countries: ['مصر', 'المملكة العربية السعودية', 'الإمارات العربية المتحدة', 'البحرين', 'الاتحاد الأوروبي / المنطقة الاقتصادية الأوروبية', 'أخرى'],
    privacy: {
      ok: 'تم استلام طلبك. سنؤكّد الاستلام عبر البريد الإلكتروني، وقد نطلب التحقق من هويتك قبل تنفيذه.',
      type: 'ما الذي تريد القيام به؟',
      types: [['access', 'الحصول على نسخة من بياناتي'], ['correction', 'تصحيح بياناتي'], ['deletion', 'حذف بياناتي'], ['portability', 'نقل بياناتي إلى خدمة أخرى'], ['objection', 'الاعتراض على المعالجة'], ['restriction', 'تقييد المعالجة'], ['withdraw_consent', 'سحب موافقتي'], ['complaint', 'تقديم شكوى تتعلق بالخصوصية'], ['other', 'طلب آخر']],
      rel: 'علاقتك بجينـو دو',
      rels: [['customer', 'لدي حساب على جينـو دو'], ['end_user', 'تواصلت مع شركة تستخدم جينـو دو'], ['employee_of_customer', 'أعمل لدى شركة تستخدم جينـو دو'], ['visitor', 'زرت هذا الموقع'], ['other', 'أخرى']],
      companyLabel: 'الشركة التي تواصلت معها أو تعمل لديها (اختياري)',
      detailsPh: 'اكتب لنا ما تحتاجه. إذا تواصلت مع شركة عبر WhatsApp، فاذكر الرقم الذي استخدمته.',
      confirm: 'أؤكد صحة هذه المعلومات وأنني صاحب البيانات المعني أو مفوَّض بالتصرف نيابةً عنه، ويجوز لجينـو دو التواصل معي للتحقق من هويتي.'
    },
    doc: {
      ok: 'شكرًا لك. سنراجع طلبك ونرسل لك الوثيقة عبر البريد الإلكتروني.',
      dpa: 'اتفاقية معالجة البيانات (DPA)',
      security_whitepaper: 'الورقة البيضاء للأمان'
    }
  }
};

const Field = ({ label, children }: { label: string; children: ReactNode }) => (
  <label className="lf">
    <span>{label}</span>
    {children}
  </label>
);
const Honeypot = () => (
  <div className="hp" aria-hidden="true">
    <label>
      Website<input name="website" tabIndex={-1} autoComplete="off" />
    </label>
  </div>
);

export function PrivacyRequestForm({ locale }: { locale: string }) {
  const t = T[lang(locale)];
  const p = t.privacy;
  return (
    <>
      <form className="legal-form" action="/api/forms" method="post" data-form="privacy_request" data-sending={t.sending} data-ok={p.ok} data-err={t.err}>
        <Honeypot />
        <Field label={p.type}>
          <select name="request_type" required defaultValue="">
            <option value="" disabled>—</option>
            {p.types.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
          </select>
        </Field>
        <Field label={p.rel}>
          <select name="relationship" required defaultValue="">
            <option value="" disabled>—</option>
            {p.rels.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
          </select>
        </Field>
        <div className="lf-row">
          <Field label={t.name}><input name="full_name" autoComplete="name" required /></Field>
          <Field label={t.email}><input name="email" type="email" dir="ltr" autoComplete="email" required /></Field>
        </div>
        <div className="lf-row">
          <Field label={t.phone}><input name="phone" type="tel" dir="ltr" autoComplete="tel" /></Field>
          <Field label={t.country}>
            <select name="country" required defaultValue="">
              <option value="" disabled>—</option>
              {t.countries.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </Field>
        </div>
        <Field label={p.companyLabel}><input name="company" autoComplete="organization" /></Field>
        <Field label={t.details}><textarea name="details" rows={5} placeholder={p.detailsPh} required /></Field>
        <label className="lf-check">
          <input type="checkbox" name="confirmed" value="yes" required />
          <span>{p.confirm}</span>
        </label>
        <button type="submit" className="btn btn-primary btn-lg">{t.submit}</button>
        <p className="form-status" data-form-status role="status" aria-live="polite" />
      </form>
      <LegacyScripts scripts={['/js/forms.js']} />
    </>
  );
}

export function DocumentRequestForm({ locale, doc }: { locale: string; doc: 'dpa' | 'security_whitepaper' }) {
  const t = T[lang(locale)];
  return (
    <>
      <form className="legal-form" action="/api/forms" method="post" data-form="document_request" data-sending={t.sending} data-ok={t.doc.ok} data-err={t.err}>
        <Honeypot />
        <input type="hidden" name="document" value={doc} />
        <p className="legal-form-doc">{t.doc[doc]}</p>
        <div className="lf-row">
          <Field label={t.name}><input name="full_name" autoComplete="name" required /></Field>
          <Field label={t.workEmail}><input name="work_email" type="email" dir="ltr" autoComplete="email" required /></Field>
        </div>
        <div className="lf-row">
          <Field label={t.company}><input name="company" autoComplete="organization" required /></Field>
          <Field label={t.role}><input name="role" autoComplete="organization-title" /></Field>
        </div>
        <Field label={t.country}>
          <select name="country" required defaultValue="">
            <option value="" disabled>—</option>
            {t.countries.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </Field>
        <Field label={t.message}><textarea name="message" rows={3} /></Field>
        <button type="submit" className="btn btn-primary btn-lg">{t.submit}</button>
        <p className="form-status" data-form-status role="status" aria-live="polite" />
      </form>
      <LegacyScripts scripts={['/js/forms.js']} />
    </>
  );
}

/** Sub-processors as confirmed by the owner on 2026-10-05 (mirrors Privacy Policy, Data sharing). */
export const SUBPROCESSORS: { name: string; en: string; ar: string; region?: string }[] = [
  { name: 'Amazon Web Services (AWS)', en: 'Cloud hosting and database', ar: 'الاستضافة السحابية وقاعدة البيانات' },
  { name: 'OpenAI', en: 'AI model provider', ar: 'مزوّد نماذج الذكاء الاصطناعي' },
  { name: 'Anthropic', en: 'AI model provider', ar: 'مزوّد نماذج الذكاء الاصطناعي' },
  { name: 'Google (Gemini)', en: 'AI model provider', ar: 'مزوّد نماذج الذكاء الاصطناعي' },
  { name: 'xAI', en: 'AI model provider', ar: 'مزوّد نماذج الذكاء الاصطناعي' },
  { name: 'DeepSeek', en: 'AI model provider', ar: 'مزوّد نماذج الذكاء الاصطناعي' },
  { name: 'Z.AI', en: 'AI model provider', ar: 'مزوّد نماذج الذكاء الاصطناعي' },
  { name: 'Alibaba Cloud (Qwen)', en: 'AI model provider', ar: 'مزوّد نماذج الذكاء الاصطناعي' },
  { name: 'Moonshot AI (Kimi)', en: 'AI model provider', ar: 'مزوّد نماذج الذكاء الاصطناعي' },
  { name: 'Meta Platforms', en: 'Messaging channels (WhatsApp Business API, Instagram, Messenger)', ar: 'قنوات المراسلة (WhatsApp Business API و Instagram و Messenger)' },
  { name: 'PayTabs', en: 'Payment processing', ar: 'معالجة المدفوعات' }
];
