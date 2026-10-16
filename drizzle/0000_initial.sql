CREATE TABLE `activite_jour` (
	`date` text PRIMARY KEY NOT NULL,
	`ajouts_linkedin` integer DEFAULT 0 NOT NULL,
	`messages_prospection` integer DEFAULT 0 NOT NULL,
	`mises_en_relation` integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE `annonces` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`url` text NOT NULL,
	`url_normalisee` text NOT NULL,
	`plateforme` text DEFAULT 'autre' NOT NULL,
	`marque_modele` text,
	`annee` integer,
	`kilometrage` integer,
	`carburant` text,
	`localisation` text,
	`prix_actuel` integer,
	`date_publication` text,
	`statut` text DEFAULT 'reperee' NOT NULL,
	`agence_id` integer,
	`vendeur_nom` text,
	`vendeur_tel` text,
	`notes` text,
	`ajoutee_le` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
	`modifie_le` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
	FOREIGN KEY (`agence_id`) REFERENCES `contacts`(`id`) ON UPDATE no action ON DELETE set null
);
--> statement-breakpoint
CREATE UNIQUE INDEX `annonces_url_normalisee_unique` ON `annonces` (`url_normalisee`);--> statement-breakpoint
CREATE INDEX `annonces_statut_idx` ON `annonces` (`statut`);--> statement-breakpoint
CREATE TABLE `contacts` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`prenom` text,
	`nom` text,
	`entreprise` text,
	`categorie` text NOT NULL,
	`statut` text DEFAULT 'identifie' NOT NULL,
	`canal` text,
	`email` text,
	`telephone` text,
	`linkedin_url` text,
	`site_web` text,
	`adresse` text,
	`ville` text,
	`distance_km` real,
	`priorite` text,
	`groupe` text,
	`prochaine_relance` text,
	`remuneration_type` text,
	`remuneration_montant` real,
	`notes` text,
	`source` text DEFAULT 'manuel' NOT NULL,
	`ref_externe` text,
	`date_signature` text,
	`cree_le` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
	`modifie_le` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
);
--> statement-breakpoint
CREATE INDEX `contacts_statut_idx` ON `contacts` (`statut`);--> statement-breakpoint
CREATE INDEX `contacts_relance_idx` ON `contacts` (`prochaine_relance`);--> statement-breakpoint
CREATE INDEX `contacts_ref_idx` ON `contacts` (`ref_externe`);--> statement-breakpoint
CREATE TABLE `echanges` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`contact_id` integer NOT NULL,
	`date` text NOT NULL,
	`canal` text,
	`type` text NOT NULL,
	`resume` text,
	`cree_le` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
	FOREIGN KEY (`contact_id`) REFERENCES `contacts`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE INDEX `echanges_contact_idx` ON `echanges` (`contact_id`);--> statement-breakpoint
CREATE TABLE `historique_prix` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`annonce_id` integer NOT NULL,
	`prix` integer NOT NULL,
	`date` text NOT NULL,
	FOREIGN KEY (`annonce_id`) REFERENCES `annonces`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE INDEX `historique_prix_annonce_idx` ON `historique_prix` (`annonce_id`);--> statement-breakpoint
CREATE TABLE `modeles_message` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`titre` text NOT NULL,
	`cible` text DEFAULT 'toutes' NOT NULL,
	`type` text NOT NULL,
	`canal` text,
	`contenu` text NOT NULL,
	`favori` integer DEFAULT false NOT NULL,
	`cree_le` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
	`modifie_le` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `parametres` (
	`cle` text PRIMARY KEY NOT NULL,
	`valeur` text
);
--> statement-breakpoint
CREATE TABLE `photos` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`annonce_id` integer NOT NULL,
	`fichier` text NOT NULL,
	`ordre` integer DEFAULT 0 NOT NULL,
	`cree_le` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
	FOREIGN KEY (`annonce_id`) REFERENCES `annonces`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE INDEX `photos_annonce_idx` ON `photos` (`annonce_id`);--> statement-breakpoint
CREATE TABLE `prequalifications` (
	`annonce_id` integer PRIMARY KEY NOT NULL,
	`ct_statut` text,
	`ct_date` text,
	`ct_defauts` text,
	`carnet` text,
	`histovec_recu` integer DEFAULT false NOT NULL,
	`histovec_code` text,
	`nb_proprietaires` integer,
	`photos_ok` integer DEFAULT false NOT NULL,
	`remarques` text,
	`modifie_le` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
	FOREIGN KEY (`annonce_id`) REFERENCES `annonces`(`id`) ON UPDATE no action ON DELETE cascade
);
