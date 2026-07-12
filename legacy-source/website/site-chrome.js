/* ============================================================
   GenuDo — shared site chrome (nav + footer)
   Single source of truth. Every page drops:
     <div data-site-nav></div>  … content …  <div data-site-footer></div>
     <script src="site-chrome.js"></script>
   Set active menu with <body data-nav="solutions|product|resources|pricing|security">.
   ============================================================ */
(function () {
  var I = {
    /* product */
    agent:  '<circle cx="12" cy="8" r="4"/><path d="M4 20a8 8 0 0 1 16 0"/>',
    pipe:   '<path d="M3 3v18h18"/><rect x="7" y="10" width="3" height="8"/><rect x="12" y="6" width="3" height="12"/>',
    know:   '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5z"/>',
    models: '<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"/>',
    stages: '<path d="M13 2 3 14h7l-1 8 10-12h-7z"/>',
    inbox:  '<path d="M4 13h4l2 3h4l2-3h4"/><path d="M5 5h14l2 8v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4z"/>',
    followup:'<path d="M17 2l4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="M7 22l-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/>',
    contacts:'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13A4 4 0 0 1 16 11"/>',
    analytics:'<path d="M3 3v18h18"/><path d="m7 14 3-3 3 3 4-5"/>',
    integ:  '<rect x="3" y="3" width="8" height="8" rx="2"/><rect x="13" y="13" width="8" height="8" rx="2"/><path d="M11 7h4a2 2 0 0 1 2 2v4"/>',
    api:    '<path d="m8 6-6 6 6 6"/><path d="m16 6 6 6-6 6"/>',
    /* solutions — employees */
    sales:  '<path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/>',
    support:'<path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/>',
    ops:    '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>',
    /* solutions — industries */
    food:   '<path d="M3 2v7a3 3 0 0 0 6 0V2M6 2v20M17 2c-1.5 0-3 1.5-3 5s1.5 5 3 5v10"/>',
    learn:  '<path d="M22 10 12 5 2 10l10 5 10-5z"/><path d="M6 12v5c0 1 3 3 6 3s6-2 6-3v-5"/>',
    fit:    '<path d="M6.5 6.5 17.5 17.5M4 9l2-2M18 15l2-2M9 4 7 6M17 20l-2-2M14 4l6 6M4 14l6 6"/>',
    clinic: '<path d="M8 2h8v4H8zM12 11v6M9 14h6"/><rect x="4" y="6" width="16" height="16" rx="2"/>',
    travel: '<path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3s-3-.5-4.5 1L13 7.5 4.8 5.7c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>',
    mkt:    '<path d="m3 11 15-5v12L3 13z"/><path d="M18 8a3 3 0 0 1 0 6"/><path d="M7 13v4a2 2 0 0 0 2 2h1"/>',
    camp:   '<path d="M3.5 21 12 4l8.5 17"/><path d="M12 13 7.5 21M12 13l4.5 8"/>',
    /* resources */
    docs:   '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h5"/>',
    change: '<path d="M12 8v4l3 2"/><circle cx="12" cy="12" r="9"/>',
    story:  '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="m10 8 4 3-4 3z"/>',
    blog:   '<path d="M4 4h16v16H4z"/><path d="M8 8h8M8 12h8M8 16h5"/>',
    arrow:  '<path d="M5 12h14M13 6l6 6-6 6"/>',
    caret:  '<path d="m6 9 6 6 6-6"/>'
  };
  function mi(name, bg) { return '<span class="mi" style="background:' + bg + '"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' + I[name] + '</svg></span>'; }
  function link(href, name, bg, title, sub) {
    return '<a class="mega-link" href="' + href + '">' + mi(name, bg) + '<span><b>' + title + '</b><span>' + sub + '</span></span></a>';
  }

  /* ---- PRODUCT mega ---- */
  var productMega =
    '<div class="mega mega-wide"><div class="mega-cols">' +
      '<div class="mega-col"><div class="mega-sec-label">Build</div>' +
        link('ai-employees.html','agent','#6468f0','AI Agent','Persona, model &amp; guardrails') +
        link('knowledge.html','know','#10b981','Knowledge Base','Tables, files &amp; websites') +
        link('models.html','models','#6366f1','Smart Models Selection','Auto-routes to the best-fit model') +
      '</div>' +
      '<div class="mega-col"><div class="mega-sec-label">Operate</div>' +
        link('pipelines.html','pipe','#8b5cf6','Pipeline','Move deals through stages') +
        link('stages.html','stages','#a855f7','Stages &amp; Actions','Automate what happens next') +
        link('followups.html','followup','#ec4899','Follow-ups','Sequenced nudges per stage') +
      '</div>' +
      '<div class="mega-col"><div class="mega-sec-label">Engage &amp; measure</div>' +
        link('channels.html','inbox','#06b6d4','Inbox','WhatsApp, IG, webchat, email') +
        link('contacts.html','contacts','#0ea5e9','Contacts','One record per customer') +
        link('analytics.html','analytics','#22c55e','Analytics Center','Outcomes, workload &amp; cost') +
        link('integrations.html','integ','#14b8a6','Integrations','CRMs, calendars &amp; tools') +
      '</div>' +
    '</div>' +
    '<div class="mega-foot"><a href="product.html">Platform overview ' + arrow() + '</a><a href="api-mcp.html">API &amp; MCP ' + arrow() + '</a></div>' +
    '</div>';

  /* ---- SOLUTIONS mega ---- */
  var solutionsMega =
    '<div class="mega mega-wide"><div class="mega-cols mega-cols-2">' +
      '<div class="mega-col"><div class="mega-sec-label">AI employees</div>' +
        link('sol-sales-agent.html','sales','#6468f0','Sales Agent','Qualify, follow up &amp; close') +
        link('sol-customer-service.html','support','#06b6d4','Customer Service','Answer &amp; resolve, 24/7') +
        link('sol-operations.html','ops','#f97316','Operations Assistant','Run the work behind the scenes') +
      '</div>' +
      '<div class="mega-col mega-col-wide"><div class="mega-sec-label">By industry</div>' +
        '<div class="mega-inds">' +
        indLink('ind-marketing.html','mkt','#e2562a','Marketing Agencies') +
        indLink('ind-elearning.html','learn','#6468f0','E-learning &amp; Academies') +
        indLink('ind-fitness.html','fit','#22c55e','Fitness Centres') +
        indLink('ind-clinics.html','clinic','#06b6d4','Clinics &amp; Healthcare') +
        indLink('ind-hospitality.html','travel','#a855f7','Hospitality &amp; Tourism') +
        indLink('ind-camps-events.html','camp','#f59e0b','Camps &amp; Events') +
        '</div>' +
      '</div>' +
    '</div>' +
    '<div class="mega-foot"><a href="use-cases.html">See every use case ' + arrow() + '</a></div>' +
    '</div>';

  /* ---- RESOURCES mega ---- */
  var resourcesMega =
    '<div class="mega"><div class="mega-grid">' +
      link('api-docs.html','docs','#0ea5e9','API Documentation','Build on the GenuDo API') +
      link('changelog.html','change','#8b5cf6','Changelog','What shipped, every week') +
      link('blog.html','blog','#22c55e','Blog','Playbooks &amp; product notes') +
      link('security.html','support','#10b981','Trust &amp; Security','How we protect your data') +
    '</div></div>';

  function arrow() { return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' + I.arrow + '</svg>'; }
  function indLink(href, name, bg, title) {
    return '<a class="ind-link" href="' + href + '"><span class="ii" style="color:' + bg + ';background:color-mix(in srgb,' + bg + ' 12%,#fff)"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' + I[name] + '</svg></span>' + title + '</a>';
  }

  function caretBtn(label) {
    return '<button>' + label + ' <svg class="caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">' + I.caret + '</svg></button>';
  }

  var active = document.body.getAttribute('data-nav') || '';
  function ac(k){ return active === k ? ' class="on"' : ''; }

  var nav =
    '<header class="nav"><div class="container nav-in">' +
      '<a class="brand" href="GenuDo.html"><img src="genu/genudo-logo-color.png" alt="GenuDo"></a>' +
      '<nav class="nav-links">' +
        '<a href="who-is-genu.html"' + ac('whoisgenu') + '>Who is GENU?</a>' +
        '<div class="nav-item"' + ac('solutions') + '>' + caretBtn('Solutions') + solutionsMega + '</div>' +
        '<div class="nav-item"' + ac('product') + '>' + caretBtn('Product') + productMega + '</div>' +
        '<div class="nav-item"' + ac('resources') + '>' + caretBtn('Resources') + resourcesMega + '</div>' +
        '<a href="customers.html"' + ac('customers') + '>Customer stories</a>' +
        '<a href="pricing.html"' + ac('pricing') + '>Pricing</a>' +
      '</nav>' +
      '<div class="nav-cta"><a href="https://app.genudo.ai/auth/login" class="btn nav-signin">Sign in</a><a href="https://app.genudo.ai/auth/register" class="btn btn-primary">Get started</a></div>' +
      '<button class="nav-burger" aria-label="Menu"><span></span><span></span><span></span></button>' +
    '</div>' +
    '<div class="nav-mobile"><div class="container">' +
      '<a href="who-is-genu.html" style="font-weight:640;color:var(--ink);">Who is GENU?</a>' +
      '<div class="nm-sec">Solutions</div>' +
      '<a href="sol-sales-agent.html">Sales Agent</a><a href="sol-customer-service.html">Customer Service</a><a href="sol-operations.html">Operations Assistant</a>' +
      '<a href="ind-marketing.html">Marketing Agencies</a><a href="ind-elearning.html">E-learning &amp; Academies</a><a href="ind-fitness.html">Fitness Centres</a><a href="ind-clinics.html">Clinics &amp; Healthcare</a><a href="ind-hospitality.html">Hospitality &amp; Tourism</a><a href="ind-camps-events.html">Camps &amp; Events</a>' +
      '<div class="nm-sec">Product</div>' +
      '<a href="ai-employees.html">AI Agent</a><a href="pipelines.html">Pipeline</a><a href="knowledge.html">Knowledge Base</a><a href="models.html">Smart Models Selection</a><a href="stages.html">Stages &amp; Actions</a><a href="followups.html">Follow-ups</a><a href="channels.html">Inbox</a><a href="contacts.html">Contacts</a><a href="analytics.html">Analytics Center</a><a href="integrations.html">Integrations</a>' +
      '<div class="nm-sec">Resources</div>' +
      '<a href="customers.html">Customer stories</a><a href="api-docs.html">API Documentation</a><a href="changelog.html">Changelog</a><a href="blog.html">Blog</a>' +
      '<div class="nm-sec">More</div>' +
      '<a href="pricing.html">Pricing</a><a href="security.html">Security</a><a href="contact.html">Contact</a>' +
      '<a href="https://app.genudo.ai/auth/register" class="btn btn-primary" style="margin-top:14px;justify-content:center;">Get started</a>' +
    '</div></div>' +
    '</header>';

  var year = new Date().getFullYear();
  var footer =
    '<footer class="footer"><div class="container">' +
      '<div class="foot-grid foot-grid-5">' +
        '<div class="foot-col foot-brandcol">' +
          '<a class="brand foot-brand" href="GenuDo.html"><img src="genu/genudo-logo-white.png" alt="GenuDo" style="height:44px;"></a>' +
          '<p class="foot-tag">Genuine AI employees for every team — built from agents, knowledge, tools and pipelines, working your channels around the clock.</p>' +
          '<div class="foot-social">' +
            '<a href="https://www.facebook.com/genudo.official/" target="_blank" rel="noopener" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z"/></svg></a>' +
            '<a href="https://www.linkedin.com/company/genudo/" target="_blank" rel="noopener" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C20.3 8.65 21 11 21 14.1V21h-4v-6.1c0-1.45-.03-3.3-2-3.3-2 0-2.3 1.57-2.3 3.2V21H9z"/></svg></a>' +
            '<a href="https://www.youtube.com/@GenuDoAi" target="_blank" rel="noopener" aria-label="YouTube"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 12s0-3.6-.46-5.3a2.75 2.75 0 0 0-1.94-1.94C18.9 4.3 12 4.3 12 4.3s-6.9 0-8.6.46A2.75 2.75 0 0 0 1.46 6.7C1 8.4 1 12 1 12s0 3.6.46 5.3c.26.95 1 1.68 1.94 1.94 1.7.46 8.6.46 8.6.46s6.9 0 8.6-.46a2.75 2.75 0 0 0 1.94-1.94C23 15.6 23 12 23 12zM9.8 15.3V8.7l5.7 3.3z"/></svg></a>' +
            '<a href="https://www.tiktok.com/@genudo.official" target="_blank" rel="noopener" aria-label="TikTok"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.5 3c.4 2.3 1.7 3.9 4 4.2v2.7c-1.5.1-2.9-.3-4-1.1v5.9c0 3.4-2.6 5.8-5.8 5.8A5.5 5.5 0 0 1 5 15.2c0-3.2 2.9-5.6 6.3-5v2.9c-.4-.1-.9-.2-1.3-.2-1.5 0-2.6 1-2.6 2.4a2.5 2.5 0 0 0 5 .1V3z"/></svg></a>' +
          '</div>' +
        '</div>' +
        '<div class="foot-col"><h5>Product</h5>' +
          '<a href="ai-employees.html">AI Agent</a><a href="knowledge.html">Knowledge Base</a><a href="models.html">Smart Models Selection</a><a href="pipelines.html">Pipeline</a><a href="stages.html">Stages &amp; Actions</a><a href="followups.html">Follow-ups</a>' +
        '</div>' +
        '<div class="foot-col"><h5>Platform</h5>' +
          '<a href="channels.html">Inbox</a><a href="contacts.html">Contacts</a><a href="analytics.html">Analytics Center</a><a href="integrations.html">Integrations</a><a href="api-mcp.html">API &amp; MCP</a>' +
        '</div>' +
        '<div class="foot-col"><h5>Employees</h5>' +
          '<a href="sol-sales-agent.html">Sales Agent</a><a href="sol-customer-service.html">Customer Service</a><a href="sol-operations.html">Operations Assistant</a><a href="use-cases.html">All use cases</a>' +
        '</div>' +
        '<div class="foot-col"><h5>Industries</h5>' +
          '<a href="ind-marketing.html">Marketing Agencies</a><a href="ind-elearning.html">E-learning &amp; Academies</a><a href="ind-fitness.html">Fitness Centres</a><a href="ind-clinics.html">Clinics &amp; Healthcare</a><a href="ind-hospitality.html">Hospitality &amp; Tourism</a><a href="ind-camps-events.html">Camps &amp; Events</a>' +
        '</div>' +
        '<div class="foot-col"><h5>Company</h5>' +
          '<a href="pricing.html">Pricing</a><a href="security.html">Security</a><a href="api-docs.html">API Docs</a><a href="changelog.html">Changelog</a><a href="blog.html">Blog</a><a href="customers.html">Customer stories</a><a href="contact.html">Contact us</a>' +
        '</div>' +
      '</div>' +
      '<div class="foot-bottom"><span>© ' + year + ' GenuDo. All rights reserved.</span><span class="mono">Build reusable AI employees. Deploy them everywhere.</span></div>' +
    '</div></footer>';

  function inject() {
    var n = document.querySelector('[data-site-nav]');
    if (n) n.outerHTML = nav;
    var f = document.querySelector('[data-site-footer]');
    if (f) f.outerHTML = footer;
    wire();
  }
  function wire() {
    var burger = document.querySelector('.nav-burger');
    var header = document.querySelector('header.nav');
    if (burger && header) burger.addEventListener('click', function () { header.classList.toggle('mobile-open'); });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', inject);
  else inject();

  /* extra chrome CSS injected once */
  var css =
    '.mega-wide{width:760px;}' +
    '.mega-cols{display:grid; grid-template-columns:1fr 1fr 1fr; gap:10px;}' +
    '.mega-cols-2{grid-template-columns:0.78fr 1.25fr; gap:4px;}' +
    '.mega-col-wide .mega-inds{display:grid; grid-template-columns:1fr 1fr; gap:2px;}' +
    '.ind-link{display:flex; align-items:center; gap:10px; padding:9px 11px; border-radius:11px; font-size:13.5px; font-weight:540; color:var(--ink); transition:.13s;}' +
    '.ind-link:hover{background:var(--bg);}' +
    '.ind-link .ii{width:30px; height:30px; border-radius:9px; flex:none; display:grid; place-items:center;}' +
    '.ind-link .ii svg{width:16px; height:16px;}' +
    '.mega-foot{display:flex; gap:8px; flex-wrap:wrap; margin-top:12px; padding-top:12px; border-top:1px solid var(--border);}' +
    '.mega-foot a{display:inline-flex; align-items:center; gap:6px; font-size:13px; font-weight:600; color:var(--primary); padding:6px 12px; border-radius:9px; transition:.13s;}' +
    '.mega-foot a svg{width:15px; height:15px;}' +
    '.mega-foot a:hover{background:var(--tint);}' +
    '.nav-item > a.on, .nav-item.on > button, .nav-links > a.on{color:var(--ink); background:rgba(29,41,61,.05);}' +
    /* featured "Who is GENU?" entry — brand indigo, light pill, coloured shadow + gapped underline */
    '.nav-links > a[href="who-is-genu.html"]{position:relative; color:var(--primary); font-weight:600; background:color-mix(in srgb,var(--primary) 9%,#fff); border-radius:9px; box-shadow:0 6px 16px -7px color-mix(in srgb,var(--primary) 62%,transparent);}' +
    '.nav-links > a[href="who-is-genu.html"]::after{content:""; position:absolute; left:12px; right:12px; bottom:4px; height:2px; border-radius:2px; background:color-mix(in srgb,var(--primary) 72%,transparent);}' +
    '.nav-links > a[href="who-is-genu.html"]:hover{color:var(--primary); background:color-mix(in srgb,var(--primary) 16%,#fff);}' +
    '.nav-links > a[href="who-is-genu.html"]:hover::after{background:var(--primary);}' +
    '.nav-signin{color:var(--ink-2); padding:8px 12px;}' +
    '.nav-burger{display:none; margin-left:auto; flex-direction:column; gap:5px; background:none; border:0; cursor:pointer; padding:8px;}' +
    '.nav-burger span{width:22px; height:2px; background:var(--ink); border-radius:2px; transition:.2s;}' +
    '.nav-mobile{display:none; border-top:1px solid var(--border); background:#fff; max-height:calc(100vh - 66px); overflow:auto; padding:14px 0 26px;}' +
    '.nav-mobile .nm-sec{font-family:"JetBrains Mono",monospace; font-size:10px; letter-spacing:.13em; text-transform:uppercase; color:var(--ink-3); margin:16px 0 6px;}' +
    '.nav-mobile a{display:block; font-size:16px; font-weight:520; color:var(--ink-2); padding:9px 0;}' +
    '.nav-mobile a.btn{color:#fff;}' +
    '.foot-grid-5{grid-template-columns:1.5fr 1fr 1fr 1fr 1fr 1fr;}' +
    '.foot-brandcol .foot-tag{color:#8088ba; margin-top:14px; max-width:260px; font-size:13.5px; line-height:1.5;}' +
    '.foot-social{display:flex; gap:10px; margin-top:18px;}' +
    '.foot-social a{width:34px; height:34px; border-radius:9px; display:grid; place-items:center; background:rgba(255,255,255,.07); color:#b9bedd; transition:.15s;}' +
    '.foot-social a:hover{background:var(--primary); color:#fff;}' +
    '.foot-social svg{width:16px; height:16px;}' +
    '@media(max-width:980px){' +
      '.nav-burger{display:flex;}' +
      '.nav-cta{display:none;}' +
      '.nav.mobile-open .nav-mobile{display:block;}' +
      '.foot-grid-5{grid-template-columns:1fr 1fr;}' +
    '}';
  var st = document.createElement('style'); st.id = '__chrome'; st.textContent = css;
  document.head.appendChild(st);
})();
