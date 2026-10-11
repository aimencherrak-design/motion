// Limite de LinkedIn pour la note jointe à une invitation.
export const INVITATION_LIMIT = 300;

// Modèles par défaut, modifiables dans Réglages.
// {variable} est remplacée par la valeur du prospect ;
// [ … ] est supprimé entièrement si une variable à l'intérieur est vide.
export const DEFAULT_TEMPLATES = {
  invitation_garage:
    "Bonjour {prenom}, je développe mon réseau auprès des dirigeants de garages et d'ateliers. Votre activité[ chez {entreprise}] a retenu mon attention : au plaisir d'échanger avec vous ici !",
  invitation_concession:
    "Bonjour {prenom}, j'échange régulièrement avec des dirigeants de concessions automobiles. Votre parcours[ chez {entreprise}] m'a donné envie de vous ajouter à mon réseau. Au plaisir d'échanger !",
  invitation_location:
    "Bonjour {prenom}, je développe mon réseau dans la location de véhicules et votre agence[ {entreprise}] a retenu mon attention. Au plaisir d'échanger avec vous ici !",
  invitation_transport:
    "Bonjour {prenom}, je développe mon réseau auprès des acteurs du transport et du convoyage de véhicules. Votre activité[ chez {entreprise}] a retenu mon attention : au plaisir d'échanger avec vous ici !",
  invitation_autre:
    "Bonjour {prenom}, je développe mon réseau auprès des professionnels de l'automobile. Votre parcours[ chez {entreprise}] a retenu mon attention : au plaisir d'échanger avec vous ici !",
  presentation:
    "Merci d'avoir accepté mon invitation, {prenom} !\n\nPour me présenter en deux mots : {offre}\n\n[Quelques exemples de mon travail : {lien}\n\n]Est-ce un sujet[ chez {entreprise}] en ce moment ? Si oui, on peut en parler quelques minutes quand vous voulez.",
  relance:
    "Bonjour {prenom}, je me permets de revenir vers vous suite à mon message. Est-ce un sujet qui pourrait vous intéresser[ chez {entreprise}] ? Si ce n'est pas le bon moment, aucun souci, dites-le-moi simplement.",
};

export const TEMPLATE_LABELS = {
  invitation_garage: 'Invitation : garages',
  invitation_concession: 'Invitation : concessions',
  invitation_location: 'Invitation : location',
  invitation_transport: 'Invitation : transport',
  invitation_autre: 'Invitation : autre',
  presentation: 'Message après acceptation',
  relance: 'Relance',
};

export function invitationTemplateKey(segment) {
  const key = `invitation_${segment || 'autre'}`;
  return key in DEFAULT_TEMPLATES ? key : 'invitation_autre';
}

export function messageVariables(prospect = {}, settings = {}) {
  return {
    prenom: prospect.firstName || '',
    nom: prospect.lastName || '',
    entreprise: prospect.company || '',
    ville: String(prospect.location || '').split(',')[0].trim(),
    offre: settings.offre || '',
    lien: settings.lien || '',
  };
}

export function fillTemplate(template, vars) {
  const value = (name) => String(vars[name] ?? '').trim();
  return String(template || '')
    .replace(/\[([^[\]]*)\]/g, (_, inner) =>
      [...inner.matchAll(/\{(\w+)\}/g)].every(([, name]) => value(name)) ? inner : '',
    )
    .replace(/\{(\w+)\}/g, (placeholder, name) => value(name) || placeholder)
    .replace(/ {2,}/g, ' ')
    .replace(/ +([,.])/g, '$1');
}

// Variables restées vides dans un message (ex. {offre} pas encore renseignée).
export function missingVariables(text) {
  return [...new Set([...String(text || '').matchAll(/\{(\w+)\}/g)].map(([, name]) => name))];
}

export function buildMessage(kind, prospect, settings, templates) {
  const key = kind === 'invitation' ? invitationTemplateKey(prospect.segment) : kind;
  const template = templates?.[key] ?? DEFAULT_TEMPLATES[key];
  return fillTemplate(template, messageVariables(prospect, settings));
}
