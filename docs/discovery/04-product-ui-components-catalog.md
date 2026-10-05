---
project: genudo-website
topic: product-ui-components-catalog
type: analysis
date: 2026-10-05
source: manual
tags: [discovery, bmad, ui-components, design-system, mockups, screenshots]
loredex: routed
---

# Product UI Components & Visual Assets Catalog

## 1. Video UI Kit & Film Panes Component Catalog

The video repository contains a mature, synthetic UI component library built with React and inline CSS styling that mirrors the real GenuDo platform. These components were engineered specifically to render crisp, pixel-perfect product mockups at video resolution (1080×1920 / 1920×1080) with 100% fictional data.

Below is an exhaustive catalog of components found across `$VIDEO/src/ui/kit.tsx`, `$VIDEO/src/ui/icons.tsx`, and the film panes in src/films/ai-workforce-ar/ (`$VIDEO/src/films/ai-workforce-ar`):

| Component Name | Product Screen / Element Depicted | Props & Data Dependencies | File & Location | Remotion Dependent? | Effort to Port to Next.js | Privacy Status |
|---|---|---|---|---|---|---|
| `Box` | Absolute positioning container with RTL auto-mirroring | `x, y, w, h, r, children, style` | `$VIDEO/src/ui/kit.tsx:32` | No | **Low** (pure React/CSS) | Safe (layout utility) |
| `Pressable` | Interactive button/card with tactile click/sink effect | `x, y, w, h, r, press, on, primary, children` | `$VIDEO/src/ui/kit.tsx:49` | No (can use CSS hover/active) | **Low** | Safe (UI primitive) |
| `UiText` | Typography node respecting active RTL font face | `size, weight, color, children, style` | `$VIDEO/src/ui/kit.tsx:18` | No | **Low** | Safe (UI primitive) |
| `Chip` | Metadata pill (channels, statuses, tags) | `children, color, bg, size, style` | `$VIDEO/src/ui/kit.tsx:94` | No | **Low** | Safe |
| `Avatar` | Contact or agent circular avatar with initials | `text, bg, color, size, x, y` | `$VIDEO/src/ui/kit.tsx:106` | No | **Low** | Safe |
| `Bubble` | Customer/Agent chat message bubble with timestamp | `text, sender, time, channel, isAi` | `$VIDEO/src/films/ai-workforce-ar/PanesA.tsx:556` | No | **Low** | Fictional demo data |
| `PipelinesPane` | Pipeline list view with active toggles and metrics | `pipelines: Array<{ name, role, won, active }>` | `$VIDEO/src/films/ai-workforce-ar/PanesA.tsx:84` | No | **Medium** | Safe (fictional metrics) |
| `WizardPane` | 3-step pipeline creation wizard modal | `step, pipelineName, role, channel` | `$VIDEO/src/films/ai-workforce-ar/PanesA.tsx:216` | No | **Medium** | Safe (fictional choices) |
| `BriefPane` | 6-question Business Brief onboarding dialog | `questionIndex, currentAnswer, isVoiceActive` | `$VIDEO/src/films/ai-workforce-ar/PanesA.tsx:324` | No | **Medium** | Safe (sample business) |
| `KnowledgePane` | Knowledge base table view (Q&A rows, upload card) | `rows: Array<{ q, a, status }>, trainedCount` | `$VIDEO/src/films/ai-workforce-ar/PanesA.tsx:436` | No | **Medium** | Safe (bilingual demo Q&A) |
| `StagePane` | Stage editor drawer showing entry rules & actions | `stageName, whenToEnter, whatToDo, actions` | `$VIDEO/src/films/ai-workforce-ar/PanesA.tsx:492` | No | **Medium** | Safe (fictional prompt rules) |
| `BoardPane` | Kanban pipeline board with opportunity cards | `stages: Array<{ name, count, cards }>` | `$VIDEO/src/films/ai-workforce-ar/PanesA.tsx:540` | No | **Medium** | Safe (invented leads) |
| `InboxPane` | Multi-channel inbox with conversation list & chat | `threads, activeThread, aiActiveToggle` | `$VIDEO/src/films/ai-workforce-ar/PanesA.tsx:610` | No | **Medium** | Safe (invented Egyptian chats) |
| `ActionPane` | Stage webhook automation drawer & execution logs | `actionName, endpointUrl, triggerType, logs` | `$VIDEO/src/films/ai-workforce-ar/PanesA.tsx:750` | No | **Medium** | Safe (fictional `api.example.com`) |
| `DialectPane` | Language & 14 Arabic regional dialects selector | `selectedDialect, availableDialects` | `$VIDEO/src/films/ai-workforce-ar/PanesB.tsx:48` | No | **Low** | Safe (system setting) |
| `FollowupsPane` | Timed follow-up sequence builder (3h, 24h, video) | `followups: Array<{ delay, msg, asset }>` | `$VIDEO/src/films/ai-workforce-ar/PanesB.tsx:112` | No | **Medium** | Safe (fictional follow-up copy) |
| `PhoneWaPane` | WhatsApp customer-facing chat showing meeting card | `chatMessages, meetLinkCard, confirmBadge` | `$VIDEO/src/films/ai-workforce-ar/PanesB.tsx:210` | No | **Medium** | Safe (clean mock meeting) |
| `TestPane` | In-app "Test AI" panel with cost & confidence | `userMessage, aiReply, latencyMs, cost, conf` | `$VIDEO/src/films/ai-workforce-ar/PanesB.tsx:320` | Yes (typing ticker; easy to do in CSS) | **Low** | Safe (shows ~$0.008 cost) |
| `CostPane` | Smart Routing tier config (Simple/Mod/Complex) | `tiers: Array<{ tier, model, costPerMsg }>` | `$VIDEO/src/films/ai-workforce-ar/PanesB.tsx:415` | No | **Low** | Safe (verified model pricing) |
| `DashboardPane` | KPI summary cards, Pipeline Funnel, & Cost Donut | `kpis: { total, active, won, cost, cpc }, funnel` | `$VIDEO/src/films/ai-workforce-ar/PanesB.tsx:510` | Yes (interpolated counts; can use static) | **Medium** | Safe (curated aggregate demo) |
| `PhoneAppPane` | Mobile app view with Take Over / Hand Back | `activeChat, takeoverState, composerEnabled` | `$VIDEO/src/films/ai-workforce-ar/PanesB.tsx:680` | No | **Medium** | Safe (fictional phone chat) |
| `ClaudePane` | Codex / Claude chat with "Genudo - AI Workforce" | `promptText, aiResponse, diffPreview` | `$VIDEO/src/films/ai-workforce-ar/PanesB.tsx:790` | Yes (typewriter effect) | **Medium** | Safe (fictional prompt) |

