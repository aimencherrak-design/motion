import { revalidatePath } from "next/cache";
import { restaurerSauvegarde, verifierSauvegarde } from "@/lib/sauvegarde";

// Restaure une sauvegarde envoyée depuis la page Paramètres (contenu JSON brut).
export async function POST(req: Request) {
  let donnees: unknown;
  try {
    donnees = JSON.parse(await req.text());
  } catch {
    return Response.json({ ok: false, erreur: "Le fichier n'est pas un JSON valide." }, { status: 400 });
  }
  try {
    const compte = restaurerSauvegarde(verifierSauvegarde(donnees));
    revalidatePath("/", "layout");
    return Response.json({ ok: true, compte });
  } catch (e) {
    return Response.json(
      { ok: false, erreur: e instanceof Error ? e.message : "Restauration impossible." },
      { status: 400 },
    );
  }
}
