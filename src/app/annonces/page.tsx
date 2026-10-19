import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, Car, ExternalLink, FileCheck2, Hourglass } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Carte } from "@/components/ui/Carte";
import { EnTetePage } from "@/components/ui/EnTetePage";
import { EtatVide } from "@/components/ui/EtatVide";
import { euros, nombre, nomAffiche } from "@/lib/affichage";
import { STATUTS_ANNONCE } from "@/lib/constantes";
import {
  compterAnnoncesParStatut,
  joursEnLigne,
  listerAnnonces,
  type AnnonceListee,
  type FiltresAnnonces,
} from "@/lib/donnees/annonces";
import { cx } from "@/lib/cx";
import { PastillePlateforme } from "@/components/PastillePlateforme";
import { AjoutRapide } from "./AjoutRapide";
import { BarreFiltresAnnonces } from "./BarreFiltresAnnonces";
import { SelectStatutAnnonce } from "./SelectStatutAnnonce";

export const metadata: Metadata = { title: "Annonces" };

function Evolution({ a }: { a: AnnonceListee }) {
  if (a.premierPrix == null || a.prixActuel == null || a.premierPrix === a.prixActuel) return null;
  const diff = a.prixActuel - a.premierPrix;
  const Icone = diff < 0 ? ArrowDownRight : ArrowUpRight;
  return (
    <span className={cx("inline-flex items-center gap-0.5 text-[12px] font-medium", diff < 0 ? "text-vert" : "text-rouge")}>
      <Icone className="size-3.5" />
      {diff > 0 ? "+" : "−"}
      {euros(Math.abs(diff))}
    </span>
  );
}

function LigneAnnonce({ a }: { a: AnnonceListee }) {
  const { jours, estime } = joursEnLigne(a);
  const details = [a.annee, a.kilometrage != null ? `${nombre(a.kilometrage)} km` : null, a.carburant, a.localisation].filter(Boolean);
  const aCompleter = !a.marqueModele;
  return (
    <li className="relative grid grid-cols-[minmax(0,1fr)_auto] gap-x-4 gap-y-2.5 px-4 py-4 transition-colors hover:bg-surface-2 sm:px-5 md:grid-cols-[minmax(0,2fr)_130px_120px_150px_minmax(0,1fr)] md:items-center">
      <div className="min-w-0">
        <div className="flex items-center gap-2">
          <PastillePlateforme p={a.plateforme} />
          {a.aUneFiche && (
            <span title="Fiche de pré-qualification créée" className="text-or">
              <FileCheck2 className="size-3.5" />
            </span>
          )}
        </div>
        <Link href={`/annonces/${a.id}`} className="mt-0.5 block truncate font-semibold after:absolute after:inset-0 hover:text-or">
          {aCompleter ? <span className="text-orange">Annonce à compléter</span> : a.marqueModele}
        </Link>
        <p className="truncate text-[12.5px] text-discret">{details.length ? details.join(" · ") : a.url.replace(/^https?:\/\/(www\.)?/, "")}</p>
      </div>
      <div className="text-right md:order-none md:text-left">
        <p className="titre font-semibold tabular-nums">{a.prixActuel != null ? euros(a.prixActuel) : <span className="text-discret">—</span>}</p>
        <Evolution a={a} />
      </div>
      <div className="flex items-center gap-2 md:block">
        <Badge ton={jours > 30 ? "or" : "discret"} className="tabular-nums">
          <Hourglass /> {jours} j{estime ? "*" : ""}
        </Badge>
      </div>
      <div className="relative z-10 flex justify-end md:justify-start">
        <SelectStatutAnnonce id={a.id} statut={a.statut} />
      </div>
      <div className="col-span-2 flex min-w-0 items-center justify-between gap-2 md:col-span-1">
        <span className="truncate text-[12.5px] text-doux">{a.agence ? nomAffiche(a.agence) : ""}</span>
        {a.url && (
          <a
            href={a.url}
            target="_blank"
            rel="noreferrer"
            title="Ouvrir l'annonce"
            className="relative z-10 grid size-8 shrink-0 place-items-center rounded-lg text-discret hover:bg-surface-3 hover:text-texte"
          >
            <ExternalLink className="size-4" />
          </a>
        )}
      </div>
    </li>
  );
}

