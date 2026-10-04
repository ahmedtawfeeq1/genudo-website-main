// /api-docs — value-led rewrite (EN). See docs/website/BUILD-BRIEF.md.
const html = `<div class="pg-api-docs">
<div class="rhead"><div class="container">
  <div class="crumb"><a href="/resources">Resources</a><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg><span>API Documentation</span></div>
  <h1>API Documentation</h1>
  <p>Build on GenuDo: create agents, drive conversations, read contacts and pipelines, and send data to your own systems at the right moment, over a clean REST API and MCP.</p>
</div></div>

<section class="s-sm"><div class="container">
  <div class="docs">
    <nav class="docs-nav" aria-label="API documentation sections">
      <div class="dn-sec">Getting started</div>
      <a href="#intro" class="on">Introduction</a>
      <a href="#auth">Authentication</a>
      <a href="#errors">Errors &amp; rate limits</a>
      <div class="dn-sec">Core resources</div>
      <a href="#agents">Agents</a>
      <a href="#conversations">Conversations</a>
      <a href="#contacts">Contacts</a>
      <a href="#pipelines">Pipelines</a>
      <div class="dn-sec">Automate &amp; extend</div>
      <a href="#actions">Stage actions</a>
      <a href="#mcp">MCP</a>
    </nav>
    <main class="docs-main">
      <section id="intro">
        <h2>Introduction</h2>
        <p>The GenuDo API is organised around REST. It has predictable, resource-oriented URLs, returns JSON, and uses standard HTTP verbs and status codes. The base URL for all requests is:</p>
        <div class="endpoint"><span class="method get">BASE</span><span class="path">https://api.genudo.ai/v1</span></div>
        <div class="callout"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 8v4M12 16h.01"/></svg><span>Plug GenuDo into the systems you already run: read and update opportunities, send messages and keep your knowledge base current. The always-current, complete reference lives at <span class="mono">api.genudo.ai/docs</span>.</span></div>
      </section>

      <section id="auth">
        <h2>Authentication</h2>
        <p>Authenticate with a scoped, revocable token sent as a Bearer token. Create tokens in <span class="mono">API Keys &amp; Tokens</span> (the Developer section of the sidebar). Keep tokens server-side and never ship them in a browser.</p>
        <div class="code"><div class="code-head"><span class="lang">cURL</span></div><pre><span class="c"># Every request carries your token as a Bearer token</span>
curl https://api.genudo.ai/v1/agents \\
  -H <span class="s">"Authorization: Bearer $GENUDO_TOKEN"</span></pre></div>
        <p>Each token carries only the scopes you give it:</p>
        <div class="scopes"><code>opportunities:read</code><code>opportunities:write</code><code>conversations:write</code><code>messages:send</code><code>knowledge:read</code><code>knowledge:write</code><code>mcp:use</code></div>
        <p>The full token is shown once, when you create it, and only a hashed copy is kept. Choose an expiry of 30 days, 90 days (the default), 1 year or none, and revoke a token whenever you need to. The full reference lives at <span class="mono">api.genudo.ai/docs</span>.</p>
      </section>

      <section id="errors">
        <h2>Errors &amp; rate limits</h2>
        <p>GenuDo uses conventional HTTP status codes. <span class="mono">2xx</span> means success, <span class="mono">4xx</span> a problem with the request, and <span class="mono">5xx</span> an error on our side. Errors return a JSON body with a machine-readable <span class="mono">code</span> and a human message.</p>
        <div class="code"><div class="code-head"><span class="lang">JSON · 422</span></div><pre>{
  <span class="k">"error"</span>: {
    <span class="k">"code"</span>: <span class="s">"validation_error"</span>,
    <span class="k">"message"</span>: <span class="s">"channel is required"</span>,
    <span class="k">"param"</span>: <span class="s">"channel"</span>
  }
}</pre></div>
        <p>The API is rate limited per workspace. A <span class="mono">429</span> means you should back off and retry with an exponential delay.</p>
      </section>

      <section id="agents">
        <h2>Agents</h2>
        <p>An agent is a configured AI employee: a persona, a knowledge base, a set of tools and a model routing policy. Create one, then deploy it to any channel.</p>
        <div class="endpoint"><span class="method post">POST</span><span class="path">/v1/agents</span></div>
        <div class="endpoint"><span class="method get">GET</span><span class="path">/v1/agents/{id}</span></div>
        <div class="param head"><span class="pn">Parameter</span><span class="pt">Type</span><span class="pd">Description</span></div>
        <div class="param"><span class="pn">name</span><span class="pt">string</span><span class="pd">Display name for the agent, e.g. &ldquo;Sales Agent&rdquo;.</span></div>
        <div class="param"><span class="pn">persona</span><span class="pt">string</span><span class="pd">Instructions and tone the agent follows.</span></div>
        <div class="param"><span class="pn">knowledge_ids</span><span class="pt">array</span><span class="pd">Knowledge bases the agent can read from.</span></div>
        <div class="param"><span class="pn">model_policy</span><span class="pt">object</span><span class="pd">Routing rules: a fast model or a reasoning model per task.</span></div>
        <div class="code"><div class="code-head"><span class="lang">Node</span></div><pre><span class="k">const</span> res = <span class="k">await</span> fetch(<span class="s">"https://api.genudo.ai/v1/agents"</span>, {
  method: <span class="s">"POST"</span>,
  headers: {
    <span class="k">"Authorization"</span>: <span class="s">"Bearer "</span> + process.env.GENUDO_TOKEN,
    <span class="k">"Content-Type"</span>: <span class="s">"application/json"</span>
  },
  body: <span class="p">JSON</span>.stringify({
    name: <span class="s">"Sales Agent"</span>,
    persona: <span class="s">"Friendly, concise. Qualify then book a meeting."</span>,
    knowledge_ids: [<span class="s">"kb_inventory"</span>, <span class="s">"kb_pricing"</span>],
    model_policy: { <span class="k">routing</span>: <span class="s">"auto"</span> }
  })
});
<span class="k">const</span> agent = <span class="k">await</span> res.json();</pre></div>
      </section>

      <section id="conversations">
        <h2>Conversations</h2>
        <p>Send a message into a conversation and get the agent&rsquo;s reply, or list history. Conversations are tied to a contact and a channel.</p>
        <div class="endpoint"><span class="method post">POST</span><span class="path">/v1/conversations/{id}/messages</span></div>
        <div class="code"><div class="code-head"><span class="lang">JSON · response</span></div><pre>{
  <span class="k">"id"</span>: <span class="s">"msg_9f2"</span>,
  <span class="k">"role"</span>: <span class="s">"agent"</span>,
  <span class="k">"text"</span>: <span class="s">"The villa is available. Shall I hold Thursday 2pm?"</span>,
  <span class="k">"model"</span>: <span class="s">"fast"</span>,
  <span class="k">"cost_usd"</span>: <span class="n">0.0021</span>,
  <span class="k">"stage"</span>: <span class="s">"qualified"</span>
}</pre></div>
      </section>

      <section id="contacts">
        <h2>Contacts</h2>
        <p>Contacts unify a customer across channels. Read a profile with its merged history, attributes and pipeline position.</p>
        <div class="endpoint"><span class="method get">GET</span><span class="path">/v1/contacts/{id}</span></div>
        <div class="endpoint"><span class="method post">POST</span><span class="path">/v1/contacts/{id}/attributes</span></div>
      </section>

      <section id="pipelines">
        <h2>Pipelines</h2>
        <p>Read pipeline stages and move a contact between them. Stage changes fire whatever actions you have configured.</p>
        <div class="endpoint"><span class="method get">GET</span><span class="path">/v1/pipelines/{id}</span></div>
        <div class="endpoint"><span class="method post">POST</span><span class="path">/v1/pipelines/{id}/move</span></div>
      </section>

      <section id="actions">
        <h2>Stage actions</h2>
        <p>Send data out the moment it matters. Each stage can run actions that call your endpoint (POST by default) with the fields you map from the conversation: when the stage starts, on any message, on a customer message, or when the AI decides it is time (for example, to look up free slots or book a meeting). You set the headers, the payload, how many times it may fire and how many retries it gets, and every run is logged.</p>
        <div class="code"><div class="code-head"><span class="lang">JSON · payload</span></div><pre>{
  <span class="k">"contact_name"</span>: <span class="s">"Mona Adel"</span>,
  <span class="k">"phone"</span>: <span class="s">"+20 100 000 0000"</span>,
  <span class="k">"stage"</span>: <span class="s">"qualified"</span>,
  <span class="k">"client_needs"</span>: <span class="s">"Evening slot, two people"</span>
}</pre></div>
      </section>

      <section id="mcp" style="border-bottom:0">
        <h2>MCP</h2>
        <p>GenuDo speaks the <strong>Model Context Protocol</strong>. Point Claude, Claude Code, ChatGPT, Codex or your own client at the GenuDo MCP server and build, connect knowledge and run your agents from your editor or chat. Sign in from your browser, or use a token with the <span class="mono">mcp:use</span> scope.</p>
        <div class="code"><div class="code-head"><span class="lang">shell</span></div><pre><span class="c"># MCP server URL</span>
https://api.genudo.ai/mcp

<span class="c"># Claude Code</span>
claude mcp add --transport http genudo \\
  https://api.genudo.ai/mcp</pre></div>
        <div class="callout"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m8 6-6 6 6 6"/><path d="m16 6 6 6-6 6"/></svg><span>Prefer to work in plain language? See <a href="/api-mcp">API &amp; MCP</a> to run your AI team from Claude or ChatGPT, with every change shown as a diff before it runs.</span></div>
      </section>
    </main>
  </div>
</div></section>
</div>`;
export default html;
