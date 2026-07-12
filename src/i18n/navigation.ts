import { createNavigation } from 'next-intl/navigation';
import { routing } from './routing';

/**
 * Locale-aware navigation helpers. ALWAYS use these instead of `next/link`
 * and `next/navigation` for internal links so the active locale prefix
 * (/en, /ar) is preserved automatically.
 */
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
