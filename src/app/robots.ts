import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/i18n/seo';

/**
 * Allow everything for classic search crawlers, and explicitly allow the major
 * AI/LLM crawlers (GEO — let generative engines ingest the site). Remove any
 * agent from the allow-list if you decide to opt a given bot out.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      {
        userAgent: [
          'GPTBot',
          'OAI-SearchBot',
          'ChatGPT-User',
          'ClaudeBot',
          'Claude-Web',
          'anthropic-ai',
          'PerplexityBot',
          'Perplexity-User',
          'Google-Extended',
          'Applebot-Extended',
          'Amazonbot',
          'Bytespider',
          'CCBot',
          'Meta-ExternalAgent',
          'cohere-ai',
          'YouBot'
        ],
        allow: '/'
      }
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL
  };
}
