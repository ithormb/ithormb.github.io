import type { Text } from "@/lib/i18n";

export const site = {
  name: "Thomas Barbosa",
  headline: {
    pt: "IA em produção, não em demo.",
    en: "AI in production, not in demos.",
  } satisfies Text,
  subheadline: {
    pt: "Agentes, automações e integração de dados para operação industrial — desenhados para o modelo não ter a última palavra.",
    en: "Agents, automations and data integration for industrial operations — designed so the model never has the final say.",
  } satisfies Text,
  links: {
    linkedin: "https://www.linkedin.com/in/thomas-barbosa-silva/",
    github: "[[PREENCHER: url do GitHub]]",
    email: "[[PREENCHER: e-mail público]]",
  },
  metrics: [
    { value: "3", label: { pt: "unidades industriais", en: "industrial plants" } },
    { value: "~215", label: { pt: "colaboradores no escopo", en: "employees in scope" } },
    { value: "dezenas", label: { pt: "de automações em produção", en: "of automations in production" } },
    { value: "5,3s → 186ms", label: { pt: "resposta de rota após otimização", en: "route response after optimization" } },
  ] as { value: string; label: Text }[],
  principles: [
    {
      title: { pt: "O carimbo é do código", en: "The stamp belongs to the code" },
      body: {
        pt: "Toda resposta com número diz de quando é o dado e de onde veio — montado em código. Modelo perguntado sobre data inventa data com confiança.",
        en: "Every answer with a number states when the data is from and where it came from — assembled in code. Ask a model for a date and it will invent one with confidence.",
      },
    },
    {
      title: { pt: "Uma régua de permissão", en: "One permission ruler" },
      body: {
        pt: "Mora no backend. A tela só esconde o que daria 403. Duas réguas discordam, e a que erra é sempre a que está visível.",
        en: "It lives in the backend. The UI only hides what would return 403. Two rulers disagree, and the wrong one is always the visible one.",
      },
    },
    {
      title: { pt: "O modelo não decide ação", en: "The model doesn't decide actions" },
      body: {
        pt: "A IA classifica intenção e endereça. Quem executa é código determinístico, com confirmação humana antes de qualquer disparo.",
        en: "AI classifies intent and routes. Execution is deterministic code, with human confirmation before anything fires.",
      },
    },
  ] as { title: Text; body: Text }[],
};
