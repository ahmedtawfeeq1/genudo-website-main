---
project: genudo-website
topic: brownfield-discovery-index
type: analysis
date: 2026-10-05
source: manual
tags: [discovery, bmad, index, executive-summary]
loredex: routed
---

# Brownfield Discovery: GenuDo Website & Platform Asset Ground-Truth

## Executive Summary

The GenuDo marketing website (genudo-website) is a hybrid Next.js 15 App Router codebase spanning 38 routes. It operates on a two-layer architecture: a shared React chrome layer (navigation, footer, locale switcher, SEO metadata) wrapping uncompiled raw HTML island bodies (`dangerouslySetInnerHTML`) imported from [src/legacy-html/](../../src/legacy-html). While the routing infrastructure supports trilingual routing (`en`, `ar-EG`, `ar-SA`) with geo-detection via [src/middleware.ts](../../src/middleware.ts), **37 of 38 route bodies remain 100% English islands**. Only the homepage has an Egyptian Arabic twin ([src/legacy-html/home.ar-EG.ts](../../src/legacy-html/home.ar-EG.ts)), while the `/ar-SA` locale on the homepage silently falls back to English markup. The site's current messaging is predominantly **product-led**, cataloguing low-level features (webhooks, knowledge tables, multi-model routing, Kanban stages) rather than business outcomes (revenue capture, 24/7 lead qualification, reduced cost per conversion). The site does not yet present the three named AI employees (Aaref, Adnan, ROZ) the platform and videos now use. Meanwhile, the companion video project (ai-generated-product-videos (`$VIDEO`)) contains a rich library of authentic Egyptian Arabic value messaging, a rigged 2.5D presenter mascot (GENU), a battle-tested light SaaS design system matching the real product, and high-fidelity mockups of the actual AI workforce platform (Aaref / عارف (`$VIDEO/GENUDO_PLATFORM_CONTEXT.md:213`), Adnan / عدنان (`$VIDEO/GENUDO_PLATFORM_CONTEXT.md:213`), Roz / روز (`$VIDEO/GENUDO_PLATFORM_CONTEXT.md:213`)). This discovery pass establishes the complete factual baseline required to reposition the web property to a value-led, Egyptian-first engine.

---

## Document Map

| Document | Description |
|---|---|
| [00-index.md](./00-index.md) | Master overview, document registry, and the top 10 strategic discovery findings. |
| [01-website-current-state.md](./01-website-current-state.md) | Exhaustive audit of the Next.js architecture, complete 38-route table, tech debt, and doc-vs-code contradictions. |
| [02-messaging-audit.md](./02-messaging-audit.md) | Feature-to-outcome translation map, 5 verified value pillars, industry pains, and IA recommendations. |
| [03-video-project-inventory.md](./03-video-project-inventory.md) | Video engine pipeline, brand design tokens vs website CSS mismatches, mascot rules, and 20 Egyptian voice samples. |
| [04-product-ui-components-catalog.md](./04-product-ui-components-catalog.md) | Catalog of video UI components, porting feasibility to Next.js, redacted screenshot inventory, and 10 homepage visuals. |
| [05-terminology-glossary.md](./05-terminology-glossary.md) | Master bilingual terminology matrix, terminology conflict resolutions, Latin rules, and technical terms to avoid. |
| [06-gaps-risks-open-questions.md](./06-gaps-risks-open-questions.md) | Implementation gaps, privacy/compliance risks, and 8 numbered single-line questions for the owner. |
| [07-product-platform-deep-dive.md](./07-product-platform-deep-dive.md) | 50 screen-verified customer workflows, 2.5D/3D character rigs, mobile apps, and video briefs. |
| [08-proposed-backlog.md](./08-proposed-backlog.md) | Reviewed draft backlog (7 epics), input for epics and stories. |
| [project-context.md](../../_bmad-output/project-context.md) | Lean BMad constitution (≤120 lines) containing non-obvious project invariants and rules. |

---

## Top 10 Discovery Findings (Ranked by Repositioning Impact)

