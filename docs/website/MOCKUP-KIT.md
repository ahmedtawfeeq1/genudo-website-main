---
project: genudo-website
topic: mockup-kit
type: note
date: 2026-10-05
source: claude-code
tags: [website, mockups, design-system, arabic, rtl]
loredex: routed
---

# Product-UI mockup kit (EN + AR)

Shared, static pictures of the GenuDo app for every page of the value-led site. The styles live in `src/styles/mockups.css`, which the layout already loads on every page, so a page needs no import. You can see every component, fluid and at 360px, at **`/en/kit-preview`** and **`/ar-EG/kit-preview`** (internal, noindex, not in nav or sitemap).

The look is ported from the rebuilt product UI in the video project (`src/ui/kit.tsx`, `theme.ts`, the AR panes): the light app theme, the indigo accent `#6468f0`, white cards on `#fcfdfe`, and WhatsApp green for chat.

> The snippets below are generated from `src/app/[locale]/kit-preview/kit-snippets.ts`, which also feeds the preview page. If you change a snippet, change it there and regenerate this file. Don't hand-edit the code blocks.

## Rules for page builders

1. **Copy, don't restyle.** Paste the snippet into your body file. Don't override `mk-` classes in page CSS. If you need a variant, ask for it in the kit.
2. **Every component root carries `mk`** (for example `class="mk mk-phone"`). That class holds the app tokens, scoped so they don't leak into the marketing page.
3. **EN pages use the English snippet. AR pages use the Arabic snippet**, which puts `dir="rtl" lang="ar"` on its root. Never add `dir="ltr"` to an Arabic mockup (the old bridge rule is retired). The same classes mirror automatically: the CSS uses logical properties only.
4. **Arabic mockup text is Egyptian with business vocabulary.** Product words stay English with الـ: الـ inbox، الـ dashboard، الـ CRM، الـ calendar، الـ knowledge base. Keep the Egyptian forms for the rest: المسارات، المرحلة، الفرص المكتسبة / الضائعة، المتابعات (اتبعتت / مجدولة / متأخرة)، تدخّل بشري، مسار التحويل. Never write «الوكيل» or «روبوت» for our employees: write «الموظف الذكي» or the employee's name (عارف · موظف ذكي). No MSA fragments inside mockups («الميعاد اتأكّد»، «هذه المحادثة»، «اختر»): write them Egyptian («الميعاد اتأكّد»، «المحادثة دي»، «اختار»). Customer and employee chat messages are content, so they stay Egyptian. Employee-card bullets are marketing copy, so they are Egyptian too.
5. **Numbers:** Western digits only. Wrap mixed Arabic + Latin/number runs in `<bdi>` (`<bdi>$0.01</bdi> / رسالة`, `<bdi>WhatsApp</bdi>`, `<bdi>6:30</bdi> م`).
6. **Fictional data only:** منى عادل / Mona Adel, كريم سعيد / Karim Saeed, phones `+20 100 000 0000`, the demo clinic "Bright Smile" / «عيادة برايت سمايل». Every number in a mockup is illustrative. Never quote one as a result in your copy.
7. **Accessibility:** each snippet root has `role="img"` and an `aria-label` that sums up the picture, so screen readers hear one sentence instead of UI fragments. Update the label if you change the story. Buttons are `<span class="mk-btn">`, never real `<button>`s, because nothing in a mockup is clickable.
8. **Mobile:** everything fits at 360px. Components adapt to **their own width** (container queries), so they work in narrow desktop columns too. Only `.mk-board` scrolls sideways, and only inside itself. Give a mockup a column at least 280px wide.
9. **Motion:** the typing dots, the caret, the voice waveform, the live dot and the board's new-card pop are CSS-only, and they switch off under `prefers-reduced-motion`.

### Wrappers

None of the snippets needs a wrapper. Each one is block-level and fills its parent's width (the phone caps itself at 340px and centres). The two exceptions:
- **`#kpis`** and **`#routing`** are two sibling roots (tiles + funnel, tiers + spend cap). To show them side by side, put them in your own grid. Stack them under 720px.
- **`#employee`** is one card. Put three in your own grid (`grid-template-columns: repeat(auto-fit, minmax(240px, 1fr))`).

## Avatars

Static SVGs ported from the video rig (`src/character/Genu.tsx`, hue-shifted shells per `docs/GENU_CHARACTER.md`). They face front, have transparent backgrounds and use a viewBox with a 216:236 aspect ratio, so set the width and let the height follow.

| File | Who | Shell |
|---|---|---|
| `/media/img/genu.svg` | GENU جينـو, the mascot | indigo `#6468f0` |
| `/media/img/aaref.svg` | Aaref عارف, Sales | amber `#e0a23a` |
| `/media/img/adnan.svg` | Adnan عدنان, Support & success | blue `#52a7cc` |
| `/media/img/roz.svg` | ROZ روز, Quality control & operations | pink `#e86fa6`, with a bow and eyelashes |

For favicon or 16–40px sizes, use the existing head-only `/media/img/genu-avatar.svg`.

## Class reference

| Class | Purpose |
|---|---|
| `mk` | Root of every component. Holds the scoped app tokens and the font (Arabic face + no tracking under `dir=rtl`) |
| `mk-ic mk-ic--{name}` | Monochrome line icon (`currentColor`). Names: whatsapp insta messenger globe mic check checks bolt moon book plus arrow back chev chevdown send headset target calendar repeat user users sparkle pause play clock alert flag dollar search filter grid pipeline inbox table shield trenddown x xcircle phone dots route wallet trophy note qr link. `arrow back chev send` mirror in RTL |
| `mk-chip` (+ `--indigo --green --red --amber --blue --violet --pink --line`) | Small rounded label |
| `mk-chip--opt` (+ `.is-on`, `mk-chip--auto`) | Selectable chip (dialects, filters) |
| `mk-stage` (+ `--indigo --violet --amber --green --red`, `--sm`) | Solid stage pill, as on the board column heads |
| `mk-btn` (+ `--primary --soft --ghost`) | Button look (use on a `<span>`) |
| `mk-avatar` (+ `--sm`, `--green --amber --pink --blue --violet`, `--bot`) | Initials avatar, or a robot image tile |
| `mk-dot` (+ `--live`) | Status dot (pulses when live) |
| `mk-toggle` (+ `.is-on`) | Switch |
| `mk-bar` > `i[style="--w:64%"]` (+ `--green --amber --red`) | Progress bar |
| `mk-card`, `mk-card__head`, `mk-card__title` | White card with a header row |
| `mk-app`, `__bar`, `__dots`, `__url`, `__body` | App window frame (browser bar + body grid) |
| `mk-side`, `__logo`, `__label`, `__item` (+ `.is-active`) | App sidebar. It becomes an icon rail under 720px and hides under 480px |
| `mk-main`, `__head`, `__title`, `__sub`, `__actions` | App content area. A nested board or card drops its own chrome |
| `mk-board`, `__cols` | Pipeline board: the only sideways-scrolling mockup (scroll-snap) |
| `mk-col`, `__head`, `__count`, `__empty` | Stage column |
| `mk-opp`, `__top`, `__who`, `__ch`, `__time`, `__msg`, `__tags`, `--new` | Opportunity card (`--new` pops in once) |
| `mk-phone`, `__screen`, `__status`, `__head`, `__who`, `__compose` (+ `--input`), `__send` | Phone frame, max 340px |
| `mk-takeover` (+ `--human`), `__state`, `__btn` | "AI is handling this chat · Take over" / "You are handling this chat · Hand back to AI" banner |
| `mk-chat`, `__day` | WhatsApp chat area (wallpaper) and date pill |
| `mk-msg` (+ `--in` customer, `--out` business/AI), `__by`, `__meta` | Chat bubble. `--in` sits at the start side, `--out` at the end side |
| `mk-voice`, `__row`, `__play`, `__wave`, `__len`, `__text` | Voice-note bubble with its transcript |
| `mk-meeting`, `__top`, `__ic`, `__title`, `__when`, `__rows` | Meeting-confirmation card in the chat |
| `mk-typing` (+ `--in`) | Typing dots |
| `mk-inbox`, `__grid`, `__list`, `__search` | Unified inbox. The list hides under 600px |
| `mk-convo` (+ `.is-active`), `__body`, `__row`, `__time`, `__snip` | Conversation row (channel-coloured icon) |
| `mk-thread`, `__head`, `__who`, `__body` | Conversation thread |
| `mk-reply-meta` | Per-reply chips under an AI reply (cost, response time, confidence) |
| `mk-note` | Private team note |
| `mk-timeline`, `mk-step` (+ `.is-sent .is-scheduled .is-overdue`, `--end`), `__head`, `__wait`, `__msg` | Follow-up sequence timeline |
| `mk-status--sent / --scheduled / --overdue` | Follow-up status chip |
| `mk-health`, `__title`, `__bar`, `__legend` | Follow-up status summary (stacked bar + legend) |
| `mk-kpis`, `mk-kpi` (+ `--hero`), `__ic` (+ `--green --amber --red`), `__label`, `__value`, `__sub`, `__badge` | KPI tiles. The hero tile spans the row |
| `mk-funnel__rows`, `__row`, `__top`, `__bar`, `__drop` | Mini pipeline funnel (bars fill from the start side) |
| `mk-kb`, `mk-table`, `mk-num`, `mk-hide-sm`, `mk-kb__ask` | Knowledge table. `mk-hide-sm` columns hide under 420px |
| `mk-tiers`, `mk-tier` (+ `--moderate --complex`), `__head`, `__name`, `__cost`, `__eg`, `__model`, `__share` | Smart-routing tiers (simple/moderate/complex) |
| `mk-cap__value`, `mk-cap__rule` | Spend-cap card parts |
| `mk-chips` | Wrapping chip row (dialects) |
| `mk-review__head`, `__who`, `__foot`, `mk-flags`, `mk-flag` (+ `--slow --missed --stalled`), `__ic`, `__body` | ROZ quality-review card |
| `mk-emp` (+ `--aaref --adnan --roz --genu`), `__img`, `__name`, `__role`, `__list` | Employee card |
| `mk-wizard`, `__eyebrow`, `__steps`, `mk-q`, `__top`, `__count`, `__title`, `__hint`, `__mic`, `__micbtn`, `__foot`, `mk-input`, `mk-caret` | Business-brief wizard question card |
| `mk-muted`, `mk-small` | Text helpers |

