"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Monogramme } from "@/components/Monogramme";
import { LIEN_PARAMETRES, LIENS, estActif } from "./navigation";
import { cx } from "@/lib/cx";

export function EnTeteMobile() {
  const chemin = usePathname();
  const actif = estActif(LIEN_PARAMETRES.href, chemin);
  const Icone = LIEN_PARAMETRES.icone;
  return (
    <header className="sticky top-0 z-30 flex h-14 items-center justify-between border-b border-ligne bg-fond/85 px-4 backdrop-blur-md lg:hidden">
      <Link href="/" className="flex items-center gap-2.5">
        <Monogramme className="size-7 text-texte" />
        <span className="titre text-[15px] font-semibold">Apporteur</span>
      </Link>
      <Link
        href={LIEN_PARAMETRES.href}
        aria-label="Paramètres"
        className={cx("grid size-9 place-items-center rounded-lg", actif ? "bg-surface-3 text-or" : "text-doux")}
      >
        <Icone className="size-5" />
      </Link>
    </header>
  );
}

export function BarreOngletsMobile() {
  const chemin = usePathname();
  return (
    <nav
      aria-label="Navigation principale"
      className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-5 border-t border-ligne bg-fond/92 pb-[env(safe-area-inset-bottom)] backdrop-blur-md lg:hidden"
    >
      {LIENS.map(({ href, court, icone: Icone }) => {
        const actif = estActif(href, chemin);
        return (
          <Link
            key={href}
            href={href}
            aria-current={actif ? "page" : undefined}
            className={cx(
              "flex h-16 flex-col items-center justify-center gap-1 text-[11px] font-medium",
              actif ? "text-or" : "text-discret",
            )}
          >
            <Icone className="size-5" />
            {court}
          </Link>
        );
      })}
    </nav>
  );
}
