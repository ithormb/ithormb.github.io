import type { Metadata } from "next";
import { site } from "@/content/site";
import { automacoes } from "@/content/automacoes";
import { isLocale, t, type Locale } from "@/lib/i18n";
import { Section } from "@/components/ui/Section";
import { AutomationList } from "@/components/catalogo/AutomationList";
import { Chain } from "@/components/catalogo/Chain";
import { Numbers } from "@/components/catalogo/Numbers";
import { NodeBars } from "@/components/catalogo/NodeBars";
import { Platforms } from "@/components/catalogo/Platforms";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "pt";
  return { title: `${automacoes.nome[l]} — ${site.name}`, description: automacoes.resumo[l] };
}

const legenda = [
  { tipo: "gatilho" as const, label: { pt: "gatilho", en: "trigger" } },
  { tipo: "fonte" as const, label: { pt: "fonte de dados", en: "data source" } },
  { tipo: "processo" as const, label: { pt: "processamento", en: "processing" } },
  { tipo: "saida" as const, label: { pt: "saída", en: "output" } },
];

export default async function AutomacoesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "pt";
  return (
    <>
      <header className="py-12 sm:py-20">
        <p className="eyebrow">{t("nav_automations", l)}</p>
        <h1 className="mt-3 font-serif text-4xl leading-[1.05] tracking-tight sm:text-6xl">{automacoes.nome[l]}</h1>
        <p className="mt-6 max-w-[42rem] text-lg leading-relaxed text-ink-2">{automacoes.resumo[l]}</p>
      </header>
      <Section numero="01" titulo={t("section_numbers", l)}>
        <Numbers locale={l} />
      </Section>
      <Section numero="02" titulo={t("section_nodes", l)}>
        <NodeBars locale={l} />
      </Section>
      <Section numero="03" titulo={t("section_platforms", l)}>
        <Platforms locale={l} />
      </Section>
      <Section numero="04" titulo={t("section_sample", l)}>
        <h3 className="font-serif text-3xl tracking-tight">{automacoes.amostraTitulo[l]}</h3>
        <p className="mt-3 max-w-[42rem] leading-relaxed text-ink-2">{automacoes.amostraResumo[l]}</p>
        <div className="my-6">
          <Chain passos={legenda} locale={l} />
        </div>
        <AutomationList locale={l} />
      </Section>
    </>
  );
}
