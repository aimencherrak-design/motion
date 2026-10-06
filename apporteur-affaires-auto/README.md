# Présentation — apporteur d'affaires automobile (30 s, 16:9)

Vidéo horizontale 1920×1080 : fond noir mat `#121212`, accents jaune `#FFC927`, typographie Space Grotesk en capitales, aucun visage — uniquement de la typo animée, des icônes au trait et des diagrammes. Voix off masculine et bruitages synchronisés sur chaque animation.

## Fichiers livrés

| Fichier | Usage |
| --- | --- |
| `renders/apporteur-affaires-auto_30s_16x9.mp4` | Vidéo finale : voix + bruitages |
| `renders/apporteur-affaires-auto_30s_16x9_sans-voix.mp4` | Vidéo + bruitages seuls, pour poser ta propre voix dans CapCut |
| `renders/couverture.png` | Image de couverture (accroche) |
| `apporteur-affaires-auto/voix-off.srt` | Sous-titres de la voix off, à importer sur LinkedIn ou dans CapCut |
| `apporteur-affaires-auto/audio/` | Voix sèche (`voix.flac`), mixage (`mix.m4a`), bruitages seuls (`sfx.m4a`), repères (`sfx-cues.json`) |

## Personnaliser l'écran de fin

Le nom, la tagline et les coordonnées sont dans [`config.js`](config.js). Les champs vides (`""`) sont masqués. Après modification : `npm run build`.

## Découpage

| Temps | Scène | Texte à l'écran | Animation | Bruitages |
| --- | --- | --- | --- | --- |
| 0:00–0:04 | Accroche | VOUS VENDEZ. VOUS LOUEZ. VOUS CHERCHEZ. · *un véhicule qui vous correspond ?* | Lignes jaunes qui convergent, flash, lettres qui basculent une à une | Montée + impact au flash, scintillement, swish par ligne, « pop » sur chaque verbe |
| 0:04–0:12 | L'offre | JE SUIS · APPORTEUR D'AFFAIRES AUTOMOBILE · JE METS EN RELATION | Nœud « A », orbite, 4 nœuds reliés au rythme de la voix, impulsions de données | Pop du nœud central, onde sonar, tracé de l'orbite, « zip » + note montante à chaque connexion (spatialisée gauche/droite) |
| 0:12–0:18 | Différenciateur | SANS RISQUE. SANS ENGAGEMENT. · *Une commission, uniquement si l'affaire se conclut.* | Bouclier tracé + coche, qui pivote en pièce « € » | Tracé, carillon de validation, swish de bascule, tintement de pièce |
| 0:18–0:24 | Preuve de sérieux | STRUCTURÉ. RÉACTIF. SUIVI SÉRIEUX. | Zoom rapide en perspective sur le CRM, statuts qui changent, défilement | Whoosh + impact du zoom, balayage des mots, clics d'interface, carillon « Conclu », cliquetis de défilement |
| 0:24–0:30 | Appel à l'action | UN APPORTEUR SÉRIEUX ? CONTACTEZ-MOI. · AIMEN | Monogramme « A » qui pulse, nom et tagline | Impact grave, ondes, accent sur « Contactez-moi », accord chaud de fin |

Chaque bruitage est déclaré dans la timeline (`cue(...)` dans `index.html`) à côté de l'animation qu'il accompagne : si une animation bouge, son bruitage suit au prochain `npm run build`. Tout est synthétisé (`scripts/sound.py`), sans banque de sons externe, et spatialisé selon la position de l'élément à l'écran.

## Voix off

> Vous vendez, vous louez, ou vous cherchez un véhicule qui vous correspond ? Je suis apporteur d'affaires automobile. Je mets en relation vendeurs particuliers, garages, agences de dépôt-vente et loueurs. Sans risque, sans engagement : une commission, uniquement si l'affaire se conclut. Structuré, réactif, chaque contact est suivi sérieusement. Besoin d'un apporteur sérieux ? Contactez-moi.

- **Voix :** « tom » (fr_FR-tom-medium, masculine, 44,1 kHz), générée avec Piper TTS par `scripts/voiceover.sh`. C'est la plus propre des voix masculines libres testées (bruit de fond le plus bas).
- **Prononciation :** le texte envoyé au moteur est ajusté pour éviter deux liaisons fautives (« d'affaires-z-automobile », « cherchez-z-un »). Le texte à l'écran et les sous-titres gardent l'orthographe correcte.
- **Traitement :** `scripts/sound.py` applique un peu de chaleur dans les graves, adoucit les aigus durs et les « s » sifflants (dé-esseur), puis une compression légère. Pas de réverbération ni de saturation.
- **Dosage :** les bruitages sont ~7 dB sous la voix et ne baissent que de ~3 dB quand elle parle. Mixage final à −16 LUFS.

Ça reste une voix de synthèse. Pour un rendu vraiment naturel, enregistre ta voix sur la version *sans-voix*, en te calant sur `voix-off.srt`.

## Légende LinkedIn

> Apporteur d'affaires automobile. Je connecte vendeurs particuliers, garages, agences de dépôt-vente et loueurs — sans risque pour vous, commission uniquement sur affaire conclue. Discutons-en 👇

## Technique

- `index.html` : la composition (1920×1080, 30 s), pilotée par une seule timeline GSAP en pause et exposée sur `window.__timelines["apporteur-affaires-auto"]`. Elle est déterministe (aucun `Math.random`).
- Aperçu : `npm run preview`. Espace = lecture/pause, ←/→ = ±1 s, `?t=12.5` dans l'URL pour ouvrir à un instant précis.
- Police : Space Grotesk (SIL Open Font License, voir `fonts/OFL-LICENSE.txt`).
