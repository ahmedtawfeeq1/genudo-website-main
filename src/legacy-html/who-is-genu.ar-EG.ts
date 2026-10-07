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
      <p class="lead">أنا دليلك في جينـو دو. معايا هتعيّن موظفين بالذكاء الاصطناعي: عارف للمبيعات، وعدنان لخدمة ونجاح العملاء، وروز لمراقبة الجودة. عارف وعدنان بيردّوا على عملائك على <bdi>WhatsApp</bdi> و <bdi>Instagram</bdi> وشات موقعك، بالليل والنهار، وروز بتوضّحلك أداء فريقك على <bdi>WhatsApp</bdi>. وإنت ماسك الدفة.</p>
      <div class="wg-cta">
        <a href="/contact" class="btn btn-primary btn-lg">احجز جلسة تخطيط</a>
        <a href="#film" class="btn btn-ondark btn-lg"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m8 5 11 7-11 7z"/></svg>اتفرّج على الفيلم</a>
      </div>
      <div class="wg-chans" aria-label="القنوات">
        <span><bdi>WhatsApp</bdi></span><span><bdi>Instagram</bdi> و <bdi>Messenger</bdi></span><span>شات الموقع</span>
      </div>
    </div>

    <div class="wg-stage">
      <p class="wg-bubble" data-wg-hero-bubble aria-live="polite">أهلًا! دوس عليّا وأنا أحكيلك.</p>
      <button type="button" class="wg-genu" data-wg-genu aria-label="دوس على جينـو علشان يكمّل كلامه"
        data-lines="أنا مش موظف… أنا اللي بعرّفك على الموظفين.|كل واحد في عيلتي ليه لون وليه دور.|بتعيّنهم زي ما بتعيّن أي حد في فريقك.|وإنت دايمًا ماسك الدفة: تستلم أي محادثة بضغطة.|عايز تشوفهم شغّالين؟ انزل تحت شوية.">
        <img src="/media/img/genu.svg" alt="جينـو، المرشد في جينـو دو" width="216" height="236">
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
        <p>العميل اللي سأل وما ردّش بيتنسى، مع إن رسالة واحدة في وقتها كانت ممكن تتمّم البيع.</p>
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
      <h2>فريق كامل، وكل موظف فيه ليه دور واضح.</h2>
      <p class="lead">جينـو مش موظف، هو الدليل اللي بيعرّفك على الفريق. كل موظف في جينـو دو شخصية من عيلة جينـو، ليه لونه ودوره. بتعيّنه زي أي حد في فريقك، وبيشتغل بالقواعد اللي إنت بتعتمدها.</p>
    </div>
    <div class="wg-family">
      <div class="wg-member wg-member--genu wg-rv">
        <div class="mk mk-emp mk-emp--genu" dir="rtl" lang="ar">
          <img class="mk-emp__img" src="/media/img/genu.svg" alt="جينـو، الدليل" width="80" height="87">
          <div class="mk-emp__name">جينـو</div>
          <span class="mk-emp__role">الدليل · مش موظف</span>
          <ul class="mk-emp__list">
            <li><i class="mk-ic mk-ic--check"></i><span>بيشرحلك الفكرة في الأفلام والجولات</span></li>
            <li><i class="mk-ic mk-ic--check"></i><span>بيعرّفك على كل موظف ودوره</span></li>
            <li><i class="mk-ic mk-ic--check"></i><span>بيمشي معاك خطوة بخطوة لحد ما فريقك يشتغل</span></li>
          </ul>
        </div>
        <a class="wg-more" href="#film">اتفرّج على جينـو في الفيلم<svg class="wg-flip" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
      </div>
      <div class="wg-member wg-rv">
        <div class="mk mk-emp mk-emp--aaref" dir="rtl" lang="ar">
          <img class="mk-emp__img wg-portrait" src="/media/img/portraits/aaref-hero.webp" alt="عارف، موظف المبيعات بالذكاء الاصطناعي" width="448" height="640" loading="lazy">
          <div class="mk-emp__name">عارف</div>
          <span class="mk-emp__role">المبيعات</span>
          <p class="wg-emp__tag">بيرد على كل عميل محتمل في ثواني، ويتابع معاه لحد ما يتحوّل لعميل فعلي</p>
          <ul class="mk-emp__list">
            <li><i class="mk-ic mk-ic--check"></i><span>بيرد على كل استفسار، بالليل والنهار، وبلهجة العميل</span></li>
            <li><i class="mk-ic mk-ic--check"></i><span>بيأهّل العميل ويتابع معاه لحد ما ياخد قراره</span></li>
            <li><i class="mk-ic mk-ic--check"></i><span>بيتمّم الخطوة الجاية: حجز، أو تسجيل، أو أوردر، أو طلب لفريقك</span></li>
          </ul>
        </div>
        <a class="wg-more" href="/sol-sales-agent">اعرف عارف أكتر<svg class="wg-flip" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
      </div>
      <div class="wg-member wg-rv">
        <div class="mk mk-emp mk-emp--adnan" dir="rtl" lang="ar">
          <img class="mk-emp__img wg-portrait" src="/media/img/portraits/adnan-hero.webp" alt="عدنان، موظف خدمة ونجاح العملاء بالذكاء الاصطناعي" width="448" height="640" loading="lazy">
          <div class="mk-emp__name">عدنان</div>
          <span class="mk-emp__role">خدمة ونجاح العملاء</span>
          <p class="wg-emp__tag">إجابات فورية، وطلبات بتتنفّذ، وبداية صحيحة لكل عميل جديد</p>
          <ul class="mk-emp__list">
            <li><i class="mk-ic mk-ic--check"></i><span>بيجاوب من معلومات شركتك: المواعيد والأسعار والسياسات</span></li>
            <li><i class="mk-ic mk-ic--check"></i><span>بينفّذ الطلبات المتكررة حسب سياستك، في أي وقت</span></li>
            <li><i class="mk-ic mk-ic--check"></i><span>بيحوّل الحالات الصعبة لفريقك بكل التفاصيل</span></li>
          </ul>
        </div>
        <a class="wg-more" href="/sol-customer-service">اعرف عدنان أكتر<svg class="wg-flip" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
      </div>
      <div class="wg-member wg-rv">
        <div class="mk mk-emp mk-emp--roz" dir="rtl" lang="ar">
          <img class="mk-emp__img wg-portrait" src="/media/img/portraits/roz-hero.webp" alt="روز، موظفة مراقبة الجودة بالذكاء الاصطناعي" width="448" height="640" loading="lazy">
          <div class="mk-emp__name">روز</div>
          <span class="mk-emp__role">مراقبة الجودة</span>
          <p class="wg-emp__tag">اسألها أي سؤال من <bdi>Claude</bdi> أو <bdi>ChatGPT</bdi>، وتقاريرك بتوصل في مواعيدها، وجاهزة في نفس اليوم</p>
          <ul class="mk-emp__list">
            <li><i class="mk-ic mk-ic--check"></i><span>بتغطي المحادثات الفردية والجروبات على أرقام <bdi>WhatsApp</bdi> الشركة</span></li>
            <li><i class="mk-ic mk-ic--check"></i><span>بتوضّحلك مين استنى، وايه اللي اتأخر، وإزاي فريقك يخدم بشكل أفضل</span></li>
            <li><i class="mk-ic mk-ic--check"></i><span>مسح كود <bdi>QR</bdi> واحد لكل رقم: من غير تجهيز ولا بناء</span></li>
          </ul>
        </div>
        <a class="wg-more" href="/sol-operations">اعرف روز أكتر<svg class="wg-flip" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
      </div>
    </div>
    <p class="wg-note wg-rv"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M19 8v6M22 11h-6"/></svg><span>تقدر تعيّن أكتر من موظف من كل نوع، مثلًا عارف لمبيعات <bdi>WhatsApp</bdi> وعارف تاني لشات الموقع. وروز واحدة بتغطي كل أرقام وجروبات الشركة اللي بتربطها. وفيه موظفين تانيين جايين في السكة.</span></p>
  </div>
