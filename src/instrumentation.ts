// Exécuté une fois au démarrage du serveur : sauvegarde automatique des données.
export async function register() {
  if (process.env.NEXT_RUNTIME !== "nodejs") return;
  if (process.env.NEXT_PHASE === "phase-production-build") return;
  const { sauvegardeAutomatique } = await import("@/lib/sauvegarde");
  try {
    const fichier = sauvegardeAutomatique("demarrage");
    console.log(`✓ Sauvegarde automatique : ${fichier}`);
  } catch (e) {
    console.error("Sauvegarde automatique impossible :", e);
  }
}
