export const locales = ["pt", "en"] as const;
export type Locale = (typeof locales)[number];

export type Text = { pt: string; en: string };

export const ui = {
  nav_hub: { pt: "Hub", en: "Hub" },
  nav_automations: { pt: "Automações", en: "Automations" },
  nav_about: { pt: "Sobre", en: "About" },
  toggle_theme: { pt: "Alternar tema", en: "Toggle theme" },
  hero_cta_projects: { pt: "Ver o trabalho", en: "See the work" },
  hero_cta_linkedin: { pt: "LinkedIn", en: "LinkedIn" },
  section_hub: { pt: "Hub de agentes", en: "Agents hub" },
  section_automations: { pt: "Automações", en: "Automations" },
  section_guarantees: { pt: "Garantias", en: "Guarantees" },
  section_agents: { pt: "Agentes", en: "Agents" },
  section_catalog: { pt: "Catálogo", en: "Catalog" },
  see_all_agents: { pt: "Ver todos os agentes", en: "See all agents" },
  see_all_automations: { pt: "Ver todas as automações", en: "See all automations" },
  section_principles: { pt: "Princípios", en: "Principles" },
  section_contact: { pt: "Contato", en: "Contact" },
  contact_title: { pt: "Vamos conversar?", en: "Let's talk?" },
  contact_body: {
    pt: "Se você tem uma operação onde os dados estão presos em sistemas que não conversam, provavelmente já resolvi um problema parecido.",
    en: "If you run an operation where data is stuck in systems that don't talk to each other, I've probably solved a similar problem.",
  },
  footer_note: {
    pt: "Feito à mão, sem framework de site pronto. Estático, sem rastreadores.",
    en: "Handmade, no site builder. Static, no trackers.",
  },
} satisfies Record<string, Text>;

export type UiKey = keyof typeof ui;

export function t(key: UiKey, locale: Locale): string {
  return ui[key][locale];
}

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