</section>

<!-- ============ HOW GENU WORKS WITH YOU (narrated) ============ -->
<section class="wg-sec wg-how" id="how">
  <div class="container">
    <div class="wg-head wg-rv">
      <span class="eyebrow">إزاي بيشتغل معاك</span>
      <h2>من أول جلسة تخطيط لحد أول حجز، في خمس خطوات.</h2>
      <p class="lead">إحنا بنبني فريقك معاك: الـ account manager بيخطط معاك، والـ automation specialist بيبني، وإنت بتعتمد كل خطوة. وجينـو بيمشي معاك فيها. كل الأسماء في الأمثلة افتراضية.</p>
    </div>

    <div class="wg-walk">
      <aside class="wg-narr" data-wg-narrator aria-hidden="true">
        <p class="wg-bubble" data-wg-say>الأول بنسمع منك. احكيلنا إزاي بتبيع وبتخدم عملاءك، ونخطط فريقك معاك.</p>
        <img src="/media/img/genu.svg" alt="" width="216" height="236">
        <span class="wg-step">الخطوة <b data-wg-num>1</b> من 5</span>
      </aside>

      <ol class="wg-beats">
        <li class="wg-beat" data-wg-beat="1" data-say="الأول بنسمع منك. احكيلنا إزاي بتبيع وبتخدم عملاءك، ونخطط فريقك معاك.">
          <div class="wg-beat-copy">
            <span class="wg-num">1</span>
            <h3>بنسمع منك ونخطط مع بعض</h3>
            <p>في جلسة التخطيط، الـ account manager بيتعرف على عملاءك وقنواتك وعروضك، وفين الفرص والوقت اللي بيضيعوا. ومع بعض بتتفقوا على مهام كل موظف، واللي هيفضل مع فريقك، والمؤشرات اللي هنتابعها.</p>
            <p class="wg-says"><img src="/media/img/genu-avatar.svg" alt="" width="32" height="32"><span><b>جينـو:</b> الأول بنسمع منك. احكيلنا إزاي بتبيع وبتخدم عملاءك، ونخطط فريقك معاك.</span></p>
          </div>
          <div class="wg-media">
