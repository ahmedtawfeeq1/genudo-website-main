---
project: genudo-website
topic: seo-geo-strategy
type: analysis
date: 2026-10-05
source: claude-code
tags: [seo, geo, aeo, schema, content-strategy, arabic]
loredex: routed
---

# GenuDo SEO + GEO strategy

Goal: when someone asks Google, ChatGPT, Gemini, Perplexity or Claude for an AI employee, AI agent, AI customer service, AI sales agent or WhatsApp quality control (in English or Arabic), GenuDo is named, described correctly, and linked.

Ranking is earned on two fronts. **On-site** (this repo) makes GenuDo easy to retrieve, quote and trust. **Off-site** (section 6) creates the third-party mentions that AI engines use to decide whom to recommend. Off-site is the bigger lever for "number one", and it cannot be done from code.

## 1. Canonical entity statement (use verbatim everywhere)

The same wording on the website, `llms.txt`, schema `description`, LinkedIn, G2/Capterra, Product Hunt, Crunchbase, YouTube and press kits. AI engines build the brand "entity" from repeated, consistent descriptions.

**EN (one line):** GenuDo is an AI workforce platform for businesses in Egypt and the Middle East. It gives you AI employees (Aaref for sales, Adnan for customer support and ROZ for WhatsApp quality control) that answer customers on WhatsApp, Instagram, Messenger and website chat in Arabic dialects and other languages, follow up, book meetings and update your CRM, while your team stays in control.

**AR (سطر واحد):** جينـو دو منصة فريق عمل بالذكاء الاصطناعي للشركات في مصر والشرق الأوسط. بتديك موظفين بالذكاء الاصطناعي: عارف للمبيعات، وعدنان لخدمة العملاء، وروز لمراجعة جودة محادثات WhatsApp. بيردوا على عملائك على WhatsApp و Instagram و Messenger وشات الموقع بلهجتهم، ويتابعوا ويحجزوا المواعيد ويحدّثوا الـ CRM، وإنت متحكم في كل حاجة.

Names: **GenuDo** (alternate names: Genudo, جينـو دو, جينو دو). Employees: **Aaref / عارف**, **Adnan / عدنان**, **ROZ / روز**. Mascot: **GENU / جينـو**.

## 2. Category terms we want to own

| Concept | EN terms | AR terms (as people type them) |
|---|---|---|
| Category | AI workforce, AI employees, AI agents for business | موظفين بالذكاء الاصطناعي، موظف ذكاء اصطناعي، فريق عمل بالذكاء الاصطناعي |
| Sales | AI sales agent, AI sales rep for WhatsApp, lead follow-up automation | موظف مبيعات بالذكاء الاصطناعي، متابعة العملاء على واتساب، رد آلي على العملاء |
| Support | AI customer service agent, AI customer support in Arabic | خدمة عملاء بالذكاء الاصطناعي، شات بوت خدمة عملاء بالعربي |
| Quality control | WhatsApp quality control, monitor sales team WhatsApp | مراقبة محادثات فريق المبيعات على واتساب، جودة خدمة العملاء |
| Channel | WhatsApp AI agent, WhatsApp chatbot for business | بوت واتساب للشركات، واتساب بيزنس ذكاء اصطناعي |

Note: Arabic searchers type «واتساب» in Arabic script far more than "WhatsApp". UI copy keeps WhatsApp in Latin script (brand rule). The `/ai-workforce` guide and FAQ answers may mention «واتساب (WhatsApp)» once where it reads naturally, so the page matches the query. Owner to confirm.

## 3. Prompt clusters → page mapping

| Prompt cluster (EN / AR) | Target page | Format that wins |
|---|---|---|
| "what is an AI workforce / AI employee" · «يعني إيه موظف بالذكاء الاصطناعي» | `/ai-workforce` (new pillar) | Definition in the first sentence, question H2s, FAQ |
| "AI employee vs chatbot" · «الفرق بين الشات بوت والموظف الذكي» | `/ai-workforce` table + `/blog/ai-employees-vs-chatbots` | Comparison table |
| "best AI agent for WhatsApp business" · «أفضل بوت واتساب للشركات» | `/` + `/how-it-works` | Answer-first hero, FAQ, SoftwareApplication schema |
| "AI sales agent that follows up and books meetings" · «موظف مبيعات بالذكاء الاصطناعي» | `/sol-sales-agent` | Outcome cards, FAQ, Service schema |
| "AI customer service in Arabic" · «خدمة عملاء بالذكاء الاصطناعي بالعربي» | `/sol-customer-service` | Same |
| "monitor my sales team's WhatsApp chats" · «مراقبة محادثات الفريق على واتساب» | `/sol-operations` | Same |
| "AI receptionist / booking for clinics, gyms, academies, hotels, events, agencies" | `/ind-*` | Industry FAQ, conversation example |
| "how much does an AI employee cost" · «سعر موظف الذكاء الاصطناعي» | `/pricing` + `/blog/cost-per-outcome` | Plain pricing table (prices unchanged) |
| "is it safe / who sees my data" · «بياناتي في أمان؟» | `/security` | FAQ |
| "manage AI agents from Claude or ChatGPT (MCP)" | `/api-mcp` | Steps + FAQ |

