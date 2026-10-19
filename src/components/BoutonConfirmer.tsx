"use client";

import { useEffect, useState, useTransition } from "react";
import { Bouton } from "@/components/ui/Bouton";

/** Bouton en deux temps : un premier clic arme, un second confirme (évite les suppressions par erreur). */
export function BoutonConfirmer({
  action,
  children,
  confirmation = "Confirmer la suppression",
  taille = "sm",
  variante = "fantome",
}: {
  action: () => Promise<unknown>;
  children: React.ReactNode;
  confirmation?: string;
  taille?: "sm" | "md";
  variante?: "fantome" | "secondaire" | "danger";
}) {
  const [arme, setArme] = useState(false);
  const [enCours, demarrer] = useTransition();
  useEffect(() => {
    if (!arme) return;
    const t = setTimeout(() => setArme(false), 4000);
    return () => clearTimeout(t);
  }, [arme]);

  return (
    <Bouton
      taille={taille}
      variante={arme ? "danger" : variante}
      disabled={enCours}
      onClick={() => (arme ? demarrer(async () => void (await action())) : setArme(true))}
    >
      {enCours ? "Suppression…" : arme ? confirmation : children}
    </Bouton>
  );
}
