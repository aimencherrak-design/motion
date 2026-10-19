"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Hourglass, Search } from "lucide-react";
import { Liste } from "@/components/ui/Champs";
import { PLATEFORMES } from "@/lib/constantes";
import { cx } from "@/lib/cx";

export function BarreFiltresAnnonces() {
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

  useEffect(() => {
    if (premier.current) {
      premier.current = false;
      return;
    }
    const t = setTimeout(() => aller({ q: q.trim() || null }), 250);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [q]);

  const anciennes = params.get("anciennes") === "1";
  return (
    <div className="flex flex-col gap-3">
      <div className="relative min-w-0 flex-1">
        <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-discret" />
        <input
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Rechercher un modèle, une ville, une note…"
          className="h-10 w-full rounded-lg border border-ligne-forte bg-surface-2 pr-3 pl-9 text-sm outline-none placeholder:text-discret focus:border-or focus:shadow-[0_0_0_3px_var(--color-or-sombre)]"
        />
      </div>
      <div className="grid grid-cols-2 gap-2 sm:flex sm:items-center">
        <Liste
          aria-label="Plateforme"
          className="sm:w-44"
          value={params.get("plateforme") ?? ""}
          onChange={(e) => aller({ plateforme: e.target.value || null })}
          vide="Toutes plateformes"
          options={PLATEFORMES}
        />
        <Liste
          aria-label="Trier"
          className="sm:w-48"
          value={params.get("tri") ?? ""}
          onChange={(e) => aller({ tri: e.target.value || null })}
          options={[["", "Tri : ajout récent"], ["anciennete", "Tri : plus anciennes en ligne"], ["prix", "Tri : prix croissant"]]}
        />
        <button
          type="button"
          onClick={() => aller({ anciennes: anciennes ? null : "1" })}
          className={cx(
            "col-span-2 inline-flex h-10 items-center justify-center gap-2 rounded-lg border px-3 text-sm font-medium whitespace-nowrap transition-colors sm:col-span-1",
            anciennes ? "border-or/60 bg-or-sombre text-or" : "border-ligne-forte bg-surface-2 text-doux hover:text-texte",
          )}
        >
          <Hourglass className="size-4" /> En ligne &gt; 30 jours
        </button>
      </div>
    </div>
  );
}
