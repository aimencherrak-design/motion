"use client";

import { useFormulaire } from "@/lib/useFormulaire";
import { useState } from "react";
import { AlertTriangle, Check, Save } from "lucide-react";
import { Bouton } from "@/components/ui/Bouton";
import { Champ, Liste, Saisie, Zone } from "@/components/ui/Champs";
import { ajouterJours } from "@/lib/affichage";
import { CANAUX, CATEGORIES, REMUNERATIONS, STATUTS } from "@/lib/constantes";
import { aujourdhui } from "@/lib/dates";
import type { EtatFormulaire } from "@/lib/formulaire";
import type { Contact } from "@/lib/donnees/contacts";

type Action = (etat: EtatFormulaire, fd: FormData) => Promise<EtatFormulaire>;

function Groupe({ titre, children }: { titre: string; children: React.ReactNode }) {
  return (
    <fieldset className="border-t border-ligne px-5 py-5 first:border-t-0">
      <legend className="sr-only">{titre}</legend>
      <p className="mb-4 text-[11.5px] font-semibold tracking-[0.12em] text-or uppercase">{titre}</p>
      <div className="grid gap-4 sm:grid-cols-2">{children}</div>
    </fieldset>
  );
}

export function FormulaireContact({
  action,
  contact,
  nouveau = false,
  categorieParDefaut,
}: {
  action: Action;
  contact?: Contact;
  nouveau?: boolean;
  categorieParDefaut?: string;
}) {
  const [etat, envoyer, enCours] = useFormulaire(action);
  const [relance, setRelance] = useState(contact?.prochaineRelance ?? (nouveau ? ajouterJours(aujourdhui(), 3) : ""));
  // Si la relance change ailleurs (bouton « Faite », historique…), le champ suit.
  const [relanceConnue, setRelanceConnue] = useState(contact?.prochaineRelance);
  if (contact && contact.prochaineRelance !== relanceConnue) {
    setRelanceConnue(contact.prochaineRelance);
    setRelance(contact.prochaineRelance ?? "");
  }
  const [typeRemu, setTypeRemu] = useState(contact?.remunerationType ?? "");
  const v = (k: keyof Contact) => (contact?.[k] ?? "") as string;

  return (
    <form onSubmit={envoyer}>
      <Groupe titre="Identité">
        <Champ label="Entreprise">
          <Saisie name="entreprise" defaultValue={v("entreprise")} placeholder="Ex. Ewigo Mulhouse" autoFocus={nouveau} />
        </Champ>
        <Champ label="Catégorie">
          <Liste name="categorie" defaultValue={contact?.categorie ?? categorieParDefaut ?? "concession"} options={CATEGORIES} />
        </Champ>
        <Champ label="Prénom">
          <Saisie name="prenom" defaultValue={v("prenom")} autoComplete="off" />
        </Champ>
        <Champ label="Nom">
          <Saisie name="nom" defaultValue={v("nom")} autoComplete="off" />
        </Champ>
        {nouveau && (
          <Champ label="Statut de départ">
            <Liste name="statut" defaultValue="identifie" options={STATUTS} />
          </Champ>
        )}
        <Champ label="Groupe / réseau" aide="facultatif">
          <Saisie name="groupe" defaultValue={v("groupe")} placeholder="Ex. HESS Automobile" />
        </Champ>
      </Groupe>

      <Groupe titre="Coordonnées">
        <Champ label="Téléphone">
          <Saisie name="telephone" type="tel" defaultValue={v("telephone")} placeholder="03 89 …" />
        </Champ>
        <Champ label="E-mail">
          <Saisie name="email" type="email" defaultValue={v("email")} placeholder="contact@…" />
        </Champ>
        <Champ label="Profil LinkedIn">
          <Saisie name="linkedinUrl" type="url" defaultValue={v("linkedinUrl")} placeholder="https://www.linkedin.com/in/…" />
        </Champ>
        <Champ label="Site web">
          <Saisie name="siteWeb" type="url" defaultValue={v("siteWeb")} placeholder="https://…" />
        </Champ>
        <Champ label="Canal de contact">
          <Liste key={contact?.canal ?? ""} name="canal" defaultValue={contact?.canal ?? ""} options={CANAUX} vide="Non défini" />
        </Champ>
      </Groupe>

      <Groupe titre="Localisation">
        <Champ label="Adresse" className="sm:col-span-2">
          <Saisie name="adresse" defaultValue={v("adresse")} />
        </Champ>
        <Champ label="Ville">
          <Saisie name="ville" defaultValue={v("ville")} />
        </Champ>
        <Champ label="Distance de Mulhouse" aide="en km">
          <Saisie name="distanceKm" inputMode="decimal" defaultValue={contact?.distanceKm ?? ""} />
        </Champ>
      </Groupe>

      <Groupe titre="Suivi et accord">
        <Champ label="Prochaine relance">
          <Saisie name="prochaineRelance" type="date" value={relance} onChange={(e) => setRelance(e.target.value)} />
          <div className="mt-2 flex flex-wrap gap-1.5">
            {[
              ["Demain", 1],
              ["+3 j", 3],
              ["+1 sem.", 7],
              ["+2 sem.", 14],
            ].map(([l, n]) => (
              <button
                key={l}
                type="button"
                onClick={() => setRelance(ajouterJours(aujourdhui(), n as number))}
                className="h-7 rounded-md border border-ligne-forte bg-surface-2 px-2 text-[12px] text-doux hover:text-texte"
              >
                {l}
              </button>
            ))}
            {relance && (
              <button type="button" onClick={() => setRelance("")} className="h-7 px-1.5 text-[12px] text-discret hover:text-texte">
                Aucune
              </button>
            )}
          </div>
        </Champ>
        <Champ label="Priorité">
          <Liste
            name="priorite"
            defaultValue={contact?.priorite ?? ""}
            vide="Non définie"
            options={[["A", "A · décideur sur place, à appeler en premier"], ["B", "B · demander le bon interlocuteur"], ["C", "C · siège, faible chance au début"]]}
          />
        </Champ>
        <Champ label="Rémunération négociée">
          <Liste name="remunerationType" value={typeRemu} onChange={(e) => setTypeRemu(e.target.value)} options={REMUNERATIONS} vide="Pas encore négociée" />
        </Champ>
        <Champ label={typeRemu === "commission" ? "Commission (%)" : "Montant fixe (€)"}>
          <Saisie
            name="remunerationMontant"
            inputMode="decimal"
            defaultValue={contact?.remunerationMontant ?? ""}
            disabled={!typeRemu}
            placeholder={typeRemu === "commission" ? "Ex. 3" : "Ex. 300"}
          />
        </Champ>
      </Groupe>

      <fieldset className="border-t border-ligne px-5 py-5">
        <Champ label="Notes">
          <Zone name="notes" defaultValue={v("notes")} rows={6} placeholder="Ce qu'il faut retenir : interlocuteur, besoins, conditions…" />
        </Champ>
      </fieldset>

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
          <Save /> {enCours ? "Enregistrement…" : nouveau ? "Créer le contact" : "Enregistrer"}
        </Bouton>
      </div>
    </form>
  );
}
