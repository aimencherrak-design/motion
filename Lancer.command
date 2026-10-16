#!/bin/bash
# Lanceur Mac : double-clic pour démarrer Apporteur.
cd "$(dirname "$0")" || exit 1

if ! command -v node >/dev/null 2>&1; then
  echo "Node.js n'est pas encore installé sur ce Mac."
  echo "La page de téléchargement va s'ouvrir : installe la version « LTS », puis relance ce fichier."
  open "https://nodejs.org/fr/download"
  read -r -p "Appuie sur Entrée pour fermer."
  exit 1
fi

if curl -s -o /dev/null --max-time 2 http://127.0.0.1:3210/; then
  open "http://localhost:3210"
  exit 0
fi

VERSION=$(tr -d '[:space:]' < version.txt)
CONSTRUITE=$(tr -d '[:space:]' < .next/version-construite.txt 2>/dev/null)
if [ ! -d node_modules ] || [ "$VERSION" != "$CONSTRUITE" ]; then
  echo "Installation de la version $VERSION (1 à 3 minutes la première fois)..."
  npm install --no-audit --no-fund && npm run build || {
    echo "Une erreur est survenue. Fais une capture de cette fenêtre et envoie-la à Claude."
    read -r -p "Appuie sur Entrée pour fermer."
    exit 1
  }
  echo "$VERSION" > .next/version-construite.txt
fi

clear
echo "======================================================"
echo "  Apporteur est démarré :  http://localhost:3210"
echo "  Laisse cette fenêtre ouverte. Pour arrêter : ferme-la."
echo "======================================================"
(sleep 3 && open "http://localhost:3210") &
npm run start
