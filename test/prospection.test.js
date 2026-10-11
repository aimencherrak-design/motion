// Tests de la logique de prospection.html (le <script id="logic"> est chargé tel quel, sans navigateur).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';

const html = readFileSync(new URL('../prospection.html', import.meta.url), 'utf8');
const code = /<script id="logic">([\s\S]*?)<\/script>/.exec(html)[1];
const L = vm.runInNewContext(`${code}\nLogic`, { globalThis: { crypto: globalThis.crypto }, URL });

const FR_PROFILE = `Passer au contenu principal
Accueil
Mon réseau
Emplois
Messagerie
Notifications
Vous
Essayez Premium pour 0 EUR
Jean Dupont
Jean Dupont
 · 2e
Gérant chez Transports Dupont – Convoyage et porte-voitures
Saint-Louis, Grand Est, France  · Coordonnées
Transports Dupont
500 relations et plus
Se connecter
Message
Plus
Infos
Transport de véhicules toutes distances avec 3 porte-voitures. Toujours ouvert aux partenariats avec les garages.
…voir plus
Activité
1 234 abonnés
Posts
Jean Dupont a republié ceci • 2 sem •
Très fier de notre nouveau plateau !
Expérience
Gérant
Transports Dupont · Temps plein
janv. 2015 - aujourd’hui · 9 ans 10 mois
Formation
Université de Haute-Alsace`;

const DE_PROFILE = `Max Müller · 2.
Geschäftsführer bei Autohaus Müller GmbH
Lörrach, Baden-Württemberg, Deutschland
Kontaktinformationen
Über mich
Ihr Autohaus im Dreiländereck.
Aktivitäten
Max Müller hat das gepostet • 3 Mon. •
Berufserfahrung
Geschäftsführer
Autohaus Müller GmbH · Vollzeit
https://www.linkedin.com/in/max-mueller-123/`;

test('lit un profil LinkedIn collé (français, Ctrl+A)', () => {
  const p = L.parseProfileText(FR_PROFILE);
  assert.equal(p.name, 'Jean Dupont');
  assert.equal(p.title, 'Gérant chez Transports Dupont – Convoyage et porte-voitures');
  assert.equal(p.company, 'Transports Dupont');
  assert.equal(p.location, 'Saint-Louis, Grand Est, France');
  assert.match(p.about, /^Transport de véhicules.*garages\.$/);
  assert.equal(p.activity, 'recent');
});

test('lit un profil LinkedIn collé (allemand) et l’URL', () => {
  const p = L.parseProfileText(DE_PROFILE);
  assert.equal(p.name, 'Max Müller');
  assert.equal(p.title, 'Geschäftsführer bei Autohaus Müller GmbH');
  assert.equal(p.company, 'Autohaus Müller GmbH');
  assert.equal(p.location, 'Lörrach, Baden-Württemberg, Deutschland');
  assert.equal(p.activity, 'semester');
  assert.equal(p.url, 'https://www.linkedin.com/in/max-mueller-123');
});

test('collage partiel : sans degré, la première ligne qui ressemble à un nom', () => {
  const p = L.parseProfileText('Sophie Martin\nResponsable d’agence Ucar\nColmar, Grand Est, France');
  assert.equal(p.name, 'Sophie Martin');
  assert.equal(p.title, 'Responsable d’agence Ucar');
  assert.equal(p.location, 'Colmar, Grand Est, France');
  assert.equal(L.parseProfileText('https://fr.linkedin.com/in/abc-42?trk=x').url, 'https://www.linkedin.com/in/abc-42');
});

test('détecte la catégorie, la priorité allant aux transporteurs', () => {
  assert.equal(L.detectCategory({ title: 'Gérant - Convoyage de véhicules' }), 'transport');
  assert.equal(L.detectCategory({ title: 'Dirigeant', company: 'Dépôt-Vente Auto 68' }), 'depot');
  assert.equal(L.detectCategory({ title: 'Chef des ventes VN/VO', company: 'Groupe Bernard' }), 'concession');
  assert.equal(L.detectCategory({ title: 'Geschäftsführer', company: 'Autohaus Müller' }), 'concession');
  assert.equal(L.detectCategory({ title: 'Responsable de flotte', company: 'Rent A Car Mulhouse' }), 'loueur');
  assert.equal(L.detectCategory({ title: 'Inhaber', company: 'Fahrzeugüberführung Weber' }), 'transport');
  assert.equal(L.detectCategory({ title: 'Développeur web' }), '');
});