export default async function PageAnnonces({ searchParams }: PageProps<"/annonces">) {
  const sp = await searchParams;
  const val = (k: string) => (typeof sp[k] === "string" ? (sp[k] as string) : undefined);
  const filtres: FiltresAnnonces = {
    q: val("q"),
    statut: val("statut"),
    plateforme: val("plateforme"),
    anciennes: val("anciennes"),
    tri: val("tri"),
  };
  const liste = listerAnnonces(filtres);
  const parStatut = compterAnnoncesParStatut();
  const total = Object.values(parStatut).reduce((a, b) => a + b, 0);

  const lienStatut = (s?: string) => {
    const p = new URLSearchParams();
    for (const [k, v] of Object.entries(sp)) if (typeof v === "string" && k !== "statut") p.set(k, v);
    if (s) p.set("statut", s);
    const q = p.toString();
    return q ? `/annonces?${q}` : "/annonces";
  };

  return (
    <>
      <EnTetePage
        surtitre="Traqueur"
        titre="Annonces"
        description="Les annonces repérées dans tes alertes, ajoutées à la main. Aucune donnée n'est récupérée automatiquement sur les sites."
        actions={<AjoutRapide />}
      />

      <BarreFiltresAnnonces />

      <nav aria-label="Statuts" className="-mx-4 mt-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:px-0">
        {[[undefined, "Toutes", total] as const, ["actives", "En cours", (parStatut.reperee ?? 0) + (parStatut.vendeur_contacte ?? 0)] as const,
          ...Object.entries(STATUTS_ANNONCE).map(([k, l]) => [k, l, parStatut[k] ?? 0] as const)].map(([k, l, n]) => {
          const actif = filtres.statut === k;
          return (
            <Link
              key={k ?? "toutes"}
              href={lienStatut(k)}
              scroll={false}
              className={cx(
                "inline-flex h-8 shrink-0 items-center gap-2 rounded-full border px-3.5 text-[13px] font-medium transition-colors",
                actif ? "border-texte bg-texte text-fond" : "border-ligne-forte bg-surface text-doux hover:text-texte",
              )}
            >
              {l}
              <span className={cx("tabular-nums", actif ? "text-fond/60" : "text-discret")}>{n}</span>
            </Link>
          );
        })}
      </nav>

      <p className="mt-4 mb-3 text-[13px] text-doux">
        <span className="font-semibold text-texte tabular-nums">{liste.length}</span> annonce{liste.length > 1 ? "s" : ""}
        <span className="text-discret"> · * jours estimés depuis l&apos;ajout (date de publication inconnue)</span>
      </p>

      {liste.length === 0 ? (
        <Carte>
          <EtatVide
            icone={<Car />}
            titre={total === 0 ? "Aucune annonce suivie" : "Aucune annonce ne correspond"}
            texte={
              total === 0
                ? "Copie les liens de tes alertes Leboncoin, La Centrale, AutoScout24 ou mobile.de, puis colle-les tous d'un coup."
                : "Essaie d'autres filtres."
            }
            action={total === 0 ? <AjoutRapide /> : undefined}
          />
        </Carte>
      ) : (
        <Carte className="overflow-hidden">
          <div className="hidden grid-cols-[minmax(0,2fr)_130px_120px_150px_minmax(0,1fr)] gap-x-4 border-b border-ligne px-5 py-2.5 text-[11.5px] font-semibold tracking-wider text-discret uppercase md:grid">
            <span>Véhicule</span>
            <span>Prix</span>
            <span>En ligne</span>
            <span>Statut</span>
            <span>Agence partenaire</span>
          </div>
          <ul className="divide-y divide-ligne">
            {liste.map((a) => (
              <LigneAnnonce key={a.id} a={a} />
            ))}
          </ul>
        </Carte>
      )}
    </>
  );
}