1. **37 of 38 Route Bodies are Untranslated English Islands:**
   While [src/i18n/routing.ts](../../src/i18n/routing.ts) and [src/middleware.ts](../../src/middleware.ts) configure `en`, `ar-EG`, and `ar-SA`, only [src/app/[locale]/page.tsx](../../src/app/%5Blocale%5D/page.tsx) mounts a localized body twin ([home.ar-EG.ts](../../src/legacy-html/home.ar-EG.ts)). The remaining 37 routes mount English HTML strings inside Arabic chrome, directly contradicting the Egyptian-first business objective and the claim in [docs/I18N-TRANSLATION.md](../../docs/I18N-TRANSLATION.md#L116) that `who-is-genu` is translated.
2. **Website Does Not Show the Real AI Employees:**
   The website codebase ([src/styles/genudo-site.css](../../src/styles/genudo-site.css#L18-L25), [src/legacy-html/home.ts](../../src/legacy-html/home.ts)) never mentions the named employees. (Correction, reviewer: the old persona names Scout/Closer/Echo/Nova/Sage/Mira/Atlas/Ledger survive only as unused color tokens in genudo-site.css:23; no page copy uses them.) The actual production platform and video project (`$VIDEO/GENUDO_PLATFORM_CONTEXT.md:213`) deploy three named employees: **Aaref (عارف)** for sales/booking, **Adnan (عدنان)** for customer support/success, and **ROZ (روز)** for WhatsApp conversation quality control.
3. **Core Architectural Constraint: Raw Legacy HTML Islands:**
   All route bodies in [src/legacy-html/](../../src/legacy-html) are monolithic double-quoted or template strings (up to 67 KB on a single line) rendered via `dangerouslySetInnerHTML`. They cannot be translated via `next-intl` message catalogs without complete componentization into React JSX.
4. **Authentic Egyptian Arabic Voice Already Exists in Video Assets:**
   While [docs/I18N-TRANSLATION.md](../../docs/I18N-TRANSLATION.md#L1) specifies formal Modern Standard Arabic (MSA), the owner's actual strategic voice is grounded in natural, high-converting Egyptian Arabic, fully developed in `$VIDEO/docs/briefs/04-ai-workforce-arabic-v3-script.md` (e.g. «سؤال سريع… مين بيرد على عملائك الساعة اتنين بالليل؟», «واللي ما ردّش؟ المتابعة مش بتنسى»).
5. **Product-Led Duplication Bloats Site IA:**
   Routes [/ai-employees](../../src/app/%5Blocale%5D/ai-employees/page.tsx) and [/product](../../src/app/%5Blocale%5D/product/page.tsx) share virtually identical HTML bodies (12,013 bytes vs 12,152 bytes) with identical hero headlines ("Build AI employees, not chatbots"). Similarly, [/stages](../../src/app/%5Blocale%5D/stages/page.tsx) and [/pipelines](../../src/app/%5Blocale%5D/pipelines/page.tsx) isolate sub-features that belong together.
6. **Real Platform Capabilities Provide Concrete Value Pillars:**
   Production captures verified in `$VIDEO/GENUDO_PLATFORM_CONTEXT.md:79` prove that automated meeting bookings (`Get Available Slots`, `Book New Meeting`), logged webhook execution, smart multi-tier model routing (Gemini 3.1 Flash-Lite at $0.004 to Grok 4.3 at $0.018), and stage follow-ups are live in production.
7. **Severe Privacy Gate Governing Assets:**
   Production screenshots in docs/genudo-platform/screenshots/ (`$VIDEO/docs/genudo-platform/screenshots`) contain unblurred customer phone numbers, personal identities, webhook endpoints, and account emails. Under the strict privacy rule (`$VIDEO/GENUDO_PLATFORM_CONTEXT.md:64`), only the 15 sanitized assets in screenshots/_redacted/ (`$VIDEO/docs/genudo-platform/screenshots/_redacted`) and rebuilt synthetic UI components can be deployed to the website.
8. **Brand Spelling Invariant:**
   The brand name in Arabic has a mandatory tatweel after the nūn: **جينـو** and **جينـو دو** ([docs/I18N-TRANSLATION.md §3](../../docs/I18N-TRANSLATION.md#L71), [messages/ar-EG.json](../../messages/ar-EG.json)). Video VO scripts write «جينيو» strictly as an internal phonetic guide for Kokoro TTS, but public copy must use «جينـو».
9. **UI Mockup vs. Marketing Copy Terminology Tension:**
   A sharp terminology conflict exists between marketing copy and platform UI. For example, marketing refers to inbound prospects as "عملاء محتملين" (Leads), whereas the platform UI strictly labels CRM board items as "الفرص" (Opportunities) and outcomes as "الفرص المكتسبة / الضائعة" (`$SKILLS/genudo-arabic-localization/SKILL.md`). A clear separation rule is required.
10. **Ready-to-Port Video Motion Kit:**
    The video project's UI kit (`$VIDEO/src/ui/kit.tsx`) and film panes (`$VIDEO/src/films/ai-workforce-ar/PanesA.tsx`, `$VIDEO/src/films/ai-workforce-ar/PanesB.tsx`) provide modular, synthetic React components (PipelinesPane, KnowledgePane, InboxPane, FollowupsPane, TestPane, DashboardPane) that can be ported directly into the Next.js site to replace static screenshots.
