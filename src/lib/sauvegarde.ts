import fs from "node:fs";
import path from "node:path";
import { getDb, schema } from "@/db";
import { sousDossier } from "@/lib/chemins";

export const FORMAT_SAUVEGARDE = "apporteur-sauvegarde";
export const VERSION_SAUVEGARDE = 1;
const AUTO_A_GARDER = 30;

// Ordre d'insertion (les tables « parents » avant les tables qui en dépendent).
const TABLES = {
  parametres: schema.parametres,
  contacts: schema.contacts,
  echanges: schema.echanges,
  activite_jour: schema.activiteJour,
  modeles_message: schema.modelesMessage,
  annonces: schema.annonces,
  historique_prix: schema.historiquePrix,
  prequalifications: schema.prequalifications,
  photos: schema.photos,
} as const;
type NomTable = keyof typeof TABLES;

export type Sauvegarde = {
  format: typeof FORMAT_SAUVEGARDE;
  version: number;
  exporteLe: string;
  tables: Record<NomTable, Record<string, unknown>[]>;
  photos?: Record<string, string>; // nom de fichier -> contenu base64
};

export function construireSauvegarde(): Sauvegarde {
  const db = getDb();
  const tables = {} as Sauvegarde["tables"];
  for (const [nom, table] of Object.entries(TABLES) as [NomTable, (typeof TABLES)[NomTable]][]) {
    tables[nom] = db.select().from(table).all() as Record<string, unknown>[];
  }
  // Les photos sont intégrées au fichier pour qu'une sauvegarde soit complète.
  const dossierPhotos = sousDossier("photos");
  const photos: Record<string, string> = {};
  for (const p of tables.photos) {
    const f = path.join(dossierPhotos, String(p.fichier));
    if (fs.existsSync(f)) photos[String(p.fichier)] = fs.readFileSync(f).toString("base64");
  }
  return {
    format: FORMAT_SAUVEGARDE,
    version: VERSION_SAUVEGARDE,
    exporteLe: new Date().toISOString(),
    tables,
    photos,
  };
}

function nomHorodate(prefixe: string) {
  const d = new Date();
  const p = (n: number) => String(n).padStart(2, "0");
  return `${prefixe}-${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}_${p(d.getHours())}h${p(d.getMinutes())}${p(d.getSeconds())}.json`;
}

export function nomFichierExport() {
  return nomHorodate("apporteur-sauvegarde");
}

/** Écrit une sauvegarde dans le dossier des sauvegardes automatiques et fait le ménage. */
export function sauvegardeAutomatique(motif: "demarrage" | "avant-restauration" | "avant-import") {
  const dossier = sousDossier("sauvegardes");
  const fichier = path.join(dossier, nomHorodate(`auto-${motif}`));
  fs.writeFileSync(fichier, JSON.stringify(construireSauvegarde()));
  const autos = fs
    .readdirSync(dossier)
    .filter((f) => f.startsWith("auto-") && f.endsWith(".json"))
    .map((f) => ({ f, t: fs.statSync(path.join(dossier, f)).mtimeMs }))
    .sort((a, b) => b.t - a.t);
  for (const { f } of autos.slice(AUTO_A_GARDER)) fs.rmSync(path.join(dossier, f));
  return path.basename(fichier);
}

export type InfoSauvegarde = { fichier: string; taille: number; date: string };

export function listerSauvegardes(): InfoSauvegarde[] {
  const dossier = sousDossier("sauvegardes");
  return fs
    .readdirSync(dossier)
    .filter((f) => f.endsWith(".json"))
    .map((f) => {
      const s = fs.statSync(path.join(dossier, f));
      return { fichier: f, taille: s.size, date: s.mtime.toISOString() };
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function cheminSauvegarde(fichier: string) {
  // Empêche de sortir du dossier (ex. "../../secret").
  const nom = path.basename(fichier);
  const f = path.join(sousDossier("sauvegardes"), nom);
  return nom.endsWith(".json") && fs.existsSync(f) ? f : null;
}

export function verifierSauvegarde(donnees: unknown): Sauvegarde {
  const s = donnees as Partial<Sauvegarde> | null;
  if (!s || s.format !== FORMAT_SAUVEGARDE || typeof s.tables !== "object" || !s.tables) {
    throw new Error("Ce fichier n'est pas une sauvegarde de l'outil.");
  }
  if (typeof s.version !== "number" || s.version > VERSION_SAUVEGARDE) {
    throw new Error("Cette sauvegarde vient d'une version plus récente de l'outil : mets l'outil à jour avant de la restaurer.");
  }
  for (const nom of Object.keys(TABLES)) {
    const lignes = (s.tables as Record<string, unknown>)[nom];
    if (lignes !== undefined && !Array.isArray(lignes)) throw new Error(`Table « ${nom} » illisible.`);
  }
  return s as Sauvegarde;
}

/** Remplace TOUTES les données par celles de la sauvegarde (après une sauvegarde de sécurité). */
export function restaurerSauvegarde(s: Sauvegarde) {
  sauvegardeAutomatique("avant-restauration");
  const db = getDb();
  const noms = Object.keys(TABLES) as NomTable[];
  const compte: Record<string, number> = {};
  db.transaction((tx) => {
    for (const nom of [...noms].reverse()) tx.delete(TABLES[nom]).run();
    for (const nom of noms) {
      const lignes = s.tables[nom] ?? [];
      compte[nom] = lignes.length;
      for (let i = 0; i < lignes.length; i += 200) {
        const lot = lignes.slice(i, i + 200);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if (lot.length) tx.insert(TABLES[nom]).values(lot as any).run();
      }
    }
  });
  if (s.photos) {
    const dossier = sousDossier("photos");
    for (const [nom, b64] of Object.entries(s.photos)) {
      fs.writeFileSync(path.join(dossier, path.basename(nom)), Buffer.from(b64, "base64"));
    }
  }
  return compte;
}
