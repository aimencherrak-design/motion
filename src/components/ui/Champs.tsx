import type { ComponentProps, ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { cx } from "@/lib/cx";

export const classeChamp =
  "w-full rounded-lg border border-ligne-forte bg-surface-2 px-3 text-sm text-texte placeholder:text-discret transition-[border-color,box-shadow] outline-none hover:border-ligne-forte focus:border-or focus:shadow-[0_0_0_3px_var(--color-or-sombre)] disabled:opacity-60";

export function Etiquette({ children, htmlFor, aide }: { children: ReactNode; htmlFor?: string; aide?: ReactNode }) {
  return (
    <label htmlFor={htmlFor} className="mb-1.5 flex items-baseline justify-between gap-2 text-[12.5px] font-medium text-doux">
      <span>{children}</span>
      {aide && <span className="text-[11.5px] font-normal text-discret">{aide}</span>}
    </label>
  );
}

export function Champ({
  label,
  aide,
  className,
  children,
}: {
  label: ReactNode;
  aide?: ReactNode;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={className}>
      <Etiquette aide={aide}>{label}</Etiquette>
      {children}
    </div>
  );
}

export function Saisie({ className, ...p }: ComponentProps<"input">) {
  return <input className={cx(classeChamp, "h-10", className)} {...p} />;
}

export function Zone({ className, ...p }: ComponentProps<"textarea">) {
  return <textarea className={cx(classeChamp, "min-h-24 resize-y py-2.5 leading-relaxed", className)} {...p} />;
}

export function Liste({
  className,
  options,
  vide,
  ...p
}: ComponentProps<"select"> & { options: Record<string, string> | [string, string][]; vide?: string }) {
  const entrees = Array.isArray(options) ? options : Object.entries(options);
  return (
    <div className={cx("relative", className)}>
      <select className={cx(classeChamp, "h-10 cursor-pointer appearance-none pr-9")} {...p}>
        {vide !== undefined && <option value="">{vide}</option>}
        {entrees.map(([v, l]) => (
          <option key={v} value={v}>
            {l}
          </option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2 text-discret" />
    </div>
  );
}

export function Case({ label, className, ...p }: ComponentProps<"input"> & { label: ReactNode }) {
  return (
    <label className={cx("flex cursor-pointer items-center gap-2.5 text-sm select-none", className)}>
      <input
        type="checkbox"
        className="size-[18px] cursor-pointer appearance-none rounded-[5px] border border-ligne-forte bg-surface-2 bg-center bg-no-repeat transition-colors checked:border-or checked:bg-or checked:bg-[url('data:image/svg+xml;utf8,<svg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2024%2024%22%20fill=%22none%22%20stroke=%22%23151004%22%20stroke-width=%223.5%22%20stroke-linecap=%22round%22%20stroke-linejoin=%22round%22><path%20d=%22M5%2012l5%205L20%207%22/></svg>')] checked:bg-[length:12px]"
        {...p}
      />
      {label}
    </label>
  );
}
