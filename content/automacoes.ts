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
    pt: "Sete exemplos, para dar ideia do formato: o que faz, quando roda e por onde passa o dado.",
    en: "Seven examples, to give a sense of the shape: what it does, when it runs and where the data flows.",
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
        pt: "Ensaios do dia em imagem no grupo da qualidade; resultado fora da faixa vira tarefa para o responsável.",
        en: "The day's lab tests as an image in the quality group; out-of-range results become a task for the owner.",
      },
      quando: { pt: "segunda a sexta às 10:00", en: "Mon–Fri at 10:00" },
      cadeia: [p("gatilho", "cron"), p("fonte", "MES"), p("processo", "faixa", "range"), p("saida", "WhatsApp"), p("saida", "tarefa", "task")],
    },
    {
      area: { pt: "Fiscal", en: "Tax" },
      nome: { pt: "Canhoto × nota fiscal", en: "Delivery receipt × invoice" },
      faz: {
        pt: "Cruza as notas emitidas no ERP com os canhotos digitalizados na nuvem; nota sem canhoto além do prazo vira alerta e tarefa.",
        en: "Matches invoices issued in the ERP against receipts scanned to the cloud; an invoice without a receipt past the deadline becomes an alert and a task.",
      },
      quando: { pt: "todo dia às 16:00", en: "daily at 16:00" },
      cadeia: [p("gatilho", "cron"), p("fonte", "ERP"), p("fonte", "OneDrive"), p("processo", "cruzamento", "match"), p("saida", "WhatsApp"), p("saida", "e-mail"), p("saida", "tarefa", "task")],
    },
    {
      area: { pt: "Tesouraria", en: "Treasury" },
      nome: { pt: "Relatório de contas a pagar", en: "Accounts payable report" },
      faz: {
        pt: "Dez semanas de vencimentos por empresa, em imagem e PDF, entregues no WhatsApp de quem pediu.",
        en: "Ten weeks of due dates per company, as an image and a PDF, delivered on the WhatsApp of whoever asked.",
      },
      quando: { pt: "sob demanda", en: "on demand" },
      cadeia: [p("gatilho", "comando", "command"), p("fonte", "ERP"), p("processo", "imagem", "image"), p("processo", "PDF"), p("saida", "WhatsApp")],
    },
    {
      area: { pt: "RH", en: "HR" },
      nome: { pt: "Check de batidas", en: "Punch check" },
      faz: {
        pt: "Erros de ponto acusados pelo ERP viram uma tarefa para o líder de cada equipe, e a tarefa se fecha sozinha quando tudo é corrigido.",
        en: "Time-clock errors flagged by the ERP become a task for each team leader, and the task closes itself once everything is fixed.",
      },
      quando: { pt: "todo dia às 16:00", en: "daily at 16:00" },
      cadeia: [p("gatilho", "cron"), p("fonte", "ERP"), p("processo", "líder", "leader"), p("saida", "tarefa", "task")],
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
