import type { ReactNode } from "react";
import { cx } from "@/lib/cx";

export function Carte({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <section className={cx("rounded-carte border border-ligne bg-surface shadow-carte", className)}>
      {children}
    </section>
  );
}

export function EnTeteCarte({
  titre,
  description,
  icone,
  actions,
}: {
  titre: string;
  description?: ReactNode;
  icone?: ReactNode;
  actions?: ReactNode;
}) {
  return (
    <header className="flex flex-wrap items-start justify-between gap-3 border-b border-ligne px-5 py-4">
      <div className="flex min-w-0 items-start gap-3">
        {icone && (
          <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-lg bg-or-sombre text-or [&_svg]:size-4">
            {icone}
          </span>
        )}
        <div className="min-w-0">
          <h2 className="text-[15px] font-semibold">{titre}</h2>
          {description && <p className="mt-0.5 text-[13px] text-doux">{description}</p>}
        </div>
      </div>
      {actions && <div className="flex flex-wrap items-center gap-2">{actions}</div>}
    </header>
  );
}
