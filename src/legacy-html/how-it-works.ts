// /how-it-works — value-led rewrite (EN). See docs/website/BUILD-BRIEF.md.
// Same sections and claims as how-it-works.ar-EG.ts (the primary page). Mockups: src/app/[locale]/kit-preview/kit-snippets.ts.
const html = `<div class="pg-how-it-works">

<section class="hiw-hero">
  <div class="container hiw-hero-grid">
    <div class="hiw-hero-copy">
      <span class="hiw-kicker">How GenuDo works</span>
      <h1 class="display">From the first message to the sale, <span class="grad">and you see every step.</span></h1>
      <p class="lead">GenuDo gives you AI employees that answer your customers right away, move every conversation to a decision and follow up with the ones who went quiet. You know what every reply costs, and you can take over any chat at any time.</p>
      <div class="hiw-cta">
        <a href="/contact" class="btn btn-primary btn-lg">Book a planning session</a>
        <a href="https://app.genudo.ai/auth/register" class="btn btn-ghost btn-lg">Start free</a>
      </div>
      <ul class="hiw-pills">
        <li>Answers day and night</li>
        <li>Speaks your customers' dialect</li>
        <li>Cost with a cap</li>
      </ul>
    </div>
    <figure class="hiw-film">
      <video src="/media/video/ai-workforce-en.mp4" poster="/media/img/ai-workforce-poster.jpg" controls playsinline preload="none" aria-label="Film: build your AI workforce with GenuDo"></video>
      <figcaption>The full tour in 90 seconds: meet Aaref, Adnan and Roz</figcaption>
    </figure>
  </div>
</section>

<nav class="hiw-index" aria-label="Page sections">
  <div class="container">
    <ul class="hiw-index-in">
      <li><a href="#employees"><b>01</b>Employees</a></li>
      <li><a href="#pipelines"><b>02</b>Stages</a></li>
      <li><a href="#followups"><b>03</b>Follow-ups</a></li>
      <li><a href="#knowledge"><b>04</b>Your facts</a></li>
      <li><a href="#models"><b>05</b>Cost</a></li>
      <li><a href="#channels"><b>06</b>Channels</a></li>
      <li><a href="#analytics"><b>07</b>Numbers</a></li>
      <li><a href="#setup"><b>08</b>How we hire</a></li>
    </ul>
  </div>
</nav>

<!-- 01 · Employees -->
<section id="employees" class="hiw-sec">
  <div class="container hiw-stack">
    <div class="hiw-stack-top">
      <div class="hiw-copy">
        <span class="hiw-kicker"><b>01</b> Employees</span>
        <h2>Hire the employee you're missing, not another tool to learn.</h2>
        <p class="lead">Each employee has one clear job: Aaref sells, Adnan serves and keeps your customers, and Roz shows you how your own team is doing on WhatsApp.</p>
        <p class="hiw-how"><b>How?</b> Aaref and Adnan each work inside a pipeline with its own channels, stages, knowledge and follow-ups. Roz works differently: she is linked to your company WhatsApp numbers and answers you in Claude or ChatGPT.</p>
      </div>
      <div class="hiw-copy">
        <ul class="hiw-proof">
          <li><span><b>Aaref, sales:</b> answers every lead in seconds, qualifies, follows up until the customer decides, and closes the next step: a booking, a registration, an order or a request to your team.</span></li>
          <li><span><b>Adnan, customer service &amp; success:</b> answers from your own information, handles routine requests by your policy, sets every new customer up to succeed, and hands difficult cases to your team with full context.</span></li>
          <li><span><b>Roz, quality control:</b> covers the one-to-one chats and groups on your company WhatsApp numbers. Ask her anything in Claude or ChatGPT, and get reports on your schedule.</span></li>
          <li><span>More than one number? One Roz covers every number and group you link, with one QR scan per number. And you can hire an Aaref for each branch.</span></li>
        </ul>
        <div class="hiw-links">
          <a href="/sol-sales-agent">Meet Aaref →</a>
          <a href="/sol-customer-service">Meet Adnan →</a>
          <a href="/sol-operations">Meet Roz →</a>
        </div>
      </div>
    </div>
    <div class="hiw-visual">
      <div class="hiw-emps">
        <div class="mk mk-emp mk-emp--aaref">
          <img class="mk-emp__img" src="/media/img/aaref.svg" alt="Aaref, the AI sales employee" width="80" height="87">
          <div class="mk-emp__name">Aaref</div>
          <span class="mk-emp__role">Sales</span>
          <p class="hiw-emp__tag">Answers every lead in seconds and follows up until it turns into a sale</p>
          <ul class="mk-emp__list">
            <li><i class="mk-ic mk-ic--check"></i><span>Every inquiry answered, day and night, in your customer's dialect</span></li>
            <li><i class="mk-ic mk-ic--check"></i><span>Qualifies and follows up until the customer decides</span></li>
            <li><i class="mk-ic mk-ic--check"></i><span>Closes the next step: a booking, a registration, an order or a request to your team</span></li>
          </ul>
        </div>
        <div class="mk mk-emp mk-emp--adnan">
          <img class="mk-emp__img" src="/media/img/adnan.svg" alt="Adnan, the AI customer service and success employee" width="80" height="87">
          <div class="mk-emp__name">Adnan</div>
          <span class="mk-emp__role">Customer service &amp; success</span>
          <p class="hiw-emp__tag">Instant answers, routine requests handled, every new customer set up to succeed</p>
          <ul class="mk-emp__list">
            <li><i class="mk-ic mk-ic--check"></i><span>Answers from your own information: schedules, prices, policies</span></li>
            <li><i class="mk-ic mk-ic--check"></i><span>Handles routine requests by your policy, any hour</span></li>
            <li><i class="mk-ic mk-ic--check"></i><span>Hands difficult cases to your team with full context</span></li>
          </ul>
        </div>
        <div class="mk mk-emp mk-emp--roz">
          <img class="mk-emp__img" src="/media/img/roz-v2.svg" alt="Roz, the AI quality control employee" width="80" height="87">
          <div class="mk-emp__name">Roz</div>
          <span class="mk-emp__role">Quality control</span>
          <p class="hiw-emp__tag">Ask her anything in Claude or ChatGPT; reports on your schedule; ready the same day</p>
          <ul class="mk-emp__list">
            <li><i class="mk-ic mk-ic--check"></i><span>Covers the one-to-one chats and groups on your company WhatsApp numbers</span></li>
            <li><i class="mk-ic mk-ic--check"></i><span>Shows who waited, what stalled and how your team can serve better</span></li>
            <li><i class="mk-ic mk-ic--check"></i><span>One QR scan per number: no setup, no build</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- 02 · Pipelines -->
<section id="pipelines" class="hiw-sec">
  <div class="container hiw-split is-flip">
    <div class="hiw-copy">
      <span class="hiw-kicker"><b>02</b> Stages</span>
      <h2>Every conversation moves forward, until it reaches a decision.</h2>
      <p class="lead">Instead of customers getting lost in the chat, every lead moves from one stage to the next until they buy or say no, and you can see where each one is at any moment.</p>
      <p class="hiw-how"><b>How?</b> You describe each stage in plain words: when a customer enters it, and what the employee does there. Aaref and Adnan read every reply and move the opportunity to the right stage by the stage rules you set. Roz never moves customers between stages; you can, from Claude or ChatGPT.</p>
      <ul class="hiw-proof">
        <li><span>When the customer is ready, it closes the next step: books the visit, registers them or takes the order, and confirms on WhatsApp.</span></li>
        <li><span>It updates your CRM and tells your team the moment a customer is ready.</span></li>
        <li><span>It collects what matters from the chat: name, the service they want, the time that suits them.</span></li>
        <li><span>Try it before it goes live: Test AI shows you every reply without sending anything to a customer.</span></li>
      </ul>
    </div>
    <div class="hiw-visual">
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
      <p class="hiw-note">Invented example · swipe the board to see every stage</p>
    </div>
  </div>
</section>

<!-- 03 · Follow-ups -->
<section id="followups" class="hiw-sec">
  <div class="container hiw-split">
    <div class="hiw-copy">
      <span class="hiw-kicker"><b>03</b> Follow-ups</span>
      <h2>No reply? The follow-up never forgets.</h2>
      <p class="lead">Many customers don't say no, they just go quiet. GenuDo follows up with each one on schedule, with a different message every time, so no lead slips away.</p>
      <p class="hiw-how"><b>How?</b> Every stage has its own follow-up sequence, from minutes to months. You write the follow-up instructions and choose what goes with them, like a video or an offer.</p>
      <ul class="hiw-proof">
        <li><span>A message after 3 hours, another after a day with a video. You set the timing.</span></li>
        <li><span>After the last follow-up with no reply, the opportunity moves to the stage you choose, so your board stays focused on the leads worth chasing.</span></li>
        <li><span>Follow-up status at a glance: sent, scheduled and overdue.</span></li>
      </ul>
    </div>
    <div class="hiw-visual">
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
      <p class="hiw-note">Invented example</p>
      <figure class="hiw-film">
        <video src="/media/video/followups-en.mp4" poster="/media/video/followups-en.jpg" controls playsinline preload="none" aria-label="Short film: the follow-up that never forgets"></video>
        <figcaption>Short film: how follow-ups bring a quiet lead back</figcaption>
      </figure>
    </div>
  </div>
</section>

<!-- 04 · Knowledge -->
<section id="knowledge" class="hiw-sec">
  <div class="container hiw-split is-flip">
    <div class="hiw-copy">
      <span class="hiw-kicker"><b>04</b> Your facts</span>
      <h2>Answers from your own facts, in your customers' dialect.</h2>
      <p class="lead">Your employee doesn't make up prices or policies. It answers from the prices, FAQs and schedules you give it, and speaks Egyptian, Gulf or Levantine Arabic to match each customer.</p>
      <p class="hiw-how"><b>How?</b> Upload an Excel or CSV file, or build the table yourself, and tell the employee when to look in it. Change a price once, and every employee connected to that table answers with the new one.</p>
      <ul class="hiw-proof">
        <li><span>14 regional Arabic dialects, or automatic multi-dialect so every customer hears their own.</span></li>
        <li><span>Understands voice notes and images, not just text.</span></li>
        <li><span>You decide which tables each employee answers from.</span></li>
      </ul>
    </div>
    <div class="hiw-visual">
      <div class="mk mk-card mk-kb" role="img" aria-label="Services table the AI employee answers from">
        <div class="mk-card__head"><div class="mk-card__title"><i class="mk-ic mk-ic--book"></i>Services</div><span class="mk-chip mk-chip--indigo"><i class="mk-ic mk-ic--table"></i>From CSV · 24 rows</span></div>
        <table class="mk-table">
          <thead><tr><th>Service</th><th>Duration</th><th class="mk-hide-sm">Days</th><th class="mk-hide-sm">Notes</th></tr></thead>
          <tbody>
            <tr><td>Teeth whitening</td><td>60 min</td><td class="mk-hide-sm">Sat to Thu</td><td class="mk-hide-sm">Follow-up visit included</td></tr>
            <tr><td>Check-up and cleaning</td><td>30 min</td><td class="mk-hide-sm">Every day</td><td class="mk-hide-sm">Every 6 months</td></tr>
            <tr><td>Braces consultation</td><td>20 min</td><td class="mk-hide-sm">Thursdays</td><td class="mk-hide-sm">With the orthodontist</td></tr>
          </tbody>
        </table>
        <div class="mk-kb__ask"><i class="mk-ic mk-ic--sparkle"></i><span>Answered from this table: “Whitening takes about an hour, and we have slots from Saturday to Thursday.”</span></div>
      </div>
      <div class="mk mk-card" role="img" aria-label="Choose the Arabic dialect your AI employee speaks">
        <div class="mk-card__head"><div class="mk-card__title"><i class="mk-ic mk-ic--globe"></i>Employee dialect</div></div>
        <div class="mk-chips">
          <span class="mk-chip mk-chip--opt is-on"><i class="mk-ic mk-ic--check"></i>Egyptian</span><span class="mk-chip mk-chip--opt">Saudi / Gulf</span><span class="mk-chip mk-chip--opt">Jordanian</span><span class="mk-chip mk-chip--opt">Palestinian</span><span class="mk-chip mk-chip--opt">Lebanese</span><span class="mk-chip mk-chip--opt">Syrian</span><span class="mk-chip mk-chip--opt">Iraqi</span><span class="mk-chip mk-chip--opt">Yemeni</span><span class="mk-chip mk-chip--opt">Sudanese</span><span class="mk-chip mk-chip--opt">Libyan</span><span class="mk-chip mk-chip--opt">Tunisian</span><span class="mk-chip mk-chip--opt">Algerian</span><span class="mk-chip mk-chip--opt">Moroccan</span><span class="mk-chip mk-chip--opt">Mauritanian</span><span class="mk-chip mk-chip--opt mk-chip--auto"><i class="mk-ic mk-ic--sparkle"></i>Auto multi-dialect</span>
        </div>
      </div>
      <p class="hiw-note">Invented example clinic</p>
    </div>
  </div>
</section>

<!-- 05 · Models / cost -->
<section id="models" class="hiw-sec">
  <div class="container hiw-split">
    <div class="hiw-copy">
      <span class="hiw-kicker"><b>05</b> Cost</span>
      <h2>Predictable AI cost, with a cap.</h2>
      <p class="lead">No surprise bills. Simple messages go to a cheaper model, hard ones go to a stronger model, and you set a spending cap for every conversation.</p>
      <p class="hiw-how"><b>How?</b> Smart routing reads each message and sends it to the cheapest model that can answer it well. If a conversation reaches the limit you set, the AI pauses in that chat and hands it to your team.</p>
      <ul class="hiw-proof">
        <li><span>The cost of every reply sits in your inbox, next to the response time and the confidence score.</span></li>
        <li><span>A spend cap per conversation: when it's reached, the chat goes to your team instead of costing more.</span></li>
        <li><span>Prefer one fixed model? You can. Or let smart routing choose for each message.</span></li>
      </ul>
      <div class="hiw-links"><a href="/pricing">See plans →</a></div>
    </div>
    <div class="hiw-visual">
      <div class="mk mk-card" role="img" aria-label="Smart routing by message difficulty">
        <div class="mk-card__head"><div class="mk-card__title"><i class="mk-ic mk-ic--route"></i>Smart routing</div><span class="mk-chip mk-chip--green"><i class="mk-dot"></i>On</span></div>
        <div class="mk-tiers">
          <div class="mk-tier"><div class="mk-tier__head"><span class="mk-tier__name">Simple</span></div><p class="mk-tier__eg">“What time do you open?”</p><div class="mk-tier__model"><i class="mk-ic mk-ic--bolt"></i>Fast model</div><div class="mk-bar"><i style="--w:68%"></i></div><span class="mk-tier__share">68% of messages</span></div>
          <div class="mk-tier mk-tier--moderate"><div class="mk-tier__head"><span class="mk-tier__name">Moderate</span></div><p class="mk-tier__eg">“Compare your two packages for me.”</p><div class="mk-tier__model"><i class="mk-ic mk-ic--sparkle"></i>Balanced model</div><div class="mk-bar"><i style="--w:26%"></i></div><span class="mk-tier__share">26% of messages</span></div>
          <div class="mk-tier mk-tier--complex"><div class="mk-tier__head"><span class="mk-tier__name">Complex</span></div><p class="mk-tier__eg">“Plan a 3-visit treatment around my travel dates.”</p><div class="mk-tier__model"><i class="mk-ic mk-ic--target"></i>Advanced model</div><div class="mk-bar"><i style="--w:6%"></i></div><span class="mk-tier__share">6% of messages</span></div>
        </div>
      </div>
      <div class="mk mk-card" role="img" aria-label="Spend cap per conversation">
        <div class="mk-card__head"><div class="mk-card__title"><i class="mk-ic mk-ic--wallet"></i>Spend cap per conversation</div><span class="mk-toggle is-on"></span></div>
        <div class="mk-cap__value"><b><bdi>$0.32</bdi></b> of <bdi>$0.50</bdi> used</div>
        <div class="mk-bar mk-bar--amber"><i style="--w:64%"></i></div>
        <p class="mk-cap__rule"><i class="mk-ic mk-ic--alert"></i><span>When the cap is reached: pause the AI in this chat and hand it to the team.</span></p>
      </div>
      <p class="hiw-note">Invented example · plans are on the pricing page</p>
    </div>
  </div>
</section>

<!-- 06 · Channels -->
<section id="channels" class="hiw-sec">
  <div class="container hiw-stack">
    <div class="hiw-stack-top">
      <div class="hiw-copy">
        <span class="hiw-kicker"><b>06</b> Channels</span>
        <h2>Every channel in one inbox, and any chat is yours in one tap.</h2>
        <p class="lead">WhatsApp, Instagram, Messenger and your website chat in one place. Your employee answers right away, and you take over whenever you like, even from your phone.</p>
        <p class="hiw-how"><b>How?</b> Tap Take over and the AI pauses in that chat only. Finish talking to the customer, then hand it back to the AI in one tap.</p>
      </div>
      <div class="hiw-copy">
        <ul class="hiw-proof">
          <li><span>Each customer is one conversation, whichever channel they used.</span></li>
          <li><span>Private notes for your team inside the chat; the customer never sees them.</span></li>
          <li><span>A mobile app: reply from outside the office, then hand the chat back to the AI.</span></li>
          <li><span>A chat widget for your website in your colours, which can collect name, phone and email if you want.</span></li>
        </ul>
        <div class="hiw-links"><a href="/integrations">See integrations →</a></div>
      </div>
    </div>
    <div class="hiw-visual">
      <div class="hiw-pair">
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
                <div class="mk-reply-meta"><span class="mk-chip"><i class="mk-ic mk-ic--dollar"></i><bdi>$0.01</bdi></span><span class="mk-chip"><i class="mk-ic mk-ic--clock"></i>26s</span><span class="mk-chip mk-chip--green"><i class="mk-ic mk-ic--target"></i>Confidence 92%</span></div>
                <div class="mk-note"><b><i class="mk-ic mk-ic--note"></i>Private note · Dina</b>Returning patient, offer the family plan.</div>
              </div>
            </div>
          </div>
        </div>
        <div class="mk mk-phone" role="img" aria-label="A team member has taken over the chat from the phone">
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
      <p class="hiw-note">Invented example</p>
    </div>
  </div>
</section>

<!-- 07 · Analytics -->
<section id="analytics" class="hiw-sec">
  <div class="container hiw-split is-flip">
    <div class="hiw-copy">
      <span class="hiw-kicker"><b>07</b> Numbers</span>
      <h2>See what every outcome costs.</h2>
      <p class="lead">The dashboard shows you every stage: who converted, who stopped where, and what it cost. So you know where to spend and what to fix first.</p>
      <p class="hiw-how"><b>How?</b> Every message and every booking is recorded on its own and mapped to your stages. Cost is counted per stage and per won opportunity, not as one big bill.</p>
      <ul class="hiw-proof">
        <li><span>The pipeline funnel shows exactly where customers drop off.</span></li>
        <li><span>Cost per conversion, cost by stage and cost over time, for the last 7, 30 or 90 days.</span></li>
        <li><span>Ask Claude or ChatGPT “Where are we losing customers?” and get an answer from your GenuDo numbers.</span></li>
        <li><span>Roz answers your questions about your team's WhatsApp chats and groups, and sends the reports you schedule, through Claude or ChatGPT.</span></li>
      </ul>
      <div class="hiw-links"><a href="/api-mcp">Connect Claude and ChatGPT →</a><a href="/sol-operations">Meet Roz →</a></div>
    </div>
    <div class="hiw-visual">
      <div class="mk mk-kpis" role="img" aria-label="Dashboard: opportunities and AI cost">
        <div class="mk-kpi mk-kpi--hero"><span class="mk-kpi__label">Active opportunities</span><span class="mk-kpi__value">870</span><span class="mk-kpi__sub">1,284 opportunities in total</span><span class="mk-kpi__badge">67.8% of total</span></div>
        <div class="mk-kpi"><span class="mk-kpi__ic mk-kpi__ic--green"><i class="mk-ic mk-ic--trophy"></i></span><span class="mk-kpi__label">Opportunities won</span><span class="mk-kpi__value">96</span><span class="mk-kpi__sub">This month</span></div>
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
      <p class="hiw-note">Invented example</p>
    </div>
  </div>
</section>

<!-- 08 · How we hire -->
<section id="setup" class="hiw-sec">
  <div class="container hiw-split">
    <div class="hiw-copy">
      <span class="hiw-kicker"><b>08</b> How we hire</span>
      <h2>Hired with you, not set up alone.</h2>
      <p class="lead">GenuDo is not software you set up alone. We work with your team, learn how your business sells and serves, and build Aaref and Adnan around it. Then we stay.</p>
      <ol class="hiw-steps">
        <li><div><h3>We listen</h3><p>A discovery session on your customers, channels, offers, and where leads and time are lost.</p></div></li>
        <li><div><h3>We plan together</h3><p>We agree what each employee does, what stays with your team, and the numbers we track.</p></div></li>
        <li><div><h3>We build</h3><p>Our automation specialist builds them on your knowledge, your stages and your tools.</p></div></li>
        <li><div><h3>We launch</h3><p>We test real scenarios with your team, then switch them on. You approve each step.</p></div></li>
        <li><div><h3>We improve</h3><p>Your account manager reviews results with you every month and keeps them in step with your business.</p></div></li>
      </ol>
      <p class="hiw-how"><b>Who's with you?</b> Your account manager is your single point of contact: plans with you, reports results and keeps each employee aligned with your goals. Your automation specialist builds and tunes Aaref and Adnan: knowledge, stages, follow-ups and the connections to your tools. Build time is agreed in the planning session.</p>
    </div>
    <div class="hiw-visual">
      <div class="hiw-roz">
        <div class="hiw-roz__head"><img src="/media/img/roz-v2.svg" alt="" width="48" height="52" loading="lazy"><div><span class="hiw-roz__eyebrow">Roz · Quality control</span><h3>Ready the same day</h3></div></div>
        <p class="hiw-roz__lead">No build and no setup time. One Roz covers every company number and group you link.</p>
        <ol class="hiw-steps hiw-steps--roz">
          <li><div><h4>Log in</h4><p>Log in to your GenuDo account.</p></div></li>
          <li><div><h4>Scan the QR code</h4><p>Scan a QR code from each company WhatsApp number.</p></div></li>
          <li><div><h4>Chats and groups linked</h4><p>One-to-one chats and groups are on record from that moment.</p></div></li>
          <li><div><h4>Ask and schedule</h4><p>Ask her anything and schedule your reports in Claude or ChatGPT, connected to GenuDo, and build the dashboards your business needs.</p></div></li>
        </ol>
        <div class="hiw-links"><a href="/sol-operations">Meet Roz →</a></div>
      </div>
    </div>
  </div>
</section>

<!-- 09 · FAQ -->
<section id="faq" class="hiw-sec hiw-faq" aria-labelledby="hiw-faq-title">
  <div class="container">
    <div class="hiw-faq-head">
      <span class="hiw-kicker">Questions</span>
      <h2 id="hiw-faq-title">Questions about how it works</h2>
    </div>
    <div class="faq">
      <details class="faq-item"><summary>How does setup work?<span class="pm"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></span></summary><p>It depends on the employee. Aaref and Adnan are built with you: we listen to how your business sells and serves, plan together what each one does and the numbers we track, and our automation specialist builds them on your knowledge, stages and tools. We test real scenarios with your team before switching them on, and your account manager reviews the results with you every month. Build time is agreed in the planning session. Roz needs no build: log in, scan a QR code from each company WhatsApp number, and ask her questions and schedule reports in Claude or ChatGPT the same day.</p></details>
      <details class="faq-item"><summary>Does Roz reply to customers or move them between stages?<span class="pm"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></span></summary><p>No. Roz never replies to customers, never joins a chat and never moves customers between stages. She answers your questions about your team's WhatsApp chats and groups, sends the reports you schedule and builds dashboards, all through Claude or ChatGPT connected to GenuDo. If you want to move a customer to another stage, you can do it yourself from Claude or ChatGPT. She is a coach, not a spy: use her openly, on company numbers.</p></details>
      <details class="faq-item"><summary>What are a pipeline and a stage, in plain words?<span class="pm"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></span></summary><p>A pipeline is the path a customer takes with one AI employee, from the first message to a decision; in GenuDo, each AI employee is one pipeline. Stages are the steps along that path, such as New lead, Interested, Won or Lost. For each stage you tell the employee when a customer enters it and what to do there, so every conversation keeps moving.</p></details>
      <details class="faq-item"><summary>How do follow-ups work?<span class="pm"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></span></summary><p>Each stage can have its own follow-up sequence: timed messages that go out when a customer stops replying, for example one after 3 hours and another after a day with a video. Each message is different, and you set the timing. If the last follow-up gets no reply, the opportunity moves to the stage you choose, such as Lost.</p></details>
      <details class="faq-item"><summary>Where do the employee's answers come from?<span class="pm"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></span></summary><p>From your own knowledge: the prices, FAQs, policies and schedules you add, typed into a table or uploaded from a spreadsheet. You decide which knowledge each employee answers from, and when you change a fact, the next reply uses it. A question your knowledge doesn't cover can go to your team instead of a guess.</p></details>
      <details class="faq-item"><summary>How does the AI cost stay capped?<span class="pm"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></span></summary><p>Smart routing sends each message to the lowest-cost model that can handle it: simple questions to a cheaper model, harder ones to a stronger model. You also set a maximum spend per conversation; when a chat reaches it, the AI pauses and hands the chat to your team. The cost of every reply sits in your inbox, so nothing is hidden.</p></details>
      <details class="faq-item"><summary>Can it update my CRM or calendar?<span class="pm"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></span></summary><p>Yes. At the stage you choose, the employee can look up free slots, book the meeting in your calendar, send the confirmation and update your CRM, such as <bdi>HubSpot</bdi> or <bdi>Zoho</bdi>. Tools that are not connected directly can usually be reached through <bdi>Zapier</bdi>, <bdi>Make</bdi>, <bdi>n8n</bdi> or the API. The <a href="/integrations">integrations page</a> has the full list.</p></details>
    </div>
  </div>
</section>

<section class="s ctaf"><div class="container"><div class="ctaf-card">
  <div class="ctaf-genu genu" data-genu data-expr="happy" data-liven style="--w:86px;--h:98px;--ospeed:7s"></div>
  <span class="hiw-kicker hiw-kicker--dark">Get started</span>
  <h2 style="margin-block-start:12px;">Ready to hire your first employee?</h2>
  <p class="lead">Book a planning session: we listen, agree with you what each employee does, and build Aaref and Adnan around your business. Roz is ready the same day.</p>
  <div class="ctaf-cta"><a href="/contact" class="btn btn-primary btn-lg">Book a planning session</a><a href="https://app.genudo.ai/auth/register" class="ctaf-sec">or start free <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a></div>
  <div class="ctaf-trust"><span class="live-dot"></span>Answers day and night<span class="sep"></span>Speaks your customers' dialect<span class="sep"></span>You stay in control</div>
</div></div></section>

</div>`;
export default html;
