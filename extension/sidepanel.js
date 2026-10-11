import { SEGMENTS, buildKeywordQuery, segmentLabel } from './lib/segments.js';
import {
  NETWORK_OPTIONS, buildPeopleSearchUrl, extractProfileFromPage, guessCompanyFromHeadline,
  isProfileUrl, normalizeProfileUrl, sameProfileUrl, splitName,
} from './lib/linkedin.js';
import { CRITERIA, MAX_SCORE, PRIORITY_ADVICE, computeScore, detectSegment, prefillCriteria, priorityFor } from './lib/scoring.js';
import { DEFAULT_TEMPLATES, INVITATION_LIMIT, TEMPLATE_LABELS, buildMessage, missingVariables } from './lib/messages.js';
import { STATUSES, computeTodos, invitesInLastDays, stats, statusLabel, withStatus } from './lib/pipeline.js';
import { loadState, saveProspects, saveSettings, saveTemplates } from './lib/storage.js';
import { formatDate, mergeProspects, toCSV } from './lib/export.js';
import { normalize } from './lib/text.js';

const $ = (selector) => document.querySelector(selector);
const FIELDS = ['firstName', 'lastName', 'headline', 'company', 'location', 'segment', 'url', 'notes'];
const TODO_PREVIEW = 15;
const DONE_LABELS = {
  invitation: 'Invitation envoyée ✓',
  presentation: 'Message envoyé ✓',
  relance: 'Relance envoyée ✓',
  retirer: 'Retirée ✓',
  archiver: 'Archiver',
};

let state = { prospects: [], settings: {}, templates: {} };
let draft = emptyDraft();
let noteEdited = false;
let selectedSegment = SEGMENTS[0].id;
let showAllTodos = false;

// ---------- Utilitaires ----------

function h(tag, attrs = {}, ...children) {
  const el = document.createElement(tag);
  for (const [key, value] of Object.entries(attrs)) {
    if (value == null || value === false) continue;
    if (key === 'class') el.className = value;
    else if (key.startsWith('on')) el.addEventListener(key.slice(2), value);
    else el.setAttribute(key, value === true ? '' : value);
  }
  el.append(...children.flat().filter((child) => child != null && child !== false));
  return el;
}

function button(label, onclick, className = '') {
  return h('button', { type: 'button', class: className, onclick }, label);
}

function emptyDraft() {
  return {
    id: null, firstName: '', lastName: '', headline: '', company: '', location: '', segment: '', url: '', notes: '',
    criteria: Object.fromEntries(CRITERIA.map((criterion) => [criterion.id, false])),
  };
}

function fullName(prospect) {
  return [prospect.firstName, prospect.lastName].filter(Boolean).join(' ') || prospect.url || 'Sans nom';
}

function priorityBadge(priority) {
  return h('span', { class: `priority p-${priority || 'C'}` }, priority || 'C');
}

function toast(message, kind = '') {
  const el = $('#toast');
  el.textContent = message;
  el.className = `toast ${kind}`;
  el.hidden = false;
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => { el.hidden = true; }, 3000);
}

async function copy(text, message = 'Copié !') {
  try {
    await navigator.clipboard.writeText(text);
    toast(message);
  } catch {
    toast('Copie impossible : sélectionne le texte et fais Ctrl+C.', 'warn');
  }
}

// Deux clics pour les actions qui ne s'annulent pas.
function confirmClick(el, action) {
  if (el.dataset.confirming) {
    clearTimeout(Number(el.dataset.confirming));
    el.textContent = el.dataset.label;
    delete el.dataset.confirming;
    el.classList.remove('confirm');
    action();
    return;
  }
  el.dataset.label = el.textContent;
  el.textContent = 'Confirmer ?';
  el.classList.add('confirm');
  el.dataset.confirming = String(setTimeout(() => {
    el.textContent = el.dataset.label;
    delete el.dataset.confirming;
    el.classList.remove('confirm');
  }, 3000));
}

