import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  FRANCE_GEO_URN, buildPeopleSearchUrl, guessCompanyFromHeadline, isProfileUrl, normalizeProfileUrl, sameProfileUrl, splitName,
} from '../extension/lib/linkedin.js';

test('URL de recherche : mots-clés, 2e degré et France', () => {
  const url = new URL(buildPeopleSearchUrl({ keywords: '(gérant) AND (garage)', country: 'FR', network: 'second' }));
  assert.equal(url.origin + url.pathname, 'https://www.linkedin.com/search/results/people/');
  assert.equal(url.searchParams.get('keywords'), '(gérant) AND (garage)');
  assert.equal(url.searchParams.get('network'), '["S"]');
  assert.equal(url.searchParams.get('geoUrn'), `["${FRANCE_GEO_URN}"]`);
  assert.ok(!url.search.includes('+'), 'les espaces sont encodés en %20');
});

test('URL de recherche : 2e + 3e degré, tous pays', () => {
  const url = new URL(buildPeopleSearchUrl({ keywords: 'garage', country: 'ALL', network: 'wide' }));
  assert.equal(url.searchParams.get('network'), '["S","O"]');
  assert.equal(url.searchParams.get('geoUrn'), null);
});

test('reconnaît et normalise les URL de profil', () => {
  assert.ok(isProfileUrl('https://www.linkedin.com/in/jean-dupont-123/'));
  assert.ok(isProfileUrl('https://fr.linkedin.com/in/jean-dupont-123'));
  assert.ok(!isProfileUrl('https://www.linkedin.com/company/garage-dupont/'));
  assert.ok(!isProfileUrl('https://www.linkedin.com/search/results/people/?keywords=x'));
  assert.equal(
    normalizeProfileUrl('https://fr.linkedin.com/in/jean-dupont-123/overlay/contact-info/?trk=x'),
    'https://www.linkedin.com/in/jean-dupont-123',
  );
  assert.ok(sameProfileUrl('https://www.linkedin.com/in/Jean-Dupont/', 'https://linkedin.com/in/jean-dupont?x=1'));
  assert.ok(!sameProfileUrl('', ''));
});

test('découpe prénom / nom', () => {
  assert.deepEqual(splitName('Jean-Pierre Martin'), { firstName: 'Jean-Pierre', lastName: 'Martin' });
  assert.deepEqual(splitName('DUPONT Jean'), { firstName: 'Jean', lastName: 'DUPONT' });
  assert.deepEqual(splitName('Marie Dupont, MBA'), { firstName: 'Marie', lastName: 'Dupont' });
  assert.deepEqual(splitName('Karim Benali 🚗'), { firstName: 'Karim', lastName: 'Benali' });
  assert.deepEqual(splitName(''), { firstName: '', lastName: '' });
});

test('devine l’entreprise depuis le titre', () => {
  assert.equal(guessCompanyFromHeadline('Gérant chez Garage Dupont | Pneus & entretien'), 'Garage Dupont');
  assert.equal(guessCompanyFromHeadline('CEO @Sixt France'), 'Sixt France');
  assert.equal(guessCompanyFromHeadline('Directeur de site at Groupe Bernard - Lyon'), 'Groupe Bernard');
  assert.equal(guessCompanyFromHeadline('Dirigeant'), '');
});
