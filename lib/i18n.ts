export const locales = ["pt", "en"] as const;
export type Locale = (typeof locales)[number];

export type Text = { pt: string; en: string };

export const ui = {
  skip: { pt: "Pular para o conteúdo", en: "Skip to content" },
  nav_about: { pt: "Sobre", en: "About" },
  nav_experience: { pt: "Experiência", en: "Experience" },
  nav_projects: { pt: "Projetos", en: "Projects" },
  nav_education: { pt: "Formação", en: "Education" },
  earlier_roles: { pt: "cargos anteriores", en: "earlier roles" },
  nav_numbers: { pt: "Em números", en: "In numbers" },
  back_home: { pt: "Thomas Barbosa", en: "Thomas Barbosa" },
  see_details: { pt: "Ver em detalhe", en: "See in detail" },
  see_automations: { pt: "Ver as automações em detalhe", en: "See the automations in detail" },
  study: { pt: "estudo", en: "study" },
  footer: {
    pt: "Feito à mão em Next.js e Tailwind, publicado no GitHub Pages. Sem rastreadores.",
    en: "Hand-built with Next.js and Tailwind, published on GitHub Pages. No trackers.",
  },
  section_hub: { pt: "Hub de agentes", en: "Agents hub" },
  section_automations: { pt: "Automações", en: "Automations" },
  section_guarantees: { pt: "Garantias", en: "Guarantees" },
  section_agents: { pt: "Agentes", en: "Agents" },
  section_numbers: { pt: "Em números", en: "In numbers" },
  section_nodes: { pt: "Tipos de nó", en: "Node types" },
  section_platforms: { pt: "Plataformas", en: "Platforms" },
  section_sample: { pt: "Amostra", en: "Sample" },
  measured_on: { pt: "medido em", en: "measured on" },
} satisfies Record<string, Text>;

export type UiKey = keyof typeof ui;

export function t(key: UiKey, locale: Locale): string {
  return ui[key][locale];
}

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
