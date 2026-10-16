import type { Metadata } from "next";
import { EnTetePage } from "@/components/ui/EnTetePage";
import { ModuleAVenir } from "@/components/ModuleAVenir";

export const metadata: Metadata = { title: "CRM" };

export default function Page() {
  return (
    <>
      <EnTetePage surtitre="Module 2" titre="CRM" description="Contacts et pipeline de prospection." />
      <ModuleAVenir
        numero={2}
        points={[
          "6 catégories et pipeline à 7 statuts",
          "Fiche contact complète et historique des échanges",
          "Import de ton ancien CRM et des 152 prospects",
        ]}
      />
    </>
  );
}
