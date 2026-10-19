# Apporteur — outil privé d'apporteur d'affaires automobile

> Lis aussi `AGENTS.md` : Next.js 16 diffère des versions connues, la doc est dans `node_modules/next/dist/docs/`.

## Le projet
Outil web **privé, local (localhost), gratuit**, pour un apporteur d'affaires automobile en micro-entreprise
basé à **Mulhouse** (zone : 50 km autour). Aucun service payant, **aucune API externe, aucun scraping**.

## Règles de l'utilisateur (à respecter à chaque session)
- Débutant total en code : **lancer soi-même** toutes les commandes et expliquer chacune en une phrase.
- Corriger soi-même les erreurs avant de rendre la main.
- **Proposer, attendre la validation** avant de coder.
- **Nouvelle consigne (19/10)** : l'utilisateur préfère que TOUT soit construit d'un coup (les 5 modules),
  puis il teste l'ensemble et demande les modifications. Ne plus découper en validations module par module.
- **Commit Git après chaque module** (pour pouvoir revenir en arrière).
- Le dépôt GitHub est **PUBLIC** : ne JAMAIS y mettre les contacts, notes ou données de l'utilisateur.
  Les données d'import sont livrées à part (fichier JSON envoyé dans la conversation), importées via l'outil.
- Tenir ce fichier à jour (décisions, avancement).
- À la fin de chaque module : expliquer exactement comment l'ouvrir et quoi cliquer pour tester.
- Interface **propre et professionnelle** (niveau logiciel, pas prototype), **en français**, sobre, **utilisable sur petit écran**.
- Identité : noir profond, anthracite, **jaune doré** en accent, texte blanc, monogramme « A » géométrique.
- Ne jamais mettre d'identifiant de modèle d'IA dans le code, les commits ou les PR.

## Stack et décisions techniques
- **Next.js 16** (App Router, TypeScript) + **Tailwind CSS 4** + **SQLite** via `better-sqlite3` + **Drizzle ORM**.
- `cacheComponents` **désactivé** et `dynamic = "force-dynamic"` dans le layout racine : outil mono-utilisateur,
  chaque page relit la base à chaque affichage. Mutations : Server Actions + `refresh()`/`revalidatePath`.
- `better-sqlite3` v13 embarque ses binaires (Windows x64/arm64, Mac, Linux) : **pas de compilation** chez l'utilisateur.
- Polices **locales** (`@fontsource-variable/inter`, `space-grotesk`) : rien n'est chargé depuis Internet.
- Serveur lié à **127.0.0.1:3210** uniquement (privé, pas visible sur le réseau).
- **Données hors du dossier du programme** : `~/Apporteur-Donnees/` (Windows : `C:\Users\<nom>\Apporteur-Donnees`).
  Contient `apporteur.db`, `photos/`, `sauvegardes/`. Variable `APPORTEUR_DATA_DIR` pour changer (tests).
  → mettre à jour le programme = remplacer le dossier, les données ne bougent pas.
- **Migrations** : modifier `src/db/schema.ts` puis `npm run db:generate` ; elles s'appliquent seules au démarrage.
- **Sauvegarde JSON** (`format: "apporteur-sauvegarde"`, `version: 1`) : toutes les tables + photos en base64.
  Restauration = remplacement total, précédée d'une sauvegarde de sécurité automatique.
  Sauvegarde auto à chaque démarrage (`src/instrumentation.ts`), 30 conservées.
- **Lanceurs** : `Lancer.bat` (Windows) et `Lancer.command` (Mac). Ils réinstallent + recompilent quand
  `version.txt` change → **augmenter `version.txt` (et `package.json`) à chaque livraison de module**.
- Une seule base de code pour Windows et Mac ; chaque machine a sa base, transfert via sauvegarde JSON.

