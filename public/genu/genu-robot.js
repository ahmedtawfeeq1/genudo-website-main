/* Animated GENU robot builder.
   Usage: <div class="genu" data-genu data-expr="idle" data-action="phone" data-hue="#6468f0" data-move></div>
   then include this file (after genu-robot.css). Auto-mounts every .genu[data-genu].
   Programmatic: GENU.build(el, {shell|hue, expr, action, move}) → returns the <svg>. */
(function () {
  const NS = 'http://www.w3.org/2000/svg', GLOW = '#9ea2ff', U = 5;
  const RM = window.matchMedia && window.matchMedia('(prefers-reduced-motion:reduce)').matches;

  const ARMS = {
    hang: `<g class="armg armL"><path d="M40 130 C 22 140 16 168 22 196 C 36 192 46 168 48 142 Z" fill="var(--hl)"/></g><g class="armg armR"><path d="M160 130 C 178 140 184 168 178 196 C 164 192 154 168 152 142 Z" fill="var(--hd)"/></g>`,
    front: `<g class="armg armL"><path d="M46 134 C 36 154 58 180 90 188 C 100 181 86 150 64 138 Z" fill="var(--hl)"/></g><g class="armg armR"><path d="M154 134 C 164 154 142 180 110 188 C 100 181 114 150 136 138 Z" fill="var(--hd)"/></g>`,
    callR: `<g class="armg armL"><path d="M40 130 C 22 140 16 168 22 196 C 36 192 46 168 48 142 Z" fill="var(--hl)"/></g><g class="armg armR"><path d="M150 140 C 172 132 176 102 160 88 C 149 93 145 120 138 142 Z" fill="var(--hd)"/></g>`,
    think: `<g class="armg armL"><path d="M48 140 C 38 120 60 108 84 114 C 90 125 72 140 60 154 Z" fill="var(--hl)"/></g><g class="armg armR"><path d="M160 130 C 178 140 184 168 178 196 C 164 192 154 168 152 142 Z" fill="var(--hd)"/></g>`,
  };

  const SEARCHBAR = `<g class="searchbar"><rect x="52" y="8" width="96" height="20" rx="10" fill="#15131f" stroke="var(--hl)" stroke-width="2"/><circle cx="66" cy="18" r="4.5" fill="none" stroke="var(--acc)" stroke-width="2"/><line x1="69" y1="21" x2="73" y2="25" stroke="var(--acc)" stroke-width="2"/><rect class="searchscan" x="80" y="16" width="30" height="4" rx="2" fill="#3a3a66"/></g>`;
  const THINK = `<path class="thinkarc" d="M58 44 Q100 14 144 44" stroke="var(--acc)" stroke-width="2.5" fill="none" stroke-dasharray="3 5" stroke-linecap="round"/><g class="bulb"><g class="rays" stroke="var(--acc)" stroke-width="2" stroke-linecap="round"><line x1="100" y1="-2" x2="100" y2="3"/><line x1="82" y1="7" x2="85" y2="10"/><line x1="118" y1="7" x2="115" y2="10"/></g><circle cx="100" cy="18" r="12" fill="var(--acc)"/><circle cx="100" cy="18" r="12" fill="#fff" opacity=".22"/><rect x="94" y="27" width="12" height="5" rx="2" fill="var(--hd)"/><path d="M96 17 L100 11 L104 17" stroke="#7a5a00" stroke-width="1.6" fill="none"/></g>`;
  const PROPS = {
    laptop: `<g class="prop"><path d="M54 196 H146 L156 210 H44 Z" fill="var(--hd)"/><rect x="66" y="150" width="68" height="44" rx="5" fill="#15131f" stroke="var(--hl)" stroke-width="2.5"/><rect x="72" y="156" width="56" height="32" rx="3" fill="#0c0a1c"/><rect x="78" y="162" width="28" height="4" rx="2" fill="var(--acc)"/><rect x="78" y="170" width="44" height="3" rx="1.5" fill="#3a3a66"/><rect x="78" y="177" width="34" height="3" rx="1.5" fill="#3a3a66"/></g>`,
    code: `<g class="prop"><path d="M54 196 H146 L156 210 H44 Z" fill="var(--hd)"/><rect x="66" y="150" width="68" height="44" rx="5" fill="#15131f" stroke="var(--hl)" stroke-width="2.5"/><rect x="72" y="156" width="56" height="32" rx="3" fill="#0c0a1c"/><rect x="78" y="162" width="14" height="3" rx="1.5" fill="#e86fa6"/><rect x="95" y="162" width="22" height="3" rx="1.5" fill="#52a7cc"/><rect x="82" y="169" width="30" height="3" rx="1.5" fill="var(--acc)"/><rect x="82" y="176" width="20" height="3" rx="1.5" fill="#36b277"/></g>`,
    chart: `<g class="prop"><rect x="66" y="150" width="68" height="44" rx="5" fill="#15131f" stroke="var(--hl)" stroke-width="2.5"/><rect x="74" y="176" width="9" height="12" rx="1" fill="#52a7cc"/><rect x="87" y="168" width="9" height="20" rx="1" fill="#36b277"/><rect x="100" y="160" width="9" height="28" rx="1" fill="var(--acc)"/><rect x="113" y="172" width="9" height="16" rx="1" fill="#e86fa6"/></g>`,
    calendar: `<g class="prop"><rect x="70" y="150" width="60" height="46" rx="5" fill="#eef0fb"/><rect x="70" y="150" width="60" height="13" rx="5" fill="var(--hd)"/><g fill="#a6a6c8"><rect x="77" y="169" width="7" height="6" rx="1"/><rect x="89" y="169" width="7" height="6" rx="1"/><rect x="101" y="169" width="7" height="6" rx="1"/><rect x="113" y="169" width="7" height="6" rx="1"/><rect x="77" y="180" width="7" height="6" rx="1"/><rect x="101" y="180" width="7" height="6" rx="1"/></g><rect x="89" y="180" width="7" height="6" rx="1" fill="var(--acc)"/></g>`,
    doc: `<g class="prop"><rect x="74" y="150" width="52" height="46" rx="3" fill="#eef0fb"/><rect x="80" y="158" width="40" height="3" rx="1.5" fill="#b9b9d6"/><rect x="80" y="166" width="40" height="3" rx="1.5" fill="#b9b9d6"/><rect x="80" y="174" width="28" height="3" rx="1.5" fill="#b9b9d6"/><rect x="108" y="178" width="22" height="5" rx="2" fill="var(--acc)" transform="rotate(34 119 180)"/></g>`,
    checklist: `<g class="prop"><rect x="72" y="150" width="56" height="46" rx="4" fill="#eef0fb"/><rect x="80" y="160" width="8" height="8" rx="2" fill="var(--acc)"/><rect x="92" y="162" width="28" height="4" rx="2" fill="#b9b9d6"/><rect x="80" y="172" width="8" height="8" rx="2" fill="#36b277"/><rect x="92" y="174" width="28" height="4" rx="2" fill="#b9b9d6"/><rect x="80" y="184" width="8" height="8" rx="2" fill="#cfcfe6"/><rect x="92" y="186" width="20" height="4" rx="2" fill="#b9b9d6"/></g>`,
    deal: `<g class="prop"><rect x="74" y="150" width="52" height="46" rx="3" fill="#eef0fb"/><rect x="80" y="158" width="40" height="3" rx="1.5" fill="#b9b9d6"/><rect x="80" y="166" width="40" height="3" rx="1.5" fill="#b9b9d6"/><path d="M84 182 l6 7 l16 -18" stroke="#36b277" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g>`,
    shield: `<g class="prop"><path d="M100 150 L124 158 V178 C124 190 112 197 100 201 C88 197 76 190 76 178 V158 Z" fill="var(--hl)"/><path d="M91 176 l6 6 l13 -15" stroke="#15131f" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g>`,
    search: SEARCHBAR + `<g class="prop"><circle cx="118" cy="180" r="15" fill="#9ea2ff" opacity=".18"/><circle cx="118" cy="180" r="15" fill="none" stroke="var(--hl)" stroke-width="5"/><line x1="129" y1="191" x2="142" y2="204" stroke="var(--hl)" stroke-width="6" stroke-linecap="round"/></g>`,
    megaphone: `<g class="prop"><path d="M150 86 L180 76 L180 116 L150 106 Z" fill="var(--acc)"/><rect x="142" y="90" width="10" height="14" rx="2" fill="var(--hd)"/><g class="rays" stroke="var(--acc)" stroke-width="2.5" fill="none" stroke-linecap="round"><path d="M185 82 q9 14 0 28"/></g></g>`,
    phone: `<g class="prop"><rect x="150" y="74" width="18" height="34" rx="5" fill="#15131f" stroke="var(--hl)" stroke-width="2.5"/><rect x="154" y="80" width="10" height="20" rx="2" fill="#0c0a1c"/><circle cx="159" cy="104" r="1.6" fill="var(--acc)"/><g class="rays" stroke="var(--acc)" stroke-width="2" fill="none" stroke-linecap="round"><path d="M172 78 q6 6 0 14"/><path d="M177 74 q10 10 0 22"/></g></g>`,
    headset: `<g class="prop"><path d="M48 94 A 54 54 0 0 1 152 94" fill="none" stroke="var(--hd)" stroke-width="6"/><rect x="40" y="92" width="13" height="22" rx="6" fill="var(--hd)"/><rect x="147" y="92" width="13" height="22" rx="6" fill="var(--hd)"/><path d="M46 114 q-2 14 14 16" fill="none" stroke="var(--hd)" stroke-width="4"/><circle cx="62" cy="132" r="3.5" fill="var(--acc)"/></g>`,
    heart: `<g class="prop"><path d="M150 90 c -7 -9 -22 -4 -22 8 c 0 10 13 16 22 24 c 9 -8 22 -14 22 -24 c 0 -12 -15 -17 -22 -8 Z" fill="#e86fa6"/></g>`,
    gears: `<g class="prop" fill="var(--hl)"><circle cx="150" cy="150" r="15"/><circle cx="150" cy="150" r="6" fill="#15131f"/><circle cx="122" cy="172" r="10"/><circle cx="122" cy="172" r="4" fill="#15131f"/></g>`,
  };
  const POSE = { think: 'think', laptop: 'front', code: 'front', chart: 'front', calendar: 'front', doc: 'front', checklist: 'front', deal: 'front', shield: 'front', search: 'front', phone: 'callR', megaphone: 'callR' };
  const FRONTARMS = { laptop: 1, code: 1, chart: 1, calendar: 1, doc: 1, checklist: 1, deal: 1, shield: 1, think: 1, phone: 1, megaphone: 1, search: 1 };

  const SHELLS = {
    indigo: { hue: '#6468f0', hd: '#4548c4', hl: '#a9abff', acc: '#ffe14d' },
    white: { hue: '#eef0ff', hd: '#cdd0ec', hl: '#ffffff', acc: '#6468f0' },
    black: { hue: '#23222e', hd: '#141320', hl: '#46435f', acc: '#ffe14d' },
  };
  function adjust(hex, f) {
    let n = parseInt(hex.slice(1), 16), r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
    if (f < 1) { r *= f; g *= f; b *= f; } else { const t = f - 1; r += (255 - r) * t; g += (255 - g) * t; b += (255 - b) * t; }
    return '#' + [r, g, b].map(v => Math.round(v).toString(16).padStart(2, '0')).join('');
  }
  function hueSet(hex) { return { hue: hex, hd: adjust(hex, .72), hl: adjust(hex, 1.45), acc: '#ffe14d' }; }

  function robotSVG(mode) {
    return `
    <svg class="bot" viewBox="0 0 200 230">
      ${ARMS[mode] || ARMS.hang}
      <g class="bodyg">
        <path d="M58 150 Q100 132 142 150 L148 188 Q148 218 100 218 Q52 218 52 188 Z" fill="var(--hu)"/>
        <path d="M72 198 Q100 186 128 198" stroke="var(--hl)" stroke-width="6" fill="none" stroke-linecap="round" opacity=".5"/>
        <circle class="chest" cx="100" cy="172" r="6" fill="var(--acc)"/>
      </g>
      <g class="headg">
        <circle cx="48" cy="46" r="8" fill="var(--hd)"/><circle cx="152" cy="46" r="8" fill="var(--hd)"/>
        <line x1="54" y1="54" x2="62" y2="64" stroke="var(--hd)" stroke-width="5"/><line x1="146" y1="54" x2="138" y2="64" stroke="var(--hd)" stroke-width="5"/>
        <rect x="34" y="38" width="132" height="118" rx="46" fill="var(--hu)"/>
        <path d="M58 62 Q80 46 112 52" stroke="#fff" stroke-width="7" fill="none" stroke-linecap="round" opacity=".5"/>
        <rect x="57" y="68" width="86" height="58" rx="28" fill="#0c0a1c"/>
        <rect x="57" y="68" width="86" height="58" rx="28" fill="none" stroke="#ffffff" stroke-width="1.5" opacity=".14"/>
        <g class="face"></g>
      </g>
      <g class="extras"></g>
    </svg>`;
  }

  function px(g, x, y, c) { const r = document.createElementNS(NS, 'rect'); r.setAttribute('x', x); r.setAttribute('y', y); r.setAttribute('width', U); r.setAttribute('height', U); r.setAttribute('fill', c || GLOW); g.appendChild(r); }
  function eyeBlock(g, ox, oy) {
    const xs = [ox, ox + U, ox + U * 2, ox + U * 3], ys = [oy, oy + U, oy + U * 2, oy + U * 3, oy + U * 4];
    ys.forEach((y, ri) => xs.forEach((x, ci) => { const corner = (ri === 0 || ri === 4) && (ci === 0 || ci === 3); if (corner) return; px(g, x, y, GLOW); }));
  }
  function chevEye(g, cx, topY) { px(g, cx, topY, GLOW); px(g, cx - U, topY + U, GLOW); px(g, cx + U, topY + U, GLOW); px(g, cx - U * 2, topY + U * 2, GLOW); px(g, cx + U * 2, topY + U * 2, GLOW); }
  function drawFace(svg, expr) {
    const g = svg.querySelector('.face'); g.innerHTML = '';
    const lx = 72, rx = 108, top = 84, lc = lx + Math.round(1.5 * U), rc = rx + Math.round(1.5 * U);
    if (expr === 'blink') { for (const x of [lx, lx + U, lx + U * 2, lx + U * 3]) px(g, x, top + U * 2, GLOW); for (const x of [rx, rx + U, rx + U * 2, rx + U * 3]) px(g, x, top + U * 2, GLOW); px(g, 95, 116, '#6b6fd6'); px(g, 100, 116, '#6b6fd6'); return; }
    if (expr === 'happy') { chevEye(g, lc, top + U); chevEye(g, rc, top + U); px(g, 85, 113, '#6b6fd6'); px(g, 90, 117, '#6b6fd6'); px(g, 95, 119, '#6b6fd6'); px(g, 100, 119, '#6b6fd6'); px(g, 105, 117, '#6b6fd6'); px(g, 110, 113, '#6b6fd6'); return; }
    if (expr === 'work') { for (const x of [lx, lx + U, lx + U * 2, lx + U * 3]) { px(g, x, top + U, GLOW); px(g, x, top + U * 2, GLOW); } for (const x of [rx, rx + U, rx + U * 2, rx + U * 3]) { px(g, x, top + U, GLOW); px(g, x, top + U * 2, GLOW); } px(g, 92, 116, '#6b6fd6'); px(g, 97, 116, '#6b6fd6'); px(g, 102, 116, '#6b6fd6'); return; }
    if (expr === 'talk1' || expr === 'talk2') {
      for (const x of [lx, lx + U, lx + U * 2, lx + U * 3]) { px(g, x, top + U, GLOW); px(g, x, top + U * 2, GLOW); }
      for (const x of [rx, rx + U, rx + U * 2, rx + U * 3]) { px(g, x, top + U, GLOW); px(g, x, top + U * 2, GLOW); }
      if (expr === 'talk1') { px(g, 92, 112, '#6b6fd6'); px(g, 97, 112, '#6b6fd6'); px(g, 102, 112, '#6b6fd6'); px(g, 92, 118, '#6b6fd6'); px(g, 97, 118, '#6b6fd6'); px(g, 102, 118, '#6b6fd6'); }
      else { px(g, 94, 116, '#6b6fd6'); px(g, 99, 116, '#6b6fd6'); }
      return;
    }
    if (expr === 'done') { chevEye(g, lc, top + U); chevEye(g, rc, top + U); px(g, 90, 116, '#6b6fd6'); px(g, 95, 119, '#6b6fd6'); px(g, 100, 119, '#6b6fd6'); px(g, 105, 116, '#6b6fd6'); return; }
    eyeBlock(g, lx, top); eyeBlock(g, rx, top);
    px(g, 92, 116, '#6b6fd6'); px(g, 97, 117, '#6b6fd6'); px(g, 102, 116, '#6b6fd6');
  }

  function addAction(el, action) {
    const ex = el.querySelector('.extras'), dod = el.querySelector('.dodot'), svg = el.querySelector('svg.bot');
    if (action === 'think') { if (dod) dod.style.display = 'none'; ex.innerHTML = THINK; }
    else if (PROPS[action]) { ex.innerHTML = PROPS[action]; }
    if (FRONTARMS[action]) { const aL = svg.querySelector('.armL'), aR = svg.querySelector('.armR'); if (aL) svg.appendChild(aL); if (aR) svg.appendChild(aR); }
  }

  function build(el, opts) {
    opts = opts || {};
    let set = opts.shell ? SHELLS[opts.shell] : (opts.hue ? hueSet(opts.hue) : null);
    const mode = POSE[opts.action] || 'hang';
    el.innerHTML = '<div class="haze"></div>' +
      '<div class="ringline"></div>' +
      '<span class="dodot"></span>' +
      '<div class="lift">' + robotSVG(mode) + '</div>' +
      '<div class="orbit"><i class="sat"></i><i class="sat s2"></i><i class="sat s3"></i></div>';
    if (set) { el.style.setProperty('--hue', set.hue); el.style.setProperty('--hu', set.hue); el.style.setProperty('--hd', set.hd); el.style.setProperty('--hl', set.hl); el.style.setProperty('--acc', set.acc); }
    const svg = el.querySelector('svg.bot');
    el._genuExpr = opts.expr || 'idle';
    drawFace(svg, el._genuExpr);
    if (opts.move) el.classList.add('move'); else el.classList.remove('move');
    if (opts.action) addAction(el, opts.action);
    el._genuSvg = svg;
    return svg;
  }

  // Periodic blink that restores whatever the current resting expression is.
  // Reads el._genuSvg fresh each tick so it keeps working after GENU.build() swaps the SVG.
  function blink(el) {
    if (RM || el._blinkT) return;
    el._blinkT = setInterval(() => {
      const svg = el._genuSvg; if (!svg || el._talkT) return;
      const cur = el._genuExpr || 'idle';
      drawFace(svg, 'blink');
      setTimeout(() => { if (el._genuSvg) drawFace(el._genuSvg, cur); }, 150);
    }, 3400 + Math.random() * 1800);
  }

  // Cycle expressions + occasional blink on a mounted GENU (keeps the base bot lively).
  function liven(el, seq) {
    if (RM || el._genuTimers) return;
    seq = seq || ['idle', 'idle', 'happy', 'work', 'work', 'done'];
    let i = 0;
    const t1 = setInterval(() => { const svg = el._genuSvg; if (!svg) return; i = (i + 1) % seq.length; el._genuExpr = seq[i]; drawFace(svg, seq[i]); }, 2600);
    const t2 = setInterval(() => { const svg = el._genuSvg; if (!svg) return; const cur = el._genuExpr; drawFace(svg, 'blink'); setTimeout(() => { if (el._genuSvg) drawFace(el._genuSvg, cur); }, 150); }, 4300);
    el._genuTimers = [t1, t2];
  }

  function mountAll(root) {
    (root || document).querySelectorAll('.genu[data-genu]').forEach(el => {
      if (el._genuMounted) return;
      el._genuMounted = true;
      const d = el.dataset;
      build(el, {
        shell: d.shell || null,
        hue: d.hue || null,
        expr: d.expr || 'idle',
        action: d.action || null,
        move: d.move !== undefined || d.move === '',
      });
      if (d.liven !== undefined) liven(el); else blink(el);
    });
  }

  // Talking: a smooth voice-waveform in the visor (Siri-style bars) + friendly eyes —
  // reads clearly as "speaking" and eases back to the resting face when it stops.
  function drawSpeak(svg, bars) {
    const g = svg.querySelector('.face'); if (!g) return; g.innerHTML = '';
    const top = 84, lc = 72 + Math.round(1.5 * U), rc = 108 + Math.round(1.5 * U);
    chevEye(g, lc, top + U); chevEye(g, rc, top + U);
    const xs = [83, 90, 97, 104, 111], cy = 116.5;
    for (let i = 0; i < xs.length; i++) {
      const h = Math.max(3, bars[i]);
      const r = document.createElementNS(NS, 'rect');
      r.setAttribute('x', xs[i]); r.setAttribute('y', (cy - h / 2).toFixed(1));
      r.setAttribute('width', 4); r.setAttribute('height', h.toFixed(1));
      r.setAttribute('rx', 2); r.setAttribute('fill', GLOW);
      g.appendChild(r);
    }
  }
  function talk(el, on) {
    if (!el) return;
    if (el._talkT) { clearInterval(el._talkT); el._talkT = null; }
    const svg = el._genuSvg; if (!svg) return;
    if (!on || RM) { el._wave = null; drawFace(svg, el._genuExpr || 'idle'); return; }
    const W = el._wave || (el._wave = [5, 5, 5, 5, 5].map(() => ({ h: 5, t: 5 + Math.random() * 9 })));
    drawSpeak(svg, W.map(o => o.h));
    el._talkT = setInterval(() => {
      const s = el._genuSvg; if (!s) return;
      for (const o of W) { o.h += (o.t - o.h) * 0.4; if (Math.abs(o.t - o.h) < 0.9) o.t = 3 + Math.random() * 11; }
      drawSpeak(s, W.map(o => o.h));
    }, 70);
  }

  window.GENU = { build, drawFace, hueSet, liven, blink, talk, mountAll, SHELLS };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => mountAll());
  else mountAll();
})();