---

## 2. Redacted Screenshots Inventory (Publicly Usable)

Per `$VIDEO/CLAUDE.md:15` and `$VIDEO/GENUDO_PLATFORM_CONTEXT.md:64`, unredacted captures cannot be published to the marketing site. Only files in `docs/genudo-platform/screenshots/_redacted/` are certified for public deployment.

Below is the verified inventory of sanitized desktop and mobile assets available for immediate web use:

### Desktop Sanitized Assets (docs/genudo-platform/screenshots/_redacted/ (`$VIDEO/docs/genudo-platform/screenshots/_redacted`))

| Filename | What It Shows | Suggested Website Placement |
|---|---|---|
| `wizard-start.png` | Empty New Pipeline wizard (Name, Sales vs Support role, Channel) | How It Works / Onboarding Section |
| `wizard-start-filled.png` | Filled New Pipeline wizard ready to advance | Interactive Tour / How It Works |
| `wizard-business-brief-q1.png` | Question 1 of Business Brief with voice transcription mic | Voice-First Onboarding Showcase |
| `board-4-stages-layout-only.png` | Pipeline board showing 4 stages without customer PII | Pipelines & Funnel Section |
| `stage-menu.png` | Stage action drop-down menu (Edit, Add Action, Settings) | Stage Automation Breakdown |
| `editor-instructions-head.png` | Persona prompt editor drawer with dialect & instruction inputs | Cultural Fluency & Customization Section |
| `editor-assets-head.png` | Follow-up media asset uploader (video links, PDFs) | Relentless Follow-up Section |
| `followup-dialog.png` | Configure Follow-up dialog (timing dials: 3 hours, 24 hours) | Relentless Follow-up Feature Card |
| `widget-appearance.png` | Embeddable Web Chat Widget builder (accent color, theme) | Channels & Web Widget Section |
| `widget-messages.png` | Widget greeting and opening messages configuration | Channels & Web Widget Section |
| `widget-lead-form.png` | Widget pre-chat lead capture form (Name, Email, Phone) | Lead Generation & Capture Section |
| `mcp-claude-plugin.png` | Claude Marketplace listing: "Genudo - AI Workforce" | Developer / Claude & ChatGPT Integration |
| `mcp-what-you-can-do.png` | MCP capability summary card (Architect, Doctor, Analyst) | Extensibility & AI Copilot Section |
| `mobile-test-ai-empty.png` | Mobile Test AI conversation view with empty state | Mobile App Showcase |

