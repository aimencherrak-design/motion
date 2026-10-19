"use server";

import { randomUUID } from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { eq } from "drizzle-orm";
import { refresh } from "next/cache";
import { redirect } from "next/navigation";
import { getDb, schema } from "@/db";
import { sousDossier } from "@/lib/chemins";
import { PLATEFORMES, STATUTS_ANNONCE } from "@/lib/constantes";
import { aujourdhui, horodatage } from "@/lib/dates";
import { annoncesParCles, photosDeAnnonce } from "@/lib/donnees/annonces";
import { date, entier, parmi, texte, type EtatFormulaire } from "@/lib/formulaire";
import { analyserLien, detecterPlateforme, extraireLiens } from "@/lib/liens";

const { annonces, historiquePrix } = schema;

export type LigneAnalyse = {
  ligne: string;
  url: string | null;
  plateforme: string | null;
  etat: "nouveau" | "doublon" | "repete" | "invalide";
  existant?: { id: number; titre: string; ajouteeLe: string };
};

function analyser(texteColle: string): LigneAnalyse[] {
  const morceaux = extraireLiens(texteColle);
  const analyses = morceaux.map((m) => ({ m, a: m.lien ? analyserLien(m.lien) : null }));
  const existants = new Map(
    annoncesParCles(analyses.flatMap((x) => (x.a ? [x.a.cle] : []))).map((a) => [a.urlNormalisee, a]),
  );
  const vus = new Set<string>();
  return analyses.map(({ m, a }) => {
    if (!a) return { ligne: m.ligne, url: m.lien, plateforme: null, etat: "invalide" as const };
    const ex = existants.get(a.cle);
    if (ex) {
      return {
        ligne: m.ligne,
        url: a.url,
        plateforme: a.plateforme,
        etat: "doublon" as const,
        existant: { id: ex.id, titre: ex.marqueModele ?? "Annonce sans titre", ajouteeLe: ex.ajouteeLe },
      };
    }
    if (vus.has(a.cle)) return { ligne: m.ligne, url: a.url, plateforme: a.plateforme, etat: "repete" as const };
    vus.add(a.cle);
    return { ligne: m.ligne, url: a.url, plateforme: a.plateforme, etat: "nouveau" as const };
  });
}

/** Aperçu avant création : quels liens sont nouveaux, déjà enregistrés, en double ou invalides. */
export async function analyserCollage(texteColle: string) {
  return analyser(texteColle);
}

export async function creerDepuisCollage(texteColle: string) {
  const lignes = analyser(texteColle);
  const db = getDb();
  const crees: number[] = [];
  db.transaction((tx) => {
    for (const l of lignes) {
      if (l.etat !== "nouveau" || !l.url) continue;
      const a = analyserLien(l.url)!;
      const r = tx
        .insert(annonces)
        .values({ url: a.url, urlNormalisee: a.cle, plateforme: a.plateforme })
        .returning({ id: annonces.id })
        .get();
      crees.push(r.id);
    }
  });
  refresh();
  return { crees: crees.length, ids: crees, lignes };
}

export async function modifierAnnonce(id: number, _: EtatFormulaire, fd: FormData): Promise<EtatFormulaire> {
  const db = getDb();
  const avant = db.select().from(annonces).where(eq(annonces.id, id)).get();
  if (!avant) return { erreur: "Annonce introuvable." };

  let url = avant.url;
  let urlNormalisee = avant.urlNormalisee;
  const nouvelleUrl = texte(fd, "url");
  if (nouvelleUrl && nouvelleUrl !== avant.url) {
    const a = analyserLien(nouvelleUrl);
    if (!a) return { erreur: "Le lien de l'annonce n'est pas valide." };
    const autre = db.select().from(annonces).where(eq(annonces.urlNormalisee, a.cle)).get();
    if (autre && autre.id !== id) return { erreur: "Ce lien est déjà enregistré pour une autre annonce." };
    url = a.url;
    urlNormalisee = a.cle;
  }

  const prix = entier(fd, "prixActuel");
  db.update(annonces)
    .set({
      url,
      urlNormalisee,
      plateforme: parmi(fd, "plateforme", PLATEFORMES) ?? avant.plateforme,
      marqueModele: texte(fd, "marqueModele"),
      annee: entier(fd, "annee"),
      kilometrage: entier(fd, "kilometrage"),
      carburant: texte(fd, "carburant"),
      localisation: texte(fd, "localisation"),
      prixActuel: prix,
      datePublication: date(fd, "datePublication"),
      statut: parmi(fd, "statut", STATUTS_ANNONCE) ?? avant.statut,
      agenceId: entier(fd, "agenceId"),
      vendeurNom: texte(fd, "vendeurNom"),
      vendeurTel: texte(fd, "vendeurTel"),
      notes: texte(fd, "notes"),
      modifieLe: horodatage(),
    })
    .where(eq(annonces.id, id))
    .run();

  // Historique des prix : une ligne à chaque nouveau prix.
  if (prix != null && prix !== avant.prixActuel) {
    db.insert(historiquePrix).values({ annonceId: id, prix, date: aujourdhui() }).run();
  }
  refresh();
  return { ok: true, message: "Annonce enregistrée." };
}

export async function changerStatutAnnonce(id: number, statut: string) {
  if (!(statut in STATUTS_ANNONCE)) return;
  getDb().update(annonces).set({ statut, modifieLe: horodatage() }).where(eq(annonces.id, id)).run();
  refresh();
}

export async function supprimerPrix(idPrix: number) {
  getDb().delete(historiquePrix).where(eq(historiquePrix.id, idPrix)).run();
  refresh();
}

export async function supprimerAnnonce(id: number) {
  const dossier = sousDossier("photos");
  for (const p of photosDeAnnonce(id)) fs.rmSync(path.join(dossier, p.fichier), { force: true });
  getDb().delete(annonces).where(eq(annonces.id, id)).run();
  redirect("/annonces");
}

/** Véhicule hors annonce (ex. proposé directement par un particulier). */
export async function creerVehiculeManuel(_: EtatFormulaire, fd: FormData): Promise<EtatFormulaire> {
  const titre = texte(fd, "marqueModele");
  if (!titre) return { erreur: "Indique au moins la marque et le modèle." };
  const lien = texte(fd, "url");
  const a = lien ? analyserLien(lien) : null;
  if (lien && !a) return { erreur: "Le lien n'est pas valide (laisse vide s'il n'y a pas d'annonce)." };
  if (a && annoncesParCles([a.cle]).length) return { erreur: "Ce lien est déjà enregistré dans tes annonces." };
  const prix = entier(fd, "prixActuel");
  const db = getDb();
  const r = db
    .insert(annonces)
    .values({
      url: a?.url ?? "",
      urlNormalisee: a?.cle ?? `manuel:${randomUUID()}`,
      plateforme: a ? detecterPlateforme(new URL(a.url).hostname) : "autre",
      marqueModele: titre,
      annee: entier(fd, "annee"),
      kilometrage: entier(fd, "kilometrage"),
      prixActuel: prix,
      localisation: texte(fd, "localisation"),
      vendeurNom: texte(fd, "vendeurNom"),
      vendeurTel: texte(fd, "vendeurTel"),
    })
    .returning({ id: annonces.id })
    .get();
  if (prix != null) db.insert(historiquePrix).values({ annonceId: r.id, prix, date: aujourdhui() }).run();
  redirect(`/prequalification/${r.id}`);
}
