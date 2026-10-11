# Prospection Auto LinkedIn

Extension Chrome qui s'ouvre en panneau à côté de LinkedIn pour prospecter les **décideurs de l'automobile** : dirigeants de garages, de concessions, d'agences de location et d'entreprises de transport de véhicules.

Elle fait le travail long (trouver, trier, rédiger, se souvenir de qui relancer). **Toi, tu cliques sur « Se connecter » et « Envoyer »** : rien n'est automatisé sur LinkedIn, ce qui protège ton compte.

## Installation (2 minutes)

1. Sur GitHub, ouvre la branche `claude/loving-edison-wqhua3`, puis **Code → Download ZIP**, et dézippe le fichier.
2. Dans Chrome, va sur `chrome://extensions`.
3. Active le **Mode développeur** (en haut à droite).
4. Clique sur **Charger l'extension non empaquetée** et choisis le dossier `extension`.
5. Épingle l'icône de l'extension (pièce de puzzle → punaise). Un clic dessus ouvre le panneau.

Pour une mise à jour : remplace le dossier, puis clique sur ↻ dans `chrome://extensions`. Tes données sont conservées.

## Les 4 onglets

### 1. Rechercher : trouver les décideurs sans passer par chaque entreprise
Choisis un secteur. L'extension ouvre une recherche LinkedIn déjà prête :
- seulement les **rôles de décideurs** (gérant, dirigeant, directeur de concession, franchisé, etc.) ;
- dans le **bon secteur** (garage, concession, location de véhicules, convoyage, etc.) ;
- **sans** les stagiaires, étudiants et recruteurs ;
- en **France**, en **2e degré** par défaut. Ce sont des gens avec qui tu as des relations en commun, donc ils acceptent plus souvent.

La requête est modifiable et fonctionne aussi dans Sales Navigator. Pour une ville ou une région, utilise le filtre « Lieux » de LinkedIn.

### 2. Prospect : décider en 10 secondes si le profil vaut le coup
Sur un profil LinkedIn, clique sur **Récupérer ce profil**. Le nom, le titre, l'entreprise, le lieu et le secteur se remplissent tout seuls, et tu peux les corriger.

Une grille de qualité calcule un score sur 10 :

| Critère | Points |
|---|---|
| Décisionnaire (dirigeant, gérant, directeur…) | 3 |
| Dans ta cible | 2 |
| Structure intéressante (plusieurs sites, flotte, groupe) | 2 |
| Actif sur LinkedIn | 2 |
| Relations en commun | 1 |

**A** (7 et plus) : à inviter. **B** (4 à 6) : si tu as encore des invitations cette semaine. **C** : passe ton tour. Tu n'ajoutes que des gens qui apportent quelque chose à ton réseau.

L'extension prépare la **note d'invitation** adaptée au secteur, avec le compteur de caractères (300 maximum). Ensuite : **Copier la note** → « Se connecter » sur LinkedIn → « Ajouter une note » → coller → envoyer → **Invitation envoyée ✓** dans le panneau.

### 3. Suivi : savoir quoi faire chaque jour
- **À faire** : qui vient d'accepter (envoie ta présentation), qui relancer, qui inviter (les meilleurs scores d'abord), quelles invitations retirer parce qu'elles attendent depuis trop longtemps.
- Le bouton **Copier le message** prépare le bon message (présentation, relance) avec le prénom et l'entreprise.
- Quand quelqu'un accepte sur LinkedIn, clique sur **A accepté ✓** dans la liste.
- Les statistiques : prospects, invités, taux d'acceptation, réponses, rendez-vous.

### 4. Réglages
- **Ton offre en une phrase** et **un lien** (portfolio, vidéo). Ils servent au message envoyé après l'acceptation. À remplir en premier.
- Le rythme : nombre maximum d'invitations par 7 jours (80 par défaut), délai de relance.
- Tous les modèles de messages, modifiables.
- **Exporter (Excel)**, **Sauvegarder** / **Restaurer** (fichier JSON).

## Bonnes pratiques pour ne pas te faire bloquer
- Reste sous **80 à 100 invitations par semaine**. Le compteur en haut du panneau te prévient.
- Étale tes invitations sur la semaine plutôt que 50 d'un coup.
- Retire les invitations sans réponse au bout de 3 semaines.
- Avec un compte gratuit, LinkedIn limite le nombre d'invitations **avec note** par mois. Une fois la limite atteinte, invite sans note : le message de présentation après l'acceptation fait le travail.
- Pas de pitch dans l'invitation : on se connecte d'abord, on se présente ensuite.

## Confidentialité
Tout reste **dans ton navigateur** (`chrome.storage.local`). Rien n'est envoyé à un serveur. L'extension ne lit une page LinkedIn que quand tu cliques sur « Récupérer ce profil », et uniquement le profil ouvert. Pense à faire une sauvegarde de temps en temps.

## Pour les développeurs

```
extension/
  manifest.json      Manifest V3 (panneau latéral)
  sidepanel.*        interface
  lib/segments.js    secteurs, mots-clés, requêtes booléennes
  lib/linkedin.js    URL de recherche, lecture du profil ouvert
  lib/scoring.js     détection du secteur et du décideur, score
  lib/messages.js    modèles de messages
  lib/pipeline.js    statuts, relances, quota hebdomadaire
  lib/export.js      export CSV, fusion des sauvegardes
test/                tests (node --test)
```

Lancer les tests : `npm test` (Node 18 ou plus récent).

LinkedIn change régulièrement le code de ses pages. Si « Récupérer ce profil » ne remplit plus un champ, il suffit de le compléter à la main, et les sélecteurs sont à ajuster dans `extractProfileFromPage` (`lib/linkedin.js`).
