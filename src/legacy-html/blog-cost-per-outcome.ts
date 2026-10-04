// /blog/cost-per-outcome — value-led polish (EN). See docs/website/BUILD-BRIEF.md.
const html = `<div class="pg-post">
<article class="post"><div class="container post-in">
  <div class="crumb"><a href="/blog">Blog</a><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg><span>Insights</span></div>
  <h1>Measure the cost per outcome, not the cost per request</h1>
  <div class="p-meta"><span class="av">YE</span>Yasser El-Sayed<span class="dot"></span>Jun 21, 2026<span class="dot"></span>5 min read</div>
  <div class="post-cover" style="background:linear-gradient(135deg,#6366f1,#0ea5e9)"><span class="pc-title">Cost <span class="a">per outcome</span></span></div>
  <div class="post-body"><p>Per-request pricing is a trap for planning. It tells you what one reply cost, not whether it was worth it. The number that actually runs your business is <strong>cost per outcome</strong>: what you paid to qualify a lead, resolve a question, or book a meeting.</p>
<h2>Why one model can’t win</h2>
<p>Pick a cheap model and you’ll fumble the hard cases that matter most. Pick the most capable one and you’ll pay top-tier prices to answer “what time do you open?” Neither is a strategy.</p>
<h2>Routing changes the math</h2>
<p>When a fast, low-cost model handles the routine messages and a more capable model takes the tricky ones, your <em>blended</em> cost per outcome drops while quality on the hard cases goes up. The shape is simple:</p>
<ul>
<li><strong>Simple</strong> messages, like opening hours, go to the lowest-cost model.</li>
<li><strong>Moderate</strong> ones, like comparing two packages, go to a balanced model.</li>
<li><strong>Complex</strong> ones, like moving two visits and adding a family member, go to the most capable model. They are the minority, so you pay for that capability only where it matters.</li>
</ul>
<figure class="post-fig"><div class="mk mk-card" role="img" aria-label="Smart routing by message difficulty">
  <div class="mk-card__head"><div class="mk-card__title"><i class="mk-ic mk-ic--route"></i>Smart routing</div><span class="mk-chip mk-chip--green"><i class="mk-dot"></i>On</span></div>
  <div class="mk-tiers">
    <div class="mk-tier"><div class="mk-tier__head"><span class="mk-tier__name">Simple</span><span class="mk-tier__cost"><bdi>$0.004</bdi> / msg</span></div><p class="mk-tier__eg">“What time do you open?”</p><div class="mk-tier__model"><i class="mk-ic mk-ic--bolt"></i>Fast model</div><div class="mk-bar"><i style="--w:68%"></i></div><span class="mk-tier__share">68% of messages</span></div>
    <div class="mk-tier mk-tier--moderate"><div class="mk-tier__head"><span class="mk-tier__name">Moderate</span><span class="mk-tier__cost"><bdi>$0.01</bdi> / msg</span></div><p class="mk-tier__eg">“Compare your two packages for me.”</p><div class="mk-tier__model"><i class="mk-ic mk-ic--sparkle"></i>Balanced model</div><div class="mk-bar"><i style="--w:26%"></i></div><span class="mk-tier__share">26% of messages</span></div>
    <div class="mk-tier mk-tier--complex"><div class="mk-tier__head"><span class="mk-tier__name">Complex</span><span class="mk-tier__cost"><bdi>$0.02</bdi> / msg</span></div><p class="mk-tier__eg">“Plan a 3-visit treatment around my travel dates.”</p><div class="mk-tier__model"><i class="mk-ic mk-ic--target"></i>Advanced model</div><div class="mk-bar"><i style="--w:6%"></i></div><span class="mk-tier__share">6% of messages</span></div>
  </div>
</div>
<div class="mk mk-card" role="img" aria-label="Spend cap per conversation">
  <div class="mk-card__head"><div class="mk-card__title"><i class="mk-ic mk-ic--wallet"></i>Spend cap per conversation</div><span class="mk-toggle is-on"></span></div>
  <div class="mk-cap__value"><b><bdi>$0.32</bdi></b> of <bdi>$0.50</bdi> used</div>
  <div class="mk-bar mk-bar--amber"><i style="--w:64%"></i></div>
  <p class="mk-cap__rule"><i class="mk-ic mk-ic--alert"></i><span>When the cap is reached: pause the AI in this chat and alert the team.</span></p>
</div><figcaption>Illustrative routing and spend cap. The figures are examples, not GenuDo prices.</figcaption></figure>
<blockquote>Optimize the blend, not the model.</blockquote>
<h2>What to actually track</h2>
<p>Put three things on the wall: what each resolved conversation cost, how many conversations reached an outcome, and what share of traffic needed the most capable model. When routing is working, the first two improve while the third stays small.</p>
<p>And keep a safety net: set a spend cap per conversation, so a runaway chat pauses the AI and alerts your team instead of quietly burning budget. <a href="/how-it-works#models">See how smart routing works</a>.</p></div>
  <div class="post-cta"><h3>Build your first AI employee</h3><p>Pick the outcome you want, connect a channel, and let it start answering your customers.</p><div class="post-cta-row"><a href="https://app.genudo.ai/auth/register" class="btn btn-primary btn-lg">Start free</a><a href="/contact" class="post-cta-sec">Book a demo</a></div></div>
</div></article>

<section class="s white-bg"><div class="container">
  <div class="s-head"><span class="eyebrow">Keep reading</span><h2>More from the blog</h2></div>
  <div class="blog-grid"><a class="pcard" href="/blog/ai-employees-vs-chatbots"><div class="pcover" style="background:linear-gradient(135deg,#4f46e5,#7c3aed)"><span class="pc-title">From chatbots to <span class="a">AI employees</span></span></div><div class="pc-body"><div class="pc-cat">Playbooks</div><h3>AI employees vs. chatbots: what actually changed</h3><p>A chatbot answers. An employee finishes the job. That difference decides what you can hand off.</p><div class="pc-meta"><span class="av">YE</span>Yasser El-Sayed<span class="dot"></span>Jul 10, 2026</div></div></a><a class="pcard" href="/blog/whatsapp-team-workflows"><div class="pcover" style="background:linear-gradient(135deg,#0b7a63,#22c55e)"><span class="pc-title">AI on <span class="a">WhatsApp</span></span></div><div class="pc-body"><div class="pc-cat">Playbooks</div><h3>Run your team from WhatsApp (without the chaos)</h3><p>The work happens in WhatsApp, not in a dashboard. Here is how to keep control of it from your phone.</p><div class="pc-meta"><span class="av">MA</span>Mariam Adel<span class="dot"></span>Jul 3, 2026</div></div></a><a class="pcard" href="/blog/pipeline-not-inbox"><div class="pcover" style="background:linear-gradient(135deg,#7c3aed,#a855f7)"><span class="pc-title">Conversations → <span class="a">a process</span></span></div><div class="pc-body"><div class="pc-cat">Playbooks</div><h3>Why your AI needs a pipeline, not just an inbox</h3><p>An inbox tells you what was said. A pipeline tells you what happened to each deal.</p><div class="pc-meta"><span class="av">MA</span>Mariam Adel<span class="dot"></span>Jun 9, 2026</div></div></a></div>
</div></section>
</div>`;
export default html;