<div class="mk mk-card" dir="rtl" lang="ar" role="img" aria-label="خطة التعيين: عارف وعدنان بيتبنوا معاك، وروز جاهزة في نفس اليوم">
  <div class="mk-card__head"><div class="mk-card__title"><i class="mk-ic mk-ic--route"></i>خطة التعيين · عارف وعدنان</div><span class="mk-chip mk-chip--pink"><i class="mk-ic mk-ic--qr"></i>روز: في نفس اليوم</span></div>
  <ol class="mk-timeline">
    <li class="mk-step is-sent"><div class="mk-step__head"><b>الاستماع</b><span class="mk-step__wait">الـ account manager</span><span class="mk-status mk-status--sent">خلص</span></div><p class="mk-step__msg">عملاءك وقنواتك وعروضك، وفين الفرص اللي بتضيع.</p></li>
    <li class="mk-step is-sent"><div class="mk-step__head"><b>التخطيط</b><span class="mk-step__wait">إنت والـ account manager</span><span class="mk-status mk-status--sent">خلص</span></div><p class="mk-step__msg">مهام كل موظف، واللي هيفضل مع فريقك، والمؤشرات اللي هنتابعها.</p></li>
    <li class="mk-step is-scheduled"><div class="mk-step__head"><b>البناء</b><span class="mk-step__wait">الـ automation specialist</span><span class="mk-status mk-status--scheduled">الجاي</span></div><p class="mk-step__msg">معلومات شركتك ومراحل البيع وأدواتك.</p></li>
    <li class="mk-step mk-step--end"><div class="mk-step__head"><i class="mk-ic mk-ic--arrow"></i>بعدها: الإطلاق بموافقتك، والتطوير كل شهر</div></li>
  </ol>
