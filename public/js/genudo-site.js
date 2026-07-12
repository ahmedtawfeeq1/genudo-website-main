/* ============================================================
   GenuDo site — interactions & animation triggers
   ============================================================ */

/* ── scroll-driven visibility (robust; no IntersectionObserver) ── */
function inView(el, frac){
  const r = el.getBoundingClientRect();
  const vh = window.innerHeight || document.documentElement.clientHeight;
  return r.top < vh * (frac || 0.9) && r.bottom > 0;
}

/* number counter */
function animateCount(el){
  if(el.dataset.done) return; el.dataset.done = '1';
  const target = parseFloat(el.dataset.count);
  const suffix = el.dataset.suffix || '';
  const pre = el.dataset.pre || '';
  const dec = (target % 1 !== 0) ? 2 : 0;
  const dur = 1300, t0 = performance.now();
  (function tick(now){
    let p = Math.min(1,(now-t0)/dur); p = 1-Math.pow(1-p,3);
    const v = target*p;
    el.textContent = pre + (dec ? v.toFixed(2) : Math.round(v).toLocaleString()) + suffix;
    if(p<1) requestAnimationFrame(tick);
  })(performance.now());
}

const asm = document.getElementById('assembly');
const roiGrid = document.getElementById('roiGrid');
const heroEl = document.getElementById('heroCount');

let ticking = false;
function onScroll(){
  if(ticking) return; ticking = true;
  requestAnimationFrame(()=>{
    document.querySelectorAll('.reveal').forEach(el=>{ if(inView(el,0.94)) el.classList.add('in'); });
    if(heroEl && inView(heroEl,0.95)){ heroEl.dataset.count='1240'; animateCount(heroEl); }
    if(roiGrid && inView(roiGrid,0.85)){ roiGrid.querySelectorAll('[data-count]').forEach(animateCount); }
    if(asm){ asm.classList.toggle('play', inView(asm,0.7) && asm.getBoundingClientRect().bottom > 0); }
    ticking = false;
  });
}
window.addEventListener('scroll', onScroll, {passive:true});
window.addEventListener('resize', onScroll);
window.addEventListener('load', onScroll);
onScroll();
setTimeout(onScroll, 120);
setTimeout(onScroll, 500);

/* ── department explorer ────────────────────── */
const DEPTS = {
  Sales:{job:'Qualify, follow up and close inbound leads.',
    before:'Reps chase leads by hand; slow replies; leads go cold',
    after:'Scout qualifies, Echo follows up, Closer negotiates — 24/7.',
    assets:[['Scout','#14b8a6'],['Closer','#8b5cf6'],['Echo','#f59e0b'],['Knowledge library','']],
    deploy:[['Sales Pipeline',''],['Lead Qualification Sequence','']]},
  Support:{job:'Answer questions and resolve tickets.',
    before:'Customers wait hours; repetitive questions drown the team',
    after:'Mira & Sage resolve instantly and escalate only the rest.',
    assets:[['Mira','#06b6d4'],['Sage','#6468f0'],['Knowledge library','']],
    deploy:[['Support Pipeline',''],['Webchat + Email channels','']]},
  Operations:{job:'Run daily operations and reporting.',
    before:'Manual reports; anomalies missed; nothing is logged',
    after:'Atlas summarizes activity, spots issues and drafts reports.',
    assets:[['Atlas','#f97316'],['Sheets + API tools','']],
    deploy:[['Daily Report Sequence',''],['Internal Routing Sequence','']]},
  Finance:{job:'Review invoices and payments.',
    before:'Manual data entry; errors slip into the books',
    after:'Ledger validates every invoice before it hits finance.',
    assets:[['Ledger','#10b981'],['Payment + Sheets tools','']],
    deploy:[['Invoice Review Sequence',''],['Payment Reminder Sequence','']]},
  HR:{job:'Screen and follow up with candidates.',
    before:'CVs pile up; candidates wait days for a reply',
    after:'An agent screens CVs, scores fit and notifies HR instantly.',
    assets:[['Custom agent','#ec4899'],['Knowledge library','']],
    deploy:[['CV Screening Sequence',''],['Candidate Pipeline','']]},
  Scheduling:{job:'Book and manage meetings.',
    before:'Endless back-and-forth to find a time slot',
    after:'Nova holds slots and books meetings automatically.',
    assets:[['Nova','#22c55e'],['Calendar tools','']],
    deploy:[['Booking Pipeline',''],['Meeting Reminder Sequence','']]}
};
function chipHTML(arr){
  return arr.map(a=>'<span class="chip">'+(a[1]?'<span class="dot" style="background:'+a[1]+'"></span>':'')+a[0]+'</span>').join('');
}
function setDept(name){
  const d = DEPTS[name]; if(!d) return;
  document.getElementById('deptName').textContent = name;
  document.getElementById('deptJob').textContent = d.job;
  document.getElementById('deptBefore').textContent = d.before;
  document.getElementById('deptAfter').textContent = d.after;
  document.getElementById('deptAssets').innerHTML = chipHTML(d.assets);
  document.getElementById('deptDeploy').innerHTML = chipHTML(d.deploy);
  const panel = document.getElementById('deptPanel');
  panel.classList.remove('fade-swap'); void panel.offsetWidth; panel.classList.add('fade-swap');
}
const deptTabs = document.getElementById('deptTabs');
if(deptTabs){
  deptTabs.addEventListener('click',(e)=>{
    const b = e.target.closest('[data-dept]'); if(!b) return;
    deptTabs.querySelectorAll('.dept-tab').forEach(x=>x.classList.toggle('active', x===b));
    setDept(b.dataset.dept);
  });
  setDept('Sales');
}

