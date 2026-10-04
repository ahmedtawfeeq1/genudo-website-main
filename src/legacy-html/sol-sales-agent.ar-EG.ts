// /sol-sales-agent — value-led rewrite (ar-EG). See docs/website/BUILD-BRIEF.md.
const html = `<div class="pg-sol-sales-agent">
<section class="phero"><div class="container phero-in">
  <div>
    <div class="crumb"><a href="/use-cases">الحلول</a><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg><span>عارف · المبيعات</span></div>
    <div class="pg-who"><img src="/media/img/aaref.svg" alt="عارف، موظف المبيعات بالذكاء الاصطناعي" width="72" height="72"><span><b>عارف</b><small>موظف المبيعات بالذكاء الاصطناعي</small></span></div>
    <h1>كل استفسار ليه رد فوري، وكل عميل سكت فيه حد بيتابعه.</h1>
    <p class="lead">عارف هو موظف المبيعات من جينـو دو. بيرد على عملائك على <bdi>WhatsApp</bdi> و <bdi>Instagram</bdi> و <bdi>Messenger</bdi> وشات الموقع، بيسأل الأسئلة الصح، بيتابع اللي سكتوا، بيساعدك تحجز الميعاد، وبيحدّث الـ <bdi>CRM</bdi> بتاعك.</p>
    <div class="heroc-cta"><a href="https://app.genudo.ai/auth/register" class="btn btn-primary btn-lg">ابدأ دلوقتي</a><a href="/contact" class="btn btn-ondark btn-lg">احجز ديمو</a></div>
    <div class="pchips"><span class="pchip"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 3 14h7l-1 8 10-12h-7z"/></svg>رد فوري بالليل والنهار</span><span class="pchip"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 2l4 4-4 4"/><path d="M3 11V9a3 3 0 0 1 3-3h15"/><path d="M7 22l-4-4 4-4"/><path d="M21 13v2a3 3 0 0 1-3 3H3"/></svg>متابعة مش بتنسى</span><span class="pchip"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 11h18"/></svg>مواعيد على الكالندر</span><span class="pchip"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 7"/></svg><bdi>CRM</bdi> متحدّث</span></div>
  </div>
  <div class="phero-media pg-mock">
<div class="mk mk-phone" dir="rtl" lang="ar" role="img" aria-label="محادثة WhatsApp يرد عليها عارف">
  <div class="mk-phone__screen">
    <div class="mk-phone__status"><span>9:59</span></div>
    <div class="mk-phone__head"><i class="mk-ic mk-ic--back"></i><span class="mk-avatar mk-avatar--green">م</span><div class="mk-phone__who"><b>منى عادل</b><span><i class="mk-ic mk-ic--whatsapp"></i><bdi>WhatsApp · +20 100 000 0000</bdi></span></div></div>
    <div class="mk-takeover"><span class="mk-takeover__state"><i class="mk-ic mk-ic--sparkle"></i>الوكيل يتولّى هذه المحادثة</span><span class="mk-takeover__btn"><i class="mk-ic mk-ic--pause"></i>تدخّل بشري</span></div>
    <div class="mk-chat">
      <span class="mk-chat__day">اليوم</span>
      <div class="mk-msg mk-msg--in">أهلًا! عندكم ميعاد بكرة بالليل؟<span class="mk-msg__meta"><bdi>9:58</bdi> م</span></div>
      <div class="mk-msg mk-msg--in mk-voice">
        <div class="mk-voice__row"><span class="mk-voice__play"><i class="mk-ic mk-ic--play"></i></span><span class="mk-voice__wave"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></span><span class="mk-voice__len">0:06</span></div>
        <div class="mk-voice__text"><b><i class="mk-ic mk-ic--mic"></i>تم تفريغ الرسالة الصوتية</b>وهو أول كشف ببلاش؟</div>
        <span class="mk-msg__meta"><bdi>9:58</bdi> م</span>
      </div>
      <div class="mk-msg mk-msg--out"><span class="mk-msg__by"><i class="mk-ic mk-ic--sparkle"></i>عارف · الوكيل</span>أيوه، أول استشارة مجانية. بكرة عندي <bdi>6:30</bdi> أو <bdi>7:15</bdi> بالليل، أنهي ميعاد يناسبك؟<span class="mk-msg__meta"><bdi>9:58</bdi> م <i class="mk-ic mk-ic--checks"></i></span></div>
      <div class="mk-msg mk-msg--in"><bdi>6:30</bdi> لو سمحت<span class="mk-msg__meta"><bdi>9:59</bdi> م</span></div>
      <div class="mk-meeting">
        <div class="mk-meeting__top"><span class="mk-meeting__ic"><i class="mk-ic mk-ic--calendar"></i></span><div><div class="mk-meeting__title">تم تأكيد الموعد</div><div class="mk-meeting__when">الثلاثاء · <bdi>6:30</bdi> م · عيادة برايت سمايل</div></div></div>
        <div class="mk-meeting__rows"><span><i class="mk-ic mk-ic--check"></i>أُضيف إلى <bdi>Google Calendar</bdi></span><span><i class="mk-ic mk-ic--check"></i>استشارة مجانية</span></div>
      </div>
      <div class="mk-typing mk-typing--in"><i></i><i></i><i></i></div>
    </div>
    <div class="mk-phone__compose">الوكيل يتولّى هذه المحادثة. اختر «تدخّل بشري» للرد بنفسك.</div>
  </div>
</div>
  </div>
</div></section>

<section class="s white-bg"><div class="container">
  <div class="s-head"><span class="eyebrow">اللي هيتغيّر في شغلك</span><h2>مين بيرد على عملائك الساعة اتنين بالليل؟</h2><p class="lead">البيعة عادةً مش بتضيع علشان المنتج وحش. بتضيع علشان حد اتأخر في الرد أو نسي يتابع. عارف بيقفل الفجوتين دول.</p></div>
  <div class="pg-outs"><div class="featc"><div class="oi" style="background:#6468f0"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 3 14h7l-1 8 10-12h-7z"/></svg></div><h4>مفيش رسالة بتستنى للصبح</h4><p>عارف بيرد فورًا على كل قنواتك، فالعميل اللي سأل الساعة اتنين بالليل بيلاقي إجابة قبل ما يروح لمنافس.</p></div><div class="featc"><div class="oi" style="background:#6468f0"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 7"/></svg></div><h4>تعرف كل عميل عايز إيه</h4><p>بيسأل عن اللي يهمّك، زي الخدمة المطلوبة والميعاد المناسب، في كلام عادي جوه المحادثة، وبيسجّل الإجابات في بيانات العميل.</p></div><div class="featc"><div class="oi" style="background:#6468f0"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 2l4 4-4 4"/><path d="M3 11V9a3 3 0 0 1 3-3h15"/><path d="M7 22l-4-4 4-4"/><path d="M21 13v2a3 3 0 0 1-3 3H3"/></svg></div><h4>المتابعة مش بتنسى</h4><p>لكل مرحلة سلسلة متابعات. اللي سكت بيوصله تذكير في الوقت المناسب، ولو السلسلة خلصت من غير رد الفرصة بتتنقل لـ«ضائعة».</p></div><div class="featc"><div class="oi" style="background:#6468f0"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 11h18"/></svg></div><h4>ميعاد متحجز و <bdi>CRM</bdi> متحدّث</h4><p>بيشوف المواعيد الفاضية، بيساعد العميل يحجز، وبيحدّث الـ <bdi>CRM</bdi> أول ما العميل يبقى جاهز، من غير ما فريقك يكتب سطر.</p></div></div>
</div></section>

<section class="s tint-bg"><div class="container">
  <div class="pg-split">
    <div class="pg-copy"><span class="eyebrow">قابل عارف</span><h2>موظف مبيعات مش بينام، ومش بينسى حد.</h2><p class="lead">عارف واحد من موظفين جينـو دو بالذكاء الاصطناعي. إنت بتعرّفه على نشاطك وخدماتك وإزاي بتحب تكلّم عملاءك، وهو بيشتغل على قنواتك زي أي موظف مبيعات في الفريق.</p>
      <ul class="plist"><li><span class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 7"/></svg></span>بيرد من معلوماتك إنت: الأسعار والمواعيد والسياسات</li><li><span class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 7"/></svg></span>بيتكلم بلهجة عملائك، ويفهم الفويس نوت والصور</li><li><span class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 7"/></svg></span>بيسلّمك المحادثة لما العميل يحتاج إنسان</li></ul>
      <p class="pg-note">«موظف» عندنا يعني مسار واحد. تقدر تشغّل أكتر من موظف مع بعض: عارف للمبيعات، وعدنان لخدمة العملاء، وروز لمراقبة الجودة.</p>
    </div>
    <div class="pg-mock">
<div class="mk mk-emp mk-emp--aaref" dir="rtl" lang="ar">
  <img class="mk-emp__img" src="/media/img/aaref.svg" alt="" width="80" height="87">
  <div class="mk-emp__name">عارف</div>
  <span class="mk-emp__role">المبيعات</span>
  <ul class="mk-emp__list">
    <li><i class="mk-ic mk-ic--check"></i>بيرد على كل استفسار، بالليل وبالنهار</li>
    <li><i class="mk-ic mk-ic--check"></i>بيفرز العملاء المهتمين وبيتابع اللي سكت</li>
    <li><i class="mk-ic mk-ic--check"></i>بيساعد يحجز المواعيد على الكالندر بتاعك</li>
  </ul>
</div>
    </div>
  </div>
  <div class="pg-vid"><video src="/media/video/ai-workforce-ar.mp4" poster="/media/video/ai-workforce-ar.jpg" controls playsinline preload="none" aria-label="فيلم موظفي جينـو دو بالذكاء الاصطناعي"></video></div>
</div></section>

<section class="s white-bg" id="how"><div class="container">
  <div class="s-head"><span class="eyebrow">إزاي بيشتغل</span><h2>من أول رسالة لحد الميعاد المتحجز.</h2></div>
  <div class="flow"><div class="fstep"><div class="n">01</div><h4>عميل جديد بيسأل</h4><p>من <bdi>WhatsApp</bdi> أو <bdi>Instagram</bdi> أو <bdi>Messenger</bdi> أو شات الموقع. عارف بيرد في ثواني، في أي ساعة.</p></div><div class="fstep"><div class="n">02</div><h4>بيأهّل العميل</h4><p>بيسأل أسئلتك ويجاوب من قاعدة معرفتك، وبيحفظ اللي العميل قاله.</p></div><div class="fstep"><div class="n">03</div><h4>بيحرّك الفرصة</h4><p>أول ما العميل يبقى مهتم أو جاهز، الفرصة بتتنقل للمرحلة اللي بعدها لوحدها.</p></div><div class="fstep"><div class="n">04</div><h4>بيحجز ويحدّث</h4><p>بيشوف المواعيد الفاضية، بيساعد في الحجز، وبيحدّث الـ <bdi>CRM</bdi> بتاعك.</p></div></div>
</div></section>

<section class="s tint-bg" id="followups"><div class="container">
  <div class="pg-split pg-flip">
    <div class="pg-copy"><span class="eyebrow">المتابعة</span><h2>العميل اللي سكت مش لازم يضيع.</h2><p class="lead">فرص كتير بتضيع في الصمت: العميل سأل، اتشغل، ونسي. عارف بيتابع بالتوقيت اللي إنت حدّدته، بالرسالة اللي إنت اخترتها، وبيبطّل لما العميل يرد.</p>
      <ul class="plist"><li><span class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 7"/></svg></span>متابعات مجدولة لكل مرحلة، وإنت اللي بتحدد الوقت والصياغة</li><li><span class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 7"/></svg></span>ممكن تضيف فيديو أو ملف مع المتابعة</li><li><span class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 7"/></svg></span>لو السلسلة خلصت من غير رد، الفرصة بتتنقل لـ«ضائعة»</li></ul>
      <a href="/how-it-works#followups" class="btn btn-ghost">شوف المتابعات بالتفصيل ←</a>
    </div>
    <div class="pg-mock">
<div class="mk mk-card" dir="rtl" lang="ar" role="img" aria-label="تسلسل المتابعات لعميل لم يرد">
  <div class="mk-card__head"><div class="mk-card__title"><i class="mk-ic mk-ic--repeat"></i>المتابعات · مهتم</div><span class="mk-chip mk-chip--green"><i class="mk-dot"></i>نشطة</span></div>
  <ol class="mk-timeline">
    <li class="mk-step is-sent"><div class="mk-step__head"><b>المتابعة 1</b><span class="mk-step__wait">بعد 3 ساعات</span><span class="mk-status mk-status--sent">مُرسلة</span></div><p class="mk-step__msg">أهلًا يا منى، لسه بتفكري في التبييض؟ بعتالك فيديو قصير بيشرح الخطوات.</p></li>
    <li class="mk-step is-scheduled"><div class="mk-step__head"><b>المتابعة 2</b><span class="mk-step__wait">بعد يوم واحد</span><span class="mk-status mk-status--scheduled">مجدولة</span></div><p class="mk-step__msg">تحبي أحجزلك يوم الثلاثاء الساعة <bdi>6:30</bdi>؟</p></li>
    <li class="mk-step mk-step--end"><div class="mk-step__head"><i class="mk-ic mk-ic--arrow"></i>لا يوجد رد بعد انتهاء المتابعات: نقل الفرصة إلى <span class="mk-stage mk-stage--red mk-stage--sm">ضائعة</span></div></li>
  </ol>
</div>
    </div>
  </div>
</div></section>

<section class="s white-bg"><div class="container">
  <div class="s-head"><span class="eyebrow">المبيعات تحت عينك</span><h2>كل فرصة في مكانها، وفريقك عارف يعمل إيه.</h2><p class="lead">عارف مش بس بيرد، ده بيحرّك الفرصة من مرحلة للتانية، فتشوف على اللوحة مين جديد، ومين مهتم، ومين حجز.</p></div>
  <div class="pg-board">
<div class="mk mk-board" dir="rtl" lang="ar" role="img" aria-label="لوحة مسار المبيعات بأربع مراحل">
  <div class="mk-board__cols">
    <div class="mk-col">
      <div class="mk-col__head"><span class="mk-stage">عميل محتمل جديد</span><span class="mk-col__count">فرصتان</span></div>
      <div class="mk-opp mk-opp--new">
        <div class="mk-opp__top"><span class="mk-avatar mk-avatar--sm mk-avatar--green">م</span><div class="mk-opp__who"><b>منى عادل</b><span class="mk-opp__ch"><i class="mk-ic mk-ic--whatsapp"></i>WhatsApp</span></div><span class="mk-opp__time">الآن</span></div>
        <p class="mk-opp__msg">أهلًا، التبييض بكام؟</p>
      </div>
      <div class="mk-opp">
        <div class="mk-opp__top"><span class="mk-avatar mk-avatar--sm mk-avatar--blue">ع</span><div class="mk-opp__who"><b>عمر حسن</b><span class="mk-opp__ch"><i class="mk-ic mk-ic--insta"></i>Instagram</span></div><span class="mk-opp__time"><bdi>2:14</bdi> ص</span></div>
        <p class="mk-opp__msg">إنتو شغالين يوم الجمعة؟</p>
      </div>
    </div>
    <div class="mk-col">
      <div class="mk-col__head"><span class="mk-stage mk-stage--indigo">مهتم</span><span class="mk-col__count">فرصة واحدة</span></div>
      <div class="mk-opp">
        <div class="mk-opp__top"><span class="mk-avatar mk-avatar--sm mk-avatar--amber">ك</span><div class="mk-opp__who"><b>كريم سعيد</b><span class="mk-opp__ch"><i class="mk-ic mk-ic--whatsapp"></i>WhatsApp</span></div><span class="mk-opp__time">منذ ساعة</span></div>
        <p class="mk-opp__msg">ممكن تبعتلي قايمة الأسعار؟</p>
        <div class="mk-opp__tags"><span class="mk-chip mk-chip--amber"><i class="mk-ic mk-ic--repeat"></i>المتابعة 1 · مُرسلة</span></div>
      </div>
    </div>
    <div class="mk-col">
      <div class="mk-col__head"><span class="mk-stage mk-stage--violet">حجز موعد</span><span class="mk-col__count">فرصة واحدة</span></div>
      <div class="mk-opp">
        <div class="mk-opp__top"><span class="mk-avatar mk-avatar--sm mk-avatar--pink">س</span><div class="mk-opp__who"><b>سارة كمال</b><span class="mk-opp__ch"><i class="mk-ic mk-ic--globe"></i>الموقع</span></div><span class="mk-opp__time">منذ 5 دقائق</span></div>
        <p class="mk-opp__msg">الخميس بعد 6 يناسبني.</p>
        <div class="mk-opp__tags"><span class="mk-chip mk-chip--indigo"><i class="mk-ic mk-ic--calendar"></i>الخميس <bdi>6:30</bdi> م</span></div>
      </div>
    </div>
    <div class="mk-col">
      <div class="mk-col__head"><span class="mk-stage mk-stage--green">مكتسبة</span><span class="mk-col__count">فرصة واحدة</span></div>
      <div class="mk-opp">
        <div class="mk-opp__top"><span class="mk-avatar mk-avatar--sm mk-avatar--violet">ن</span><div class="mk-opp__who"><b>نور إيهاب</b><span class="mk-opp__ch"><i class="mk-ic mk-ic--whatsapp"></i>WhatsApp</span></div><span class="mk-opp__time">الاثنين</span></div>
        <p class="mk-opp__msg">نشوفكم يوم الاتنين!</p>
        <div class="mk-opp__tags"><span class="mk-chip mk-chip--green"><i class="mk-ic mk-ic--check"></i>تم حجز الموعد</span></div>
      </div>
    </div>
  </div>
</div>
  </div>
  <div class="pg-links"><a href="/how-it-works#pipelines" class="btn btn-ghost">شوف المسارات ←</a><a href="/integrations" class="btn btn-ghost">الربط مع الـ <bdi>CRM</bdi> والأدوات</a></div>
</div></section>

<section class="s tint-bg"><div class="container">
  <div class="pg-split">
    <div class="pg-copy"><span class="eyebrow">إجابات من معلوماتك</span><h2>عارف بيرد من معلوماتك إنت، مش من عنده.</h2><p class="lead">ضيف أسعارك ومواعيدك وسياساتك في قاعدة المعرفة، وعارف بيجاوب منها. ولو السؤال محتاج حد من فريقك، بيسلّمه المحادثة بدل ما يرتجل.</p>
      <ul class="plist"><li><span class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 7"/></svg></span>تعدّل الإجابة مرة واحدة، فتتغيّر في كل المحادثات</li><li><span class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 7"/></svg></span>الأسعار والعروض تفضل بتاعتك إنت</li></ul>
      <a href="/how-it-works#knowledge" class="btn btn-ghost">إزاي بتبني قاعدة المعرفة ←</a>
    </div>
    <div class="pg-mock">
<div class="mk mk-card mk-kb" dir="rtl" lang="ar" role="img" aria-label="إجابات العيادة التي يرد منها الوكيل">
  <div class="mk-card__head"><div class="mk-card__title"><i class="mk-ic mk-ic--book"></i>الأسئلة الشائعة للعيادة</div><span class="mk-chip mk-chip--indigo"><i class="mk-ic mk-ic--table"></i>قاعدة المعرفة · 4 إدخالات</span></div>
  <table class="mk-table">
    <thead><tr><th>السؤال</th><th>الإجابة</th><th class="mk-hide-sm">آخر تحديث</th></tr></thead>
    <tbody>
      <tr><td>ما مواعيد العمل؟</td><td>من السبت إلى الخميس، من <bdi>10</bdi> صباحًا حتى <bdi>10</bdi> مساءً</td><td class="mk-hide-sm">1 يناير 2029</td></tr>
      <tr><td>هل الزيارة الأولى مجانية؟</td><td>نعم، الاستشارة الأولى مجانية</td><td class="mk-hide-sm">1 يناير 2029</td></tr>
      <tr><td>أين يمكنني ركن السيارة؟</td><td>يوجد موقف مجاني خلف المبنى</td><td class="mk-hide-sm">3 يناير 2029</td></tr>
      <tr><td>هل يمكن تغيير الموعد؟</td><td>نعم، قبل الموعد بـ <bdi>24</bdi> ساعة على الأقل</td><td class="mk-hide-sm">5 يناير 2029</td></tr>
    </tbody>
  </table>
  <div class="mk-kb__ask"><i class="mk-ic mk-ic--sparkle"></i><span>رد الوكيل من هذا الجدول: «أيوه، أول استشارة مجانية.»</span></div>
</div>
    </div>
  </div>
</div></section>

<section class="s white-bg"><div class="container">
  <div class="pg-split pg-flip">
    <div class="pg-copy"><span class="eyebrow">إنت اللي ماسك الدفة</span><h2>تدخّل في أي محادثة بضغطة من موبايلك.</h2><p class="lead">لو عميل مهم أو موقف حساس، اضغط «تدخّل بشري» وكمّل إنت. وأول ما تخلص، رجّع المحادثة لعارف.</p>
      <ul class="plist"><li><span class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 7"/></svg></span>كل المحادثات في صندوق وارد واحد</li><li><span class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 7"/></svg></span>تقدر توقّف الوكيل أو تشغّله لكل محادثة لوحدها</li><li><span class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 7"/></svg></span>ملاحظات خاصة بين فريقك، العميل مش بيشوفها</li></ul>
    </div>
    <div class="pg-mock">
<div class="mk mk-phone" dir="rtl" lang="ar" role="img" aria-label="تولّيت المحادثة من موبايلك">
  <div class="mk-phone__screen">
    <div class="mk-phone__status"><span>6:03</span></div>
    <div class="mk-phone__head"><i class="mk-ic mk-ic--back"></i><span class="mk-avatar mk-avatar--amber">ك</span><div class="mk-phone__who"><b>كريم سعيد</b><span><i class="mk-ic mk-ic--whatsapp"></i><bdi>WhatsApp · +20 100 000 0000</bdi></span></div></div>
    <div class="mk-takeover mk-takeover--human"><span class="mk-takeover__state"><i class="mk-ic mk-ic--user"></i>أنت تتولّى هذه المحادثة</span><span class="mk-takeover__btn"><i class="mk-ic mk-ic--sparkle"></i>إعادة إلى الوكيل</span></div>
    <div class="mk-chat">
      <div class="mk-msg mk-msg--in">ينفع أجيب أخويا معايا في نفس الميعاد؟<span class="mk-msg__meta"><bdi>6:02</bdi> م</span></div>
      <div class="mk-msg mk-msg--out">أكيد يا كريم! حجزتله ميعاد بعدك على طول.<span class="mk-msg__meta"><bdi>6:03</bdi> م <i class="mk-ic mk-ic--checks"></i></span></div>
    </div>
    <div class="mk-phone__compose mk-phone__compose--input"><span>اكتب رسالة…</span><span class="mk-phone__send"><i class="mk-ic mk-ic--send"></i></span></div>
  </div>
</div>
    </div>
  </div>
</div></section>

<section class="s tint-bg"><div class="container">
  <div class="s-head center"><span class="eyebrow">أسئلة شائعة</span><h2>حاجات مهم تعرفها</h2></div>
  <div class="faq"><details class="faq-item"><summary>هيبان للعملاء إنه روبوت؟<span class="pm"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></span></summary><p>إنت بتظبط شخصيته ونبرته ولهجته. عارف بيتكلم عربي بلهجة عملائك، أو بيتأقلم تلقائيًا مع لهجة العميل، وبيرد من قاعدة معرفتك مش من كلام عام.</p></details><details class="faq-item"><summary>أقدر أتدخّل في نص المحادثة؟<span class="pm"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></span></summary><p>أيوه، في أي وقت. بتضغط «تدخّل بشري» من صندوق الوارد أو من الموبايل، وتكمّل إنت، وبعدين ترجّعها لعارف.</p></details><details class="faq-item"><summary>إزاي بيعرف إن العميل جاهز؟<span class="pm"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></span></summary><p>إنت بتحدّد الأسئلة اللي تهمك ومراحل البيع. عارف بيسأل في المحادثة، وبيحرّك الفرصة للمرحلة اللي بعدها لما الإجابات تحقق شروطك.</p></details><details class="faq-item"><summary>بيشتغل على أنهي قنوات وأدوات؟<span class="pm"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></span></summary><p><bdi>WhatsApp</bdi> و <bdi>Instagram</bdi> و <bdi>Messenger</bdi> وشات الموقع. وبيتربط بالكالندر والـ <bdi>CRM</bdi> بتاعك، وتلاقي التفاصيل في <a href="/integrations">صفحة التكاملات</a>.</p></details><details class="faq-item"><summary>بكام؟<span class="pm"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></span></summary><p>الأسعار والباقات كلها في <a href="/pricing">صفحة الأسعار</a>.</p></details></div>
</div></section>

<section class="s white-bg"><div class="container">
  <div class="s-head"><span class="eyebrow">باقي الفريق</span><h2>عارف بيبيع، وباقي الفريق في ضهره.</h2></div>
  <div class="xnav"><a class="xcard" href="/sol-customer-service"><span class="xi" style="background:#52a7cc"><img src="/media/img/adnan.svg" alt="" width="28" height="28"></span><span><b>عدنان · خدمة العملاء</b><span>بيرد من معلوماتك ويحوّل المشاكل للشخص المناسب</span></span><span class="go"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span></a><a class="xcard" href="/sol-operations"><span class="xi" style="background:#e86fa6"><img src="/media/img/roz.svg" alt="" width="28" height="28"></span><span><b>روز · مراقبة الجودة</b><span>بتراجع محادثات فريقك وتنبّهك للفرص الضايعة</span></span><span class="go"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span></a><a class="xcard" href="/use-cases"><span class="xi" style="background:#8b5cf6"><img src="/media/img/genu.svg" alt="" width="28" height="28"></span><span><b>شوف حسب نشاطك</b><span>حالات استخدام لكل مجال</span></span><span class="go"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span></a></div>
</div></section>

<section class="s ctaf"><div class="container"><div class="ctaf-card">
  <div class="ctaf-genu genu" data-genu data-expr="happy" data-liven style="--w:86px;--h:98px;--ospeed:7s"></div>
  <div class="eyebrow ctaf-eyebrow">ابدأ</div>
  <h2 style="margin-top:12px;">خلّي عارف يرد على عملائك بالليل والنهار.</h2>
  <p class="lead">قولنا عن نشاطك، وهنظبط معاك عارف على قنواتك.</p>
  <div class="ctaf-cta"><a href="https://app.genudo.ai/auth/register" class="btn btn-primary btn-lg">ابدأ دلوقتي</a><a href="/contact" class="ctaf-sec">أو كلّمنا <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a></div>
</div></div></section>
</div>`;
export default html;
