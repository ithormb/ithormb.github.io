import type { Metadata } from "next";
import { site } from "@/content/site";
import { hub } from "@/content/hub";
import { isLocale, t, type Locale } from "@/lib/i18n";
import { Subpage, SubSection } from "@/components/ui/Subpage";
import { AgentList } from "@/components/catalogo/AgentList";
import { FlowDiagram } from "@/components/diagrams/FlowDiagram";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "pt";
  return { title: `${hub.nome[l]} — ${site.name}`, description: hub.resumo[l] };
}

export default async function HubPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "pt";
  return (
    <Subpage locale={l} path="/hub/">
      <header className="mt-10">
        <h1 className="text-4xl font-bold tracking-tight text-ink sm:text-5xl">{hub.nome[l]}</h1>
        <p className="mt-6 text-lg text-ink-2 leading-relaxed">{hub.resumo[l]}</p>
        <ul className="mt-5 flex flex-wrap gap-1.5">
          {hub.stack.map((s) => (
            <li key={s} className="rounded-full border border-accent/20 bg-accent-soft px-3 py-1 text-xs font-semibold leading-5 text-accent-ink">{s}</li>
          ))}
        </ul>
      </header>

      {/* Grid de Métricas de Negócio do Hub */}
      <div className="mt-10">
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-rule bg-rule sm:grid-cols-4 shadow-sm">
          {hub.metricas.map((m) => (
            <div key={m.rotulo.pt} className="flex flex-col bg-bg p-5">
              <dt className="order-2 mt-1.5 text-xs leading-snug text-ink-2">{m.rotulo[l]}</dt>
              <dd className="order-1 flex items-center gap-2">
                <span className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-ink">{m.valor}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <SubSection titulo={t("section_guarantees", l)}>
        <div className="grid items-center gap-10 md:grid-cols-[1fr_300px]">
          <ol className="space-y-3.5">
            {hub.garantias.map((g, i) => (
              <li key={i} className="rounded-xl border border-rule bg-surface p-4 text-sm leading-normal shadow-sm">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <span className="font-mono text-xs font-bold text-accent-ink bg-accent/10 rounded px-2 py-0.5 border border-accent/25">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <strong className="text-ink font-semibold text-base">{g.titulo[l]}</strong>
                </div>
                <p className="text-ink-2 leading-relaxed pl-8">{g[l]}</p>
              </li>
            ))}
          </ol>
          <div className="mx-auto w-full max-w-[300px] flex flex-col items-center">
            <FlowDiagram locale={l} />
            <p className="mt-3 text-center text-xs text-muted font-mono">
              {l === "pt" ? "Controle determinístico e governança de ponta a ponta" : "Deterministic control and end-to-end governance"}
            </p>
          </div>
        </div>
      </SubSection>

      <SubSection titulo={t("section_agents", l)}>
        <AgentList locale={l} />
      </SubSection>
    </Subpage>
  );
}
