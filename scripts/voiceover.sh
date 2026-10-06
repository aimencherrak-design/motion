#!/usr/bin/env bash
# Génère la « voix témoin » (TTS) de la vidéo et la cale sur le découpage des scènes.
# C'est une piste guide pour le rythme — à remplacer par ta propre voix pour la version finale.
#
# Prérequis : ffmpeg + Piper TTS (https://github.com/rhasspy/piper) avec une voix française, ex. :
#   pip install piper-tts
#   curl -LO https://github.com/rhasspy/piper/releases/download/v0.0.2/voice-fr-siwis-medium.tar.gz && tar xzf voice-fr-siwis-medium.tar.gz
#   PIPER_VOICE=./fr-siwis-medium.onnx scripts/voiceover.sh
set -euo pipefail

PIPER="${PIPER:-piper}"
PIPER_VOICE="${PIPER_VOICE:?Chemin du modèle .onnx de la voix Piper (variable PIPER_VOICE)}"
DIR="$(cd "$(dirname "$0")/.." && pwd)/apporteur-affaires-auto"
OUT="$DIR/audio/voix-temoin.m4a"
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

# début (s) | texte — chaque phrase démarre sur l'animation de sa scène
LINES=(
  "0.15|Vous vendez, vous louez, ou vous cherchez un véhicule qui vous correspond ?"
  "4.25|Je suis apporteur d'affaires automobile."
  "6.35|Je mets en relation vendeurs particuliers, garages, agences de dépôt-vente et loueurs."
  "12.25|Sans risque, sans engagement : une commission, uniquement si l'affaire se conclut."
  "18.30|Structuré, réactif, chaque contact est suivi sérieusement."
  "24.30|Besoin d'un apporteur sérieux ? Contactez-moi."
)

inputs=(); filters=""; labels=""
for i in "${!LINES[@]}"; do
  start="${LINES[$i]%%|*}"; text="${LINES[$i]#*|}"
  echo "$text" | "$PIPER" -m "$PIPER_VOICE" -c "$PIPER_VOICE.json" --length-scale "${LENGTH_SCALE:-0.92}" -f "$TMP/$i.wav" >/dev/null 2>&1
  printf '%6.2fs  %5.2fs  %s\n' "$start" "$(ffprobe -v error -show_entries format=duration -of csv=p=0 "$TMP/$i.wav")" "$text"
  ms=$(awk -v s="$start" 'BEGIN { printf "%d", s * 1000 }')
  inputs+=(-i "$TMP/$i.wav")
  filters+="[$i:a]aresample=48000,adelay=${ms}:all=1[v$i];"
  labels+="[v$i]"
done

mkdir -p "$(dirname "$OUT")"
ffmpeg -y -loglevel error "${inputs[@]}" -filter_complex \
  "${filters}${labels}amix=inputs=${#LINES[@]}:normalize=0,highpass=f=70,apad=whole_dur=30,atrim=0:30,loudnorm=I=-16:TP=-1.5:LRA=11,aresample=48000[out]" \
  -map "[out]" -ac 2 -c:a aac -b:a 192k "$OUT"
echo "Voix témoin → ${OUT#$(pwd)/}"
