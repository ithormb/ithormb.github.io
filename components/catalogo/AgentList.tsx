import React from "react";
import { hub, type Canal, type Agente } from "@/content/hub";
import type { Locale } from "@/lib/i18n";

const canalInfo: Record<Canal, { label: { pt: string; en: string }; badge: string; icon: React.ReactNode }> = {
  whatsapp: {
    label: { pt: "WhatsApp", en: "WhatsApp" },
    badge: "text-[#128C7E] bg-[#25D366]/10 border-[#25D366]/30",
    icon: (
      <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor" aria-hidden="true">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
      </svg>
    ),
  },
  tela: {
    label: { pt: "Hub Web", en: "Web Hub" },
    badge: "text-blue-700 bg-blue-500/10 border-blue-500/25",
    icon: (
      <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  tarefa: {
    label: { pt: "Tarefa FlowPilot", en: "FlowPilot Task" },
    badge: "text-purple-700 bg-purple-500/10 border-purple-500/25",
    icon: (
      <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  email: {
    label: { pt: "E-mail", en: "Email" },
    badge: "text-teal-700 bg-teal-500/10 border-teal-500/25",
    icon: (
      <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
};

export function AgentList({ locale }: { locale: Locale }) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {hub.agentes.map((a: Agente) => (
        <div
          key={a.nome.pt}
          className="group relative flex flex-col justify-between rounded-2xl border border-rule bg-surface p-6 shadow-sm transition hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg motion-reduce:hover:translate-y-0"
        >
          <div>
            {/* Cabeçalho do Card com Área e Badge de IA */}
            <div className="flex items-center justify-between gap-2">
              <span className="text-[0.7rem] font-bold uppercase tracking-wider text-muted">
                {a.area[locale]}
              </span>
              {a.ia ? (
                <span className="inline-flex items-center gap-1 rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 text-[0.68rem] font-semibold text-accent-ink">
                  <span className="text-accent text-[0.8rem]">✦</span>
                  {locale === "pt" ? "IA Conversacional" : "Conversational AI"}
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 rounded-full border border-blue-500/25 bg-blue-500/10 px-2.5 py-0.5 text-[0.68rem] font-semibold text-blue-700">
                  <span>⚡</span>
                  {locale === "pt" ? "Motor Analítico" : "Analytical Engine"}
                </span>
              )}
            </div>

            {/* Nome do Agente */}
            <h3 className="mt-3 text-lg font-bold leading-snug text-ink transition-colors group-hover:text-accent-ink">
              {a.nome[locale]}
            </h3>

            {/* Descrição do que faz */}
            <p className="mt-2 text-sm leading-relaxed text-ink-2">
              {a.faz[locale]}
            </p>

            {/* Bloco de Impacto / Valor de Negócio Medido */}
            {a.impacto && (
              <div className="mt-4 rounded-xl border border-accent/25 bg-surface-2 px-3.5 py-2.5 text-xs">
                <p className="mb-1 flex items-center gap-1 font-bold text-accent-ink">
                  <span>✦</span>
                  <span>{locale === "pt" ? "Impacto Comprovado:" : "Verified Impact:"}</span>
                </p>
                <p className="font-medium leading-relaxed text-ink-2">
                  {a.impacto[locale]}
                </p>
              </div>
            )}
          </div>

          {/* Rodapé do Card: Fontes e Canais */}
          <div className="mt-5 border-t border-rule/70 pt-4 space-y-3">
            {/* Fontes conectadas */}
            {a.fontes && a.fontes.length > 0 && (
              <div className="flex items-center gap-2">
                <span className="text-[0.68rem] font-semibold text-muted shrink-0 flex items-center gap-1">
                  <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <ellipse cx="12" cy="5" rx="9" ry="3" />
                    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                  </svg>
                  {locale === "pt" ? "Leitura:" : "Reads:"}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {a.fontes.map((f) => (
                    <span
                      key={f}
                      className="rounded-md border border-rule/80 bg-surface-2/40 px-2 py-0.5 font-mono text-[0.68rem] text-ink-2"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Canais de Saída */}
            <div className="flex items-center gap-2">
              <span className="text-[0.68rem] font-semibold text-muted shrink-0 flex items-center gap-1">
                <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 2 11 13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
                {locale === "pt" ? "Entrega:" : "Delivery:"}
              </span>
              <ul className="flex flex-wrap items-center gap-1.5" aria-label="canais">
                {a.canais.map((c) => {
                  const info = canalInfo[c];
                  return (
                    <li
                      key={c}
                      className={`inline-flex items-center gap-1 rounded-md border px-2 py-0.5 text-[0.7rem] font-medium ${info.badge}`}
                    >
                      {info.icon}
                      <span>{info.label[locale]}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