# Snippets

## App window + sidebar `#app-window`

Frame for any app screen. Put another component (board, KPIs, card) inside .mk-main. Sidebar becomes an icon rail under 720px of its own width and disappears under 480px. No wrapper needed.

**English**

```html
<div class="mk mk-app" role="img" aria-label="GenuDo app: a sales pipeline">
  <div class="mk-app__bar"><span class="mk-app__dots"><i></i><i></i><i></i></span><span class="mk-app__url">app.genudo.ai</span></div>
  <div class="mk-app__body">
    <div class="mk-side">
      <div class="mk-side__logo"><img src="/media/img/genu-avatar.svg" alt="" width="26" height="26"><span>GenuDo</span></div>
      <div class="mk-side__item"><i class="mk-ic mk-ic--grid"></i><span>Dashboard</span></div>
      <div class="mk-side__label">BUILD</div>
      <div class="mk-side__item is-active"><i class="mk-ic mk-ic--pipeline"></i><span>Pipelines</span></div>
      <div class="mk-side__item"><i class="mk-ic mk-ic--book"></i><span>Knowledge</span></div>
      <div class="mk-side__label">ENGAGE</div>
      <div class="mk-side__item"><i class="mk-ic mk-ic--inbox"></i><span>Inbox</span></div>
      <div class="mk-side__item"><i class="mk-ic mk-ic--users"></i><span>Contacts</span></div>
    </div>
    <div class="mk-main">
      <div class="mk-main__head">
        <div><div class="mk-main__title">Bright Smile · WhatsApp sales</div><div class="mk-main__sub">Your AI employee moves every opportunity forward.</div></div>
        <div class="mk-main__actions"><span class="mk-chip mk-chip--green"><i class="mk-dot mk-dot--live"></i>Published</span><span class="mk-btn mk-btn--soft"><i class="mk-ic mk-ic--sparkle"></i>Test AI</span></div>
      </div>
      <div class="mk-kpis">
        <div class="mk-kpi"><span class="mk-kpi__label">Active opportunities</span><span class="mk-kpi__value">412</span></div>
        <div class="mk-kpi"><span class="mk-kpi__label">Opportunities won</span><span class="mk-kpi__value">96</span></div>
      </div>
    </div>
  </div>
</div>
```

**Arabic (RTL)**

```html
<div class="mk mk-app" dir="rtl" lang="ar" role="img" aria-label="تطبيق GenuDo: مسار مبيعات">
  <div class="mk-app__bar"><span class="mk-app__dots"><i></i><i></i><i></i></span><span class="mk-app__url">app.genudo.ai</span></div>
  <div class="mk-app__body">
    <div class="mk-side">
      <div class="mk-side__logo"><img src="/media/img/genu-avatar.svg" alt="" width="26" height="26"><span>GenuDo</span></div>
      <div class="mk-side__item"><i class="mk-ic mk-ic--grid"></i><span>الـ dashboard</span></div>
      <div class="mk-side__label">البناء</div>
      <div class="mk-side__item is-active"><i class="mk-ic mk-ic--pipeline"></i><span>المسارات</span></div>
      <div class="mk-side__item"><i class="mk-ic mk-ic--book"></i><span>قاعدة المعرفة</span></div>
      <div class="mk-side__label">التفاعل</div>
      <div class="mk-side__item"><i class="mk-ic mk-ic--inbox"></i><span>الـ inbox</span></div>
      <div class="mk-side__item"><i class="mk-ic mk-ic--users"></i><span>جهات الاتصال</span></div>
    </div>
    <div class="mk-main">
      <div class="mk-main__head">
        <div><div class="mk-main__title">عيادة برايت سمايل · مبيعات <bdi>WhatsApp</bdi></div><div class="mk-main__sub">الموظف الذكي بينقل كل فرصة للمرحلة اللي بعدها.</div></div>
        <div class="mk-main__actions"><span class="mk-chip mk-chip--green"><i class="mk-dot mk-dot--live"></i>منشور</span><span class="mk-btn mk-btn--soft"><i class="mk-ic mk-ic--sparkle"></i>جرّب الموظف الذكي</span></div>
      </div>
      <div class="mk-kpis">
        <div class="mk-kpi"><span class="mk-kpi__label">الفرص النشطة</span><span class="mk-kpi__value">412</span></div>
        <div class="mk-kpi"><span class="mk-kpi__label">الفرص المكتسبة</span><span class="mk-kpi__value">96</span></div>
      </div>
    </div>
  </div>
</div>
```

## Pipeline board `#board`

Stage columns with opportunity cards. The ONLY mockup that scrolls sideways (inside itself; the page never does). Works alone or inside .mk-main of the app window. .mk-opp--new pops in once. Stage names are the business's own data.

**English**

```html
<div class="mk mk-board" role="img" aria-label="Pipeline board with four stages">
  <div class="mk-board__cols">
    <div class="mk-col">
      <div class="mk-col__head"><span class="mk-stage">New lead</span><span class="mk-col__count">16 deals</span></div>
      <div class="mk-opp mk-opp--new">
        <div class="mk-opp__top"><span class="mk-avatar mk-avatar--sm mk-avatar--green">MA</span><div class="mk-opp__who"><b>Mona Adel</b><span class="mk-opp__ch"><i class="mk-ic mk-ic--whatsapp"></i>WhatsApp</span></div><span class="mk-opp__time">now</span></div>
        <p class="mk-opp__msg">Hi! How much is teeth whitening?</p>
      </div>
      <div class="mk-opp">
        <div class="mk-opp__top"><span class="mk-avatar mk-avatar--sm mk-avatar--blue">OH</span><div class="mk-opp__who"><b>Omar Hassan</b><span class="mk-opp__ch"><i class="mk-ic mk-ic--whatsapp"></i>WhatsApp</span></div><span class="mk-opp__time">2:14 AM</span></div>
        <p class="mk-opp__msg">Do you work on Fridays?</p>
      </div>
    </div>
    <div class="mk-col">
      <div class="mk-col__head"><span class="mk-stage mk-stage--indigo">Interested</span><span class="mk-col__count">6 deals</span></div>
      <div class="mk-opp">
        <div class="mk-opp__top"><span class="mk-avatar mk-avatar--sm mk-avatar--amber">KS</span><div class="mk-opp__who"><b>Karim Saeed</b><span class="mk-opp__ch"><i class="mk-ic mk-ic--whatsapp"></i>WhatsApp</span></div><span class="mk-opp__time">1h</span></div>
        <p class="mk-opp__msg">Can you send me the price list?</p>
        <div class="mk-opp__tags"><span class="mk-chip mk-chip--amber"><i class="mk-ic mk-ic--repeat"></i>Follow-up 1 · sent</span></div>
      </div>
    </div>
    <div class="mk-col">
      <div class="mk-col__head"><span class="mk-stage mk-stage--violet">Booking meeting</span><span class="mk-col__count">3 deals</span></div>
      <div class="mk-opp">
        <div class="mk-opp__top"><span class="mk-avatar mk-avatar--sm mk-avatar--pink">SK</span><div class="mk-opp__who"><b>Sara Kamal</b><span class="mk-opp__ch"><i class="mk-ic mk-ic--whatsapp"></i>WhatsApp</span></div><span class="mk-opp__time">5m</span></div>
        <p class="mk-opp__msg">Thursday after 6 works for me.</p>
        <div class="mk-opp__tags"><span class="mk-chip mk-chip--indigo"><i class="mk-ic mk-ic--calendar"></i>Thu 6:30 PM</span></div>
      </div>
    </div>
    <div class="mk-col">
      <div class="mk-col__head"><span class="mk-stage mk-stage--green">Won</span><span class="mk-col__count">1 deal</span></div>
      <div class="mk-opp">
        <div class="mk-opp__top"><span class="mk-avatar mk-avatar--sm mk-avatar--violet">NE</span><div class="mk-opp__who"><b>Nour Ehab</b><span class="mk-opp__ch"><i class="mk-ic mk-ic--whatsapp"></i>WhatsApp</span></div><span class="mk-opp__time">Mon</span></div>
        <p class="mk-opp__msg">See you on Monday!</p>
        <div class="mk-opp__tags"><span class="mk-chip mk-chip--green"><i class="mk-ic mk-ic--check"></i>Meeting booked</span></div>
      </div>
    </div>
  </div>
</div>
```

