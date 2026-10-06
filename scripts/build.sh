#!/usr/bin/env bash
# Rendu complet : vidéo 16:9 + bruitages synchronisés + voix → renders/
#   1. images de la composition → vidéo muette (Chromium + ffmpeg)
#   2. export des repères de bruitage depuis la timeline
#   3. synthèse des bruitages, traitement de la voix, mixage (scripts/sound.py)
#   4. assemblage : version avec voix + version bruitages seuls (pour poser ta propre voix)
set -euo pipefail
cd "$(dirname "$0")/.."

COMP=apporteur-affaires-auto
NAME=apporteur-affaires-auto_30s_16x9
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

node scripts/render.mjs "$COMP" --out "$TMP/video.mp4"
node scripts/render.mjs "$COMP" --cues "$COMP/audio/sfx-cues.json"
python3 scripts/sound.py "$COMP/audio/sfx-cues.json" "$COMP/audio/voix.flac" "$COMP/audio"

mkdir -p renders
mux() { ffmpeg -nostdin -y -loglevel error -i "$TMP/video.mp4" -i "$1" -map 0:v -map 1:a -c copy -shortest -movflags +faststart "$2"; }
mux "$COMP/audio/mix.m4a" "renders/$NAME.mp4"
mux "$COMP/audio/sfx.m4a" "renders/${NAME}_sans-voix.mp4"
node scripts/render.mjs "$COMP" --still 3.3 --out renders/couverture.png
echo "→ renders/$NAME.mp4 · renders/${NAME}_sans-voix.mp4 · renders/couverture.png"
