---
project: genudo-website
topic: business-profiles-alignment
type: analysis
date: 2026-10-07
source: claude-code
tags: [copy, positioning, ai-employees, arabic-register, roz, industries]
---

# Aligning the website with the AI employee business profiles

## The source

The owner made business profiles ("AI CVs") for each AI employee, plus one team document, in `ai-generated-product-videos/deliverables/06-ai-employee-profiles/` (6 Oct 2026). The text lives in `ai-generated-product-videos/scripts/profiles/content/{common,aaref,adnan,roz,team}.py`, with EN and AR under the same keys. **Those files are the source of truth for every word we change.** Copy from them, don't paraphrase.

Each profile has the same 10 sections:
1. Profile card and About
2. Job description
3. In your operation
4. Business value (sourced research and four value levers with formulas)
5. The team it takes
6. ROI
7. Nine industry use cases
8. How we hire it
9. First 90 days
10. Collaboration note

## What changes, in one paragraph

The site today sells features ("flags", "pipeline", "Start free", mockups). The profiles sell an employee to a business owner, with:
- a job description;
- research figures with sources;
- what it costs to cover the same work with people (one seat around the clock = 4 to 5 people under Egypt's 48-hour week);
- an ROI formula;
- industry cases;
- a sales-led hiring process (listen, plan, build, launch, improve, with an account manager and an automation specialist);
- a 90-day scorecard.

The Arabic moves to Egyptian grammar with business vocabulary.

## Copy rules (from the owner, apply everywhere)

- No prices, no success rates, no claims of role-based permissions. Every example business, name and number is invented and labelled.
- Research figures always carry their source and a link. Keep the profile's caveats ("vendor-funded", "vendor study").
- No subscription freezes, holds or refunds as examples.
- Call them employees: "AI sales employee", «موظف»; never "agent", «وكيل», «روبوت» or "chatbot".
- Arabic: «المشكلة» not «الوجع», «فريقك» not «ناسك», «إيرادات» not «فلوس», «عميل» not «زبون», «تدخل بشري» not «إنسان/بني آدم». Product words stay English with الـ: الـ inbox, الـ dashboard, الـ account manager, الـ CRM, الـ calendar, الـ knowledge base. No MSA fragments inside Egyptian pages.
- **Roz:**
  - She works in answers and scheduled reports through Claude or ChatGPT (connected to GenuDo), plus dashboards.
  - Never write that she sends live alerts or flags, replies to customers, steps into a chat, or moves customers between stages automatically.
  - She has no setup phase: one QR scan per number, ready the same day, covering one-to-one chats and groups.
  - Her packages are smaller than Aaref's and Adnan's.
  - She is "a coach, not a spy".
  - Make no data-protection claims until the PDPL 151/2020 wording is confirmed.

## Findings

### 1. Roz is described wrongly in about 45 places (highest priority)
The site presents her as a reviewer that raises alerts:
- "She alerts you", "flags slow replies, stalled deals and missed opportunities", "3 flags" mockups, "open the chat and step in".
- "Hire a ROZ for each WhatsApp line".
- An "actions at every stage" pipeline block copied from the Aaref page.

Affected places:
- `sol-operations` (whole page);
- the shared employee card on `home`, `how-it-works` and `ai-workforce`;
- `who-is-genu` (also "pink, with a bow": the new look has no bow and wears a round rose badge);
- `use-cases`, all `ind-*` pages, `contact`, `blog-whatsapp-team-workflows`;
- `messages/{en,ar-EG}.json` meta, `src/i18n/schema.ts`, `src/i18n/seo.ts` ENTITY, `public/llms.txt`, `public/llms-full.txt`, `kit-snippets.ts`.

`public/media/img/roz.svg` still shows the old look (bow, eyelashes).

### 2. Role titles and scope
- **Aaref:** "AI sales agent" becomes "AI sales employee".
  - A sale is no longer only a booked meeting. It can be a booking, a registration, a store order (Shopify, cash on delivery), a request for your team, or a qualified lead.
  - Stages move "by the stage rules you set", not "on its own".
- **Adnan:** "Support" becomes "Customer service & success" / «خدمة ونجاح العملاء». Onboarding new customers and keeping them are missing from the site.
- **Roz:** "Quality & operations" becomes "Quality control" / «مراقبة الجودة» (not «مراجعة»). Spelled "Roz", not "ROZ".

### 3. Examples that break the rules
- **Refunds:** the sofa chat and knowledge-base rows on `sol-customer-service` (EN and AR, with «تسترجعي فلوسك»). Also refund wording on `ind-elearning`, `ind-camps-events` and `ind-hospitality`.
- **Freeze:** a full freeze chat, an FAQ entry and the meta description on `ind-fitness`.
- **Prices:** EGP prices in mock tables on `ind-clinics`, `home` and `how-it-works`.
- **Free offer:** "first consultation is free" in an Aaref mock.

### 4. Missing business content
None of the employee or industry pages has research figures, the team-it-takes arithmetic, ROI, the hiring process, a 90-day plan, or the profile card.

There are no pages for **real estate, e-commerce or automotive**, although all three profiles cover them.

### 5. Onboarding model conflict
The site promotes self-serve setup: "Start free", "3 steps, no code" on `home`, `ai-workforce`, `how-it-works`, `who-is-genu` and `pricing`.

The profiles describe something different:
- **Aaref and Adnan** are hired through a planning session. An automation specialist builds them and an account manager reviews results with you.
- **Roz** needs only a login and a QR scan.

`pricing` has no Roz entry.

### 6. Arabic register
The banned words are already gone (الوجع 0, ناسك 0, زبون 0). What remains:
- «فلوس» 6;
- «إنسان» 17;
- «الوكيل» on the employee pages, `home` and `who-is-genu`;
- MSA fragments in mockups («انتظر… ولم يُرسَل», «هذه المحادثة»);
- slang: «ببلاش», «روبوت», «البيعة… وحش», «في ضهره», «شغلانة», «بتاع»;
- «الكالندر» should be «الـ calendar».

### 7. Brand spelling
- The site uses «جينـو دو» (decided earlier).
- The profiles use Latin "GenuDo" in running Arabic and «جينيو» only in hashtags.
- Keep the site spelling unless the owner says otherwise.

## Plan

Each phase ships on its own, EN and AR together.

### Phase 0: Roz corrections (urgent: live claims are wrong)
1. Rewrite `sol-operations` (EN and AR) to the Roz outline below.
2. Fix every other Roz line listed in finding 1.
3. Changelog: add a new 6 Oct 2026 entry ("Roz now works through Claude and ChatGPT: ask, schedule reports, build dashboards"). Do not rewrite history.
4. Replace `roz.svg` with `roz-hero.png` (WebP, cropped avatar for small sizes).
5. Update the `who-is-genu` look line to the rose badge.

### Phase 1: Shared foundations
1. Role titles everywhere:
   - nav labels in `messages/*.json`;
   - page meta;
   - `schema.ts` `EMPLOYEES`;
   - `seo.ts` `ENTITY`;
   - `llms.txt` and `llms-full.txt`.
2. Rewrite the shared employee card (home, how-it-works, ai-workforce, who-is-genu) from the profile taglines:
   - **Aaref:** "Answers every lead in seconds and follows up until it turns into a sale".
   - **Adnan:** "Instant answers, routine requests handled, every new customer set up to succeed".
   - **Roz:** "Ask her anything in Claude or ChatGPT; reports on your schedule; ready the same day".
3. Remove every refund, freeze and price example (finding 3) and replace it with the profiles' invented examples.
4. Add a small "sources" footnote pattern to the mockup kit (`mk-src`) so every figure links to its source.

### Phase 2: The three employee pages
Rebuild `sol-sales-agent`, `sol-customer-service` and `sol-operations` as web versions of the profiles. Keep the routes and SEO slugs. Each page follows the same outline:

1. **Hero:** portrait, profile card (department, reports to, hours, languages, works with, name meaning) and "Available 24/7" (Roz: "Ready from day one"). CTAs: the main CTA per decision A, plus "Download the profile (PDF)".
2. **About:** two first-person paragraphs, verbatim.
3. **The job:** 8 responsibilities, "Rules of the job", tools.
   - Aaref adds "What a sale means in your business" (5 outcomes).
4. **In your operation:** one invented scene with a with/without strip.
   - Aaref: Nour's serum order on Shopify.
   - Adnan: Mariam's broken session link.
   - Roz: the 9:00 AM scheduled report at a brokerage.
5. **Why it pays:** 4 sourced figures, then 4 value levers with their formulas.
6. **The team it takes:**
   - Aaref and Adnan: 168 h ÷ 48 h → 4 to 5 people.
   - Roz: 300 chats × 5 min = 3 reviewers.
   - Use legal on-costs only; never salaries.
7. **ROI:** the formula plus a short example labelled as invented. The profiles assume a win-back rate ("assume 1 in 5"); label it as an assumption or drop it, because the rules ban success rates.
8. **Industries:** 9 cards (problem, the employee's job, the number to watch) linking to the `ind-*` pages.
9. **How we hire it:**
   - Aaref and Adnan: listen, plan, build, launch, improve, and who does what.
   - Roz: log in, scan the QR code, ask and schedule. No build.
10. **First 90 days:** Day 1 / Week 1 / Month 1 / Quarter 1, the KPI names, and "What he/she needs from you".
11. **A note from the employee:** "What I give / How we measure it / When you see it" plus a two-line quote.
12. **FAQ:** rewritten. Roz's FAQ must answer "Does she send alerts / reply / move stages?" with a clear no.
13. **The rest of the team, then the final CTA.**

Cut from the PDFs: cover and contents pages, blank worksheet columns, the full letter, the full three-page industry scenarios.

Assets to copy into `public/media/` as WebP:
- portraits `{name}-{hero,work,done,note}.png`;
- the profile PDFs and one-pagers (EN and AR) as downloads;
- the `…-social-1600x900.png` images as each page's OG image.

### Phase 3: Industry pages
For each of the six `ind-*` pages:
1. Add a three-employee block. For each employee: problem, invented scenario, evidence with its source, what they do, and what to measure, taken from the profiles' industry sections. `scratchpad/ind.json` from the analysis holds all 27 rows in EN and AR.
2. Order the employees as the profiles do (Aaref usually first).
3. Fix the rule breaks (finding 3) and the Roz lines.
4. Drop weak-fit evidence (for example US music-ticket sales on the camps page).

### Phase 4: Team story, process and new industries
1. `/ai-workforce`:
   - the team story from `team.py` (handover along the customer journey, the invented academy week);
   - where to start (any one employee, or all three);
   - "11 to 13 hires" with people;
   - one platform, one account manager.
2. `/how-it-works`: replace "3 steps, no code" with the hiring process (Roz's path shown separately).
3. If approved (decision C): new `ind-real-estate`, `ind-ecommerce` and `ind-automotive` pages. Each one needs:
   - the page itself (EN and AR);
   - a nav entry and a `use-cases` card;
   - sitemap, redirects and OG cards (`scripts/brand/og.py`);
   - JSON-LD (automatic).

### Phase 5: Arabic register sweep
Go through every `*.ar-EG.ts` file and `messages/ar-EG.json` using the finding 6 list, keeping «جينـو دو». Then run the `genudo-arabic-localization` review.

### QA for every phase
- `npm run build` with `NEXT_DIST_DIR=.next-verify`;
- `scripts/check-mixed-runs.mts`;
- `scripts/check-jsonld.mjs`;
- the link crawler;
- a check at mobile and tablet widths;
- grep for banned words: `flags|alerts|تنبّه|الوكيل|فلوس|refund|freeze|EGP` in Roz contexts.

## Decisions (owner, 7 Oct 2026)

- **A. Main CTA:** Aaref and Adnan use "Book a planning session" as the main button and "Start free" as the second. Roz uses "Start with one QR scan". The pricing page keeps "Start free".
- **C. New industries:** yes. Build real estate, e-commerce and automotive (Phase 4).
- **D. PDFs:** yes. Publish the profile PDFs and one-pagers as downloads (EN and AR).
- **E. Portraits:** replace all three with the new profile portraits.
- **Still open:** B (a Roz card on pricing) and F (which integrations every package includes).

## Options that were put to the owner

- **A. Main CTA.** The profiles are sales-led. Proposed:
  - Aaref and Adnan: "Book a planning session" first, "Start free" second (or removed).
  - Roz: "Start with one QR scan" or "Talk to us".
  - Pricing keeps "Start free".
- **B. Roz on the pricing page.** Hold until package details exist, or add a "smaller packages — talk to us" card now.
- **C. Real estate, e-commerce and automotive pages.** Build them now (the content exists in all three profiles) or later.
- **D. PDF downloads.** Publish the profile PDFs and one-pagers on the site, or keep them for sales follow-up only.
- **E. Portraits.** Replace all three SVGs with the new portraits (consistent), or only Roz (her look changed).
- **F. Integrations.** The profiles name Shopify, Google Sheets, Google Calendar, CRM, Zoho Desk and Zendesk. Confirm they are available on every package before the pages say so (open item in the profiles README).
