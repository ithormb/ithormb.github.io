import * as si from "simple-icons";

// Logos oficiais (simple-icons). O que não tem logo livre vira monograma.
const MAPA: Record<string, { path: string; hex: string } | undefined> = {
  n8n: si.siN8n,
  Python: si.siPython,
  Pandas: si.siPandas,
  "scikit-learn": si.siScikitlearn,
  BigQuery: si.siGooglebigquery,
  Looker: si.siLooker,
  Gemini: si.siGooglegemini,
  WhatsApp: si.siWhatsapp,
  FastAPI: si.siFastapi,
  TypeScript: si.siTypescript,
  NestJS: si.siNestjs,
  "Next.js": { path: si.siNextdotjs.path, hex: "FFFFFF" },
  PostgreSQL: si.siPostgresql,
  Docker: si.siDocker,
  Git: si.siGit,
  "Google Cloud": si.siGooglecloud,
  GitHub: { path: si.siGithub.path, hex: "FFFFFF" },
};

// Logo muito escuro some no fundo azul-noite: clareia mantendo o matiz aproximado.
function legivel(hex: string) {
  const n = parseInt(hex, 16);
  const r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
  const lum = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
  if (lum >= 0.3) return `#${hex}`;
  const mix = (c: number) => Math.round(c + (255 - c) * 0.55);
  return `rgb(${mix(r)}, ${mix(g)}, ${mix(b)})`;
}

const MONO: Record<string, { txt: string; cor: string }> = {
  SQL: { txt: "SQL", cor: "#60a5fa" },
  "Power BI": { txt: "BI", cor: "#f2c811" },
  LLMs: { txt: "AI", cor: "#a78bfa" },
  Whisper: { txt: "W", cor: "#e2e8f0" },
  "APIs REST": { txt: "API", cor: "#2dd4bf" },
  "SQL Server": { txt: "SQL", cor: "#f87171" },
  ETL: { txt: "ETL", cor: "#a78bfa" },
};

export function TechIcon({ nome, size = 20 }: { nome: string; size?: number }) {
  const ic = MAPA[nome];
  if (ic) {
    const fill = legivel(ic.hex);
    return (
      <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true" fill={fill}>
        <path d={ic.path} />
      </svg>
    );
  }
  const m = MONO[nome] ?? { txt: nome.slice(0, 2), cor: "#a3aed0" };
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
      <text x="12" y="16.5" textAnchor="middle" fontSize={m.txt.length > 2 ? 8.5 : 11} fontWeight="700" fill={m.cor} fontFamily="ui-sans-serif, system-ui">
        {m.txt}
      </text>
    </svg>
  );
}

export function TechBadge({ nome }: { nome: string }) {
  return (
    <span title={nome} className="flex size-10 items-center justify-center rounded-lg border border-rule bg-surface">
      <TechIcon nome={nome} />
      <span className="sr-only">{nome}</span>
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
