# Internationalization & Arabic (MSA) translation guide

The site ships bilingual: **English (`en`, LTR, default)** and **Modern Standard
Arabic (`ar`, RTL)**. This guide covers the message system, the RTL rules, the
Arabic style guide + glossary, and the workflow to finish translating every page.

---

## 1. How the message system works

- Catalogs live in `messages/en.json` and `messages/ar.json` — mirror-image
  key trees.
- Server components: `import {useTranslations} from 'next-intl'` → `const t = useTranslations(); t('terms.pipeline')`.
  (In async server components you may also use `getTranslations`.)
- Client components: same `useTranslations` hook.
- ICU values & placeholders: `t('footer.rights', { year })` →
  `"© {year} GenuDo. All rights reserved."`
- Namespaces in use today:
  - `terms.*` — product / solution / industry / resource names (shared by nav, footer, pages).
  - `nav.*` (+ `nav.desc.*`) — navigation labels & mega-menu subtitles.
  - `footer.*` — footer headings & legal line.
  - `common.*` — buttons/CTAs (Get started, Talk to sales, …).
  - `home.*`, `whoisgenu.*` — the two reference pages' copy.

**Adding a string:** add the key to **both** `en.json` and `ar.json`, then use
`t('your.key')`. Keep keys semantic (`hero.title`), never English-text-as-key.

### Locale routing & switching

- URLs are locale-prefixed: `/en/...`, `/ar/...` (`localePrefix: 'always'`).
- Always link internally with the `Link` from `src/i18n/navigation.ts` — it keeps
  the active locale.
- `LocaleSwitcher` (in the nav) flips EN ⇄ AR on the current route.

---

## 2. RTL rules

- `src/app/[locale]/layout.tsx` sets `<html dir="rtl">` and `lang="ar"` for Arabic,
  and applies the **Tajawal** web font (via `next/font`, variable `--font-ar`).
- `src/styles/rtl.css` is loaded last and **entirely scoped** to
  `[dir="rtl"] / html[lang="ar"]`, so English is byte-for-byte unchanged. It:
  - applies the Arabic font to text, controls, and headings (and removes Latin
    negative `letter-spacing`);
  - keeps code / numeric / monospace runs LTR (`direction: ltr; unicode-bidi: embed`);
  - mirrors the shared chrome (nav CTA side, mega-menu anchor, burger).
- **When you build new React sections, use CSS logical properties**
  (`margin-inline`, `padding-inline-start`, `inset-inline-start`, `text-align: start`)
  so they mirror automatically. Review per section: grid column order, arrow-icon
  direction, absolute `left/right`, and any marquee scroll direction.

---

## 3. Arabic style guide (Egypt + Gulf)

- **Register:** Modern Standard Arabic — professional but warm and human. Not
  stiff/bureaucratic, not dialectal. It reads naturally to both Egyptian and Gulf
  (GCC) business audiences.
- **Voice:** address the reader with the singular imperative for CTAs
  («ابدأ الآن», «تحدّث إلى المبيعات»). Keep sentences short and active.
- **Numbers & prices:** use **Western Arabic numerals (0–9)** for clarity in a
  business/pricing context; keep them LTR inside sentences.
- **Keep in Latin (do not translate/transliterate):** `WhatsApp`, `Instagram`,
  `Messenger`, `Telegram`, `Gmail`, `Outlook`, `API`, `MCP`, `CRM`, `SMTP/IMAP`,
  and third-party product names.
- **Punctuation:** use Arabic comma «،» and question mark «؟».

### Brand names — required spelling

| English | Arabic | Note |
| --- | --- | --- |
| **GENU** | **جينـو** | tatweel `ـ` **after the nūn (ن)** — `ج ي ن ـ و` |
| **GENUDO** / GenuDo | **جينـو دو** | «جينـو» + space + «دو» |

These are enforced in `ar.json` (e.g. `nav.whoIsGenu = "مَن هو جينـو؟"`,
`footer.rights = "© {year} جينـو دو. …"`). Never write «جينو» without the tatweel.

---

## 4. Glossary (translated terms — already in the catalogs)

| English | Arabic (MSA) |
| --- | --- |
| AI Agent | الوكيل الذكي |
| Knowledge Base | قاعدة المعرفة |
| Smart Models Selection | اختيار النماذج الذكي |
| Pipeline | مسار الصفقات |
| Stages & Actions | المراحل والإجراءات |
| Follow-ups | المتابعات |
| Inbox | صندوق الوارد |
| Contacts | جهات الاتصال |
| Analytics Center | مركز التحليلات |
| Integrations | التكاملات |
| Sales Agent | وكيل المبيعات |
| Customer Service | خدمة العملاء |
| Operations Assistant | مساعد العمليات |
| Marketing Agencies | وكالات التسويق |
| E-learning & Academies | التعليم الإلكتروني والأكاديميات |
| Fitness Centres | مراكز اللياقة البدنية |
| Clinics & Healthcare | العيادات والرعاية الصحية |
| Hospitality & Tourism | الضيافة والسياحة |
| Camps & Events | المعسكرات والفعاليات |
| Trust & Security | الثقة والأمان |
| Pricing | الأسعار |
| Customer stories | قصص العملاء |
| Get started | ابدأ الآن |
| Talk to sales | تحدّث إلى المبيعات |
| Book a demo | احجز عرضًا توضيحيًا |

Reuse these exact terms everywhere for consistency.

---

## 5. Workflow — translating the remaining page bodies

The shared UI + homepage + who-is-genu are fully translated. The other page
**bodies** are still English (they render as islands). To finish them as you
componentize (per `MIGRATION-GUIDE.md`):

1. **Use the worklist.** `i18n-extraction/strings.en.json` contains every visible
   English string, grouped by page (`{ "pricing": ["…","…"], … }`, 3,429 total).
   It is your translation checklist per page.
2. **Namespace per page.** When componentizing `pricing`, add a `pricing` block to
   both catalogs:
   ```json
   // en.json                     // ar.json
   "pricing": {                    "pricing": {
     "heroTitle": "Simple pricing"   "heroTitle": "أسعار بسيطة"
   }                               }
   ```
3. **Translate** using this guide's register + glossary + the brand spelling.
4. **Wire** each string as `t('pricing.heroTitle')` in the component, and delete
   the corresponding entry from the island as it's replaced.
5. **QA** (below), then move to the next page.

> Tip: translate the shared/glossary terms **once** (done) and reference them via
> `terms.*` from any page, so product names never drift between pages.

### QA checklist per page
- [ ] Brand spelled جينـو / جينـو دو (tatweel present).
- [ ] Latin exceptions kept (WhatsApp, API, CRM, …).
- [ ] Numbers/prices LTR and legible; Arabic punctuation «،» «؟».
- [ ] Layout mirrors correctly in `/ar` (icons, columns, alignment) — compare to `/en`.
- [ ] No clipped/overflowing Arabic (it runs longer than English — leave room).
- [ ] Tajawal renders (no Latin-fallback boxes).
