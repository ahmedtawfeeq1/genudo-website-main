#!/usr/bin/env bash
# Writes /etc/nginx/conf.d/genudo-cloudflare.conf: trust CF-Connecting-IP ONLY from
# Cloudflare's published ranges (so $remote_addr = real visitor), and pass Cloudflare's
# original scheme. Re-run occasionally; Cloudflare's ranges change rarely.
set -euo pipefail
OUT=/etc/nginx/conf.d/genudo-cloudflare.conf
TMP=$(mktemp)
{
  echo "# Generated $(date -u +%F) by install-cloudflare-realip.sh"
  for ip in $(curl -fsS https://www.cloudflare.com/ips-v4) $(curl -fsS https://www.cloudflare.com/ips-v6); do
    echo "set_real_ip_from $ip;"
  done
  echo "real_ip_header CF-Connecting-IP;"
  echo 'map $http_x_forwarded_proto $genudo_fwd_proto { default $http_x_forwarded_proto; "" $scheme; }'
} > "$TMP"
grep -q "set_real_ip_from" "$TMP" || { echo "Could not download Cloudflare ranges"; exit 1; }
sudo install -m 644 "$TMP" "$OUT"
rm -f "$TMP"
sudo nginx -t
echo "Wrote $OUT ($(grep -c set_real_ip_from $OUT) ranges). Reload nginx to apply."
