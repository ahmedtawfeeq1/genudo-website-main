// /api-docs — value-led rewrite (ar-EG). See docs/website/BUILD-BRIEF.md.
const html = `<div class="pg-api-docs">
<div class="rhead"><div class="container">
  <div class="crumb"><a href="/resources">الموارد</a><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg><span>توثيق <bdi>API</bdi></span></div>
  <h1>توثيق <bdi>API</bdi></h1>
  <p>ابني فوق <bdi>جينـو دو</bdi>: اعمل وكلاء، ووجّه المحادثات، واقرا جهات الاتصال والمسارات، وابعت البيانات لأنظمتك في الوقت المناسب، من خلال <bdi>REST API</bdi> و <bdi>MCP</bdi>.</p>
</div></div>

<section class="s-sm"><div class="container">
  <div class="docs">
    <nav class="docs-nav" aria-label="أقسام توثيق API">
      <div class="dn-sec">البداية</div>
      <a href="#intro" class="on">المقدمة</a>
      <a href="#auth">المصادقة</a>
      <a href="#errors">الأخطاء وحدود الاستخدام</a>
      <div class="dn-sec">الموارد الأساسية</div>
      <a href="#agents">الوكلاء</a>
      <a href="#conversations">المحادثات</a>
      <a href="#contacts">جهات الاتصال</a>
      <a href="#pipelines">المسارات</a>
      <div class="dn-sec">الأتمتة والتوسّع</div>
      <a href="#actions">إجراءات المراحل</a>
      <a href="#mcp">MCP</a>
    </nav>
    <main class="docs-main">
      <section id="intro">
        <h2>المقدمة</h2>
        <p>الـ <bdi>API</bdi> بتاع <bdi>جينـو دو</bdi> مبني على <bdi>REST</bdi>: روابط واضحة لكل مورد، والرد بصيغة <bdi>JSON</bdi>، وبنستخدم أوامر <bdi>HTTP</bdi> وأكواد الحالة المعتادة. الرابط الأساسي لكل الطلبات:</p>
        <div class="endpoint"><span class="method get">BASE</span><span class="path">https://api.genudo.ai/v1</span></div>
        <div class="callout"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 8v4M12 16h.01"/></svg><span>اربط <bdi>جينـو دو</bdi> بالأنظمة اللي شغّال عليها: اقرا الفرص وحدّثها، وابعت رسايل، وخلّي قاعدة المعرفة محدّثة. المرجع الكامل والمحدّث دايمًا على <span class="mono">api.genudo.ai/docs</span>.</span></div>
      </section>

      <section id="auth">
        <h2>المصادقة</h2>
        <p>الـ <bdi>API</bdi> بيستخدم توكن محدد الصلاحيات وتقدر تلغيه، وبتبعته كـ <bdi>Bearer token</bdi>. بتنشئ التوكنات من «مفاتيح <bdi>API</bdi> ورموز الوصول» في قسم المطوّر بالقايمة الجانبية. خلّي التوكن على السيرفر بس، ومتحطّوش في المتصفح أبدًا.</p>
        <div class="code"><div class="code-head"><span class="lang">cURL</span></div><pre><span class="c"># Every request carries your token as a Bearer token</span>
curl https://api.genudo.ai/v1/agents \\
  -H <span class="s">"Authorization: Bearer $GENUDO_TOKEN"</span></pre></div>
        <p>كل توكن ليه الصلاحيات اللي إنت بتديهاله بس:</p>
        <div class="scopes"><code>opportunities:read</code><code>opportunities:write</code><code>conversations:write</code><code>messages:send</code><code>knowledge:read</code><code>knowledge:write</code><code>mcp:use</code></div>
        <p>التوكن الكامل بيظهر مرة واحدة بس وقت إنشائه، وبعدها بنحتفظ بس بنسخة <bdi>hash</bdi> منه، مش التوكن نفسه. مدته 30 يوم أو 90 يوم (الافتراضي) أو سنة أو من غير انتهاء، وتقدر تلغيه في أي وقت. المرجع الكامل على <span class="mono">api.genudo.ai/docs</span>.</p>
      </section>

      <section id="errors">
        <h2>الأخطاء وحدود الاستخدام</h2>
        <p>بنستخدم أكواد حالة <bdi>HTTP</bdi> المعتادة: <span class="mono">2xx</span> معناها نجاح، و<span class="mono">4xx</span> معناها مشكلة في الطلب، و<span class="mono">5xx</span> معناها خطأ من عندنا. الأخطاء بترجع بصيغة <bdi>JSON</bdi> فيها <span class="mono">code</span> تقدر تقراه برمجيًا ورسالة مفهومة.</p>
        <div class="code"><div class="code-head"><span class="lang">JSON · 422</span></div><pre>{
  <span class="k">"error"</span>: {
    <span class="k">"code"</span>: <span class="s">"validation_error"</span>,
    <span class="k">"message"</span>: <span class="s">"channel is required"</span>,
    <span class="k">"param"</span>: <span class="s">"channel"</span>
  }
}</pre></div>
        <p>فيه حد لعدد الطلبات لكل مساحة عمل. لو جالك <span class="mono">429</span> يبقى استنّى شوية وجرّب تاني بفاصل زمني بيزيد تدريجيًا.</p>
      </section>

      <section id="agents">
        <h2>الوكلاء</h2>
        <p>الوكيل هو موظف ذكاء اصطناعي متظبّط: شخصية، وقاعدة معرفة، وأدوات، وسياسة لاختيار النموذج. أنشئه وبعدين شغّله على أي قناة.</p>
        <div class="endpoint"><span class="method post">POST</span><span class="path">/v1/agents</span></div>
        <div class="endpoint"><span class="method get">GET</span><span class="path">/v1/agents/{id}</span></div>
        <div class="param head"><span class="pn">المعامل</span><span class="pt">النوع</span><span class="pd">الوصف</span></div>
        <div class="param"><span class="pn">name</span><span class="pt">string</span><span class="pd">اسم الوكيل، مثلًا «وكيل المبيعات».</span></div>
        <div class="param"><span class="pn">persona</span><span class="pt">string</span><span class="pd">التعليمات والأسلوب اللي بيمشي عليهم الوكيل.</span></div>
        <div class="param"><span class="pn">knowledge_ids</span><span class="pt">array</span><span class="pd">قواعد المعرفة اللي الوكيل بيقرا منها.</span></div>
        <div class="param"><span class="pn">model_policy</span><span class="pt">object</span><span class="pd">قواعد التوجيه: نموذج سريع أو نموذج تفكير حسب المهمة.</span></div>
        <div class="code"><div class="code-head"><span class="lang">Node</span></div><pre><span class="k">const</span> res = <span class="k">await</span> fetch(<span class="s">"https://api.genudo.ai/v1/agents"</span>, {
  method: <span class="s">"POST"</span>,
  headers: {
    <span class="k">"Authorization"</span>: <span class="s">"Bearer "</span> + process.env.GENUDO_TOKEN,
    <span class="k">"Content-Type"</span>: <span class="s">"application/json"</span>
  },
  body: <span class="p">JSON</span>.stringify({
    name: <span class="s">"Sales Agent"</span>,
    persona: <span class="s">"Friendly, concise. Qualify then book a meeting."</span>,
    knowledge_ids: [<span class="s">"kb_inventory"</span>, <span class="s">"kb_pricing"</span>],
    model_policy: { <span class="k">routing</span>: <span class="s">"auto"</span> }
  })
});
<span class="k">const</span> agent = <span class="k">await</span> res.json();</pre></div>
      </section>

      <section id="conversations">
        <h2>المحادثات</h2>
        <p>ابعت رسالة جوه محادثة واستلم رد الوكيل، أو اعرض السجل. كل محادثة مرتبطة بجهة اتصال وقناة.</p>
        <div class="endpoint"><span class="method post">POST</span><span class="path">/v1/conversations/{id}/messages</span></div>
        <div class="code"><div class="code-head"><span class="lang">JSON · response</span></div><pre>{
  <span class="k">"id"</span>: <span class="s">"msg_9f2"</span>,
  <span class="k">"role"</span>: <span class="s">"agent"</span>,
  <span class="k">"text"</span>: <span class="s">"The villa is available. Shall I hold Thursday 2pm?"</span>,
  <span class="k">"model"</span>: <span class="s">"fast"</span>,
  <span class="k">"cost_usd"</span>: <span class="n">0.0021</span>,
  <span class="k">"stage"</span>: <span class="s">"qualified"</span>
}</pre></div>
      </section>

      <section id="contacts">
        <h2>جهات الاتصال</h2>
        <p>جهات الاتصال بتجمّع العميل الواحد من كل القنوات. اقرا ملفه بسجله المجمّع وخصائصه ومكانه في المسار.</p>
        <div class="endpoint"><span class="method get">GET</span><span class="path">/v1/contacts/{id}</span></div>
        <div class="endpoint"><span class="method post">POST</span><span class="path">/v1/contacts/{id}/attributes</span></div>
      </section>

      <section id="pipelines">
        <h2>المسارات</h2>
        <p>اقرا مراحل المسار وانقل جهة اتصال بين المراحل. تغيير المرحلة بيشغّل الإجراءات اللي ظبطتها.</p>
        <div class="endpoint"><span class="method get">GET</span><span class="path">/v1/pipelines/{id}</span></div>
        <div class="endpoint"><span class="method post">POST</span><span class="path">/v1/pipelines/{id}/move</span></div>
      </section>

      <section id="actions">
        <h2>إجراءات المراحل</h2>
        <p>ابعت البيانات في اللحظة اللي تفرق فيها. كل مرحلة ممكن يكون عليها إجراءات بتكلّم الرابط بتاعك (<bdi>POST</bdi> افتراضيًا) بالحقول اللي إنت بتربطها من المحادثة: أول ما المرحلة تبدأ، أو مع أي رسالة، أو مع رسالة العميل، أو لما الذكاء الاصطناعي يقرّر إن ده وقته (زي إنه يدوّر على مواعيد فاضية أو يحجز ميعاد). إنت اللي بتحدد الـ <bdi>headers</bdi> والبيانات اللي بتتبعت، وعدد مرات التشغيل وعدد المحاولات، وكل تشغيل بيتسجّل.</p>
        <div class="code"><div class="code-head"><span class="lang">JSON · payload</span></div><pre>{
  <span class="k">"contact_name"</span>: <span class="s">"Mona Adel"</span>,
  <span class="k">"phone"</span>: <span class="s">"+20 100 000 0000"</span>,
  <span class="k">"stage"</span>: <span class="s">"qualified"</span>,
  <span class="k">"client_needs"</span>: <span class="s">"Evening slot, two people"</span>
}</pre></div>
      </section>

      <section id="mcp" style="border-bottom:0">
        <h2>MCP</h2>
        <p><bdi>جينـو دو</bdi> بيدعم <strong>Model Context Protocol</strong>. وصّل <bdi>Claude</bdi> أو <bdi>Claude Code</bdi> أو <bdi>ChatGPT</bdi> أو <bdi>Codex</bdi> أو أي عميل بتاعك بسيرفر <bdi>MCP</bdi> بتاع <bdi>جينـو دو</bdi>، وابني وكلاءك وضيف لهم معرفة وشغّلهم من المحرر أو من الشات. سجّل دخولك من المتصفح، أو استخدم توكن فيه صلاحية <span class="mono">mcp:use</span>.</p>
        <div class="code"><div class="code-head"><span class="lang">shell</span></div><pre><span class="c"># MCP server URL</span>
https://api.genudo.ai/mcp

<span class="c"># Claude Code</span>
claude mcp add --transport http genudo \\
  https://api.genudo.ai/mcp</pre></div>
        <div class="callout"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m8 6-6 6 6 6"/><path d="m16 6 6 6-6 6"/></svg><span>عايز تشتغل بكلام عادي؟ شوف <a href="/api-mcp"><bdi>API</bdi> و <bdi>MCP</bdi></a> علشان تشغّل فريقك من <bdi>Claude</bdi> أو <bdi>ChatGPT</bdi> وكل تغيير بيظهرلك كـ <bdi>diff</bdi> قبل ما يتنفّذ.</span></div>
      </section>
    </main>
  </div>
</div></section>
</div>`;
export default html;
