import { sql } from "drizzle-orm";
import {
  index,
  integer,
  primaryKey,
  real,
  sqliteTable,
  text,
} from "drizzle-orm/sqlite-core";

// Dates : texte "AAAA-MM-JJ". Horodatages : texte ISO 8601.
const maintenant = sql`(strftime('%Y-%m-%dT%H:%M:%fZ', 'now'))`;

export const contacts = sqliteTable(
  "contacts",
  {
    id: integer("id").primaryKey({ autoIncrement: true }),
    prenom: text("prenom"),
    nom: text("nom"),
    entreprise: text("entreprise"),
    categorie: text("categorie").notNull(),
    statut: text("statut").notNull().default("identifie"),
    canal: text("canal"),
    email: text("email"),
    telephone: text("telephone"),
    linkedinUrl: text("linkedin_url"),
    siteWeb: text("site_web"),
    adresse: text("adresse"),
    ville: text("ville"),
    distanceKm: real("distance_km"),
    priorite: text("priorite"),
    groupe: text("groupe"),
    prochaineRelance: text("prochaine_relance"),
    remunerationType: text("remuneration_type"),
    remunerationMontant: real("remuneration_montant"),
    notes: text("notes"),
    source: text("source").notNull().default("manuel"),
    refExterne: text("ref_externe"),
    dateSignature: text("date_signature"),
    creeLe: text("cree_le").notNull().default(maintenant),
    modifieLe: text("modifie_le").notNull().default(maintenant),
  },
  (t) => [
    index("contacts_statut_idx").on(t.statut),
    index("contacts_relance_idx").on(t.prochaineRelance),
    index("contacts_ref_idx").on(t.refExterne),
  ],
);

export const echanges = sqliteTable(
  "echanges",
  {
    id: integer("id").primaryKey({ autoIncrement: true }),
    contactId: integer("contact_id")
      .notNull()
      .references(() => contacts.id, { onDelete: "cascade" }),
    date: text("date").notNull(),
    canal: text("canal"),
    type: text("type").notNull(),
    resume: text("resume"),
    creeLe: text("cree_le").notNull().default(maintenant),
  },
  (t) => [index("echanges_contact_idx").on(t.contactId)],
);

export const activiteJour = sqliteTable("activite_jour", {
  date: text("date").primaryKey(),
  ajoutsLinkedin: integer("ajouts_linkedin").notNull().default(0),
  messagesProspection: integer("messages_prospection").notNull().default(0),
  misesEnRelation: integer("mises_en_relation").notNull().default(0),
});

export const modelesMessage = sqliteTable("modeles_message", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  titre: text("titre").notNull(),
  cible: text("cible").notNull().default("toutes"),
  type: text("type").notNull(),
  canal: text("canal"),
  contenu: text("contenu").notNull(),
  favori: integer("favori", { mode: "boolean" }).notNull().default(false),
  creeLe: text("cree_le").notNull().default(maintenant),
  modifieLe: text("modifie_le").notNull().default(maintenant),
});

export const annonces = sqliteTable(
  "annonces",
  {
    id: integer("id").primaryKey({ autoIncrement: true }),
    url: text("url").notNull(),
    urlNormalisee: text("url_normalisee").notNull().unique(),
    plateforme: text("plateforme").notNull().default("autre"),
    marqueModele: text("marque_modele"),
    annee: integer("annee"),
    kilometrage: integer("kilometrage"),
    carburant: text("carburant"),
    localisation: text("localisation"),
    prixActuel: integer("prix_actuel"),
    datePublication: text("date_publication"),
    statut: text("statut").notNull().default("reperee"),
    agenceId: integer("agence_id").references(() => contacts.id, {
      onDelete: "set null",
    }),
    vendeurNom: text("vendeur_nom"),
    vendeurTel: text("vendeur_tel"),
    notes: text("notes"),
    ajouteeLe: text("ajoutee_le").notNull().default(maintenant),
    modifieLe: text("modifie_le").notNull().default(maintenant),
  },
  (t) => [index("annonces_statut_idx").on(t.statut)],
);

export const historiquePrix = sqliteTable(
  "historique_prix",
  {
    id: integer("id").primaryKey({ autoIncrement: true }),
    annonceId: integer("annonce_id")
      .notNull()
      .references(() => annonces.id, { onDelete: "cascade" }),
    prix: integer("prix").notNull(),
    date: text("date").notNull(),
  },
  (t) => [index("historique_prix_annonce_idx").on(t.annonceId)],
);

export const prequalifications = sqliteTable("prequalifications", {
  annonceId: integer("annonce_id")
    .primaryKey()
    .references(() => annonces.id, { onDelete: "cascade" }),
  ctStatut: text("ct_statut"),
  ctDate: text("ct_date"),
  ctDefauts: text("ct_defauts"),
  carnet: text("carnet"),
  histovecRecu: integer("histovec_recu", { mode: "boolean" })
    .notNull()
    .default(false),
  histovecCode: text("histovec_code"),
  nbProprietaires: integer("nb_proprietaires"),
  photosOk: integer("photos_ok", { mode: "boolean" }).notNull().default(false),
  remarques: text("remarques"),
  modifieLe: text("modifie_le").notNull().default(maintenant),
});

export const photos = sqliteTable(
  "photos",
  {
    id: integer("id").primaryKey({ autoIncrement: true }),
    annonceId: integer("annonce_id")
      .notNull()
      .references(() => annonces.id, { onDelete: "cascade" }),
    fichier: text("fichier").notNull(),
    ordre: integer("ordre").notNull().default(0),
    creeLe: text("cree_le").notNull().default(maintenant),
  },
  (t) => [index("photos_annonce_idx").on(t.annonceId)],
);

export const parametres = sqliteTable(
  "parametres",
  {
    cle: text("cle").notNull(),
    valeur: text("valeur"),
  },
  (t) => [primaryKey({ columns: [t.cle] })],
);
