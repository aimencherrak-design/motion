"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { BellRing, Columns3, List, Search, X } from "lucide-react";
import { Liste } from "@/components/ui/Champs";
import { STATUTS } from "@/lib/constantes";
import { cx } from "@/lib/cx";

export function BarreFiltres() {
  const router = useRouter();
  const chemin = usePathname();
  const params = useSearchParams();
  const [q, setQ] = useState(params.get("q") ?? "");
  const premier = useRef(true);

  function aller(modifs: Record<string, string | null>) {
    const p = new URLSearchParams(params.toString());
    for (const [k, v] of Object.entries(modifs)) {
      if (v) p.set(k, v);
      else p.delete(k);
    }
    const s = p.toString();
    router.replace(s ? `${chemin}?${s}` : chemin, { scroll: false });
  }

  // Recherche : on attend que la frappe se calme avant de filtrer.
  useEffect(() => {
    if (premier.current) {
      premier.current = false;
      return;
    }
    const t = setTimeout(() => aller({ q: q.trim() || null }), 250);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [q]);

  const vue = params.get("vue") ?? "liste";
  const dues = params.get("relance") === "dues";
  const filtresActifs = ["q", "categorie", "statut", "priorite", "relance"].some((k) => params.get(k));

  return (
    <div className="flex flex-col gap-3">
      <div className="relative min-w-0 flex-1">
        <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-discret" />
        <input
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Rechercher un nom, une ville, un groupe, un téléphone…"
          className="h-10 w-full rounded-lg border border-ligne-forte bg-surface-2 pr-3 pl-9 text-sm outline-none placeholder:text-discret focus:border-or focus:shadow-[0_0_0_3px_var(--color-or-sombre)]"
        />
      </div>
      <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:items-center">
        <Liste
          aria-label="Statut"
          className="sm:w-44"
          value={params.get("statut") ?? ""}
          onChange={(e) => aller({ statut: e.target.value || null })}
          vide="Tous les statuts"
          options={[["actifs", "En cours (hors signé/perdu)"], ...Object.entries(STATUTS)]}
        />
        <Liste
          aria-label="Priorité"
          className="sm:w-40"
          value={params.get("priorite") ?? ""}
          onChange={(e) => aller({ priorite: e.target.value || null })}
          vide="Toutes priorités"
          options={[["A", "Priorité A"], ["B", "Priorité B"], ["C", "Priorité C"]]}
        />
        <Liste
          aria-label="Trier par"
          className="sm:w-44"
          value={params.get("tri") ?? ""}
          onChange={(e) => aller({ tri: e.target.value || null })}
          options={[["", "Tri : relance"], ["distance", "Tri : distance"], ["nom", "Tri : nom"], ["recent", "Tri : modifiés récemment"]]}
        />
        <button
          type="button"
          onClick={() => aller({ relance: dues ? null : "dues" })}
          className={cx(
            "inline-flex h-10 items-center justify-center gap-2 rounded-lg border px-3 text-sm font-medium transition-colors",
            dues ? "border-orange/50 bg-orange-fond text-orange" : "border-ligne-forte bg-surface-2 text-doux hover:text-texte",
          )}
        >
          <BellRing className="size-4" /> Relances dues
        </button>
        <div className="col-span-2 flex h-10 rounded-lg border border-ligne-forte bg-surface-2 p-1 sm:col-span-1">
          {[
            ["liste", "Liste", List],
            ["pipeline", "Pipeline", Columns3],
          ].map(([v, l, Icone]) => {
            const I = Icone as typeof List;
            return (
              <button
                key={v as string}
                type="button"
                onClick={() => aller({ vue: v === "liste" ? null : (v as string) })}
                className={cx(
                  "inline-flex flex-1 items-center justify-center gap-1.5 rounded-md px-3 text-[13px] font-medium transition-colors",
                  vue === v ? "bg-surface-3 text-texte" : "text-discret hover:text-doux",
                )}
              >
                <I className="size-4" /> {l as string}
              </button>
            );
          })}
        </div>
        {filtresActifs && (
          <button
            type="button"
            onClick={() => {
              setQ("");
              router.replace(vue === "pipeline" ? `${chemin}?vue=pipeline` : chemin, { scroll: false });
            }}
            className="col-span-2 inline-flex h-10 items-center justify-center gap-1.5 rounded-lg px-2 text-[13px] text-doux hover:text-texte sm:col-span-1"
          >
            <X className="size-4" /> Effacer
          </button>
        )}
      </div>
    </div>
  );
}
