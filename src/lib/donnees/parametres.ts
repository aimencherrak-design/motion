import { eq } from "drizzle-orm";
import { getDb, schema } from "@/db";
import { OBJECTIFS_PAR_DEFAUT } from "@/lib/constantes";

export type Objectifs = typeof OBJECTIFS_PAR_DEFAUT;
export type Profil = {
  prenom: string;
  nom: string;
  entreprise: string;
  telephone: string;
  email: string;
  siret: string;
  ville: string;
};

export const PROFIL_VIDE: Profil = { prenom: "", nom: "", entreprise: "", telephone: "", email: "", siret: "", ville: "Mulhouse" };

export function lireParametre<T>(cle: string, defaut: T): T {
  const ligne = getDb().select().from(schema.parametres).where(eq(schema.parametres.cle, cle)).get();
  if (!ligne?.valeur) return defaut;
  try {
    const v = JSON.parse(ligne.valeur);
    return typeof defaut === "object" && defaut !== null ? { ...defaut, ...v } : v;
  } catch {
    return defaut;
  }
}

export function ecrireParametre(cle: string, valeur: unknown) {
  getDb()
    .insert(schema.parametres)
    .values({ cle, valeur: JSON.stringify(valeur) })
    .onConflictDoUpdate({ target: schema.parametres.cle, set: { valeur: JSON.stringify(valeur) } })
    .run();
}

export const lireObjectifs = () => lireParametre<Objectifs>("objectifs", OBJECTIFS_PAR_DEFAUT);
export const lireProfil = () => lireParametre<Profil>("profil", PROFIL_VIDE);
