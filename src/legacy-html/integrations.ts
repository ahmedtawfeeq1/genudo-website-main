// /integrations — value-led rewrite (EN). See docs/website/BUILD-BRIEF.md.
const html = `<div class="pg-integrations">
<section class="phero"><div class="container phero-in">
  <div>
    <div class="crumb"><span>Resources</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg><span>Integrations</span></div>
    <h1>Works with the tools you already use, with no change to how you work.</h1>
    <p class="lead">Your customers message you on <bdi>WhatsApp</bdi> and <bdi>Instagram</bdi>, and your team lives in its calendar and <bdi>CRM</bdi>. GenuDo steps in between: it replies, books and updates, and the result shows up in the tools your team already knows.</p>
    <div class="heroc-cta"><a href="https://app.genudo.ai/auth/register" class="btn btn-primary btn-lg">Start free</a><a href="/contact" class="btn btn-ondark btn-lg">Book a demo</a></div>
  </div>
  <div class="phero-media">
    <div class="pg-hub" role="img" aria-label="Your customers / GenuDo / Your tools">
      <div class="pg-hub-row"><small>Your customers</small><div class="pg-pills"><span class="pg-pill"><bdi>WhatsApp</bdi></span><span class="pg-pill"><bdi>Instagram</bdi></span><span class="pg-pill"><bdi>Messenger</bdi></span><span class="pg-pill">Website chat</span></div></div>
      <div class="pg-hub-mid"><img src="/media/img/genu.svg" alt="" width="84" height="84"><b>GenuDo</b></div>
      <div class="pg-hub-row"><small>Your tools</small><div class="pg-pills"><span class="pg-pill"><img src="/logos/google-calendar.svg" alt="" width="20" height="20"><bdi>Google Calendar</bdi></span><span class="pg-pill"><img src="/logos/hubspot.svg" alt="" width="20" height="20"><bdi>HubSpot</bdi></span><span class="pg-pill"><img src="/logos/zoho.svg" alt="" width="20" height="20"><bdi>Zoho</bdi></span></div></div>
    </div>
  </div>
</div></section>

<section class="s white-bg" id="channels"><div class="container">
  <div class="s-head"><span class="eyebrow">Channels</span><h2>Where do your customers message you? Your employee is already there.</h2><p class="lead">You never ask a customer to download anything or change a habit. The employee replies where the customer started, and every conversation lands in one inbox.</p></div>
  <div class="intg pg-chans"><div class="intc"><div class="ilogo"><img src="/channels/whatsapp.svg" alt="" width="46" height="46"></div><b><bdi>WhatsApp</bdi></b><span>Instant replies on <bdi>WhatsApp Business</bdi></span></div><div class="intc"><div class="ilogo"><img src="/channels/instagram.svg" alt="" width="46" height="46"></div><b><bdi>Instagram</bdi></b><span>Direct messages on your account</span></div><div class="intc"><div class="ilogo"><img src="/channels/messenger.svg" alt="" width="46" height="46"></div><b><bdi>Messenger</bdi></b><span>Your Facebook page chat</span></div><div class="intc"><div class="ilogo"><img src="/channels/webchat.svg" alt="" width="46" height="46"></div><b>Website chat</b><span>A widget styled to fit your site</span></div></div>
</div></section>

<section class="s tint-bg" id="tools"><div class="container">
  <div class="s-head"><span class="eyebrow">Your team’s tools</span><h2>Your team keeps working in its own tools.</h2><p class="lead">The employee works inside your tools instead of replacing them: it books on your calendar, updates your <bdi>CRM</bdi>, and hands support tickets to the system your team already has open.</p></div>
  <div class="pg-groups"><div class="pg-group"><h3>Calendars</h3><p>Checks free slots, then books the meeting.</p><div class="intg"><div class="intc"><div class="ilogo"><img src="/logos/google-calendar.svg" alt="" width="46" height="46"></div><b><bdi>Google Calendar</bdi></b><span>Booking meetings</span></div><div class="intc"><div class="ilogo"><img src="/logos/calendly.svg" alt="" width="46" height="46"></div><b><bdi>Calendly</bdi></b><span>Team scheduling</span></div></div></div><div class="pg-group"><h3>Sales and <bdi>CRM</bdi></h3><p>Updates the opportunity the moment a customer is ready, so nobody retypes it.</p><div class="intg"><div class="intc"><div class="ilogo"><img src="/logos/hubspot.svg" alt="" width="46" height="46"></div><b><bdi>HubSpot</bdi></b><span><bdi>CRM</bdi></span></div><div class="intc"><div class="ilogo"><img src="/logos/odoo.svg" alt="" width="46" height="46"></div><b><bdi>Odoo</bdi></b><span><bdi>CRM</bdi> and operations</span></div><div class="intc"><div class="ilogo"><img src="/logos/zoho.svg" alt="" width="46" height="46"></div><b><bdi>Zoho</bdi></b><span><bdi>CRM</bdi></span></div><div class="intc"><div class="ilogo"><img src="/logos/salesforce.svg" alt="" width="46" height="46"></div><b><bdi>Salesforce</bdi></b><span><bdi>CRM</bdi></span></div><div class="intc"><div class="ilogo"><img src="/logos/pipedrive.svg" alt="" width="46" height="46"></div><b><bdi>Pipedrive</bdi></b><span><bdi>CRM</bdi></span></div></div></div><div class="pg-group"><h3>Customer service</h3><p>Adnan works with the helpdesk your team is used to.</p><div class="intg"><div class="intc"><div class="ilogo"><img src="/logos/zoho.svg" alt="" width="46" height="46"></div><b><bdi>Zoho Desk</bdi></b><span>Support tickets</span></div><div class="intc"><div class="ilogo pg-letter" style="background:#03363d">Z</div><b><bdi>Zendesk</bdi></b><span>Support tickets</span></div></div></div><div class="pg-group"><h3>Team and data</h3><p>Alerts and data in the places your team already looks.</p><div class="intg"><div class="intc"><div class="ilogo"><img src="/logos/slack.svg" alt="" width="46" height="46"></div><b><bdi>Slack</bdi></b><span>Team alerts</span></div><div class="intc"><div class="ilogo"><img src="/logos/google-sheets.svg" alt="" width="46" height="46"></div><b><bdi>Google Sheets</bdi></b><span>Sheets and data</span></div><div class="intc"><div class="ilogo"><img src="/logos/notion.svg" alt="" width="46" height="46"></div><b><bdi>Notion</bdi></b><span>Docs and tables</span></div><div class="intc"><div class="ilogo"><img src="/logos/trello.svg" alt="" width="46" height="46"></div><b><bdi>Trello</bdi></b><span>Tasks and cards</span></div></div></div></div>
</div></section>

<section class="s white-bg" id="assistants"><div class="container">
  <div class="pg-split pg-flip">
    <div class="pg-copy"><span class="eyebrow">AI assistants</span><h2>Run GenuDo from <bdi>Claude</bdi> or <bdi>ChatGPT</bdi>.</h2><p class="lead">If you already work in <bdi>Claude</bdi> or <bdi>ChatGPT</bdi>, install our plugin and ask in plain words: build a new employee, adjust what a live one says, or find out why a customer got a certain reply.</p>
      <ul class="plist"><li><span class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 7"/></svg></span>Ask in plain words instead of hunting through screens</li><li><span class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 7"/></svg></span>You see every change first, before it touches your account</li><li><span class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 7"/></svg></span>No key to create or data to copy: you approve in your browser</li></ul>
      <a href="/api-mcp" class="btn btn-ghost">See the details <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
    </div>
    <div class="pg-shot"><img src="/media/shots/mcp-claude-plugin.jpg" alt="The GenuDo plugin page for Claude and ChatGPT" width="1600" height="1075" loading="lazy"></div>
  </div>
</div></section>

<section class="s tint-bg"><div class="container">
  <div class="pg-split">
    <div class="pg-copy"><span class="eyebrow">How it plays out</span><h2>A customer asks, and the details and the booking land where they belong.</h2><p class="lead">The customer chats on <bdi>WhatsApp</bdi> like any other day. Behind the scenes, the employee checks free slots, books, and sends the details to your tools.</p>
      <ul class="plist"><li><span class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 7"/></svg></span>Your team learns no new tool</li><li><span class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 7"/></svg></span>The booking shows up on your own calendar</li><li><span class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 7"/></svg></span>You can step into the chat yourself at any moment</li></ul>
    </div>
    <div class="pg-mock">
<div class="mk mk-phone" role="img" aria-label="WhatsApp chat: the AI employee books a meeting and adds it to Google Calendar">
  <div class="mk-phone__screen">
    <div class="mk-phone__status"><span>9:41</span></div>
    <div class="mk-phone__head"><i class="mk-ic mk-ic--back"></i><span class="mk-avatar mk-avatar--green">MA</span><div class="mk-phone__who"><b>Mona Adel</b><span><i class="mk-ic mk-ic--whatsapp"></i>WhatsApp · +20 100 000 0000</span></div></div>
    <div class="mk-takeover"><span class="mk-takeover__state"><i class="mk-ic mk-ic--sparkle"></i>AI is handling this chat</span><span class="mk-takeover__btn"><i class="mk-ic mk-ic--pause"></i>Take over</span></div>
    <div class="mk-chat">
      <span class="mk-chat__day">Today</span>
      <div class="mk-msg mk-msg--in">Hi! Do you have a slot tomorrow evening?<span class="mk-msg__meta">9:58 PM</span></div>
      <div class="mk-msg mk-msg--out"><span class="mk-msg__by"><i class="mk-ic mk-ic--sparkle"></i>Aaref · AI</span>Yes! Tomorrow I have 6:30 or 7:15 PM. Which suits you?<span class="mk-msg__meta">9:58 PM <i class="mk-ic mk-ic--checks"></i></span></div>
      <div class="mk-msg mk-msg--in">6:30 please<span class="mk-msg__meta">9:59 PM</span></div>
      <div class="mk-meeting">
        <div class="mk-meeting__top"><span class="mk-meeting__ic"><i class="mk-ic mk-ic--calendar"></i></span><div><div class="mk-meeting__title">Meeting confirmed</div><div class="mk-meeting__when">Tomorrow · 6:30 PM</div></div></div>
        <div class="mk-meeting__rows"><span><i class="mk-ic mk-ic--check"></i>Added to Google Calendar</span></div>
      </div>
      <div class="mk-typing mk-typing--in"><i></i><i></i><i></i></div>
    </div>
    <div class="mk-phone__compose">AI is handling this chat. Take over to reply.</div>
  </div>
</div>
    </div>
  </div>
</div></section>

<section class="s white-bg" id="developers"><div class="container">
  <div class="s-head"><span class="eyebrow">For developers</span><h2>Need something custom? There are other ways to connect.</h2><p class="lead">The tools above are the easy path. If you have an in-house system or a tool that is not listed, your developer can connect it these ways.</p></div>
  <div class="pg-devs"><div class="pg-dev"><b><bdi>API</bdi></b><span>Read conversation and opportunity data and write to it from your own system.</span></div><div class="pg-dev"><b><bdi>MCP</bdi></b><span>Connect your AI assistant to your GenuDo account.</span></div><div class="pg-dev"><b>Actions that call your system</b><span>The employee sends customer data to any URL you set, at the right moment.</span></div><div class="pg-dev"><b><bdi>Zapier</bdi>, <bdi>Make</bdi> and <bdi>n8n</bdi></b><span>Connect GenuDo to thousands of apps without code.</span></div></div>
  <div class="pg-links"><a class="btn btn-ghost" href="/api-mcp"><bdi>API</bdi> and <bdi>MCP</bdi> details</a><a class="btn btn-ghost" href="https://api.genudo.ai/docs" target="_blank" rel="noopener noreferrer"><bdi>API</bdi> documentation</a></div>
</div></section>

<section class="s tint-bg"><div class="container">
  <div class="s-head center"><h2>Common questions</h2></div>
  <div class="faq"><details class="faq-item"><summary>Do I have to change my CRM or calendar?<span class="pm"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></span></summary><p>No. GenuDo works with what you have. Your team keeps working in its own tools, and the employee does the updating and booking.</p></details><details class="faq-item"><summary>My tool is not listed. What now?<span class="pm"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></span></summary><p>You can usually reach it through <bdi>Zapier</bdi>, <bdi>Make</bdi>, <bdi>n8n</bdi> or the <bdi>API</bdi>. <a href="/contact">Talk to us</a> and we will tell you the best fit.</p></details><details class="faq-item"><summary>How do I add my <bdi>WhatsApp</bdi> number?<span class="pm"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></span></summary><p>You connect your number from the dashboard and the employee starts replying. If you want a hand, our team sets it up with you.</p></details><details class="faq-item"><summary>Where do I find prices?<span class="pm"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></span></summary><p>Every package and price is on the <a href="/pricing">pricing page</a>.</p></details></div>
</div></section>

<section class="s white-bg"><div class="container">
  <div class="s-head"><h2>Keep exploring</h2></div>
  <div class="xnav"><a class="xcard" href="/use-cases"><span class="xi" style="background:#8b5cf6"><img src="/media/img/genu.svg" alt="" width="28" height="28"></span><span><b>Use cases</b><span>Start from the result you want</span></span><span class="go"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span></a><a class="xcard" href="/how-it-works"><span class="xi" style="background:#52a7cc"><img src="/media/img/genu.svg" alt="" width="28" height="28"></span><span><b>A tour of GenuDo</b><span>How the employees work</span></span><span class="go"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span></a><a class="xcard" href="/api-mcp"><span class="xi" style="background:#f5b03c"><img src="/media/img/genu.svg" alt="" width="28" height="28"></span><span><b><bdi>API</bdi> and <bdi>MCP</bdi></b><span>For developers and custom connections</span></span><span class="go"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span></a></div>
</div></section>

<section class="s ctaf"><div class="container"><div class="ctaf-card">
  <div class="ctaf-genu genu" data-genu data-expr="happy" data-liven style="--w:86px;--h:98px;--ospeed:7s"></div>
  <div class="eyebrow ctaf-eyebrow">Get started</div>
  <h2 style="margin-top:12px;">Connect your channels and tools, and leave the rest to the employee.</h2>
  <p class="lead">Tell us what you use, and we will show you an employee working on it.</p>
  <div class="ctaf-cta"><a href="https://app.genudo.ai/auth/register" class="btn btn-primary btn-lg">Start free</a><a href="/contact" class="ctaf-sec">or talk to us <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a></div>
</div></div></section>
</div>`;
export default html;
