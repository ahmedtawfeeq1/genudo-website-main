// /pricing — EN. Prices, packages and plan contents are unchanged (owner decision D3). See docs/website/BUILD-BRIEF.md.
const html = `<div class="pg-pricing">
<div class="prhead"><div class="container">
  <span class="pill">Pricing</span>
  <h1>Simple pricing that scales with your conversations.</h1>
  <p>Every plan ships with AI employees, pipelines and channel connections — WhatsApp, Messenger, Instagram and more. Start small and add employees as you grow.</p>
</div></div>

<section class="s-sm white-bg"><div class="container">
  <div class="plans">
    <div class="plan">
      <div class="pn">Free</div>
      <div class="pd">Build your first AI sales agent and pipeline.</div>
      <div class="price"><span class="cur">£</span><span class="amt"><bdi>0</bdi></span></div>
      <div class="bill">Free forever</div>
      <a href="https://app.genudo.ai/auth/register" class="pbtn ghost">Get started</a>
      <div class="inc">What's included</div>
      <ul>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 7"/></svg><b>1</b> AI agent &amp; pipeline</li>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 7"/></svg><b>$2</b> AI credits included</li>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 7"/></svg>WhatsApp, Messenger &amp; Instagram</li>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 7"/></svg>Unified inbox &amp; dashboard</li>
      </ul>
    </div>
    <div class="plan">
      <div class="pn">Starter</div>
      <div class="pd">For a small team launching its first employee.</div>
      <div class="price"><span class="cur">£</span><span class="amt"><bdi>20,999</bdi></span></div>
      <div class="bill">billed for 3 months</div>
      <a href="https://app.genudo.ai/auth/register" class="pbtn ghost">Get started</a>
      <div class="inc">Everything in Free, plus</div>
      <ul>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 7"/></svg><b>1</b> AI employee &amp; pipeline</li>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 7"/></svg><b>5,000</b> knowledge rows</li>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 7"/></svg><b>100</b> automation tasks / mo</li>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 7"/></svg>Google Suite &amp; Telegram</li>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 7"/></svg><b>5 hrs</b> onboarding support</li>
      </ul>
    </div>
    <div class="plan pop">
      <div class="badge">Most popular</div>
      <div class="pn">Growth</div>
      <div class="pd">For teams running a small AI workforce.</div>
      <div class="price"><span class="cur">£</span><span class="amt"><bdi>37,999</bdi></span></div>
      <div class="bill">billed for 6 months</div>
      <a href="https://app.genudo.ai/auth/register" class="pbtn solid">Get started</a>
      <div class="inc">Everything in Starter, plus</div>
      <ul>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 7"/></svg><b>3</b> AI employees &amp; pipelines</li>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 7"/></svg><b>10,000</b> knowledge rows</li>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 7"/></svg><b>500</b> automation tasks / mo</li>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 7"/></svg><b>API &amp; SDK</b> access</li>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 7"/></svg><b>15 hrs</b> technical support</li>
      </ul>
    </div>
    <div class="plan">
      <div class="pn">Scale</div>
      <div class="pd">For a full, collaborating AI workforce.</div>
      <div class="price"><span class="cur">£</span><span class="amt"><bdi>69,999</bdi></span></div>
      <div class="bill">billed annually</div>
      <a href="https://app.genudo.ai/auth/register" class="pbtn ghost">Get started</a>
      <div class="inc">Everything in Growth, plus</div>
      <ul>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 7"/></svg><b>5</b> AI employees (add more)</li>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 7"/></svg><b>1,000</b> automation tasks / mo</li>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 7"/></svg><b>15</b> active workflows</li>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 7"/></svg>Multi-employee teamwork</li>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 7"/></svg><b>30 hrs</b> priority support</li>
      </ul>
    </div>
  </div>

  <div class="ent">
    <div><h3>Enterprise</h3><p>Unlimited employees, dedicated support, SSO, data residency and a custom rollout for your whole organisation.</p></div>
    <a href="/contact" class="btn btn-primary btn-lg">Talk to sales</a>
  </div>
  <a class="rozcall" href="/sol-operations#pricing">
    <img src="/media/img/roz.svg" alt="ROZ" width="56" height="60" loading="lazy">
    <span><b>Looking for ROZ?</b><span>ROZ, our AI quality control employee, has her own plans, priced by the WhatsApp numbers she follows. You will find them on her page.</span></span>
    <span class="rozgo">See ROZ’s plans →</span>
  </a>
</div></section>

<section class="s tint-bg"><div class="container">
  <div class="s-head center"><span class="eyebrow" style="color:var(--primary)">Compare</span><h2>Compare all plans</h2></div>
  <div class="cmpbox">
  <table class="cmp">
    <thead><tr>
      <th class="feat"></th>
      <th><div class="pn">Free</div><div class="pp"><bdi>£0</bdi></div></th>
      <th><div class="pn">Starter</div><div class="pp"><bdi>£20,999</bdi> · 3 mo</div></th>
      <th class="pop"><div class="pn">Growth</div><div class="pp"><bdi>£37,999</bdi> · 6 mo</div></th>
      <th><div class="pn">Scale</div><div class="pp"><bdi>£69,999</bdi> · yr</div></th>
    </tr></thead>
    <tbody>
      <tr class="grouprow"><td colspan="5">Employees &amp; pipelines</td></tr>
      <tr><td class="feat">AI employees</td><td>—</td><td><b>1</b></td><td class="pop"><b>3</b></td><td><b>5+</b></td></tr>
      <tr><td class="feat">AI agents &amp; pipelines</td><td><b>1</b></td><td><b>1</b></td><td class="pop"><b>3</b></td><td><b>5+</b></td></tr>
      <tr><td class="feat">Multi-employee teamwork</td><td class="no">—</td><td class="no">—</td><td class="pop no">—</td><td><span class="yes"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 7"/></svg></span></td></tr>
      <tr><td class="feat">Add extra employees</td><td class="no">—</td><td class="no">—</td><td class="pop no">—</td><td><span class="yes"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 7"/></svg></span></td></tr>

      <tr class="grouprow"><td colspan="5">Knowledge &amp; automation</td></tr>
      <tr><td class="feat">Knowledge rows</td><td>—</td><td><b>5,000</b></td><td class="pop"><b>10,000</b></td><td><b>20,000</b></td></tr>
      <tr><td class="feat">Automation tasks / month</td><td>—</td><td><b>100</b></td><td class="pop"><b>500</b></td><td><b>1,000</b></td></tr>
      <tr><td class="feat">Active workflows</td><td>—</td><td><b>1</b></td><td class="pop"><b>3</b></td><td><b>15</b></td></tr>
      <tr><td class="feat">AI credits</td><td><b>$2</b></td><td>3-month pack</td><td class="pop">6-month pack</td><td>12-month pack</td></tr>

      <tr class="grouprow"><td colspan="5">Channels &amp; integrations</td></tr>
      <tr><td class="feat">WhatsApp, Messenger, Instagram</td><td><span class="yes"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 7"/></svg></span></td><td><span class="yes"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 7"/></svg></span></td><td class="pop"><span class="yes"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 7"/></svg></span></td><td><span class="yes"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 7"/></svg></span></td></tr>
      <tr><td class="feat">Telegram</td><td class="no">—</td><td><span class="yes"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 7"/></svg></span></td><td class="pop"><span class="yes"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 7"/></svg></span></td><td><span class="yes"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 7"/></svg></span></td></tr>
      <tr><td class="feat">Google Suite &amp; Sheets</td><td class="no">—</td><td><span class="yes"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 7"/></svg></span></td><td class="pop"><span class="yes"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 7"/></svg></span></td><td><span class="yes"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 7"/></svg></span></td></tr>
      <tr><td class="feat">Deploy on unlimited websites</td><td class="no">—</td><td><span class="yes"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 7"/></svg></span></td><td class="pop"><span class="yes"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 7"/></svg></span></td><td><span class="yes"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 7"/></svg></span></td></tr>
      <tr><td class="feat">API &amp; SDK / MCP access</td><td class="no">—</td><td class="no">—</td><td class="pop"><span class="yes"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 7"/></svg></span></td><td><span class="yes"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 7"/></svg></span></td></tr>

      <tr class="grouprow"><td colspan="5">Support</td></tr>
      <tr><td class="feat">Unified inbox &amp; analytics</td><td><span class="yes"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 7"/></svg></span></td><td><span class="yes"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 7"/></svg></span></td><td class="pop"><span class="yes"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 7"/></svg></span></td><td><span class="yes"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 7"/></svg></span></td></tr>
      <tr><td class="feat">Technical support</td><td>Community</td><td><b>5 hrs</b></td><td class="pop"><b>15 hrs</b></td><td><b>30 hrs</b></td></tr>
    </tbody>
  </table>
  </div>
  <p class="cmpnote">Prices are indicative — final packages confirmed at sign-up. Need something custom? <a href="/contact">Talk to sales →</a></p>
</div></section>

<section class="s white-bg"><div class="container">
  <div class="s-head center"><span class="eyebrow" style="color:var(--primary)">Questions</span><h2>Pricing FAQ</h2></div>
  <div class="faq">
    <details class="faq-item"><summary>What counts as an “AI employee”?<span class="pm"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></span></summary><p>An AI employee is a configured agent with its own persona, knowledge, tools and pipeline — like a Sales Agent or Customer Service agent. You can deploy it across every connected channel, and add more employees as you grow.</p></details>
    <details class="faq-item"><summary>Can I add more employees later?<span class="pm"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></span></summary><p>Yes. Start with one and add employees to your plan as your conversation volume grows. The Scale plan supports adding extra employees on top of the included five.</p></details>
    <details class="faq-item"><summary>What are automation tasks and knowledge rows?<span class="pm"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></span></summary><p>Automation tasks are the stage actions and workflows your employees run (notifications, webhooks, record updates). Knowledge rows are the structured entries in your knowledge tables that agents answer from.</p></details>
    <details class="faq-item"><summary>Do you offer a plan for agencies or enterprises?<span class="pm"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></span></summary><p>Yes — Enterprise adds unlimited employees, SSO, data residency, dedicated support and a custom rollout. Agencies typically run a branded employee per client. Talk to sales and we’ll scope it with you.</p></details>
  </div>
</div></section>

<section class="s ctaf"><div class="container"><div class="ctaf-card">
  <div class="ctaf-genu genu" data-genu data-expr="happy" data-liven style="--w:86px;--h:98px;--ospeed:7s"></div>
  <div class="eyebrow ctaf-eyebrow">Get started</div>
  <h2 style="margin-top:12px;">Start free. Scale when it pays for itself.</h2>
  <p class="lead">Build your first AI employee today — no card required — and add more as it takes on the work.</p>
  <div class="ctaf-cta"><a href="https://app.genudo.ai/auth/register" class="btn btn-primary btn-lg">Get started free</a><a href="/contact" class="ctaf-sec">or talk to sales <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a></div>
  <div class="ctaf-trust"><span class="live-dot"></span>Free forever plan<span class="sep"></span>No card required<span class="sep"></span>Live in a day</div>
</div></div></section>
</div>`;
export default html;
