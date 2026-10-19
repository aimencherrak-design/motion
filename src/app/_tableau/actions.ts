"use server";

import { refresh } from "next/cache";
import { COMPTEURS, modifierCompteur, type Compteur } from "@/lib/donnees/activite";

export async function ajusterCompteur(compteur: Compteur, delta: number) {
  if (!(compteur in COMPTEURS) || ![-1, 1, 5].includes(delta)) return;
  modifierCompteur(compteur, delta);
  refresh();
}
