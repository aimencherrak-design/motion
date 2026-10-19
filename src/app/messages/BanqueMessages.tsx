"use client";

import { useActionState, useEffect, useMemo, useRef, useState, useTransition } from "react";
import Link from "next/link";
import { AlertTriangle, Check, Copy, MessageSquareText, Pencil, Plus, Send, Star, Trash2 } from "lucide-react";
import { BoutonConfirmer } from "@/components/BoutonConfirmer";
import { ChoixContact, type ContactCourt } from "@/components/ChoixContact";
import { Badge } from "@/components/ui/Badge";
import { Bouton } from "@/components/ui/Bouton";
import { Carte } from "@/components/ui/Carte";
import { Champ, Liste, Saisie, Zone } from "@/components/ui/Champs";
import { EtatVide } from "@/components/ui/EtatVide";
import { Fenetre } from "@/components/ui/Fenetre";
import { nomAffiche } from "@/lib/affichage";
import { CANAUX, CATEGORIES, TYPES_MESSAGE } from "@/lib/constantes";
import type { Modele } from "@/lib/donnees/modeles";
import type { Profil } from "@/lib/donnees/parametres";
import { cx } from "@/lib/cx";
import { VARIABLES, decouper, remplir } from "@/lib/variables";
import { basculerFavori, enregistrerModele, noterEnvoi, supprimerModele } from "./actions";

type ValeursContact = { prenom: string; nom: string; entreprise: string; ville: string; vehicule: string };
const VIDE: ValeursContact = { prenom: "", nom: "", entreprise: "", ville: "", vehicule: "" };

function valeursDe(c: ContactCourt | null): ValeursContact {
  if (!c) return VIDE;
  return { prenom: c.prenom ?? "", nom: c.nom ?? "", entreprise: c.entreprise ?? "", ville: c.ville ?? "", vehicule: "" };
}

async function copier(texte: string) {
  try {
    await navigator.clipboard.writeText(texte);
  } catch {
    const t = document.createElement("textarea");
    t.value = texte;
    t.style.position = "fixed";
    t.style.opacity = "0";
    document.body.appendChild(t);
    t.select();
    document.execCommand("copy");
    t.remove();
  }
}

function FormulaireModele({ modele, onFini }: { modele: Modele | null; onFini: () => void }) {
  const [etat, envoyer, enCours] = useActionState(enregistrerModele.bind(null, modele?.id ?? null), null);
  const zone = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    if (etat?.ok) onFini();
  }, [etat, onFini]);

  function inserer(v: string) {
    const z = zone.current;
    if (!z) return;
    const debut = z.selectionStart ?? z.value.length;
    const fin = z.selectionEnd ?? debut;
    z.setRangeText(`{${v}}`, debut, fin, "end");
    z.focus();
  }

  return (
    <form action={envoyer} className="space-y-4 p-5">
      <Champ label="Titre">
        <Saisie name="titre" defaultValue={modele?.titre ?? ""} placeholder="Ex. Concession · premier appel" autoFocus />
      </Champ>
      <div className="grid gap-3 sm:grid-cols-3">
        <Champ label="Cible">
          <Liste name="cible" defaultValue={modele?.cible ?? "toutes"} options={[["toutes", "Toutes les cibles"], ...Object.entries(CATEGORIES)]} />
        </Champ>
        <Champ label="Type">
          <Liste name="type" defaultValue={modele?.type ?? "premier_contact"} options={TYPES_MESSAGE} />
        </Champ>
        <Champ label="Canal">
          <Liste name="canal" defaultValue={modele?.canal ?? ""} options={CANAUX} vide="Tous canaux" />
        </Champ>
      </div>
      <Champ label="Message">
        <Zone ref={zone} name="contenu" defaultValue={modele?.contenu ?? ""} rows={10} placeholder="Bonjour {prénom}, …" />
      </Champ>
      <div>
        <p className="mb-2 text-[12px] text-discret">Insérer une variable à l&apos;endroit du curseur :</p>
        <div className="flex flex-wrap gap-1.5">
          {VARIABLES.map((v) => (
            <button
              key={v.cle}
              type="button"
              title={v.aide}
              onClick={() => inserer(v.libelle)}
              className="h-7 rounded-md border border-or/30 bg-or-sombre px-2 font-mono text-[12px] text-or hover:border-or"
            >
              {`{${v.libelle}}`}
            </button>
          ))}
        </div>
      </div>
      {etat?.erreur && <p className="text-sm text-rouge">{etat.erreur}</p>}
      <div className="flex justify-end gap-2 border-t border-ligne pt-4">
        <Bouton variante="fantome" onClick={onFini}>
          Annuler
        </Bouton>
        <Bouton type="submit" variante="primaire" disabled={enCours}>
          {modele ? "Enregistrer" : "Créer le modèle"}
        </Bouton>
      </div>
    </form>
  );
}

