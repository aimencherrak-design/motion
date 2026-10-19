import type { Metadata } from "next";
import { EnTetePage } from "@/components/ui/EnTetePage";
import { listerContactsCourts } from "@/lib/donnees/contacts";
import { initialiserModeles, listerModeles } from "@/lib/donnees/modeles";
import { lireProfil } from "@/lib/donnees/parametres";
import { BanqueMessages } from "./BanqueMessages";

export const metadata: Metadata = { title: "Messages" };

export default async function PageMessages({ searchParams }: PageProps<"/messages">) {
  initialiserModeles();
  const sp = await searchParams;
  const contact = typeof sp.contact === "string" ? Number(sp.contact) : null;
  return (
    <>
      <EnTetePage
        surtitre="Banque de messages"
        titre="Messages"
        description="Choisis un contact, copie le message personnalisé, colle-le dans LinkedIn ou ta messagerie."
      />
      <BanqueMessages
        modeles={listerModeles()}
        contacts={listerContactsCourts()}
        profil={lireProfil()}
        contactInitial={Number.isInteger(contact) ? contact : null}
      />
    </>
  );
}
