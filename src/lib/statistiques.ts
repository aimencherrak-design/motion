import { getDb } from "@/db";

export function compterDonnees() {
  const sqlite = getDb().$client;
  const n = (table: string) => (sqlite.prepare(`SELECT COUNT(*) AS n FROM ${table}`).get() as { n: number }).n;
  return {
    contacts: n("contacts"),
    echanges: n("echanges"),
    modeles: n("modeles_message"),
    annonces: n("annonces"),
    fiches: n("prequalifications"),
    photos: n("photos"),
  };
}
