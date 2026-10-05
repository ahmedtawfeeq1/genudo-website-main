---
project: genudo-website
topic: forms-webhook-contract
type: note
date: 2026-10-05
source: claude-code
tags: [website, forms, n8n, webhook]
loredex: routed
---

# Website forms → n8n webhook

Every form on the website posts to the site's own endpoint `POST /api/forms`. The server validates it, drops spam and forwards **one JSON envelope** to n8n:

- **Webhook:** `FORMS_WEBHOOK_URL` (default `https://automationv2.loop-x.co/webhook/genudo-website-forms`)
- **Method / type:** `POST`, `application/json`
- **Optional auth header:** `X-GenuDo-Signature: <FORMS_WEBHOOK_SECRET>`. Set the same secret in Docker and check it in n8n so nobody else can post to the webhook.
- **The website treats any 2xx as delivered.** Anything else (or no answer within 10 s) shows the visitor an error and asks them to retry or email info@genudo.ai. Respond quickly from n8n (e.g. "Respond immediately") and do the slow work after.

## Envelope

```json
{
  "form": "demo_request | privacy_request | document_request",
  "data": { "...": "form fields, see below" },
  "meta": {
    "submittedAt": "2026-10-05T09:41:00.000Z",
    "locale": "ar-EG | en",
    "page": "/ar-EG/contact",
    "pageTitle": "…",
    "referrer": "https://www.google.com/",
    "utm": { "utm_source": "…", "utm_medium": "…", "utm_campaign": "…", "utm_term": "…", "utm_content": "…", "gclid": "…", "fbclid": "…" },
    "timezone": "Africa/Cairo",
    "ip": "visitor IP (from the proxy's X-Forwarded-For)",
    "userAgent": "…",
    "country": "EG (only if Cloudflare/Vercel sets a country header)",
    "site": "https://genudo.ai"
  }
}
```

Route in n8n with a **Switch on `{{$json.body.form}}`**.

## Forms

### 1. `demo_request`: "Book a demo" (`/contact`, EN + AR)

| Field | Required | Notes |
|---|---|---|
| `name` | yes | |
| `company` | no | |
| `email` | yes | |
| `phone` | no | |
| `topic` | no | value of the topic dropdown |
| `message` | yes | what they want the AI employee to do |

Suggested flow: create the lead in your CRM / GenuDo pipeline, notify sales on WhatsApp/Slack, send the visitor a confirmation in their `meta.locale`.

### 2. `privacy_request`: data subject request (`/privacy/requests`, EN + AR)

| Field | Required | Values |
|---|---|---|
| `request_type` | yes | `access`, `correction`, `deletion`, `portability`, `objection`, `restriction`, `withdraw_consent`, `complaint`, `other` |
| `relationship` | yes | `customer`, `end_user` (messaged a business using GenuDo), `employee_of_customer`, `visitor`, `other` |
| `full_name` | yes | |
| `email` | yes | |
| `phone` | no | |
| `country` | yes | Egypt / Saudi Arabia / UAE / Bahrain / EU-EEA / Other (in the visitor's language) |
| `company` | no | the business they contacted or work for |
| `details` | yes | |
| `confirmed` | yes | `"yes"`: accuracy and identity-verification consent |

**Legal clock starts at `meta.submittedAt`.** Suggested flow: log every request in a secure register (Egypt's Executive Regulations require documented requests), email the DPO (dpo@genudo.ai), auto-acknowledge the requester, verify identity, then act. If `relationship` is `end_user` or `employee_of_customer`, GenuDo is usually the *processor*: forward to the relevant customer (the controller) per the DPA.

### 3. `document_request`: DPA or security whitepaper (`/legal/dpa`, `/security/whitepaper`)

| Field | Required | Values |
|---|---|---|
| `document` | yes | `dpa` or `security_whitepaper` |
| `full_name` | yes | |
| `work_email` | yes | |
| `company` | yes | |
| `role` | no | |
| `country` | yes | |
| `message` | no | |

Suggested flow: send the PDF (or route to legal for approval first), log the request, add the contact to sales follow-up.

## Protection built in

- **Honeypot:** a hidden `website` field; bots that fill it get a fake "ok" and nothing is forwarded.
- **Rate limits:** 8 per minute per client IP, plus a site-wide cap (`FORMS_GLOBAL_PER_MIN`, default 60/min) that fails closed even if addresses are spoofed. Only valid submissions about to be forwarded count toward the site-wide cap, so junk requests cannot lock real visitors out; if valid-looking spam ever exhausts it, add a CAPTCHA. The client IP is read only from `FORMS_CLIENT_IP_HEADER` (default `X-Real-IP`), which **the reverse proxy must overwrite on every request** (nginx: `proxy_set_header X-Real-IP $remote_addr;`). Both limits are in memory per container; move them to the proxy or Redis if you run several replicas.
- **Limits:** at most 40 fields, 5,000 characters per value; unknown `form` values and submissions without an email are rejected (400) before reaching n8n.
- The webhook URL is never exposed to the browser.

## Test it

```bash
curl -X POST https://genudo.ai/api/forms -H 'Content-Type: application/json' \
  -d '{"form":"demo_request","data":{"name":"TEST","email":"qa@example.com","message":"test"},"meta":{"locale":"en","page":"/en/contact"}}'
```

## n8n: WhatsApp notification text (all forms)

Use as an **Expression** in the WhatsApp node's `text` field (directly after the webhook node; otherwise replace `$json.body` with `$('<webhook node name>').item.json.body`):

```
{{ (() => {
  const b = $json.body || {};
  const d = b.data || {};
  const m = b.meta || {};
  const title = {
    demo_request: '🟣 طلب ديمو جديد من الموقع',
    privacy_request: '🔒 طلب خصوصية (صاحب بيانات) — يحتاج رد',
    document_request: '📄 طلب وثيقة (DPA / Security)'
  }[b.form] || ('📝 نموذج جديد: ' + b.form);
  const label = {
    name: 'الاسم', full_name: 'الاسم', company: 'الشركة', email: 'الإيميل', work_email: 'إيميل العمل',
    phone: 'الموبايل', topic: 'الموضوع', message: 'الرسالة', request_type: 'نوع الطلب',
    relationship: 'العلاقة', country: 'الدولة', details: 'التفاصيل', document: 'الوثيقة',
    role: 'الوظيفة', confirmed: 'أكّد صحة البيانات'
  };
  const fields = Object.entries(d)
    .filter(([, v]) => v !== '' && v != null)
    .map(([k, v]) => `*${label[k] || k}:* ${Array.isArray(v) ? v.join(', ') : v}`)
    .join('\n');
  const when = m.submittedAt ? DateTime.fromISO(m.submittedAt).setZone('Africa/Cairo').toFormat('dd LLL yyyy, HH:mm') : '-';
  const utm = m.utm && Object.keys(m.utm).length ? Object.entries(m.utm).map(([k, v]) => `${k}=${v}`).join(' | ') : '';
  const info = [
    `🌐 *الصفحة:* ${m.page || '-'} (${m.locale || '-'})`,
    `🕒 *الوقت (القاهرة):* ${when}`,
    `📍 *الدولة:* ${m.country || '-'}`,
    m.referrer ? `↩️ *جاي من:* ${m.referrer}` : '',
    utm ? `📣 *الحملة:* ${utm}` : ''
  ].filter(Boolean).join('\n');
  return `*${title}*\n\n${fields}\n\n${info}`;
})() }}
```
