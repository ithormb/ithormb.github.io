import type { Text } from "@/lib/i18n";

export type Passo = {
  tipo: "gatilho" | "fonte" | "processo" | "saida";
  label: Text;
};

export type Automacao = {
  area: Text;
  nome: Text;
  faz: Text;
  quando: Text; // agenda ou gatilho, em linguagem humana
  cadeia: Passo[];
};

const p = (tipo: Passo["tipo"], pt: string, en = pt): Passo => ({ tipo, label: { pt, en } });

// Medido na instância do n8n pela API pública. Atualize os números e a data juntos.
export const numeros = {
  medidoEm: "2026-09-16",
  workflows: 135,
  ativos: 53,
  nos: 2880, // nós funcionais, sem as anotações (sticky notes)
  tiposDeNo: 43,
  credenciais: 25,
  mediaNosPorWorkflow: 24,
  maiorWorkflow: 59,
};

// Os 12 tipos de nó mais usados — quantidade de instâncias em todos os workflows.
export const tiposDeNo: { nome: string; qtd: number; grupo: "logica" | "dados" | "integracao" | "controle" }[] = [
  { nome: "Code (JS)", qtd: 794, grupo: "logica" },
  { nome: "HTTP Request", qtd: 362, grupo: "integracao" },
  { nome: "Google Sheets", qtd: 224, grupo: "dados" },
  { nome: "Set", qtd: 178, grupo: "logica" },
  { nome: "If", qtd: 176, grupo: "logica" },
  { nome: "Merge", qtd: 162, grupo: "logica" },
  { nome: "Microsoft Excel", qtd: 157, grupo: "dados" },
  { nome: "WhatsApp (Evolution)", qtd: 100, grupo: "integracao" },
  { nome: "Filter", qtd: 80, grupo: "logica" },
  { nome: "Outlook", qtd: 77, grupo: "integracao" },
  { nome: "Schedule Trigger", qtd: 77, grupo: "controle" },
  { nome: "Wait", qtd: 58, grupo: "controle" },
  { nome: "Split Out", qtd: 55, grupo: "logica" },
  { nome: "Execute Workflow", qtd: 98, grupo: "controle" },
  { nome: "Loop (batches)", qtd: 44, grupo: "controle" },
  { nome: "Data Table", qtd: 35, grupo: "dados" },
];

export const plataformas: { categoria: Text; itens: string[] }[] = [
  {
    categoria: { pt: "Dados da empresa", en: "Company data" },
    itens: ["ERP (REST e SQL, leitura)", "MES em BigQuery", "PostgreSQL do hub", "Microsoft Fabric"],
  },
  {
    categoria: { pt: "Microsoft 365", en: "Microsoft 365" },
    itens: ["Graph API", "SharePoint", "OneDrive", "Excel Online", "Outlook"],
  },
  {
    categoria: { pt: "Google", en: "Google" },
    itens: ["Sheets", "Drive", "BigQuery", "Gmail", "Gemini"],
  },
  {
    categoria: { pt: "Mensageria e entrega", en: "Messaging and delivery" },
    itens: ["WhatsApp (Evolution API)", "e-mail transacional", "gerenciador de tarefas (API)"],
  },
  {
    categoria: { pt: "IA e documentos", en: "AI and documents" },
    itens: ["Gemini", "Mistral (OCR)", "Gotenberg (PDF)", "HTML → imagem", "Puppeteer"],
  },
  {
    categoria: { pt: "Consultas públicas e cadastrais", en: "Public and registry lookups" },
    itens: ["BrasilAPI", "OpenCNPJ", "DataJud (CNJ)", "Serasa Experian", "InfoSimples"],
  },
];

