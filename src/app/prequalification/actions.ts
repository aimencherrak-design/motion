"use server";

import fs from "node:fs";
import path from "node:path";
import { eq } from "drizzle-orm";
import { refresh } from "next/cache";
import { getDb, schema } from "@/db";
import { sousDossier } from "@/lib/chemins";
import { ETATS_CARNET, STATUTS_CT } from "@/lib/constantes";
import { horodatage } from "@/lib/dates";
import { coche, date, entier, parmi, texte, type EtatFormulaire } from "@/lib/formulaire";

const { prequalifications, photos } = schema;

export async function enregistrerFiche(annonceId: number, _: EtatFormulaire, fd: FormData): Promise<EtatFormulaire> {
  const nb = entier(fd, "nbProprietaires");
  if (nb != null && (nb < 0 || nb > 30)) return { erreur: "Le nombre de propriétaires semble incorrect." };
  const valeurs = {
    ctStatut: parmi(fd, "ctStatut", STATUTS_CT),
    ctDate: date(fd, "ctDate"),
    ctDefauts: texte(fd, "ctDefauts"),
    carnet: parmi(fd, "carnet", ETATS_CARNET),
    histovecRecu: coche(fd, "histovecRecu"),
    histovecCode: texte(fd, "histovecCode"),
    nbProprietaires: nb,
    photosOk: coche(fd, "photosOk"),
    remarques: texte(fd, "remarques"),
    modifieLe: horodatage(),
  };
  getDb()
    .insert(prequalifications)
    .values({ annonceId, ...valeurs })
    .onConflictDoUpdate({ target: prequalifications.annonceId, set: valeurs })
    .run();
  refresh();
  return { ok: true, message: "Fiche enregistrée." };
}

export async function supprimerPhoto(id: number) {
  const db = getDb();
  const p = db.select().from(photos).where(eq(photos.id, id)).get();
  if (!p) return;
  fs.rmSync(path.join(sousDossier("photos"), path.basename(p.fichier)), { force: true });
  db.delete(photos).where(eq(photos.id, id)).run();
  refresh();
}

/** Déplace une photo d'un cran (-1 = avant, +1 = après) ; la première sert de photo principale. */
export async function deplacerPhoto(annonceId: number, id: number, sens: -1 | 1) {
  const db = getDb();
  const liste = db.select().from(photos).where(eq(photos.annonceId, annonceId)).orderBy(photos.ordre, photos.id).all();
  const i = liste.findIndex((p) => p.id === id);
  const j = i + sens;
  if (i < 0 || j < 0 || j >= liste.length) return;
  [liste[i], liste[j]] = [liste[j], liste[i]];
  db.transaction((tx) => {
    liste.forEach((p, k) => tx.update(photos).set({ ordre: k }).where(eq(photos.id, p.id)).run());
  });
  refresh();
}
