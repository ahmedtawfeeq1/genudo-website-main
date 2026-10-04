import { defineRouting } from 'next-intl/routing';

/**
 * Locale routing for the GenuDo site.
 * - `en`    — English (default), left-to-right
 * - `ar-EG` — Egyptian Arabic (professional, friendly), right-to-left
 * - `ar-SA` — Gulf/Saudi Arabic: PAUSED during the value-led rewrite (owner decision
 *   D2). /ar-SA/* redirects to /ar-EG/* in next.config.mjs; messages/ar-SA.json is kept
 *   for when it returns.
 *
 * Add a locale here and everything else (hreflang, sitemap, OG alternates,
 * the language switcher, geo detection) extends automatically.
 * `localePrefix: 'always'` gives clean, shareable URLs: /en, /ar-EG, /ar-SA.
 */
export const routing = defineRouting({
  locales: ['en', 'ar-EG'],
  defaultLocale: 'en',
  localePrefix: 'always'
});

export type Locale = (typeof routing.locales)[number];

/** True for any Arabic variant (RTL, Arabic font, shared rtl.css). */
export const isRtl = (locale: string) => locale.startsWith('ar');
