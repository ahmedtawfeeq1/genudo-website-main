// /blog/pipeline-not-inbox — value-led polish (ar-EG). See docs/website/BUILD-BRIEF.md.
const html = `<div class="pg-post">
<article class="post"><div class="container post-in">
  <div class="crumb"><a href="/blog">المدوّنة</a><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg><span>أدلة عملية</span></div>
  <h1>ليه الذكاء الاصطناعي بتاعك محتاج مسار، مش مجرد صندوق وارد</h1>
  <div class="p-meta"><span class="av">م</span>مريم عادل<span class="dot"></span>9 يونيو 2026<span class="dot"></span>قراية <bdi>6</bdi> دقايق</div>
  <div class="post-cover" style="background:linear-gradient(135deg,#7c3aed,#a855f7)"><span class="pc-title">من محادثات لـ<span class="a">عملية شغل</span></span></div>
  <div class="post-body"><p>صندوق الوارد قايمة مهام مبتخلّصش. رسالة بتوصل، حد بيرد، والمحادثة بتنزل لتحت. ومفيش حاجة في الشكل ده بتقولك إذا كان الشغل ماشي لقدام، ولا بيموت في صمت.</p>
<h2>الشغلانة مش الرد. الشغلانة إن الصفقة تتحرك.</h2>
<p>كل محادثة مع عميل هدفها الحقيقي إن حاجة تتغيّر: حد ميعرفكش بيبقى عميل محتمل، والعميل المحتمل بيتأهّل، والسؤال بيتحوّل لاجتماع متحجز. <strong>المسار</strong> بيخلّي الحالة دي مرئية وبيخلّي موظف الذكاء الاصطناعي يتصرف بناءً عليها.</p>
<ul>
<li>المحادثات الجديدة <strong>بتدخل مرحلة</strong> حسب شروط إنت بتحددها.</li>
<li>كل مرحلة ممكن <strong>تشغّل إجراءات</strong>، زي حجز اجتماع أو تحديث الـ <bdi>CRM</bdi> في اللحظة اللي العميل يبقى فيها جاهز.</li>
<li>العملاء اللي سكتوا <strong>بيتابعهم الوكيل</strong>، ولو خلص تسلسل المتابعات من غير رد بتتسجّل الفرصة «ضائعة» بدل ما تتنسى.</li>
<li>بتشوف <strong>التكلفة والنتايج لكل مرحلة</strong>، مش مجرد كومة محادثات.</li>
</ul>
<figure class="post-fig"><div class="mk mk-board" dir="rtl" lang="ar" role="img" aria-label="لوحة المسار بأربع مراحل">
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
        <div class="mk-opp__top"><span class="mk-avatar mk-avatar--sm mk-avatar--pink">س</span><div class="mk-opp__who"><b>سارة كمال</b><span class="mk-opp__ch"><i class="mk-ic mk-ic--whatsapp"></i>WhatsApp</span></div><span class="mk-opp__time">منذ 5 د</span></div>
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
</div><figcaption>لوحة توضيحية. الأسماء خيالية.</figcaption></figure>
<blockquote>صندوق الوارد بيقولك إيه اتقال. المسار بيقولك إيه اللي حصل.</blockquote>
<h2>ده بيفتحلك إيه</h2>
<p>أول ما المحادثات تتحط على مسار، موظف الذكاء الاصطناعي بيبطّل يكون مجرد حد بيرد، ويبقى هو اللي بيمشّي الشغل. بيحرّك الصفقات، وبيشغّل الإجراءات، وبيطلّع لك تقرير عن مسار تحويل تقدر تحسّنه فعلًا. صندوق الوارد لسه موجود، لكنه مدخل لعملية شغل، مش الحكاية كلها.</p>
<p>اقرأ أكتر عن <a href="/how-it-works#pipelines">المسارات</a> و<a href="/how-it-works#followups">المتابعات</a>.</p></div>
  <div class="post-cta"><h3>ابدأ بأول موظف ذكاء اصطناعي عندك</h3><p>اختار النتيجة اللي عايزها، واربط قناة، وسيبه يبدأ يرد على عملائك.</p><div class="post-cta-row"><a href="https://app.genudo.ai/auth/register" class="btn btn-primary btn-lg">ابدأ دلوقتي</a><a href="/contact" class="post-cta-sec">احجز ديمو</a></div></div>
</div></article>

<section class="s white-bg"><div class="container">
  <div class="s-head"><span class="eyebrow">كمّل قراية</span><h2>كمان من المدوّنة</h2></div>
  <div class="blog-grid"><a class="pcard" href="/blog/ai-employees-vs-chatbots"><div class="pcover" style="background:linear-gradient(135deg,#4f46e5,#7c3aed)"><span class="pc-title">من الشات بوت لـ<span class="a">موظف بالذكاء الاصطناعي</span></span></div><div class="pc-body"><div class="pc-cat">أدلة عملية</div><h3>موظف بالذكاء الاصطناعي ولا شات بوت؟ إيه اللي اتغيّر فعلًا</h3><p>الشات بوت بيرد. الموظف بيخلّص الشغل. والفرق ده هو اللي بيحدد إنت تقدر تسلّم إيه.</p><div class="pc-meta"><span class="av">ي</span>ياسر السيد<span class="dot"></span>10 يوليو 2026</div></div></a><a class="pcard" href="/blog/whatsapp-team-workflows"><div class="pcover" style="background:linear-gradient(135deg,#0b7a63,#22c55e)"><span class="pc-title">الذكاء الاصطناعي على <span class="a"><bdi>WhatsApp</bdi></span></span></div><div class="pc-body"><div class="pc-cat">أدلة عملية</div><h3>شغّل فريقك من <bdi>WhatsApp</bdi> من غير فوضى</h3><p>الشغل بيحصل على <bdi>WhatsApp</bdi> مش في داشبورد. إزاي تفضل ماسك الخيوط من موبايلك.</p><div class="pc-meta"><span class="av">م</span>مريم عادل<span class="dot"></span>3 يوليو 2026</div></div></a><a class="pcard" href="/blog/cost-per-outcome"><div class="pcover" style="background:linear-gradient(135deg,#6366f1,#0ea5e9)"><span class="pc-title">تكلفة <span class="a">كل نتيجة</span></span></div><div class="pc-body"><div class="pc-cat">رؤى</div><h3>قِس تكلفة كل نتيجة، مش تكلفة كل طلب</h3><p>الرقم اللي بيمشّي شغلك هو إنت دفعت كام علشان تأهّل عميل أو تحجز اجتماع.</p><div class="pc-meta"><span class="av">ي</span>ياسر السيد<span class="dot"></span>21 يونيو 2026</div></div></a></div>
</div></section>
</div>`;
export default html;
