// /ai-workforce — pillar guide (EN). See docs/website/BUILD-BRIEF.md and docs/seo/GEO-STRATEGY.md.
// Same sections and facts as the ar-EG primary page. The quotable answer to "What is an AI workforce / AI employee?".
// Every section opens with a direct answer; FAQ answers are self-contained. Styles: src/styles/pages/ai-workforce.css.
const html = `<div class="pg-ai-workforce">

<section class="phero aw-hero" aria-labelledby="aw-title"><div class="container phero-in">
  <div class="aw-hero__copy">
    <div class="crumb"><a href="/resources">Resources</a><i class="mk-ic mk-ic--arrow" aria-hidden="true"></i><span>AI workforce guide</span></div>
    <h1 id="aw-title">What is an AI workforce? The guide to AI employees for business</h1>
    <p class="aw-def"><strong>An AI employee is an AI agent with one clear job in your business, such as sales or customer support, that answers your customers on its own, follows up, books meetings and updates your CRM, while your team sees everything and can take over any chat.</strong> Put several of them together, each in its own role, and you have an AI workforce.</p>
    <p class="lead">This guide explains in plain words what an AI workforce is, how it differs from a chatbot, what it can do for a business and how you stay in control. The examples come from GenuDo's three AI employees: Aaref, Adnan and ROZ.</p>
    <p class="aw-updated"><i class="mk-ic mk-ic--clock" aria-hidden="true"></i><span>Updated: <time datetime="2026-10">October 2026</time></span></p>
    <div class="heroc-cta"><a href="/contact" class="btn btn-primary btn-lg">Book a demo</a><a href="https://app.genudo.ai/auth/register" class="btn btn-ondark btn-lg">Start free</a></div>
  </div>
  <div class="phero-media">
    <figure class="aw-film">
      <video src="/media/video/ai-workforce-en.mp4" poster="/media/img/ai-workforce-poster.jpg" controls playsinline preload="none" width="1280" height="720" aria-label="GenuDo film: your AI workforce"></video>
      <figcaption>GENU introduces Aaref, Adnan and ROZ, and how they work with your team.</figcaption>
    </figure>
  </div>
</div></section>

<nav class="aw-toc" aria-label="In this guide"><div class="container">
  <b class="aw-toc__title">In this guide</b>
  <ol>
    <li><a href="#what">What is an AI workforce?</a></li>
    <li><a href="#vs-chatbot">AI employee vs chatbot</a></li>
    <li><a href="#outcomes">What it does for a business</a></li>
    <li><a href="#employees">The GenuDo AI employees</a></li>
    <li><a href="#how">How it works</a></li>
    <li><a href="#industries">Who uses AI employees</a></li>
    <li><a href="#control">How you keep control</a></li>
    <li><a href="#faq">FAQ</a></li>
  </ol>
</div></nav>

<section class="s white-bg" id="what"><div class="container">
  <div class="aw-defs">
    <article class="aw-defblock">
      <span class="eyebrow">Definition</span>
      <h2>What is an AI workforce?</h2>
      <p class="aw-answer">An AI workforce is a team of AI employees, each with one job, that handle your customer conversations alongside your human team. Instead of one general chatbot that answers anything, you hire a sales employee, a support employee and a quality-control employee, and each works toward its own goal: a booked meeting, a solved problem, a reviewed conversation.</p>
      <p>In GenuDo, each employee has stages it moves the customer through, from the first message to a decision. You can hire more than one of the same kind, such as an Aaref for each branch or a ROZ for each <bdi>WhatsApp</bdi> number.</p>
    </article>
    <article class="aw-defblock">
      <span class="eyebrow">The employee</span>
      <h2>What is an AI employee?</h2>
      <p class="aw-answer">An AI employee is an AI agent for business that does one role the way a staff member would: it answers the customer, asks the right questions, follows up and finishes the task, such as booking a meeting or passing a problem to your support team.</p>
      <p>It answers from your own facts, such as prices, policies and schedules, in your customer's language and dialect. When a conversation needs a person, it hands the chat to someone on your team along with everything that was said.</p>
    </article>
  </div>
</div></section>

<section class="s tint-bg" id="vs-chatbot"><div class="container">
  <div class="s-head"><span class="eyebrow">Comparison</span><h2>How is an AI employee different from a chatbot?</h2><p class="lead aw-answer">A typical chatbot answers from a fixed script or a menu of buttons and waits for the customer to write. An AI employee understands what the customer says, moves the conversation toward a goal, follows up when the customer goes quiet, and takes real actions such as booking a meeting or updating your CRM.</p></div>
  <p class="aw-scroll-hint" aria-hidden="true">Swipe the table to see every column</p>
  <div class="aw-table-wrap" role="region" aria-labelledby="aw-cmp-cap" tabindex="0">
    <table class="aw-table">
      <caption id="aw-cmp-cap">Comparison of a typical chatbot, an AI employee and a human agent</caption>
      <thead><tr><th scope="col">Compared on</th><th scope="col" class="is-us">AI employee</th><th scope="col">Typical chatbot</th><th scope="col">Human agent</th></tr></thead>
      <tbody>
        <tr><th scope="row">What it does</th><td class="is-us">Runs a real conversation toward a goal: answers, qualifies, follows up and books</td><td>Answers from a script or preset buttons</td><td>Handles anything, including sensitive cases that need judgment</td></tr>
        <tr><th scope="row">Remembers the customer</th><td class="is-us">Remembers the conversation and what it collected: name, service, preferred time</td><td>Often starts over each time</td><td>As far as their notes and memory go</td></tr>
        <tr><th scope="row">Follows up when the customer goes quiet</th><td class="is-us">Yes, with follow-up messages on a schedule you set</td><td>No, it waits for the customer to write</td><td>When they remember and have time</td></tr>
        <tr><th scope="row">Takes actions like booking or CRM updates</th><td class="is-us">Yes: looks up free slots, books meetings and updates your CRM</td><td>Some can, through fixed, pre-built steps</td><td>Yes, by hand</td></tr>
        <tr><th scope="row">Works across channels</th><td class="is-us"><bdi>WhatsApp</bdi>, <bdi>Instagram</bdi>, <bdi>Messenger</bdi> and website chat, in one inbox</td><td>Depends on the tool</td><td>One conversation after another</td></tr>
        <tr><th scope="row">Available</th><td class="is-us">Day and night</td><td>Around the clock</td><td>Working hours</td></tr>
        <tr><th scope="row">Who controls it</th><td class="is-us">You: its facts, stages and spending cap, and you take over any chat in one tap</td><td>Whoever built the script; changes mean editing it</td><td>You and the team lead</td></tr>
      </tbody>
    </table>
  </div>
  <p class="aw-note">This compares a traditional, script-based chatbot. Tools differ from one another.</p>
</div></section>

<section class="s white-bg" id="outcomes"><div class="container">
  <div class="s-head"><span class="eyebrow">Outcomes</span><h2>What can AI employees do for a business?</h2><p class="lead aw-answer">They take the repetitive work off your team: answering the same questions, chasing customers who went quiet and booking appointments. The result is that no customer waits, no lead is forgotten, and you know what all of it cost.</p></div>
  <div class="feat-grid aw-grid">
    <div class="featc"><div class="oi"><i class="mk-ic mk-ic--moon" aria-hidden="true"></i></div><h3>No customer waits until morning</h3><p>A message at 2 a.m. gets the same quick answer as one at noon, on <bdi>WhatsApp</bdi>, <bdi>Instagram</bdi>, <bdi>Messenger</bdi> and website chat.</p></div>
    <div class="featc"><div class="oi"><i class="mk-ic mk-ic--repeat" aria-hidden="true"></i></div><h3>The follow-up never forgets</h3><p>Customers who go quiet get follow-up messages on schedule, each one different, until they reply or the sequence ends.</p></div>
    <div class="featc"><div class="oi"><i class="mk-ic mk-ic--calendar" aria-hidden="true"></i></div><h3>Conversations that end in a booking</h3><p>It qualifies the interested ones, looks up free slots, books the meeting and updates your CRM the moment a customer is ready.</p></div>
    <div class="featc"><div class="oi"><i class="mk-ic mk-ic--book" aria-hidden="true"></i></div><h3>Answers from your own facts</h3><p>Prices, policies and schedules come from the facts you give it. What it doesn't know goes to your team instead of a guess.</p></div>
    <div class="featc"><div class="oi"><i class="mk-ic mk-ic--globe" aria-hidden="true"></i></div><h3>Speaks like your customers</h3><p>14 regional Arabic dialects or automatic multi-dialect, and it understands voice notes and images, not just text.</p></div>
    <div class="featc"><div class="oi"><i class="mk-ic mk-ic--wallet" aria-hidden="true"></i></div><h3>Predictable, capped cost</h3><p>You see what every reply costs, simple messages go to a cheaper model, and a cap per conversation prevents surprise bills.</p></div>
  </div>
</div></section>

<section class="s tint-bg" id="employees"><div class="container">
  <div class="s-head"><span class="eyebrow">GenuDo AI employees</span><h2>Who are the GenuDo AI employees?</h2><p class="lead aw-answer">GenuDo has three AI employees: Aaref for sales, Adnan for customer support and ROZ for quality control of your team's conversations. Each one works on its own, and you can hire more than one as your business needs.</p></div>
  <div class="aw-emps">
    <a class="aw-emp" href="/sol-sales-agent">
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
      <span class="aw-emp__go">Meet Aaref<i class="mk-ic mk-ic--arrow" aria-hidden="true"></i></span>
    </a>
    <a class="aw-emp" href="/sol-customer-service">
      <div class="mk mk-emp mk-emp--adnan">
        <img class="mk-emp__img" src="/media/img/adnan.svg" alt="" width="80" height="87" loading="lazy">
        <div class="mk-emp__name">Adnan</div>
        <span class="mk-emp__role">Support &amp; success</span>
        <ul class="mk-emp__list">
          <li><i class="mk-ic mk-ic--check"></i><span>Answers from your own facts: prices, policies, schedules</span></li>
          <li><i class="mk-ic mk-ic--check"></i><span>Routes tricky issues to the right person on your team</span></li>
          <li><i class="mk-ic mk-ic--check"></i><span>Works with <bdi>Zoho Desk</bdi> and <bdi>Zendesk</bdi></span></li>
        </ul>
      </div>
      <span class="aw-emp__go">Meet Adnan<i class="mk-ic mk-ic--arrow" aria-hidden="true"></i></span>
    </a>
    <a class="aw-emp" href="/sol-operations">
      <div class="mk mk-emp mk-emp--roz">
        <img class="mk-emp__img" src="/media/img/roz.svg" alt="" width="80" height="87" loading="lazy">
        <div class="mk-emp__name">ROZ</div>
        <span class="mk-emp__role">Quality control</span>
        <ul class="mk-emp__list">
          <li><i class="mk-ic mk-ic--check"></i><span>Reviews your team's chats on company <bdi>WhatsApp</bdi> lines</span></li>
          <li><i class="mk-ic mk-ic--check"></i><span>Flags slow replies, stalled deals and missed opportunities</span></li>
          <li><i class="mk-ic mk-ic--check"></i><span>Turns voice notes into text, and connects by scanning a QR code from your phone</span></li>
        </ul>
      </div>
      <span class="aw-emp__go">Meet ROZ<i class="mk-ic mk-ic--arrow" aria-hidden="true"></i></span>
    </a>
  </div>
</div></section>

<section class="s white-bg" id="how"><div class="container">
  <div class="s-head"><span class="eyebrow">How it works</span><h2>How does an AI employee work?</h2><p class="lead aw-answer">You tell it about your business, connect it to your channel and your facts, and it starts answering your customers while you watch. No code and no developer needed.</p></div>
  <ol class="flow aw-steps">
    <li class="fstep"><div class="n">01</div><h3>Tell it about your business</h3><p>A short business brief of six questions, answered by typing or by voice. Your employee's tone and instructions are built from it.</p></li>
    <li class="fstep"><div class="n">02</div><h3>Connect your channel and facts</h3><p>Connect <bdi>WhatsApp</bdi>, <bdi>Instagram</bdi>, <bdi>Messenger</bdi> or your website chat, and add your prices, FAQs and policies.</p></li>
    <li class="fstep"><div class="n">03</div><h3>Go live and watch</h3><p>Try it with Test AI, which sends nothing to a customer, then switch it on. Every conversation is in front of you, and you can take over any of them at any time.</p></li>
  </ol>
  <p class="aw-more"><a href="/how-it-works">See the full tour: how GenuDo works<i class="mk-ic mk-ic--arrow" aria-hidden="true"></i></a></p>
</div></section>

<section class="s tint-bg" id="industries"><div class="container">
  <div class="s-head"><span class="eyebrow">Industries</span><h2>Which businesses use AI employees?</h2><p class="lead aw-answer">Any business whose customers message it and ask the same questions every day, and that needs to reply fast and book appointments. GenuDo is set up for clinics, academies, gyms, marketing agencies, hotels and tourism, and camps and events.</p></div>
  <div class="xnav aw-inds">
    <a class="xcard" href="/ind-clinics"><span class="xi"><i class="mk-ic mk-ic--calendar" aria-hidden="true"></i></span><span class="aw-xtxt"><b>Clinics &amp; healthcare</b><span>Answers and appointments for patients at any hour, so your front desk skips the same scheduling and price questions.</span></span><span class="go"><i class="mk-ic mk-ic--arrow" aria-hidden="true"></i></span></a>
    <a class="xcard" href="/ind-elearning"><span class="xi"><i class="mk-ic mk-ic--book" aria-hidden="true"></i></span><span class="aw-xtxt"><b>E-learning &amp; academies</b><span>Every question about courses and fees answered, and each student guided to the right program.</span></span><span class="go"><i class="mk-ic mk-ic--arrow" aria-hidden="true"></i></span></a>
    <a class="xcard" href="/ind-fitness"><span class="xi"><i class="mk-ic mk-ic--trophy" aria-hidden="true"></i></span><span class="aw-xtxt"><b>Gyms &amp; fitness centres</b><span>Trial classes, bookings and membership questions on <bdi>WhatsApp</bdi>, so your team stays free for members.</span></span><span class="go"><i class="mk-ic mk-ic--arrow" aria-hidden="true"></i></span></a>
    <a class="xcard" href="/ind-marketing"><span class="xi"><i class="mk-ic mk-ic--users" aria-hidden="true"></i></span><span class="aw-xtxt"><b>Marketing agencies</b><span>Every lead from your clients' campaigns gets an answer right away, so ad spend turns into meetings.</span></span><span class="go"><i class="mk-ic mk-ic--arrow" aria-hidden="true"></i></span></a>
    <a class="xcard" href="/ind-hospitality"><span class="xi"><i class="mk-ic mk-ic--globe" aria-hidden="true"></i></span><span class="aw-xtxt"><b>Hospitality &amp; tourism</b><span>Answers on bookings, prices and details at any hour, in Arabic and English.</span></span><span class="go"><i class="mk-ic mk-ic--arrow" aria-hidden="true"></i></span></a>
    <a class="xcard" href="/ind-camps-events"><span class="xi"><i class="mk-ic mk-ic--flag" aria-hidden="true"></i></span><span class="aw-xtxt"><b>Camps &amp; events</b><span>Tickets, schedules and parents' questions, all answered during the registration rush.</span></span><span class="go"><i class="mk-ic mk-ic--arrow" aria-hidden="true"></i></span></a>
  </div>
</div></section>

<section class="s white-bg" id="control"><div class="container">
  <div class="s-head"><span class="eyebrow">You stay in control</span><h2>How do you keep control of AI employees?</h2><p class="lead aw-answer">In three ways: you can take over any conversation in one tap, you set a spending cap for every conversation, and every action the employee takes is logged. You also decide which facts it answers from and what it does at each stage.</p></div>
  <div class="feat-grid aw-grid">
    <div class="featc"><div class="oi"><i class="mk-ic mk-ic--user" aria-hidden="true"></i></div><h3>Take over in one tap</h3><p>From the inbox or the mobile app, press Take over and reply yourself. The AI stops in that chat until you hand it back.</p></div>
    <div class="featc"><div class="oi"><i class="mk-ic mk-ic--dollar" aria-hidden="true"></i></div><h3>A cap on cost</h3><p>Set a maximum spend for every conversation. When a chat reaches it, the AI pauses and alerts your team, so there is no surprise bill.</p></div>
    <div class="featc"><div class="oi"><i class="mk-ic mk-ic--clock" aria-hidden="true"></i></div><h3>Every action logged</h3><p>Each booking, CRM update or follow-up is recorded: when it happened, what was requested and what came back.</p></div>
  </div>
  <p class="aw-more"><a href="/security">See every control on the security page<i class="mk-ic mk-ic--arrow" aria-hidden="true"></i></a></p>
</div></section>

<section class="s tint-bg" id="faq"><div class="container">
  <div class="s-head center"><span class="eyebrow">Questions</span><h2>Frequently asked questions about AI employees</h2></div>
  <div class="faq">
    <details class="faq-item"><summary>What is GenuDo?<span class="pm"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></span></summary><p>GenuDo is an AI workforce platform for businesses in Egypt and the Middle East. It gives you AI employees (Aaref for sales, Adnan for customer support and ROZ for WhatsApp quality control) that answer customers on WhatsApp, Instagram, Messenger and website chat in Arabic dialects and other languages, follow up, book meetings and update your CRM, while your team stays in control.</p></details>
    <details class="faq-item"><summary>Do AI employees work on WhatsApp?<span class="pm"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></span></summary><p>Yes. GenuDo AI employees answer your customers on WhatsApp, as well as on Instagram, Messenger and your website chat, and every conversation lands in one inbox. You connect your number from the dashboard and the employee starts replying, while ROZ connects to your team's company WhatsApp lines when you scan a QR code from your phone.</p></details>
    <details class="faq-item"><summary>Do AI employees understand Arabic dialects?<span class="pm"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></span></summary><p>Yes. You can choose one of 14 regional Arabic dialects, such as Egyptian, Gulf or Levantine, or turn on automatic multi-dialect so every customer hears their own. If a customer writes in English or another language, the employee replies in that language.</p></details>
    <details class="faq-item"><summary>Can an AI employee understand voice notes and images?<span class="pm"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></span></summary><p>Yes. When a customer sends a voice note or a photo, the employee listens to it or looks at it and replies just as it would to a written message. ROZ also turns the voice notes in your team's conversations into text, so you can review them.</p></details>
    <details class="faq-item"><summary>Will an AI employee replace my team?<span class="pm"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></span></summary><p>No. An AI employee takes the repetitive work: answering the same questions, following up with customers who went quiet and booking routine appointments, day and night. Your team keeps the conversations that need a person, and anyone on it can take over a chat in one tap and hand it back afterwards.</p></details>
    <details class="faq-item"><summary>How quickly can I set up an AI employee?<span class="pm"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></span></summary><p>Setup needs no code and no developer. You answer a short business brief of six questions, by typing or by voice, connect your channel, add your facts, try it with Test AI and switch it on. If you prefer, book a demo and our team sets up your first employee with you.</p></details>
    <details class="faq-item"><summary>How much does an AI employee cost?<span class="pm"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></span></summary><p>Every package and price is on the <a href="/pricing">pricing page</a>. Inside the platform you see what every reply costs, and simple messages go to a cheaper model automatically. You also set a maximum spend per conversation: when a chat reaches it, the AI pauses and alerts your team.</p></details>
    <details class="faq-item"><summary>Is my business and customer data safe?<span class="pm"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></span></summary><p>Your AI employees answer from the facts you give them, and you decide what goes in and when it changes. Every action they take, such as booking a meeting or updating your CRM, is logged with its time and result, and API access uses scoped tokens you can revoke at any time. The <a href="/security">security page</a> explains each control.</p></details>
  </div>
</div></section>

<section class="s ctaf"><div class="container"><div class="ctaf-card">
  <div class="ctaf-genu genu" data-genu data-expr="happy" data-liven style="--w:86px;--h:98px;--ospeed:7s"></div>
  <div class="eyebrow ctaf-eyebrow">Get started</div>
  <h2 style="margin-block-start:12px;">Ready to hire your first AI employee?</h2>
  <p class="lead">Book a demo and we'll build your first employee with you, on your channels and with your own facts. Or start free on your own.</p>
  <div class="ctaf-cta"><a href="/contact" class="btn btn-primary btn-lg">Book a demo</a><a href="https://app.genudo.ai/auth/register" class="ctaf-sec">or start free <i class="mk-ic mk-ic--arrow" aria-hidden="true"></i></a></div>
  <div class="ctaf-trust"><span class="live-dot"></span>Answers day and night<span class="sep"></span>Speaks your customers' dialect<span class="sep"></span>You stay in control</div>
</div></div></section>

</div>
`;
export default html;
