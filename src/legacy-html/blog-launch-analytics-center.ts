// /blog/launch-analytics-center — value-led polish (EN). See docs/website/BUILD-BRIEF.md.
const html = `<div class="pg-post">
<article class="post"><div class="container post-in">
  <div class="crumb"><a href="/blog">Blog</a><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg><span>Company</span></div>
  <h1>Introducing the Analytics Center</h1>
  <div class="p-meta"><span class="av">YE</span>Yasser El-Sayed<span class="dot"></span>May 30, 2026<span class="dot"></span>4 min read</div>
  <div class="post-cover" style="background:linear-gradient(135deg,#1e293b,#4338ca)"><span class="pc-title">New: <span class="a">Analytics Center</span></span></div>
  <div class="post-body"><p>Today we’re shipping the <strong>Analytics Center</strong>: one place to see what your entire AI workforce is producing.</p>
<p>As teams add employees (Aaref for sales, Adnan for support, ROZ for quality), the question shifts from “does it reply?” to “what is it producing, and what does it cost?” The Analytics Center answers that.</p>
<h2>What you can see</h2>
<ul>
<li><strong>Outcomes.</strong> Opportunities won, and where the others dropped off, stage by stage.</li>
<li><strong>Workload.</strong> How much each employee is handling.</li>
<li><strong>Cost.</strong> The cost per reply and per stage, with smart routing factored in.</li>
<li><strong>Comparisons.</strong> Filter by employee to see who is carrying which load.</li>
</ul>
<figure class="post-fig"><div class="mk mk-kpis" role="img" aria-label="Dashboard: opportunities and AI cost">
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
</div><figcaption>Illustrative dashboard. The numbers are sample data.</figcaption></figure>
<blockquote>If you can measure an employee, you can manage one.</blockquote>
<h2>Available now</h2>
<p>Open the dashboard and your existing agents’ history is already there. Pair it with smart routing to watch your cost per outcome improve as the mix improves. <a href="/how-it-works#analytics">See how analytics works</a>.</p></div>
  <div class="post-cta"><h3>Build your first AI employee</h3><p>Pick the outcome you want, connect a channel, and let it start answering your customers.</p><div class="post-cta-row"><a href="https://app.genudo.ai/auth/register" class="btn btn-primary btn-lg">Start free</a><a href="/contact" class="post-cta-sec">Book a demo</a></div></div>
</div></article>

<section class="s white-bg"><div class="container">
  <div class="s-head"><span class="eyebrow">Keep reading</span><h2>More from the blog</h2></div>
  <div class="blog-grid"><a class="pcard" href="/blog/ai-employees-vs-chatbots"><div class="pcover" style="background:linear-gradient(135deg,#4f46e5,#7c3aed)"><span class="pc-title">From chatbots to <span class="a">AI employees</span></span></div><div class="pc-body"><div class="pc-cat">Playbooks</div><h3>AI employees vs. chatbots: what actually changed</h3><p>A chatbot answers. An employee finishes the job. That difference decides what you can hand off.</p><div class="pc-meta"><span class="av">YE</span>Yasser El-Sayed<span class="dot"></span>Jul 10, 2026</div></div></a><a class="pcard" href="/blog/whatsapp-team-workflows"><div class="pcover" style="background:linear-gradient(135deg,#0b7a63,#22c55e)"><span class="pc-title">AI on <span class="a">WhatsApp</span></span></div><div class="pc-body"><div class="pc-cat">Playbooks</div><h3>Run your team from WhatsApp (without the chaos)</h3><p>The work happens in WhatsApp, not in a dashboard. Here is how to keep control of it from your phone.</p><div class="pc-meta"><span class="av">MA</span>Mariam Adel<span class="dot"></span>Jul 3, 2026</div></div></a><a class="pcard" href="/blog/cost-per-outcome"><div class="pcover" style="background:linear-gradient(135deg,#6366f1,#0ea5e9)"><span class="pc-title">Cost <span class="a">per outcome</span></span></div><div class="pc-body"><div class="pc-cat">Insights</div><h3>Measure the cost per outcome, not the cost per request</h3><p>The number that runs your business is what you paid to qualify a lead or book a meeting.</p><div class="pc-meta"><span class="av">YE</span>Yasser El-Sayed<span class="dot"></span>Jun 21, 2026</div></div></a></div>
</div></section>
</div>`;
export default html;
