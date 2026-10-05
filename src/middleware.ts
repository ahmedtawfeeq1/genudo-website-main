import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

// Arab countries (GCC included, while ar-SA is paused) → Egyptian Arabic; everywhere else
// falls through to next-intl (Accept-Language, then default `en`).
const GULF = new Set(['SA', 'AE', 'KW', 'QA', 'BH', 'OM']);
const ARAB = new Set([
  'EG', 'SD', 'LY', 'TN', 'DZ', 'MA', 'MR', 'JO', 'LB', 'SY', 'IQ', 'PS', 'YE', 'KM', 'DJ', 'SO'
]);

function geoLocale(country: string): string | null {
  const c = country.toUpperCase();
  if (GULF.has(c)) return 'ar-EG'; // ar-SA paused (owner decision D2)
  if (ARAB.has(c)) return 'ar-EG';
  return null;
}

export default function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const hasPrefix = routing.locales.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`));
  const hasCookie = req.cookies.has('NEXT_LOCALE');

  // First visit only (no locale in the path AND no saved choice): bias by country.
  // A manual switcher choice sets NEXT_LOCALE, which wins here and forever after.
  if (!hasPrefix && !hasCookie) {
    const country =
      req.headers.get('x-vercel-ip-country') || req.headers.get('cf-ipcountry') || '';
    const loc = geoLocale(country);
    if (loc) {
      const url = req.nextUrl.clone();
      url.pathname = `/${loc}${pathname === '/' ? '' : pathname}`;
      return NextResponse.redirect(url);
    }
  }

  return intlMiddleware(req);
}

export const config = {
  // Home redirect, locale-prefixed routes, and everything else except Next
  // internals and files with an extension (so /public assets pass through).
  matcher: ['/', '/(en|ar-EG)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)']
};
