"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Download } from "lucide-react";
import { Monogramme } from "@/components/Monogramme";
import { LIEN_PARAMETRES, LIENS, estActif } from "./navigation";
import { cx } from "@/lib/cx";

function Lien({ href, libelle, icone: Icone }: { href: string; libelle: string; icone: typeof LIEN_PARAMETRES.icone }) {
  const actif = estActif(href, usePathname());
  return (
    <Link
      href={href}
      aria-current={actif ? "page" : undefined}
      className={cx(
        "group relative flex h-10 items-center gap-3 rounded-lg px-3 text-sm font-medium transition-colors",
        actif ? "bg-surface-3 text-texte" : "text-doux hover:bg-surface-2 hover:text-texte",
      )}
    >
      {actif && <span className="absolute inset-y-2 left-0 w-[3px] rounded-full bg-or" />}
      <Icone className={cx("size-[18px]", actif ? "text-or" : "text-discret group-hover:text-doux")} />
      {libelle}
    </Link>
  );
}

export function BarreLaterale() {
  return (
    <aside className="sticky top-0 hidden h-dvh w-64 shrink-0 flex-col border-r border-ligne bg-surface/60 px-4 py-6 lg:flex">
      <Link href="/" className="mb-8 flex items-center gap-3 px-2">
        <Monogramme className="size-9 text-texte" />
        <span className="leading-tight">
          <span className="titre block text-[15px] font-semibold">Apporteur</span>
          <span className="block whitespace-nowrap text-[10.5px] uppercase tracking-[0.12em] text-discret">Automobile · Mulhouse</span>
        </span>
      </Link>

      <nav aria-label="Navigation principale" className="flex flex-col gap-1">
        {LIENS.map((l) => (
          <Lien key={l.href} {...l} />
        ))}
      </nav>

      <div className="mt-auto flex flex-col gap-1 border-t border-ligne pt-4">
        <Lien {...LIEN_PARAMETRES} />
        <a
          href="/api/sauvegarde"
          className="flex h-10 items-center gap-3 rounded-lg px-3 text-sm font-medium text-doux transition-colors hover:bg-surface-2 hover:text-texte"
        >
          <Download className="size-[18px] text-discret" />
          Sauvegarder (JSON)
        </a>
      </div>
    </aside>
  );
}
