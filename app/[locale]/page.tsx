import type { Metadata } from "next";
import { site } from "@/content/site";
import { hub } from "@/content/hub";
import { automacoes } from "@/content/automacoes";
import { isLocale, t, type Locale } from "@/lib/i18n";
import { Hero } from "@/components/home/Hero";
import { Metrics } from "@/components/home/Metrics";
import { Principles } from "@/components/home/Principles";
import { Contact } from "@/components/home/Contact";
import { Section } from "@/components/ui/Section";
import { Showcase } from "@/components/catalogo/Showcase";
import { AgentList } from "@/components/catalogo/AgentList";
import { AutomationList } from "@/components/catalogo/AutomationList";
import { Numbers } from "@/components/catalogo/Numbers";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "pt";
  return { title: `${site.name} — ${site.headline[l]}`, description: site.subheadline[l] };
}

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "pt";
  return (
    <>
      <Hero locale={l} />
      <Metrics locale={l} />
      <Section id="hub" numero="01" titulo={t("section_hub", l)}>
        <Showcase
          locale={l}
          nome={hub.nome}
          resumo={hub.resumo}
          stack={hub.stack}
          href={`/${l}/hub/`}
          linkLabel={t("see_all_agents", l)}
        >
          <AgentList locale={l} limite={5} />
        </Showcase>
      </Section>
      <Section id="automacoes" numero="02" titulo={t("section_automations", l)}>
        <Showcase
          locale={l}
          nome={automacoes.nome}
          resumo={automacoes.resumo}
          href={`/${l}/automacoes/`}
          linkLabel={t("see_all_automations", l)}
        >
          <Numbers locale={l} />
          <div className="mt-10">
            <AutomationList locale={l} limite={2} />
          </div>
        </Showcase>
      </Section>
      <Section numero="03" titulo={t("section_principles", l)}>
        <Principles locale={l} />
      </Section>
      <Section id="contato" numero="04" titulo={t("section_contact", l)}>
        <Contact locale={l} />
      </Section>
    </>
  );
}
