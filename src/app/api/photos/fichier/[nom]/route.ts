import fs from "node:fs";
import path from "node:path";
import { sousDossier } from "@/lib/chemins";

// Sert une photo stockée sur le PC.
export async function GET(_req: Request, ctx: RouteContext<"/api/photos/fichier/[nom]">) {
  const nom = path.basename((await ctx.params).nom);
  const f = path.join(sousDossier("photos"), nom);
  if (!/\.(jpg|png)$/.test(nom) || !fs.existsSync(f)) return new Response("Introuvable", { status: 404 });
  return new Response(fs.readFileSync(f), {
    headers: { "Content-Type": nom.endsWith(".png") ? "image/png" : "image/jpeg", "Cache-Control": "private, max-age=86400" },
  });
}
