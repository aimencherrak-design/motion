import type { ReactNode } from "react";

export function EtatVide({
  icone,
  titre,
  texte,
  action,
}: {
  icone: ReactNode;
  titre: string;
  texte?: ReactNode;
  action?: ReactNode;
}) {
  return (
    <div className="flex flex-col items-center px-6 py-14 text-center">
      <span className="mb-4 grid size-12 place-items-center rounded-xl border border-ligne bg-surface-2 text-or [&_svg]:size-5">
        {icone}
      </span>
      <h3 className="text-base font-semibold">{titre}</h3>
      {texte && <div className="mt-1.5 max-w-md text-sm text-doux">{texte}</div>}
      {action && <div className="mt-5">{action}</div>}
    </div>
  );
}