**Arabic (RTL)**

```html
<div class="mk mk-board" dir="rtl" lang="ar" role="img" aria-label="لوحة المسار بأربع مراحل">
  <div class="mk-board__cols">
    <div class="mk-col">
      <div class="mk-col__head"><span class="mk-stage">عميل محتمل جديد</span><span class="mk-col__count">16 فرصة</span></div>
      <div class="mk-opp mk-opp--new">
        <div class="mk-opp__top"><span class="mk-avatar mk-avatar--sm mk-avatar--green">م</span><div class="mk-opp__who"><b>منى عادل</b><span class="mk-opp__ch"><i class="mk-ic mk-ic--whatsapp"></i>WhatsApp</span></div><span class="mk-opp__time">الآن</span></div>
        <p class="mk-opp__msg">أهلًا، التبييض بكام؟</p>
      </div>
      <div class="mk-opp">
        <div class="mk-opp__top"><span class="mk-avatar mk-avatar--sm mk-avatar--blue">ع</span><div class="mk-opp__who"><b>عمر حسن</b><span class="mk-opp__ch"><i class="mk-ic mk-ic--whatsapp"></i>WhatsApp</span></div><span class="mk-opp__time"><bdi>2:14</bdi> ص</span></div>
        <p class="mk-opp__msg">إنتو شغالين يوم الجمعة؟</p>
      </div>
    </div>
    <div class="mk-col">
      <div class="mk-col__head"><span class="mk-stage mk-stage--indigo">مهتم</span><span class="mk-col__count">6 فرص</span></div>
      <div class="mk-opp">
        <div class="mk-opp__top"><span class="mk-avatar mk-avatar--sm mk-avatar--amber">ك</span><div class="mk-opp__who"><b>كريم سعيد</b><span class="mk-opp__ch"><i class="mk-ic mk-ic--whatsapp"></i>WhatsApp</span></div><span class="mk-opp__time">منذ ساعة</span></div>
        <p class="mk-opp__msg">ممكن تبعتلي قايمة الأسعار؟</p>
        <div class="mk-opp__tags"><span class="mk-chip mk-chip--amber"><i class="mk-ic mk-ic--repeat"></i>المتابعة 1 · مُرسلة</span></div>
      </div>
    </div>
    <div class="mk-col">
      <div class="mk-col__head"><span class="mk-stage mk-stage--violet">حجز موعد</span><span class="mk-col__count">3 فرص</span></div>
      <div class="mk-opp">
        <div class="mk-opp__top"><span class="mk-avatar mk-avatar--sm mk-avatar--pink">س</span><div class="mk-opp__who"><b>سارة كمال</b><span class="mk-opp__ch"><i class="mk-ic mk-ic--whatsapp"></i>WhatsApp</span></div><span class="mk-opp__time">منذ 5 د</span></div>
        <p class="mk-opp__msg">الخميس بعد 6 يناسبني.</p>
        <div class="mk-opp__tags"><span class="mk-chip mk-chip--indigo"><i class="mk-ic mk-ic--calendar"></i>الخميس <bdi>6:30</bdi> م</span></div>
      </div>
    </div>
    <div class="mk-col">
      <div class="mk-col__head"><span class="mk-stage mk-stage--green">مكتسبة</span><span class="mk-col__count">فرصة واحدة</span></div>
      <div class="mk-opp">
        <div class="mk-opp__top"><span class="mk-avatar mk-avatar--sm mk-avatar--violet">ن</span><div class="mk-opp__who"><b>نور إيهاب</b><span class="mk-opp__ch"><i class="mk-ic mk-ic--whatsapp"></i>WhatsApp</span></div><span class="mk-opp__time">الاثنين</span></div>
        <p class="mk-opp__msg">نشوفكم يوم الاتنين!</p>
        <div class="mk-opp__tags"><span class="mk-chip mk-chip--green"><i class="mk-ic mk-ic--check"></i>الميعاد اتحجز</span></div>
      </div>
    </div>
  </div>
</div>
```

## WhatsApp phone: AI is handling the chat `#phone`

Phone frame (max 340px, centred) with the takeover banner, customer and AI bubbles, a voice note with its transcript, a meeting confirmation and a typing indicator. Drop any bubble you do not need. No wrapper needed.

**English**

```html
<div class="mk mk-phone" role="img" aria-label="WhatsApp chat answered by the AI employee">
  <div class="mk-phone__screen">
    <div class="mk-phone__status"><span>9:41</span></div>
    <div class="mk-phone__head"><i class="mk-ic mk-ic--back"></i><span class="mk-avatar mk-avatar--green">MA</span><div class="mk-phone__who"><b>Mona Adel</b><span><i class="mk-ic mk-ic--whatsapp"></i>WhatsApp · +20 100 000 0000</span></div></div>
    <div class="mk-takeover"><span class="mk-takeover__state"><i class="mk-ic mk-ic--sparkle"></i>AI is handling this chat</span><span class="mk-takeover__btn"><i class="mk-ic mk-ic--pause"></i>Take over</span></div>
    <div class="mk-chat">
      <span class="mk-chat__day">Today</span>
      <div class="mk-msg mk-msg--in">Hi! How much is teeth whitening?<span class="mk-msg__meta">2:14 AM</span></div>
      <div class="mk-msg mk-msg--out"><span class="mk-msg__by"><i class="mk-ic mk-ic--sparkle"></i>Aaref · AI</span>Hi Mona! Whitening is EGP 3,500 and takes about an hour. Would you like a visit this week?<span class="mk-msg__meta">2:14 AM <i class="mk-ic mk-ic--checks"></i></span></div>
      <div class="mk-msg mk-msg--in mk-voice">
        <div class="mk-voice__row"><span class="mk-voice__play"><i class="mk-ic mk-ic--play"></i></span><span class="mk-voice__wave"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></span><span class="mk-voice__len">0:09</span></div>
        <div class="mk-voice__text"><b><i class="mk-ic mk-ic--mic"></i>Transcribed</b>Yes please, Thursday after 6 if you can.</div>
        <span class="mk-msg__meta">2:15 AM</span>
      </div>
      <div class="mk-msg mk-msg--out"><span class="mk-msg__by"><i class="mk-ic mk-ic--sparkle"></i>Aaref · AI</span>Done! You are booked for Thursday at 6:30 PM.<span class="mk-msg__meta">2:15 AM <i class="mk-ic mk-ic--checks"></i></span></div>
      <div class="mk-meeting">
        <div class="mk-meeting__top"><span class="mk-meeting__ic"><i class="mk-ic mk-ic--calendar"></i></span><div><div class="mk-meeting__title">Meeting confirmed</div><div class="mk-meeting__when">Thu 14 Jan · 6:30 PM</div></div></div>
        <div class="mk-meeting__rows"><span><i class="mk-ic mk-ic--check"></i>Added to Google Calendar</span><span><i class="mk-ic mk-ic--check"></i>Meeting link sent on WhatsApp</span></div>
      </div>
      <div class="mk-typing mk-typing--in"><i></i><i></i><i></i></div>
    </div>
    <div class="mk-phone__compose">AI is handling this chat. Take over to reply.</div>
  </div>
</div>
```

**Arabic (RTL)**

