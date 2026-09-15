import type { Projeto } from "./types";

export const automacoesN8n: Projeto = {
  slug: "automacoes-n8n",
  ordem: 3,
  titulo: { pt: "Automações operacionais em n8n", en: "Operational automations in n8n" },
  resumo: {
    pt: "Dezenas de rotinas em produção entregando relatório por WhatsApp e e-mail — imagem, PDF, dias úteis, idempotência por chave e tarefa criada no gerenciador corporativo.",
    en: "Dozens of production routines delivering reports via WhatsApp and e-mail — image, PDF, business days, key-based idempotency and tasks created in the corporate task manager.",
  },
  tese: {
    pt: "Relatório que ninguém abre não existe. O dado vai até onde a pessoa já está.",
    en: "A report nobody opens doesn't exist. The data goes where people already are.",
  },
  stack: ["n8n", "WhatsApp", "Gotenberg (PDF)", "BigQuery", "SQL"],
  problema: { pt: "[[PREENCHER]]", en: "[[FILL IN]]" },
  arquitetura: {
    pt: "Conferência automática de documentos fiscais contra arquivos recebidos; relatório financeiro recorrente por unidade; resumo diário de produção com OEE por máquina; auditoria quinzenal de saldo de horas; ensaios de laboratório publicados em imagem todo dia útil.",
    en: "Automatic reconciliation of fiscal documents against received files; recurring financial report per plant; daily production summary with OEE per machine; fortnightly hour-bank audit; lab tests published as an image every business day.",
  },
  armadilhas: [
    {
      pt: "Dois agendadores são duas verdades — o cron da aplicação foi removido no mesmo dia em que o do n8n entrou.",
      en: "Two schedulers are two truths — the app's cron was removed the same day n8n's went live.",
    },
    {
      pt: "Workflows publicados sem fuso horário num servidor configurado em Europa/Berlim.",
      en: "Workflows published without a timezone on a server configured for Europe/Berlin.",
    },
  ],
  resultado: { pt: "[[PREENCHER]]", en: "[[FILL IN]]" },
  metricas: [],
};
