import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Car, Clock, ExternalLink, Globe, Mail, MapPin, MessageSquareText, Phone, Trash2 } from "lucide-react";
import { ActionsRelance } from "@/components/ActionsRelance";
import { BoutonConfirmer } from "@/components/BoutonConfirmer";
import { Badge } from "@/components/ui/Badge";
import { AncreBouton, LienBouton } from "@/components/ui/Bouton";
import { Carte, EnTeteCarte } from "@/components/ui/Carte";
import {
  TON_RELANCE,
  TON_STATUT_ANNONCE,
  etatRelance,
  euros,
  libelleRelance,
  lienTel,
  nomAffiche,
  sousNom,
} from "@/lib/affichage";
import { CATEGORIES, STATUTS_ANNONCE } from "@/lib/constantes";
import { formatDate } from "@/lib/dates";
import { annoncesDeAgence, echangesDuContact, getContact } from "@/lib/donnees/contacts";
import { modifierContact, supprimerContact } from "../actions";
import { FormulaireContact } from "../FormulaireContact";
import { EtapesStatut } from "./EtapesStatut";
import { Historique } from "./Historique";

export async function generateMetadata({ params }: PageProps<"/crm/[id]">): Promise<Metadata> {
  const c = getContact(Number((await params).id));
  return { title: c ? nomAffiche(c) : "Contact" };
}

export default async function FicheContact({ params }: PageProps<"/crm/[id]">) {
  const id = Number((await params).id);
  const c = Number.isInteger(id) ? getContact(id) : undefined;
  if (!c) notFound();
  const echanges = echangesDuContact(id);
  const annonces = annoncesDeAgence(id);
  const etat = etatRelance(c.prochaineRelance);
  const actif = !["signe", "perdu"].includes(c.statut);

  return (
    <>
      <Link href="/crm" className="mb-4 inline-flex items-center gap-1.5 text-sm text-doux hover:text-texte">
        <ArrowLeft className="size-4" /> CRM
      </Link>

      <div className="mb-5 flex flex-wrap items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="mb-1.5 text-[11px] font-semibold tracking-[0.14em] text-or uppercase">
            {CATEGORIES[c.categorie as keyof typeof CATEGORIES]}
            {c.groupe ? ` · ${c.groupe}` : ""}
          </p>
          <h1 className="text-2xl font-semibold md:text-[28px]">{nomAffiche(c)}</h1>
          <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-doux">
            {sousNom(c) && <span>{sousNom(c)}</span>}
            {c.ville && (
              <span className="inline-flex items-center gap-1">
                <MapPin className="size-3.5 text-discret" /> {c.ville}
                {c.distanceKm != null && ` · ${Math.round(c.distanceKm)} km`}
              </span>
            )}
            {c.priorite && <Badge ton={c.priorite === "A" ? "or" : "discret"}>Priorité {c.priorite}</Badge>}
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {c.telephone && (
            <AncreBouton href={lienTel(c.telephone)} variante="primaire">
              <Phone /> {c.telephone}
            </AncreBouton>
          )}
          {c.email && (
            <AncreBouton href={`mailto:${c.email}`}>
              <Mail /> E-mail
            </AncreBouton>
          )}
          {c.linkedinUrl && (
            <AncreBouton href={c.linkedinUrl} target="_blank" rel="noreferrer">
              <ExternalLink /> LinkedIn
            </AncreBouton>
          )}
          <LienBouton href={`/messages?contact=${c.id}`}>
            <MessageSquareText /> Écrire un message
          </LienBouton>
          {c.siteWeb && (
            <AncreBouton href={c.siteWeb} target="_blank" rel="noreferrer">
              <Globe /> Site
            </AncreBouton>
          )}
        </div>
      </div>

      <EtapesStatut id={c.id} statut={c.statut} />

      <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,380px)]">
        <Carte className="min-w-0">
          <EnTeteCarte titre="Informations" description="Modifie les champs puis clique sur « Enregistrer »." />
          <FormulaireContact action={modifierContact.bind(null, c.id)} contact={c} />
        </Carte>

        <div className="min-w-0 space-y-6">
          {actif && (
            <Carte>
              <EnTeteCarte icone={<Clock />} titre="Prochaine relance" />
              <div className="space-y-3 px-5 py-4">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm">{c.prochaineRelance ? formatDate(c.prochaineRelance) : "Non programmée"}</span>
                  <Badge ton={TON_RELANCE[etat]}>{libelleRelance(c.prochaineRelance)}</Badge>
                </div>
                <ActionsRelance id={c.id} />
              </div>
            </Carte>
          )}

          <Carte>
            <EnTeteCarte titre="Historique des échanges" description={`${echanges.length} entrée${echanges.length > 1 ? "s" : ""}`} />
            <Historique id={c.id} echanges={echanges} canalParDefaut={c.canal} />
          </Carte>

          {annonces.length > 0 && (
            <Carte>
              <EnTeteCarte icone={<Car />} titre="Annonces liées" description="Véhicules pour lesquels ce partenaire est l'agence concernée." />
              <ul className="divide-y divide-ligne">
                {annonces.map((a) => (
                  <li key={a.id}>
                    <Link href={`/annonces/${a.id}`} className="flex items-center justify-between gap-3 px-5 py-3 hover:bg-surface-2">
                      <span className="min-w-0">
                        <span className="block truncate text-sm font-medium">{a.marqueModele ?? "Annonce à compléter"}</span>
                        <span className="block text-[12px] text-discret">{euros(a.prixActuel)}</span>
                      </span>
                      <Badge ton={TON_STATUT_ANNONCE[a.statut]}>{STATUTS_ANNONCE[a.statut as keyof typeof STATUTS_ANNONCE]}</Badge>
                    </Link>
                  </li>
                ))}
              </ul>
            </Carte>
          )}

          <div className="flex justify-end">
            <BoutonConfirmer action={supprimerContact.bind(null, c.id)} confirmation="Supprimer définitivement ?">
              <Trash2 /> Supprimer ce contact
            </BoutonConfirmer>
          </div>
        </div>
      </div>
    </>
  );
}
