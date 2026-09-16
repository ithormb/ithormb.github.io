import { automacoes } from "@/content/automacoes";
import type { Locale } from "@/lib/i18n";
import { Chain } from "./Chain";

export function AutomationList({ locale, limite }: { locale: Locale; limite?: number }) {
  const itens = limite ? automacoes.itens.slice(0, limite) : automacoes.itens;
  return (
    <ol className="grid border-t border-rule sm:grid-cols-2">
      {itens.map((a, i) => (
        <li key={a.nome.pt} className="flex flex-col gap-3 border-b border-rule p-5 sm:p-6 sm:odd:border-r">
          <div className="flex items-baseline justify-between gap-4">
            <span className="eyebrow">
              <span className="text-accent">{String(i + 1).padStart(2, "0")}</span>
              {"  "}
              {a.area[locale]}
            </span>
            <span className="text-right font-mono text-[0.7rem] text-muted">{a.quando[locale]}</span>
          </div>
          <h3 className="font-serif text-xl leading-snug">{a.nome[locale]}</h3>
          <p className="text-[0.95rem] leading-relaxed text-ink-2">{a.faz[locale]}</p>
          <div className="mt-auto pt-2">
            <Chain passos={a.cadeia} locale={locale} />
          </div>
        </li>
      ))}
    </ol>
  );
}
