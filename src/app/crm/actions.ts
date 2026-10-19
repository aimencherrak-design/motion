"use server";

import { eq } from "drizzle-orm";
import { refresh } from "next/cache";
import { redirect } from "next/navigation";
import { getDb, schema } from "@/db";
import { ajouterJours } from "@/lib/affichage";
import { CANAUX, CATEGORIES, PRIORITES, REMUNERATIONS, STATUTS, TYPES_ECHANGE } from "@/lib/constantes";
import { aujourdhui, horodatage } from "@/lib/dates";
import { date, nombre, parmi, texte, type EtatFormulaire } from "@/lib/formulaire";

const { contacts, echanges } = schema;

function champsContact(fd: FormData) {
  return {
    prenom: texte(fd, "prenom"),
    nom: texte(fd, "nom"),
    entreprise: texte(fd, "entreprise"),
    categorie: parmi(fd, "categorie", CATEGORIES) ?? "concession",
    canal: parmi(fd, "canal", CANAUX),
    email: texte(fd, "email"),
    telephone: texte(fd, "telephone"),
    linkedinUrl: texte(fd, "linkedinUrl"),
    siteWeb: texte(fd, "siteWeb"),
    adresse: texte(fd, "adresse"),
    ville: texte(fd, "ville"),
    distanceKm: nombre(fd, "distanceKm"),
    priorite: parmi(fd, "priorite", PRIORITES),
    groupe: texte(fd, "groupe"),
    prochaineRelance: date(fd, "prochaineRelance"),
    remunerationType: parmi(fd, "remunerationType", REMUNERATIONS),
    remunerationMontant: nombre(fd, "remunerationMontant"),
    notes: texte(fd, "notes"),
  };
}

export async function creerContact(_: EtatFormulaire, fd: FormData): Promise<EtatFormulaire> {
  const champs = champsContact(fd);
  if (!champs.entreprise && !champs.nom && !champs.prenom) {
    return { erreur: "Indique au moins un nom ou une entreprise." };
  }
  const statut = parmi(fd, "statut", STATUTS) ?? "identifie";
  const db = getDb();
  const cree = db
    .insert(contacts)
    .values({ ...champs, statut, dateSignature: statut === "signe" ? aujourdhui() : null })
    .returning({ id: contacts.id })
    .get();
  db.insert(echanges)
    .values({ contactId: cree.id, date: aujourdhui(), type: "autre", resume: "Contact ajouté au CRM." })
    .run();
  redirect(`/crm/${cree.id}`);
}

export async function modifierContact(id: number, _: EtatFormulaire, fd: FormData): Promise<EtatFormulaire> {
  const champs = champsContact(fd);
  if (!champs.entreprise && !champs.nom && !champs.prenom) {
    return { erreur: "Indique au moins un nom ou une entreprise." };
  }
  getDb().update(contacts).set({ ...champs, modifieLe: horodatage() }).where(eq(contacts.id, id)).run();
  refresh();
  return { ok: true, message: "Modifications enregistrées." };
}

export async function changerStatut(id: number, statut: string) {
  if (!(statut in STATUTS)) return;
  const db = getDb();
  const avant = db.select().from(contacts).where(eq(contacts.id, id)).get();
  if (!avant || avant.statut === statut) return;
  db.update(contacts)
    .set({
      statut,
      modifieLe: horodatage(),
      dateSignature: statut === "signe" ? (avant.dateSignature ?? aujourdhui()) : avant.dateSignature,
      // Un contact signé ou perdu n'a plus de relance de prospection.
      prochaineRelance: statut === "signe" || statut === "perdu" ? null : avant.prochaineRelance,
    })
    .where(eq(contacts.id, id))
    .run();
  db.insert(echanges)
    .values({
      contactId: id,
      date: aujourdhui(),
      type: "changement_statut",
      resume: `Statut : ${STATUTS[avant.statut as keyof typeof STATUTS] ?? avant.statut} → ${STATUTS[statut as keyof typeof STATUTS]}`,
    })
    .run();
  refresh();
}

export async function definirRelance(id: number, dateRelance: string | null) {
  getDb()
    .update(contacts)
    .set({ prochaineRelance: dateRelance, modifieLe: horodatage() })
    .where(eq(contacts.id, id))
    .run();
  refresh();
}

/** Relance effectuée : on la note dans l'historique et on programme la suivante. */
export async function relanceFaite(id: number, joursAvantSuivante: number) {
  const db = getDb();
  const c = db.select().from(contacts).where(eq(contacts.id, id)).get();
  if (!c) return;
  db.insert(echanges)
    .values({ contactId: id, date: aujourdhui(), canal: c.canal, type: "message_envoye", resume: "Relance effectuée." })
    .run();
  db.update(contacts)
    .set({
      prochaineRelance: ajouterJours(aujourdhui(), joursAvantSuivante),
      statut: c.statut === "identifie" || c.statut === "premier_contact" ? "relance" : c.statut,
      modifieLe: horodatage(),
    })
    .where(eq(contacts.id, id))
    .run();
  refresh();
}

export async function ajouterEchange(id: number, _: EtatFormulaire, fd: FormData): Promise<EtatFormulaire> {
  const resume = texte(fd, "resume");
  const type = parmi(fd, "type", TYPES_ECHANGE) ?? "autre";
  if (!resume) return { erreur: "Écris un résumé de l'échange." };
  const db = getDb();
  db.insert(echanges)
    .values({
      contactId: id,
      date: date(fd, "date") ?? aujourdhui(),
      canal: parmi(fd, "canal", CANAUX),
      type,
      resume,
    })
    .run();
  const relance = date(fd, "prochaineRelance");
  db.update(contacts)
    .set({ modifieLe: horodatage(), ...(relance ? { prochaineRelance: relance } : {}) })
    .where(eq(contacts.id, id))
    .run();
  refresh();
  return { ok: true };
}

export async function supprimerEchange(idEchange: number) {
  getDb().delete(echanges).where(eq(echanges.id, idEchange)).run();
  refresh();
}

export async function supprimerContact(id: number) {
  getDb().delete(contacts).where(eq(contacts.id, id)).run();
  redirect("/crm");
}