export const automacoes = {
  nome: { pt: "Automações em n8n", en: "n8n automations" } satisfies Text,
  resumo: {
    pt: "Rotinas que rodam sozinhas, em dia útil, e levam o dado até onde a pessoa já está: WhatsApp, e-mail, ou uma tarefa com prazo no gerenciador. Cada uma é idempotente — rodar duas vezes não duplica nada — e falha em voz alta, num workflow de erro que avisa quem cuida.",
    en: "Routines that run on their own, on business days, and take the data to where people already are: WhatsApp, e-mail, or a task with a deadline in the task manager. Each one is idempotent — running twice duplicates nothing — and fails loudly, through an error workflow that alerts whoever is on call.",
  } satisfies Text,
  amostraTitulo: { pt: "Uma amostra", en: "A sample" } satisfies Text,
  amostraResumo: {
    pt: "Treze das que rodam todo dia, para dar ideia do formato: o que faz, quando roda e por onde passa o dado.",
    en: "Thirteen of the ones that run every day, to give a sense of the shape: what it does, when it runs and where the data flows.",
  } satisfies Text,
  itens: [
    {
      area: { pt: "Indústria", en: "Manufacturing" },
      nome: { pt: "Resumo diário de produção", en: "Daily production summary" },
      faz: {
        pt: "Produção do dia anterior nas três unidades, com OEE por máquina, em uma imagem por unidade.",
        en: "Previous day's output across the three plants, with OEE per machine, as one image per plant.",
      },
      quando: { pt: "todo dia às 10:30", en: "daily at 10:30" },
      cadeia: [p("gatilho", "cron"), p("fonte", "MES"), p("fonte", "planilha", "sheets"), p("processo", "OEE"), p("processo", "imagem", "image"), p("saida", "WhatsApp")],
    },
    {
      area: { pt: "Indústria", en: "Manufacturing" },
      nome: { pt: "Ordens de produção em aberto", en: "Open production orders" },
      faz: {
        pt: "Uma tarefa por ordem de produção atrasada, no planner de quem responde por ela, com prazo em dias úteis.",
        en: "One task per late production order, in the planner of whoever owns it, with a business-day deadline.",
      },
      quando: { pt: "dias úteis às 08:00", en: "business days at 08:00" },
      cadeia: [p("gatilho", "cron"), p("fonte", "ERP"), p("processo", "atraso", "lateness"), p("saida", "tarefa", "task")],
    },
    {
      area: { pt: "Qualidade", en: "Quality" },
      nome: { pt: "Ensaios de laboratório", en: "Lab tests" },
      faz: {
        pt: "Fluidez, carga e cor do dia em imagem no grupo da qualidade; ensaio fora da faixa vira tarefa para o responsável no dia útil seguinte.",
        en: "The day's melt-flow, filler and colour tests as an image in the quality group; out-of-range tests become a task for the owner on the next business day.",
      },
      quando: { pt: "segunda a sexta às 10:00", en: "Mon–Fri at 10:00" },
      cadeia: [p("gatilho", "cron"), p("fonte", "MES"), p("processo", "faixa", "range"), p("saida", "WhatsApp"), p("saida", "tarefa", "task")],
    },
    {
      area: { pt: "Fiscal", en: "Tax" },
      nome: { pt: "Canhoto × nota fiscal", en: "Delivery receipt × invoice" },
      faz: {
        pt: "Cruza as notas emitidas no ERP com os canhotos digitalizados na nuvem; nota sem canhoto além do prazo vira alerta e tarefa. Nenhum PDF é aberto: nome do arquivo e data bastam.",
        en: "Matches invoices issued in the ERP against receipts scanned to the cloud; an invoice without a receipt past the deadline becomes an alert and a task. No PDF is opened: file name and date are enough.",
      },
      quando: { pt: "todo dia às 16:00", en: "daily at 16:00" },
      cadeia: [p("gatilho", "cron"), p("fonte", "ERP"), p("fonte", "OneDrive"), p("processo", "cruzamento", "match"), p("saida", "WhatsApp"), p("saida", "e-mail"), p("saida", "tarefa", "task")],
    },
    {
      area: { pt: "Tesouraria", en: "Treasury" },
      nome: { pt: "Relatório de contas a pagar", en: "Accounts payable report" },
      faz: {
        pt: "Dez semanas de vencimentos por empresa em duas imagens e um PDF título a título, separando aprovado de aguardando aprovação.",
        en: "Ten weeks of due dates per company in two images and a title-by-title PDF, separating approved from awaiting approval.",
      },
      quando: { pt: "sob demanda", en: "on demand" },
      cadeia: [p("gatilho", "comando", "command"), p("fonte", "ERP"), p("processo", "imagem", "image"), p("processo", "PDF"), p("saida", "WhatsApp")],
    },
    {
      area: { pt: "Bancos", en: "Banking" },
      nome: { pt: "Saldos bancários", en: "Bank balances" },
      faz: {
        pt: "Lê os extratos das três empresas, grava os saldos na planilha de conciliação e confronta com o saldo conciliado do ERP.",
        en: "Reads the three companies' statements, writes the balances to the reconciliation sheet and checks them against the ERP's reconciled balance.",
      },
      quando: { pt: "sob demanda", en: "on demand" },
      cadeia: [p("gatilho", "comando", "command"), p("fonte", "SharePoint"), p("fonte", "ERP"), p("processo", "conciliação", "reconcile"), p("saida", "planilha", "sheet"), p("saida", "WhatsApp")],
    },
    {
      area: { pt: "RH", en: "HR" },
      nome: { pt: "Cobrança do plano de horas", en: "Hour-plan follow-up" },
      faz: {
        pt: "No 3º dia útil do período, abre uma tarefa por setor e líder pedindo a meta de saldo de cada pessoa; no 26, confere quem chegou.",
        en: "On the 3rd business day of the period, opens one task per department and leader asking for each person's balance target; on the 26th, checks who got there.",
      },
      quando: { pt: "dias úteis às 09:00", en: "business days at 09:00" },
      cadeia: [p("gatilho", "cron"), p("fonte", "hub"), p("processo", "período RH", "HR period"), p("saida", "tarefa", "task")],
    },
    {
      area: { pt: "RH", en: "HR" },
      nome: { pt: "Auditoria quinzenal de horas", en: "Fortnightly hours audit" },
      faz: {
        pt: "Separa sobrecarga (crédito alto) de ociosidade (débito alto) e abre uma tarefa por líder com um roteiro de perguntas para cada frente.",
        en: "Separates overload (high credit) from idle time (high debit) and opens one task per leader with a question script for each front.",
      },
      quando: { pt: "segundas às 15:30", en: "Mondays at 15:30" },
      cadeia: [p("gatilho", "cron"), p("fonte", "ERP"), p("processo", "recorte", "cut"), p("saida", "tarefa", "task")],
    },
    {
      area: { pt: "RH", en: "HR" },
      nome: { pt: "Check de batidas", en: "Punch check" },
      faz: {
        pt: "Erros de ponto acusados pelo ERP viram uma tarefa por líder e dia, com prazo de dois dias úteis e acompanhante fixo do RH.",
        en: "Punch errors flagged by the ERP become one task per leader and day, with a two-business-day deadline and a fixed HR follower.",
      },
      quando: { pt: "uma passada por calendário", en: "one pass per calendar" },
      cadeia: [p("gatilho", "cron"), p("fonte", "ERP"), p("processo", "líder", "leader"), p("saida", "tarefa", "task")],
    },
    {
      area: { pt: "Transversal", en: "Cross-cutting" },
      nome: { pt: "Roteador de automações no WhatsApp", en: "WhatsApp automation router" },
      faz: {
        pt: "Menu numerado no privado do bot: cada pessoa vê só o que pode disparar, escolhe a empresa e recebe o resultado endereçado a ela.",
        en: "Numbered menu in the bot's private chat: each person sees only what they may trigger, picks the company and gets the result addressed to them.",
      },
      quando: { pt: "quando alguém escreve para o bot", en: "whenever someone messages the bot" },
      cadeia: [p("gatilho", "mensagem", "message"), p("processo", "permissão", "permission"), p("processo", "menu"), p("saida", "automação", "automation")],
    },
    {
      area: { pt: "Transversal", en: "Cross-cutting" },
      nome: { pt: "E-mail transacional", en: "Transactional e-mail" },
      faz: {
        pt: "Todo e-mail do hub sai por um layout e um caminho só: o backend posta no webhook, o n8n entrega com a credencial corporativa.",
        en: "Every hub e-mail goes out through one layout and one path: the backend posts to the webhook, n8n delivers with the corporate credential.",
      },
      quando: { pt: "por webhook", en: "via webhook" },
      cadeia: [p("gatilho", "webhook"), p("processo", "layout"), p("saida", "e-mail")],
    },
    {
      area: { pt: "Transversal", en: "Cross-cutting" },
      nome: { pt: "Imagem e PDF por WhatsApp", en: "Image and PDF via WhatsApp" },
      faz: {
        pt: "HTML vira imagem ou PDF num renderizador headless e sai pelo WhatsApp — o bloco que todos os relatórios reutilizam.",
        en: "HTML becomes an image or PDF in a headless renderer and goes out via WhatsApp — the building block every report reuses.",
      },
      quando: { pt: "chamado pelos outros workflows", en: "called by the other workflows" },
      cadeia: [p("gatilho", "webhook"), p("processo", "render"), p("saida", "WhatsApp")],
    },
    {
      area: { pt: "Transversal", en: "Cross-cutting" },
      nome: { pt: "Workflow de erro", en: "Error workflow" },
      faz: {
        pt: "Qualquer automação que falha cai aqui e vira um aviso com o nome do workflow e o nó que quebrou.",
        en: "Any automation that fails lands here and becomes an alert with the workflow name and the node that broke.",
      },
      quando: { pt: "quando algo quebra", en: "when something breaks" },
      cadeia: [p("gatilho", "erro", "error"), p("saida", "WhatsApp")],
    },
  ] as Automacao[],
};
