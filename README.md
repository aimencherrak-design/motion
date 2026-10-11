# Prospection Auto LinkedIn

Deux outils pour prospecter les décideurs de l'automobile sur LinkedIn, **sans aucune automatisation** : tu fais toutes les actions sur LinkedIn toi-même.

1. **[`prospection.html`](prospection.html)** : l'outil web de l'apporteur d'affaires (recommandé). Une seule page, sans dépendance, qui marche sur ordinateur et sur mobile.
2. **`extension/`** : une extension Chrome (première version, décrite plus bas).

---

## Outil web : `prospection.html`

### Ouvrir l'outil
- **Sur ordinateur** : télécharge `prospection.html` et double-clique dessus. Ça marche dans Opera GX, Chrome, Edge, Firefox et Safari. Ajoute-le à tes favoris.
- **Sur ordinateur et téléphone avec les mêmes fiches** : ouvre la version publiée sur claude.ai (lien privé). Connecté à ton compte, la page range tes fiches dans ton espace privé : le même lien sur l'ordinateur et sur le téléphone affiche les mêmes données. La pastille dorée dans l'en-tête indique que la synchronisation est active.
- En fichier local, les fiches restent **dans le navigateur où tu ouvres la page**. Pour passer d'un appareil à l'autre, exporte puis importe le CSV.

