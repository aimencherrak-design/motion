"use client";

import { useFormulaire } from "@/lib/useFormulaire";
import { useState } from "react";
import { AlertTriangle, Check, Minus, Plus, Save } from "lucide-react";
import { Bouton } from "@/components/ui/Bouton";
import { Case, Champ, Saisie, Zone } from "@/components/ui/Champs";
import { ETATS_CARNET, STATUTS_CT } from "@/lib/constantes";
import type { schema } from "@/db";
import { cx } from "@/lib/cx";
import { enregistrerFiche } from "../actions";

type Fiche = typeof schema.prequalifications.$inferSelect;

function Segments({ name, options, defaut, tons }: { name: string; options: Record<string, string>; defaut: string | null; tons?: Record<string, string> }) {
  const [v, setV] = useState(defaut ?? "");
  return (
    <div className="grid grid-cols-3 gap-1 rounded-xl border border-ligne-forte bg-surface-2 p-1">
      {Object.entries(options).map(([k, l]) => (
        <label
          key={k}
          className={cx(
            "flex h-9 cursor-pointer items-center justify-center rounded-lg px-2 text-center text-[12.5px] font-medium transition-colors",
            v === k ? (tons?.[k] ?? "bg-or text-sur-or") : "text-doux hover:bg-surface-3 hover:text-texte",
          )}
        >
          <input type="radio" name={name} value={k} checked={v === k} onChange={() => setV(k)} onClick={() => v === k && setV("")} className="sr-only" />
          {l}
        </label>
      ))}
    </div>
  );
}

function Section({ numero, titre, children }: { numero: number; titre: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-ligne px-5 py-5 first:border-t-0">
      <h3 className="mb-4 flex items-center gap-2.5 text-sm font-semibold">
        <span className="grid size-6 place-items-center rounded-full bg-or-sombre text-[12px] text-or">{numero}</span>
        {titre}
      </h3>
      {children}
    </section>
  );
}

export function FormulaireFiche({ annonceId, fiche }: { annonceId: number; fiche: Fiche | undefined }) {
  const [etat, envoyer, enCours] = useFormulaire(enregistrerFiche.bind(null, annonceId));
  const [proprios, setProprios] = useState<string>(fiche?.nbProprietaires?.toString() ?? "");
  const [histovec, setHistovec] = useState(fiche?.histovecRecu ?? false);

  return (
    <form onSubmit={envoyer}>
      <Section numero={1} titre="Contrôle technique">
        <Segments
          name="ctStatut"
          options={STATUTS_CT}
          defaut={fiche?.ctStatut ?? null}
          tons={{ ok: "bg-vert text-fond", contre_visite: "bg-orange text-fond", absent: "bg-rouge text-fond" }}
        />
        <div className="mt-4 grid gap-4 sm:grid-cols-[180px_minmax(0,1fr)]">
          <Champ label="Date du dernier CT">
            <Saisie name="ctDate" type="date" defaultValue={fiche?.ctDate ?? ""} />
          </Champ>
          <Champ label="Défauts relevés" aide="facultatif">
            <Saisie name="ctDefauts" defaultValue={fiche?.ctDefauts ?? ""} placeholder="Ex. usure pneus AV, éclairage plaque" />
          </Champ>
        </div>
      </Section>

      <Section numero={2} titre="Carnet d'entretien">
        <Segments name="carnet" options={ETATS_CARNET} defaut={fiche?.carnet ?? null} tons={{ complet: "bg-vert text-fond", partiel: "bg-orange text-fond", absent: "bg-rouge text-fond" }} />
      </Section>

      <Section numero={3} titre="HistoVec">
        <Case name="histovecRecu" label="Code HistoVec reçu du vendeur" checked={histovec} onChange={(e) => setHistovec(e.target.checked)} />
        <Champ label="Code HistoVec ou lien du rapport" className="mt-4">
          <Saisie name="histovecCode" defaultValue={fiche?.histovecCode ?? ""} placeholder="Ex. code partagé par le vendeur" />
        </Champ>
      </Section>

      <Section numero={4} titre="Propriétaires et photos">
        <div className="flex flex-wrap items-end gap-6">
          <Champ label="Nombre de propriétaires">
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                aria-label="Moins"
                onClick={() => setProprios(String(Math.max(0, Number(proprios || 1) - 1)))}
                className="grid size-10 place-items-center rounded-lg border border-ligne-forte bg-surface-2 text-doux hover:text-texte"
              >
                <Minus className="size-4" />
              </button>
              <Saisie name="nbProprietaires" inputMode="numeric" value={proprios} onChange={(e) => setProprios(e.target.value)} className="w-16 text-center" />
              <button
                type="button"
                aria-label="Plus"
                onClick={() => setProprios(String(Number(proprios || 0) + 1))}
                className="grid size-10 place-items-center rounded-lg border border-ligne-forte bg-surface-2 text-doux hover:text-texte"
              >
                <Plus className="size-4" />
              </button>
            </div>
          </Champ>
          <Case name="photosOk" label="Jeu de photos complet reçu" defaultChecked={fiche?.photosOk ?? false} className="pb-2.5" />
        </div>
      </Section>

      <Section numero={5} titre="Remarques">
        <Zone name="remarques" defaultValue={fiche?.remarques ?? ""} rows={5} placeholder="État général, options, points d'attention, prix négociable…" />
      </Section>

      <div className="sticky bottom-16 z-10 flex flex-wrap items-center justify-end gap-3 rounded-b-carte border-t border-ligne bg-surface/95 px-5 py-3.5 backdrop-blur lg:bottom-0">
        {etat?.erreur && (
          <p className="mr-auto flex items-center gap-2 text-sm text-rouge">
            <AlertTriangle className="size-4" /> {etat.erreur}
          </p>
        )}
        {etat?.ok && !enCours && (
          <p className="mr-auto flex items-center gap-2 text-sm text-vert">
            <Check className="size-4" /> {etat.message}
          </p>
        )}
        <Bouton type="submit" variante="primaire" disabled={enCours}>
          <Save /> {enCours ? "Enregistrement…" : "Enregistrer la fiche"}
        </Bouton>
      </div>
    </form>
  );
}
