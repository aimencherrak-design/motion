import { randomUUID } from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { eq, sql } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { getDb, schema } from "@/db";
import { sousDossier } from "@/lib/chemins";

const TYPES: Record<string, string> = { "image/jpeg": "jpg", "image/png": "png" };
const TAILLE_MAX = 15 * 1024 * 1024;

// Ajoute une ou plusieurs photos (JPEG ou PNG) à un véhicule.
export async function POST(req: Request, ctx: RouteContext<"/api/photos/[annonceId]">) {
  const annonceId = Number((await ctx.params).annonceId);
  const db = getDb();
  if (!db.select().from(schema.annonces).where(eq(schema.annonces.id, annonceId)).get()) {
    return Response.json({ ok: false, erreur: "Véhicule introuvable." }, { status: 404 });
  }
  const fd = await req.formData();
  const fichiers = fd.getAll("photos").filter((f): f is File => f instanceof File);
  let ordre = db.select({ n: sql<number>`coalesce(max(${schema.photos.ordre}), -1)` }).from(schema.photos).where(eq(schema.photos.annonceId, annonceId)).get()!.n;
  const refusees: string[] = [];
  let ajoutees = 0;
  for (const f of fichiers) {
    const ext = TYPES[f.type];
    if (!ext || f.size > TAILLE_MAX) {
      refusees.push(f.name);
      continue;
    }
    const nom = `${annonceId}-${randomUUID()}.${ext}`;
    fs.writeFileSync(path.join(sousDossier("photos"), nom), Buffer.from(await f.arrayBuffer()));
    db.insert(schema.photos).values({ annonceId, fichier: nom, ordre: ++ordre }).run();
    ajoutees++;
  }
  revalidatePath(`/prequalification/${annonceId}`);
  return Response.json({ ok: true, ajoutees, refusees });
}
