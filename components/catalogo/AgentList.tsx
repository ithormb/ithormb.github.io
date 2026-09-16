import { hub, type Canal } from "@/content/hub";
import type { Locale } from "@/lib/i18n";

const canalLabel: Record<Canal, { pt: string; en: string }> = {
  tela: { pt: "tela", en: "web" },
  whatsapp: { pt: "WhatsApp", en: "WhatsApp" },
  email: { pt: "e-mail", en: "e-mail" },
  tarefa: { pt: "tarefa", en: "task" },
};

export function AgentList({ locale, limite }: { locale: Locale; limite?: number }) {
  const itens = limite ? hub.agentes.slice(0, limite) : hub.agentes;
  return (
    <ol>
      {itens.map((a) => (
        <li
          key={a.nome.pt}
          className="grid gap-2 border-b border-rule py-5 last:border-b-0 sm:grid-cols-[120px_1fr_auto] sm:gap-6"
        >
          <span className="eyebrow pt-1">{a.area[locale]}</span>
          <div>
            <h3 className="font-serif text-xl leading-snug">
              {a.nome[locale]}
              {a.ia && (
                <span
                  title={locale === "pt" ? "conversa em linguagem natural" : "talks in natural language"}
                  className="ml-2 align-middle font-mono text-[0.65rem] uppercase tracking-[0.12em] text-accent"
                >
                  ia
                </span>
              )}
            </h3>
            <p className="mt-1 max-w-[46rem] text-[0.95rem] leading-relaxed text-ink-2">{a.faz[locale]}</p>
          </div>
          <ul className="flex gap-1.5 self-start font-mono text-[0.7rem] text-muted sm:flex-col sm:items-end sm:gap-0.5">
            {a.canais.map((c) => (
              <li key={c}>{canalLabel[c][locale]}</li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}
