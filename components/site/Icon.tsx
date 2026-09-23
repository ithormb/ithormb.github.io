import * as si from "simple-icons";
import { withBase } from "@/lib/paths";

// Logos oficiais, na cor da marca, pensados para fundo claro.
// simple-icons não traz marcas da Microsoft: Power BI e Fabric vêm do pacote
// oficial @fabric-msft/svg-icons (MIT), copiados para public/icons.
const MAPA: Record<string, { path: string; hex: string } | undefined> = {
  n8n: si.siN8n,
  Python: si.siPython,
  Pandas: si.siPandas,
  "scikit-learn": si.siScikitlearn,
  BigQuery: si.siGooglebigquery,
  Looker: si.siLooker,
  Gemini: si.siGooglegemini,
  WhatsApp: si.siWhatsapp,
  PostgreSQL: si.siPostgresql,
  Docker: si.siDocker,
  Git: si.siGit,
  "Google Cloud": si.siGooglecloud,
  GitHub: { path: si.siGithub.path, hex: "FFFFFF" },
};

const ARQUIVO: Record<string, string> = {
  "Power BI": "/icons/power-bi.svg",
  "Microsoft Fabric": "/icons/fabric.svg",
};

const MONO: Record<string, { txt: string; cor: string }> = {
  SQL: { txt: "SQL", cor: "#1d4ed8" },
  LLMs: { txt: "AI", cor: "#7c3aed" },
  Whisper: { txt: "W", cor: "#111827" },
  "APIs REST": { txt: "API", cor: "#0f766e" },
  "SQL Server": { txt: "SQL", cor: "#b91c1c" },
  ETL: { txt: "ETL", cor: "#6d28d9" },
};

export function TechIcon({ nome, size = 20 }: { nome: string; size?: number }) {
  const arq = ARQUIVO[nome];
  if (arq)
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={withBase(arq)} alt="" width={size} height={size} aria-hidden="true" />;
  const ic = MAPA[nome];
  if (ic)
    return (
      <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true" fill={`#${ic.hex}`}>
        <path d={ic.path} />
      </svg>
    );
  const m = MONO[nome] ?? { txt: nome.slice(0, 2), cor: "#334155" };
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
      <text x="12" y="16.5" textAnchor="middle" fontSize={m.txt.length > 2 ? 8.5 : 11} fontWeight="800" fill={m.cor} fontFamily="ui-sans-serif, system-ui">
        {m.txt}
      </text>
    </svg>
  );
}

// Selo claro com o logo; o nome aparece ao passar o mouse ou ao focar pelo teclado.
export function TechBadge({ nome }: { nome: string }) {
  return (
    <span
      tabIndex={0}
      aria-label={nome}
      className="group relative flex size-12 items-center justify-center rounded-xl bg-white shadow-[0_4px_14px_-4px_rgba(139,92,246,0.45)] ring-1 ring-white/10 transition hover:-translate-y-0.5 hover:shadow-[0_8px_22px_-6px_rgba(139,92,246,0.7)] focus-visible:-translate-y-0.5 motion-reduce:hover:translate-y-0"
    >
      <TechIcon nome={nome} size={26} />
      <span
        role="tooltip"
        className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-2 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-md bg-ink px-2 py-1 text-xs font-semibold text-bg opacity-0 shadow-lg transition group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100"
      >
        {nome}
      </span>
    </span>
  );
}

// Ícones de traço para os cards de números.
export function StatIcon({ kind }: { kind: "chart" | "bot" | "flow" | "factory" }) {
  const p = { width: 20, height: 20, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };
  switch (kind) {
    case "chart":
      return <svg {...p}><path d="M4 20V10M10 20V4M16 20v-7M22 20H2" /></svg>;
    case "bot":
      return <svg {...p}><rect x="4" y="8" width="16" height="12" rx="3" /><path d="M12 4v4M9 14h.01M15 14h.01" /></svg>;
    case "flow":
      return <svg {...p}><rect x="2" y="3" width="7" height="6" rx="1.5" /><rect x="15" y="3" width="7" height="6" rx="1.5" /><rect x="8.5" y="15" width="7" height="6" rx="1.5" /><path d="M5.5 9v2.5a1.5 1.5 0 0 0 1.5 1.5h10a1.5 1.5 0 0 0 1.5-1.5V9M12 13v2" /></svg>;
    case "factory":
      return <svg {...p}><path d="M2 20V9l6 4V9l6 4V5h4l2 15z" /><path d="M2 20h20" /></svg>;
  }
}