### Mobile Sanitized Captures (docs/genudo-platform/screenshots/_redacted/mobile/ (`$VIDEO/docs/genudo-platform/screenshots/_redacted/mobile`))
*(Derived from `$VIDEO/docs/genudo-platform/screenshots/_redacted/mobile/INDEX.csv` — 1080×2340 phone captures with masks applied over real customer data)*

| Filename | What It Shows | Suggested Website Placement |
|---|---|---|
| `mobile-01-chat-human-handling-hand-back.jpg` | Active conversation: "You are handling this chat" + `Hand back to AI` | Human Control & Takeover Section |
| `mobile-05-chat-ai-handling-take-over.jpg` | Active conversation: "AI is handling this chat" + `Take over` button | Human Control & Takeover Section |
| `mobile-02-test-ai-whatsapp-conversation.jpg` | WhatsApp test chat showing per-reply cost (~$0.01) and response time | Cost Control / Speed to Lead Section |
| `mobile-03-test-ai-instagram-empty.jpg` | Instagram DM test chat clean layout | Multi-Channel Section |
| `mobile-04-contact-details.jpg` | Contact profile sheet with stage selector and conversation stats | Mobile CRM & Contact History |
| `mobile-06-inbox-filters.jpg` | Mobile inbox filter bottom-sheet (channels, pipelines, status) | Mobile Team Inbox Section |
| `mobile-07-pipelines-list.jpg` | Mobile pipelines screen: 5/11 active, won/active/lost badges | Mobile Executive Dashboard |
| `mobile-09-inbox-list.jpg` | Mobile inbox thread list with channel badges and AI indicators | Mobile Team Inbox Section |
| `mobile-13-dashboard-kpis.jpg` | Mobile Dashboard hero cards: Total Leads, Won, Cost per Conversion | Mobile Performance / Analytics |
| `mobile-14-dashboard-pipeline-funnel.jpg` | Mobile Pipeline Funnel chart showing drop-off stages | Conversion Analytics Section |
| `mobile-10-dashboard-cost-by-stage.jpg` | Mobile bar chart: Total AI cost breakdown by pipeline stage | Cost Control Section |
| `mobile-11-dashboard-cost-by-stage-follow-up-health.jpg` | Follow-up health donut: Sent vs Scheduled vs Overdue | Automated Follow-ups Section |
| `mobile-12-dashboard-trends-cost-over-time.jpg` | Opportunity trends and AI cost timeline line graph | Performance & ROI Section |

---

## 3. Shortlist: 10 High-Converting Homepage Visuals

To replace generic stock cards with grounded proof, the repositioned homepage should feature these 10 visual assets mapped directly to the core value pillars:

```
Homepage Visual Flow:
[Hero: BoardPane + Aaref] ──► [Pillar 1: PhoneWaPane + Meet Link] ──► [Pillar 2: ActionPane + Odoo Sync]
                                          │
[Pillar 5: Mobile Takeover] ◄── [Pillar 4: DialectPane + Audio] ◄── [Pillar 3: CostPane + Router]
```

