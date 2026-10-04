---
project: genudo-website
topic: value-led-website-build-brief
type: note
date: 2026-10-05
source: claude-code
tags: [website, build-brief, value-led, arabic, workflow]
---

# Value-led website: build brief (contract for every builder)

Read this whole file before touching anything. Deeper context: `_bmad-output/project-context.md` and `docs/discovery/` (02 messaging, 03 Egyptian voice samples, 04 UI catalog, 05 glossary, 07 product deep dive).

## 1. The goal in one line

The site sells **what changes in the customer's business**, not what the software has. Every hero, section title and CTA states an outcome. Features appear only as proof under an outcome ("how we do it"). Buyers are business owners, sales and support leads, and agency owners in Egypt and MENA.

## 2. Language rules

- **Egyptian Arabic (`ar-EG`) is the primary site.** Write the Arabic as an original Egyptian page, not a translation of the English. Draft it first, then write the English page with the same sections and the same claims.
- **Egyptian register for marketing copy:** professional and warm. Use بيـ present tense, مش, دلوقتي, أكتر, إزاي, اللي, علشان. Sample lines: «مين بيرد على عملائك الساعة اتنين بالليل؟», «المتابعة مش بتنسى». More samples in `docs/discovery/03-video-project-inventory.md`. Never MSA headlines, never Gulf words.
- **Brand spelling:** GENU = جينـو, GenuDo = جينـو دو (with the tatweel). Employee names: عارف (Aaref), عدنان (Adnan), روز (ROZ).
- **Product UI inside mockups uses the `genudo-arabic-localization` skill glossary verbatim, in MSA.** It lives at `/Users/tawfeeq/.claude/skills/synced/f9fb8148-c3cd-4bb7-b8f4-e7c5b34df056_6311b07f-b23d-4002-9c11-6de6fde11bc3/genudo-arabic-localization/SKILL.md`; read §2–§5. Examples: المسار، المرحلة، الفرص المكتسبة / الضائعة، المتابعات (مُرسلة / مجدولة / متأخرة)، حالة المتابعات، قاعدة المعرفة، صندوق الوارد، جهات الاتصال، اختبار الوكيل، تدخّل بشري، الإجراءات، مسار التحويل، لوحة التحكم. Never رابح/خاسر, never "صحة المتابعات".
- **Keep in Latin:** WhatsApp, Instagram, Messenger, Meta, GenuDo inside product chrome, API, MCP, CRM, Claude, ChatGPT, Odoo, Zendesk, Zoho Desk, HubSpot, Google Calendar.
- **Numbers and dates:** Western digits only (0-9), never ٠١٢. Dates like `1 يناير 2029`. Wrap mixed Arabic + Latin/number runs in `<bdi>` (e.g. `<bdi>$0.02</bdi> / رسالة`, `<bdi>WhatsApp</bdi>`).
- **CTA wording:** EN "Book a demo" / "Start free" / "Talk to us". AR «احجز ديمو» / «ابدأ دلوقتي» / «كلّمنا». Book a demo → `/contact`. Start → `https://app.genudo.ai/auth/register`. Log in → `https://app.genudo.ai/auth/login`.
- **Avoid in value copy (EN and AR):** webhook, payload, MCP server, token, knowledge table, router/tier, kanban. Say what it does for the business instead ("updates your CRM the moment a customer is ready"). Technical words may appear only in small "how it works" proof lines and on `/api-mcp`, `/api-docs` and `/integrations`.

## 3. The value story (use these pillars; don't invent new claims)

| Pillar | Outcome (headline material) | Proof (verified features) |
|---|---|---|
| 1. Every customer answered, day and night | No message waits until morning; no lead goes cold | Instant replies on WhatsApp, Instagram, Messenger and website chat; per-stage follow-up sequences that chase silent leads, then mark them lost after the sequence |
| 2. Conversations that move to a sale | Qualified leads and booked meetings, not small talk | Stages that move each opportunity forward; actions that look up free slots, book meetings and update the CRM; data the AI collects from the chat |
| 3. Predictable, capped AI cost | You know what every reply and every outcome costs | Smart routing sends simple messages to cheaper models; per-conversation spend caps pause the AI and alert the team; the cost per reply and per stage is visible |
| 4. Speaks like your customers | Arabic that sounds local, answers that come from your own facts | Arabic with 14 regional dialects or auto multi-dialect; understands voice notes and images; answers from your knowledge base (prices, policies, schedules) |
| 5. You stay in control | Take over any chat in one tap, from your phone | Unified inbox; AI on/off per conversation (Take over / Hand back to AI); private notes; mobile app; ROZ reviews your human team's WhatsApp chats |

