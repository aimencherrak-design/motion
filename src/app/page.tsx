import Link from "next/link";
import { AlarmClock, ArrowRight, BellRing, Car, Handshake, UserPlus, Phone, Send, Trophy, Users } from "lucide-react";
import { ActionsRelance } from "@/components/ActionsRelance";
import { Badge } from "@/components/ui/Badge";
import { Carte, EnTeteCarte } from "@/components/ui/Carte";
import { EnTetePage } from "@/components/ui/EnTetePage";
import { EtatVide } from "@/components/ui/EtatVide";
import { LienBouton } from "@/components/ui/Bouton";
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
import { aujourdhui, formatDateLongue } from "@/lib/dates";
import { activiteDuJour } from "@/lib/donnees/activite";
import { resumeAnnonces } from "@/lib/donnees/annonces";
import { compterParStatut, partenairesSignes, relancesAVenir, relancesDues, type Contact } from "@/lib/donnees/contacts";
import { lireObjectifs, lireProfil } from "@/lib/donnees/parametres";
import { cx } from "@/lib/cx";
import { CarteQuota } from "./_tableau/CarteQuota";

function LigneRelance({ c }: { c: Contact }) {
  const etat = etatRelance(c.prochaineRelance);
  return (
    <li
      className={cx(
        "flex flex-col gap-3 border-l-[3px] px-4 py-3.5 sm:flex-row sm:items-center sm:justify-between sm:px-5",
        etat === "retard" ? "border-l-rouge" : "border-l-orange",
      )}
    >
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-2">
          <Link href={`/crm/${c.id}`} className="truncate font-semibold hover:text-or">
            {nomAffiche(c)}
          </Link>
          <Badge ton={TON_RELANCE[etat]}>{libelleRelance(c.prochaineRelance)}</Badge>
        </div>
        <p className="mt-0.5 truncate text-[12.5px] text-doux">
          {[sousNom(c), CATEGORIES[c.categorie as keyof typeof CATEGORIES], STATUTS[c.statut as keyof typeof STATUTS], c.ville]
            .filter(Boolean)
            .join(" · ")}
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-1.5">
        {c.telephone && (
          <a
            href={lienTel(c.telephone)}
            className="inline-flex h-8 items-center gap-1.5 rounded-lg border border-ligne-forte bg-surface-2 px-2.5 text-[12.5px] font-medium tabular-nums text-texte hover:border-or/60"
          >
            <Phone className="size-3.5 text-or" />
            {c.telephone}
          </a>
        )}
        <ActionsRelance id={c.id} />
      </div>
    </li>
  );
}

