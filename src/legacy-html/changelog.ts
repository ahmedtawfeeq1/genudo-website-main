// /changelog — value-led rewrite (EN). See docs/website/BUILD-BRIEF.md.
const html = `<div class="pg-changelog">
<div class="rhead"><div class="container">
  <div class="crumb"><a href="/resources">Resources</a><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg><span>Changelog</span></div>
  <h1>Changelog</h1>
  <p>Every improvement to GenuDo, as it ships: new employees, smarter cost control and better visibility. We ship often.</p>
</div></div>

<section class="s-sm"><div class="container">
  <div class="clog">
    <aside class="clog-rail">
      <div class="clog-follow">
        <div class="t">Follow along and stay up to date.</div>
        <div class="clog-social">
          <a href="https://www.facebook.com/genudo.official/" target="_blank" rel="noopener" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z"/></svg></a>
          <a href="https://www.linkedin.com/company/genudo/" target="_blank" rel="noopener" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C20.3 8.65 21 11 21 14.1V21h-4v-6.1c0-1.45-.03-3.3-2-3.3-2 0-2.3 1.57-2.3 3.2V21H9z"/></svg></a>
          <a href="https://www.youtube.com/@GenuDoAi" target="_blank" rel="noopener" aria-label="YouTube"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 12s0-3.6-.46-5.3a2.75 2.75 0 0 0-1.94-1.94C18.9 4.3 12 4.3 12 4.3s-6.9 0-8.6.46A2.75 2.75 0 0 0 1.46 6.7C1 8.4 1 12 1 12s0 3.6.46 5.3c.26.95 1 1.68 1.94 1.94 1.7.46 8.6.46 8.6.46s6.9 0 8.6-.46a2.75 2.75 0 0 0 1.94-1.94C23 15.6 23 12 23 12zM9.8 15.3V8.7l5.7 3.3z"/></svg></a>
          <a href="https://www.tiktok.com/@genudo.official" target="_blank" rel="noopener" aria-label="TikTok"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.5 3c.4 2.3 1.7 3.9 4 4.2v2.7c-1.5.1-2.9-.3-4-1.1v5.9c0 3.4-2.6 5.8-5.8 5.8A5.5 5.5 0 0 1 5 15.2c0-3.2 2.9-5.6 6.3-5v2.9c-.4-.1-.9-.2-1.3-.2-1.5 0-2.6 1-2.6 2.4a2.5 2.5 0 0 0 5 .1V3z"/></svg></a>
        </div>
      </div>
      <nav class="clog-filters" aria-label="Jump to an update"><a class="clog-filter" href="#roz-claude-chatgpt">Roz in Claude &amp; ChatGPT</a><a class="clog-filter" href="#analytics-center-is-now-live">Analytics Center</a><a class="clog-filter" href="#meet-roz">Meet ROZ</a><a class="clog-filter" href="#per-task-model-routing">Smart routing</a></nav>
    </aside>
    <div class="clog-list">
    <article class="clog-item" id="roz-claude-chatgpt">
      <div class="clog-date">October 6, 2026</div>
      <div class="clog-cover" style="background:linear-gradient(135deg,#db2777,#f472b6)"><span class="cc-tag">Employees</span><span class="cc-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg></span><span class="cc-h">Roz in Claude and ChatGPT</span></div>
      <div class="clog-tags"><span class="clog-tag feature">Feature</span></div>
      <h3>Roz now works through Claude and ChatGPT</h3><p>Ask Roz anything about your team&rsquo;s WhatsApp chats, schedule reports and build dashboards, all from Claude or ChatGPT. One QR scan links your company numbers, and she starts the same day.</p><ul><li>Ask in plain language: who waited, what stalled, how a day went</li><li>Schedule daily or weekly reports to the people who need them</li><li>Build the dashboard your business needs</li><li>Covers one-to-one chats and groups on the numbers you link</li></ul>
    </article>
    <article class="clog-item" id="analytics-center-is-now-live">
      <div class="clog-date">July 9, 2026</div>
      <div class="clog-cover" style="background:linear-gradient(135deg,#4f46e5,#7c3aed)"><span class="cc-tag">Analytics</span><span class="cc-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="m7 14 3-3 3 3 4-5"/></svg></span><span class="cc-h">New Analytics Center</span></div>
      <div class="clog-tags"><span class="clog-tag feature">Feature</span></div>
      <h3>Analytics Center is now live</h3><p>One place to see what your AI team is producing: where customers are in the funnel, how follow-ups are doing and what every conversation costs.</p><ul><li>Pipeline funnel and opportunity trends</li><li>Follow-up health and cost over time</li><li>Cost by stage, so you know where spend goes</li><li>Pick a pipeline and a period: 7, 30 or 90 days, or a custom range</li></ul>
    </article>
    <article class="clog-item" id="meet-roz">
      <div class="clog-date">June 24, 2026</div>
      <div class="clog-cover" style="background:linear-gradient(135deg,#db2777,#f472b6)"><span class="cc-tag">Employees</span><span class="cc-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg></span><span class="cc-h">Meet ROZ</span></div>
      <div class="clog-tags"><span class="clog-tag feature">Feature</span></div>
      <h3>Meet ROZ, your quality-control employee</h3><p>ROZ joins Aaref and Adnan. She reviews your human team&rsquo;s WhatsApp conversations on company lines and tells you what needs attention.</p><ul><li>Flags slow replies, stalled deals and missed opportunities</li><li>Turns voice notes into text you can read</li><li>Connects by scanning a QR code</li></ul>
    </article>
    <article class="clog-item" id="per-task-model-routing">
      <div class="clog-date">June 10, 2026</div>
      <div class="clog-cover" style="background:linear-gradient(135deg,#6366f1,#0ea5e9)"><span class="cc-tag">Models</span><span class="cc-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="5" width="14" height="14" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3"/></svg></span><span class="cc-h">Smart model routing</span></div>
      <div class="clog-tags"><span class="clog-tag feature">Feature</span><span class="clog-tag improvement">Improvement</span></div>
      <h3>Per-task model routing</h3><p>GenuDo now sends each message to the model it needs: a lower-cost model for simple questions and a stronger one for the hard cases, with the cost of every reply visible to you.</p><ul><li>Automatic routing by message complexity</li><li>A spend cap per conversation that pauses the AI and alerts your team</li><li>Cost, response time and confidence shown for every reply in Test AI</li></ul>
    </article>
      <p class="clog-note">Looking for how to run your AI team from Claude or ChatGPT? See <a href="/api-mcp">API &amp; MCP</a>.</p>
    </div>
  </div>
</div></section>
</div>`;
export default html;