```html
<div class="mk mk-phone" dir="rtl" lang="ar" role="img" aria-label="محادثة WhatsApp بيرد عليها الموظف الذكي">
  <div class="mk-phone__screen">
    <div class="mk-phone__status"><span>9:41</span></div>
    <div class="mk-phone__head"><i class="mk-ic mk-ic--back"></i><span class="mk-avatar mk-avatar--green">م</span><div class="mk-phone__who"><b>منى عادل</b><span><i class="mk-ic mk-ic--whatsapp"></i><bdi>WhatsApp · +20 100 000 0000</bdi></span></div></div>
    <div class="mk-takeover"><span class="mk-takeover__state"><i class="mk-ic mk-ic--sparkle"></i>الموظف الذكي ماسك المحادثة دي</span><span class="mk-takeover__btn"><i class="mk-ic mk-ic--pause"></i>تدخّل بشري</span></div>
    <div class="mk-chat">
      <span class="mk-chat__day">اليوم</span>
      <div class="mk-msg mk-msg--in">أهلًا، التبييض بكام؟<span class="mk-msg__meta"><bdi>2:14</bdi> ص</span></div>
      <div class="mk-msg mk-msg--out"><span class="mk-msg__by"><i class="mk-ic mk-ic--sparkle"></i>عارف · موظف ذكي</span>أهلًا يا منى! التبييض بـ <bdi>3,500</bdi> جنيه وبياخد حوالي ساعة. تحبي نحجزلك ميعاد الأسبوع ده؟<span class="mk-msg__meta"><bdi>2:14</bdi> ص <i class="mk-ic mk-ic--checks"></i></span></div>
      <div class="mk-msg mk-msg--in mk-voice">
        <div class="mk-voice__row"><span class="mk-voice__play"><i class="mk-ic mk-ic--play"></i></span><span class="mk-voice__wave"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></span><span class="mk-voice__len">0:09</span></div>
        <div class="mk-voice__text"><b><i class="mk-ic mk-ic--mic"></i>الرسالة الصوتية اتحوّلت لنص</b>أيوه ياريت، يوم الخميس بعد الساعة 6 لو ينفع.</div>
        <span class="mk-msg__meta"><bdi>2:15</bdi> ص</span>
      </div>
      <div class="mk-msg mk-msg--out"><span class="mk-msg__by"><i class="mk-ic mk-ic--sparkle"></i>عارف · موظف ذكي</span>تمام! حجزتلك يوم الخميس الساعة <bdi>6:30</bdi> مساءً.<span class="mk-msg__meta"><bdi>2:15</bdi> ص <i class="mk-ic mk-ic--checks"></i></span></div>
      <div class="mk-meeting">
        <div class="mk-meeting__top"><span class="mk-meeting__ic"><i class="mk-ic mk-ic--calendar"></i></span><div><div class="mk-meeting__title">الميعاد اتأكّد</div><div class="mk-meeting__when">الخميس 14 يناير · <bdi>6:30</bdi> م</div></div></div>
        <div class="mk-meeting__rows"><span><i class="mk-ic mk-ic--check"></i>أُضيف إلى <bdi>Google Calendar</bdi></span><span><i class="mk-ic mk-ic--check"></i>أُرسل رابط الاجتماع عبر <bdi>WhatsApp</bdi></span></div>
      </div>
      <div class="mk-typing mk-typing--in"><i></i><i></i><i></i></div>
    </div>
    <div class="mk-phone__compose">الموظف الذكي ماسك المحادثة دي. اختار «تدخّل بشري» لو عايز تردّ بنفسك.</div>
  </div>
</div>
```

## WhatsApp phone: you are handling the chat `#phone-human`

The other takeover state: a person has taken over, the AI is paused for this chat and one tap hands it back. Reuse the phone frame from above; swap the banner and the compose bar.

**English**

```html
<div class="mk mk-phone" role="img" aria-label="A team member has taken over the chat">
  <div class="mk-phone__screen">
    <div class="mk-phone__status"><span>9:41</span></div>
    <div class="mk-phone__head"><i class="mk-ic mk-ic--back"></i><span class="mk-avatar mk-avatar--amber">KS</span><div class="mk-phone__who"><b>Karim Saeed</b><span><i class="mk-ic mk-ic--whatsapp"></i>WhatsApp · +20 100 000 0000</span></div></div>
    <div class="mk-takeover mk-takeover--human"><span class="mk-takeover__state"><i class="mk-ic mk-ic--user"></i>You are handling this chat</span><span class="mk-takeover__btn"><i class="mk-ic mk-ic--sparkle"></i>Hand back to AI</span></div>
    <div class="mk-chat">
      <div class="mk-msg mk-msg--in">Can I get a discount for my whole family?<span class="mk-msg__meta">11:02 AM</span></div>
      <div class="mk-msg mk-msg--out">Of course, Karim! I'll prepare a family offer for you today.<span class="mk-msg__meta">11:04 AM <i class="mk-ic mk-ic--checks"></i></span></div>
    </div>
    <div class="mk-phone__compose mk-phone__compose--input"><span>Type a message…</span><span class="mk-phone__send"><i class="mk-ic mk-ic--send"></i></span></div>
  </div>
</div>
```

**Arabic (RTL)**

```html
<div class="mk mk-phone" dir="rtl" lang="ar" role="img" aria-label="أحد أعضاء الفريق تولّى المحادثة">
  <div class="mk-phone__screen">
    <div class="mk-phone__status"><span>9:41</span></div>
    <div class="mk-phone__head"><i class="mk-ic mk-ic--back"></i><span class="mk-avatar mk-avatar--amber">ك</span><div class="mk-phone__who"><b>كريم سعيد</b><span><i class="mk-ic mk-ic--whatsapp"></i><bdi>WhatsApp · +20 100 000 0000</bdi></span></div></div>
    <div class="mk-takeover mk-takeover--human"><span class="mk-takeover__state"><i class="mk-ic mk-ic--user"></i>إنت ماسك المحادثة دي</span><span class="mk-takeover__btn"><i class="mk-ic mk-ic--sparkle"></i>رجّعها للموظف الذكي</span></div>
    <div class="mk-chat">
      <div class="mk-msg mk-msg--in">ينفع آخد خصم للعيلة كلها؟<span class="mk-msg__meta"><bdi>11:02</bdi> ص</span></div>
      <div class="mk-msg mk-msg--out">أكيد يا كريم! هجهزلك عرض للعيلة النهارده.<span class="mk-msg__meta"><bdi>11:04</bdi> ص <i class="mk-ic mk-ic--checks"></i></span></div>
    </div>
    <div class="mk-phone__compose mk-phone__compose--input"><span>اكتب رسالة…</span><span class="mk-phone__send"><i class="mk-ic mk-ic--send"></i></span></div>
  </div>
</div>
```

## Inbox thread with per-reply chips `#inbox`

Unified inbox: conversation list + thread. Every AI reply carries chips for cost, response time and confidence; private notes are visible to your team only. The list hides under 600px of its own width. Numbers are illustrative: never restate them as claims in page copy.

**English**

```html
<div class="mk mk-inbox" role="img" aria-label="Unified inbox with an AI reply and its cost">
  <div class="mk-inbox__grid">
    <div class="mk-inbox__list">
      <div class="mk-inbox__search"><i class="mk-ic mk-ic--search"></i>Search conversations</div>
      <div class="mk-convo is-active"><span class="mk-avatar mk-avatar--sm mk-avatar--green">MA</span><div class="mk-convo__body"><div class="mk-convo__row"><b>Mona Adel</b><span class="mk-convo__time">now</span></div><div class="mk-convo__snip"><i class="mk-ic mk-ic--whatsapp"></i>Thursday after 6 works.</div></div></div>
      <div class="mk-convo"><span class="mk-avatar mk-avatar--sm mk-avatar--pink">LM</span><div class="mk-convo__body"><div class="mk-convo__row"><b>Laila Mostafa</b><span class="mk-convo__time">4m</span></div><div class="mk-convo__snip"><i class="mk-ic mk-ic--insta"></i>Is parking available?</div></div></div>
      <div class="mk-convo"><span class="mk-avatar mk-avatar--sm mk-avatar--blue">YA</span><div class="mk-convo__body"><div class="mk-convo__row"><b>Youssef Ali</b><span class="mk-convo__time">1h</span></div><div class="mk-convo__snip"><i class="mk-ic mk-ic--globe"></i>Website chat · price list</div></div></div>
    </div>
    <div class="mk-thread">
      <div class="mk-thread__head"><span class="mk-avatar mk-avatar--green">MA</span><div class="mk-thread__who"><b>Mona Adel</b><span class="mk-stage mk-stage--violet mk-stage--sm">Booking meeting</span></div><span class="mk-chip mk-chip--green"><i class="mk-dot"></i>AI on</span></div>
      <div class="mk-thread__body">
        <div class="mk-msg mk-msg--in">Is Thursday after 6 possible?</div>
        <div class="mk-msg mk-msg--out"><span class="mk-msg__by"><i class="mk-ic mk-ic--sparkle"></i>Aaref · AI</span>Yes! Thursday 6:30 PM is free. Shall I book it for you?</div>
        <div class="mk-reply-meta"><span class="mk-chip"><i class="mk-ic mk-ic--dollar"></i><bdi>$0.01</bdi></span><span class="mk-chip"><i class="mk-ic mk-ic--clock"></i>4s</span><span class="mk-chip mk-chip--green"><i class="mk-ic mk-ic--target"></i>Confidence 92%</span></div>
        <div class="mk-note"><b><i class="mk-ic mk-ic--note"></i>Private note · Dina</b>Returning patient, offer the family plan.</div>
      </div>
    </div>
  </div>
</div>
```