export default function TableauDeBord() {
  const today = aujourdhui();
  const date = formatDateLongue(today);
  const profil = lireProfil();
  const objectifs = lireObjectifs();
  const activite = activiteDuJour();
  const dues = relancesDues();
  const enRetard = dues.filter((c) => (c.prochaineRelance ?? "") < today);
  const duJour = dues.filter((c) => c.prochaineRelance === today);
  const semaine = relancesAVenir(7);
  const signes = partenairesSignes();
  const parStatut = compterParStatut();
  const totalContacts = Object.values(parStatut).reduce((a, b) => a + b, 0);
  const annonces = resumeAnnonces();
  const debutMois = today.slice(0, 7);
  const signesCeMois = signes.filter((c) => (c.dateSignature ?? "").startsWith(debutMois)).length;

  return (
    <>
      <EnTetePage
        surtitre={date.charAt(0).toUpperCase() + date.slice(1)}
        titre={profil.prenom ? `Bonjour ${profil.prenom}` : "Tableau de bord"}
        description="Tes objectifs du jour et tes relances, en un coup d'œil."
        actions={
          <LienBouton href="/crm/nouveau" variante="primaire">
            <Users /> Nouveau contact
          </LienBouton>
        }
      />

      {/* Quotas du jour */}
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <CarteQuota
          compteur="ajouts_linkedin"
          titre="Ajouts LinkedIn"
          aide="Invitations envoyées"
          valeur={activite.ajouts_linkedin}
          objectif={objectifs.ajouts_linkedin}
          icone={<UserPlus />}
          plusCinq
        />
        <CarteQuota
          compteur="messages_prospection"
          titre="Messages de prospection"
          aide="Convertir un pro en partenaire"
          valeur={activite.messages_prospection}
          objectif={objectifs.messages_prospection}
          icone={<Send />}
        />
        <CarteQuota
          compteur="mises_en_relation"
          titre="Mises en relation"
          aide="Clients envoyés à un partenaire"
          valeur={activite.mises_en_relation}
          objectif={objectifs.mises_en_relation}
          icone={<Handshake />}
        />
        <Link
          href="/crm?relance=dues"
          className={cx(
            "group flex flex-col rounded-carte border bg-surface p-4 shadow-carte transition-colors hover:border-ligne-forte sm:p-5",
            enRetard.length ? "border-rouge/40" : duJour.length ? "border-orange/40" : "border-ligne",
          )}
        >
          <div className="flex items-center gap-2.5">
            <span className="grid size-8 place-items-center rounded-lg bg-or-sombre text-or">
              <BellRing className="size-4" />
            </span>
            <div>
              <p className="text-[13.5px] font-semibold">Relances dues</p>
              <p className="text-[12px] text-discret">À faire aujourd&apos;hui</p>
            </div>
            <ArrowRight className="ml-auto size-4 text-discret transition-transform group-hover:translate-x-0.5" />
          </div>
          <p className="titre mt-4 text-[34px] leading-none font-semibold tabular-nums">{dues.length}</p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            <Badge ton={enRetard.length ? "rouge" : "discret"}>{enRetard.length} en retard</Badge>
            <Badge ton={duJour.length ? "orange" : "discret"}>{duJour.length} aujourd&apos;hui</Badge>
          </div>
        </Link>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,340px)]">
        <div className="min-w-0 space-y-6">
          <Carte>
            <EnTeteCarte
              icone={<AlarmClock />}
              titre="Relances à faire"
              description={
                dues.length
                  ? "« Faite » note la relance dans l'historique et programme la suivante dans 7 jours."
                  : undefined
              }
            />
            {dues.length === 0 ? (
              <EtatVide
                icone={<Trophy />}
                titre="Aucune relance en attente"
                texte="Tu es à jour. Profite-en pour avancer sur tes ajouts LinkedIn ou contacter de nouveaux prospects."
                action={
                  <LienBouton href="/crm?statut=identifie&tri=distance" variante="secondaire" taille="sm">
                    Voir les prospects à contacter
                  </LienBouton>
                }
              />
            ) : (
              <div>
                {enRetard.length > 0 && (
                  <>
                    <p className="border-b border-ligne bg-rouge-fond/40 px-5 py-2 text-[11.5px] font-semibold tracking-wider text-rouge uppercase">
                      En retard · {enRetard.length}
                    </p>
                    <ul className="divide-y divide-ligne">
                      {enRetard.map((c) => (
                        <LigneRelance key={c.id} c={c} />
                      ))}
                    </ul>
                  </>
                )}
                {duJour.length > 0 && (
                  <>
                    <p className="border-y border-ligne bg-orange-fond/40 px-5 py-2 text-[11.5px] font-semibold tracking-wider text-orange uppercase">
                      Aujourd&apos;hui · {duJour.length}
                    </p>
                    <ul className="divide-y divide-ligne">
                      {duJour.map((c) => (
                        <LigneRelance key={c.id} c={c} />
                      ))}
                    </ul>
                  </>
                )}
              </div>
            )}
          </Carte>

          <Carte>
            <EnTeteCarte titre="Cette semaine" description="Relances prévues dans les 7 prochains jours." />
            {semaine.length === 0 ? (
              <p className="px-5 py-5 text-sm text-doux">Rien de prévu pour les 7 prochains jours.</p>
            ) : (
              <ul className="divide-y divide-ligne">
                {semaine.map((c) => (
                  <li key={c.id} className="flex items-center justify-between gap-3 px-5 py-3">
                    <Link href={`/crm/${c.id}`} className="min-w-0 hover:text-or">
                      <p className="truncate text-sm font-medium">{nomAffiche(c)}</p>
                      <p className="truncate text-[12px] text-discret">
                        {[CATEGORIES[c.categorie as keyof typeof CATEGORIES], c.ville].filter(Boolean).join(" · ")}
                      </p>
                    </Link>
                    <Badge ton="discret">{libelleRelance(c.prochaineRelance)}</Badge>
                  </li>
                ))}
              </ul>
            )}
          </Carte>
        </div>

        <div className="space-y-6">
          <Carte className="overflow-hidden">
            <div className="relative px-5 pt-5 pb-4">
              <div className="pointer-events-none absolute -top-10 -right-10 size-40 rounded-full bg-or/10 blur-2xl" />
              <p className="flex items-center gap-2 text-[13px] font-semibold text-doux">
                <Trophy className="size-4 text-or" /> Partenaires signés
              </p>
              <p className="titre mt-2 text-5xl font-semibold tabular-nums">{signes.length}</p>
              <p className="mt-1 text-[12.5px] text-discret">
                {signesCeMois > 0 ? `dont ${signesCeMois} ce mois-ci` : "Aucun nouveau ce mois-ci"}
              </p>
            </div>
            {signes.length > 0 && (
              <ul className="divide-y divide-ligne border-t border-ligne">
                {signes.slice(0, 6).map((c) => (
                  <li key={c.id}>
                    <Link href={`/crm/${c.id}`} className="flex items-center justify-between gap-3 px-5 py-2.5 hover:bg-surface-2">
                      <span className="min-w-0">
                        <span className="block truncate text-sm font-medium">{nomAffiche(c)}</span>
                        <span className="block truncate text-[12px] text-discret">
                          {CATEGORIES[c.categorie as keyof typeof CATEGORIES]}
                        </span>
                      </span>
                      {c.remunerationMontant != null && (
                        <Badge ton="vert">{libelleRemuneration(c.remunerationType, c.remunerationMontant)}</Badge>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </Carte>

          <Carte>
            <EnTeteCarte titre="Pipeline" description={`${totalContacts} contacts au total`} />
            <ul className="space-y-2.5 px-5 py-4">
              {(Object.keys(STATUTS) as (keyof typeof STATUTS)[]).map((s) => {
                const n = parStatut[s] ?? 0;
                const pct = totalContacts ? Math.max(n ? 3 : 0, Math.round((n / totalContacts) * 100)) : 0;
                return (
                  <li key={s}>
                    <Link href={`/crm?statut=${s}`} className="group block">
                      <div className="mb-1 flex justify-between text-[12.5px]">
                        <span className="text-doux group-hover:text-texte">{STATUTS[s]}</span>
                        <span className="font-medium tabular-nums">{n}</span>
                      </div>
                      <div className="h-1.5 overflow-hidden rounded-full bg-surface-3">
                        <div
                          className={cx(
                            "h-full rounded-full",
                            s === "signe" ? "bg-vert" : s === "perdu" ? "bg-rouge/70" : "bg-or",
                          )}
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </Carte>

          <Carte>
            <Link href="/annonces" className="group flex items-center gap-3 px-5 py-4">
              <span className="grid size-9 place-items-center rounded-lg bg-or-sombre text-or">
                <Car className="size-4" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-semibold">Annonces suivies</span>
                <span className="block text-[12.5px] text-discret">
                  {annonces.actives} en cours · {annonces.plusDe30} en ligne depuis plus de 30 j
                </span>
              </span>
              <ArrowRight className="size-4 text-discret transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Carte>
        </div>
      </div>
    </>
  );
}
