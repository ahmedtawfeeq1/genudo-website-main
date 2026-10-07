// /pricing — EN. Prices, packages and plan contents are unchanged (owner decision D3). See docs/website/BUILD-BRIEF.md.
const html = `<div class="pg-pricing">
<div class="prhead"><div class="container">
  <span class="pill">Pricing</span>
  <h1>Simple pricing that scales with your conversations.</h1>
  <p>Every plan ships with AI employees, pipelines and channel connections — WhatsApp, Messenger, Instagram and more. Start small and add employees as you grow.</p>
</div></div>

<section class="s-sm white-bg"><div class="container">
  <!--PLANS-->
<!--ADDONS-->
  <div class="ent">
    <div><h3>Enterprise</h3><p>Unlimited employees, dedicated support, SSO, data residency and a custom rollout for your whole organisation.</p></div>
    <a href="/contact" class="btn btn-primary btn-lg">Talk to sales</a>
  </div>
  <a class="rozcall" href="/sol-operations#pricing">
    <img src="/media/img/roz-v2.svg" alt="ROZ" width="56" height="60" loading="lazy">
    <span><b>Looking for ROZ?</b><span>ROZ, our AI quality control employee, has her own plans, priced by the WhatsApp numbers she follows. You will find them on her page.</span></span>
    <span class="rozgo">See ROZ’s plans →</span>
  </a>
</div></section>

<section class="s tint-bg"><div class="container">
  <div class="s-head center"><span class="eyebrow" style="color:var(--primary)">Compare</span><h2>Compare all plans</h2></div>
  <div class="cmpbox">
  <!--COMPARE-->
  </div>
  <p class="cmpnote">Prices are indicative — final packages confirmed at sign-up. Need something custom? <a href="/contact">Talk to sales →</a></p>
</div></section>

<section class="s white-bg"><div class="container">
  <div class="s-head center"><span class="eyebrow" style="color:var(--primary)">Questions</span><h2>Pricing FAQ</h2></div>
  <div class="faq">
    <details class="faq-item"><summary>What counts as an “AI employee”?<span class="pm"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></span></summary><p>An AI employee is a configured agent with its own persona, knowledge, tools and pipeline — like a Sales Agent or Customer Service agent. You can deploy it across every connected channel, and add more employees as you grow.</p></details>
    <details class="faq-item"><summary>Can I add more employees later?<span class="pm"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></span></summary><p>Yes. Start with one and add employees to your plan as your conversation volume grows. The Annual plan supports adding extra employees on top of the included five, and any plan can add an AI employee and pipeline as an add-on.</p></details>
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
