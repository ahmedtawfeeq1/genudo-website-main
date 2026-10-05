---
project: genudo-website
topic: video-project-inventory
type: analysis
date: 2026-10-05
source: manual
tags: [discovery, bmad, video-project, motion-kit, brand-tokens, arabic-voice]
loredex: routed
---

# Video Project Inventory: Brand Assets, Design Tokens & Arabic Voice

## 1. Video Project Overview & Architecture

The companion motion-graphics repository (ai-generated-product-videos (`$VIDEO`)) is an automated programmatic video production pipeline built on **Remotion** (React for video), deterministic TypeScript spring physics, local TTS voiceover synthesis, and synthetic SVG character rigging.

```
┌────────────────────────────────────────────────────────────────────────┐
│ Video Pipeline Architecture (ai-generated-product-videos)              │
├────────────────────────────────────────────────────────────────────────┤
│ 1. Script & Voice: script.json -> offline Kokoro TTS (af_heart) or     │
│    ElevenLabs Arabic -> vo.wav + vo.json (100 Hz mouth visemes)        │
│ 2. Character Rig: src/character/Genu.tsx (2.5D SVG mascot, EVE paddles,│
│    pixel visor face, 3D yaw/pitch turns, props)                        │
│ 3. Brand Theme & UI Kit: src/theme.ts, src/ui/kit.tsx, src/ui/icons.tsx│
│    (Light SaaS aesthetic sampled directly from production Dashboard)   │
│ 4. Film Panes: src/films/ai-workforce-ar/PanesA.tsx, PanesB.tsx         │
│    (Modular, synthetic product UI mockups with fictional data)         │
│ 5. Render Engine: Remotion CLI -> 60 fps, 9:16 / 1:1 / 16:9 formats    │
└────────────────────────────────────────────────────────────────────────┘
```

### Core Production Rules
1. **Privacy Gate (`$VIDEO/CLAUDE.md:15`):** Videos and public web assets must never display real customer names, phone numbers, email addresses, webhook URLs, token keys, or the bottom-left sidebar account footer. Only sanitized captures from docs/genudo-platform/screenshots/_redacted/ (`$VIDEO/docs/genudo-platform/screenshots/_redacted`) or synthetic UI components with fictional data may be published.
2. **Motion Grammar (`$VIDEO/docs/motion-reel-kit/prompts/06-steal-the-grammar.md`):** The project follows a "one shape never cuts" motion design language: container cards smoothly morph between states (e.g. from Pipeline Board → Stage Editor → Test AI Panel → Mobile Chat) without abrupt cuts.
3. **Audio & Sound Effects (`$VIDEO/docs/VOICE_AND_FILM_PIPELINE.md`):** Synthesizes dynamic scores phase-locked to voice drop downbeats, accompanied by a dedicated SFX kit (`click`, `pop`, `boop`, `thump`, `whoosh`, `chime`) normalized to −14 LUFS.

---

## 2. Brand System & Design Tokens Comparison

The visual identity in the video project was sampled directly from production captures of the GenuDo platform (`$VIDEO/GENUDO_PLATFORM_CONTEXT.md:163`). Comparing it to the website's legacy CSS reveals key mismatches and design drift.

### Color Tokens Comparison

