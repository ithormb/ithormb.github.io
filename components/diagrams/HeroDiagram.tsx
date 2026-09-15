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

// Fluxo de decisão: o modelo só classifica; código e pessoa decidem.
export function HeroDiagram({ locale }: { locale: Locale }) {
  const l = (k: keyof typeof labels) => labels[k][locale];
  return (
    <svg
      viewBox="0 0 320 300"
      className="w-full max-w-[320px] font-mono text-[11px]"
      role="img"
      aria-label={
        locale === "pt"
          ? "Fluxo: fontes de dados, modelo classifica, código decide, pessoa confirma, ação"
          : "Flow: data sources, model classifies, code decides, human confirms, action"
      }
    >
      <defs>
        <marker id="arw" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0 0.5 L7 4 L0 7.5" fill="none" stroke="currentColor" strokeWidth="1" />
        </marker>
      </defs>
      <g fill="none" stroke="currentColor" strokeWidth="1">
        {/* fontes */}
        <rect x="20" y="16" width="280" height="34" rx="2" strokeDasharray="3 3" />
        <line x1="160" y1="50" x2="160" y2="84" markerEnd="url(#arw)" />
        {/* modelo */}
        <rect x="100" y="86" width="120" height="34" rx="2" />
        <line x1="160" y1="120" x2="160" y2="154" markerEnd="url(#arw)" />
        {/* código */}
        <rect x="100" y="156" width="120" height="34" rx="2" strokeWidth="1.6" />
        <line x1="160" y1="190" x2="160" y2="224" markerEnd="url(#arw)" />
        {/* pessoa */}
        <rect x="80" y="226" width="160" height="34" rx="17" className="text-accent" />
        <line x1="240" y1="243" x2="296" y2="243" markerEnd="url(#arw)" />
      </g>
      <g fill="currentColor" textAnchor="middle">
        <text x="160" y="37">{l("sources")}</text>
        <text x="178" y="72" textAnchor="start" className="fill-muted">{l("ro")}</text>
        <text x="160" y="107">{l("model")}</text>
        <text x="178" y="142" textAnchor="start" className="fill-muted">{l("intent")}</text>
        <text x="160" y="177" fontWeight="600">{l("code")}</text>
        <text x="160" y="247" className="fill-accent">{l("human")}</text>
        <text x="268" y="270" className="fill-muted">{l("action")}</text>
      </g>
    </svg>
  );
}
