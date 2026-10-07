import type { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';
import { SITE_URL, absoluteLanguages } from '@/i18n/seo';

/**
 * One entry per route, with per-locale hreflang alternates (alternates.languages).
 * This is the next-intl-recommended shape — NOT one row per route×locale.
 */
export const ROUTES = [
  '',
  '/who-is-genu',
  '/how-it-works',
  '/ai-workforce',
  '/integrations',
  '/api-mcp',
  '/sol-sales-agent',
  '/sol-customer-service',
  '/sol-operations',
  '/ind-marketing',
  '/ind-elearning',
  '/ind-fitness',
  '/ind-clinics',
  '/ind-hospitality',
  '/ind-camps-events',
  '/ind-real-estate',
  '/ind-ecommerce',
  '/ind-automotive',
  '/use-cases',
  '/customers',
  '/pricing',
  '/contact',
  '/legal/privacy-policy',
  '/legal/terms-of-service',
  '/legal/cookies',
  '/legal/subprocessors',
  '/legal/privacy-history',
  '/legal/dpa',
  '/privacy/requests',
  '/security/whitepaper',
  '/security',
  '/changelog',
  '/blog',
  '/resources',
  '/blog/ai-employees-vs-chatbots',
  '/blog/cost-per-outcome',
  '/blog/guardrails-that-matter',
  '/blog/launch-analytics-center',
  '/blog/pipeline-not-inbox',
  '/blog/whatsapp-team-workflows'
];

/** Last substantive content release. Bump when page copy changes; crawlers use it to schedule recrawls. */
const LAST_MODIFIED = new Date('2026-10-07');

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => ({
    url: `${SITE_URL}/${routing.defaultLocale}${route}`,
    lastModified: LAST_MODIFIED,
    alternates: { languages: absoluteLanguages(route) }
  }));
}
