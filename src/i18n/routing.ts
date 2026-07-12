import { defineRouting } from 'next-intl/routing';

/**
 * Locale routing for the GenuDo site.
 * - `en` — English (default), left-to-right
 * - `ar` — Modern Standard Arabic, right-to-left (Egypt + Gulf audience)
 *
 * `localePrefix: 'always'` gives clean, shareable URLs: /en/... and /ar/...
 */
export const routing = defineRouting({
  locales: ['en', 'ar'],
  defaultLocale: 'en',
  localePrefix: 'always'
});

export type Locale = (typeof routing.locales)[number];
