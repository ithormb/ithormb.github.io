import type { Text } from "@/lib/i18n";
import { numeros } from "./automacoes";
import { hub } from "./hub";

export type Thumb = "hub" | "whatsapp" | "n8n" | "clusters" | "bi" | "forecast";

export type Projeto = {
  titulo: Text;
  descricao: Text;
  tags: string[];
  ano: string;
  thumb: Thumb;
  href: string; // relativo ao idioma (começa com /) ou URL externa
  estudo?: boolean;
};

export type Experiencia = {
  periodo: Text;
  cargo: Text;
  onde: Text;
  descricao: Text;
  tags: string[];
};

export const site = {
  name: "Thomas Barbosa",
  role: { pt: "Dados, IA & Automação", en: "Data, AI & Automation" } satisfies Text,
  tagline: {
    pt: "Construo agentes de IA e automações que rodam em produção dentro da indústria.",
    en: "I build AI agents and automations that run in production inside manufacturing.",
  } satisfies Text,
  links: {
    linkedin: "https://www.linkedin.com/in/thomas-barbosa-silva/",
    github: "https://github.com/ithormb",
    email: null as string | null,
  },

  sobre: [
    {
      pt: `Trabalho onde dados, IA e operação se encontram. Hoje construo, dentro de um grupo industrial com três fábricas, um hub com ${hub.agentes.length} agentes de IA e a malha de automações que leva o dado do ERP, do MES e das planilhas até quem decide — pela tela, pelo WhatsApp, por e-mail ou como tarefa com prazo.`,
      en: `I work where data, AI and operations meet. Inside a manufacturing group with three plants, I build a hub of ${hub.agentes.length} AI agents and the web of automations that takes data from the ERP, the MES and spreadsheets to the people who decide — on screen, on WhatsApp, by e-mail or as a task with a deadline.`,
    },
    {
      pt: "Venho da análise de dados: ETL, BI e machine learning aplicado. De lá trouxe duas regras que guiam tudo o que construo: número sem data e sem origem não serve para decidir, e o modelo de linguagem aconselha — quem executa é código, com uma pessoa confirmando.",
      en: "I come from data analysis: ETL, BI and applied machine learning. From there I brought two rules that guide everything I build: a number without a date and a source is useless for decisions, and the language model advises — code executes, with a person confirming.",
    },
    {
      pt: `Em seis meses foram ${numeros.workflows} workflows no n8n, integrando ERP, BigQuery, Microsoft 365, Google, WhatsApp e APIs públicas. Os projetos de estudo em BI e machine learning estão logo abaixo.`,
      en: `In six months that added up to ${numeros.workflows} n8n workflows, connecting the ERP, BigQuery, Microsoft 365, Google, WhatsApp and public APIs. My BI and machine learning study projects are right below.`,
    },
  ] as Text[],

  // Preencher com o LinkedIn. A seção e o item de menu só aparecem quando houver ao menos uma entrada.
  experiencia: [] as Experiencia[],

  projetos: [
    {
      titulo: { pt: "Hub de agentes de IA", en: "AI agents hub" },
      descricao: {
        pt: `Plataforma web com ${hub.agentes.length} agentes de RH, tesouraria, contabilidade, bancos e indústria. Toda resposta diz de quando é o dado e de onde veio; a IA endereça, o código executa.`,
        en: `Web platform with ${hub.agentes.length} agents for HR, treasury, accounting, banking and manufacturing. Every answer states when the data is from and where it came from; AI routes, code executes.`,
      },
      tags: ["Next.js", "NestJS", "FastAPI", "PostgreSQL", "Docker"],
      ano: "2026",
      thumb: "hub",
      href: "/hub/",
    },
    {
      titulo: { pt: "Agente de tarefas no WhatsApp", en: "Task agent on WhatsApp" },
      descricao: {
        pt: "Texto ou áudio viram tarefa real no gerenciador corporativo — criar, editar e concluir — com eco do que o sistema entendeu antes de gravar qualquer coisa.",
        en: "Text or voice become real tasks in the corporate task manager — create, edit, complete — echoing what the system understood before writing anything.",
      },
      tags: ["NestJS", "Evolution API", "Whisper", "LLM"],
      ano: "2026",
      thumb: "whatsapp",
      href: "/hub/",
    },
    {
      titulo: { pt: `${numeros.workflows} automações em n8n`, en: `${numeros.workflows} n8n automations` },
      descricao: {
        pt: `${numeros.nos.toLocaleString("pt-BR")} nós e ${numeros.credenciais} credenciais: relatórios em imagem e PDF, conciliações e tarefas automáticas ligando ERP, BigQuery, Microsoft 365 e Google.`,
        en: `${numeros.nos.toLocaleString("en-US")} nodes and ${numeros.credenciais} credentials: image and PDF reports, reconciliations and automatic tasks connecting ERP, BigQuery, Microsoft 365 and Google.`,
      },
      tags: ["n8n", "BigQuery", "Graph API", "Gotenberg"],
      ano: "2026",
      thumb: "n8n",
      href: "/automacoes/",
    },
    {
      titulo: { pt: "Vendas Walmart: ETL, BI e clusterização", en: "Walmart sales: ETL, BI and clustering" },
      descricao: {
        pt: "Projeto de ponta a ponta: extração pela API do Kaggle, ETL em SQL e Python, painel de performance para a diretoria e K-Means para agrupar as filiais por perfil.",
        en: "End-to-end project: Kaggle API extraction, ETL in SQL and Python, a performance dashboard for leadership and K-Means to group stores by profile.",
      },
      tags: ["SQL", "Python", "Power BI", "scikit-learn"],
      ano: "2025",
      thumb: "clusters",
      href: "https://github.com/ithormb/Walmart_Sales_SQL_Python",
      estudo: true,
    },
    {
      titulo: { pt: "Power BI × Looker Studio", en: "Power BI × Looker Studio" },
      descricao: {
        pt: "O mesmo painel de e-commerce nas duas ferramentas, sobre um pipeline automatizado (Kaggle → Python → BigQuery), para comparar uso, performance, automação e custo.",
        en: "The same e-commerce dashboard built in both tools, on an automated pipeline (Kaggle → Python → BigQuery), to compare usability, performance, automation and cost.",
      },
      tags: ["Python", "BigQuery", "Power BI", "Looker Studio"],
      ano: "2025",
      thumb: "bi",
      href: "https://github.com/ithormb/Projeto_Ecommerce_PowerBI_vs_LookerStudio",
      estudo: true,
    },
    {
      titulo: { pt: "Previsão do varejo com machine learning", en: "Retail forecasting with machine learning" },
      descricao: {
        pt: "TCC: previsão do volume de vendas do varejo (PMC/IBGE) a partir de 13 séries macroeconômicas — Selic, IPCA, desemprego, crédito e confiança.",
        en: "Thesis: forecasting retail sales volume (IBGE's PMC) from 13 macroeconomic series — interest rate, inflation, unemployment, credit and confidence.",
      },
      tags: ["Python", "Machine Learning", "Séries temporais"],
      ano: "2025",
      thumb: "forecast",
      href: "https://github.com/ithormb/TCC_PrevisaoML_PMC",
      estudo: true,
    },
  ] as Projeto[],
};
