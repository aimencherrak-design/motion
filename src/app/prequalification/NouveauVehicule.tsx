"use client";

import { useActionState, useState } from "react";
import { Plus } from "lucide-react";
import { Bouton } from "@/components/ui/Bouton";
import { Champ, Saisie } from "@/components/ui/Champs";
import { Fenetre } from "@/components/ui/Fenetre";
import { creerVehiculeManuel } from "../annonces/actions";

export function NouveauVehicule() {
  const [ouvert, setOuvert] = useState(false);
  const [etat, envoyer, enCours] = useActionState(creerVehiculeManuel, null);
  return (
    <>
      <Bouton onClick={() => setOuvert(true)}>
        <Plus /> Véhicule hors annonce
      </Bouton>
      <Fenetre ouverte={ouvert} onFermer={() => setOuvert(false)} titre="Nouveau véhicule">
        <form action={envoyer} className="space-y-4 p-5">
          <p className="text-sm text-doux">Pour un véhicule proposé directement (bouche-à-oreille, contact particulier…), sans annonce en ligne.</p>
          <Champ label="Marque et modèle">
            <Saisie name="marqueModele" autoFocus placeholder="Ex. Volkswagen Golf 8 GTD" />
          </Champ>
          <div className="grid grid-cols-3 gap-3">
            <Champ label="Année">
              <Saisie name="annee" inputMode="numeric" />
            </Champ>
            <Champ label="Km">
              <Saisie name="kilometrage" inputMode="numeric" />
            </Champ>
            <Champ label="Prix (€)">
              <Saisie name="prixActuel" inputMode="numeric" />
            </Champ>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Champ label="Vendeur">
              <Saisie name="vendeurNom" />
            </Champ>
            <Champ label="Téléphone">
              <Saisie name="vendeurTel" type="tel" />
            </Champ>
          </div>
          <Champ label="Localisation">
            <Saisie name="localisation" />
          </Champ>
          <Champ label="Lien d'annonce" aide="facultatif">
            <Saisie name="url" type="url" placeholder="https://…" />
          </Champ>
          {etat?.erreur && <p className="text-sm text-rouge">{etat.erreur}</p>}
          <div className="flex justify-end gap-2 border-t border-ligne pt-4">
            <Bouton variante="fantome" onClick={() => setOuvert(false)}>
              Annuler
            </Bouton>
            <Bouton type="submit" variante="primaire" disabled={enCours}>
              Créer et ouvrir la fiche
            </Bouton>
          </div>
        </form>
      </Fenetre>
    </>
  );
}