/* ── lead form ──────────────────────────────── */
function submitLead(e){
  e.preventDefault();
  const f = e.target;
  f.innerHTML = '<div style="text-align:center;padding:18px 0;"><div style="font-size:34px;">✓</div><h3 style="margin-top:8px;">Thanks — we\'ll be in touch.</h3><p class="muted" style="margin-top:6px;">A GenuDo specialist will reach out to scope your first AI employee.</p></div>';
  return false;
}

/* ── AI chat widget ─────────────────────────── */
const chatPanel = document.getElementById('chatPanel');
const chatFab = document.getElementById('chatFab');
const chatBody = document.getElementById('chatBody');
const chatInput = document.getElementById('chatInput');
let chatBusy = false;

function openChat(){ chatPanel.classList.add('open'); chatFab.style.display='none'; setTimeout(()=>chatInput.focus(),200); }
function closeChat(){ chatPanel.classList.remove('open'); chatFab.style.display='flex'; }
function quick(t){ chatInput.value=t; sendChat(); }

function addMsg(text, who){
  const m = document.createElement('div');
  m.className = 'msg ' + who;
  m.textContent = text;
  chatBody.appendChild(m);
  chatBody.scrollTop = chatBody.scrollHeight;
  return m;
}
function showTyping(){
  const t = document.createElement('div');
  t.className = 'typing'; t.id = 'typing';
  t.innerHTML = '<i></i><i></i><i></i>';
  chatBody.appendChild(t); chatBody.scrollTop = chatBody.scrollHeight;
}
function hideTyping(){ const t = document.getElementById('typing'); if(t) t.remove(); }

const SYS = `You are GenuDo's friendly AI sales agent on the GenuDo marketing website. GenuDo is a platform for building "genuine AI employees" — each employee is an AGENT (the brain/character) combined with KNOWLEDGE (what it knows), TOOLS & ACTIONS (what it can do), and CHANNELS (where it talks: WhatsApp, Messenger, Webchat, Email). Employees are deployed two ways: PIPELINES (manage communication with people — customers or staff, through stages) and SEQUENCES (run internal work & operations on a visual canvas). Humans stay in control via the INBOX (monitor, take over, approve). It works across Sales, Support, Operations, Finance, HR and Scheduling — departments are templates, not silos. Keep replies short (2-4 sentences), warm, concrete, and always steer toward booking a demo or trying it. Never invent specific prices; say pricing depends on volume and offer to connect them.`;

const FALLBACK = {
  'different':'Great question — a chatbot just answers. A GenuDo employee actually does the work: it qualifies leads, moves deals through pipelines, runs internal sequences, and uses real tools (CRM, payments, calendar). You stay in control through the Inbox. Want me to scope one for your team?',
  'cost':'Pricing depends on how many conversations and sequences you run — most teams start small and scale as agents take on more. I can connect you with a specialist for an exact number. Want to book a quick demo?',
  'whatsapp':'Yes! WhatsApp is one of our core channels, alongside Messenger, Webchat, Instagram and Email. Your agents reply instantly, 24/7, right where your customers already are. Shall I set up a demo on WhatsApp?',
  'default':'Happy to help! GenuDo lets you build AI employees — agents powered by your knowledge, tools and channels, deployed through pipelines and sequences, with humans in control via the Inbox. What would your first AI employee do? I can scope it for you.'
};
function fallbackReply(q){
  const s = q.toLowerCase();
  if(/(differ|chatbot|bot|vs)/.test(s)) return FALLBACK.different;
  if(/(cost|price|pricing|how much|\$)/.test(s)) return FALLBACK.cost;
  if(/(whatsapp|channel|messenger|instagram|email)/.test(s)) return FALLBACK.whatsapp;
  return FALLBACK.default;
}

