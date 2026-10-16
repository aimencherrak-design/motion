import type { ReactNode } from "react";

export function EnTetePage({
  surtitre,
  titre,
  description,
  actions,
}: {
  surtitre?: string;
  titre: string;
  description?: ReactNode;
  actions?: ReactNode;
}) {
  return (
    <div className="mb-6 flex flex-wrap items-end justify-between gap-4 md:mb-8">
      <div className="min-w-0">
        {surtitre && (
          <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-or">{surtitre}</p>
        )}
        <h1 className="text-2xl font-semibold md:text-[28px]">{titre}</h1>
        {description && <p className="mt-1.5 max-w-2xl text-sm text-doux">{description}</p>}
      </div>
      {actions && <div className="flex flex-wrap items-center gap-2">{actions}</div>}
    </div>
  );
}
