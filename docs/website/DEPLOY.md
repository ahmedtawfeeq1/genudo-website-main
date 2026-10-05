---
project: genudo-website
topic: deploy-docker
type: note
date: 2026-10-05
source: claude-code
tags: [deploy, docker, nginx]
---

# Deploy the GenuDo website with Docker

The site runs as one container (`genudo-website`, Next.js standalone, non-root, read-only filesystem) listening on `127.0.0.1:3000`. The web server you already use for the domain (nginx assumed below) keeps handling HTTPS and forwards to it. The forms endpoint needs this server process, so the site cannot be served as static files.

## 0. Inventory (read-only)

```bash
curl -fsSL https://raw.githubusercontent.com/ahmedtawfeeq1/genudo-website-main/feat/value-led-website/deploy/server-check.sh -o server-check.sh
bash server-check.sh 2>&1 | tee server-check.txt
```

## 1. Get the code and build (old site keeps running)

```bash
sudo mkdir -p /opt/genudo-website && sudo chown $USER /opt/genudo-website
git clone -b feat/value-led-website https://github.com/ahmedtawfeeq1/genudo-website-main.git /opt/genudo-website
cd /opt/genudo-website
cp .env.example .env        # edit if needed (webhook URL/secret, port)
docker compose build
docker compose up -d
docker compose ps           # wait for "healthy"
```

If port 3000 is already taken on the server, set `WEB_PORT=3001` in `.env` and use that port in the nginx `upstream` too.

## 2. Test before switching the domain

```bash
curl -sI http://127.0.0.1:3000/en | head -3                 # 200
curl -s  http://127.0.0.1:3000/en | grep -o "<title>[^<]*"   # page title
curl -sI http://127.0.0.1:3000/ar-EG/legal/privacy-policy | head -1
```

## 3. Switch the domain (nginx)

```bash
sudo cp /etc/nginx/sites-available/genudo.ai /etc/nginx/sites-available/genudo.ai.old-site.bak   # keep the old config
sudo cp deploy/nginx/genudo-proxy.conf /etc/nginx/snippets/genudo-proxy.conf
sudo cp deploy/nginx/genudo.ai.conf /etc/nginx/sites-available/genudo.ai
#   edit the ssl_certificate lines to match the paths in the old config
sudo nginx -t && sudo systemctl reload nginx
curl -sI https://genudo.ai | head -5                        # served by the new site
```

## 4. Rollback (one minute)

```bash
sudo cp /etc/nginx/sites-available/genudo.ai.old-site.bak /etc/nginx/sites-available/genudo.ai
sudo nginx -t && sudo systemctl reload nginx
```

The old site files are not touched, so rollback is just the config.

## 5. Updates later

```bash
cd /opt/genudo-website && git pull && docker compose build && docker compose up -d
docker image prune -f
```

## After go-live

- Submit `https://genudo.ai/sitemap.xml` in Google Search Console and Bing Webmaster Tools.
- Re-share a link in the Facebook Sharing Debugger and LinkedIn Post Inspector to refresh previews.
- Set `FORMS_WEBHOOK_SECRET` in `.env` and check `X-GenuDo-Signature` in n8n.
- Logs: `docker compose logs -f web`.
