/* ===========================================================================
   Who is GenU? — narrated, flying-avatar scroll experience.
   Requires genu-robot.js (window.GENU) loaded first.
   =========================================================================== */
(function () {
  var RM = window.matchMedia && window.matchMedia('(prefers-reduced-motion:reduce)').matches;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  function clamp(v, a, b) { a = a == null ? 0 : a; b = b == null ? 1 : b; return v < a ? a : (v > b ? b : v); }
  function ease(t) { return t < .5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2; }
  function lerp(a, b, t) { return a + (b - a) * t; }

  /* ---------------- 2D avatar handles (window.GENU flat SVG bots) -------- */
  var coreBot = null;                 // the flying #wgBot .genu element
  function faceOf(el) { return el && el._genuSvg; }
  function setExpr(el, expr) { var s = faceOf(el); if (s && window.GENU) { el._genuExpr = expr; window.GENU.drawFace(s, expr); } }
  // "talk" on the flat bot = hold the active/working face for the line, then rest
  function talkFor(el, text, rest) {
    if (!el) return; clearTimeout(el._twg);
    if (window.GENU && window.GENU.talk) window.GENU.talk(el, true); else setExpr(el, 'work');
    el._twg = setTimeout(function () {
      if (window.GENU && window.GENU.talk) window.GENU.talk(el, false);
      setExpr(el, rest || 'happy');
    }, clamp(text.length * 58, 1200, 7000));
  }
  function mountBots() {
    if (window.GENU && window.GENU.mountAll) window.GENU.mountAll(document);
    coreBot = document.getElementById('wgBot');
    setExpr(coreBot, 'idle');
    setExpr(document.getElementById('wgWelBot'), 'happy');
  }

  /* ---------------- copy ---------------- */
  var SAY = {
    c0: "First — I'm a real digital employee. I own the whole outcome, start to finish.",
    c1: "I run on your knowledge. Your docs, prices and playbooks become my brain.",
    c2: "I work on every channel — WhatsApp, Instagram, web chat and email.",
    c3: "And you manage me like any teammate — with stages, actions and your approval.",
    link: "But here's the thing… I never work alone.",
    team: "I lead a whole team of GENUs — and I keep every one of us in sync, 24/7."
  };
  var WELCOME = "Hi there! I'm GENU — your genuine A.I. employee. Do you know what I can do? Come on, let me show you around.";

  /* ---------------- avatar flight keyframes (x,y are fractions of amplitude) ---- */
  var KF = [
    { p: 0.00, x: 0, y: 0, s: 1.00 },
    { p: 0.07, x: 0, y: 0, s: 1.00 },
    { p: 0.16, x: -0.92, y: -0.46, s: 0.80 },
    { p: 0.30, x: 0.92, y: -0.20, s: 0.80 },
    { p: 0.44, x: -0.92, y: 0.42, s: 0.80 },
    { p: 0.58, x: 0.92, y: 0.56, s: 0.80 },
    { p: 0.66, x: 0, y: 0.05, s: 0.92 },
    { p: 0.80, x: 0, y: 0.02, s: 0.62 },
    { p: 1.00, x: 0, y: 0.02, s: 0.62 }
  ];
  function posAt(p) {
    for (var i = 0; i < KF.length - 1; i++) {
      var a = KF[i], b = KF[i + 1];
      if (p >= a.p && p <= b.p) {
        var t = ease((p - a.p) / (b.p - a.p || 1));
        return { x: lerp(a.x, b.x, t), y: lerp(a.y, b.y, t), s: lerp(a.s, b.s, t) };
      }
    }
    var last = KF[KF.length - 1]; return { x: last.x, y: last.y, s: last.s };
  }

  /* card: window (fade), and docked position (fraction of amplitude) */
  var CARDS = [
    { win: [0.10, 0.24], x: 0.74, y: -0.50 },
    { win: [0.24, 0.38], x: -0.74, y: -0.24 },
    { win: [0.38, 0.52], x: 0.74, y: 0.44 },
    { win: [0.52, 0.64], x: -0.74, y: 0.58 }
  ];

  /* ---------------- team roster (10 specialists) ---------------- */
  var TEAM = [
    { hue: '#6468f0', action: 'phone', tag: 'Sales' },
    { hue: '#06b6d4', action: 'headset', tag: 'Support' },
    { hue: '#f97316', action: 'checklist', tag: 'Ops' },
    { hue: '#10b981', action: 'deal', tag: 'Closer' },
    { hue: '#8b5cf6', action: 'calendar', tag: 'Scheduler' },
    { hue: '#ef4444', action: 'megaphone', tag: 'Marketer' },
    { hue: '#0ea5e9', action: 'chart', tag: 'Analyst' },
    { hue: '#eab308', action: 'search', tag: 'Research' },
    { hue: '#ec4899', action: 'doc', tag: 'Writer' },
    { hue: '#22c55e', action: 'code', tag: 'Builder' }
  ];
  var IC = {
    cal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>',
    doc: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h5"/></svg>',
    msg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>',
    tick: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>'
  };
  var PKT = [
    { ic: 'cal', label: 'Meeting' },
    { ic: 'doc', label: 'Sheet' },
    { ic: 'msg', label: 'Reply' },
    { ic: 'check', label: 'Deal' },
    { ic: 'tick', label: 'Ticket' }
  ];

  /* =======================================================================
     AUDIO ENGINE (Web Audio synth + Web Speech narration)
     ======================================================================= */
  var audioEnabled = false;         // unlocked by a user gesture
  var muted = localStorage.getItem('wg-muted') === '1';
  var ctx = null;
  function AC() { if (!ctx) { try { ctx = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { } } if (ctx && ctx.state === 'suspended') ctx.resume(); return ctx; }
  function canFx() { return audioEnabled && !muted && AC(); }

  function tone(freq, dur, type, vol, glideTo) {
    if (!canFx()) return; var c = AC(), t = c.currentTime;
    var o = c.createOscillator(), g = c.createGain();
    o.type = type || 'sine'; o.frequency.setValueAtTime(freq, t);
    if (glideTo) o.frequency.exponentialRampToValueAtTime(glideTo, t + dur);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vol || 0.15, t + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g).connect(c.destination); o.start(t); o.stop(t + dur + 0.02);
  }
  function pop() { tone(520, 0.16, 'sine', 0.16, 900); }
  function chime() { tone(660, 0.5, 'sine', 0.14, 990); setTimeout(function () { tone(990, 0.5, 'sine', 0.12, 1320); }, 90); }
  function tick() { tone(1300, 0.05, 'square', 0.04); }
  function whoosh() {
    if (!canFx()) return; var c = AC(), dur = 0.34, t = c.currentTime;
    var n = c.createBufferSource(), b = c.createBuffer(1, Math.floor(c.sampleRate * dur), c.sampleRate), d = b.getChannelData(0);
    for (var i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / d.length, 1.4);
    n.buffer = b;
    var f = c.createBiquadFilter(); f.type = 'bandpass'; f.Q.value = 0.9;
    f.frequency.setValueAtTime(360, t); f.frequency.exponentialRampToValueAtTime(1700, t + dur);
    var g = c.createGain(); g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.14, t + 0.06); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    n.connect(f).connect(g).connect(c.destination); n.start(t); n.stop(t + dur);
  }

  var voices = [], voice = null;
  function pickVoice() {
    if (!('speechSynthesis' in window)) return;
    voices = window.speechSynthesis.getVoices() || [];
    voice = voices.filter(function (v) { return /en(-|_)US/i.test(v.lang) && /Google US English|Samantha|Aria|Jenny|Natural/i.test(v.name); })[0]
      || voices.filter(function (v) { return /en(-|_)US/i.test(v.lang); })[0]
      || voices.filter(function (v) { return /^en/i.test(v.lang); })[0] || voices[0] || null;
  }
  if ('speechSynthesis' in window) { pickVoice(); window.speechSynthesis.onvoiceschanged = pickVoice; }
  // Robotic text-to-speech is DISABLED — GENU shows it is talking visually (the waveform)
  // and stays silent until real recorded audio is supplied. Kept as a no-op so callers don't break.
  function speak(text) { return; }
  function stopSpeak() { try { window.speechSynthesis.cancel(); } catch (e) { } }

  /* =======================================================================
     SCENE
     ======================================================================= */
  var scene = $('#scene'), stage = $('#wgStage'), core = $('#wgCore'),
    title = $('#wgTitle'), say = $('#wgSay'), sayTxt = $('#wgSayTxt'),
    halo = $('#wgHalo'), ring1 = $('#wgRing1'), ring2 = $('#wgRing2'),
    teamEl = $('#wgTeam'), links = $('#wgLinks'), packetsEl = $('#wgPackets'),
    teamCap = $('#wgTeamCap'), outro = $('#wgOutro'), hint = $('#wgHint'),
    cardEls = $$('.wg-card');

  var M = { W: 0, H: 0, ampX: 0, ampY: 0, R: 0 };
  var sats = [];        // {el, ox, oy}
  var tether = null;

  function desktop() { return window.innerWidth > 900 && !RM; }

  function measure() {
    var r = stage.getBoundingClientRect();
    M.W = r.width; M.H = r.height;
    M.ampX = Math.min(M.W / 2 - 150, 470);
    M.ampY = Math.min(M.H / 2 - 120, 210);
    M.R = Math.min(M.W / 2 - 90, M.H / 2 - 96, 315);
  }

  /* build satellites + link lines once */
  function buildTeam() {
    if (sats.length) return;
    TEAM.forEach(function (t, i) {
      var s = document.createElement('div');
      s.className = 'wg-sat';
      s.innerHTML = '<div class="genu" data-genu data-hue="' + t.hue + '" data-action="' + t.action + '" data-expr="work"></div><span class="tag">' + t.tag + '</span>';
      teamEl.appendChild(s);
      sats.push({ el: s, bot: s.querySelector('.genu'), ox: 0, oy: 0 });
      var ln = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      ln.setAttribute('class', 'teamlink'); links.appendChild(ln);
    });
    tether = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    tether.setAttribute('class', 'tether'); tether.style.opacity = '0'; links.appendChild(tether);
    if (window.GENU) { window.GENU.mountAll(teamEl); sats.forEach(function (s) { window.GENU.liven && window.GENU.liven(s.bot); }); }
    layoutTeam();
  }
  function layoutTeam() {
    links.setAttribute('viewBox', '0 0 ' + M.W + ' ' + M.H);
    var cx = M.W / 2, cy = M.H / 2, lns = links.querySelectorAll('line.teamlink');
    sats.forEach(function (s, i) {
      var a = (-90 + i * (360 / TEAM.length)) * Math.PI / 180;
      s.ox = Math.cos(a) * M.R; s.oy = Math.sin(a) * M.R;
      if (lns[i]) { lns[i].setAttribute('x1', cx); lns[i].setAttribute('y1', cy); lns[i].setAttribute('x2', cx + s.ox); lns[i].setAttribute('y2', cy + s.oy); }
    });
  }

  /* ---- audio-cued narration keyed to scroll position ---- */
  var lastKey = null;
  function keyFor(p) {
    for (var i = 0; i < CARDS.length; i++) { var w = CARDS[i].win; if (p >= w[0] + 0.02 && p < w[1] - 0.01) return 'c' + i; }
    if (p >= 0.66 && p < 0.72) return 'link';
    if (p >= 0.72) return 'team';
    return null;
  }
  function enterKey(key) {
    if (key === lastKey) return;
    lastKey = key;
    if (!key) { setExpr(coreBot, 'idle'); hideSay(); return; }
    showSay(SAY[key]);
    talkFor(coreBot, SAY[key], (key === 'team' || key === 'link') ? 'happy' : 'idle');
    if (/^c/.test(key)) { whoosh(); setTimeout(pop, 160); speak(SAY[key]); }
    else if (key === 'link') { speak(SAY.link); }
    else if (key === 'team') { chime(); speak(SAY.team); }
  }
  function showSay(txt) { sayTxt.textContent = txt; say.dataset.show = '1'; }
  function hideSay() { say.dataset.show = '0'; }

  /* ---- main scroll frame ---- */
  var prevX = 0;
  function frame() {
    if (!desktop()) return;
    var total = scene.offsetHeight - window.innerHeight; if (total <= 0) return;
    var p = clamp(-scene.getBoundingClientRect().top / total);

    var pos = posAt(p);
    var ax = pos.x * M.ampX, ay = pos.y * M.ampY;
    var vel = ax - prevX; prevX = ax;
    var teamPhase = p >= 0.72;
    var bank = teamPhase ? 0 : clamp(vel * 0.06, -13, 13);   // bank into the turn as it flies
    core.style.transform = 'translate(-50%,-50%) translate(' + ax.toFixed(1) + 'px,' + ay.toFixed(1) + 'px) rotate(' + bank.toFixed(2) + 'deg) scale(' + pos.s.toFixed(3) + ')';

    // glow follows + swells in team phase
    var teamP = clamp((p - 0.68) / 0.12);
    halo.style.transform = 'translate(-50%,-50%) translate(' + ax.toFixed(1) + 'px,' + ay.toFixed(1) + 'px) scale(' + (0.7 + pos.s * 0.4 + teamP * 0.5).toFixed(3) + ')';
    halo.style.opacity = (0.5 + teamP * 0.35).toFixed(2);

    // title / hint fade out early
    var tf = 1 - clamp(p / 0.09);
    title.style.opacity = tf;
    title.style.transform = 'translateY(' + ((1 - tf) * -26).toFixed(1) + 'px)';
    if (hint) hint.style.opacity = tf;

    // rings spin (they carry rotation so the bot itself never inverts)
    ring1.style.opacity = (1 - teamP).toFixed(2);
    ring2.style.opacity = (1 - teamP).toFixed(2);
    ring1.style.transform = 'translate(-50%,-50%) translate(' + ax.toFixed(1) + 'px,' + ay.toFixed(1) + 'px) rotate(' + (p * 230).toFixed(1) + 'deg)';
    ring2.style.transform = 'translate(-50%,-50%) translate(' + ax.toFixed(1) + 'px,' + ay.toFixed(1) + 'px) rotate(' + (p * -160).toFixed(1) + 'deg)';

    // concept cards fade/dock; tether from avatar to active card
    var activeCard = -1;
    cardEls.forEach(function (el, i) {
      var c = CARDS[i], w = c.win;
      var inn = ease(clamp((p - w[0]) / 0.05));
      var out = 1 - ease(clamp((p - (w[1] - 0.04)) / 0.045));
      var o = Math.min(inn, out);
      el.style.opacity = o.toFixed(3);
      var cx = c.x * (M.W / 2 - 150), cy = c.y * M.ampY;
      el.style.transform = 'translate(-50%,-50%) translate(' + cx.toFixed(1) + 'px,' + (cy + (1 - o) * 18).toFixed(1) + 'px)';
      if (o > 0.5) activeCard = i;
    });

    // tether line
    if (tether) {
      if (activeCard >= 0) {
        var c = CARDS[activeCard];
        var cx = M.W / 2 + c.x * (M.W / 2 - 150), cy = M.H / 2 + c.y * M.ampY;
        tether.setAttribute('x1', M.W / 2 + ax); tether.setAttribute('y1', M.H / 2 + ay);
        tether.setAttribute('x2', cx); tether.setAttribute('y2', cy);
        tether.style.opacity = '0.5';
      } else tether.style.opacity = '0';
    }

    // say bubble tracks avatar (positioned above head, un-rotated)
    var headY = ay - 150 * pos.s;
    say.style.transform = 'translate(-50%,-50%) translate(' + ax.toFixed(1) + 'px,' + headY.toFixed(1) + 'px)';

    // team fade-in
    var tShow = clamp((p - 0.72) / 0.08);
    teamEl.style.opacity = tShow.toFixed(2);
    links.style.opacity = tShow.toFixed(2);
    sats.forEach(function (s, i) {
      var d = i * 0.02;
      var so = clamp((tShow - d) / 0.6);
      s.el.style.opacity = so.toFixed(2);
      s.el.style.transform = 'translate(-50%,-50%) translate(' + (s.ox * so).toFixed(1) + 'px,' + (s.oy * so).toFixed(1) + 'px) scale(' + (0.6 + 0.4 * so).toFixed(3) + ')';
    });
    teamCap.style.opacity = clamp((p - 0.82) / 0.08).toFixed(2);
    if (outro) outro.style.opacity = '0';

    // narration + task flow
    enterKey(keyFor(p));
    setTeamActive(p >= 0.72);
  }

  /* ---- task-packet loop (team phase only) ---- */
  var packets = [], teamActive = false, rafTeam = null, lastT = 0, spawnAcc = 0;
  function setTeamActive(on) {
    if (on === teamActive) return; teamActive = on;
    if (on) { lastT = performance.now(); rafTeam = requestAnimationFrame(teamTick); }
    else { if (rafTeam) cancelAnimationFrame(rafTeam); rafTeam = null; packets.forEach(function (pk) { pk.el.remove(); }); packets = []; }
  }
  function spawnPacket() {
    if (document.hidden || !sats.length) return;
    var si = Math.floor(Math.random() * sats.length);
    var out = Math.random() > 0.42;                 // center → agent (delegate) or agent → center (report)
    var kind = PKT[Math.floor(Math.random() * PKT.length)];
    var el = document.createElement('div');
    el.className = 'wg-pkt'; el.innerHTML = IC[kind.ic] + '<span>' + kind.label + '</span>';
    packetsEl.appendChild(el);
    packets.push({ el: el, si: si, out: out, t: 0, dur: 1000 + Math.random() * 500 });
    tick();
  }
  function teamTick(now) {
    if (!teamActive) return;
    var dt = now - lastT; lastT = now;
    spawnAcc += dt;
    var interval = 640;
    if (spawnAcc > interval && packets.length < 6) { spawnAcc = 0; spawnPacket(); }
    var cx = 0, cy = 0; // offsets from stage center (core sits at center in team phase)
    for (var i = packets.length - 1; i >= 0; i--) {
      var pk = packets[i]; pk.t += dt / pk.dur;
      var s = sats[pk.si]; var e = ease(clamp(pk.t));
      var fromX = pk.out ? cx : s.ox, fromY = pk.out ? cy : s.oy;
      var toX = pk.out ? s.ox : cx, toY = pk.out ? s.oy : cy;
      var x = lerp(fromX, toX, e), y = lerp(fromY, toY, e);
      var sc = 0.7 + 0.3 * Math.sin(clamp(pk.t) * Math.PI);
      pk.el.style.transform = 'translate(-50%,-50%) translate(' + x.toFixed(1) + 'px,' + y.toFixed(1) + 'px) scale(' + sc.toFixed(2) + ')';
      pk.el.style.opacity = (Math.sin(clamp(pk.t) * Math.PI) * 1.1).toFixed(2);
      if (pk.t >= 1) {
        // arrival reaction
        if (pk.out) {
          var target = s.bot;
          if (target && window.GENU && target._genuSvg) { window.GENU.drawFace(target._genuSvg, 'done'); setTimeout(function (t) { return function () { if (t._genuSvg) window.GENU.drawFace(t._genuSvg, 'work'); }; }(target), 500); }
        } else { setExpr(coreBot, 'done'); setTimeout(function () { setExpr(coreBot, 'happy'); }, 460); }
        if (Math.random() > 0.5) tick();
        pk.el.remove(); packets.splice(i, 1);
      }
    }
    rafTeam = requestAnimationFrame(teamTick);
  }

  /* ---- rAF-throttled scroll ---- */
  var ticking = false;
  function onScroll() { if (ticking) return; ticking = true; requestAnimationFrame(function () { frame(); ticking = false; }); }

  function flat(on) {
    scene.classList.toggle('flat', on);
    if (on) {
      // reset any inline transforms so the static layout is clean
      [core, title, say, halo, ring1, ring2, teamEl, links, teamCap, outro].forEach(function (el) { if (el) { el.style.transform = ''; el.style.opacity = ''; } });
      cardEls.forEach(function (el) { el.style.transform = ''; el.style.opacity = ''; });
      sats.forEach(function (s) { s.el.style.transform = ''; s.el.style.opacity = ''; });
      setTeamActive(false);
    }
  }

  function init() {
    measure(); buildTeam();
    if (desktop()) { flat(false); frame(); }
    else { flat(true); }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', function () { measure(); layoutTeam(); if (desktop()) { flat(false); frame(); } else flat(true); });
  document.addEventListener('visibilitychange', function () { if (document.hidden) stopSpeak(); });

  /* =======================================================================
     WELCOME OVERLAY  +  AUDIO TOGGLE
     ======================================================================= */
  var welcome = $('#wgWelcome'), welBot = $('#wgWelBot'),
    btnHi = $('#wgSayHi'), btnExplore = $('#wgExplore'), audioBtn = $('#wgAudio');

  function setMuteIcon() {
    if (!audioBtn) return;
    audioBtn.innerHTML = muted
      ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6 9H2v6h4l5 4z"/><path d="m23 9-6 6M17 9l6 6"/></svg>'
      : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6 9H2v6h4l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M19 5a9 9 0 0 1 0 14"/></svg>';
    audioBtn.setAttribute('aria-label', muted ? 'Unmute' : 'Mute');
  }
  function waveBot() { if (!welBot) return; welBot.classList.remove('wg-waving'); void welBot.offsetWidth; welBot.classList.add('wg-waving'); }

  function dismissWelcome() {
    if (!welcome) return;
    if (welBot && window.GENU && window.GENU.talk) window.GENU.talk(welBot, false);
    welcome.classList.add('hide');
    document.body.style.overflow = '';
    setTimeout(function () { welcome.style.display = 'none'; frame(); navTheme(); }, 850);
  }
  if (btnHi) btnHi.addEventListener('click', function () {
    audioEnabled = true; muted = false; localStorage.setItem('wg-muted', '0'); setMuteIcon();
    AC(); pickVoice(); waveBot(); pop(); speak(WELCOME);
    if (welBot && window.GENU && window.GENU.talk) { window.GENU.talk(welBot, true); setTimeout(function () { window.GENU.talk(welBot, false); }, 900); }
    setTimeout(dismissWelcome, 900);
  });
  // GENU is always interactive: tap it to make it wave and talk (arm stays on the body)
  function pokeBot(el, ms) {
    if (!el) return;
    el.classList.remove('wg-waving'); void el.offsetWidth; el.classList.add('wg-waving');
    pop();
    if (window.GENU && window.GENU.talk) {
      window.GENU.talk(el, true);
      clearTimeout(el._pokeT);
      el._pokeT = setTimeout(function () { window.GENU.talk(el, false); setExpr(el, 'happy'); }, ms || 1500);
    }
  }
  if (welBot) { welBot.style.cursor = 'pointer'; welBot.setAttribute('role', 'button'); welBot.setAttribute('aria-label', 'Wave at GENU'); welBot.addEventListener('click', function () { pokeBot(welBot, 1500); }); }
  var _coreEl = document.getElementById('wgBot');
  if (_coreEl) { _coreEl.style.cursor = 'pointer'; _coreEl.addEventListener('click', function () { pokeBot(_coreEl, 1600); }); }
  if (btnExplore) btnExplore.addEventListener('click', function () { dismissWelcome(); });
  if (audioBtn) audioBtn.addEventListener('click', function () {
    muted = !muted; localStorage.setItem('wg-muted', muted ? '1' : '0'); setMuteIcon();
    if (muted) stopSpeak(); else { audioEnabled = true; AC(); }
  });

  /* ---- site header: dark-glass over the dark scene, light over the content below ---- */
  var _header = null, _welcomeEl = null, _darkSecs = [];
  function navTheme() {
    if (!_header) _header = document.querySelector('header.nav');
    if (!_header) return;
    var y = _header.getBoundingClientRect().bottom + 6, dark = false;
    if (_welcomeEl && getComputedStyle(_welcomeEl).display !== 'none' && !_welcomeEl.classList.contains('hide')) dark = true;
    else for (var i = 0; i < _darkSecs.length; i++) { var s = _darkSecs[i]; if (!s) continue; var r = s.getBoundingClientRect(); if (r.top <= y && r.bottom > y) { dark = true; break; } }
    _header.classList.toggle('nav-dark', dark);
    var img = _header.querySelector('.brand img');
    if (img) { var want = dark ? 'genu/genudo-logo-white.png' : 'genu/genudo-logo-color.png'; if ((img.getAttribute('src') || '') !== want) img.setAttribute('src', want); }
  }
  function initNav() {
    _welcomeEl = $('#wgWelcome');
    _darkSecs = [$('#scene'), $('.wg-ladder')];
    navTheme(); setTimeout(navTheme, 60);
    window.addEventListener('scroll', navTheme, { passive: true });
    window.addEventListener('resize', navTheme);
  }

  /* boot */
  function boot() {
    try { if ('scrollRestoration' in history) history.scrollRestoration = 'manual'; } catch (e) { }
    setMuteIcon();
    mountBots();
    initNav();
    if (RM || window.innerWidth <= 900) {
      // no overlay lock on mobile / reduced-motion
      if (welcome) { welcome.style.display = 'none'; }
      init();
    } else {
      window.scrollTo(0, 0);
      document.body.style.overflow = 'hidden';
      if (welBot) waveBot();
      // keep waving every few seconds until dismissed
      var waver = setInterval(function () { if (welcome && welcome.classList.contains('hide')) { clearInterval(waver); return; } waveBot(); }, 3200);
      init();
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();

  /* =======================================================================
     LOWER SECTIONS — scroll reveal + KPI count-up
     ======================================================================= */
  var reveals = $$('.reveal');
  function countUp(el) {
    if (el._done) return; el._done = true;
    var to = parseFloat(el.dataset.to), pre = el.dataset.prefix || '', suf = el.dataset.suffix || '', t0 = null, dur = 1100;
    function f(ts) { if (!t0) t0 = ts; var k = clamp((ts - t0) / dur); el.textContent = pre + Math.round(ease(k) * to) + suf; if (k < 1) requestAnimationFrame(f); }
    requestAnimationFrame(f);
  }
  if ('IntersectionObserver' in window && !RM) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); e.target.querySelectorAll('.now[data-to]').forEach(countUp); io.unobserve(e.target); }
      });
    }, { threshold: 0.2, rootMargin: '0px 0px -8% 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else reveals.forEach(function (el) { el.classList.add('in'); });
})();
