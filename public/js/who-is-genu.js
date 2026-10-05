/* ===========================================================================
   /who-is-genu — light behaviour for the value-led page.
   - Hero: tap GENU to hear the next line (lines come from data-lines, "|"-separated).
   - "How it works": on wide screens GENU narrates each step beside the cards
     (lines come from each step's data-say), so EN and AR narrate in their own language.
   - Scroll reveal and pausing the silent GENU loop when it is off screen.
   Every lookup is null-safe: the script never throws when an element is missing,
   and the page reads fine without it (no content is hidden unless this runs).
   =========================================================================== */
(function () {
  'use strict';

  var ROOT_SEL = '.pg-who-is-genu';

  function reducedMotion() {
    try { return !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches); }
    catch (e) { return false; }
  }

  function each(list, fn) { for (var i = 0; i < list.length; i++) fn(list[i], i); }

  function restart(el, cls, ms) {
    if (!el) return;
    el.classList.remove(cls);
    void el.offsetWidth; // restart the CSS animation
    el.classList.add(cls);
    clearTimeout(el._wgT);
    el._wgT = setTimeout(function () { el.classList.remove(cls); }, ms);
  }

  /* ---- hero: tap GENU, hear the next line ---- */
  function initHero(root, RM) {
    var btn = root.querySelector('[data-wg-genu]');
    var bubble = root.querySelector('[data-wg-hero-bubble]');
    if (!btn || !bubble) return;
    var raw = btn.getAttribute('data-lines') || '';
    var lines = [];
    each(raw.split('|'), function (s) { s = s.replace(/^\s+|\s+$/g, ''); if (s) lines.push(s); });
    if (!lines.length) return;
    var i = -1;
    btn.addEventListener('click', function () {
      i = (i + 1) % lines.length;
      bubble.textContent = lines[i];
      if (!RM) { restart(btn, 'is-hop', 650); restart(bubble, 'is-new', 450); }
    });
  }

  /* ---- "how it works": GENU narrates the step in view ---- */
  function initNarrator(root, RM) {
    var narr = root.querySelector('[data-wg-narrator]');
    var beats = root.querySelectorAll('[data-wg-beat]');
    if (!narr || !beats.length || !('IntersectionObserver' in window)) return;
    var say = narr.querySelector('[data-wg-say]');
    var num = narr.querySelector('[data-wg-num]');
    var current = null;

    function setBeat(beat) {
      if (!beat || beat === current) return;
      if (current) current.classList.remove('is-on');
      current = beat;
      beat.classList.add('is-on');
      var line = beat.getAttribute('data-say');
      if (say && line && say.textContent !== line) {
        say.textContent = line;
        if (!RM) { restart(say, 'is-new', 450); restart(narr, 'is-talk', 1100); }
      }
      if (num) num.textContent = beat.getAttribute('data-wg-beat') || '';
    }

    root.classList.add('wg-narrating');
    // A thin band across the middle of the viewport: whichever step crosses it is "on".
    var io = new IntersectionObserver(function (entries) {
      each(entries, function (e) { if (e.isIntersecting) setBeat(e.target); });
    }, { rootMargin: '-45% 0px -45% 0px', threshold: 0 });
    each(beats, function (b) { io.observe(b); });
    root._wgObservers.push(io);
  }

  /* ---- scroll reveal ---- */
  function initReveal(root, RM) {
    var els = root.querySelectorAll('.wg-rv');
    if (!els.length || RM || !('IntersectionObserver' in window)) return;
    root.classList.add('js-on');
    var io = new IntersectionObserver(function (entries) {
      each(entries, function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    each(els, function (el) { io.observe(el); });
    root._wgObservers.push(io);
  }

  /* ---- silent GENU loops: play only while visible, never under reduced motion ---- */
  function initLoops(root, RM) {
    var vids = root.querySelectorAll('video[data-wg-loop]');
    if (!vids.length) return;
    function play(v) { try { var p = v.play(); if (p && p.catch) p.catch(function () {}); } catch (e) {} }
    function pause(v) { try { v.pause(); } catch (e) {} }
    if (RM) { each(vids, function (v) { v.removeAttribute('autoplay'); pause(v); }); return; }
    if (!('IntersectionObserver' in window)) return;
    var io = new IntersectionObserver(function (entries) {
      each(entries, function (e) { if (e.isIntersecting) play(e.target); else pause(e.target); });
    }, { threshold: 0.2 });
    each(vids, function (v) { io.observe(v); });
    root._wgObservers.push(io);
  }

  function init() {
    var root = document.querySelector(ROOT_SEL);
    if (!root || root.getAttribute('data-wg-ready') === '1') return;
    root.setAttribute('data-wg-ready', '1');
    root._wgObservers = [];
    var RM = reducedMotion();
    try { initHero(root, RM); } catch (e) {}
    try { initNarrator(root, RM); } catch (e) {}
    try { initReveal(root, RM); } catch (e) {}
    try { initLoops(root, RM); } catch (e) {}
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();

  // The script tag is loaded once per session (LegacyScripts de-duplicates it), so when the
  // visitor comes back to this page through client-side navigation, wake up on the new markup.
  if (!window.__wgWatch && 'MutationObserver' in window && document.body) {
    window.__wgWatch = true;
    var queued = false;
    new MutationObserver(function () {
      if (queued) return;
      queued = true;
      setTimeout(function () { queued = false; init(); }, 60);
    }).observe(document.body, { childList: true, subtree: true });
  }
})();
