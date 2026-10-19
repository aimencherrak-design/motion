import type { ReactNode } from "react";
import { cx } from "@/lib/cx";

export type Ton = "neutre" | "or" | "rouge" | "orange" | "vert" | "bleu" | "discret";

const tons: Record<Ton, string> = {
  neutre: "border-ligne-forte bg-surface-3 text-texte",
  or: "border-or/35 bg-or-sombre text-or",
  rouge: "border-rouge/35 bg-rouge-fond text-rouge",
  orange: "border-orange/35 bg-orange-fond text-orange",
  vert: "border-vert/35 bg-vert-fond text-vert",
  bleu: "border-bleu/35 bg-bleu-fond text-bleu",
  discret: "border-ligne bg-transparent text-doux",
};

export function Badge({ ton = "neutre", children, className }: { ton?: Ton; children: ReactNode; className?: string }) {
  return (
    <span
      className={cx(
        "inline-flex h-6 items-center gap-1 rounded-md border px-2 text-[12px] font-medium whitespace-nowrap [&_svg]:size-3.5",
        tons[ton],
        className,
      )}
    >
      {children}
    </span>
  );
}
