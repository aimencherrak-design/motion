"use client";

import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import { nomAffiche } from "@/lib/affichage";
import { CATEGORIES } from "@/lib/constantes";

export type ContactCourt = {
  id: number;
  entreprise: string | null;
  prenom: string | null;
  nom: string | null;
  ville: string | null;
  categorie: string;
  statut: string;
};

const sansAccent = (s: string) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

/** Champ de recherche pour choisir un contact dans une longue liste. */
export function ChoixContact({
  contacts,
  valeur,
  onChoix,
  placeholder = "Rechercher un contact…",
}: {
  contacts: ContactCourt[];
  valeur: ContactCourt | null;
  onChoix: (c: ContactCourt | null) => void;
  placeholder?: string;
}) {
  const [q, setQ] = useState("");
  const [ouvert, setOuvert] = useState(false);
  const resultats = useMemo(() => {
    const t = sansAccent(q.trim());
    const liste = t
      ? contacts.filter((c) => sansAccent([c.entreprise, c.prenom, c.nom, c.ville].filter(Boolean).join(" ")).includes(t))
      : contacts;
    return liste.slice(0, 8);
  }, [q, contacts]);

  if (valeur) {
    return (
      <div className="flex h-10 items-center justify-between gap-2 rounded-lg border border-or/50 bg-or-sombre/50 pr-1.5 pl-3">
        <span className="min-w-0 truncate text-sm">
          <span className="font-semibold">{nomAffiche(valeur)}</span>
          <span className="text-doux"> · {CATEGORIES[valeur.categorie as keyof typeof CATEGORIES]}</span>
        </span>
        <button type="button" onClick={() => onChoix(null)} aria-label="Retirer le contact" className="grid size-7 place-items-center rounded-md text-doux hover:bg-surface-3 hover:text-texte">
          <X className="size-4" />
        </button>
      </div>
    );
  }

  return (
    <div className="relative">
      <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-discret" />
      <input
        value={q}
        onChange={(e) => {
          setQ(e.target.value);
          setOuvert(true);
        }}
        onFocus={() => setOuvert(true)}
        onBlur={() => setTimeout(() => setOuvert(false), 150)}
        placeholder={placeholder}
        className="h-10 w-full rounded-lg border border-ligne-forte bg-surface-2 pr-3 pl-9 text-sm outline-none placeholder:text-discret focus:border-or focus:shadow-[0_0_0_3px_var(--color-or-sombre)]"
      />
      {ouvert && (
        <ul className="absolute inset-x-0 top-11 z-20 max-h-72 overflow-y-auto rounded-xl border border-ligne-forte bg-surface-2 p-1 shadow-2xl">
          {resultats.length === 0 && <li className="px-3 py-2.5 text-sm text-discret">Aucun contact trouvé</li>}
          {resultats.map((c) => (
            <li key={c.id}>
              <button
                type="button"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => {
                  onChoix(c);
                  setQ("");
                  setOuvert(false);
                }}
                className="flex w-full flex-col items-start rounded-lg px-3 py-2 text-left hover:bg-surface-3"
              >
                <span className="text-sm font-medium">{nomAffiche(c)}</span>
                <span className="text-[12px] text-discret">
                  {[CATEGORIES[c.categorie as keyof typeof CATEGORIES], c.ville].filter(Boolean).join(" · ")}
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
