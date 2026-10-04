import createNextIntlPlugin from 'next-intl/plugin';

// Points next-intl at the request config (locale + message loading).
const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

// Value-led IA: feature pages were folded into /how-it-works (anchor per section).
const FOLDED = {
  product: '', 'ai-employees': '#employees', pipelines: '#pipelines', stages: '#pipelines',
  followups: '#followups', knowledge: '#knowledge', models: '#models',
  channels: '#channels', contacts: '#channels', analytics: '#analytics'
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // The reference pages mount legacy markup that uses plain <img> tags with static
  // paths under /public. Disabling the Image Optimizer keeps rendering 1:1 with the
  // original static site. Migrate to next/image per component when you componentize.
  images: { unoptimized: true },
  async redirects() {
    return [
      // ar-SA is paused (owner decision D2): Gulf URLs serve the Egyptian site.
      { source: '/ar-SA', destination: '/ar-EG', permanent: false },
      { source: '/ar-SA/:path*', destination: '/ar-EG/:path*', permanent: false },
      ...Object.entries(FOLDED).flatMap(([from, anchor]) => [
        { source: `/:locale(en|ar-EG)/${from}`, destination: `/:locale/how-it-works${anchor}`, permanent: true },
        { source: `/${from}`, destination: `/en/how-it-works${anchor}`, permanent: true }
      ])
    ];
  }
};

export default withNextIntl(nextConfig);
