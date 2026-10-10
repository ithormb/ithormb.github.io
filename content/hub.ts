import type { Text } from "@/lib/i18n";

export type Canal = "tela" | "whatsapp" | "email" | "tarefa";

export type Agente = {
  area: Text;
  nome: Text;
  faz: Text;
  impacto?: Text; // valor mensurado / risco auditado
  fontes?: string[]; // bases consultadas
  canais: Canal[];
  ia?: boolean; // conversa em linguagem natural
};

export const hub = {
  nome: { pt: "Hub de agentes de IA", en: "AI agents hub" } satisfies Text,
  resumo: {
    pt: "Plataforma interna que conecta 13 agentes de IA diretamente ao ERP, MES e bancos de dados de seis empresas e cinco fábricas. Cada agente entrega números com carimbo de origem e data auditados, operando sob o princípio de que a IA classifica e sugere, mas o código determinístico executa — eliminando alucinações e garantindo governança.",
    en: "Internal platform connecting 13 AI agents directly to the ERP, MES, and databases across six companies and five manufacturing plants. Each agent delivers numbers stamped with verified sources and dates, operating under the principle that AI classifies and suggests while deterministic code executes — eliminating hallucinations and ensuring governance.",
  } satisfies Text,
  stack: ["Python", "LLMs (Multi-provedor)", "SQL Server", "BigQuery", "PostgreSQL", "Docker", "Whisper"],
  metricas: [
    { valor: "13", rotulo: { pt: "agentes de IA em produção", en: "AI agents in production" }, icone: "bot" as const },
    { valor: "8", rotulo: { pt: "áreas corporativas atendidas", en: "business departments served" }, icone: "factory" as const },
    { valor: "0", rotulo: { pt: "escritas no ERP: leitura apenas", en: "writes to the ERP: read-only" }, icone: "chart" as const },
    { valor: "< R$ 0,05", rotulo: { pt: "custo médio por consulta de IA", en: "average cost per AI query" }, icone: "trending-down" as const },
  ],
  garantias: [
    {
      titulo: { pt: "Número com data e origem", en: "Numbers with a date and a source" },
      pt: "Toda resposta com número diz, na primeira linha, de quando é o dado e de onde veio — montado em código, não pelo modelo.",
      en: "Every numeric answer states, on its first line, when the data is from and where it came from — assembled in code, not by the model.",
    },
    {
      titulo: { pt: "A IA sugere, o código decide", en: "AI suggests, code decides" },
      pt: "O modelo classifica intenção e endereça; quem executa é código determinístico, com confirmação humana antes de qualquer disparo.",
      en: "The model classifies intent and routes; execution is deterministic code, with human confirmation before anything fires.",
    },
    {
      titulo: { pt: "Sistema de origem intocado", en: "Source systems untouched" },
      pt: "O ERP é somente leitura, por princípio. Cada pessoa só vê o que tem permissão para ver, com a mesma regra em todas as telas e canais.",
      en: "The ERP is read-only, on principle. Each person only sees what they are allowed to see, with the same rule across every screen and channel.",
    },
    {
      titulo: { pt: "Custo auditado por chamada", en: "Cost audited per call" },
      pt: "Roteamento inteligente de modelos: consultas rotineiras usam modelos de centavos, com auditoria de custo e teto por usuário.",
      en: "Intelligent model routing: routine lookups use sub-cent models, with automated cost auditing and per-user ceilings.",
    },
  ] as (Text & { titulo: Text })[],
  agentes: [
    {
      area: { pt: "RH", en: "HR" },
      nome: { pt: "Banco de Horas", en: "Hour bank" },
      faz: {
        pt: "Saldo de banco de horas por unidade, setor e colaborador, com reconciliação contra o ERP e metas por período que os líderes planejam e o sistema acompanha.",
        en: "Hour-bank balance per plant, department, and employee, reconciled against the ERP, with period targets planned by leaders and tracked automatically.",
      },
      impacto: {
        pt: "Saldo de fábrica corrigido de +1.084h para +242,9h reais · 70 colaboradores auditados, prevenindo passivos trabalhistas ocultos.",
        en: "Corrected plant balance from +1,084h to +242.9h actual hours · 70 employees audited, preventing hidden labor liabilities.",
      },
      fontes: ["TOTVS ERP", "PostgreSQL Hub"],
      canais: ["tela", "whatsapp", "tarefa"],
      ia: true,
    },
    {
      area: { pt: "RH", en: "HR" },
      nome: { pt: "Check de Ponto", en: "Time-clock check" },
      faz: {
        pt: "Lê inconsistências de batida no ERP, agrupa por líder e gera tarefas atribuídas com a tabela exata de correções pendentes.",
        en: "Reads punch errors flagged by the ERP, groups them by team leader, and opens tracked tasks with the exact table of required fixes.",
      },
      impacto: {
        pt: "Fila de pendências de batidas reduzida de 819 para 155 · Atribuição automática por equipe com auto-fechamento após acerto no ERP.",
        en: "Punch audit backlog cut from 819 to 155 entries · Auto-assigned per team with automatic closing upon ERP resolution.",
      },
      fontes: ["TOTVS ERP", "FlowPilot"],
      canais: ["tela", "tarefa"],
    },
    {
      area: { pt: "Tesouraria", en: "Treasury" },
      nome: { pt: "Contas a Pagar", en: "Accounts payable" },
      faz: {
        pt: "Fotografa os títulos em aberto todo dia útil e compara duas fotos: o que entrou, o que saiu e alterações de valor ou vencimento, com assistente de IA para consultas.",
        en: "Snapshots open payables every business day and compares snapshots: additions, settlements, and date/amount adjustments, with an AI assistant for questions.",
      },
      impacto: {
        pt: "98.956 títulos fotografados e auditados · Relatório comparativo diário direto à diretoria, eliminando cruzamentos manuais de planilhas.",
        en: "98,956 ledger items snapshotted and audited · Daily executive change reports, eliminating manual spreadsheet cross-referencing.",
      },
      fontes: ["TOTVS ERP", "PostgreSQL Hub"],
      canais: ["tela", "whatsapp", "email"],
      ia: true,
    },
    {
      area: { pt: "Tesouraria", en: "Treasury" },
      nome: { pt: "Contas a Receber", en: "Accounts receivable" },
      faz: {
        pt: "Títulos a receber por unidade e cliente, com alerta de inadimplência e cobrança preventiva via consultas em linguagem natural.",
        en: "Receivables per plant and customer, highlighting overdue invoices and supporting proactive follow-ups via natural language queries.",
      },
      impacto: {
        pt: "Correção de relatório com distorção de 12× no contas a receber de filiais · Alertas diários por WhatsApp com dados ao vivo do ERP.",
        en: "Corrected 12× reporting distortion on branch receivables · Daily WhatsApp alerts with live ERP ledger data.",
      },
      fontes: ["TOTVS ERP", "WhatsApp"],
      canais: ["tela", "whatsapp"],
      ia: true,
    },
    {
      area: { pt: "Bancos", en: "Banking" },
      nome: { pt: "Conciliação Bancária", en: "Bank reconciliation" },
      faz: {
        pt: "Coleta extratos bancários, confronta com a movimentação contábil do ERP por conta e empresa, e abre tarefas automáticas para qualquer divergência.",
        en: "Pulls bank statements, compares them against ERP accounting ledgers per account and company, and triggers automated tasks for discrepancies.",
      },
      impacto: {
        pt: "Encontra estorno sem par e lançamento em duplicidade que a conferência manual não via · Conciliação automática exata no centavo.",
        en: "Catches unmatched reversals and duplicate entries that manual checks missed · Automated cent-perfect reconciliation.",
      },
      fontes: ["Extratos Bancários", "TOTVS ERP"],
      canais: ["whatsapp", "tarefa"],
    },
    {
      area: { pt: "Contabilidade", en: "Accounting" },
      nome: { pt: "Cadastro Contábil", en: "Accounting master data" },
      faz: {
        pt: "Varre o cadastro de clientes e fornecedores das seis empresas contra o plano de contas padrão, identificando divergências estruturais em segundos.",
        en: "Audits customer and supplier master records across six companies against the standard chart of accounts, finding structural issues in seconds.",
      },
      impacto: {
        pt: "33 mil cadastros auditados em ~12 segundos · 622 contas contábeis incorretas saneadas antes do fechamento de balancete.",
        en: "33k master records audited in ~12 seconds · 622 misconfigured ledger accounts resolved prior to financial closing.",
      },
      fontes: ["TOTVS ERP", "PostgreSQL Hub"],
      canais: ["tela", "email"],
    },
    {
      area: { pt: "Fiscal", en: "Tax" },
      nome: { pt: "Fiscal — TES & CFOP", en: "Tax rules & CFOP" },
      faz: {
        pt: "Audita notas fiscais de entrada aplicando régua de regras fiscais em cinco camadas e assistente de IA para dúvidas tributárias da equipe.",
        en: "Audits inbound tax invoices with a 5-layer fiscal rule engine and an AI assistant for team tax inquiries.",
      },
      impacto: {
        pt: "28.744 itens fiscais classificados e 969 TES auditadas nas notas · Custo de IA controlado em ~R$ 0,03 por pergunta.",
        en: "28,744 invoice items classified and 969 tax transaction rules audited · AI cost controlled at ~R$ 0.03 per lookup.",
      },
      fontes: ["TOTVS ERP", "LLM Multi-provedor"],
      canais: ["tela"],
      ia: true,
    },
    {
      area: { pt: "Gestão", en: "Management" },
      nome: { pt: "Reuniões e Ações (RMS)", en: "Meetings & actions (RMS)" },
      faz: {
        pt: "Transcreve e analisa reuniões de diretoria e gestão, avalia a constância do ritual e converte decisões em tarefas com dono e prazo.",
        en: "Transcribes and analyzes management meetings, evaluates ritual consistency, and converts decisions into tracked tasks with deadlines.",
      },
      impacto: {
        pt: "25 reuniões avaliadas com constância de 83% · 86 decisões transformadas automaticamente em tarefas no gerenciador corporativo.",
        en: "25 meetings evaluated with 83% consistency · 86 decisions automatically turned into tracked corporate tasks.",
      },
      fontes: ["Whisper", "FlowPilot", "LLMs"],
      canais: ["tela", "tarefa"],
      ia: true,
    },
    {
      area: { pt: "Gestão", en: "Management" },
      nome: { pt: "Tarefas por WhatsApp", en: "Tasks via WhatsApp" },
      faz: {
        pt: "Permite criar, consultar, editar e concluir tarefas por comandos de texto ou áudio no WhatsApp, com eco de confirmação antes de gravar.",
        en: "Enables creating, querying, editing, and completing tasks via voice or text messages on WhatsApp, confirming intent before saving.",
      },
      impacto: {
        pt: "Gestão de tarefas em tempo real direto do chão de fábrica e da diretoria sem necessidade de abrir telas de computador.",
        en: "Real-time task management straight from the factory floor and executive chats without opening a desktop browser.",
      },
      fontes: ["WhatsApp", "Whisper", "FlowPilot API"],
      canais: ["whatsapp", "tarefa"],
      ia: true,
    },
    {
      area: { pt: "Indústria", en: "Manufacturing" },
      nome: { pt: "Produção e OEE", en: "Production & OEE" },
      faz: {
        pt: "Consolida a produção e OEE de extrusão e lavação das plantas industriais, conectando dados de BigQuery e ERP para responder dúvidas fabris.",
        en: "Consolidates extrusion and washing production and OEE across plants, connecting BigQuery and ERP to answer shop-floor questions.",
      },
      impacto: {
        pt: "Unificou o monitoramento de 3 plantas em 1 tela · Detectou distorção crítica de OEE (4,8% publicado vs. 21,5% real no BI).",
        en: "Unified 3-plant monitoring into 1 screen · Flagged critical OEE divergence (4.8% reported vs 21.5% actual).",
      },
      fontes: ["ControlPilot / BigQuery", "MES", "TOTVS ERP"],
      canais: ["tela", "whatsapp"],
      ia: true,
    },
    {
      area: { pt: "Transversal", en: "Cross-cutting" },
      nome: { pt: "Roteador do WhatsApp", en: "WhatsApp router" },
      faz: {
        pt: "Um único número para todo o grupo: classifica intenção, identifica o agente responsável, respeita permissões por usuário e dispara fluxos seguros.",
        en: "A single number for the company: classifies intent, routes to the right agent, respects user permissions, and triggers secure workflows.",
      },
      impacto: {
        pt: "1.200+ mensagens recebidas e 180+ disparos automatizados com segurança de perfil e controle de custos por requisição.",
        en: "1,200+ messages received and 180+ automated dispatches with role-based security and cost auditing per request.",
      },
      fontes: ["WhatsApp Evolution", "PostgreSQL Hub", "LLM Router"],
      canais: ["whatsapp"],
      ia: true,
    },
  ] as Agente[],
};
