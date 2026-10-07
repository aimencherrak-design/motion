// Génère docs/decoupage.md (découpage technique plan par plan) à partir de la timeline réelle.
import fs from 'fs';
import { TIMELINE, DURATION } from '../src/shots/index.js';

const D = {
  'A1-aerien': ["Plan aérien descendant sur Méli-Mélo, vol d'oiseaux. Leo et Maya se font des passes sur la place.", 'Grue aérienne, fondu d\'ouverture'],
  'A2-passes': ['Les passes continuent. Bibou, au milieu, suit le ballon de gauche à droite.', 'Plan large, léger travelling avant'],
  'A3-bibou-fascine': ['Bibou fasciné se tortille, prêt à bondir.', 'Gros plan au ras du sol'],
  'A4-leo-passe-a-bibou': ['Leo remarque Bibou, sourit et lui fait une petite passe.', 'Contrechamp depuis Bibou'],
  'A5-bibou-rate': ['Bibou saute les yeux fermés, rate complètement le ballon et retombe sur le dos.', 'Plan moyen, légère rotation comique'],
  'A6-bibou-se-releve': ["Deux clignements, POP : il se relève aussitôt et prend l'air de rien.", 'Gros plan plongeant'],
  'A7-maya-rit': ['Maya rit en silence, le ballon dans les bras, puis le renvoie à Leo.', 'Plan rapproché'],
  'A8-grand-lancer': ['Leo prend un grand élan et lance beaucoup trop fort : le ballon monte, monte...', 'Plan moyen, panoramique vers le ciel'],
  'A9-ballon-monte': ['Contre-plongée : le ballon rapetisse dans le ciel.', 'Contre-plongée'],
  'A10-sourire-qui-fond': ['Le sourire fier de Leo disparaît progressivement.', 'Gros plan'],
  'A11-regards-oups': ['Leo regarde Maya, Maya regarde Leo : « oups ».', 'Plan à deux'],
  'A12-le-vent': ['Le vent emporte le ballon au-dessus des maisons, les fanions claquent.', 'Plan large en contre-plongée'],
  'A13-bibou-poursuit': ['Bibou court derrière le ballon en battant frénétiquement des ailes... beaucoup trop lent.', 'Travelling latéral'],
  'A14-derriere-la-colline': ['Le ballon disparaît derrière la colline.', 'Plan large de dos'],
  'A15-immobiles': ['Les trois amis, immobiles, se regardent puis regardent la colline.', 'Plan fixe frontal (rythme comique)'],
  'A16-leo-decide': ['Leo, déterminé, serre le poing et file !', 'Gros plan'],
  'B1-course': ['Course dans la prairie : Leo, Maya, puis Bibou qui sautille.', 'Travelling latéral'],
  'B2-bibou-essaie-de-voler': ['Bibou essaie de voler : quelques centimètres, chute ; il recommence, retombe à plat... puis a une idée.', 'Plan rapproché au ras du sol'],
  'B3-bibou-roule': ['Bibou se met en boule et roule à toute vitesse entre Leo et Maya, stupéfaits.', 'Plan face caméra'],
  'B4-le-rocher': ['Bibou finit contre le rocher (étoiles). Leo escalade le rocher et scrute l\'horizon.', 'Plan d\'ensemble'],
  'B5-rien-a-l-horizon': ['Rien en vue. Leo hausse les épaules.', 'Par-dessus l\'épaule'],
  'B6-maya-montre': ['Maya attire son attention et montre quelque chose au loin.', 'Plan à deux de profil'],
  'B7-le-ballon-au-loin': ["Le ballon rouge apparaît un instant au-dessus d'un arbre de la forêt.", 'Téléobjectif'],
  'B8-leo-saute': ['Leo s\'illumine, saute du rocher ; Maya applaudit, Bibou se secoue.', 'Plan d\'ensemble'],
  'B9-vers-la-foret': ['Les trois amis courent vers la forêt.', 'Travelling arrière'],
  'C1-la-clairiere': ['Une clairière lumineuse et un peu magique ; la caméra s\'élève jusqu\'au ballon coincé dans le grand arbre.', 'Grue, rayons de lumière'],
  'C2-le-voila': ['« Le voilà ! » Leo montre le ballon.', 'Contre-plongée'],
  'C3-leo-grimpe': ['Leo grimpe au tronc et attrape une branche basse.', 'Plan moyen'],
  'C4-craaac': ['La branche craque, des feuilles tombent.', 'Gros plan sur la branche'],
  'C5-leo-fige': ['Leo se fige, goutte de sueur, regarde lentement en bas.', 'Gros plan'],
  'C6-maya-descends': ['Maya, inquiète, secoue la tête et lui fait signe de descendre.', 'Plan rapproché'],
  'C7-leo-redescend': ['Leo redescend prudemment et se gratte la tête, gêné.', 'Plan moyen'],
  'C8-bibou-heros': ['Bibou gonfle son petit torse comme un héros ; Leo et Maya échangent un regard sceptique.', 'Contre-plongée héroïque'],
  'C9-elan': ['Bibou recule, gratte le sol comme un petit taureau, prend son élan et s\'envole.', 'Plan latéral'],
  'C10-rate-et-buisson': ['Il frôle le ballon, tourne sur lui-même et atterrit dans un buisson.', 'Plan d\'ensemble, rotation'],
  'C11-yeux-dans-le-buisson': ['Le buisson tremble... deux grands yeux clignent entre les feuilles.', 'Gros plan'],
  'C12-maya-sourit': ['Maya sourit, amusée ; Leo rit.', 'Plan à deux'],
  'D1-maya-reflechit': ['Maya réfléchit, observe la clairière... et remarque la grande branche posée sur un rocher.', 'Panoramique qui suit son regard'],
  'D2-l-idee': ["L'idée ! Étincelles.", 'Gros plan'],
  'D3-leo-comprend': ['Maya montre la branche ; Leo regarde la branche, le ballon... et comprend.', 'Plan à deux'],
  'D4-installation': ["Bibou s'installe au bout bas du levier, Leo monte sur la souche, Maya se place de l'autre côté.", 'Plan d\'ensemble'],
  'D5-regards-complices': ['Regards complices, hochement de tête.', 'Plan à deux'],
  'D6-bibou-pret': ['Bibou, prêt, fait un petit salut de l\'aile.', 'Gros plan'],
  'D7-catapulte': ['Ils sautent ensemble : le levier bascule et Bibou est propulsé !', 'Plan d\'ensemble, secousse'],
  'D8-envol-heroique': ['Au léger ralenti, Bibou monte vers le ballon, ses yeux grandissent... il l\'attrape !', 'Travelling vertical'],
  'D9-moment-heroique': ['Moment héroïque au-dessus des arbres, soleil derrière lui.', 'Contre-plongée'],
  'D10-trop-haut': ['Il continue de monter, regarde en bas : ses yeux deviennent énormes.', 'Gros plan puis plongée vertigineuse'],
  'E1-descente': ['Bibou redescend doucement en battant des ailes, accroché au ballon.', 'Travelling'],
  'E2-les-amis-courent': ['Leo et Maya courent dessous pour le rattraper et se bousculent.', 'Plan d\'ensemble'],
  'E3-flump': ['Tous les trois tombent dans une grosse touffe d\'herbe. FLUMP !', 'Plan moyen'],
  'E4-silence-puis-ballon': ['Silence... puis le ballon rouge sort lentement de l\'herbe, avec Bibou dessous.', 'Plan fixe, léger travelling avant'],
  'E5-fou-rire': ['Leo et Maya sortent la tête de l\'herbe et éclatent de rire.', 'Plan à trois'],
  'E6-bibou-fier': ['Bibou, très fier, tend le ballon à Leo.', 'Plan rapproché'],
  'E7-calin': ['Leo prend le ballon et fait un câlin à Bibou, un peu écrasé... et ravi.', 'Plan rapproché'],
  'F1-retour-au-village': ['Retour au village, lumière dorée de fin d\'après-midi : les passes reprennent.', 'Travelling latéral'],
  'F2-passes': ['Maya renvoie à Leo, qui se tourne vers Bibou : « à toi ! »', 'Plan large'],
  'F3-bibou-se-prepare': ['Bibou se prépare héroïquement.', 'Gros plan'],
  'F4-attrape-et-glisse': ['Il saute, attrape le ballon... qui lui échappe et remonte dans le ciel.', 'Plan moyen'],
  'F5-tous-regardent-en-l-air': ['Silence. Les trois regardent le ballon monter.', 'Contre-plongée'],
  'F6-ils-se-regardent': ['Ils se regardent.', 'Plan fixe'],
  'F7-regard-camera': ['Ils regardent la caméra, petit sourire gêné.', 'Plan frontal'],
  'F8-poc': ['Le ballon retombe pile sur la tête de Bibou : POC ! Il tombe doucement sur le dos.', 'Plan rapproché'],
  'F9-eclats-de-rire': ['Leo et Maya rient, Bibou rit aussi ; la caméra s\'élève au-dessus du village au coucher du soleil.', 'Grue arrière'],
  'F10-fondu': ['Fondu au noir, musique de fin.', 'Grue, fondu'],
};
const tc = (s) => `${Math.floor(s / 60)}:${(s % 60).toFixed(1).padStart(4, '0')}`;
let md = `# Découpage technique — « Le Ballon Perdu »\n\nDurée totale : **${tc(DURATION)}** (${TIMELINE.length} plans). Document généré à partir de la timeline réelle (\`src/shots/\`).\n\n| # | Début | Durée | Plan | Action | Caméra |\n|---|---|---|---|---|---|\n`;
TIMELINE.forEach((e, i) => {
  const [a, c] = D[e.shot.id] || ['', ''];
  md += `| ${i + 1} | ${tc(e.start)} | ${e.shot.dur.toFixed(1)} s | \`${e.shot.id}\` | ${a} | ${c} |\n`;
});
fs.mkdirSync('docs', { recursive: true });
fs.writeFileSync('docs/decoupage.md', md);
console.log('docs/decoupage.md :', TIMELINE.length, 'plans');
