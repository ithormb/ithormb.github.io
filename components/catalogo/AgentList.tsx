import { hub, type Canal } from "@/content/hub";
import type { Locale } from "@/lib/i18n";

const canalLabel: Record<Canal, { pt: string; en: string }> = {
  tela: { pt: "tela", en: "web" },
  whatsapp: { pt: "WhatsApp", en: "WhatsApp" },
  email: { pt: "e-mail", en: "e-mail" },
  tarefa: { pt: "tarefa", en: "task" },
};

export function AgentList({ locale }: { locale: Locale }) {
  return (
    <ol className="space-y-10">
      {hub.agentes.map((a) => (
        <li key={a.nome.pt} className="grid sm:grid-cols-8 sm:gap-8 md:gap-4">
          <p className="mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted sm:col-span-2">{a.area[locale]}</p>
          <div className="sm:col-span-6">
            <h3 className="font-medium leading-snug text-ink">
              {a.nome[locale]}
              {a.ia && (
                <span className="ml-2 rounded-full bg-accent-soft px-2 py-0.5 align-middle text-[0.65rem] font-semibold uppercase tracking-wider text-accent">
                  IA
                </span>
              )}
            </h3>
            <p className="mt-2 text-sm leading-normal">{a.faz[locale]}</p>
            <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="canais">
              {a.canais.map((c) => (
                <li key={c} className="rounded-full border border-rule px-3 py-1 text-xs text-ink-2">{canalLabel[c][locale]}</li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ol>
  );
}
