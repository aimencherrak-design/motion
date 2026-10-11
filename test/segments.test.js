import { test } from 'node:test';
import assert from 'node:assert/strict';
import { SEGMENTS, buildKeywordQuery } from '../extension/lib/segments.js';

test('chaque secteur produit une requête booléenne (rôles) AND (secteur) NOT (exclusions)', () => {
  for (const segment of SEGMENTS) {
    const query = buildKeywordQuery(segment.id);
    assert.match(query, /^\(.+\) AND \(.+\) NOT \(.+\)$/);
  }
});

test('les expressions de plusieurs mots sont entre guillemets', () => {
  const query = buildKeywordQuery('transport');
  assert.ok(query.includes('"transport de véhicules"'));
  assert.ok(query.includes('"porte-voitures"'));
  assert.ok(query.includes('"directeur d\'exploitation"'));
  assert.ok(query.includes(' convoyage '));
});

test('secteur inconnu -> requête vide', () => {
  assert.equal(buildKeywordQuery('nope'), '');
});
