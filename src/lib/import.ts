import { inArray } from "drizzle-orm";
import { getDb, schema } from "@/db";
import { CANAUX, CATEGORIES, PRIORITES, REMUNERATIONS, STATUTS, TYPES_ECHANGE } from "@/lib/constantes";
import { aujourdhui } from "@/lib/dates";
import { sauvegardeAutomatique } from "@/lib/sauvegarde";

const { contacts, echanges } = schema;

type EchangeImport = { date: string; type: string; canal?: string | null; resume?: string | null };
export type ContactImport = Partial<typeof contacts.$inferInsert> & {
  refExterne: string;
  categorie: string;
  echanges?: EchangeImport[];
};

const CATEGORIES_ANCIEN_CRM: Record<string, string> = {
  transport: "transporteur",
  concession: "concession",
  garage: "garage",
  agence: "depot_vente",
  particulier: "particulier",
  location: "agence_location",
};

function slug(s: string) {
  return s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

const dans = <T extends object>(liste: T, v: unknown) => (typeof v === "string" && v in liste ? v : null);
const chaine = (v: unknown) => (typeof v === "string" && v.trim() ? v.trim() : null);
const nb = (v: unknown) => (typeof v === "number" && Number.isFinite(v) ? v : null);
const jour = (v: unknown) => (typeof v === "string" && /^\d{4}-\d{2}-\d{2}/.test(v) ? v.slice(0, 10) : null);

/** Ancien CRM (artefact) : { category, name, phone, email, status, nextFollowUp, notes, createdAt }. */
function depuisAncienCrm(o: Record<string, unknown>, cle?: string): ContactImport | null {
  const nomBrut = chaine(o.name);
  if (!nomBrut) return null;
  const m = nomBrut.match(/^(.*?)\s*\(([^)]+)\)\s*$/); // « Dépann68 (Mulhouse) »
  const cree = typeof o.createdAt === "number" ? new Date(o.createdAt).toISOString() : undefined;
  return {
    refExterne: `ancien-crm:${cle ?? slug(nomBrut)}`,
    source: "ancien_crm",
    entreprise: m ? m[1] : nomBrut,
    ville: m ? m[2] : null,
    categorie: CATEGORIES_ANCIEN_CRM[String(o.category)] ?? "concession",
    statut: dans(STATUTS, o.status) ?? "identifie",
    telephone: chaine(o.phone),
    email: chaine(o.email),
    prochaineRelance: jour(o.nextFollowUp),
    notes: chaine(o.notes),
    ...(cree ? { creeLe: cree } : {}),
  };
}

function depuisFormatOutil(o: Record<string, unknown>): ContactImport | null {
  const ref = chaine(o.refExterne);
  if (!ref || !(chaine(o.entreprise) || chaine(o.nom) || chaine(o.prenom))) return null;
  const echangesBruts = Array.isArray(o.echanges) ? (o.echanges as Record<string, unknown>[]) : [];
  return {
    refExterne: ref,
    source: chaine(o.source) ?? "import",
    prenom: chaine(o.prenom),
    nom: chaine(o.nom),
    entreprise: chaine(o.entreprise),
    categorie: dans(CATEGORIES, o.categorie) ?? "concession",
    statut: dans(STATUTS, o.statut) ?? "identifie",
    canal: dans(CANAUX, o.canal),
    email: chaine(o.email),
    telephone: chaine(o.telephone),
    linkedinUrl: chaine(o.linkedinUrl),
    siteWeb: chaine(o.siteWeb),
    adresse: chaine(o.adresse),
    ville: chaine(o.ville),
    distanceKm: nb(o.distanceKm),
    priorite: dans(PRIORITES, o.priorite),
    groupe: chaine(o.groupe),
    prochaineRelance: jour(o.prochaineRelance),
    remunerationType: dans(REMUNERATIONS, o.remunerationType),
    remunerationMontant: nb(o.remunerationMontant),
    notes: chaine(o.notes),
    dateSignature: jour(o.dateSignature),
    ...(chaine(o.creeLe) ? { creeLe: chaine(o.creeLe)! } : {}),
    echanges: echangesBruts
      .map((e) => ({
        date: jour(e.date) ?? aujourdhui(),
        type: dans(TYPES_ECHANGE, e.type) ?? "autre",
        canal: dans(CANAUX, e.canal),
        resume: chaine(e.resume),
      }))
      .filter((e) => e.resume),
  };
}

export type Analyse = { format: string; contacts: ContactImport[]; ignores: number };

/** Reconnaît le format du fichier et le convertit en contacts. */
export function analyserFichier(donnees: unknown): Analyse {
  const d = donnees as Record<string, unknown> | unknown[] | null;
  if (d && !Array.isArray(d) && d.format === "apporteur-sauvegarde") {
    throw new Error("Ce fichier est une sauvegarde complète : restaure-le depuis Paramètres → Restaurer une sauvegarde.");
  }
  if (d && !Array.isArray(d) && d.format === "apporteur-import" && Array.isArray(d.contacts)) {
    const res = (d.contacts as Record<string, unknown>[]).map(depuisFormatOutil);
    return { format: "Fichier d'import Apporteur", contacts: res.filter((c) => c !== null), ignores: res.filter((c) => c === null).length };
  }
  // Ancien CRM : tableau, { contacts: [...] } ou { id: {...} }.
  let entrees: [string | undefined, Record<string, unknown>][] = [];
  if (Array.isArray(d)) {
    entrees = (d as Record<string, unknown>[]).map((o) => [typeof o?.id === "string" ? o.id : undefined, o]);
  }
  else if (d && Array.isArray(d.contacts)) entrees = (d.contacts as Record<string, unknown>[]).map((o) => [typeof o?.id === "string" ? o.id : undefined, o]);
  else if (d && typeof d === "object") entrees = Object.entries(d).filter(([, o]) => o && typeof o === "object") as [string, Record<string, unknown>][];
  if (entrees.length && entrees.some(([, o]) => "category" in o && "name" in o)) {
    const res = entrees.map(([k, o]) => depuisAncienCrm(o, k));
    return { format: "Ancien CRM", contacts: res.filter((c) => c !== null), ignores: res.filter((c) => c === null).length };
  }
  throw new Error("Format de fichier non reconnu.");
}

/** Ajoute les contacts absents (repérés par leur référence). Les contacts déjà importés ne sont pas modifiés. */
export function importerContacts(liste: ContactImport[]) {
  const db = getDb();
  const refs = liste.map((c) => c.refExterne);
  const deja = new Set(
    refs.length
      ? db.select({ r: contacts.refExterne }).from(contacts).where(inArray(contacts.refExterne, refs)).all().map((x) => x.r)
      : [],
  );
  const nouveaux = liste.filter((c) => !deja.has(c.refExterne));
  if (nouveaux.length) sauvegardeAutomatique("avant-import");
  db.transaction((tx) => {
    for (const { echanges: ech, ...c } of nouveaux) {
      const r = tx.insert(contacts).values(c).returning({ id: contacts.id }).get();
      const liste = ech?.length ? ech : [{ date: aujourdhui(), type: "autre", resume: "Contact importé." }];
      for (const e of liste) tx.insert(echanges).values({ contactId: r.id, ...e }).run();
    }
  });
  return { ajoutes: nouveaux.length, dejaPresents: liste.length - nouveaux.length };
}
