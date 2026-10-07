// /who-is-genu — value-led rewrite (ar-EG, primary). See docs/website/BUILD-BRIEF.md.
// Narration lines live in the markup (data-lines on the hero GENU, data-say on each beat),
// so /js/who-is-genu.js narrates in whichever language the page renders.
const html = `<div class="pg-who-is-genu is-ar">

<!-- ============ HERO ============ -->
<section class="wg-hero" id="hi">
  <div class="container wg-hero-in">
    <div class="wg-hero-copy">
      <span class="eyebrow">مين جينـو؟</span>
      <h1>أهلًا، أنا <em>جينـو</em>.<br>وجاي أعرّفك على فريق شغلك الجديد.</h1>
      <p class="lead">أنا الدليل بتاعك في جينـو دو. معايا هتعيّن موظفين بالذكاء الاصطناعي: عارف للمبيعات، وعدنان لخدمة العملاء، وروز لمراقبة الجودة. بيردّوا على عملائك على <bdi>WhatsApp</bdi> و <bdi>Instagram</bdi> وشات موقعك، بالليل والنهار، وإنت ماسك الدفة.</p>
      <div class="wg-cta">
        <a href="/contact" class="btn btn-primary btn-lg">احجز ديمو</a>
        <a href="#film" class="btn btn-ondark btn-lg"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m8 5 11 7-11 7z"/></svg>اتفرّج على الفيلم</a>
      </div>
      <div class="wg-chans" aria-label="القنوات">
        <span><bdi>WhatsApp</bdi></span><span><bdi>Instagram</bdi> و <bdi>Messenger</bdi></span><span>شات الموقع</span>
      </div>
    </div>

    <div class="wg-stage">
      <p class="wg-bubble" data-wg-hero-bubble aria-live="polite">أهلًا! دوس عليّا وأنا أحكيلك.</p>
      <button type="button" class="wg-genu" data-wg-genu aria-label="دوس على جينـو علشان يكمّل كلامه"
        data-lines="أنا مش موظف… أنا اللي بعرّفك على الموظفين.|كل واحد في عيلتي ليه لون وليه شغلانة.|بتعيّنهم زي ما بتعيّن أي حد في فريقك.|وإنت دايمًا ماسك الدفة: تستلم أي محادثة بضغطة.|عايز تشوفهم شغّالين؟ انزل تحت شوية.">
        <img src="/media/img/genu.svg" alt="جينـو، الروبوت الدليل بتاع جينـو دو" width="216" height="236">
      </button>
      <span class="wg-hint">دوس على جينـو</span>
      <ul class="wg-crew" aria-label="عيلة جينـو">
        <li><img src="/media/img/aaref.svg" alt="" width="56" height="61"><span>عارف</span></li>
        <li><img src="/media/img/adnan.svg" alt="" width="56" height="61"><span>عدنان</span></li>
        <li><img src="/media/img/roz-v2.svg" alt="" width="56" height="61"><span>روز</span></li>
      </ul>
    </div>
  </div>
</section>

<!-- ============ THE QUESTION ============ -->
<section class="wg-sec wg-question" id="question">
  <div class="container">
    <div class="wg-head wg-rv">
      <span class="eyebrow">سؤال سريع</span>
      <h2>مين بيرد على عملائك الساعة اتنين بالليل؟</h2>
      <p class="lead">عملائك بيكلّموك على <bdi>WhatsApp</bdi> و <bdi>Instagram</bdi> و <bdi>Messenger</bdi> وموقعك، في أي وقت. وأي عميل بيستنى، بيروح لغيرك.</p>
    </div>
    <div class="wg-cards">
      <article class="wg-card wg-rv">
        <span class="wg-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z"/></svg></span>
        <h3>بالليل محدش بيرد</h3>
        <p>الرسالة اللي بتيجي بعد مواعيد الشغل بتفضل مستنية لحد الصبح، ووقتها العميل بيكون اتكلم مع غيرك.</p>
      </article>
      <article class="wg-card wg-rv">
        <span class="wg-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17 2l4 4-4 4"/><path d="M3 11V9a3 3 0 0 1 3-3h15"/><path d="M7 22l-4-4 4-4"/><path d="M21 13v2a3 3 0 0 1-3 3H3"/></svg></span>
        <h3>اللي سكت محدش بيتابعه</h3>
        <p>العميل اللي سأل وما ردّش بيتنسى، مع إن رسالة واحدة في وقتها كانت ممكن تقفل البيعة.</p>
      </article>
      <article class="wg-card wg-rv">
        <span class="wg-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg></span>
        <h3>ومش شايف محادثات فريقك</h3>
        <p>حتى في وقت الشغل، صعب تعرف مين اتأخر في الرد، وفين فرصة ضاعت من غير ما حد ياخد باله.</p>
      </article>
    </div>
    <p class="wg-bridge wg-rv"><img src="/media/img/genu-avatar.svg" alt="" width="36" height="36">علشان كده عملنا جينـو دو: فريق عمل كامل بالذكاء الاصطناعي، وجينـو هو اللي بيعرّفك عليه.</p>
  </div>
</section>

<!-- ============ THE GENU FAMILY ============ -->
<section class="wg-sec wg-family-sec" id="family">
  <div class="container">
    <div class="wg-head wg-rv">
      <span class="eyebrow">عيلة جينـو</span>
      <h2>فريق كامل، وكل موظف فيه ليه شغلانة واضحة.</h2>
      <p class="lead">جينـو مش موظف، هو الدليل اللي بيعرّفك على الفريق. كل موظف في جينـو دو شخصية من عيلة جينـو، ليه لونه وشغلانته. بتعيّنه زي أي حد في فريقك، وبيشتغل على قنواتك من أول يوم.</p>
    </div>
    <div class="wg-family">
      <div class="wg-member wg-member--genu wg-rv">
        <div class="mk mk-emp mk-emp--genu" dir="rtl" lang="ar">
          <img class="mk-emp__img" src="/media/img/genu.svg" alt="جينـو، الدليل" width="80" height="87">
          <div class="mk-emp__name">جينـو</div>
          <span class="mk-emp__role">الدليل · مش موظف</span>
          <ul class="mk-emp__list">
            <li><i class="mk-ic mk-ic--check"></i><span>بيشرحلك الفكرة في الأفلام والجولات</span></li>
            <li><i class="mk-ic mk-ic--check"></i><span>بيعرّفك على كل موظف وشغلانته</span></li>
            <li><i class="mk-ic mk-ic--check"></i><span>بيمشي معاك خطوة بخطوة لحد ما فريقك يشتغل</span></li>
          </ul>
        </div>
        <a class="wg-more" href="#film">اتفرّج على جينـو في الفيلم<svg class="wg-flip" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
      </div>
      <div class="wg-member wg-rv">
        <div class="mk mk-emp mk-emp--aaref" dir="rtl" lang="ar">
          <img class="mk-emp__img" src="/media/img/aaref.svg" alt="عارف، موظف المبيعات بالذكاء الاصطناعي" width="80" height="87">
          <div class="mk-emp__name">عارف</div>
          <span class="mk-emp__role">المبيعات</span>
          <ul class="mk-emp__list">
            <li><i class="mk-ic mk-ic--check"></i><span>بيرد على كل استفسار، بالليل وبالنهار</span></li>
            <li><i class="mk-ic mk-ic--check"></i><span>بيفرز العملاء المهتمين وبيتابع اللي سكت</span></li>
            <li><i class="mk-ic mk-ic--check"></i><span>بيساعد يحجز المواعيد على الكالندر بتاعك</span></li>
          </ul>
        </div>
        <a class="wg-more" href="/sol-sales-agent">اعرف عارف أكتر<svg class="wg-flip" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
      </div>
      <div class="wg-member wg-rv">
        <div class="mk mk-emp mk-emp--adnan" dir="rtl" lang="ar">
          <img class="mk-emp__img" src="/media/img/adnan.svg" alt="عدنان، موظف خدمة العملاء بالذكاء الاصطناعي" width="80" height="87">
          <div class="mk-emp__name">عدنان</div>
          <span class="mk-emp__role">خدمة ونجاح العملاء</span>
          <ul class="mk-emp__list">
            <li><i class="mk-ic mk-ic--check"></i><span>بيرد من معلوماتك إنت: الأسعار والسياسات والمواعيد</span></li>
            <li><i class="mk-ic mk-ic--check"></i><span>بيحوّل المشاكل الصعبة للشخص المناسب في فريقك</span></li>
            <li><i class="mk-ic mk-ic--check"></i><span>بيشتغل مع <bdi>Zoho Desk</bdi> و <bdi>Zendesk</bdi></span></li>
          </ul>
        </div>
        <a class="wg-more" href="/sol-customer-service">اعرف عدنان أكتر<svg class="wg-flip" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
      </div>
      <div class="wg-member wg-rv">
        <div class="mk mk-emp mk-emp--roz" dir="rtl" lang="ar">
          <img class="mk-emp__img" src="/media/img/roz-v2.svg" alt="روز، موظفة مراقبة الجودة بالذكاء الاصطناعي" width="80" height="87">
          <div class="mk-emp__name">روز</div>
          <span class="mk-emp__role">مراقبة الجودة</span>
          <ul class="mk-emp__list">
            <li><i class="mk-ic mk-ic--check"></i><span>بتراجع محادثات فريقك على أرقام <bdi>WhatsApp</bdi> بتاعة الشركة</span></li>
            <li><i class="mk-ic mk-ic--check"></i><span>بتنبّهك للردود المتأخرة والصفقات الواقفة والفرص اللي بتضيع</span></li>
            <li><i class="mk-ic mk-ic--check"></i><span>بتشتغل بمجرد ما تمسح كود <bdi>QR</bdi> من موبايلك، وبتحوّل الفويس نوتس لكلام مكتوب</span></li>
          </ul>
        </div>
        <a class="wg-more" href="/sol-operations">اعرف روز أكتر<svg class="wg-flip" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
      </div>
    </div>
    <p class="wg-note wg-rv"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M19 8v6M22 11h-6"/></svg><span>تقدر تعيّن أكتر من موظف من كل نوع، مثلًا عارف لمبيعات <bdi>WhatsApp</bdi> وعارف تاني لشات الموقع. وفيه موظفين تانيين جايين في السكة.</span></p>
  </div>
</section>

<!-- ============ HOW GENU WORKS WITH YOU (narrated) ============ -->
<section class="wg-sec wg-how" id="how">
  <div class="container">
    <div class="wg-head wg-rv">
      <span class="eyebrow">إزاي بيشتغل معاك</span>
      <h2>من أول ما تحكي عن شغلك لحد أول حجز، في خمس خطوات.</h2>
      <p class="lead">وجينـو معاك في كل خطوة: تحكي عن شغلك، وتشوف موظفك بيرد ويحجز، وإنت متابع من موبايلك.</p>
    </div>

    <div class="wg-walk">
      <aside class="wg-narr" data-wg-narrator aria-hidden="true">
        <p class="wg-bubble" data-wg-say>احكيلي عن شغلك بكلامك، كتابة أو بصوتك، وأنا أرتّب الباقي.</p>
        <img src="/media/img/genu.svg" alt="" width="216" height="236">
        <span class="wg-step">الخطوة <b data-wg-num>1</b> من 5</span>
      </aside>

      <ol class="wg-beats">
        <li class="wg-beat" data-wg-beat="1" data-say="احكيلي عن شغلك بكلامك، كتابة أو بصوتك، وأنا أرتّب الباقي.">
          <div class="wg-beat-copy">
            <span class="wg-num">1</span>
            <h3>إنت بتحكي عن شغلك</h3>
            <p>ست أسئلة سريعة: اسم شغلك، بتبيع إيه، وعملائك بيسألوا عن إيه. تكتب أو تتكلم بصوتك، من غير ما تكتب سطر كود.</p>
            <p class="wg-says"><img src="/media/img/genu-avatar.svg" alt="" width="32" height="32"><span><b>جينـو:</b> احكيلي عن شغلك بكلامك، كتابة أو بصوتك، وأنا أرتّب الباقي.</span></p>
          </div>
          <div class="wg-media">
<div class="mk mk-wizard" dir="rtl" lang="ar" role="img" aria-label="ملخص النشاط التجاري، السؤال 1 من 6">
  <span class="mk-wizard__eyebrow"><i class="mk-ic mk-ic--sparkle"></i>ملخص النشاط التجاري</span>
  <div class="mk-wizard__steps"><i class="is-on"></i><i></i><i></i><i></i><i></i><i></i></div>
  <div class="mk-q">
    <div class="mk-q__top"><span class="mk-chip mk-chip--indigo">السؤال 1 من 6</span><span class="mk-q__count">تمت الإجابة عن 0 من 6</span></div>
    <div class="mk-q__title">ما اسم شركتك أو علامتك التجارية؟</div>
    <p class="mk-q__hint">اكتب الاسم الذي يعرفك به عملاؤك.</p>
    <div class="mk-input">عيادة برايت سمايل للأسنان<span class="mk-caret"></span></div>
    <div class="mk-q__mic"><span class="mk-q__micbtn"><i class="mk-ic mk-ic--mic"></i></span>اكتب إجابتك، أو اضغط على الميكروفون للتحدث.</div>
    <div class="mk-q__foot"><span class="mk-btn mk-btn--ghost"><i class="mk-ic mk-ic--back"></i>رجوع</span><span class="mk-btn mk-btn--primary">السؤال التالي<i class="mk-ic mk-ic--arrow"></i></span></div>
  </div>
</div>
          </div>
        </li>

        <li class="wg-beat" data-wg-beat="2" data-say="إدّيني أسعارك وأسئلتك المتكررة، وأنا أعلّمها لموظفك.">
          <div class="wg-beat-copy">
            <span class="wg-num">2</span>
            <h3>جينـو بيجهّز موظفك</h3>
            <p>ترفع أسعارك والأسئلة المتكررة أو لينك موقعك، وتقول لكل مرحلة إمتى تبدأ وتعمل إيه. موظفك بيرد من معلوماتك إنت، وتقدر تعدّلها في أي وقت.</p>
            <p class="wg-says"><img src="/media/img/genu-avatar.svg" alt="" width="32" height="32"><span><b>جينـو:</b> إدّيني أسعارك وأسئلتك المتكررة، وأنا أعلّمها لموظفك.</span></p>
          </div>
          <div class="wg-media">
<div class="mk mk-card mk-kb" dir="rtl" lang="ar" role="img" aria-label="الأسئلة الشائعة التي يرد منها الوكيل">
  <div class="mk-card__head"><div class="mk-card__title"><i class="mk-ic mk-ic--book"></i>قاعدة المعرفة · الأسئلة الشائعة</div><span class="mk-chip mk-chip--green"><i class="mk-ic mk-ic--check"></i>تم التدريب</span></div>
  <table class="mk-table">
    <thead><tr><th>السؤال</th><th>الإجابة</th><th class="mk-hide-sm">آخر تحديث</th></tr></thead>
    <tbody>
      <tr><td>ما مواعيد العمل؟</td><td>من السبت إلى الخميس، من <bdi>10</bdi> صباحًا حتى <bdi>10</bdi> مساءً.</td><td class="mk-hide-sm">1 يناير 2029</td></tr>
      <tr><td>هل الاستشارة الأولى مجانية؟</td><td>نعم، الاستشارة الأولى مجانية.</td><td class="mk-hide-sm">1 يناير 2029</td></tr>
      <tr><td>هل يوجد موقف للسيارات؟</td><td>نعم، موقف مجاني خلف المبنى.</td><td class="mk-hide-sm">3 يناير 2029</td></tr>
    </tbody>
  </table>
  <div class="mk-kb__ask"><i class="mk-ic mk-ic--sparkle"></i><span>إجابة الوكيل من هذا الجدول: «أيوه، أول استشارة ببلاش. تحب أحجزلك؟»</span></div>
</div>
          </div>
        </li>

        <li class="wg-beat" data-wg-beat="3" data-say="عميل بعت الساعة اتنين بالليل؟ عارف رد عليه وحجزله.">
          <div class="wg-beat-copy">
            <span class="wg-num">3</span>
            <h3>بيرد ويحجز، بالليل والنهار</h3>
            <p>موظفك بيرد فورًا على <bdi>WhatsApp</bdi> و <bdi>Instagram</bdi> و <bdi>Messenger</bdi> وشات موقعك. بيفهم الفويس نوتس، بيسأل الأسئلة الصح، وبيساعد يحجز الميعاد على الكالندر بتاعك.</p>
            <p class="wg-says"><img src="/media/img/genu-avatar.svg" alt="" width="32" height="32"><span><b>جينـو:</b> عميل بعت الساعة اتنين بالليل؟ عارف رد عليه وحجزله.</span></p>
          </div>
          <div class="wg-media">
<div class="mk mk-phone" dir="rtl" lang="ar" role="img" aria-label="محادثة WhatsApp يرد عليها الوكيل ويحجز موعدًا">
  <div class="mk-phone__screen">
    <div class="mk-phone__status"><span>2:15</span></div>
    <div class="mk-phone__head"><i class="mk-ic mk-ic--back"></i><span class="mk-avatar mk-avatar--green">م</span><div class="mk-phone__who"><b>منى عادل</b><span><i class="mk-ic mk-ic--whatsapp"></i><bdi>WhatsApp · +20 100 000 0000</bdi></span></div></div>
    <div class="mk-takeover"><span class="mk-takeover__state"><i class="mk-ic mk-ic--sparkle"></i>الوكيل يتولّى هذه المحادثة</span><span class="mk-takeover__btn"><i class="mk-ic mk-ic--pause"></i>تدخّل بشري</span></div>
    <div class="mk-chat">
      <span class="mk-chat__day">اليوم</span>
      <div class="mk-msg mk-msg--in">أهلًا، عندكم ميعاد الأسبوع ده؟<span class="mk-msg__meta"><bdi>2:14</bdi> ص</span></div>
      <div class="mk-msg mk-msg--out"><span class="mk-msg__by"><i class="mk-ic mk-ic--sparkle"></i>عارف · الوكيل</span>أهلًا يا منى! عندنا يوم الخميس الساعة <bdi>6:30</bdi> أو <bdi>7:15</bdi> مساءً. أنهي يناسبك؟<span class="mk-msg__meta"><bdi>2:14</bdi> ص <i class="mk-ic mk-ic--checks"></i></span></div>
      <div class="mk-msg mk-msg--in mk-voice">
        <div class="mk-voice__row"><span class="mk-voice__play"><i class="mk-ic mk-ic--play"></i></span><span class="mk-voice__wave"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></span><span class="mk-voice__len">0:07</span></div>
        <div class="mk-voice__text"><b><i class="mk-ic mk-ic--mic"></i>تم تفريغ الرسالة الصوتية</b>أيوه، الخميس <bdi>6:30</bdi>. وهي أول استشارة ببلاش؟</div>
        <span class="mk-msg__meta"><bdi>2:15</bdi> ص</span>
      </div>
      <div class="mk-msg mk-msg--out"><span class="mk-msg__by"><i class="mk-ic mk-ic--sparkle"></i>عارف · الوكيل</span>أيوه ببلاش! حجزتلك يوم الخميس الساعة <bdi>6:30</bdi> مساءً.<span class="mk-msg__meta"><bdi>2:15</bdi> ص <i class="mk-ic mk-ic--checks"></i></span></div>
      <div class="mk-meeting">
        <div class="mk-meeting__top"><span class="mk-meeting__ic"><i class="mk-ic mk-ic--calendar"></i></span><div><div class="mk-meeting__title">تم تأكيد الموعد</div><div class="mk-meeting__when">الخميس 14 يناير · <bdi>6:30</bdi> م</div></div></div>
        <div class="mk-meeting__rows"><span><i class="mk-ic mk-ic--check"></i>أُضيف إلى <bdi>Google Calendar</bdi></span><span><i class="mk-ic mk-ic--check"></i>أُرسل رابط الاجتماع عبر <bdi>WhatsApp</bdi></span></div>
      </div>
    </div>
    <div class="mk-phone__compose">الوكيل يتولّى هذه المحادثة. اختر «تدخّل بشري» للرد بنفسك.</div>
  </div>
</div>
          </div>
        </li>

        <li class="wg-beat" data-wg-beat="4" data-say="واللي ما ردّش؟ المتابعة مش بتنسى.">
          <div class="wg-beat-copy">
            <span class="wg-num">4</span>
            <h3>اللي سكت، بيتابعه</h3>
            <p>لو العميل ما ردّش، موظفك بيبعتله متابعة بعد 3 ساعات، وتانية بعد يوم، بالرسالة اللي إنت تختارها. ولو خلصت المتابعات ومفيش رد، الفرصة بتتنقل لـ«ضائعة»، علشان قايمتك تفضل نضيفة.</p>
            <p class="wg-says"><img src="/media/img/genu-avatar.svg" alt="" width="32" height="32"><span><b>جينـو:</b> واللي ما ردّش؟ المتابعة مش بتنسى.</span></p>
          </div>
          <div class="wg-media">
<div class="mk mk-card" dir="rtl" lang="ar" role="img" aria-label="تسلسل المتابعات لعميل لم يرد">
  <div class="mk-card__head"><div class="mk-card__title"><i class="mk-ic mk-ic--repeat"></i>المتابعات · مهتم</div><span class="mk-chip mk-chip--green"><i class="mk-dot"></i>نشطة</span></div>
  <ol class="mk-timeline">
    <li class="mk-step is-sent"><div class="mk-step__head"><b>المتابعة 1</b><span class="mk-step__wait">بعد 3 ساعات</span><span class="mk-status mk-status--sent">مُرسلة</span></div><p class="mk-step__msg">أهلًا يا كريم، لسه حابب تحجز الاستشارة؟ عندنا مواعيد الأسبوع ده.</p></li>
    <li class="mk-step is-scheduled"><div class="mk-step__head"><b>المتابعة 2</b><span class="mk-step__wait">بعد 24 ساعة</span><span class="mk-status mk-status--scheduled">مجدولة</span></div><p class="mk-step__msg">عندنا ميعادين فاضيين يوم الخميس. أحجزلك واحد؟</p></li>
    <li class="mk-step mk-step--end"><div class="mk-step__head"><i class="mk-ic mk-ic--arrow"></i>لا رد بعد انتهاء التسلسل: النقل إلى <span class="mk-stage mk-stage--red mk-stage--sm">ضائعة</span></div></li>
  </ol>
</div>
          </div>
        </li>

        <li class="wg-beat" data-wg-beat="5" data-say="وإنت شايف كل حاجة، وتستلم أي محادثة بضغطة، حتى من موبايلك.">
          <div class="wg-beat-copy">
            <span class="wg-num">5</span>
            <h3>وإنت ماسك الدفة</h3>
            <p>كل المحادثات في صندوق وارد واحد. تستلم أي محادثة بضغطة وترجّعها للموظف بعدها، حتى من أبلكيشن الموبايل. وروز بتراجع محادثات فريقك وتنبّهك لو عميل استنى كتير أو فرصة ضاعت.</p>
            <p class="wg-says"><img src="/media/img/genu-avatar.svg" alt="" width="32" height="32"><span><b>جينـو:</b> وإنت شايف كل حاجة، وتستلم أي محادثة بضغطة، حتى من موبايلك.</span></p>
          </div>
          <div class="wg-media wg-media--pair">
<div class="mk mk-phone" dir="rtl" lang="ar" role="img" aria-label="أحد أعضاء الفريق تولّى المحادثة">
  <div class="mk-phone__screen">
    <div class="mk-phone__status"><span>9:41</span></div>
    <div class="mk-phone__head"><i class="mk-ic mk-ic--back"></i><span class="mk-avatar mk-avatar--amber">ك</span><div class="mk-phone__who"><b>كريم سعيد</b><span><i class="mk-ic mk-ic--whatsapp"></i><bdi>WhatsApp · +20 100 000 0000</bdi></span></div></div>
    <div class="mk-takeover mk-takeover--human"><span class="mk-takeover__state"><i class="mk-ic mk-ic--user"></i>أنت تتولّى هذه المحادثة</span><span class="mk-takeover__btn"><i class="mk-ic mk-ic--sparkle"></i>إعادة إلى الوكيل</span></div>
    <div class="mk-chat">
      <div class="mk-msg mk-msg--in">ينفع آخد خصم للعيلة كلها؟<span class="mk-msg__meta"><bdi>11:02</bdi> ص</span></div>
      <div class="mk-msg mk-msg--out">أكيد يا كريم! هجهزلك عرض للعيلة النهارده.<span class="mk-msg__meta"><bdi>11:04</bdi> ص <i class="mk-ic mk-ic--checks"></i></span></div>
    </div>
    <div class="mk-phone__compose mk-phone__compose--input"><span>اكتب رسالة…</span><span class="mk-phone__send"><i class="mk-ic mk-ic--send"></i></span></div>
  </div>
</div>
<div class="mk mk-card" dir="rtl" lang="ar" role="img" aria-label="روز ترصد ثلاث محادثات من فريقك">
  <div class="mk-review__head"><img src="/media/img/roz-v2.svg" alt="" width="44" height="48"><div class="mk-review__who"><b>روز · مراقبة الجودة</b><span><bdi>WhatsApp</bdi> · خط المبيعات · اليوم</span></div><span class="mk-chip mk-chip--pink">3 ملاحظات</span></div>
  <ul class="mk-flags">
    <li class="mk-flag mk-flag--slow"><span class="mk-flag__ic"><i class="mk-ic mk-ic--clock"></i></span><div class="mk-flag__body"><b>رد متأخر<span>أحمد · <bdi>10:40</bdi> ص</span></b><p>انتظر العميل ساعتين ليعرف السعر.</p></div></li>
    <li class="mk-flag mk-flag--missed"><span class="mk-flag__ic"><i class="mk-ic mk-ic--flag"></i></span><div class="mk-flag__body"><b>فرصة ضائعة<span>سلمى · <bdi>1:15</bdi> م</span></b><p>طلب العميل الحجز ولم يقترح عليه أحد موعدًا.</p></div></li>
    <li class="mk-flag mk-flag--stalled"><span class="mk-flag__ic"><i class="mk-ic mk-ic--pause"></i></span><div class="mk-flag__body"><b>فرصة متوقفة<span>أحمد · 4 أيام</span></b><p>أُرسل عرض السعر ولا توجد متابعة منذ ذلك الحين.</p></div></li>
  </ul>
  <div class="mk-review__foot"><i class="mk-ic mk-ic--mic"></i>تم تفريغ 6 رسائل صوتية اليوم</div>
</div>
          </div>
        </li>
      </ol>
    </div>
  </div>
</section>

<!-- ============ THE FILM ============ -->
<section class="wg-sec wg-film" id="film">
  <div class="container">
    <div class="wg-head wg-rv">
      <span class="eyebrow">الفيلم</span>
      <h2>جينـو بيحكيلك الحكاية كلها في 3 دقايق.</h2>
      <p class="lead">من «مين بيرد على عملائك الساعة اتنين بالليل؟»، لروز وعارف وعدنان، لحد ما تستلم المحادثة من موبايلك.</p>
    </div>
    <div class="wg-player wg-rv">
      <video src="/media/video/ai-workforce-ar.mp4" poster="/media/video/ai-workforce-ar.jpg" controls playsinline preload="none" width="1280" height="720" aria-label="فيلم جينـو دو: ابني فريق عملك بالذكاء الاصطناعي"></video>
    </div>
    <ul class="wg-chapters" aria-label="هتشوف في الفيلم">
      <li>المشكلة: عملاء مستنيين</li>
      <li>روز ومراقبة الجودة</li>
      <li>تعيين عارف وعدنان</li>
      <li>التجهيز في خطوات بسيطة</li>
      <li>لهجات عملائك</li>
      <li>المتابعات والحجز</li>
      <li>التكلفة تحت السيطرة</li>
      <li>إنت ماسك الدفة</li>
    </ul>
  </div>
</section>

<!-- ============ BEHIND THE CHARACTER ============ -->
<section class="wg-sec wg-character" id="character">
  <div class="container wg-char">
    <div class="wg-char-media wg-rv">
      <div class="wg-loop">
        <video data-wg-loop src="/media/video/genu-pose-library.mp4" poster="/media/video/genu-pose-library.jpg" autoplay muted loop playsinline preload="none" width="1280" height="720" aria-label="جينـو بيسلّم وبيشاور وبيحتفل وبيفكّر"></video>
      </div>
      <ul class="wg-poses" aria-label="حركات جينـو">
        <li>بيسلّم</li><li>بيشاور</li><li>بيقدّم</li><li>بيحتفل</li>
        <li>بيكتب</li><li>بيفكّر</li><li>بيسمع</li><li>بيحتار</li>
      </ul>
    </div>
    <div class="wg-char-copy wg-rv">
      <span class="eyebrow">ورا الشخصية</span>
      <h2>روبوت صغير، بس بيعبّر عن كل حاجة.</h2>
      <p class="lead">عملنا جينـو علشان يشرح من غير تعقيد: وشّ بالبكسل بيضحك ويفكّر، وإيدين بيشاور بيها على الحاجة اللي محتاج تشوفها.</p>
      <ul class="wg-traits">
        <li><span class="wg-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><path d="M9 9h.01M15 9h.01"/></svg></span><div><b>تعبيرات بتقولك الحالة</b><p>لما تشوف جينـو بيفكّر، يبقى فيه شغل بيتعمل. ولما يحتفل، يبقى المهمة خلصت.</p></div></li>
        <li><span class="wg-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="13.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="12.5" r="2.5"/><circle cx="8.5" cy="7.5" r="2.5"/><circle cx="6.5" cy="13.5" r="2.5"/><path d="M12 22a10 10 0 1 1 10-10c0 2-1.5 3-3 3h-2a2 2 0 0 0-1 3.7A2 2 0 0 1 12 22z"/></svg></span><div><b>لكل موظف لونه</b><p class="wg-swatches"><span><i style="--c:#6468f0"></i>جينـو نيلي</span><span><i style="--c:#e0a23a"></i>عارف كهرماني</span><span><i style="--c:#52a7cc"></i>عدنان أزرق</span><span><i style="--c:#e86fa6"></i>روز بمبي وعلى صدرها بادج وردة</span></p></div></li>
        <li><span class="wg-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></span><div><b>بيتكلم مصري</b><p>في الفيلم العربي جينـو بيحكي بالمصري، بنفس اللغة اللي عملائك بيكلّموك بيها.</p></div></li>
      </ul>
    </div>
  </div>
</section>

<!-- ============ WHY YOU CAN RELAX ============ -->
<section class="wg-sec wg-trust" id="trust">
  <div class="container">
    <div class="wg-head wg-rv">
      <span class="eyebrow">ليه تطمّن</span>
      <h2>فريق بيشتغل بقواعدك إنت.</h2>
    </div>
    <div class="wg-cards">
      <article class="wg-card wg-rv">
        <span class="wg-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m5 8 6 6M4 14l6-6 2-3M2 5h12M7 2h1M22 22l-5-10-5 10M14 18h6"/></svg></span>
        <h3>بيتكلم لغة عملائك</h3>
        <p>مصري وخليجي وشامي… 14 لهجة عربية، وبيفهم الفويس نوتس والصور كمان.</p>
      </article>
      <article class="wg-card wg-rv">
        <span class="wg-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5z"/><path d="M8 7h8M8 11h6"/></svg></span>
        <h3>بيرد من معلوماتك</h3>
        <p>أسعارك وسياساتك ومواعيدك هي المرجع، وتعدّلها في أي وقت.</p>
      </article>
      <article class="wg-card wg-rv">
        <span class="wg-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/></svg></span>
        <h3>القرار في إيدك</h3>
        <p>تشغّل الموظف أو توقفه في أي محادثة، وتكتب ملاحظات خاصة لفريقك، من الكمبيوتر أو من موبايلك.</p>
      </article>
    </div>
    <p class="wg-more-row wg-rv"><a class="wg-more" href="/how-it-works">شوف إزاي بيشتغل بالتفصيل<svg class="wg-flip" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a></p>
  </div>
</section>

<!-- ============ CTA ============ -->
<section class="s ctaf wg-final"><div class="container"><div class="ctaf-card">
  <img class="ctaf-genu wg-final-genu" src="/media/img/genu.svg" alt="" width="96" height="105">
  <div class="eyebrow ctaf-eyebrow">يلا نبدأ</div>
  <h2>جاهز تعيّن أول موظف في فريقك؟</h2>
  <p class="lead">احجز ديمو وجينـو يوريك الفريق شغّال على شغلك إنت، أو ابدأ دلوقتي بنفسك.</p>
  <div class="ctaf-cta"><a href="/contact" class="btn btn-primary btn-lg">احجز ديمو</a><a href="https://app.genudo.ai/auth/register" class="ctaf-sec">ابدأ دلوقتي <svg class="wg-flip" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a></div>
  <div class="ctaf-trust"><span class="live-dot"></span><bdi>WhatsApp</bdi><span class="sep"></span><bdi>Instagram</bdi><span class="sep"></span><bdi>Messenger</bdi><span class="sep"></span>شات الموقع</div>
</div></div></section>

</div>`;
export default html;
