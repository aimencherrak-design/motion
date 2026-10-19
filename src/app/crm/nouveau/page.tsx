import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Carte } from "@/components/ui/Carte";
import { EnTetePage } from "@/components/ui/EnTetePage";
import { creerContact } from "../actions";
import { FormulaireContact } from "../FormulaireContact";

export const metadata: Metadata = { title: "Nouveau contact" };

export default async function NouveauContact({ searchParams }: PageProps<"/crm/nouveau">) {
  const sp = await searchParams;
  return (
    <div className="mx-auto max-w-3xl">
      <Link href="/crm" className="mb-4 inline-flex items-center gap-1.5 text-sm text-doux hover:text-texte">
        <ArrowLeft className="size-4" /> CRM
      </Link>
      <EnTetePage titre="Nouveau contact" description="Seul le nom ou l'entreprise est obligatoire : tu compléteras le reste plus tard." />
      <Carte>
        <FormulaireContact action={creerContact} nouveau categorieParDefaut={typeof sp.categorie === "string" ? sp.categorie : undefined} />
      </Carte>
    </div>
  );
}
