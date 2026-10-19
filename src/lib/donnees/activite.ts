import { desc, gte, sql } from "drizzle-orm";
import { getDb, schema } from "@/db";
import { aujourdhui } from "@/lib/dates";

const { activiteJour } = schema;

// Clé affichée -> propriété Drizzle de la table activite_jour.
export const COMPTEURS = {
  ajouts_linkedin: "ajoutsLinkedin",
  messages_prospection: "messagesProspection",
  mises_en_relation: "misesEnRelation",
} as const;
export type Compteur = keyof typeof COMPTEURS;

export function activiteDuJour(date = aujourdhui()) {
  const l = getDb().select().from(activiteJour).where(sql`${activiteJour.date} = ${date}`).get();
  return {
    ajouts_linkedin: l?.ajoutsLinkedin ?? 0,
    messages_prospection: l?.messagesProspection ?? 0,
    mises_en_relation: l?.misesEnRelation ?? 0,
  };
}

export function modifierCompteur(compteur: Compteur, delta: number, date = aujourdhui()) {
  const prop = COMPTEURS[compteur];
  const col = activiteJour[prop];
  getDb()
    .insert(activiteJour)
    .values({ date, [prop]: Math.max(0, delta) })
    .onConflictDoUpdate({ target: activiteJour.date, set: { [prop]: sql`max(0, ${col} + ${delta})` } })
    .run();
}

export function activiteRecente(jours = 7) {
  const debut = new Date();
  debut.setDate(debut.getDate() - (jours - 1));
  return getDb().select().from(activiteJour).where(gte(activiteJour.date, aujourdhui(debut))).orderBy(desc(activiteJour.date)).all();
}
