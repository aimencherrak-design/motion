import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileCheck2 } from "lucide-react";
import { PastillePlateforme } from "@/components/PastillePlateforme";
import { Badge } from "@/components/ui/Badge";
import { LienBouton } from "@/components/ui/Bouton";
import { Carte } from "@/components/ui/Carte";
import { EnTetePage } from "@/components/ui/EnTetePage";
import { EtatVide } from "@/components/ui/EtatVide";
import { TON_STATUT_ANNONCE, euros, nombre, nomAffiche } from "@/lib/affichage";
import { STATUTS_ANNONCE } from "@/lib/constantes";
import { formatDate } from "@/lib/dates";
import { listerFiches } from "@/lib/donnees/annonces";
import { pointsDeControle } from "@/lib/prequalif";
import { cx } from "@/lib/cx";
import { NouveauVehicule } from "./NouveauVehicule";

export const metadata: Metadata = { title: "Pré-qualification" };

export default function PagePrequalification() {
  const lignes = listerFiches();
  const avecFiche = lignes.filter((l) => l.fiche);
  const sansFiche = lignes.filter((l) => !l.fiche && l.annonce.statut !== "perdue");

  return (
    <>
      <EnTetePage
        surtitre="Véhicules"
        titre="Pré-qualification"
        description="Vérifie chaque véhicule avant de le proposer à une agence, puis envoie-lui une fiche PDF propre."
        actions={<NouveauVehicule />}
      />

      {lignes.length === 0 ? (
        <Carte>
          <EtatVide
            icone={<FileCheck2 />}
            titre="Aucun véhicule pour l'instant"
            texte="Ajoute des annonces dans le traqueur, ou crée un véhicule hors annonce."
            action={<LienBouton href="/annonces" variante="primaire">Aller aux annonces</LienBouton>}
          />
        </Carte>
      ) : (
        <div className="space-y-8">
          <section>
            <h2 className="mb-3 text-[13px] font-semibold tracking-wider text-doux uppercase">Fiches en cours · {avecFiche.length}</h2>
            {avecFiche.length === 0 ? (
              <p className="rounded-carte border border-dashed border-ligne-forte px-5 py-6 text-sm text-doux">
                Aucune fiche commencée. Choisis un véhicule ci-dessous pour démarrer.
              </p>
            ) : (
              <ul className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {avecFiche.map(({ annonce: a, fiche, nbPhotos, agence }) => {
                  const { points, faits, total } = pointsDeControle(fiche, nbPhotos);
                  return (
                    <li key={a.id}>
                      <Link href={`/prequalification/${a.id}`} className="group flex h-full flex-col rounded-carte border border-ligne bg-surface p-4 shadow-carte transition-colors hover:border-ligne-forte">
                        <div className="flex items-center justify-between gap-2">
                          <PastillePlateforme p={a.plateforme} />
                          <Badge ton={TON_STATUT_ANNONCE[a.statut]}>{STATUTS_ANNONCE[a.statut as keyof typeof STATUTS_ANNONCE]}</Badge>
                        </div>
                        <p className="mt-2 truncate font-semibold group-hover:text-or">{a.marqueModele ?? "Véhicule à compléter"}</p>
                        <p className="truncate text-[12.5px] text-discret">
                          {[a.annee, a.kilometrage != null ? `${nombre(a.kilometrage)} km` : null, euros(a.prixActuel)].filter(Boolean).join(" · ") || "—"}
                        </p>
                        <div className="mt-4 flex gap-1">
                          {points.map((p) => (
                            <span key={p.cle} className={cx("h-1.5 flex-1 rounded-full", p.ok ? "bg-or" : "bg-surface-3")} />
                          ))}
                        </div>
                        <div className="mt-2 flex items-center justify-between text-[12px] text-doux">
                          <span>
                            {faits}/{total} points{faits === total ? " · complet" : ""}
                          </span>
                          <span className="truncate">{agence?.id ? nomAffiche(agence) : `Mise à jour ${formatDate(fiche!.modifieLe)}`}</span>
                        </div>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </section>

          {sansFiche.length > 0 && (
            <section>
              <h2 className="mb-3 text-[13px] font-semibold tracking-wider text-doux uppercase">Véhicules sans fiche · {sansFiche.length}</h2>
              <Carte className="overflow-hidden">
                <ul className="divide-y divide-ligne">
                  {sansFiche.map(({ annonce: a }) => (
                    <li key={a.id}>
                      <Link href={`/prequalification/${a.id}`} className="group flex items-center justify-between gap-3 px-5 py-3 hover:bg-surface-2">
                        <span className="min-w-0">
                          <span className="block truncate text-sm font-medium">{a.marqueModele ?? <span className="text-orange">Annonce à compléter</span>}</span>
                          <span className="block truncate text-[12px] text-discret">
                            <PastillePlateforme p={a.plateforme} /> {a.prixActuel != null ? `· ${euros(a.prixActuel)}` : ""}
                          </span>
                        </span>
                        <span className="inline-flex shrink-0 items-center gap-1 text-[12.5px] text-or">
                          Créer la fiche <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </Carte>
            </section>
          )}
        </div>
      )}
    </>
  );
}
