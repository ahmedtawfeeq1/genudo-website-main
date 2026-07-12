/* GenuDo marketing site — v2 interactions
   Capability selector · use-case tabs · workforce sequence.
   All client-side, deterministic fixtures. Respects reduced motion. */
(function () {
  var RM = window.matchMedia('(prefers-reduced-motion:reduce)').matches;
  function inView(el, r) {
    if (!el) return false;
    var b = el.getBoundingClientRect(), h = window.innerHeight || 800;
    r = r || 0.6;
    return b.top < h * r && b.bottom > h * (1 - r);
  }
  // Map a legacy pose-file name to an animated-GENU build spec.
  function genuPose(f) {
    return ({
      base: { expr: 'idle' },
      searching: { action: 'search', expr: 'work' },
      writing: { action: 'doc', expr: 'work' },
      calling: { action: 'phone', expr: 'happy' },
      scheduler: { action: 'calendar', expr: 'idle' },
      support: { action: 'headset', expr: 'happy' },
      analyst: { action: 'chart', expr: 'done' },
      thinking: { action: 'think', expr: 'work' },
      marketer: { action: 'megaphone', expr: 'happy' }
    })[f] || { expr: 'idle' };
  }
  function buildGenu(el, f) { if (el && window.GENU) GENU.build(el, genuPose(f)); }

  /* ---------- Capability selector ---------- */
  var CAPS = [
    { f: 'searching', s: 'SEARCHING KNOWLEDGE', u: 'app.genudo.ai/knowledge', alt: 'GENU researching a prospect',
      o: 'Enriched the contact from your trusted knowledge — no guessing.',
      b: '<div class="kv"><span>Clinic</span><b>Riverside Clinic · 3 sites</b></div><div class="kv"><span>Interest</span><b>WhatsApp intake</b></div><div class="kv"><span>Source</span><b>Website form · verified</b></div>' },
    { f: 'calling', s: 'REACHING OUT', u: 'app.genudo.ai/inboxes', alt: 'GENU reaching out to a lead',
      o: 'Reached the lead on their channel and captured what they need.',
      b: '<div class="bub in">\u201cIs this about the intake automation?\u201d</div><div class="bub out">\u201cYes \u2014 I can set up a 15-min demo. Does Thursday work?\u201d</div>' },
    { f: 'writing', s: 'WRITING A FOLLOW-UP', u: 'app.genudo.ai/inboxes', alt: 'GENU writing a follow-up',
      o: 'Drafted a personal follow-up in your voice, ready to send.',
      b: '<div class="kv"><span>Channel</span><b>WhatsApp</b></div><div class="bub in" style="align-self:stretch;max-width:100%">Hi Jordan \u2014 thanks for your time earlier. Here\u2019s the intake flow we discussed, ready whenever you are.</div>' },
    { f: 'scheduler', s: 'SCHEDULING', u: 'app.genudo.ai/scheduling', alt: 'GENU scheduling a meeting',
      o: 'Held a slot and confirmed the meeting — no back-and-forth.',
      b: '<div class="slot pick">Thu · 2:00 PM &nbsp;\u2713 booked</div><div class="slot">Thu · 4:30 PM</div><div class="slot">Fri · 11:00 AM</div>' },
    { f: 'support', s: 'SUPPORTING', u: 'app.genudo.ai/inboxes', alt: 'GENU supporting a customer',
      o: 'Answered instantly and escalated only what needs a human.',
      b: '<div class="bub in">\u201cCan you resend my invoice?\u201d</div><div class="bub out">\u201cDone \u2713 \u2014 sent to your email. Anything else?\u201d</div>' },
    { f: 'analyst', s: 'ANALYZING', u: 'app.genudo.ai/dashboard', alt: 'GENU analyzing performance',
      o: 'Reported outcomes, workload and cost — not just message volume.',
      b: '<div class="mini-kpi"><div class="k"><div class="l">Booked</div><div class="v">12</div></div><div class="k"><div class="l">Cost / booking</div><div class="v">$0.40</div></div></div>' }
  ];

  var capTasks = document.getElementById('capTasks');
  if (capTasks) {
    var capChar = document.getElementById('capChar'),
        capState = document.getElementById('capState'),
        capUrl = document.getElementById('capUrl'),
        capOut = document.getElementById('capOut'),
        capBody = document.getElementById('capBody'),
        capWin = capBody.closest('.win'),
        ci = 0, ct = null;
    function setCap(i) {
      ci = i; var c = CAPS[i];
      [].forEach.call(capTasks.querySelectorAll('.cap-task'), function (btn, bi) { btn.classList.toggle('active', bi === i); });
      buildGenu(capChar, c.f);
      capState.textContent = c.s; capUrl.textContent = c.u; capOut.textContent = c.o; capBody.innerHTML = c.b;
      [capChar, capState, capWin].forEach(function (el) { el.classList.remove('cap-swap'); void el.offsetWidth; el.classList.add('cap-swap'); });
    }
    function capStart() { if (RM || ct) return; ct = setInterval(function () { if (inView(capChar, 0.75)) setCap((ci + 1) % CAPS.length); }, 3600); }
    capTasks.addEventListener('click', function (e) { var b = e.target.closest('[data-cap]'); if (!b) return; setCap(+b.dataset.cap); clearInterval(ct); ct = null; setTimeout(capStart, 7000); });
    setCap(0); capStart();
  }

  /* ---------- Use-case tabs ---------- */
  var UC = {
    Sales: { job: 'Qualify, follow up and close inbound leads.', was: 'Reps chase leads by hand; slow replies; leads go cold.', now: 'GENU qualifies, follows up and books demos — 24/7.', url: 'app.genudo.ai/pipelines', shot: '/shots/pipelines.png', genu: 'calling', role: 'Sales' },
    Support: { job: 'Answer questions and resolve tickets instantly.', was: 'Customers wait hours; repetitive tickets pile up.', now: 'GENU answers in seconds and escalates only the hard cases.', url: 'app.genudo.ai/inboxes', shot: '/shots/inbox.png', genu: 'support', role: 'Support' },
    Operations: { job: 'Run the follow-ups and updates behind the scenes.', was: 'Manual data entry, chasing and copy-paste across tools.', now: 'GENU triggers actions and keeps every record in sync.', url: 'app.genudo.ai/dashboard', shot: '/shots/dashboard.png', genu: 'analyst', role: 'Ops' },
    Scheduling: { job: 'Book meetings and coordinate calendars.', was: 'Endless back-and-forth to find a time.', now: 'GENU holds a slot and confirms the meeting automatically.', url: 'app.genudo.ai/pipelines', shot: '/shots/pipelines.png', genu: 'scheduler', role: 'Scheduling' }
  };
  var ucTabs = document.getElementById('ucTabs');
  if (ucTabs) {
    var ucName = document.getElementById('ucName'), ucJob = document.getElementById('ucJob'),
        ucWas = document.getElementById('ucWas'), ucNow = document.getElementById('ucNow'),
        ucUrl = document.getElementById('ucUrl'), ucShot = document.getElementById('ucShot'),
        ucGenu = document.getElementById('ucGenu'), ucRole = document.getElementById('ucRole');
    Object.keys(UC).forEach(function (k) { var im = new Image(); im.src = UC[k].shot; });
    ucTabs.addEventListener('click', function (e) {
      var b = e.target.closest('[data-uc]'); if (!b) return;
      var k = b.dataset.uc, d = UC[k];
      [].forEach.call(ucTabs.querySelectorAll('.uc-tab'), function (t) { t.classList.toggle('active', t === b); });
      ucName.textContent = k; ucJob.textContent = d.job; ucWas.textContent = d.was; ucNow.textContent = d.now;
      ucUrl.textContent = d.url; ucRole.textContent = d.role; buildGenu(ucGenu, d.genu);
      var next = new Image();
      next.onload = function () { ucShot.src = d.shot; ucShot.classList.remove('cap-swap'); void ucShot.offsetWidth; ucShot.classList.add('cap-swap'); };
      next.src = d.shot;
      if (next.complete) next.onload();
    });
  }

  /* ---------- Workforce sequence ---------- */
  var wfRow = document.getElementById('wfRow');
  if (wfRow) {
    var steps = [].slice.call(wfRow.querySelectorAll('.wf-step'));
    var factsEl = document.getElementById('wfFacts');
    var facts = ['Verified contact', 'WhatsApp opt-in', 'Booked Thu 2:00', 'Won · $4.2K'];
    factsEl.innerHTML = facts.map(function (f, i) { return '<span class="wf-fact' + (i === facts.length - 1 ? ' win' : '') + '">' + f + '</span>'; }).join('');
    var fEls = [].slice.call(factsEl.querySelectorAll('.wf-fact'));
    function wfSet(i) {
      steps.forEach(function (s, si) { s.classList.toggle('active', si === i); });
      fEls.forEach(function (f, fi) { f.classList.toggle('show', fi <= i); });
    }
    if (RM) { steps.forEach(function (s) { s.classList.add('active'); }); fEls.forEach(function (f) { f.classList.add('show'); }); }
    else { var wi = 0; wfSet(0); setInterval(function () { if (inView(wfRow, 0.8)) { wi = (wi + 1) % steps.length; wfSet(wi); } }, 2500); }
  }
  /* ---------- How-it-works concept stage ---------- */
  var hwStage = document.getElementById('hwStage');
  if (hwStage) {
    var HW = [
      { title: 'Shape the employee', genu: 'writing', status: 'Shaped \u0026 grounded' },
      { title: 'Put it on a channel', genu: 'calling', status: 'Live on WhatsApp' },
      { title: 'Supervise \u0026 improve', genu: 'analyst', status: 'On target \u00b7 supervised' }
    ];
    ['writing', 'calling', 'analyst'].forEach(function (f) { void f; });
    var hwScenes = [].slice.call(hwStage.querySelectorAll('.scene')),
        hwStepEls = [].slice.call(hwStage.querySelectorAll('.hw-step')),
        hwGenu = document.getElementById('hwGenu'),
        hwPhase = document.getElementById('hwPhase'),
        hwTitle = document.getElementById('hwTitle'),
        hwStatusTxt = document.getElementById('hwStatusTxt'),
        hwi = 0, hwt = null, HW_DUR = 5400;
    function hwSet(i) {
      hwi = i; var d = HW[i];
      hwScenes.forEach(function (s, si) { s.classList.toggle('active', si === i); });
      hwStepEls.forEach(function (s, si) {
        var on = si === i; s.classList.toggle('active', on);
        var bar = s.querySelector('.hw-bar');
        if (bar) { bar.style.animation = 'none'; void bar.offsetWidth; if (on && !RM) bar.style.animation = ''; }
      });
      hwPhase.textContent = hwStepEls[i].querySelector('.n').textContent;
      hwTitle.textContent = d.title;
      hwStatusTxt.textContent = d.status;
      hwGenu.classList.remove('cap-swap'); void hwGenu.offsetWidth; hwGenu.classList.add('cap-swap');
      buildGenu(hwGenu, d.genu);
    }
    function hwStart() { if (RM || hwt) return; hwt = setInterval(function () { if (inView(hwStage, 0.75)) hwSet((hwi + 1) % HW.length); }, HW_DUR); }
    hwStage.querySelector('.hw-steps').addEventListener('click', function (e) {
      var b = e.target.closest('[data-step]'); if (!b) return;
      hwSet(+b.dataset.step); clearInterval(hwt); hwt = null; setTimeout(hwStart, HW_DUR * 1.6);
    });
    document.documentElement.style.setProperty('--dur', (HW_DUR / 1000) + 's');
    hwSet(0); hwStart();
  }

})();
