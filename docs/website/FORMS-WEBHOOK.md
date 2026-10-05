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

Add a **Code** node ("Format WhatsApp message", mode *Run Once for All Items*, JavaScript) between the webhook and the WhatsApp node, then set the WhatsApp `text` field to the expression `{{ $json.message }}`. The code is pure ASCII (emojis as `\u` escapes); labels are in English so copy-paste cannot corrupt it; a Code node also avoids expression-editor parsing limits; the original `body` is passed through for later nodes.

```javascript
// Format WhatsApp message (Run Once for All Items, JavaScript).
// Emojis are \u escapes so copy-paste can't corrupt them.
const TITLES = {
  demo_request: '\u{1f7e3} New demo request from the website',
  privacy_request: '\u{1f512} Privacy request (data subject) - needs a reply',
  document_request: '\u{1f4c4} Document request (DPA / Security)'
};
const LABELS = { name: 'Name', full_name: 'Name', company: 'Company', email: 'Email', work_email: 'Work email', phone: 'Phone', topic: 'Topic', message: 'Message', request_type: 'Request type', relationship: 'Relationship', country: 'Country', details: 'Details', document: 'Document', role: 'Role', confirmed: 'Confirmed accuracy' };
return $input.all().map((item) => {
  const body = item.json.body || {}; const data = body.data || {}; const meta = body.meta || {};
  const fields = Object.entries(data).filter(([, value]) => value !== '' && value != null)
    .map(([key, value]) => `*${LABELS[key] || key}:* ${Array.isArray(value) ? value.join(', ') : value}`).join('\n');
  const when = meta.submittedAt ? DateTime.fromISO(meta.submittedAt).setZone('Africa/Cairo').toFormat('dd LLL yyyy, HH:mm') : '-';
  const utm = Object.entries(meta.utm || {}).map(([k, v]) => `${k}=${v}`).join(' | ');
  const info = [
    `\u{1f310} *Page:* ${meta.page || '-'} (${meta.locale || '-'})`,
    `\u{1f552} *Time (Cairo):* ${when}`,
    `\u{1f4cd} *Country:* ${meta.country || '-'}`,
    meta.referrer ? `\u21a9\ufe0f *Came from:* ${meta.referrer}` : '',
    utm ? `\u{1f4e3} *Campaign:* ${utm}` : ''
  ].filter(Boolean).join('\n');
  const title = TITLES[body.form] || `\u{1f4dd} New form: ${body.form}`;
  return { json: { ...item.json, message: `*${title}*\n\n${fields}\n\n${info}` } };
});
```