### Les 5 onglets
| Onglet | À quoi il sert |
|---|---|
| **Chercher** | Tu choisis une cible (1. transporteurs, 2. dépôts-ventes, 3. concessions, 4. loueurs) et une zone (Mulhouse + 50 km, France, Suisse, Allemagne, Europe). L'outil génère les recherches LinkedIn (en français et en allemand selon la zone), une recherche Google des profils LinkedIn par ville, une recherche par titre (gérant, dirigeant, Geschäftsführer…) et des liens Google Maps pour repérer les petites entreprises locales. Tu les ouvres toi-même. |
| **Ajouter** | Sur le profil LinkedIn : Ctrl+A, Ctrl+C, puis colle dans « Collage rapide ». Nom, poste, entreprise, lieu, « Infos » et activité récente se remplissent. Le score sur 100 s'affiche avec sa phrase d'explication, et 2 notes de connexion (200 caractères max) sont prêtes à copier, en FR ou en DE. |
| **File du jour** | Les profils à inviter, triés par score, avec le compteur « X / 30 ajoutés aujourd'hui ». Profil ↗ → Note 1 ou 2 → envoi sur LinkedIn → case « Demande envoyée ». |
| **Suivi** | Onglets Transporteurs / Dépôts-ventes / Concessions / Loueurs. Statuts (identifié → demande envoyée → accepté → 1er message → relance → RDV → signé / perdu), date de relance, alerte **rouge** si elle est en retard et **orange** si elle est prévue aujourd'hui. Le bon message (1er message adapté à la cible, ou relance) se copie en un clic. |
| **Données** | Export / import CSV (format Excel français, compatible CRM), objectif quotidien, chiffres (envoyées, taux d'acceptation, RDV, signés). |

### Le score (0 à 100)
| Critère | Points |
|---|---|
| Catégorie : transporteur 25, dépôt-vente 22, concession 18, loueur 15 | 25 |
| Poste : gérant, dirigeant, fondateur, Geschäftsführer, Inhaber… 35 ; directeur, responsable, chef des ventes… 25 | 35 |
| Zone : ≤ 50 km de Mulhouse 25 ; Alsace / trois frontières 20 ; France, Suisse, Allemagne 15 ; autre pays d'Europe 8 | 25 |
| Activité récente : ce mois-ci 15 ; ces 6 derniers mois 9 ; ancienne 2 | 15 |
| Bonus : « À propos » ouvert aux partenariats | +5 |

**Prioritaire** à partir de 75, **À ajouter** à partir de 50, **Faible** en dessous.

### 30 profils en 15 minutes
1. **Chercher** : ouvre une recherche et repère les profils intéressants dans des onglets.
2. Pour chaque profil : Ctrl+A, Ctrl+C, puis colle dans **Ajouter**. Regarde le score.
3. Si le score est bon : **Copier** une note, puis « Se connecter » sur LinkedIn → « Ajouter une note » → coller → envoyer.
4. **Ctrl+Maj+Entrée** (ou « Ajouter + demande envoyée ») : la fiche est enregistrée et le compteur avance.
5. Tu peux aussi tout ajouter d'abord (Ctrl+Entrée), puis dérouler la **File du jour**.

### Tests
`npm test` (Node 18 ou plus récent). Les fonctions de la page (lecture d'un profil collé, score, notes, recherches, relances, CSV) sont testées directement depuis le fichier HTML.

---

## Extension Chrome (première version)

### Installation (2 minutes)

1. Sur GitHub, ouvre la branche `claude/loving-edison-wqhua3`, puis **Code → Download ZIP**, et dézippe le fichier.
2. Dans Chrome, va sur `chrome://extensions`.
3. Active le **Mode développeur** (en haut à droite).
4. Clique sur **Charger l'extension non empaquetée** et choisis le dossier `extension`.
5. Épingle l'icône de l'extension (pièce de puzzle → punaise). Un clic dessus ouvre le panneau.

Pour une mise à jour : remplace le dossier, puis clique sur ↻ dans `chrome://extensions`. Tes données sont conservées.

### Les 4 onglets

#### 1. Rechercher : trouver les décideurs sans passer par chaque entreprise
Choisis un secteur. L'extension ouvre une recherche LinkedIn déjà prête :
- seulement les **rôles de décideurs** (gérant, dirigeant, directeur de concession, franchisé, etc.) ;
- dans le **bon secteur** (garage, concession, location de véhicules, convoyage, etc.) ;
- **sans** les stagiaires, étudiants et recruteurs ;
- en **France**, en **2e degré** par défaut. Ce sont des gens avec qui tu as des relations en commun, donc ils acceptent plus souvent.

La requête est modifiable et fonctionne aussi dans Sales Navigator. Pour une ville ou une région, utilise le filtre « Lieux » de LinkedIn.

#### 2. Prospect : décider en 10 secondes si le profil vaut le coup
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

#### 3. Suivi : savoir quoi faire chaque jour
- **À faire** : qui vient d'accepter (envoie ta présentation), qui relancer, qui inviter (les meilleurs scores d'abord), quelles invitations retirer parce qu'elles attendent depuis trop longtemps.
- Le bouton **Copier le message** prépare le bon message (présentation, relance) avec le prénom et l'entreprise.
- Quand quelqu'un accepte sur LinkedIn, clique sur **A accepté ✓** dans la liste.
- Les statistiques : prospects, invités, taux d'acceptation, réponses, rendez-vous.

#### 4. Réglages
- **Ton offre en une phrase** et **un lien** (portfolio, vidéo). Ils servent au message envoyé après l'acceptation. À remplir en premier.
- Le rythme : nombre maximum d'invitations par 7 jours (80 par défaut), délai de relance.
- Tous les modèles de messages, modifiables.
- **Exporter (Excel)**, **Sauvegarder** / **Restaurer** (fichier JSON).

### Bonnes pratiques pour ne pas te faire bloquer
- Reste sous **80 à 100 invitations par semaine**. Le compteur en haut du panneau te prévient.
- Étale tes invitations sur la semaine plutôt que 50 d'un coup.
- Retire les invitations sans réponse au bout de 3 semaines.
- Avec un compte gratuit, LinkedIn limite le nombre d'invitations **avec note** par mois. Une fois la limite atteinte, invite sans note : le message de présentation après l'acceptation fait le travail.
- Pas de pitch dans l'invitation : on se connecte d'abord, on se présente ensuite.

### Confidentialité
Tout reste **dans ton navigateur** (`chrome.storage.local`). Rien n'est envoyé à un serveur. L'extension ne lit une page LinkedIn que quand tu cliques sur « Récupérer ce profil », et uniquement le profil ouvert. Pense à faire une sauvegarde de temps en temps.

### Pour les développeurs

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
