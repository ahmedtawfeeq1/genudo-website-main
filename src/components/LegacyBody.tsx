/**
 * Renders a page body island in the visitor's language.
 * Arabic locales get the Egyptian twin (`ar`) with the RTL body styles
 * (`legacy-rtl`, see rtl.css). Pages without a twin fall back to English/LTR.
 * Root-relative links (href="/pricing") are prefixed with the locale so
 * navigation never bounces through the middleware or switches language.
 */
export default function LegacyBody({ locale, en, ar }: { locale: string; en: string; ar?: string }) {
  const rtl = locale.startsWith('ar') && !!ar;
  const html = (rtl ? ar! : en)
    .replace(/href="\/(?=[a-z])(?!media\/|genu\/|assets\/|logos\/|channels\/|shots\/)/g, `href="/${locale}/`)
    .replace(/href="\/"/g, `href="/${locale}"`);
  return <div className={`legacy-page${rtl ? ' legacy-rtl' : ''}`} dangerouslySetInnerHTML={{ __html: html }} />;
}