function CarteModele({
  m,
  valeurs,
  contact,
  onModifier,
}: {
  m: Modele;
  valeurs: Record<string, string>;
  contact: ContactCourt | null;
  onModifier: () => void;
}) {
  const [copie, setCopie] = useState(false);
  const [note, setNote] = useState(false);
  const [enCours, demarrer] = useTransition();
  const morceaux = useMemo(() => decouper(m.contenu, valeurs), [m.contenu, valeurs]);
  const manquantes = [...new Set(morceaux.filter((x) => x.variable && !x.rempli).map((x) => x.texte))];

  return (
    <li className="flex flex-col rounded-carte border border-ligne bg-surface shadow-carte">
      <header className="flex items-start justify-between gap-3 px-4 pt-4 sm:px-5">
        <div className="min-w-0">
          <h3 className="text-[14.5px] font-semibold">{m.titre}</h3>
          <div className="mt-1.5 flex flex-wrap gap-1.5">
            <Badge ton={m.type === "relance" ? "orange" : "bleu"}>{TYPES_MESSAGE[m.type as keyof typeof TYPES_MESSAGE]}</Badge>
            <Badge ton="discret">{m.cible === "toutes" ? "Toutes cibles" : CATEGORIES[m.cible as keyof typeof CATEGORIES]}</Badge>
            {m.canal && <Badge ton="discret">{CANAUX[m.canal as keyof typeof CANAUX]}</Badge>}
          </div>
        </div>
        <button
          type="button"
          onClick={() => basculerFavori(m.id, !m.favori)}
          aria-label={m.favori ? "Retirer des favoris" : "Ajouter aux favoris"}
          className={cx("grid size-8 shrink-0 place-items-center rounded-lg hover:bg-surface-3", m.favori ? "text-or" : "text-discret")}
        >
          <Star className="size-4" fill={m.favori ? "currentColor" : "none"} />
        </button>
      </header>

      <div className="mx-4 mt-3 flex-1 rounded-xl border border-ligne bg-surface-2/60 px-4 py-3 text-[13.5px] leading-relaxed whitespace-pre-line sm:mx-5">
        {morceaux.map((x, i) =>
          x.variable ? (
            x.rempli ? (
              <span key={i} className="font-medium text-or">
                {x.texte}
              </span>
            ) : (
              <span key={i} className="rounded border border-orange/40 bg-orange-fond px-1 font-mono text-[12px] text-orange">
                {x.texte}
              </span>
            )
          ) : (
            <span key={i}>{x.texte}</span>
          ),
        )}
      </div>

      {manquantes.length > 0 && (
        <p className="mx-4 mt-2 flex items-center gap-1.5 text-[12px] text-orange sm:mx-5">
          <AlertTriangle className="size-3.5 shrink-0" /> À remplir : {manquantes.join(", ")}
        </p>
      )}

      <footer className="flex flex-wrap items-center gap-2 px-4 py-4 sm:px-5">
        <Bouton
          variante="primaire"
          taille="sm"
          onClick={async () => {
            await copier(remplir(m.contenu, valeurs));
            setCopie(true);
          }}
        >
          {copie ? <Check /> : <Copy />} {copie ? "Copié" : "Copier"}
        </Bouton>
        {copie && contact && !note && (
          <Bouton
            taille="sm"
            disabled={enCours}
            onClick={() =>
              demarrer(async () => {
                await noterEnvoi(contact.id, m.id, remplir(m.contenu, valeurs));
                setNote(true);
              })
            }
          >
            <Send /> Noter l&apos;envoi à {nomAffiche(contact)}
          </Bouton>
        )}
        {note && (
          <span className="inline-flex items-center gap-1.5 text-[12.5px] text-vert">
            <Check className="size-3.5" /> Noté dans l&apos;historique · relance dans 5 j
          </span>
        )}
        <div className="ml-auto flex items-center gap-1">
          <Bouton taille="sm" variante="fantome" onClick={onModifier}>
            <Pencil /> Modifier
          </Bouton>
          <BoutonConfirmer action={() => supprimerModele(m.id)} confirmation="Supprimer ?">
            <Trash2 />
          </BoutonConfirmer>
        </div>
      </footer>
    </li>
  );
}

