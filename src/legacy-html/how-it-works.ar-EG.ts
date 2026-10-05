// /how-it-works — value-led rewrite (ar-EG, primary). See docs/website/BUILD-BRIEF.md.
// Original Egyptian copy. Mockups: src/app/[locale]/kit-preview/kit-snippets.ts (MSA glossary labels).
const html = `<div class="pg-how-it-works is-ar">

<section class="hiw-hero">
  <div class="container hiw-hero-grid">
    <div class="hiw-hero-copy">
      <span class="hiw-kicker">إزاي جينـو دو بيشتغل</span>
      <h1 class="display">من أول رسالة لحد البيعة… <span class="grad">وإنت شايف كل خطوة.</span></h1>
      <p class="lead">جينـو دو بيديك موظفين بالذكاء الاصطناعي بيردّوا على عملائك على طول، وبيمشّوا كل محادثة لحد قرار، وبيتابعوا اللي سكت. وإنت عارف كل رد كلّفك كام، وتقدر تستلم أي محادثة في أي وقت.</p>
      <div class="hiw-cta">
        <a href="/contact" class="btn btn-primary btn-lg">احجز ديمو</a>
        <a href="https://app.genudo.ai/auth/register" class="btn btn-ghost btn-lg">ابدأ دلوقتي</a>
      </div>
      <ul class="hiw-pills">
        <li>بيرد بالليل وبالنهار</li>
        <li>بيتكلم بلهجة عملائك</li>
        <li>تكلفة ليها سقف</li>
      </ul>
    </div>
    <figure class="hiw-film">
      <video src="/media/video/ai-workforce-ar.mp4" poster="/media/video/ai-workforce-ar.jpg" controls playsinline preload="none" aria-label="فيلم: إزاي تبني فريق عملك بالذكاء الاصطناعي مع جينـو دو"></video>
      <figcaption>الجولة كاملة في 3 دقايق: من روز لعارف وعدنان</figcaption>
    </figure>
  </div>
</section>

<nav class="hiw-index" aria-label="أقسام الصفحة">
  <div class="container">
    <ul class="hiw-index-in">
      <li><a href="#employees"><b>01</b>الموظفين</a></li>
      <li><a href="#pipelines"><b>02</b>المراحل</a></li>
      <li><a href="#followups"><b>03</b>المتابعة</a></li>
      <li><a href="#knowledge"><b>04</b>معلوماتك</a></li>
      <li><a href="#models"><b>05</b>التكلفة</a></li>
      <li><a href="#channels"><b>06</b>القنوات</a></li>
      <li><a href="#analytics"><b>07</b>الأرقام</a></li>
      <li><a href="#setup"><b>08</b>التجهيز</a></li>
    </ul>
  </div>
</nav>

<!-- 01 · Employees -->
<section id="employees" class="hiw-sec">
  <div class="container hiw-stack">
    <div class="hiw-stack-top">
      <div class="hiw-copy">
        <span class="hiw-kicker"><b>01</b> الموظفين</span>
        <h2>عيّن الموظف اللي ناقصك، مش أداة جديدة تتعلمها.</h2>
        <p class="lead">كل موظف عنده شغلانة واضحة: عارف بيبيع، وعدنان بيخدم عملاءك، وروز بتراجع شغل فريقك. وتقدر تعيّن أكتر من واحد من كل نوع.</p>
        <p class="hiw-how"><b>إزاي؟</b> كل موظف بيشتغل جوه مسار، بقنواته ومراحله ومعلوماته ومتابعاته. والموظف الواحد ممكن يشغّل مسار أو اتنين.</p>
      </div>
      <div class="hiw-copy">
        <ul class="hiw-proof">
          <li><span><b>عارف للمبيعات:</b> بيرد على الاستفسارات، بيفرز المهتمين، بيتابع اللي سكت، وبيساعد يحجز المواعيد.</span></li>
          <li><span><b>عدنان لخدمة ونجاح العملاء:</b> بيرد من معلوماتك، وبيحوّل المشاكل للشخص الصح في فريقك، وبيشتغل مع <bdi>Zoho Desk</bdi> و <bdi>Zendesk</bdi>.</span></li>
          <li><span><b>روز لمراقبة الجودة:</b> بتراجع محادثات فريقك على <bdi>WhatsApp</bdi> الشركة، وبتتوصّل بمسح كود من موبايلك.</span></li>
          <li><span>عندك أكتر من رقم؟ عيّن روز لكل رقم <bdi>WhatsApp</bdi>، وعارف لكل فرع.</span></li>
        </ul>
        <div class="hiw-links">
          <a href="/sol-sales-agent">قابل عارف ←</a>
          <a href="/sol-customer-service">قابل عدنان ←</a>
          <a href="/sol-operations">قابل روز ←</a>
        </div>
      </div>
    </div>
    <div class="hiw-visual">
      <div class="hiw-emps">
        <div class="mk mk-emp mk-emp--aaref" dir="rtl" lang="ar">
          <img class="mk-emp__img" src="/media/img/aaref.svg" alt="عارف، موظف المبيعات بالذكاء الاصطناعي" width="80" height="87">
          <div class="mk-emp__name">عارف</div>
          <span class="mk-emp__role">المبيعات</span>
          <ul class="mk-emp__list">
            <li><i class="mk-ic mk-ic--check"></i>بيرد على كل استفسار، بالليل وبالنهار</li>
            <li><i class="mk-ic mk-ic--check"></i>بيفرز العملاء المهتمين وبيتابع اللي سكت</li>
            <li><i class="mk-ic mk-ic--check"></i>بيساعد يحجز المواعيد على الكالندر بتاعك</li>
          </ul>
        </div>
        <div class="mk mk-emp mk-emp--adnan" dir="rtl" lang="ar">
          <img class="mk-emp__img" src="/media/img/adnan.svg" alt="عدنان، موظف خدمة العملاء بالذكاء الاصطناعي" width="80" height="87">
          <div class="mk-emp__name">عدنان</div>
          <span class="mk-emp__role">خدمة ونجاح العملاء</span>
          <ul class="mk-emp__list">
            <li><i class="mk-ic mk-ic--check"></i>بيرد من معلوماتك إنت: الأسعار والسياسات والمواعيد</li>
            <li><i class="mk-ic mk-ic--check"></i>بيحوّل المشاكل الصعبة للشخص المناسب في فريقك</li>
            <li><i class="mk-ic mk-ic--check"></i>بيشتغل مع <bdi>Zoho Desk</bdi> و <bdi>Zendesk</bdi></li>
          </ul>
        </div>
        <div class="mk mk-emp mk-emp--roz" dir="rtl" lang="ar">
          <img class="mk-emp__img" src="/media/img/roz.svg" alt="روز، موظفة مراقبة الجودة بالذكاء الاصطناعي" width="80" height="87">
          <div class="mk-emp__name">روز</div>
          <span class="mk-emp__role">مراقبة الجودة</span>
          <ul class="mk-emp__list">
            <li><i class="mk-ic mk-ic--check"></i>بتراجع محادثات فريقك على <bdi>WhatsApp</bdi> الشركة</li>
            <li><i class="mk-ic mk-ic--check"></i>بتنبّهك للرد المتأخر والصفقة الواقفة والفرصة اللي بتضيع</li>
            <li><i class="mk-ic mk-ic--check"></i>بتحوّل الفويس نوتس لكلام مكتوب</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- 02 · Pipelines -->
<section id="pipelines" class="hiw-sec">
  <div class="container hiw-split is-flip">
    <div class="hiw-copy">
      <span class="hiw-kicker"><b>02</b> المراحل</span>
      <h2>كل محادثة بتتحرك لقدّام… لحد ما توصل لقرار.</h2>
      <p class="lead">بدل ما العملاء يتوهوا في الشات، كل عميل محتمل بيتنقل من مرحلة للتانية لحد ما يشتري أو يعتذر، وإنت شايف مكانه على اللوحة في أي لحظة.</p>
      <p class="hiw-how"><b>إزاي؟</b> بتكتب لكل مرحلة بكلامك العادي: العميل يدخلها إمتى، والموظف يعمل فيها إيه. والموظف بيقرا كل رد، وينقل الفرصة للمرحلة الصح لوحده.</p>
      <ul class="hiw-proof">
        <li><span>أول ما العميل يوافق، بيحجزله الميعاد ويوصله التأكيد على <bdi>WhatsApp</bdi>.</span></li>
        <li><span>بيحدّث الـ <bdi>CRM</bdi> بتاعك ويبلّغ فريقك في نفس اللحظة اللي العميل يبقى جاهز فيها.</span></li>
        <li><span>بيجمع من الشات البيانات اللي تهمّك: الاسم، والخدمة المطلوبة، والميعاد المناسب.</span></li>
        <li><span>جرّبه قبل ما تشغّله: «اختبار الوكيل» بيوريك كل رد من غير ما يتبعت لأي عميل.</span></li>
      </ul>
    </div>
    <div class="hiw-visual">
      <div class="mk mk-board" dir="rtl" lang="ar" role="img" aria-label="لوحة المسار بأربع مراحل">
        <div class="mk-board__cols">
          <div class="mk-col">
            <div class="mk-col__head"><span class="mk-stage">عميل محتمل جديد</span><span class="mk-col__count">16 فرصة</span></div>
            <div class="mk-opp mk-opp--new">
              <div class="mk-opp__top"><span class="mk-avatar mk-avatar--sm mk-avatar--green">م</span><div class="mk-opp__who"><b>منى عادل</b><span class="mk-opp__ch"><i class="mk-ic mk-ic--whatsapp"></i>WhatsApp</span></div><span class="mk-opp__time">الآن</span></div>
              <p class="mk-opp__msg">أهلًا، التبييض بكام؟</p>
            </div>
            <div class="mk-opp">
              <div class="mk-opp__top"><span class="mk-avatar mk-avatar--sm mk-avatar--blue">ع</span><div class="mk-opp__who"><b>عمر حسن</b><span class="mk-opp__ch"><i class="mk-ic mk-ic--whatsapp"></i>WhatsApp</span></div><span class="mk-opp__time"><bdi>2:14</bdi> ص</span></div>
              <p class="mk-opp__msg">إنتو شغالين يوم الجمعة؟</p>
            </div>
          </div>
          <div class="mk-col">
            <div class="mk-col__head"><span class="mk-stage mk-stage--indigo">مهتم</span><span class="mk-col__count">6 فرص</span></div>
            <div class="mk-opp">
              <div class="mk-opp__top"><span class="mk-avatar mk-avatar--sm mk-avatar--amber">ك</span><div class="mk-opp__who"><b>كريم سعيد</b><span class="mk-opp__ch"><i class="mk-ic mk-ic--whatsapp"></i>WhatsApp</span></div><span class="mk-opp__time">منذ ساعة</span></div>
              <p class="mk-opp__msg">ممكن تبعتلي قايمة الأسعار؟</p>
              <div class="mk-opp__tags"><span class="mk-chip mk-chip--amber"><i class="mk-ic mk-ic--repeat"></i>المتابعة 1 · مُرسلة</span></div>
            </div>
          </div>
          <div class="mk-col">
            <div class="mk-col__head"><span class="mk-stage mk-stage--violet">حجز موعد</span><span class="mk-col__count">3 فرص</span></div>
            <div class="mk-opp">
              <div class="mk-opp__top"><span class="mk-avatar mk-avatar--sm mk-avatar--pink">س</span><div class="mk-opp__who"><b>سارة كمال</b><span class="mk-opp__ch"><i class="mk-ic mk-ic--whatsapp"></i>WhatsApp</span></div><span class="mk-opp__time">منذ 5 دقائق</span></div>
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
      <p class="hiw-note">بيانات توضيحية · اسحب اللوحة علشان تشوف كل المراحل</p>
    </div>
  </div>
</section>

<!-- 03 · Follow-ups -->
<section id="followups" class="hiw-sec">
  <div class="container hiw-split">
    <div class="hiw-copy">
      <span class="hiw-kicker"><b>03</b> المتابعة</span>
      <h2>اللي ما ردّش؟ المتابعة مش بتنسى.</h2>
      <p class="lead">كتير من العملاء ما بيقولوش «لأ»، هما بس بيسكتوا. جينـو دو بيتابع كل واحد في ميعاده، برسالة مختلفة كل مرة، علشان ولا عميل محتمل يضيع منك.</p>
      <p class="hiw-how"><b>إزاي؟</b> كل مرحلة ليها تسلسل متابعات خاص بيها، من دقايق لحد شهور. بتكتب تعليمات المتابعة، وبتحدد المحتوى اللي يتبعت معاها، زي فيديو أو عرض.</p>
      <ul class="hiw-proof">
        <li><span>رسالة بعد 3 ساعات، وتانية بعد يوم ومعاها فيديو. وإنت اللي بتحدد التوقيت.</span></li>
        <li><span>بعد آخر متابعة من غير رد، الفرصة بتتنقل للمرحلة اللي تختارها، فاللوحة تفضل مركّزة على اللي يستاهل.</span></li>
        <li><span>حالة المتابعات قدامك: مُرسلة، ومجدولة، ومتأخرة.</span></li>
      </ul>
    </div>
    <div class="hiw-visual">
      <div class="mk mk-card" dir="rtl" lang="ar" role="img" aria-label="تسلسل المتابعات لعميل لم يرد">
        <div class="mk-card__head"><div class="mk-card__title"><i class="mk-ic mk-ic--repeat"></i>المتابعات · مهتم</div><span class="mk-chip mk-chip--green"><i class="mk-dot"></i>نشطة</span></div>
        <ol class="mk-timeline">
          <li class="mk-step is-sent"><div class="mk-step__head"><b>المتابعة 1</b><span class="mk-step__wait">بعد 3 ساعات</span><span class="mk-status mk-status--sent">مُرسلة</span></div><p class="mk-step__msg">أهلًا يا كريم، دي قايمة الأسعار اللي طلبتها. عندك أي سؤال؟</p></li>
          <li class="mk-step is-scheduled"><div class="mk-step__head"><b>المتابعة 2</b><span class="mk-step__wait">بعد 24 ساعة</span><span class="mk-status mk-status--scheduled">مجدولة</span></div><p class="mk-step__msg">عندنا ميعادين فاضيين يوم الخميس. أحجزلك واحد؟</p></li>
          <li class="mk-step mk-step--end"><div class="mk-step__head"><i class="mk-ic mk-ic--arrow"></i>لا رد بعد انتهاء التسلسل: النقل إلى <span class="mk-stage mk-stage--red mk-stage--sm">ضائعة</span></div></li>
        </ol>
        <div class="mk-health">
          <div class="mk-health__title">حالة المتابعات · 7 أيام</div>
          <div class="mk-health__bar"><i style="--w:72%"></i><i style="--w:24%"></i><i style="--w:4%"></i></div>
          <div class="mk-health__legend"><span>مُرسلة <b>128</b></span><span>مجدولة <b>42</b></span><span>متأخرة <b>7</b></span></div>
        </div>
      </div>
      <p class="hiw-note">بيانات توضيحية</p>
      <figure class="hiw-film">
        <video src="/media/video/followups-ar.mp4" poster="/media/video/followups-ar.jpg" controls playsinline preload="none" aria-label="فيلم قصير: المتابعة اللي مش بتنسى"></video>
        <figcaption>فيلم قصير: إزاي المتابعة بترجّع العميل اللي سكت</figcaption>
      </figure>
    </div>
  </div>
</section>

<!-- 04 · Knowledge -->
<section id="knowledge" class="hiw-sec">
  <div class="container hiw-split is-flip">
    <div class="hiw-copy">
      <span class="hiw-kicker"><b>04</b> معلوماتك</span>
      <h2>ردود من معلوماتك إنت، وبلهجة عملائك.</h2>
      <p class="lead">الموظف ما بيألّفش أسعار ولا سياسات. بيرد من الأسعار والأسئلة المتكررة والمواعيد اللي إنت مدّيهاله، وبيتكلم مصري أو خليجي أو شامي على حسب عميلك.</p>
      <p class="hiw-how"><b>إزاي؟</b> ارفع ملف <bdi>Excel</bdi> أو <bdi>CSV</bdi>، أو ابني الجدول بنفسك، وقول للموظف إمتى يدوّر فيه. غيّر السعر مرة واحدة، وكل موظف مربوط بالجدول يرد بالسعر الجديد.</p>
      <ul class="hiw-proof">
        <li><span>14 لهجة عربية، أو تعدد اللهجات تلقائيًا علشان كل عميل يسمع لهجته.</span></li>
        <li><span>بيفهم الفويس نوتس والصور، مش الكتابة بس.</span></li>
        <li><span>إنت اللي بتحدد كل موظف يرد من أنهي جداول.</span></li>
      </ul>
    </div>
    <div class="hiw-visual">
      <div class="mk mk-card mk-kb" dir="rtl" lang="ar" role="img" aria-label="قائمة الأسعار التي يرد منها الوكيل">
        <div class="mk-card__head"><div class="mk-card__title"><i class="mk-ic mk-ic--book"></i>قائمة الأسعار</div><span class="mk-chip mk-chip--indigo"><i class="mk-ic mk-ic--table"></i>جدول المعرفة · <bdi>CSV</bdi> · 24 صفًا</span></div>
        <table class="mk-table">
          <thead><tr><th>الخدمة</th><th>السعر</th><th class="mk-hide-sm">المدة</th><th class="mk-hide-sm">ملاحظات</th></tr></thead>
          <tbody>
            <tr><td>تبييض الأسنان</td><td class="mk-num"><bdi>3,500</bdi> جنيه</td><td class="mk-hide-sm">60 دقيقة</td><td class="mk-hide-sm">تشمل زيارة متابعة</td></tr>
            <tr><td>كشف وتنظيف</td><td class="mk-num"><bdi>800</bdi> جنيه</td><td class="mk-hide-sm">30 دقيقة</td><td class="mk-hide-sm">كل 6 أشهر</td></tr>
            <tr><td>استشارة تقويم</td><td class="mk-num">مجانًا</td><td class="mk-hide-sm">20 دقيقة</td><td class="mk-hide-sm">أيام الخميس فقط</td></tr>
          </tbody>
        </table>
        <div class="mk-kb__ask"><i class="mk-ic mk-ic--sparkle"></i><span>رد الوكيل من هذا الجدول: «التبييض بـ <bdi>3,500</bdi> جنيه وبياخد حوالي ساعة.»</span></div>
      </div>
      <div class="mk mk-card" dir="rtl" lang="ar" role="img" aria-label="اختيار اللهجة التي يتحدث بها الوكيل">
        <div class="mk-card__head"><div class="mk-card__title"><i class="mk-ic mk-ic--globe"></i>لهجة الوكيل</div></div>
        <div class="mk-chips">
          <span class="mk-chip mk-chip--opt is-on"><i class="mk-ic mk-ic--check"></i>مصرية</span><span class="mk-chip mk-chip--opt">سعودية / خليجية</span><span class="mk-chip mk-chip--opt">أردنية</span><span class="mk-chip mk-chip--opt">فلسطينية</span><span class="mk-chip mk-chip--opt">لبنانية</span><span class="mk-chip mk-chip--opt">سورية</span><span class="mk-chip mk-chip--opt">عراقية</span><span class="mk-chip mk-chip--opt">يمنية</span><span class="mk-chip mk-chip--opt">سودانية</span><span class="mk-chip mk-chip--opt">ليبية</span><span class="mk-chip mk-chip--opt">تونسية</span><span class="mk-chip mk-chip--opt">جزائرية</span><span class="mk-chip mk-chip--opt">مغربية</span><span class="mk-chip mk-chip--opt">موريتانية</span><span class="mk-chip mk-chip--opt mk-chip--auto"><i class="mk-ic mk-ic--sparkle"></i>متعددة اللهجات تلقائيًا</span>
        </div>
      </div>
      <p class="hiw-note">عيادة وأسعار توضيحية</p>
    </div>
  </div>
</section>

<!-- 05 · Models / cost -->
<section id="models" class="hiw-sec">
  <div class="container hiw-split">
    <div class="hiw-copy">
      <span class="hiw-kicker"><b>05</b> التكلفة</span>
      <h2>تكلفة متوقعة، وليها سقف.</h2>
      <p class="lead">مش هتتفاجئ بالفاتورة. الرسالة البسيطة بتروح لموديل أرخص، والصعبة بتروح لموديل أقوى، وإنت بتحط حد أقصى للصرف على كل محادثة.</p>
      <p class="hiw-how"><b>إزاي؟</b> التوجيه الذكي بيقرا كل رسالة ويبعتها لأرخص موديل يقدر يرد عليها صح. ولو محادثة وصلت للحد اللي إنت حاطه، الوكيل بيقف فيها مؤقتًا ويبلّغ فريقك.</p>
      <ul class="hiw-proof">
        <li><span>تكلفة كل رد قدامك في صندوق الوارد، جنب زمن الرد ودرجة الثقة.</span></li>
        <li><span>حد إنفاق لكل محادثة: لو وصله، بيسيبها لفريقك بدل ما يصرف أكتر.</span></li>
        <li><span>عايز موديل واحد ثابت؟ ينفع. أو سيب التوجيه الذكي يختار لكل رسالة.</span></li>
      </ul>
      <div class="hiw-links"><a href="/pricing">شوف الباقات ←</a></div>
    </div>
    <div class="hiw-visual">
      <div class="mk mk-card" dir="rtl" lang="ar" role="img" aria-label="التوجيه الذكي حسب صعوبة الرسالة">
        <div class="mk-card__head"><div class="mk-card__title"><i class="mk-ic mk-ic--route"></i>التوجيه الذكي</div><span class="mk-chip mk-chip--green"><i class="mk-dot"></i>مفعّل</span></div>
        <div class="mk-tiers">
          <div class="mk-tier"><div class="mk-tier__head"><span class="mk-tier__name">بسيطة</span></div><p class="mk-tier__eg">«بتفتحوا الساعة كام؟»</p><div class="mk-tier__model"><i class="mk-ic mk-ic--bolt"></i>نموذج سريع</div><div class="mk-bar"><i style="--w:68%"></i></div><span class="mk-tier__share"><bdi>68%</bdi> من الرسائل</span></div>
          <div class="mk-tier mk-tier--moderate"><div class="mk-tier__head"><span class="mk-tier__name">متوسطة</span></div><p class="mk-tier__eg">«قارنلي بين الباقتين.»</p><div class="mk-tier__model"><i class="mk-ic mk-ic--sparkle"></i>نموذج متوازن</div><div class="mk-bar"><i style="--w:26%"></i></div><span class="mk-tier__share"><bdi>26%</bdi> من الرسائل</span></div>
          <div class="mk-tier mk-tier--complex"><div class="mk-tier__head"><span class="mk-tier__name">معقدة</span></div><p class="mk-tier__eg">«رتبلي علاج على 3 زيارات حوالين مواعيد سفري.»</p><div class="mk-tier__model"><i class="mk-ic mk-ic--target"></i>نموذج متقدم</div><div class="mk-bar"><i style="--w:6%"></i></div><span class="mk-tier__share"><bdi>6%</bdi> من الرسائل</span></div>
        </div>
      </div>
      <div class="mk mk-card" dir="rtl" lang="ar" role="img" aria-label="حد الإنفاق لكل محادثة">
        <div class="mk-card__head"><div class="mk-card__title"><i class="mk-ic mk-ic--wallet"></i>حد الإنفاق لكل محادثة</div><span class="mk-toggle is-on"></span></div>
        <div class="mk-cap__value"><b><bdi>$0.32</bdi></b> من <bdi>$0.50</bdi> مستخدم</div>
        <div class="mk-bar mk-bar--amber"><i style="--w:64%"></i></div>
        <p class="mk-cap__rule"><i class="mk-ic mk-ic--alert"></i><span>عند الوصول إلى الحد: إيقاف الوكيل مؤقتًا في هذه المحادثة وتنبيه الفريق.</span></p>
      </div>
      <p class="hiw-note">بيانات توضيحية · الأسعار الحقيقية في صفحة الباقات</p>
    </div>
  </div>
</section>

<!-- 06 · Channels -->
<section id="channels" class="hiw-sec">
  <div class="container hiw-stack">
    <div class="hiw-stack-top">
      <div class="hiw-copy">
        <span class="hiw-kicker"><b>06</b> القنوات</span>
        <h2>كل القنوات في صندوق وارد واحد، وتستلم أي محادثة بضغطة.</h2>
        <p class="lead"><bdi>WhatsApp</bdi> و <bdi>Instagram</bdi> و <bdi>Messenger</bdi> ودردشة موقعك في مكان واحد. الموظف بيرد على طول، وإنت بتدخل وقت ما تحب، حتى من موبايلك.</p>
        <p class="hiw-how"><b>إزاي؟</b> دوس «تدخّل بشري» والوكيل يقف في المحادثة دي بس. خلّص كلامك مع العميل، ورجّعها للوكيل بضغطة.</p>
      </div>
      <div class="hiw-copy">
        <ul class="hiw-proof">
          <li><span>كل عميل في محادثة واحدة، أيًا كانت القناة اللي كلّمك منها.</span></li>
          <li><span>ملاحظات خاصة لفريقك جوه المحادثة، والعميل ما بيشوفهاش.</span></li>
          <li><span>أبلكيشن موبايل: ترد من برّه المكتب، وترجّعها للوكيل.</span></li>
          <li><span>ويدجت دردشة لموقعك بألوانك، وبيجمع الاسم والرقم والإيميل لو حبيت.</span></li>
        </ul>
        <div class="hiw-links"><a href="/integrations">شوف التكاملات ←</a></div>
      </div>
    </div>
    <div class="hiw-visual">
      <div class="hiw-pair">
        <div class="mk mk-inbox" dir="rtl" lang="ar" role="img" aria-label="صندوق الوارد مع رد الوكيل وتكلفته">
          <div class="mk-inbox__grid">
            <div class="mk-inbox__list">
              <div class="mk-inbox__search"><i class="mk-ic mk-ic--search"></i>بحث في المحادثات</div>
              <div class="mk-convo is-active"><span class="mk-avatar mk-avatar--sm mk-avatar--green">م</span><div class="mk-convo__body"><div class="mk-convo__row"><b>منى عادل</b><span class="mk-convo__time">الآن</span></div><div class="mk-convo__snip"><i class="mk-ic mk-ic--whatsapp"></i>الخميس بعد 6 يناسبني.</div></div></div>
              <div class="mk-convo"><span class="mk-avatar mk-avatar--sm mk-avatar--pink">ل</span><div class="mk-convo__body"><div class="mk-convo__row"><b>ليلى مصطفى</b><span class="mk-convo__time">منذ 4 دقائق</span></div><div class="mk-convo__snip"><i class="mk-ic mk-ic--insta"></i>في مكان أركن فيه؟</div></div></div>
              <div class="mk-convo"><span class="mk-avatar mk-avatar--sm mk-avatar--blue">ي</span><div class="mk-convo__body"><div class="mk-convo__row"><b>يوسف علي</b><span class="mk-convo__time">منذ ساعة</span></div><div class="mk-convo__snip"><i class="mk-ic mk-ic--globe"></i>دردشة الموقع · قائمة الأسعار</div></div></div>
            </div>
            <div class="mk-thread">
              <div class="mk-thread__head"><span class="mk-avatar mk-avatar--green">م</span><div class="mk-thread__who"><b>منى عادل</b><span class="mk-stage mk-stage--violet mk-stage--sm">حجز موعد</span></div><span class="mk-chip mk-chip--green"><i class="mk-dot"></i>الوكيل نشط</span></div>
              <div class="mk-thread__body">
                <div class="mk-msg mk-msg--in">ينفع الخميس بعد 6؟</div>
                <div class="mk-msg mk-msg--out"><span class="mk-msg__by"><i class="mk-ic mk-ic--sparkle"></i>عارف · الوكيل</span>أيوه! الخميس الساعة <bdi>6:30</bdi> فاضي. أحجزهولك؟</div>
                <div class="mk-reply-meta"><span class="mk-chip"><i class="mk-ic mk-ic--dollar"></i>التكلفة <bdi>$0.01</bdi></span><span class="mk-chip"><i class="mk-ic mk-ic--clock"></i>زمن الرد 26 ثانية</span><span class="mk-chip mk-chip--green"><i class="mk-ic mk-ic--target"></i>الثقة <bdi>92%</bdi></span></div>
                <div class="mk-note"><b><i class="mk-ic mk-ic--note"></i>ملاحظة خاصة · دينا</b>مريضة سابقة، اعرض عليها باقة العائلة.</div>
              </div>
            </div>
          </div>
        </div>
        <div class="mk mk-phone" dir="rtl" lang="ar" role="img" aria-label="أحد أعضاء الفريق تولّى المحادثة من الموبايل">
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
      </div>
      <p class="hiw-note">بيانات توضيحية</p>
    </div>
  </div>
</section>

<!-- 07 · Analytics -->
<section id="analytics" class="hiw-sec">
  <div class="container hiw-split is-flip">
    <div class="hiw-copy">
      <span class="hiw-kicker"><b>07</b> الأرقام</span>
      <h2>اعرف كل نتيجة كلّفتك كام.</h2>
      <p class="lead">لوحة التحكم بتوريك كل مرحلة: مين اتحوّل، ومين وقف فين، وكلّفتك كام. فتعرف تصرف فين، وتصلّح إيه الأول.</p>
      <p class="hiw-how"><b>إزاي؟</b> كل رسالة وكل حجز بيتسجّل لوحده، ويترتب على مراحلك. والتكلفة بتتحسب لكل مرحلة ولكل فرصة مكتسبة، مش فاتورة واحدة كبيرة.</p>
      <ul class="hiw-proof">
        <li><span>مسار التحويل بيوريك العملاء بيقعوا فين بالظبط.</span></li>
        <li><span>تكلفة التحويل، والتكلفة حسب المرحلة، والتكلفة عبر الوقت، لآخر 7 أو 30 أو 90 يوم.</span></li>
        <li><span>اسأل <bdi>Claude</bdi> أو <bdi>ChatGPT</bdi>: «فين بنخسر عملاء؟»، ويرد عليك من أرقامك في جينـو دو.</span></li>
      </ul>
      <div class="hiw-links"><a href="/api-mcp">اربط <bdi>Claude</bdi> و <bdi>ChatGPT</bdi> ←</a></div>
    </div>
    <div class="hiw-visual">
      <div class="mk mk-kpis" dir="rtl" lang="ar" role="img" aria-label="لوحة التحكم: الفرص وتكلفة الذكاء الاصطناعي">
        <div class="mk-kpi mk-kpi--hero"><span class="mk-kpi__label">الفرص النشطة</span><span class="mk-kpi__value">870</span><span class="mk-kpi__sub">إجمالي الفرص <bdi>1,284</bdi></span><span class="mk-kpi__badge"><bdi>67.8%</bdi> من الإجمالي</span></div>
        <div class="mk-kpi"><span class="mk-kpi__ic mk-kpi__ic--green"><i class="mk-ic mk-ic--trophy"></i></span><span class="mk-kpi__label">الفرص المكتسبة</span><span class="mk-kpi__value">96</span><span class="mk-kpi__sub">نسبة الفوز <bdi>7.5%</bdi></span></div>
        <div class="mk-kpi"><span class="mk-kpi__ic mk-kpi__ic--red"><i class="mk-ic mk-ic--xcircle"></i></span><span class="mk-kpi__label">الفرص الضائعة</span><span class="mk-kpi__value">318</span><span class="mk-kpi__sub">من <bdi>1,284</bdi></span></div>
        <div class="mk-kpi"><span class="mk-kpi__ic"><i class="mk-ic mk-ic--dollar"></i></span><span class="mk-kpi__label">تكلفة الذكاء الاصطناعي</span><span class="mk-kpi__value"><bdi>$41.20</bdi></span><span class="mk-kpi__sub"><bdi>$0.004</bdi> لكل رسالة</span></div>
        <div class="mk-kpi"><span class="mk-kpi__ic mk-kpi__ic--amber"><i class="mk-ic mk-ic--target"></i></span><span class="mk-kpi__label">تكلفة التحويل</span><span class="mk-kpi__value"><bdi>$0.43</bdi></span><span class="mk-kpi__sub">96 فرصة مكتسبة</span></div>
      </div>
      <div class="mk mk-card" dir="rtl" lang="ar" role="img" aria-label="مسار التحويل">
        <div class="mk-card__head"><div class="mk-card__title">مسار التحويل</div><span class="mk-chip">30 يومًا</span></div>
        <div class="mk-funnel__rows">
          <div class="mk-funnel__row"><div class="mk-funnel__top"><span>عميل محتمل جديد</span><b>1,284</b></div><div class="mk-funnel__bar"><i style="--w:100%"></i></div></div>
          <div class="mk-funnel__row"><div class="mk-funnel__top"><span>مهتم</span><b>702</b></div><div class="mk-funnel__bar"><i style="--w:55%"></i></div><div class="mk-funnel__drop"><span><bdi>55%</bdi></span><span>تسرّب <bdi>45%</bdi></span></div></div>
          <div class="mk-funnel__row"><div class="mk-funnel__top"><span>حجز موعد</span><b>231</b></div><div class="mk-funnel__bar"><i style="--w:18%"></i></div><div class="mk-funnel__drop"><span><bdi>18%</bdi></span><span>تسرّب <bdi>67%</bdi></span></div></div>
          <div class="mk-funnel__row"><div class="mk-funnel__top"><span>مكتسبة</span><b>96</b></div><div class="mk-funnel__bar"><i style="--w:7.5%"></i></div><div class="mk-funnel__drop"><span><bdi>7.5%</bdi></span><span>تسرّب <bdi>58%</bdi></span></div></div>
        </div>
      </div>
      <p class="hiw-note">بيانات توضيحية</p>
    </div>
  </div>
</section>

<!-- 08 · Setup -->
<section id="setup" class="hiw-sec">
  <div class="container hiw-split">
    <div class="hiw-copy">
      <span class="hiw-kicker"><b>08</b> التجهيز</span>
      <h2>تجهّزه في 3 خطوات، من غير كود.</h2>
      <p class="lead">مش محتاج مبرمج ولا أسابيع تدريب. بتحكي عن شغلك، والموظف يتعلمه.</p>
      <ol class="hiw-steps">
        <li><div><h3>احكي عن شغلك</h3><p>6 أسئلة سريعة عن نشاطك، تجاوبها كتابة أو بصوتك. ومنها بيتبني أسلوب الموظف وتعليماته.</p></div></li>
        <li><div><h3>رتّب المراحل</h3><p>بتبدأ بـ «عميل محتمل جديد ← مهتم ← مكتسبة أو ضائعة». غيّر الأسماء، وزوّد مراحل، وقول لكل مرحلة تدخلها إمتى وتعمل فيها إيه.</p></div></li>
        <li><div><h3>اربط وشغّل</h3><p>اربط <bdi>WhatsApp</bdi> أو أي قناة تانية، وجرّب بـ «اختبار الوكيل»، وبعدين شغّله على عملائك.</p></div></li>
      </ol>
    </div>
    <div class="hiw-visual">
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
  </div>
</section>

<section class="s ctaf"><div class="container"><div class="ctaf-card">
  <div class="ctaf-genu genu" data-genu data-expr="happy" data-liven style="--w:86px;--h:98px;--ospeed:7s"></div>
  <span class="hiw-kicker hiw-kicker--dark">ابدأ دلوقتي</span>
  <h2 style="margin-block-start:12px;">جاهز تعيّن أول موظف؟</h2>
  <p class="lead">احجز ديمو، ونوريك الموظف شغّال على قنواتك وبمعلوماتك إنت.</p>
  <div class="ctaf-cta"><a href="/contact" class="btn btn-primary btn-lg">احجز ديمو</a><a href="https://app.genudo.ai/auth/register" class="ctaf-sec">أو ابدأ دلوقتي <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a></div>
  <div class="ctaf-trust"><span class="live-dot"></span>بيرد بالليل وبالنهار<span class="sep"></span>بيتكلم لهجة عملائك<span class="sep"></span>وإنت المتحكم</div>
</div></div></section>

</div>`;
export default html;