async function sendChat(){
  const q = chatInput.value.trim();
  if(!q || chatBusy) return;
  chatBusy = true;
  chatInput.value='';
  const quickRow = document.getElementById('chatQuick'); if(quickRow) quickRow.style.display='none';
  addMsg(q,'me');
  showTyping();
  let reply;
  try{
    if(window.claude && typeof window.claude.complete === 'function'){
      reply = await window.claude.complete(SYS + '\n\nVisitor: ' + q + '\n\nGenuDo agent:');
      if(!reply || !reply.trim()) reply = fallbackReply(q);
    } else {
      await new Promise(r=>setTimeout(r,750));
      reply = fallbackReply(q);
    }
  }catch(err){
    reply = fallbackReply(q);
  }
  hideTyping();
  addMsg(reply.trim(),'bot');
  chatBusy = false;
}

window.openChat = openChat; window.closeChat = closeChat; window.quick = quick;
window.sendChat = sendChat; window.submitLead = submitLead;

/* ── hero GENU state cycle (accent) ─────────────── */
(function(){
  var hg=document.getElementById('heroGenu'), hl=document.getElementById('heroGenuLabel');
  if(!hg) return;
  var seq=[['base','READY'],['searching','SEARCHING'],['writing','REPLYING'],['scheduler','BOOKING'],['analyst','REPORTING']];
  var rm=window.matchMedia('(prefers-reduced-motion:reduce)').matches;
  seq.forEach(function(s){ var i=new Image(); i.src='/genu/GENU-'+s[0]+'.svg'; });
  var hi=0;
  if(!rm) setInterval(function(){ hi=(hi+1)%seq.length; hg.src='/genu/GENU-'+seq[hi][0]+'.svg'; if(hl) hl.textContent=seq[hi][1]; },2800);
})();

/* ── real-product showcase tabs ─────────────────── */
(function(){
  var tabs=document.getElementById('gscTabs'); if(!tabs) return;
  var img=document.getElementById('gscImg'), url=document.getElementById('gscUrl'),
      genu=document.getElementById('gscGenu'), state=document.getElementById('gscState'), cap=document.getElementById('gscCap');
  var SC=[
    {img:'/shots/pipelines.png',url:'app.genudo.ai/pipelines',genu:'scheduler',state:'MOVING DEALS FORWARD',cap:'Every conversation becomes a deal moving through stages — your agents advance them automatically.'},
    {img:'/shots/dashboard.png',url:'app.genudo.ai/dashboard',genu:'analyst',state:'REPORTING RESULTS',cap:'See outcomes, workload and cost — not just message volume.'},
    {img:'/shots/inbox.png',url:'app.genudo.ai/inboxes',genu:'support',state:'HUMANS IN CONTROL',cap:'Your team watches every chat live and takes over from the AI in one click.'},
    {img:'/shots/settings-persona.png',url:'app.genudo.ai/pipelines · settings',genu:'writing',state:'SHAPING THE AGENT',cap:'Give each employee its persona, language and rules — grounded in your knowledge.'},
    {img:'/shots/settings-model.png',url:'app.genudo.ai/pipelines · settings',genu:'thinking',state:'SMART MODEL ROUTING',cap:'Smart routing picks the cheapest capable model for every message.'}
  ];
  SC.forEach(function(s){ var i=new Image(); i.src=s.img; var g=new Image(); g.src='/genu/GENU-'+s.genu+'.svg'; });
  function set(n){
    var s=SC[n];
    tabs.querySelectorAll('.gsc-tab').forEach(function(b,bi){ b.classList.toggle('active',bi===n); });
    img.src=s.img; url.textContent=s.url; genu.src='/genu/GENU-'+s.genu+'.svg'; state.textContent=s.state; cap.textContent=s.cap;
    var fr=img.closest('.gsc-frame'); fr.classList.remove('gsc-swap'); void fr.offsetWidth; fr.classList.add('gsc-swap');
  }
  tabs.addEventListener('click',function(e){ var b=e.target.closest('[data-sc]'); if(!b) return; set(+b.dataset.sc); });
})();

/* ── workforce handoff sequence ─────────────────── */
(function(){
  var line=document.getElementById('wfLine'); if(!line) return;
  var steps=[].slice.call(line.querySelectorAll('.wf-step'));
  var facts=['Verified contact','WhatsApp opt-in','Booked Thu 2:00','Won · $4.2K'];
  var fe=document.getElementById('wfFacts');
  if(fe){ fe.innerHTML=facts.map(function(f){return '<span class="wf-fact">'+f+'</span>';}).join(''); }
  var factEls=fe?[].slice.call(fe.querySelectorAll('.wf-fact')):[];
  var rm=window.matchMedia('(prefers-reduced-motion:reduce)').matches;
  function setStep(i){ steps.forEach(function(s,si){ s.classList.toggle('active',si===i); }); factEls.forEach(function(f,fi){ f.classList.toggle('show',fi<=i); }); }
  if(rm){ steps.forEach(function(s){s.classList.add('active');}); factEls.forEach(function(f){f.classList.add('show');}); return; }
  var wi=0; setStep(0);
  setInterval(function(){ if(inView(line,0.85)){ wi=(wi+1)%steps.length; setStep(wi); } },2400);
})();
