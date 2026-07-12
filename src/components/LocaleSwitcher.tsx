'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import { useEffect, useRef, useState, useTransition } from 'react';

/**
 * Language dropdown: shows the active locale (flag + native name) and, on click,
 * a menu of every available locale. Switches locale while staying on the same
 * page via the locale-aware router (/en/pricing ⇄ /ar/pricing).
 *
 * Flags are emoji (no asset weight). Note: Windows Chrome renders no flag emoji
 * (shows the country letters) — swap to inline SVGs if that matters for you.
 */
const LOCALES: Record<string, { flag: string; name: string }> = {
  en: { flag: '🇬🇧', name: 'English' },
  ar: { flag: '🇪🇬', name: 'العربية' }
};

export default function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  // Close on outside click / Escape.
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const current = LOCALES[locale] ?? { flag: '🏳️', name: locale };

  const pick = (loc: string) => {
    setOpen(false);
    if (loc === locale) return;
    startTransition(() => router.replace(pathname, { locale: loc }));
  };

  return (
    <div className="loc-wrap" ref={wrapRef}>
      <button
        type="button"
        className="loc-switch"
        disabled={pending}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={current.name}
        title={current.name}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="loc-flag" aria-hidden="true">{current.flag}</span>
        <svg className="loc-caret" viewBox="0 0 24 24" width="15" height="15" fill="none" aria-hidden="true">
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <div className="loc-menu" role="menu">
          {routing.locales.map((loc) => {
            const info = LOCALES[loc] ?? { flag: '🏳️', name: loc };
            const active = loc === locale;
            return (
              <button
                key={loc}
                type="button"
                role="menuitemradio"
                aria-checked={active}
                className={`loc-opt${active ? ' is-active' : ''}`}
                onClick={() => pick(loc)}
              >
                <span className="loc-flag" aria-hidden="true">{info.flag}</span>
                <span className="loc-name">{info.name}</span>
                {active && (
                  <svg className="loc-check" viewBox="0 0 24 24" width="15" height="15" fill="none" aria-hidden="true">
                    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
