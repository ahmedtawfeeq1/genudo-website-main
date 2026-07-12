/* GenuDo hero — animated platform explainer + capability stepper.
   Cycles scenes one at a time, fills a progress bar per scene,
   pause/resume, auto-pause when off-screen or reduced-motion. */
(function () {
  var hpv = document.getElementById('hpv');
  if (!hpv) return;
  var scenes = [].slice.call(hpv.querySelectorAll('[data-scene]'));
  var dots   = [].slice.call(hpv.querySelectorAll('.hpv-dots i'));
  var capEl  = hpv.querySelector('.hpv-cap');
  var btn    = hpv.querySelector('.hpv-play');
  var DUR = 4000;
  var i = 0, timer = null, playing = false, inview = true;
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion:reduce)').matches;

  function paintDots(n, animate) {
    dots.forEach(function (d, k) {
      var b = d.querySelector('b');
      d.classList.toggle('done', k < n);
      b.style.transition = 'none';
      b.style.width = k < n ? '100%' : '0%';
      if (k === n && animate) {
        void b.offsetWidth;               // reflow
        b.style.transition = 'width ' + DUR + 'ms linear';
        b.style.width = '100%';
      } else if (k === n) {
        b.style.width = '100%';
      }
    });
  }

  function show(n, animate) {
    i = n;
    scenes.forEach(function (s, k) { s.classList.toggle('active', k === n); });
    if (capEl) capEl.textContent = scenes[n].getAttribute('data-cap') || '';
    paintDots(n, animate);
  }

  function next() { show((i + 1) % scenes.length, true); }

  function play() {
    playing = true;
    hpv.classList.remove('paused');
    clearInterval(timer);
    paintDots(i, true);
    timer = setInterval(next, DUR);
  }
  function pause(freeze) {
    playing = false;
    hpv.classList.add('paused');
    clearInterval(timer);
    if (freeze) {
      var b = dots[i] && dots[i].querySelector('b');
      if (b) { var w = getComputedStyle(b).width; b.style.transition = 'none'; b.style.width = w; }
    }
  }

  btn && btn.addEventListener('click', function () {
    if (playing) pause(true); else play();
  });

  show(0, false);
  if (reduce) { pause(false); } else { play(); }

  // pause when scrolled out of view; resume when back (only if user hasn't paused)
  if ('IntersectionObserver' in window && !reduce) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        inview = e.isIntersecting;
        if (!inview) { clearInterval(timer); }
        else if (playing) { clearInterval(timer); timer = setInterval(next, DUR); }
      });
    }, { threshold: 0.25 });
    io.observe(hpv);
  }
})();
