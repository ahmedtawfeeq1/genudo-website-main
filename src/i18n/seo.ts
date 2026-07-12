import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { routing } from './routing';

/**
 * SEO / GEO helpers — one place for canonical URLs, hreflang alternates,
 * localized metadata, and JSON-LD. Everything is locale-aware and works for
 * ANY locale added to `routing.locales` (no per-language edits needed).
 *
 * Set NEXT_PUBLIC_SITE_URL in the deploy env to the production origin.
 */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://genudo.ai').replace(/\/$/, '');

/** OG `og:locale` tag per app locale. */
const OG_LOCALE: Record<string, string> = { en: 'en_US', 'ar-EG': 'ar_EG', 'ar-SA': 'ar_SA' };

/** Public helper: og:locale for a given app locale (falls back to the raw locale). */
export const ogLocale = (locale: string) => OG_LOCALE[locale] ?? locale;

/** { en: "/en{path}", ar: "/ar{path}", "x-default": "/en{path}" } — for alternates.languages. */
export function hreflangLanguages(path: string): Record<string, string> {
  const languages: Record<string, string> = {};
  for (const l of routing.locales) languages[l] = `/${l}${path}`;
  languages['x-default'] = `/${routing.defaultLocale}${path}`;
  return languages;
}

/** Absolute per-route URLs across every locale — used by the sitemap. */
export function absoluteLanguages(path: string): Record<string, string> {
  return Object.fromEntries(routing.locales.map((l) => [l, `${SITE_URL}/${l}${path}`]));
}

/**
 * Factory: returns a `generateMetadata` for a page. Reads localized
 * title/description from the `seo.<seoKey>` message block and emits a
 * self-referencing canonical + per-locale hreflang + x-default + OG/Twitter.
 */
export function pageMetadata({ route, seoKey }: { route: string; seoKey: string }) {
  const path = route === '/' ? '' : route;
  return async function generateMetadata({
    params
  }: {
    params: Promise<{ locale: string }>;
  }): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'seo' });
    const title = t(`${seoKey}.title`);
    const description = t(`${seoKey}.description`);
    const url = `/${locale}${path}`;
    return {
      title,
      description,
      alternates: { canonical: url, languages: hreflangLanguages(path) },
      openGraph: {
        type: 'website',
        url,
        siteName: 'GenuDo',
        title,
        description,
        locale: OG_LOCALE[locale] ?? locale,
        alternateLocale: routing.locales.filter((l) => l !== locale).map((l) => OG_LOCALE[l] ?? l)
      },
      twitter: { card: 'summary_large_image', title, description }
    };
  };
}

// --- Organization / brand facts (single source of truth for JSON-LD) --------
export const ORG = {
  name: 'GenuDo',
  legalName: 'GenuDo',
  url: SITE_URL,
  logo: `${SITE_URL}/genu/genudo-logo-color.png`,
  sameAs: [
    'https://www.facebook.com/genudo.official/',
    'https://www.linkedin.com/company/genudo/',
    'https://www.youtube.com/@GenuDoAi',
    'https://www.tiktok.com/@genudo.official'
  ]
};

/** JSON-LD graph (Organization + WebSite) for GEO / rich results. Injected in the root layout. */
export function siteJsonLd(locale: string, description: string) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: ORG.name,
        legalName: ORG.legalName,
        url: ORG.url,
        logo: ORG.logo,
        description,
        sameAs: ORG.sameAs
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: `${SITE_URL}/${locale}`,
        name: ORG.name,
        description,
        inLanguage: locale,
        publisher: { '@id': `${SITE_URL}/#organization` }
      }
    ]
  };
}
