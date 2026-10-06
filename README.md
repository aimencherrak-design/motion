# motion

Vidéos en motion design écrites en code (HTML + GSAP), rendues en MP4 image par image avec Chromium et ffmpeg.

| Projet | Format | Durée |
| --- | --- | --- |
| [`apporteur-affaires-auto/`](apporteur-affaires-auto/) — présentation apporteur d'affaires automobile | 1080×1920 (9:16) · 30 fps | 30 s |

## Commandes

```bash
npm install                 # gsap, police Space Grotesk, playwright-core
npm run preview             # aperçu dans le navigateur → http://127.0.0.1:5173/apporteur-affaires-auto/
npm run render              # → renders/apporteur-affaires-auto.mp4
```

Options de `scripts/render.mjs` : `--out fichier.mp4`, `--audio piste.m4a`, `--crf 16`, `--from 12 --to 18` (rendu partiel), `--still 3.3 --out image.png` (une seule image).

Le rendu utilise le Chromium de Playwright. S'il n'est pas trouvé automatiquement, indique son chemin avec `CHROME_PATH=/chemin/vers/chrome`.
