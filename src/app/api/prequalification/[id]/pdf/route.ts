import fs from "node:fs";
import path from "node:path";
import { createElement } from "react";
import { renderToBuffer } from "@react-pdf/renderer";
import { euros, nombre, nomAffiche } from "@/lib/affichage";
import { sousDossier } from "@/lib/chemins";
import { ETATS_CARNET, PLATEFORMES, STATUTS_CT } from "@/lib/constantes";
import { aujourdhui, formatDate } from "@/lib/dates";
import { getAnnonce, getFiche, joursEnLigne, photosDeAnnonce } from "@/lib/donnees/annonces";
import { getContact } from "@/lib/donnees/contacts";
import { lireProfil } from "@/lib/donnees/parametres";
import { FichePdf, type DonneesPdf } from "@/lib/pdf/FichePdf";

function nomFichier(s: string) {
  return s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();
}

/** La police du PDF ne connaît pas les espaces insécables fines utilisées par le format français. */
function propre<T>(v: T): T {
  if (typeof v === "string") return v.replace(/[\u202f\u00a0]/g, " ") as T;
  if (Array.isArray(v)) return v.map(propre) as T;
  if (v && typeof v === "object" && !Buffer.isBuffer(v)) return Object.fromEntries(Object.entries(v).map(([k, x]) => [k, propre(x)])) as T;
  return v;
}

// Génère la fiche de pré-qualification en PDF (affichée dans le navigateur, prête à enregistrer ou imprimer).
export async function GET(_req: Request, ctx: RouteContext<"/api/prequalification/[id]/pdf">) {
  const id = Number((await ctx.params).id);
  const a = getAnnonce(id);
  if (!a) return new Response("Véhicule introuvable", { status: 404 });
  const f = getFiche(id);
  const profil = lireProfil();
  const agence = a.agenceId ? getContact(a.agenceId) : undefined;
  const dossier = sousDossier("photos");
  const photos = photosDeAnnonce(id)
    .map((p) => {
      const chemin = path.join(dossier, path.basename(p.fichier));
      if (!fs.existsSync(chemin)) return null;
      return { data: fs.readFileSync(chemin), format: p.fichier.endsWith(".png") ? ("png" as const) : ("jpg" as const) };
    })
    .filter((p) => p !== null)
    .slice(0, 13);

  const ct = f?.ctStatut as keyof typeof STATUTS_CT | undefined;
  const carnet = f?.carnet as keyof typeof ETATS_CARNET | undefined;
  const controles: DonneesPdf["controles"] = [
    {
      libelle: "Contrôle technique",
      etat: !ct ? "vide" : ct === "ok" ? "ok" : ct === "contre_visite" ? "attention" : "non",
      texte: ct ? STATUTS_CT[ct] : "Non renseigné",
      detail: [f?.ctDate ? `Dernier CT le ${formatDate(f.ctDate)}` : null, f?.ctDefauts ? `Défauts : ${f.ctDefauts}` : null].filter(Boolean).join(" · ") || null,
    },
    {
      libelle: "Carnet d'entretien",
      etat: !carnet ? "vide" : carnet === "complet" ? "ok" : carnet === "partiel" ? "attention" : "non",
      texte: carnet ? ETATS_CARNET[carnet] : "Non renseigné",
    },
    {
      libelle: "Rapport HistoVec",
      etat: f?.histovecRecu ? "ok" : "vide",
      texte: f?.histovecRecu ? "Code reçu" : "Non reçu",
      detail: f?.histovecRecu && f.histovecCode ? `Code : ${f.histovecCode}` : null,
    },
    {
      libelle: "Nombre de propriétaires",
      etat: f?.nbProprietaires == null ? "vide" : f.nbProprietaires <= 2 ? "ok" : "attention",
      texte: f?.nbProprietaires == null ? "Non renseigné" : String(f.nbProprietaires),
    },
    {
      libelle: "Photos",
      etat: photos.length || f?.photosOk ? "ok" : "vide",
      texte: photos.length ? `${photos.length} jointe${photos.length > 1 ? "s" : ""}` : f?.photosOk ? "Reçues" : "Aucune",
    },
  ];

  const { jours } = joursEnLigne(a);
  const donnees: DonneesPdf = {
    vehicule: {
      titre: a.marqueModele ?? "Véhicule",
      annee: a.annee,
      kilometrage: a.kilometrage != null ? `${nombre(a.kilometrage)} km` : null,
      carburant: a.carburant,
      prix: a.prixActuel != null ? euros(a.prixActuel) : null,
      localisation: a.localisation,
      plateforme: a.url ? PLATEFORMES[a.plateforme as keyof typeof PLATEFORMES] : "Hors annonce",
      url: a.url || null,
      datePublication: a.datePublication,
      joursEnLigne: a.url ? jours : null,
    },
    controles,
    remarques: f?.remarques ?? null,
    photos,
    agence: agence ? nomAffiche(agence) : null,
    apporteur: {
      nom: [profil.prenom, profil.nom].filter(Boolean).join(" "),
      entreprise: profil.entreprise,
      telephone: profil.telephone,
      email: profil.email,
      siret: profil.siret,
    },
    date: formatDate(aujourdhui()),
  };

  const pdf = await renderToBuffer(createElement(FichePdf, { d: propre(donnees) }) as Parameters<typeof renderToBuffer>[0]);
  const nom = `pre-qualification-${nomFichier(a.marqueModele ?? `vehicule-${id}`)}.pdf`;
  return new Response(new Uint8Array(pdf), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `inline; filename="${nom}"`,
      "Cache-Control": "no-store",
    },
  });
}
