import type { Metadata } from "next";
import Link from "next/link";
import { FileUp, MapPin, Phone, Plus, Users } from "lucide-react";
import { SelectStatut } from "@/components/SelectStatut";
import { Badge } from "@/components/ui/Badge";
import { LienBouton } from "@/components/ui/Bouton";
import { Carte } from "@/components/ui/Carte";
import { EnTetePage } from "@/components/ui/EnTetePage";
import { EtatVide } from "@/components/ui/EtatVide";
import {
  TON_RELANCE,
  etatRelance,
  libelleRelance,
  libelleRemuneration,
  lienTel,
  nomAffiche,
  sousNom,
} from "@/lib/affichage";
import { CATEGORIES, STATUTS } from "@/lib/constantes";
import { compterParCategorie, listerContacts, type Contact, type FiltresContacts } from "@/lib/donnees/contacts";
import { cx } from "@/lib/cx";
import { BarreFiltres } from "./BarreFiltres";

export const metadata: Metadata = { title: "CRM" };

function Priorite({ p }: { p: string | null }) {
  if (!p) return null;
  return (
    <span
      title={`Priorité ${p}`}
      className={cx(
        "grid size-6 shrink-0 place-items-center rounded-md border text-[11.5px] font-bold",
        p === "A" ? "border-or bg-or text-sur-or" : p === "B" ? "border-ligne-forte text-texte" : "border-ligne text-discret",
      )}
    >
      {p}
    </span>
  );
}

function LigneContact({ c }: { c: Contact }) {
  const etat = etatRelance(c.prochaineRelance);
  const actif = !["signe", "perdu"].includes(c.statut);
  return (
    <li className="group relative grid grid-cols-[minmax(0,1fr)_auto] gap-x-4 gap-y-2 px-4 py-3.5 transition-colors hover:bg-surface-2 sm:px-5 md:grid-cols-[minmax(0,2.2fr)_minmax(0,1.1fr)_150px_130px_auto] md:items-center">
      <div className="flex min-w-0 items-center gap-3">
        <Priorite p={c.priorite} />
        <div className="min-w-0">
          <Link href={`/crm/${c.id}`} className="block truncate font-semibold after:absolute after:inset-0 hover:text-or">
            {nomAffiche(c)}
          </Link>
          <p className="truncate text-[12.5px] text-discret">
            {[sousNom(c), CATEGORIES[c.categorie as keyof typeof CATEGORIES], c.groupe].filter(Boolean).join(" · ")}
          </p>
        </div>
      </div>
      <div className="relative z-10 flex items-center justify-end md:hidden">
        <SelectStatut id={c.id} statut={c.statut} />
      </div>
      <div className="col-span-2 flex min-w-0 flex-wrap items-center gap-x-4 gap-y-1 text-[12.5px] text-doux md:col-span-1">
        {c.ville && (
          <span className="inline-flex items-center gap-1">
            <MapPin className="size-3.5 text-discret" />
            {c.ville}
            {c.distanceKm != null && <span className="text-discret">· {Math.round(c.distanceKm)} km</span>}
          </span>
        )}
        {c.telephone && (
          <a href={lienTel(c.telephone)} className="relative z-10 inline-flex items-center gap-1 tabular-nums hover:text-or">
            <Phone className="size-3.5 text-discret" />
            {c.telephone}
          </a>
        )}
      </div>
      <div className="relative z-10 hidden md:block">
        <SelectStatut id={c.id} statut={c.statut} />
      </div>
      <div className="col-span-2 flex flex-wrap items-center gap-1.5 md:col-span-1">
        {actif ? (
          <Badge ton={TON_RELANCE[etat]}>{libelleRelance(c.prochaineRelance)}</Badge>
        ) : c.remunerationMontant != null ? (
          <Badge ton="vert">{libelleRemuneration(c.remunerationType, c.remunerationMontant)}</Badge>
        ) : null}
      </div>
      <div className="hidden text-right text-[12.5px] text-doux md:block">
        {actif && c.remunerationMontant != null ? libelleRemuneration(c.remunerationType, c.remunerationMontant) : ""}
      </div>
    </li>
  );
}

function CartePipeline({ c }: { c: Contact }) {
  const etat = etatRelance(c.prochaineRelance);
  const actif = !["signe", "perdu"].includes(c.statut);
  return (
    <li className="relative rounded-xl border border-ligne bg-surface-2 p-3 transition-colors hover:border-ligne-forte">
      <div className="flex items-start justify-between gap-2">
        <Link href={`/crm/${c.id}`} className="min-w-0 after:absolute after:inset-0">
          <p className="truncate text-[13.5px] font-semibold">{nomAffiche(c)}</p>
          <p className="truncate text-[12px] text-discret">
            {[CATEGORIES[c.categorie as keyof typeof CATEGORIES], c.ville].filter(Boolean).join(" · ")}
          </p>
        </Link>
        <Priorite p={c.priorite} />
      </div>
      <div className="relative z-10 mt-3 flex flex-wrap items-center justify-between gap-2">
        {actif ? (
          <Badge ton={TON_RELANCE[etat]}>{libelleRelance(c.prochaineRelance)}</Badge>
        ) : (
          <span className="text-[12px] text-doux">{libelleRemuneration(c.remunerationType, c.remunerationMontant)}</span>
        )}
        <SelectStatut id={c.id} statut={c.statut} />
      </div>
    </li>
  );
}

