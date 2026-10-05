import createNextIntlPlugin from 'next-intl/plugin';

// Points next-intl at the request config (locale + message loading).
const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

// Value-led IA: feature pages were folded into /how-it-works (anchor per section).
const FOLDED = {
  product: '', 'ai-employees': '#employees', pipelines: '#pipelines', stages: '#pipelines',
  followups: '#followups', knowledge: '#knowledge', models: '#models',
  channels: '#channels', contacts: '#channels', analytics: '#analytics'
};

// Security headers (production only; dev needs eval/websockets). The CSP allows what the
// site and the GTM container (GA, Google Ads, Meta, TikTok, Cloudflare insights) load.
const CSP = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://*.googletagmanager.com https://www.google-analytics.com https://ssl.google-analytics.com https://googleads.g.doubleclick.net https://www.googleadservices.com https://static.cloudflareinsights.com https://connect.facebook.net https://analytics.tiktok.com https://capi-automation.s3.us-east-2.amazonaws.com",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://www.googletagmanager.com",
  "font-src 'self' data: https://fonts.gstatic.com",
  "img-src 'self' data: blob: https:",
  "media-src 'self'",
  "connect-src 'self' https://www.googletagmanager.com https://*.google-analytics.com https://*.analytics.google.com https://stats.g.doubleclick.net https://*.doubleclick.net https://*.google.com https://www.googleadservices.com https://static.cloudflareinsights.com https://connect.facebook.net https://www.facebook.com https://analytics.tiktok.com https://business-api.tiktok.com https://*.tiktok.com https://*.tiktokv.com https://*.tiktokw.us",
  "frame-src 'self' https://www.googletagmanager.com https://td.doubleclick.net https://www.facebook.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self' https://www.facebook.com", // Meta pixel posts a hidden form to /tr/
  "frame-ancestors 'self'"
].join('; ');
const SECURITY_HEADERS = [
  { key: 'Content-Security-Policy', value: CSP },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' }
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Self-contained server bundle for the Docker image (see Dockerfile).
  output: 'standalone',
  // Separate output for verification builds (NEXT_DIST_DIR=.next-verify) so they
  // never clobber a running `next dev`, which owns .next.
  distDir: process.env.NEXT_DIST_DIR || '.next',
  // The reference pages mount legacy markup that uses plain <img> tags with static
  // paths under /public. Disabling the Image Optimizer keeps rendering 1:1 with the
  // original static site. Migrate to next/image per component when you componentize.
  images: { unoptimized: true },
  async headers() {
    return process.env.NODE_ENV === 'production' ? [{ source: '/:path*', headers: SECURITY_HEADERS }] : [];
  },
  async redirects() {
    return [
      // ar-SA is paused (owner decision D2): Gulf URLs serve the Egyptian site.
      { source: '/ar-SA', destination: '/ar-EG', permanent: false },
      { source: '/ar-SA/:path*', destination: '/ar-EG/:path*', permanent: false },
      // Legal pages moved under /legal (old live URLs + the old markdown files).
      ...['privacy-policy', 'terms-of-service'].flatMap((doc) => [
        { source: `/:locale(en|ar-EG)/${doc}`, destination: `/:locale/legal/${doc}`, permanent: true },
        { source: `/${doc}`, destination: `/en/legal/${doc}`, permanent: true },
        { source: `/legal/${doc}.md`, destination: `/en/legal/${doc}`, permanent: true }
      ]),
      // Short links used inside the legal documents.
      ...[
        ['legal/terms', 'legal/terms-of-service'],
        ['privacy/faq', 'legal/privacy-policy#s11'],
        ['compliance', 'security'],
        ['press', 'contact']
      ].flatMap(([from, to]) => [
        { source: `/:locale(en|ar-EG)/${from}`, destination: `/:locale/${to}`, permanent: true },
        { source: `/${from}`, destination: `/en/${to}`, permanent: true }
      ]),
      // API docs live outside the marketing site.
      { source: '/:locale(en|ar-EG|ar-SA)/api-docs', destination: 'https://api.genudo.ai/docs', permanent: true },
      { source: '/api-docs', destination: 'https://api.genudo.ai/docs', permanent: true },
      ...Object.entries(FOLDED).flatMap(([from, anchor]) => [
        { source: `/:locale(en|ar-EG)/${from}`, destination: `/:locale/how-it-works${anchor}`, permanent: true },
        { source: `/${from}`, destination: `/en/how-it-works${anchor}`, permanent: true }
      ])
    ];
  }
};

export default withNextIntl(nextConfig);