**The three AI employees** (an employee = one pipeline; you can hire several):
- **Aaref عارف (Sales):** answers inquiries, qualifies, follows up, helps book meetings. Page: `/sol-sales-agent`.
- **Adnan عدنان (Support & success):** answers from your knowledge base, routes issues to your team, works with Zoho Desk / Zendesk. Page: `/sol-customer-service`.
- **ROZ روز (Quality control & operations):** reviews your human team's WhatsApp conversations on company lines, flags slow replies, stalled deals and missed opportunities, and transcribes voice notes. Connects by scanning a QR. Page: `/sol-operations`.
- **GENU جينـو** is the brand mascot and guide character (the friendly robot), not an employee.

## 4. Claims safety (hard rules)

- **No numbers you can't source:** no conversion rates, response times, % resolved, customer counts, ROI multipliers or "X hours saved", unless the number is already on the current page and plainly attributed to a named customer quote.
- Never claim role-based permissions, HIPAA, SOC 2, "zero hallucinations", "guaranteed bookings" or "100%" anything. Clinics: scheduling and admin questions only, never diagnosis.
- Never publish internal metrics, billing, account names or pipeline names (this repo is public).
- **Prices appear only on `/pricing`,** and that page's prices and packages stay exactly as they are now (owner decision D3).
- **Mockups use fictional data only:** invented names (EN: "Mona Adel", "Karim Saeed"; AR: «منى عادل», «كريم سعيد»), phones like `+20 100 000 0000`, `@example.com` emails. Never copy names or text from screenshots.

## 5. Information architecture (owner decision D1)

Nav order: **AI employees** (Aaref, Adnan, ROZ) · **Industries** (6) · **How it works** · **Pricing** · **Resources** (customers, blog, use cases, security, integrations, developers) · **Who is GENU**.

| Route | Action |
|---|---|
| `/` | Rebuild value-led (EN + AR) |
| `/who-is-genu` | Rebuild around the current GENU character, film assets and the three employees (EN + AR) |
| `/how-it-works` | **New.** The value-framed product tour that replaces the dropped feature pages. Needs these section ids: `#employees`, `#pipelines`, `#followups`, `#knowledge`, `#models`, `#channels`, `#analytics` (redirect targets) |
| `/sol-sales-agent`, `/sol-customer-service`, `/sol-operations` | Optimize value-first around Aaref / Adnan / ROZ (EN + AR) |
| `/ind-marketing`, `/ind-elearning`, `/ind-fitness`, `/ind-clinics`, `/ind-hospitality`, `/ind-camps-events` | Optimize outcome-first per industry (EN + AR) |
| `/use-cases`, `/integrations`, `/customers`, `/security`, `/api-mcp`, `/contact` | Optimize value framing (EN + AR) |
| `/pricing` | Translate to AR only; EN content unchanged except fixing links to dropped pages |
| `/api-docs`, `/changelog`, `/resources`, `/blog` + 6 posts | Translate to AR; light value polish on EN; fix links to dropped pages |
| **Dropped:** `/product`, `/ai-employees`, `/pipelines`, `/stages`, `/followups`, `/knowledge`, `/models`, `/channels`, `/contacts`, `/analytics` | Routes are deleted. 301s to `/how-it-works#…` already exist in `next.config.mjs`. Their `src/legacy-html/*.ts` files remain only as source material for `/how-it-works` until the end |

Never link to a dropped route. Use `/how-it-works#<id>` instead.

## 6. Technical contract

- **Body files.** For a page `<name>`: `src/legacy-html/<name>.ts` (English) and `src/legacy-html/<name>.ar-EG.ts` (Egyptian Arabic). Format:
  ```ts
  // <route> — value-led rewrite (EN). See docs/website/BUILD-BRIEF.md.
  const html = `...markup...`;
  export default html;
  ```
  Template literal only. The markup must contain **no backticks and no `${`**. You may rewrite the existing JSON-string files into this format.
