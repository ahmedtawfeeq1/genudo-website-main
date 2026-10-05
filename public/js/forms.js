/* Website forms -> /api/forms -> n8n webhook (docs/website/FORMS-WEBHOOK.md).
   Any <form data-form="<type>"> is handled: fields are sent as JSON with page
   metadata; status text comes from data-ok / data-err on the form. */
(function () {
  // Keep first-touch UTM params for the session so a later form still has them.
  try {
    var q = new URLSearchParams(location.search), utm = {};
    ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'fbclid'].forEach(function (k) { if (q.get(k)) utm[k] = q.get(k); });
    if (Object.keys(utm).length && !sessionStorage.getItem('gd_utm')) sessionStorage.setItem('gd_utm', JSON.stringify(utm));
  } catch (e) {}

  function bind(form) {
    if (form._gdBound) return;
    form._gdBound = true;
    var status = form.querySelector('[data-form-status]');
    var btn = form.querySelector('[type="submit"]');
    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      if (!form.reportValidity()) return;
      var data = {};
      new FormData(form).forEach(function (v, k) {
        if (k in data) data[k] = [].concat(data[k], v); else data[k] = v;
      });
      var utm = {};
      try { utm = JSON.parse(sessionStorage.getItem('gd_utm') || '{}'); } catch (e) {}
      var meta = {
        locale: document.documentElement.lang, page: location.pathname, pageTitle: document.title,
        referrer: document.referrer, utm: utm,
        timezone: (Intl.DateTimeFormat().resolvedOptions() || {}).timeZone
      };
      if (btn) btn.disabled = true;
      if (status) { status.textContent = form.dataset.sending || '…'; status.className = 'form-status'; }
      fetch('/api/forms', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ form: form.dataset.form, data: data, meta: meta }) })
        .then(function (r) { return r.json().then(function (j) { return r.ok && j.ok; }); })
        .catch(function () { return false; })
        .then(function (ok) {
          if (btn) btn.disabled = false;
          if (status) { status.textContent = ok ? form.dataset.ok : form.dataset.err; status.className = 'form-status ' + (ok ? 'is-ok' : 'is-err'); }
          if (ok) form.reset();
        });
    });
  }
  function init() { Array.prototype.forEach.call(document.querySelectorAll('form[data-form]'), bind); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
