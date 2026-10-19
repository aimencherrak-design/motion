"use client";

import { useFormulaire } from "@/lib/useFormulaire";
import { Check } from "lucide-react";
import { Bouton } from "@/components/ui/Bouton";
import { Champ, Saisie } from "@/components/ui/Champs";
import type { Objectifs, Profil } from "@/lib/donnees/parametres";
import { enregistrerObjectifs, enregistrerProfil } from "./actions";

function Pied({ etat, enCours, libelle }: { etat: { ok?: boolean; erreur?: string; message?: string } | null; enCours: boolean; libelle: string }) {
  return (
    <div className="flex flex-wrap items-center justify-end gap-3 border-t border-ligne px-5 py-3.5">
      {etat?.erreur && <p className="mr-auto text-sm text-rouge">{etat.erreur}</p>}
      {etat?.ok && !enCours && (
        <p className="mr-auto flex items-center gap-1.5 text-sm text-vert">
          <Check className="size-4" /> {etat.message}
        </p>
      )}
      <Bouton type="submit" variante="primaire" taille="sm" disabled={enCours}>
        {libelle}
      </Bouton>
    </div>
  );
}

export function FormulaireProfil({ profil }: { profil: Profil }) {
  const [etat, envoyer, enCours] = useFormulaire(enregistrerProfil);
  return (
    <form onSubmit={envoyer}>
      <div className="grid gap-4 px-5 py-5 sm:grid-cols-2">
        <Champ label="Prénom">
          <Saisie name="prenom" defaultValue={profil.prenom} />
        </Champ>
        <Champ label="Nom">
          <Saisie name="nom" defaultValue={profil.nom} />
        </Champ>
        <Champ label="Nom commercial" aide="en-tête du PDF">
          <Saisie name="entreprise" defaultValue={profil.entreprise} placeholder="Ex. AR Auto" />
        </Champ>
        <Champ label="SIRET" aide="facultatif">
          <Saisie name="siret" defaultValue={profil.siret} inputMode="numeric" />
        </Champ>
        <Champ label="Téléphone">
          <Saisie name="telephone" type="tel" defaultValue={profil.telephone} />
        </Champ>
        <Champ label="E-mail">
          <Saisie name="email" type="email" defaultValue={profil.email} />
        </Champ>
        <Champ label="Ville">
          <Saisie name="ville" defaultValue={profil.ville} />
        </Champ>
      </div>
      <Pied etat={etat} enCours={enCours} libelle="Enregistrer le profil" />
    </form>
  );
}

export function FormulaireObjectifs({ objectifs }: { objectifs: Objectifs }) {
  const [etat, envoyer, enCours] = useFormulaire(enregistrerObjectifs);
  return (
    <form onSubmit={envoyer}>
      <div className="grid gap-4 px-5 py-5">
        <Champ label="Ajouts LinkedIn / jour">
          <Saisie name="ajouts_linkedin" inputMode="numeric" defaultValue={objectifs.ajouts_linkedin} />
        </Champ>
        <Champ label="Messages de prospection / jour">
          <Saisie name="messages_prospection" inputMode="numeric" defaultValue={objectifs.messages_prospection} />
        </Champ>
        <Champ label="Mises en relation / jour">
          <Saisie name="mises_en_relation" inputMode="numeric" defaultValue={objectifs.mises_en_relation} />
        </Champ>
      </div>
      <Pied etat={etat} enCours={enCours} libelle="Enregistrer les objectifs" />
    </form>
  );
}
