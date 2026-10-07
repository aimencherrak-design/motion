# Musique et bruitages

Tout est généré par le code du dépôt (`audio/`), sans aucune parole ni voix humaine.

## Musique (`audio/score.js`)
Partition originale, écrite note par note et calée à la seconde sur l'image. Elle est jouée avec
de vrais échantillons d'instruments d'orchestre (pizzicati, xylophone, flûte, clarinette, basson,
cordes, cor, trompette, trombone, tuba, harpe, célesta, glockenspiel, timbales, percussions).

| Moment | Couleur musicale |
|---|---|
| Introduction | **Thème principal** (do majeur, 120 bpm) : mélodie simple et chantante au xylophone et à la flûte, basse « oum-pa » en pizzicati |
| Bibou rate le ballon | glissando de xylophone, « bwomp » de basson, tic-tac pendant qu'il se balance sur le dos, « pop » quand il se relève |
| Le ballon s'envole | cordes suspendues, arpèges de harpe qui montent avec le ballon, ligne de clarinette qui descend quand le sourire de Leo fond, « oh oh » de trompette bouchée |
| Poursuite | galop rapide (sol majeur, 150 bpm), interrompu par chaque gag : trilles d'effort, « bwaaah » de tuba à chaque chute, glissandos pour la roulade, « wah-wah » de trombone quand Leo ne voit rien, tintement de glockenspiel quand le ballon réapparaît |
| Clairière | harpe et célesta, nappe de cordes, un peu magique |
| Escalade et branche qui craque | pizzicati qui montent, puis trémolos de suspense et battements de cœur aux timbales |
| Bibou le héros | mini-fanfare pompeuse, puis trombone qui « dégonfle » quand il rate |
| L'idée | tic-tac de réflexion, « ting ! » de l'idée, petite marche espiègle pendant l'installation, roulement de caisse claire |
| L'envol | coup d'orchestre, montée au ralenti, puis **le thème principal joué en grand par les cuivres** quand Bibou attrape le ballon ; coupure nette quand il regarde en bas |
| La descente | petite valse comique qui descend (flûte et basson) |
| Rires et câlin | thème principal en version tendre (fa majeur, 96 bpm), cordes, flûte et harpe |
| Gag final | reprise du thème au village, roulement, « ta-da », puis **silence** (grillons) pendant le regard caméra, « POC ! », et final joyeux pour tout l'orchestre |

## Bruitages (`audio/sfx.js`)
Tous synthétisés : pas dans l'herbe et sur les pavés, vent et rafales, fanions, ballon qui
rebondit, réceptions, branche qui grince puis craque, feuilles, buisson, chutes douces, « flump »
dans l'herbe, battements d'ailes, sifflet à coulisse, « boing », « pop », « POC », coups de bois du
levier, étoiles de vertige, scintillements magiques, oiseaux, fontaine, grillons.

Bibou s'exprime uniquement par des **cris non verbaux** de petite créature (couinements,
pépiements, « hup ! », petit sifflotement, fou rire en pépiements) : aucun mot.

Les réactions de Leo et Maya ne sont **jamais vocales** : elles passent par la musique et par
de discrets bruits de vêtements, conformément à la règle « sans voix humaines ».

## Mixage (`audio/render-audio.js`)
Musique avec réverbération de salle, bruitages normalisés par catégorie, ambiances par décor
(oiseaux, vent, fontaine au village), limiteur doux puis normalisation à −16 LUFS.
