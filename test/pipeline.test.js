import { test } from 'node:test';
import assert from 'node:assert/strict';
import { DEFAULT_SETTINGS, computeTodos, invitesInLastDays, stats, withStatus } from '../extension/lib/pipeline.js';
import { mergeProspects, toCSV } from '../extension/lib/export.js';

const now = new Date('2026-10-11T10:00:00Z');
const daysAgo = (n) => new Date(now - n * 86400000).toISOString();
const prospect = (id, status, days, extra = {}) => ({ id, firstName: id, status, statusDates: { [status]: daysAgo(days) }, ...extra });

test('withStatus garde l’historique des dates', () => {
  const p = withStatus(prospect('a', 'invite', 3), 'accepte', now);
  assert.equal(p.status, 'accepte');
  assert.equal(p.statusDates.invite, daysAgo(3));
  assert.equal(p.statusDates.accepte, now.toISOString());
});

test('compte les invitations des 7 derniers jours', () => {
  const list = [prospect('a', 'invite', 1), prospect('b', 'invite', 6), prospect('c', 'invite', 8), prospect('d', 'a_contacter', 0)];
  assert.equal(invitesInLastDays(list, 7, now), 2);
});

test('liste des actions à faire, la plus urgente en premier', () => {
  const list = [
    prospect('inviter-B', 'a_contacter', 0, { score: 5 }),
    prospect('inviter-A', 'a_contacter', 0, { score: 9 }),
    prospect('accepte', 'accepte', 1),
    prospect('relance', 'message', 6),
    prospect('trop-tot', 'message', 2),
    prospect('attente', 'invite', 25),
    prospect('recent', 'invite', 3),
  ];
  const todos = computeTodos(list, DEFAULT_SETTINGS, now);
  assert.deepEqual(todos.map((t) => t.prospect.id), ['accepte', 'relance', 'inviter-A', 'inviter-B', 'attente']);
  assert.deepEqual(todos.map((t) => t.next), ['message', 'relance', 'invite', 'invite', 'archive']);
});

test('statistiques d’acceptation', () => {
  const list = [
    { statusDates: { invite: daysAgo(5), accepte: daysAgo(3) } },
    { statusDates: { invite: daysAgo(5) } },
    { statusDates: { a_contacter: daysAgo(1) } },
  ];
  assert.deepEqual(stats(list), { total: 3, invited: 2, accepted: 1, replied: 0, meetings: 0, acceptanceRate: 50 });
});

test('CSV Excel : BOM, séparateur ; et guillemets échappés', () => {
  const csv = toCSV([{ firstName: 'Léa', company: 'Garage "Le Sud"; Nice', status: 'invite', segment: 'garage', statusDates: {} }]);
  assert.ok(csv.startsWith('﻿Prénom;Nom;Entreprise'));
  assert.ok(csv.includes('"Garage ""Le Sud""; Nice"'));
  assert.ok(csv.includes(';Invité;'));
  assert.ok(csv.includes('Garages & ateliers'));
});

test('restauration : la version la plus récente gagne, sans doublon', () => {
  const current = [{ id: '1', url: 'https://www.linkedin.com/in/a', updatedAt: '2026-10-01' }];
  const merged = mergeProspects(current, [
    { id: 'x', url: 'https://linkedin.com/in/a/', updatedAt: '2026-10-05', notes: 'récent' },
    { id: '2', url: 'https://www.linkedin.com/in/b', updatedAt: '2026-10-02' },
  ]);
  assert.equal(merged.length, 2);
  assert.equal(merged[0].notes, 'récent');
});