## Décisions métier
- **6 catégories** de contacts : dépôt-vente, concession, **garage** (ajoutée, vient de l'ancien CRM),
  agence de location, transporteur, particulier.
- **Pipeline 7 statuts** : identifié, 1er contact, relance, rdv, négociation, signé, perdu (mêmes clés que l'ancien CRM).
- Messages pros = **deux compteurs** : *prospection* (convertir un pro en partenaire, objectif 15/j) et
  *mises en relation* (envoyer un client à un partenaire, objectif 2/j). LinkedIn : 30 ajouts/j. Modifiables.
- Champs ajoutés aux contacts pour l'import des prospects : adresse, distance_km, priorité A/B/C, groupe, site web.
- Sources d'import (module 2) :
  - Ancien CRM = artefact claude.ai « CRM » (base `data/users/<id>/crm/contacts`) : 4 transporteurs.
    Champs : category, name, phone, email, status, nextFollowUp, notes, createdAt.
  - Artefact « Prospects automobiles autour de Mulhouse » : 152 entreprises (statut « identifié »).
- Annonces : saisie manuelle uniquement, doublons détectés via l'URL normalisée.

## Installation chez l'utilisateur (Windows 11)
- **Smart App Control** bloque `Lancer.bat` quand il vient d'un ZIP téléchargé (marque « Internet »).
  → Méthode recommandée : `installer.ps1`, lancé par `irm <raw github>/installer.ps1 | iex` dans PowerShell.
  Le script télécharge le ZIP via PowerShell (pas de marque Internet), installe dans `~/Apporteur`
  (robocopy /MIR en gardant node_modules et .next), crée le raccourci Bureau « Apporteur »
  (icône `public/apporteur.ico`) et lance `Lancer.bat`. Relancer la même commande = mise à jour.
- Le script n'a pas pu être exécuté sous Windows ici : seule sa syntaxe a été validée (pwsh Linux).

## Points techniques importants
- Formulaires d'édition : utiliser `useFormulaire` (`src/lib/useFormulaire.ts`) et `onSubmit`, PAS `<form action>`.
  React 19 réinitialise les champs après une action de formulaire, ce qui faisait perdre des valeurs
  (selects) au 2e enregistrement. Bug constaté puis corrigé, et couvert par le test de bout en bout.
- `<form action>` reste utilisé là où la remise à zéro est voulue (ajout d'un échange).
- PDF (`@react-pdf/renderer`, police Helvetica) : remplacer les espaces insécables fines du format
  français (`propre()` dans la route PDF), sinon « 48 000 » s'affiche mal.
- Liens d'annonces (`src/lib/liens.ts`) : clé de doublon = identifiant propre à chaque site
  (Leboncoin, La Centrale, AutoScout24 tous pays, mobile.de), sinon URL nettoyée des paramètres de suivi.
- Les modèles de message par défaut sont créés au premier affichage de /messages (`initialiserModeles`).

## Structure
```
src/app/            / (tableau de bord), /crm (+ /nouveau, /import, /[id]), /messages,
                    /annonces (+ /[id]), /prequalification (+ /[id]), /parametres, api/
src/app/api/        sauvegarde (export, fichiers auto, restaurer), import, photos, prequalification/[id]/pdf
src/components/     Monogramme, ActionsRelance, SelectStatut, ChoixContact, GraphiquePrix, BoutonConfirmer,
                    ui/ (Bouton, Carte, Champs, Badge, Fenetre, EnTetePage, EtatVide), layout/ (menus)
src/db/             schema.ts (9 tables), index.ts (connexion + migrations)
src/lib/            constantes, affichage, dates, liens, variables, prequalif, formulaire, useFormulaire,
                    import, sauvegarde, donnees/ (contacts, activite, annonces, modeles, parametres), pdf/
drizzle/            migrations SQL générées
installer.ps1       installation / mise à jour Windows
```

## Commandes (développement)
- `npm run dev` — serveur de dev sur http://127.0.0.1:3210
- `npm run build` / `npm start` — version de production (utilisée par les lanceurs)
- `npm run lint`, `npm run typecheck`

## Tests
Pas de suite de tests dans le dépôt. Le test de bout en bout (Playwright, base vierge) a été fait depuis
le dossier temporaire de session : import, CRM, messages, annonces (doublons), double enregistrement,
fiche + photos + PDF, mobile 390 px sans débordement.

## Avancement
- [x] Plan validé
- [x] Étape 0 — Fondations
- [x] Module 1 — Tableau de bord
- [x] Module 2 — CRM (+ import ancien CRM et 152 prospects, fichier livré hors dépôt)
- [x] Module 3 — Banque de messages (13 modèles fournis)
- [x] Module 4 — Traqueur d'annonces
- [x] Module 5 — Fiche de pré-qualification + PDF
- [x] README final, installateur Windows
- [ ] **Version 1.0.0 livrée le 19/10 : en attente des retours de l'utilisateur**