</div>
          </div>
        </li>

        <li class="wg-beat" data-wg-beat="2" data-say="شاركنا قوايم الأسعار والسياسات والأسئلة المتكررة، والـ automation specialist بيبنيها في موظفينك.">
          <div class="wg-beat-copy">
            <span class="wg-num">2</span>
            <h3>إحنا بنبني، وإنت بتعتمد</h3>
            <p>الـ automation specialist بيبني عارف وعدنان على معلومات شركتك: قوايم الأسعار والسياسات والأسئلة المتكررة والمواعيد، ومراحل البيع وأدواتك. وإنت بتعتمد الإجابات قبل التشغيل، ومدة البناء بنتفق عليها في جلسة التخطيط. أما روز فمن غير بناء: مسح كود <bdi>QR</bdi> واحد لكل رقم للشركة، وبتبدأ في نفس اليوم.</p>
            <p class="wg-says"><img src="/media/img/genu-avatar.svg" alt="" width="32" height="32"><span><b>جينـو:</b> شاركنا قوايم الأسعار والسياسات والأسئلة المتكررة، والـ automation specialist بيبنيها في موظفينك.</span></p>
          </div>
          <div class="wg-media">
<div class="mk mk-card mk-kb" dir="rtl" lang="ar" role="img" aria-label="الأسئلة المتكررة اللي الموظف بيرد منها">
  <div class="mk-card__head"><div class="mk-card__title"><i class="mk-ic mk-ic--book"></i>الـ knowledge base · أسئلة العيادة</div><span class="mk-chip mk-chip--green"><i class="mk-ic mk-ic--check"></i>جاهزة</span></div>
  <table class="mk-table">
    <thead><tr><th>السؤال</th><th>الإجابة</th><th class="mk-hide-sm">آخر تحديث</th></tr></thead>
    <tbody>
      <tr><td>مواعيدكم إيه؟</td><td>من السبت للخميس، من <bdi>10</bdi> الصبح لـ <bdi>10</bdi> بالليل.</td><td class="mk-hide-sm">1 يناير 2029</td></tr>
      <tr><td>ينفع أحجز على <bdi>WhatsApp</bdi>؟</td><td>أيوه، على <bdi>WhatsApp</bdi> أو شات الموقع، في أي وقت.</td><td class="mk-hide-sm">1 يناير 2029</td></tr>
      <tr><td>فيه مكان للركن؟</td><td>أيوه، فيه جراج ورا المبنى.</td><td class="mk-hide-sm">3 يناير 2029</td></tr>
    </tbody>
  </table>
  <div class="mk-kb__ask"><i class="mk-ic mk-ic--sparkle"></i><span>إجابة الموظف من الجدول ده: «أيوه، تقدري تحجزي من هنا. أشوفلك ميعاد؟»</span></div>
</div>
          </div>
        </li>

        <li class="wg-beat" data-wg-beat="3" data-say="عميل بعت الساعة اتنين بالليل؟ عارف رد عليه وحجزله.">
          <div class="wg-beat-copy">
            <span class="wg-num">3</span>
            <h3>الإطلاق: بيرد ويحجز، بالليل والنهار</h3>
            <p>موظفك بيرد فورًا على <bdi>WhatsApp</bdi> و <bdi>Instagram</bdi> و <bdi>Messenger</bdi> وشات موقعك. بيفهم الفويس نوتس، وبيسأل الأسئلة الصح، وبيتمّم الخطوة الجاية: حجز، أو تسجيل، أو أوردر، أو طلب لفريقك.</p>
            <p class="wg-says"><img src="/media/img/genu-avatar.svg" alt="" width="32" height="32"><span><b>جينـو:</b> عميل بعت الساعة اتنين بالليل؟ عارف رد عليه وحجزله.</span></p>
          </div>
          <div class="wg-media">
