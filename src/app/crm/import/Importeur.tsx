"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { AlertTriangle, CheckCircle2, FileJson, Upload } from "lucide-react";
import { Bouton, LienBouton } from "@/components/ui/Bouton";
import { CATEGORIES } from "@/lib/constantes";

type Apercu = { format: string; total: number; ignores: number; parCategorie: Record<string, number> };
type Etat =
  | { etape: "repos" }
  | { etape: "lecture" }
  | { etape: "apercu"; nom: string; contenu: string; apercu: Apercu }
  | { etape: "import" }
  | { etape: "fini"; ajoutes: number; dejaPresents: number }
  | { etape: "erreur"; message: string };

export function Importeur() {
  const [etat, setEtat] = useState<Etat>({ etape: "repos" });
  const champ = useRef<HTMLInputElement>(null);
  const [survol, setSurvol] = useState(false);

  async function lire(f: File) {
    setEtat({ etape: "lecture" });
    const contenu = await f.text();
    const r = await fetch("/api/import?apercu=1", { method: "POST", body: contenu });
    const rep = await r.json();
    if (!rep.ok) return setEtat({ etape: "erreur", message: rep.erreur });
    setEtat({ etape: "apercu", nom: f.name, contenu, apercu: rep });
  }

  async function importer(contenu: string) {
    setEtat({ etape: "import" });
    const r = await fetch("/api/import", { method: "POST", body: contenu });
    const rep = await r.json();
    if (!rep.ok) return setEtat({ etape: "erreur", message: rep.erreur });
    setEtat({ etape: "fini", ajoutes: rep.ajoutes, dejaPresents: rep.dejaPresents });
  }

  if (etat.etape === "fini") {
    return (
      <div className="flex flex-col items-center px-6 py-12 text-center">
        <CheckCircle2 className="size-10 text-vert" />
        <h2 className="mt-4 text-lg font-semibold">Import terminé</h2>
        <p className="mt-1 text-sm text-doux">
          {etat.ajoutes} contact{etat.ajoutes > 1 ? "s" : ""} ajouté{etat.ajoutes > 1 ? "s" : ""}
          {etat.dejaPresents > 0 && ` · ${etat.dejaPresents} déjà présent${etat.dejaPresents > 1 ? "s" : ""} (non modifiés)`}
        </p>
        <div className="mt-6 flex gap-2">
          <LienBouton href="/crm" variante="primaire">
            Voir le CRM
          </LienBouton>
          <Bouton onClick={() => setEtat({ etape: "repos" })}>Importer un autre fichier</Bouton>
        </div>
      </div>
    );
  }

  return (
    <div className="p-5">
      <input
        ref={champ}
        type="file"
        accept="application/json,.json"
        className="hidden"
        onChange={(e) => {
          const f = e.target.files?.[0];
          e.target.value = "";
          if (f) lire(f);
        }}
      />

      {etat.etape !== "apercu" && (
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
            const f = e.dataTransfer.files?.[0];
            if (f) lire(f);
          }}
          className={`flex w-full flex-col items-center rounded-xl border-2 border-dashed px-6 py-12 text-center transition-colors ${
            survol ? "border-or bg-or-sombre/40" : "border-ligne-forte hover:border-or/60 hover:bg-surface-2"
          }`}
        >
          <span className="grid size-12 place-items-center rounded-xl bg-or-sombre text-or">
            <Upload className="size-5" />
          </span>
          <span className="mt-4 font-semibold">
            {etat.etape === "lecture" || etat.etape === "import" ? "Lecture du fichier…" : "Choisis ton fichier JSON"}
          </span>
          <span className="mt-1 text-sm text-doux">ou fais-le glisser ici</span>
        </button>
      )}

      {etat.etape === "erreur" && (
        <p className="mt-4 flex items-start gap-2 rounded-xl border border-rouge/40 bg-rouge-fond p-4 text-sm text-rouge">
          <AlertTriangle className="mt-0.5 size-4 shrink-0" /> {etat.message}
        </p>
      )}

      {etat.etape === "apercu" && (
        <div className="rounded-xl border border-ligne-forte bg-surface-2 p-5">
          <div className="flex items-start gap-3">
            <FileJson className="mt-0.5 size-5 shrink-0 text-or" />
            <div className="min-w-0 flex-1">
              <p className="font-semibold break-words">{etat.nom}</p>
              <p className="text-sm text-doux">
                {etat.apercu.format} · <span className="text-texte">{etat.apercu.total} contacts</span>
                {etat.apercu.ignores > 0 && ` · ${etat.apercu.ignores} ligne(s) illisible(s) ignorée(s)`}
              </p>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {Object.entries(etat.apercu.parCategorie).map(([k, n]) => (
                  <li key={k} className="rounded-md border border-ligne-forte px-2 py-0.5 text-[12px] text-doux">
                    {CATEGORIES[k as keyof typeof CATEGORIES] ?? k} · <span className="text-texte">{n}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-[12.5px] text-discret">
                Les contacts déjà importés ne seront ni dupliqués ni modifiés. Une sauvegarde est faite juste avant.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Bouton variante="primaire" onClick={() => importer(etat.contenu)}>
                  Importer ces contacts
                </Bouton>
                <Bouton variante="fantome" onClick={() => setEtat({ etape: "repos" })}>
                  Annuler
                </Bouton>
              </div>
            </div>
          </div>
        </div>
      )}

      <p className="mt-5 text-[12.5px] text-discret">
        Fichiers acceptés : le fichier d&apos;import préparé pour toi (ancien CRM + 152 prospects), ou un export JSON de ton
        ancien CRM. Pour une sauvegarde complète, passe par{" "}
        <Link href="/parametres" className="text-doux underline hover:text-texte">
          Paramètres
        </Link>
        .
      </p>
    </div>
  );
}
