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
  onde: Text;
  local?: Text;
  // do cargo mais recente para o mais antigo
  cargos: { titulo: Text; periodo: Text }[];
  descricao: Text;
  tags: string[];
};

export type Formacao = {
  periodo: Text;
  titulo: Text;
  onde: Text;
  nota?: Text;
};

export const site = {
  name: "Thomas Barbosa",
  role: { pt: "Especialista de Dados · IA & Automação", en: "Data Specialist · AI & Automation" } satisfies Text,
  tagline: {
    pt: "Há mais de 5 anos transformo dados dispersos em decisões de negócio — com passagens pela Arco Educação, pela Solar Coca-Cola e, hoje, pela indústria. No Grupo Raposo Plásticos, lidero o time de Dados e IA que atende cinco fábricas: mais de 130 automações em produção orquestram o pipeline de ponta a ponta, da alimentação do ERP e do MES até painéis de BI e agentes de IA analíticos que direcionam o olhar estratégico do grupo.",
    en: "For 5+ years I've turned scattered data into business decisions — at Arco Educação, Solar Coca-Cola and now in manufacturing. At Grupo Raposo Plásticos I lead the Data & AI team serving five plants: 130+ automations in production orchestrate the pipeline end to end, from ERP and MES data entry to BI dashboards and analytical AI agents that steer the group's strategy.",
  } satisfies Text,
  // Foto em public/img. Sem ela, o retrato mostra as iniciais.
  foto: "/img/foto.webp" as string | null,
  local: { pt: "Fortaleza, Ceará", en: "Fortaleza, Brazil" } satisfies Text,
  saudacao: { pt: "Olá, sou o", en: "Hi, I'm" } satisfies Text,
  primeiroNome: "Thomas",
  headline: {
    pt: "Construo agentes de IA que rodam em produção.",
    en: "I build AI agents that run in production.",
  } satisfies Text,
  links: {
    linkedin: "https://www.linkedin.com/in/thomas-barbosa-silva/",
    github: "https://github.com/ithormb",
    email: null as string | null,
  },

  sobreTitulo: {
    pt: "Dados que viram decisão — e decisão que vira ação.",
    en: "Data that becomes decisions — and decisions that become action.",
  } satisfies Text,

  stats: [
    { valor: "5+", rotulo: { pt: "anos em dados e BI", en: "years in data and BI" }, icone: "chart" },
    { valor: String(hub.agentes.length), rotulo: { pt: "agentes de IA em produção", en: "AI agents in production" }, icone: "bot" },
    { valor: String(numeros.workflows), rotulo: { pt: "workflows no n8n", en: "n8n workflows" }, icone: "flow" },
    { valor: "5", rotulo: { pt: "fábricas atendidas", en: "plants served" }, icone: "factory" },
  ] as { valor: string; rotulo: Text; icone: "chart" | "bot" | "flow" | "factory" }[],

  tecnologias: [
    {
      grupo: { pt: "IA e automação", en: "AI and automation" },
      itens: ["n8n", "LLMs", "Gemini", "Whisper", "WhatsApp", "APIs REST"],
    },
    {
      grupo: { pt: "Dados e BI", en: "Data and BI" },
      itens: ["SQL", "Python", "Pandas", "scikit-learn", "BigQuery", "Power BI", "Microsoft Fabric", "Looker"],
    },
    {
      grupo: { pt: "Engenharia de dados", en: "Data engineering" },
      itens: ["PostgreSQL", "SQL Server", "Google Cloud", "ETL", "Docker", "Git"],
    },
  ] as { grupo: Text; itens: string[] }[],

  sobre: [
    {
      pt: `Trabalho onde dados, IA e operação se encontram. Hoje lidero o time de Dados e IA de um grupo industrial com cinco fábricas: construímos um hub com ${hub.agentes.length} agentes de IA e a malha de automações que leva o dado do ERP, do MES e das planilhas até quem decide — pela tela, pelo WhatsApp, por e-mail ou como tarefa com prazo.`,
      en: `I work where data, AI and operations meet. I lead the Data & AI team of a manufacturing group with five plants: we built a hub of ${hub.agentes.length} AI agents and the web of automations that takes data from the ERP, the MES and spreadsheets to the people who decide — on screen, on WhatsApp, by e-mail or as a task with a deadline.`,
    },
    {
      pt: "Sou engenheiro mecânico pela UFC e fiz MBA em Data Science e Analytics na USP/ESALQ. Antes disso foram mais de cinco anos em dados: BI e projetos numa plataforma de educação, depois inteligência de mercado e pricing na Solar Coca-Cola. De lá trouxe duas regras que guiam o que construo: número sem data e sem origem não serve para decidir, e o modelo de linguagem aconselha — quem executa é código, com uma pessoa confirmando.",
      en: "I'm a mechanical engineer from UFC with an MBA in Data Science and Analytics from USP/ESALQ. Before this came more than five years in data: BI and projects at an education platform, then market intelligence and pricing at Solar Coca-Cola. From there I brought two rules that guide what I build: a number without a date and a source is useless for decisions, and the language model advises — code executes, with a person confirming.",
    },
    {
      pt: `Em seis meses foram ${numeros.workflows} workflows no n8n, integrando ERP, BigQuery, Microsoft 365, Google, WhatsApp e APIs públicas. Os projetos de estudo em BI e machine learning estão logo abaixo.`,
      en: `In six months that added up to ${numeros.workflows} n8n workflows, connecting the ERP, BigQuery, Microsoft 365, Google, WhatsApp and public APIs. My BI and machine learning study projects are right below.`,
    },
  ] as Text[],

  // Do LinkedIn, lido em 23/09/2026. A empresa atual aparece pelo nome a pedido do Thomas (23/09/2026).
  experiencia: [
    {
      periodo: { pt: "2025 — hoje", en: "2025 — present" },
      onde: { pt: "Grupo Raposo Plásticos", en: "Grupo Raposo Plásticos" },
      local: { pt: "remoto", en: "remote" },
      cargos: [{ titulo: { pt: "Especialista de Dados", en: "Data Specialist" }, periodo: { pt: "set 2025 — hoje", en: "Sep 2025 — present" } }],
      descricao: {
        pt: "Lidero o time de Dados e IA que leva soluções às fábricas do grupo: o hub de agentes de IA e a malha de automações desta página — leitura do ERP e do MES, agentes que respondem e agem pelo WhatsApp, relatórios em imagem e PDF e mais de cem workflows em n8n.",
        en: "I lead the Data & AI team that brings solutions to the group's plants: the AI agents hub and the automation web shown on this page — ERP and MES reads, agents that answer and act on WhatsApp, image and PDF reports and more than a hundred n8n workflows.",
      },
      tags: ["Liderança de time", "n8n", "Python", "SQL", "BigQuery", "LLMs"],
    },
    {
      periodo: { pt: "2024 — 2025", en: "2024 — 2025" },
      onde: { pt: "Solar Coca-Cola", en: "Solar Coca-Cola" },
      local: { pt: "Fortaleza", en: "Fortaleza, Brazil" },
      cargos: [
        { titulo: { pt: "Analista Sênior de Pricing", en: "Senior Pricing Analyst" }, periodo: { pt: "mai — set 2025", en: "May — Sep 2025" } },
        { titulo: { pt: "Analista Pleno de Inteligência de Mercado", en: "Market Intelligence Analyst" }, periodo: { pt: "mar 2024 — abr 2025", en: "Mar 2024 — Apr 2025" } },
      ],
      descricao: {
        pt: "Inteligência de mercado e Revenue Growth Management: SQL sobre as bases de varejo da Scanntech e da Nielsen, ETL de várias fontes para antecipar riscos e oportunidades de receita, e painéis em Power BI que orientavam a precificação do portfólio.",
        en: "Market intelligence and Revenue Growth Management: SQL over Scanntech and Nielsen retail data, ETL from many sources to anticipate revenue risks and opportunities, and Power BI dashboards that guided portfolio pricing.",
      },
      tags: ["SQL", "Power BI", "ETL", "Pricing"],
    },
    {
      periodo: { pt: "2020 — 2024", en: "2020 — 2024" },
      onde: { pt: "SAS Plataforma de Educação · Arco Educação", en: "SAS Education Platform · Arco Educação" },
      local: { pt: "Fortaleza", en: "Fortaleza, Brazil" },
      cargos: [
        { titulo: { pt: "Analista Pleno de Projetos e BI", en: "Projects and BI Analyst" }, periodo: { pt: "dez 2023 — mar 2024", en: "Dec 2023 — Mar 2024" } },
        { titulo: { pt: "Analista de Projetos I", en: "Projects Analyst I" }, periodo: { pt: "abr 2021 — dez 2023", en: "Apr 2021 — Dec 2023" } },
        { titulo: { pt: "Estagiário de Gestão de Avaliações", en: "Assessment Management Intern" }, periodo: { pt: "mar 2020 — abr 2021", en: "Mar 2020 — Apr 2021" } },
      ],
      descricao: {
        pt: "Dados da produção de material didático em SQL Server (procedures e SSIS) e BigQuery; painéis de produtividade, custo e qualidade em Power BI e Looker para coordenação e gerência; e automações em Python e SQL que tiraram rotinas manuais da equipe de gestão.",
        en: "Production data for teaching materials in SQL Server (procedures and SSIS) and BigQuery; productivity, cost and quality dashboards in Power BI and Looker for coordinators and managers; and Python and SQL automations that removed manual routines from the management team.",
      },
      tags: ["SQL Server", "SSIS", "BigQuery", "Power BI", "Looker", "Python"],
    },
    {
      periodo: { pt: "2017 — 2021", en: "2017 — 2021" },
      onde: { pt: "EXPeduca", en: "EXPeduca" },
      local: { pt: "Fortaleza", en: "Fortaleza, Brazil" },
      cargos: [
        { titulo: { pt: "CEO", en: "CEO" }, periodo: { pt: "ago 2018 — jan 2021", en: "Aug 2018 — Jan 2021" } },
        { titulo: { pt: "COO", en: "COO" }, periodo: { pt: "ago 2017 — mar 2019", en: "Aug 2017 — Mar 2019" } },
      ],
      descricao: {
        pt: "Operação e, depois, direção da empresa, em meio período, durante a graduação.",
        en: "Ran operations and later the company, part-time, while in university.",
      },
      tags: [],
    },
  ] as Experiencia[],

  formacao: [
    {
      periodo: { pt: "2024 — 2025", en: "2024 — 2025" },
      titulo: { pt: "MBA em Data Science e Analytics", en: "MBA in Data Science and Analytics" },
      onde: { pt: "USP / ESALQ", en: "University of São Paulo (USP/ESALQ)" },
      nota: {
        pt: "Engenharia de dados, machine learning supervisionado e não supervisionado, web scraping, pesquisa operacional e cloud.",
        en: "Data engineering, supervised and unsupervised machine learning, web scraping, operations research and cloud.",
      },
    },
    {
      periodo: { pt: "2025", en: "2025" },
      titulo: { pt: "Artigo aceito no SBPO 2025", en: "Paper accepted at SBPO 2025" },
      onde: { pt: "LVII Simpósio Brasileiro de Pesquisa Operacional", en: "57th Brazilian Symposium on Operations Research" },
      nota: {
        pt: "Segmentação de varejo integrando geovisualização aos modelos RFM e K-Means. Coautor.",
        en: "Retail segmentation integrating geovisualization with RFM and K-Means models. Co-author.",
      },
    },
    {
      periodo: { pt: "2016 — 2021", en: "2016 — 2021" },
      titulo: { pt: "Engenharia Mecânica", en: "B.Eng. in Mechanical Engineering" },
      onde: { pt: "Universidade Federal do Ceará", en: "Federal University of Ceará" },
      nota: {
        pt: "Bolsista do PET Engenharia Mecânica e líder de estabilidade e controle na equipe de Aerodesign.",
        en: "PET Mechanical Engineering scholar and stability and control lead on the Aerodesign team.",
      },
    },
  ] as Formacao[],

  projetos: [
    {
      titulo: { pt: "Hub de agentes de IA", en: "AI agents hub" },
      descricao: {
        pt: `Plataforma web com ${hub.agentes.length} agentes de RH, tesouraria, contabilidade, bancos e indústria. Toda resposta diz de quando é o dado e de onde veio; a IA endereça, o código executa.`,
        en: `Web platform with ${hub.agentes.length} agents for HR, treasury, accounting, banking and manufacturing. Every answer states when the data is from and where it came from; AI routes, code executes.`,
      },
      tags: ["Python", "LLMs", "SQL", "PostgreSQL", "Docker"],
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
      tags: ["LLMs", "Whisper", "WhatsApp", "n8n"],
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
        pt: "Projeto de ponta a ponta, em dupla: extração pela API do Kaggle, ETL em SQL e Python, painel de performance em Power BI e segmentação RFM com K-Means e geolocalização, que chegou a 12 segmentos.",
        en: "End-to-end project, built as a pair: Kaggle API extraction, ETL in SQL and Python, a Power BI performance dashboard and RFM segmentation with K-Means and geolocation, reaching 12 segments.",
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
        pt: "TCC do MBA: previsão do volume de vendas do varejo (PMC/IBGE) a partir de 13 séries macroeconômicas — Selic, IPCA, desemprego, crédito e confiança.",
        en: "MBA thesis: forecasting retail sales volume (IBGE's PMC) from 13 macroeconomic series — interest rate, inflation, unemployment, credit and confidence.",
      },
      tags: ["Python", "Machine Learning", "Séries temporais"],
      ano: "2025",
      thumb: "forecast",
      href: "https://github.com/ithormb/TCC_PrevisaoML_PMC",
      estudo: true,
    },
  ] as Projeto[],
};
