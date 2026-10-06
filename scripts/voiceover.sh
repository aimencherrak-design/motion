#!/usr/bin/env bash
# Génère la voix off (TTS) et la cale sur le découpage des scènes → apporteur-affaires-auto/audio/voix.flac
# (piste sèche ; l'égalisation, la compression et la réverbération sont faites par scripts/sound.py).
#
# Voix : « pierre » (UPMC, masculine), via Piper TTS. Prérequis : ffmpeg + `pip install piper-tts`, puis :
#   curl -LO https://github.com/k2-fsa/sherpa-onnx/releases/download/tts-models/vits-piper-fr_FR-upmc-medium.tar.bz2
#   tar xjf vits-piper-fr_FR-upmc-medium.tar.bz2
#   PIPER_VOICE=vits-piper-fr_FR-upmc-medium/fr_FR-upmc-medium.onnx scripts/voiceover.sh
#
# Piper varie légèrement d'une génération à l'autre : après une nouvelle génération, revérifie les
# temps de parole (voix-off.srt) par rapport aux animations. Pour réutiliser des prises existantes
# (l1.wav … l6.wav), passe TAKES=dossier.
set -euo pipefail

DIR="$(cd "$(dirname "$0")/.." && pwd)/apporteur-affaires-auto"
OUT="$DIR/audio/voix.flac"
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

# début (s) | vitesse (length-scale) | texte — chaque phrase démarre sur l'animation de sa scène
LINES=(
  "0.12|0.93|Vous vendez, vous louez, ou vous cherchez un véhicule qui vous correspond ?"
  "4.35|1.0|Je suis apporteur d'affaires automobile."
  "6.60|1.0|Je mets en relation vendeurs particuliers, garages, agences de dépôt-vente et loueurs."
  "12.35|1.0|Sans risque, sans engagement : une commission, uniquement si l'affaire se conclut."
  "18.35|1.0|Structuré, réactif, chaque contact est suivi sérieusement."
  "24.35|1.0|Besoin d'un apporteur sérieux ? Contactez-moi."
)

inputs=(); filters=""; labels=""
for i in "${!LINES[@]}"; do
  IFS='|' read -r start speed text <<< "${LINES[$i]}"
  take="$TMP/l$((i + 1)).wav"
  if [[ -n "${TAKES:-}" ]]; then
    cp "$TAKES/l$((i + 1)).wav" "$take"
  else
    PIPER_VOICE="${PIPER_VOICE:?Chemin du modèle .onnx (variable PIPER_VOICE)}"
    "${PIPER:-piper}" -m "$PIPER_VOICE" -c "$PIPER_VOICE.json" --speaker 1 \
      --noise-scale 0.72 --noise-w-scale 0.85 --length-scale "$speed" --sentence-silence 0.3 \
      -f "$take" < <(echo "$text") >/dev/null 2>&1
  fi
  printf '%6.2fs  %5.2fs  %s\n' "$start" "$(ffprobe -v error -show_entries format=duration -of csv=p=0 "$take")" "$text"
  ms=$(awk -v s="$start" 'BEGIN { printf "%d", s * 1000 }')
  inputs+=(-i "$take")
  filters+="[$i:a]aresample=48000,adelay=${ms}[v$i];"
  labels+="[v$i]"
done

mkdir -p "$(dirname "$OUT")"
ffmpeg -nostdin -y -loglevel error "${inputs[@]}" -filter_complex \
  "${filters}${labels}amix=inputs=${#LINES[@]}:normalize=0,apad=whole_dur=30,atrim=0:30[out]" \
  -map "[out]" -ac 1 -ar 48000 -c:a flac "$OUT"
echo "Voix → ${OUT#"$(pwd)"/}"