**Arabic (RTL)**

```html
<div class="mk mk-inbox" dir="rtl" lang="ar" role="img" aria-label="الـ inbox مع ردّ الموظف الذكي وتكلفته">
  <div class="mk-inbox__grid">
    <div class="mk-inbox__list">
      <div class="mk-inbox__search"><i class="mk-ic mk-ic--search"></i>بحث في المحادثات</div>
      <div class="mk-convo is-active"><span class="mk-avatar mk-avatar--sm mk-avatar--green">م</span><div class="mk-convo__body"><div class="mk-convo__row"><b>منى عادل</b><span class="mk-convo__time">الآن</span></div><div class="mk-convo__snip"><i class="mk-ic mk-ic--whatsapp"></i>الخميس بعد 6 يناسبني.</div></div></div>
      <div class="mk-convo"><span class="mk-avatar mk-avatar--sm mk-avatar--pink">ل</span><div class="mk-convo__body"><div class="mk-convo__row"><b>ليلى مصطفى</b><span class="mk-convo__time">منذ 4 د</span></div><div class="mk-convo__snip"><i class="mk-ic mk-ic--insta"></i>في مكان أركن فيه؟</div></div></div>
      <div class="mk-convo"><span class="mk-avatar mk-avatar--sm mk-avatar--blue">ي</span><div class="mk-convo__body"><div class="mk-convo__row"><b>يوسف علي</b><span class="mk-convo__time">منذ ساعة</span></div><div class="mk-convo__snip"><i class="mk-ic mk-ic--globe"></i>دردشة الموقع · قائمة الأسعار</div></div></div>
    </div>
    <div class="mk-thread">
      <div class="mk-thread__head"><span class="mk-avatar mk-avatar--green">م</span><div class="mk-thread__who"><b>منى عادل</b><span class="mk-stage mk-stage--violet mk-stage--sm">حجز موعد</span></div><span class="mk-chip mk-chip--green"><i class="mk-dot"></i>الموظف الذكي شغّال</span></div>
      <div class="mk-thread__body">
        <div class="mk-msg mk-msg--in">ينفع الخميس بعد 6؟</div>
        <div class="mk-msg mk-msg--out"><span class="mk-msg__by"><i class="mk-ic mk-ic--sparkle"></i>عارف · موظف ذكي</span>أيوه! الخميس الساعة <bdi>6:30</bdi> فاضي. أحجزهولك؟</div>
        <div class="mk-reply-meta"><span class="mk-chip"><i class="mk-ic mk-ic--dollar"></i>التكلفة <bdi>$0.01</bdi></span><span class="mk-chip"><i class="mk-ic mk-ic--clock"></i>زمن الرد 4 ث</span><span class="mk-chip mk-chip--green"><i class="mk-ic mk-ic--target"></i>الثقة <bdi>92%</bdi></span></div>
        <div class="mk-note"><b><i class="mk-ic mk-ic--note"></i>ملاحظة خاصة · دينا</b>مريضة سابقة، اعرض عليها باقة العائلة.</div>
      </div>
    </div>
  </div>
</div>
```

## Follow-up timeline + statuses `#followups`

One opportunity's follow-up sequence in a stage (Sent / Scheduled), what happens after the sequence, and the follow-up status summary (Sent / Scheduled / Overdue). Drop .mk-health if you only need the timeline.

**English**

```html
<div class="mk mk-card" role="img" aria-label="Follow-up sequence for a silent lead">
  <div class="mk-card__head"><div class="mk-card__title"><i class="mk-ic mk-ic--repeat"></i>Follow-ups · Interested</div><span class="mk-chip mk-chip--green"><i class="mk-dot"></i>Active</span></div>
  <ol class="mk-timeline">
    <li class="mk-step is-sent"><div class="mk-step__head"><b>Follow-up 1</b><span class="mk-step__wait">after 3 hours</span><span class="mk-status mk-status--sent">Sent</span></div><p class="mk-step__msg">Hi Karim, here is the price list you asked for. Any questions?</p></li>
    <li class="mk-step is-scheduled"><div class="mk-step__head"><b>Follow-up 2</b><span class="mk-step__wait">after 24 hours</span><span class="mk-status mk-status--scheduled">Scheduled</span></div><p class="mk-step__msg">We have two free slots on Thursday. Shall I hold one for you?</p></li>
    <li class="mk-step mk-step--end"><div class="mk-step__head"><i class="mk-ic mk-ic--arrow"></i>No reply after the sequence: move to <span class="mk-stage mk-stage--red mk-stage--sm">Lost</span></div></li>
  </ol>
  <div class="mk-health">
    <div class="mk-health__title">Follow-up status · 7 days</div>
    <div class="mk-health__bar"><i style="--w:72%"></i><i style="--w:24%"></i><i style="--w:4%"></i></div>
    <div class="mk-health__legend"><span>Sent <b>128</b></span><span>Scheduled <b>42</b></span><span>Overdue <b>7</b></span></div>
  </div>
</div>
```

**Arabic (RTL)**

```html
<div class="mk mk-card" dir="rtl" lang="ar" role="img" aria-label="تسلسل المتابعات لعميل لم يرد">
  <div class="mk-card__head"><div class="mk-card__title"><i class="mk-ic mk-ic--repeat"></i>المتابعات · مهتم</div><span class="mk-chip mk-chip--green"><i class="mk-dot"></i>نشطة</span></div>
  <ol class="mk-timeline">
    <li class="mk-step is-sent"><div class="mk-step__head"><b>المتابعة 1</b><span class="mk-step__wait">بعد 3 ساعات</span><span class="mk-status mk-status--sent">مُرسلة</span></div><p class="mk-step__msg">أهلًا يا كريم، دي قايمة الأسعار اللي طلبتها. عندك أي سؤال؟</p></li>
    <li class="mk-step is-scheduled"><div class="mk-step__head"><b>المتابعة 2</b><span class="mk-step__wait">بعد 24 ساعة</span><span class="mk-status mk-status--scheduled">مجدولة</span></div><p class="mk-step__msg">عندنا ميعادين فاضيين يوم الخميس. أحجزلك واحد؟</p></li>
    <li class="mk-step mk-step--end"><div class="mk-step__head"><i class="mk-ic mk-ic--arrow"></i>لا رد بعد انتهاء التسلسل: النقل إلى <span class="mk-stage mk-stage--red mk-stage--sm">ضائعة</span></div></li>
  </ol>
  <div class="mk-health">
    <div class="mk-health__title">حالة المتابعات · 7 أيام</div>
    <div class="mk-health__bar"><i style="--w:72%"></i><i style="--w:24%"></i><i style="--w:4%"></i></div>
    <div class="mk-health__legend"><span>مُرسلة <b>128</b></span><span>مجدولة <b>42</b></span><span>متأخرة <b>7</b></span></div>
  </div>
</div>
```

## KPI cards + mini funnel `#kpis`

Dashboard tiles (the hero tile spans the full row; the rest flow 2 per row on phones) and the pipeline funnel. Bars take their length from --w. Fictional numbers: never present them as results.

**English**

