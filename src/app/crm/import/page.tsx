import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, FileUp } from "lucide-react";
import { Carte, EnTeteCarte } from "@/components/ui/Carte";
import { EnTetePage } from "@/components/ui/EnTetePage";
import { Importeur } from "./Importeur";

export const metadata: Metadata = { title: "Importer des contacts" };

export default function PageImport() {
  return (
    <div className="mx-auto max-w-3xl">
      <Link href="/crm" className="mb-4 inline-flex items-center gap-1.5 text-sm text-doux hover:text-texte">
        <ArrowLeft className="size-4" /> CRM
      </Link>
      <EnTetePage titre="Importer des contacts" description="Récupère ton ancien CRM et ta liste de prospects en une fois." />
      <Carte>
        <EnTeteCarte icone={<FileUp />} titre="Fichier à importer" />
        <Importeur />
      </Carte>
    </div>
  );
}
