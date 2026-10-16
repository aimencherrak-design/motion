// Listes de valeurs utilisées partout dans l'outil.
// La clé (ex. "depot_vente") est stockée en base, le libellé est affiché.

export const CATEGORIES = {
  depot_vente: "Dépôt-vente",
  concession: "Concession",
  garage: "Garage",
  agence_location: "Agence de location",
  transporteur: "Transporteur",
  particulier: "Particulier",
} as const;
export type Categorie = keyof typeof CATEGORIES;

export const STATUTS = {
  identifie: "Identifié",
  premier_contact: "1er contact",
  relance: "Relance",
  rdv: "RDV",
  negociation: "Négociation",
  signe: "Signé",
  perdu: "Perdu",
} as const;
export type Statut = keyof typeof STATUTS;

export const CANAUX = {
  linkedin: "LinkedIn",
  email: "E-mail",
  telephone: "Téléphone",
  visite: "Visite",
} as const;
export type Canal = keyof typeof CANAUX;

export const TYPES_ECHANGE = {
  message_envoye: "Message envoyé",
  reponse: "Réponse reçue",
  appel: "Appel",
  rdv: "Rendez-vous",
  mise_en_relation: "Mise en relation",
  changement_statut: "Changement de statut",
  autre: "Autre",
} as const;
export type TypeEchange = keyof typeof TYPES_ECHANGE;

export const PRIORITES = { A: "A", B: "B", C: "C" } as const;
export type Priorite = keyof typeof PRIORITES;

export const REMUNERATIONS = {
  fixe: "Fixe (€)",
  commission: "Commission (%)",
} as const;
export type Remuneration = keyof typeof REMUNERATIONS;

export const TYPES_MESSAGE = {
  premier_contact: "1er contact",
  relance: "Relance",
} as const;
export type TypeMessage = keyof typeof TYPES_MESSAGE;

export const PLATEFORMES = {
  leboncoin: "Leboncoin",
  lacentrale: "La Centrale",
  autoscout24: "AutoScout24",
  mobile_de: "mobile.de",
  autre: "Autre",
} as const;
export type Plateforme = keyof typeof PLATEFORMES;

export const STATUTS_ANNONCE = {
  reperee: "Repérée",
  vendeur_contacte: "Vendeur contacté",
  mandat_signe: "Mandat signé",
  perdue: "Perdue",
} as const;
export type StatutAnnonce = keyof typeof STATUTS_ANNONCE;

export const STATUTS_CT = {
  ok: "Favorable",
  contre_visite: "Contre-visite",
  absent: "Absent / à faire",
} as const;

export const ETATS_CARNET = {
  complet: "Complet",
  partiel: "Partiel",
  absent: "Absent",
} as const;

export const OBJECTIFS_PAR_DEFAUT = {
  ajouts_linkedin: 30,
  messages_prospection: 15,
  mises_en_relation: 2,
};

export function cles<T extends object>(o: T) {
  return Object.keys(o) as (keyof T)[];
}