```html
<div class="mk mk-kpis" role="img" aria-label="Dashboard: opportunities and AI cost">
  <div class="mk-kpi mk-kpi--hero"><span class="mk-kpi__label">Active opportunities</span><span class="mk-kpi__value">412</span><span class="mk-kpi__sub">1,284 opportunities in total</span><span class="mk-kpi__badge">32.1% of total</span></div>
  <div class="mk-kpi"><span class="mk-kpi__ic mk-kpi__ic--green"><i class="mk-ic mk-ic--trophy"></i></span><span class="mk-kpi__label">Opportunities won</span><span class="mk-kpi__value">96</span><span class="mk-kpi__sub">7.5% win rate</span></div>
  <div class="mk-kpi"><span class="mk-kpi__ic mk-kpi__ic--red"><i class="mk-ic mk-ic--xcircle"></i></span><span class="mk-kpi__label">Opportunities lost</span><span class="mk-kpi__value">318</span><span class="mk-kpi__sub">of 1,284</span></div>
  <div class="mk-kpi"><span class="mk-kpi__ic"><i class="mk-ic mk-ic--dollar"></i></span><span class="mk-kpi__label">Total AI cost</span><span class="mk-kpi__value"><bdi>$41.20</bdi></span><span class="mk-kpi__sub"><bdi>$0.004</bdi> per msg</span></div>
  <div class="mk-kpi"><span class="mk-kpi__ic mk-kpi__ic--amber"><i class="mk-ic mk-ic--target"></i></span><span class="mk-kpi__label">Cost per conversion</span><span class="mk-kpi__value"><bdi>$0.43</bdi></span><span class="mk-kpi__sub">96 won</span></div>
</div>
<div class="mk mk-card" role="img" aria-label="Pipeline funnel">
  <div class="mk-card__head"><div class="mk-card__title">Pipeline funnel</div><span class="mk-chip">30d</span></div>
  <div class="mk-funnel__rows">
    <div class="mk-funnel__row"><div class="mk-funnel__top"><span>New lead</span><b>1,284</b></div><div class="mk-funnel__bar"><i style="--w:100%"></i></div></div>
    <div class="mk-funnel__row"><div class="mk-funnel__top"><span>Interested</span><b>702</b></div><div class="mk-funnel__bar"><i style="--w:55%"></i></div><div class="mk-funnel__drop"><span>55%</span><span>Drop off 45%</span></div></div>
    <div class="mk-funnel__row"><div class="mk-funnel__top"><span>Booking meeting</span><b>231</b></div><div class="mk-funnel__bar"><i style="--w:18%"></i></div><div class="mk-funnel__drop"><span>18%</span><span>Drop off 67%</span></div></div>
    <div class="mk-funnel__row"><div class="mk-funnel__top"><span>Won</span><b>96</b></div><div class="mk-funnel__bar"><i style="--w:7.5%"></i></div><div class="mk-funnel__drop"><span>7.5%</span><span>Drop off 58%</span></div></div>
  </div>
</div>
```

**Arabic (RTL)**

```html
<div class="mk mk-kpis" dir="rtl" lang="ar" role="img" aria-label="الـ dashboard: الفرص وتكلفة الذكاء الاصطناعي">
  <div class="mk-kpi mk-kpi--hero"><span class="mk-kpi__label">الفرص النشطة</span><span class="mk-kpi__value">412</span><span class="mk-kpi__sub">إجمالي الفرص <bdi>1,284</bdi></span><span class="mk-kpi__badge"><bdi>32.1%</bdi> من الإجمالي</span></div>
  <div class="mk-kpi"><span class="mk-kpi__ic mk-kpi__ic--green"><i class="mk-ic mk-ic--trophy"></i></span><span class="mk-kpi__label">الفرص المكتسبة</span><span class="mk-kpi__value">96</span><span class="mk-kpi__sub">نسبة الفوز <bdi>7.5%</bdi></span></div>
  <div class="mk-kpi"><span class="mk-kpi__ic mk-kpi__ic--red"><i class="mk-ic mk-ic--xcircle"></i></span><span class="mk-kpi__label">الفرص الضائعة</span><span class="mk-kpi__value">318</span><span class="mk-kpi__sub">من <bdi>1,284</bdi></span></div>
  <div class="mk-kpi"><span class="mk-kpi__ic"><i class="mk-ic mk-ic--dollar"></i></span><span class="mk-kpi__label">تكلفة الذكاء الاصطناعي</span><span class="mk-kpi__value"><bdi>$41.20</bdi></span><span class="mk-kpi__sub"><bdi>$0.004</bdi> لكل رسالة</span></div>
  <div class="mk-kpi"><span class="mk-kpi__ic mk-kpi__ic--amber"><i class="mk-ic mk-ic--target"></i></span><span class="mk-kpi__label">تكلفة التحويل</span><span class="mk-kpi__value"><bdi>$0.43</bdi></span><span class="mk-kpi__sub">96 فرصة مكتسبة</span></div>
</div>
<div class="mk mk-card" dir="rtl" lang="ar" role="img" aria-label="مسار التحويل">
  <div class="mk-card__head"><div class="mk-card__title">مسار التحويل</div><span class="mk-chip">30 يومًا</span></div>
  <div class="mk-funnel__rows">
    <div class="mk-funnel__row"><div class="mk-funnel__top"><span>عميل محتمل جديد</span><b>1,284</b></div><div class="mk-funnel__bar"><i style="--w:100%"></i></div></div>
    <div class="mk-funnel__row"><div class="mk-funnel__top"><span>مهتم</span><b>702</b></div><div class="mk-funnel__bar"><i style="--w:55%"></i></div><div class="mk-funnel__drop"><span><bdi>55%</bdi></span><span>تسرّب <bdi>45%</bdi></span></div></div>
    <div class="mk-funnel__row"><div class="mk-funnel__top"><span>حجز موعد</span><b>231</b></div><div class="mk-funnel__bar"><i style="--w:18%"></i></div><div class="mk-funnel__drop"><span><bdi>18%</bdi></span><span>تسرّب <bdi>67%</bdi></span></div></div>
    <div class="mk-funnel__row"><div class="mk-funnel__top"><span>مكتسبة</span><b>96</b></div><div class="mk-funnel__bar"><i style="--w:7.5%"></i></div><div class="mk-funnel__drop"><span><bdi>7.5%</bdi></span><span>تسرّب <bdi>58%</bdi></span></div></div>
  </div>
</div>
```

## Knowledge table `#knowledge`

A knowledge table the AI answers from, with the answer it produced. Columns marked .mk-hide-sm hide under 420px of the card width, so it never scrolls sideways. In value copy say "your prices and policies", not "knowledge table".

**English**

```html
<div class="mk mk-card mk-kb" role="img" aria-label="Price list the AI answers from">
  <div class="mk-card__head"><div class="mk-card__title"><i class="mk-ic mk-ic--book"></i>Price list</div><span class="mk-chip mk-chip--indigo"><i class="mk-ic mk-ic--table"></i>From CSV · 24 rows</span></div>
  <table class="mk-table">
    <thead><tr><th>Service</th><th>Price</th><th class="mk-hide-sm">Duration</th><th class="mk-hide-sm">Notes</th></tr></thead>
    <tbody>
      <tr><td>Teeth whitening</td><td class="mk-num">EGP 3,500</td><td class="mk-hide-sm">60 min</td><td class="mk-hide-sm">Follow-up visit included</td></tr>
      <tr><td>Check-up and cleaning</td><td class="mk-num">EGP 800</td><td class="mk-hide-sm">30 min</td><td class="mk-hide-sm">Every 6 months</td></tr>
      <tr><td>Braces consultation</td><td class="mk-num">Free</td><td class="mk-hide-sm">20 min</td><td class="mk-hide-sm">Thursdays only</td></tr>
    </tbody>
  </table>
  <div class="mk-kb__ask"><i class="mk-ic mk-ic--sparkle"></i><span>Answered from this table: “Whitening is EGP 3,500 and takes about an hour.”</span></div>
</div>
```

**Arabic (RTL)**

```html
<div class="mk mk-card mk-kb" dir="rtl" lang="ar" role="img" aria-label="قائمة الأسعار اللي بيرد منها الموظف الذكي">
  <div class="mk-card__head"><div class="mk-card__title"><i class="mk-ic mk-ic--book"></i>قائمة الأسعار</div><span class="mk-chip mk-chip--indigo"><i class="mk-ic mk-ic--table"></i>جدول المعرفة · <bdi>CSV</bdi> · 24 صفًا</span></div>
  <table class="mk-table">
    <thead><tr><th>الخدمة</th><th>السعر</th><th class="mk-hide-sm">المدة</th><th class="mk-hide-sm">ملاحظات</th></tr></thead>
    <tbody>
      <tr><td>تبييض الأسنان</td><td class="mk-num"><bdi>3,500</bdi> جنيه</td><td class="mk-hide-sm">60 دقيقة</td><td class="mk-hide-sm">تشمل زيارة متابعة</td></tr>
      <tr><td>كشف وتنظيف</td><td class="mk-num"><bdi>800</bdi> جنيه</td><td class="mk-hide-sm">30 دقيقة</td><td class="mk-hide-sm">كل 6 أشهر</td></tr>
      <tr><td>استشارة تقويم</td><td class="mk-num">مجانًا</td><td class="mk-hide-sm">20 دقيقة</td><td class="mk-hide-sm">أيام الخميس فقط</td></tr>
    </tbody>
  </table>
  <div class="mk-kb__ask"><i class="mk-ic mk-ic--sparkle"></i><span>ردّ الموظف الذكي من الجدول ده: «التبييض بـ <bdi>3,500</bdi> جنيه وبياخد حوالي ساعة.»</span></div>
</div>
```