export default async function PageCrm({ searchParams }: PageProps<"/crm">) {
  const sp = await searchParams;
  const val = (k: string) => (typeof sp[k] === "string" ? (sp[k] as string) : undefined);
  const filtres: FiltresContacts = {
    q: val("q"),
    categorie: val("categorie"),
    statut: val("statut"),
    priorite: val("priorite"),
    relance: val("relance"),
    tri: val("tri"),
  };
  const vue = val("vue") === "pipeline" ? "pipeline" : "liste";
  const liste = listerContacts(filtres);
  const parCategorie = compterParCategorie(filtres);
  const total = Object.values(parCategorie).reduce((a, b) => a + b, 0);

  const lienCategorie = (cat?: string) => {
    const p = new URLSearchParams();
    for (const [k, v] of Object.entries(sp)) if (typeof v === "string" && k !== "categorie") p.set(k, v);
    if (cat) p.set("categorie", cat);
    const s = p.toString();
    return s ? `/crm?${s}` : "/crm";
  };

  return (
    <>
      <EnTetePage
        surtitre="Prospection"
        titre="CRM"
        description="Tes contacts professionnels et particuliers, de l'identification à la signature."
        actions={
          <>
            <LienBouton href="/crm/import" variante="secondaire">
              <FileUp /> Importer
            </LienBouton>
            <LienBouton href="/crm/nouveau" variante="primaire">
              <Plus /> Nouveau contact
            </LienBouton>
          </>
        }
      />

      <BarreFiltres />

      <nav aria-label="Catégories" className="-mx-4 mt-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:px-0">
        {[[undefined, "Toutes", total] as const, ...Object.entries(CATEGORIES).map(([k, l]) => [k, l, parCategorie[k] ?? 0] as const)].map(
          ([k, l, n]) => {
            const actif = filtres.categorie === k;
            return (
              <Link
                key={k ?? "toutes"}
                href={lienCategorie(k)}
                scroll={false}
                className={cx(
                  "inline-flex h-8 shrink-0 items-center gap-2 rounded-full border px-3.5 text-[13px] font-medium transition-colors",
                  actif ? "border-texte bg-texte text-fond" : "border-ligne-forte bg-surface text-doux hover:text-texte",
                )}
              >
                {l}
                <span className={cx("tabular-nums", actif ? "text-fond/60" : "text-discret")}>{n}</span>
              </Link>
            );
          },
        )}
      </nav>

      <p className="mt-4 mb-3 text-[13px] text-doux">
        <span className="font-semibold text-texte tabular-nums">{liste.length}</span> contact{liste.length > 1 ? "s" : ""}
      </p>

      {liste.length === 0 ? (
        <Carte>
          <EtatVide
            icone={<Users />}
            titre={total === 0 && !filtres.q ? "Ton CRM est vide" : "Aucun contact ne correspond"}
            texte={
              total === 0 && !filtres.q
                ? "Importe ton ancien CRM et ta liste de prospects, ou ajoute ton premier contact."
                : "Essaie d'autres filtres ou une autre recherche."
            }
            action={
              total === 0 && !filtres.q ? (
                <div className="flex flex-wrap justify-center gap-2">
                  <LienBouton href="/crm/import" variante="primaire">
                    <FileUp /> Importer mes contacts
                  </LienBouton>
                  <LienBouton href="/crm/nouveau">
                    <Plus /> Nouveau contact
                  </LienBouton>
                </div>
              ) : undefined
            }
          />
        </Carte>
      ) : vue === "liste" ? (
        <Carte className="overflow-hidden">
          <div className="hidden grid-cols-[minmax(0,2.2fr)_minmax(0,1.1fr)_150px_130px_auto] gap-x-4 border-b border-ligne px-5 py-2.5 text-[11.5px] font-semibold tracking-wider text-discret uppercase md:grid">
            <span>Contact</span>
            <span>Ville · Téléphone</span>
            <span>Statut</span>
            <span>Relance</span>
            <span className="text-right">Rémun.</span>
          </div>
          <ul className="divide-y divide-ligne">
            {liste.map((c) => (
              <LigneContact key={c.id} c={c} />
            ))}
          </ul>
        </Carte>
      ) : (
        <div className="-mx-4 overflow-x-auto px-4 pb-4 sm:mx-0 sm:px-0">
          <div className="grid auto-cols-[minmax(250px,1fr)] grid-flow-col gap-3">
            {(Object.keys(STATUTS) as (keyof typeof STATUTS)[]).map((s) => {
              const col = liste.filter((c) => c.statut === s);
              return (
                <section key={s} className="flex min-h-40 flex-col rounded-carte border border-ligne bg-surface">
                  <header className="flex items-center justify-between border-b border-ligne px-3.5 py-2.5">
                    <h2 className="text-[13px] font-semibold">{STATUTS[s]}</h2>
                    <span className="rounded-md bg-surface-3 px-1.5 text-[12px] text-doux tabular-nums">{col.length}</span>
                  </header>
                  <ul className="flex max-h-[65vh] flex-col gap-2 overflow-y-auto p-2.5">
                    {col.map((c) => (
                      <CartePipeline key={c.id} c={c} />
                    ))}
                    {col.length === 0 && <li className="px-1 py-3 text-center text-[12px] text-discret">Aucun contact</li>}
                  </ul>
                </section>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
