"use server";

import { eq } from "drizzle-orm";
import { refresh } from "next/cache";
import { getDb, schema } from "@/db";
import { ajouterJours } from "@/lib/affichage";
import { CANAUX, CATEGORIES, TYPES_MESSAGE } from "@/lib/constantes";
import { aujourdhui, horodatage } from "@/lib/dates";
import { modifierCompteur } from "@/lib/donnees/activite";
import { parmi, texte, type EtatFormulaire } from "@/lib/formulaire";

const { modelesMessage, contacts, echanges } = schema;

function champs(fd: FormData) {
  const cible = texte(fd, "cible");
  return {
    titre: texte(fd, "titre"),
    cible: cible && cible in CATEGORIES ? cible : "toutes",
    type: parmi(fd, "type", TYPES_MESSAGE) ?? "premier_contact",
    canal: parmi(fd, "canal", CANAUX),
    contenu: texte(fd, "contenu"),
  };
}

export async function enregistrerModele(id: number | null, _: EtatFormulaire, fd: FormData): Promise<EtatFormulaire> {
  const c = champs(fd);
  if (!c.titre) return { erreur: "Donne un titre au modèle." };
  if (!c.contenu) return { erreur: "Le message est vide." };
  const db = getDb();
  const valeurs = { ...c, titre: c.titre, contenu: c.contenu };
  if (id) db.update(modelesMessage).set({ ...valeurs, modifieLe: horodatage() }).where(eq(modelesMessage.id, id)).run();
  else db.insert(modelesMessage).values(valeurs).run();
  refresh();
  return { ok: true };
}

export async function basculerFavori(id: number, favori: boolean) {
  getDb().update(modelesMessage).set({ favori }).where(eq(modelesMessage.id, id)).run();
  refresh();
}

export async function supprimerModele(id: number) {
  getDb().delete(modelesMessage).where(eq(modelesMessage.id, id)).run();
  refresh();
}

/**
 * Le message a été envoyé à un contact : on le note dans son historique,
 * on compte un message de prospection et on programme la relance.
 */
export async function noterEnvoi(contactId: number, modeleId: number, texteEnvoye: string) {
  const db = getDb();
  const c = db.select().from(contacts).where(eq(contacts.id, contactId)).get();
  const m = db.select().from(modelesMessage).where(eq(modelesMessage.id, modeleId)).get();
  if (!c || !m) return { ok: false };
  const canal = m.canal ?? c.canal;
  db.insert(echanges)
    .values({
      contactId,
      date: aujourdhui(),
      canal,
      type: "message_envoye",
      resume: `${m.titre}\n\n${texteEnvoye.slice(0, 2000)}`,
    })
    .run();
  const nouveauStatut =
    c.statut === "identifie" ? "premier_contact" : c.statut === "premier_contact" && m.type === "relance" ? "relance" : c.statut;
  if (nouveauStatut !== c.statut) {
    db.insert(echanges)
      .values({ contactId, date: aujourdhui(), type: "changement_statut", resume: `Statut mis à jour après l'envoi du message.` })
      .run();
  }
  db.update(contacts)
    .set({
      statut: nouveauStatut,
      canal: c.canal ?? canal,
      prochaineRelance: ["signe", "perdu"].includes(c.statut) ? c.prochaineRelance : ajouterJours(aujourdhui(), 5),
      modifieLe: horodatage(),
    })
    .where(eq(contacts.id, contactId))
    .run();
  if (c.categorie !== "particulier") modifierCompteur("messages_prospection", 1);
  refresh();
  return { ok: true };
}