## Smart routing tiers + spend cap `#routing`

Simple / Moderate / Complex tiers (stack to one column on phones) and the per-conversation spend cap that pauses the AI and alerts the team. Use as two cards side by side or stacked. In value copy say "simple messages go to cheaper models", not "router/tier".

**English**

```html
<div class="mk mk-card" role="img" aria-label="Smart routing by message difficulty">
  <div class="mk-card__head"><div class="mk-card__title"><i class="mk-ic mk-ic--route"></i>Smart routing</div><span class="mk-chip mk-chip--green"><i class="mk-dot"></i>On</span></div>
  <div class="mk-tiers">
    <div class="mk-tier"><div class="mk-tier__head"><span class="mk-tier__name">Simple</span><span class="mk-tier__cost"><bdi>$0.004</bdi> / msg</span></div><p class="mk-tier__eg">“What time do you open?”</p><div class="mk-tier__model"><i class="mk-ic mk-ic--bolt"></i>Fast model</div><div class="mk-bar"><i style="--w:68%"></i></div><span class="mk-tier__share">68% of messages</span></div>
    <div class="mk-tier mk-tier--moderate"><div class="mk-tier__head"><span class="mk-tier__name">Moderate</span><span class="mk-tier__cost"><bdi>$0.01</bdi> / msg</span></div><p class="mk-tier__eg">“Compare your two packages for me.”</p><div class="mk-tier__model"><i class="mk-ic mk-ic--sparkle"></i>Balanced model</div><div class="mk-bar"><i style="--w:26%"></i></div><span class="mk-tier__share">26% of messages</span></div>
    <div class="mk-tier mk-tier--complex"><div class="mk-tier__head"><span class="mk-tier__name">Complex</span><span class="mk-tier__cost"><bdi>$0.02</bdi> / msg</span></div><p class="mk-tier__eg">“Plan a 3-visit treatment around my travel dates.”</p><div class="mk-tier__model"><i class="mk-ic mk-ic--target"></i>Advanced model</div><div class="mk-bar"><i style="--w:6%"></i></div><span class="mk-tier__share">6% of messages</span></div>
  </div>
</div>
<div class="mk mk-card" role="img" aria-label="Spend cap per conversation">
  <div class="mk-card__head"><div class="mk-card__title"><i class="mk-ic mk-ic--wallet"></i>Spend cap per conversation</div><span class="mk-toggle is-on"></span></div>
  <div class="mk-cap__value"><b><bdi>$0.32</bdi></b> of <bdi>$0.50</bdi> used</div>
  <div class="mk-bar mk-bar--amber"><i style="--w:64%"></i></div>
  <p class="mk-cap__rule"><i class="mk-ic mk-ic--alert"></i><span>When the cap is reached: pause the AI in this chat and alert the team.</span></p>
</div>
```

**Arabic (RTL)**

```html
<div class="mk mk-card" dir="rtl" lang="ar" role="img" aria-label="التوجيه الذكي حسب صعوبة الرسالة">
  <div class="mk-card__head"><div class="mk-card__title"><i class="mk-ic mk-ic--route"></i>التوجيه الذكي</div><span class="mk-chip mk-chip--green"><i class="mk-dot"></i>مفعّل</span></div>
  <div class="mk-tiers">
    <div class="mk-tier"><div class="mk-tier__head"><span class="mk-tier__name">بسيطة</span><span class="mk-tier__cost"><bdi>$0.004</bdi> / رسالة</span></div><p class="mk-tier__eg">«بتفتحوا الساعة كام؟»</p><div class="mk-tier__model"><i class="mk-ic mk-ic--bolt"></i>نموذج سريع</div><div class="mk-bar"><i style="--w:68%"></i></div><span class="mk-tier__share"><bdi>68%</bdi> من الرسائل</span></div>
    <div class="mk-tier mk-tier--moderate"><div class="mk-tier__head"><span class="mk-tier__name">متوسطة</span><span class="mk-tier__cost"><bdi>$0.01</bdi> / رسالة</span></div><p class="mk-tier__eg">«قارنلي بين الباقتين.»</p><div class="mk-tier__model"><i class="mk-ic mk-ic--sparkle"></i>نموذج متوازن</div><div class="mk-bar"><i style="--w:26%"></i></div><span class="mk-tier__share"><bdi>26%</bdi> من الرسائل</span></div>
    <div class="mk-tier mk-tier--complex"><div class="mk-tier__head"><span class="mk-tier__name">معقدة</span><span class="mk-tier__cost"><bdi>$0.02</bdi> / رسالة</span></div><p class="mk-tier__eg">«رتبلي علاج على 3 زيارات حوالين مواعيد سفري.»</p><div class="mk-tier__model"><i class="mk-ic mk-ic--target"></i>نموذج متقدم</div><div class="mk-bar"><i style="--w:6%"></i></div><span class="mk-tier__share"><bdi>6%</bdi> من الرسائل</span></div>
  </div>
</div>
<div class="mk mk-card" dir="rtl" lang="ar" role="img" aria-label="حد الإنفاق لكل محادثة">
  <div class="mk-card__head"><div class="mk-card__title"><i class="mk-ic mk-ic--wallet"></i>حد الإنفاق لكل محادثة</div><span class="mk-toggle is-on"></span></div>
  <div class="mk-cap__value"><b><bdi>$0.32</bdi></b> من <bdi>$0.50</bdi> مستخدم</div>
  <div class="mk-bar mk-bar--amber"><i style="--w:64%"></i></div>
  <p class="mk-cap__rule"><i class="mk-ic mk-ic--alert"></i><span>عند الوصول للحد: إيقاف الموظف الذكي مؤقتًا في المحادثة دي وتنبيه الفريق.</span></p>
</div>
```

## Dialect chips `#dialects`

The 14 Arabic dialects plus auto multi-dialect. .is-on marks the selected one. Chips wrap, so this fits any width.

**English**

```html
<div class="mk mk-card" role="img" aria-label="Choose the Arabic dialect your AI employee speaks">
  <div class="mk-card__head"><div class="mk-card__title"><i class="mk-ic mk-ic--globe"></i>Agent dialect</div></div>
  <div class="mk-chips">
    <span class="mk-chip mk-chip--opt is-on"><i class="mk-ic mk-ic--check"></i>Egyptian</span><span class="mk-chip mk-chip--opt">Saudi / Gulf</span><span class="mk-chip mk-chip--opt">Jordanian</span><span class="mk-chip mk-chip--opt">Palestinian</span><span class="mk-chip mk-chip--opt">Lebanese</span><span class="mk-chip mk-chip--opt">Syrian</span><span class="mk-chip mk-chip--opt">Iraqi</span><span class="mk-chip mk-chip--opt">Yemeni</span><span class="mk-chip mk-chip--opt">Sudanese</span><span class="mk-chip mk-chip--opt">Libyan</span><span class="mk-chip mk-chip--opt">Tunisian</span><span class="mk-chip mk-chip--opt">Algerian</span><span class="mk-chip mk-chip--opt">Moroccan</span><span class="mk-chip mk-chip--opt">Mauritanian</span><span class="mk-chip mk-chip--opt mk-chip--auto"><i class="mk-ic mk-ic--sparkle"></i>Auto multi-dialect</span>
  </div>
</div>
```

**Arabic (RTL)**

```html
<div class="mk mk-card" dir="rtl" lang="ar" role="img" aria-label="اختيار اللهجة اللي بيتكلم بيها الموظف الذكي">
  <div class="mk-card__head"><div class="mk-card__title"><i class="mk-ic mk-ic--globe"></i>لهجة الموظف الذكي</div></div>
  <div class="mk-chips">
    <span class="mk-chip mk-chip--opt is-on"><i class="mk-ic mk-ic--check"></i>مصرية</span><span class="mk-chip mk-chip--opt">سعودية / خليجية</span><span class="mk-chip mk-chip--opt">أردنية</span><span class="mk-chip mk-chip--opt">فلسطينية</span><span class="mk-chip mk-chip--opt">لبنانية</span><span class="mk-chip mk-chip--opt">سورية</span><span class="mk-chip mk-chip--opt">عراقية</span><span class="mk-chip mk-chip--opt">يمنية</span><span class="mk-chip mk-chip--opt">سودانية</span><span class="mk-chip mk-chip--opt">ليبية</span><span class="mk-chip mk-chip--opt">تونسية</span><span class="mk-chip mk-chip--opt">جزائرية</span><span class="mk-chip mk-chip--opt">مغربية</span><span class="mk-chip mk-chip--opt">موريتانية</span><span class="mk-chip mk-chip--opt mk-chip--auto"><i class="mk-ic mk-ic--sparkle"></i>متعددة اللهجات تلقائيًا</span>
  </div>
</div>
```

