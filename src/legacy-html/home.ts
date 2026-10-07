// / (home) — value-led rewrite (EN). See docs/website/BUILD-BRIEF.md.
// Same sections and claims as the Egyptian Arabic page (home.ar-EG.ts, the primary).
// Mockups come from the shared kit (src/app/[locale]/kit-preview/kit-snippets.ts,
// styles in src/styles/mockups.css); page styles in src/styles/pages/home.css (.pg-home).
const html = `<div class="pg-home">

<!-- ══ HERO ══ -->
<section class="hm-hero" aria-labelledby="hm-hero-title">
  <div class="container hm-hero__in">
    <div class="hm-hero__copy">
      <p class="hm-kicker"><span class="live-dot" aria-hidden="true"></span><span>AI employees for WhatsApp, Instagram, Messenger and your website</span></p>
      <h1 class="hm-h1" id="hm-hero-title">No customer left waiting.<br><span class="hm-accent">No lead left behind.</span></h1>
      <p class="hm-lead">GenuDo gives you a team of AI employees that answer your customers the moment they write, follow up with the ones who go quiet and close the next step, day and night: a booking, a registration or an order. And you stay in control, right from your phone.</p>
      <div class="hm-cta">
        <a href="/contact" class="btn btn-primary btn-lg">Book a planning session</a>
        <a href="https://app.genudo.ai/auth/register" class="btn btn-ghost btn-lg">Start free</a>
      </div>
      <div class="hm-team">
        <span class="hm-team__avs" aria-hidden="true"><img src="/media/img/aaref.svg" alt="" width="40" height="44"><img src="/media/img/adnan.svg" alt="" width="40" height="44"><img src="/media/img/roz-v2.svg" alt="" width="40" height="44"></span>
        <span>Aaref, Adnan and Roz are ready to join your team</span>
      </div>
    </div>

    <div class="hm-hero__visual">
      <div class="hm-glow" aria-hidden="true"></div>
      <div class="mk mk-phone" role="img" aria-label="WhatsApp chat at 2 a.m.: Aaref answers the customer and books her a visit">
        <div class="mk-phone__screen">
          <div class="mk-phone__status"><span>2:16</span></div>
          <div class="mk-phone__head"><i class="mk-ic mk-ic--back"></i><span class="mk-avatar mk-avatar--green">MA</span><div class="mk-phone__who"><b>Mona Adel</b><span><i class="mk-ic mk-ic--whatsapp"></i>WhatsApp · +20 100 000 0000</span></div></div>
          <div class="mk-takeover"><span class="mk-takeover__state"><i class="mk-ic mk-ic--sparkle"></i>AI is handling this chat</span><span class="mk-takeover__btn"><i class="mk-ic mk-ic--pause"></i>Take over</span></div>
          <div class="mk-chat">
            <span class="mk-chat__day">Today</span>
            <div class="mk-msg mk-msg--in">Hi! Do you do teeth whitening?<span class="mk-msg__meta">2:14 AM</span></div>
            <div class="mk-msg mk-msg--out"><span class="mk-msg__by"><i class="mk-ic mk-ic--sparkle"></i>Aaref · AI</span>Hi Mona! Yes, whitening takes about an hour and a follow-up visit is included. Would you like a visit this week?<span class="mk-msg__meta">2:14 AM <i class="mk-ic mk-ic--checks"></i></span></div>
            <div class="mk-msg mk-msg--in mk-voice">
              <div class="mk-voice__row"><span class="mk-voice__play"><i class="mk-ic mk-ic--play"></i></span><span class="mk-voice__wave"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></span><span class="mk-voice__len">0:09</span></div>
              <div class="mk-voice__text"><b><i class="mk-ic mk-ic--mic"></i>Transcribed</b>Yes please, Thursday after 6 if you can.</div>
              <span class="mk-msg__meta">2:15 AM</span>
            </div>
            <div class="mk-msg mk-msg--out"><span class="mk-msg__by"><i class="mk-ic mk-ic--sparkle"></i>Aaref · AI</span>Done! You are booked for Thursday at 6:30 PM.<span class="mk-msg__meta">2:15 AM <i class="mk-ic mk-ic--checks"></i></span></div>
            <div class="mk-meeting">
              <div class="mk-meeting__top"><span class="mk-meeting__ic"><i class="mk-ic mk-ic--calendar"></i></span><div><div class="mk-meeting__title">Meeting confirmed</div><div class="mk-meeting__when">Thu 14 Jan · 6:30 PM</div></div></div>
              <div class="mk-meeting__rows"><span><i class="mk-ic mk-ic--check"></i>Added to Google Calendar</span><span><i class="mk-ic mk-ic--check"></i>Confirmation sent on WhatsApp</span></div>
            </div>
          </div>
          <div class="mk-phone__compose">AI is handling this chat. Take over to reply.</div>
        </div>
      </div>
      <div class="hm-float hm-float--a" aria-hidden="true"><img src="/media/img/aaref.svg" alt="" width="34" height="37"><div><b>Aaref answered Mona</b><span>at 2:14 a.m.</span></div></div>
      <div class="hm-float hm-float--b" aria-hidden="true"><span class="hm-float__ic"><i class="mk-ic mk-ic--calendar"></i></span><div><b>New booking</b><span>while you slept</span></div></div>
      <p class="hm-caption">Invented example</p>
    </div>
  </div>
</section>

<!-- ══ CUSTOMERS (logos unchanged from the previous home) ══ -->
<section class="hm-logos" aria-label="GenuDo customers">
  <div class="container">
    <p class="hm-logos__t">Businesses across Egypt and the Arab world run on GenuDo: learning platforms, clinics, agencies, gyms and more</p>
  </div>
  <div class="marquee">
    <div class="marquee-track">
      <span class="mq-logo"><img src="https://www.google.com/s2/favicons?domain=thepalmoasis.net&sz=128" alt="" onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'mq-fb',textContent:'P'}))"><span>The Palm Oasis</span></span>
      <span class="mq-logo"><img src="https://www.google.com/s2/favicons?domain=propertyhub.site&sz=128" alt="" onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'mq-fb',textContent:'P'}))"><span>Property Hub</span></span>
      <span class="mq-logo"><img src="https://www.google.com/s2/favicons?domain=restatex.com&sz=128" alt="" onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'mq-fb',textContent:'R'}))"><span>Restatex</span></span>
      <span class="mq-logo wide"><img src="/logos/la-casa.png" alt="La Casa"><span>La Casa</span></span>
      <span class="mq-logo wide"><img src="/logos/roshda.png" alt="Roshda"><span>Roshda</span></span>
      <span class="mq-logo"><img src="https://www.google.com/s2/favicons?domain=memphistours.com&sz=128" alt="" onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'mq-fb',textContent:'M'}))"><span>Memphis Saharaa</span></span>
      <span class="mq-logo"><img src="https://www.google.com/s2/favicons?domain=majestic.bio&sz=128" alt="" onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'mq-fb',textContent:'M'}))"><span>Majestic Biopharma</span></span>
      <span class="mq-logo"><img src="https://www.google.com/s2/favicons?domain=consortiolawfirm.com&sz=128" alt="" onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'mq-fb',textContent:'C'}))"><span>Consortio Law</span></span>
      <span class="mq-logo"><img src="https://www.google.com/s2/favicons?domain=hpaconsultant.com&sz=128" alt="" onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'mq-fb',textContent:'H'}))"><span>HPA</span></span>
      <span class="mq-logo"><img src="https://www.google.com/s2/favicons?domain=cutting-edge.digital&sz=128" alt="" onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'mq-fb',textContent:'C'}))"><span>CuttingEdge</span></span>
      <span class="mq-logo"><img src="https://www.google.com/s2/favicons?domain=arabicss.com&sz=128" alt="" onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'mq-fb',textContent:'A'}))"><span>Arabicss</span></span>
      <span class="mq-logo"><img src="https://www.google.com/s2/favicons?domain=icancoachyou.online&sz=128" alt="" onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'mq-fb',textContent:'i'}))"><span>iCanCoachYou</span></span>
      <span class="mq-logo"><img src="https://www.google.com/s2/favicons?domain=aos.fit&sz=128" alt="" onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'mq-fb',textContent:'A'}))"><span>AOS</span></span>
      <span class="mq-logo"><img src="https://www.google.com/s2/favicons?domain=wellspringegypt.com&sz=128" alt="" onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'mq-fb',textContent:'W'}))"><span>Wellspring</span></span>
      <span class="mq-logo" aria-hidden="true"><img src="https://www.google.com/s2/favicons?domain=thepalmoasis.net&sz=128" alt="" onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'mq-fb',textContent:'P'}))"><span>The Palm Oasis</span></span>
      <span class="mq-logo" aria-hidden="true"><img src="https://www.google.com/s2/favicons?domain=propertyhub.site&sz=128" alt="" onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'mq-fb',textContent:'P'}))"><span>Property Hub</span></span>
      <span class="mq-logo" aria-hidden="true"><img src="https://www.google.com/s2/favicons?domain=restatex.com&sz=128" alt="" onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'mq-fb',textContent:'R'}))"><span>Restatex</span></span>
      <span class="mq-logo wide" aria-hidden="true"><img src="/logos/la-casa.png" alt=""><span>La Casa</span></span>
      <span class="mq-logo wide" aria-hidden="true"><img src="/logos/roshda.png" alt=""><span>Roshda</span></span>
      <span class="mq-logo" aria-hidden="true"><img src="https://www.google.com/s2/favicons?domain=memphistours.com&sz=128" alt="" onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'mq-fb',textContent:'M'}))"><span>Memphis Saharaa</span></span>
      <span class="mq-logo" aria-hidden="true"><img src="https://www.google.com/s2/favicons?domain=majestic.bio&sz=128" alt="" onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'mq-fb',textContent:'M'}))"><span>Majestic Biopharma</span></span>
      <span class="mq-logo" aria-hidden="true"><img src="https://www.google.com/s2/favicons?domain=consortiolawfirm.com&sz=128" alt="" onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'mq-fb',textContent:'C'}))"><span>Consortio Law</span></span>
      <span class="mq-logo" aria-hidden="true"><img src="https://www.google.com/s2/favicons?domain=hpaconsultant.com&sz=128" alt="" onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'mq-fb',textContent:'H'}))"><span>HPA</span></span>
      <span class="mq-logo" aria-hidden="true"><img src="https://www.google.com/s2/favicons?domain=cutting-edge.digital&sz=128" alt="" onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'mq-fb',textContent:'C'}))"><span>CuttingEdge</span></span>
      <span class="mq-logo" aria-hidden="true"><img src="https://www.google.com/s2/favicons?domain=arabicss.com&sz=128" alt="" onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'mq-fb',textContent:'A'}))"><span>Arabicss</span></span>
      <span class="mq-logo" aria-hidden="true"><img src="https://www.google.com/s2/favicons?domain=icancoachyou.online&sz=128" alt="" onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'mq-fb',textContent:'i'}))"><span>iCanCoachYou</span></span>
      <span class="mq-logo" aria-hidden="true"><img src="https://www.google.com/s2/favicons?domain=aos.fit&sz=128" alt="" onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'mq-fb',textContent:'A'}))"><span>AOS</span></span>
      <span class="mq-logo" aria-hidden="true"><img src="https://www.google.com/s2/favicons?domain=wellspringegypt.com&sz=128" alt="" onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'mq-fb',textContent:'W'}))"><span>Wellspring</span></span>
    </div>
  </div>
</section>

<!-- ══ THE 2 A.M. PROBLEM ══ -->
<section class="hm-night" aria-labelledby="hm-night-title">
  <div class="container">
    <div class="hm-night__head">
      <div class="hm-clock" aria-hidden="true"><bdi>2:00</bdi><small>a.m.</small></div>
      <h2 class="hm-h2" id="hm-night-title">Quick question: who answers your customers at 2 a.m.?</h2>
      <p class="hm-sub">Customers message you on WhatsApp, Instagram, Messenger and your website, at any hour. And every customer who waits… goes to someone else.</p>
    </div>
    <div class="hm-pains">
      <article class="hm-pain">
        <span class="hm-pain__ic"><i class="mk-ic mk-ic--moon"></i></span>
        <h3>The message waits until morning</h3>
        <p>A customer asked at night and got an answer the next afternoon. By then, they had bought from someone else.</p>
      </article>
      <article class="hm-pain">
        <span class="hm-pain__ic"><i class="mk-ic mk-ic--repeat"></i></span>
        <h3>Nobody gets back to the quiet ones</h3>
        <p>A customer asked for prices and went silent. Your team is busy, the follow-up gets forgotten, and the lead goes cold.</p>
      </article>
      <article class="hm-pain">
        <span class="hm-pain__ic"><i class="mk-ic mk-ic--search"></i></span>
        <h3>You can't see what happens in your chats</h3>
        <p>And during work hours… how much of your company's conversations do you actually see? Slow replies and quotes nobody chased, and you find out too late.</p>
      </article>
    </div>
    <p class="hm-night__turn">That's why, with <b>GenuDo</b>, you build a complete AI workforce.</p>
  </div>
</section>

<!-- ══ FIVE VALUE PILLARS ══ -->
<section class="hm-pillars" aria-labelledby="hm-pillars-title">
  <div class="container">
    <div class="hm-head">
      <p class="hm-eyebrow">What changes in your business</p>
      <h2 class="hm-h2" id="hm-pillars-title">Five things that change the moment your new team starts</h2>
    </div>

    <!-- 1 · every customer answered -->
    <article class="hm-pillar">
      <div class="hm-pillar__copy">
        <span class="hm-num">01</span>
        <h3>Every customer answered, day and night</h3>
        <p>No message waits until morning and no lead goes cold. Replies go out right away on WhatsApp, Instagram, Messenger and your website chat. And the ones who don't reply? The follow-up never forgets.</p>
        <p class="hm-how">How we do it</p>
        <ul class="hm-proof">
          <li><i class="mk-ic mk-ic--check"></i><span>Instant replies on all your channels, from one place</span></li>
          <li><i class="mk-ic mk-ic--check"></i><span>Follow-ups for every stage: a message after 3 hours, another after a day, with a video or file if you like</span></li>
          <li><i class="mk-ic mk-ic--check"></i><span>When the sequence ends with no reply, the opportunity is marked lost, so your numbers stay honest</span></li>
        </ul>
        <a class="hm-link" href="/how-it-works#followups">See how follow-ups work<i class="mk-ic mk-ic--arrow"></i></a>
      </div>
      <div class="hm-stage">
        <div class="mk mk-card" role="img" aria-label="Follow-up sequence for a silent lead">
          <div class="mk-card__head"><div class="mk-card__title"><i class="mk-ic mk-ic--repeat"></i>Follow-ups · Interested</div><span class="mk-chip mk-chip--green"><i class="mk-dot"></i>Active</span></div>
          <ol class="mk-timeline">
            <li class="mk-step is-sent"><div class="mk-step__head"><b>Follow-up 1</b><span class="mk-step__wait">after 3 hours</span><span class="mk-status mk-status--sent">Sent</span></div><p class="mk-step__msg">Hi Karim, here is the price list you asked for. Any questions?</p></li>
            <li class="mk-step is-scheduled"><div class="mk-step__head"><b>Follow-up 2</b><span class="mk-step__wait">after 24 hours</span><span class="mk-status mk-status--scheduled">Scheduled</span></div><p class="mk-step__msg">We have two free slots on Thursday. Shall I hold one for you?</p></li>
            <li class="mk-step mk-step--end"><div class="mk-step__head"><i class="mk-ic mk-ic--arrow"></i>No reply after the sequence: move to <span class="mk-stage mk-stage--red mk-stage--sm">Lost</span></div></li>
          </ol>
        </div>
      </div>
    </article>

    <!-- 2 · conversations that move to a sale -->
    <article class="hm-pillar hm-pillar--flip">
      <div class="hm-pillar__copy">
        <span class="hm-num">02</span>
        <h3>Conversations that move to a sale, not small talk</h3>
        <p>Qualified leads, bookings, registrations and orders, not endless chatting. Every opportunity moves from stage to stage by the stage rules you set, until the customer decides, and your AI employee does the work that comes after the conversation too.</p>
        <p class="hm-how">How we do it</p>
        <ul class="hm-proof">
          <li><i class="mk-ic mk-ic--check"></i><span>Stages that move each opportunity forward by your rules: interested, booking, won</span></li>
          <li><i class="mk-ic mk-ic--check"></i><span>Books the appointment, registers the customer or records the order, and confirms on WhatsApp</span></li>
          <li><i class="mk-ic mk-ic--check"></i><span>Updates your CRM the moment a customer is ready, with the details it collected in the chat</span></li>
        </ul>
        <a class="hm-link" href="/how-it-works#pipelines">See how a lead moves to a sale<i class="mk-ic mk-ic--arrow"></i></a>
      </div>
      <div class="hm-stage">
        <div class="mk mk-board" role="img" aria-label="Pipeline board: opportunities moving from new lead to won">
          <div class="mk-board__cols">
            <div class="mk-col">
              <div class="mk-col__head"><span class="mk-stage">New lead</span><span class="mk-col__count">16 deals</span></div>
              <div class="mk-opp mk-opp--new">
                <div class="mk-opp__top"><span class="mk-avatar mk-avatar--sm mk-avatar--green">MA</span><div class="mk-opp__who"><b>Mona Adel</b><span class="mk-opp__ch"><i class="mk-ic mk-ic--whatsapp"></i>WhatsApp</span></div><span class="mk-opp__time">now</span></div>
                <p class="mk-opp__msg">Hi! Do you do teeth whitening?</p>
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
        <p class="hm-caption">Invented example</p>
      </div>
    </article>

    <!-- 3 · predictable, capped cost -->
    <article class="hm-pillar">
      <div class="hm-pillar__copy">
        <span class="hm-num">03</span>
        <h3>AI cost you can predict, with a cap</h3>
        <p>You know what every reply and every outcome costs. Each message goes to the most affordable model that can answer it well, and you set a spending cap on every conversation… if it's reached, the AI steps back and hands the chat to your team.</p>
        <p class="hm-how">How we do it</p>
        <ul class="hm-proof">
          <li><i class="mk-ic mk-ic--check"></i><span>Simple messages go to cheaper models; only the hard ones get the most capable model</span></li>
          <li><i class="mk-ic mk-ic--check"></i><span>A spend cap per conversation: at the cap, the AI pauses and hands the chat to your team</span></li>
          <li><i class="mk-ic mk-ic--check"></i><span>The cost of every reply and every stage, right on your dashboard</span></li>
        </ul>
        <a class="hm-link" href="/how-it-works#models">See how cost stays under control<i class="mk-ic mk-ic--arrow"></i></a>
      </div>
      <div class="hm-stage hm-stage--stack">
        <div class="mk mk-card" role="img" aria-label="Smart routing: each message goes to the model its difficulty needs">
          <div class="mk-card__head"><div class="mk-card__title"><i class="mk-ic mk-ic--route"></i>Smart routing</div><span class="mk-chip mk-chip--green"><i class="mk-dot"></i>On</span></div>
          <div class="mk-tiers">
            <div class="mk-tier"><div class="mk-tier__head"><span class="mk-tier__name">Simple</span></div><p class="mk-tier__eg">“What time do you open?”</p><div class="mk-tier__model"><i class="mk-ic mk-ic--bolt"></i>Fast model</div><div class="mk-bar"><i style="--w:68%"></i></div><span class="mk-tier__share">68% of messages</span></div>
            <div class="mk-tier mk-tier--moderate"><div class="mk-tier__head"><span class="mk-tier__name">Moderate</span></div><p class="mk-tier__eg">“Compare your two packages for me.”</p><div class="mk-tier__model"><i class="mk-ic mk-ic--sparkle"></i>Balanced model</div><div class="mk-bar"><i style="--w:26%"></i></div><span class="mk-tier__share">26% of messages</span></div>
            <div class="mk-tier mk-tier--complex"><div class="mk-tier__head"><span class="mk-tier__name">Complex</span></div><p class="mk-tier__eg">“Plan a 3-visit treatment around my travel dates.”</p><div class="mk-tier__model"><i class="mk-ic mk-ic--target"></i>Advanced model</div><div class="mk-bar"><i style="--w:6%"></i></div><span class="mk-tier__share">6% of messages</span></div>
          </div>
        </div>
        <div class="mk mk-card" role="img" aria-label="Spend cap per conversation: at the cap the AI pauses and hands the chat to the team">
          <div class="mk-card__head"><div class="mk-card__title"><i class="mk-ic mk-ic--wallet"></i>Spend cap per conversation</div><span class="mk-toggle is-on"></span></div>
          <div class="mk-cap__value"><b><bdi>$0.32</bdi></b> of <bdi>$0.50</bdi> used</div>
          <div class="mk-bar mk-bar--amber"><i style="--w:64%"></i></div>
          <p class="mk-cap__rule"><i class="mk-ic mk-ic--alert"></i><span>When the cap is reached: pause the AI in this chat and hand it to the team.</span></p>
        </div>
        <p class="hm-caption">Invented example</p>
      </div>
    </article>

    <!-- 4 · speaks like your customers -->
    <article class="hm-pillar hm-pillar--flip">
      <div class="hm-pillar__copy">
        <span class="hm-num">04</span>
        <h3>Speaks like your customers, answers from your facts</h3>
        <p>Arabic that sounds local: Egyptian, Gulf, Levantine… 14 regional dialects, or let it pick the dialect for each customer on its own. It understands voice notes and photos too. And every answer comes from your own information: services, policies and schedules.</p>
        <p class="hm-how">How we do it</p>
        <ul class="hm-proof">
          <li><i class="mk-ic mk-ic--check"></i><span>14 Arabic dialects, or automatic multi-dialect</span></li>
          <li><i class="mk-ic mk-ic--check"></i><span>Listens to voice notes and understands the photos customers send</span></li>
          <li><i class="mk-ic mk-ic--check"></i><span>Answers from the price lists, FAQs, policies and schedules you share</span></li>
        </ul>
        <a class="hm-link" href="/how-it-works#knowledge">See how it learns your business<i class="mk-ic mk-ic--arrow"></i></a>
      </div>
      <div class="hm-stage hm-stage--stack">
        <div class="mk mk-card" role="img" aria-label="Choose the Arabic dialect your AI employee speaks">
          <div class="mk-card__head"><div class="mk-card__title"><i class="mk-ic mk-ic--globe"></i>Dialect</div></div>
          <div class="mk-chips">
            <span class="mk-chip mk-chip--opt is-on"><i class="mk-ic mk-ic--check"></i>Egyptian</span><span class="mk-chip mk-chip--opt">Saudi / Gulf</span><span class="mk-chip mk-chip--opt">Jordanian</span><span class="mk-chip mk-chip--opt">Palestinian</span><span class="mk-chip mk-chip--opt">Lebanese</span><span class="mk-chip mk-chip--opt">Syrian</span><span class="mk-chip mk-chip--opt">Iraqi</span><span class="mk-chip mk-chip--opt">Yemeni</span><span class="mk-chip mk-chip--opt">Sudanese</span><span class="mk-chip mk-chip--opt">Libyan</span><span class="mk-chip mk-chip--opt">Tunisian</span><span class="mk-chip mk-chip--opt">Algerian</span><span class="mk-chip mk-chip--opt">Moroccan</span><span class="mk-chip mk-chip--opt">Mauritanian</span><span class="mk-chip mk-chip--opt mk-chip--auto"><i class="mk-ic mk-ic--sparkle"></i>Auto multi-dialect</span>
          </div>
        </div>
        <div class="mk mk-card mk-kb" role="img" aria-label="Services table the AI answers from">
          <div class="mk-card__head"><div class="mk-card__title"><i class="mk-ic mk-ic--book"></i>Services</div><span class="mk-chip mk-chip--indigo"><i class="mk-ic mk-ic--table"></i>From CSV</span></div>
          <table class="mk-table">
            <thead><tr><th>Service</th><th>Duration</th><th class="mk-hide-sm">Notes</th></tr></thead>
            <tbody>
              <tr><td>Teeth whitening</td><td class="mk-num">60 min</td><td class="mk-hide-sm">Follow-up visit included</td></tr>
              <tr><td>Check-up and cleaning</td><td class="mk-num">30 min</td><td class="mk-hide-sm">Every 6 months</td></tr>
              <tr><td>Braces consultation</td><td class="mk-num">20 min</td><td class="mk-hide-sm">Thursdays only</td></tr>
            </tbody>
          </table>
          <div class="mk-kb__ask"><i class="mk-ic mk-ic--sparkle"></i><span>Answered from this table: “Whitening takes about an hour, and a follow-up visit is included.”</span></div>
        </div>
      </div>
    </article>

    <!-- 5 · you stay in control -->
    <article class="hm-pillar">
      <div class="hm-pillar__copy">
        <span class="hm-num">05</span>
        <h3>You stay in control, even on the go</h3>
        <p>Every channel in one inbox, and you take over any conversation in one tap from your phone. Reply yourself, then hand it back to the AI to carry on.</p>
        <p class="hm-how">How we do it</p>
        <ul class="hm-proof">
          <li><i class="mk-ic mk-ic--check"></i><span>One inbox for every channel, with private notes for your team only</span></li>
          <li><i class="mk-ic mk-ic--check"></i><span>Turn the AI on or off for any conversation, from the mobile app</span></li>
          <li><i class="mk-ic mk-ic--check"></i><span>Roz answers your questions about your team's WhatsApp chats and groups, and sends the reports you schedule, through Claude or ChatGPT</span></li>
        </ul>
        <a class="hm-link" href="/how-it-works#channels">See the inbox<i class="mk-ic mk-ic--arrow"></i></a>
      </div>
      <div class="hm-stage">
        <div class="mk mk-phone" role="img" aria-label="A team member took over the chat from their phone and can hand it back to the AI in one tap">
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
      </div>
    </article>
  </div>
</section>

<!-- ══ MEET YOUR AI TEAM ══ -->
<section class="hm-team-sec" id="team" aria-labelledby="hm-team-title">
  <div class="container">
    <div class="hm-head hm-head--center">
      <p class="hm-eyebrow">Your new team</p>
      <h2 class="hm-h2" id="hm-team-title">Meet Aaref, Adnan and Roz</h2>
      <p class="hm-sub">Each one owns one part of the customer journey: Aaref brings the customer, Adnan keeps the customer, and Roz shows you your team's side. Start with the one you need most, or hire all three.</p>
    </div>
    <div class="hm-emps">
      <a class="hm-emp" href="/sol-sales-agent">
        <div class="mk mk-emp mk-emp--aaref">
          <img class="mk-emp__img hm-emp__portrait" src="/media/img/portraits/aaref-hero.webp" alt="Aaref, the AI sales employee" width="448" height="640" loading="lazy">
          <div class="mk-emp__name">Aaref</div>
          <span class="mk-emp__role">Sales</span>
          <p class="hm-emp__tag">Answers every lead in seconds and follows up until it turns into a sale</p>
          <ul class="mk-emp__list">
            <li><i class="mk-ic mk-ic--check"></i><span>Every inquiry answered, day and night, in your customer's dialect</span></li>
            <li><i class="mk-ic mk-ic--check"></i><span>Qualifies and follows up until the customer decides</span></li>
            <li><i class="mk-ic mk-ic--check"></i><span>Closes the next step: a booking, a registration, an order or a request to your team</span></li>
          </ul>
        </div>
        <span class="hm-emp__go">Meet Aaref<i class="mk-ic mk-ic--arrow"></i></span>
      </a>
      <a class="hm-emp" href="/sol-customer-service">
        <div class="mk mk-emp mk-emp--adnan">
          <img class="mk-emp__img hm-emp__portrait" src="/media/img/portraits/adnan-hero.webp" alt="Adnan, the AI customer service and success employee" width="448" height="640" loading="lazy">
          <div class="mk-emp__name">Adnan</div>
          <span class="mk-emp__role">Customer service &amp; success</span>
          <p class="hm-emp__tag">Instant answers, routine requests handled, every new customer set up to succeed</p>
          <ul class="mk-emp__list">
            <li><i class="mk-ic mk-ic--check"></i><span>Answers from your own information: schedules, prices, policies</span></li>
            <li><i class="mk-ic mk-ic--check"></i><span>Handles routine requests by your policy, any hour</span></li>
            <li><i class="mk-ic mk-ic--check"></i><span>Hands difficult cases to your team with full context</span></li>
          </ul>
        </div>
        <span class="hm-emp__go">Meet Adnan<i class="mk-ic mk-ic--arrow"></i></span>
      </a>
      <a class="hm-emp" href="/sol-operations">
        <div class="mk mk-emp mk-emp--roz">
          <img class="mk-emp__img hm-emp__portrait" src="/media/img/portraits/roz-hero.webp" alt="Roz, the AI quality control employee" width="448" height="640" loading="lazy">
          <div class="mk-emp__name">Roz</div>
          <span class="mk-emp__role">Quality control</span>
          <p class="hm-emp__tag">Ask her anything in Claude or ChatGPT; reports on your schedule; ready the same day</p>
          <ul class="mk-emp__list">
            <li><i class="mk-ic mk-ic--check"></i><span>Covers the one-to-one chats and groups on your company WhatsApp numbers</span></li>
            <li><i class="mk-ic mk-ic--check"></i><span>Shows who waited, what stalled and how your team can serve better</span></li>
            <li><i class="mk-ic mk-ic--check"></i><span>One QR scan per number: no setup, no build</span></li>
          </ul>
        </div>
        <span class="hm-emp__go">Meet Roz<i class="mk-ic mk-ic--arrow"></i></span>
      </a>
    </div>
    <a class="hm-genu" href="/who-is-genu">
      <img src="/media/img/genu.svg" alt="" width="64" height="70" loading="lazy">
      <span><b>And GENU?</b> That's your guide: the friendly robot who introduces your team and walks with you step by step.</span>
      <span class="hm-genu__go">Who is GENU?<i class="mk-ic mk-ic--arrow"></i></span>
    </a>
  </div>
</section>

<!-- ══ HOW IT WORKS ══ -->
<section class="hm-steps-sec" id="how" aria-labelledby="hm-how-title">
  <div class="container hm-steps-sec__in">
    <div class="hm-steps-copy">
      <p class="hm-eyebrow">How we hire them for you</p>
      <h2 class="hm-h2" id="hm-how-title">Built with you, not set up alone</h2>
      <p class="hm-sub">GenuDo is not software you set up alone. We work with your team, learn how your business sells and serves, and build Aaref and Adnan around it. Then we stay.</p>
      <ol class="hm-steps">
        <li class="hm-step">
          <span class="hm-step__n">1</span>
          <div><h3>We listen</h3><p>A discovery session on your customers, channels, offers, and where leads and time are lost.</p></div>
        </li>
        <li class="hm-step">
          <span class="hm-step__n">2</span>
          <div><h3>We plan together</h3><p>We agree what each employee does, what stays with your team, and the numbers we track. Build time is agreed in this session.</p></div>
        </li>
        <li class="hm-step">
          <span class="hm-step__n">3</span>
          <div><h3>We build</h3><p>Our automation specialist builds them on your knowledge, your stages and your tools.</p></div>
        </li>
        <li class="hm-step">
          <span class="hm-step__n">4</span>
          <div><h3>We launch</h3><p>We test real scenarios with your team, then switch them on. You approve each step.</p></div>
        </li>
        <li class="hm-step">
          <span class="hm-step__n">5</span>
          <div><h3>We improve</h3><p>Your account manager reviews the results with you every month and keeps them in step with your business.</p></div>
        </li>
      </ol>
      <a class="hm-link" href="/how-it-works#setup">See how we work with you<i class="mk-ic mk-ic--arrow"></i></a>
    </div>
    <div class="hm-stage">
      <div class="mk mk-emp mk-emp--roz hm-roz-path">
        <img class="mk-emp__img" src="/media/img/roz-v2.svg" alt="" width="80" height="87" loading="lazy">
        <div class="mk-emp__name">Roz is ready the same day</div>
        <span class="mk-emp__role">No build and no setup time</span>
        <ol class="mk-emp__list hm-roz-path__list">
          <li><i class="mk-ic mk-ic--user"></i><span>Log in to your GenuDo account</span></li>
          <li><i class="mk-ic mk-ic--qr"></i><span>Scan a QR code from each company WhatsApp number</span></li>
          <li><i class="mk-ic mk-ic--link"></i><span>Chats and groups are linked from that moment</span></li>
          <li><i class="mk-ic mk-ic--sparkle"></i><span>Ask and schedule reports in Claude or ChatGPT, connected to GenuDo</span></li>
          <li><i class="mk-ic mk-ic--grid"></i><span>Build the dashboards your business needs</span></li>
        </ol>
      </div>
    </div>
  </div>
</section>

<!-- ══ INDUSTRIES ══ -->
<section class="hm-ind-sec" aria-labelledby="hm-ind-title">
  <div class="container">
    <div class="hm-head">
      <p class="hm-eyebrow">For your industry</p>
      <h2 class="hm-h2" id="hm-ind-title">Whatever you do, there's an employee for it</h2>
    </div>
    <div class="hm-inds">
      <a class="hm-ind" href="/ind-clinics"><span class="hm-ind__ic"><i class="mk-ic mk-ic--calendar"></i></span><h3>Clinics &amp; healthcare</h3><p>Patients get answers and appointments at any hour, and your front desk is spared the same scheduling and price questions.</p><span class="hm-ind__go">For clinics<i class="mk-ic mk-ic--arrow"></i></span></a>
      <a class="hm-ind" href="/ind-elearning"><span class="hm-ind__ic"><i class="mk-ic mk-ic--book"></i></span><h3>E-learning &amp; academies</h3><p>Every question about courses and fees gets answered, and each student is guided to the right program until they enrol.</p><span class="hm-ind__go">For academies<i class="mk-ic mk-ic--arrow"></i></span></a>
      <a class="hm-ind" href="/ind-fitness"><span class="hm-ind__ic"><i class="mk-ic mk-ic--trophy"></i></span><h3>Gyms &amp; fitness centres</h3><p>Trial classes, bookings and membership questions handled on WhatsApp, so your team stays free for members.</p><span class="hm-ind__go">For gyms<i class="mk-ic mk-ic--arrow"></i></span></a>
      <a class="hm-ind" href="/ind-marketing"><span class="hm-ind__ic"><i class="mk-ic mk-ic--users"></i></span><h3>Marketing agencies</h3><p>Every lead from your clients' campaigns gets an answer right away, so the ad spend turns into qualified customers.</p><span class="hm-ind__go">For agencies<i class="mk-ic mk-ic--arrow"></i></span></a>
      <a class="hm-ind" href="/ind-hospitality"><span class="hm-ind__ic"><i class="mk-ic mk-ic--globe"></i></span><h3>Hospitality &amp; tourism</h3><p>Guests get answers on bookings, prices and details at any hour, in Arabic and English.</p><span class="hm-ind__go">For hotels &amp; travel<i class="mk-ic mk-ic--arrow"></i></span></a>
      <a class="hm-ind" href="/ind-camps-events"><span class="hm-ind__ic"><i class="mk-ic mk-ic--flag"></i></span><h3>Camps &amp; events</h3><p>The registration rush goes smoothly: tickets, schedules and parents' questions, all answered.</p><span class="hm-ind__go">For camps &amp; events<i class="mk-ic mk-ic--arrow"></i></span></a>
      <a class="hm-ind" href="/ind-real-estate"><span class="hm-ind__ic"><i class="mk-ic mk-ic--grid"></i></span><h3>Real estate</h3><p>Every property inquiry answered and followed up to a site visit, and buyers kept informed after the contract.</p><span class="hm-ind__go">For real estate<i class="mk-ic mk-ic--arrow"></i></span></a>
      <a class="hm-ind" href="/ind-ecommerce"><span class="hm-ind__ic"><i class="mk-ic mk-ic--wallet"></i></span><h3>E-commerce &amp; retail</h3><p>Orders taken in chat go straight into your store, and every “where is my order?” gets an answer.</p><span class="hm-ind__go">For stores<i class="mk-ic mk-ic--arrow"></i></span></a>
      <a class="hm-ind" href="/ind-automotive"><span class="hm-ind__ic"><i class="mk-ic mk-ic--route"></i></span><h3>Automotive</h3><p>The first reply wins the test drive, and after-sales questions are answered on time.</p><span class="hm-ind__go">For car dealers<i class="mk-ic mk-ic--arrow"></i></span></a>
    </div>
  </div>
</section>

<!-- ══ THE FILM ══ -->
<section class="hm-film" id="film" aria-labelledby="hm-film-title">
  <div class="container">
    <div class="hm-head hm-head--center">
      <p class="hm-eyebrow">The film</p>
      <h2 class="hm-h2" id="hm-film-title">Meet your new team in 90 seconds</h2>
      <p class="hm-sub">GENU introduces Aaref, Adnan and Roz, and how they work with your team from the first message to the sale.</p>
    </div>
    <div class="hm-film__frame">
      <video src="/media/video/ai-workforce-en.mp4" poster="/media/img/ai-workforce-poster.jpg" controls playsinline preload="none" width="1280" height="720" aria-label="GenuDo film: your AI workforce"></video>
    </div>
  </div>
</section>

<!-- ══ FAQ ══ -->
<section class="hm-faq" id="faq" aria-labelledby="hm-faq-title">
  <div class="container">
    <div class="hm-head hm-head--center">
      <p class="hm-eyebrow">Questions</p>
      <h2 class="hm-h2" id="hm-faq-title">Common questions about GenuDo</h2>
    </div>
    <div class="faq">
      <details class="faq-item"><summary>What is GenuDo?<span class="pm"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></span></summary><p>GenuDo is an AI workforce platform for businesses in Egypt and the Middle East. It gives you AI employees (Aaref, the AI sales employee; Adnan, the AI customer service and success employee; and Roz, the AI quality control employee). Aaref and Adnan answer customers on WhatsApp, Instagram, Messenger and website chat in Arabic dialects and other languages, follow up and keep your records current. Roz is linked to your company WhatsApp with one QR scan and answers your questions about your team’s chats through Claude or ChatGPT. Your team stays in control.</p></details>
      <details class="faq-item"><summary>How do we get started?<span class="pm"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></span></summary><p>For Aaref and Adnan, we start with a planning session: we listen to how you sell and serve, agree what each employee does and the numbers we track, then our automation specialist builds them and your account manager reviews the results with you every month. Build time is agreed in that session. Roz needs no build: log in, scan a QR code from each company WhatsApp number, and she is ready the same day.</p></details>
      <details class="faq-item"><summary>Which channels does it work on?<span class="pm"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></span></summary><p>GenuDo works on WhatsApp, Instagram, Messenger and your website chat. Every conversation from every channel lands in one inbox, and each customer stays one conversation whichever channel they use. The website chat widget takes your brand colours and can collect name, phone and email if you want.</p></details>
      <details class="faq-item"><summary>Does it speak Arabic and local dialects?<span class="pm"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></span></summary><p>Yes. You can choose one of 14 regional Arabic dialects, such as Egyptian, Gulf or Levantine, or turn on automatic multi-dialect so every customer hears their own. It also understands voice notes and images, and replies in English or other languages when the customer writes in them.</p></details>
      <details class="faq-item"><summary>Can I take over a conversation myself?<span class="pm"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></span></summary><p>Yes, at any time and in one tap. Press Take over in the inbox or the mobile app and reply yourself; the AI stops in that chat until you hand it back. You can also leave private notes for your team that the customer never sees.</p></details>
      <details class="faq-item"><summary>What does GenuDo cost?<span class="pm"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></span></summary><p>Every package and price is on the <a href="/pricing">pricing page</a>. Inside the platform you see what every reply costs, and you can set a spending cap per conversation: when a chat reaches it, the AI pauses and hands the chat to your team. That way there are no surprise bills.</p></details>
      <details class="faq-item"><summary>Is my data safe?<span class="pm"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></span></summary><p>Your AI employees answer from the facts you give them, and you decide what goes in and when it changes. Every action they take is logged, API access uses scoped tokens you can revoke at any time, and you can take over any chat. The <a href="/security">security page</a> explains each control.</p></details>
    </div>
  </div>
</section>

<!-- ══ FINAL CTA ══ -->
<section class="hm-final" aria-labelledby="hm-final-title">
  <div class="container">
    <div class="hm-final__card">
      <img class="hm-final__genu" src="/media/img/genu.svg" alt="" width="92" height="100" loading="lazy">
      <h2 class="hm-h2" id="hm-final-title">Ready to put your team to work?</h2>
      <p class="hm-sub">Book a planning session: we'll listen, plan your first employee with you and build it on your channels. Or start free on your own.</p>
      <div class="hm-cta hm-cta--center">
        <a href="/contact" class="btn btn-primary btn-lg">Book a planning session</a>
        <a href="https://app.genudo.ai/auth/register" class="btn btn-ondark btn-lg">Start free</a>
      </div>
      <p class="hm-final__meta">WhatsApp · Instagram · Messenger · Website chat</p>
    </div>
  </div>
</section>

</div>`;
export default html;
