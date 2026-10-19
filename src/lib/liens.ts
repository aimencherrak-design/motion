import type { Plateforme } from "./constantes";

// Paramètres de suivi publicitaire, sans effet sur l'annonce elle-même.
const PARAMS_SUIVI = /^(utm_.*|fbclid|gclid|xtor|at_.*|mc_.*|ref|referrer|source|from|origin|campaign|cmp|share.*|_.*)$/i;

export type LienAnalyse = {
  url: string; // lien nettoyé à enregistrer
  cle: string; // identifiant stable pour repérer les doublons
  plateforme: Plateforme;
};

export function detecterPlateforme(hote: string): Plateforme {
  const h = hote.toLowerCase();
  if (h.endsWith("leboncoin.fr")) return "leboncoin";
  if (h.endsWith("lacentrale.fr")) return "lacentrale";
  if (/(^|\.)autoscout24\./.test(h)) return "autoscout24";
  if (h.endsWith("mobile.de")) return "mobile_de";
  return "autre";
}

/** Identifiant de l'annonce propre à chaque site, quand on sait le reconnaître. */
function identifiant(plateforme: Plateforme, u: URL): string | null {
  const chemin = u.pathname;
  switch (plateforme) {
    case "leboncoin": {
      // /ad/voitures/2851234567  ou  /voitures/2851234567.htm
      const m = chemin.match(/\/(\d{8,})(?:\.htm)?\/?$/);
      return m ? m[1] : null;
    }
    case "lacentrale": {
      // /auto-occasion-annonce-87103245678.html
      const m = chemin.match(/annonce-(\d{6,})\.html/);
      return m ? m[1] : null;
    }
    case "autoscout24": {
      // /offres/peugeot-208-...-<uuid>  (même id sur .fr, .de, .ch…)
      const m = chemin.match(/([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})/i);
      return m ? m[1].toLowerCase() : null;
    }
    case "mobile_de": {
      // details.html?id=123456789  ou  /fahrzeuge/details.html?id=…  ou /auto-inserat/…/123456789.html
      const id = u.searchParams.get("id");
      if (id && /^\d+$/.test(id)) return id;
      const m = chemin.match(/\/(\d{6,})\.html$/);
      return m ? m[1] : null;
    }
    default:
      return null;
  }
}

/** Analyse un lien collé. Renvoie null si ce n'est pas un lien web. */
export function analyserLien(brut: string): LienAnalyse | null {
  let texte = brut.trim().replace(/^[<("'\s]+|[>)"'\s.,;]+$/g, "");
  if (!texte) return null;
  if (!/^https?:\/\//i.test(texte)) {
    if (/^(www\.)?[a-z0-9-]+(\.[a-z0-9-]+)+\//i.test(texte)) texte = `https://${texte}`;
    else return null;
  }
  let u: URL;
  try {
    u = new URL(texte);
  } catch {
    return null;
  }
  if (!/^https?:$/.test(u.protocol) || !u.hostname.includes(".")) return null;

  const hote = u.hostname.toLowerCase().replace(/^(www|m|mobile)\./, "");
  const plateforme = detecterPlateforme(hote);

  // Lien nettoyé : sans paramètres de suivi, sans ancre.
  const propre = new URL(u.toString());
  propre.hash = "";
  for (const k of [...propre.searchParams.keys()]) if (PARAMS_SUIVI.test(k)) propre.searchParams.delete(k);
  propre.searchParams.sort();

  const id = identifiant(plateforme, u);
  let cle: string;
  if (id) cle = `${plateforme}:${id}`;
  else {
    const chemin = propre.pathname.replace(/\/+$/, "") || "/";
    const q = propre.searchParams.toString();
    cle = `${hote}${chemin}${q ? `?${q}` : ""}`.toLowerCase();
  }
  return { url: propre.toString(), cle, plateforme };
}

/**
 * Découpe un texte collé : un ou plusieurs liens par ligne.
 * Les lignes sans lien sont renvoyées avec lien = null (pour les signaler).
 */
export function extraireLiens(texte: string): { ligne: string; lien: string | null }[] {
  const res: { ligne: string; lien: string | null }[] = [];
  for (const brute of texte.split(/\r?\n/)) {
    const ligne = brute.trim();
    if (!ligne) continue;
    const trouves = ligne.match(/(https?:\/\/[^\s<>"']+|www\.[^\s<>"']+)/gi);
    if (!trouves) res.push({ ligne, lien: null });
    else for (const l of trouves) res.push({ ligne, lien: l });
  }
  return res;
}
