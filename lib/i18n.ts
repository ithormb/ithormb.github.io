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
  nav_skills: { pt: "Tecnologias", en: "Skills" },
  nav_contact: { pt: "Contato", en: "Contact" },
  role_pill: { pt: "Especialista de Dados · IA & Automação", en: "Data Specialist · AI & Automation" },
  hello: { pt: "Olá, sou o", en: "Hi, I'm" },
  cta_talk: { pt: "Falar comigo", en: "Get in touch" },
  cta_cv: { pt: "Baixar CV (PDF)", en: "Download CV (PDF)" },
  result_label: { pt: "Resultado", en: "Outcome" },
  how_eyebrow: { pt: "Como trabalho", en: "How I work" },
  how_title: { pt: "IA com governança, não com fé.", en: "AI with governance, not faith." },
  how_lead: {
    pt: "Quatro regras que valem para todo agente e toda automação que coloco em produção. Cada uma nasceu de um erro real.",
    en: "Four rules that apply to every agent and automation I put in production. Each one was born from a real mistake.",
  },
  trust_career: { pt: "Carreira", en: "Career" },
  trust_edu: { pt: "Formação", en: "Education" },
  chip_years: { pt: "anos com dados", en: "years in data" },
  chip_auto: { pt: "automações em produção", en: "automations in production" },
  chip_agents: { pt: "agentes de IA", en: "AI agents" },
  cta_work: { pt: "Ver meu trabalho", en: "See my work" },
  cta_linkedin: { pt: "Falar no LinkedIn", en: "Message on LinkedIn" },
  tech_i_use: { pt: "Tecnologias que uso", en: "Technologies I use" },
  more_about: { pt: "Ver trajetória", en: "See my path" },
  skills_title: { pt: "Ferramentas do dia a dia", en: "Everyday toolkit" },
  exp_title: { pt: "Onde trabalhei", en: "Where I've worked" },
  projects_eyebrow: { pt: "Projetos", en: "Projects" },
  projects_title: { pt: "Trabalhos recentes", en: "Recent work" },
  view_project: { pt: "Ver projeto", en: "View project" },
  edu_title: { pt: "Formação e publicação", en: "Education and publication" },
  contact_eyebrow: { pt: "Vamos conversar", en: "Let's talk" },
  contact_title: { pt: "Tem um problema de dados para resolver?", en: "Got a data problem to solve?" },
  contact_body: {
    pt: "Se a sua operação tem dados presos em sistemas que não conversam, provavelmente já resolvi algo parecido.",
    en: "If your operation has data stuck in systems that don't talk to each other, I've probably solved something similar.",
  },
  follow: { pt: "Me encontre", en: "Find me" },
  quote: { pt: "O modelo aconselha; o código decide.", en: "The model advises; the code decides." },
  quote_note: { pt: "a regra que guia tudo o que construo", en: "the rule behind everything I build" },
  menu: { pt: "Menu", en: "Menu" },
  back_home: { pt: "Thomas Barbosa", en: "Thomas Barbosa" },
  see_details: { pt: "Ver em detalhe", en: "See in detail" },
  see_automations: { pt: "Ver as automações em detalhe", en: "See the automations in detail" },
  study: { pt: "estudo", en: "study" },
  footer: {
    pt: "Site estático publicado no GitHub Pages. Sem rastreadores.",
    en: "Static site published on GitHub Pages. No trackers.",
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
