import createNextIntlPlugin from 'next-intl/plugin';

// Points next-intl at the request config (locale + message loading).
const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // The reference pages mount legacy markup that uses plain <img> tags with static
  // paths under /public. Disabling the Image Optimizer keeps rendering 1:1 with the
  // original static site. Migrate to next/image per component when you componentize.
  images: { unoptimized: true }
};

export default withNextIntl(nextConfig);
