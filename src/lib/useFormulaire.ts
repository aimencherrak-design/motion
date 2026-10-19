"use client";

import { startTransition, useActionState, type FormEvent } from "react";
import type { EtatFormulaire } from "./formulaire";

type Action = (etat: EtatFormulaire, fd: FormData) => Promise<EtatFormulaire>;

/**
 * Formulaire d'édition : envoie les champs sans que React ne vide le formulaire ensuite
 * (avec <form action>, React remet les champs à leur valeur initiale après l'envoi,
 * ce qui ferait perdre les modifications à l'enregistrement suivant).
 */
export function useFormulaire(action: Action) {
  const [etat, envoyer, enCours] = useActionState(action, null);
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    startTransition(() => envoyer(fd));
  }
  return [etat, onSubmit, enCours] as const;
}
