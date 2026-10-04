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
      <p class="hm-lead">GenuDo gives you a team of AI employees that answer your customers the moment they write, follow up with the ones who go quiet and book the meetings, day and night. And you stay in control, right from your phone.</p>
      <div class="hm-cta">
        <a href="/contact" class="btn btn-primary btn-lg">Book a demo</a>
        <a href="https://app.genudo.ai/auth/register" class="btn btn-ghost btn-lg">Start free</a>
      </div>
      <div class="hm-team">
        <span class="hm-team__avs" aria-hidden="true"><img src="/media/img/aaref.svg" alt="" width="40" height="44"><img src="/media/img/adnan.svg" alt="" width="40" height="44"><img src="/media/img/roz.svg" alt="" width="40" height="44"></span>
        <span>Aaref, Adnan and ROZ are ready to start</span>
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
              <div class="mk-meeting__rows"><span><i class="mk-ic mk-ic--check"></i>Added to Google Calendar</span><span><i class="mk-ic mk-ic--check"></i>Confirmation sent on WhatsApp</span></div>
            </div>
          </div>
          <div class="mk-phone__compose">AI is handling this chat. Take over to reply.</div>
        </div>
      </div>
      <div class="hm-float hm-float--a" aria-hidden="true"><img src="/media/img/aaref.svg" alt="" width="34" height="37"><div><b>Aaref answered Mona</b><span>at 2:14 a.m.</span></div></div>
      <div class="hm-float hm-float--b" aria-hidden="true"><span class="hm-float__ic"><i class="mk-ic mk-ic--calendar"></i></span><div><b>New meeting booked</b><span>while you slept</span></div></div>
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
        <p>Qualified leads and booked meetings, not endless chatting. Every opportunity moves from stage to stage until the customer buys, and your AI employee does the work that comes after the conversation too.</p>
        <p class="hm-how">How we do it</p>
        <ul class="hm-proof">
          <li><i class="mk-ic mk-ic--check"></i><span>Stages that move each opportunity forward: interested, booking, won</span></li>
          <li><i class="mk-ic mk-ic--check"></i><span>Looks up free slots, books the meeting and sends the confirmation on WhatsApp</span></li>
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
        <p class="hm-caption">Illustrative data</p>
      </div>
    </article>

    <!-- 3 · predictable, capped cost -->
    <article class="hm-pillar">
      <div class="hm-pillar__copy">
        <span class="hm-num">03</span>
        <h3>AI cost you can predict, with a cap</h3>
        <p>You know what every reply and every outcome costs. Each message goes to the most affordable model that can answer it well, and you set a spending cap on every conversation… if it's reached, the AI steps back and leaves it to your team.</p>
        <p class="hm-how">How we do it</p>
        <ul class="hm-proof">
          <li><i class="mk-ic mk-ic--check"></i><span>Simple messages go to cheaper models; only the hard ones get the most capable model</span></li>
          <li><i class="mk-ic mk-ic--check"></i><span>A spend cap per conversation: at the cap, the AI pauses and alerts your team</span></li>
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
        <div class="mk mk-card" role="img" aria-label="Spend cap per conversation: at the cap the AI pauses and alerts the team">
          <div class="mk-card__head"><div class="mk-card__title"><i class="mk-ic mk-ic--wallet"></i>Spend cap per conversation</div><span class="mk-toggle is-on"></span></div>
          <div class="mk-cap__value"><b><bdi>$0.32</bdi></b> of <bdi>$0.50</bdi> used</div>
          <div class="mk-bar mk-bar--amber"><i style="--w:64%"></i></div>
          <p class="mk-cap__rule"><i class="mk-ic mk-ic--alert"></i><span>When the cap is reached: pause the AI in this chat and alert the team.</span></p>
        </div>
        <p class="hm-caption">Illustrative data</p>
      </div>
    </article>

    <!-- 4 · speaks like your customers -->
    <article class="hm-pillar hm-pillar--flip">
      <div class="hm-pillar__copy">
        <span class="hm-num">04</span>
        <h3>Speaks like your customers, answers from your facts</h3>
        <p>Arabic that sounds local: Egyptian, Gulf, Levantine… 14 regional dialects, or let it pick the dialect for each customer on its own. It understands voice notes and photos too. And every answer comes from your own prices, policies and schedules.</p>
        <p class="hm-how">How we do it</p>
        <ul class="hm-proof">
          <li><i class="mk-ic mk-ic--check"></i><span>14 Arabic dialects, or automatic multi-dialect</span></li>
          <li><i class="mk-ic mk-ic--check"></i><span>Listens to voice notes and understands the photos customers send</span></li>
          <li><i class="mk-ic mk-ic--check"></i><span>Answers from the prices, FAQs, policies and schedules you upload</span></li>
        </ul>
        <a class="hm-link" href="/how-it-works#knowledge">See how it learns your business<i class="mk-ic mk-ic--arrow"></i></a>
      </div>
      <div class="hm-stage hm-stage--stack">
        <div class="mk mk-card" role="img" aria-label="Choose the Arabic dialect your AI employee speaks">
          <div class="mk-card__head"><div class="mk-card__title"><i class="mk-ic mk-ic--globe"></i>Agent dialect</div></div>
          <div class="mk-chips">
            <span class="mk-chip mk-chip--opt is-on"><i class="mk-ic mk-ic--check"></i>Egyptian</span><span class="mk-chip mk-chip--opt">Saudi / Gulf</span><span class="mk-chip mk-chip--opt">Jordanian</span><span class="mk-chip mk-chip--opt">Palestinian</span><span class="mk-chip mk-chip--opt">Lebanese</span><span class="mk-chip mk-chip--opt">Syrian</span><span class="mk-chip mk-chip--opt">Iraqi</span><span class="mk-chip mk-chip--opt">Yemeni</span><span class="mk-chip mk-chip--opt">Sudanese</span><span class="mk-chip mk-chip--opt">Libyan</span><span class="mk-chip mk-chip--opt">Tunisian</span><span class="mk-chip mk-chip--opt">Algerian</span><span class="mk-chip mk-chip--opt">Moroccan</span><span class="mk-chip mk-chip--opt">Mauritanian</span><span class="mk-chip mk-chip--opt mk-chip--auto"><i class="mk-ic mk-ic--sparkle"></i>Auto multi-dialect</span>
          </div>
        </div>
        <div class="mk mk-card mk-kb" role="img" aria-label="Price list the AI answers from">
          <div class="mk-card__head"><div class="mk-card__title"><i class="mk-ic mk-ic--book"></i>Price list</div><span class="mk-chip mk-chip--indigo"><i class="mk-ic mk-ic--table"></i>From CSV</span></div>
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
          <li><i class="mk-ic mk-ic--check"></i><span>ROZ reviews your team's chats on company WhatsApp lines and flags what needs you</span></li>
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
      <h2 class="hm-h2" id="hm-team-title">Meet Aaref, Adnan and ROZ</h2>
      <p class="hm-sub">Each employee specialises in one job, and you can hire as many as you need. Start with the one you're missing.</p>
    </div>
    <div class="hm-emps">
      <a class="hm-emp" href="/sol-sales-agent">
        <div class="mk mk-emp mk-emp--aaref">
          <img class="mk-emp__img" src="/media/img/aaref.svg" alt="" width="80" height="87" loading="lazy">
          <div class="mk-emp__name">Aaref</div>
          <span class="mk-emp__role">Sales</span>
          <ul class="mk-emp__list">
            <li><i class="mk-ic mk-ic--check"></i><span>Answers every inquiry, day and night</span></li>
            <li><i class="mk-ic mk-ic--check"></i><span>Qualifies leads and follows up with the quiet ones</span></li>
            <li><i class="mk-ic mk-ic--check"></i><span>Helps book meetings straight into your calendar</span></li>
          </ul>
        </div>
        <span class="hm-emp__go">Meet Aaref<i class="mk-ic mk-ic--arrow"></i></span>
      </a>
      <a class="hm-emp" href="/sol-customer-service">
        <div class="mk mk-emp mk-emp--adnan">
          <img class="mk-emp__img" src="/media/img/adnan.svg" alt="" width="80" height="87" loading="lazy">
          <div class="mk-emp__name">Adnan</div>
          <span class="mk-emp__role">Support &amp; success</span>
          <ul class="mk-emp__list">
            <li><i class="mk-ic mk-ic--check"></i><span>Answers from your own facts: prices, policies, schedules</span></li>
            <li><i class="mk-ic mk-ic--check"></i><span>Routes tricky issues to the right person on your team</span></li>
            <li><i class="mk-ic mk-ic--check"></i><span>Works with Zoho Desk and Zendesk</span></li>
          </ul>
        </div>
        <span class="hm-emp__go">Meet Adnan<i class="mk-ic mk-ic--arrow"></i></span>
      </a>
      <a class="hm-emp" href="/sol-operations">
        <div class="mk mk-emp mk-emp--roz">
          <img class="mk-emp__img" src="/media/img/roz.svg" alt="" width="80" height="87" loading="lazy">
          <div class="mk-emp__name">ROZ</div>
          <span class="mk-emp__role">Quality control</span>
          <ul class="mk-emp__list">
            <li><i class="mk-ic mk-ic--check"></i><span>Reviews your team's chats on company WhatsApp lines</span></li>
            <li><i class="mk-ic mk-ic--check"></i><span>Flags slow replies, stalled deals and missed opportunities</span></li>
            <li><i class="mk-ic mk-ic--check"></i><span>Turns voice notes into text, and connects by scanning a QR code from your phone</span></li>
          </ul>
        </div>
        <span class="hm-emp__go">Meet ROZ<i class="mk-ic mk-ic--arrow"></i></span>
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
      <p class="hm-eyebrow">How you start</p>
      <h2 class="hm-h2" id="hm-how-title">From idea to a working employee, in 3 steps</h2>
      <ol class="hm-steps">
        <li class="hm-step">
          <span class="hm-step__n">1</span>
          <div><h3>Answer a short business brief</h3><p>A few quick questions about your business, typed or spoken, so your employee sounds like you and knows what you sell.</p></div>
        </li>
        <li class="hm-step">
          <span class="hm-step__n">2</span>
          <div><h3>Connect your channel and knowledge</h3><p>Link WhatsApp, Instagram, Messenger or your website chat, and upload your prices and FAQs, or add your website link.</p></div>
        </li>
        <li class="hm-step">
          <span class="hm-step__n">3</span>
          <div><h3>Go live and watch the results</h3><p>Your employee starts answering, following up and booking, and the dashboard shows every stage: who converted, and what it cost you.</p></div>
        </li>
      </ol>
      <a class="hm-link" href="/how-it-works">Take the full tour<i class="mk-ic mk-ic--arrow"></i></a>
    </div>
    <div class="hm-stage">
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
      <a class="hm-ind" href="/ind-marketing"><span class="hm-ind__ic"><i class="mk-ic mk-ic--users"></i></span><h3>Marketing agencies</h3><p>Every lead from your clients' campaigns gets an answer right away, so the ad spend turns into conversations and meetings.</p><span class="hm-ind__go">For agencies<i class="mk-ic mk-ic--arrow"></i></span></a>
      <a class="hm-ind" href="/ind-hospitality"><span class="hm-ind__ic"><i class="mk-ic mk-ic--globe"></i></span><h3>Hospitality &amp; tourism</h3><p>Guests get answers on bookings, prices and details at any hour, in Arabic and English.</p><span class="hm-ind__go">For hotels &amp; travel<i class="mk-ic mk-ic--arrow"></i></span></a>
      <a class="hm-ind" href="/ind-camps-events"><span class="hm-ind__ic"><i class="mk-ic mk-ic--flag"></i></span><h3>Camps &amp; events</h3><p>The registration rush goes smoothly: tickets, schedules and parents' questions, all answered.</p><span class="hm-ind__go">For camps &amp; events<i class="mk-ic mk-ic--arrow"></i></span></a>
    </div>
  </div>
