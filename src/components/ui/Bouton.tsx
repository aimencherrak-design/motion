import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cx } from "@/lib/cx";

type Variante = "primaire" | "secondaire" | "fantome" | "danger";
type Taille = "sm" | "md";

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg font-medium whitespace-nowrap transition-[background-color,border-color,color,box-shadow,transform] duration-150 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0";

const variantes: Record<Variante, string> = {
  primaire: "bg-or text-sur-or hover:bg-or-clair shadow-[0_0_0_0_transparent] hover:shadow-[0_0_0_4px_var(--color-or-sombre)]",
  secondaire: "border border-ligne-forte bg-surface-2 text-texte hover:border-or/60 hover:bg-surface-3",
  fantome: "text-doux hover:bg-surface-3 hover:text-texte",
  danger: "border border-rouge/40 bg-rouge-fond text-rouge hover:border-rouge hover:bg-rouge/15",
};

const tailles: Record<Taille, string> = {
  sm: "h-8 px-3 text-[13px]",
  md: "h-10 px-4 text-sm",
};

export function classesBouton(variante: Variante = "secondaire", taille: Taille = "md", extra?: string) {
  return cx(base, variantes[variante], tailles[taille], extra);
}

type Commun = { variante?: Variante; taille?: Taille; children: ReactNode; className?: string };

export function Bouton({ variante, taille, className, ...props }: Commun & ComponentProps<"button">) {
  return <button type="button" className={classesBouton(variante, taille, className)} {...props} />;
}

export function LienBouton({ variante, taille, className, ...props }: Commun & ComponentProps<typeof Link>) {
  return <Link className={classesBouton(variante, taille, className)} {...props} />;
}

export function AncreBouton({ variante, taille, className, ...props }: Commun & ComponentProps<"a">) {
  return <a className={classesBouton(variante, taille, className)} {...props} />;
}
