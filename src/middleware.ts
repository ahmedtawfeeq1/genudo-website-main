import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Match everything except Next internals and files with an extension
  // (so /public assets — /genu/*, /logos/*, /js/* — are served directly).
  matcher: ['/', '/(ar|en)/:path*', '/((?!_next|_vercel|.*\\..*).*)']
};
