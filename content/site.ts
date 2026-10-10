import type { Text } from "@/lib/i18n";
import { numeros } from "./automacoes";
import { hub } from "./hub";

export type Thumb = "hub" | "whatsapp" | "n8n" | "clusters" | "bi" | "forecast" | "oee" | "app" | "kanban";

export type Projeto = {
  titulo: Text;
  descricao: Text;
  // O que mudou no negócio, como capacidade observada. Sem números internos de empregador.
  resultado?: Text;
  cv?: Text; // versão curta para o CV de uma página; sem ela, o CV usa descrição + resultado
  tags: string[];
  ano: string;
  thumb: Thumb;
  imagem?: string; // reprodução real (dados fictícios) no lugar da miniatura desenhada
  href?: string; // relativo ao idioma (começa com /) ou URL externa; sem href, o card não é link
  estudo?: boolean;
  noCv?: boolean; // fica fora do CV de uma página
};

export type Experiencia = {
  logo?: string;
  periodo: Text;
  onde: Text;
  local?: Text;
  // do cargo mais recente para o mais antigo
  cargos: { titulo: Text; periodo: Text }[];
  descricao: Text;
  destaques?: Text[]; // tópicos de impacto; no site aparecem no lugar da descrição
  tags: string[];
};

export type Formacao = {
  logo?: string;
  link?: string;
  periodo: Text;
  titulo: Text;
  onde: Text;
  nota?: Text;
};

