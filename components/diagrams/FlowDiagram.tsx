import type { Locale } from "@/lib/i18n";

const labels = {
  sources: { pt: "ERP · MES · planilha", en: "ERP · MES · sheets" },
  ro: { pt: "somente leitura", en: "read-only" },
  model: { pt: "modelo", en: "model" },
  intent: { pt: "intenção", en: "intent" },
  code: { pt: "código", en: "code" },
  human: { pt: "pessoa confirma", en: "human confirms" },
  action: { pt: "ação", en: "action" },
};

// O modelo só classifica; código e pessoa decidem.
export function FlowDiagram({ locale }: { locale: Locale }) {
  const l = (k: keyof typeof labels) => labels[k][locale];
  const box = (y: number, w: number, label: string, cor: string, forte = false, pill = false) => (
    <g>
      <rect x={160 - w / 2} y={y} width={w} height="34" rx={pill ? 17 : 5} fill="var(--surface)" stroke={cor} strokeWidth={forte ? 1.8 : 1.2} />
      <text x="160" y={y + 21} textAnchor="middle" fill={cor === "var(--rule)" ? "var(--ink-2)" : cor} fontWeight={forte ? 600 : 400}>{label}</text>
    </g>
  );
  return (
    <svg viewBox="0 0 320 290" className="w-full max-w-[340px] text-[11px]" role="img" aria-label={locale === "pt" ? "Fluxo: fontes, modelo classifica, código decide, pessoa confirma, ação" : "Flow: sources, model classifies, code decides, human confirms, action"}>
      <defs>
        <marker id="arw" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0 0.5 L7 4 L0 7.5" fill="none" stroke="var(--muted)" strokeWidth="1" />
        </marker>
      </defs>
      <g stroke="var(--muted)" strokeWidth="1">
        <line x1="160" y1="44" x2="160" y2="80" markerEnd="url(#arw)" />
        <line x1="160" y1="116" x2="160" y2="150" markerEnd="url(#arw)" />
        <line x1="160" y1="186" x2="160" y2="220" markerEnd="url(#arw)" />
        <line x1="240" y1="239" x2="300" y2="239" markerEnd="url(#arw)" />
      </g>
      {box(10, 260, l("sources"), "var(--rule)")}
      {box(82, 120, l("model"), "var(--c2)")}
      {box(152, 120, l("code"), "var(--ink)", true)}
      {box(222, 160, l("human"), "var(--accent)", false, true)}
      <g fill="var(--muted)">
        <text x="170" y="66">{l("ro")}</text>
        <text x="170" y="137">{l("intent")}</text>
        <text x="268" y="262">{l("action")}</text>
      </g>
    </svg>
  );
}
