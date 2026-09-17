import { automacoes } from "@/content/automacoes";
import type { Locale } from "@/lib/i18n";
import { Chain } from "./Chain";

export function AutomationList({ locale }: { locale: Locale }) {
  return (
    <ol className="space-y-10">
      {automacoes.itens.map((a) => (
        <li key={a.nome.pt} className="grid sm:grid-cols-8 sm:gap-8 md:gap-4">
          <p className="mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted sm:col-span-2">{a.area[locale]}</p>
          <div className="sm:col-span-6">
            <h3 className="font-medium leading-snug text-ink">{a.nome[locale]}</h3>
            <p className="mt-1 text-xs text-muted">{a.quando[locale]}</p>
            <p className="mt-2 text-sm leading-normal">{a.faz[locale]}</p>
            <div className="mt-3">
              <Chain passos={a.cadeia} locale={locale} />
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}
