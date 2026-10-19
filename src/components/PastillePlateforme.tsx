import { PLATEFORMES } from "@/lib/constantes";
import { cx } from "@/lib/cx";

const COULEUR_PLATEFORME: Record<string, string> = {
  leboncoin: "bg-[#ec5a13]",
  lacentrale: "bg-[#2b6be4]",
  autoscout24: "bg-[#f5f200]",
  mobile_de: "bg-[#ff6600]",
  autre: "bg-discret",
};

export function PastillePlateforme({ p }: { p: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-[12px] text-doux">
      <span className={cx("size-2 rounded-full", COULEUR_PLATEFORME[p] ?? "bg-discret")} />
      {PLATEFORMES[p as keyof typeof PLATEFORMES] ?? p}
    </span>
  );
}

