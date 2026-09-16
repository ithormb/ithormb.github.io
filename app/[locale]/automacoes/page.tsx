import type { Metadata } from "next";
import { site } from "@/content/site";
import { automacoes } from "@/content/automacoes";
import { isLocale, t, type Locale } from "@/lib/i18n";
import { Section } from "@/components/ui/Section";
import { AutomationList } from "@/components/catalogo/AutomationList";
import { Chain } from "@/components/catalogo/Chain";

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
        <div className="mt-8">
          <Chain passos={legenda} locale={l} />
        </div>
      </header>
      <Section numero="01" titulo={t("section_catalog", l)}>
        <AutomationList locale={l} />
      </Section>
    </>
  );
}
