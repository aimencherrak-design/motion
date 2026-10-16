# Apporteur

Ton outil privé d'apporteur d'affaires automobile. Il tourne **uniquement sur ton ordinateur** :
rien n'est envoyé sur Internet, et c'est gratuit.

## Installation (une seule fois)

1. Installe **Node.js** : va sur <https://nodejs.org/fr/download>, télécharge la version **LTS**
   et installe-la en cliquant sur « Suivant » jusqu'au bout.
2. Décompresse le dossier de l'outil où tu veux (par exemple dans `Documents`).
   ⚠️ Fais bien clic droit → **Extraire tout**, ne lance rien depuis l'intérieur du fichier ZIP.

## Lancer l'outil

- **Windows** : double-clic sur **`Lancer.bat`**.
  Si Windows affiche « Windows a protégé votre ordinateur », clique sur **Informations complémentaires** puis **Exécuter quand même**.
- **Mac** : clic droit sur **`Lancer.command`** → **Ouvrir** (la première fois seulement).

La première fois, l'installation prend 2 à 4 minutes. Ensuite l'outil s'ouvre tout seul dans ton
navigateur à l'adresse **http://localhost:3210**.

Laisse la fenêtre noire ouverte pendant que tu utilises l'outil. Pour l'arrêter : ferme cette fenêtre.

## Tes données et les sauvegardes

- Tes données sont rangées à part, dans le dossier **`Apporteur-Donnees`** de ton dossier personnel
  (Windows : `C:\Users\<ton nom>\Apporteur-Donnees`).
- Une **sauvegarde automatique** est faite à chaque démarrage (les 30 dernières sont gardées).
- Pour faire une sauvegarde toi-même : menu **Paramètres** → **Télécharger une sauvegarde**.
  Range ce fichier sur une clé USB ou dans ton cloud.
- Pour revenir à une sauvegarde : **Paramètres** → **Restaurer une sauvegarde**.

## Mettre à jour l'outil

Remplace le dossier du programme par la nouvelle version, puis lance `Lancer.bat`.
Tes données ne sont pas touchées : elles sont dans `Apporteur-Donnees`.
