"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";

/** Fenêtre modale (s'adapte au téléphone : plein écran en bas). */
export function Fenetre({
  ouverte,
  onFermer,
  titre,
  children,
  large = false,
}: {
  ouverte: boolean;
  onFermer: () => void;
  titre: string;
  children: React.ReactNode;
  large?: boolean;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (ouverte && !d.open) d.showModal();
    if (!ouverte && d.open) d.close();
  }, [ouverte]);

  return (
    <dialog
      ref={ref}
      onClose={onFermer}
      onClick={(e) => e.target === ref.current && onFermer()}
      className={`m-0 mt-auto max-h-[92dvh] w-full max-w-none overflow-hidden rounded-t-2xl border border-ligne-forte bg-surface p-0 text-texte shadow-2xl backdrop:bg-black/70 backdrop:backdrop-blur-sm sm:m-auto sm:rounded-2xl ${
        large ? "sm:max-w-2xl" : "sm:max-w-lg"
      }`}
    >
      {ouverte && (
        <div className="flex max-h-[92dvh] flex-col">
          <header className="flex items-center justify-between border-b border-ligne px-5 py-4">
            <h2 className="text-base font-semibold">{titre}</h2>
            <button type="button" onClick={onFermer} aria-label="Fermer" className="grid size-8 place-items-center rounded-lg text-doux hover:bg-surface-3 hover:text-texte">
              <X className="size-4" />
            </button>
          </header>
          <div className="overflow-y-auto">{children}</div>
        </div>
      )}
    </dialog>
  );
}