test('poste : décideur direct, responsabilité, junior', () => {
  assert.equal(L.decisionInfo('Gérante chez Ucar').points, 35);
  assert.equal(L.decisionInfo('Directeur général - Groupe X').points, 35);
  assert.equal(L.decisionInfo('Geschäftsführer').points, 35);
  assert.equal(L.decisionInfo('Chef des ventes VN').points, 25);
  assert.equal(L.decisionInfo('Verkaufsleiter').points, 25);
  assert.equal(L.decisionInfo('Mécanicien').points, 8);
  assert.equal(L.decisionInfo('Stagiaire assistant directeur').points, 0);
});

test('zone : distance à Mulhouse, pays, Europe', () => {
  assert.equal(L.zoneInfo('Mulhouse et périphérie').points, 25);
  assert.match(L.zoneInfo('Saint-Louis, Grand Est, France').text, /≈ 26 km/);
  assert.match(L.zoneInfo('Basel, Basel-Stadt, Schweiz').text, /≈ 30 km/);
  assert.equal(L.zoneInfo('Strasbourg, Bas-Rhin').points, 20);
  assert.equal(L.zoneInfo('Lyon, Auvergne-Rhône-Alpes, France').points, 15);
  assert.equal(L.zoneInfo('Lons-le-Saunier, Jura, France').text, 'en France, hors zone Mulhouse');
  assert.equal(L.zoneInfo('Zürich, Schweiz').points, 15);
  assert.equal(L.zoneInfo('Bruxelles, Belgique').points, 8);
  assert.equal(L.zoneInfo('').points, 5);
  assert.equal(L.zoneInfo('Lyon', 'FR').points, 15);
});

test('langue suggérée pour la note', () => {
  assert.equal(L.suggestLang('', 'Lörrach, Deutschland'), 'de');
  assert.equal(L.suggestLang('CH', 'Basel'), 'de');
  assert.equal(L.suggestLang('CH', 'Genève, Suisse'), 'fr');
  assert.equal(L.suggestLang('CH', 'Porrentruy, Jura, Suisse'), 'fr');
  assert.equal(L.suggestLang('FR', 'Colmar'), 'fr');
});

test('score sur 100 avec une phrase d’explication', () => {
  const parsed = L.parseProfileText(FR_PROFILE);
  const p = { ...parsed, city: parsed.location, category: L.detectCategory(parsed), country: L.detectCountry(parsed.location) };
  const s = L.scoreProspect(p);
  assert.equal(s.score, 100);
  assert.equal(s.level, 'hot');
  assert.equal(
    s.explanation,
    'Transporteur (cible n°1), gérant = décideur direct, à ≈ 26 km de Mulhouse (Saint-Louis), actif ce mois-ci, ouvert aux partenariats.',
  );
  const weak = L.scoreProspect({ title: 'Commercial', city: 'Madrid, España', category: '' });
  assert.ok(weak.score < 30, `score faible attendu : ${weak.score}`);
  assert.equal(weak.level, 'cold');
  assert.equal((weak.explanation.match(/\./g) || []).length, 1);
});

test('notes : 2 versions, 200 caractères max, toutes catégories et langues', () => {
  const long = {
    name: 'Marie-Christine Schneider-Lefebvre', company: 'Transports et Convoyages Automobiles du Grand Sud-Alsace SARL',
    city: 'Kingersheim, Grand Est, France',
  };
  for (const lang of ['fr', 'de']) {
    for (const category of ['transport', 'depot', 'concession', 'loueur', '']) {
      const notes = L.buildNotes({ ...long, category, lang });
      assert.equal(notes.length, 2);
      for (const note of notes) {
        assert.ok(note.length <= L.NOTE_MAX, `${lang}/${category} : ${note.length} caractères`);
        assert.ok(!/[{}[\]]/.test(note), note);
        assert.ok(note.includes('Marie-Christine'), `le prénom reste : ${note}`);
      }
    }
  }
  const [soft] = L.buildNotes({ name: 'Paul Weber', company: 'Autohaus Weber GmbH', city: 'Lörrach', category: 'concession', country: 'DE' });
  assert.ok(soft.startsWith('Hallo Paul,'));
  assert.ok(soft.includes('bei Autohaus Weber ist'), soft);
  const [, direct] = L.buildNotes({ name: 'Léa Roth', city: 'Grand Est, France', category: 'transport' });
  assert.ok(!direct.includes('autour de'), direct);
  assert.ok(L.buildNotes({ category: 'depot' })[0].startsWith('Bonjour, votre dépôt-vente a retenu'));
});

