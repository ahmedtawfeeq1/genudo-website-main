---
project: genudo-website
topic: deploy-docker
type: note
date: 2026-10-05
source: claude-code
tags: [deploy, docker, nginx, cloudflare]
loredex: routed
---

# Deploy the GenuDo website (production server runbook)

## The setup

```
visitor ──HTTPS──> Cloudflare ──HTTP:80──> nginx (EC2, Ubuntu 24.04) ──> 127.0.0.1:3001  genudo-website container
                                                  ├─ app.genudo.ai / console  -> :4173   (unchanged)
                                                  └─ tools.genudo.ai          -> :3000   genudo-ops-center (unchanged)
```

- **Image:** built by GitHub Actions (`.github/workflows/docker-image.yml`) and published to `ghcr.io/ahmedtawfeeq1/genudo-website`. The server only pulls it: with 1 GB RAM and ~1.8 GB free disk it cannot build Next.js.
- **Tags:** `latest` (main), `feat-value-led-website` (this branch), `sha-<commit>` (pin or rollback).
- **Port:** 3001 (3000 is used by ops-center).
- **Old site:** static files in `/home/ubuntu/genudo/dist`, served by `/etc/nginx/sites-available/genudo.ai`. Untouched, so rollback is one config swap.

## One-time setup

```bash
# 1. Code (only the compose/env/nginx files are used; no build on the server)
git clone -b feat/value-led-website https://github.com/ahmedtawfeeq1/genudo-website-main.git ~/genudo-website
cd ~/genudo-website
cp .env.example .env
nano .env    # IMAGE_TAG=feat-value-led-website (until merged to main), WEB_PORT=3001, FORMS_WEBHOOK_SECRET=...

# 2. Pull and start (the old site keeps serving the domain)
docker compose pull
docker compose up -d
docker compose ps                                          # wait for (healthy)
curl -s -o /dev/null -w "%{http_code}\n" http://127.0.0.1:3001/en          # 200
curl -s http://127.0.0.1:3001/ar-EG | grep -o "<title>[^<]*"               # Arabic title

# 3. nginx: real visitor IP from Cloudflare + proxy snippet
bash deploy/nginx/install-cloudflare-realip.sh
sudo cp deploy/nginx/genudo-proxy.conf /etc/nginx/snippets/genudo-proxy.conf
sudo nginx -t
```

If the image pull is denied, the GHCR package is still private: GitHub → your profile → Packages → `genudo-website` → Package settings → Change visibility → Public (the repo is already public), or `docker login ghcr.io -u ahmedtawfeeq1` with a token that has `read:packages`.

## Switch genudo.ai to the new site

```bash
sudo cp /etc/nginx/sites-available/genudo.ai ~/genudo.ai.nginx.old-site.bak
sudo cp ~/genudo-website/deploy/nginx/genudo.ai.cloudflare.conf /etc/nginx/sites-available/genudo.ai
sudo nginx -t && sudo systemctl reload nginx
curl -s -H "Host: genudo.ai" http://127.0.0.1/en | grep -o "<title>[^<]*"   # new site via nginx
curl -sI https://genudo.ai/en | head -3                                      # via Cloudflare
```

Then purge the Cloudflare cache (Caching → Configuration → Purge Everything).

## Rollback (about a minute)

```bash
sudo cp ~/genudo.ai.nginx.old-site.bak /etc/nginx/sites-available/genudo.ai
sudo nginx -t && sudo systemctl reload nginx
```

## Deploy updates

Push to the branch → GitHub Actions publishes a new image (about 3 minutes) → on the server:

```bash
cd ~/genudo-website && git pull && docker compose pull && docker compose up -d && docker image prune -f
```

Pin a version instead with `IMAGE_TAG=sha-<commit>` in `.env`.

## Cloudflare settings to confirm

- SSL/TLS mode: **Flexible** works with this origin (port 80 only). Full/Strict would need an origin certificate on nginx.
- "Always Use HTTPS": on. nginx must NOT redirect http→https itself (loop under Flexible).
- Optional: block direct access to the origin by allowing only Cloudflare IPs on port 80 (security group).

## After go-live

- Submit `https://genudo.ai/sitemap.xml` in Google Search Console and Bing Webmaster Tools.
- Refresh link previews (Facebook Sharing Debugger, LinkedIn Post Inspector).
- Logs: `docker compose logs -f web`.
