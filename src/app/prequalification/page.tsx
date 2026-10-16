import type { Metadata } from "next";
import { EnTetePage } from "@/components/ui/EnTetePage";
import { ModuleAVenir } from "@/components/ModuleAVenir";

export const metadata: Metadata = { title: "Pré-qualification" };

export default function Page() {
  return (
    <>
      <EnTetePage surtitre="Module 5" titre="Pré-qualification" description="Les fiches de pré-qualification des véhicules." />
      <ModuleAVenir
        numero={5}
        points={[
          "Checklist CT, carnet, HistoVec, propriétaires, photos",
          "Remarques libres",
          "Export PDF propre pour l'agence",
        ]}
      />
    </>
  );
}
