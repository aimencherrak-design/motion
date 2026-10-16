# Apporteur — outil privé d'apporteur d'affaires automobile

> Lis aussi `AGENTS.md` : Next.js 16 diffère des versions connues, la doc est dans `node_modules/next/dist/docs/`.

## Le projet
Outil web **privé, local (localhost), gratuit**, pour un apporteur d'affaires automobile en micro-entreprise
basé à **Mulhouse** (zone : 50 km autour). Aucun service payant, **aucune API externe, aucun scraping**.

## Règles de l'utilisateur (à respecter à chaque session)
- Débutant total en code : **lancer soi-même** toutes les commandes et expliquer chacune en une phrase.
- Corriger soi-même les erreurs avant de rendre la main.
- **Proposer, attendre la validation**, puis construire **module par module** ; faire tester chaque module.
- **Commit Git après chaque module validé** par l'utilisateur.
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

## Structure
```
src/app/            pages (/, /crm, /messages, /annonces, /prequalification, /parametres) + api/
src/components/     Monogramme, ui/ (Bouton, Carte, EnTetePage, EtatVide), layout/ (menus)
src/db/             schema.ts (tables), index.ts (connexion + migrations)
src/lib/            constantes (listes + libellés), dates, chemins, sauvegarde, statistiques
drizzle/            migrations SQL générées
```

## Commandes (développement)
- `npm run dev` — serveur de dev sur http://127.0.0.1:3210
- `npm run build` / `npm start` — version de production (utilisée par les lanceurs)
- `npm run lint`, `npm run typecheck`

## Avancement
- [x] Plan validé
- [ ] **Étape 0 — Fondations** : charte, menus PC/mobile, base SQLite (9 tables), sauvegarde/restauration JSON,
      sauvegardes auto, lanceurs. *(livrée, en attente de validation)*
- [ ] Module 1 — Tableau de bord
- [ ] Module 2 — CRM (+ imports)
- [ ] Module 3 — Banque de messages
- [ ] Module 4 — Traqueur d'annonces
- [ ] Module 5 — Fiche de pré-qualification + PDF
- [ ] README final
