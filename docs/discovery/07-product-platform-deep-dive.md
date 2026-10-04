---
project: genudo-website
topic: product-platform-deep-dive
type: analysis
date: 2026-10-05
source: manual
tags: [discovery, bmad, product-guides, animations, use-cases, mobile]
loredex: routed
---

# Product Platform Deep-Dive: Workflows, Animations & Use Cases

## 1. Executive Summary & Source Mapping

This deep dive synthesizes all technical, design, and product assets stored in the motion-graphics repository (ai-generated-product-videos (`$VIDEO`)). It extracts the authoritative operational mechanics of the GenuDo platform across 50 verified user workflows, character animation rigs (2.5D SVG and 3D Three.js), motion physics, mobile app architectures, and commercial production briefs.

```
┌────────────────────────────────────────────────────────────────────────┐
│ Product Assets in ai-generated-product-videos                          │
├────────────────────────────────────────────────────────────────────────┤
│ 1. Platform Workflows: docs/genudo-platform/genudo_guides.md (50 flows)│
│ 2. Character & Mascot Rigs: src/character/ (2.5D SVG) &                │
│    src/character3d/ (Three.js 3D), poses.ts, perform.ts, face.ts       │
│ 3. Motion Compositions: src/Root.tsx (AiWorkforce, AiWorkforceAr, etc.)│
│ 4. Briefs & Deliverables: docs/briefs/ (01-Widget, 02-Followups,       │
│    03-Voice Onboarding, 04-AI Workforce Arabic v3)                     │
│ 5. Audit Reports: coverage_report.md, team_access_audit.md             │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Platform Architecture: 50 Screen-Verified Workflows

The definitive platform guide (`$VIDEO/docs/genudo-platform/genudo_guides.md`) documents 50 concrete customer workflows verified against production screens. These provide ground-truth copy and interaction models for the website:

### Core Platform Spine (Navigation & Sections)
1. **Main Menu Structure (`$VIDEO/docs/genudo-platform/genudo_guides.md:5`):**
   - **Spine:** Dashboard
   - **BUILD:** Pipelines, Knowledge
   - **ENGAGE:** Inbox, Contacts
   - **DEVELOPER:** MCP Server, API Keys & Tokens, Documentation
   - **Footer:** Subscription/Plan card, Account Settings menu (Profile, Billing, Reminders, Language switch: English/العربية, Dark mode, Logout).
2. **Dashboard Performance (`$VIDEO/docs/genudo-platform/genudo_guides.md:17`):**
   - Filterable by pipeline selector and time ranges (`7d`, `30d`, `90d`, `Custom`).
   - KPIs: Total Opportunities, Active Opportunities, Opportunities Won (with win rate badge), Opportunities Lost, Total AI Cost (with per-message average), Cost Per Conversion.
   - Charts: **Pipeline Funnel** (with stage drop-offs), **Opportunity Trends** (flow over time), **Follow-Up Health** (Sent vs. Scheduled vs. Overdue), **Cost Over Time**, and **Cost by Stage**.

### Pipeline Engine & Stage Automation
3. **Pipeline Construction & Wizards (`$VIDEO/docs/genudo-platform/genudo_guides.md:54`):**
   - Fullscreen creation wizard: Name pipeline → Select agent primary role (**Sales Agent** or **Customer Service**) → Connect initial channel (`WhatsApp Cloud API`, `Web API`, `Widget`) → **Business Brief** (6 questions answered by text or voice transcription via microphone).
   - Generates initial 4-stage Kanban pipeline: **New Lead → Interested → Won / Lost**.
4. **Stage Rules & Opening Messages (genudo_guides.md:378, 392 (`$VIDEO/docs/genudo-platform/genudo_guides.md:378`)):**
   - Stages configure *When to Enter* (entry gating) and *What to Do* (prompt instructions and mandatory milestones).
   - Opening message toggles: Static text or AI-generated welcome.
   - Stage nature: Neutral, Winning, or Lost. Silent stage toggle suppresses automatic replies.
5. **Stage Actions & Webhooks (`$VIDEO/docs/genudo-platform/genudo_guides.md:404`):**
   - Webhook trigger types: `Stage Started`, `On Any Message`, `On User Message`, `AI Triggered`.
   - Methods: Default `POST`. Configures endpoint, retry counts (up to 5), max fires (e.g. 20), headers, payload, and sample response JSON.
   - Action Execution Logs: Full audit log displaying request timestamp, opportunity ID, status code (`200 OK`), request body, and response body. Verified in production.
6. **Dynamic Variables (`$VIDEO/docs/genudo-platform/genudo_guides.md:418`):**
   - Four variable sources: `Fixed`, `From Action`, `From System` (`opportunity.id`, `contact.name`, `contact.phone`), and `From AI`.
   - `From AI` variables dynamically extract parameters from customer conversations (e.g. `start_time_utc`, `client_needs`) for AI-triggered actions.
7. **Per-Stage Follow-Ups (`$VIDEO/docs/genudo-platform/genudo_guides.md:433`):**
   - Timed sequences configured per stage (intervals from minutes to months, e.g. 3 hours, then 24 hours).
   - "After sequence move to": Automatically transitions silent prospects to `Lost` or `No Answer`.
   - Attachments: Each follow-up supports dedicated media assets (video links, brochures, images).

### Knowledge Management & Guardrails
8. **Knowledge Tables (genudo_guides.md:95-145 (`$VIDEO/docs/genudo-platform/genudo_guides.md:95`)):**
   - Ingestion: Upload CSV/Excel (up to 10 MB) or create Blank Table.
   - Ingestion configuration: Specify ID column (or auto-generate UUID) and per-column data types (`Text`, `Number`, `Boolean`) with flags: `Retrieve`, `Search`, `Filter`, `Unique`.
   - "When to use" description tells the agent semantic retrieval criteria.
   - Connects to pipelines via tag chips. Production workspace shows 94 bilingual Q&A rows linked across 8 pipelines.
9. **Smart Routing & Budget Limits (genudo_guides.md:505, 531 (`$VIDEO/docs/genudo-platform/genudo_guides.md:505`)):**
   - Choice between Fixed Single Model or **Smart Routing**:
     - Router: Lightweight classifier.
     - Simple Tier: Routine greetings, confirmations (e.g. Gemini 3.1 Flash-Lite at ~$0.004/msg).
     - Moderate Tier: Standard Q&A, knowledge search.
     - Complex Tier: Deep reasoning, objection handling, negotiations (e.g. Grok 4.3 with Thinking at ~$0.018/msg).
   - Budget Guardrails: Hard spend cap per conversation (e.g. $2.00 max pauses AI and alerts team), max message ceiling (e.g. 150), memory retention days (e.g. 50 days), max follow-ups per hour.

### Engagement & Human Supervision
10. **Multi-Channel Inbox & Human Takeover (genudo_guides.md:157, 592, 634 (`$VIDEO/docs/genudo-platform/genudo_guides.md:157`)):**
    - Unified queue for WhatsApp, Instagram Direct, Facebook Messenger, Web Widget, and Web API.
    - Each AI response bubble shows: Cost (~$0.01), current Stage badge (e.g. Proposal), response latency (24–30s), confidence check.
    - Control Model: Green **"AI active"** toggle button. Clicking switches to paused state, re-enabling manual composer.
    - Right panel: Contact details, Opportunity stage selector, Conversation metrics (total messages, cost, avg response time), Private internal notes.
11. **Native Mobile App (genudo_guides.md:648, 661 (`$VIDEO/docs/genudo-platform/genudo_guides.md:648`)):**
    - iOS and Android apps with bottom navigation: **Dashboard / Pipelines / Inbox / Account**.
    - Top banner takeover: Shows *"AI is handling this chat"* with a `Take over` button. When clicked, banner updates to *"You are handling this chat"* with a `Hand back to AI` button.

---

## 3. Character Rigging & Animation Assets

The repository contains two complete production-grade implementations of the mascot, **GENU**:

```
                  GENU Character Rig Systems
   ┌───────────────────────────────────┬───────────────────────────────────┐
   │                                   │                                   │
