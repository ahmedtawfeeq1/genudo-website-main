// / (home) — value-led rewrite (AR, Egyptian). See docs/website/BUILD-BRIEF.md.
// Primary version: original Egyptian copy. Mockups come from the shared kit
// (src/app/[locale]/kit-preview/kit-snippets.ts, styles in src/styles/mockups.css);
// page styles live in src/styles/pages/home.css, every selector under .pg-home.
const html = `<div class="pg-home">

<!-- ══ HERO ══ -->
<section class="hm-hero" aria-labelledby="hm-hero-title">
  <div class="container hm-hero__in">
    <div class="hm-hero__copy">
      <p class="hm-kicker"><span class="live-dot" aria-hidden="true"></span><span>موظفين بالذكاء الاصطناعي على <bdi>WhatsApp</bdi> و <bdi>Instagram</bdi> و <bdi>Messenger</bdi> وموقعك</span></p>
      <h1 class="hm-h1" id="hm-hero-title">ولا عميل يستنى.<br><span class="hm-accent">ولا فرصة تضيع.</span></h1>
      <p class="hm-lead">جينـو دو بيديك فريق موظفين بالذكاء الاصطناعي بيردوا على عملائك أول ما يكتبوا، وبيتابعوا اللي سكت، وبيتمّموا الخطوة الجاية: حجز، أو تسجيل، أو أوردر… بالليل وبالنهار. وإنت متحكم في كل التفاصيل من موبايلك.</p>
      <div class="hm-cta">
        <a href="/contact" class="btn btn-primary btn-lg">احجز جلسة تخطيط</a>
        <a href="https://app.genudo.ai/auth/register" class="btn btn-ghost btn-lg">ابدأ مجانًا</a>
      </div>
      <div class="hm-team">
        <span class="hm-team__avs" aria-hidden="true"><img src="/media/img/aaref.svg" alt="" width="40" height="44"><img src="/media/img/adnan.svg" alt="" width="40" height="44"><img src="/media/img/roz-v2.svg" alt="" width="40" height="44"></span>
        <span>عارف وعدنان وروز جاهزين ينضموا لفريقك</span>
      </div>
    </div>

    <div class="hm-hero__visual">
      <div class="hm-glow" aria-hidden="true"></div>
      <div class="mk mk-phone" dir="rtl" lang="ar" role="img" aria-label="محادثة WhatsApp الساعة اتنين بالليل: عارف بيرد على العميلة ويحجزلها ميعاد">
        <div class="mk-phone__screen">
          <div class="mk-phone__status"><span>2:16</span></div>
          <div class="mk-phone__head"><i class="mk-ic mk-ic--back"></i><span class="mk-avatar mk-avatar--green">م</span><div class="mk-phone__who"><b>منى عادل</b><span><i class="mk-ic mk-ic--whatsapp"></i><bdi>WhatsApp · +20 100 000 0000</bdi></span></div></div>
          <div class="mk-takeover"><span class="mk-takeover__state"><i class="mk-ic mk-ic--sparkle"></i>الـ AI ماسك المحادثة دي</span><span class="mk-takeover__btn"><i class="mk-ic mk-ic--pause"></i>تدخّل بشري</span></div>
          <div class="mk-chat">
            <span class="mk-chat__day">اليوم</span>
            <div class="mk-msg mk-msg--in">أهلًا، عندكم تبييض أسنان؟<span class="mk-msg__meta"><bdi>2:14</bdi> ص</span></div>
            <div class="mk-msg mk-msg--out"><span class="mk-msg__by"><i class="mk-ic mk-ic--sparkle"></i>عارف · <bdi>AI</bdi></span>أهلًا يا منى! أيوه، التبييض بياخد حوالي ساعة ومعاه زيارة متابعة. تحبي نحجزلك ميعاد الأسبوع ده؟<span class="mk-msg__meta"><bdi>2:14</bdi> ص <i class="mk-ic mk-ic--checks"></i></span></div>
            <div class="mk-msg mk-msg--in mk-voice">
              <div class="mk-voice__row"><span class="mk-voice__play"><i class="mk-ic mk-ic--play"></i></span><span class="mk-voice__wave"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></span><span class="mk-voice__len">0:09</span></div>
              <div class="mk-voice__text"><b><i class="mk-ic mk-ic--mic"></i>الفويس نوت مكتوب</b>أيوه ياريت، يوم الخميس بعد الساعة 6 لو ينفع.</div>
              <span class="mk-msg__meta"><bdi>2:15</bdi> ص</span>
            </div>
            <div class="mk-msg mk-msg--out"><span class="mk-msg__by"><i class="mk-ic mk-ic--sparkle"></i>عارف · <bdi>AI</bdi></span>تمام! حجزتلك يوم الخميس الساعة <bdi>6:30</bdi> مساءً.<span class="mk-msg__meta"><bdi>2:15</bdi> ص <i class="mk-ic mk-ic--checks"></i></span></div>
            <div class="mk-meeting">
              <div class="mk-meeting__top"><span class="mk-meeting__ic"><i class="mk-ic mk-ic--calendar"></i></span><div><div class="mk-meeting__title">الميعاد اتأكد</div><div class="mk-meeting__when">الخميس 14 يناير · <bdi>6:30</bdi> م</div></div></div>
              <div class="mk-meeting__rows"><span><i class="mk-ic mk-ic--check"></i>اتضاف على <bdi>Google Calendar</bdi></span><span><i class="mk-ic mk-ic--check"></i>التأكيد اتبعت على <bdi>WhatsApp</bdi></span></div>
            </div>
          </div>
          <div class="mk-phone__compose">الـ AI ماسك المحادثة دي. دوس «تدخّل بشري» عشان ترد بنفسك.</div>
        </div>
      </div>
      <div class="hm-float hm-float--a" aria-hidden="true"><img src="/media/img/aaref.svg" alt="" width="34" height="37"><div><b>عارف ردّ على منى</b><span>الساعة <bdi>2:14</bdi> بالليل</span></div></div>
      <div class="hm-float hm-float--b" aria-hidden="true"><span class="hm-float__ic"><i class="mk-ic mk-ic--calendar"></i></span><div><b>حجز جديد</b><span>وإنت نايم</span></div></div>
      <p class="hm-caption">مثال افتراضي</p>
    </div>
  </div>
</section>

<!-- ══ CUSTOMERS (logos unchanged from the previous home) ══ -->
<section class="hm-logos" aria-label="عملاء جينـو دو">
  <div class="container">
    <p class="hm-logos__t">شركات في مصر والمنطقة العربية شغالة بجينـو دو: منصات تعليم، وعيادات، ووكالات، وجيمات، وغيرهم</p>
  </div>
  <div class="marquee">
    <div class="marquee-track">
      <span class="mq-logo"><img src="https://www.google.com/s2/favicons?domain=thepalmoasis.net&sz=128" alt="" onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'mq-fb',textContent:'P'}))"><span>The Palm Oasis</span></span>
      <span class="mq-logo"><img src="https://www.google.com/s2/favicons?domain=propertyhub.site&sz=128" alt="" onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'mq-fb',textContent:'P'}))"><span>Property Hub</span></span>
      <span class="mq-logo"><img src="https://www.google.com/s2/favicons?domain=restatex.com&sz=128" alt="" onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'mq-fb',textContent:'R'}))"><span>Restatex</span></span>
      <span class="mq-logo wide"><img src="/logos/la-casa.png" alt="La Casa"><span>La Casa</span></span>
      <span class="mq-logo wide"><img src="/logos/roshda.png" alt="Roshda"><span>Roshda</span></span>
      <span class="mq-logo"><img src="https://www.google.com/s2/favicons?domain=memphistours.com&sz=128" alt="" onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'mq-fb',textContent:'M'}))"><span>Memphis Saharaa</span></span>
      <span class="mq-logo"><img src="https://www.google.com/s2/favicons?domain=majestic.bio&sz=128" alt="" onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'mq-fb',textContent:'M'}))"><span>Majestic Biopharma</span></span>
      <span class="mq-logo"><img src="https://www.google.com/s2/favicons?domain=consortiolawfirm.com&sz=128" alt="" onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'mq-fb',textContent:'C'}))"><span>Consortio Law</span></span>
      <span class="mq-logo"><img src="https://www.google.com/s2/favicons?domain=hpaconsultant.com&sz=128" alt="" onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'mq-fb',textContent:'H'}))"><span>HPA</span></span>
      <span class="mq-logo"><img src="https://www.google.com/s2/favicons?domain=cutting-edge.digital&sz=128" alt="" onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'mq-fb',textContent:'C'}))"><span>CuttingEdge</span></span>
      <span class="mq-logo"><img src="https://www.google.com/s2/favicons?domain=arabicss.com&sz=128" alt="" onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'mq-fb',textContent:'A'}))"><span>Arabicss</span></span>
      <span class="mq-logo"><img src="https://www.google.com/s2/favicons?domain=icancoachyou.online&sz=128" alt="" onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'mq-fb',textContent:'i'}))"><span>iCanCoachYou</span></span>
      <span class="mq-logo"><img src="https://www.google.com/s2/favicons?domain=aos.fit&sz=128" alt="" onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'mq-fb',textContent:'A'}))"><span>AOS</span></span>
      <span class="mq-logo"><img src="https://www.google.com/s2/favicons?domain=wellspringegypt.com&sz=128" alt="" onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'mq-fb',textContent:'W'}))"><span>Wellspring</span></span>
      <span class="mq-logo" aria-hidden="true"><img src="https://www.google.com/s2/favicons?domain=thepalmoasis.net&sz=128" alt="" onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'mq-fb',textContent:'P'}))"><span>The Palm Oasis</span></span>
      <span class="mq-logo" aria-hidden="true"><img src="https://www.google.com/s2/favicons?domain=propertyhub.site&sz=128" alt="" onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'mq-fb',textContent:'P'}))"><span>Property Hub</span></span>
      <span class="mq-logo" aria-hidden="true"><img src="https://www.google.com/s2/favicons?domain=restatex.com&sz=128" alt="" onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'mq-fb',textContent:'R'}))"><span>Restatex</span></span>
      <span class="mq-logo wide" aria-hidden="true"><img src="/logos/la-casa.png" alt=""><span>La Casa</span></span>
      <span class="mq-logo wide" aria-hidden="true"><img src="/logos/roshda.png" alt=""><span>Roshda</span></span>
      <span class="mq-logo" aria-hidden="true"><img src="https://www.google.com/s2/favicons?domain=memphistours.com&sz=128" alt="" onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'mq-fb',textContent:'M'}))"><span>Memphis Saharaa</span></span>
      <span class="mq-logo" aria-hidden="true"><img src="https://www.google.com/s2/favicons?domain=majestic.bio&sz=128" alt="" onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'mq-fb',textContent:'M'}))"><span>Majestic Biopharma</span></span>
      <span class="mq-logo" aria-hidden="true"><img src="https://www.google.com/s2/favicons?domain=consortiolawfirm.com&sz=128" alt="" onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'mq-fb',textContent:'C'}))"><span>Consortio Law</span></span>
      <span class="mq-logo" aria-hidden="true"><img src="https://www.google.com/s2/favicons?domain=hpaconsultant.com&sz=128" alt="" onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'mq-fb',textContent:'H'}))"><span>HPA</span></span>
      <span class="mq-logo" aria-hidden="true"><img src="https://www.google.com/s2/favicons?domain=cutting-edge.digital&sz=128" alt="" onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'mq-fb',textContent:'C'}))"><span>CuttingEdge</span></span>
      <span class="mq-logo" aria-hidden="true"><img src="https://www.google.com/s2/favicons?domain=arabicss.com&sz=128" alt="" onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'mq-fb',textContent:'A'}))"><span>Arabicss</span></span>
      <span class="mq-logo" aria-hidden="true"><img src="https://www.google.com/s2/favicons?domain=icancoachyou.online&sz=128" alt="" onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'mq-fb',textContent:'i'}))"><span>iCanCoachYou</span></span>
      <span class="mq-logo" aria-hidden="true"><img src="https://www.google.com/s2/favicons?domain=aos.fit&sz=128" alt="" onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'mq-fb',textContent:'A'}))"><span>AOS</span></span>
      <span class="mq-logo" aria-hidden="true"><img src="https://www.google.com/s2/favicons?domain=wellspringegypt.com&sz=128" alt="" onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'mq-fb',textContent:'W'}))"><span>Wellspring</span></span>
    </div>
  </div>
</section>

<!-- ══ THE 2 A.M. PROBLEM ══ -->
<section class="hm-night" aria-labelledby="hm-night-title">
  <div class="container">
    <div class="hm-night__head">
      <div class="hm-clock" aria-hidden="true"><bdi>2:00</bdi><small>بالليل</small></div>
      <h2 class="hm-h2" id="hm-night-title">سؤال سريع… مين بيرد على عملائك الساعة اتنين بالليل؟</h2>
      <p class="hm-sub">عملاؤك بيكلموك على <bdi>WhatsApp</bdi> و <bdi>Instagram</bdi> و <bdi>Messenger</bdi> وموقعك، في أي وقت. وكل عميل بيستنى… بيروح لغيرك.</p>
    </div>
    <div class="hm-pains">
      <article class="hm-pain">
        <span class="hm-pain__ic"><i class="mk-ic mk-ic--moon"></i></span>
        <h3>الرسالة بتستنى للصبح</h3>
        <p>العميل سأل بالليل، والرد وصله تاني يوم الضهر. ساعتها كان اشترى من حد تاني.</p>
      </article>
      <article class="hm-pain">
        <span class="hm-pain__ic"><i class="mk-ic mk-ic--repeat"></i></span>
        <h3>اللي سكت محدش بيكلمه تاني</h3>
        <p>عميل طلب الأسعار وما ردّش. فريقك مشغول، والمتابعة بتتنسي، والفرصة بتبرد.</p>
      </article>
      <article class="hm-pain">
        <span class="hm-pain__ic"><i class="mk-ic mk-ic--search"></i></span>
        <h3>مش شايف بيحصل إيه في المحادثات</h3>
        <p>حتى في وقت الشغل، إنت مش شايف فريقك بيرد إزاي. ردود متأخرة، وعروض أسعار محدش تابعها، وبتعرف لما الوقت يكون فات.</p>
      </article>
    </div>
    <p class="hm-night__turn">علشان كده، مع <b>جينـو دو</b> بتبني فريق عمل كامل بالذكاء الاصطناعي.</p>
  </div>
</section>

<!-- ══ FIVE VALUE PILLARS ══ -->
<section class="hm-pillars" aria-labelledby="hm-pillars-title">
  <div class="container">
    <div class="hm-head">
      <p class="hm-eyebrow">اللي بيتغيّر في شركتك</p>
      <h2 class="hm-h2" id="hm-pillars-title">خمس تغييرات من أول يوم لفريقك الجديد</h2>
    </div>

    <!-- 1 · every customer answered -->
    <article class="hm-pillar">
      <div class="hm-pillar__copy">
        <span class="hm-num">01</span>
        <h3>كل عميل بيلاقي رد، بالليل وبالنهار</h3>
        <p>مفيش رسالة بتستنى للصبح، ومفيش عميل محتمل بيبرد. الرد بيوصل على طول على <bdi>WhatsApp</bdi> و <bdi>Instagram</bdi> و <bdi>Messenger</bdi> ودردشة موقعك. واللي ما ردّش؟ المتابعة مش بتنسى.</p>
        <p class="hm-how">إزاي بنعملها</p>
        <ul class="hm-proof">
          <li><i class="mk-ic mk-ic--check"></i><span>رد فوري على كل قنواتك، من مكان واحد</span></li>
          <li><i class="mk-ic mk-ic--check"></i><span>متابعات لكل مرحلة: رسالة بعد 3 ساعات، وتانية بعد يوم، ومعاها فيديو أو ملف لو حبيت</span></li>
          <li><i class="mk-ic mk-ic--check"></i><span>لو التسلسل خلص من غير رد، الفرصة بتتسجل ضائعة، فأرقامك بتفضل حقيقية</span></li>
        </ul>
        <a class="hm-link" href="/how-it-works#followups">شوف المتابعات بتشتغل إزاي<i class="mk-ic mk-ic--arrow"></i></a>
      </div>
      <div class="hm-stage">
        <div class="mk mk-card" dir="rtl" lang="ar" role="img" aria-label="تسلسل المتابعات لعميل ما ردّش">
          <div class="mk-card__head"><div class="mk-card__title"><i class="mk-ic mk-ic--repeat"></i>المتابعات · مهتم</div><span class="mk-chip mk-chip--green"><i class="mk-dot"></i>نشطة</span></div>
          <ol class="mk-timeline">
            <li class="mk-step is-sent"><div class="mk-step__head"><b>المتابعة 1</b><span class="mk-step__wait">بعد 3 ساعات</span><span class="mk-status mk-status--sent">مُرسلة</span></div><p class="mk-step__msg">أهلًا يا كريم، دي قايمة الأسعار اللي طلبتها. عندك أي سؤال؟</p></li>
            <li class="mk-step is-scheduled"><div class="mk-step__head"><b>المتابعة 2</b><span class="mk-step__wait">بعد 24 ساعة</span><span class="mk-status mk-status--scheduled">مجدولة</span></div><p class="mk-step__msg">عندنا ميعادين فاضيين يوم الخميس. أحجزلك واحد؟</p></li>
            <li class="mk-step mk-step--end"><div class="mk-step__head"><i class="mk-ic mk-ic--arrow"></i>مفيش رد بعد آخر متابعة: تتنقل لـ <span class="mk-stage mk-stage--red mk-stage--sm">ضائعة</span></div></li>
          </ol>
        </div>
      </div>
    </article>

    <!-- 2 · conversations that move to a sale -->
    <article class="hm-pillar hm-pillar--flip">
      <div class="hm-pillar__copy">
        <span class="hm-num">02</span>
        <h3>محادثات بتوصل لبيع، مش دردشة وخلاص</h3>
        <p>عملاء مؤهَّلين، وحجوزات، وتسجيلات، وأوردرات، مش كلام كتير وخلاص. كل فرصة بتتنقل من مرحلة للتانية حسب قواعد المراحل اللي إنت بتحددها، لحد ما العميل ياخد قراره، والموظف بيعمل الشغل اللي بعد المحادثة كمان.</p>
        <p class="hm-how">إزاي بنعملها</p>
        <ul class="hm-proof">
          <li><i class="mk-ic mk-ic--check"></i><span>مراحل بتحرّك كل فرصة لقدّام حسب قواعدك: مهتم، حجز موعد، مكتسبة</span></li>
          <li><i class="mk-ic mk-ic--check"></i><span>بيحجز الميعاد، أو بيسجّل العميل، أو بيسجّل الأوردر، وبيبعت التأكيد على <bdi>WhatsApp</bdi></span></li>
          <li><i class="mk-ic mk-ic--check"></i><span>بيحدّث الـ <bdi>CRM</bdi> أول ما العميل يبقى جاهز، وبيسجّل البيانات اللي جمعها من المحادثة</span></li>
        </ul>
        <a class="hm-link" href="/how-it-works#pipelines">شوف إزاي الفرصة بتتحرك لحد البيع<i class="mk-ic mk-ic--arrow"></i></a>
      </div>
      <div class="hm-stage">
        <div class="mk mk-board" dir="rtl" lang="ar" role="img" aria-label="لوحة المسار: الفرص بتتنقل من عميل جديد لحد مكتسبة">
          <div class="mk-board__cols">
            <div class="mk-col">
              <div class="mk-col__head"><span class="mk-stage">عميل محتمل جديد</span><span class="mk-col__count">16 فرصة</span></div>
              <div class="mk-opp mk-opp--new">
                <div class="mk-opp__top"><span class="mk-avatar mk-avatar--sm mk-avatar--green">م</span><div class="mk-opp__who"><b>منى عادل</b><span class="mk-opp__ch"><i class="mk-ic mk-ic--whatsapp"></i>WhatsApp</span></div><span class="mk-opp__time">دلوقتي</span></div>
                <p class="mk-opp__msg">أهلًا، عندكم تبييض أسنان؟</p>
              </div>
              <div class="mk-opp">
                <div class="mk-opp__top"><span class="mk-avatar mk-avatar--sm mk-avatar--blue">ع</span><div class="mk-opp__who"><b>عمر حسن</b><span class="mk-opp__ch"><i class="mk-ic mk-ic--whatsapp"></i>WhatsApp</span></div><span class="mk-opp__time"><bdi>2:14</bdi> ص</span></div>
                <p class="mk-opp__msg">إنتو شغالين يوم الجمعة؟</p>
              </div>
            </div>
            <div class="mk-col">
              <div class="mk-col__head"><span class="mk-stage mk-stage--indigo">مهتم</span><span class="mk-col__count">6 فرص</span></div>
              <div class="mk-opp">
                <div class="mk-opp__top"><span class="mk-avatar mk-avatar--sm mk-avatar--amber">ك</span><div class="mk-opp__who"><b>كريم سعيد</b><span class="mk-opp__ch"><i class="mk-ic mk-ic--whatsapp"></i>WhatsApp</span></div><span class="mk-opp__time">من ساعة</span></div>
                <p class="mk-opp__msg">ممكن تبعتلي قايمة الأسعار؟</p>
                <div class="mk-opp__tags"><span class="mk-chip mk-chip--amber"><i class="mk-ic mk-ic--repeat"></i>المتابعة 1 · مُرسلة</span></div>
              </div>
            </div>
            <div class="mk-col">
              <div class="mk-col__head"><span class="mk-stage mk-stage--violet">حجز موعد</span><span class="mk-col__count">3 فرص</span></div>
              <div class="mk-opp">
                <div class="mk-opp__top"><span class="mk-avatar mk-avatar--sm mk-avatar--pink">س</span><div class="mk-opp__who"><b>سارة كمال</b><span class="mk-opp__ch"><i class="mk-ic mk-ic--whatsapp"></i>WhatsApp</span></div><span class="mk-opp__time">من 5 دقايق</span></div>
                <p class="mk-opp__msg">الخميس بعد 6 يناسبني.</p>
                <div class="mk-opp__tags"><span class="mk-chip mk-chip--indigo"><i class="mk-ic mk-ic--calendar"></i>الخميس <bdi>6:30</bdi> م</span></div>
              </div>
            </div>
            <div class="mk-col">
              <div class="mk-col__head"><span class="mk-stage mk-stage--green">مكتسبة</span><span class="mk-col__count">فرصة واحدة</span></div>
              <div class="mk-opp">
                <div class="mk-opp__top"><span class="mk-avatar mk-avatar--sm mk-avatar--violet">ن</span><div class="mk-opp__who"><b>نور إيهاب</b><span class="mk-opp__ch"><i class="mk-ic mk-ic--whatsapp"></i>WhatsApp</span></div><span class="mk-opp__time">الاثنين</span></div>
                <p class="mk-opp__msg">نشوفكم يوم الاتنين!</p>
                <div class="mk-opp__tags"><span class="mk-chip mk-chip--green"><i class="mk-ic mk-ic--check"></i>الميعاد اتحجز</span></div>
              </div>
            </div>
          </div>
        </div>
        <p class="hm-caption">مثال افتراضي</p>
      </div>
    </article>

    <!-- 3 · predictable, capped cost -->
    <article class="hm-pillar">
      <div class="hm-pillar__copy">
        <span class="hm-num">03</span>
        <h3>تكلفة معروفة… وليها سقف</h3>
        <p>هتعرف كل رد وكل نتيجة بتكلفك كام. كل رسالة بتروح لأوفر موديل يقدر يرد عليها كويس، وإنت بتحط حد أقصى للصرف على كل محادثة… لو وصله، الـ AI بيقف ويحوّل المحادثة لفريقك.</p>
        <p class="hm-how">إزاي بنعملها</p>
        <ul class="hm-proof">
          <li><i class="mk-ic mk-ic--check"></i><span>الرسايل البسيطة بتروح لموديلات أرخص، والصعبة بس هي اللي بتاخد الموديل الأقوى</span></li>
          <li><i class="mk-ic mk-ic--check"></i><span>حد أقصى للصرف على كل محادثة، ولما يوصله الـ AI بيقف ويحوّل المحادثة لفريقك</span></li>
          <li><i class="mk-ic mk-ic--check"></i><span>تكلفة كل رد وكل مرحلة قدّامك على الـ <bdi>dashboard</bdi></span></li>
        </ul>
        <a class="hm-link" href="/how-it-works#models">شوف إزاي التكلفة بتفضل تحت السيطرة<i class="mk-ic mk-ic--arrow"></i></a>
      </div>
      <div class="hm-stage hm-stage--stack">
        <div class="mk mk-card" dir="rtl" lang="ar" role="img" aria-label="التوجيه الذكي: كل رسالة بتروح للموديل المناسب لصعوبتها">
          <div class="mk-card__head"><div class="mk-card__title"><i class="mk-ic mk-ic--route"></i>التوجيه الذكي</div><span class="mk-chip mk-chip--green"><i class="mk-dot"></i>مفعّل</span></div>
          <div class="mk-tiers">
            <div class="mk-tier"><div class="mk-tier__head"><span class="mk-tier__name">بسيطة</span></div><p class="mk-tier__eg">«بتفتحوا الساعة كام؟»</p><div class="mk-tier__model"><i class="mk-ic mk-ic--bolt"></i>نموذج سريع</div><div class="mk-bar"><i style="--w:68%"></i></div><span class="mk-tier__share"><bdi>68%</bdi> من الرسايل</span></div>
            <div class="mk-tier mk-tier--moderate"><div class="mk-tier__head"><span class="mk-tier__name">متوسطة</span></div><p class="mk-tier__eg">«قارنلي بين الباقتين.»</p><div class="mk-tier__model"><i class="mk-ic mk-ic--sparkle"></i>نموذج متوازن</div><div class="mk-bar"><i style="--w:26%"></i></div><span class="mk-tier__share"><bdi>26%</bdi> من الرسايل</span></div>
            <div class="mk-tier mk-tier--complex"><div class="mk-tier__head"><span class="mk-tier__name">معقدة</span></div><p class="mk-tier__eg">«رتبلي علاج على 3 زيارات حوالين مواعيد سفري.»</p><div class="mk-tier__model"><i class="mk-ic mk-ic--target"></i>نموذج متقدم</div><div class="mk-bar"><i style="--w:6%"></i></div><span class="mk-tier__share"><bdi>6%</bdi> من الرسايل</span></div>
          </div>
        </div>
        <div class="mk mk-card" dir="rtl" lang="ar" role="img" aria-label="حد الصرف لكل محادثة: لما يوصله الـ AI بيقف ويحوّل المحادثة للفريق">
          <div class="mk-card__head"><div class="mk-card__title"><i class="mk-ic mk-ic--wallet"></i>حد الصرف لكل محادثة</div><span class="mk-toggle is-on"></span></div>
          <div class="mk-cap__value"><b><bdi>$0.32</bdi></b> من <bdi>$0.50</bdi> اتصرفوا</div>
          <div class="mk-bar mk-bar--amber"><i style="--w:64%"></i></div>
          <p class="mk-cap__rule"><i class="mk-ic mk-ic--alert"></i><span>لما الحد يتوصل: الـ AI يقف في المحادثة دي ويحوّلها للفريق.</span></p>
        </div>
        <p class="hm-caption">مثال افتراضي</p>
      </div>
    </article>

    <!-- 4 · speaks like your customers -->
    <article class="hm-pillar hm-pillar--flip">
      <div class="hm-pillar__copy">
        <span class="hm-num">04</span>
        <h3>بيتكلم لغة عملائك، وبيرد من معلوماتك إنت</h3>
        <p>عربي العميل يحسّه قريب منه: مصري، وخليجي، وشامي… أربعتاشر لهجة عربية، أو يختار اللهجة لوحده حسب كل عميل. وبيفهم الفويس نوتس والصور كمان. وكل إجابة جاية من معلومات شركتك: خدماتك وسياساتك ومواعيدك.</p>
        <p class="hm-how">إزاي بنعملها</p>
        <ul class="hm-proof">
          <li><i class="mk-ic mk-ic--check"></i><span>14 لهجة عربية، أو تعدد اللهجات تلقائيًا</span></li>
          <li><i class="mk-ic mk-ic--check"></i><span>بيسمع الفويس نوتس وبيفهم الصور اللي العميل بيبعتها</span></li>
          <li><i class="mk-ic mk-ic--check"></i><span>بيرد من قوايم الأسعار والأسئلة المتكررة والسياسات والمواعيد اللي بتشاركها معانا</span></li>
        </ul>
        <a class="hm-link" href="/how-it-works#knowledge">شوف إزاي بيتعلّم شغلك<i class="mk-ic mk-ic--arrow"></i></a>
      </div>
      <div class="hm-stage hm-stage--stack">
        <div class="mk mk-card" dir="rtl" lang="ar" role="img" aria-label="اختيار اللهجة اللي بيتكلم بيها الموظف">
          <div class="mk-card__head"><div class="mk-card__title"><i class="mk-ic mk-ic--globe"></i>اللهجة</div></div>
          <div class="mk-chips">
            <span class="mk-chip mk-chip--opt is-on"><i class="mk-ic mk-ic--check"></i>مصرية</span><span class="mk-chip mk-chip--opt">سعودية / خليجية</span><span class="mk-chip mk-chip--opt">أردنية</span><span class="mk-chip mk-chip--opt">فلسطينية</span><span class="mk-chip mk-chip--opt">لبنانية</span><span class="mk-chip mk-chip--opt">سورية</span><span class="mk-chip mk-chip--opt">عراقية</span><span class="mk-chip mk-chip--opt">يمنية</span><span class="mk-chip mk-chip--opt">سودانية</span><span class="mk-chip mk-chip--opt">ليبية</span><span class="mk-chip mk-chip--opt">تونسية</span><span class="mk-chip mk-chip--opt">جزائرية</span><span class="mk-chip mk-chip--opt">مغربية</span><span class="mk-chip mk-chip--opt">موريتانية</span><span class="mk-chip mk-chip--opt mk-chip--auto"><i class="mk-ic mk-ic--sparkle"></i>متعددة اللهجات تلقائيًا</span>
          </div>
        </div>
        <div class="mk mk-card mk-kb" dir="rtl" lang="ar" role="img" aria-label="جدول الخدمات اللي الموظف بيرد منه">
          <div class="mk-card__head"><div class="mk-card__title"><i class="mk-ic mk-ic--book"></i>الخدمات</div><span class="mk-chip mk-chip--indigo"><i class="mk-ic mk-ic--table"></i>الـ knowledge base · <bdi>CSV</bdi></span></div>
          <table class="mk-table">
            <thead><tr><th>الخدمة</th><th>المدة</th><th class="mk-hide-sm">ملاحظات</th></tr></thead>
            <tbody>
              <tr><td>تبييض الأسنان</td><td class="mk-num">60 دقيقة</td><td class="mk-hide-sm">معاه زيارة متابعة</td></tr>
              <tr><td>كشف وتنظيف</td><td class="mk-num">30 دقيقة</td><td class="mk-hide-sm">كل 6 شهور</td></tr>
              <tr><td>استشارة تقويم</td><td class="mk-num">20 دقيقة</td><td class="mk-hide-sm">يوم الخميس بس</td></tr>
            </tbody>
          </table>
          <div class="mk-kb__ask"><i class="mk-ic mk-ic--sparkle"></i><span>الرد من الجدول دا: «التبييض بياخد حوالي ساعة، ومعاه زيارة متابعة.»</span></div>
        </div>
      </div>
    </article>

    <!-- 5 · you stay in control -->
    <article class="hm-pillar">
      <div class="hm-pillar__copy">
        <span class="hm-num">05</span>
        <h3>إنت المتحكم دايمًا، حتى وإنت برّه</h3>
        <p>كل القنوات في <bdi>inbox</bdi> واحد، وتستلم أي محادثة بضغطة واحدة من موبايلك. ترد بنفسك، وبعدين ترجّعها للـ AI يكمّل.</p>
        <p class="hm-how">إزاي بنعملها</p>
        <ul class="hm-proof">
          <li><i class="mk-ic mk-ic--check"></i><span><bdi>inbox</bdi> واحد لكل القنوات، وملاحظات خاصة لفريقك بس</span></li>
          <li><i class="mk-ic mk-ic--check"></i><span>تشغّل الـ AI أو توقّفه في أي محادثة، من تطبيق الموبايل</span></li>
          <li><i class="mk-ic mk-ic--check"></i><span>روز بتجاوب على أسئلتك عن محادثات وجروبات فريقك على <bdi>WhatsApp</bdi>، وبتبعتلك التقارير اللي حددت مواعيدها، من <bdi>Claude</bdi> أو <bdi>ChatGPT</bdi></span></li>
        </ul>
        <a class="hm-link" href="/how-it-works#channels">شوف الـ inbox<i class="mk-ic mk-ic--arrow"></i></a>
      </div>
      <div class="hm-stage">
        <div class="mk mk-phone" dir="rtl" lang="ar" role="img" aria-label="حد من الفريق استلم المحادثة من موبايله، وبضغطة يرجّعها للـ AI">
          <div class="mk-phone__screen">
            <div class="mk-phone__status"><span>9:41</span></div>
            <div class="mk-phone__head"><i class="mk-ic mk-ic--back"></i><span class="mk-avatar mk-avatar--amber">ك</span><div class="mk-phone__who"><b>كريم سعيد</b><span><i class="mk-ic mk-ic--whatsapp"></i><bdi>WhatsApp · +20 100 000 0000</bdi></span></div></div>
            <div class="mk-takeover mk-takeover--human"><span class="mk-takeover__state"><i class="mk-ic mk-ic--user"></i>إنت ماسك المحادثة دي</span><span class="mk-takeover__btn"><i class="mk-ic mk-ic--sparkle"></i>رجّعها للـ AI</span></div>
            <div class="mk-chat">
              <div class="mk-msg mk-msg--in">ينفع آخد خصم للعيلة كلها؟<span class="mk-msg__meta"><bdi>11:02</bdi> ص</span></div>
              <div class="mk-msg mk-msg--out">أكيد يا كريم! هجهزلك عرض للعيلة النهارده.<span class="mk-msg__meta"><bdi>11:04</bdi> ص <i class="mk-ic mk-ic--checks"></i></span></div>
            </div>
            <div class="mk-phone__compose mk-phone__compose--input"><span>اكتب رسالة…</span><span class="mk-phone__send"><i class="mk-ic mk-ic--send"></i></span></div>
          </div>
        </div>
      </div>
    </article>
  </div>
</section>

<!-- ══ MEET YOUR AI TEAM ══ -->
<section class="hm-team-sec" id="team" aria-labelledby="hm-team-title">
  <div class="container">
    <div class="hm-head hm-head--center">
      <p class="hm-eyebrow">فريقك الجديد</p>
      <h2 class="hm-h2" id="hm-team-title">اتعرّف على عارف وعدنان وروز</h2>
      <p class="hm-sub">كل واحد مسؤول عن جزء من رحلة العميل: عارف بيجيب العميل، وعدنان بيحافظ عليه، وروز بتوضّحلك أداء فريقك. ابدأ بالموظف اللي محتاجه أكتر، أو عيّن التلاتة.</p>
    </div>
    <div class="hm-emps">
      <a class="hm-emp" href="/sol-sales-agent">
        <div class="mk mk-emp mk-emp--aaref" dir="rtl" lang="ar">
          <img class="mk-emp__img hm-emp__portrait" src="/media/img/portraits/aaref-hero.webp" alt="عارف، موظف المبيعات بالذكاء الاصطناعي" width="448" height="640" loading="lazy">
          <div class="mk-emp__name">عارف</div>
          <span class="mk-emp__role">المبيعات</span>
          <p class="hm-emp__tag">بيرد على كل عميل محتمل في ثواني، ويتابع معاه لحد ما يتحوّل لعميل فعلي</p>
          <ul class="mk-emp__list">
            <li><i class="mk-ic mk-ic--check"></i><span>بيرد على كل استفسار، بالليل والنهار، وبلهجة العميل</span></li>
            <li><i class="mk-ic mk-ic--check"></i><span>بيأهّل العميل ويتابع معاه لحد ما ياخد قراره</span></li>
            <li><i class="mk-ic mk-ic--check"></i><span>بيتمّم الخطوة الجاية: حجز، أو تسجيل، أو أوردر، أو طلب لفريقك</span></li>
          </ul>
        </div>
        <span class="hm-emp__go">اتعرّف على عارف<i class="mk-ic mk-ic--arrow"></i></span>
      </a>
      <a class="hm-emp" href="/sol-customer-service">
        <div class="mk mk-emp mk-emp--adnan" dir="rtl" lang="ar">
          <img class="mk-emp__img hm-emp__portrait" src="/media/img/portraits/adnan-hero.webp" alt="عدنان، موظف خدمة ونجاح العملاء بالذكاء الاصطناعي" width="448" height="640" loading="lazy">
          <div class="mk-emp__name">عدنان</div>
          <span class="mk-emp__role">خدمة ونجاح العملاء</span>
          <p class="hm-emp__tag">إجابات فورية، وطلبات بتتنفّذ، وبداية صحيحة لكل عميل جديد</p>
          <ul class="mk-emp__list">
            <li><i class="mk-ic mk-ic--check"></i><span>بيجاوب من معلومات شركتك: المواعيد والأسعار والسياسات</span></li>
            <li><i class="mk-ic mk-ic--check"></i><span>بينفّذ الطلبات المتكررة حسب سياستك، في أي وقت</span></li>
            <li><i class="mk-ic mk-ic--check"></i><span>بيحوّل الحالات الصعبة لفريقك بكل التفاصيل</span></li>
          </ul>
        </div>
        <span class="hm-emp__go">اتعرّف على عدنان<i class="mk-ic mk-ic--arrow"></i></span>
      </a>
      <a class="hm-emp" href="/sol-operations">
        <div class="mk mk-emp mk-emp--roz" dir="rtl" lang="ar">
          <img class="mk-emp__img hm-emp__portrait" src="/media/img/portraits/roz-hero.webp" alt="روز، موظفة مراقبة الجودة بالذكاء الاصطناعي" width="448" height="640" loading="lazy">
          <div class="mk-emp__name">روز</div>
          <span class="mk-emp__role">مراقبة الجودة</span>
          <p class="hm-emp__tag">اسألها أي سؤال من <bdi>Claude</bdi> أو <bdi>ChatGPT</bdi>، وتقاريرك بتوصل في مواعيدها، وجاهزة في نفس اليوم</p>
          <ul class="mk-emp__list">
            <li><i class="mk-ic mk-ic--check"></i><span>بتغطي المحادثات الفردية والجروبات على أرقام <bdi>WhatsApp</bdi> الشركة</span></li>
            <li><i class="mk-ic mk-ic--check"></i><span>بتوضّحلك مين استنى، وايه اللي اتأخر، وإزاي فريقك يخدم بشكل أفضل</span></li>
            <li><i class="mk-ic mk-ic--check"></i><span>مسح كود <bdi>QR</bdi> واحد لكل رقم: من غير تجهيز ولا بناء</span></li>
          </ul>
        </div>
        <span class="hm-emp__go">اتعرّف على روز<i class="mk-ic mk-ic--arrow"></i></span>
      </a>
    </div>
    <a class="hm-genu" href="/who-is-genu">
      <img src="/media/img/genu.svg" alt="" width="64" height="70" loading="lazy">
      <span><b>وجينـو؟</b> ده دليلك: المرشد اللي بيعرّفك على فريقك وبيمشي معاك خطوة بخطوة.</span>
      <span class="hm-genu__go">مين جينـو؟<i class="mk-ic mk-ic--arrow"></i></span>
    </a>
  </div>
</section>

<!-- ══ HOW IT WORKS ══ -->
<section class="hm-steps-sec" id="how" aria-labelledby="hm-how-title">
  <div class="container hm-steps-sec__in">
    <div class="hm-steps-copy">
      <p class="hm-eyebrow">إزاي بنعيّنهم في شركتك</p>
      <h2 class="hm-h2" id="hm-how-title">بنبنيهم معاك، مش هتجهّزهم لوحدك</h2>
      <p class="hm-sub">جينـو دو مش برنامج بتشغّله وتديره لوحدك. إحنا بنشتغل مع فريقك، وبنفهم طريقة البيع والخدمة عندك، وبنبني عارف وعدنان حسب احتياجات شركتك، وبنكمّل معاك بعد التشغيل.</p>
      <ol class="hm-steps">
        <li class="hm-step">
          <span class="hm-step__n">1</span>
          <div><h3>الاستماع</h3><p>جلسة بنتعرف فيها على عملاءك وقنواتك وعروضك، وفين الفرص والوقت اللي بيضيعوا.</p></div>
        </li>
        <li class="hm-step">
          <span class="hm-step__n">2</span>
          <div><h3>التخطيط</h3><p>بنتفق معاك على مهام كل موظف، واللي هيفضل مع فريقك، والمؤشرات اللي هنتابعها. ومدة البناء بنتفق عليها في الجلسة دي.</p></div>
        </li>
        <li class="hm-step">
          <span class="hm-step__n">3</span>
          <div><h3>البناء</h3><p>الـ <bdi>automation specialist</bdi> بيبنيهم على معلومات شركتك ومراحل البيع وأدواتك.</p></div>
        </li>
        <li class="hm-step">
          <span class="hm-step__n">4</span>
          <div><h3>الإطلاق</h3><p>بنختبر سيناريوهات حقيقية مع فريقك قبل التشغيل، وكل خطوة بموافقتك.</p></div>
        </li>
        <li class="hm-step">
          <span class="hm-step__n">5</span>
          <div><h3>التطوير</h3><p>الـ <bdi>account manager</bdi> بيراجع النتايج معاك كل شهر، وبيطوّر أداءهم مع أي تغيير في شركتك.</p></div>
        </li>
      </ol>
      <a class="hm-link" href="/how-it-works#setup">شوف طريقة شغلنا معاك<i class="mk-ic mk-ic--arrow"></i></a>
    </div>
    <div class="hm-stage">
      <div class="mk mk-emp mk-emp--roz hm-roz-path" dir="rtl" lang="ar">
        <img class="mk-emp__img" src="/media/img/roz-v2.svg" alt="" width="80" height="87" loading="lazy">
        <div class="mk-emp__name">روز جاهزة في نفس اليوم</div>
        <span class="mk-emp__role">من غير بناء ولا وقت تجهيز</span>
        <ol class="mk-emp__list hm-roz-path__list">
          <li><i class="mk-ic mk-ic--user"></i><span>سجّل دخولك على حسابك في جينـو دو</span></li>
          <li><i class="mk-ic mk-ic--qr"></i><span>امسح كود <bdi>QR</bdi> من كل رقم <bdi>WhatsApp</bdi> للشركة</span></li>
          <li><i class="mk-ic mk-ic--link"></i><span>المحادثات والجروبات مرتبطة من اللحظة دي</span></li>
          <li><i class="mk-ic mk-ic--sparkle"></i><span>اسأل وحدد مواعيد التقارير في <bdi>Claude</bdi> أو <bdi>ChatGPT</bdi> المتصلين بجينـو دو</span></li>
          <li><i class="mk-ic mk-ic--grid"></i><span>ابني الـ <bdi>dashboards</bdi> اللي شركتك محتاجاها</span></li>
        </ol>
      </div>
    </div>
  </div>
</section>

<!-- ══ INDUSTRIES ══ -->
<section class="hm-ind-sec" aria-labelledby="hm-ind-title">
  <div class="container">
    <div class="hm-head">
      <p class="hm-eyebrow">لكل مجال</p>
      <h2 class="hm-h2" id="hm-ind-title">مهما كان مجالك، فيه موظف يناسبه</h2>
    </div>
    <div class="hm-inds">
      <a class="hm-ind" href="/ind-clinics"><span class="hm-ind__ic"><i class="mk-ic mk-ic--calendar"></i></span><h3>العيادات والرعاية الصحية</h3><p>المريض بياخد رد وميعاد في أي وقت، وفريق الاستقبال يرتاح من الأسئلة المتكررة عن المواعيد والأسعار.</p><span class="hm-ind__go">للعيادات<i class="mk-ic mk-ic--arrow"></i></span></a>
      <a class="hm-ind" href="/ind-elearning"><span class="hm-ind__ic"><i class="mk-ic mk-ic--book"></i></span><h3>التعليم الإلكتروني والأكاديميات</h3><p>كل سؤال عن الكورسات والمصاريف بيترد عليه، والطالب بيتوجّه للبرنامج المناسب لحد ما يسجّل.</p><span class="hm-ind__go">للأكاديميات<i class="mk-ic mk-ic--arrow"></i></span></a>
      <a class="hm-ind" href="/ind-fitness"><span class="hm-ind__ic"><i class="mk-ic mk-ic--trophy"></i></span><h3>الجيمات ومراكز اللياقة</h3><p>الحصص التجريبية والحجوزات وأسئلة الاشتراك على <bdi>WhatsApp</bdi>، وفريقك متفرّغ للأعضاء.</p><span class="hm-ind__go">للجيمات<i class="mk-ic mk-ic--arrow"></i></span></a>
      <a class="hm-ind" href="/ind-marketing"><span class="hm-ind__ic"><i class="mk-ic mk-ic--users"></i></span><h3>وكالات التسويق</h3><p>كل عميل محتمل من حملات عملائك بيلاقي رد في ساعتها، فالإعلان بيتحوّل لعملاء مؤهَّلين.</p><span class="hm-ind__go">للوكالات<i class="mk-ic mk-ic--arrow"></i></span></a>
      <a class="hm-ind" href="/ind-hospitality"><span class="hm-ind__ic"><i class="mk-ic mk-ic--globe"></i></span><h3>الضيافة والسياحة</h3><p>الضيوف بياخدوا ردود عن الحجز والأسعار والتفاصيل في أي وقت، بالعربي والإنجليزي.</p><span class="hm-ind__go">للفنادق والسياحة<i class="mk-ic mk-ic--arrow"></i></span></a>
      <a class="hm-ind" href="/ind-camps-events"><span class="hm-ind__ic"><i class="mk-ic mk-ic--flag"></i></span><h3>المعسكرات والفعاليات</h3><p>موسم التسجيل بيعدّي بهدوء: التذاكر والمواعيد وأسئلة أولياء الأمور، كلها بتترد في وقتها.</p><span class="hm-ind__go">للمعسكرات والفعاليات<i class="mk-ic mk-ic--arrow"></i></span></a>
      <a class="hm-ind" href="/ind-real-estate"><span class="hm-ind__ic"><i class="mk-ic mk-ic--grid"></i></span><h3>العقارات</h3><p>كل استفسار عن وحدة بياخد رد ومتابعة لحد زيارة الموقع، والمشتري بيفضل عارف التفاصيل بعد التعاقد.</p><span class="hm-ind__go">للعقارات<i class="mk-ic mk-ic--arrow"></i></span></a>
      <a class="hm-ind" href="/ind-ecommerce"><span class="hm-ind__ic"><i class="mk-ic mk-ic--wallet"></i></span><h3>التجارة الإلكترونية والمتاجر</h3><p>الأوردر من المحادثة بيتسجل على متجرك مباشرةً، وكل سؤال «الأوردر فين؟» بياخد رد.</p><span class="hm-ind__go">للمتاجر<i class="mk-ic mk-ic--arrow"></i></span></a>
      <a class="hm-ind" href="/ind-automotive"><span class="hm-ind__ic"><i class="mk-ic mk-ic--route"></i></span><h3>السيارات</h3><p>أول رد بيكسب تجربة القيادة، وأسئلة ما بعد البيع بتترد في وقتها.</p><span class="hm-ind__go">لمعارض السيارات<i class="mk-ic mk-ic--arrow"></i></span></a>
    </div>
  </div>
</section>

<!-- ══ THE FILM ══ -->
<section class="hm-film" id="film" aria-labelledby="hm-film-title">
  <div class="container">
    <div class="hm-head hm-head--center">
      <p class="hm-eyebrow">الفيلم</p>
      <h2 class="hm-h2" id="hm-film-title">شوف فريقك الجديد في 3 دقايق</h2>
      <p class="hm-sub">جينـو بيعرّفك على عارف وعدنان وروز، وإزاي بيشتغلوا مع فريقك من أول رسالة لحد البيع.</p>
    </div>
    <div class="hm-film__frame">
      <video src="/media/video/ai-workforce-ar.mp4" poster="/media/video/ai-workforce-ar.jpg" controls playsinline preload="none" width="1280" height="720" aria-label="فيلم جينـو دو: فريق العمل بالذكاء الاصطناعي"></video>
    </div>
  </div>
</section>

<!-- ══ FAQ ══ -->
<section class="hm-faq" id="faq" aria-labelledby="hm-faq-title">
  <div class="container">
    <div class="hm-head hm-head--center">
      <p class="hm-eyebrow">أسئلة</p>
      <h2 class="hm-h2" id="hm-faq-title">أسئلة بتتسأل كتير عن جينـو دو</h2>
    </div>
    <div class="faq">
      <details class="faq-item"><summary>يعني إيه جينـو دو؟<span class="pm"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></span></summary><p>جينـو دو منصة فريق عمل بالذكاء الاصطناعي للشركات في مصر والشرق الأوسط. بتديك موظفين بالذكاء الاصطناعي: عارف موظف المبيعات، وعدنان موظف خدمة ونجاح العملاء، وروز موظفة مراقبة الجودة. عارف وعدنان بيردوا على عملائك على <bdi>WhatsApp</bdi> و <bdi>Instagram</bdi> و <bdi>Messenger</bdi> وشات الموقع بلهجتهم، ويتابعوا ويحدّثوا الـ <bdi>CRM</bdi>. وروز بتتربط بـ <bdi>WhatsApp</bdi> الشركة بمسح كود <bdi>QR</bdi> واحد وبتجاوب على أسئلتك عن محادثات فريقك من <bdi>Claude</bdi> أو <bdi>ChatGPT</bdi>. وإنت متحكم في كل حاجة.</p></details>
      <details class="faq-item"><summary>بنبدأ إزاي؟<span class="pm"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></span></summary><p>مع عارف وعدنان بنبدأ بجلسة تخطيط: بنسمع منك طريقة البيع والخدمة عندك، ونتفق على مهام كل موظف والمؤشرات اللي هنتابعها، وبعدها الـ <bdi>automation specialist</bdi> بيبنيهم، والـ <bdi>account manager</bdi> بيراجع النتايج معاك كل شهر. ومدة البناء بنتفق عليها في الجلسة دي. أما روز فمن غير بناء: سجّل دخولك، وامسح كود <bdi>QR</bdi> من كل رقم <bdi>WhatsApp</bdi> للشركة، وهتبقى جاهزة في نفس اليوم.</p></details>
      <details class="faq-item"><summary>بيشتغل على أنهي قنوات؟<span class="pm"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></span></summary><p>على <bdi>WhatsApp</bdi> و <bdi>Instagram</bdi> و <bdi>Messenger</bdi> وشات موقعك. كل المحادثات من كل القنوات بتتجمع في <bdi>inbox</bdi> واحد، وكل عميل بيفضل محادثة واحدة مهما غيّر القناة. وشات الموقع بياخد ألوان البراند الخاص بيك، ويقدر ياخد من العميل اسمه وتليفونه وإيميله لو حبيت.</p></details>
      <details class="faq-item"><summary>بيتكلم عربي وبلهجة عملائي؟<span class="pm"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></span></summary><p>أيوه. تقدر تختار لهجة من 14 لهجة عربية، زي المصري والخليجي والشامي، أو تسيبه يتكيّف تلقائيًا مع لهجة كل عميل. وكمان بيفهم الفويس نوت والصور، وبيرد بالإنجليزي أو بلغات تانية لو العميل كتب بيها.</p></details>
      <details class="faq-item"><summary>أقدر أمسك المحادثة بنفسي؟<span class="pm"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></span></summary><p>في أي وقت، وبلمسة واحدة. دوس «تدخّل بشري» من الـ <bdi>inbox</bdi> أو من تطبيق الموبايل ورد بنفسك، والموظف بيقف في المحادثة دي لحد ما ترجّعها له بـ «رجّعها للـ AI». وتقدر كمان تسيب ملاحظات خاصة لفريقك، العميل مبيشوفهاش.</p></details>
      <details class="faq-item"><summary>جينـو دو بيكلّف كام؟<span class="pm"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></span></summary><p>كل الباقات والأسعار موجودة في <a href="/pricing">صفحة الأسعار</a>. وجوّه المنصة بتشوف كل رد كلّفك كام، وتقدر تحط حد أقصى لتكلفة كل محادثة: لو المحادثة وصلت له، الموظف بيقف والمحادثة بتتحوّل لفريقك. يعني مفيش فواتير مفاجئة.</p></details>
      <details class="faq-item"><summary>بياناتي في أمان؟<span class="pm"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></span></summary><p>موظفينك بيردوا من المعلومات اللي إنت بتديهالهم، وإنت اللي بتحدد إيه اللي يدخل وإمتى يتغيّر. كل إجراء بيعملوه متسجّل، ومفاتيح الـ <bdi>API</bdi> محدودة الصلاحيات وتقدر تلغيها في أي وقت، وتقدر تمسك أي محادثة بنفسك. التفاصيل كلها في <a href="/security">صفحة الأمان</a>.</p></details>
    </div>
  </div>
</section>

<!-- ══ FINAL CTA ══ -->
<section class="hm-final" aria-labelledby="hm-final-title">
  <div class="container">
    <div class="hm-final__card">
      <img class="hm-final__genu" src="/media/img/genu.svg" alt="" width="92" height="100" loading="lazy">
      <h2 class="hm-h2" id="hm-final-title">جاهز تشغّل فريقك؟</h2>
      <p class="hm-sub">احجز جلسة تخطيط: هنسمع منك، ونخطط معاك أول موظف، ونبنيه على قنواتك. أو ابدأ مجانًا بنفسك.</p>
      <div class="hm-cta hm-cta--center">
        <a href="/contact" class="btn btn-primary btn-lg">احجز جلسة تخطيط</a>
        <a href="https://app.genudo.ai/auth/register" class="btn btn-ondark btn-lg">ابدأ مجانًا</a>
      </div>
      <p class="hm-final__meta"><bdi>WhatsApp</bdi> · <bdi>Instagram</bdi> · <bdi>Messenger</bdi> · دردشة الموقع</p>
    </div>
  </div>
</section>

</div>`;
export default html;
