---
project: genudo-website
topic: proposed-backlog
type: analysis
date: 2026-10-05
source: claude-code
tags: [discovery, bmad, backlog, epics]
loredex: routed
---

# Proposed Backlog (input for bmad-create-epics-and-stories)

First draft by Gemini; reviewed by Claude against the owner decisions in [06 §4](./06-gaps-risks-open-questions.md). This is **input, not a plan**: the PRD and architecture decide the final epics. Reviewer changes are marked ✎.

## Epic 1: Foundations
- 1.1 Remove the unused legacy persona color tokens (`--scout` … `--ledger`). Add app-UI tokens **scoped to mockup components only**; the marketing site keeps its own palette. ✎ (Gemini proposed recoloring the whole site with app tokens.)
- 1.2 RTL hardening: logical properties in shared layouts; no letter-spacing or uppercase under `[dir=rtl]`.
- 1.3 Port the 2.5D SVG GENU rig (`$VIDEO/src/character/Genu.tsx`, `face.ts`) into `src/components/GenuRobot.tsx`, replacing `/genu/genu-robot.js`.
- ~~1.4 Three.js 3D hero mascot~~ ✎ **Dropped.** Heavy bundle that hurts LCP; the 2D rig covers the need.

## Epic 2: Value-led homepage (ar-EG first)
- 2.1 Egyptian hero and value pillars (02-messaging-audit §2). Copy is approved by the owner before build.
- 2.2 Pillars 1–2 visuals: port `BoardPane` and `PhoneWaPane` from `$VIDEO/src/films/ai-workforce-ar/Panes*.tsx` (already RTL Arabic) as static or CSS-animated React.
- 2.3 Pillar 3 visual: spend caps and smart routing **without vendor per-message prices** unless the owner approves publishing them. ✎
- 2.4 Pillar 4 visual: dialects and voice notes (`DialectPane`).
- 2.5 Pillar 5 visual: mobile takeover / hand back (`PhoneAppPane`).
- 2.6 Primary CTA. A WhatsApp demo with the "Farah" agent **needs owner approval**; the default is "Book a demo". ✎

## Epic 3: The three AI employees
- 3.1 Aaref (sales): qualify, follow up, book meetings.
- 3.2 Adnan (support): answers from the knowledge base, hands off to the team. ✎ No "zero hallucinations" claim.
- 3.3 ROZ (WhatsApp QC): QR connect, slow-reply and missed-opportunity flags.

## Epic 4: IA consolidation (owner decision D1)
- 4.1 `/product` + `/ai-employees` → `/how-it-works`, with 301s.
- 4.2 Fold `/stages`, `/pipelines`, `/followups`, `/knowledge`, `/models`, `/contacts` into How it works sections, each with a 301 and an anchor.
- 4.3 Rebuild the SiteNav and SiteFooter hierarchy.
- 4.4 Update the sitemap, hreflang and JSON-LD via `src/i18n/seo.ts`.

## Epic 5: Industry landing pages (`ind-*`)
Marketing agencies, clinics (non-diagnostic disclaimer), e-learning, fitness, hospitality, camps/events: outcome-first rewrites. ✎ No invented response-time numbers (Gemini's "30-second contact" was removed).

## Epic 6: Remaining pages + translation
- 6.1 `/pricing`: ✎ **content frozen** (D3). Translate and componentize only; no price changes.
- 6.2 `/security`: no RBAC or HIPAA claims.
- 6.3 `/api-mcp`: business framing ("run your AI team from Claude/ChatGPT").
- 6.4 Full ar-EG catalogs. Product labels follow the `genudo-arabic-localization` glossary.
- ~~6.5 ar-SA catalogs~~ ✎ **Paused** (D2).

## Epic 7: Launch QA
Privacy grep across build output and assets; Core Web Vitals; a11y and RTL audit on `/en` and `/ar-EG`; geo routing and `NEXT_LOCALE` smoke test.
