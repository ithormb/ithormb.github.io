import type { Metadata } from "next";
import { site } from "@/content/site";
import { automacoes } from "@/content/automacoes";
import { isLocale, t, type Locale } from "@/lib/i18n";
import { Subpage, SubSection } from "@/components/ui/Subpage";
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
    <Subpage locale={l} path="/automacoes/">
      <header className="mt-10">
        <h1 className="text-4xl font-bold tracking-tight text-ink sm:text-5xl">{automacoes.nome[l]}</h1>
        <p className="mt-6">{automacoes.resumo[l]}</p>
      </header>
      <SubSection titulo={t("section_numbers", l)}>
        <Numbers locale={l} />
      </SubSection>
      <SubSection titulo={t("section_nodes", l)}>
        <NodeBars locale={l} />
      </SubSection>
      <SubSection titulo={t("section_platforms", l)}>
        <Platforms locale={l} />
      </SubSection>
      <SubSection titulo={t("section_sample", l)}>
        <p className="text-sm">{automacoes.amostraResumo[l]}</p>
        <div className="my-8">
          <Chain passos={legenda} locale={l} />
        </div>
        <AutomationList locale={l} />
      </SubSection>
    </Subpage>
  );
}
