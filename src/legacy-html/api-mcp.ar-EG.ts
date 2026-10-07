// /api-mcp — value-led rewrite (ar-EG). See docs/website/BUILD-BRIEF.md.
const html = `<div class="pg-api-mcp">
<section class="phero"><div class="container phero-in">
  <div>
    <div class="crumb"><a href="/resources">الموارد</a><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg><span><bdi>API</bdi> و <bdi>MCP</bdi></span></div>
    <h1>شغّل فريق الذكاء الاصطناعي بتاعك ووجّهه من <bdi>Claude</bdi> أو <bdi>ChatGPT</bdi>، بكلامك العادي.</h1>
    <p class="lead">قول اللي عايزه زي ما بتقوله لزميلك: «اعملّي موظف مبيعات جديد» أو «صلّح اللي عارف بيقوله ده». <bdi>جينـو دو</bdi> بيعرض عليك كل تغيير الأول كـ <bdi>diff</bdi>، يعني القديم والجديد جنب بعض، ومفيش حاجة بتتغيّر في حسابك غير لما إنت توافق.</p>
    <div class="heroc-cta"><a href="https://app.genudo.ai/auth/register" class="btn btn-primary btn-lg">ابدأ دلوقتي</a><a href="#setup" class="btn btn-ondark btn-lg">شوف إزاي</a></div>
    <div class="pchips"><span class="pchip"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>بكلامك العادي، من غير شاشات زيادة</span><span class="pchip"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z"/></svg>كل تغيير بتشوفه قبل ما يتنفّذ</span><span class="pchip"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 3 14h7l-1 8 10-12h-7z"/></svg>تفعيله بياخد حوالي 3 دقايق</span></div>
  </div>
  <div class="phero-media pg-mock">
<div class="mk pg-chat" dir="rtl" lang="ar" role="img" aria-label="محادثة مع Claude: طلب تعديل على تعليمات عارف، ويظهر التغيير كـ diff قبل التأكيد">
  <div class="pg-chat-bar"><span class="pg-chat-logo"><i class="mk-ic mk-ic--sparkle"></i></span><b>Claude</b><span class="mk-chip mk-chip--green"><i class="mk-dot mk-dot--live"></i><bdi>genudo</bdi> · متصل</span></div>
  <div class="pg-chat-body">
    <p class="pg-me">عارف بيعرض ميعاد واحد بس. خليه يعرض مواعيد المسا الأول للعملاء القدام.</p>
    <p class="pg-tool"><i class="mk-ic mk-ic--search"></i>قرأ تعليمات عارف الحالية</p>
    <div class="pg-diff">
      <div class="pg-diff-h"><i class="mk-ic mk-ic--note"></i>تغيير مقترح · عارف · التعليمات</div>
      <p class="pg-del">اعرض ميعادًا واحدًا فقط للحجز.</p>
      <p class="pg-add">اعرض المواعيد المسائية أولًا للعملاء السابقين، ثم باقي المواعيد.</p>
    </div>
    <div class="pg-actions"><span class="mk-btn mk-btn--primary"><i class="mk-ic mk-ic--check"></i>تطبيق التغيير</span><span class="mk-btn">إلغاء</span></div>
    <span class="mk-caption">مفيش حاجة بتتغيّر لحد ما تأكّد. بيانات توضيحية.</span>
  </div>
</div>
  </div>
</div></section>

<section class="s white-bg"><div class="container">
  <div class="s-head"><span class="eyebrow">اللي هيتغيّر في شغلك</span><h2>ظبّط موظفينك من المكان اللي إنت شغّال فيه أصلًا.</h2><p class="lead">بدل ما تلف بين شاشات وإعدادات، بتكتب طلبك لـ <bdi>Claude</bdi> أو <bdi>ChatGPT</bdi> وهو بيتصرّف جوه حساب <bdi>جينـو دو</bdi>، وإنت اللي بتقرّر.</p></div>
  <div class="pg-outs"><div class="featc"><div class="oi" style="background:#6468f0"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 3 14h7l-1 8 10-12h-7z"/></svg></div><h4>موظف مبيعات جديد من غير ما تبني حاجة بإيدك</h4><p>بتوصف نشاطك بكلامك، والموظف بيتجهّز قدامك: المراحل والتعليمات والمعلومات اللي بيرد منها.</p></div><div class="featc"><div class="oi" style="background:#6468f0"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 2l4 4-4 4"/><path d="M3 11V9a3 3 0 0 1 3-3h15"/><path d="M7 22l-4-4 4-4"/><path d="M21 13v2a3 3 0 0 1-3 3H3"/></svg></div><h4>موظف خرج عن المطلوب؟ صلّحه بجملة</h4><p>بتحكي المشكلة، فبيراجع المحادثة ويقترح تعديل التعليمات، وإنت اللي توافق أو ترفض.</p></div><div class="featc"><div class="oi" style="background:#6468f0"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="8" height="8" rx="2"/><rect x="13" y="13" width="8" height="8" rx="2"/><path d="M11 7h4a2 2 0 0 1 2 2v4"/></svg></div><h4>العملاء الجاهزين يوصلوا للـ <bdi>CRM</bdi> لوحدهم</h4><p>بيبعت بيانات العميل لـ <bdi>CRM</bdi> أو <bdi>Google Sheets</bdi> أو <bdi>Zapier</bdi> أو <bdi>Make</bdi> أو <bdi>n8n</bdi> في اللحظة المناسبة.</p></div></div>
</div></section>

<section class="s tint-bg"><div class="container">
  <div class="pg-split">
    <div class="pg-copy"><span class="eyebrow">إنت المتحكّم</span><h2>كل تغيير بيظهرلك قبل ما يحصل.</h2><p class="lead">أي كتابة على حسابك، زي تعديل تعليمات أو إضافة معلومة أو ربط بنظام تاني، بتتعرض كـ <bdi>diff</bdi>: السطر القديم والجديد جنب بعض. تراجعه وتوافق، أو تلغي.</p>
      <ul class="plist"><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 7"/></svg>كل تغيير بيتعرض الأول وبيستنى موافقتك</li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 7"/></svg>تسجيل الدخول من المتصفح، من غير ما تعمل توكن</li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 7"/></svg>لو استخدمت توكن، بيكون محدد الصلاحيات وتقدر تلغيه في أي وقت</li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 7"/></svg>التقارير والتشخيص قراءة بس، مش بتغيّر حاجة</li></ul>
    </div>
    <div class="pg-mock"><div class="pg-ph"><div class="mk pg-confirm" dir="rtl" lang="ar" role="img" aria-label="بطاقة تأكيد: تغيير في حساب جينـو دو لا يتم إلا بعد موافقتك">
        <div class="pg-confirm-h"><i class="mk-ic mk-ic--shield"></i><b>مراجعة قبل التنفيذ</b></div>
        <ol class="pg-confirm-steps">
          <li><span class="mk-chip mk-chip--green"><i class="mk-ic mk-ic--search"></i>قراءة</span><span>يقرأ التعليمات الحالية</span></li>
          <li><span class="mk-chip mk-chip--amber"><i class="mk-ic mk-ic--note"></i>مقترح</span><span>يعرض التغيير كـ <bdi>diff</bdi></span></li>
          <li><span class="mk-chip mk-chip--indigo"><i class="mk-ic mk-ic--check"></i>موافقتك</span><span>لا يتغيّر شيء قبلها</span></li>
        </ol>
      </div></div></div>
  </div>
</div></section>

<section class="s white-bg" id="examples"><div class="container">
  <div class="s-head"><span class="eyebrow">أمثلة من الشغل الفعلي</span><h2>4 طلبات، كل واحد بجملة واحدة.</h2><p class="lead">دي الأمثلة اللي بتظهر في صفحة «خادم <bdi>MCP</bdi>» جوه التطبيق.</p></div>
  <div class="pg-ex"><article class="pg-exc"><span class="pg-tag">4 خطوات</span><h4>أطلق موظف مبيعات جديد</h4><p class="pg-say">«عندي عيادة أسنان وعايز موظف مبيعات على <bdi>WhatsApp</bdi>.»</p><p>بيسألك عن نشاطك ويجهّز الموظف قدامك، وإنت بتراجع كل خطوة قبل ما تتأكد.</p></article><article class="pg-exc"><span class="pg-tag">5 خطوات</span><h4>صلّح موظف خرج عن المطلوب</h4><p class="pg-say">«العميل سأل عن الأسعار والموظف الذكي رد غلط.»</p><p>بيراجع المحادثة، يحدد السبب، ويقترح تعديل واضح في التعليمات.</p></article><article class="pg-exc"><span class="pg-tag">5 خطوات</span><h4>سجّل العملاء في الـ <bdi>CRM</bdi></h4><p class="pg-say">«ابعت كل عميل مهتم على <bdi>Google Sheets</bdi>.»</p><p>بيربط البيانات بالمرحلة المناسبة، فالعميل يتسجّل في اللحظة اللي يبقى فيها جاهز.</p></article></div>
</div></section>

<section class="s tint-bg"><div class="container">
  <div class="s-head"><span class="eyebrow">اللي تقدر تعمله</span><h2>ست مجموعات، من البناء لحد التقارير.</h2><p class="lead">كل مجموعة فيها مهارات جاهزة، وعلامة «كتابة» معناها إن التغيير بيستنى موافقتك.</p></div>
  <div class="pg-caps"><div class="pg-cap"><span class="pg-tag is-write">كتابة</span><b>بناء موظف جديد</b><span class="n">5 مهارات</span></div><div class="pg-cap"><span class="pg-tag is-write">كتابة</span><b>تعديل موظف شغّال</b><span class="n">5 مهارات</span></div><div class="pg-cap"><span class="pg-tag is-write">كتابة</span><b>الأتمتة والربط</b><span class="n">4 مهارات</span></div><div class="pg-cap"><span class="pg-tag is-write">قراءة وكتابة</span><b>المعرفة والفرص</b><span class="n">مهارتين</span></div><div class="pg-cap"><span class="pg-tag is-read">قراءة</span><b>التشخيص والتحليل</b><span class="n">4 مهارات</span></div><div class="pg-cap"><span class="pg-tag is-write">كتابة</span><b>نقل موظف قديم لإعداد جديد</b><span class="n">مهارتين</span></div></div>
  <p class="pg-agents">وكمان <bdi>6</bdi> وكلاء بيشتغلوا لوحدهم في <bdi>Cowork</bdi> و <bdi>Claude Code</bdi>: مصمّم المسارات، ومشخّص المسارات، ومهندس الأتمتة، ومحلل الإيرادات، وأمين المعرفة، وناقل المسارات.</p>
</div></section>

<section class="s white-bg" id="setup"><div class="container">
  <div class="s-head"><span class="eyebrow">التفعيل</span><h2>جاهز في حوالي 3 دقايق.</h2><p class="lead">التفعيل بيتم من صفحة «خادم <bdi>MCP</bdi>» في التطبيق، وفيها فيديو شرح بالعربي.</p></div>
  <div class="flow"><div class="fstep"><div class="n">01</div><h4>أضف الـ <bdi>marketplace</bdi></h4><p>في <bdi>Claude</bdi> افتح <bdi>Settings &gt; Plugins</bdi> وأضف <bdi>genudo-ai/claude-plugin</bdi>.</p></div><div class="fstep"><div class="n">02</div><h4>ثبّت الإضافة</h4><p>ثبّت <bdi>Genudo - AI Workforce</bdi> من القايمة.</p></div><div class="fstep"><div class="n">03</div><h4>فعّل الـ <bdi>connector</bdi></h4><p>من <bdi>Connectors</bdi> اختار <bdi>genudo</bdi> واضغط <bdi>Install</bdi>.</p></div><div class="fstep"><div class="n">04</div><h4>وافق على الدخول</h4><p>سجّل دخولك من المتصفح وابدأ تكلّم. مفيش توكن تعمله.</p></div></div>
  <p class="pg-note">على <bdi>ChatGPT</bdi> الخطوات شبه كده، من <bdi>Plugins</bdi> وأضف <bdi>genudo-ai/chatgpt-plugin</bdi>. على <bdi>Claude</bdi> الإضافة فيها <bdi>29</bdi> أداة و<bdi>22</bdi> مهارة و<bdi>6</bdi> وكلاء، وعلى <bdi>ChatGPT</bdi> <bdi>29</bdi> أداة و<bdi>28</bdi> مهارة.</p>
  <div class="pg-shot"><img src="/media/shots/mcp-claude-plugin.jpg" alt="صفحة إضافة Genudo - AI Workforce داخل Claude" width="1600" height="1075" loading="lazy"></div>
</div></section>

<section class="s tint-bg" id="developers"><div class="container">
  <div class="pg-split">
    <div class="pg-copy"><span class="eyebrow">للمطوّرين</span><h2>عايز تربط من غير الإضافة؟ ده الـ <bdi>endpoint</bdi>.</h2><p class="lead">لو بتستخدم <bdi>Claude Code</bdi> أو <bdi>Codex</bdi> أو أي عميل <bdi>MCP</bdi> تاني، وصّله بالـ <bdi>MCP</bdi> مباشرة. هتلاقي الأدوات من غير المهارات والوكلاء الجاهزين.</p>
      <ul class="plist"><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 7"/></svg><bdi>MCP</bdi> بتسجيل دخول من المتصفح أو بتوكن فيه صلاحية <bdi>mcp:use</bdi></li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 7"/></svg><bdi>REST API</bdi> بتوكن محدد الصلاحيات، والرد <bdi>JSON</bdi></li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 7"/></svg>الإجراءات على كل مرحلة بتبعت بيانات لأي رابط في اللحظة المناسبة</li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 7"/></svg>التوثيق الكامل على <bdi>api.genudo.ai/docs</bdi></li></ul>
      <div class="pg-links"><a href="https://api.genudo.ai/docs" target="_blank" rel="noopener noreferrer" class="btn btn-primary">اقرا التوثيق</a></div>
    </div>
    <div>
      <div class="pg-code" dir="ltr"><pre><span class="c"># MCP server URL</span>
<span class="s">https://api.genudo.ai/mcp</span>

<span class="c"># Claude Code</span>
claude mcp add --transport http genudo \\
  <span class="s">https://api.genudo.ai/mcp</span>

<span class="c"># REST API: scoped bearer token</span>
curl <span class="k">https://api.genudo.ai/v1/opportunities</span> \\
  -H <span class="s">"Authorization: Bearer $GENUDO_TOKEN"</span></pre></div>
      <p class="pg-note">صلاحيات التوكن (بتختار اللي محتاجه بس):</p>
      <div class="pg-scopes"><code>opportunities:read</code><code>opportunities:write</code><code>conversations:write</code><code>messages:send</code><code>knowledge:read</code><code>knowledge:write</code><code>mcp:use</code></div>
      <p class="pg-note">التوكن بيظهر مرة واحدة بس عند إنشائه، وبعدها بنحتفظ بس بنسخة <bdi>hash</bdi> منه، مش التوكن نفسه. مدته 30 يوم أو 90 يوم (الافتراضي) أو سنة أو من غير انتهاء، وتقدر تلغيه في أي وقت.</p>
    </div>
  </div>
</div></section>

<section class="s white-bg"><div class="container">
  <div class="s-head"><span class="eyebrow">كمّل من هنا</span><h2>لسه في حاجة؟</h2></div>
  <div class="xnav" style="margin-top:24px">
  <a class="xcard" href="https://api.genudo.ai/docs" target="_blank" rel="noopener noreferrer"><span class="xi" style="background:#8b5cf6"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m8 6-6 6 6 6"/><path d="m16 6 6 6-6 6"/></svg></span><span><b>التوثيق</b><span>الـ <bdi>endpoints</bdi> والردود والأخطاء</span></span><span class="go"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span></a>
  <a class="xcard" href="/integrations"><span class="xi" style="background:#14b8a6"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="8" height="8" rx="2"/><rect x="13" y="13" width="8" height="8" rx="2"/><path d="M11 7h4a2 2 0 0 1 2 2v4"/></svg></span><span><b>التكاملات</b><span>ربط جاهز مع الأنظمة اللي بتستخدمها</span></span><span class="go"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span></a>
  <a class="xcard" href="/security"><span class="xi" style="background:#22c55e"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z"/></svg></span><span><b>الأمان</b><span>إزاي بنحمي بياناتك</span></span><span class="go"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span></a>
  </div>
</div></section>

<section class="s ctaf"><div class="container"><div class="ctaf-card">
  <div class="ctaf-genu genu" data-genu data-expr="happy" data-action="code" data-liven style="--w:86px;--h:98px;--ospeed:7s"></div>
  <div class="eyebrow ctaf-eyebrow">ابدأ</div>
  <h2 style="margin-top:12px;">خلّي <bdi>Claude</bdi> أو <bdi>ChatGPT</bdi> يشتغل مع فريقك.</h2>
  <p class="lead">فعّل الإضافة وابدأ بجملة واحدة.</p>
  <div class="ctaf-cta"><a href="https://app.genudo.ai/auth/register" class="btn btn-primary btn-lg">ابدأ دلوقتي</a><a href="/contact" class="ctaf-sec">أو كلّمنا <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a></div>
</div></div></section>
</div>`;
export default html;
