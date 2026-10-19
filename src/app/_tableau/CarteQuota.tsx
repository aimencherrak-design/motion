"use client";

import { useOptimistic, useTransition } from "react";
import { Check, Minus, Plus } from "lucide-react";
import type { Compteur } from "@/lib/donnees/activite";
import { cx } from "@/lib/cx";
import { ajusterCompteur } from "./actions";

export function CarteQuota({
  compteur,
  titre,
  aide,
  valeur,
  objectif,
  icone,
  plusCinq = false,
}: {
  compteur: Compteur;
  titre: string;
  aide: string;
  valeur: number;
  objectif: number;
  icone: React.ReactNode;
  plusCinq?: boolean;
}) {
  const [optimiste, ajouter] = useOptimistic(valeur, (v, d: number) => Math.max(0, v + d));
  const [, demarrer] = useTransition();
  const pct = objectif > 0 ? Math.min(100, Math.round((optimiste / objectif) * 100)) : 0;
  const atteint = objectif > 0 && optimiste >= objectif;

  function changer(d: number) {
    demarrer(async () => {
      ajouter(d);
      await ajusterCompteur(compteur, d);
    });
  }

  return (
    <div
      className={cx(
        "flex flex-col rounded-carte border bg-surface p-4 shadow-carte transition-colors sm:p-5",
        atteint ? "border-or/50" : "border-ligne",
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-2.5">
          <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-or-sombre text-or [&_svg]:size-4">{icone}</span>
          <div className="min-w-0">
            <p className="truncate text-[13.5px] font-semibold">{titre}</p>
            <p className="truncate text-[12px] text-discret">{aide}</p>
          </div>
        </div>
        {atteint && (
          <span className="inline-flex items-center gap-1 rounded-md bg-or px-1.5 py-0.5 text-[11px] font-semibold text-sur-or">
            <Check className="size-3" strokeWidth={3} /> Atteint
          </span>
        )}
      </div>

      <div className="mt-4 flex items-end justify-between gap-3">
        <p className="titre tabular-nums">
          <span className="text-[34px] leading-none font-semibold">{optimiste}</span>
          <span className="ml-1 text-base text-discret">/ {objectif}</span>
        </p>
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            aria-label={`Retirer 1 (${titre})`}
            onClick={() => changer(-1)}
            disabled={optimiste === 0}
            className="grid size-9 place-items-center rounded-lg border border-ligne-forte bg-surface-2 text-doux transition-colors hover:text-texte active:scale-95 disabled:opacity-40"
          >
            <Minus className="size-4" />
          </button>
          {plusCinq && (
            <button
              type="button"
              onClick={() => changer(5)}
              className="h-9 rounded-lg border border-ligne-forte bg-surface-2 px-2.5 text-[13px] font-semibold text-doux transition-colors hover:text-texte active:scale-95"
            >
              +5
            </button>
          )}
          <button
            type="button"
            aria-label={`Ajouter 1 (${titre})`}
            onClick={() => changer(1)}
            className="grid size-9 place-items-center rounded-lg bg-or text-sur-or transition-colors hover:bg-or-clair active:scale-95"
          >
            <Plus className="size-4" strokeWidth={2.5} />
          </button>
        </div>
      </div>

      <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-surface-3" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
        <div className="h-full rounded-full bg-or transition-[width] duration-500" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}