| Token / Concept | Video Project (`$VIDEO/src/theme.ts` & `$VIDEO/presets/genudo/preset.jsonc`) | Website Token ([src/styles/genudo-site.css](../../src/styles/genudo-site.css#L5-L27)) | Status / Analysis |
|---|---|---|---|
| **Primary Brand Accent** | `#6468F0` (`theme.colors.genu`, `appIndigo`) | `#6468F0` (`--primary`) | **Match.** Consistent vibrant indigo-violet across both properties. |
| **Primary Hover / Deep** | `#4343B0` (`theme.colors.appIndigoDeep`) | `#5054D4` (`--primary-hover`) | **Mismatch.** Video/platform uses deep indigo `#4343B0` (seen in charts and pressed buttons); site uses `#5054D4`. |
| **Page Background** | `#FCFDFE` (`theme.colors.appBg`) | `#F8F8F8` (`--bg`) | **Mismatch.** Real app uses crisp, luminous `#FCFDFE`; website uses dingy grey `#F8F8F8`. |
| **Sidebar Background** | `#F1F4F6` (`theme.colors.appSide`) | None (uses generic `#FFFFFF` or `#F8F8F8`) | **Missing on website.** Needed for realistic sidebar and drawer mockups. |
| **Card Background** | `#FFFFFF` (`theme.colors.appCard`) | `#FFFFFF` (`--card`) | **Match.** Pure white card containers. |
| **Primary Borders / Lines** | `#E4E8EF` (`theme.colors.appLine`) | `#E2E5EA` (`--border`), `#D1D4DB` (`--border-2`) | **Slight Mismatch.** Real app uses `#E4E8EF`. |
| **Primary Ink (Text)** | `#1E293C` (`theme.colors.appInk`) | `#1D293D` (`--ink`) | **Near Match.** Slate-900 typography. |
| **Secondary Ink (Muted)** | `#64748B` (`appInk2`), `#5B6578` (`ink2`) | `#475569` (`--ink-2`), `#6C727E` (`--ink-3`) | **Slight Mismatch.** Video palette aligns closer to Tailwind slate scale. |
| **Success / Won State** | `#22A06B` (`theme.colors.appGreen`) | `#1F9D57` (`--success`) | **Slight Mismatch.** Video green is slightly brighter. |
| **Error / Drop-off State** | `#E5484D` (`theme.colors.appRed`) | None defined as CSS variable | **Missing on website.** Real app uses `#E5484D` for funnel drop-offs. |
| **Dark Stage Palette** | `#0E0C18`, `#141124`, `#171528` (Space/Visor) | `#060A23` (`--brand-ink`), `#2134B3` (`--brand-indigo`) | **Mismatch.** Website lacks the refined deep purple-black space palette used for dark hero mockups. |
| **Employee Personas** | `genu: #6468f0`, `scout: #e0a23a`, `qualifier: #52a7cc`, `closer: #8b5cf0`, `scheduler: #36b277`, `nurturer: #e86fa6` | `--scout: #14b8a6`, `--closer: #8b5cf6`, `--echo: #f59e0b`, `--nova: #22c55e`, `--sage: #6468f0`, `--mira: #06b6d4`, `--atlas: #f97316`, `--ledger: #10b981` | **Mismatch (low impact).** Website has 8 unused legacy persona color tokens; video system uses 6 role hues. Align when employee colors are defined. |

### Typography Tokens
- **Display Typography:** Video uses `Inter Tight` (800 weight, `-0.045em` tracking) for Latin display, and `IBM Plex Sans Arabic` / `Tajawal` for Arabic. Website uses system sans for Latin and `Tajawal` (`--font-ar`) for Arabic.
- **Monospace Data Labels:** Video uses `JetBrains Mono` for KPI numbers, percentages, and status tags. Website uses generic `monospace`.

### Logo Assets & Wordmark
- **Canonical Logo:** The official GenuDo logo consists of a lowercase wordmark "genudo" in deep indigo with an arc of dotted particles above the letters "u/d".
- **Available Brand Assets:**
  - Video Project: `presets/genudo/brand/logo-a.png` (dark logo for light backgrounds), `logo-b.png` (white logo for dark backgrounds).
  - Website: [public/genu/genudo-logo-color.png](../../public/genu/genudo-logo-color.png), [public/genu/genudo-logo-white.png](../../public/genu/genudo-logo-white.png).

---

## 3. The GENU Mascot System & Usage Rules

The presenter mascot, **GENU**, is an articulated 2.5D SVG character engineered in `$VIDEO/src/character/Genu.tsx` and `$VIDEO/docs/GENU_CHARACTER.md`:

```
       .-''''-.
     .'  ____  '.       Visor: #0c0a1c
    /   [ o  o ] \      Pixel Eyes: #9ea2ff (5x5 grid)
   |    [  __  ]  |     Pixel Mouth: #6b6fd6
   |     '----'   |
   '.   ( • )    .'     Yellow Chest Light
     '-.______.-'       Paddle Arms (EVE style: detached, floating)
      /        \        Orbit: Tilted ring with floating "do" dot
```

### Character Anatomy & Invariants
1. **Head & Visor:** Rounded capsule head with a dark visor (`#0C0A1C`). The face features pixel-rendered eyes (`#9EA2FF`) and mouth (`#6B6FD6`) arranged on a 5-unit grid (`$VIDEO/src/character/face.ts`). Visor expressions include `idle`, `happy`, `work`, `done`, `worried`, `surprised`, `wink`, `blink`.
2. **Paddle Arms:** Floating, detached EVE-style arms (light paddle on the left, dark shaded paddle on the right). Arms support procedural pointing, waving, typing, calling, and thinking poses (`$VIDEO/src/character/rig.ts`).
3. **Turn Constraints:** Because the rig is 2.5D SVG (moving visor, chest light, and belly stripe across a static shell), body yaw turns must remain within **±0.6 radians** for hero presentations. Profile views flatten out.
4. **Shell Colors:** The base shell is GenuDo indigo (`#6468F0`). Specialized persona variants are generated by procedural hue shifting (`hueShell` rule: dark = hue × 0.72, light = hue lifted 45%).
5. **Website Mascot Implementation:** The website currently loads an older vanilla JS version ([public/genu/genu-robot.js](../../public/genu/genu-robot.js)) wrapped in [src/components/GenuRobot.tsx](../../src/components/GenuRobot.tsx). The video project's pure React SVG rig (`$VIDEO/src/character/Genu.tsx`) can replace this legacy script completely.

---

## 4. Curated Arabic Voice Samples (The Target Egyptian Voice)

The video project's flagship Arabic script (`$VIDEO/docs/briefs/04-ai-workforce-arabic-v3-script.md`) establishes the exact authentic, high-converting Egyptian Arabic voice that the website repositioning must adopt.

Below are the **top 20 authentic Egyptian Arabic value lines**, quoted exactly with source line references and delivery notes:

| # | Arabic Line (Quoted from Script v3) | English Meaning / Value Intent | Source Reference | Delivery / Emotional Beat |
|---|---|---|---|---|
| 1 | «سؤال سريع… مين بيرد على عملائك الساعة اتنين بالليل؟» | "Quick question… who answers your customers at two in the morning?" | script v3: L2-L3 (`$VIDEO/docs/briefs/04-ai-workforce-arabic-v3-script.md:2`) | **Hook:** Playful, curious, directly touching the speed-to-lead pain. |
| 2 | «العملاء المحتملين بيكلموك على واتساب، وإنستجرام، وماسنجر، وموقعك… وكل عميل محتمل بيستنى… بيروح لغيرك.» | "Leads message you on WhatsApp, Instagram, Messenger, and your website… and every lead that waits… goes to someone else." | script v3: L4-L5 (`$VIDEO/docs/briefs/04-ai-workforce-arabic-v3-script.md:4`) | **Problem:** Empathetic tension; slows down on lost revenue. |
| 3 | «وفي وقت الشغل… شايف إيه من محادثات شركتك؟» | "And during work hours… how much of your company's conversations do you actually see?" | script v3: L6 (`$VIDEO/docs/briefs/04-ai-workforce-arabic-v3-script.md:6`) | **Auditability:** Speaks to executive lack of visibility over reps' chats. |
| 4 | «علشان كده، مع جينـو دو تبني فريق عمل كامل بالذكاء الاصطناعي.» | "That's why, with GenuDo, you build an entire AI workforce." | script v3: L7 (`$VIDEO/docs/briefs/04-ai-workforce-arabic-v3-script.md:7`) | **Reveal:** Confident, uplifting solution statement. |
| 5 | «وأول موظفة تبدأ بيها… روز. أصغر باقة، وتجهيزها سهل. امسح الكود من موبايلك… ورقم شركتك يتوصّل.» | "And the first employee you start with… Roz. Smallest package, easy setup. Scan the code from your phone… and your company line is linked." | script v3: L8-L10 (`$VIDEO/docs/briefs/04-ai-workforce-arabic-v3-script.md:8`) | **Low Friction:** Introduces ROZ with simple QR WhatsApp connection. |
| 6 | «روز بتتابع محادثات شركتك مع العملاء والموردين… علشان تطمن إن كل عميل اتخدم صح… وفريقك ياخد ملاحظات تساعده يكسب أكتر.» | "Roz follows your company's chats with customers and suppliers… so you're assured every client was handled right… and your team gets tips to win more." | script v3: L11-L12 (`$VIDEO/docs/briefs/04-ai-workforce-arabic-v3-script.md:11`) | **Quality Control:** Reassuring, framed as coaching rather than spying. |
| 7 | «واسأل Claude أو ChatGPT: فين بنخسر عملاء؟ هيوريك الفجوات… عملاء بيستنوا بعد الساعة ستة، وأسئلة دعم من غير رد.» | "Ask Claude or ChatGPT: where are we losing customers? It shows you the gaps… clients waiting after 6 PM, unanswered support questions." | script v3: L13-L14 (`$VIDEO/docs/briefs/04-ai-workforce-arabic-v3-script.md:13`) | **AI Insights:** Demonstrates conversational business intelligence. |
| 8 | «ودلوقتي تعيّن اللي ناقصك. عارف للمبيعات: بيحوّل رسايل كل قنواتك لعملاء، ويشتغل مع الـCRM وجروبات الواتساب.» | "Now hire what you're missing. Aaref for sales: turns messages across all channels into customers, and works with your CRM and WhatsApp groups." | script v3: L15-L16 (`$VIDEO/docs/briefs/04-ai-workforce-arabic-v3-script.md:15`) | **Sales Automation:** Confident introduction of sales rep **Aaref**. |
| 9 | «وعدنان لخدمة ونجاح العملاء: بيتابع حساباتهم، ويساعدهم يبدأوا، ويرد على أي سؤال.» | "And Adnan for customer service and success: follows their accounts, helps them onboard, and answers any question." | script v3: L17 (`$VIDEO/docs/briefs/04-ai-workforce-arabic-v3-script.md:17`) | **Customer Success:** Warm introduction of support employee **Adnan**. |
| 10 | «سمّي المسار، اختار وظيفته، واختار القناة. وجاوب عن شغلك… كتابة، أو بصوتك.» | "Name the pipeline, pick its role, and pick the channel. And answer about your business… in writing, or by voice." | script v3: L20-L23 (`$VIDEO/docs/briefs/04-ai-workforce-arabic-v3-script.md:20`) | **Voice Onboarding:** Frictionless 3-minute setup by speaking. |
| 11 | «وبيتكلم لغة عملائك. مصري، وخليجي، وشامي… أربعتاشر لهجة عربية، وبيفهم الفويس نوتس والصور كمان.» | "And it speaks your customers' language. Egyptian, Gulf, Levantine… 14 Arabic dialects, and understands voice notes and photos too." | script v3: L24-L26 (`$VIDEO/docs/briefs/04-ai-workforce-arabic-v3-script.md:24`) | **Dialect Fluency:** Proud, warm highlighting of regional Arabic mastery. |
| 12 | «بس الأول… بيتعلموا شغلك. ارفع أسعارك، والأسئلة المتكررة، أو موقعك…» | "But first… they learn your business. Upload your prices, FAQs, or website…" | script v3: L27-L28 (`$VIDEO/docs/briefs/04-ai-workforce-arabic-v3-script.md:27`) | **Knowledge Grounding:** Clear, reassuring explanation of knowledge base. |
| 13 | «وتقول لكل مرحلة… تدخل إمتى، وتعمل إيه. والعميل المحتمل بيتنقل من مرحلة للتانية… لحد ما يشتري.» | "And you tell each stage… when to enter, and what to do. The lead moves from stage to stage… until they purchase." | script v3: L29-L30 (`$VIDEO/docs/briefs/04-ai-workforce-arabic-v3-script.md:29`) | **Stage Progression:** Explains pipeline qualification clearly. |
| 14 | «واللي ما ردّش؟ المتابعة مش بتنسى. رسالة بعد تلات ساعات… وتانية بعد يوم… ومعاها فيديو. علشان ولا عميل محتمل يضيع منك.» | "And who didn't reply? Follow-up never forgets. A message after 3 hours… another after a day… with a video. So no lead is ever lost." | script v3: L31-L33 (`$VIDEO/docs/briefs/04-ai-workforce-arabic-v3-script.md:31`) | **Automated Follow-ups:** Playful, high-converting value hook. |
| 15 | «ولما العميل يوافق… يحجزله الميعاد، ويوصله التأكيد على واتساب.» | "And when the client agrees… it books their meeting, and sends confirmation on WhatsApp." | script v3: L34 (`$VIDEO/docs/briefs/04-ai-workforce-arabic-v3-script.md:34`) | **Meeting Booking:** Concrete outcome of automated scheduling. |
| 16 | «والتكلفة تحت السيطرة. التوجيه الذكي بيختار أرخص موديل مناسب لكل رسالة،» | "And cost is completely under control. Smart routing picks the cheapest suitable model for each message," | script v3: L35-L36 (`$VIDEO/docs/briefs/04-ai-workforce-arabic-v3-script.md:35`) | **Cost Control:** Trustworthy reassurance on AI message cost. |
| 17 | «وتحط حد أقصى للصرف على كل محادثة… لو وصله، يسيبها لفريقك.» | "And you set a spending cap on every conversation… if reached, it leaves it for your team." | script v3: L37 (`$VIDEO/docs/briefs/04-ai-workforce-arabic-v3-script.md:37`) | **Budget Caps:** Financial guardrails preventing budget overruns. |
| 18 | «وفي الآخر… عندك رقابة كاملة. كل القنوات في صندوق وارد واحد، وتستلم أي محادثة بضغطة واحدة.» | "In the end… you have complete supervision. All channels in one inbox, and you take over any conversation with one click." | script v3: L38-L40 (`$VIDEO/docs/briefs/04-ai-workforce-arabic-v3-script.md:38`) | **Human Control:** One-click takeover restores full operator confidence. |
| 19 | «ولوحة التحكم بتوريك كل مرحلة… مين اتحوّل، وكلّفتك كام.» | "And the dashboard shows you each stage… who converted, and how much it cost you." | script v3: L41 (`$VIDEO/docs/briefs/04-ai-workforce-arabic-v3-script.md:41`) | **Funnel Analytics:** Executive clarity into cost per conversion. |
| 20 | «وحتى وإنت برّه… من أبلكيشن جينـو دو. ترد من موبايلك، وترجّعها للوكيل.» | "Even on the go… from the GenuDo app. Reply from your mobile, and hand it back to the agent." | script v3: L42-L43 (`$VIDEO/docs/briefs/04-ai-workforce-arabic-v3-script.md:42`) | **Mobile Freedom:** Run the sales workforce from your pocket. |
