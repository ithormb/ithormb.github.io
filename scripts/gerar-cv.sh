#!/usr/bin/env bash
# Gera public/cv/*.pdf a partir de /pt/cv/ e /en/cv/ do build atual.
# Precisa de um Gotenberg alcançável (GOTENBERG) e do out/ servido em SITE.
set -euo pipefail
GOTENBERG=${GOTENBERG:-http://localhost:3000}
SITE=${SITE:-http://localhost:8080}
for l in pt en; do
  sufixo=$([ "$l" = en ] && echo "-en" || echo "")
  curl -sf -o "public/cv/thomas-barbosa-cv${sufixo}.pdf" \
    -F url="$SITE/$l/cv/" -F paperWidth=8.27 -F paperHeight=11.7 \
    -F marginTop=0 -F marginBottom=0 -F marginLeft=0 -F marginRight=0 \
    -F printBackground=true -F preferCssPageSize=true -F waitDelay=2s \
    "$GOTENBERG/forms/chromium/convert/url"
  echo "public/cv/thomas-barbosa-cv${sufixo}.pdf"
done