<div class="mk mk-phone" dir="rtl" lang="ar" role="img" aria-label="محادثة WhatsApp بيرد عليها الموظف وبيحجز ميعاد">
  <div class="mk-phone__screen">
    <div class="mk-phone__status"><span>2:15</span></div>
    <div class="mk-phone__head"><i class="mk-ic mk-ic--back"></i><span class="mk-avatar mk-avatar--green">م</span><div class="mk-phone__who"><b>منى عادل</b><span><i class="mk-ic mk-ic--whatsapp"></i><bdi>WhatsApp · +20 100 000 0000</bdi></span></div></div>
    <div class="mk-takeover"><span class="mk-takeover__state"><i class="mk-ic mk-ic--sparkle"></i>الـ AI ماسك المحادثة دي</span><span class="mk-takeover__btn"><i class="mk-ic mk-ic--pause"></i>استلم المحادثة</span></div>
    <div class="mk-chat">
      <span class="mk-chat__day">النهارده</span>
      <div class="mk-msg mk-msg--in">أهلًا، عندكم ميعاد الأسبوع ده؟<span class="mk-msg__meta"><bdi>2:14</bdi> ص</span></div>
      <div class="mk-msg mk-msg--out"><span class="mk-msg__by"><i class="mk-ic mk-ic--sparkle"></i>عارف · <bdi>AI</bdi></span>أهلًا يا منى! عندنا يوم الخميس الساعة <bdi>6:30</bdi> أو <bdi>7:15</bdi> بالليل. أنهي يناسبك؟<span class="mk-msg__meta"><bdi>2:14</bdi> ص <i class="mk-ic mk-ic--checks"></i></span></div>
      <div class="mk-msg mk-msg--in mk-voice">
        <div class="mk-voice__row"><span class="mk-voice__play"><i class="mk-ic mk-ic--play"></i></span><span class="mk-voice__wave"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></span><span class="mk-voice__len">0:07</span></div>
        <div class="mk-voice__text"><b><i class="mk-ic mk-ic--mic"></i>الفويس نوت مكتوب</b>أيوه، الخميس <bdi>6:30</bdi> لو سمحت.</div>
        <span class="mk-msg__meta"><bdi>2:15</bdi> ص</span>
      </div>
      <div class="mk-msg mk-msg--out"><span class="mk-msg__by"><i class="mk-ic mk-ic--sparkle"></i>عارف · <bdi>AI</bdi></span>تمام! حجزتلك يوم الخميس الساعة <bdi>6:30</bdi> بالليل.<span class="mk-msg__meta"><bdi>2:15</bdi> ص <i class="mk-ic mk-ic--checks"></i></span></div>
      <div class="mk-meeting">
        <div class="mk-meeting__top"><span class="mk-meeting__ic"><i class="mk-ic mk-ic--calendar"></i></span><div><div class="mk-meeting__title">الميعاد اتأكد</div><div class="mk-meeting__when">الخميس 14 يناير · <bdi>6:30</bdi> م</div></div></div>
        <div class="mk-meeting__rows"><span><i class="mk-ic mk-ic--check"></i>اتضاف على <bdi>Google Calendar</bdi></span><span><i class="mk-ic mk-ic--check"></i>التأكيد اتبعت على <bdi>WhatsApp</bdi></span></div>
      </div>
    </div>
    <div class="mk-phone__compose">الـ <bdi>AI</bdi> ماسك المحادثة دي. استلمها عشان ترد بنفسك.</div>
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
<div class="mk mk-card" dir="rtl" lang="ar" role="img" aria-label="المتابعات لعميل ما ردّش">
  <div class="mk-card__head"><div class="mk-card__title"><i class="mk-ic mk-ic--repeat"></i>المتابعات · مهتم</div><span class="mk-chip mk-chip--green"><i class="mk-dot"></i>شغالة</span></div>
  <ol class="mk-timeline">
    <li class="mk-step is-sent"><div class="mk-step__head"><b>المتابعة 1</b><span class="mk-step__wait">بعد 3 ساعات</span><span class="mk-status mk-status--sent">اتبعتت</span></div><p class="mk-step__msg">أهلًا يا كريم، لسه حابب تحجز الاستشارة؟ عندنا مواعيد الأسبوع ده.</p></li>
    <li class="mk-step is-scheduled"><div class="mk-step__head"><b>المتابعة 2</b><span class="mk-step__wait">بعد 24 ساعة</span><span class="mk-status mk-status--scheduled">متحددة</span></div><p class="mk-step__msg">عندنا ميعادين فاضيين يوم الخميس. أحجزلك واحد؟</p></li>
    <li class="mk-step mk-step--end"><div class="mk-step__head"><i class="mk-ic mk-ic--arrow"></i>مفيش رد بعد آخر متابعة: تتنقل لـ <span class="mk-stage mk-stage--red mk-stage--sm">ضائعة</span></div></li>
  </ol>
