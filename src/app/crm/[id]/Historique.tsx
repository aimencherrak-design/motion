"use client";

import { useActionState, useState } from "react";
import { MessageSquarePlus, Trash2 } from "lucide-react";
import { Bouton } from "@/components/ui/Bouton";
import { Liste, Saisie, Zone } from "@/components/ui/Champs";
import { CANAUX, TYPES_ECHANGE } from "@/lib/constantes";
import { aujourdhui, formatDate } from "@/lib/dates";
import type { Echange } from "@/lib/donnees/contacts";
import { cx } from "@/lib/cx";
import type { EtatFormulaire } from "@/lib/formulaire";
import { ajouterEchange, supprimerEchange } from "../actions";

const pastille: Record<string, string> = {
  message_envoye: "bg-bleu",
  reponse: "bg-vert",
  appel: "bg-or",
  rdv: "bg-or",
  mise_en_relation: "bg-vert",
  changement_statut: "bg-ligne-forte",
  autre: "bg-discret",
};

export function Historique({ id, echanges, canalParDefaut }: { id: number; echanges: Echange[]; canalParDefaut: string | null }) {
  const [ouvert, setOuvert] = useState(false);
  const [etat, envoyer, enCours] = useActionState(async (precedent: EtatFormulaire, fd: FormData) => {
    const r = await ajouterEchange(id, precedent, fd);
    if (r?.ok) setOuvert(false);
    return r;
  }, null);

  return (
    <div>
      {!ouvert ? (
        <div className="px-5 pt-4">
          <Bouton taille="sm" variante="secondaire" onClick={() => setOuvert(true)} className="w-full">
            <MessageSquarePlus /> Noter un échange
          </Bouton>
        </div>
      ) : (
        <form action={envoyer} className="space-y-3 border-b border-ligne bg-surface-2/50 px-5 py-4">
          <div className="grid grid-cols-2 gap-2">
            <Liste name="type" defaultValue="message_envoye" aria-label="Type" options={Object.entries(TYPES_ECHANGE).filter(([k]) => k !== "changement_statut")} />
            <Liste name="canal" defaultValue={canalParDefaut ?? ""} aria-label="Canal" options={CANAUX} vide="Canal…" />
            <Saisie name="date" type="date" defaultValue={aujourdhui()} aria-label="Date" />
            <Saisie name="prochaineRelance" type="date" aria-label="Prochaine relance" title="Prochaine relance (facultatif)" />
          </div>
          <p className="-mt-1 text-right text-[11.5px] text-discret">2e date : prochaine relance (facultatif)</p>
          <Zone name="resume" rows={3} placeholder="Ce qui s'est dit, ce qui a été envoyé…" autoFocus />
          {etat?.erreur && <p className="text-sm text-rouge">{etat.erreur}</p>}
          <div className="flex justify-end gap-2">
            <Bouton taille="sm" variante="fantome" onClick={() => setOuvert(false)}>
              Annuler
            </Bouton>
            <Bouton taille="sm" type="submit" variante="primaire" disabled={enCours}>
              Ajouter
            </Bouton>
          </div>
        </form>
      )}

      {echanges.length === 0 ? (
        <p className="px-5 py-5 text-sm text-doux">Aucun échange pour l&apos;instant.</p>
      ) : (
        <ol className="relative px-5 py-4">
          {echanges.map((e, i) => (
            <li key={e.id} className="group relative flex gap-3 pb-4 last:pb-0">
              {i < echanges.length - 1 && <span className="absolute top-3 bottom-0 left-[4.5px] w-px bg-ligne" />}
              <span className={cx("relative mt-1.5 size-2.5 shrink-0 rounded-full ring-4 ring-surface", pastille[e.type] ?? "bg-discret")} />
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-baseline gap-x-2">
                  <span className="text-[12.5px] font-semibold">{TYPES_ECHANGE[e.type as keyof typeof TYPES_ECHANGE] ?? e.type}</span>
                  <span className="text-[12px] text-discret">
                    {formatDate(e.date)}
                    {e.canal ? ` · ${CANAUX[e.canal as keyof typeof CANAUX] ?? e.canal}` : ""}
                  </span>
                  <button
                    type="button"
                    aria-label="Supprimer cet échange"
                    onClick={() => supprimerEchange(e.id)}
                    className="ml-auto text-discret opacity-0 transition-opacity group-hover:opacity-100 hover:text-rouge focus:opacity-100"
                  >
                    <Trash2 className="size-3.5" />
                  </button>
                </div>
                {e.resume && <p className="mt-0.5 text-[13px] whitespace-pre-line text-doux">{e.resume}</p>}
              </div>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
