# Méli-Mélo — Épisode 1 : « Le Ballon Perdu »

Court métrage d'animation 3D pour enfants, **3 min 07**, **100 % sans dialogue, sans voix humaine
et sans texte à l'écran**. Premier épisode pilote d'une série avec **Leo**, **Maya** et **Bibou**,
dans le petit village coloré de Méli-Mélo.

> Leo lance le ballon rouge beaucoup trop fort ; le vent l'emporte derrière la colline.
> Avec Maya et Bibou, il part à sa poursuite... jusqu'au « POC ! » final.

Tout l'épisode — personnages, décors, animation, caméra, musique et bruitages — est **généré
par le code de ce dépôt** : l'image est calculée en 3D (Three.js) et la bande-son est composée
note par note puis mixée automatiquement.

## Contenu
| Fichier | Rôle |
|---|---|
| `media/le-ballon-perdu.mp4` | l'épisode (1080p, 24 i/s, son stéréo) |
| `media/bande-son.mp3` | la bande-son seule |
| `index.html` + `dist/episode.js` | lecteur web : l'animation est recalculée en direct dans le navigateur |
| `docs/scenario.md` | scénario, séquences, intentions |
| `docs/decoupage.md` | découpage technique plan par plan (64 plans) |
| `docs/personnages.md` | bible des personnages (couleurs, vêtements, jeu d'acteur) |
| `docs/musique-et-sons.md` | conduite musicale et liste des bruitages |

## Architecture
```
src/
  lib/          maths d'animation (courbes, images clés), palette et textures procédurales
  characters/   Leo et Maya (squelette, visage expressif), Bibou, le ballon, expressions partagées
  world/        ciel, éclairage, village de Méli-Mélo, prairie, clairière, éléments de décor
  fx/           poussière, feuilles, étincelles, étoiles de vertige, goutte de sueur
  shots/        les 64 plans (partA → partF) : mise en scène, jeu des personnages, caméra, repères sonores
  engine.js     construit l'image correspondant à n'importe quel instant t
audio/
  score.js      partition (thème principal, poursuite, envol héroïque, thème tendre, final)
  sfx.js        bruitages synthétisés et cris non verbaux de Bibou
  render-audio.js  placement des notes et bruitages, ambiances, réverbération, mixage
tools/
  render-video.mjs  rendu image par image dans Chromium (WebGL) + encodage ffmpeg
  contact.mjs, frames.mjs  planches de relecture
```
L'animation est **déterministe** : `renderAt(t)` donne toujours la même image pour le même
instant, ce qui permet de rendre l'épisode en plusieurs morceaux en parallèle et de caler
exactement musique et bruitages sur l'action.

## Refaire l'épisode
Prérequis : Node 20+, ffmpeg, Chromium (Playwright).
```bash
npm install
npm run build      # lecteur web : dist/episode.js
npm run audio      # bande-son : build/bande-son.wav (télécharge les échantillons la première fois)
npm run render     # vidéo : build/le-ballon-perdu.mp4 (long : rendu logiciel image par image)
npm run preview    # puis ouvrir http://localhost:8080
```

## Crédits
- Création, animation, musique et bruitages : générés par code (Three.js, Node.js, ffmpeg).
- Échantillons d'instruments : banque « SGM » diffusée par le projet open source Magenta
  (Google), téléchargés à la volée et non inclus dans le dépôt. Vérifiez la licence de cette
  banque avant toute diffusion commerciale de la bande-son.
