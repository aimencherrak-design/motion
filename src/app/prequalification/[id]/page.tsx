import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Building2, Camera, Check, ExternalLink, FileDown, Pencil, X } from "lucide-react";
import { PastillePlateforme } from "@/components/PastillePlateforme";
import { AncreBouton, LienBouton } from "@/components/ui/Bouton";
import { Carte, EnTeteCarte } from "@/components/ui/Carte";
import { euros, nombre, nomAffiche } from "@/lib/affichage";
import { getAnnonce, getFiche, photosDeAnnonce } from "@/lib/donnees/annonces";
import { getContact } from "@/lib/donnees/contacts";
import { pointsDeControle } from "@/lib/prequalif";
import { cx } from "@/lib/cx";
import { FormulaireFiche } from "./FormulaireFiche";
import { GestionPhotos } from "./GestionPhotos";

export async function generateMetadata({ params }: PageProps<"/prequalification/[id]">): Promise<Metadata> {
  const a = getAnnonce(Number((await params).id));
  return { title: `Pré-qualification · ${a?.marqueModele ?? "véhicule"}` };
}

export default async function PageFiche({ params }: PageProps<"/prequalification/[id]">) {
  const id = Number((await params).id);
  const a = Number.isInteger(id) ? getAnnonce(id) : undefined;
  if (!a) notFound();
  const fiche = getFiche(id);
  const photos = photosDeAnnonce(id);
  const agence = a.agenceId ? getContact(a.agenceId) : undefined;
  const { points, faits, total } = pointsDeControle(fiche, photos.length);

  return (
    <>
      <Link href="/prequalification" className="mb-4 inline-flex items-center gap-1.5 text-sm text-doux hover:text-texte">
        <ArrowLeft className="size-4" /> Pré-qualification
      </Link>

      <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="mb-1.5 text-[11px] font-semibold tracking-[0.14em] text-or uppercase">Fiche de pré-qualification</p>
          <h1 className="text-2xl font-semibold md:text-[28px]">{a.marqueModele ?? "Véhicule à compléter"}</h1>
          <p className="mt-1.5 text-sm text-doux">
            {[a.annee, a.kilometrage != null ? `${nombre(a.kilometrage)} km` : null, a.carburant, a.prixActuel != null ? euros(a.prixActuel) : null]
              .filter(Boolean)
              .join(" · ") || "Complète les informations du véhicule depuis l'annonce."}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <LienBouton href={`/annonces/${a.id}`}>
            <Pencil /> Infos du véhicule
          </LienBouton>
          <AncreBouton href={`/api/prequalification/${a.id}/pdf`} target="_blank" variante="primaire">
            <FileDown /> Exporter en PDF
          </AncreBouton>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,380px)]">
        <Carte className="min-w-0">
          <EnTeteCarte titre="Checklist" description="Coche au fur et à mesure de ce que le vendeur te transmet." />
          <FormulaireFiche annonceId={a.id} fiche={fiche} />
        </Carte>

        <div className="min-w-0 space-y-6">
          <Carte>
            <div className="px-5 pt-5 pb-4">
              <div className="flex items-baseline justify-between">
                <p className="text-[13px] font-semibold text-doux">Dossier</p>
                <p className="titre text-2xl font-semibold tabular-nums">
                  {faits}
                  <span className="text-base text-discret"> / {total}</span>
                </p>
              </div>
              <div className="mt-3 flex gap-1">
                {points.map((p) => (
                  <span key={p.cle} className={cx("h-1.5 flex-1 rounded-full", p.ok ? "bg-or" : "bg-surface-3")} />
                ))}
              </div>
            </div>
            <ul className="divide-y divide-ligne border-t border-ligne">
              {points.map((p) => (
                <li key={p.cle} className="flex items-center justify-between gap-3 px-5 py-2.5 text-sm">
                  <span className="flex items-center gap-2.5">
                    <span className={cx("grid size-5 place-items-center rounded-full", p.ok ? "bg-vert/15 text-vert" : "bg-surface-3 text-discret")}>
                      {p.ok ? <Check className="size-3" strokeWidth={3} /> : <X className="size-3" />}
                    </span>
                    {p.libelle}
                  </span>
                  <span className="text-[12.5px] text-doux">{p.valeur ?? "—"}</span>
                </li>
              ))}
            </ul>
          </Carte>

          <Carte>
            <EnTeteCarte icone={<Camera />} titre="Photos" description={`${photos.length} photo${photos.length > 1 ? "s" : ""}`} />
            <GestionPhotos annonceId={a.id} photos={photos} />
          </Carte>

          <Carte>
            <EnTeteCarte icone={<Building2 />} titre="Agence destinataire" />
            <div className="px-5 py-4 text-sm">
              {agence ? (
                <Link href={`/crm/${agence.id}`} className="font-medium hover:text-or">
                  {nomAffiche(agence)}
                  {agence.ville ? <span className="text-doux"> · {agence.ville}</span> : null}
                </Link>
              ) : (
                <p className="text-doux">
                  Aucune agence choisie.{" "}
                  <Link href={`/annonces/${a.id}`} className="text-or underline">
                    Choisir dans la fiche du véhicule
                  </Link>
                </p>
              )}
              {a.url && (
                <div className="mt-3 flex items-center justify-between gap-3 border-t border-ligne pt-3">
                  <PastillePlateforme p={a.plateforme} />
                  <a href={a.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-[12.5px] text-doux hover:text-texte">
                    Voir l&apos;annonce <ExternalLink className="size-3.5" />
                  </a>
                </div>
              )}
            </div>
          </Carte>
        </div>
      </div>
    </>
  );
}
