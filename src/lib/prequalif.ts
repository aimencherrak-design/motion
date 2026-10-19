import { STATUTS_CT, ETATS_CARNET } from "./constantes";

type FicheLike = {
  ctStatut: string | null;
  carnet: string | null;
  histovecRecu: boolean;
  nbProprietaires: number | null;
  photosOk: boolean;
} | null | undefined;

/** Les 5 points de contrôle de la fiche, et combien sont renseignés. */
export function pointsDeControle(f: FicheLike, nbPhotos: number) {
  const points = [
    { cle: "ct", libelle: "Contrôle technique", ok: !!f?.ctStatut, valeur: f?.ctStatut ? STATUTS_CT[f.ctStatut as keyof typeof STATUTS_CT] : null },
    { cle: "carnet", libelle: "Carnet d'entretien", ok: !!f?.carnet, valeur: f?.carnet ? ETATS_CARNET[f.carnet as keyof typeof ETATS_CARNET] : null },
    { cle: "histovec", libelle: "Code HistoVec reçu", ok: !!f?.histovecRecu, valeur: f?.histovecRecu ? "Reçu" : null },
    { cle: "proprietaires", libelle: "Nombre de propriétaires", ok: f?.nbProprietaires != null, valeur: f?.nbProprietaires != null ? String(f.nbProprietaires) : null },
    { cle: "photos", libelle: "Photos", ok: !!f?.photosOk || nbPhotos > 0, valeur: nbPhotos ? `${nbPhotos} photo${nbPhotos > 1 ? "s" : ""}` : f?.photosOk ? "Reçues" : null },
  ];
  return { points, faits: points.filter((p) => p.ok).length, total: points.length };
}
