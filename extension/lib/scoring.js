import { containsAny } from './text.js';
import { DETECTION_ORDER, EXCLUDED_TERMS, getSegment } from './segments.js';

// Grille de qualité : sert à n'ajouter que les profils qui valent le coup.
export const CRITERIA = [
  { id: 'decideur', label: 'Décisionnaire (dirigeant, gérant, directeur…)', points: 3 },
  { id: 'cible', label: 'Dans ma cible (garage, concession, location, transport)', points: 2 },
  { id: 'structure', label: 'Structure intéressante (plusieurs sites, flotte, groupe)', points: 2 },
  { id: 'actif', label: 'Actif sur LinkedIn (publie ou commente)', points: 2 },
  { id: 'commun', label: 'Relations en commun', points: 1 },
];

export const MAX_SCORE = CRITERIA.reduce((sum, criterion) => sum + criterion.points, 0);

const DECISION_TERMS = [
  'gerant', 'gerante', 'dirigeant', 'dirigeante', 'fondateur', 'fondatrice', 'cofondateur', 'co fondateur',
  'cofondatrice', 'co fondatrice', 'founder', 'cofounder', 'co founder', 'ceo', 'pdg', 'dg', 'president',
  'presidente', 'directeur', 'directrice', 'proprietaire', 'owner', 'chef d entreprise', 'managing director',
  'general manager', 'head of', 'associe', 'associee', 'responsable d agence', 'chef d agence', 'franchise',
  'franchisee',
];

const STRUCTURE_TERMS = ['groupe', 'group', 'reseau', 'agences', 'sites', 'flotte'];

export function detectSegment(...texts) {
  const text = texts.filter(Boolean).join(' ');
  return DETECTION_ORDER.find((id) => containsAny(text, getSegment(id).detect)) || '';
}

export function looksLikeDecisionMaker(headline) {
  if (containsAny(headline, EXCLUDED_TERMS)) return false;
  return containsAny(headline, DECISION_TERMS);
}

// Pré-coche ce qui peut être deviné depuis le profil ; le reste est à cocher à la main.
export function prefillCriteria({ headline = '', company = '', segment = '', mutual = false } = {}) {
  return {
    decideur: looksLikeDecisionMaker(headline),
    cible: Boolean(segment),
    structure: containsAny(`${headline} ${company}`, STRUCTURE_TERMS),
    actif: false,
    commun: Boolean(mutual),
  };
}

export function computeScore(criteria = {}) {
  return CRITERIA.reduce((sum, criterion) => sum + (criteria[criterion.id] ? criterion.points : 0), 0);
}

export function priorityFor(score) {
  if (score >= 7) return 'A';
  if (score >= 4) return 'B';
  return 'C';
}

export const PRIORITY_ADVICE = {
  A: 'Priorité A : à inviter maintenant, avec une note.',
  B: 'Priorité B : intéressant, à inviter si tu as encore des invitations cette semaine.',
  C: 'Priorité C : passe ton tour, ce profil ne t’apportera probablement pas grand-chose.',
};
