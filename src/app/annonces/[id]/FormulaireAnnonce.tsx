"use client";

import { useFormulaire } from "@/lib/useFormulaire";
import { AlertTriangle, Check, Save } from "lucide-react";
import { Bouton } from "@/components/ui/Bouton";
import { Champ, Liste, Saisie, Zone } from "@/components/ui/Champs";
import { nomAffiche } from "@/lib/affichage";
import { PLATEFORMES, STATUTS_ANNONCE } from "@/lib/constantes";
import type { Annonce } from "@/lib/donnees/annonces";
import { modifierAnnonce } from "../actions";

type Partenaire = { id: number; entreprise: string | null; prenom: string | null; nom: string | null; ville: string | null; statut: string };

const CARBURANTS = ["Essence", "Diesel", "Hybride", "Hybride rechargeable", "Électrique", "GPL", "Autre"];

export function FormulaireAnnonce({ a, partenaires }: { a: Annonce; partenaires: Partenaire[] }) {
  const [etat, envoyer, enCours] = useFormulaire(modifierAnnonce.bind(null, a.id));
  const signes = partenaires.filter((p) => p.statut === "signe");
  const autres = partenaires.filter((p) => p.statut !== "signe");
  const libelle = (p: Partenaire) => `${nomAffiche(p)}${p.ville ? ` · ${p.ville}` : ""}`;

  return (
    <form onSubmit={envoyer}>
      <div className="grid gap-4 px-5 py-5 sm:grid-cols-2">
        <Champ label="Marque et modèle" className="sm:col-span-2">
          <Saisie name="marqueModele" defaultValue={a.marqueModele ?? ""} placeholder="Ex. Peugeot 3008 1.5 BlueHDi GT" autoFocus={!a.marqueModele} />
        </Champ>
        <Champ label="Année">
          <Saisie name="annee" inputMode="numeric" defaultValue={a.annee ?? ""} placeholder="2021" />
        </Champ>
        <Champ label="Kilométrage" aide="km">
          <Saisie name="kilometrage" inputMode="numeric" defaultValue={a.kilometrage ?? ""} placeholder="45 000" />
        </Champ>
        <Champ label="Prix affiché" aide="€ · chaque changement est historisé">
          <Saisie name="prixActuel" inputMode="numeric" defaultValue={a.prixActuel ?? ""} placeholder="18 900" />
        </Champ>
        <Champ label="Carburant">
          <Liste name="carburant" defaultValue={a.carburant ?? ""} options={CARBURANTS.map((c) => [c, c] as [string, string])} vide="Non précisé" />
        </Champ>
        <Champ label="Date de publication" aide="si connue">
          <Saisie name="datePublication" type="date" defaultValue={a.datePublication ?? ""} />
        </Champ>
        <Champ label="Localisation">
          <Saisie name="localisation" defaultValue={a.localisation ?? ""} placeholder="Ex. Mulhouse (68)" />
        </Champ>
      </div>

      <div className="grid gap-4 border-t border-ligne px-5 py-5 sm:grid-cols-2">
        <Champ label="Statut">
          <Liste name="statut" defaultValue={a.statut} options={STATUTS_ANNONCE} />
        </Champ>
        <Champ label="Agence partenaire concernée">
          <div className="relative">
            <select
              name="agenceId"
              defaultValue={a.agenceId ?? ""}
              className="h-10 w-full cursor-pointer appearance-none rounded-lg border border-ligne-forte bg-surface-2 px-3 pr-9 text-sm outline-none focus:border-or"
            >
              <option value="">Aucune</option>
              {signes.length > 0 && (
                <optgroup label="Partenaires signés">
                  {signes.map((p) => (
                    <option key={p.id} value={p.id}>
                      {libelle(p)}
                    </option>
                  ))}
                </optgroup>
              )}
              <optgroup label="Autres contacts pros">
                {autres.map((p) => (
                  <option key={p.id} value={p.id}>
                    {libelle(p)}
                  </option>
                ))}
              </optgroup>
            </select>
          </div>
        </Champ>
        <Champ label="Vendeur">
          <Saisie name="vendeurNom" defaultValue={a.vendeurNom ?? ""} placeholder="Nom du vendeur" />
        </Champ>
        <Champ label="Téléphone du vendeur">
          <Saisie name="vendeurTel" type="tel" defaultValue={a.vendeurTel ?? ""} />
        </Champ>
        <Champ label="Plateforme">
          <Liste name="plateforme" defaultValue={a.plateforme} options={PLATEFORMES} />
        </Champ>
        <Champ label="Lien de l'annonce">
          <Saisie name="url" type="url" defaultValue={a.url} placeholder="https://…" />
        </Champ>
        <Champ label="Notes" className="sm:col-span-2">
          <Zone name="notes" defaultValue={a.notes ?? ""} rows={4} placeholder="État, options, échanges avec le vendeur…" />
        </Champ>
      </div>

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
          <Save /> {enCours ? "Enregistrement…" : "Enregistrer"}
        </Bouton>
      </div>
    </form>
  );
}