┌──▼───────────────────────────┐    ┌──▼───────────────────────────────────┐
│ 2.5D SVG Rig (Video & Web)   │    │ 3D Three.js Rig (Hero Web Embed)     │
│ - src/character/Genu.tsx     │    │ - src/character3d/GenuRobot3D.tsx    │
│ - src/character/face.ts      │    │ - src/character3d/GenuNextBoard.tsx  │
│ - src/character/rig.ts       │    │ - True 3D geometry + orbit rings     │
│ - src/character/poses.ts     │    │ - Viewport 200x232 proportional build│
└──────────────────────────────┘    └──────────────────────────────────────┘
```

### The 2.5D SVG Rig (`$VIDEO/src/character/Genu.tsx`)
- **Architecture:** Pure SVG rendering driven by a `GenuPose` state object. Moving elements (visor, chest light, paddle depth, orbit particles) simulate 3D rotation without GPU load.
- **Pixel Visor Face (`$VIDEO/src/character/face.ts`):**
  - Dark visor background (`#0C0A1C`).
  - Pixel eyes (`#9EA2FF`) and mouth (`#6B6FD6`) on a 5-unit grid.
  - Expressions: `idle`, `happy`, `work`, `done`, `worried`, `surprised`, `wink`, `blink`.
  - Dynamic visemes: Lip-sync generated from voice audio envelope via `$VIDEO/src/character/perform.ts`.
