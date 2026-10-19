"use client";

import { useTransition } from "react";
import { ChevronDown } from "lucide-react";
import { STATUTS_ANNONCE } from "@/lib/constantes";
import { cx } from "@/lib/cx";
import { changerStatutAnnonce } from "./actions";

const couleurs: Record<string, string> = {
  reperee: "text-doux",
  vendeur_contacte: "text-bleu",
  mandat_signe: "text-vert",
  perdue: "text-rouge",
};

export function SelectStatutAnnonce({ id, statut }: { id: number; statut: string }) {
  const [enCours, demarrer] = useTransition();
  return (
    <div className={cx("relative inline-flex", enCours && "opacity-60")}>
      <select
        aria-label="Statut de l'annonce"
        value={statut}
        disabled={enCours}
        onChange={(e) => {
          const v = e.target.value;
          demarrer(() => changerStatutAnnonce(id, v));
        }}
        className={cx(
          "h-7 cursor-pointer appearance-none rounded-md border border-ligne-forte bg-surface-2 pr-7 pl-2 text-[12px] font-medium outline-none hover:border-or/50 focus:border-or",
          couleurs[statut],
        )}
      >
        {Object.entries(STATUTS_ANNONCE).map(([v, l]) => (
          <option key={v} value={v} className="text-texte">
            {l}
          </option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute top-1/2 right-2 size-3.5 -translate-y-1/2 text-discret" />
    </div>
  );
}
