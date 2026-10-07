// /blog/cost-per-outcome — value-led polish (ar-EG). See docs/website/BUILD-BRIEF.md.
const html = `<div class="pg-post">
<article class="post"><div class="container post-in">
  <div class="crumb"><a href="/blog">المدوّنة</a><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg><span>رؤى</span></div>
  <h1>قِس تكلفة كل نتيجة، مش تكلفة كل طلب</h1>
  <div class="p-meta"><span class="av">ي</span>ياسر السيد<span class="dot"></span>21 يونيو 2026<span class="dot"></span>قراية <bdi>5</bdi> دقايق</div>
  <div class="post-cover" style="background:linear-gradient(135deg,#6366f1,#0ea5e9)"><span class="pc-title">تكلفة <span class="a">كل نتيجة</span></span></div>
  <div class="post-body"><p>التسعير بالطلب فخ لما تيجي تخطط. بيقولك الرد الواحد كلّف كام، لكن مش بيقولك كان يستاهل ولا لأ. الرقم اللي بيمشّي شغلك فعلًا هو <strong>تكلفة كل نتيجة</strong>: دفعت كام علشان تأهّل عميل، أو تحل سؤال، أو تحجز اجتماع.</p>
<h2>ليه نموذج واحد مش كفاية</h2>
<p>لو اخترت نموذج رخيص هتتلخبط في الحالات الصعبة اللي فارقة معاك أكتر حاجة. ولو اخترت الأقوى هتدفع أغلى سعر علشان ترد على «بتفتحوا الساعة كام؟». ولا ده حل ولا ده.</p>
<h2>التوجيه بيغيّر الحسبة</h2>
<p>لما نموذج سريع ورخيص يتعامل مع الرسائل الروتينية، ونموذج أقوى ياخد الحالات المعقدة، تكلفة النتيجة <em>بالمتوسط</em> بتنزل، وجودة الحالات الصعبة بتتحسن. والفكرة بسيطة:</p>
<ul>
<li>الرسائل <strong>البسيطة</strong>، زي مواعيد الفتح، بتروح للنموذج الأقل تكلفة.</li>
<li>الرسائل <strong>المتوسطة</strong>، زي المقارنة بين باقتين، بتروح لنموذج متوازن.</li>
<li>الرسائل <strong>المعقدة</strong>، زي تغيير ميعادين وإضافة فرد من العيلة، بتروح للنموذج الأعلى قدرة. دي الأقلية، فإنت بتدفع مقابل القدرة دي بس في المكان اللي محتاجها.</li>
</ul>
<figure class="post-fig"><div class="mk mk-card" dir="rtl" lang="ar" role="img" aria-label="التوجيه الذكي حسب صعوبة الرسالة">
  <div class="mk-card__head"><div class="mk-card__title"><i class="mk-ic mk-ic--route"></i>التوجيه الذكي</div><span class="mk-chip mk-chip--green"><i class="mk-dot"></i>مفعّل</span></div>
  <div class="mk-tiers">
    <div class="mk-tier"><div class="mk-tier__head"><span class="mk-tier__name">بسيطة</span><span class="mk-tier__cost"><bdi>$0.004</bdi> / رسالة</span></div><p class="mk-tier__eg">«بتفتحوا الساعة كام؟»</p><div class="mk-tier__model"><i class="mk-ic mk-ic--bolt"></i>نموذج سريع</div><div class="mk-bar"><i style="--w:68%"></i></div><span class="mk-tier__share"><bdi>68%</bdi> من الرسائل</span></div>
    <div class="mk-tier mk-tier--moderate"><div class="mk-tier__head"><span class="mk-tier__name">متوسطة</span><span class="mk-tier__cost"><bdi>$0.01</bdi> / رسالة</span></div><p class="mk-tier__eg">«قارنلي بين الباقتين.»</p><div class="mk-tier__model"><i class="mk-ic mk-ic--sparkle"></i>نموذج متوازن</div><div class="mk-bar"><i style="--w:26%"></i></div><span class="mk-tier__share"><bdi>26%</bdi> من الرسائل</span></div>
    <div class="mk-tier mk-tier--complex"><div class="mk-tier__head"><span class="mk-tier__name">معقدة</span><span class="mk-tier__cost"><bdi>$0.02</bdi> / رسالة</span></div><p class="mk-tier__eg">«رتبلي علاج على 3 زيارات حوالين مواعيد سفري.»</p><div class="mk-tier__model"><i class="mk-ic mk-ic--target"></i>نموذج متقدم</div><div class="mk-bar"><i style="--w:6%"></i></div><span class="mk-tier__share"><bdi>6%</bdi> من الرسائل</span></div>
  </div>
</div>
<div class="mk mk-card" dir="rtl" lang="ar" role="img" aria-label="حد الإنفاق لكل محادثة">
  <div class="mk-card__head"><div class="mk-card__title"><i class="mk-ic mk-ic--wallet"></i>حد الإنفاق لكل محادثة</div><span class="mk-toggle is-on"></span></div>
  <div class="mk-cap__value">استخدمت <b><bdi>$0.32</bdi></b> من <bdi>$0.50</bdi></div>
  <div class="mk-bar mk-bar--amber"><i style="--w:64%"></i></div>
  <p class="mk-cap__rule"><i class="mk-ic mk-ic--alert"></i><span>عند الوصول إلى الحد: إيقاف الموظف الذكي مؤقتًا في المحادثة دي وتنبيه الفريق.</span></p>
</div><figcaption>مثال توضيحي للتوجيه وحد الإنفاق. الأرقام للتوضيح بس، ومش أسعار جينـو دو.</figcaption></figure>
<blockquote>حسّن المتوسط، مش النموذج.</blockquote>
<h2>إيه اللي تتابعه فعلًا</h2>
<p>علّق قدّام عينك تلات حاجات: المحادثة الواحدة اللي اتحلّت كلّفت كام، وكام محادثة وصلت لنتيجة، ونسبة الرسائل اللي احتاجت النموذج الأقوى. لما التوجيه يشتغل صح، أول رقمين بيتحسنوا والتالت بيفضل صغير.</p>
<p>وخلّي معاك شبكة أمان: حدّد حد إنفاق لكل محادثة، علشان أي محادثة خارجة عن السيطرة توقّف الموظف الذكي وتنبّه فريقك، بدل ما الميزانية تتصرف من غير ما تحس. <a href="/how-it-works#models">اعرف التوجيه الذكي بيشتغل إزاي</a>.</p></div>
  <div class="post-cta"><h3>ابدأ بأول موظف ذكاء اصطناعي عندك</h3><p>اختار النتيجة اللي عايزها، واربط قناة، وسيبه يبدأ يرد على عملائك.</p><div class="post-cta-row"><a href="https://app.genudo.ai/auth/register" class="btn btn-primary btn-lg">ابدأ دلوقتي</a><a href="/contact" class="post-cta-sec">احجز ديمو</a></div></div>
</div></article>

<section class="s white-bg"><div class="container">
  <div class="s-head"><span class="eyebrow">كمّل قراية</span><h2>كمان من المدوّنة</h2></div>
  <div class="blog-grid"><a class="pcard" href="/blog/ai-employees-vs-chatbots"><div class="pcover" style="background:linear-gradient(135deg,#4f46e5,#7c3aed)"><span class="pc-title">من الشات بوت لـ<span class="a">موظف بالذكاء الاصطناعي</span></span></div><div class="pc-body"><div class="pc-cat">أدلة عملية</div><h3>موظف بالذكاء الاصطناعي ولا شات بوت؟ إيه اللي اتغيّر فعلًا</h3><p>الشات بوت بيرد. الموظف بيخلّص الشغل. والفرق ده هو اللي بيحدد إنت تقدر تسلّم إيه.</p><div class="pc-meta"><span class="av">ي</span>ياسر السيد<span class="dot"></span>10 يوليو 2026</div></div></a><a class="pcard" href="/blog/whatsapp-team-workflows"><div class="pcover" style="background:linear-gradient(135deg,#0b7a63,#22c55e)"><span class="pc-title">الذكاء الاصطناعي على <span class="a"><bdi>WhatsApp</bdi></span></span></div><div class="pc-body"><div class="pc-cat">أدلة عملية</div><h3>شغّل فريقك من <bdi>WhatsApp</bdi> من غير فوضى</h3><p>الشغل بيحصل على <bdi>WhatsApp</bdi> مش في داشبورد. إزاي تفضل ماسك الخيوط من موبايلك.</p><div class="pc-meta"><span class="av">م</span>مريم عادل<span class="dot"></span>3 يوليو 2026</div></div></a><a class="pcard" href="/blog/pipeline-not-inbox"><div class="pcover" style="background:linear-gradient(135deg,#7c3aed,#a855f7)"><span class="pc-title">من محادثات لـ<span class="a">عملية شغل</span></span></div><div class="pc-body"><div class="pc-cat">أدلة عملية</div><h3>ليه الذكاء الاصطناعي بتاعك محتاج مسار، مش مجرد صندوق وارد</h3><p>صندوق الوارد بيقولك إيه اتقال. المسار بيقولك إيه اللي حصل في كل صفقة.</p><div class="pc-meta"><span class="av">م</span>مريم عادل<span class="dot"></span>9 يونيو 2026</div></div></a></div>
</div></section>
</div>`;
export default html;
