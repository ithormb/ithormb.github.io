import type { Thumb as Kind } from "@/content/site";

// Miniaturas ilustrativas desenhadas à mão — nenhum dado real, nenhuma captura de tela.
const W = 200, H = 120;

// A página é clara; a miniatura imita uma tela de sistema escura.
const TELA = {
  "--surface": "#16202e",
  "--rule": "#2b3a4f",
  "--muted": "#6b7a90",
  "--ink": "#e2e8f0",
  "--accent": "#fb923c",
  "--c1": "#2dd4bf",
  "--c2": "#818cf8",
  "--c3": "#fb7185",
} as React.CSSProperties;

function Frame({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      role="img"
      aria-label={label}
      className="w-full rounded-lg shadow-[0_10px_24px_-12px_rgba(23,18,14,0.45)]"
      style={TELA}
    >
      <rect width={W} height={H} fill="var(--surface)" />
      {children}
    </svg>
  );
}

const line = "var(--rule)";
const soft = "var(--muted)";

function Hub() {
  return (
    <Frame label="Ilustração: painel do hub de agentes">
      <rect x="0" y="0" width="46" height={H} fill="#101824" />
      {[18, 32, 46, 60, 74].map((y, i) => (
        <rect key={y} x="10" y={y} width={i === 1 ? 28 : 22} height="5" rx="2" fill={i === 1 ? "var(--accent)" : soft} opacity={i === 1 ? 0.9 : 0.5} />
      ))}
      <rect x="58" y="12" width="70" height="6" rx="3" fill="var(--ink)" opacity="0.8" />
      <rect x="140" y="12" width="48" height="6" rx="3" fill={soft} opacity="0.5" />
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(${58 + i * 44} 28)`}>
          <rect width="38" height="26" rx="3" fill="none" stroke={line} />
          <rect x="6" y="7" width="16" height="4" rx="2" fill={soft} opacity="0.6" />
          <rect x="6" y="15" width="22" height="5" rx="2" fill={["var(--c1)", "var(--c2)", "var(--c3)"][i]} />
        </g>
      ))}
      {[14, 26, 20, 34, 30, 40, 24, 36].map((h, i) => (
        <rect key={i} x={60 + i * 16} y={108 - h} width="9" height={h} rx="1.5" fill="var(--c1)" opacity={0.35 + i * 0.07} />
      ))}
    </Frame>
  );
}

function WhatsApp() {
  return (
    <Frame label="Ilustração: conversa com o agente no WhatsApp">
      <rect x="0" y="0" width={W} height="20" fill="#101824" />
      <circle cx="14" cy="10" r="5" fill="var(--c1)" opacity="0.8" />
      <rect x="24" y="7" width="40" height="5" rx="2" fill="var(--ink)" opacity="0.7" />
      <g>
        <rect x="80" y="28" width="110" height="24" rx="6" fill="#134e4a" />
        <rect x="88" y="35" width="80" height="4" rx="2" fill="var(--ink)" opacity="0.8" />
        <rect x="88" y="43" width="56" height="4" rx="2" fill="var(--ink)" opacity="0.5" />
      </g>
      <g>
        <rect x="10" y="58" width="120" height="52" rx="6" fill="#223044" />
        <rect x="18" y="65" width="70" height="4" rx="2" fill="var(--accent)" opacity="0.9" />
        {[0, 1, 2].map((i) => (
          <g key={i} transform={`translate(18 ${76 + i * 10})`}>
            <rect width="8" height="5" rx="1" fill={soft} />
            <rect x="12" width={[56, 44, 64][i]} height="5" rx="2" fill="var(--ink)" opacity="0.55" />
          </g>
        ))}
      </g>
      <path d="M170 102 l4 4 l8 -9" fill="none" stroke="var(--c1)" strokeWidth="2" />
    </Frame>
  );
}

function N8n() {
  const nodes = [
    { x: 14, y: 50, c: soft },
    { x: 56, y: 26, c: "var(--c2)" },
    { x: 56, y: 74, c: "var(--c2)" },
    { x: 100, y: 50, c: "var(--c1)" },
    { x: 144, y: 30, c: "var(--c3)" },
    { x: 144, y: 72, c: "var(--c3)" },
  ];
  const edges = [[0, 1], [0, 2], [1, 3], [2, 3], [3, 4], [3, 5]];
  return (
    <Frame label="Ilustração: grafo de nós de um workflow">
      {edges.map(([a, b]) => {
        const A = nodes[a], B = nodes[b];
        const x1 = A.x + 30, y1 = A.y + 10, x2 = B.x, y2 = B.y + 10, mx = (x1 + x2) / 2;
        return <path key={`${a}-${b}`} d={`M${x1} ${y1} C${mx} ${y1} ${mx} ${y2} ${x2} ${y2}`} fill="none" stroke={soft} strokeWidth="1.2" opacity="0.7" />;
      })}
      {nodes.map((n, i) => (
        <g key={i} transform={`translate(${n.x} ${n.y})`}>
          <rect width="30" height="20" rx="4" fill="#101824" stroke={n.c} strokeWidth="1.5" />
          <rect x="7" y="8" width="16" height="4" rx="2" fill={n.c} opacity="0.8" />
        </g>
      ))}
    </Frame>
  );
}

function Clusters() {
  const pts: [number, number, number][] = [
    [40, 40, 0], [52, 34, 0], [46, 52, 0], [34, 48, 0], [58, 46, 0], [48, 28, 0],
    [120, 30, 1], [132, 40, 1], [112, 42, 1], [126, 24, 1], [140, 32, 1],
    [90, 86, 2], [102, 94, 2], [80, 96, 2], [96, 78, 2], [110, 84, 2], [86, 104, 2],
  ];
  const cs = ["var(--c1)", "var(--c2)", "var(--c3)"];
  return (
    <Frame label="Ilustração: filiais agrupadas por K-Means">
      <path d={`M16 12 V108 H188`} fill="none" stroke={line} />
      {[[46, 42], [126, 34], [95, 90]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="22" fill={cs[i]} opacity="0.08" />
      ))}
      {pts.map(([x, y, c], i) => (
        <circle key={i} cx={x} cy={y} r="3.2" fill={cs[c]} />
      ))}
    </Frame>
  );
}

function Bi() {
  const panel = (x: number, c: string) => (
    <g transform={`translate(${x} 12)`}>
      <rect width="86" height="96" rx="4" fill="#101824" stroke={line} />
      <rect x="8" y="8" width="30" height="5" rx="2" fill={c} />
      {[0, 1, 2].map((i) => (
        <rect key={i} x={8 + i * 25} y="20" width="20" height="14" rx="2" fill="none" stroke={line} />
      ))}
      {[22, 34, 28, 44, 38].map((h, i) => (
        <rect key={i} x={10 + i * 15} y={88 - h} width="9" height={h} rx="1.5" fill={c} opacity="0.7" />
      ))}
    </g>
  );
  return (
    <Frame label="Ilustração: o mesmo painel em duas ferramentas">
      {panel(10, "var(--c2)")}
      <text x="100" y="64" textAnchor="middle" fontSize="10" fill={soft} fontFamily="ui-monospace, monospace">×</text>
      {panel(104, "var(--c1)")}
    </Frame>
  );
}

function Forecast() {
  const hist = [70, 64, 68, 58, 62, 54, 57, 50, 52, 46];
  const fut = [46, 42, 44, 38, 36];
  const toPath = (arr: number[], x0: number) => arr.map((y, i) => `${i ? "L" : "M"}${x0 + i * 14} ${y}`).join(" ");
  return (
    <Frame label="Ilustração: série histórica e previsão">
      {[30, 55, 80, 105].map((y) => (
        <line key={y} x1="12" x2="188" y1={y} y2={y} stroke={line} />
      ))}
      <path d={`M${14 + 9 * 14} 40 L${14 + 13 * 14} 26 L${14 + 13 * 14} 50 L${14 + 9 * 14} 52 Z`} fill="var(--c3)" opacity="0.12" />
      <path d={toPath(hist, 14)} fill="none" stroke="var(--c2)" strokeWidth="2" />
      <path d={toPath(fut, 14 + 9 * 14)} fill="none" stroke="var(--c3)" strokeWidth="2" strokeDasharray="4 3" />
      <circle cx={14 + 9 * 14} cy="46" r="3" fill="var(--ink)" />
    </Frame>
  );
}

export function Thumb({ kind }: { kind: Kind }) {
  switch (kind) {
    case "hub": return <Hub />;
    case "whatsapp": return <WhatsApp />;
    case "n8n": return <N8n />;
    case "clusters": return <Clusters />;
    case "bi": return <Bi />;
    case "forecast": return <Forecast />;
  }
}
