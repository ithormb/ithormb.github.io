import { tiposDeNo } from "@/content/automacoes";
import type { Locale } from "@/lib/i18n";

const grupoLabel = {
  logica: { pt: "lógica e transformação", en: "logic and transformation" },
  dados: { pt: "leitura e escrita de dados", en: "data read/write" },
  integracao: { pt: "integração externa", en: "external integration" },
  controle: { pt: "controle de fluxo", en: "flow control" },
};
const grupoCor = { logica: "var(--c1)", dados: "var(--c2)", integracao: "var(--c3)", controle: "var(--muted)" };

// Barras em HTML: o rótulo quebra no mobile e o texto segue o tamanho da página.
export function NodeBars({ locale }: { locale: Locale }) {
  const itens = [...tiposDeNo].sort((a, b) => b.qtd - a.qtd);
  const max = itens[0].qtd;
  return (
    <div>
      <ul className="space-y-2" aria-label={locale === "pt" ? "Tipos de nó mais usados" : "Most used node types"}>
        {itens.map((it) => (
          <li key={it.nome} className="grid grid-cols-[9.5rem_1fr] items-center gap-3 text-xs sm:grid-cols-[11rem_1fr]">
            <span className="truncate text-right text-ink-2">{it.nome}</span>
            <span className="flex items-center gap-2">
              <span className="h-3 rounded-sm" style={{ width: `${(it.qtd / max) * 100}%`, background: grupoCor[it.grupo] }} />
              <span className="font-mono text-muted">{it.qtd}</span>
            </span>
          </li>
        ))}
      </ul>
      <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-1 text-xs text-ink-2">
        {(Object.keys(grupoLabel) as (keyof typeof grupoLabel)[]).map((g) => (
          <li key={g} className="flex items-center gap-2">
            <span className="inline-block size-2.5 rounded-sm" style={{ background: grupoCor[g] }} aria-hidden="true" />
            {grupoLabel[g][locale]}
          </li>
        ))}
      </ul>
    </div>
  );
}