1. **Hero Proof Visual: The 24/7 AI Pipeline Board**
   - *Source Component:* `BoardPane` (`$VIDEO/src/films/ai-workforce-ar/PanesA.tsx:540`) or `board-4-stages-layout-only.png`.
   - *Value Pillar:* **Pillar 1 (24/7 Speed to Lead)**.
   - *What It Communicates:* Shows incoming inquiries moving through qualification stages in real-time under employee **Aaref**.
2. **The WhatsApp Meeting Confirmation Card**
   - *Source Component:* `PhoneWaPane` (`$VIDEO/src/films/ai-workforce-ar/PanesB.tsx:210`).
   - *Value Pillar:* **Pillar 2 (Conversations That Close)**.
   - *What It Communicates:* The tangible moment of closing: the agent checks available calendar slots and sends a Google Meet confirmation card on WhatsApp.
3. **Automated Stage Action Execution**
   - *Source Component:* `ActionPane` (`$VIDEO/src/films/ai-workforce-ar/PanesA.tsx:750`) with sanitized cURL logs.
   - *Value Pillar:* **Pillar 2 (Conversations That Close)**.
   - *What It Communicates:* Shows the engine syncing qualified leads directly with Odoo CRM and calendars without human intervention.
4. **Smart Routing & Per-Message Cost Breakdown**
   - *Source Component:* `CostPane` (`$VIDEO/src/films/ai-workforce-ar/PanesB.tsx:415`).
   - *Value Pillar:* **Pillar 3 (Predictive Cost Control)**.
   - *What It Communicates:* Visually demonstrates how Smart Routing saves money: routine chats route to Gemini 3.1 Flash-Lite at $0.004, while complex sales negotiations use Grok 4.3.
5. **Conversation Spending Cap Guardrail**
   - *Source Component:* Synthetic drawer based on Limits & Budget settings (`$VIDEO/GENUDO_PLATFORM_CONTEXT.md:45`).
   - *Value Pillar:* **Pillar 3 (Predictive Cost Control)**.
   - *What It Communicates:* Shows the configurable $2.00 max spend cap and message limit that automatically pauses the AI before runaway costs occur.
6. **Arabic Dialect & Audio Voice-Note Selector**
   - *Source Component:* `DialectPane` (`$VIDEO/src/films/ai-workforce-ar/PanesB.tsx:48`).
   - *Value Pillar:* **Pillar 4 (Cultural Fluency)**.
   - *What It Communicates:* Highlighting 14 native Arabic dialects (Egyptian, Saudi, Emirati, Moroccan, etc.) and native audio voice-note waveform listening.
7. **Zero-Hallucination Knowledge Table**
   - *Source Component:* `KnowledgePane` (`$VIDEO/src/films/ai-workforce-ar/PanesA.tsx:436`).
   - *Value Pillar:* **Pillar 4 (Grounded Knowledge)**.
   - *What It Communicates:* Displays bilingual structured Q&A tables and CSV uploads with "when to use" search guardrails.
8. **Relentless Follow-Up Sequence Builder**
   - *Source Component:* `FollowupsPane` (`$VIDEO/src/films/ai-workforce-ar/PanesB.tsx:112`) or `followup-dialog.png`.
   - *Value Pillar:* **Pillar 1 (Zero Leaked Inquiries)**.
   - *What It Communicates:* Demonstrates timed nudge intervals (3 hours, 24 hours, video asset) re-engaging cold leads automatically.
9. **Instant Mobile Takeover & Hand Back**
   - *Source Component:* `PhoneAppPane` (`$VIDEO/src/films/ai-workforce-ar/PanesB.tsx:680`) or `mobile-01-chat-human-handling-hand-back.jpg`.
   - *Value Pillar:* **Pillar 5 (Human Control & Mobility)**.
   - *What It Communicates:* Gives business owners confidence that they can step in with one tap on their iPhone or Android and hand control back when finished.
10. **Executive Conversion & Cost-per-Outcome Funnel**
    - *Source Component:* `DashboardPane` (`$VIDEO/src/films/ai-workforce-ar/PanesB.tsx:510`) or `mobile-14-dashboard-pipeline-funnel.jpg`.
    - *Value Pillar:* **Pillar 1 & 3 (Funnel Transparency)**.
    - *What It Communicates:* Clean, executive-level dashboard showing total conversations, won deals, and cost per conversion without token jargon.
