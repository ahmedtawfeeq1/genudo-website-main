import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

const SOCIAL: Record<string, string> = {
  facebook:
    '<path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z"/>',
  linkedin:
    '<path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C20.3 8.65 21 11 21 14.1V21h-4v-6.1c0-1.45-.03-3.3-2-3.3-2 0-2.3 1.57-2.3 3.2V21H9z"/>',
  youtube:
    '<path d="M23 12s0-3.6-.46-5.3a2.75 2.75 0 0 0-1.94-1.94C18.9 4.3 12 4.3 12 4.3s-6.9 0-8.6.46A2.75 2.75 0 0 0 1.46 6.7C1 8.4 1 12 1 12s0 3.6.46 5.3c.26.95 1 1.68 1.94 1.94 1.7.46 8.6.46 8.6.46s6.9 0 8.6-.46a2.75 2.75 0 0 0 1.94-1.94C23 15.6 23 12 23 12zM9.8 15.3V8.7l5.7 3.3z"/>',
  tiktok:
    '<path d="M16.5 3c.4 2.3 1.7 3.9 4 4.2v2.7c-1.5.1-2.9-.3-4-1.1v5.9c0 3.4-2.6 5.8-5.8 5.8A5.5 5.5 0 0 1 5 15.2c0-3.2 2.9-5.6 6.3-5v2.9c-.4-.1-.9-.2-1.3-.2-1.5 0-2.6 1-2.6 2.4a2.5 2.5 0 0 0 5 .1V3z"/>'
};

const socialHref: Record<string, string> = {
  facebook: 'https://www.facebook.com/genudo.official/',
  linkedin: 'https://www.linkedin.com/company/genudo/',
  youtube: 'https://www.youtube.com/@GenuDoAi',
  tiktok: 'https://www.tiktok.com/@genudo.official'
};

function Social({ name }: { name: string }) {
  return (
    <a href={socialHref[name]} target="_blank" rel="noopener" aria-label={name}>
      <svg viewBox="0 0 24 24" fill="currentColor" dangerouslySetInnerHTML={{ __html: SOCIAL[name] }} />
    </a>
  );
}

export default function SiteFooter() {
  const t = useTranslations();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="foot-grid foot-grid-5">
          <div className="foot-col foot-brandcol">
            <Link className="brand foot-brand" href="/">
              <img src="/genu/genudo-logo-white.png" alt="GenuDo" style={{ height: 44 }} />
            </Link>
            <p className="foot-tag">{t('footer.tagline')}</p>
            <div className="foot-social">
              <Social name="facebook" />
              <Social name="linkedin" />
              <Social name="youtube" />
              <Social name="tiktok" />
            </div>
          </div>

          <div className="foot-col">
            <h5>{t('footer.hEmployees')}</h5>
            <Link href="/sol-sales-agent">{t('terms.salesAgent')}</Link>
            <Link href="/sol-customer-service">{t('terms.customerService')}</Link>
            <Link href="/sol-operations">{t('terms.operations')}</Link>
            <Link href="/how-it-works">{t('nav.howItWorks')}</Link>
            <Link href="/ai-workforce">{t('terms.aiWorkforce')}</Link>
            <Link href="/who-is-genu">{t('nav.whoIsGenu')}</Link>
          </div>

          <div className="foot-col">
            <h5>{t('footer.hIndustries')}</h5>
            <Link href="/ind-marketing">{t('terms.marketing')}</Link>
            <Link href="/ind-elearning">{t('terms.elearning')}</Link>
            <Link href="/ind-fitness">{t('terms.fitness')}</Link>
            <Link href="/ind-clinics">{t('terms.clinics')}</Link>
            <Link href="/ind-hospitality">{t('terms.hospitality')}</Link>
            <Link href="/ind-camps-events">{t('terms.campsEvents')}</Link>
          </div>

          <div className="foot-col">
            <h5>{t('footer.hResources')}</h5>
            <Link href="/customers">{t('terms.customerStories')}</Link>
            <Link href="/use-cases">{t('terms.allUseCases')}</Link>
            <Link href="/blog">{t('terms.blog')}</Link>
            <Link href="/changelog">{t('terms.changelog')}</Link>
            <Link href="/security">{t('terms.security')}</Link>
          </div>

          <div className="foot-col">
            <h5>{t('footer.hCompany')}</h5>
            <Link href="/pricing">{t('terms.pricing')}</Link>
            <Link href="/integrations">{t('terms.integrations')}</Link>
            <Link href="/api-mcp">{t('terms.apiMcp')}</Link>
            <a href="https://api.genudo.ai/docs" target="_blank" rel="noopener noreferrer">{t('terms.apiDocs')}</a>
            <Link href="/contact">{t('terms.contact')}</Link>
          </div>
        </div>

        <div className="foot-bottom">
          <span>{t('footer.rights', { year })}</span>
          <span className="mono">{t('footer.microcopy')}</span>
        </div>
      </div>
    </footer>
  );
}
