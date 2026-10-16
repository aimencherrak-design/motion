import type { ReactNode } from "react";
import { Construction } from "lucide-react";
import { Carte } from "@/components/ui/Carte";
import { EtatVide } from "@/components/ui/EtatVide";

export function ModuleAVenir({ numero, points }: { numero: number; points: ReactNode[] }) {
  return (
    <Carte>
      <EtatVide
        icone={<Construction />}
        titre={`Module ${numero} : en construction`}
        texte={
          <>
            Ce module sera construit à l&apos;étape {numero}. Il contiendra :
            <ul className="mx-auto mt-3 max-w-sm space-y-1.5 text-left">
              {points.map((p, i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-or" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </>
        }
      />
    </Carte>
  );
}
