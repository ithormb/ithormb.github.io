import type { Text } from "@/lib/i18n";
import { numeros } from "./automacoes";
import { hub } from "./hub";

export type Thumb = "hub" | "whatsapp" | "n8n" | "clusters" | "bi" | "forecast";

export type Projeto = {
  titulo: Text;
  descricao: Text;
  // O que mudou no negócio. Só fato verificável: número medido ou comportamento observado, nunca estimativa.
  resultado?: Text;
  tags: string[];
  ano: string;
  thumb: Thumb;
  href: string; // relativo ao idioma (começa com /) ou URL externa
  estudo?: boolean;
};

export type Experiencia = {
  logo?: string;
  periodo: Text;
  onde: Text;
  local?: Text;
  // do cargo mais recente para o mais antigo
  cargos: { titulo: Text; periodo: Text }[];
  descricao: Text;
  tags: string[];
};

export type Formacao = {
  logo?: string;
  periodo: Text;
  titulo: Text;
  onde: Text;
  nota?: Text;
};

export const site = {
  name: "Thomas Barbosa",
  role: { pt: "Especialista de Dados · IA & Automação", en: "Data Specialist · AI & Automation" } satisfies Text,
  tagline: {
    pt: "Lidero o time de Dados e IA do Grupo Raposo Plásticos: 130+ automações e 10 agentes de IA em produção, do ERP ao painel de decisão. Antes, pricing e inteligência de mercado na Solar Coca-Cola e BI na Arco Educação.",
    en: "I lead the Data & AI team at Grupo Raposo Plásticos: 130+ automations and 10 AI agents in production, from the ERP to the decision dashboard. Before that, pricing and market intelligence at Solar Coca-Cola and BI at Arco Educação.",
  } satisfies Text,
  // Foto em public/img. Sem ela, o retrato mostra as iniciais.
  foto: "/img/foto.webp" as string | null,
  local: { pt: "Fortaleza, Ceará", en: "Fortaleza, Brazil" } satisfies Text,
  saudacao: { pt: "Olá, sou o", en: "Hi, I'm" } satisfies Text,
  primeiroNome: "Thomas",
  // O título do hero: a palavra em destaque ganha o marcador laranja.
  headline: {
    pt: { antes: "Dados e IA que viram ", destaque: "resultado", depois: "." },
    en: { antes: "Data and AI that turn into ", destaque: "results", depois: "." },
  },
  // Onde a trajetória foi construída: a faixa de credibilidade logo abaixo do hero.
  // Logos oficiais dos sites de cada instituição (USP e UFC pela Wikimedia Commons).
  trajetoria: [
    { tipo: "carreira", nome: "Grupo Raposo Plásticos", logo: "/logos/raposo.webp", legenda: { pt: "Especialista de Dados", en: "Data Specialist" } },
    { tipo: "carreira", nome: "Solar Coca-Cola", logo: "/logos/solar.webp", legenda: { pt: "Pricing e Inteligência de Mercado", en: "Pricing and Market Intelligence" } },
    { tipo: "carreira", nome: "Arco Educação", logo: "/logos/arco.svg", legenda: { pt: "SAS Educação · Projetos e BI", en: "SAS Educação · Projects and BI" } },
    { tipo: "formacao", nome: "USP / ESALQ", logo: "/logos/usp.svg", legenda: { pt: "MBA em Data Science e Analytics", en: "MBA in Data Science and Analytics" } },
    { tipo: "formacao", nome: "Universidade Federal do Ceará", logo: "/logos/ufc.webp", legenda: { pt: "Engenharia Mecânica · UFC", en: "Mechanical Engineering · UFC" } },
  ] as { tipo: "carreira" | "formacao"; nome: string; logo: string; legenda: Text }[],
  links: {
    linkedin: "https://www.linkedin.com/in/thomas-barbosa-silva/",
    github: "https://github.com/ithormb",
    email: null as string | null,
    cv: { pt: "/cv/thomas-barbosa-cv.pdf", en: "/cv/thomas-barbosa-cv-en.pdf" },
  },

  sobreTitulo: {
    pt: "Dados que viram decisão — e decisão que vira ação.",
    en: "Data that becomes decisions — and decisions that become action.",
  } satisfies Text,

  stats: [
    { valor: "8+", rotulo: { pt: "anos com dados", en: "years in data" }, icone: "chart" },
    { valor: String(hub.agentes.length), rotulo: { pt: "agentes de IA em produção", en: "AI agents in production" }, icone: "bot" },
    { valor: String(numeros.workflows), rotulo: { pt: "workflows no n8n", en: "n8n workflows" }, icone: "flow" },
    { valor: "5", rotulo: { pt: "fábricas atendidas", en: "plants served" }, icone: "factory" },
  ] as { valor: string; rotulo: Text; icone: "chart" | "bot" | "flow" | "factory" }[],

  // Do mais próximo da IA ao mais próximo do dado bruto.
  tecnologias: [
    {
      grupo: { pt: "Modelos e agentes de IA", en: "AI models and agents" },
      nota: { pt: "Multi-provedor: o modelo certo para cada tarefa", en: "Multi-provider: the right model for each task" },
      itens: ["OpenAI", "Claude", "Gemini", "Mistral", "LangChain", "LangGraph", "Whisper"],
    },
    {
      grupo: { pt: "Desenvolvimento com IA", en: "AI-assisted development" },
      nota: { pt: "Agentes de código no dia a dia", en: "Coding agents, every day" },
      itens: ["Claude Code", "Antigravity", "VS Code", "GitHub", "Git"],
    },
    {
      grupo: { pt: "Automação e integração", en: "Automation and integration" },
      nota: { pt: "Orquestração e entrega onde a pessoa está", en: "Orchestration and delivery where people are" },
      itens: ["n8n", "APIs REST", "Webhooks", "WhatsApp", "Docker"],
    },
    {
      grupo: { pt: "Dados e BI", en: "Data and BI" },
      nota: { pt: "Da análise ao painel de decisão", en: "From analysis to decision dashboards" },
      itens: ["SQL", "Python", "Pandas", "scikit-learn", "Power BI", "Microsoft Fabric", "Looker"],
    },
    {
      grupo: { pt: "Engenharia de dados e nuvem", en: "Data engineering and cloud" },
      nota: { pt: "Pipelines, bancos e plataforma", en: "Pipelines, databases and platform" },
      itens: ["BigQuery", "Google Cloud", "PostgreSQL", "SQL Server", "ETL"],
    },
   ] as { grupo: Text; nota: Text; itens: string[] }[],

  sobre: [
    {
      pt: "Há mais de 8 anos transformo dados dispersos em decisões de negócio — com passagens pela Arco Educação, pela Solar Coca-Cola e, hoje, pela indústria. No Grupo Raposo Plásticos, lidero o time de Dados e IA que atende cinco fábricas: mais de 130 automações em produção orquestram o pipeline de ponta a ponta, da alimentação do ERP e do MES até painéis de BI e agentes de IA analíticos que direcionam o olhar estratégico do grupo.",
      en: "For 8+ years I've turned scattered data into business decisions — at Arco Educação, Solar Coca-Cola and now in manufacturing. At Grupo Raposo Plásticos I lead the Data & AI team serving five plants: 130+ automations in production orchestrate the pipeline end to end, from ERP and MES data entry to BI dashboards and analytical AI agents that steer the group's strategy.",
    },
    {
      pt: "Sou engenheiro mecânico pela UFC, com MBA em Data Science e Analytics pela USP/ESALQ. São mais de oito anos com dados — BI e projetos na Arco Educação, inteligência de mercado e pricing na Solar Coca-Cola e, hoje, a indústria. Desse caminho trouxe duas regras que guiam o que construo: número sem data e sem origem não serve para decidir, e o modelo de linguagem aconselha — quem executa é código, com uma pessoa confirmando.",
      en: "I'm a mechanical engineer from UFC with an MBA in Data Science and Analytics from USP/ESALQ. That's more than eight years in data — BI and projects at Arco Educação, market intelligence and pricing at Solar Coca-Cola and, now, manufacturing. From that path I brought two rules that guide what I build: a number without a date and a source is useless for decisions, and the language model advises — code executes, with a person confirming.",
    },
    {
      pt: `Em seis meses foram ${numeros.workflows} workflows no n8n, integrando ERP, BigQuery, Microsoft 365, Google, WhatsApp e APIs públicas. Os projetos de estudo em BI e machine learning estão logo abaixo.`,
      en: `In six months that added up to ${numeros.workflows} n8n workflows, connecting the ERP, BigQuery, Microsoft 365, Google, WhatsApp and public APIs. My BI and machine learning study projects are right below.`,
    },
  ] as Text[],

  // Do LinkedIn, lido em 23/09/2026. A empresa atual aparece pelo nome a pedido do Thomas (23/09/2026).
  experiencia: [
    {
      logo: "/logos/raposo.webp",
      periodo: { pt: "2025 — hoje", en: "2025 — present" },
      onde: { pt: "Grupo Raposo Plásticos", en: "Grupo Raposo Plásticos" },
      local: { pt: "remoto", en: "remote" },
      cargos: [{ titulo: { pt: "Especialista de Dados", en: "Data Specialist" }, periodo: { pt: "set 2025 — hoje", en: "Sep 2025 — present" } }],
      descricao: {
        pt: "Lidero o time de Dados e IA que leva soluções às fábricas do grupo: um hub de agentes de IA e a malha de automações do grupo — leitura do ERP e do MES, agentes que respondem e agem pelo WhatsApp, relatórios em imagem e PDF e mais de cem workflows em n8n.",
        en: "I lead the Data & AI team that brings solutions to the group's plants: an AI agents hub and the group's automation web — ERP and MES reads, agents that answer and act on WhatsApp, image and PDF reports and more than a hundred n8n workflows.",
      },
      tags: ["Liderança de time", "n8n", "Python", "SQL", "BigQuery", "LLMs"],
    },
    {
      logo: "/logos/solar.webp",
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
      logo: "/logos/arco.svg",
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
      logo: "/logos/usp.svg",
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
      logo: "/logos/ufc.webp",
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
        pt: `Cinco áreas (RH, tesouraria, contabilidade, bancos e indústria) dependiam de planilha e consulta manual ao ERP. Construí uma plataforma com ${hub.agentes.length} agentes que leem ERP, MES e planilhas e respondem com data e origem do dado; a IA endereça, o código executa.`,
        en: `Five areas (HR, treasury, accounting, banking and manufacturing) depended on spreadsheets and manual ERP lookups. I built a platform with ${hub.agentes.length} agents that read the ERP, the MES and spreadsheets and answer with the data's date and source; AI routes, code executes.`,
      },
      resultado: {
        pt: "Na primeira rodada, o agente contábil achou 622 cadastros errados em 33 mil, ao vivo, em 12 segundos. O de banco de horas revelou 685 horas negativas que o saldo consolidado escondia.",
        en: "On its first run, the accounting agent found 622 wrong records out of 33,000, live, in 12 seconds. The hour-bank agent surfaced 685 negative hours hidden by the consolidated balance.",
      },
      tags: ["Python", "LLMs", "SQL", "PostgreSQL", "Docker"],
      ano: "2026",
      thumb: "hub",
      href: "/hub/",
    },
    {
      titulo: { pt: "Agente de tarefas no WhatsApp", en: "Task agent on WhatsApp" },
      descricao: {
        pt: "Líderes de fábrica não abrem o gerenciador de tarefas no chão de fábrica. Um agente no WhatsApp entende texto e áudio e cria, edita e conclui tarefas reais — com eco do que entendeu antes de gravar, porque transcrição alucina.",
        en: "Plant leaders don't open the task manager on the factory floor. A WhatsApp agent understands text and voice and creates, edits and completes real tasks — echoing what it understood before writing, because transcription hallucinates.",
      },
      resultado: {
        pt: "Concluir uma tarefa virou foto + legenda pelo celular, com a evidência que a régua da empresa exige. Prazo e responsável são lidos em código e conferidos contra a lista real; nome que não existe vira pergunta, nunca tarefa errada.",
        en: "Completing a task became photo + caption from the phone, with the evidence the company's rules require. Deadline and owner are parsed in code and checked against the real list; an unknown name becomes a question, never a wrong task.",
      },
      tags: ["LLMs", "Whisper", "WhatsApp", "n8n"],
      ano: "2026",
      thumb: "whatsapp",
      href: "/hub/",
    },
    {
      titulo: { pt: `${numeros.workflows} automações em n8n`, en: `${numeros.workflows} n8n automations` },
      descricao: {
        pt: `Relatórios que ninguém abria e conferências que dependiam de uma pessoa. ${numeros.nos.toLocaleString("pt-BR")} nós ligando ERP, BigQuery, Microsoft 365 e Google entregam imagem, PDF e tarefa com prazo onde a pessoa já está — WhatsApp e e-mail — todo dia útil, sem ninguém apertar botão.`,
        en: `Reports nobody opened and checks that depended on one person. ${numeros.nos.toLocaleString("en-US")} nodes connecting ERP, BigQuery, Microsoft 365 and Google deliver images, PDFs and tasks with deadlines where people already are — WhatsApp and e-mail — every business day, with nobody pressing a button.`,
      },
      resultado: {
        pt: "Cada ordem de produção atrasada virou tarefa com dono e prazo; na semana de estreia, o estoque de atrasadas de uma unidade foi de 50 para 9. A conferência de canhotos de nota fiscal roda sozinha em três unidades, sem abrir um PDF.",
        en: "Every late production order became a task with an owner and a deadline; in the launch week, one plant's backlog of late orders went from 50 to 9. Invoice-receipt reconciliation runs on its own across three plants, without opening a single PDF.",
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