</section>

<!-- ══ THE FILM ══ -->
<section class="hm-film" id="film" aria-labelledby="hm-film-title">
  <div class="container">
    <div class="hm-head hm-head--center">
      <p class="hm-eyebrow">The film</p>
      <h2 class="hm-h2" id="hm-film-title">Meet your new team in 90 seconds</h2>
      <p class="hm-sub">GENU introduces Aaref, Adnan and ROZ, and how they work with your team from the first message to the sale.</p>
    </div>
    <div class="hm-film__frame">
      <video src="/media/video/ai-workforce-en.mp4" poster="/media/img/ai-workforce-poster.jpg" controls playsinline preload="none" width="1280" height="720" aria-label="GenuDo film: your AI workforce"></video>
    </div>
  </div>
</section>

<!-- ══ FINAL CTA ══ -->
<section class="hm-final" aria-labelledby="hm-final-title">
  <div class="container">
    <div class="hm-final__card">
      <img class="hm-final__genu" src="/media/img/genu.svg" alt="" width="92" height="100" loading="lazy">
      <h2 class="hm-h2" id="hm-final-title">Ready to put your team to work?</h2>
      <p class="hm-sub">Book a demo and we'll build your first employee with you, on your channels. Or start free on your own.</p>
      <div class="hm-cta hm-cta--center">
        <a href="/contact" class="btn btn-primary btn-lg">Book a demo</a>
        <a href="https://app.genudo.ai/auth/register" class="btn btn-ondark btn-lg">Start free</a>
      </div>
      <p class="hm-final__meta">WhatsApp · Instagram · Messenger · Website chat</p>
    </div>
  </div>
</section>

</div>`;
export default html;
