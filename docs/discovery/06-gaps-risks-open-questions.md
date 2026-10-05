---
project: genudo-website
topic: gaps-risks-open-questions
type: analysis
date: 2026-10-05
source: manual
tags: [discovery, bmad, gaps, risks, open-questions]
loredex: routed
---

# Strategic Gaps, Operational Risks & Open Questions

## 1. Gaps Blocking the Value-Led Rewrite

Before proceeding with the BMad PRD, architecture, and story generation phases, the following factual and asset gaps must be addressed:

| Gap ID | Dimension | Current Blocker | Impact on Repositioning | Recommended Remediation |
|---|---|---|---|---|
| **GAP-01** | **Customer Proof & Case Studies** | [src/legacy-html/customers.ts](../../src/legacy-html/customers.ts) relies on generic quotes and unverified placeholder metrics. No signed customer logos, video testimonials, or verified ROI stats exist on disk. | Weakens the "Value-Led" proposition. Business buyers require verifiable proof of results (revenue, response latency, saved hours). | Source 2–3 anonymized or owner-approved client case studies with verified metrics (e.g. clinic booking volume or agency lead conversion rate). |
| **GAP-02** | **Untranslated Page Bodies** | 37 of 38 route bodies exist only as English HTML strings in [src/legacy-html/](../../src/legacy-html). `who-is-genu` only has 6 modal strings translated; `/ar-SA/` on the homepage falls back to English markup. | Egyptian Arabic primary positioning is broken on 97% of the website surface. | Implement the BMad story pipeline to componentize and translate priority pages into native React with `messages/ar-EG.json`. |
| **GAP-03** | **Production Visuals for Real Employees** | No sanitized screenshots exist for employee **ROZ (روز)** (WhatsApp conversation QC) or employee **Adnan (عدنان)** (Customer Support). Only raw, unblurred mobile captures exist in git-ignored folders. | Cannot market the new 3-employee workforce (Aaref, Adnan, Roz) with real visual credibility. | Port synthetic React panes (`PanesA.tsx`, `PanesB.tsx`) from the video project to render interactive mockups on Next.js. |
| **GAP-04** | **Unverified Commercial Pricing** | Prices differ across internal sources (wiki capture, billing screens, the agent's quoted offer), see `$VIDEO/GENUDO_PLATFORM_CONTEXT.md:159`. Internal billing figures are deliberately not repeated here (public repo). | Cannot publish `/pricing` or quote packages on landing pages without risking revenue misquotes. | Owner must supply the single authoritative commercial price list for 2026. |
| **GAP-05** | **End-to-End Action Outcome Verification** | Stage action logs prove webhooks fire and return `200 OK` (execution logs in production), but end-to-end calendar event placement and Odoo lead stage transitions are not documented. | Claiming "guaranteed 100% meeting bookings" or "flawless CRM automation" risks overpromising. | Label booking flows as "automated scheduling triggers" rather than claiming guaranteed conversion percentages. |

---

## 2. Operational & Strategic Risks

```
                                      Risk Radar
  High Impact  │   [RISK-01: Privacy PII Leak]         [RISK-02: Claim Accuracy & RBAC]
               │
               │   [RISK-05: SEO IA Drops]             [RISK-03: Brand Drift & Personas]
  Low Impact   │                                       [RISK-04: Legacy HTML Tech Debt]
               └────────────────────────────────────────────────────────────────────────
                                 Low Likelihood                High Likelihood
```

### RISK-01: Accidental Privacy Breach (Customer PII Leaks)
- **Nature of Risk:** Raw platform screenshots in docs/genudo-platform/screenshots/ (`$VIDEO/docs/genudo-platform/screenshots`) contain unredacted Egyptian customer phone numbers, real names, personal WhatsApp chat transcripts, live webhook tokens, and the account owner's email (`$VIDEO/GENUDO_PLATFORM_CONTEXT.md:64`).
- **Potential Impact:** Catastrophic data privacy violation, regulatory exposure, and reputational damage if committed to the public web repo or rendered on public routes.
- **Mitigation Invariant:** Strict enforcement of the Privacy Gate. Never copy, embed, or transcribe assets outside `docs/genudo-platform/screenshots/_redacted/`. Use synthetic React components for all new UI visuals.

### RISK-02: Claim Inaccuracy & Compliance Liabilities
- **Nature of Risk:** Promising capabilities that the product does not support. Specifically:
  1. *Role-Based Access Control (RBAC):* The Knowledge Base explicitly confirms that RBAC is **not supported**; team members share login credentials (`$VIDEO/GENUDO_PLATFORM_CONTEXT.md:79`).
  2. *Regulated Compliance:* GenuDo does not have HIPAA, SOC2, or healthcare compliance certifications. Marketing copy claiming medical patient record management creates legal exposure.
  3. *Overpromising "Closes Deals Automatically":* Suggesting AI completely replaces sales closers rather than qualifying and scheduling meetings.
- **Potential Impact:** Enterprise sales friction, customer churn upon onboarding, and legal compliance risk.
- **Mitigation Invariant:** Adhere strictly to the "Safe vs. Careful" claims framework in `$VIDEO/GENUDO_PLATFORM_CONTEXT.md:141`.

### RISK-03: Brand Drift (Website vs Videos)
- **Nature of Risk:** The website never shows the named employees that the platform and video campaigns use: **Aaref (عارف)**, **Adnan (عدنان)**, and **Roz (روز)**.
- **Potential Impact:** Prospects arriving from video marketing campaigns experience cognitive dissonance when they land on a website describing completely different characters.
- **Mitigation Invariant:** Introduce the three named employees on the homepage and `sol-*` pages; drop the unused legacy persona color tokens.

### RISK-04: Legacy HTML Maintainability Deadlock
- **Nature of Risk:** Editing monolithic 67 KB raw HTML strings in [src/legacy-html/](../../src/legacy-html) without JSX structure or TypeScript compiler feedback makes ongoing content updates error-prone and tedious.
- **Potential Impact:** High development friction, regressed CSS styles, broken layout tags, and slow release cycles.
- **Mitigation Invariant:** Follow [docs/MIGRATION-GUIDE.md](../../docs/MIGRATION-GUIDE.md) to componentize route bodies into clean React JSX files during the rewrite pass.

### RISK-05: SEO Traffic Loss from Unplanned IA Merges
- **Nature of Risk:** Deleting or consolidating routes (e.g. merging `/product` into `/ai-employees`, or merging `/stages` into `/pipelines`) without implementing permanent 301 redirects and updated canonical tags.
- **Potential Impact:** 404 crawl errors, index de-ranking, and loss of established organic search equity.
- **Mitigation Invariant:** Any route restructuring must include permanent 301 redirects in [next.config.mjs](../../next.config.mjs) and updated sitemap generation in [src/i18n/seo.ts](../../src/i18n/seo.ts).

---

## 3. Numbered Open Questions for the Owner

The following 8 high-leverage strategic questions require explicit owner confirmation to unblock the PRD and architecture phases:

1. **What is the canonical public pricing for the website (Starter, Half-Yearly, Annual) and conversation credit top-up packs?**
2. **Do you approve the convention: Egyptian Arabic voice for marketing copy, but exact platform UI terms (المسار، المرحلة، الفرص) inside mockups?**
3. **Should `/product` and `/ai-employees` be merged into a single canonical `/how-it-works` route with 301 redirects?**
4. **Should `/stages` be merged into `/pipelines` with a 301 redirect?**
5. **Which primary customer industries should be featured as hero cards on the homepage (e.g. Real Estate, Healthcare Clinics, E-learning, Agencies)?**
6. **Should employee ROZ (روز) for WhatsApp quality control and operations have her own dedicated solution page (`/solutions/operations-roz`)?**
7. **Is "Farah" (فرح) the approved public name and WhatsApp demo persona for the primary website CTA?**
8. **For the Gulf locale (`ar-SA`), should we maintain a full Saudi Arabic twin copy or share the Egyptian Arabic copy with localized currency and CTAs?**

---

## 4. Owner Decisions (2026-10-05)

| # | Question | Decision |
|---|---|---|
| D1 | Information architecture | **Value-led IA.** Home → 3 AI employees (Aaref / Adnan / ROZ) → How it works → Industries → Pricing. Feature pages merge into How it works, with 301 redirects. |
| D2 | Gulf locale `ar-SA` | **Paused.** No new ar-SA copy during the rewrite. Gulf visitors are served ar-EG until the rewrite is done. |
| D3 | Pricing | **Keep the current pricing page content as-is.** Do not change prices or packages in this rewrite. |
| D4 | Terminology rule | **Resolved.** The `genudo-arabic-localization` skill is the authority: its glossary (MSA) is used for product labels in mockups, and marketing copy is Egyptian. This confirms the §3 rule in 05-terminology-glossary.md. |

Reviewer corrections (Claude, 2026-10-05): the old persona names exist only as unused CSS tokens. Internal metrics and billing figures were removed because the repo is public. Invented stats (60%+, 80%, "under 30 seconds") were removed. The "less than a cent per reply" claim is false (observed replies cost ~$0.01–0.02).
