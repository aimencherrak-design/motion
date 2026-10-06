# Présentation — apporteur d'affaires automobile (22,5 s, 16:9)

Motion design sans voix off, 1920×1080 : fond noir mat `#121212`, accents jaune `#FFC927`, typographie Space Grotesk en capitales, aucun visage — uniquement de la typo animée, des icônes au trait et des diagrammes. Tout le message passe par le texte à l'écran, rythmé par des bruitages synchronisés sur chaque animation.

## Fichiers livrés

| Fichier | Usage |
| --- | --- |
| `renders/apporteur-affaires-auto_16x9.mp4` | Vidéo finale (image + bruitages) |
| `renders/couverture.png` | Image de couverture (accroche) |
| `apporteur-affaires-auto/audio/` | Piste de bruitages (`sfx.m4a`) et repères (`sfx-cues.json`) |

## Personnaliser l'écran de fin

Le nom, la tagline et les coordonnées sont dans [`config.js`](config.js). Les champs vides (`""`) sont masqués. Après modification : `npm run build`.

## Découpage

| Temps | Scène | Texte à l'écran | Animation | Bruitages |
| --- | --- | --- | --- | --- |
| 0:00–0:03 | Accroche | VOUS VENDEZ. VOUS LOUEZ. VOUS CHERCHEZ. · *un véhicule qui vous correspond ?* | Lignes jaunes qui convergent, flash, lettres qui basculent une à une, coup de zoom sur chaque verbe | Montée + impact au flash, scintillement, swish par ligne, « pop » sur chaque verbe |
| 0:03–0:09 | L'offre | JE SUIS · APPORTEUR D'AFFAIRES AUTOMOBILE · JE METS EN RELATION | Balayage jaune d'entrée, nœud « A », orbite, 4 nœuds reliés en rafale, impulsions de données | Whoosh, pop du nœud central, onde sonar, « zip » + note montante à chaque connexion (spatialisée gauche/droite) |
| 0:09–0:13 | Différenciateur | SANS RISQUE. SANS ENGAGEMENT. · *Une commission, uniquement si l'affaire se conclut.* | Zoom traversant, bouclier tracé + coche, qui pivote en pièce « € » | Tracé, carillon de validation, swish de bascule, tintement de pièce |
| 0:13–0:17 | Preuve de sérieux | STRUCTURÉ. RÉACTIF. SUIVI SÉRIEUX. | Balayage jaune, zoom rapide en perspective sur le CRM, statuts qui changent, défilement | Whoosh + impact, balayage des mots, clics d'interface, carillon « Conclu », cliquetis de défilement |
| 0:17–0:22 | Appel à l'action | UN APPORTEUR SÉRIEUX ? CONTACTEZ-MOI. · AIMEN | Monogramme « A » qui pulse, nom et tagline | Impact grave, ondes, accent sur « Contactez-moi », accord de fin |

Chaque scène a une légère poussée de caméra continue, et les transitions alternent balayages jaunes et zooms traversants. Les temps de la timeline sont relatifs au début de chaque scène (`S1`…`S5` dans `index.html`) : pour allonger ou raccourcir une scène, il suffit de décaler ces constantes.

Chaque bruitage est déclaré dans la timeline (`cue(...)`) à côté de l'animation qu'il accompagne : si une animation bouge, son bruitage suit au prochain `npm run build`. Tout est synthétisé (`scripts/sound.py`), sans banque de sons externe, et spatialisé selon la position de l'élément à l'écran. Niveau final : −17 LUFS.

## Légende LinkedIn

> Apporteur d'affaires automobile. Je connecte vendeurs particuliers, garages, agences de dépôt-vente et loueurs — sans risque pour vous, commission uniquement sur affaire conclue. Discutons-en 👇

## Technique

- `index.html` : la composition (1920×1080, 22,5 s), pilotée par une seule timeline GSAP en pause et exposée sur `window.__timelines["apporteur-affaires-auto"]`. Elle est déterministe (aucun `Math.random`).
- Aperçu : `npm run preview`. Espace = lecture/pause, ←/→ = ±1 s, `?t=12.5` dans l'URL pour ouvrir à un instant précis.
- Police : Space Grotesk (SIL Open Font License, voir `fonts/OFL-LICENSE.txt`).
