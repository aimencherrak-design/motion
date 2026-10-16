import fs from "node:fs";
import { cheminSauvegarde } from "@/lib/sauvegarde";

// Télécharge une des sauvegardes automatiques.
export async function GET(_req: Request, ctx: RouteContext<"/api/sauvegarde/fichier/[nom]">) {
  const { nom } = await ctx.params;
  const chemin = cheminSauvegarde(decodeURIComponent(nom));
  if (!chemin) return new Response("Sauvegarde introuvable", { status: 404 });
  return new Response(fs.readFileSync(chemin), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Content-Disposition": `attachment; filename="${encodeURIComponent(nom)}"`,
      "Cache-Control": "no-store",
    },
  });
}
