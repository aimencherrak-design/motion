export const STATUSES = [
  { id: 'a_contacter', label: 'À contacter' },
  { id: 'invite', label: 'Invité' },
  { id: 'accepte', label: 'Accepté' },
  { id: 'message', label: 'Message envoyé' },
  { id: 'relance', label: 'Relancé' },
  { id: 'reponse', label: 'A répondu' },
  { id: 'rdv', label: 'RDV / appel' },
  { id: 'pas_interesse', label: 'Pas intéressé' },
  { id: 'archive', label: 'Archivé' },
];

export const DEFAULT_SETTINGS = {
  offre: '',
  lien: '',
  weeklyInviteLimit: 80,
  relanceDays: 5,
  pendingInviteDays: 21,
  country: 'FR',
  network: 'second',
  lastBackupAt: '',
};

const DAY = 24 * 60 * 60 * 1000;

export function statusLabel(id) {
  return STATUSES.find((status) => status.id === id)?.label || id;
}

export function daysSince(iso, now = new Date()) {
  if (!iso) return Infinity;
  return Math.floor((now - new Date(iso)) / DAY);
}

// Change le statut en gardant la date de chaque étape (pour les relances et les stats).
export function withStatus(prospect, status, now = new Date()) {
  const at = now.toISOString();
  return {
    ...prospect,
    status,
    statusDates: { ...prospect.statusDates, [status]: at },
    updatedAt: at,
  };
}

export function invitesInLastDays(prospects, days = 7, now = new Date()) {
  return prospects.filter((prospect) => daysSince(prospect.statusDates?.invite, now) < days).length;
}

export function stats(prospects) {
  const reached = (step) => prospects.filter((prospect) => prospect.statusDates?.[step]).length;
  const invited = reached('invite');
  const accepted = reached('accepte');
  return {
    total: prospects.length,
    invited,
    accepted,
    replied: reached('reponse'),
    meetings: reached('rdv'),
    acceptanceRate: invited ? Math.round((accepted / invited) * 100) : null,
  };
}

// Prochaine action pour chaque prospect, la plus urgente en premier.
// `next` est le statut à appliquer quand l'action est faite.
export function computeTodos(prospects, settings = DEFAULT_SETTINGS, now = new Date()) {
  const todos = [];
  for (const prospect of prospects) {
    const since = daysSince(prospect.statusDates?.[prospect.status], now);
    const sinceText = Number.isFinite(since) ? ` depuis ${since} j` : '';
    if (prospect.status === 'accepte') {
      todos.push({ prospect, kind: 'presentation', rank: 0, next: 'message', label: 'A accepté : envoie ton message de présentation' });
    } else if (prospect.status === 'message' && since >= settings.relanceDays) {
      todos.push({ prospect, kind: 'relance', rank: 1, next: 'relance', label: `Pas de réponse${sinceText} : relance` });
    } else if (prospect.status === 'a_contacter') {
      todos.push({ prospect, kind: 'invitation', rank: 2, next: 'invite', label: 'À inviter' });
    } else if (prospect.status === 'invite' && since >= settings.pendingInviteDays) {
      todos.push({ prospect, kind: 'retirer', rank: 3, next: 'archive', label: `Invitation en attente${sinceText} : retire-la sur LinkedIn` });
    } else if (prospect.status === 'relance' && since >= settings.relanceDays * 2) {
      todos.push({ prospect, kind: 'archiver', rank: 4, next: 'archive', label: 'Toujours pas de réponse après la relance : archive' });
    }
  }
  return todos.sort((a, b) => a.rank - b.rank || (b.prospect.score || 0) - (a.prospect.score || 0));
}
