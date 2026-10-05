// /api-mcp — value-led rewrite (EN). See docs/website/BUILD-BRIEF.md.
const html = `<div class="pg-api-mcp">
<section class="phero"><div class="container phero-in">
  <div>
    <div class="crumb"><a href="/resources">Resources</a><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg><span>API &amp; MCP</span></div>
    <h1>Run and coach your AI team from Claude or ChatGPT, in plain language.</h1>
    <p class="lead">Say what you want the way you would tell a colleague: &ldquo;set up a new sales employee&rdquo; or &ldquo;fix what Aaref keeps saying&rdquo;. GenuDo shows every change as a diff first, old and new side by side, and nothing touches your account until you confirm it.</p>
    <div class="heroc-cta"><a href="https://app.genudo.ai/auth/register" class="btn btn-primary btn-lg">Start free</a><a href="#setup" class="btn btn-ondark btn-lg">See how it works</a></div>
    <div class="pchips"><span class="pchip"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>Plain language, no extra screens</span><span class="pchip"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z"/></svg>Every change shown before it runs</span><span class="pchip"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 3 14h7l-1 8 10-12h-7z"/></svg>About 3 minutes to set up</span></div>
  </div>
  <div class="phero-media pg-mock">
<div class="mk pg-chat" role="img" aria-label="A Claude chat: a request to change Aaref's instructions, shown as a diff before confirming">
  <div class="pg-chat-bar"><span class="pg-chat-logo"><i class="mk-ic mk-ic--sparkle"></i></span><b>Claude</b><span class="mk-chip mk-chip--green"><i class="mk-dot mk-dot--live"></i>genudo · Connected</span></div>
  <div class="pg-chat-body">
    <p class="pg-me">Aaref only offers one slot. Make him offer the evening slots first to returning customers.</p>
    <p class="pg-tool"><i class="mk-ic mk-ic--search"></i>Read Aaref's current instructions</p>
    <div class="pg-diff">
      <div class="pg-diff-h"><i class="mk-ic mk-ic--note"></i>Proposed change · Aaref · Instructions</div>
      <p class="pg-del">Offer a single slot for the booking.</p>
      <p class="pg-add">Offer evening slots first to returning customers, then the rest.</p>
    </div>
    <div class="pg-actions"><span class="mk-btn mk-btn--primary"><i class="mk-ic mk-ic--check"></i>Apply change</span><span class="mk-btn">Cancel</span></div>
    <span class="mk-caption">Nothing changes until you confirm. Illustrative data.</span>
  </div>
</div>
  </div>
</div></section>

<section class="s white-bg"><div class="container">
  <div class="s-head"><span class="eyebrow">What changes for your business</span><h2>Manage your AI team from where you already work.</h2><p class="lead">Instead of hopping between screens and settings, you write your request to Claude or ChatGPT and it acts inside your GenuDo account. You make the call.</p></div>
  <div class="pg-outs"><div class="featc"><div class="oi" style="background:#6468f0"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 3 14h7l-1 8 10-12h-7z"/></svg></div><h4>A new sales employee without building anything</h4><p>Describe your business in your own words and the employee is prepared in front of you: stages, instructions and the facts it answers from.</p></div><div class="featc"><div class="oi" style="background:#6468f0"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 2l4 4-4 4"/><path d="M3 11V9a3 3 0 0 1 3-3h15"/><path d="M7 22l-4-4 4-4"/><path d="M21 13v2a3 3 0 0 1-3 3H3"/></svg></div><h4>An agent went off-script? Fix it with one sentence</h4><p>Tell it what went wrong. It reviews the conversation and proposes a clear change to the instructions. You approve or decline.</p></div><div class="featc"><div class="oi" style="background:#6468f0"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="8" height="8" rx="2"/><rect x="13" y="13" width="8" height="8" rx="2"/><path d="M11 7h4a2 2 0 0 1 2 2v4"/></svg></div><h4>Ready customers reach your CRM on their own</h4><p>Customer data goes to your CRM, Google Sheets, Zapier, Make or n8n at exactly the right moment.</p></div></div>
</div></section>

<section class="s tint-bg"><div class="container">
  <div class="pg-split">
    <div class="pg-copy"><span class="eyebrow">You stay in control</span><h2>Every change is shown before it happens.</h2><p class="lead">Any write to your account, like editing instructions, adding a fact or connecting another system, is shown as a diff: the old line and the new one side by side. You review it and approve, or cancel.</p>
      <ul class="plist"><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 7"/></svg>Every change is shown first and waits for your approval</li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 7"/></svg>Sign in from your browser, no token to create</li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 7"/></svg>If you do use a token, it is scoped and you can revoke it any time</li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 7"/></svg>Reports and diagnosis are read-only and change nothing</li></ul>
    </div>
    <div class="pg-mock"><div class="pg-ph"><div class="mk pg-confirm" role="img" aria-label="Confirmation card: a change to your GenuDo account only happens after you approve">
        <div class="pg-confirm-h"><i class="mk-ic mk-ic--shield"></i><b>Review before it runs</b></div>
        <ol class="pg-confirm-steps">
          <li><span class="mk-chip mk-chip--green"><i class="mk-ic mk-ic--search"></i>Read</span><span>Reads the current instructions</span></li>
          <li><span class="mk-chip mk-chip--amber"><i class="mk-ic mk-ic--note"></i>Proposed</span><span>Shows the change as a diff</span></li>
          <li><span class="mk-chip mk-chip--indigo"><i class="mk-ic mk-ic--check"></i>Your OK</span><span>Nothing changes before it</span></li>
        </ol>
      </div></div></div>
  </div>
</div></section>

<section class="s white-bg" id="examples"><div class="container">
  <div class="s-head"><span class="eyebrow">Real examples</span><h2>Four requests you make in one sentence.</h2><p class="lead">These are the worked examples on the MCP Server page inside the app.</p></div>
  <div class="pg-ex"><article class="pg-exc"><span class="pg-tag">4 steps</span><h4>Launch a new sales agent</h4><p class="pg-say">&ldquo;I run a dental clinic and want a sales employee on WhatsApp.&rdquo;</p><p>It asks about your business and prepares the employee in front of you. You review each step before it is confirmed.</p></article><article class="pg-exc"><span class="pg-tag">5 steps</span><h4>Fix an agent that went off-script</h4><p class="pg-say">&ldquo;A customer asked about prices and the agent answered wrong.&rdquo;</p><p>It reviews the conversation, finds the cause and proposes a clear change to the instructions.</p></article><article class="pg-exc"><span class="pg-tag">5 steps</span><h4>Register leads into your CRM</h4><p class="pg-say">&ldquo;Send every interested customer to Google Sheets.&rdquo;</p><p>It ties the data to the right stage, so a customer is recorded the moment they are ready.</p></article></div>
</div></section>

<section class="s tint-bg"><div class="container">
  <div class="s-head"><span class="eyebrow">What you can do</span><h2>Six groups, from building to reporting.</h2><p class="lead">Each group holds ready-made skills. A &ldquo;Write&rdquo; tag means the change waits for your approval.</p></div>
  <div class="pg-caps"><div class="pg-cap"><span class="pg-tag is-write">Write</span><b>Build a pipeline</b><span class="n">5 skills</span></div><div class="pg-cap"><span class="pg-tag is-write">Write</span><b>Edit a live agent</b><span class="n">5 skills</span></div><div class="pg-cap"><span class="pg-tag is-write">Write</span><b>Automate &amp; integrate</b><span class="n">4 skills</span></div><div class="pg-cap"><span class="pg-tag is-write">Read + Write</span><b>Knowledge &amp; opportunities</b><span class="n">2 skills</span></div><div class="pg-cap"><span class="pg-tag is-read">Read</span><b>Diagnose &amp; analyse</b><span class="n">4 skills</span></div><div class="pg-cap"><span class="pg-tag is-write">Write</span><b>Migrate an old pipeline</b><span class="n">2 skills</span></div></div>
  <p class="pg-agents">Plus 6 autonomous agents that run in Cowork and Claude Code: pipeline architect, pipeline doctor, automation engineer, revenue analyst, knowledge librarian and pipeline migrator.</p>
</div></section>

<section class="s white-bg" id="setup"><div class="container">
  <div class="s-head"><span class="eyebrow">Setup</span><h2>Ready in about 3 minutes.</h2><p class="lead">Setup happens from the MCP Server page in the app, which includes an Arabic walkthrough video.</p></div>
  <div class="flow"><div class="fstep"><div class="n">01</div><h4>Add the marketplace</h4><p>In Claude open Settings &gt; Plugins and add genudo-ai/claude-plugin.</p></div><div class="fstep"><div class="n">02</div><h4>Install the plugin</h4><p>Install Genudo - AI Workforce from the list.</p></div><div class="fstep"><div class="n">03</div><h4>Enable the connector</h4><p>Under Connectors pick genudo and press Install.</p></div><div class="fstep"><div class="n">04</div><h4>Approve the sign-in</h4><p>Sign in from your browser and start talking. No token to create.</p></div></div>
  <p class="pg-note">On ChatGPT it is almost the same: open Plugins and add genudo-ai/chatgpt-plugin. The Claude plugin includes 29 tools, 22 skills and 6 agents; the ChatGPT one has 29 tools and 28 skills.</p>
  <div class="pg-shot"><img src="/media/shots/mcp-claude-plugin.jpg" alt="The Genudo - AI Workforce plugin page inside Claude" width="1600" height="1075" loading="lazy"></div>
</div></section>

<section class="s tint-bg" id="developers"><div class="container">
  <div class="pg-split">
    <div class="pg-copy"><span class="eyebrow">For developers</span><h2>Want to connect without the plugin? Here is the endpoint.</h2><p class="lead">If you use Claude Code, Codex or any other MCP client, point it straight at the MCP server. You get the tools without the ready-made skills and agents.</p>
      <ul class="plist"><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 7"/></svg>MCP with a browser sign-in, or with a token that has the mcp:use scope</li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 7"/></svg>REST API with a scoped token, JSON responses</li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 7"/></svg>Stage actions send data to any URL at the right moment</li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 7"/></svg>Full reference at api.genudo.ai/docs</li></ul>
      <div class="pg-links"><a href="https://api.genudo.ai/docs" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Read the docs</a></div>
    </div>
    <div>
      <div class="pg-code" dir="ltr"><pre><span class="c"># MCP server URL</span>
<span class="s">https://api.genudo.ai/mcp</span>

<span class="c"># Claude Code</span>
claude mcp add --transport http genudo \\
  <span class="s">https://api.genudo.ai/mcp</span>

<span class="c"># REST API: scoped bearer token</span>
curl <span class="k">https://api.genudo.ai/v1/opportunities</span> \\
  -H <span class="s">"Authorization: Bearer $GENUDO_TOKEN"</span></pre></div>
      <p class="pg-note">Token scopes (pick only what you need):</p>
      <div class="pg-scopes"><code>opportunities:read</code><code>opportunities:write</code><code>conversations:write</code><code>messages:send</code><code>knowledge:read</code><code>knowledge:write</code><code>mcp:use</code></div>
      <p class="pg-note">A token is shown once when you create it, and only a hashed copy is kept. Choose 30 days, 90 days (the default), 1 year or no expiry, and revoke it whenever you like.</p>
    </div>
  </div>
</div></section>

<section class="s white-bg"><div class="container">
  <div class="s-head"><span class="eyebrow">Keep going</span><h2>Want more?</h2></div>
  <div class="xnav" style="margin-top:24px">
  <a class="xcard" href="https://api.genudo.ai/docs" target="_blank" rel="noopener noreferrer"><span class="xi" style="background:#8b5cf6"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m8 6-6 6 6 6"/><path d="m16 6 6 6-6 6"/></svg></span><span><b>API documentation</b><span>Endpoints, responses and errors</span></span><span class="go"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span></a>
  <a class="xcard" href="/integrations"><span class="xi" style="background:#14b8a6"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="8" height="8" rx="2"/><rect x="13" y="13" width="8" height="8" rx="2"/><path d="M11 7h4a2 2 0 0 1 2 2v4"/></svg></span><span><b>Integrations</b><span>Ready-made links to the tools you use</span></span><span class="go"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span></a>
  <a class="xcard" href="/security"><span class="xi" style="background:#22c55e"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z"/></svg></span><span><b>Security</b><span>How we protect your data</span></span><span class="go"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span></a>
  </div>
</div></section>

<section class="s ctaf"><div class="container"><div class="ctaf-card">
  <div class="ctaf-genu genu" data-genu data-expr="happy" data-action="code" data-liven style="--w:86px;--h:98px;--ospeed:7s"></div>
  <div class="eyebrow ctaf-eyebrow">Get started</div>
  <h2 style="margin-top:12px;">Put Claude or ChatGPT to work for your team.</h2>
  <p class="lead">Turn on the plugin and start with one sentence.</p>
  <div class="ctaf-cta"><a href="https://app.genudo.ai/auth/register" class="btn btn-primary btn-lg">Start free</a><a href="/contact" class="ctaf-sec">or talk to us <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a></div>
</div></div></section>
</div>`;
export default html;
