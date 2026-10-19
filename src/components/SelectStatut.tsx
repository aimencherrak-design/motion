"use client";

import { useTransition } from "react";
import { ChevronDown } from "lucide-react";
import { changerStatut } from "@/app/crm/actions";
import { STATUTS } from "@/lib/constantes";
import { cx } from "@/lib/cx";

const couleurs: Record<string, string> = {
  identifie: "text-doux",
  premier_contact: "text-bleu",
  relance: "text-orange",
  rdv: "text-or",
  negociation: "text-or",
  signe: "text-vert",
  perdu: "text-rouge",
};

/** Petit menu pour changer le statut d'un contact directement depuis une liste. */
export function SelectStatut({ id, statut, className }: { id: number; statut: string; className?: string }) {
  const [enCours, demarrer] = useTransition();
  return (
    <div className={cx("relative inline-flex", enCours && "opacity-60", className)}>
      <select
        aria-label="Statut"
        value={statut}
        disabled={enCours}
        onChange={(e) => {
          const v = e.target.value;
          demarrer(() => changerStatut(id, v));
        }}
        onClick={(e) => e.stopPropagation()}
        className={cx(
          "h-7 cursor-pointer appearance-none rounded-md border border-ligne-forte bg-surface-2 pr-7 pl-2 text-[12px] font-medium outline-none hover:border-or/50 focus:border-or",
          couleurs[statut],
        )}
      >
        {Object.entries(STATUTS).map(([v, l]) => (
          <option key={v} value={v} className="text-texte">
            {l}
          </option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute top-1/2 right-2 size-3.5 -translate-y-1/2 text-discret" />
    </div>
  );
}
