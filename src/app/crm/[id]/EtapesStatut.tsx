"use client";

import { useOptimistic, useTransition } from "react";
import { Check } from "lucide-react";
import { STATUTS } from "@/lib/constantes";
import { cx } from "@/lib/cx";
import { changerStatut } from "../actions";

const ETAPES = ["identifie", "premier_contact", "relance", "rdv", "negociation", "signe"] as const;

/** Frise du pipeline : cliquer sur une étape change le statut du contact. */
export function EtapesStatut({ id, statut }: { id: number; statut: string }) {
  const [courant, setCourant] = useOptimistic(statut);
  const [, demarrer] = useTransition();
  const rang = ETAPES.indexOf(courant as (typeof ETAPES)[number]);
  const perdu = courant === "perdu";

  function choisir(s: string) {
    demarrer(async () => {
      setCourant(s);
      await changerStatut(id, s);
    });
  }

  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
      <ol className="flex flex-1 overflow-x-auto rounded-xl border border-ligne bg-surface p-1">
        {ETAPES.map((s, i) => {
          const fait = !perdu && i < rang;
          const actuel = !perdu && i === rang;
          return (
            <li key={s} className="min-w-[92px] flex-1">
              <button
                type="button"
                onClick={() => choisir(s)}
                aria-current={actuel ? "step" : undefined}
                className={cx(
                  "flex h-9 w-full items-center justify-center gap-1.5 rounded-lg px-2 text-[12.5px] font-medium whitespace-nowrap transition-colors",
                  actuel
                    ? s === "signe"
                      ? "bg-vert text-fond"
                      : "bg-or text-sur-or"
                    : fait
                      ? "text-or hover:bg-surface-2"
                      : "text-discret hover:bg-surface-2 hover:text-doux",
                )}
              >
                {fait && <Check className="size-3.5" strokeWidth={3} />}
                {STATUTS[s]}
              </button>
            </li>
          );
        })}
      </ol>
      <button
        type="button"
        onClick={() => choisir(perdu ? "identifie" : "perdu")}
        className={cx(
          "h-11 rounded-xl border px-4 text-[12.5px] font-medium transition-colors",
          perdu ? "border-rouge/50 bg-rouge-fond text-rouge" : "border-ligne bg-surface text-discret hover:border-rouge/40 hover:text-rouge",
        )}
      >
        {perdu ? "Perdu · réactiver" : "Marquer perdu"}
      </button>
    </div>
  );
}
