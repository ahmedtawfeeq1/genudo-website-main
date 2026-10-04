// Shared product-UI mockup kit: the copy-paste snippets (EN + AR).
// Single source for /kit-preview AND docs/website/MOCKUP-KIT.md (regenerate the doc
// from this file; see the note at the top of that doc). Styles: src/styles/mockups.css.
// Rules: fictional data only, AR product labels from the genudo-arabic-localization
// glossary (MSA), Western digits, <bdi> around mixed Arabic + Latin/number runs.
// No backticks and no "${" inside the markup.

const snippets = [
  {
    id: 'app-window',
    title: 'App window + sidebar',
    note:
      'Frame for any app screen. Put another component (board, KPIs, card) inside .mk-main. Sidebar becomes an icon rail under 720px of its own width and disappears under 480px. No wrapper needed.',
    en: `<div class="mk mk-app" role="img" aria-label="GenuDo app: a sales pipeline">
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
</div>`,
    ar: `<div class="mk mk-app" dir="rtl" lang="ar" role="img" aria-label="تطبيق GenuDo: مسار مبيعات">
  <div class="mk-app__bar"><span class="mk-app__dots"><i></i><i></i><i></i></span><span class="mk-app__url">app.genudo.ai</span></div>
  <div class="mk-app__body">
    <div class="mk-side">
      <div class="mk-side__logo"><img src="/media/img/genu-avatar.svg" alt="" width="26" height="26"><span>GenuDo</span></div>
      <div class="mk-side__item"><i class="mk-ic mk-ic--grid"></i><span>لوحة التحكم</span></div>
      <div class="mk-side__label">البناء</div>
      <div class="mk-side__item is-active"><i class="mk-ic mk-ic--pipeline"></i><span>المسارات</span></div>
      <div class="mk-side__item"><i class="mk-ic mk-ic--book"></i><span>قاعدة المعرفة</span></div>
      <div class="mk-side__label">التفاعل</div>
      <div class="mk-side__item"><i class="mk-ic mk-ic--inbox"></i><span>صندوق الوارد</span></div>
      <div class="mk-side__item"><i class="mk-ic mk-ic--users"></i><span>جهات الاتصال</span></div>
    </div>
    <div class="mk-main">
      <div class="mk-main__head">
        <div><div class="mk-main__title">عيادة برايت سمايل · مبيعات <bdi>WhatsApp</bdi></div><div class="mk-main__sub">ينقل الوكيل كل فرصة إلى المرحلة التالية.</div></div>
        <div class="mk-main__actions"><span class="mk-chip mk-chip--green"><i class="mk-dot mk-dot--live"></i>منشور</span><span class="mk-btn mk-btn--soft"><i class="mk-ic mk-ic--sparkle"></i>اختبار الوكيل</span></div>
      </div>
      <div class="mk-kpis">
        <div class="mk-kpi"><span class="mk-kpi__label">الفرص النشطة</span><span class="mk-kpi__value">412</span></div>
        <div class="mk-kpi"><span class="mk-kpi__label">الفرص المكتسبة</span><span class="mk-kpi__value">96</span></div>
      </div>
    </div>
  </div>
</div>`,
  },
  {
    id: 'board',
    title: 'Pipeline board',
    note:
      'Stage columns with opportunity cards. The ONLY mockup that scrolls sideways (inside itself; the page never does). Works alone or inside .mk-main of the app window. .mk-opp--new pops in once. Stage names are the business\'s own data.',
    en: `<div class="mk mk-board" role="img" aria-label="Pipeline board with four stages">
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
</div>`,
    ar: `<div class="mk mk-board" dir="rtl" lang="ar" role="img" aria-label="لوحة المسار بأربع مراحل">
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
        <div class="mk-opp__tags"><span class="mk-chip mk-chip--green"><i class="mk-ic mk-ic--check"></i>تم حجز الموعد</span></div>
      </div>
    </div>
  </div>
</div>`,
  },
  {
    id: 'phone',
    title: 'WhatsApp phone: AI is handling the chat',
    note:
      'Phone frame (max 340px, centred) with the takeover banner, customer and AI bubbles, a voice note with its transcript, a meeting confirmation and a typing indicator. Drop any bubble you do not need. No wrapper needed.',
    en: `<div class="mk mk-phone" role="img" aria-label="WhatsApp chat answered by the AI employee">
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
</div>`,
    ar: `<div class="mk mk-phone" dir="rtl" lang="ar" role="img" aria-label="محادثة WhatsApp يرد عليها الوكيل">
  <div class="mk-phone__screen">
    <div class="mk-phone__status"><span>9:41</span></div>
    <div class="mk-phone__head"><i class="mk-ic mk-ic--back"></i><span class="mk-avatar mk-avatar--green">م</span><div class="mk-phone__who"><b>منى عادل</b><span><i class="mk-ic mk-ic--whatsapp"></i><bdi>WhatsApp · +20 100 000 0000</bdi></span></div></div>
    <div class="mk-takeover"><span class="mk-takeover__state"><i class="mk-ic mk-ic--sparkle"></i>الوكيل يتولّى هذه المحادثة</span><span class="mk-takeover__btn"><i class="mk-ic mk-ic--pause"></i>تدخّل بشري</span></div>
    <div class="mk-chat">
      <span class="mk-chat__day">اليوم</span>
      <div class="mk-msg mk-msg--in">أهلًا، التبييض بكام؟<span class="mk-msg__meta"><bdi>2:14</bdi> ص</span></div>
      <div class="mk-msg mk-msg--out"><span class="mk-msg__by"><i class="mk-ic mk-ic--sparkle"></i>عارف · الوكيل</span>أهلًا يا منى! التبييض بـ <bdi>3,500</bdi> جنيه وبياخد حوالي ساعة. تحبي نحجزلك ميعاد الأسبوع ده؟<span class="mk-msg__meta"><bdi>2:14</bdi> ص <i class="mk-ic mk-ic--checks"></i></span></div>
      <div class="mk-msg mk-msg--in mk-voice">
        <div class="mk-voice__row"><span class="mk-voice__play"><i class="mk-ic mk-ic--play"></i></span><span class="mk-voice__wave"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></span><span class="mk-voice__len">0:09</span></div>
        <div class="mk-voice__text"><b><i class="mk-ic mk-ic--mic"></i>تم تفريغ الرسالة الصوتية</b>أيوه ياريت، يوم الخميس بعد الساعة 6 لو ينفع.</div>
        <span class="mk-msg__meta"><bdi>2:15</bdi> ص</span>
      </div>
      <div class="mk-msg mk-msg--out"><span class="mk-msg__by"><i class="mk-ic mk-ic--sparkle"></i>عارف · الوكيل</span>تمام! حجزتلك يوم الخميس الساعة <bdi>6:30</bdi> مساءً.<span class="mk-msg__meta"><bdi>2:15</bdi> ص <i class="mk-ic mk-ic--checks"></i></span></div>
      <div class="mk-meeting">
        <div class="mk-meeting__top"><span class="mk-meeting__ic"><i class="mk-ic mk-ic--calendar"></i></span><div><div class="mk-meeting__title">تم تأكيد الموعد</div><div class="mk-meeting__when">الخميس 14 يناير · <bdi>6:30</bdi> م</div></div></div>
        <div class="mk-meeting__rows"><span><i class="mk-ic mk-ic--check"></i>أُضيف إلى <bdi>Google Calendar</bdi></span><span><i class="mk-ic mk-ic--check"></i>أُرسل رابط الاجتماع عبر <bdi>WhatsApp</bdi></span></div>
      </div>
      <div class="mk-typing mk-typing--in"><i></i><i></i><i></i></div>
    </div>
    <div class="mk-phone__compose">الوكيل يتولّى هذه المحادثة. اختر «تدخّل بشري» للرد بنفسك.</div>
  </div>
</div>`,
  },
  {
    id: 'phone-human',
    title: 'WhatsApp phone: you are handling the chat',
    note:
      'The other takeover state: a person has taken over, the AI is paused for this chat and one tap hands it back. Reuse the phone frame from above; swap the banner and the compose bar.',
    en: `<div class="mk mk-phone" role="img" aria-label="A team member has taken over the chat">
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
</div>`,
    ar: `<div class="mk mk-phone" dir="rtl" lang="ar" role="img" aria-label="أحد أعضاء الفريق تولّى المحادثة">
  <div class="mk-phone__screen">
    <div class="mk-phone__status"><span>9:41</span></div>
    <div class="mk-phone__head"><i class="mk-ic mk-ic--back"></i><span class="mk-avatar mk-avatar--amber">ك</span><div class="mk-phone__who"><b>كريم سعيد</b><span><i class="mk-ic mk-ic--whatsapp"></i><bdi>WhatsApp · +20 100 000 0000</bdi></span></div></div>
    <div class="mk-takeover mk-takeover--human"><span class="mk-takeover__state"><i class="mk-ic mk-ic--user"></i>أنت تتولّى هذه المحادثة</span><span class="mk-takeover__btn"><i class="mk-ic mk-ic--sparkle"></i>إعادة إلى الوكيل</span></div>
    <div class="mk-chat">
      <div class="mk-msg mk-msg--in">ينفع آخد خصم للعيلة كلها؟<span class="mk-msg__meta"><bdi>11:02</bdi> ص</span></div>
      <div class="mk-msg mk-msg--out">أكيد يا كريم! هجهزلك عرض للعيلة النهارده.<span class="mk-msg__meta"><bdi>11:04</bdi> ص <i class="mk-ic mk-ic--checks"></i></span></div>
    </div>
    <div class="mk-phone__compose mk-phone__compose--input"><span>اكتب رسالة…</span><span class="mk-phone__send"><i class="mk-ic mk-ic--send"></i></span></div>
  </div>
</div>`,
  },
  {
    id: 'inbox',
    title: 'Inbox thread with per-reply chips',
    note:
      'Unified inbox: conversation list + thread. Every AI reply carries chips for cost, response time and confidence; private notes are visible to your team only. The list hides under 600px of its own width. Numbers are illustrative: never restate them as claims in page copy.',
    en: `<div class="mk mk-inbox" role="img" aria-label="Unified inbox with an AI reply and its cost">
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
</div>`,
    ar: `<div class="mk mk-inbox" dir="rtl" lang="ar" role="img" aria-label="صندوق الوارد مع رد الوكيل وتكلفته">
  <div class="mk-inbox__grid">
    <div class="mk-inbox__list">
      <div class="mk-inbox__search"><i class="mk-ic mk-ic--search"></i>بحث في المحادثات</div>
      <div class="mk-convo is-active"><span class="mk-avatar mk-avatar--sm mk-avatar--green">م</span><div class="mk-convo__body"><div class="mk-convo__row"><b>منى عادل</b><span class="mk-convo__time">الآن</span></div><div class="mk-convo__snip"><i class="mk-ic mk-ic--whatsapp"></i>الخميس بعد 6 يناسبني.</div></div></div>
      <div class="mk-convo"><span class="mk-avatar mk-avatar--sm mk-avatar--pink">ل</span><div class="mk-convo__body"><div class="mk-convo__row"><b>ليلى مصطفى</b><span class="mk-convo__time">منذ 4 د</span></div><div class="mk-convo__snip"><i class="mk-ic mk-ic--insta"></i>في مكان أركن فيه؟</div></div></div>
      <div class="mk-convo"><span class="mk-avatar mk-avatar--sm mk-avatar--blue">ي</span><div class="mk-convo__body"><div class="mk-convo__row"><b>يوسف علي</b><span class="mk-convo__time">منذ ساعة</span></div><div class="mk-convo__snip"><i class="mk-ic mk-ic--globe"></i>دردشة الموقع · قائمة الأسعار</div></div></div>
    </div>
    <div class="mk-thread">
      <div class="mk-thread__head"><span class="mk-avatar mk-avatar--green">م</span><div class="mk-thread__who"><b>منى عادل</b><span class="mk-stage mk-stage--violet mk-stage--sm">حجز موعد</span></div><span class="mk-chip mk-chip--green"><i class="mk-dot"></i>الوكيل نشط</span></div>
      <div class="mk-thread__body">
        <div class="mk-msg mk-msg--in">ينفع الخميس بعد 6؟</div>
        <div class="mk-msg mk-msg--out"><span class="mk-msg__by"><i class="mk-ic mk-ic--sparkle"></i>عارف · الوكيل</span>أيوه! الخميس الساعة <bdi>6:30</bdi> فاضي. أحجزهولك؟</div>
        <div class="mk-reply-meta"><span class="mk-chip"><i class="mk-ic mk-ic--dollar"></i>التكلفة <bdi>$0.01</bdi></span><span class="mk-chip"><i class="mk-ic mk-ic--clock"></i>زمن الرد 4 ث</span><span class="mk-chip mk-chip--green"><i class="mk-ic mk-ic--target"></i>الثقة <bdi>92%</bdi></span></div>
        <div class="mk-note"><b><i class="mk-ic mk-ic--note"></i>ملاحظة خاصة · دينا</b>مريضة سابقة، اعرض عليها باقة العائلة.</div>
      </div>
    </div>
  </div>
</div>`,
  },
  {
    id: 'followups',
    title: 'Follow-up timeline + statuses',
    note:
      'One opportunity\'s follow-up sequence in a stage (Sent / Scheduled), what happens after the sequence, and the follow-up status summary (Sent / Scheduled / Overdue). Drop .mk-health if you only need the timeline.',
    en: `<div class="mk mk-card" role="img" aria-label="Follow-up sequence for a silent lead">
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
</div>`,
    ar: `<div class="mk mk-card" dir="rtl" lang="ar" role="img" aria-label="تسلسل المتابعات لعميل لم يرد">
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
</div>`,
  },
  {
    id: 'kpis',
    title: 'KPI cards + mini funnel',
    note:
      'Dashboard tiles (the hero tile spans the full row; the rest flow 2 per row on phones) and the pipeline funnel. Bars take their length from --w. Fictional numbers: never present them as results.',
    en: `<div class="mk mk-kpis" role="img" aria-label="Dashboard: opportunities and AI cost">
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
</div>`,
    ar: `<div class="mk mk-kpis" dir="rtl" lang="ar" role="img" aria-label="لوحة التحكم: الفرص وتكلفة الذكاء الاصطناعي">
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
</div>`,
  },
  {
    id: 'knowledge',
    title: 'Knowledge table',
    note:
      'A knowledge table the AI answers from, with the answer it produced. Columns marked .mk-hide-sm hide under 420px of the card width, so it never scrolls sideways. In value copy say "your prices and policies", not "knowledge table".',
    en: `<div class="mk mk-card mk-kb" role="img" aria-label="Price list the AI answers from">
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
</div>`,
    ar: `<div class="mk mk-card mk-kb" dir="rtl" lang="ar" role="img" aria-label="قائمة الأسعار التي يرد منها الوكيل">
  <div class="mk-card__head"><div class="mk-card__title"><i class="mk-ic mk-ic--book"></i>قائمة الأسعار</div><span class="mk-chip mk-chip--indigo"><i class="mk-ic mk-ic--table"></i>جدول المعرفة · <bdi>CSV</bdi> · 24 صفًا</span></div>
  <table class="mk-table">
    <thead><tr><th>الخدمة</th><th>السعر</th><th class="mk-hide-sm">المدة</th><th class="mk-hide-sm">ملاحظات</th></tr></thead>
    <tbody>
      <tr><td>تبييض الأسنان</td><td class="mk-num"><bdi>3,500</bdi> جنيه</td><td class="mk-hide-sm">60 دقيقة</td><td class="mk-hide-sm">تشمل زيارة متابعة</td></tr>
      <tr><td>كشف وتنظيف</td><td class="mk-num"><bdi>800</bdi> جنيه</td><td class="mk-hide-sm">30 دقيقة</td><td class="mk-hide-sm">كل 6 أشهر</td></tr>
      <tr><td>استشارة تقويم</td><td class="mk-num">مجانًا</td><td class="mk-hide-sm">20 دقيقة</td><td class="mk-hide-sm">أيام الخميس فقط</td></tr>
    </tbody>
  </table>
  <div class="mk-kb__ask"><i class="mk-ic mk-ic--sparkle"></i><span>رد الوكيل من هذا الجدول: «التبييض بـ <bdi>3,500</bdi> جنيه وبياخد حوالي ساعة.»</span></div>
</div>`,
  },
  {
    id: 'routing',
    title: 'Smart routing tiers + spend cap',
    note:
      'Simple / Moderate / Complex tiers (stack to one column on phones) and the per-conversation spend cap that pauses the AI and alerts the team. Use as two cards side by side or stacked. In value copy say "simple messages go to cheaper models", not "router/tier".',
    en: `<div class="mk mk-card" role="img" aria-label="Smart routing by message difficulty">
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
</div>`,
    ar: `<div class="mk mk-card" dir="rtl" lang="ar" role="img" aria-label="التوجيه الذكي حسب صعوبة الرسالة">
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
  <p class="mk-cap__rule"><i class="mk-ic mk-ic--alert"></i><span>عند الوصول إلى الحد: إيقاف الوكيل مؤقتًا في هذه المحادثة وتنبيه الفريق.</span></p>
</div>`,
  },
  {
    id: 'dialects',
    title: 'Dialect chips',
    note:
      'The 14 Arabic dialects plus auto multi-dialect. .is-on marks the selected one. Chips wrap, so this fits any width.',
    en: `<div class="mk mk-card" role="img" aria-label="Choose the Arabic dialect your AI employee speaks">
  <div class="mk-card__head"><div class="mk-card__title"><i class="mk-ic mk-ic--globe"></i>Agent dialect</div></div>
  <div class="mk-chips">
    <span class="mk-chip mk-chip--opt is-on"><i class="mk-ic mk-ic--check"></i>Egyptian</span><span class="mk-chip mk-chip--opt">Saudi / Gulf</span><span class="mk-chip mk-chip--opt">Jordanian</span><span class="mk-chip mk-chip--opt">Palestinian</span><span class="mk-chip mk-chip--opt">Lebanese</span><span class="mk-chip mk-chip--opt">Syrian</span><span class="mk-chip mk-chip--opt">Iraqi</span><span class="mk-chip mk-chip--opt">Yemeni</span><span class="mk-chip mk-chip--opt">Sudanese</span><span class="mk-chip mk-chip--opt">Libyan</span><span class="mk-chip mk-chip--opt">Tunisian</span><span class="mk-chip mk-chip--opt">Algerian</span><span class="mk-chip mk-chip--opt">Moroccan</span><span class="mk-chip mk-chip--opt">Mauritanian</span><span class="mk-chip mk-chip--opt mk-chip--auto"><i class="mk-ic mk-ic--sparkle"></i>Auto multi-dialect</span>
  </div>
</div>`,
    ar: `<div class="mk mk-card" dir="rtl" lang="ar" role="img" aria-label="اختيار اللهجة التي يتحدث بها الوكيل">
  <div class="mk-card__head"><div class="mk-card__title"><i class="mk-ic mk-ic--globe"></i>لهجة الوكيل</div></div>
  <div class="mk-chips">
    <span class="mk-chip mk-chip--opt is-on"><i class="mk-ic mk-ic--check"></i>مصرية</span><span class="mk-chip mk-chip--opt">سعودية / خليجية</span><span class="mk-chip mk-chip--opt">أردنية</span><span class="mk-chip mk-chip--opt">فلسطينية</span><span class="mk-chip mk-chip--opt">لبنانية</span><span class="mk-chip mk-chip--opt">سورية</span><span class="mk-chip mk-chip--opt">عراقية</span><span class="mk-chip mk-chip--opt">يمنية</span><span class="mk-chip mk-chip--opt">سودانية</span><span class="mk-chip mk-chip--opt">ليبية</span><span class="mk-chip mk-chip--opt">تونسية</span><span class="mk-chip mk-chip--opt">جزائرية</span><span class="mk-chip mk-chip--opt">مغربية</span><span class="mk-chip mk-chip--opt">موريتانية</span><span class="mk-chip mk-chip--opt mk-chip--auto"><i class="mk-ic mk-ic--sparkle"></i>متعددة اللهجات تلقائيًا</span>
  </div>
</div>`,
  },
  {
    id: 'roz-review',
    title: 'ROZ quality-review card',
    note:
      'ROZ reviews the human team\'s WhatsApp chats on company lines and flags slow replies, missed opportunities and stalled deals. Names are fictional team members.',
    en: `<div class="mk mk-card" role="img" aria-label="ROZ flags three conversations from your team">
  <div class="mk-review__head"><img src="/media/img/roz.svg" alt="" width="44" height="48"><div class="mk-review__who"><b>ROZ · Quality review</b><span>WhatsApp · Sales line · Today</span></div><span class="mk-chip mk-chip--pink">3 flags</span></div>
  <ul class="mk-flags">
    <li class="mk-flag mk-flag--slow"><span class="mk-flag__ic"><i class="mk-ic mk-ic--clock"></i></span><div class="mk-flag__body"><b>Slow reply<span>Ahmed · 10:40 AM</span></b><p>Customer waited 2 hours for a price.</p></div></li>
    <li class="mk-flag mk-flag--missed"><span class="mk-flag__ic"><i class="mk-ic mk-ic--flag"></i></span><div class="mk-flag__body"><b>Missed opportunity<span>Salma · 1:15 PM</span></b><p>Customer asked to book. Nobody offered a time.</p></div></li>
    <li class="mk-flag mk-flag--stalled"><span class="mk-flag__ic"><i class="mk-ic mk-ic--pause"></i></span><div class="mk-flag__body"><b>Stalled deal<span>Ahmed · 4 days</span></b><p>Quote sent, no follow-up since.</p></div></li>
  </ul>
  <div class="mk-review__foot"><i class="mk-ic mk-ic--mic"></i>6 voice notes transcribed today</div>
</div>`,
    ar: `<div class="mk mk-card" dir="rtl" lang="ar" role="img" aria-label="روز ترصد ثلاث محادثات من فريقك">
  <div class="mk-review__head"><img src="/media/img/roz.svg" alt="" width="44" height="48"><div class="mk-review__who"><b>روز · مراجعة الجودة</b><span><bdi>WhatsApp</bdi> · خط المبيعات · اليوم</span></div><span class="mk-chip mk-chip--pink">3 ملاحظات</span></div>
  <ul class="mk-flags">
    <li class="mk-flag mk-flag--slow"><span class="mk-flag__ic"><i class="mk-ic mk-ic--clock"></i></span><div class="mk-flag__body"><b>رد متأخر<span>أحمد · <bdi>10:40</bdi> ص</span></b><p>انتظر العميل ساعتين ليعرف السعر.</p></div></li>
    <li class="mk-flag mk-flag--missed"><span class="mk-flag__ic"><i class="mk-ic mk-ic--flag"></i></span><div class="mk-flag__body"><b>فرصة ضائعة<span>سلمى · <bdi>1:15</bdi> م</span></b><p>طلب العميل الحجز ولم يقترح عليه أحد موعدًا.</p></div></li>
    <li class="mk-flag mk-flag--stalled"><span class="mk-flag__ic"><i class="mk-ic mk-ic--pause"></i></span><div class="mk-flag__body"><b>فرصة متوقفة<span>أحمد · 4 أيام</span></b><p>أُرسل عرض السعر ولا توجد متابعة منذ ذلك الحين.</p></div></li>
  </ul>
  <div class="mk-review__foot"><i class="mk-ic mk-ic--mic"></i>تم تفريغ 6 رسائل صوتية اليوم</div>
</div>`,
  },
  {
    id: 'employee',
    title: 'Employee card',
    note:
      'Avatar, name, role and three outcome bullets. Hue modifiers: .mk-emp--aaref (amber), --adnan (blue), --roz (pink), --genu (indigo). The bullets are marketing copy: AR uses the Egyptian register, rewrite them for your page. Lay several out in your own grid (one column under 720px).',
    en: `<div class="mk mk-emp mk-emp--aaref">
  <img class="mk-emp__img" src="/media/img/aaref.svg" alt="" width="80" height="87">
  <div class="mk-emp__name">Aaref</div>
  <span class="mk-emp__role">Sales</span>
  <ul class="mk-emp__list">
    <li><i class="mk-ic mk-ic--check"></i>Answers every inquiry, day and night</li>
    <li><i class="mk-ic mk-ic--check"></i>Qualifies leads and follows up with the quiet ones</li>
    <li><i class="mk-ic mk-ic--check"></i>Helps book meetings straight into your calendar</li>
  </ul>
</div>`,
    ar: `<div class="mk mk-emp mk-emp--aaref" dir="rtl" lang="ar">
  <img class="mk-emp__img" src="/media/img/aaref.svg" alt="" width="80" height="87">
  <div class="mk-emp__name">عارف</div>
  <span class="mk-emp__role">المبيعات</span>
  <ul class="mk-emp__list">
    <li><i class="mk-ic mk-ic--check"></i>بيرد على كل استفسار، بالليل وبالنهار</li>
    <li><i class="mk-ic mk-ic--check"></i>بيفرز العملاء المهتمين وبيتابع اللي سكت</li>
    <li><i class="mk-ic mk-ic--check"></i>بيساعد يحجز المواعيد على الكالندر بتاعك</li>
  </ul>
</div>`,
  },
  {
    id: 'wizard',
    title: 'Business-brief wizard question',
    note:
      'The onboarding brief: six quick questions, typed or spoken. The caret blinks (off under reduced motion).',
    en: `<div class="mk mk-wizard" role="img" aria-label="Business brief, question 1 of 6">
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
</div>`,
    ar: `<div class="mk mk-wizard" dir="rtl" lang="ar" role="img" aria-label="ملخص النشاط التجاري، السؤال 1 من 6">
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
</div>`,
  },
];

export default snippets;
