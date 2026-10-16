// Toutes les dates suivent l'heure locale du PC.

export function aujourdhui(d = new Date()) {
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const j = String(d.getDate()).padStart(2, "0");
  return `${d.getFullYear()}-${m}-${j}`;
}

export function horodatage() {
  return new Date().toISOString();
}

/** Nombre de jours entiers entre deux dates "AAAA-MM-JJ" (b - a). */
export function joursEntre(a: string, b: string) {
  const [ya, ma, ja] = a.slice(0, 10).split("-").map(Number);
  const [yb, mb, jb] = b.slice(0, 10).split("-").map(Number);
  return Math.round((Date.UTC(yb, mb - 1, jb) - Date.UTC(ya, ma - 1, ja)) / 86_400_000);
}

const fmtCourt = new Intl.DateTimeFormat("fr-FR", { day: "2-digit", month: "2-digit", year: "numeric" });
const fmtLong = new Intl.DateTimeFormat("fr-FR", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
const fmtHeure = new Intl.DateTimeFormat("fr-FR", {
  day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit",
});

function versDate(s: string) {
  return s.length === 10 ? new Date(`${s}T12:00:00`) : new Date(s);
}

export const formatDate = (s?: string | null) => (s ? fmtCourt.format(versDate(s)) : "");
export const formatDateLongue = (s: string) => fmtLong.format(versDate(s));
export const formatDateHeure = (s: string) => fmtHeure.format(versDate(s));
