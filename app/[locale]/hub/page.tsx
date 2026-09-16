import type { Metadata } from "next";
import { site } from "@/content/site";
import { hub } from "@/content/hub";
import { isLocale, t, type Locale } from "@/lib/i18n";
import { Section } from "@/components/ui/Section";
import { AgentList } from "@/components/catalogo/AgentList";
import { HeroDiagram } from "@/components/diagrams/HeroDiagram";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "pt";
  return { title: `${hub.nome[l]} — ${site.name}`, description: hub.resumo[l] };
}

export default async function HubPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "pt";
  return (
    <>
      <header className="grid gap-10 py-12 sm:py-20 md:grid-cols-[1fr_320px] md:items-center md:gap-16">
        <div>
          <p className="eyebrow">{t("nav_hub", l)}</p>
          <h1 className="mt-3 font-serif text-4xl leading-[1.05] tracking-tight sm:text-6xl">{hub.nome[l]}</h1>
          <p className="mt-6 max-w-[38rem] text-lg leading-relaxed text-ink-2">{hub.resumo[l]}</p>
          <p className="mt-4 font-mono text-xs text-muted">{hub.stack.join("  ·  ")}</p>
        </div>
        <div className="hidden justify-self-end text-ink-2 md:block">
          <HeroDiagram locale={l} />
        </div>
      </header>
      <Section numero="01" titulo={t("section_guarantees", l)}>
        <ol className="grid gap-6 sm:grid-cols-2">
          {hub.garantias.map((g, i) => (
            <li key={i} className="flex gap-4">
              <span className="font-mono text-sm text-accent">{String(i + 1).padStart(2, "0")}</span>
              <p className="leading-relaxed text-ink-2">{g[l]}</p>
            </li>
          ))}
        </ol>
      </Section>
      <Section numero="02" titulo={t("section_agents", l)}>
        <AgentList locale={l} />
      </Section>
    </>
  );
}
