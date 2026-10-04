---
project: genudo-website
topic: project-context
type: analysis
date: 2026-10-05
source: manual
tags: [discovery, bmad, constitution, project-context]
loredex: routed
---

# GenuDo Website: Agent Constitution & Invariants

## 1. Core Invariants & Non-Obvious Rules

- **Primary Locale:** Egyptian Arabic (`ar-EG`) is the **source of truth for brand voice and conversion**. English (`en`) is secondary. Gulf Arabic (`ar-SA`) is PAUSED during the rewrite (owner decision D2, see 06-gaps-risks-open-questions.md §4).
- **Brand Spelling:** Arabic brand names require a tatweel after the nūn: **جينـو** (never «جينو») and **جينـو دو** ([docs/I18N-TRANSLATION.md](../docs/I18N-TRANSLATION.md#L71)). Spoken script phonetic spelling «جينيو» is strictly internal to TTS and forbidden in public text.
- **Value-Led Messaging Law:** Headlines and hero copy must state the **commercial business outcome** (e.g. "No lead goes cold", "Book meetings 24/7", "Predictable, capped AI cost"). Technical features (webhooks, knowledge tables, smart routing, kanban boards) are strictly proof points beneath outcomes.
- **Terminology Separation Rule:** Marketing copy speaks natural, persuasive Egyptian Arabic («مين بيرد على عملائك؟», «ابدأ دلوقتي»). Product-object nouns inside UI mockups (Pipeline/المسار, Stage/المرحلة, Opportunity/الفرصة, Follow-up/المتابعة) must use exact platform terms from [05-terminology-glossary.md](../docs/discovery/05-terminology-glossary.md).
- **Privacy Gate:** NEVER commit, embed, or transcribe real customer data (names, phones, emails, chats, webhook URLs, tokens, sidebar account email). Only assets from `docs/genudo-platform/screenshots/_redacted/` or synthetic React UI components are permitted (`$VIDEO/GENUDO_PLATFORM_CONTEXT.md:64`).
- **Public Repo:** This repo is PUBLIC. Never commit internal production metrics, billing figures, account names or pipeline names, even in docs.
- **Claims Safety:** Never invent customer results or claim guaranteed sales. Role-based access control (RBAC) is **unsupported** (team members share credentials). Healthcare/HIPAA compliance is **not supported** (`$VIDEO/GENUDO_PLATFORM_CONTEXT.md:141`).

## 1b. Owner Decisions (2026-10-05) and Translation Authority

- **Arabic terminology authority:** the `genudo-arabic-localization` skill (`$SKILLS/genudo-arabic-localization/SKILL.md`). Product-object labels inside UI mockups use its §2 glossary verbatim, in MSA (المسار، المرحلة، الفرص المكتسبة/الضائعة، حالة المتابعات، اختبار الوكيل، التوثيق). Marketing copy around them stays Egyptian. Follow its §4 number/date rules (Western digits, `1 يناير 2029`, `<bdi>` on mixed strings) and §5 RTL checklist.
- **IA:** value-led. Home → 3 AI employees → How it works → Industries → Pricing. Feature pages merge into How it works; every removed route gets a 301 plus sitemap/hreflang update.
- **ar-SA paused:** no new Gulf copy; Gulf visitors get ar-EG during the rewrite.
- **Pricing frozen:** keep the current `/pricing` content; never invent or change prices.
- **Visual source:** the video project (`$VIDEO` = `/Users/tawfeeq/Business/GenuDo/Product/ai-generated-product-videos`). Its Arabic film panes (`src/films/ai-workforce-ar/Panes*.tsx`) are already RTL Arabic product UI. Port them as static or CSS-animated React (drop Remotion's time-driven `seek(t)` model). The old "keep mockups English/LTR" bridge rule ends for rewritten pages.

## 2. Tech Stack & Architecture Map

- **Stack:** Next.js 15.1.0 (App Router), React 18.3.1, TypeScript 5.5.3, `next-intl` 3.26.0. Node ≥ 20.12.
- **Two-Layer Pattern:** Real React chrome ([SiteNav.tsx](../src/components/SiteNav.tsx), [SiteFooter.tsx](../src/components/SiteFooter.tsx)) wraps legacy HTML islands rendered via `dangerouslySetInnerHTML`.
- **Migration Invariant:** Componentize route bodies incrementally per [docs/MIGRATION-GUIDE.md](../docs/MIGRATION-GUIDE.md). Replace island blocks with native React components wired to `messages/en.json` and `messages/ar-EG.json`.
- **SEO & Routing Hub:** [src/i18n/routing.ts](../src/i18n/routing.ts) defines locales; [src/middleware.ts](../src/middleware.ts) handles Geo-IP redirection; [src/i18n/seo.ts](../src/i18n/seo.ts) is the single source of truth for metadata, canonicals, hreflang, and JSON-LD.
- **RTL & Logical CSS:** All new CSS must use CSS logical properties (`margin-inline`, `padding-inline`, `inset-inline-start`, `text-align: start`). Never use negative letter-spacing or uppercase transforms on Arabic text (`$SKILLS/genudo-arabic-localization/SKILL.md`).

## 3. Canonical Employee Personas

The platform has three production employees (the website must use these; legacy `--scout`… CSS tokens are unused):
1. **Aaref (عارف):** Sales & Booking (WhatsApp/IG lead qualification, calendar booking, CRM sync).
2. **Adnan (عدنان):** Customer Support & Success (24/7 knowledge base support, Zendesk escalation).
3. **ROZ (روز):** Quality Control & Operations (monitors team WhatsApp lines via QR, flags slow replies).

## 4. Deep Authoritative References

- Architecture & Routes: [01-website-current-state.md](../docs/discovery/01-website-current-state.md)
- Value Pillars & IA Strategy: [02-messaging-audit.md](../docs/discovery/02-messaging-audit.md)
- Brand Tokens & Voice Samples: [03-video-project-inventory.md](../docs/discovery/03-video-project-inventory.md)
- Product UI Catalog & Screenshots: [04-product-ui-components-catalog.md](../docs/discovery/04-product-ui-components-catalog.md)
- Master Bilingual Glossary: [05-terminology-glossary.md](../docs/discovery/05-terminology-glossary.md)
- Strategic Gaps & Risks: [06-gaps-risks-open-questions.md](../docs/discovery/06-gaps-risks-open-questions.md)
- Workflows, Character Rigs & Use Cases: [07-product-platform-deep-dive.md](../docs/discovery/07-product-platform-deep-dive.md)
