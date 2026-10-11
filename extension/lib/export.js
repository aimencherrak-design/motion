import { segmentLabel } from './segments.js';
import { statusLabel } from './pipeline.js';
import { sameProfileUrl } from './linkedin.js';

const COLUMNS = [
  ['Prénom', (p) => p.firstName],
  ['Nom', (p) => p.lastName],
  ['Entreprise', (p) => p.company],
  ['Titre', (p) => p.headline],
  ['Lieu', (p) => p.location],
  ['Secteur', (p) => segmentLabel(p.segment)],
  ['Priorité', (p) => p.priority],
  ['Score', (p) => p.score],
  ['Statut', (p) => statusLabel(p.status)],
  ['Profil', (p) => p.url],
  ['Notes', (p) => p.notes],
  ['Ajouté le', (p) => formatDate(p.createdAt)],
  ['Invité le', (p) => formatDate(p.statusDates?.invite)],
  ['Accepté le', (p) => formatDate(p.statusDates?.accepte)],
  ['Message le', (p) => formatDate(p.statusDates?.message)],
  ['Relancé le', (p) => formatDate(p.statusDates?.relance)],
];

export function formatDate(iso) {
  return iso ? new Date(iso).toLocaleDateString('fr-FR') : '';
}

function cell(value) {
  const text = String(value ?? '');
  return /[";\n\r]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
}

// CSV au format Excel français (séparateur « ; », BOM UTF-8 pour les accents).
export function toCSV(prospects) {
  const lines = [COLUMNS.map(([title]) => title), ...prospects.map((p) => COLUMNS.map(([, get]) => get(p)))];
  return '﻿' + lines.map((line) => line.map(cell).join(';')).join('\r\n');
}

// Fusionne une sauvegarde JSON : pour un même profil, la version la plus récente gagne.
export function mergeProspects(current, imported) {
  const result = [...current];
  for (const incoming of imported) {
    const index = result.findIndex((p) => p.id === incoming.id || sameProfileUrl(p.url, incoming.url));
    if (index === -1) result.push(incoming);
    else if ((incoming.updatedAt || '') > (result[index].updatedAt || '')) result[index] = incoming;
  }
  return result;
}