## ROZ quality-review card `#roz-review`

ROZ reviews the human team's WhatsApp chats on company lines and flags slow replies, missed opportunities and stalled deals. Names are fictional team members.

**English**

```html
<div class="mk mk-card" role="img" aria-label="ROZ flags three conversations from your team">
  <div class="mk-review__head"><img src="/media/img/roz.svg" alt="" width="44" height="48"><div class="mk-review__who"><b>ROZ · Quality review</b><span>WhatsApp · Sales line · Today</span></div><span class="mk-chip mk-chip--pink">3 flags</span></div>
  <ul class="mk-flags">
    <li class="mk-flag mk-flag--slow"><span class="mk-flag__ic"><i class="mk-ic mk-ic--clock"></i></span><div class="mk-flag__body"><b>Slow reply<span>Ahmed · 10:40 AM</span></b><p>Customer waited 2 hours for a price.</p></div></li>
    <li class="mk-flag mk-flag--missed"><span class="mk-flag__ic"><i class="mk-ic mk-ic--flag"></i></span><div class="mk-flag__body"><b>Missed opportunity<span>Salma · 1:15 PM</span></b><p>Customer asked to book. Nobody offered a time.</p></div></li>
    <li class="mk-flag mk-flag--stalled"><span class="mk-flag__ic"><i class="mk-ic mk-ic--pause"></i></span><div class="mk-flag__body"><b>Stalled deal<span>Ahmed · 4 days</span></b><p>Quote sent, no follow-up since.</p></div></li>
  </ul>
  <div class="mk-review__foot"><i class="mk-ic mk-ic--mic"></i>6 voice notes transcribed today</div>
</div>
```

**Arabic (RTL)**

```html
<div class="mk mk-card" dir="rtl" lang="ar" role="img" aria-label="روز ترصد ثلاث محادثات من فريقك">
  <div class="mk-review__head"><img src="/media/img/roz.svg" alt="" width="44" height="48"><div class="mk-review__who"><b>روز · مراجعة الجودة</b><span><bdi>WhatsApp</bdi> · خط المبيعات · اليوم</span></div><span class="mk-chip mk-chip--pink">3 ملاحظات</span></div>
  <ul class="mk-flags">
    <li class="mk-flag mk-flag--slow"><span class="mk-flag__ic"><i class="mk-ic mk-ic--clock"></i></span><div class="mk-flag__body"><b>رد متأخر<span>أحمد · <bdi>10:40</bdi> ص</span></b><p>انتظر العميل ساعتين ليعرف السعر.</p></div></li>
    <li class="mk-flag mk-flag--missed"><span class="mk-flag__ic"><i class="mk-ic mk-ic--flag"></i></span><div class="mk-flag__body"><b>فرصة ضائعة<span>سلمى · <bdi>1:15</bdi> م</span></b><p>طلب العميل الحجز ولم يقترح عليه أحد موعدًا.</p></div></li>
    <li class="mk-flag mk-flag--stalled"><span class="mk-flag__ic"><i class="mk-ic mk-ic--pause"></i></span><div class="mk-flag__body"><b>فرصة متوقفة<span>أحمد · 4 أيام</span></b><p>أُرسل عرض السعر ولا توجد متابعة منذ ذلك الحين.</p></div></li>
  </ul>
  <div class="mk-review__foot"><i class="mk-ic mk-ic--mic"></i>تم تفريغ 6 رسائل صوتية اليوم</div>
</div>
```

## Employee card `#employee`

Avatar, name, role and three outcome bullets. Hue modifiers: .mk-emp--aaref (amber), --adnan (blue), --roz (pink), --genu (indigo). The bullets are marketing copy: AR uses the Egyptian register, rewrite them for your page. Lay several out in your own grid (one column under 720px).

**English**

```html
<div class="mk mk-emp mk-emp--aaref">
  <img class="mk-emp__img" src="/media/img/aaref.svg" alt="" width="80" height="87">
  <div class="mk-emp__name">Aaref</div>
  <span class="mk-emp__role">Sales</span>
  <ul class="mk-emp__list">
    <li><i class="mk-ic mk-ic--check"></i>Answers every inquiry, day and night</li>
    <li><i class="mk-ic mk-ic--check"></i>Qualifies leads and follows up with the quiet ones</li>
    <li><i class="mk-ic mk-ic--check"></i>Helps book meetings straight into your calendar</li>
  </ul>
</div>
```

**Arabic (RTL)**

```html
<div class="mk mk-emp mk-emp--aaref" dir="rtl" lang="ar">
  <img class="mk-emp__img" src="/media/img/aaref.svg" alt="" width="80" height="87">
  <div class="mk-emp__name">عارف</div>
  <span class="mk-emp__role">المبيعات</span>
  <ul class="mk-emp__list">
    <li><i class="mk-ic mk-ic--check"></i>بيرد على كل استفسار، بالليل وبالنهار</li>
    <li><i class="mk-ic mk-ic--check"></i>بيفرز العملاء المهتمين وبيتابع اللي سكت</li>
    <li><i class="mk-ic mk-ic--check"></i>بيساعد يحجز المواعيد على الـ calendar بتاعك</li>
  </ul>
</div>
```

## Business-brief wizard question `#wizard`

The onboarding brief: six quick questions, typed or spoken. The caret blinks (off under reduced motion).

**English**

```html
<div class="mk mk-wizard" role="img" aria-label="Business brief, question 1 of 6">
  <span class="mk-wizard__eyebrow"><i class="mk-ic mk-ic--sparkle"></i>Business brief</span>
  <div class="mk-wizard__steps"><i class="is-on"></i><i></i><i></i><i></i><i></i><i></i></div>
  <div class="mk-q">
    <div class="mk-q__top"><span class="mk-chip mk-chip--indigo">Question 1 of 6</span><span class="mk-q__count">0/6 answered</span></div>
    <div class="mk-q__title">What is your company or brand name?</div>
    <p class="mk-q__hint">Write the exact name customers know you by.</p>
    <div class="mk-input">Bright Smile Dental<span class="mk-caret"></span></div>
    <div class="mk-q__mic"><span class="mk-q__micbtn"><i class="mk-ic mk-ic--mic"></i></span>Type your answer, or tap the mic to speak.</div>
    <div class="mk-q__foot"><span class="mk-btn mk-btn--ghost"><i class="mk-ic mk-ic--back"></i>Back</span><span class="mk-btn mk-btn--primary">Next question<i class="mk-ic mk-ic--arrow"></i></span></div>
  </div>
</div>
```

**Arabic (RTL)**

```html
<div class="mk mk-wizard" dir="rtl" lang="ar" role="img" aria-label="ملخص النشاط التجاري، السؤال 1 من 6">
  <span class="mk-wizard__eyebrow"><i class="mk-ic mk-ic--sparkle"></i>ملخص النشاط التجاري</span>
  <div class="mk-wizard__steps"><i class="is-on"></i><i></i><i></i><i></i><i></i><i></i></div>
  <div class="mk-q">
    <div class="mk-q__top"><span class="mk-chip mk-chip--indigo">السؤال 1 من 6</span><span class="mk-q__count">تمت الإجابة عن 0 من 6</span></div>
    <div class="mk-q__title">ما اسم شركتك أو علامتك التجارية؟</div>
    <p class="mk-q__hint">اكتب الاسم الذي يعرفك به عملاؤك.</p>
    <div class="mk-input">عيادة برايت سمايل للأسنان<span class="mk-caret"></span></div>
    <div class="mk-q__mic"><span class="mk-q__micbtn"><i class="mk-ic mk-ic--mic"></i></span>اكتب إجابتك، أو اضغط على الميكروفون للتحدث.</div>
    <div class="mk-q__foot"><span class="mk-btn mk-btn--ghost"><i class="mk-ic mk-ic--back"></i>رجوع</span><span class="mk-btn mk-btn--primary">السؤال التالي<i class="mk-ic mk-ic--arrow"></i></span></div>
  </div>
</div>
```
