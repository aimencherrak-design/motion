"use client";

import { useTransition } from "react";
import { CalendarClock, Check } from "lucide-react";
import { relanceFaite, definirRelance } from "@/app/crm/actions";
import { ajouterJours } from "@/lib/affichage";
import { aujourdhui } from "@/lib/dates";
import { cx } from "@/lib/cx";

const petit =
  "inline-flex h-8 items-center gap-1.5 rounded-lg border px-2.5 text-[12.5px] font-medium transition-colors active:scale-[0.97] disabled:opacity-50 [&_svg]:size-3.5";

/** Boutons rapides sur une relance : « Faite » (prochaine dans X jours) ou « Reporter ». */
export function ActionsRelance({ id, compact = false }: { id: number; compact?: boolean }) {
  const [enCours, demarrer] = useTransition();
  return (
    <div className={cx("flex flex-wrap items-center gap-1.5", enCours && "opacity-60")}>
      <button
        type="button"
        disabled={enCours}
        onClick={() => demarrer(() => relanceFaite(id, 7))}
        className={cx(petit, "border-or/40 bg-or-sombre text-or hover:border-or")}
        title="Note la relance dans l'historique et programme la suivante dans 7 jours"
      >
        <Check /> Faite{compact ? "" : " · +7 j"}
      </button>
      <button
        type="button"
        disabled={enCours}
        onClick={() => demarrer(() => definirRelance(id, ajouterJours(aujourdhui(), 1)))}
        className={cx(petit, "border-ligne-forte bg-surface-2 text-doux hover:text-texte")}
        title="Reporter la relance à demain"
      >
        <CalendarClock /> Demain
      </button>
      {!compact && (
        <button
          type="button"
          disabled={enCours}
          onClick={() => demarrer(() => definirRelance(id, ajouterJours(aujourdhui(), 3)))}
          className={cx(petit, "border-ligne-forte bg-surface-2 text-doux hover:text-texte")}
        >
          +3 j
        </button>
      )}
    </div>
  );
}
