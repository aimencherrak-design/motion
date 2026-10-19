import { euros } from "@/lib/affichage";
import { formatDate } from "@/lib/dates";

type Point = { prix: number; date: string };

/**
 * Courbe d'évolution du prix (une seule série, donc pas de légende).
 * Chaque point a une infobulle ; la liste détaillée sert de vue tableau.
 */
export function GraphiquePrix({ points }: { points: Point[] }) {
  if (points.length < 2) return null;
  const L = 320;
  const H = 110;
  const m = { h: 14, b: 22, g: 10, d: 10 };
  const prix = points.map((p) => p.prix);
  const min = Math.min(...prix);
  const max = Math.max(...prix);
  const ecart = max - min || 1;
  const x = (i: number) => m.g + (i / (points.length - 1)) * (L - m.g - m.d);
  const y = (v: number) => m.h + (1 - (v - min) / ecart) * (H - m.h - m.b);
  const trace = points.map((p, i) => `${i ? "L" : "M"}${x(i).toFixed(1)},${y(p.prix).toFixed(1)}`).join(" ");
  const dernier = points[points.length - 1];

  return (
    <figure className="px-5 pt-4">
      <svg viewBox={`0 0 ${L} ${H}`} className="w-full overflow-visible" role="img" aria-label="Évolution du prix">
        <line x1={m.g} x2={L - m.d} y1={H - m.b} y2={H - m.b} stroke="var(--color-ligne)" strokeWidth="1" />
        <path d={trace} fill="none" stroke="var(--color-or)" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
        {points.map((p, i) => (
          <g key={i}>
            <circle cx={x(i)} cy={y(p.prix)} r="4.5" fill="var(--color-or)" stroke="var(--color-surface)" strokeWidth="2" />
            <circle cx={x(i)} cy={y(p.prix)} r="12" fill="transparent">
              <title>{`${formatDate(p.date)} : ${euros(p.prix)}`}</title>
            </circle>
          </g>
        ))}
        <text x={m.g} y={H - 6} fontSize="10" fill="var(--color-discret)">
          {formatDate(points[0].date)}
        </text>
        <text x={L - m.d} y={H - 6} fontSize="10" fill="var(--color-discret)" textAnchor="end">
          {formatDate(dernier.date)}
        </text>
      </svg>
    </figure>
  );
}
