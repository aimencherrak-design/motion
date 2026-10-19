# Apporteur

Ton outil privé d'apporteur d'affaires automobile (Mulhouse et 50 km autour).
Il tourne **uniquement sur ton ordinateur** : rien n'est envoyé sur Internet, aucun abonnement, aucun service payant.

---

## 1. Installer l'outil sur Windows (une seule fois)

1. Appuie sur la touche **Windows**, tape **PowerShell**, puis appuie sur **Entrée**.
   Une fenêtre bleue s'ouvre.
2. Copie la ligne ci-dessous, colle-la dans la fenêtre bleue (**clic droit** = coller), puis appuie sur **Entrée** :

   ```
   irm https://raw.githubusercontent.com/aimencherrak-design/motion/refs/heads/claude/sharp-meitner-gyryxo/installer.ps1 | iex
   ```

3. Le script installe tout tout seul, crée une icône **Apporteur** sur ton Bureau et lance l'outil.
   La première fois, une fenêtre noire travaille pendant **2 à 4 minutes**, puis ton navigateur s'ouvre.

> Si Node.js n'est pas encore installé, le script l'installe. Il te demande ensuite de fermer la fenêtre
> bleue et de recoller la même ligne.

Cette méthode évite le blocage « Contrôle intelligent des applications » de Windows 11.

## 2. Utiliser l'outil au quotidien

- Double-clique sur l'icône **Apporteur** de ton Bureau.
- Ton navigateur s'ouvre sur **http://localhost:3210**. Tu peux l'ajouter à tes favoris.
- **Laisse la fenêtre noire ouverte** pendant que tu travailles (tu peux la réduire). Pour arrêter l'outil, ferme-la.

## 3. Mettre à jour l'outil

Recolle la même ligne qu'à l'installation dans PowerShell. **Tes données ne sont pas touchées.**

## 4. Tes données et les sauvegardes

- Tes données sont rangées à part, dans **`C:\Users\<ton nom>\Apporteur-Donnees`**
  (base de données, photos des véhicules, sauvegardes).
- Une **sauvegarde automatique** est faite à chaque démarrage. Les 30 dernières sont conservées.
- **Faire une sauvegarde toi-même** : menu **Paramètres** → **Télécharger une sauvegarde**.
  Le fichier `.json` contient tout, photos comprises. Range-le sur une clé USB ou dans ton cloud.
- **Revenir à une sauvegarde** : **Paramètres** → **Restaurer une sauvegarde**, puis choisis le fichier.
- **Passer du PC au Mac** : télécharge une sauvegarde sur le PC, puis restaure-la sur le Mac.

## 5. Ce que contient l'outil

| Menu | À quoi ça sert |
|---|---|
| **Tableau de bord** | Quotas du jour (ajouts LinkedIn, messages de prospection, mises en relation) avec les boutons + et −, relances en retard (rouge) et du jour (orange), partenaires signés |
| **CRM** | Tes contacts par catégorie, pipeline en 7 statuts, fiche complète avec l'historique des échanges, import de fichiers |
| **Messages** | Modèles de 1er contact et de relance par cible ; choisis un contact, puis **Copier** : `{prénom}`, `{entreprise}`… sont remplis tout seuls |
| **Annonces** | Colle plusieurs liens d'un coup, doublons signalés, jours en ligne, historique des prix, filtre « en ligne > 30 jours » |
| **Pré-qualification** | Checklist par véhicule (CT, carnet, HistoVec, propriétaires, photos, remarques) et **export PDF** pour l'agence |
| **Paramètres** | Ton profil (pour les messages et le PDF), tes objectifs, les sauvegardes |

---

## Sur Mac

1. Installe Node.js (version **LTS**) depuis <https://nodejs.org/fr/download>.
2. Télécharge l'outil : <https://github.com/aimencherrak-design/motion/archive/refs/heads/claude/sharp-meitner-gyryxo.zip>, puis double-clique sur le ZIP.
3. Dans le dossier, fais **clic droit sur `Lancer.command` → Ouvrir** (la première fois seulement), puis confirme.

## Autre méthode Windows (sans PowerShell)

Télécharge le ZIP (lien ci-dessus). **Avant de l'extraire**, fais clic droit → **Propriétés**,
coche **Débloquer**, puis **OK**. Ensuite, clic droit → **Extraire tout**, et double-clic sur **`Lancer.bat`**.