- **Procedural Poses & Gestures (`$VIDEO/src/character/poses.ts`):**
  - Gestures: `wave`, `point`, `present`, `celebrate`, `typing`, `think`, `listen`, `shrug`.
  - Props: `laptop`, `phone`, `chart`, `calendar`, `doc`, `checklist`, `headset`, `search`, `megaphone`, `gears`, `heart`, `deal`, `think`.
  - Rig mathematics (`$VIDEO/src/character/rig.ts`): Calculates exact `handOffset` and `standFor` coordinates so paddle arm tips land on specific UI button targets.
- **ROZ (روز) Character Variant (`$VIDEO/src/character/RozPreview.tsx`):**
  - Pink hue-shifted shell with a small top bow and pixel eyelashes. Represents the WhatsApp quality control and operations employee.

### The 3D Three.js Rig (`$VIDEO/src/character3d/GenuRobot3D.tsx`)
- Complete 1:1 Three.js 3D implementation maintaining the exact SVG proportions (viewBox 200×232).
- Rounded capsule head, ear antennas, visor with pixel canvas texture, chest light, floating paddle arms, and revolving orbit particles.
- Embedded in `$VIDEO/src/character3d/GenuNextBoard.tsx`, interacting dynamically with a 3D perspective Kanban board.

---

## 4. Production Video Briefs & Use Cases

The repository contains four finalized production briefs that articulate high-converting market use cases:

### Brief 01: Embeddable AI Chat Widget (`$VIDEO/docs/briefs/01-ai-chat-widget.md`)
- **Hook:** *"Your website. Now it sells."*
- **Angle:** Turn passive web traffic into booked calls in minutes.
- **Key Beats:** Customizing brand color → Light/Dark theme toggle → Greeting message → Lead capture form (Name, Email, Phone) → Multi-format attachments (images, voice notes) → Live multi-device preview (Desktop, Tablet, Mobile).

### Brief 02: Relentless Follow-Up Sequence (deliverables/02-followups-reel/ (`$VIDEO/deliverables/02-followups-reel`))
- **Hook:** *"The salesperson that never forgets."*
- **Angle:** Re-engage silent leads automatically without badgering reps.
- **Key Beats:** Pipeline board → Prospect goes quiet → Stage timer triggers (3 hours, 24 hours) → Rich video asset delivered on WhatsApp → Customer replies → Stage automatically advances.

### Brief 03: Voice-First Business Onboarding (`$VIDEO/docs/briefs/03-voice-first-onboarding.md`)
- **Hook:** *"Answer 6 questions out loud. Get a sales agent."*
- **Angle:** Eliminate tedious prompt engineering.
- **Key Beats:** Wizard launches → Tap microphone → Describe your business in your native Arabic dialect → Audio transcribed and structured → Agent generated with 4 base stages (`New Lead → Interested → Won / Lost`) in under 3 minutes.

### Brief 04 v3: The Arabic AI Workforce Flagship (`$VIDEO/docs/briefs/04-ai-workforce-arabic-v3-plan.md`)
- **Story Spine:**
  1. *Hook:* Who answers your customers at 2:00 AM? Inquiries wait, leads go to competitors.
  2. *First Employee — ROZ (روز):* Connect company WhatsApp line via QR. Roz reviews conversations, flags slow replies and unanswered questions.
  3. *AI Insights:* Ask Claude or ChatGPT where deals are being lost.
  4. *Hire the Workforce:* Deploy **Aaref (عارف)** for inbound sales and calendar booking; deploy **Adnan (عدنان)** for 24/7 customer support and onboarding.
  5. *Dialects & Knowledge:* 14 regional Arabic dialects, voice-note listening, structured pricing tables.
  6. *Closing & Confirmation:* Automatic meeting booking with Google Meet link cards sent on WhatsApp.
  7. *Control & Cost:* Unified multi-channel inbox, one-click mobile takeover, Smart Routing under $0.01/reply.
  8. *CTA:* Chat with **Farah (فرح)**, our AI sales agent on WhatsApp.

---

## 5. Technical Audit: Team Access & Platform Limits

1. **Team Access & RBAC (`$VIDEO/docs/genudo-platform/team_access_audit.md`):**
   - Audit confirms that the platform does **not** currently provide role-based permission screens (e.g. Admin vs. Agent vs. Read-Only).
   - Knowledge base explicitly confirms that team members share workspace credentials.
   - *Marketing Invariant:* Website copy must **never** claim role-based access control or fine-grained employee permissions are live today.
2. **Coverage & Integration Audit (`$VIDEO/docs/genudo-platform/coverage_report.md`):**
   - Verified active connectors: WhatsApp Cloud API, WhatsApp Mobile Connector (QR code linking), Instagram Direct, Facebook Messenger, Webhook endpoints.
   - ChatGPT & Claude Plugins: "Genudo - AI Workforce" verified with 29 tools, 22 skills, and 6 autonomous agents. All write operations are previewed as a diff before execution.
