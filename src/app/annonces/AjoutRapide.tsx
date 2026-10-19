"use client";

import { useEffect, useState, useTransition } from "react";
import Link from "next/link";
import { AlertTriangle, CheckCircle2, Copy, Link2, Plus } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Bouton } from "@/components/ui/Bouton";
import { Zone } from "@/components/ui/Champs";
import { Fenetre } from "@/components/ui/Fenetre";
import { PLATEFORMES } from "@/lib/constantes";
import { formatDate } from "@/lib/dates";
import { analyserCollage, creerDepuisCollage, type LigneAnalyse } from "./actions";

function Resultat({ l }: { l: LigneAnalyse }) {
  return (
    <li className="flex items-start gap-3 px-4 py-2.5">
      <div className="min-w-0 flex-1">
        <p className="truncate font-mono text-[12px] text-doux">{l.url ?? l.ligne}</p>
        {l.etat === "doublon" && l.existant && (
          <p className="mt-0.5 text-[12px] text-orange">
            Déjà enregistrée le {formatDate(l.existant.ajouteeLe)} :{" "}
            <Link href={`/annonces/${l.existant.id}`} className="underline" target="_blank">
              {l.existant.titre}
            </Link>
          </p>
        )}
        {l.etat === "repete" && <p className="mt-0.5 text-[12px] text-orange">Lien collé deux fois : une seule fiche sera créée.</p>}
        {l.etat === "invalide" && <p className="mt-0.5 text-[12px] text-rouge">Ce n&apos;est pas un lien d&apos;annonce valide.</p>}
      </div>
      {l.etat === "nouveau" && <Badge ton="vert">{PLATEFORMES[l.plateforme as keyof typeof PLATEFORMES]}</Badge>}
      {l.etat === "doublon" && <Badge ton="orange">Doublon</Badge>}
      {l.etat === "repete" && <Badge ton="orange">Répété</Badge>}
      {l.etat === "invalide" && <Badge ton="rouge">Invalide</Badge>}
    </li>
  );
}

export function AjoutRapide() {
  const [ouvert, setOuvert] = useState(false);
  const [texte, setTexte] = useState("");
  const [analyseBrute, setAnalyse] = useState<LigneAnalyse[]>([]);
  const [fini, setFini] = useState<{ crees: number; ids: number[] } | null>(null);
  const [enCours, demarrer] = useTransition();

  useEffect(() => {
    if (!texte.trim()) return;
    let annule = false;
    const t = setTimeout(async () => {
      const r = await analyserCollage(texte);
      if (!annule) setAnalyse(r);
    }, 300);
    return () => {
      annule = true;
      clearTimeout(t);
    };
  }, [texte]);

  // Rien à afficher tant que la zone est vide.
  const analyse = texte.trim() ? analyseBrute : [];
  const nouveaux = analyse.filter((l) => l.etat === "nouveau").length;
  const doublons = analyse.filter((l) => l.etat === "doublon").length;

  function fermer() {
    setOuvert(false);
    setTexte("");
    setAnalyse([]);
    setFini(null);
  }

  return (
    <>
      <Bouton variante="primaire" onClick={() => setOuvert(true)}>
        <Plus /> Ajouter des annonces
      </Bouton>
      <Fenetre ouverte={ouvert} onFermer={fermer} titre="Ajout rapide d'annonces" large>
        {fini ? (
          <div className="flex flex-col items-center px-6 py-10 text-center">
            <CheckCircle2 className="size-10 text-vert" />
            <p className="mt-4 text-lg font-semibold">
              {fini.crees} fiche{fini.crees > 1 ? "s" : ""} créée{fini.crees > 1 ? "s" : ""}
            </p>
            <p className="mt-1 max-w-sm text-sm text-doux">
              Complète maintenant chaque fiche : modèle, année, kilométrage, prix et date de publication si tu la connais.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {fini.ids[0] && (
                <Link href={`/annonces/${fini.ids[0]}`} className="inline-flex h-10 items-center rounded-lg bg-or px-4 text-sm font-medium text-sur-or" onClick={fermer}>
                  Compléter la première fiche
                </Link>
              )}
              <Bouton onClick={fermer}>Fermer</Bouton>
            </div>
          </div>
        ) : (
          <div className="space-y-4 p-5">
            <p className="text-sm text-doux">
              Colle ici les liens de tes alertes, <span className="text-texte">un par ligne</span>. L&apos;outil crée une fiche par
              lien et te signale ceux qui sont déjà enregistrés.
            </p>
            <Zone
              value={texte}
              onChange={(e) => setTexte(e.target.value)}
              rows={7}
              autoFocus
              className="font-mono text-[12.5px]"
              placeholder={"https://www.leboncoin.fr/ad/voitures/…\nhttps://www.lacentrale.fr/auto-occasion-annonce-….html\nhttps://www.autoscout24.fr/offres/…"}
            />
            {analyse.length > 0 && (
              <div className="overflow-hidden rounded-xl border border-ligne">
                <div className="flex flex-wrap gap-x-4 gap-y-1 border-b border-ligne bg-surface-2 px-4 py-2 text-[12.5px]">
                  <span className="inline-flex items-center gap-1.5 text-vert">
                    <Link2 className="size-3.5" /> {nouveaux} nouvelle{nouveaux > 1 ? "s" : ""}
                  </span>
                  {doublons > 0 && (
                    <span className="inline-flex items-center gap-1.5 text-orange">
                      <Copy className="size-3.5" /> {doublons} déjà enregistrée{doublons > 1 ? "s" : ""}
                    </span>
                  )}
                  {analyse.some((l) => l.etat === "invalide") && (
                    <span className="inline-flex items-center gap-1.5 text-rouge">
                      <AlertTriangle className="size-3.5" /> lignes ignorées
                    </span>
                  )}
                </div>
                <ul className="max-h-64 divide-y divide-ligne overflow-y-auto">
                  {analyse.map((l, i) => (
                    <Resultat key={i} l={l} />
                  ))}
                </ul>
              </div>
            )}
            <div className="flex justify-end gap-2 border-t border-ligne pt-4">
              <Bouton variante="fantome" onClick={fermer}>
                Annuler
              </Bouton>
              <Bouton
                variante="primaire"
                disabled={nouveaux === 0 || enCours}
                onClick={() =>
                  demarrer(async () => {
                    const r = await creerDepuisCollage(texte);
                    setFini({ crees: r.crees, ids: r.ids });
                  })
                }
              >
                {enCours ? "Création…" : `Créer ${nouveaux || ""} fiche${nouveaux > 1 ? "s" : ""}`}
              </Bouton>
            </div>
          </div>
        )}
      </Fenetre>
    </>
  );
}
