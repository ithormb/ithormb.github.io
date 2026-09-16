import { tiposDeNo } from "@/content/automacoes";
import type { Locale } from "@/lib/i18n";

const grupoLabel = {
  logica: { pt: "lógica e transformação", en: "logic and transformation" },
  dados: { pt: "leitura e escrita de dados", en: "data read/write" },
  integracao: { pt: "integração externa", en: "external integration" },
  controle: { pt: "controle de fluxo", en: "flow control" },
};
// Paleta validada para daltonismo: teal · índigo · rosa · cinza.
const grupoCor = { logica: "#0d9488", dados: "#4f46e5", integracao: "#e11d48", controle: "var(--muted)" };

// Barras horizontais em SVG inline: uma linha por tipo de nó, ordenadas por uso.
export function NodeBars({ locale }: { locale: Locale }) {
  const itens = [...tiposDeNo].sort((a, b) => b.qtd - a.qtd);
  const max = itens[0].qtd;
  const row = 26, labelW = 170, barW = 420, numW = 50;
  const W = labelW + barW + numW, H = itens.length * row;
  return (
    <div>
      <div className="overflow-x-auto">
        <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ minWidth: 520, maxWidth: W }} className="font-mono text-[11px]" role="img" aria-label={locale === "pt" ? "Tipos de nó mais usados" : "Most used node types"}>
          {itens.map((it, i) => {
            const y = i * row, w = (it.qtd / max) * barW;
            return (
              <g key={it.nome} transform={`translate(0 ${y})`}>
                <text x={labelW - 10} y={row / 2 + 4} textAnchor="end" fill="currentColor">{it.nome}</text>
                <rect x={labelW} y={6} width={w} height={row - 12} fill={grupoCor[it.grupo]} />
                <text x={labelW + w + 8} y={row / 2 + 4} className="fill-muted">{it.qtd}</text>
              </g>
            );
          })}
        </svg>
      </div>
      <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-1 font-mono text-[0.7rem] text-muted">
        {(Object.keys(grupoLabel) as (keyof typeof grupoLabel)[]).map((g) => (
          <li key={g} className="flex items-center gap-2">
            <span className="inline-block size-2.5" style={{ background: grupoCor[g] }} aria-hidden="true" />
            {grupoLabel[g][locale]}
          </li>
        ))}
      </ul>
    </div>
  );
}
