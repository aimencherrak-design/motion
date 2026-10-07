# Bible des personnages — série « Méli-Mélo »

Règle absolue de continuité : les personnages sont construits **une seule fois** en code
(`src/characters/`) et réutilisés tels quels dans chaque plan. Visage, couleurs, vêtements,
proportions, taille, coiffure et accessoires sont donc strictement identiques d'un plan à l'autre.
Les couleurs de référence sont centralisées dans `src/lib/materials.js` (`PALETTE`).

## Leo — 8 ans
| Élément | Référence |
|---|---|
| Cheveux | bruns, mèches souples en bataille, petit épi sur le dessus (`#5b3820`) |
| Haut | grand sweat jaune à capuche, poche kangourou, cordons blancs (`#ffc533`) |
| Bas | pantalon bleu (`#3f6fd8`) |
| Chaussures | baskets rouges à semelle blanche (`#e8383a`) |
| Accessoire | petit sac à dos vert (`#48b04e`) |
| Signes distinctifs | taches de rousseur, yeux marron noisette |

**Jeu d'acteur** : curieux, énergique, optimiste. Il agit d'abord (grand lancer, escalade),
réfléchit ensuite. Grands mouvements, sourires larges, sourcils très mobiles.

## Maya — 8 ans
| Élément | Référence |
|---|---|
| Cheveux | bruns foncés, frange arrondie, deux petites couettes avec élastiques jaunes (`#4a2a18`) |
| Haut | veste violette zippée, col et bande de fermeture lilas (`#8b55d6`) |
| Bas | pantalon clair (`#f2e7d3`) |
| Chaussures | baskets blanches, bout lilas |
| Accessoire | petit sac à dos rose (`#ff8fbd`) |
| Signes distinctifs | cils, yeux verts |

**Jeu d'acteur** : réfléchie, observatrice, souvent amusée par les bêtises de Leo. Elle rit
en silence (main devant la bouche), réfléchit le doigt sur le menton, a les idées (le levier).

## Bibou
| Élément | Référence |
|---|---|
| Corps | boule de plumes duveteuse turquoise (`#48bce2`), dos plus profond, ventre crème |
| Tête | disque facial clair autour des yeux, deux aigrettes de hibou, petite mèche |
| Yeux | immenses, iris doré, grosses pupilles, joues roses |
| Bec / pattes | orange (`#ffa53a`), bec en deux parties qui s'ouvre pour les petits cris |
| Ailes | toutes petites ; il vole très mal |
| Taille | à peine plus grand que le ballon (≈ 35 cm, à hauteur de genou des enfants) |

**Jeu d'acteur** : personnage comique principal. Héroïque et confiant... qui rate presque tout,
mais réussit au moment qui compte. Il s'exprime uniquement par des petits cris non verbaux,
des couinements, des « pop » et tout son corps (écrasement / étirement, aigrettes dressées ou
tombantes, torse gonflé, yeux qui deviennent énormes).

## Le ballon rouge
Ballon de jeu rouge (`#e62f2b`) avec deux coutures plus sombres qui rendent sa rotation lisible.
Il reste rouge pendant tout l'épisode.

## Expressions disponibles
Définies une seule fois dans `src/characters/expressions.js` et partagées par les trois
personnages : neutre, content, grand sourire, rire, petit rire, surpris, émerveillé, inquiet,
« oups », gêné, déterminé, pensif, idée, sceptique, apeuré, effort, tendre, fier.
