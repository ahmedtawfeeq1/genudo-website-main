---
project: genudo-website
topic: terminology-glossary
type: analysis
date: 2026-10-05
source: manual
tags: [discovery, bmad, terminology, glossary, arabic-localization]
loredex: routed
---

# Master Terminology & Bilingual Localization Glossary

## 1. Master Terminology Matrix

This matrix establishes the definitive cross-reference of terms across the website message catalogs ([messages/](../../messages)), the legacy translation guide ([docs/I18N-TRANSLATION.md](../../docs/I18N-TRANSLATION.md)), the platform UI localization standard (`$SKILLS/genudo-arabic-localization/SKILL.md`), the video project scripts (`$VIDEO/docs/briefs/04-ai-workforce-arabic-v3-script.md`), and production platform captures (`$VIDEO/GENUDO_PLATFORM_CONTEXT.md`).

| Concept | English (Website) | ar-EG Marketing Term | Platform UI Term (SKILL.md) | ar-SA Term | File Sources | Status |
|---|---|---|---|---|---|---|
| **Brand Name (Mascot)** | GENU | **جينـو** (tatweel after nun) | GENU / GenuDo (Latin wordmark) | **جينـو** | [I18N-TRANSLATION.md:71](../../docs/I18N-TRANSLATION.md#L71), [messages/ar-EG.json:20](../../messages/ar-EG.json#L20), `$VIDEO/src/theme.ts:18` | **Consistent** (Video VO writes «جينيو» strictly for TTS pronunciation) |
| **Company Brand** | GenuDo / GENUDO | **جينـو دو** (tatweel + space + دو) | GenuDo | **جينـو دو** | [I18N-TRANSLATION.md:73](../../docs/I18N-TRANSLATION.md#L73), [messages/ar-EG.json:37](../../messages/ar-EG.json#L37) | **Consistent** |
| **Pipeline (Singular / Plural)** | Pipeline / Pipelines | مسار الصفقات / مسارات العمل | **المسار / المسارات** | مسار الصفقات | [messages/ar-EG.json:5](../../messages/ar-EG.json#L5), `$SKILLS/genudo-arabic-localization/SKILL.md`, script v3: L20 (`$VIDEO/docs/briefs/04-ai-workforce-arabic-v3-script.md:20`) | **CONFLICT** |
| **Stage (Singular / Plural)** | Stage / Stages | المرحلة / المراحل | **المرحلة / المراحل** | المرحلة / المراحل | [messages/ar-EG.json:6](../../messages/ar-EG.json#L6), `$SKILLS/genudo-arabic-localization/SKILL.md`, script v3: L29 (`$VIDEO/docs/briefs/04-ai-workforce-arabic-v3-script.md:29`) | **Consistent** |
| **Lead / Prospect** | Lead / Leads | **العميل المحتمل / العملاء المحتملين** | العملاء المحتملون (KPI) / الفرص | العملاء المحتملون | [home.ar-EG.ts](../../src/legacy-html/home.ar-EG.ts), `$SKILLS/genudo-arabic-localization/SKILL.md`, script v3: L4 (`$VIDEO/docs/briefs/04-ai-workforce-arabic-v3-script.md:4`) | **Consistent in marketing; differs from CRM UI** |
| **Opportunity (CRM Object)** | Opportunity / Opportunities | صفقة / صفقات (or عملاء) | **الفرصة / الفرص** | الفرص | `$SKILLS/genudo-arabic-localization/SKILL.md`, `$VIDEO/GENUDO_PLATFORM_CONTEXT.md:79` | **CONFLICT** |
| **Won / Lost Deals** | Won / Lost | رابح / خاسر (old site) | **مكتسبة / ضائعة** (agreeing with الفرص) | مكتسبة / ضائعة | `$SKILLS/genudo-arabic-localization/SKILL.md`, [home.ts](../../src/legacy-html/home.ts) | **CONFLICT** |
| **AI Agent / Employee** | AI Agent / AI Employee | الوكيل الذكي / موظف ذكاء اصطناعي | **الوكيل** (short) / وكيل المبيعات | الوكيل الذكي | [messages/ar-EG.json:2](../../messages/ar-EG.json#L2), `$SKILLS/genudo-arabic-localization/SKILL.md`, script v3: L7 (`$VIDEO/docs/briefs/04-ai-workforce-arabic-v3-script.md:7`) | **CONFLICT** |
| **Knowledge Base** | Knowledge Base / Knowledge | قاعدة المعرفة | **قاعدة المعرفة** (sidebar) | قاعدة المعرفة | [messages/ar-EG.json:3](../../messages/ar-EG.json#L3), `$SKILLS/genudo-arabic-localization/SKILL.md` | **Consistent** |
| **Knowledge Table** | Knowledge Table | جدول المعرفة | **جدول المعرفة** (source) | جدول المعرفة | `$SKILLS/genudo-arabic-localization/SKILL.md`, `$VIDEO/GENUDO_PLATFORM_CONTEXT.md:79` | **Consistent** |
| **Follow-up / Follow-ups** | Follow-up / Follow-ups | المتابعة / المتابعات | **المتابعة / المتابعات** | المتابعة / المتابعات | [messages/ar-EG.json:7](../../messages/ar-EG.json#L7), `$SKILLS/genudo-arabic-localization/SKILL.md`, script v3: L31 (`$VIDEO/docs/briefs/04-ai-workforce-arabic-v3-script.md:31`) | **Consistent** |
| **Follow-up Health** | Follow-Up Health | صحة المتابعات (old site) | **حالة المتابعات** ("صحة" is medical) | حالة المتابعات | `$SKILLS/genudo-arabic-localization/SKILL.md`, [analytics.ts](../../src/legacy-html/analytics.ts) | **CONFLICT** |
| **Follow-up Statuses** | Sent / Scheduled / Overdue | مُرسلة / مجدولة / متأخرة | **مُرسلة / مجدولة / متأخرة** | مُرسلة / مجدولة / متأخرة | `$SKILLS/genudo-arabic-localization/SKILL.md` | **Consistent** |
| **Smart Routing / Models** | Smart Models Selection | اختيار النماذج الذكي | **التوجيه الذكي** (Router) | اختيار النماذج الذكي | [messages/ar-EG.json:4](../../messages/ar-EG.json#L4), `$SKILLS/genudo-arabic-localization/SKILL.md`, script v3: L36 (`$VIDEO/docs/briefs/04-ai-workforce-arabic-v3-script.md:36`) | **CONFLICT** |
| **Inbox** | Inbox / Inboxes | صندوق الوارد | **صندوق الوارد** (singular) | صندوق الوارد | [messages/ar-EG.json:8](../../messages/ar-EG.json#L8), `$SKILLS/genudo-arabic-localization/SKILL.md`, script v3: L39 (`$VIDEO/docs/briefs/04-ai-workforce-arabic-v3-script.md:39`) | **Consistent** |
| **Contacts** | Contact / Contacts | جهات الاتصال | **جهة اتصال / جهات الاتصال** | جهات الاتصال | [messages/ar-EG.json:9](../../messages/ar-EG.json#L9), `$SKILLS/genudo-arabic-localization/SKILL.md` | **Consistent** |
| **Stage Action (Webhook)** | Action / Stage Actions | الإجراءات / إجراءات المراحل | **إجراء / الإجراءات** | الإجراءات | [messages/ar-EG.json:6](../../messages/ar-EG.json#L6), `$SKILLS/genudo-arabic-localization/SKILL.md` | **Consistent** |
| **Action Trigger Types** | Stage Started / AI Triggered | عند بدء المرحلة / بتوجيه الذكاء | **عند بدء المرحلة / بتوجيه الذكاء الاصطناعي** | عند بدء المرحلة | `$SKILLS/genudo-arabic-localization/SKILL.md`, `$VIDEO/GENUDO_PLATFORM_CONTEXT.md:79` | **Consistent** |
| **Human Takeover** | Human Takeover / Escalation | تدخّل بشري / استلام المحادثة | **تدخّل بشري** (Mobile: `Take over`) | تدخّل بشري | `$SKILLS/genudo-arabic-localization/SKILL.md`, script v3: L40 (`$VIDEO/docs/briefs/04-ai-workforce-arabic-v3-script.md:40`) | **Consistent in intent** |
| **Funnel Drop-off** | Drop off | تسرّب / فقدان | **تسرّب** | تسرّب | `$SKILLS/genudo-arabic-localization/SKILL.md`, [analytics.ts](../../src/legacy-html/analytics.ts) | **Consistent** |
| **Credit / Balance** | Credit / Wallet | الرصيد / المحفظة | **الرصيد / المحفظة** | الرصيد / المحفظة | `$SKILLS/genudo-arabic-localization/SKILL.md`, `$VIDEO/GENUDO_PLATFORM_CONTEXT.md:99` | **Consistent** |
| **Plan / Package** | Plan / Package / Subscription | الباقة / الاشتراك | **الباقة / الاشتراك** | الباقة / الاشتراك | `$SKILLS/genudo-arabic-localization/SKILL.md`, script v3: L9 (`$VIDEO/docs/briefs/04-ai-workforce-arabic-v3-script.md:9`) | **Consistent** |
| **Get Started (CTA)** | Get started | **ابدأ دلوقتي** (Egyptian) | ابدأ الآن / إنشاء حساب | **ابدأ الحين** (Gulf) | [messages/ar-EG.json:40](../../messages/ar-EG.json#L40), [messages/ar-SA.json:40](../../messages/ar-SA.json#L40), [I18N-TRANSLATION.md:106](../../docs/I18N-TRANSLATION.md#L106) | **CONFLICT** |
| **Talk to Sales (CTA)** | Talk to sales | **كلّم فريق المبيعات** | تواصل مع المبيعات | **كلّم فريق المبيعات** | [messages/ar-EG.json:41](../../messages/ar-EG.json#L41), [I18N-TRANSLATION.md:107](../../docs/I18N-TRANSLATION.md#L107) | **CONFLICT** |
| **Book a Demo (CTA)** | Book a demo | **احجز ديمو** | احجز عرضًا توضيحيًا | **احجز ديمو** | [messages/ar-EG.json:42](../../messages/ar-EG.json#L42), [I18N-TRANSLATION.md:108](../../docs/I18N-TRANSLATION.md#L108) | **CONFLICT** |
| **Contact Us (CTA)** | Contact us | **كلّمنا** (Egyptian) | تواصل معنا | **تواصل معنا** (Gulf) | [messages/ar-EG.json:28](../../messages/ar-EG.json#L28), [messages/ar-SA.json:28](../../messages/ar-SA.json#L28) | **Intentional Regional Split** |

---

## 2. Key Terminology Conflicts & Recommendations

### Conflict 1: Pipeline
- **Variants Quoted:**
  - `messages/ar-EG.json:5`: `"pipeline": "مسار الصفقات"`
  - `genudo-arabic-localization/SKILL.md §2`: `"المسار / المسارات"`
  - `script v3: L20`: `«سمّي المسار، اختار وظيفته»`
- **RECOMMENDATION: Use «المسار / المسارات» (The Pipeline / Pipelines).**
- *Reason:* GenuDo pipelines handle customer service, booking, operations, and qualification — not exclusively deals ("صفقات"). Using "مسار الصفقات" narrows the platform scope to sales. Inside product UI and marketing alike, «المسار» matches what users click in the app sidebar.

### Conflict 2: AI Agent vs. AI Employee
- **Variants Quoted:**
  - `messages/ar-EG.json:2`: `"agent": "الوكيل الذكي"`
  - `genudo-arabic-localization/SKILL.md §2`: `"الوكيل / وكيل المبيعات بالذكاء الاصطناعي"` (Short: «الوكيل»)
  - `script v3: L7`: `«تبني فريق عمل كامل بالذكاء الاصطناعي»` / `«موظف مبيعات»`
  - `home.ar-EG.ts`: `«ابنِ موظفين أذكياء بيدفعوا الشغل لقدّام»`
- **RECOMMENDATION: Use «موظف ذكاء اصطناعي» (AI Employee) in marketing headlines, and «الوكيل» (The Agent) in product-UI contexts.**
- *Reason:* "AI Employee" conveys workforce addition and commercial ROI in value marketing. However, inside the app UI and settings, the standard noun is «الوكيل» (as in «اختبار الوكيل», «الوكيل نشط»).

### Conflict 3: Primary CTA ("Get Started")
- **Variants Quoted:**
  - `docs/I18N-TRANSLATION.md:106`: `«ابدأ الآن»` (MSA)
  - `messages/ar-EG.json:40`: `«ابدأ دلوقتي»` (Egyptian)
  - `messages/ar-SA.json:40`: `«ابدأ الحين»` (Gulf)
- **RECOMMENDATION: Keep «ابدأ دلوقتي» on `ar-EG` and «ابدأ الحين» on `ar-SA`.**
- *Reason:* CTAs perform significantly higher in native regional business phrasing. For the header navigation button, this authentic touch reinforces the Egyptian-first commitment.

### Conflict 4: "Book a Demo"
- **Variants Quoted:**
  - `docs/I18N-TRANSLATION.md:108`: `«احجز عرضًا توضيحيًا»`
  - `messages/ar-EG.json:42`: `«احجز ديمو»`
- **RECOMMENDATION: Use «احجز ديمو» (Book a Demo).**
- *Reason:* MENA business owners and startup founders colloquially say "ديمو" (Demo). «عرض توضيحي» sounds archaic and corporate, creating unnecessary friction.

### Conflict 5: Won Leads vs. Opportunities Won
- **Variants Quoted:**
  - Legacy website: `«العملاء المحتملون الرابحون»` (Grammatically flawed: "رابح" refers to a person winning, not a business deal won).
  - Platform UI standard (`SKILL.md §2, §7`): `«الفرص المكتسبة»` (Adjective agreeing with "فرصة").
  - Alternative Lead phrasing: `«العملاء المحتملون المكتسبون»`.
- **RECOMMENDATION: Use «الفرص المكتسبة» inside UI cards/mockups, and «صفقات ناجحة» or «عملاء جدد» in marketing value copy.**

---

## 3. Proposed Terminology Separation Rule (For Owner Alignment)

> [!IMPORTANT]
> **PROPOSED CONVENTION RULE:**
> To permanently resolve the tension between natural marketing voice and exact product fidelity, adopt the following two-tier rule:
>
> 1. **Marketing & Conversion Copy = Egyptian Arabic Voice (اللهجة المصرية للأعمال):**
>    Headlines, hero statements, subheads, value cards, and CTAs speak in warm, persuasive, commercial Egyptian Arabic («مين بيرد على عملائك؟», «المتابعة مش بتنسى», «ابدأ دلوقتي», «كلّمنا»).
> 2. **Product Objects in UI Mockups = Exact Platform UI Terms (مصطلحات النظام الرسمية):**
>    Labels, table columns, drawer titles, and button chips embedded inside synthetic product mockups must use exact platform terms from `$SKILLS/genudo-arabic-localization/SKILL.md` («المسار», «المرحلة», «الفرص المكتسبة», «جدول المعرفة», «التوجيه الذكي»).
>
> **Where This Rule Modifies Existing Copy:**
> - In [messages/ar-EG.json:5](../../messages/ar-EG.json#L5): change `terms.pipeline` from `"مسار الصفقات"` to `"المسار / المسارات"`.
> - In [home.ar-EG.ts](../../src/legacy-html/home.ar-EG.ts): update mockup headers to match the platform UI exactly while keeping the surrounding marketing narrative in Egyptian Arabic.

---

## 4. Latin Script Retentions (Do Not Translate)

Per [docs/I18N-TRANSLATION.md §3](../../docs/I18N-TRANSLATION.md#L63) and `$SKILLS/genudo-arabic-localization/SKILL.md`, the following technical tokens, integrations, and protocol names must remain in Latin script:

- **Third-Party Channels & Brands:** `WhatsApp`, `Instagram`, `Messenger`, `Facebook`, `Telegram`, `Google Meet`, `Gmail`, `Outlook`, `Meta`.
- **SaaS Ecosystems:** `Odoo`, `Zoho Desk`, `Zendesk`, `HubSpot`, `Zapier`.
- **AI Models & Vendors:** `Claude`, `ChatGPT`, `OpenAI`, `Anthropic`, `xAI`, `Grok`, `Gemini`, `DeepSeek`, `Z.AI / GLM`, `Qwen`.
- **Technical Protocols:** `API`, `MCP`, `CRM`, `JSON`, `cURL`, `OAuth`, `REST`, `UUID`, `HTTP POST`, `SMTP/IMAP`.

---

## 5. Technical Terms to AVOID in Business/Value Copy

When communicating with executive business buyers (founders, COOs, sales directors), the following developer jargon should be eliminated from hero headlines, navigation descriptions, and marketing value copy:

| Technical Term to Avoid | Why It Fails with Business Buyers | High-Converting Value Replacement |
|---|---|---|
| **Webhook / HTTP POST** | Sounds like complex engineering; evokes development work. | **"Automated trigger" / "Instant CRM sync" / «تحديث فوري»** |
| **MCP Server** | Unfamiliar protocol acronym that alienates non-technical buyers. | **"Claude & ChatGPT Integration" / «التحكم عبر كلود وشات جي بي تي»** |
| **Token / Per-Token Cost** | Means nothing to finance leaders trying to budget CAC. | **"Cost per message / Cost per conversation" / «تكلفة الرسالة»** |
| **Knowledge Table / Vector Store** | Database implementation jargon. | **"Company Knowledge Base" / «بيانات وأسعار شركتك»** |
| **Smart Router / Routing Tier** | Internal architectural plumbing. | **"Smart Cost Optimization" / «التوجيه الذكي لتوفير التكلفة»** |
| **Regex / Payload Extraction** | Developer regex syntax. | **"Extracts client info automatically" / «جمع بيانات العميل آلياً»** |
| **Ingestion Pipeline** | Data engineering terminology. | **"Upload files in seconds" / «ارفع ملفاتك بضغطة واحدة»** |
