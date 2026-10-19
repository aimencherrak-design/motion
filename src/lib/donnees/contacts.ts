import { and, asc, count, desc, eq, inArray, isNotNull, like, lte, or, sql, type SQL } from "drizzle-orm";
import { getDb, schema } from "@/db";
import { STATUTS_ACTIFS } from "@/lib/affichage";
import { aujourdhui } from "@/lib/dates";

const { contacts, echanges, annonces } = schema;
export type Contact = typeof contacts.$inferSelect;
export type Echange = typeof echanges.$inferSelect;

export type FiltresContacts = {
  q?: string;
  categorie?: string;
  statut?: string;
  priorite?: string;
  relance?: string; // "dues"
  tri?: string; // relance | nom | distance | recent
};

function conditions(f: FiltresContacts) {
  const c: SQL[] = [];
  if (f.q?.trim()) {
    const m = `%${f.q.trim()}%`;
    c.push(
      or(
        like(contacts.entreprise, m),
        like(contacts.nom, m),
        like(contacts.prenom, m),
        like(contacts.ville, m),
        like(contacts.groupe, m),
        like(contacts.telephone, m),
        like(contacts.email, m),
      )!,
    );
  }
  if (f.categorie) c.push(eq(contacts.categorie, f.categorie));
  if (f.statut === "actifs") c.push(inArray(contacts.statut, STATUTS_ACTIFS));
  else if (f.statut) c.push(eq(contacts.statut, f.statut));
  if (f.priorite) c.push(eq(contacts.priorite, f.priorite));
  if (f.relance === "dues") {
    c.push(isNotNull(contacts.prochaineRelance), lte(contacts.prochaineRelance, aujourdhui()));
    c.push(inArray(contacts.statut, STATUTS_ACTIFS));
  }
  return c.length ? and(...c) : undefined;
}

function ordre(tri?: string) {
  switch (tri) {
    case "nom":
      return [asc(sql`lower(coalesce(${contacts.entreprise}, ${contacts.nom}, ''))`)];
    case "distance":
      return [asc(sql`coalesce(${contacts.distanceKm}, 9999)`), asc(contacts.entreprise)];
    case "recent":
      return [desc(contacts.modifieLe)];
    default:
      // Relances les plus urgentes d'abord, puis priorité, puis distance.
      return [
        asc(sql`coalesce(${contacts.prochaineRelance}, '9999-12-31')`),
        asc(sql`coalesce(${contacts.priorite}, 'Z')`),
        asc(sql`coalesce(${contacts.distanceKm}, 9999)`),
      ];
  }
}

export function listerContacts(f: FiltresContacts = {}) {
  return getDb()
    .select()
    .from(contacts)
    .where(conditions(f))
    .orderBy(...ordre(f.tri))
    .all();
}

/** Compte par catégorie, en tenant compte des autres filtres (pour les puces). */
export function compterParCategorie(f: FiltresContacts) {
  const lignes = getDb()
    .select({ categorie: contacts.categorie, n: count() })
    .from(contacts)
    .where(conditions({ ...f, categorie: undefined }))
    .groupBy(contacts.categorie)
    .all();
  return Object.fromEntries(lignes.map((l) => [l.categorie, l.n])) as Record<string, number>;
}

export function compterParStatut() {
  const lignes = getDb().select({ statut: contacts.statut, n: count() }).from(contacts).groupBy(contacts.statut).all();
  return Object.fromEntries(lignes.map((l) => [l.statut, l.n])) as Record<string, number>;
}

export function getContact(id: number) {
  return getDb().select().from(contacts).where(eq(contacts.id, id)).get();
}

export function echangesDuContact(id: number) {
  return getDb()
    .select()
    .from(echanges)
    .where(eq(echanges.contactId, id))
    .orderBy(desc(echanges.date), desc(echanges.id))
    .all();
}

export function annoncesDeAgence(id: number) {
  return getDb().select().from(annonces).where(eq(annonces.agenceId, id)).orderBy(desc(annonces.ajouteeLe)).all();
}

/** Relances dues (en retard ou aujourd'hui) des contacts encore en cours. */
export function relancesDues() {
  return getDb()
    .select()
    .from(contacts)
    .where(
      and(
        isNotNull(contacts.prochaineRelance),
        lte(contacts.prochaineRelance, aujourdhui()),
        inArray(contacts.statut, STATUTS_ACTIFS),
      ),
    )
    .orderBy(asc(contacts.prochaineRelance), asc(sql`coalesce(${contacts.priorite}, 'Z')`))
    .all();
}

export function relancesAVenir(jours = 7) {
  const today = aujourdhui();
  const fin = new Date();
  fin.setDate(fin.getDate() + jours);
  return getDb()
    .select()
    .from(contacts)
    .where(
      and(
        sql`${contacts.prochaineRelance} > ${today}`,
        lte(contacts.prochaineRelance, aujourdhui(fin)),
        inArray(contacts.statut, STATUTS_ACTIFS),
      ),
    )
    .orderBy(asc(contacts.prochaineRelance))
    .all();
}

export function partenairesSignes() {
  return getDb()
    .select()
    .from(contacts)
    .where(eq(contacts.statut, "signe"))
    .orderBy(desc(sql`coalesce(${contacts.dateSignature}, ${contacts.modifieLe})`))
    .all();
}

/** Contacts pouvant être reliés à une annonce (agence partenaire) : les pros. */
export function listerPartenairesPossibles() {
  return getDb()
    .select({
      id: contacts.id,
      entreprise: contacts.entreprise,
      prenom: contacts.prenom,
      nom: contacts.nom,
      ville: contacts.ville,
      statut: contacts.statut,
      categorie: contacts.categorie,
    })
    .from(contacts)
    .where(sql`${contacts.categorie} != 'particulier'`)
    .orderBy(
      asc(sql`case ${contacts.statut} when 'signe' then 0 when 'negociation' then 1 when 'rdv' then 2 else 3 end`),
      asc(sql`lower(coalesce(${contacts.entreprise}, ${contacts.nom}, ''))`),
    )
    .all();
}

export function listerContactsCourts() {
  return getDb()
    .select({
      id: contacts.id,
      entreprise: contacts.entreprise,
      prenom: contacts.prenom,
      nom: contacts.nom,
      ville: contacts.ville,
      categorie: contacts.categorie,
      statut: contacts.statut,
    })
    .from(contacts)
    .orderBy(asc(sql`lower(coalesce(${contacts.entreprise}, ${contacts.nom}, ''))`))
    .all();
}
