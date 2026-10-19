// Lecture des champs envoyés par un formulaire : texte vide -> null.

export function texte(fd: FormData, cle: string): string | null {
  const v = fd.get(cle);
  if (typeof v !== "string") return null;
  const t = v.trim();
  return t === "" ? null : t;
}

export function nombre(fd: FormData, cle: string): number | null {
  const t = texte(fd, cle);
  if (t === null) return null;
  const n = Number(t.replace(/\s/g, "").replace(",", "."));
  return Number.isFinite(n) ? n : null;
}

export function entier(fd: FormData, cle: string): number | null {
  const n = nombre(fd, cle);
  return n === null ? null : Math.round(n);
}

export function date(fd: FormData, cle: string): string | null {
  const t = texte(fd, cle);
  return t && /^\d{4}-\d{2}-\d{2}$/.test(t) ? t : null;
}

export function parmi<T extends object>(fd: FormData, cle: string, liste: T): Extract<keyof T, string> | null {
  const t = texte(fd, cle);
  return t !== null && t in liste ? (t as Extract<keyof T, string>) : null;
}

export function coche(fd: FormData, cle: string) {
  return fd.get(cle) === "on" || fd.get(cle) === "true";
}

export type EtatFormulaire = { ok?: boolean; erreur?: string; message?: string } | null;
