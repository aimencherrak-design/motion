import { revalidatePath } from "next/cache";
import { analyserFichier, importerContacts } from "@/lib/import";

// POST ?apercu=1 : analyse seulement. Sans paramètre : importe.
export async function POST(req: Request) {
  const apercu = new URL(req.url).searchParams.get("apercu") === "1";
  let donnees: unknown;
  try {
    donnees = JSON.parse(await req.text());
  } catch {
    return Response.json({ ok: false, erreur: "Le fichier n'est pas un JSON valide." }, { status: 400 });
  }
  try {
    const analyse = analyserFichier(donnees);
    if (apercu) {
      const parCategorie: Record<string, number> = {};
      for (const c of analyse.contacts) parCategorie[c.categorie] = (parCategorie[c.categorie] ?? 0) + 1;
      return Response.json({ ok: true, format: analyse.format, total: analyse.contacts.length, ignores: analyse.ignores, parCategorie });
    }
    const res = importerContacts(analyse.contacts);
    revalidatePath("/", "layout");
    return Response.json({ ok: true, ...res, ignores: analyse.ignores });
  } catch (e) {
    return Response.json({ ok: false, erreur: e instanceof Error ? e.message : "Import impossible." }, { status: 400 });
  }
}
