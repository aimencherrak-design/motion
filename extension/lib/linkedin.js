// Identifiant LinkedIn de la France pour le filtre « Lieux ».
export const FRANCE_GEO_URN = '105015875';

export const NETWORK_OPTIONS = {
  second: { label: '2e degré (relations en commun)', codes: ['S'] },
  wide: { label: '2e + 3e degré', codes: ['S', 'O'] },
};

// URL d'une recherche de personnes LinkedIn déjà filtrée.
// Les relations de 1er degré sont exclues : elles sont déjà dans ton réseau.
export function buildPeopleSearchUrl({ keywords, country = 'FR', network = 'second' }) {
  const params = [
    ['keywords', keywords],
    ['origin', 'FACETED_SEARCH'],
    ['network', JSON.stringify((NETWORK_OPTIONS[network] || NETWORK_OPTIONS.second).codes)],
  ];
  if (country === 'FR') params.push(['geoUrn', JSON.stringify([FRANCE_GEO_URN])]);
  const query = params.map(([key, value]) => `${key}=${encodeURIComponent(value)}`).join('&');
  return `https://www.linkedin.com/search/results/people/?${query}`;
}

const PROFILE_URL = /^https:\/\/(?:[a-z]{2,3}\.|www\.)?linkedin\.com\/in\/([^/?#]+)/i;

export function isProfileUrl(url) {
  return PROFILE_URL.test(url || '');
}

// Forme canonique d'une URL de profil, pour éviter les doublons.
export function normalizeProfileUrl(url) {
  const match = PROFILE_URL.exec(url || '');
  return match ? `https://www.linkedin.com/in/${match[1]}` : String(url || '').trim();
}

export function sameProfileUrl(a, b) {
  return Boolean(a && b) && normalizeProfileUrl(a).toLowerCase() === normalizeProfileUrl(b).toLowerCase();
}

// "Jean-Pierre Martin, MBA 🚗" -> { firstName: 'Jean-Pierre', lastName: 'Martin' }
// "DUPONT Jean" -> { firstName: 'Jean', lastName: 'DUPONT' }
export function splitName(fullName) {
  const cleaned = String(fullName || '')
    .split(/[,|(]/)[0]
    .replace(/[^\p{L}\s'’-]/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  const tokens = cleaned.split(' ').filter(Boolean);
  if (tokens.length === 0) return { firstName: '', lastName: '' };
  const isUpper = (token) => token.length > 1 && token === token.toUpperCase();
  if (tokens.length > 1 && isUpper(tokens[0]) && !isUpper(tokens[tokens.length - 1])) {
    const firstIndex = tokens.findIndex((token) => !isUpper(token));
    return { firstName: tokens.slice(firstIndex).join(' '), lastName: tokens.slice(0, firstIndex).join(' ') };
  }
  return { firstName: tokens[0], lastName: tokens.slice(1).join(' ') };
}

// "Gérant chez Garage Dupont | Pneus & entretien" -> "Garage Dupont"
export function guessCompanyFromHeadline(headline) {
  const match = /(?:\bchez\b|\bat\b|@)\s*(.+)$/i.exec(String(headline || ''));
  if (!match) return '';
  return match[1].split(/\s[|•·–—-]\s|[|•·,]/)[0].trim();
}

// Lit les infos visibles du profil ouvert. Exécutée DANS la page LinkedIn
// (via chrome.scripting) : elle doit rester autonome, sans import.
// Seulement quand tu cliques sur « Récupérer », un profil à la fois.
export function extractProfileFromPage() {
  const clean = (value) => String(value || '').replace(/\s+/g, ' ').trim();
  const main = document.querySelector('main') || document.body;

  let fullName = clean(main.querySelector('h1')?.innerText);
  if (!fullName) {
    fullName = clean(document.title.replace(/^\(\d+\)\s*/, '').split('|')[0]);
  }

  const headline = clean(
    (main.querySelector('.text-body-medium.break-words') || main.querySelector('.text-body-medium'))?.innerText,
  );
  const place = clean(main.querySelector('.text-body-small.inline.t-black--light.break-words')?.innerText);

  let company = '';
  const companyNode = main.querySelector('[aria-label^="Entreprise actuelle"], [aria-label^="Current company"]');
  if (companyNode) {
    company = clean(
      companyNode
        .getAttribute('aria-label')
        .replace(/^[^:]*:\s*/, '')
        .replace(/\.\s*(Cliquez|Click)\b.*$/i, ''),
    );
  }
  if (!company) {
    const firstJob = document.getElementById('experience')?.closest('section')?.querySelector('li');
    const lines = firstJob
      ? [...firstJob.querySelectorAll('span[aria-hidden="true"]')].map((span) => clean(span.innerText))
      : [];
    const looksLikeDuration = (text) => /\d/.test(text) && /\b(an|ans|mois|yrs?|mos?)\b/i.test(text);
    if (lines[1] && !looksLikeDuration(lines[1])) company = lines[1].split(' · ')[0];
    else if (lines[0]) company = lines[0];
  }

  const topCard = clean(main.querySelector('section')?.innerText).slice(0, 3000);
  const mutual = /relations? en commun|mutual connection/i.test(topCard);

  return { fullName, headline, location: place, company, mutual, url: window.location.href };
}
