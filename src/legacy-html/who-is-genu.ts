// /who-is-genu — value-led rewrite (EN). See docs/website/BUILD-BRIEF.md.
// Same sections and claims as who-is-genu.ar-EG.ts (the primary page).
// Narration lines live in the markup (data-lines on the hero GENU, data-say on each beat),
// so /js/who-is-genu.js narrates in whichever language the page renders.
const html = `<div class="pg-who-is-genu">

<!-- ============ HERO ============ -->
<section class="wg-hero" id="hi">
  <div class="container wg-hero-in">
    <div class="wg-hero-copy">
      <span class="eyebrow">Who is GENU?</span>
      <h1>Hi, I'm <em>GENU</em>.<br>Let me introduce your new team.</h1>
      <p class="lead">I'm your guide at GenuDo. With me, you hire AI employees: Aaref for sales, Adnan for customer support and ROZ for quality control. They answer your customers on WhatsApp, Instagram and your website chat, day and night, while you stay in control.</p>
      <div class="wg-cta">
        <a href="/contact" class="btn btn-primary btn-lg">Book a demo</a>
        <a href="#film" class="btn btn-ondark btn-lg"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m8 5 11 7-11 7z"/></svg>Watch the film</a>
      </div>
      <div class="wg-chans" aria-label="Channels">
        <span>WhatsApp</span><span>Instagram &amp; Messenger</span><span>Website chat</span>
      </div>
    </div>

    <div class="wg-stage">
      <p class="wg-bubble" data-wg-hero-bubble aria-live="polite">Hi! Tap me and I'll tell you more.</p>
      <button type="button" class="wg-genu" data-wg-genu aria-label="Tap GENU to hear the next line"
        data-lines="I'm not an employee. I'm the one who introduces them.|Everyone in my family has a colour and a job.|You hire them like any member of your team.|And you stay in charge: take over any chat in one tap.|Want to see them at work? Scroll down a little.">
        <img src="/media/img/genu.svg" alt="GENU, the friendly robot guide of GenuDo" width="216" height="236">
      </button>
      <span class="wg-hint">Tap GENU</span>
      <ul class="wg-crew" aria-label="The GENU family">
        <li><img src="/media/img/aaref.svg" alt="" width="56" height="61"><span>Aaref</span></li>
        <li><img src="/media/img/adnan.svg" alt="" width="56" height="61"><span>Adnan</span></li>
        <li><img src="/media/img/roz.svg" alt="" width="56" height="61"><span>ROZ</span></li>
      </ul>
    </div>
  </div>
</section>

<!-- ============ THE QUESTION ============ -->
<section class="wg-sec wg-question" id="question">
  <div class="container">
    <div class="wg-head wg-rv">
      <span class="eyebrow">A quick question</span>
      <h2>Who answers your customers at 2 AM?</h2>
      <p class="lead">Your customers message you on WhatsApp, Instagram, Messenger and your website, at any hour. Every customer left waiting goes to someone else.</p>
    </div>
    <div class="wg-cards">
      <article class="wg-card wg-rv">
        <span class="wg-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z"/></svg></span>
        <h3>Nobody answers at night</h3>
        <p>Messages that arrive after hours wait until morning, and by then the customer has talked to someone else.</p>
      </article>
      <article class="wg-card wg-rv">
        <span class="wg-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17 2l4 4-4 4"/><path d="M3 11V9a3 3 0 0 1 3-3h15"/><path d="M7 22l-4-4 4-4"/><path d="M21 13v2a3 3 0 0 1-3 3H3"/></svg></span>
        <h3>Nobody follows up with the quiet ones</h3>
        <p>A customer who asked and went quiet gets forgotten, even though one timely message could have closed the sale.</p>
      </article>
      <article class="wg-card wg-rv">
        <span class="wg-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg></span>
        <h3>You can't see your team's chats</h3>
        <p>Even during work hours, it's hard to know who replied late, or where a deal slipped away without anyone noticing.</p>
      </article>
    </div>
    <p class="wg-bridge wg-rv"><img src="/media/img/genu-avatar.svg" alt="" width="36" height="36">That's why we built GenuDo: a full AI workforce, and GENU is the one who introduces it.</p>
  </div>
</section>

<!-- ============ THE GENU FAMILY ============ -->
<section class="wg-sec wg-family-sec" id="family">
  <div class="container">
    <div class="wg-head wg-rv">
      <span class="eyebrow">The GENU family</span>
      <h2>A full team, and every employee has a clear job.</h2>
      <p class="lead">GENU isn't an employee; GENU is the guide who introduces the team. Every GenuDo employee is a character from the GENU family, with its own colour and its own job. You hire it like anyone on your team, and it works on your channels from day one.</p>
    </div>
    <div class="wg-family">
      <div class="wg-member wg-member--genu wg-rv">
        <div class="mk mk-emp mk-emp--genu">
          <img class="mk-emp__img" src="/media/img/genu.svg" alt="GENU, the guide" width="80" height="87">
          <div class="mk-emp__name">GENU</div>
          <span class="mk-emp__role">The guide · not an employee</span>
          <ul class="mk-emp__list">
            <li><i class="mk-ic mk-ic--check"></i><span>Explains the idea in our films and walkthroughs</span></li>
            <li><i class="mk-ic mk-ic--check"></i><span>Introduces each employee and its job</span></li>
            <li><i class="mk-ic mk-ic--check"></i><span>Walks you through, step by step, until your team is working</span></li>
          </ul>
        </div>
        <a class="wg-more" href="#film">Watch GENU in the film<svg class="wg-flip" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
      </div>
      <div class="wg-member wg-rv">
        <div class="mk mk-emp mk-emp--aaref">
          <img class="mk-emp__img" src="/media/img/aaref.svg" alt="Aaref, the AI sales employee" width="80" height="87">
          <div class="mk-emp__name">Aaref</div>
          <span class="mk-emp__role">Sales</span>
          <ul class="mk-emp__list">
            <li><i class="mk-ic mk-ic--check"></i><span>Answers every inquiry, day and night</span></li>
            <li><i class="mk-ic mk-ic--check"></i><span>Qualifies leads and follows up with the quiet ones</span></li>
            <li><i class="mk-ic mk-ic--check"></i><span>Helps book meetings straight into your calendar</span></li>
          </ul>
        </div>
        <a class="wg-more" href="/sol-sales-agent">Meet Aaref<svg class="wg-flip" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
      </div>
      <div class="wg-member wg-rv">
        <div class="mk mk-emp mk-emp--adnan">
          <img class="mk-emp__img" src="/media/img/adnan.svg" alt="Adnan, the AI support employee" width="80" height="87">
          <div class="mk-emp__name">Adnan</div>
          <span class="mk-emp__role">Support &amp; success</span>
          <ul class="mk-emp__list">
            <li><i class="mk-ic mk-ic--check"></i><span>Answers from your own facts: prices, policies, schedules</span></li>
            <li><i class="mk-ic mk-ic--check"></i><span>Routes tricky issues to the right person on your team</span></li>
            <li><i class="mk-ic mk-ic--check"></i><span>Works with Zoho Desk and Zendesk</span></li>
          </ul>
        </div>
        <a class="wg-more" href="/sol-customer-service">Meet Adnan<svg class="wg-flip" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
      </div>
      <div class="wg-member wg-rv">
        <div class="mk mk-emp mk-emp--roz">
          <img class="mk-emp__img" src="/media/img/roz.svg" alt="ROZ, the AI quality-control employee" width="80" height="87">
          <div class="mk-emp__name">ROZ</div>
          <span class="mk-emp__role">Quality control</span>
          <ul class="mk-emp__list">
            <li><i class="mk-ic mk-ic--check"></i><span>Reviews your team's WhatsApp chats on company lines</span></li>
            <li><i class="mk-ic mk-ic--check"></i><span>Flags slow replies, stalled deals and missed opportunities</span></li>
            <li><i class="mk-ic mk-ic--check"></i><span>Connects when you scan a QR code from your phone, and turns voice notes into text</span></li>
          </ul>
        </div>
        <a class="wg-more" href="/sol-operations">Meet ROZ<svg class="wg-flip" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
      </div>
    </div>
    <p class="wg-note wg-rv"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M19 8v6M22 11h-6"/></svg><span>You can hire more than one of each kind, for example one Aaref for WhatsApp sales and another for your website chat. And more employees are on the way.</span></p>
  </div>
</section>

<!-- ============ HOW GENU WORKS WITH YOU (narrated) ============ -->
<section class="wg-sec wg-how" id="how">
  <div class="container">
    <div class="wg-head wg-rv">
      <span class="eyebrow">How it works with you</span>
      <h2>From describing your business to your first booking, in five steps.</h2>
      <p class="lead">And GENU is beside you at every step: you describe your business, then watch your employee reply and book, while you follow along from your phone.</p>
    </div>

    <div class="wg-walk">
      <aside class="wg-narr" data-wg-narrator aria-hidden="true">
        <p class="wg-bubble" data-wg-say>Tell me about your business in your own words, typed or spoken, and I'll set up the rest.</p>
        <img src="/media/img/genu.svg" alt="" width="216" height="236">
        <span class="wg-step">Step <b data-wg-num>1</b> of 5</span>
      </aside>

      <ol class="wg-beats">
        <li class="wg-beat" data-wg-beat="1" data-say="Tell me about your business in your own words, typed or spoken, and I'll set up the rest.">
          <div class="wg-beat-copy">
            <span class="wg-num">1</span>
            <h3>You describe your business</h3>
            <p>Six quick questions: your business name, what you sell and what customers usually ask. Type or speak your answers, without writing a line of code.</p>
            <p class="wg-says"><img src="/media/img/genu-avatar.svg" alt="" width="32" height="32"><span><b>GENU:</b> Tell me about your business in your own words, typed or spoken, and I'll set up the rest.</span></p>
          </div>
          <div class="wg-media">
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
          </div>
        </li>

        <li class="wg-beat" data-wg-beat="2" data-say="Give me your prices and your common questions, and I'll teach them to your employee.">
          <div class="wg-beat-copy">
            <span class="wg-num">2</span>
            <h3>GENU sets up your employee</h3>
            <p>Upload your prices, your common questions or your website link, and tell each stage when to start and what to do. Your employee answers from your own facts, and you can change them anytime.</p>
            <p class="wg-says"><img src="/media/img/genu-avatar.svg" alt="" width="32" height="32"><span><b>GENU:</b> Give me your prices and your common questions, and I'll teach them to your employee.</span></p>
          </div>
          <div class="wg-media">
<div class="mk mk-card mk-kb" role="img" aria-label="Common questions the AI answers from">
  <div class="mk-card__head"><div class="mk-card__title"><i class="mk-ic mk-ic--book"></i>Knowledge · Clinic FAQ</div><span class="mk-chip mk-chip--green"><i class="mk-ic mk-ic--check"></i>Trained</span></div>
  <table class="mk-table">
    <thead><tr><th>Question</th><th>Answer</th><th class="mk-hide-sm">Updated</th></tr></thead>
    <tbody>
      <tr><td>What are your opening hours?</td><td>Saturday to Thursday, 10 am to 10 pm.</td><td class="mk-hide-sm">1 Jan 2029</td></tr>
      <tr><td>Is the first consultation free?</td><td>Yes, the first consultation is free.</td><td class="mk-hide-sm">1 Jan 2029</td></tr>
      <tr><td>Is there parking?</td><td>Yes, free parking behind the building.</td><td class="mk-hide-sm">3 Jan 2029</td></tr>
    </tbody>
  </table>
  <div class="mk-kb__ask"><i class="mk-ic mk-ic--sparkle"></i><span>Answered from this table: “Yes, the first consultation is free. Shall I book you in?”</span></div>
</div>
          </div>
        </li>

        <li class="wg-beat" data-wg-beat="3" data-say="A customer messaged at 2 AM? Aaref answered and booked the visit.">
          <div class="wg-beat-copy">
            <span class="wg-num">3</span>
            <h3>It answers and books, day and night</h3>
            <p>Your employee replies instantly on WhatsApp, Instagram, Messenger and your website chat. It understands voice notes, asks the right questions and helps book the meeting into your calendar.</p>
            <p class="wg-says"><img src="/media/img/genu-avatar.svg" alt="" width="32" height="32"><span><b>GENU:</b> A customer messaged at 2 AM? Aaref answered and booked the visit.</span></p>
          </div>
          <div class="wg-media">
<div class="mk mk-phone" role="img" aria-label="WhatsApp chat answered by the AI employee, ending in a booked visit">
  <div class="mk-phone__screen">
    <div class="mk-phone__status"><span>2:15</span></div>
    <div class="mk-phone__head"><i class="mk-ic mk-ic--back"></i><span class="mk-avatar mk-avatar--green">MA</span><div class="mk-phone__who"><b>Mona Adel</b><span><i class="mk-ic mk-ic--whatsapp"></i>WhatsApp · +20 100 000 0000</span></div></div>
    <div class="mk-takeover"><span class="mk-takeover__state"><i class="mk-ic mk-ic--sparkle"></i>AI is handling this chat</span><span class="mk-takeover__btn"><i class="mk-ic mk-ic--pause"></i>Take over</span></div>
    <div class="mk-chat">
      <span class="mk-chat__day">Today</span>
      <div class="mk-msg mk-msg--in">Hi! Do you have a slot this week?<span class="mk-msg__meta">2:14 AM</span></div>
      <div class="mk-msg mk-msg--out"><span class="mk-msg__by"><i class="mk-ic mk-ic--sparkle"></i>Aaref · AI</span>Hi Mona! We have Thursday at 6:30 or 7:15 PM. Which suits you?<span class="mk-msg__meta">2:14 AM <i class="mk-ic mk-ic--checks"></i></span></div>
      <div class="mk-msg mk-msg--in mk-voice">
        <div class="mk-voice__row"><span class="mk-voice__play"><i class="mk-ic mk-ic--play"></i></span><span class="mk-voice__wave"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></span><span class="mk-voice__len">0:07</span></div>
        <div class="mk-voice__text"><b><i class="mk-ic mk-ic--mic"></i>Transcribed</b>Thursday 6:30, please. Is the first consultation free?</div>
        <span class="mk-msg__meta">2:15 AM</span>
      </div>
      <div class="mk-msg mk-msg--out"><span class="mk-msg__by"><i class="mk-ic mk-ic--sparkle"></i>Aaref · AI</span>Yes, it's free! You're booked for Thursday at 6:30 PM.<span class="mk-msg__meta">2:15 AM <i class="mk-ic mk-ic--checks"></i></span></div>
      <div class="mk-meeting">
        <div class="mk-meeting__top"><span class="mk-meeting__ic"><i class="mk-ic mk-ic--calendar"></i></span><div><div class="mk-meeting__title">Meeting confirmed</div><div class="mk-meeting__when">Thu 14 Jan · 6:30 PM</div></div></div>
        <div class="mk-meeting__rows"><span><i class="mk-ic mk-ic--check"></i>Added to Google Calendar</span><span><i class="mk-ic mk-ic--check"></i>Meeting link sent on WhatsApp</span></div>
      </div>
    </div>
    <div class="mk-phone__compose">AI is handling this chat. Take over to reply.</div>
  </div>
</div>
          </div>
        </li>

        <li class="wg-beat" data-wg-beat="4" data-say="And the ones who went quiet? Follow-ups never forget.">
          <div class="wg-beat-copy">
            <span class="wg-num">4</span>
            <h3>It follows up with the quiet ones</h3>
            <p>If a customer doesn't reply, your employee sends a follow-up after 3 hours and another after a day, with the message you choose. If the follow-ups end with no reply, the opportunity moves to “Lost”, so your list stays clean.</p>
            <p class="wg-says"><img src="/media/img/genu-avatar.svg" alt="" width="32" height="32"><span><b>GENU:</b> And the ones who went quiet? Follow-ups never forget.</span></p>
          </div>
          <div class="wg-media">
<div class="mk mk-card" role="img" aria-label="Follow-up sequence for a silent lead">
  <div class="mk-card__head"><div class="mk-card__title"><i class="mk-ic mk-ic--repeat"></i>Follow-ups · Interested</div><span class="mk-chip mk-chip--green"><i class="mk-dot"></i>Active</span></div>
  <ol class="mk-timeline">
    <li class="mk-step is-sent"><div class="mk-step__head"><b>Follow-up 1</b><span class="mk-step__wait">after 3 hours</span><span class="mk-status mk-status--sent">Sent</span></div><p class="mk-step__msg">Hi Karim, still keen to book your consultation? We have slots this week.</p></li>
    <li class="mk-step is-scheduled"><div class="mk-step__head"><b>Follow-up 2</b><span class="mk-step__wait">after 24 hours</span><span class="mk-status mk-status--scheduled">Scheduled</span></div><p class="mk-step__msg">We have two free slots on Thursday. Shall I hold one for you?</p></li>
    <li class="mk-step mk-step--end"><div class="mk-step__head"><i class="mk-ic mk-ic--arrow"></i>No reply after the sequence: move to <span class="mk-stage mk-stage--red mk-stage--sm">Lost</span></div></li>
  </ol>
</div>
          </div>
        </li>

        <li class="wg-beat" data-wg-beat="5" data-say="And you see everything, and take over any chat in one tap, even from your phone.">
          <div class="wg-beat-copy">
            <span class="wg-num">5</span>
            <h3>And you stay in control</h3>
            <p>Every conversation lands in one inbox. Take over any chat in one tap and hand it back afterwards, even from the mobile app. And ROZ reviews your team's chats and tells you when a customer waited too long or an opportunity slipped away.</p>
            <p class="wg-says"><img src="/media/img/genu-avatar.svg" alt="" width="32" height="32"><span><b>GENU:</b> And you see everything, and take over any chat in one tap, even from your phone.</span></p>
          </div>
          <div class="wg-media wg-media--pair">
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
<div class="mk mk-card" role="img" aria-label="ROZ flags three conversations from your team">
  <div class="mk-review__head"><img src="/media/img/roz.svg" alt="" width="44" height="48"><div class="mk-review__who"><b>ROZ · Quality control</b><span>WhatsApp · Sales line · Today</span></div><span class="mk-chip mk-chip--pink">3 flags</span></div>
  <ul class="mk-flags">
    <li class="mk-flag mk-flag--slow"><span class="mk-flag__ic"><i class="mk-ic mk-ic--clock"></i></span><div class="mk-flag__body"><b>Slow reply<span>Ahmed · 10:40 AM</span></b><p>Customer waited 2 hours for a price.</p></div></li>
    <li class="mk-flag mk-flag--missed"><span class="mk-flag__ic"><i class="mk-ic mk-ic--flag"></i></span><div class="mk-flag__body"><b>Missed opportunity<span>Salma · 1:15 PM</span></b><p>Customer asked to book. Nobody offered a time.</p></div></li>
    <li class="mk-flag mk-flag--stalled"><span class="mk-flag__ic"><i class="mk-ic mk-ic--pause"></i></span><div class="mk-flag__body"><b>Stalled deal<span>Ahmed · 4 days</span></b><p>Quote sent, no follow-up since.</p></div></li>
  </ul>
  <div class="mk-review__foot"><i class="mk-ic mk-ic--mic"></i>6 voice notes transcribed today</div>
</div>
          </div>
        </li>
      </ol>
    </div>
  </div>
</section>

<!-- ============ THE FILM ============ -->
<section class="wg-sec wg-film" id="film">
  <div class="container">
    <div class="wg-head wg-rv">
      <span class="eyebrow">The film</span>
      <h2>GENU tells the whole story in 90 seconds.</h2>
      <p class="lead">From “Who answers your customers at 2 AM?” to your AI team at work, all the way to taking over a chat from your phone.</p>
    </div>
    <div class="wg-player wg-rv">
      <video src="/media/video/ai-workforce-en.mp4" poster="/media/video/ai-workforce-en.jpg" controls playsinline preload="none" width="1280" height="720" aria-label="GenuDo film: build your AI workforce"></video>
    </div>
    <ul class="wg-chapters" aria-label="What you'll see in the film">
      <li>The problem: customers waiting</li>
      <li>Meet the AI workforce</li>
      <li>It learns your business</li>
      <li>Set up in a few simple steps</li>
      <li>One team, every stage</li>
      <li>Plugs into your tools</li>
      <li>You stay in charge</li>
      <li>Take over from your phone</li>
    </ul>
  </div>
</section>

<!-- ============ BEHIND THE CHARACTER ============ -->
<section class="wg-sec wg-character" id="character">
  <div class="container wg-char">
    <div class="wg-char-media wg-rv">
      <div class="wg-loop">
        <video data-wg-loop src="/media/video/genu-pose-library.mp4" poster="/media/video/genu-pose-library.jpg" autoplay muted loop playsinline preload="none" width="1280" height="720" aria-label="GENU waving, pointing, celebrating and thinking"></video>
      </div>
      <ul class="wg-poses" aria-label="GENU's moves">
        <li>Waves</li><li>Points</li><li>Presents</li><li>Celebrates</li>
        <li>Types</li><li>Thinks</li><li>Listens</li><li>Shrugs</li>
      </ul>
    </div>
    <div class="wg-char-copy wg-rv">
      <span class="eyebrow">Behind the character</span>
      <h2>A small robot that says a lot.</h2>
      <p class="lead">We made GENU to explain things simply: a pixel face that smiles and thinks, and paddle hands that point at exactly what you need to see.</p>
      <ul class="wg-traits">
        <li><span class="wg-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><path d="M9 9h.01M15 9h.01"/></svg></span><div><b>Faces that tell you what's happening</b><p>When GENU is thinking, work is under way. When GENU celebrates, the job is done.</p></div></li>
        <li><span class="wg-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="13.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="12.5" r="2.5"/><circle cx="8.5" cy="7.5" r="2.5"/><circle cx="6.5" cy="13.5" r="2.5"/><path d="M12 22a10 10 0 1 1 10-10c0 2-1.5 3-3 3h-2a2 2 0 0 0-1 3.7A2 2 0 0 1 12 22z"/></svg></span><div><b>Every employee has its colour</b><p class="wg-swatches"><span><i style="--c:#6468f0"></i>GENU indigo</span><span><i style="--c:#e0a23a"></i>Aaref amber</span><span><i style="--c:#52a7cc"></i>Adnan blue</span><span><i style="--c:#e86fa6"></i>ROZ pink, with a bow</span></p></div></li>
        <li><span class="wg-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></span><div><b>Speaks your customers' language</b><p>In the Arabic film, GENU speaks Egyptian Arabic, the same way your customers talk to you.</p></div></li>
      </ul>
    </div>
  </div>
</section>

<!-- ============ WHY YOU CAN RELAX ============ -->
<section class="wg-sec wg-trust" id="trust">
  <div class="container">
    <div class="wg-head wg-rv">
      <span class="eyebrow">Why you can relax</span>
      <h2>A team that works by your rules.</h2>
    </div>
    <div class="wg-cards">
      <article class="wg-card wg-rv">
        <span class="wg-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m5 8 6 6M4 14l6-6 2-3M2 5h12M7 2h1M22 22l-5-10-5 10M14 18h6"/></svg></span>
        <h3>Speaks like your customers</h3>
        <p>Egyptian, Gulf, Levantine… 14 Arabic dialects, and it understands voice notes and images too.</p>
      </article>
      <article class="wg-card wg-rv">
        <span class="wg-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5z"/><path d="M8 7h8M8 11h6"/></svg></span>
        <h3>Answers from your facts</h3>
        <p>Your prices, policies and schedules are the source, and you can update them anytime.</p>
      </article>
      <article class="wg-card wg-rv">
        <span class="wg-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/></svg></span>
        <h3>You make the call</h3>
        <p>Turn the AI on or off in any conversation and leave private notes for your team, from your desk or your phone.</p>
      </article>
    </div>
    <p class="wg-more-row wg-rv"><a class="wg-more" href="/how-it-works">See how it works in detail<svg class="wg-flip" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a></p>
  </div>
</section>

<!-- ============ CTA ============ -->
<section class="s ctaf wg-final"><div class="container"><div class="ctaf-card">
  <img class="ctaf-genu wg-final-genu" src="/media/img/genu.svg" alt="" width="96" height="105">
  <div class="eyebrow ctaf-eyebrow">Let's begin</div>
  <h2>Ready to hire the first member of your team?</h2>
  <p class="lead">Book a demo and GENU will show you the team working on your own business, or start on your own today.</p>
  <div class="ctaf-cta"><a href="/contact" class="btn btn-primary btn-lg">Book a demo</a><a href="https://app.genudo.ai/auth/register" class="ctaf-sec">Start free <svg class="wg-flip" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a></div>
  <div class="ctaf-trust"><span class="live-dot"></span>WhatsApp<span class="sep"></span>Instagram<span class="sep"></span>Messenger<span class="sep"></span>Website chat</div>
</div></div></section>

</div>`;
export default html;
