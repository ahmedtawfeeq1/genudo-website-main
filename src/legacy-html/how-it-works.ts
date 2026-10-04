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
        <a href="/contact" class="btn btn-primary btn-lg">Book a demo</a>
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
      <figcaption>The full tour in 90 seconds: meet ROZ, Aaref and Adnan</figcaption>
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
      <li><a href="#setup"><b>08</b>Setup</a></li>
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
        <p class="lead">Each employee has one clear job: Aaref sells, Adnan looks after your customers, and ROZ reviews your team's work. You can hire more than one of each.</p>
        <p class="hiw-how"><b>How?</b> Every employee works inside a pipeline with its own channels, stages, knowledge and follow-ups. One employee can run one or two pipelines.</p>
      </div>
      <div class="hiw-copy">
        <ul class="hiw-proof">
          <li><span><b>Aaref, sales:</b> answers inquiries, qualifies the interested ones, follows up with the quiet ones and helps book meetings.</span></li>
          <li><span><b>Adnan, support and success:</b> answers from your own facts, routes problems to the right person on your team, and works with Zoho Desk and Zendesk.</span></li>
          <li><span><b>ROZ, quality control:</b> reviews your team's WhatsApp chats on company lines, and connects when you scan a code from your phone.</span></li>
          <li><span>More than one number? Hire a ROZ for each WhatsApp line and an Aaref for each branch.</span></li>
        </ul>
        <div class="hiw-links">
          <a href="/sol-sales-agent">Meet Aaref →</a>
          <a href="/sol-customer-service">Meet Adnan →</a>
          <a href="/sol-operations">Meet ROZ →</a>
        </div>
      </div>
    </div>
    <div class="hiw-visual">
      <div class="hiw-emps">
        <div class="mk mk-emp mk-emp--aaref">
          <img class="mk-emp__img" src="/media/img/aaref.svg" alt="Aaref, the AI sales employee" width="80" height="87">
          <div class="mk-emp__name">Aaref</div>
          <span class="mk-emp__role">Sales</span>
          <ul class="mk-emp__list">
            <li><i class="mk-ic mk-ic--check"></i>Answers every inquiry, day and night</li>
            <li><i class="mk-ic mk-ic--check"></i>Qualifies leads and follows up with the quiet ones</li>
            <li><i class="mk-ic mk-ic--check"></i>Helps book meetings straight into your calendar</li>
          </ul>
        </div>
        <div class="mk mk-emp mk-emp--adnan">
          <img class="mk-emp__img" src="/media/img/adnan.svg" alt="Adnan, the AI support employee" width="80" height="87">
          <div class="mk-emp__name">Adnan</div>
          <span class="mk-emp__role">Support &amp; success</span>
          <ul class="mk-emp__list">
            <li><i class="mk-ic mk-ic--check"></i>Answers from your own facts: prices, policies, schedules</li>
            <li><i class="mk-ic mk-ic--check"></i>Routes tricky issues to the right person on your team</li>
            <li><i class="mk-ic mk-ic--check"></i>Works with Zoho Desk and Zendesk</li>
          </ul>
        </div>
        <div class="mk mk-emp mk-emp--roz">
          <img class="mk-emp__img" src="/media/img/roz.svg" alt="ROZ, the AI quality-control employee" width="80" height="87">
          <div class="mk-emp__name">ROZ</div>
          <span class="mk-emp__role">Quality control</span>
          <ul class="mk-emp__list">
            <li><i class="mk-ic mk-ic--check"></i>Reviews your team's chats on company WhatsApp lines</li>
            <li><i class="mk-ic mk-ic--check"></i>Flags slow replies, stalled deals and missed opportunities</li>
            <li><i class="mk-ic mk-ic--check"></i>Turns voice notes into text you can read</li>
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
      <p class="hiw-how"><b>How?</b> You describe each stage in plain words: when a customer enters it, and what the employee does there. The employee reads every reply and moves the opportunity to the right stage on its own.</p>
      <ul class="hiw-proof">
        <li><span>When the customer agrees, it books the meeting and sends the confirmation on WhatsApp.</span></li>
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
      <p class="hiw-note">Illustrative data · swipe the board to see every stage</p>
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
      <p class="hiw-note">Illustrative data</p>
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
      <div class="mk mk-card" role="img" aria-label="Choose the Arabic dialect your AI employee speaks">
        <div class="mk-card__head"><div class="mk-card__title"><i class="mk-ic mk-ic--globe"></i>Agent dialect</div></div>
        <div class="mk-chips">
          <span class="mk-chip mk-chip--opt is-on"><i class="mk-ic mk-ic--check"></i>Egyptian</span><span class="mk-chip mk-chip--opt">Saudi / Gulf</span><span class="mk-chip mk-chip--opt">Jordanian</span><span class="mk-chip mk-chip--opt">Palestinian</span><span class="mk-chip mk-chip--opt">Lebanese</span><span class="mk-chip mk-chip--opt">Syrian</span><span class="mk-chip mk-chip--opt">Iraqi</span><span class="mk-chip mk-chip--opt">Yemeni</span><span class="mk-chip mk-chip--opt">Sudanese</span><span class="mk-chip mk-chip--opt">Libyan</span><span class="mk-chip mk-chip--opt">Tunisian</span><span class="mk-chip mk-chip--opt">Algerian</span><span class="mk-chip mk-chip--opt">Moroccan</span><span class="mk-chip mk-chip--opt">Mauritanian</span><span class="mk-chip mk-chip--opt mk-chip--auto"><i class="mk-ic mk-ic--sparkle"></i>Auto multi-dialect</span>
        </div>
      </div>
      <p class="hiw-note">Illustrative clinic and prices</p>
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
      <p class="hiw-how"><b>How?</b> Smart routing reads each message and sends it to the cheapest model that can answer it well. If a conversation reaches the limit you set, the AI pauses in that chat and alerts your team.</p>
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
        <p class="mk-cap__rule"><i class="mk-ic mk-ic--alert"></i><span>When the cap is reached: pause the AI in this chat and alert the team.</span></p>
      </div>
      <p class="hiw-note">Illustrative data · real prices are on the pricing page</p>
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
        <p class="lead">WhatsApp, Instagram, Messenger and your website chat in one place. Your employee answers right away, and you step in whenever you like, even from your phone.</p>
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
      <p class="hiw-note">Illustrative data</p>
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
      </ul>
      <div class="hiw-links"><a href="/api-mcp">Connect Claude and ChatGPT →</a></div>
    </div>
    <div class="hiw-visual">
      <div class="mk mk-kpis" role="img" aria-label="Dashboard: opportunities and AI cost">
        <div class="mk-kpi mk-kpi--hero"><span class="mk-kpi__label">Active opportunities</span><span class="mk-kpi__value">870</span><span class="mk-kpi__sub">1,284 opportunities in total</span><span class="mk-kpi__badge">67.8% of total</span></div>
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
      <p class="hiw-note">Illustrative data</p>
    </div>
  </div>
