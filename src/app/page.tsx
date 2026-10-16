import { EnTetePage } from "@/components/ui/EnTetePage";
import { ModuleAVenir } from "@/components/ModuleAVenir";
import { aujourdhui, formatDateLongue } from "@/lib/dates";

export default function TableauDeBord() {
  const date = formatDateLongue(aujourdhui());
  return (
    <>
      <EnTetePage
        surtitre={date.charAt(0).toUpperCase() + date.slice(1)}
        titre="Tableau de bord"
        description="Tes objectifs du jour et tes relances, en un coup d'œil."
      />
      <ModuleAVenir
        numero={1}
        points={[
          "Quotas du jour : 30 ajouts LinkedIn, messages de prospection, mises en relation",
          "Relances en retard (rouge) et relances du jour (orange)",
          "Compteur de partenaires signés",
        ]}
      />
    </>
  );
}
