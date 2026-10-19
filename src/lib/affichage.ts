import type { Ton } from "@/components/ui/Badge";
import { aujourdhui, joursEntre } from "./dates";

export const TON_STATUT: Record<string, Ton> = {
  identifie: "discret",
  premier_contact: "bleu",
  relance: "orange",
  rdv: "or",
  negociation: "or",
  signe: "vert",
  perdu: "rouge",
};

export const TON_STATUT_ANNONCE: Record<string, Ton> = {
  reperee: "discret",
  vendeur_contacte: "bleu",
  mandat_signe: "vert",
  perdue: "rouge",
};

export const STATUTS_ACTIFS = ["identifie", "premier_contact", "relance", "rdv", "negociation"];

type ContactNom = { prenom?: string | null; nom?: string | null; entreprise?: string | null };

export function nomPersonne(c: ContactNom) {
  return [c.prenom, c.nom].filter(Boolean).join(" ");
}

/** Nom principal affiché : l'entreprise si elle existe, sinon la personne. */
export function nomAffiche(c: ContactNom) {
  return c.entreprise || nomPersonne(c) || "Sans nom";
}

/** Ligne secondaire : la personne si l'entreprise est affichée en titre. */
export function sousNom(c: ContactNom) {
  return c.entreprise ? nomPersonne(c) : "";
}

export type EtatRelance = "retard" | "jour" | "bientot" | "plus_tard" | "aucune";

export function etatRelance(date: string | null | undefined, today = aujourdhui()): EtatRelance {
  if (!date) return "aucune";
  const j = joursEntre(today, date);
  if (j < 0) return "retard";
  if (j === 0) return "jour";
  if (j <= 7) return "bientot";
  return "plus_tard";
}

export function libelleRelance(date: string | null | undefined, today = aujourdhui()) {
  if (!date) return "Aucune";
  const j = joursEntre(today, date);
  if (j === 0) return "Aujourd'hui";
  if (j === 1) return "Demain";
  if (j === -1) return "Hier";
  if (j < 0) return `En retard de ${-j} j`;
  if (j <= 7) return `Dans ${j} j`;
  return new Intl.DateTimeFormat("fr-FR", { day: "numeric", month: "short" }).format(new Date(`${date}T12:00:00`));
}

export const TON_RELANCE: Record<EtatRelance, Ton> = {
  retard: "rouge",
  jour: "orange",
  bientot: "neutre",
  plus_tard: "discret",
  aucune: "discret",
};

const fmtEuro = new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });
const fmtNombre = new Intl.NumberFormat("fr-FR");

export const euros = (n?: number | null) => (n == null ? "" : fmtEuro.format(n));
export const nombre = (n?: number | null) => (n == null ? "" : fmtNombre.format(n));

export function libelleRemuneration(type?: string | null, montant?: number | null) {
  if (montant == null) return "";
  return type === "commission" ? `${String(montant).replace(".", ",")} %` : euros(montant);
}

export function lienTel(tel?: string | null) {
  return tel ? `tel:${tel.replace(/[^\d+]/g, "")}` : undefined;
}

export function ajouterJours(date: string, n: number) {
  const d = new Date(`${date}T12:00:00`);
  d.setDate(d.getDate() + n);
  return aujourdhui(d);
}