export function BanqueMessages({
  modeles,
  contacts,
  profil,
  contactInitial,
}: {
  modeles: Modele[];
  contacts: ContactCourt[];
  profil: Profil;
  contactInitial: number | null;
}) {
  const initial = contacts.find((c) => c.id === contactInitial) ?? null;
  const [contact, setContact] = useState<ContactCourt | null>(initial);
  const [vals, setVals] = useState<ValeursContact>(() => valeursDe(initial));
  const [cible, setCible] = useState<string>(initial?.categorie ?? "");
  const [type, setType] = useState<string>("");
  const [edition, setEdition] = useState<Modele | "nouveau" | null>(null);

  function choisirContact(c: ContactCourt | null) {
    setContact(c);
    setVals(valeursDe(c));
    if (c) setCible(c.categorie);
  }

  const valeurs = useMemo(
    () => ({
      ...vals,
      mon_prenom: profil.prenom,
      mon_nom: profil.nom,
      mon_entreprise: profil.entreprise,
      mon_telephone: profil.telephone,
      mon_email: profil.email,
    }),
    [vals, profil],
  );

  const visibles = modeles.filter((m) => (!cible || m.cible === cible || m.cible === "toutes") && (!type || m.type === type));
  const profilIncomplet = !profil.prenom || !profil.telephone;

  return (
    <>
      <div className="grid gap-6 lg:grid-cols-[320px_minmax(0,1fr)]">
        <aside className="space-y-4 lg:sticky lg:top-6 lg:self-start">
          <Carte>
            <div className="space-y-4 p-5">
              <div>
                <p className="mb-2 text-[13px] font-semibold">Personnaliser pour</p>
                <ChoixContact contacts={contacts} valeur={contact} onChoix={choisirContact} placeholder="Choisir un contact (facultatif)" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                {(
                  [
                    ["prenom", "{prénom}"],
                    ["nom", "{nom}"],
                    ["entreprise", "{entreprise}"],
                    ["ville", "{ville}"],
                  ] as const
                ).map(([k, l]) => (
                  <Champ key={k} label={<span className="font-mono text-[11.5px] text-or">{l}</span>}>
                    <Saisie value={vals[k]} onChange={(e) => setVals({ ...vals, [k]: e.target.value })} className="h-9" />
                  </Champ>
                ))}
                <Champ label={<span className="font-mono text-[11.5px] text-or">{"{véhicule}"}</span>} className="col-span-2">
                  <Saisie value={vals.vehicule} onChange={(e) => setVals({ ...vals, vehicule: e.target.value })} className="h-9" placeholder="Ex. Peugeot 3008 de 2021" />
                </Champ>
              </div>
              {profilIncomplet && (
                <p className="rounded-lg border border-orange/30 bg-orange-fond px-3 py-2 text-[12px] text-orange">
                  Renseigne ton prénom et ton téléphone dans{" "}
                  <Link href="/parametres" className="underline">
                    Paramètres
                  </Link>{" "}
                  pour remplir {"{mon_prénom}"} et {"{mon_téléphone}"}.
                </p>
              )}
            </div>
          </Carte>
        </aside>

        <div className="min-w-0">
          <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:px-0">
              {[["", "Toutes"], ...Object.entries(CATEGORIES)].map(([k, l]) => (
                <button
                  key={k}
                  type="button"
                  onClick={() => setCible(k)}
                  className={cx(
                    "h-8 shrink-0 rounded-full border px-3.5 text-[13px] font-medium transition-colors",
                    cible === k ? "border-texte bg-texte text-fond" : "border-ligne-forte bg-surface text-doux hover:text-texte",
                  )}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <div className="flex h-9 rounded-lg border border-ligne-forte bg-surface-2 p-1">
              {[["", "Tous"], ...Object.entries(TYPES_MESSAGE)].map(([k, l]) => (
                <button
                  key={k}
                  type="button"
                  onClick={() => setType(k)}
                  className={cx("rounded-md px-3 text-[13px] font-medium", type === k ? "bg-surface-3 text-texte" : "text-discret hover:text-doux")}
                >
                  {l}
                </button>
              ))}
            </div>
            <Bouton variante="primaire" onClick={() => setEdition("nouveau")}>
              <Plus /> Nouveau modèle
            </Bouton>
          </div>

          {visibles.length === 0 ? (
            <Carte>
              <EtatVide
                icone={<MessageSquareText />}
                titre="Aucun modèle pour ce filtre"
                texte="Crée un modèle pour cette cible : il sera disponible en un clic."
                action={
                  <Bouton variante="primaire" onClick={() => setEdition("nouveau")}>
                    <Plus /> Nouveau modèle
                  </Bouton>
                }
              />
            </Carte>
          ) : (
            <ul className="grid items-start gap-4 xl:grid-cols-2">
              {visibles.map((m) => (
                <CarteModele key={`${m.id}-${contact?.id ?? 0}`} m={m} valeurs={valeurs} contact={contact} onModifier={() => setEdition(m)} />
              ))}
            </ul>
          )}
        </div>
      </div>

      <Fenetre
        ouverte={edition !== null}
        onFermer={() => setEdition(null)}
        titre={edition === "nouveau" ? "Nouveau modèle" : "Modifier le modèle"}
        large
      >
        {edition !== null && (
          <FormulaireModele key={edition === "nouveau" ? "n" : edition.id} modele={edition === "nouveau" ? null : edition} onFini={() => setEdition(null)} />
        )}
      </Fenetre>
    </>
  );
}
