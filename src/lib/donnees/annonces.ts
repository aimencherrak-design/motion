import { and, asc, desc, eq, inArray, like, or, sql, type SQL } from "drizzle-orm";
import { getDb, schema } from "@/db";
import { aujourdhui, joursEntre } from "@/lib/dates";

const { annonces, historiquePrix, contacts, prequalifications, photos } = schema;
export type Annonce = typeof annonces.$inferSelect;

export const STATUTS_ANNONCE_ACTIFS = ["reperee", "vendeur_contacte"];

/** Jours en ligne : depuis la date de publication si connue, sinon depuis l'ajout (estimé). */
export function joursEnLigne(a: Pick<Annonce, "datePublication" | "ajouteeLe">, today = aujourdhui()) {
  const depuis = a.datePublication ?? a.ajouteeLe.slice(0, 10);
  return { jours: Math.max(0, joursEntre(depuis, today)), estime: !a.datePublication };
}

/** Date (AAAA-MM-JJ) avant laquelle une annonce a plus de N jours en ligne. */
function limiteJours(n: number) {
  const d = new Date();
  d.setDate(d.getDate() - n);
  return aujourdhui(d);
}
const debutEnLigne = sql`coalesce(${annonces.datePublication}, substr(${annonces.ajouteeLe}, 1, 10))`;

export type FiltresAnnonces = {
  q?: string;
  statut?: string;
  plateforme?: string;
  anciennes?: string; // "1" = en ligne depuis plus de 30 jours
  tri?: string; // recent | anciennete | prix
};

function conditions(f: FiltresAnnonces) {
  const c: SQL[] = [];
  if (f.q?.trim()) {
    const m = `%${f.q.trim()}%`;
    c.push(or(like(annonces.marqueModele, m), like(annonces.localisation, m), like(annonces.notes, m), like(annonces.url, m))!);
  }
  if (f.statut === "actives") c.push(inArray(annonces.statut, STATUTS_ANNONCE_ACTIFS));
  else if (f.statut) c.push(eq(annonces.statut, f.statut));
  if (f.plateforme) c.push(eq(annonces.plateforme, f.plateforme));
  if (f.anciennes === "1") c.push(sql`${debutEnLigne} < ${limiteJours(30)}`);
  return c.length ? and(...c) : undefined;
}

export function listerAnnonces(f: FiltresAnnonces = {}) {
  const db = getDb();
  const ordre =
    f.tri === "anciennete"
      ? [asc(debutEnLigne)]
      : f.tri === "prix"
        ? [asc(sql`coalesce(${annonces.prixActuel}, 99999999)`)]
        : [desc(annonces.ajouteeLe), desc(annonces.id)];
  const lignes = db
    .select({
      annonce: annonces,
      agence: { id: contacts.id, entreprise: contacts.entreprise, nom: contacts.nom, prenom: contacts.prenom },
      fiche: prequalifications.annonceId,
    })
    .from(annonces)
    .leftJoin(contacts, eq(annonces.agenceId, contacts.id))
    .leftJoin(prequalifications, eq(prequalifications.annonceId, annonces.id))
    .where(conditions(f))
    .orderBy(...ordre)
    .all();

  // Premier prix connu, pour afficher l'évolution.
  const ids = lignes.map((l) => l.annonce.id);
  const premiers = ids.length
    ? db
        .select({ annonceId: historiquePrix.annonceId, prix: historiquePrix.prix })
        .from(historiquePrix)
        .where(inArray(historiquePrix.annonceId, ids))
        .orderBy(asc(historiquePrix.date), asc(historiquePrix.id))
        .all()
    : [];
  const premierPrix = new Map<number, number>();
  for (const p of premiers) if (!premierPrix.has(p.annonceId)) premierPrix.set(p.annonceId, p.prix);

  return lignes.map((l) => ({
    ...l.annonce,
    agence: l.agence?.id ? l.agence : null,
    aUneFiche: l.fiche != null,
    premierPrix: premierPrix.get(l.annonce.id) ?? null,
  }));
}
export type AnnonceListee = ReturnType<typeof listerAnnonces>[number];

export function compterAnnoncesParStatut() {
  const lignes = getDb().select({ statut: annonces.statut, n: sql<number>`count(*)` }).from(annonces).groupBy(annonces.statut).all();
  return Object.fromEntries(lignes.map((l) => [l.statut, l.n])) as Record<string, number>;
}

export function resumeAnnonces() {
  const db = getDb();
  const actives = db
    .select({ n: sql<number>`count(*)` })
    .from(annonces)
    .where(inArray(annonces.statut, STATUTS_ANNONCE_ACTIFS))
    .get()!.n;
  const plusDe30 = db
    .select({ n: sql<number>`count(*)` })
    .from(annonces)
    .where(and(inArray(annonces.statut, STATUTS_ANNONCE_ACTIFS), sql`${debutEnLigne} < ${limiteJours(30)}`))
    .get()!.n;
  return { actives, plusDe30 };
}

export function getAnnonce(id: number) {
  return getDb().select().from(annonces).where(eq(annonces.id, id)).get();
}

export function historiqueDesPrix(id: number) {
  return getDb()
    .select()
    .from(historiquePrix)
    .where(eq(historiquePrix.annonceId, id))
    .orderBy(asc(historiquePrix.date), asc(historiquePrix.id))
    .all();
}

export function annonceParCle(cle: string) {
  return getDb().select().from(annonces).where(eq(annonces.urlNormalisee, cle)).get();
}

export function annoncesParCles(cles: string[]) {
  if (!cles.length) return [];
  return getDb().select().from(annonces).where(inArray(annonces.urlNormalisee, cles)).all();
}

export function photosDeAnnonce(id: number) {
  return getDb().select().from(photos).where(eq(photos.annonceId, id)).orderBy(asc(photos.ordre), asc(photos.id)).all();
}

export function getFiche(id: number) {
  return getDb().select().from(prequalifications).where(eq(prequalifications.annonceId, id)).get();
}

/** Toutes les annonces avec l'état de leur fiche de pré-qualification. */
export function listerFiches() {
  return getDb()
    .select({
      annonce: annonces,
      fiche: prequalifications,
      nbPhotos: sql<number>`(select count(*) from ${photos} where ${photos.annonceId} = ${annonces.id})`,
      agence: { id: contacts.id, entreprise: contacts.entreprise, nom: contacts.nom, prenom: contacts.prenom },
    })
    .from(annonces)
    .leftJoin(prequalifications, eq(prequalifications.annonceId, annonces.id))
    .leftJoin(contacts, eq(annonces.agenceId, contacts.id))
    .orderBy(desc(sql`coalesce(${prequalifications.modifieLe}, '')`), desc(annonces.ajouteeLe))
    .all();
}
