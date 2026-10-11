// Normalise un texte pour les comparaisons : sans accents, minuscules,
// ponctuation remplacée par des espaces ("Porte-Voitures" -> "porte voitures").
export function normalize(text) {
  return String(text || '')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

// Vrai si `term` apparaît comme mot (ou suite de mots) entier dans `text`.
export function containsTerm(text, term) {
  const needle = normalize(term);
  return needle !== '' && ` ${normalize(text)} `.includes(` ${needle} `);
}

export function containsAny(text, terms) {
  return terms.some((term) => containsTerm(text, term));
}
