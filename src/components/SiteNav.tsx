'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import LocaleSwitcher from './LocaleSwitcher';

/* Inline icon path set — ported verbatim from site-chrome.js */
const I: Record<string, string> = {
  agent: '<circle cx="12" cy="8" r="4"/><path d="M4 20a8 8 0 0 1 16 0"/>',
  pipe: '<path d="M3 3v18h18"/><rect x="7" y="10" width="3" height="8"/><rect x="12" y="6" width="3" height="12"/>',
  know: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5z"/>',
  models: '<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"/>',
  stages: '<path d="M13 2 3 14h7l-1 8 10-12h-7z"/>',
  inbox: '<path d="M4 13h4l2 3h4l2-3h4"/><path d="M5 5h14l2 8v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4z"/>',
  followup: '<path d="M17 2l4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="M7 22l-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/>',
  contacts: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13A4 4 0 0 1 16 11"/>',
  analytics: '<path d="M3 3v18h18"/><path d="m7 14 3-3 3 3 4-5"/>',
  integ: '<rect x="3" y="3" width="8" height="8" rx="2"/><rect x="13" y="13" width="8" height="8" rx="2"/><path d="M11 7h4a2 2 0 0 1 2 2v4"/>',
  api: '<path d="m8 6-6 6 6 6"/><path d="m16 6 6 6-6 6"/>',
  sales: '<path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/>',
  support: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/>',
  ops: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>',
  learn: '<path d="M22 10 12 5 2 10l10 5 10-5z"/><path d="M6 12v5c0 1 3 3 6 3s6-2 6-3v-5"/>',
  fit: '<path d="M6.5 6.5 17.5 17.5M4 9l2-2M18 15l2-2M9 4 7 6M17 20l-2-2M14 4l6 6M4 14l6 6"/>',
  clinic: '<path d="M8 2h8v4H8zM12 11v6M9 14h6"/><rect x="4" y="6" width="16" height="16" rx="2"/>',
  travel: '<path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3s-3-.5-4.5 1L13 7.5 4.8 5.7c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>',
  mkt: '<path d="m3 11 15-5v12L3 13z"/><path d="M18 8a3 3 0 0 1 0 6"/><path d="M7 13v4a2 2 0 0 0 2 2h1"/>',
  camp: '<path d="M3.5 21 12 4l8.5 17"/><path d="M12 13 7.5 21M12 13l4.5 8"/>',
  docs: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h5"/>',
  change: '<path d="M12 8v4l3 2"/><circle cx="12" cy="12" r="9"/>',
  blog: '<path d="M4 4h16v16H4z"/><path d="M8 8h8M8 12h8M8 16h5"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  caret: '<path d="m6 9 6 6 6-6"/>'
};

function Svg({ name, cls }: { name: string; cls?: string }) {
  return (
    <svg
      className={cls}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      dangerouslySetInnerHTML={{ __html: I[name] }}
    />
  );
}

function Mi({ name, bg }: { name: string; bg: string }) {
  return (
    <span className="mi" style={{ background: bg }}>
      <Svg name={name} />
    </span>
  );
}