- **page.tsx pattern** (`src/app/[locale]/<route>/page.tsx`):
  ```tsx
  import { setRequestLocale } from 'next-intl/server';
  import en from '@/legacy-html/<name>';
  import ar from '@/legacy-html/<name>.ar-EG';
  import LegacyBody from '@/components/LegacyBody';
  import LegacyScripts from '@/components/LegacyScripts';
  import BodyNav from '@/components/BodyNav';
  import { pageMetadata } from '@/i18n/seo';
  import '@/styles/pages/<name>.css';   // only if you need page CSS
  export const generateMetadata = pageMetadata({ route: '/<route>', seoKey: '<existingSeoKey>' });
  export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);
    return (<><BodyNav value="<same as before>" /><LegacyBody locale={locale} en={en} ar={ar} /><LegacyScripts scripts={[...same as before unless you change behaviour]} /></>);
  }
  ```
  `LegacyBody` adds the locale to internal links (write plain `href="/pricing"`) and switches to RTL for Arabic.
- **Styling.** Reuse the existing site classes first (look at the current markup and `src/styles/*.css`). Put new CSS in `src/styles/pages/<name>.css` with **every selector prefixed** by a page root class (`.pg-<name> …`; put `class="pg-<name>"` on your outermost wrapper). Use logical properties only (`margin-inline-start`, `padding-inline`, `inset-inline-start`, `text-align: start`). No `letter-spacing` or `text-transform: uppercase` on Arabic.
- **Mobile-first is mandatory.** Design at 390px wide first, then 768 and 1200. No horizontal scrolling at 360px. Images and videos: `max-width:100%; height:auto`. Tap targets at least 44px. Grids collapse to one column under 720px. Font size at least 15px for body copy on mobile. Test mentally every row of cards and every mockup at 360px.
- **Mockups.** Use the shared kit in `src/styles/mockups.css` (snippets in `docs/website/MOCKUP-KIT.md`). EN pages get English mockups. AR pages get Arabic RTL mockups with skill-glossary labels: **do not** put `dir="ltr"` on Arabic mockups (that is the old bridge rule, now retired). Fictional data only.
- **Media** (all in `public/media`, safe to publish):
  - `video/ai-workforce-en.mp4`, `video/ai-workforce-ar.mp4`: flagship AI-workforce films (EN 90s, AR 180s)
  - `video/followups-en.mp4`, `video/followups-ar.mp4` (+ `-vertical` 9:16 variants): the follow-up story
  - `video/chat-widget-en.mp4`: website chat widget
  - `video/genu-motion.mp4`, `video/genu-pose-library.mp4`: GENU character motion (silent)
  - Each video has a `.jpg` poster next to it. Better posters: `img/ai-workforce-poster.jpg`
  - `img/genu-2d-rig-sheet.jpg`, `img/genu-rig-sheet.jpg`, `img/genu-pose-library.jpg`, `img/genu-all-angles.jpg`, `img/genu-2d-v2-upgrades.jpg`, `img/genu-robot-3d-board.jpg`, `img/GENU-icon.svg`, `img/genu-avatar.svg`
  - `shots/*.jpg`: redacted real product screenshots (board, follow-up dialog, MCP plugin, widget, wizard, mobile app screens)

  Video markup: `<video src="/media/video/x.mp4" poster="/media/video/x.jpg" controls playsinline preload="none"></video>`. Silent loops: `autoplay muted loop playsinline`. Use AR videos on AR pages when one exists.
- **Existing GENU robot:** pages mount `/genu/genu-robot.js` via LegacyScripts. Keep the existing robot markup patterns if you use the robot.
- **Do not edit shared files:** `messages/*.json`, `SiteNav.tsx`, `SiteFooter.tsx`, `seo.ts`, `sitemap.ts`, `next.config.mjs`, `layout.tsx`, `rtl.css`, `mockups.css`, `LegacyBody.tsx`, or other pages' files. Return SEO titles and descriptions in your structured output; the integrator merges them.
- **Verify before you finish:** run `npx tsc --noEmit -p .` (must pass for your files) and grep your AR file for `جينو` without tatweel, Arabic-Indic digits `[٠-٩]`, and links to dropped routes.
