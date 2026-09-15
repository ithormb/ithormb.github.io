export const locales = ["pt", "en"] as const;
export type Locale = (typeof locales)[number];

export type Text = { pt: string; en: string };

export const ui = {
  nav_projects: { pt: "Projetos", en: "Projects" },
  nav_about: { pt: "Sobre", en: "About" },
  toggle_theme: { pt: "Alternar tema", en: "Toggle theme" },
  hero_cta_projects: { pt: "Ver projetos", en: "See projects" },
  hero_cta_linkedin: { pt: "LinkedIn", en: "LinkedIn" },
  section_projects: { pt: "Projetos", en: "Projects" },
  section_principles: { pt: "Princípios", en: "Principles" },
  section_contact: { pt: "Contato", en: "Contact" },
  in_production: { pt: "em produção", en: "in production" },
  read_more: { pt: "Ler o projeto", en: "Read the project" },
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
