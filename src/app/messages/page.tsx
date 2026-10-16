import type { Metadata } from "next";
import { EnTetePage } from "@/components/ui/EnTetePage";
import { ModuleAVenir } from "@/components/ModuleAVenir";

export const metadata: Metadata = { title: "Messages" };

export default function Page() {
  return (
    <>
      <EnTetePage surtitre="Module 3" titre="Messages" description="Tes modèles de messages prêts à copier." />
      <ModuleAVenir
        numero={3}
        points={[
          "Modèles par cible : 1er contact et relance",
          "Variables {prénom}, {entreprise}, {ville}",
          "Bouton copier en un clic",
        ]}
      />
    </>
  );
}