</section>

<!-- 08 · Setup -->
<section id="setup" class="hiw-sec">
  <div class="container hiw-split">
    <div class="hiw-copy">
      <span class="hiw-kicker"><b>08</b> Setup</span>
      <h2>Set it up in 3 steps, no code.</h2>
      <p class="lead">No developer, no weeks of training. You tell it about your business, and your employee learns it.</p>
      <ol class="hiw-steps">
        <li><div><h3>Tell it about your business</h3><p>Six quick questions about what you do, answered by typing or by voice. Your employee's tone and instructions are built from your answers.</p></div></li>
        <li><div><h3>Arrange your stages</h3><p>Start with New lead → Interested → Won or Lost. Rename them, add more, and tell each stage when a customer enters it and what to do there.</p></div></li>
        <li><div><h3>Connect and go live</h3><p>Connect WhatsApp or another channel, try it with Test AI, then switch it on for your customers.</p></div></li>
      </ol>
    </div>
    <div class="hiw-visual">
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

<section class="s ctaf"><div class="container"><div class="ctaf-card">
  <div class="ctaf-genu genu" data-genu data-expr="happy" data-liven style="--w:86px;--h:98px;--ospeed:7s"></div>
  <span class="hiw-kicker hiw-kicker--dark">Get started</span>
  <h2 style="margin-block-start:12px;">Ready to hire your first employee?</h2>
  <p class="lead">Book a demo and we'll show you the employee working on your channels, with your own facts.</p>
  <div class="ctaf-cta"><a href="/contact" class="btn btn-primary btn-lg">Book a demo</a><a href="https://app.genudo.ai/auth/register" class="ctaf-sec">or start free <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a></div>
  <div class="ctaf-trust"><span class="live-dot"></span>Answers day and night<span class="sep"></span>Speaks your customers' dialect<span class="sep"></span>You stay in control</div>
</div></div></section>

</div>`;
export default html;
