import { asc, desc, sql } from "drizzle-orm";
import { getDb, schema } from "@/db";
import { lireParametre, ecrireParametre } from "./parametres";

const { modelesMessage } = schema;
export type Modele = typeof modelesMessage.$inferSelect;

export function listerModeles() {
  return getDb()
    .select()
    .from(modelesMessage)
    .orderBy(desc(modelesMessage.favori), asc(sql`case ${modelesMessage.type} when 'premier_contact' then 0 else 1 end`), asc(modelesMessage.titre))
    .all();
}

type ModeleInitial = Pick<Modele, "titre" | "cible" | "type" | "canal" | "contenu">;

// Modèles fournis au premier démarrage. Variables : {prénom}, {entreprise}, {ville}, {mon_prénom}…
const MODELES_INITIAUX: ModeleInitial[] = [
  {
    titre: "Concession · invitation LinkedIn",
    cible: "concession",
    type: "premier_contact",
    canal: "linkedin",
    contenu:
      "Bonjour {prénom}, je suis apporteur d'affaires automobile autour de Mulhouse. J'accompagne des particuliers et des entreprises qui achètent ou vendent un véhicule, et je cherche quelques concessions partenaires pour leur adresser des clients qualifiés. Ravi d'échanger avec vous. {mon_prénom}",
  },
  {
    titre: "Concession · présentation par e-mail",
    cible: "concession",
    type: "premier_contact",
    canal: "email",
    contenu:
      "Objet : Des acheteurs et des reprises pour {entreprise}\n\nBonjour {prénom},\n\nJe suis apporteur d'affaires automobile, basé à Mulhouse. Je suis en contact régulier avec des particuliers et des entreprises de la région qui cherchent un véhicule, ou qui veulent vendre le leur.\n\nJe vous propose deux choses :\n• des acheteurs qualifiés, que je vous adresse directement ;\n• des reprises pour alimenter votre parc d'occasion.\n\nJe ne suis rémunéré que sur les affaires conclues, selon une commission fixée par écrit à l'avance.\n\nAuriez-vous 10 minutes cette semaine pour en parler ?\n\nBien cordialement,\n{mon_prénom} {mon_nom}\n{mon_téléphone}",
  },
  {
    titre: "Concession · relance",
    cible: "concession",
    type: "relance",
    canal: "email",
    contenu:
      "Bonjour {prénom},\n\nJe me permets de revenir vers vous au sujet de ma proposition de partenariat avec {entreprise}. J'ai actuellement des demandes de clients de la région, et je serais heureux de vous les adresser en priorité.\n\nQuel serait le meilleur moment pour un court échange téléphonique ?\n\nBien cordialement,\n{mon_prénom} {mon_nom}\n{mon_téléphone}",
  },
  {
    titre: "Dépôt-vente · premier contact",
    cible: "depot_vente",
    type: "premier_contact",
    canal: "email",
    contenu:
      "Objet : Des vendeurs et des acheteurs pour {entreprise}\n\nBonjour {prénom},\n\nJe suis apporteur d'affaires automobile autour de Mulhouse. Je rencontre régulièrement des particuliers et des entreprises qui veulent vendre leur véhicule sans s'en occuper, et d'autres qui cherchent une voiture précise.\n\nJe peux vous apporter des mandats de vente et des acheteurs pour votre stock, contre une commission fixe par véhicule, définie par écrit.\n\nSeriez-vous disponible pour un échange de 10 minutes ?\n\nBien cordialement,\n{mon_prénom} {mon_nom}\n{mon_téléphone}",
  },
  {
    titre: "Dépôt-vente · relance",
    cible: "depot_vente",
    type: "relance",
    canal: "telephone",
    contenu:
      "Bonjour {prénom}, c'est {mon_prénom}, apporteur d'affaires à Mulhouse. Je vous avais écrit au sujet d'un partenariat avec {entreprise} : je peux vous amener des vendeurs en mandat et des acheteurs. Avez-vous eu le temps d'y réfléchir ?",
  },
  {
    titre: "Garage · premier contact",
    cible: "garage",
    type: "premier_contact",
    canal: "telephone",
    contenu:
      "Bonjour, je souhaiterais parler au responsable. Je suis {mon_prénom}, apporteur d'affaires automobile à Mulhouse. Je mets en relation des clients de la région avec des professionnels de confiance, pour l'achat, la vente ou l'entretien de leur véhicule. Je cherche un garage partenaire du côté de {ville} : est-ce que ce type de collaboration pourrait vous intéresser ?",
  },
  {
    titre: "Garage · relance",
    cible: "garage",
    type: "relance",
    canal: "email",
    contenu:
      "Bonjour {prénom},\n\nSuite à notre échange, je reviens vers vous concernant un partenariat avec {entreprise}. Je peux vous adresser des clients locaux, avec une rémunération uniquement sur les affaires conclues.\n\nPouvons-nous fixer un rendez-vous rapide ?\n\nBien cordialement,\n{mon_prénom} {mon_nom}\n{mon_téléphone}",
  },
  {
    titre: "Agence de location · premier contact",
    cible: "agence_location",
    type: "premier_contact",
    canal: "email",
    contenu:
      "Objet : Livraisons et transferts de véhicules pour {entreprise}\n\nBonjour {prénom},\n\nJe suis apporteur d'affaires automobile à Mulhouse, et je travaille avec des transporteurs de la région.\n\nJe peux vous aider sur la logistique de vos véhicules : livraison et récupération chez vos clients (gare, EuroAirport, hôtels, entreprises), retours d'allers simples et transferts entre agences. Je peux aussi vous apporter des clients entreprises.\n\nSeriez-vous ouvert à un court échange ?\n\nBien cordialement,\n{mon_prénom} {mon_nom}\n{mon_téléphone}",
  },
  {
    titre: "Agence de location · relance",
    cible: "agence_location",
    type: "relance",
    canal: "telephone",
    contenu:
      "Bonjour {prénom}, c'est {mon_prénom}, apporteur d'affaires à Mulhouse. Je vous avais écrit à propos des livraisons et transferts de véhicules pour {entreprise}. Avez-vous des besoins en ce moment, par exemple pour des retours d'allers simples ou des livraisons à l'EuroAirport ?",
  },
  {
    titre: "Transporteur · premier contact",
    cible: "transporteur",
    type: "premier_contact",
    canal: "telephone",
    contenu:
      "Bonjour, je suis {mon_prénom}, apporteur d'affaires automobile à Mulhouse. Je développe un réseau de loueurs, de concessions et de particuliers qui ont besoin de déplacer des véhicules, et je peux vous apporter ces clients contre une commission sur chaque transport. Pourriez-vous me donner vos tarifs sur quelques trajets types (agglomération, EuroAirport, Colmar), vos délais, vos disponibilités le week-end et votre assurance sur le véhicule transporté ?",
  },
  {
    titre: "Transporteur · relance",
    cible: "transporteur",
    type: "relance",
    canal: "email",
    contenu:
      "Bonjour {prénom},\n\nJe reviens vers vous suite à mon appel concernant un partenariat avec {entreprise}. Pour avancer, j'aurais besoin de :\n• vos tarifs sur des trajets types (agglomération mulhousienne, EuroAirport, Colmar) et votre prix au km au-delà ;\n• vos délais et disponibilités le week-end ;\n• l'assurance couvrant le véhicule transporté.\n\nDe mon côté, je vous propose une commission par client apporté, que nous fixerons par écrit.\n\nBien cordialement,\n{mon_prénom} {mon_nom}\n{mon_téléphone}",
  },
  {
    titre: "Particulier · vendeur repéré sur une annonce",
    cible: "particulier",
    type: "premier_contact",
    canal: "telephone",
    contenu:
      "Bonjour {prénom}, j'ai vu votre annonce pour votre véhicule. Je suis apporteur d'affaires automobile à Mulhouse et je travaille avec des agences partenaires qui peuvent s'occuper de la vente pour vous : estimation, photos, visites et démarches. Est-ce que vous seriez intéressé pour en savoir plus ?",
  },
  {
    titre: "Particulier · relance",
    cible: "particulier",
    type: "relance",
    canal: "telephone",
    contenu:
      "Bonjour {prénom}, c'est {mon_prénom}, on s'était parlé au sujet de la vente de votre véhicule. Est-il toujours disponible ? Mon agence partenaire peut vous proposer une estimation rapide et sans engagement.",
  },
];

/** Ajoute les modèles fournis, une seule fois (au premier démarrage). */
export function initialiserModeles() {
  if (lireParametre("modeles_initialises", false)) return;
  const db = getDb();
  const n = db.select({ n: sql<number>`count(*)` }).from(modelesMessage).get()!.n;
  if (n === 0) db.insert(modelesMessage).values(MODELES_INITIAUX).run();
  ecrireParametre("modeles_initialises", true);
}
