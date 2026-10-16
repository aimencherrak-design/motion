import type { Metadata } from "next";
import { EnTetePage } from "@/components/ui/EnTetePage";
import { ModuleAVenir } from "@/components/ModuleAVenir";

export const metadata: Metadata = { title: "Annonces" };

export default function Page() {
  return (
    <>
      <EnTetePage surtitre="Module 4" titre="Annonces" description="Les annonces repérées dans tes alertes." />
      <ModuleAVenir
        numero={4}
        points={[
          "Collage de plusieurs liens d'un coup, détection des doublons",
          "Jours en ligne, historique des prix, filtre > 30 jours",
          "Statuts et agence partenaire liée",
        ]}
      />
    </>
  );
}
