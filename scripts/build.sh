#!/usr/bin/env bash
# Rendu complet : vidéo 16:9 + bruitages synchronisés → renders/
#   1. images de la composition → vidéo muette (Chromium + ffmpeg)
#   2. export des repères de bruitage depuis la timeline
#   3. synthèse et mixage des bruitages (scripts/sound.py)
#   4. assemblage + image de couverture
set -euo pipefail
cd "$(dirname "$0")/.."

COMP=apporteur-affaires-auto
OUT=renders/apporteur-affaires-auto_16x9.mp4
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

node scripts/render.mjs "$COMP" --out "$TMP/video.mp4"
node scripts/render.mjs "$COMP" --cues "$COMP/audio/sfx-cues.json"
python3 scripts/sound.py "$COMP/audio/sfx-cues.json" "$COMP/audio/sfx.m4a"

mkdir -p renders
ffmpeg -nostdin -y -loglevel error -i "$TMP/video.mp4" -i "$COMP/audio/sfx.m4a" \
  -map 0:v -map 1:a -c copy -shortest -movflags +faststart "$OUT"
node scripts/render.mjs "$COMP" --still 2.5 --out renders/couverture.png
echo "→ $OUT · renders/couverture.png"
