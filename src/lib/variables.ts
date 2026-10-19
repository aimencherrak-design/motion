// Variables remplaçables dans les modèles de message, écrites entre accolades : {prénom}, {entreprise}…

export const VARIABLES = [
  { cle: "prenom", libelle: "prénom", aide: "Prénom du contact" },
  { cle: "nom", libelle: "nom", aide: "Nom du contact" },
  { cle: "entreprise", libelle: "entreprise", aide: "Entreprise du contact" },
  { cle: "ville", libelle: "ville", aide: "Ville du contact" },
  { cle: "vehicule", libelle: "véhicule", aide: "Véhicule concerné" },
  { cle: "mon_prenom", libelle: "mon_prénom", aide: "Ton prénom (Paramètres)" },
  { cle: "mon_nom", libelle: "mon_nom", aide: "Ton nom (Paramètres)" },
  { cle: "mon_entreprise", libelle: "mon_entreprise", aide: "Ton nom commercial (Paramètres)" },
  { cle: "mon_telephone", libelle: "mon_téléphone", aide: "Ton téléphone (Paramètres)" },
  { cle: "mon_email", libelle: "mon_email", aide: "Ton e-mail (Paramètres)" },
] as const;

/** « {Prénom} », « {prenom} », « { prénom } » → "prenom". */
export function cleVariable(brut: string) {
  return brut
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .trim()
    .toLowerCase()
    .replace(/[\s-]+/g, "_");
}

export const MOTIF_VARIABLE = /\{([^{}\n]{1,30})\}/g;

export type Morceau = { texte: string; variable?: string; rempli?: boolean };

/** Découpe le texte en morceaux : texte normal et variables (remplies ou non). */
export function decouper(texte: string, valeurs: Record<string, string>): Morceau[] {
  const res: Morceau[] = [];
  let dernier = 0;
  for (const m of texte.matchAll(MOTIF_VARIABLE)) {
    if (m.index! > dernier) res.push({ texte: texte.slice(dernier, m.index) });
    const cle = cleVariable(m[1]);
    const v = valeurs[cle]?.trim();
    res.push(v ? { texte: v, variable: cle, rempli: true } : { texte: m[0], variable: cle, rempli: false });
    dernier = m.index! + m[0].length;
  }
  if (dernier < texte.length) res.push({ texte: texte.slice(dernier) });
  return res;
}

export function remplir(texte: string, valeurs: Record<string, string>) {
  return decouper(texte, valeurs)
    .map((m) => m.texte)
    .join("");
}
