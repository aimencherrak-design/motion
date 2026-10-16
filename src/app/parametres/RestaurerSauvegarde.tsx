"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { AlertTriangle, CheckCircle2, Upload, X } from "lucide-react";
import { Bouton } from "@/components/ui/Bouton";

type Etat =
  | { etape: "repos" }
  | { etape: "confirmer"; nom: string; contenu: string; resume: string }
  | { etape: "envoi" }
  | { etape: "ok"; message: string }
  | { etape: "erreur"; message: string };

function resumer(contenu: string) {
  try {
    const s = JSON.parse(contenu);
    const t = s?.tables ?? {};
    const date = s?.exporteLe ? new Date(s.exporteLe).toLocaleString("fr-FR") : "date inconnue";
    return `Sauvegarde du ${date} : ${t.contacts?.length ?? 0} contacts, ${t.annonces?.length ?? 0} annonces, ${t.modeles_message?.length ?? 0} modèles de message.`;
  } catch {
    return "Contenu illisible : l'outil vérifiera le fichier.";
  }
}

export function RestaurerSauvegarde() {
  const [etat, setEtat] = useState<Etat>({ etape: "repos" });
  const champ = useRef<HTMLInputElement>(null);
  const router = useRouter();

  async function choisir(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    e.target.value = "";
    if (!f) return;
    const contenu = await f.text();
    setEtat({ etape: "confirmer", nom: f.name, contenu, resume: resumer(contenu) });
  }

  async function restaurer(contenu: string) {
    setEtat({ etape: "envoi" });
    try {
      const r = await fetch("/api/sauvegarde/restaurer", { method: "POST", body: contenu });
      const rep = await r.json();
      if (!rep.ok) throw new Error(rep.erreur);
      setEtat({
        etape: "ok",
        message: `Restauration terminée : ${rep.compte.contacts} contacts, ${rep.compte.annonces} annonces, ${rep.compte.modeles_message} modèles.`,
      });
      router.refresh();
    } catch (e) {
      setEtat({ etape: "erreur", message: e instanceof Error ? e.message : "Restauration impossible." });
    }
  }

  return (
    <div>
      <input ref={champ} type="file" accept="application/json,.json" className="hidden" onChange={choisir} />
      <Bouton onClick={() => champ.current?.click()} disabled={etat.etape === "envoi"}>
        <Upload />
        {etat.etape === "envoi" ? "Restauration…" : "Restaurer une sauvegarde"}
      </Bouton>

      {etat.etape === "confirmer" && (
        <div className="mt-4 rounded-xl border border-orange/40 bg-orange-fond p-4">
          <div className="flex gap-3">
            <AlertTriangle className="mt-0.5 size-5 shrink-0 text-orange" />
            <div className="min-w-0 text-sm">
              <p className="font-semibold text-texte">Remplacer toutes les données actuelles ?</p>
              <p className="mt-1 break-words text-doux">
                Fichier : <span className="text-texte">{etat.nom}</span>
                <br />
                {etat.resume}
              </p>
              <p className="mt-2 text-doux">
                Une sauvegarde de sécurité des données actuelles sera faite juste avant, au cas où.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Bouton variante="primaire" taille="sm" onClick={() => restaurer(etat.contenu)}>
                  Oui, restaurer
                </Bouton>
                <Bouton variante="fantome" taille="sm" onClick={() => setEtat({ etape: "repos" })}>
                  Annuler
                </Bouton>
              </div>
            </div>
          </div>
        </div>
      )}

      {(etat.etape === "ok" || etat.etape === "erreur") && (
        <div
          role="status"
          className={
            etat.etape === "ok"
              ? "mt-4 flex items-start gap-3 rounded-xl border border-vert/40 bg-vert-fond p-4 text-sm"
              : "mt-4 flex items-start gap-3 rounded-xl border border-rouge/40 bg-rouge-fond p-4 text-sm"
          }
        >
          {etat.etape === "ok" ? (
            <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-vert" />
          ) : (
            <AlertTriangle className="mt-0.5 size-5 shrink-0 text-rouge" />
          )}
          <p className="flex-1">{etat.message}</p>
          <button aria-label="Fermer" onClick={() => setEtat({ etape: "repos" })} className="text-doux hover:text-texte">
            <X className="size-4" />
          </button>
        </div>
      )}
    </div>
  );
}
