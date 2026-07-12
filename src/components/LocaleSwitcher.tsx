'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import { useEffect, useRef, useState, useTransition } from 'react';

/**
 * Language switcher: a globe control in the header that opens a panel of every
 * available locale (flag + native name + region). Switches locale while staying
 * on the same page via the locale-aware router; next-intl persists the choice
 * in the NEXT_LOCALE cookie, which overrides geo-detection on later visits.
 *
 * Flags are emoji (no asset weight). Note: Windows Chrome renders no flag emoji
 * (shows the country letters) — swap to inline SVGs if that matters for you.
 */
const LOCALES: Record<string, { flag: string; name: string; region?: string }> = {
  en: { flag: '🇬🇧', name: 'English' },
  'ar-EG': { flag: '🇪🇬', name: 'العربية', region: 'مصري' },
  'ar-SA': { flag: '🇸🇦', name: 'العربية', region: 'خليجي' }
};

function Globe() {
  return (
    <svg className="loc-globe" viewBox="0 0 24 24" width="17" height="17" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M3 12h18M12 3c2.6 2.7 2.6 15.3 0 18M12 3c-2.6 2.7-2.6 15.3 0 18"
        stroke="currentColor"
        strokeWidth="1.7"
      />
    </svg>
  );
}

export default function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

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
  const currentLabel = current.region ? `${current.name} · ${current.region}` : current.name;

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
        aria-label={`Language: ${currentLabel}`}
        onClick={() => setOpen((v) => !v)}
      >
        <Globe />
        <span className="loc-name">{currentLabel}</span>
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
                {info.region && <span className="loc-region">{info.region}</span>}
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
