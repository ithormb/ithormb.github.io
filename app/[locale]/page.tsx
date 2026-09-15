import type { Metadata } from "next";
import { site } from "@/content/site";
import { isLocale, t, type Locale } from "@/lib/i18n";
import { Hero } from "@/components/home/Hero";
import { Metrics } from "@/components/home/Metrics";
import { ProjectIndex } from "@/components/home/ProjectIndex";
import { Principles } from "@/components/home/Principles";
import { Contact } from "@/components/home/Contact";
import { Section } from "@/components/ui/Section";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "pt";
  return {
    title: `${site.name} — ${site.headline[l]}`,
    description: site.subheadline[l],
  };
}

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "pt";
  return (
    <>
      <Hero locale={l} />
      <Metrics locale={l} />
      <Section id="projetos" numero="01" titulo={t("section_projects", l)}>
        <ProjectIndex locale={l} />
      </Section>
      <Section numero="02" titulo={t("section_principles", l)}>
        <Principles locale={l} />
      </Section>
      <Section id="contato" numero="03" titulo={t("section_contact", l)}>
        <Contact locale={l} />
      </Section>
    </>
  );
}
