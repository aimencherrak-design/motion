import os from "node:os";
import path from "node:path";
import fs from "node:fs";

// Les données sont rangées HORS du dossier du programme :
// on peut remplacer le programme (mise à jour) sans jamais toucher aux données.
// Windows : C:\Users\<toi>\Apporteur-Donnees   Mac : /Users/<toi>/Apporteur-Donnees
export function dossierDonnees() {
  const dossier =
    process.env.APPORTEUR_DATA_DIR || path.join(os.homedir(), "Apporteur-Donnees");
  fs.mkdirSync(dossier, { recursive: true });
  return dossier;
}

export function sousDossier(nom: "sauvegardes" | "photos") {
  const d = path.join(dossierDonnees(), nom);
  fs.mkdirSync(d, { recursive: true });
  return d;
}

export function fichierBase() {
  return path.join(dossierDonnees(), "apporteur.db");
}