## 4. On-site work (this repo)

Done in this pass:
- Structured data on every page: Organization (with alternate names and the entity statement), WebSite, BreadcrumbList, FAQPage (generated from each page's FAQ markup, so it always matches the visible text), SoftwareApplication (home, how it works, pillar), Service (the three employee pages), BlogPosting (blog posts).
- `/ai-workforce` pillar guide in EN + AR, linked from the nav and footer.
- FAQ sections added to Home and How it works.
- `llms.txt` rewritten around the entity statement, plus `llms-full.txt` (facts + FAQs, EN + AR).
- Sitemap `lastmod`; robots allows the current AI crawlers (incl. Claude-SearchBot, Claude-User).

Rules for future content:
- First sentence of every page/section answers the question directly. Headings phrased as the questions people ask.
- Only verified facts and numbers (see `_bmad-output/project-context.md` claims rules). Cited, real statistics raise AI citation rates; invented ones destroy trust.
- Every FAQ answer is 2–4 sentences, self-contained (quotable without context).
- Keep EN and AR pages in parity; same facts, same schema.
- Show a visible "Updated" date on guides and posts; refresh quarterly.

## 5. Measurement

- **GA4:** a channel group "AI assistants" matching referrers `chatgpt.com`, `chat.openai.com`, `perplexity.ai`, `gemini.google.com`, `copilot.microsoft.com`, `claude.ai`. Track demo bookings from it separately.
- **Search Console + Bing Webmaster Tools:** submit `sitemap.xml` in both. Bing feeds ChatGPT search and Copilot, so it matters more than its search share.
- **Monthly prompt test:** run the section 3 prompts (EN + AR) in ChatGPT, Gemini, Perplexity, Claude and Google AI Overviews. Log: mentioned? correct description? which page cited? sentiment? competitors named? Track share of voice over time.
- **"How did you hear about us?"** on the demo form, with "ChatGPT / AI assistant" as an option.

## 6. Off-site authority plan (highest impact; owner/marketing)

AI engines recommend brands that third parties talk about. In priority order:

1. **Entity profiles, same statement everywhere:** LinkedIn company page, Crunchbase, G2, Capterra, GetApp, Product Hunt, Wellfound, Google Business Profile, Wikidata item (facts only, with references).
2. **Reviews:** ask 10–20 real customers for detailed G2/Capterra reviews that mention the outcome and the channel ("Aaref answers our WhatsApp leads at night and books visits"). Descriptive reviews are what AI quotes.
3. **"Best of" and comparison lists:** pitch inclusion in "best AI agents for WhatsApp", "best AI customer service tools for MENA", "AI tools for clinics in Egypt" articles (EN + AR tech/business sites, e.g. regional startup media).
4. **YouTube:** publish the existing AI-workforce films (EN + AR) with the entity statement in the description and chapters per employee. YouTube is heavily cited by AI answers.
5. **Community:** genuine answers on Reddit (r/smallbusiness, r/WhatsApp, r/Egypt business threads), LinkedIn posts from the founder, Arabic business Facebook groups. Never spam; disclose affiliation.
6. **Partner co-citations:** integration pages and listings with Meta (WhatsApp Business Solution), Zoho, Zendesk, HubSpot marketplaces; case studies co-published with customers.
7. **PR:** founder interviews and data stories on AI adoption in Egyptian SMBs (with real, sourced numbers).

## 7. 90-day roadmap

| Weeks | On-site | Off-site |
|---|---|---|
| 1–2 | Ship this pass; submit sitemaps to Google + Bing; GA4 AI channel | Entity profiles with the canonical statement |
| 3–6 | One comparison page per main competitor (honest pros/cons, verified facts) | Review drive (G2/Capterra); YouTube films live |
| 7–12 | Industry guides in AR first (clinics, academies, gyms); quarterly refresh of `/ai-workforce` | "Best of" outreach; Reddit/LinkedIn cadence; first PR story |

Expected timeline (industry reports): first AI citations in 60–90 days of consistent publishing; meaningful share of voice in 3–6 months.

## Sources

- Walker Sands, Generative Engine Optimization: https://www.walkersands.com/capabilities/digital-marketing/generative-engine-optimization/
- Goodie, Prompt research: https://higoodie.com/features/prompt-research/
- Samet, A GEO-First Framework (WJARR 2026): https://wjarr.com/content/geo-first-framework-integrating-search-visibility-sentiment-and-digital-authority-organic
- AppTweak, GEO for apps: https://www.apptweak.com/en/aso-blog/geo-for-apps
- Sorn, GEO for SaaS: https://sorn.ai/blog/geo-for-saas-how-to-get-your-software-recommended-by-ai-search-engines-and-convert-ai-visibility-into-pipeline
- Conbersa, GEO for SaaS startups: https://www.conbersa.ai/learn/geo-for-saas-startups
