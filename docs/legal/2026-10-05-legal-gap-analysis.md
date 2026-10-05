---
project: genudo-website
topic: legal-gap-analysis-mena
type: analysis
date: 2026-10-05
source: claude-code
tags: [legal, privacy, egypt-pdpl, ksa-pdpl, uae-pdpl, terms-of-service]
loredex: routed
---

> **Prepared by an AI assistant for review by qualified counsel. Not legal advice.** Method: Anthropic `privacy-legal:reg-gap-analysis` (scope → extract requirements → diff → prioritise → remediation). Sources: no legal-research connector was available; citations come from the web sources listed at the end or model knowledge, tagged per item. The highest-risk items to spot-check are effective dates, decree numbers and notification deadlines.

# Legal pages: MENA gap analysis and remediation plan

## What was published on the website (2026-10-05)

- `/en/legal/privacy-policy` and `/en/legal/terms-of-service`: **the existing GenuDo policies, verbatim** (versions "Last Updated: 30/11/2025", previously served from genudo.ai). No legal substance was changed.
- `/ar-EG/legal/...`: a faithful Arabic translation in formal legal Arabic (فصحى قانونية), not the site's Egyptian marketing voice. Each page states that the English version prevails unless the applicable law requires otherwise. Counsel should confirm that precedence clause per jurisdiction (see G8).
- Old URLs `/privacy-policy`, `/terms-of-service` and `/legal/*.md` redirect permanently to the new pages, so links already given to Meta (WhatsApp Business / app review), app stores and customers keep working.

The changes below are **proposed, not published**. They need counsel sign-off because they change what GenuDo promises.

## Scope

| Regime | Applies? | Status of current policy |
|---|---|---|
| Egypt PDPL (Law 151/2020) + Executive Regulations (Decree 816/2025) `[web search — verify]` | Yes: Egyptian customers and end users | Law cited; **Executive Regulations not reflected** |
| KSA PDPL (Royal Decree M/19) + implementing regulations `[settled]` | Yes | Covered (rights, 72-hour SDAIA breach notice, localisation) |
| UAE PDPL (Federal Decree-Law 45/2021) `[settled]` | Yes | Covered |
| Bahrain PDPL (Law 30/2018) `[settled]` | Yes | Listed |
| EU GDPR `[settled]` | EU data subjects | Covered |

Egypt is the regime that changed. The Executive Regulations were issued 1 Nov 2025 (Ministerial Decree 816/2025, in force the next day) with a **one-year grace period to 1 Nov 2026** `[web search — verify]`.

## Gap list

| # | Requirement | Current state | Gap | Effort | Risk |
|---|---|---|---|---|---|
| G1 | Egypt ER: notify the PDPC within **72 h** of a breach; notify data subjects within **3 business days** of notifying the PDPC `[web search — verify]` | Policy: 72 h to PDPC ✅; data subjects "immediate notification for high-risk breaches" | **Partial** (subject-notice timing and trigger differ) | Policy text | Medium |
| G2 | Egypt ER: controller/processor **licence or permit** from the PDPC; **separate licence for cross-border transfers** naming recipient countries `[web search — verify]` | "We obtain necessary licences … when required" (generic) | **Partial**: no reference to the ER, licence status or recipient countries | Licence application + policy text | **High** (deadline 1 Nov 2026) |
| G3 | Egypt ER: **DPO** meeting qualification criteria and **registered with the PDPC** `[web search — verify]` | DPO named (dpo@genudo.ai) "for KSA, UAE and others" | **Partial**: Egypt registration not stated | Registration + policy text | High |
| G4 | Egypt ER: separate **licence for electronic direct marketing**; consent rules differ for own vs. third-party marketing `[web search — verify]` | Not addressed. GenuDo sends follow-ups **on customers' behalf** | **Full gap** in ToS (customer responsibility) and PP | ToS + PP text; confirm GenuDo's own role | High |
| G5 | Egypt ER: controllers/processors outside Egypt must appoint a **representative in Egypt** approved by the PDPC `[web search — verify]` | Not addressed | **Unknown**: depends on GenuDo's legal entity location (not stated in the policies) | Corporate fact check | Medium |
| G6 | Transparency for **ROZ** (WhatsApp mobile linked by QR; reviews the customer's **own employees'** WhatsApp conversations, transcribes voice notes) | Not mentioned | **Full gap**: new processing of employee and third-party data; employee-monitoring and notice duties fall on the customer | PP + ToS text; DPIA recommended | **High** |
| G7 | Disclosure of the **mobile app** and the **Claude/ChatGPT plugin (MCP)** data flows | Not mentioned | **Full gap** (transparency) | PP text | Medium |
| G8 | Language-precedence clause for bilingual policies (Arabic may be required to prevail for consumers in some jurisdictions) `[verify]` | Policies were English-only | **New** | Counsel decision | Medium |
| G9 | ER: data used for **AI training** must not harm data subjects `[web search — verify]` | Strong "No AI model training" commitment ✅ | None | — | — |
| G10 | Platform note: ROZ connects through WhatsApp "Linked devices" (not the official WhatsApp Business API). WhatsApp's own terms for automated or unofficial clients may restrict this `[verify]` | Not addressed | **Product/legal risk**, not a policy gap | Counsel + product review | High |
| G11 | Sub-processor list now includes China-based AI providers (DeepSeek, Z.AI, Alibaba Cloud/Qwen, Moonshot AI/Kimi) plus xAI `[owner provided]` | Policy's transfer sections cover UAE/KSA/Egypt/EU outbound transfers only; "No AI model training" section says only OpenAI, Anthropic and Google are "contractually restricted from using your data for model training" | **Full gap**: (1) no transfer basis or Egypt cross-border licence listing China; (2) training-restriction promise must be confirmed for every listed provider or reworded | DPAs/terms with each provider; transfer licence; policy text | **High** |