test('liens de recherche LinkedIn, Google et Maps', () => {
  const { groups, maps } = L.buildSearchLinks('transport', 'local', 'wide');
  assert.deepEqual([...groups.map((g) => g.lang)], ['fr', 'de']);
  const main = new URL(groups[0].links[0].url);
  assert.equal(main.origin + main.pathname, 'https://www.linkedin.com/search/results/people/');
  assert.match(main.searchParams.get('keywords'), /^\(gérant OR .+\) AND \("transport de véhicules" OR .+\) NOT \(stagiaire/);
  assert.equal(main.searchParams.get('geoUrn'), '["105015875","106693272"]');
  assert.equal(main.searchParams.get('network'), '["S","O"]');
  assert.ok(!main.search.includes('+'));
  const cities = new URL(groups[0].links[1].url).searchParams.get('keywords');
  assert.match(cities, /AND \(Mulhouse OR Colmar OR "Saint-Louis"/);
  const google = new URL(groups[0].links[2].url).searchParams.get('q');
  assert.ok(google.startsWith('site:linkedin.com/in ('));
  assert.ok(google.split(/\s+/).length <= 32, 'Google limite à 32 mots');
  assert.equal(groups[1].titles[0].label, 'Geschäftsführer');
  assert.ok(maps.some((m) => decodeURIComponent(m.url).endsWith('Fahrzeugtransport Basel')));

  const de = L.buildSearchLinks('loueur', 'de', 'second');
  assert.equal(de.groups.length, 1);
  assert.equal(new URL(de.groups[0].links[0].url).searchParams.get('geoUrn'), '["101282230"]');
  assert.equal(new URL(de.groups[0].links[0].url).searchParams.get('network'), '["S"]');
  assert.equal(de.maps.length, 0);
  const eu = L.buildSearchLinks('depot', 'eu');
  assert.equal(new URL(eu.groups[0].links[0].url).searchParams.get('geoUrn'), null);
});

test('statuts : dates de relance et alertes', () => {
  const now = new Date(2026, 9, 11, 10, 0);
  const base = { id: '1', status: 'identifie', sentAt: '', followUp: '' };
  const sent = L.applyStatus(base, 'envoyee', now);
  assert.equal(sent.followUp, '2026-10-18');
  assert.ok(sent.sentAt);
  assert.equal(L.applyStatus(sent, 'accepte', now).followUp, '2026-10-11');
  assert.equal(L.applyStatus(sent, 'message', now).followUp, '2026-10-15');
  assert.equal(L.applyStatus({ ...sent, followUp: '2026-11-02' }, 'rdv', now).followUp, '2026-11-02');
  assert.equal(L.applyStatus(sent, 'signe', now).followUp, '');
  assert.equal(L.applyStatus(sent, 'identifie', now).sentAt, '');
  assert.equal(L.followState({ status: 'message', followUp: '2026-10-09' }, '2026-10-11').state, 'late');
  assert.equal(L.followState({ status: 'message', followUp: '2026-10-09' }, '2026-10-11').days, 2);
  assert.equal(L.followState({ status: 'accepte', followUp: '2026-10-11' }, '2026-10-11').state, 'today');
  assert.equal(L.followState({ status: 'envoyee', followUp: '2026-10-20' }, '2026-10-11').state, 'later');
  assert.equal(L.followState({ status: 'perdu', followUp: '2026-10-01' }, '2026-10-11').state, '');
  assert.equal(L.addDays('2026-12-30', 3), '2027-01-02');
});

test('messages après acceptation et relance', () => {
  const p = { name: 'Jean Dupont', city: 'Mulhouse', category: 'depot', status: 'accepte' };
  const first = L.messageFor(p);
  assert.equal(first.label, '1er message');
  assert.match(first.text, /^Merci pour la connexion, Jean !/);
  assert.match(first.text, /forfait quand un vendeur signe un mandat/);
  assert.equal(L.messageFor({ ...p, status: 'relance', city: 'Basel' }).label, 'Relance');
  assert.match(L.messageFor({ ...p, status: 'relance', city: 'Basel' }).text, /^Hallo Jean/);
  assert.equal(L.messageFor({ ...p, status: 'envoyee' }), null);
});

test('CSV : export puis import sans perte, Excel et CRM', () => {
  const prospects = [
    {
      id: 'a1', name: 'Jean Dupont', firstName: 'Jean', title: 'Gérant; "boss"', company: '=Transports', city: 'Mulhouse',
      country: 'FR', url: 'https://www.linkedin.com/in/jean', category: 'transport', activity: 'recent', status: 'envoyee',
      followUp: '2026-10-18', addedAt: '2026-10-11T08:00:00.000Z', sentAt: '2026-10-11T08:05:00.000Z',
      statusAt: '2026-10-11T08:05:00.000Z', lang: '', notes: 'ligne 1\nligne 2', about: 'À propos, avec virgule',
    },
  ];
  const csv = L.toCSV(prospects);
  assert.ok(csv.startsWith('﻿id;nom;prenom;poste'));
  assert.ok(csv.includes(";'=Transports;"), 'formule neutralisée pour Excel');
  assert.ok(csv.includes(';Transporteur;'));
  assert.ok(csv.includes(';Demande envoyée;'));
  const back = L.fromCSV(csv);
  assert.equal(back.length, 1);
  const { _present, ...p } = back[0];
  assert.deepEqual(p, prospects[0]);
  assert.ok(_present.includes('status'));

  const crm = 'Nom,Entreprise,Ville,Statut,Date relance\n"Paul Weber",Autohaus Weber,"Lörrach, Deutschland",Accepté,18/10/2026\n';
  const [imported] = L.fromCSV(crm);
  assert.equal(imported.name, 'Paul Weber');
  assert.equal(imported.status, 'accepte');
  assert.equal(imported.followUp, '2026-10-18');
  assert.equal(imported.country, 'DE');
  assert.equal(imported.category, 'concession');
});

test('fusion à l’import : mise à jour par URL ou nom + entreprise, sans écraser les champs absents', () => {
  const current = [
    { id: '1', name: 'Jean Dupont', company: 'TD', url: 'https://www.linkedin.com/in/jean', notes: 'garder', status: 'envoyee' },
    { id: '2', name: 'Paul Weber', company: 'Autohaus Weber', url: '', status: 'identifie' },
  ];
  const incoming = L.fromCSV('nom;url;statut\nJ. Dupont;https://fr.linkedin.com/in/jean/;Accepté\nNouveau Contact;;\n');
  const byName = L.fromCSV('nom;entreprise;statut\nPaul Weber;Autohaus Weber;RDV\n');
  const { list, added, updated } = L.mergeProspects(current, [...incoming, ...byName]);
  assert.equal(added, 1);
  assert.equal(updated, 2);
  assert.equal(list[0].id, '1');
  assert.equal(list[0].status, 'accepte');
  assert.equal(list[0].notes, 'garder');
  assert.equal(list[1].status, 'rdv');
  assert.equal(list[2].name, 'Nouveau Contact');
});

test('nettoyage des villes, entreprises et noms', () => {
  assert.equal(L.cleanCity('Greater Basel Area'), 'Bâle');
  assert.equal(L.cleanCity('Greater Basel Area', 'de'), 'Basel');
  assert.equal(L.cleanCity('Mulhouse et périphérie'), 'Mulhouse');
  assert.equal(L.cleanCity('Grand Est, France'), '');
  assert.equal(L.cleanCompany('Autohaus Weber GmbH & Co. KG'), 'Autohaus Weber');
  assert.equal(L.cleanCompany('Transports Dupont SARL'), 'Transports Dupont');
  assert.deepEqual({ ...L.splitName('DUPONT Jean') }, { firstName: 'Jean', lastName: 'DUPONT' });
});

test('statistiques : le taux d’acceptation ne dépasse jamais 100 %', () => {
  const st = L.stats([
    { status: 'accepte', sentAt: '2026-10-01T08:00:00Z' },
    { status: 'message', sentAt: '' },
    { status: 'envoyee', sentAt: '2026-10-02T08:00:00Z' },
    { status: 'identifie', sentAt: '' },
  ]);
  assert.equal(st.sent, 3);
  assert.equal(st.accepted, 2);
  assert.equal(st.acceptance, 67);
  assert.equal(st.queued, 1);
});
