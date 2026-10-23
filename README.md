# motion — vidéos stickman (Remotion)

Épisode 01 : **Le Scrolleur vs le Bâtisseur** — 1080×1920, 30 fps, 61 s, sans musique.

## Commandes

```bash
npm install
npm run studio                 # aperçu interactif
npm run sfx                    # (re)génère les bruitages + src/sfx.json
npm run tts                    # voix off Google Chirp 3 HD (Charon) → public/voice.mp3
python3 scripts/align.py       # timings mot à mot (faster-whisper) → public/voice-timings.json
npm run render                 # → out/episode-01.mp4 (H.264, CRF 18)
scripts/stills.sh nom 0 150 300  # planche de contrôle → out/nom.png
```

## Voix off

Il faut une clé Google Cloud Text-to-Speech :

1. console.cloud.google.com → créer un projet
2. activer la facturation (obligatoire, même pour le quota gratuit)
3. activer « Cloud Text-to-Speech API »
4. Identifiants → créer une clé API
5. `export GOOGLE_TTS_API_KEY=...` puis `npm run tts`

La clé n'est jamais écrite dans le code. Sans voix, `src/voice.json` vaut `{"enabled": false}`
et la vidéo se rend avec les bruitages seuls.

## Structure

```
script.json          découpage, voix off, actions, textes, bruitages
src/constants.ts     couleurs, timings des scènes, zones sûres
src/rig/             squelette articulé (Stickman.tsx) + bibliothèque de poses
src/fx/              glow, particules, faisceaux, brume, reflets, grain, vignettage
src/sets/            décors (salon, bureau, voiture, chantier, toits, immeuble…)
src/scenes/          une scène par âge
src/Video.tsx        assemblage, transitions glissées, compteur d'âge, audio
scripts/             bruitages, voix, alignement, planches de contrôle
```
