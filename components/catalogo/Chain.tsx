import type { Passo } from "@/content/automacoes";
import type { Locale } from "@/lib/i18n";

function getNodeConfig(passo: Passo) {
  const lbl = (passo.label.pt || "").toLowerCase();

  // WhatsApp
  if (lbl.includes("whatsapp")) {
    return {
      badge: "text-[#25D366] bg-[#25D366]/10 border-[#25D366]/25",
      border: "border-[#25D366]/30 hover:border-[#25D366]/60",
      icon: (
        <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor" aria-hidden="true">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      ),
    };
  }

  // ERP / Banco de Dados
  if (lbl.includes("erp")) {
    return {
      badge: "text-blue-600 bg-blue-500/10 border-blue-500/25",
      border: "border-blue-500/30 hover:border-blue-500/60",
      icon: (
        <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
      ),
    };
  }

  // MES / Chão de fábrica
  if (lbl.includes("mes")) {
    return {
      badge: "text-amber-600 bg-amber-500/10 border-amber-500/25",
      border: "border-amber-500/30 hover:border-amber-500/60",
      icon: (
        <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M2 20V9l6 4V9l6 4V5h4l2 15z" />
          <path d="M2 20h20" />
        </svg>
      ),
    };
  }

  // Planilha / Google Sheets / Excel
  if (lbl.includes("planilha") || lbl.includes("sheets") || lbl.includes("excel")) {
    return {
      badge: "text-emerald-600 bg-emerald-500/10 border-emerald-500/25",
      border: "border-emerald-500/30 hover:border-emerald-500/60",
      icon: (
        <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18M3 15h18M9 3v18" />
        </svg>
      ),
    };
  }

  // OneDrive / Nuvem
  if (lbl.includes("onedrive")) {
    return {
      badge: "text-sky-600 bg-sky-500/10 border-sky-500/25",
      border: "border-sky-500/30 hover:border-sky-500/60",
      icon: (
        <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
        </svg>
      ),
    };
  }

  // Cron / Agendador
  if (lbl.includes("cron")) {
    return {
      badge: "text-orange-600 bg-orange-500/10 border-orange-500/25",
      border: "border-orange-500/30 hover:border-orange-500/60",
      icon: (
        <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
    };
  }

  // Comando / Disparo
  if (lbl.includes("comando") || lbl.includes("command")) {
    return {
      badge: "text-slate-600 bg-slate-500/10 border-slate-500/25",
      border: "border-slate-500/30 hover:border-slate-500/60",
      icon: (
        <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polyline points="4 17 10 11 4 5" />
          <line x1="12" y1="19" x2="20" y2="19" />
        </svg>
      ),
    };
  }

  // Erro / Central de Erros
  if (lbl.includes("erro") || lbl.includes("error")) {
    return {
      badge: "text-rose-600 bg-rose-500/10 border-rose-500/25",
      border: "border-rose-500/30 hover:border-rose-500/60",
      icon: (
        <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
          <line x1="12" y1="9" x2="12" y2="13" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
      ),
    };
  }

  // OEE / Indicador
  if (lbl.includes("oee")) {
    return {
      badge: "text-indigo-600 bg-indigo-500/10 border-indigo-500/25",
      border: "border-indigo-500/30 hover:border-indigo-500/60",
      icon: (
        <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M3 3v18h18" />
          <path d="m7 14 4-4 4 4 5-6" />
        </svg>
      ),
    };
  }

  // Imagem / Render
  if (lbl.includes("imagem") || lbl.includes("image")) {
    return {
      badge: "text-violet-600 bg-violet-500/10 border-violet-500/25",
      border: "border-violet-500/30 hover:border-violet-500/60",
      icon: (
        <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <polyline points="21 15 16 10 5 21" />
        </svg>
      ),
    };
  }

  // PDF / Documento
  if (lbl.includes("pdf")) {
    return {
      badge: "text-red-600 bg-red-500/10 border-red-500/25",
      border: "border-red-500/30 hover:border-red-500/60",
      icon: (
        <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
        </svg>
      ),
    };
  }

  // E-mail transacional
  if (lbl.includes("e-mail") || lbl.includes("email")) {
    return {
      badge: "text-teal-600 bg-teal-500/10 border-teal-500/25",
      border: "border-teal-500/30 hover:border-teal-500/60",
      icon: (
        <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
    };
  }

  // Tarefa / Planner / FlowPilot
  if (lbl.includes("tarefa") || lbl.includes("task")) {
    return {
      badge: "text-purple-600 bg-purple-500/10 border-purple-500/25",
      border: "border-purple-500/30 hover:border-purple-500/60",
      icon: (
        <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
    };
  }

  // Cruzamento / Match
  if (lbl.includes("cruzamento") || lbl.includes("match")) {
    return {
      badge: "text-cyan-600 bg-cyan-500/10 border-cyan-500/25",
      border: "border-cyan-500/30 hover:border-cyan-500/60",
      icon: (
        <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="18" cy="18" r="3" />
          <circle cx="6" cy="6" r="3" />
          <path d="M6 21V9a9 9 0 0 0 9 9" />
        </svg>
      ),
    };
  }

  // Faixa / Range
  if (lbl.includes("faixa") || lbl.includes("range")) {
    return {
      badge: "text-amber-600 bg-amber-500/10 border-amber-500/25",
      border: "border-amber-500/30 hover:border-amber-500/60",
      icon: (
        <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <line x1="4" y1="21" x2="4" y2="14" />
          <line x1="4" y1="10" x2="4" y2="3" />
          <line x1="12" y1="21" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12" y2="3" />
          <line x1="20" y1="21" x2="20" y2="16" />
          <line x1="20" y1="12" x2="20" y2="3" />
          <line x1="1" y1="14" x2="7" y2="14" />
          <line x1="9" y1="8" x2="15" y2="8" />
          <line x1="17" y1="16" x2="23" y2="16" />
        </svg>
      ),
    };
  }

  // Líder / Usuário
  if (lbl.includes("líder") || lbl.includes("leader")) {
    return {
      badge: "text-blue-600 bg-blue-500/10 border-blue-500/25",
      border: "border-blue-500/30 hover:border-blue-500/60",
      icon: (
        <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ),
    };
  }

  // Atraso / Validação
  if (lbl.includes("atraso") || lbl.includes("lateness")) {
    return {
      badge: "text-rose-600 bg-rose-500/10 border-rose-500/25",
      border: "border-rose-500/30 hover:border-rose-500/60",
      icon: (
        <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      ),
    };
  }

  // Fallbacks por tipo genérico (gatilho, fonte, processo, saida)
  switch (passo.tipo) {
    case "gatilho":
      return {
        badge: "text-amber-600 bg-amber-500/10 border-amber-500/25",
        border: "border-amber-500/30 hover:border-amber-500/60",
        icon: (
          <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
        ),
      };
    case "fonte":
      return {
        badge: "text-blue-600 bg-blue-500/10 border-blue-500/25",
        border: "border-blue-500/30 hover:border-blue-500/60",
        icon: (
          <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          </svg>
        ),
      };
    case "processo":
      return {
        badge: "text-purple-600 bg-purple-500/10 border-purple-500/25",
        border: "border-purple-500/30 hover:border-purple-500/60",
        icon: (
          <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
          </svg>
        ),
      };
    case "saida":
      return {
        badge: "text-accent-ink bg-accent/10 border-accent/25",
        border: "border-accent/30 hover:border-accent/60",
        icon: (
          <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="22 2 11 13" />
            <polygon points="22 2 15 22 11 13 2 9 22 2" />
          </svg>
        ),
      };
  }
}

export function Chain({ passos, locale }: { passos: Passo[]; locale: Locale }) {
  return (
    <ol className="flex flex-wrap items-center gap-1.5 sm:gap-2">
      {passos.map((s, i) => {
        const config = getNodeConfig(s);
        return (
          <li key={i} className="flex items-center">
            {i > 0 && (
              <span aria-hidden="true" className="mx-1 text-muted/60 select-none">
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </span>
            )}
            <div
              className={`group/node inline-flex items-center gap-1.5 rounded-lg border bg-surface px-2.5 py-1 text-xs shadow-[0_2px_6px_-2px_rgba(23,18,14,0.08)] transition hover:-translate-y-0.5 hover:shadow-md ${config.border}`}
            >
              <span className={`flex size-4.5 items-center justify-center rounded-md border ${config.badge}`}>
                {config.icon}
              </span>
              <span className="font-sans text-[0.75rem] font-semibold tracking-tight text-ink">
                {s.label[locale]}
              </span>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