export default function SiteNav() {
  const t = useTranslations();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isActive = (href: string) => pathname === href;

  /* mega-link builder */
  const ML = ({ href, name, bg, term, sub }: { href: string; name: string; bg: string; term: string; sub: string }) => (
    <Link className="mega-link" href={href} onClick={() => setOpen(false)}>
      <Mi name={name} bg={bg} />
      <span>
        <b>{t(term)}</b>
        <span>{t(sub)}</span>
      </span>
    </Link>
  );

  const IL = ({ href, name, bg, term }: { href: string; name: string; bg: string; term: string }) => (
    <Link className="ind-link" href={href} onClick={() => setOpen(false)}>
      <span className="ii" style={{ color: bg, background: `color-mix(in srgb, ${bg} 12%, #fff)` }}>
        <Svg name={name} />
      </span>
      {t(term)}
    </Link>
  );

  const Arrow = () => <Svg name="arrow" />;

  return (
    <header className={`nav${open ? ' mobile-open' : ''}`}>
      <div className="container nav-in">
        <Link className="brand" href="/" onClick={() => setOpen(false)}>
          <img src="/genu/genudo-logo-color.png" alt="GenuDo" />
        </Link>

        <nav className="nav-links">
          <Link href="/who-is-genu" className={`nav-featured${isActive('/who-is-genu') ? ' on' : ''}`}>
            {t('nav.whoIsGenu')}
          </Link>

          {/* Solutions */}
          <div className="nav-item">
            <button>
              {t('nav.solutions')} <Svg name="caret" cls="caret" />
            </button>
            <div className="mega mega-wide">
              <div className="mega-cols mega-cols-2">
                <div className="mega-col">
                  <div className="mega-sec-label">{t('nav.secAiEmployees')}</div>
                  <ML href="/sol-sales-agent" name="sales" bg="#6468f0" term="terms.salesAgent" sub="nav.desc.salesAgent" />
                  <ML href="/sol-customer-service" name="support" bg="#06b6d4" term="terms.customerService" sub="nav.desc.customerService" />
                  <ML href="/sol-operations" name="ops" bg="#f97316" term="terms.operations" sub="nav.desc.operations" />
                </div>
                <div className="mega-col mega-col-wide">
                  <div className="mega-sec-label">{t('nav.secByIndustry')}</div>
                  <div className="mega-inds">
                    <IL href="/ind-marketing" name="mkt" bg="#e2562a" term="terms.marketing" />
                    <IL href="/ind-elearning" name="learn" bg="#6468f0" term="terms.elearning" />
                    <IL href="/ind-fitness" name="fit" bg="#22c55e" term="terms.fitness" />
                    <IL href="/ind-clinics" name="clinic" bg="#06b6d4" term="terms.clinics" />
                    <IL href="/ind-hospitality" name="travel" bg="#a855f7" term="terms.hospitality" />
                    <IL href="/ind-camps-events" name="camp" bg="#f59e0b" term="terms.campsEvents" />
                  </div>
                </div>
              </div>
              <div className="mega-foot">
                <Link href="/use-cases" onClick={() => setOpen(false)}>
                  {t('nav.everyUseCase')} <Arrow />
                </Link>
              </div>
            </div>
          </div>

          {/* Product */}
          <div className="nav-item">
            <button>
              {t('nav.product')} <Svg name="caret" cls="caret" />
            </button>
            <div className="mega mega-wide">
              <div className="mega-cols">
                <div className="mega-col">
                  <div className="mega-sec-label">{t('nav.secBuild')}</div>
                  <ML href="/ai-employees" name="agent" bg="#6468f0" term="terms.agent" sub="nav.desc.agent" />
                  <ML href="/knowledge" name="know" bg="#10b981" term="terms.knowledge" sub="nav.desc.knowledge" />
                  <ML href="/models" name="models" bg="#6366f1" term="terms.models" sub="nav.desc.models" />
                </div>
                <div className="mega-col">
                  <div className="mega-sec-label">{t('nav.secOperate')}</div>
                  <ML href="/pipelines" name="pipe" bg="#8b5cf6" term="terms.pipeline" sub="nav.desc.pipeline" />
                  <ML href="/stages" name="stages" bg="#a855f7" term="terms.stages" sub="nav.desc.stages" />
                  <ML href="/followups" name="followup" bg="#ec4899" term="terms.followups" sub="nav.desc.followups" />
                </div>
                <div className="mega-col">
                  <div className="mega-sec-label">{t('nav.secEngage')}</div>
                  <ML href="/channels" name="inbox" bg="#06b6d4" term="terms.inbox" sub="nav.desc.inbox" />
                  <ML href="/contacts" name="contacts" bg="#0ea5e9" term="terms.contacts" sub="nav.desc.contacts" />
                  <ML href="/analytics" name="analytics" bg="#22c55e" term="terms.analytics" sub="nav.desc.analytics" />
                  <ML href="/integrations" name="integ" bg="#14b8a6" term="terms.integrations" sub="nav.desc.integrations" />
                </div>
              </div>
              <div className="mega-foot">
                <Link href="/product" onClick={() => setOpen(false)}>
                  {t('nav.platformOverview')} <Arrow />
                </Link>
                <Link href="/api-mcp" onClick={() => setOpen(false)}>
                  {t('terms.apiMcp')} <Arrow />
                </Link>
              </div>
            </div>
          </div>

          {/* Resources */}
          <div className="nav-item">
            <button>
              {t('nav.resources')} <Svg name="caret" cls="caret" />
            </button>
            <div className="mega">
              <div className="mega-grid">
                <ML href="/api-docs" name="docs" bg="#0ea5e9" term="terms.apiDocs" sub="nav.desc.apiDocs" />
                <ML href="/changelog" name="change" bg="#8b5cf6" term="terms.changelog" sub="nav.desc.changelog" />
                <ML href="/blog" name="blog" bg="#22c55e" term="terms.blog" sub="nav.desc.blog" />
                <ML href="/security" name="support" bg="#10b981" term="terms.security" sub="nav.desc.security" />
              </div>
            </div>
          </div>

          <Link href="/customers" className={isActive('/customers') ? 'on' : undefined}>
            {t('terms.customerStories')}
          </Link>
          <Link href="/pricing" className={isActive('/pricing') ? 'on' : undefined}>
            {t('terms.pricing')}
          </Link>
        </nav>

        <div className="nav-cta">
          <a href="https://app.genudo.ai/auth/login" className="btn nav-signin">
            {t('nav.signIn')}
          </a>
          <a href="https://app.genudo.ai/auth/register" className="btn btn-primary">
            {t('nav.getStarted')}
          </a>
          <LocaleSwitcher />
        </div>

        <button className="nav-burger" aria-label="Menu" onClick={() => setOpen((v) => !v)}>
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile menu */}
      <div className="nav-mobile">
        <div className="container">
          <Link href="/who-is-genu" style={{ fontWeight: 640, color: 'var(--ink)' }} onClick={() => setOpen(false)}>
            {t('nav.whoIsGenu')}
          </Link>
          <div className="nm-sec">{t('nav.solutions')}</div>
          <Link href="/sol-sales-agent" onClick={() => setOpen(false)}>{t('terms.salesAgent')}</Link>
          <Link href="/sol-customer-service" onClick={() => setOpen(false)}>{t('terms.customerService')}</Link>
          <Link href="/sol-operations" onClick={() => setOpen(false)}>{t('terms.operations')}</Link>
          <Link href="/ind-marketing" onClick={() => setOpen(false)}>{t('terms.marketing')}</Link>
          <Link href="/ind-elearning" onClick={() => setOpen(false)}>{t('terms.elearning')}</Link>
          <Link href="/ind-fitness" onClick={() => setOpen(false)}>{t('terms.fitness')}</Link>
          <Link href="/ind-clinics" onClick={() => setOpen(false)}>{t('terms.clinics')}</Link>
          <Link href="/ind-hospitality" onClick={() => setOpen(false)}>{t('terms.hospitality')}</Link>
          <Link href="/ind-camps-events" onClick={() => setOpen(false)}>{t('terms.campsEvents')}</Link>
          <div className="nm-sec">{t('nav.product')}</div>
          <Link href="/ai-employees" onClick={() => setOpen(false)}>{t('terms.agent')}</Link>
          <Link href="/pipelines" onClick={() => setOpen(false)}>{t('terms.pipeline')}</Link>
          <Link href="/knowledge" onClick={() => setOpen(false)}>{t('terms.knowledge')}</Link>
          <Link href="/models" onClick={() => setOpen(false)}>{t('terms.models')}</Link>
          <Link href="/stages" onClick={() => setOpen(false)}>{t('terms.stages')}</Link>
          <Link href="/followups" onClick={() => setOpen(false)}>{t('terms.followups')}</Link>
          <Link href="/channels" onClick={() => setOpen(false)}>{t('terms.inbox')}</Link>
          <Link href="/contacts" onClick={() => setOpen(false)}>{t('terms.contacts')}</Link>
          <Link href="/analytics" onClick={() => setOpen(false)}>{t('terms.analytics')}</Link>
          <Link href="/integrations" onClick={() => setOpen(false)}>{t('terms.integrations')}</Link>
          <div className="nm-sec">{t('nav.resources')}</div>
          <Link href="/customers" onClick={() => setOpen(false)}>{t('terms.customerStories')}</Link>
          <Link href="/api-docs" onClick={() => setOpen(false)}>{t('terms.apiDocs')}</Link>
          <Link href="/changelog" onClick={() => setOpen(false)}>{t('terms.changelog')}</Link>
          <Link href="/blog" onClick={() => setOpen(false)}>{t('terms.blog')}</Link>
          <div className="nm-sec">{t('nav.secMore')}</div>
          <Link href="/pricing" onClick={() => setOpen(false)}>{t('terms.pricing')}</Link>
          <Link href="/security" onClick={() => setOpen(false)}>{t('terms.security')}</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>{t('terms.contact')}</Link>
          <a href="https://app.genudo.ai/auth/register" className="btn btn-primary" style={{ marginTop: 14, justifyContent: 'center' }}>
            {t('nav.getStarted')}
          </a>
        </div>
      </div>
    </header>
  );
}
