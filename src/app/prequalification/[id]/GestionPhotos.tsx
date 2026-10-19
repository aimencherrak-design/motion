"use client";

import { useRef, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight, ImagePlus, Trash2 } from "lucide-react";
import { cx } from "@/lib/cx";
import { deplacerPhoto, supprimerPhoto } from "../actions";

type Photo = { id: number; fichier: string };

export function GestionPhotos({ annonceId, photos }: { annonceId: number; photos: Photo[] }) {
  const champ = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const [envoi, setEnvoi] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [enCours, demarrer] = useTransition();
  const [survol, setSurvol] = useState(false);

  async function envoyer(fichiers: FileList | File[]) {
    const liste = [...fichiers];
    if (!liste.length) return;
    setEnvoi(true);
    setMessage(null);
    const fd = new FormData();
    for (const f of liste) fd.append("photos", f);
    const r = await fetch(`/api/photos/${annonceId}`, { method: "POST", body: fd });
    const rep = await r.json();
    setEnvoi(false);
    if (rep.refusees?.length) setMessage(`Non ajoutées (format JPEG/PNG de moins de 15 Mo uniquement) : ${rep.refusees.join(", ")}`);
    router.refresh();
  }

  return (
    <div className="p-5">
      <input
        ref={champ}
        type="file"
        accept="image/jpeg,image/png"
        multiple
        className="hidden"
        onChange={(e) => {
          if (e.target.files) envoyer(e.target.files);
          e.target.value = "";
        }}
      />
      <ul className={cx("grid grid-cols-3 gap-2", enCours && "opacity-60")}>
        {photos.map((p, i) => (
          <li key={p.id} className="group relative aspect-[4/3] overflow-hidden rounded-lg border border-ligne bg-surface-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`/api/photos/fichier/${p.fichier}`} alt={`Photo ${i + 1}`} className="size-full object-cover" loading="lazy" />
            {i === 0 && <span className="absolute top-1.5 left-1.5 rounded bg-or px-1.5 text-[10.5px] font-semibold text-sur-or">Principale</span>}
            <div className="absolute inset-x-0 bottom-0 flex justify-between bg-gradient-to-t from-black/80 to-transparent p-1 opacity-100 transition-opacity sm:opacity-0 sm:group-hover:opacity-100">
              <div className="flex">
                <button type="button" aria-label="Avancer" disabled={i === 0} onClick={() => demarrer(() => deplacerPhoto(annonceId, p.id, -1))} className="grid size-7 place-items-center rounded text-white disabled:opacity-30">
                  <ChevronLeft className="size-4" />
                </button>
                <button type="button" aria-label="Reculer" disabled={i === photos.length - 1} onClick={() => demarrer(() => deplacerPhoto(annonceId, p.id, 1))} className="grid size-7 place-items-center rounded text-white disabled:opacity-30">
                  <ChevronRight className="size-4" />
                </button>
              </div>
              <button type="button" aria-label="Supprimer la photo" onClick={() => demarrer(() => supprimerPhoto(p.id))} className="grid size-7 place-items-center rounded text-white hover:text-rouge">
                <Trash2 className="size-4" />
              </button>
            </div>
          </li>
        ))}
        <li>
          <button
            type="button"
            onClick={() => champ.current?.click()}
            onDragOver={(e) => {
              e.preventDefault();
              setSurvol(true);
            }}
            onDragLeave={() => setSurvol(false)}
            onDrop={(e) => {
              e.preventDefault();
              setSurvol(false);
              envoyer(e.dataTransfer.files);
            }}
            className={cx(
              "flex aspect-[4/3] w-full flex-col items-center justify-center gap-1 rounded-lg border-2 border-dashed text-[12px] transition-colors",
              survol ? "border-or bg-or-sombre/40 text-or" : "border-ligne-forte text-doux hover:border-or/60 hover:text-texte",
            )}
          >
            <ImagePlus className="size-5" />
            {envoi ? "Envoi…" : "Ajouter"}
          </button>
        </li>
      </ul>
      <p className="mt-3 text-[12px] text-discret">JPEG ou PNG. La première photo apparaît en grand dans le PDF.</p>
      {message && <p className="mt-2 text-[12px] text-orange">{message}</p>}
    </div>
  );
}
