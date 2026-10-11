import { test } from 'node:test';
import assert from 'node:assert/strict';
import { DEFAULT_TEMPLATES, INVITATION_LIMIT, buildMessage, fillTemplate, missingVariables } from '../extension/lib/messages.js';

test('remplit les variables et retire les passages optionnels vides', () => {
  const template = 'Bonjour {prenom}, votre activité[ chez {entreprise}] me plaît.';
  assert.equal(fillTemplate(template, { prenom: 'Léa', entreprise: 'Garage Sud' }), 'Bonjour Léa, votre activité chez Garage Sud me plaît.');
  assert.equal(fillTemplate(template, { prenom: 'Léa', entreprise: '' }), 'Bonjour Léa, votre activité me plaît.');
});

test('une variable obligatoire vide reste visible', () => {
  const text = fillTemplate('Pour me présenter : {offre}', { offre: '' });
  assert.equal(text, 'Pour me présenter : {offre}');
  assert.deepEqual(missingVariables(text), ['offre']);
});

test('les notes d’invitation par défaut tiennent dans la limite LinkedIn', () => {
  const longProspect = { firstName: 'Jean-Christophe', company: 'Groupe Automobile Grand Sud Méditerranée', segment: '' };
  for (const segment of ['garage', 'concession', 'location', 'transport', '']) {
    const note = buildMessage('invitation', { ...longProspect, segment }, {}, DEFAULT_TEMPLATES);
    assert.ok(note.length <= INVITATION_LIMIT, `${segment || 'autre'} : ${note.length} caractères`);
    assert.deepEqual(missingVariables(note), []);
  }
});

test('message de présentation avec offre et lien', () => {
  const message = buildMessage('presentation', { firstName: 'Paul', company: 'Ucar Nice' }, { offre: 'je fais des vidéos.', lien: 'https://exemple.fr' }, DEFAULT_TEMPLATES);
  assert.ok(message.includes('Paul'));
  assert.ok(message.includes('je fais des vidéos.'));
  assert.ok(message.includes('https://exemple.fr'));
  assert.ok(message.includes('chez Ucar Nice'));
  const withoutLink = buildMessage('presentation', { firstName: 'Paul' }, { offre: 'x' }, DEFAULT_TEMPLATES);
  assert.ok(!withoutLink.includes('exemples'));
  assert.deepEqual(missingVariables(withoutLink), []);
});
