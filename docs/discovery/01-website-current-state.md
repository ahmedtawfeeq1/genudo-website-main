---
project: genudo-website
topic: website-current-state
type: analysis
date: 2026-10-05
source: manual
tags: [discovery, bmad, architecture, routes, tech-debt]
loredex: routed
---

# Website Current State & Architecture Audit

## 1. Real Technical Architecture

The GenuDo marketing website (genudo-website) is built on Next.js 15.1.0 (App Router), React 18.3.1, TypeScript 5.5.3, and `next-intl` 3.26.0 ([package.json](../../package.json#L12-L23)). It operates in a strict two-layer hybrid model designed to achieve pixel-identical rendering of legacy static HTML while introducing modern multilingual routing.

```
┌────────────────────────────────────────────────────────────────────────┐
│ Layer 1: React Chrome + i18n Layout (Modern App Router)               │
│ - src/app/[locale]/layout.tsx (LocaleLayout, NextIntlClientProvider)   │
│ - src/components/SiteNav.tsx (Mega-menu nav, next-intl messages)       │
│ - src/components/SiteFooter.tsx (Footer navigation, legal lines)       │
│ - src/components/LocaleSwitcher.tsx (Trilingual switcher: EN/EG/SA)    │
│ - src/components/GenuRobot.tsx (Mascot DOM wrapper)                    │
│ - src/i18n/seo.ts (pageMetadata, hreflang, JSON-LD Schema.org graph)   │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │ renders {children}
┌───────────────────────────────────▼────────────────────────────────────┐
│ Layer 2: Legacy HTML Island Bodies (Bootstrap State)                   │
│ - src/app/[locale]/<route>/page.tsx (Server Component)                 │
│ - <div className="legacy-page" dangerouslySetInnerHTML={{ __html }} />│
│ - src/legacy-html/<route>.ts (Monolithic raw HTML strings)             │
│ - <LegacyScripts scripts={['/js/...', '/genu/...']} />                 │
└────────────────────────────────────────────────────────────────────────┘
```

### Layer 1: React Chrome & Internationalization
- **Layout Shell:** [src/app/[locale]/layout.tsx](../../src/app/%5Blocale%5D/layout.tsx) configures `<html lang={locale} dir={dir}>`, injects the Google font **Tajawal** (`--font-ar`) for Arabic locales, provides `NextIntlClientProvider`, and injects the Organization and WebSite JSON-LD graph via [siteJsonLd()](../../src/i18n/seo.ts#L83).
- **Navigation & Footer:** [SiteNav.tsx](../../src/components/SiteNav.tsx) and [SiteFooter.tsx](../../src/components/SiteFooter.tsx) are fully native React components driven by `useTranslations()` reading from `messages/<locale>.json`. All internal navigation links use `Link` from [src/i18n/navigation.ts](../../src/i18n/navigation.ts) to maintain the active locale prefix.
- **Locale Switcher:** [LocaleSwitcher.tsx](../../src/components/LocaleSwitcher.tsx) supports switching between English (`en`), Egyptian Arabic (`ar-EG`), and Gulf Arabic (`ar-SA`). It stores user preference in the `NEXT_LOCALE` cookie.

### Layer 2: Legacy HTML Island Bodies
- **Bootstrap Pattern:** 37 of 38 routes follow an identical pattern: they import a raw HTML string from [src/legacy-html/<route>.ts](../../src/legacy-html) and render it directly using `dangerouslySetInnerHTML`.
- **Client Script Mounting:** [LegacyScripts.tsx](../../src/components/LegacyScripts.tsx) mounts legacy browser scripts from `public/js/*` (`genudo-site.js`, `site2.js`, `concept.js`, `hero.js`, `who-is-genu.js`) into the DOM after mounting.
- **Twin Architecture:** The homepage ([src/app/[locale]/page.tsx](../../src/app/%5Blocale%5D/page.tsx#L10)) implements a `TWINS` map:
  ```typescript
  const TWINS: Record<string, string> = { 'ar-EG': homeArEG };
  ```
  When the requested locale is `ar-EG`, it renders `homeArEG` ([src/legacy-html/home.ar-EG.ts](../../src/legacy-html/home.ar-EG.ts)) with `legacy-rtl`. However, `TWINS['ar-SA']` is undefined, causing `/ar-SA/` to fall back to the English `homeHtml` string.

### Routing & Edge Middleware
- **Locale Routing:** [src/i18n/routing.ts](../../src/i18n/routing.ts) defines `locales: ['en', 'ar-EG', 'ar-SA']`, with `defaultLocale: 'en'` and `localePrefix: 'always'`. All valid routes require a locale prefix (e.g. `/en/pricing`, `/ar-EG/pricing`, `/ar-SA/pricing`).
- **Geo-IP Routing:** [src/middleware.ts](../../src/middleware.ts#L9-L19) intercepts initial visits without a locale prefix or `NEXT_LOCALE` cookie:
  - GCC countries (`SA`, `AE`, `KW`, `QA`, `BH`, `OM`) redirect to `/ar-SA`.
  - Other Arab nations (`EG`, `SD`, `LY`, `TN`, `DZ`, `MA`, `MR`, `JO`, `LB`, `SY`, `IQ`, `PS`, `YE`, `KM`, `DJ`, `SO`) redirect to `/ar-EG`.
  - All other origins fall back to `next-intl` negotiation (`Accept-Language` or default `en`).
- **Catalog Loading:** [src/i18n/request.ts](../../src/i18n/request.ts) loads message catalogs dynamically from `messages/${locale}.json`.

### SEO Layer & Structured Data
- **Metadata Factory:** [src/i18n/seo.ts](../../src/i18n/seo.ts#L38) provides `pageMetadata({ route, seoKey })`. It reads localized titles and descriptions from `seo.<seoKey>` in `messages/<locale>.json`.
- **Hreflang Alternates:** Generates self-referencing canonicals, `og:locale` (`en_US`, `ar_EG`, `ar_SA`), OpenGraph tags, Twitter Cards, and `hreflang` alternate links mapping `en`, `ar-EG`, `ar-SA`, and `x-default` (`/en/...`).
- **Rich Results (JSON-LD):** Injects a global Schema.org `@graph` ([siteJsonLd](../../src/i18n/seo.ts#L83)) defining `Organization` and `WebSite` entities with social profiles and logo links.

### Styling & RTL Cascade
Styles are imported once in [src/app/[locale]/layout.tsx](../../src/app/%5Blocale%5D/layout.tsx#L13-L23) in strict cascade order:
1. `genudo-site.css` (base design tokens, reset, typography)
2. `site2.css` (layout grids, container sizing)
3. `genu-robot.css` (mascot styling and animation keyframes)
4. `concept.css` (cards, floating pills, showcase UI)
5. `home.css` (homepage hero, card stacks)
6. `hero.css` (secondary page hero components)
7. `features.css` (feature grids, product specs)
8. `pages.css` (subpage typography, forms, lists)
9. `resources.css` (blog grid, resource cards)
10. `chrome.css` (SiteNav and SiteFooter styles)
11. `rtl.css` (scoped exclusively to `[dir="rtl"]` and `html[lang^="ar"]`)

**RTL Bridge Behavior ([src/styles/rtl.css](../../src/styles/rtl.css#L169-L242)):**
- Untranslated legacy islands render inside `html[lang^="ar"] .legacy-page`, which forces `direction: ltr` and font `Inter` so that un-mirrored English copy and UI mockups do not break.
- Localized bodies (`.legacy-page.legacy-rtl`, currently only homepage `ar-EG`) opt into RTL layout and Tajawal typography. Inside them, embedded app-UI mockups are marked `[dir="ltr"]` to maintain English UI frames, while localized chat bubbles inside are marked `[dir="rtl"]`.

---

## 2. Comprehensive 38-Route Inventory

The table below catalogs every route in [src/app/[locale]/](../../src/app/%5Blocale%5D):

| Route | Page Purpose | Primary Message Today (Hero Headline Quoted) | Classification | Body Source File | Body Translated? (en / ar-EG / ar-SA) | Notes |
|---|---|---|---|---|---|---|
| `/` | Marketing Homepage | "Build AI employees that move work forward." | Product-led (focuses on building employee taxonomy rather than business ROI) | [home.ts](../../src/legacy-html/home.ts) / [home.ar-EG.ts](../../src/legacy-html/home.ar-EG.ts) | Yes / Yes / **No** (ar-SA falls back to English body) | Uses `TWINS` map; ar-EG hero: «ابنِ موظفين أذكياء بيدفعوا الشغل لقدّام» |
| `/ai-employees` | AI Employee Architecture | "Build AI employees, not chatbots." | Product-led (defines the agent construct instead of commercial outcomes) | [ai-employees.ts](../../src/legacy-html/ai-employees.ts) | Yes / No / No | 99% identical duplicate of `/product` |
| `/analytics` | Reporting & Performance | "Manage a workforce, not a black box." | Hybrid / Leaning Value-led (addresses executive visibility, but body lists chart features) | [analytics.ts](../../src/legacy-html/analytics.ts) | Yes / No / No | Displays funnel, cost-per-conversion, and follow-up metrics |
| `/api-docs` | Developer Documentation | "API Documentation" | Product / Dev-led (pure technical reference) | [api-docs.ts](../../src/legacy-html/api-docs.ts) | Yes / No / No | Subhead: "Build on GenuDo: create leads, trigger actions..." |
| `/api-mcp` | MCP & Extensibility | "Bring GenuDo into your stack." | Product-led (focuses on tokens, MCP server surfaces, and tool schemas) | [api-mcp.ts](../../src/legacy-html/api-mcp.ts) | Yes / No / No | Targets developers using Claude and ChatGPT plugins |
| `/blog` | Content Hub | "The GenuDo blog" | Content Directory | [blog.ts](../../src/legacy-html/blog.ts) | Yes / No / No | Hub for playbooks and product release articles |
| `/blog/ai-employees-vs-chatbots` | Thought Leadership Post | "AI employees vs. chatbots: what actually changed" | Value-led (explores accountability and outcome delivery vs novelty) | [blog-ai-employees-vs-chatbots.ts](../../src/legacy-html/blog-ai-employees-vs-chatbots.ts) | Yes / No / No | Excellent source of value messaging arguments |
| `/blog/cost-per-outcome` | Thought Leadership Post | "Stop measuring tokens. Measure cost per outcome." | Highly Value-led (contrasts vanity token metrics with commercial ROI) | [blog-cost-per-outcome.ts](../../src/legacy-html/blog-cost-per-outcome.ts) | Yes / No / No | Core thesis matches Value Pillar 3 (Cost Control) |
| `/blog/guardrails-that-matter` | Thought Leadership Post | "The guardrails that actually matter for customer-facing AI" | Value-led (addresses risk management, brand safety, and executive confidence) | [blog-guardrails-that-matter.ts](../../src/legacy-html/blog-guardrails-that-matter.ts) | Yes / No / No | Supports Trust & Security value narrative |
| `/blog/launch-analytics-center` | Feature Announcement Post | "Introducing the Analytics Center" | Product-led (feature release chronicle) | [blog-launch-analytics-center.ts](../../src/legacy-html/blog-launch-analytics-center.ts) | Yes / No / No | Historical announcement post |
| `/blog/pipeline-not-inbox` | Thought Leadership Post | "Why your AI needs a pipeline, not just an inbox" | Value-led (replaces reactive chat queues with conversion progress) | [blog-pipeline-not-inbox.ts](../../src/legacy-html/blog-pipeline-not-inbox.ts) | Yes / No / No | Foundation of Value Pillar 1 (Pipeline Execution) |
| `/blog/whatsapp-team-workflows` | Thought Leadership Post | "Run your team from WhatsApp (without the chaos)" | Value-led (focuses on operational discipline and response speed on WhatsApp) | [blog-whatsapp-team-workflows.ts](../../src/legacy-html/blog-whatsapp-team-workflows.ts) | Yes / No / No | Grounding for ROZ WhatsApp QC narrative |
| `/changelog` | Release Log | "Changelog" | Product-led (chronological product release notes) | [changelog.ts](../../src/legacy-html/changelog.ts) | Yes / No / No | — |
| `/channels` | Channel Integrations | "Meet people where they already are." | Product-led (catalogues messaging channels rather than customer responsiveness) | [channels.ts](../../src/legacy-html/channels.ts) | Yes / No / No | Lists WhatsApp, Instagram, Messenger, Webchat, Email |
| `/contact` | Contact & Inbound Sales | "Let's put an AI employee to work for you." | Value-led CTA (consultative sales initiation) | [contact.ts](../../src/legacy-html/contact.ts) | Yes / No / No | Includes lead form and direct WhatsApp CTA |
| `/contacts` | CRM & Identity | "One record per customer, across every channel." | Product-led (describes unified customer record fields and history) | [contacts.ts](../../src/legacy-html/contacts.ts) | Yes / No / No | Explains cross-channel deduplication |
| `/customers` | Social Proof & Case Studies | "Teams that put GenuDo to work." | Value-led (intends to showcase customer transformation) | [customers.ts](../../src/legacy-html/customers.ts) | Yes / No / No | Contains placeholder quotes and unverified case metrics |
| `/followups` | Nurture Automation | "The agent that never forgets to follow up." | Value-led hook / Product-led body (hook addresses cold leads; body explains timer dials) | [followups.ts](../../src/legacy-html/followups.ts) | Yes / No / No | Explains per-stage follow-up sequences and no-answer transitions |
| `/ind-camps-events` | Industry: Events & Camps | "Fill every session, answer every parent, on time." | Value-led (addresses seasonal spikes, ticket sales, parent inquiries) | [ind-camps-events.ts](../../src/legacy-html/ind-camps-events.ts) | Yes / No / No | High-intent industry landing page |
| `/ind-clinics` | Industry: Healthcare Clinics | "Book more appointments, answer patients faster." | Value-led (focuses on booking volume, patient prep, reducing no-shows) | [ind-clinics.ts](../../src/legacy-html/ind-clinics.ts) | Yes / No / No | High-converting niche; requires non-regulated positioning |
| `/ind-elearning` | Industry: Academies & EdTech | "Turn “just asking” into enrolled students." | Value-led (focuses directly on course inquiry-to-enrollment rate) | [ind-elearning.ts](../../src/legacy-html/ind-elearning.ts) | Yes / No / No | Top performing MENA vertical |
| `/ind-fitness` | Industry: Gyms & Fitness | "More members, fewer no-shows, front desk free." | Value-led (addresses front desk workload, trial bookings, and membership retention) | [ind-fitness.ts](../../src/legacy-html/ind-fitness.ts) | Yes / No / No | Focuses on WhatsApp trial class scheduling |
| `/ind-hospitality` | Industry: Travel & Hotels | "Support that keeps every trip moving." | Value-led (addresses 24/7 time zone inquiries, direct bookings, concierge support) | [ind-hospitality.ts](../../src/legacy-html/ind-hospitality.ts) | Yes / No / No | Highlights peak seasonal volume absorption |
| `/ind-marketing` | Industry: Marketing Agencies | "Turn the leads your campaigns generate into booked calls." | Highly Value-led (protects ad ROI by ensuring instant lead qualification) | [ind-marketing.ts](../../src/legacy-html/ind-marketing.ts) | Yes / No / No | Solves agency pain: clients claiming "leads are bad" |
| `/integrations` | Ecosystem & Connectors | "One hub between all your tools." | Product-led (lists tech stack integrations: CRMs, calendars, webhooks) | [integrations.ts](../../src/legacy-html/integrations.ts) | Yes / No / No | Catalogues Odoo, Zoho, HubSpot, Sheets, Zapier |
| `/knowledge` | Knowledge Base | "Grounded in your real business knowledge." | Product-led (focuses on CSV parsing, table schemas, and scraping mechanics) | [knowledge.ts](../../src/legacy-html/knowledge.ts) | Yes / No / No | Should be reframed to "Answers that never hallucinate" |
| `/models` | Smart Routing & LLMs | "The right brain for every task — automatically." | Product-led (explains token economics, provider fallbacks, model routing tiers) | [models.ts](../../src/legacy-html/models.ts) | Yes / No / No | Should be reframed to "Enterprise AI without massive cloud bills" |
| `/pipelines` | Pipeline Engine | "Turn conversations into a process." | Product-led (details Kanban board columns, stages, and transition mechanics) | [pipelines.ts](../../src/legacy-html/pipelines.ts) | Yes / No / No | The operational spine of the GenuDo platform |
| `/pricing` | Commercial Plans | "Simple pricing that scales with your conversations." | Product-led (presents plan features and message packages) | [pricing.ts](../../src/legacy-html/pricing.ts) | Yes / No / No | Pricing listed must be re-verified against owner authority |
| `/product` | Product Tour | "Build AI employees, not chatbots." | Product-led (features platform configuration drawers) | [product.ts](../../src/legacy-html/product.ts) | Yes / No / No | Duplicate of `/ai-employees` |
| `/resources` | Resources Directory | "Resources" | Resource Directory (index for API docs, blog, changelog) | [resources.ts](../../src/legacy-html/resources.ts) | Yes / No / No | Subhead: "Everything you need to build, extend and stay current..." |
| `/security` | Trust, Security & Compliance | "Security your customers can trust." | Value / Trust-led (reassures executives on data isolation and human control) | [security.ts](../../src/legacy-html/security.ts) | Yes / No / No | Covers data ownership, sandboxed webhooks, human approval |
| `/sol-customer-service` | Solution: Support Agent | "Customer service that answers in seconds and only escalates the hard ones." | Value-led (focuses on instant resolution and staff offloading) | [sol-customer-service.ts](../../src/legacy-html/sol-customer-service.ts) | Yes / No / No | Corresponds to production employee **Adnan (عدنان)** |
| `/sol-operations` | Solution: Operations Assistant | "The operations assistant that runs the follow-through nobody has time for." | Value-led (focuses on eliminating manual cross-system busywork) | [sol-operations.ts](../../src/legacy-html/sol-operations.ts) | Yes / No / No | Corresponds to production employee **ROZ (روز)** |
| `/sol-sales-agent` | Solution: Sales Agent | "A sales rep that never sleeps, never forgets a follow-up." | Highly Value-led (focuses on 24/7 lead qualification, booked meetings, revenue) | [sol-sales-agent.ts](../../src/legacy-html/sol-sales-agent.ts) | Yes / No / No | Corresponds to production employee **Aaref (عارف)** |
| `/stages` | Automation Stages | "Decide what happens the moment a deal moves." | Product-led (focuses on webhook triggers, entry rules, and payload mapping) | [stages.ts](../../src/legacy-html/stages.ts) | Yes / No / No | Belongs as an integrated section inside `/pipelines` |
| `/use-cases` | Role & Industry Directory | "One platform. Every team, every industry." | Product-led Directory (aggregates role cards and personas) | [use-cases.ts](../../src/legacy-html/use-cases.ts) | Yes / No / No | — |
| `/who-is-genu` | Mascot Lore & Brand Story | "Meet GENU ." | Brand / Lore-led (storytelling about the robot presenter) | [who-is-genu.ts](../../src/legacy-html/who-is-genu.ts) | Yes / No / No | Body is English island; only 6 intro modal strings translated |

---

## 3. Project Status & Completion Audit

### What is Done
1. **Shared React Chrome:** Modern App Router layout ([src/app/[locale]/layout.tsx](../../src/app/%5Blocale%5D/layout.tsx)) with fully componentized navigation ([SiteNav.tsx](../../src/components/SiteNav.tsx)), footer ([SiteFooter.tsx](../../src/components/SiteFooter.tsx)), and trilingual switcher ([LocaleSwitcher.tsx](../../src/components/LocaleSwitcher.tsx)).
2. **Edge Routing & Geo-Detection:** [src/middleware.ts](../../src/middleware.ts) cleanly negotiates locale prefixes, geo-redirecting GCC visitors to `/ar-SA` and other Arab visitors to `/ar-EG`.
3. **SEO Infrastructure:** [src/i18n/seo.ts](../../src/i18n/seo.ts) reliably emits canonical URLs, `hreflang` alternates (`en`, `ar-EG`, `ar-SA`, `x-default`), OpenGraph, Twitter metadata, and Organization/WebSite JSON-LD.
4. **All 38 Routes Functional:** All 38 routes build, execute, and render their legacy HTML island bodies without visual regressions.
5. **Egyptian Homepage Body Twin:** [home.ar-EG.ts](../../src/legacy-html/home.ar-EG.ts) delivers a complete Egyptian Arabic translation of the homepage body.

### What is Partially Done
1. **Homepage `ar-SA` Support:** The `/ar-SA` homepage route renders Arabic chrome, but the body falls back to English [home.ts](../../src/legacy-html/home.ts) because `TWINS['ar-SA']` is missing in [src/app/[locale]/page.tsx](../../src/app/%5Blocale%5D/page.tsx#L10).
2. **`who-is-genu` Translation:** `messages/*.json` contains 6 intro modal keys under `whoisgenu`, but the scrollable page body ([src/legacy-html/who-is-genu.ts](../../src/legacy-html/who-is-genu.ts)) is completely English.
3. **Message Catalogs:** Catalogs ([messages/en.json](../../messages/en.json), [messages/ar-EG.json](../../messages/ar-EG.json), [messages/ar-SA.json](../../messages/ar-SA.json)) cover `terms`, `nav`, `footer`, `common`, `home`, `whoisgenu`, and `seo`, but lack keys for any other page body.

### What is Not Started
1. **Componentization of Page Bodies:** Exactly **0 of 38 route bodies** have been converted from raw HTML islands into native React components.
2. **Translation of 37 Subpage Bodies:** No Arabic strings or twins exist for the remaining 37 routes.
3. **Value-Led Repositioning:** All pages remain in their legacy product-led phrasing.
4. **Integration of Video UI Mockups:** None of the synthetic product UI components from the video project have been incorporated into the website.

---

## 4. Known Technical Debt

1. **Monolithic HTML String Bloat:**
   The files in [src/legacy-html/](../../src/legacy-html) range from 11 KB to 67 KB on single lines. This prevents static analysis, TypeScript checking, IDE auto-completion, and component-level SSR optimization.
2. **DOM-Manipulating Legacy Scripts:**
   The application mounts raw browser scripts (`/js/genudo-site.js`, `/js/site2.js`, `/js/hero.js`, `/genu/genu-robot.js`) via `<LegacyScripts>`. These scripts attach listeners directly to `window` and mutate the DOM, creating potential race conditions with React's hydration cycle.
3. **Ghost Artifacts:**
   [src/legacy-html/GenuDo.ts](../../src/legacy-html/GenuDo.ts) (67,055 bytes) is an unreferenced raw export from `GenuDo.html`, superseded by `home.ts`.
4. **Obsolete Brand Personas in Codebase:**
   [src/styles/genudo-site.css](../../src/styles/genudo-site.css#L18-L25) defines unused color tokens named after eight old personas (`--scout` … `--ledger`). No page copy uses these names (verified by grep). Dead tokens; safe to remove or rename when the real employees (Aaref, Adnan, ROZ) get brand colors.
5. **Orphaned Routes in Navigation:**
   Route [/resources](../../src/app/%5Blocale%5D/resources/page.tsx) exists on disk and is indexed in `route-map.json`, but is omitted from [SiteNav.tsx](../../src/components/SiteNav.tsx) and [SiteFooter.tsx](../../src/components/SiteFooter.tsx).

---

## 5. Contradictions Between Documentation and Code

| Dimension | Documentation Claim | Actual Code Implementation | File Evidence |
|---|---|---|---|
| **Supported Locales** | [docs/ARCHITECTURE.md §Routing](../../docs/ARCHITECTURE.md#L63) and [docs/I18N-TRANSLATION.md §1](../../docs/I18N-TRANSLATION.md#L3) state locales are `['en', 'ar']` with default `en`. | Code implements trilingual routing: `['en', 'ar-EG', 'ar-SA']`. | [src/i18n/routing.ts:14](../../src/i18n/routing.ts#L14) |
| **Catalog Filenames** | [docs/I18N-TRANSLATION.md §1](../../docs/I18N-TRANSLATION.md#L11) specifies `messages/en.json` and `messages/ar.json`. | `messages/ar.json` does not exist. Catalogs are `en.json`, `ar-EG.json`, and `ar-SA.json`. | [messages/](../../messages) directory |
| **Arabic Register** | [docs/I18N-TRANSLATION.md §3](../../docs/I18N-TRANSLATION.md#L56) prescribes Modern Standard Arabic (MSA), stating: "Not dialectal." | Project strategy and [home.ar-EG.ts](../../src/legacy-html/home.ar-EG.ts) mandate Egyptian Arabic as the primary voice. | [home.ar-EG.ts](../../src/legacy-html/home.ar-EG.ts), [messages/ar-EG.json](../../messages/ar-EG.json) |
| **Translation Status** | [docs/I18N-TRANSLATION.md §5](../../docs/I18N-TRANSLATION.md#L116) states: "The shared UI + homepage + who-is-genu are fully translated." | `who-is-genu` body is 100% English. Homepage is translated only for `ar-EG`, not `ar-SA`. | [src/app/[locale]/who-is-genu/page.tsx:24](../../src/app/%5Blocale%5D/who-is-genu/page.tsx#L24), [src/app/[locale]/page.tsx:10](../../src/app/%5Blocale%5D/page.tsx#L10) |
| **CTA Vocabulary** | [docs/I18N-TRANSLATION.md §4](../../docs/I18N-TRANSLATION.md#L106-L108) mandates: "ابدأ الآن", "تحدّث إلى المبيعات", "احجز عرضًا توضيحيًا". | [messages/ar-EG.json](../../messages/ar-EG.json#L40-L45) implements Egyptian colloquial: "ابدأ دلوقتي", "كلّم فريق المبيعات", "احجز ديمو". | [messages/ar-EG.json](../../messages/ar-EG.json#L40-L45) |
| **Pipeline Term** | [docs/I18N-TRANSLATION.md §4](../../docs/I18N-TRANSLATION.md#L87) translates Pipeline to "مسار الصفقات". | Platform UI translation skill specifies "المسار / المسارات". | `$SKILLS/genudo-arabic-localization/SKILL.md` |
| **Route Count** | [docs/ARCHITECTURE.md §Goals](../../docs/ARCHITECTURE.md#L98) cites "40 pages × pixel-identical output". | Total routes in App Router is exactly 38. | [src/app/[locale]/](../../src/app/%5Blocale%5D) |