## Remediation plan

### Must-do before 1 Nov 2026 (Egypt enforcement)

| Gap | Fix | Owner | Due | Status |
|---|---|---|---|---|
| G2 | Apply for PDPC controller/processor licence and cross-border transfer licence; list recipient countries (e.g. hosting region) | Founder + counsel | 2026-10-31 | [ ] |
| G3 | Register the DPO with the PDPC; state it in the policy | Founder + counsel | 2026-10-31 | [ ] |
| G1 | Update the Egypt breach clause (draft A1 below) | Counsel | 2026-10-31 | [ ] |
| G4 | Add direct-marketing responsibilities (drafts A2, A3) | Counsel | 2026-10-31 | [ ] |
| G6 | Add the ROZ section and customer obligations (drafts A4, A5); run a DPIA | Counsel + product | 2026-10-31 | [ ] |

### Should-do

| Gap | Fix | Owner | Due | Status |
|---|---|---|---|---|
| G5 | Confirm entity location; appoint an Egyptian representative if needed | Founder | 2026-11-30 | [ ] |
| G7 | Add mobile app + MCP disclosures (draft A6) | Counsel | 2026-11-30 | [ ] |
| G8 | Confirm the precedence clause per market | Counsel | 2026-11-30 | [ ] |
| G10 | Review WhatsApp terms for linked-device automation; consider the official API for ROZ | Product + counsel | 2026-11-30 | [ ] |

### Already compliant

KSA 72-hour SDAIA breach notice; UAE and GDPR rights; no-AI-training commitment; encryption; DPO contact; cross-border safeguards (SCCs); children's privacy; cookie consent section.

## Proposed amendment drafts (English; translate after counsel approval)

**A1, Privacy Policy › Data Breach Notification › For Egypt Customers.** Replace with:
> Notification to the Personal Data Protection Center within seventy-two (72) hours of becoming aware of a personal data breach, in accordance with Law No. 151 of 2020 and its Executive Regulations; notification of affected data subjects within three (3) business days of notifying the Center; and documentation of every breach, its likely impact and remedial measures in a secure electronic record.

**A2, Terms of Service › 4.3 Communication Channel Compliance (new paragraph).**
> Where the Customer uses the Service to send marketing or promotional messages, including automated follow-ups, the Customer is solely responsible for obtaining and recording each recipient's prior consent and for holding any licence or permit required for electronic direct marketing under applicable law, including the Executive Regulations of Egypt's Personal Data Protection Law.

**A3, Privacy Policy › Consent Management (new bullet).**
> Marketing messages sent through the platform on behalf of our customers are sent under the customer's responsibility as controller; the customer must hold the recipient's consent and any required direct-marketing licence.

