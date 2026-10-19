import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, FileCheck2, Hourglass, Trash2, TrendingDown } from "lucide-react";
import { BoutonConfirmer } from "@/components/BoutonConfirmer";
import { GraphiquePrix } from "@/components/GraphiquePrix";
import { PastillePlateforme } from "@/components/PastillePlateforme";
import { Badge } from "@/components/ui/Badge";
import { AncreBouton, LienBouton } from "@/components/ui/Bouton";
import { Carte, EnTeteCarte } from "@/components/ui/Carte";
import { euros, nomAffiche } from "@/lib/affichage";
import { formatDate } from "@/lib/dates";
import { getAnnonce, getFiche, historiqueDesPrix, joursEnLigne } from "@/lib/donnees/annonces";
import { getContact, listerPartenairesPossibles } from "@/lib/donnees/contacts";
import { supprimerAnnonce, supprimerPrix } from "../actions";
import { FormulaireAnnonce } from "./FormulaireAnnonce";

export async function generateMetadata({ params }: PageProps<"/annonces/[id]">): Promise<Metadata> {
  const a = getAnnonce(Number((await params).id));
  return { title: a?.marqueModele ?? "Annonce" };
}

export default async function FicheAnnonce({ params }: PageProps<"/annonces/[id]">) {
  const id = Number((await params).id);
  const a = Number.isInteger(id) ? getAnnonce(id) : undefined;
  if (!a) notFound();
  const prix = historiqueDesPrix(id);
  const { jours, estime } = joursEnLigne(a);
  const agence = a.agenceId ? getContact(a.agenceId) : undefined;
  const fiche = getFiche(id);
  const baisse = prix.length > 1 ? prix[prix.length - 1].prix - prix[0].prix : 0;

  return (
    <>
      <Link href="/annonces" className="mb-4 inline-flex items-center gap-1.5 text-sm text-doux hover:text-texte">
        <ArrowLeft className="size-4" /> Annonces
      </Link>

      <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
        <div className="min-w-0">
          <PastillePlateforme p={a.plateforme} />
          <h1 className="mt-1 text-2xl font-semibold md:text-[28px]">{a.marqueModele ?? "Annonce à compléter"}</h1>
          <div className="mt-2 flex flex-wrap items-center gap-2">
            {a.prixActuel != null && <span className="titre text-lg font-semibold">{euros(a.prixActuel)}</span>}
            <Badge ton={jours > 30 ? "or" : "discret"}>
              <Hourglass /> {jours} jour{jours > 1 ? "s" : ""} en ligne{estime ? " (estimé)" : ""}
            </Badge>
            {agence && (
              <Link href={`/crm/${agence.id}`}>
                <Badge ton="vert">Agence : {nomAffiche(agence)}</Badge>
              </Link>
            )}
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {a.url && (
            <AncreBouton href={a.url} target="_blank" rel="noreferrer">
              <ExternalLink /> Voir l&apos;annonce
            </AncreBouton>
          )}
          <LienBouton href={`/prequalification/${a.id}`} variante="primaire">
            <FileCheck2 /> {fiche ? "Fiche de pré-qualification" : "Créer la fiche de pré-qualif."}
          </LienBouton>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,360px)]">
        <Carte className="min-w-0">
          <EnTeteCarte titre="Informations du véhicule" description="Complète la fiche à partir de l'annonce." />
          <FormulaireAnnonce a={a} partenaires={listerPartenairesPossibles()} />
        </Carte>

        <div className="min-w-0 space-y-6">
          <Carte>
            <EnTeteCarte
              icone={<TrendingDown />}
              titre="Historique des prix"
              description={
                prix.length > 1
                  ? `${baisse < 0 ? "Baisse" : baisse > 0 ? "Hausse" : "Variation"} de ${euros(Math.abs(baisse))} depuis le premier relevé`
                  : "Chaque nouveau prix saisi est enregistré ici."
              }
            />
            <GraphiquePrix points={prix} />
            {prix.length === 0 ? (
              <p className="px-5 py-5 text-sm text-doux">Aucun prix enregistré pour l&apos;instant.</p>
            ) : (
              <ul className="divide-y divide-ligne">
                {[...prix].reverse().map((p, i, liste) => {
                  const precedent = liste[i + 1];
                  const diff = precedent ? p.prix - precedent.prix : 0;
                  return (
                    <li key={p.id} className="group flex items-center justify-between gap-3 px-5 py-2.5 text-sm">
                      <span className="text-doux">{formatDate(p.date)}</span>
                      <span className="flex items-center gap-3">
                        {diff !== 0 && (
                          <span className={diff < 0 ? "text-[12px] text-vert" : "text-[12px] text-rouge"}>
                            {diff > 0 ? "+" : "−"}
                            {euros(Math.abs(diff))}
                          </span>
                        )}
                        <span className="font-semibold tabular-nums">{euros(p.prix)}</span>
                        <form action={supprimerPrix.bind(null, p.id)}>
                          <button
                            aria-label="Supprimer ce relevé"
                            className="text-discret opacity-0 transition-opacity group-hover:opacity-100 hover:text-rouge focus:opacity-100"
                          >
                            <Trash2 className="size-3.5" />
                          </button>
                        </form>
                      </span>
                    </li>
                  );
                })}
              </ul>
            )}
          </Carte>

          <Carte>
            <dl className="divide-y divide-ligne text-sm">
              <div className="flex justify-between gap-3 px-5 py-3">
                <dt className="text-doux">Ajoutée le</dt>
                <dd>{formatDate(a.ajouteeLe)}</dd>
              </div>
              <div className="flex justify-between gap-3 px-5 py-3">
                <dt className="text-doux">Publiée le</dt>
                <dd>{a.datePublication ? formatDate(a.datePublication) : <span className="text-discret">inconnue</span>}</dd>
              </div>
              <div className="flex justify-between gap-3 px-5 py-3">
                <dt className="text-doux">Jours en ligne</dt>
                <dd className={jours > 30 ? "font-semibold text-or" : ""}>
                  {jours}
                  {estime ? " (estimé)" : ""}
                </dd>
              </div>
            </dl>
          </Carte>

          <div className="flex justify-end">
            <BoutonConfirmer action={supprimerAnnonce.bind(null, a.id)} confirmation="Supprimer définitivement ?">
              <Trash2 /> Supprimer cette annonce
            </BoutonConfirmer>
          </div>
        </div>
      </div>
    </>
  );
}