</div>
          </div>
        </li>

        <li class="wg-beat" data-wg-beat="5" data-say="وإنت شايف كل محادثة، وتستلم أي محادثة بضغطة. والـ account manager بيراجع النتايج معاك كل شهر.">
          <div class="wg-beat-copy">
            <span class="wg-num">5</span>
            <h3>إنت ماسك الدفة، وإحنا بنطوّر باستمرار</h3>
            <p>كل المحادثات في الـ inbox. تستلم أي محادثة بضغطة وترجّعها للموظف بعدها، حتى من تطبيق الموبايل. والـ account manager بيراجع النتايج معاك كل شهر. وروز بتجاوب على أسئلتك عن محادثات وجروبات فريقك على <bdi>WhatsApp</bdi>، وبتبعتلك التقارير اللي حددت مواعيدها، من <bdi>Claude</bdi> أو <bdi>ChatGPT</bdi>.</p>
            <p class="wg-says"><img src="/media/img/genu-avatar.svg" alt="" width="32" height="32"><span><b>جينـو:</b> وإنت شايف كل محادثة، وتستلم أي محادثة بضغطة. والـ account manager بيراجع النتايج معاك كل شهر.</span></p>
          </div>
          <div class="wg-media wg-media--pair">
<div class="mk mk-phone" dir="rtl" lang="ar" role="img" aria-label="حد من الفريق استلم المحادثة">
  <div class="mk-phone__screen">
    <div class="mk-phone__status"><span>9:41</span></div>
    <div class="mk-phone__head"><i class="mk-ic mk-ic--back"></i><span class="mk-avatar mk-avatar--amber">ك</span><div class="mk-phone__who"><b>كريم سعيد</b><span><i class="mk-ic mk-ic--whatsapp"></i><bdi>WhatsApp · +20 100 000 0000</bdi></span></div></div>
    <div class="mk-takeover mk-takeover--human"><span class="mk-takeover__state"><i class="mk-ic mk-ic--user"></i>إنت ماسك المحادثة دي</span><span class="mk-takeover__btn"><i class="mk-ic mk-ic--sparkle"></i>رجّعها للـ <bdi>AI</bdi></span></div>
    <div class="mk-chat">
      <div class="mk-msg mk-msg--in">ينفع آخد خصم للعيلة كلها؟<span class="mk-msg__meta"><bdi>11:02</bdi> ص</span></div>
      <div class="mk-msg mk-msg--out">أكيد يا كريم! هجهزلك عرض للعيلة النهارده.<span class="mk-msg__meta"><bdi>11:04</bdi> ص <i class="mk-ic mk-ic--checks"></i></span></div>
    </div>
    <div class="mk-phone__compose mk-phone__compose--input"><span>اكتب رسالة…</span><span class="mk-phone__send"><i class="mk-ic mk-ic--send"></i></span></div>
  </div>
