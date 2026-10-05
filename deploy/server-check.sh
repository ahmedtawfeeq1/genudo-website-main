#!/usr/bin/env bash
# Read-only inventory of how this server serves genudo.ai today. Changes nothing.
# Run:  bash server-check.sh 2>&1 | tee server-check.txt   (then share server-check.txt)
DOMAIN="${1:-genudo.ai}"
s() { echo; echo "===== $* ====="; }
s "OS / resources";       uname -a; cat /etc/os-release 2>/dev/null | head -4; nproc; free -h; df -h / | tail -1
s "Docker";               docker --version 2>&1; docker compose version 2>&1; (docker ps --format 'table {{.Names}}\t{{.Image}}\t{{.Ports}}\t{{.Status}}' 2>&1 || sudo docker ps 2>&1) | head -30
s "Listening ports";      (sudo ss -tlnp 2>/dev/null || ss -tlnp) | grep -E ':(80|443|3000|3001|5173|8080|8000)\b' || echo "none of the usual ports"
s "Web servers running";  ps -eo pid,user,cmd | grep -Ei 'nginx|apache2|httpd|caddy|traefik|pm2|node|serve' | grep -v grep | head -20
s "nginx config for $DOMAIN"
if command -v nginx >/dev/null; then
  nginx -v 2>&1; sudo nginx -T 2>/dev/null | grep -nE "server_name|listen|root |proxy_pass|ssl_certificate|include .*sites|# configuration file" | grep -B2 -A8 -i "$DOMAIN" | head -80
  ls -la /etc/nginx/sites-enabled/ /etc/nginx/conf.d/ 2>/dev/null
else echo "nginx not installed"; fi
s "Caddy / Apache";       (command -v caddy && sudo cat /etc/caddy/Caddyfile 2>/dev/null | head -40) || echo "no caddy"; (command -v apache2 || command -v httpd) && sudo apachectl -S 2>&1 | head -20 || echo "no apache"
s "TLS certificates";     (sudo certbot certificates 2>/dev/null | grep -E "Certificate Name|Domains|Expiry|Path") || ls -la /etc/letsencrypt/live/ 2>/dev/null || echo "no certbot"
s "PM2 / systemd node apps"; (pm2 list 2>/dev/null || echo "no pm2"); systemctl list-units --type=service --no-pager 2>/dev/null | grep -Ei 'node|next|vite|genudo|web' | head
s "Old site files (guess)"; for d in /var/www /srv /opt /home/*/; do [ -d "$d" ] && find "$d" -maxdepth 3 -iname "*genudo*" 2>/dev/null; done | head -20
s "DNS vs this server";   echo "DNS $DOMAIN -> $(getent hosts $DOMAIN | awk '{print $1}' | head -1)   www -> $(getent hosts www.$DOMAIN | awk '{print $1}' | head -1)"; echo "this server public IP -> $(curl -s -m 5 https://ifconfig.me || echo unknown)"
s "What the domain serves now"; curl -sI -m 10 "https://$DOMAIN" | head -12
s "Firewall";             (sudo ufw status 2>/dev/null | head -10) || echo "no ufw"
echo; echo "Done. Nothing was changed."
