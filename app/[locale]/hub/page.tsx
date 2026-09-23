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
        <p className="mt-6">{hub.resumo[l]}</p>
        <ul className="mt-5 flex flex-wrap gap-1.5">
          {hub.stack.map((s) => (
            <li key={s} className="rounded-full bg-accent-soft px-3 py-1 text-xs font-medium leading-5 text-accent">{s}</li>
          ))}
        </ul>
      </header>
      <SubSection titulo={t("section_guarantees", l)}>
        <div className="grid items-center gap-10 md:grid-cols-[1fr_300px]">
          <ol className="space-y-5">
            {hub.garantias.map((g, i) => (
              <li key={i} className="flex gap-4 text-sm leading-normal">
                <span className="font-mono text-accent">{String(i + 1).padStart(2, "0")}</span>
                <p><strong className="text-ink">{g.titulo[l]}.</strong> {g[l]}</p>
              </li>
            ))}
          </ol>
          <div className="mx-auto w-full max-w-[300px]">
            <FlowDiagram locale={l} />
          </div>
        </div>
      </SubSection>
      <SubSection titulo={t("section_agents", l)}>
        <AgentList locale={l} />
      </SubSection>
    </Subpage>
  );
}
