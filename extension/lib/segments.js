// Les secteurs ciblés. Pour chacun :
// - roles / sector : mots-clés de la recherche LinkedIn (recherche booléenne)
// - detect : mots qui permettent de reconnaître le secteur dans un titre de profil
export const SEGMENTS = [
  {
    id: 'garage',
    label: 'Garages & ateliers',
    roles: ['gérant', 'gérante', 'dirigeant', 'dirigeante', 'fondateur', 'fondatrice', 'propriétaire', 'PDG', 'président', 'présidente', "chef d'entreprise"],
    sector: ['garage', 'garagiste', 'carrosserie', 'centre auto', 'atelier mécanique', 'réparation automobile'],
    detect: ['garage', 'garagiste', 'carrosserie', 'carrossier', 'centre auto', 'atelier mecanique', 'reparation automobile', 'mecanique automobile', 'entretien automobile'],
  },
  {
    id: 'concession',
    label: 'Concessions',
    roles: ['directeur de concession', 'directrice de concession', 'directeur de site', 'directrice de site', 'directeur général', 'directrice générale', 'dirigeant', 'dirigeante', 'président', 'présidente', 'PDG'],
    sector: ['concession', 'concessionnaire', 'groupe automobile', 'distributeur automobile', 'agent automobile'],
    detect: ['concession', 'concessionnaire', 'groupe automobile', 'distributeur automobile', 'distribution automobile', 'agent automobile', 'vn', 'vo', 'vehicules neufs', 'vehicules d occasion'],
  },
  {
    id: 'location',
    label: 'Location de véhicules',
    roles: ['gérant', 'gérante', 'dirigeant', 'dirigeante', 'fondateur', 'fondatrice', 'franchisé', 'franchisée', "directeur d'agence", "directrice d'agence", "responsable d'agence"],
    sector: ['location de véhicules', 'location de voitures', "location d'utilitaires", 'location automobile', 'location longue durée', 'loueur'],
    detect: ['location de vehicules', 'location de voitures', 'location de voiture', 'location d utilitaires', 'location automobile', 'location courte duree', 'location longue duree', 'agence de location', 'loueur', 'rent a car', 'rental', 'leasing', 'lld', 'europcar', 'hertz', 'sixt', 'ucar', 'location'],
  },
  {
    id: 'transport',
    label: 'Transport de véhicules',
    roles: ['dirigeant', 'dirigeante', 'gérant', 'gérante', 'fondateur', 'fondatrice', 'PDG', 'président', 'présidente', 'directeur général', 'directrice générale', "directeur d'exploitation"],
    sector: ['transport de véhicules', 'convoyage', 'porte-voitures', 'logistique automobile', 'jockeying'],
    detect: ['transport de vehicules', 'transport de voitures', 'convoyage', 'convoyeur', 'convoyeuse', 'porte voitures', 'porte voiture', 'logistique automobile', 'jockeying'],
  },
];

// Ordre de détection : du plus spécifique au plus général
// ("transport de véhicules" ne doit pas finir en "location", etc.).
export const DETECTION_ORDER = ['transport', 'location', 'concession', 'garage'];

// Profils écartés de la recherche : ce ne sont pas des décideurs.
export const EXCLUDED_TERMS = ['stagiaire', 'alternant', 'alternante', 'étudiant', 'étudiante', 'recruteur', 'recruteuse', 'chargé de recrutement'];

export function getSegment(id) {
  return SEGMENTS.find((segment) => segment.id === id) || null;
}

export function segmentLabel(id) {
  return getSegment(id)?.label || 'Autre';
}

function quote(term) {
  return /[\s'-]/.test(term) ? `"${term}"` : term;
}

function orGroup(terms) {
  return `(${terms.map(quote).join(' OR ')})`;
}

// Construit la requête booléenne à coller dans la recherche LinkedIn
// (ou dans Sales Navigator) : (rôles) AND (secteur) NOT (exclusions).
export function buildKeywordQuery(segmentId, { exclude = true } = {}) {
  const segment = getSegment(segmentId);
  if (!segment) return '';
  let query = `${orGroup(segment.roles)} AND ${orGroup(segment.sector)}`;
  if (exclude) query += ` NOT ${orGroup(EXCLUDED_TERMS)}`;
  return query;
}
