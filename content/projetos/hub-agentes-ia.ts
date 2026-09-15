import type { Projeto } from "./types";

export const hubAgentesIa: Projeto = {
  slug: "hub-agentes-ia",
  ordem: 1,
  destaque: true,
  titulo: { pt: "Hub de agentes de IA", en: "AI agents hub" },
  resumo: {
    pt: "Plataforma interna que reúne agentes de RH, financeiro, tesouraria, contabilidade e indústria de um grupo com três unidades fabris.",
    en: "Internal platform gathering HR, finance, treasury, accounting and manufacturing agents for a group with three plants.",
  },
  tese: {
    pt: "O modelo aconselha; o código decide.",
    en: "The model advises; the code decides.",
  },
  stack: ["Python / FastAPI", "NestJS", "Next.js", "PostgreSQL", "Docker Compose"],
  problema: {
    pt: "[[PREENCHER: problema em 2–3 frases]]",
    en: "[[FILL IN: problem in 2–3 sentences]]",
  },
  arquitetura: {
    pt: "Três aplicações com builds independentes — serviço de IA, backend e front — sobre um banco próprio com migrações versionadas por checksum. Uma régua de permissão só, no backend. Carimbo de frescor montado em código em toda resposta com número. Roteamento de modelo por custo, com auditoria por chamada.",
    en: "Three independently built applications — AI service, backend and front-end — over a dedicated database with checksum-versioned migrations. A single permission ruler, in the backend. Freshness stamp assembled in code on every numeric answer. Cost-based model routing, audited per call.",
  },
  armadilhas: [
    {
      pt: "Modelo perguntado sobre data inventa data com confiança — o carimbo saiu do prompt e foi para o código.",
      en: "Ask a model for a date and it invents one with confidence — the stamp left the prompt and moved into code.",
    },
    {
      pt: "Front honrando permissão diferente do backend: administrador barrado pela própria tela numa conta que passava em toda chamada de API.",
      en: "Front-end honouring a different permission than the backend: an admin blocked by the UI on an account that passed every API call.",
    },
    {
      pt: "Servir cache dizendo 'atualizado agora'. A data é a da sincronização do dado, nunca a de agora.",
      en: "Serving cache labelled 'updated now'. The date is the data's sync time, never the current time.",
    },
  ],
  resultado: {
    pt: "[[PREENCHER: resultado]]",
    en: "[[FILL IN: outcome]]",
  },
  metricas: [],
};
