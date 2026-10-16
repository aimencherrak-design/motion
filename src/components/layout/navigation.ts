import { Car, FileCheck2, LayoutDashboard, MessageSquareText, Settings, Users } from "lucide-react";

export const LIENS = [
  { href: "/", libelle: "Tableau de bord", court: "Accueil", icone: LayoutDashboard },
  { href: "/crm", libelle: "CRM", court: "CRM", icone: Users },
  { href: "/messages", libelle: "Messages", court: "Messages", icone: MessageSquareText },
  { href: "/annonces", libelle: "Annonces", court: "Annonces", icone: Car },
  { href: "/prequalification", libelle: "Pré-qualification", court: "Fiches", icone: FileCheck2 },
] as const;

export const LIEN_PARAMETRES = { href: "/parametres", libelle: "Paramètres", court: "Réglages", icone: Settings } as const;

export function estActif(href: string, chemin: string) {
  return href === "/" ? chemin === "/" : chemin === href || chemin.startsWith(`${href}/`);
}
