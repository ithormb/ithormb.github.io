import type { Locale } from "@/lib/i18n";
import { forms } from "@/content/forms";

// Hub Forms no centro; a seta diz quem lê de quem.
export function FormsDiagram({ locale }: { locale: Locale }) {
  const W = 560;
  const H = 360;
  const cx = W / 2;
  const cy = H / 2;
  const itens = forms.integracoes;
  const raioX = 205;
  const raioY = 135;
  const nos = itens.map((it, i) => {
    const ang = -Math.PI / 2 + (i * 2 * Math.PI) / itens.length;
    return { ...it, x: cx + raioX * Math.cos(ang), y: cy + raioY * Math.sin(ang) };
  });
  const cor = (s: "le" | "escreve" | "ambos") => (s === "le" ? "var(--c1)" : s === "escreve" ? "var(--accent)" : "var(--c2)");
  const legenda = {
    le: { pt: "lê do sistema", en: "reads from" },
    escreve: { pt: "entrega para", en: "delivers to" },
    ambos: { pt: "mesmo banco", en: "same database" },
  };
  return (
    <figure className="w-full">
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full text-[12px]" role="img" aria-label={locale === "pt" ? "Integrações do Hub Forms" : "Hub Forms integrations"}>
        <defs>
          {(["le", "escreve", "ambos"] as const).map((s) => (
            <marker key={s} id={`fd-${s}`} viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M0 0.5 L7 4 L0 7.5" fill="none" stroke={cor(s)} strokeWidth="1.4" />
            </marker>
          ))}
        </defs>
        {nos.map((n) => {
          // A linha sai da borda do centro e para antes do nó.
          const dx = n.x - cx;
          const dy = n.y - cy;
          const d = Math.hypot(dx, dy);
          const ux = dx / d;
          const uy = dy / d;
          const x1 = cx + ux * 62;
          const y1 = cy + uy * 34;
          const x2 = n.x - ux * 58;
          const y2 = n.y - uy * 22;
          const [a, b] = n.sentido === "le" ? [{ x: x2, y: y2 }, { x: x1, y: y1 }] : [{ x: x1, y: y1 }, { x: x2, y: y2 }];
          return (
            <line
              key={n.nome}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke={cor(n.sentido)}
              strokeWidth="1.4"
              strokeDasharray={n.sentido === "ambos" ? "4 3" : undefined}
              markerEnd={`url(#fd-${n.sentido})`}
              markerStart={n.sentido === "ambos" ? `url(#fd-${n.sentido})` : undefined}
            />
          );
        })}
        <g>
          <rect x={cx - 62} y={cy - 34} width="124" height="68" rx="14" fill="var(--accent)" />
          <text x={cx} y={cy - 4} textAnchor="middle" fill="#fff" fontWeight="700" fontSize="15">Hub Forms</text>
          <text x={cx} y={cy + 15} textAnchor="middle" fill="#fff" opacity="0.9" fontSize="11">PostgreSQL</text>
        </g>
        {nos.map((n) => (
          <g key={n.nome}>
            <rect x={n.x - 58} y={n.y - 18} width="116" height="36" rx="18" fill="var(--surface)" stroke={cor(n.sentido)} strokeWidth="1.3" />
            <text x={n.x} y={n.y + 4} textAnchor="middle" fill="var(--ink)" fontWeight="600">{n.nome}</text>
          </g>
        ))}
      </svg>
      <figcaption className="mt-3 flex flex-wrap justify-center gap-x-5 gap-y-1 text-xs text-muted">
        {(["le", "escreve", "ambos"] as const).map((s) => (
          <span key={s} className="inline-flex items-center gap-1.5">
            <span aria-hidden="true" className="inline-block h-0.5 w-5" style={{ background: cor(s) }} />
            {legenda[s][locale]}
          </span>
        ))}
      </figcaption>
    </figure>
  );
}
