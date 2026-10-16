import { construireSauvegarde, nomFichierExport } from "@/lib/sauvegarde";

// Télécharge une sauvegarde complète au format JSON.
export async function GET() {
  const contenu = JSON.stringify(construireSauvegarde(), null, 2);
  return new Response(contenu, {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Content-Disposition": `attachment; filename="${nomFichierExport()}"`,
      "Cache-Control": "no-store",
    },
  });
}