</div>
<div class="mk mk-card wg-assist" dir="rtl" lang="ar" role="img" aria-label="تقرير روز الأسبوعي المتحدد، في Claude أو ChatGPT المتصل بجينـو دو (مثال افتراضي)">
  <div class="mk-card__head"><div class="mk-card__title"><i class="mk-ic mk-ic--sparkle"></i><bdi>Claude</bdi> أو <bdi>ChatGPT</bdi> · متصل بجينـو دو</div></div>
  <div class="mk-review__head"><img src="/media/img/roz-v2.svg" alt="" width="44" height="48"><div class="mk-review__who"><b>روز · التقرير الأسبوعي</b><span>الاتنين <bdi>9:00</bdi> ص · رقمين للمبيعات وجروب عملاء</span></div><span class="mk-chip mk-chip--pink"><i class="mk-ic mk-ic--clock"></i>متحدد</span></div>
  <ul class="wg-report">
    <li><b>2</b><span>عملاء استنوا أكتر من 3 ساعات على ما حد رد</span></li>
    <li><b>1</b><span>خطة تقسيط اتوعد بيها وما اتبعتتش</span></li>
    <li><b>14</b><span>عميل سألوا عن الشهادات: إجابة نضيفها لمعلومات عدنان</span></li>
  </ul>
  <div class="mk-review__foot"><i class="mk-ic mk-ic--note"></i>مثال افتراضي</div>
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
      <h2>جينـو صغير، بس بيعبّر عن كتير.</h2>
      <p class="lead">عملنا جينـو علشان يشرح من غير تعقيد: وشّ بالبكسل بيضحك ويفكّر، وإيدين بيشاور بيها على اللي محتاج تشوفه بالظبط.</p>
      <ul class="wg-traits">
        <li><span class="wg-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><path d="M9 9h.01M15 9h.01"/></svg></span><div><b>تعبيرات بتقولك الحالة</b><p>لما تشوف جينـو بيفكّر، يبقى فيه شغل بيتعمل. ولما يحتفل، يبقى المهمة خلصت.</p></div></li>
        <li><span class="wg-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="13.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="12.5" r="2.5"/><circle cx="8.5" cy="7.5" r="2.5"/><circle cx="6.5" cy="13.5" r="2.5"/><path d="M12 22a10 10 0 1 1 10-10c0 2-1.5 3-3 3h-2a2 2 0 0 0-1 3.7A2 2 0 0 1 12 22z"/></svg></span><div><b>لكل موظف لونه</b><p class="wg-swatches"><span><i style="--c:#6468f0"></i>جينـو نيلي</span><span><i style="--c:#e0a23a"></i>عارف كهرماني</span><span><i style="--c:#52a7cc"></i>عدنان أزرق</span><span><i style="--c:#e86fa6"></i>روز وردي، وعلى صدرها شارة دايرة</span></p></div></li>
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
  <p class="lead">احجز جلسة تخطيط: بنسمع منك، ونخطط فريقك معاك، ونبنيه على شركتك إنت. أو ابدأ مجانًا بنفسك.</p>
  <div class="ctaf-cta"><a href="/contact" class="btn btn-primary btn-lg">احجز جلسة تخطيط</a><a href="https://app.genudo.ai/auth/register" class="ctaf-sec">ابدأ مجانًا <svg class="wg-flip" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a></div>
  <div class="ctaf-trust"><span class="live-dot"></span><bdi>WhatsApp</bdi><span class="sep"></span><bdi>Instagram</bdi><span class="sep"></span><bdi>Messenger</bdi><span class="sep"></span>شات الموقع</div>
</div></div></section>

</div>`;
export default html;