function download(filename, content, type) {
  const url = URL.createObjectURL(new Blob([content], { type }));
  h('a', { href: url, download: filename }).click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

async function activeTab() {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  return tab;
}

async function openUrl(url) {
  const tab = await activeTab();
  if (tab && /^https:\/\/www\.linkedin\.com\//.test(tab.url || '')) await chrome.tabs.update(tab.id, { url });
  else await chrome.tabs.create({ url });
}

function findExisting(prospect) {
  return state.prospects.find((p) => (prospect.id && p.id === prospect.id) || sameProfileUrl(p.url, prospect.url));
}

async function persist() {
  await saveProspects(state.prospects);
  renderQuota();
  renderTodoCount();
}

async function upsert(prospect) {
  const index = state.prospects.findIndex((p) => p.id === prospect.id);
  if (index === -1) state.prospects.push(prospect);
  else state.prospects[index] = prospect;
  await persist();
}

function warnIfOverQuota() {
  const used = invitesInLastDays(state.prospects);
  if (used > state.settings.weeklyInviteLimit) {
    toast(`${used} invitations en 7 jours : fais une pause pour protéger ton compte.`, 'warn');
    return true;
  }
  return false;
}

async function updateStatus(prospect, status) {
  await upsert(withStatus(prospect, status));
  if (status !== 'invite' || !warnIfOverQuota()) toast(`Statut : ${statusLabel(status)}`);
  renderFollow();
}

// ---------- Onglets ----------

function showTab(name) {
  document.querySelectorAll('.tab').forEach((tab) => tab.classList.toggle('active', tab.dataset.tab === name));
  document.querySelectorAll('.panel').forEach((panel) => panel.classList.toggle('active', panel.id === `panel-${name}`));
  if (name === 'follow') renderFollow();
  if (name === 'prospect') refreshProfileHint();
}

function renderQuota() {
  const used = invitesInLastDays(state.prospects);
  const limit = state.settings.weeklyInviteLimit;
  const ratio = Math.min(used / limit, 1);
  $('#quota-text').textContent = `${used} / ${limit} cette semaine`;
  $('#quota-fill').style.width = `${ratio * 100}%`;
  $('#quota').className = `quota${used >= limit ? ' over' : ratio >= 0.8 ? ' near' : ''}`;
}

function renderTodoCount() {
  const count = computeTodos(state.prospects, state.settings).filter((todo) => todo.kind !== 'invitation').length;
  const badge = $('#todo-count');
  badge.textContent = count;
  badge.hidden = count === 0;
}

// ---------- Rechercher ----------

function renderSearch() {
  $('#segment-chips').replaceChildren(
    ...SEGMENTS.map((segment) =>
      h('button', {
        type: 'button',
        class: `chip${segment.id === selectedSegment ? ' active' : ''}`,
        onclick: () => { selectedSegment = segment.id; renderSearch(); },
      }, segment.label),
    ),
  );
  $('#search-query').value = buildKeywordQuery(selectedSegment);
  $('#search-country').value = state.settings.country;
  $('#search-network').value = state.settings.network;
}

async function saveSearchOptions() {
  state.settings = { ...state.settings, country: $('#search-country').value, network: $('#search-network').value };
  await saveSettings(state.settings);
}

function openSearch() {
  const keywords = $('#search-query').value.trim();
  if (!keywords) return toast('La requête est vide.', 'warn');
  openUrl(buildPeopleSearchUrl({ keywords, country: state.settings.country, network: state.settings.network }));
}

// ---------- Prospect ----------

const form = $('#prospect-form');

function fillForm() {
  for (const field of FIELDS) form.elements[field].value = draft[field] || '';
  renderCriteria();
  renderScore();
  renderExisting();
  if (!noteEdited) $('#invite-note').value = buildMessage('invitation', draft, state.settings, state.templates);
  renderNoteMeta();
}

function readForm() {
  for (const field of FIELDS) draft[field] = form.elements[field].value.trim();
}

function renderCriteria() {
  $('#criteria').replaceChildren(
    ...CRITERIA.map((criterion) =>
      h('label', { class: 'check' },
        h('input', { type: 'checkbox', 'data-criterion': criterion.id, checked: Boolean(draft.criteria[criterion.id]) }),
        h('span', {}, criterion.label),
        h('span', { class: 'pts' }, `+${criterion.points}`),
      ),
    ),
  );
}

function renderScore() {
  const score = computeScore(draft.criteria);
  const priority = priorityFor(score);
  const badge = $('#priority-badge');
  badge.textContent = priority;
  badge.className = `priority p-${priority}`;
  $('#score-text').textContent = `${score} / ${MAX_SCORE}`;
  $('#priority-advice').textContent = PRIORITY_ADVICE[priority];
}

function renderNoteMeta() {
  const note = $('#invite-note').value;
  const count = $('#note-count');
  count.textContent = `${note.length} / ${INVITATION_LIMIT}`;
  count.classList.toggle('over', note.length > INVITATION_LIMIT);
  const problems = [];
  const missing = missingVariables(note);
  if (missing.length) problems.push(`À compléter : ${missing.map((name) => `{${name}}`).join(', ')}.`);
  if (note.length > INVITATION_LIMIT) problems.push(`Trop long : LinkedIn limite la note à ${INVITATION_LIMIT} caractères.`);
  $('#note-warning').textContent = problems.join(' ');
  $('#note-warning').hidden = problems.length === 0;
}

function renderExisting() {
  const existing = findExisting(draft);
  const banner = $('#existing-banner');
  $('#save-prospect').textContent = existing ? 'Mettre à jour' : 'Enregistrer';
  if (!existing) {
    banner.hidden = true;
    return;
  }
  const since = formatDate(existing.statusDates?.[existing.status]);
  banner.textContent = `Déjà dans ta liste : ${statusLabel(existing.status)}${since ? ` depuis le ${since}` : ''}.`;
  banner.hidden = false;
}

async function refreshProfileHint() {
  const tab = await activeTab();
  const hint = $('#profile-hint');
  if (!tab || !isProfileUrl(tab.url)) {
    hint.textContent = 'Ouvre un profil LinkedIn puis clique sur « Récupérer ce profil ». Tu peux aussi remplir la fiche à la main.';
    hint.classList.remove('ready');
    return;
  }
  const existing = state.prospects.find((p) => sameProfileUrl(p.url, tab.url));
  hint.textContent = existing
    ? `Profil ouvert : ${fullName(existing)}, déjà dans ta liste (${statusLabel(existing.status)}).`
    : 'Profil LinkedIn ouvert : clique sur « Récupérer ce profil ».';
  hint.classList.add('ready');
}

async function grabProfile() {
  const tab = await activeTab();
  if (!tab || !isProfileUrl(tab.url)) {
    toast("Ouvre d'abord un profil LinkedIn (linkedin.com/in/…).", 'warn');
    return;
  }
  let data;
  try {
    [{ result: data }] = await chrome.scripting.executeScript({ target: { tabId: tab.id }, func: extractProfileFromPage });
  } catch {
    toast('Impossible de lire la page : recharge le profil puis réessaie.', 'warn');
    return;
  }
  const url = normalizeProfileUrl(data?.url || tab.url);
  const existing = state.prospects.find((p) => sameProfileUrl(p.url, url));
  noteEdited = false;
  if (existing) {
    draft = structuredClone(existing);
    fillForm();
    toast('Ce profil est déjà dans ta liste.');
    return;
  }
  const { firstName, lastName } = splitName(data?.fullName);
  const headline = data?.headline || '';
  const company = data?.company || guessCompanyFromHeadline(headline);
  const segment = detectSegment(headline, company);
  draft = {
    ...emptyDraft(), firstName, lastName, headline, company, segment, url,
    location: data?.location || '',
    criteria: prefillCriteria({ headline, company, segment, mutual: data?.mutual }),
  };
  fillForm();
  toast(firstName ? 'Profil récupéré : vérifie les infos et le score.' : 'Infos partielles : complète la fiche à la main.');
}

function draftToProspect() {
  readForm();
  if (!draft.firstName && !draft.lastName && !draft.url) {
    toast('Ajoute au moins un nom ou l’URL du profil.', 'warn');
    return null;
  }
  const existing = findExisting(draft);
  const now = new Date().toISOString();
  const score = computeScore(draft.criteria);
  const base = existing || { id: crypto.randomUUID(), createdAt: now, status: 'a_contacter', statusDates: { a_contacter: now } };
  const fields = Object.fromEntries(FIELDS.map((field) => [field, draft[field]]));
  return {
    ...base,
    ...fields,
    url: draft.url ? normalizeProfileUrl(draft.url) : '',
    criteria: { ...draft.criteria },
    score,
    priority: priorityFor(score),
    updatedAt: now,
  };
}

async function saveDraft() {
  const prospect = draftToProspect();
  if (!prospect) return;
  await upsert(prospect);
  draft = structuredClone(prospect);
  renderExisting();
  refreshProfileHint();
  toast('Prospect enregistré.');
}

async function markInvited(event) {
  const prospect = draftToProspect();
  if (!prospect) return;
  if (prospect.status === 'invite') return toast('Déjà noté comme invité.');
  const save = async () => {
    await upsert(withStatus(prospect, 'invite'));
    draft = structuredClone(findExisting(prospect));
    renderExisting();
    refreshProfileHint();
    if (!warnIfOverQuota()) toast('Invitation notée. Passe-le en « Accepté » dans Suivi quand il accepte.');
  };
  // Un prospect déjà plus loin (accepté, en discussion…) ne revient en arrière qu'après confirmation.
  if (prospect.status !== 'a_contacter') confirmClick(event.currentTarget, save);
  else await save();
}

function onFormInput(event) {
  const target = event.target;
  if (target.id === 'invite-note') {
    noteEdited = true;
    renderNoteMeta();
    return;
  }
  if (target.dataset.criterion) {
    draft.criteria[target.dataset.criterion] = target.checked;
  } else {
    readForm();
    if (target.name === 'segment') {
      draft.criteria.cible = Boolean(draft.segment);
      renderCriteria();
    }
    if (target.name === 'url') renderExisting();
  }
  renderScore();
  if (!noteEdited) {
    $('#invite-note').value = buildMessage('invitation', draft, state.settings, state.templates);
    renderNoteMeta();
  }
}

function editProspect(prospect) {
  draft = structuredClone(prospect);
  noteEdited = false;
  fillForm();
  showTab('prospect');
}

// ---------- Suivi ----------

function renderFollow() {
  renderStats();
  renderTodos();
  renderList();
}

function renderStats() {
  const s = stats(state.prospects);
  const item = (value, label) => h('div', { class: 'stat' }, h('strong', {}, String(value)), h('span', {}, label));
  $('#stats').replaceChildren(
    item(s.total, 'prospects'),
    item(s.invited, 'invités'),
    item(s.acceptanceRate == null ? '–' : `${s.acceptanceRate} %`, 'acceptent'),
    item(s.replied, 'réponses'),
    item(s.meetings, 'RDV'),
  );
}

function renderTodos() {
  const todos = computeTodos(state.prospects, state.settings);
  const container = $('#todos');
  if (todos.length === 0) {
    container.replaceChildren(h('div', { class: 'card empty' }, 'Rien d’urgent. Va chercher de nouveaux décideurs dans « Rechercher ».'));
    return;
  }
  const visible = showAllTodos ? todos : todos.slice(0, TODO_PREVIEW);
  const cards = visible.map((todo) => {
    const p = todo.prospect;
    const messageKind = ['invitation', 'presentation', 'relance'].includes(todo.kind) ? todo.kind : null;
    return h('div', { class: `todo todo-${todo.kind}` },
      h('div', { class: 'todo-head' },
        priorityBadge(p.priority),
        h('strong', {}, fullName(p)),
        p.company && h('span', { class: 'muted' }, p.company),
      ),
      h('div', { class: 'todo-label' }, todo.label),
      h('div', { class: 'actions compact' },
        p.url && button('Ouvrir le profil', () => openUrl(p.url)),
        messageKind && button('Copier le message', () => {
          const message = buildMessage(messageKind, p, state.settings, state.templates);
          const missing = missingVariables(message);
          if (missing.includes('offre')) return toast('Renseigne d’abord ton offre dans Réglages.', 'warn');
          copy(message, missing.length ? `Copié, mais il manque : ${missing.join(', ')}` : 'Message copié !');
        }),
        button(DONE_LABELS[todo.kind], () => updateStatus(p, todo.next), 'primary'),
      ),
    );
  });
  if (todos.length > TODO_PREVIEW) {
    cards.push(button(showAllTodos ? 'Afficher moins' : `Afficher tout (${todos.length})`, () => {
      showAllTodos = !showAllTodos;
      renderTodos();
    }, 'link'));
  }
  container.replaceChildren(...cards);
}

const QUICK_NEXT = {
  invite: ['accepte', 'A accepté ✓'],
  message: ['reponse', 'A répondu ✓'],
  relance: ['reponse', 'A répondu ✓'],
  reponse: ['rdv', 'RDV ✓'],
};

function renderList() {
  const text = normalize($('#filter-text').value);
  const status = $('#filter-status').value;
  const list = state.prospects
    .filter((p) => !status || p.status === status)
    .filter((p) => !text || normalize(`${fullName(p)} ${p.company} ${p.headline}`).includes(text))
    .sort((a, b) => (b.updatedAt || '').localeCompare(a.updatedAt || ''));
  const container = $('#prospect-list');
  if (list.length === 0) {
    container.replaceChildren(h('div', { class: 'card empty' }, state.prospects.length ? 'Aucun résultat.' : 'Aucun prospect pour l’instant.'));
    return;
  }
  container.replaceChildren(
    ...list.map((p) => {
      const select = h('select', { class: 'status-select', onchange: (e) => updateStatus(p, e.target.value) },
        ...STATUSES.map((s) => h('option', { value: s.id, selected: s.id === p.status }, s.label)),
      );
      const quick = QUICK_NEXT[p.status];
      const remove = button('Supprimer', (e) => confirmClick(e.currentTarget, async () => {
        state.prospects = state.prospects.filter((x) => x.id !== p.id);
        await persist();
        renderFollow();
      }), 'link danger');
      return h('div', { class: 'item' },
        h('div', { class: 'item-main' },
          priorityBadge(p.priority),
          h('div', {},
            h('strong', {}, fullName(p)),
            h('div', { class: 'muted' }, [p.company, segmentLabel(p.segment)].filter(Boolean).join(' · ')),
          ),
        ),
        h('div', { class: 'item-actions' },
          select,
          quick && button(quick[1], () => updateStatus(p, quick[0]), 'primary'),
        ),
        h('div', { class: 'item-links' },
          p.url && button('Ouvrir', () => openUrl(p.url), 'link'),
          button('Modifier', () => editProspect(p), 'link'),
          remove,
        ),
      );
    }),
  );
}

// ---------- Réglages ----------

function renderSettings() {
  $('#set-offre').value = state.settings.offre;
  $('#set-lien').value = state.settings.lien;
  $('#set-limit').value = state.settings.weeklyInviteLimit;
  $('#set-relance').value = state.settings.relanceDays;
  $('#set-pending').value = state.settings.pendingInviteDays;
  $('#templates').replaceChildren(
    ...Object.entries(TEMPLATE_LABELS).map(([key, label]) =>
      h('details', { class: 'template' },
        h('summary', {}, label),
        h('textarea', { rows: key.startsWith('invitation') ? 4 : 7, 'data-template': key }, state.templates[key]),
      ),
    ),
  );
}

function numberInput(selector, fallback, min, max) {
  const value = Number.parseInt($(selector).value, 10);
  return Number.isFinite(value) ? Math.min(Math.max(value, min), max) : fallback;
}

async function saveAllSettings() {
  state.settings = {
    ...state.settings,
    offre: $('#set-offre').value.trim(),
    lien: $('#set-lien').value.trim(),
    weeklyInviteLimit: numberInput('#set-limit', 80, 1, 200),
    relanceDays: numberInput('#set-relance', 5, 1, 60),
    pendingInviteDays: numberInput('#set-pending', 21, 7, 90),
  };
  document.querySelectorAll('[data-template]').forEach((area) => {
    state.templates[area.dataset.template] = area.value;
  });
  await saveSettings(state.settings);
  await saveTemplates(state.templates);
  renderSettings();
  renderQuota();
  renderTodoCount();
  if (!noteEdited) fillForm();
  toast('Réglages enregistrés.');
}

function exportJSON() {
  const backup = { version: 1, exportedAt: new Date().toISOString(), ...state };
  download(`prospection-sauvegarde-${new Date().toISOString().slice(0, 10)}.json`, JSON.stringify(backup, null, 2), 'application/json');
}

async function importJSON(file) {
  try {
    const backup = JSON.parse(await file.text());
    if (!Array.isArray(backup.prospects)) throw new Error('format');
    const before = state.prospects.length;
    state.prospects = mergeProspects(state.prospects, backup.prospects);
    if (backup.settings) state.settings = { ...state.settings, ...backup.settings };
    if (backup.templates) state.templates = { ...state.templates, ...backup.templates };
    await Promise.all([persist(), saveSettings(state.settings), saveTemplates(state.templates)]);
    renderSettings();
    renderSearch();
    toast(`Sauvegarde restaurée : ${state.prospects.length - before} nouveau(x) prospect(s).`);
  } catch {
    toast('Fichier de sauvegarde invalide.', 'warn');
  }
}

// ---------- Démarrage ----------

function bindEvents() {
  document.querySelectorAll('.tab').forEach((tab) => tab.addEventListener('click', () => showTab(tab.dataset.tab)));

  $('#search-country').addEventListener('change', saveSearchOptions);
  $('#search-network').addEventListener('change', saveSearchOptions);
  $('#open-search').addEventListener('click', openSearch);
  $('#copy-query').addEventListener('click', () => copy($('#search-query').value, 'Requête copiée !'));

  $('#grab-profile').addEventListener('click', grabProfile);
  $('#new-prospect').addEventListener('click', () => { draft = emptyDraft(); noteEdited = false; fillForm(); });
  form.addEventListener('input', onFormInput);
  form.addEventListener('submit', (event) => event.preventDefault());
  $('#regenerate-note').addEventListener('click', () => { noteEdited = false; readForm(); fillForm(); });
  $('#copy-note').addEventListener('click', () => {
    const note = $('#invite-note').value;
    copy(note, note.length > INVITATION_LIMIT ? 'Copié, mais la note dépasse 300 caractères.' : 'Note copiée !');
  });
  $('#save-prospect').addEventListener('click', saveDraft);
  $('#mark-invited').addEventListener('click', markInvited);

  $('#filter-text').addEventListener('input', renderList);
  $('#filter-status').addEventListener('change', renderList);

  $('#save-settings').addEventListener('click', saveAllSettings);
  $('#reset-templates').addEventListener('click', (e) => confirmClick(e.currentTarget, async () => {
    state.templates = { ...DEFAULT_TEMPLATES };
    await saveTemplates(state.templates);
    renderSettings();
    if (!noteEdited) fillForm();
    toast('Modèles par défaut rétablis.');
  }));
  $('#export-csv').addEventListener('click', () =>
    download(`prospects-${new Date().toISOString().slice(0, 10)}.csv`, toCSV(state.prospects), 'text/csv;charset=utf-8'));
  $('#export-json').addEventListener('click', exportJSON);
  $('#import-json').addEventListener('click', () => $('#import-file').click());
  $('#import-file').addEventListener('change', (e) => {
    if (e.target.files[0]) importJSON(e.target.files[0]);
    e.target.value = '';
  });
  $('#clear-data').addEventListener('click', (e) => confirmClick(e.currentTarget, async () => {
    state.prospects = [];
    await persist();
    renderFollow();
    toast('Toutes les fiches ont été effacées.');
  }));

  chrome.tabs.onActivated.addListener(refreshProfileHint);
  chrome.tabs.onUpdated.addListener((tabId, info) => { if (info.url || info.status === 'complete') refreshProfileHint(); });
  // Garde les panneaux de plusieurs fenêtres synchronisés.
  chrome.storage.onChanged.addListener((changes, area) => {
    if (area !== 'local' || !changes.prospects) return;
    state.prospects = changes.prospects.newValue || [];
    renderQuota();
    renderTodoCount();
    if ($('#panel-follow').classList.contains('active')) renderFollow();
  });
}

async function init() {
  state = await loadState();
  $('#search-network').replaceChildren(
    ...Object.entries(NETWORK_OPTIONS).map(([value, option]) => h('option', { value }, option.label)),
  );
  $('#segment-select').replaceChildren(
    h('option', { value: '' }, 'Autre / à classer'),
    ...SEGMENTS.map((segment) => h('option', { value: segment.id }, segment.label)),
  );
  $('#filter-status').replaceChildren(
    h('option', { value: '' }, 'Tous les statuts'),
    ...STATUSES.map((status) => h('option', { value: status.id }, status.label)),
  );
  bindEvents();
  renderSearch();
  fillForm();
  renderSettings();
  renderQuota();
  renderTodoCount();
  refreshProfileHint();
}

init();
