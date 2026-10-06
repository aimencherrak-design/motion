# Présentation — apporteur d'affaires automobile (30 s, 9:16)

Vidéo verticale native LinkedIn / TikTok : fond noir mat `#121212`, accents jaune `#FFC927`, typographie Space Grotesk en capitales, aucun visage — uniquement de la typo animée, des icônes au trait et des diagrammes.

## Fichiers livrés

| Fichier | Usage |
| --- | --- |
| `renders/apporteur-affaires-auto_30s_9x16_voix-temoin.mp4` | Vidéo + voix de synthèse (voix témoin), pour valider le rythme |
| `renders/apporteur-affaires-auto_30s_9x16_sans-son.mp4` | Vidéo seule, à importer dans CapCut pour poser ta propre voix et une musique |
| `renders/couverture.png` | Image de couverture (accroche) pour LinkedIn |
| `apporteur-affaires-auto/voix-off.srt` | Sous-titres de la voix off, à importer sur LinkedIn ou dans CapCut |
| `apporteur-affaires-auto/audio/voix-temoin.m4a` | Piste voix témoin seule (−16 LUFS) |

## Personnaliser l'écran de fin

Les coordonnées affichées à la fin sont dans [`config.js`](config.js) : nom, tagline, région, téléphone, email, LinkedIn et lettre du monogramme. Mets un champ à `""` pour masquer sa ligne, puis relance le rendu :

```bash
npm run render -- --out renders/apporteur-affaires-auto_30s_9x16_sans-son.mp4
ffmpeg -i renders/apporteur-affaires-auto_30s_9x16_sans-son.mp4 -i apporteur-affaires-auto/audio/voix-temoin.m4a \
  -map 0:v -map 1:a -c copy -shortest -movflags +faststart renders/apporteur-affaires-auto_30s_9x16_voix-temoin.mp4
```

## Découpage

| Temps | Scène | Texte à l'écran | Animation |
| --- | --- | --- | --- |
| 0:00–0:04 | Accroche | VOUS VENDEZ. VOUS LOUEZ. VOUS CHERCHEZ. · *un véhicule qui vous correspond ?* | 18 lignes jaunes convergent vers le centre, flash, lettres qui basculent une à une, pulsation sur chaque verbe |
| 0:04–0:12 | L'offre | JE SUIS · APPORTEUR D'AFFAIRES AUTOMOBILE · JE METS EN RELATION | Nœud central « A », orbite qui se trace, 4 nœuds (Particuliers, Garages, Agences dépôt-vente, Loueurs) reliés par des lignes lumineuses au rythme de la voix, impulsions de données qui circulent |
| 0:12–0:18 | Différenciateur | SANS RISQUE. SANS ENGAGEMENT. · *Une commission, uniquement si l'affaire se conclut.* | Bouclier dessiné au trait + coche, qui pivote en pièce « € » ; mots-clés en fondu avec flou |
| 0:18–0:24 | Preuve de sérieux | STRUCTURÉ. RÉACTIF. SUIVI SÉRIEUX. | Zoom rapide en perspective sur l'interface CRM : cartes de contacts, statuts qui changent (Nouveau → Contacté → En cours → Conclu), défilement, onglets |
| 0:24–0:30 | Appel à l'action | UN APPORTEUR SÉRIEUX ? CONTACTEZ-MOI. | Monogramme « A » jaune qui pulse avec des ondes, puis nom, tagline et coordonnées |

Les transitions s'enchaînent en zoom avant avec flou, et la grille de points de l'arrière-plan défile en parallaxe tout le long.

Le texte important reste dans une zone centrale (marges de 90 px, rien d'essentiel sous y ≈ 1 500 px), à l'abri des boutons et légendes de TikTok et de LinkedIn. Comme une grande partie des vidéos est regardée sans le son, chaque phrase de la voix off a son équivalent à l'écran.

## Voix off

Texte complet (~20 s à débit normal) :

> Vous vendez, vous louez, ou vous cherchez un véhicule qui vous correspond ? Je suis apporteur d'affaires automobile. Je mets en relation vendeurs particuliers, garages, agences de dépôt-vente et loueurs. Sans risque, sans engagement : une commission, uniquement si l'affaire se conclut. Structuré, réactif, chaque contact est suivi sérieusement. Besoin d'un apporteur sérieux ? Contactez-moi.

Chaque phrase démarre au début de sa scène (0:00, 0:04, 0:06, 0:12, 0:18, 0:24). Les temps exacts sont dans `voix-off.srt`. La voix témoin est générée par `scripts/voiceover.sh` (Piper TTS, voix française *siwis*) : elle sert à caler le rythme, pas à remplacer ta voix.

**Pour enregistrer ta voix dans CapCut :** importe la version *sans-son*, enregistre phrase par phrase en te calant sur les sous-titres `voix-off.srt`, et ajoute une musique discrète (environ −20 dB sous la voix).

## Légende LinkedIn

> Apporteur d'affaires automobile basé en Alsace. Je connecte vendeurs particuliers, garages, agences de dépôt-vente et loueurs — sans risque pour vous, commission uniquement sur affaire conclue. Discutons-en 👇

## Technique

- `index.html` : la composition (1080×1920, 30 s). Tout est piloté par une seule timeline GSAP en pause, exposée sur `window.__timelines["apporteur-affaires-auto"]`. Elle est déterministe (aucun `Math.random`), donc deux rendus donnent exactement les mêmes images.
- Aperçu : `npm run preview`. Espace = lecture/pause, ←/→ = ±1 s, `?t=12.5` dans l'URL pour ouvrir à un instant précis.
- Police : Space Grotesk (SIL Open Font License, voir `fonts/OFL-LICENSE.txt`).
