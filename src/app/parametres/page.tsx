import type { Metadata } from "next";
import { Database, Download, FolderOpen, History } from "lucide-react";
import { AncreBouton } from "@/components/ui/Bouton";
import { Carte, EnTeteCarte } from "@/components/ui/Carte";
import { EnTetePage } from "@/components/ui/EnTetePage";
import { dossierDonnees } from "@/lib/chemins";
import { formatDateHeure } from "@/lib/dates";
import { listerSauvegardes } from "@/lib/sauvegarde";
import { compterDonnees } from "@/lib/statistiques";
import { RestaurerSauvegarde } from "./RestaurerSauvegarde";

export const metadata: Metadata = { title: "Paramètres" };

function taille(o: number) {
  return o < 1024 * 1024 ? `${Math.max(1, Math.round(o / 1024))} Ko` : `${(o / 1024 / 1024).toFixed(1)} Mo`;
}

function libelleSauvegarde(f: string) {
  if (f.startsWith("auto-demarrage")) return "Au démarrage";
  if (f.startsWith("auto-avant-restauration")) return "Avant une restauration";
  if (f.startsWith("auto-avant-import")) return "Avant un import";
  return "Manuelle";
}

export default function PageParametres() {
  const stats = compterDonnees();
  const sauvegardes = listerSauvegardes();

  return (
    <>
      <EnTetePage surtitre="Réglages" titre="Paramètres" description="Sauvegarde de tes données et réglages de l'outil." />

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,340px)]">
        <Carte>
          <EnTeteCarte
            icone={<Download />}
            titre="Sauvegarde et restauration"
            description="Un fichier JSON qui contient tout : contacts, échanges, messages, annonces, fiches et photos."
          />
          <div className="space-y-5 px-5 py-5">
            <div>
              <p className="mb-3 text-sm text-doux">
                Télécharge une sauvegarde de temps en temps et garde-la sur une clé USB ou dans ton cloud personnel.
                Ce fichier sert aussi à passer tes données du PC au Mac.
              </p>
              <AncreBouton variante="primaire" href="/api/sauvegarde">
                <Download />
                Télécharger une sauvegarde
              </AncreBouton>
            </div>
            <div className="border-t border-ligne pt-5">
              <p className="mb-3 text-sm text-doux">
                Recharge un fichier de sauvegarde : il remplace les données actuelles.
              </p>
              <RestaurerSauvegarde />
            </div>
          </div>
        </Carte>

        <div className="space-y-6">
          <Carte>
            <EnTeteCarte icone={<Database />} titre="Contenu de la base" />
            <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-b-carte bg-ligne">
              {[
                ["Contacts", stats.contacts],
                ["Échanges", stats.echanges],
                ["Modèles de message", stats.modeles],
                ["Annonces", stats.annonces],
                ["Fiches de pré-qualif.", stats.fiches],
                ["Photos", stats.photos],
              ].map(([l, v]) => (
                <div key={l} className="bg-surface px-5 py-3.5">
                  <dt className="text-xs text-doux">{l}</dt>
                  <dd className="titre mt-0.5 text-xl font-semibold tabular-nums">{v}</dd>
                </div>
              ))}
            </dl>
          </Carte>

          <Carte>
            <EnTeteCarte icone={<FolderOpen />} titre="Emplacement des données" />
            <div className="px-5 py-4 text-sm">
              <p className="text-doux">Tes données sont rangées sur ce PC, en dehors du dossier du programme :</p>
              <code className="mt-2 block break-all rounded-lg border border-ligne bg-surface-2 px-3 py-2 font-mono text-[12.5px] text-texte">
                {dossierDonnees()}
              </code>
              <p className="mt-2 text-xs text-discret">
                Tu peux donc remplacer le programme par une nouvelle version sans rien perdre.
              </p>
            </div>
          </Carte>
        </div>

        <Carte className="lg:col-span-2">
          <EnTeteCarte
            icone={<History />}
            titre="Sauvegardes automatiques"
            description="Une sauvegarde est faite à chaque démarrage de l'outil. Les 30 plus récentes sont conservées."
          />
          {sauvegardes.length === 0 ? (
            <p className="px-5 py-6 text-sm text-doux">Aucune sauvegarde automatique pour l&apos;instant.</p>
          ) : (
            <ul className="divide-y divide-ligne">
              {sauvegardes.slice(0, 10).map((s) => (
                <li key={s.fichier} className="flex flex-wrap items-center justify-between gap-3 px-5 py-3">
                  <div className="min-w-0">
                    <p className="text-sm font-medium">{formatDateHeure(s.date)}</p>
                    <p className="text-xs text-discret">
                      {libelleSauvegarde(s.fichier)} · {taille(s.taille)}
                    </p>
                  </div>
                  <AncreBouton taille="sm" variante="fantome" href={`/api/sauvegarde/fichier/${encodeURIComponent(s.fichier)}`}>
                    <Download />
                    Télécharger
                  </AncreBouton>
                </li>
              ))}
            </ul>
          )}
        </Carte>
      </div>
    </>
  );
}
