import { test } from 'node:test';
import assert from 'node:assert/strict';
import { computeScore, detectSegment, looksLikeDecisionMaker, prefillCriteria, priorityFor, MAX_SCORE } from '../extension/lib/scoring.js';

test('détection du secteur depuis le titre ou l’entreprise', () => {
  assert.equal(detectSegment('Gérant chez Garage Dupont'), 'garage');
  assert.equal(detectSegment('Directeur de site', 'Groupe Bernard - Concessionnaire Peugeot'), 'concession');
  assert.equal(detectSegment('Franchisé Ucar Lyon'), 'location');
  assert.equal(detectSegment('Fondateur | Convoyage de véhicules partout en France'), 'transport');
  assert.equal(detectSegment('Dirigeant - Transport de véhicules (porte-voitures)'), 'transport');
  assert.equal(detectSegment('Chef des ventes VN/VO'), 'concession');
  assert.equal(detectSegment('Développeur web'), '');
  assert.equal(detectSegment('Expert en géolocalisation'), '');
});

test('reconnaît un décideur et écarte stagiaires / étudiants', () => {
  assert.ok(looksLikeDecisionMaker('Gérante chez Carrosserie Martin'));
  assert.ok(looksLikeDecisionMaker('CEO @ Autodrive'));
  assert.ok(looksLikeDecisionMaker("Responsable d'agence Europcar"));
  assert.ok(!looksLikeDecisionMaker('Mécanicien automobile'));
  assert.ok(!looksLikeDecisionMaker('Stagiaire assistant directeur de concession'));
});

test('score et priorité', () => {
  assert.equal(MAX_SCORE, 10);
  const criteria = prefillCriteria({ headline: 'Directeur général - Groupe Auto Sud', company: 'Groupe Auto Sud', segment: 'concession', mutual: true });
  assert.deepEqual(criteria, { decideur: true, cible: true, structure: true, actif: false, commun: true });
  assert.equal(computeScore(criteria), 8);
  assert.equal(priorityFor(8), 'A');
  assert.equal(priorityFor(5), 'B');
  assert.equal(priorityFor(3), 'C');
});
