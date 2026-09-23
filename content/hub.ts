import type { Text } from "@/lib/i18n";

export type Canal = "tela" | "whatsapp" | "email" | "tarefa";

export type Agente = {
  area: Text;
  nome: Text;
  faz: Text;
  canais: Canal[];
  ia?: boolean; // conversa em linguagem natural
};

export const hub = {
  nome: { pt: "Hub de agentes de IA", en: "AI agents hub" } satisfies Text,
  resumo: {
    pt: "Uma plataforma web interna que reúne, num lugar só, os agentes de RH, tesouraria, contabilidade, bancos e indústria de um grupo com cinco unidades fabris. Cada agente lê o ERP, o MES ou planilhas, entrega o número com carimbo de origem e data, e — quando precisa agir — abre tarefa no gerenciador corporativo ou responde no WhatsApp.",
    en: "An internal web platform gathering, in one place, the HR, treasury, accounting, banking and manufacturing agents of a group with five plants. Each agent reads the ERP, the MES or spreadsheets, delivers the number stamped with source and date, and — when it needs to act — opens a task in the corporate task manager or replies on WhatsApp.",
  } satisfies Text,
  stack: ["Python", "LLMs", "SQL", "PostgreSQL", "BigQuery", "SQL Server (leitura)", "Docker"],
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
      pt: "O ERP é somente leitura, por princípio. Uma régua de permissão só, no backend — a tela apenas esconde o que daria 403.",
      en: "The ERP is read-only, on principle. A single permission ruler, in the backend — the UI only hides what would return 403.",
    },
    {
      titulo: { pt: "Custo auditado por chamada", en: "Cost audited per call" },
      pt: "Modelo escolhido por custo e por perfil de quem pergunta, com auditoria de custo por chamada.",
      en: "Model chosen by cost and by who is asking, with per-call cost auditing.",
    },
  ] as (Text & { titulo: Text })[],
  agentes: [
    {
      area: { pt: "RH", en: "HR" },
      nome: { pt: "Banco de Horas", en: "Hour bank" },
      faz: {
        pt: "Saldo de banco de horas por unidade, setor e pessoa, com reconciliação contra o ERP e metas por período que os líderes planejam e o sistema cobra.",
        en: "Hour-bank balance per plant, department and person, reconciled against the ERP, with per-period targets that leaders plan and the system follows up on.",
      },
      canais: ["tela", "whatsapp", "tarefa"],
      ia: true,
    },
    {
      area: { pt: "RH", en: "HR" },
      nome: { pt: "Check de Ponto", en: "Time-clock check" },
      faz: {
        pt: "Lê os erros de batida que o ERP acusa, agrupa por líder e dia e abre uma tarefa por líder com a tabela de quem precisa corrigir.",
        en: "Reads the punch errors flagged by the ERP, groups them by leader and day, and opens one task per leader with the table of who must fix what.",
      },
      canais: ["tela", "tarefa"],
    },
    {
      area: { pt: "Tesouraria", en: "Treasury" },
      nome: { pt: "Contas a Pagar", en: "Accounts payable" },
      faz: {
        pt: "Fotografa os títulos todo dia útil e compara duas fotos: o que entrou, o que saiu, o que mudou de vencimento ou valor. Relatório numerado, Excel, PDF e um assistente que responde sobre a comparação.",
        en: "Snapshots payables every business day and compares two snapshots: what came in, what left, what changed due date or amount. Numbered report, Excel, PDF and an assistant that answers questions about the comparison.",
      },
      canais: ["tela", "whatsapp", "email"],
      ia: true,
    },
    {
      area: { pt: "Tesouraria", en: "Treasury" },
      nome: { pt: "Contas a Receber", en: "Accounts receivable" },
      faz: {
        pt: "Títulos a receber por unidade e cliente, com vencidos em destaque e resposta em linguagem natural.",
        en: "Receivables per plant and customer, overdue highlighted, answered in natural language.",
      },
      canais: ["tela", "whatsapp"],
      ia: true,
    },
    {
      area: { pt: "Bancos", en: "Banking" },
      nome: { pt: "Conciliação Bancária", en: "Bank reconciliation" },
      faz: {
        pt: "Coleta os saldos dos extratos, compara com o saldo conciliado do ERP por conta e por empresa, e aponta a diferença.",
        en: "Collects statement balances, compares them with the ERP's reconciled balance per account and company, and points out the difference.",
      },
      canais: ["whatsapp"],
    },
    {
      area: { pt: "Contabilidade", en: "Accounting" },
      nome: { pt: "Cadastro Contábil", en: "Accounting master data" },
      faz: {
        pt: "Confere o cadastro contábil de clientes e fornecedores das seis empresas contra o padrão de conta, ao vivo, separando erro de pendência.",
        en: "Checks the accounting master data of customers and suppliers across six companies against the account standard, live, separating errors from pending items.",
      },
      canais: ["tela", "email"],
    },
    {
      area: { pt: "Gestão", en: "Management" },
      nome: { pt: "Reuniões e Ações", en: "Meetings and actions" },
      faz: {
        pt: "Transforma a ata da reunião em ações com dono e prazo, e acompanha o que ficou para trás.",
        en: "Turns meeting minutes into actions with an owner and a deadline, and tracks what fell behind.",
      },
      canais: ["tela"],
      ia: true,
    },
    {
      area: { pt: "Gestão", en: "Management" },
      nome: { pt: "Tarefas por WhatsApp", en: "Tasks via WhatsApp" },
      faz: {
        pt: "A pessoa fala em texto ou áudio e cria, edita ou conclui tarefas reais no gerenciador — com eco do que o sistema entendeu antes de gravar.",
        en: "People speak in text or voice and create, edit or complete real tasks in the task manager — echoing what the system understood before writing.",
      },
      canais: ["whatsapp", "tarefa"],
      ia: true,
    },
    {
      area: { pt: "Indústria", en: "Manufacturing" },
      nome: { pt: "Produção", en: "Production" },
      faz: {
        pt: "Produção e OEE por máquina das três unidades — duas no MES, uma em planilha — respondendo à mesma pergunta com um número só.",
        en: "Production and OEE per machine across the three plants — two on the MES, one on spreadsheets — answering the same question with a single number.",
      },
      canais: ["tela", "whatsapp"],
      ia: true,
    },
    {
      area: { pt: "Transversal", en: "Cross-cutting" },
      nome: { pt: "Roteador do WhatsApp", en: "WhatsApp router" },
      faz: {
        pt: "Um número só para a empresa: entende texto e voz, descobre qual agente responde, respeita a permissão da pessoa e oferece as automações que ela pode disparar.",
        en: "One number for the whole company: understands text and voice, finds which agent should answer, respects the person's permission and offers the automations they may trigger.",
      },
      canais: ["whatsapp"],
      ia: true,
    },
  ] as Agente[],
};
