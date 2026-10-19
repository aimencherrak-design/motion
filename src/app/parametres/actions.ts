"use server";

import { refresh } from "next/cache";
import { ecrireParametre, lireObjectifs, lireProfil, type Profil } from "@/lib/donnees/parametres";
import { entier, texte, type EtatFormulaire } from "@/lib/formulaire";

export async function enregistrerProfil(_: EtatFormulaire, fd: FormData): Promise<EtatFormulaire> {
  const actuel = lireProfil();
  const profil = Object.fromEntries(Object.keys(actuel).map((k) => [k, texte(fd, k) ?? ""])) as Profil;
  ecrireParametre("profil", profil);
  refresh();
  return { ok: true, message: "Profil enregistré." };
}

export async function enregistrerObjectifs(_: EtatFormulaire, fd: FormData): Promise<EtatFormulaire> {
  const actuels = lireObjectifs();
  const nouveaux = { ...actuels };
  for (const k of Object.keys(actuels) as (keyof typeof actuels)[]) {
    const n = entier(fd, k);
    if (n == null || n < 0 || n > 500) return { erreur: "Les objectifs doivent être des nombres entre 0 et 500." };
    nouveaux[k] = n;
  }
  ecrireParametre("objectifs", nouveaux);
  refresh();
  return { ok: true, message: "Objectifs enregistrés." };
}