export const site = {
  name: "Thomas Barbosa",
  role: { pt: "Especialista em Dados, IA & Automações", en: "Data, AI & Automation Specialist" } satisfies Text,
  tagline: {
    pt: `Lidero o time de Dados e IA do Grupo Raposo Plásticos: ${hub.agentes.length} agentes de IA e ${numeros.fluxosAtivos} automações ativas que devolvem ~142 h/mês às equipes e reduzem ~80% dos custos com ferramentas, do ERP ao painel de decisão. Antes, pricing e inteligência de mercado na Solar Coca-Cola e BI na Arco Educação.`,
    en: `I lead the Data & AI team at Grupo Raposo Plásticos: ${hub.agentes.length} AI agents and ${numeros.fluxosAtivos} active automations returning ~142 h/mo to teams and cutting tooling costs by ~80%, from the ERP to decision dashboards. Before that, pricing and market intelligence at Solar Coca-Cola and BI at Arco Educação.`,
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
    { tipo: "carreira", nome: "Grupo Raposo Plásticos", logo: "/logos/raposo.webp", legenda: { pt: "Especialista em Dados · líder do time de Dados e IA", en: "Data Specialist · Data & AI team lead" } },
    { tipo: "carreira", nome: "Solar Coca-Cola", logo: "/logos/solar.webp", legenda: { pt: "Pricing e Inteligência de Mercado", en: "Pricing and Market Intelligence" } },
    { tipo: "carreira", nome: "Arco Educação", logo: "/logos/arco.svg", legenda: { pt: "SAS Educação · Projetos e BI", en: "SAS Educação · Projects and BI" } },
    { tipo: "formacao", nome: "USP / ESALQ", logo: "/logos/usp.svg", legenda: { pt: "MBA em Data Science e Analytics", en: "MBA in Data Science and Analytics" } },
    { tipo: "formacao", nome: "Universidade Federal do Ceará", logo: "/logos/ufc.webp", legenda: { pt: "Engenharia Mecânica · UFC", en: "Mechanical Engineering · UFC" } },
  ] as { tipo: "carreira" | "formacao"; nome: string; logo: string; legenda: Text }[],
  links: {
    linkedin: "https://www.linkedin.com/in/thomas-barbosa-silva/",
    github: "https://github.com/ithormb",
    email: "thomasbarbosaeng@alu.ufc.br" as string | null,
    cv: { pt: "/cv/thomas-barbosa-cv.pdf", en: "/cv/thomas-barbosa-cv-en.pdf" },
  },

  sobreTitulo: {
    pt: "Dados que viram decisão — e decisão que vira ação.",
    en: "Data that becomes decisions — and decisions that become action.",
  } satisfies Text,

  // Os números do retrato (anos, automações, agentes, painéis) não se repetem aqui.
  stats: [
    { valor: String(numeros.workflows), rotulo: { pt: "workflows construídos no n8n", en: "n8n workflows built" }, icone: "flow" },
    { valor: "5", rotulo: { pt: "fábricas atendidas pelo time", en: "plants served by the team" }, icone: "factory" },
    { valor: "~142h", rotulo: { pt: "horas/mês devolvidas às equipes", en: "hours/mo returned to teams" }, icone: "clock" },
    { valor: "-80%", rotulo: { pt: "custo de ferramentas de dados (~R$ 40k/ano)", en: "cut in data tooling costs (~R$ 40k/yr)" }, icone: "trending-down" },
  ] as { valor: string; rotulo: Text; icone: "chart" | "bot" | "flow" | "factory" | "calendar" | "paper" | "clock" | "trending-down" }[],

  // Do mais próximo da IA ao mais próximo do dado bruto.
  tecnologias: [
    {
      grupo: { pt: "Modelos e agentes de IA", en: "AI models and agents" },
      nota: { pt: "Multi-provedor: o modelo certo para cada tarefa", en: "Multi-provider: the right model for each task" },
      itens: ["OpenAI", "Claude", "Gemini", "LangChain", "LangGraph", "Whisper"],
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
      itens: ["SQL", "Python", "Pandas", "scikit-learn", "Power BI", "DAX", "Power Query", "Microsoft Fabric", "Looker"],
    },
    {
      grupo: { pt: "Engenharia de dados e nuvem", en: "Data engineering and cloud" },
      nota: { pt: "Pipelines, bancos e plataforma", en: "Pipelines, databases and platform" },
      itens: ["BigQuery", "dbt", "Google Cloud", "PostgreSQL", "SQL Server", "ETL"],
    },
   ] as { grupo: Text; nota: Text; itens: string[] }[],

  // Como trabalho: quem eu sou, com o viés técnico e o humano em cada princípio.
  principios: [
    {
      titulo: { pt: "Começo pela dor, não pela ferramenta", en: "I start with the pain, not the tool" },
      texto: {
        pt: "Antes de abrir o editor, converso com quem vive o problema no dia a dia. A melhor solução costuma ser a mais simples que resolve a dor de verdade — não a mais sofisticada.",
        en: "Before opening the editor, I talk to whoever lives the problem every day. The best solution is usually the simplest one that solves the real pain — not the most sophisticated.",
      },
    },
    {
      titulo: { pt: "Movido a desafio", en: "Driven by challenge" },
      texto: {
        pt: "Problema difícil não me afasta, me prende. Resiliência, para mim, é insistir até funcionar em produção, aprender com cada erro e registrar o que não deu certo para ninguém repetir.",
        en: "A hard problem doesn't push me away, it hooks me. Resilience, to me, is pushing until it works in production, learning from every mistake and writing down what didn't work so nobody repeats it.",
      },
    },
    {
      titulo: { pt: "Dado em que se pode confiar", en: "Data you can trust" },
      texto: {
        pt: "Todo número sai com data e origem, montado em código e conferido contra a fonte. Quem decide precisa saber de onde veio o dado antes de agir sobre ele.",
        en: "Every number comes with a date and a source, built in code and checked against the origin. Whoever decides needs to know where the data came from before acting on it.",
      },
    },
    {
      titulo: { pt: "IA que apoia, pessoa que decide", en: "AI supports, people decide" },
      texto: {
        pt: "A IA sugere, organiza e acelera; a decisão e a confirmação ficam com quem responde por ela. Tecnologia boa devolve tempo às pessoas sem tirar delas o controle.",
        en: "AI suggests, organizes and speeds things up; the decision and the confirmation stay with whoever is accountable. Good technology gives people time back without taking control away from them.",
      },
    },
  ] as { titulo: Text; texto: Text }[],

  sobre: [
    {
      pt: `Há mais de 8 anos transformo dados dispersos em decisão de negócio: BI e projetos na Arco Educação, inteligência de mercado e pricing na Solar Coca-Cola e, hoje, a indústria. No Grupo Raposo Plásticos — seis empresas e cinco fábricas — lidero o time de Dados e IA: 56 rotinas ativas no n8n que devolvem mais de 140 horas/mês às áreas e ${hub.agentes.length} agentes de IA que auditam o ERP e o MES com origem e data em cada número.`,
      en: `For 8+ years I've turned scattered data into business decisions: BI and projects at Arco Educação, market intelligence and pricing at Solar Coca-Cola and, now, manufacturing. At Grupo Raposo Plásticos — six companies and five plants — I lead the Data & AI team: 56 active n8n routines returning over 140 hours/month to business teams and ${hub.agentes.length} AI agents auditing the ERP and MES with a verified date and source on every number.`,
    },
    {
      pt: "Sou engenheiro mecânico pela UFC, com MBA em Data Science e Analytics pela USP/ESALQ. Duas regras guiam o que construo: número sem data e sem origem não serve para decidir, e o modelo de linguagem aconselha — quem executa é código, com uma pessoa confirmando.",
      en: "I'm a mechanical engineer from UFC with an MBA in Data Science and Analytics from USP/ESALQ. Two rules guide what I build: a number without a date and a source is useless for decisions, and the language model advises — code executes, with a person confirming.",
    },
  ] as Text[],

  // Do mais recente para o mais antigo.
  experiencia: [
    {
      logo: "/logos/raposo.webp",
      periodo: { pt: "2025 — hoje", en: "2025 — present" },
      onde: { pt: "Grupo Raposo Plásticos", en: "Grupo Raposo Plásticos" },
      local: { pt: "remoto", en: "remote" },
      cargos: [{ titulo: { pt: "Especialista em Dados · líder do time de Dados e IA", en: "Data Specialist · Data & AI team lead" }, periodo: { pt: "set 2025 — hoje", en: "Sep 2025 — present" } }],
      descricao: {
        pt: "Lidero um time de 3 pessoas que atende as cinco fábricas do grupo: hub de agentes de IA, automações em n8n, o Hub Forms para o chão de fábrica e plataformas próprias no lugar de Power Apps e Power BI, sem licença nova, com ERP somente leitura e governança de dados.",
        en: "I lead a team of 3 serving the group's five plants: an AI agents hub, n8n automations, Hub Forms for the shop floor and in-house platforms replacing Power Apps and Power BI, with no new licences, a read-only ERP and data governance.",
      },
      destaques: [
        { pt: "Lidero um time de 3 pessoas, formado internamente, que atende as cinco fábricas do grupo sem terceiros.", en: "I lead a team of 3, trained in-house, serving the group's five plants without external contractors." },
        { pt: `Hub com ${hub.agentes.length} agentes de IA em RH, tesouraria, contabilidade, fiscal e indústria: encontraram divergências bancárias e corrigiram passivos de banco de horas e 600+ cadastros contábeis.`, en: `Hub with ${hub.agentes.length} AI agents across HR, treasury, accounting, tax and manufacturing: uncovered unrecorded bank reversals and resolved hour-bank discrepancies and 600+ ledger errors.` },
        { pt: "56 automações ativas no n8n: ~142 h/mês devolvidas às equipes operacionais em relatórios, conferências e tarefas no WhatsApp e e-mail.", en: "56 active n8n workflows: ~142 h/mo returned to operations through automated reports, cross-checks, and WhatsApp/email dispatches." },
        { pt: "Economia de ~80% no custo de ferramentas (~R$ 40 mil/ano): substituição de Power BI, Power Apps e licenças corporativas por microsserviços próprios e n8n self-hosted.", en: "~80% reduction in tooling costs (~R$ 40k/yr): replaced Power BI, Power Apps, and vendor licenses with in-house microservices and self-hosted n8n." },
        { pt: "Governança e auditoria: ERP somente leitura, nota de segurança 8,6/10 com 15 de 15 achados fechados e política formal de retenção de dados.", en: "Governance and security: read-only ERP, security audit posture of 8.6/10 with 15/15 closed findings, and formal data retention policy." },
      ],
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
      titulo: { pt: "Artigo publicado no SBPO 2025", en: "Paper published at SBPO 2025" },
      link: "https://proceedings.science/sbpo/sbpo-2025/trabalhos/analise-de-segmentacao-de-varejo-integrando-geovisualizacao-e-insights-estrategi?lang=pt-br",
      onde: { pt: "LVII Simpósio Brasileiro de Pesquisa Operacional", en: "57th Brazilian Symposium on Operations Research" },
      nota: {
        pt: "Área AS&DS — Análise e Ciência de Dados. Segmentação de varejo integrando geovisualização aos modelos RFM e K-Means. Coautor.",
        en: "AS&DS track — Data Analysis and Data Science. Retail segmentation integrating geovisualization with RFM and K-Means models. Co-author.",
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
      cv: { pt: `${hub.agentes.length} agentes de IA para RH, tesouraria, contabilidade, bancos, gestão e indústria, lendo ERP, MES e planilhas com data e origem em cada número; a IA endereça, o código executa. Encontrou 622 cadastros contábeis incorretos ao vivo e corrigiu o saldo real de banco de horas.`, en: `${hub.agentes.length} AI agents for HR, treasury, accounting, banking, management and manufacturing, reading the ERP, MES and spreadsheets with a date and source on every number; AI routes, code executes. Found 622 misconfigured ledger records live and corrected the real hour-bank balance.` },
      descricao: {
        pt: `Seis áreas (RH, tesouraria, contabilidade, bancos, gestão e indústria) dependiam de planilha e consulta manual ao ERP. Construí uma plataforma com ${hub.agentes.length} agentes que leem ERP, MES e planilhas e respondem com data e origem do dado; a IA endereça, o código executa.`,
        en: `Six areas (HR, treasury, accounting, banking, management and manufacturing) depended on spreadsheets and manual ERP lookups. I built a platform with ${hub.agentes.length} agents that read the ERP, the MES and spreadsheets and answer with the data's date and source; AI routes, code executes.`,
      },
      resultado: {
        pt: "Erros críticos que nenhuma rotina manual pegava passaram a aparecer sozinhos: detecção de estorno bancário não conciliado, 622 cadastros contábeis incorretos auditados ao vivo em 12s e recálculo real do saldo de banco de horas (+1.084h corrigido para +242h), prevenindo passivos trabalhistas.",
        en: "Critical errors that slipped past manual routines now surface automatically: uncovered an unrecorded bank reversal, audited 622 misconfigured ledger accounts live in 12s, and corrected hour-bank balances (+1,084h to +242h), preventing labor liabilities.",
      },
      tags: ["Python", "LLMs", "SQL", "PostgreSQL", "Docker"],
      ano: "2026",
      thumb: "hub",
      href: "/hub/",
    },
    {
      titulo: { pt: "Painéis de BI e pipeline de dados", en: "BI dashboards and data pipeline" },
      cv: { pt: "50+ painéis em Power BI e Looker Studio; os industriais cobrem produção, OEE, paradas, estoques, custos e rastreabilidade, sobre pipeline com extração, camada bruta, dbt, testes e modelo dimensional.", en: "50+ dashboards in Power BI and Looker Studio; the manufacturing ones cover production, OEE, downtime, inventory, costs and traceability, on a pipeline with extraction, raw layer, dbt, tests and a dimensional model." },
      descricao: {
        pt: "Mais de 50 painéis de BI em Power BI e Looker Studio ao longo da carreira. Os industriais cobrem visão geral, produção, OEE, paradas, estoques, logística, custos, controle de lote, rastreabilidade, contabilidade e tarefas, sobre um pipeline com extração, camada bruta, dbt, testes e modelo dimensional.",
        en: "More than 50 BI dashboards in Power BI and Looker Studio throughout my career. The industrial ones cover overview, production, OEE, downtime, inventory, logistics, costs, batch control, traceability, accounting and tasks, on a pipeline with extraction, a raw layer, dbt, tests and a dimensional model.",
      },
      tags: ["Power BI", "Looker", "dbt", "DAX", "BigQuery"],
      ano: "2026",
      thumb: "oee",
      imagem: "/bi/controle-geral.webp",
      href: "/bi/",
    },
    {
      titulo: { pt: "Hub Forms: o chão de fábrica na fonte única de dados", en: "Hub Forms: the shop floor in the single source of truth" },
      cv: { pt: "App web mobile-first para portaria, logística, produção, qualidade e treinamentos: nota fiscal puxada do TOTVS Protheus, conferência cega, ordem de carregamento travada pelo saldo do lote, ficha oficial em PDF e presença por QR code, no mesmo banco do FlowPilot, do painel de fábrica e da IA.", en: "Mobile-first web app for gatehouse, logistics, production, quality and training: invoice pulled from TOTVS Protheus, blind weighing, loading orders capped by batch balance, official form as PDF and QR-code attendance, in the same database as FlowPilot, the plant dashboard and the AI." },
      descricao: {
        pt: "Portaria, logística, produção, qualidade e treinamentos registravam em papel, planilhas e apps soltos. O Hub Forms é uma aplicação web mobile-first em que cada registro nasce validado contra o TOTVS Protheus, com foto de evidência e horário do servidor, no mesmo banco do FlowPilot, do Painel de fábrica e dos agentes de IA.",
        en: "Gatehouse, logistics, production, quality and training were logged on paper, spreadsheets and scattered apps. Hub Forms is a mobile-first web app where every record is validated against TOTVS Protheus at entry, with photo evidence and a server timestamp, in the same database as FlowPilot, the plant dashboard and the AI agents.",
      },
      resultado: {
        pt: "Recebimento e expedição com nota fiscal puxada do ERP e conferência cega, ordem de carregamento travada pelo saldo do lote, ficha oficial gerada em PDF e presença em treinamento por QR code: um padrão só entre as unidades, sem redigitação.",
        en: "Receiving and shipping with the invoice pulled from the ERP and blind weighing, loading orders capped by batch balance, the official form generated as PDF and QR-code training attendance: one standard across plants, no retyping.",
      },
      tags: ["Next.js", "NestJS", "PostgreSQL", "TOTVS Protheus", "FlowPilot"],
      ano: "2026",
      thumb: "app",
      href: "/forms/",
    },
    {
      titulo: { pt: "Plataforma de gestão de tarefas", en: "Task management platform" },
      descricao: {
        pt: "Substituímos o planner em Power Apps por uma plataforma própria, com o histórico importado sem perda. Os agentes de IA do hub criam tarefas nela sozinhos, com dono, prazo e evidência; o painel de acompanhamento, que era Power BI, foi refeito em HTML dentro do hub.",
        en: "We replaced the Power Apps planner with our own platform, importing the history with no loss. The hub's AI agents create tasks in it on their own, with owner, deadline and evidence; the tracking dashboard, formerly Power BI, was rebuilt in HTML inside the hub.",
      },
      resultado: {
        pt: "Mais de 48 mil tarefas coordenadas entre 59 usuários ativos com 92% a 97% de conclusão no prazo; tarefas com prazo e evidência abertas e cobradas automaticamente pelos agentes do hub.",
        en: "Over 48k tasks orchestrated across 59 active users with 92%–97% on-time completion; tasks with deadlines and evidence auto-created and followed up by AI hub agents.",
      },
      tags: ["PostgreSQL", "APIs REST", "n8n"],
      ano: "2026",
      thumb: "kanban",
      noCv: true,
    },
    {
      titulo: { pt: "IA no WhatsApp", en: "AI on WhatsApp" },
      descricao: {
        pt: "Um número só para a empresa: entende texto e áudio, descobre qual agente responde, respeita a permissão de cada pessoa e dispara as automações que ela pode usar. Em piloto, um agente que cria, edita e conclui tarefas reais pela conversa, com eco do que entendeu antes de gravar — porque transcrição alucina.",
        en: "One number for the whole company: understands text and voice, finds which agent should answer, respects each person's permissions and triggers the automations they may use. In pilot, an agent that creates, edits and completes real tasks through the chat, echoing what it understood before writing — because transcription hallucinates.",
      },
      resultado: {
        pt: "Mais de 1.200 mensagens recebidas e 180+ rotinas disparadas; comandos de voz e texto com eco de confirmação permitindo criar e concluir tarefas reais direto do chão de fábrica e da diretoria.",
        en: "Over 1,200 messages received and 180+ automated dispatches; voice and text commands with intent confirmation allowing real task management straight from the shop floor and executive chat.",
      },
      tags: ["LLMs", "Whisper", "WhatsApp", "n8n"],
      ano: "2026",
      thumb: "whatsapp",
      href: "/hub/",
      noCv: true,
    },
    {
      titulo: { pt: `${numeros.workflows} automações em n8n (${numeros.fluxosAtivos} ativas)`, en: `${numeros.workflows} n8n automations (${numeros.fluxosAtivos} active)` },
      cv: { pt: `${numeros.fluxosAtivos} rotinas ativas ligando ERP, BigQuery, Microsoft 365 e Google, que entregam imagem, PDF e tarefa com prazo no WhatsApp e no e-mail, todo dia útil: ~142 h/mês devolvidas às áreas e conferência de canhotos em 3 fábricas sem abrir PDF.`, en: `${numeros.fluxosAtivos} active routines connecting the ERP, BigQuery, Microsoft 365 and Google, delivering images, PDFs and tasks with deadlines over WhatsApp and email every business day: ~142 h/mo returned to teams and invoice-receipt checks across 3 plants without opening a PDF.` },
      descricao: {
        pt: `${numeros.fluxosAtivos} rotinas em produção contínua devolvem mais de 140 horas/mês às áreas. ${numeros.nos.toLocaleString("pt-BR")} nós ligando ERP, BigQuery, Microsoft 365 e Google entregam imagem, PDF e tarefa com prazo onde a pessoa já está — WhatsApp e e-mail — todo dia útil, sem ninguém apertar botão.`,
        en: `${numeros.fluxosAtivos} routines in continuous production return over 140 hours/month to business teams. ${numeros.nos.toLocaleString("en-US")} nodes connecting ERP, BigQuery, Microsoft 365, and Google deliver images, PDFs, and tasks where people already are — WhatsApp and email — every business day.`,
      },
      resultado: {
        pt: "~142 h/mês economizadas em rotinas manuais. Ordens de produção atrasadas caíram de 50 para 9 em 24h na unidade AM; fila de pendências de ponto recuou de 819 para 155; conferência de canhotos roda em 3 fábricas sem abrir PDFs e sem custos de OCR.",
        en: "~142 h/month saved from manual routines. Overdue manufacturing orders dropped from 50 to 9 in 24h; time-clock backlog plummeted from 819 to 155; invoice receipt reconciliation runs across 3 plants without opening PDFs or paying OCR fees.",
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