**A4, Privacy Policy (new section) › "Conversation Review (ROZ)".**
> If a customer enables ROZ, the customer links its own company WhatsApp account to the platform. GenuDo then processes the messages, voice notes and contact details in those conversations, on the customer's instructions and as its processor, to produce quality reviews (for example, slow replies, stalled deals and missed opportunities) and transcripts. The customer is the controller of this data and is responsible for informing its employees and their contacts, and for having a lawful basis under applicable employment and data protection law.

**A5, Terms of Service › 3.3 Compliance with Laws (new bullet).**
> If the Customer enables conversation review (ROZ), the Customer represents that it has informed affected employees and obtained any consents or approvals required by applicable employment, labour and data protection law, and that it will link only WhatsApp accounts owned or controlled by the Customer.

**A6, Privacy Policy › Information We Collect (new items).**
> Mobile application: device identifiers, push-notification tokens and app usage needed to deliver notifications and let you take over conversations. Connected AI assistants: if you connect GenuDo to an AI assistant such as Claude or ChatGPT through our plugin or MCP server, the data you request through that assistant is shared with its provider under that provider's terms; changes are shown for your confirmation before they are applied.

## Change log (published)

- **2026-10-05, owner instruction:** Privacy Policy vendor list corrected in EN and AR. Removed Supabase, Unipile, Loop-X, Stripe, PayPal (no longer used). Hosting and database: AWS only. AI model providers: OpenAI, Anthropic, Google Gemini, xAI, DeepSeek, Z.AI, Alibaba Cloud (Qwen), Moonshot AI (Kimi). Channels: Meta (WhatsApp Business API, Instagram, Messenger). Payments: PayTabs. "Last Updated" set to 05/10/2026. **Counsel to confirm** (see G11).

## Defects found in the English source (fix in the master, then re-translate the line)

- **ToS §6.7(a)** cites "Section 11 (Term and Termination)"; in this document §11 is Limitation of Liability and Term and Termination is **§7**. The Arabic mirrors the English as written.
- **ToS** names Saudi Arabia's "CITC"; the regulator was renamed the **Communications, Space and Technology Commission (CST)** `[verify]`.
- **ToS §7.1(d)**: "Confirming receipt of such cancellation from Genudo" is ambiguous about who confirms; the Arabic keeps the ambiguity.

## Arabic version notes

- Translated in formal legal Arabic from the 30/11/2025 English text, in 8 parallel parts with a shared glossary (`docs/legal/ARABIC-LEGAL-GLOSSARY.md`), then harmonised: list labels use Arabic letters (أ)(ب)(ج) consistently (291/291 labels match the English), defined terms follow ToS §1 («مدة الاشتراك», «قنوات التواصل», «بيانات العميل» …).
- Structure parity verified by script: every heading, bullet, separator, email and URL matches the English.
- One added gloss: the email subject "Data Subject Request" stays in English (so inbound requests still match) with «(طلب صاحب بيانات)» after it.
- Recommend a native Arabic-speaking lawyer review before relying on the Arabic version, especially if counsel decides Arabic should prevail (G8).

## Sources

- Shalakany, *New Executive Regulations for Egypt's Personal Data Protection Law* (Dec 2025): https://shalakany.com/wp-content/uploads/2025/12/New-Executive-Regulations-for-Egypts-Personal-Data-Protection-Law-.pdf `[web search — verify]`
- Legal500, *Overview of the Executive Regulations of the Egyptian PDPL*: https://www.legal500.com/developments/thought-leadership/overview-of-the-executive-regulations-of-the-egyptian-personal-data-protection-law/ `[web search — verify]`
- Baker McKenzie, *Egypt: Important Data Protection Update* (Jan 2026): https://www.bakermckenzie.com/en/insight/publications/2026/01/egypt-important-data-protection-update `[web search — verify]`

> Citations in this output were generated by an AI model and have not been verified against a primary source. Before relying on any regulation, statute, guidance or enforcement action, check it against a legal research tool or the issuing authority's website (Official Gazette / PDPC). AI-generated citations are sometimes fabricated or misquoted; items tagged `verify` carry the higher risk.

## Next steps (counsel picks)

1. Approve A1–A6 → translate → publish with a new "Last Updated" date.
2. Escalate G2/G3/G5 (licensing, DPO registration, representative) to Egyptian counsel now; the deadline is fixed.
3. Get facts: GenuDo's legal entity and registered address (not stated anywhere in the current policies), hosting regions.
4. Product review of G10 before scaling ROZ.
