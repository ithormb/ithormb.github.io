import type { Text } from "@/lib/i18n";

// Hub Forms: só capacidade e arquitetura. Sem nome de pessoa, unidade, número de documento ou volume da operação.
export type Modulo = {
  area: Text;
  nome: Text;
  faz: Text;
  pontos: Text[];
};

export type Integracao = {
  nome: string;
  papel: Text;
  sentido: "le" | "escreve" | "ambos";
};

export const forms = {
  nome: { pt: "Hub Forms", en: "Hub Forms" } satisfies Text,
  subtitulo: {
    pt: "O chão de fábrica registrando direto na fonte única de dados",
    en: "The shop floor writing straight into the single source of truth",
  } satisfies Text,
  resumo: {
    pt: "Aplicação web mobile-first que substitui formulários em papel, planilhas paralelas e apps de terceiros por registros padronizados de portaria, logística, produção, qualidade e treinamento. Cada registro nasce validado contra o TOTVS Protheus, com evidência fotográfica e horário carimbado pelo servidor, e cai no mesmo banco que alimenta o FlowPilot, o Painel de fábrica e os agentes de IA do Hub.",
    en: "Mobile-first web app that replaces paper forms, side spreadsheets and third-party apps with standardized records for gatehouse, logistics, production, quality and training. Every record is validated against TOTVS Protheus at entry, carries photo evidence and a server-side timestamp, and lands in the same database that feeds FlowPilot, the plant dashboard and the Hub's AI agents.",
  } satisfies Text,
  estado: {
    pt: "Em implantação por unidade, com go-live assistido",
    en: "Rolling out plant by plant, with assisted go-live",
  } satisfies Text,
  stack: ["Next.js", "NestJS", "PostgreSQL", "TOTVS Protheus (SQL, leitura)", "REST APIs", "n8n", "Gotenberg", "Docker", "Traefik"],

  metricas: [
    { valor: "1", rotulo: { pt: "login para Hub de IA e Hub Forms", en: "login for the AI Hub and Hub Forms" } },
    { valor: "1", rotulo: { pt: "banco de dados para formulários, tarefas, painel e IA", en: "database for forms, tasks, dashboard and AI" } },
    { valor: "0", rotulo: { pt: "escritas no ERP: leitura apenas", en: "writes to the ERP: read-only" } },
    { valor: "4", rotulo: { pt: "níveis de permissão por tela e unidade", en: "permission levels per screen and plant" } },
  ],

  // O problema que o sistema resolve, em pares antes → depois.
  antesDepois: [
    {
      antes: { pt: "Formulário em papel digitado depois, com erro de transcrição", en: "Paper forms retyped later, with transcription errors" },
      depois: { pt: "Registro no celular, no momento do fato, com campos validados", en: "Recorded on a phone at the moment it happens, with validated fields" },
    },
    {
      antes: { pt: "O ERP registra quando alguém lançou, não quando a carga chegou", en: "The ERP records when someone keyed it in, not when the load arrived" },
      depois: { pt: "Horário físico de chegada, início e fim guardado ao lado da nota fiscal", en: "Physical arrival, start and end times stored next to the invoice" },
    },
    {
      antes: { pt: "Cada unidade com sua planilha, seu layout e suas regras", en: "Each plant with its own spreadsheet, layout and rules" },
      depois: { pt: "Um padrão só, com a ficha oficial da fábrica gerada em PDF", en: "One standard, with the plant's official form generated as PDF" },
    },
    {
      antes: { pt: "Divergência descoberta no fechamento, semanas depois", en: "Discrepancies found at month-end, weeks later" },
      depois: { pt: "Divergência apontada no ato e cobrada por e-mail e tarefa", en: "Discrepancies flagged on the spot and followed up by email and task" },
    },
  ] as { antes: Text; depois: Text }[],

  modulos: [
    {
      area: { pt: "Logística", en: "Logistics" },
      nome: { pt: "Recebimento e expedição", en: "Receiving and shipping" },
      faz: {
        pt: "Um registro por caminhão ou container, do pátio à doca, ligado à nota fiscal de entrada ou de saída.",
        en: "One record per truck or container, from yard to dock, tied to the inbound or outbound invoice.",
      },
      pontos: [
        { pt: "Nota fiscal buscada no TOTVS: fornecedor ou cliente, produtos, lotes e volumes vêm do ERP e não são redigitados", en: "Invoice pulled from TOTVS: supplier or customer, products, batches and volumes come from the ERP and are never retyped" },
        { pt: "Conferência cega: quem pesa não vê o peso da nota, e a comparação NF × pesagem é feita depois, em código", en: "Blind check: whoever weighs never sees the invoice weight; invoice × scale is compared afterwards, in code" },
        { pt: "Pesagem por volume, paradas, equipe e fotos do container e do documento preenchido", en: "Weight per unit, stoppages, crew and photos of the container and the filled-in document" },
        { pt: "Ficha oficial gerada em PDF no layout da fábrica e aviso automático no grupo da operação", en: "Official form generated as PDF in the plant's layout, with an automatic notice to the operations group" },
      ],
    },
    {
      area: { pt: "Expedição", en: "Shipping" },
      nome: { pt: "Ordem de carregamento", en: "Loading order" },
      faz: {
        pt: "A ordem nasce dos lotes que existem no estoque e trava o que passaria do disponível.",
        en: "The order is built from batches actually in stock and blocks anything beyond what is available.",
      },
      pontos: [
        { pt: "Saldo por lote lido do TOTVS, descontado do que já está reservado em outras ordens abertas", en: "Per-batch balance read from TOTVS, net of what other open orders already reserve" },
        { pt: "Bloqueio no servidor quando a quantidade pedida passa do saldo livre", en: "Server-side block when the requested quantity exceeds the free balance" },
        { pt: "Divergência entre ordem e nota fiscal apontada no fechamento do carregamento", en: "Order × invoice discrepancies flagged when loading is closed" },
      ],
    },
    {
      area: { pt: "Pessoas", en: "People" },
      nome: { pt: "Treinamentos com presença por QR code", en: "Trainings with QR-code attendance" },
      faz: {
        pt: "Quem deu e quem recebeu cada treinamento, com evidência que sobrevive ao desligamento do colaborador.",
        en: "Who delivered and who attended each training, with evidence that outlives the employee's contract.",
      },
      pontos: [
        { pt: "Cada participante escaneia o QR no próprio celular, sem login, e confirma o próprio nome", en: "Each attendee scans the QR on their own phone, no login, and confirms their own name" },
        { pt: "A matrícula nunca chega ao navegador: a busca devolve um identificador assinado (HMAC) válido só naquela sessão", en: "The employee ID never reaches the browser: search returns a signed identifier (HMAC) valid only for that session" },
        { pt: "Turmas com várias empresas, vários instrutores, lista impressa para assinatura e anexos de evidência", en: "Multi-company classes, multiple instructors, printed sign-in sheet and evidence attachments" },
      ],
    },
    {
      area: { pt: "Gestão", en: "Management" },
      nome: { pt: "Painel de fábrica na TV", en: "Plant dashboard on the TV" },
      faz: {
        pt: "Indicadores diários por setor contra a meta, na TV do chão de fábrica, a partir dos mesmos registros.",
        en: "Daily indicators per department against target, on the shop-floor TV, built from the same records.",
      },
      pontos: [
        { pt: "Cadastro central de indicadores: o que mede, como calcula, meta, recorrência e responsável", en: "Central indicator registry: what it measures, how it is calculated, target, frequency and owner" },
        { pt: "Nenhum indicador é recalculado: cada um lê a fonte que já existe", en: "No indicator is recalculated: each one reads the source that already exists" },
        { pt: "Dado desatualizado aparece em cinza, nunca em verde", en: "Stale data shows in grey, never in green" },
      ],
    },
  ] as Modulo[],

  integracoes: [
    { nome: "TOTVS Protheus", papel: { pt: "Notas fiscais, lotes, saldos e colaboradores, somente leitura", en: "Invoices, batches, balances and employees, read-only" }, sentido: "le" },
    { nome: "FlowPilot", papel: { pt: "Pendência vira tarefa com dono, prazo e evidência", en: "Open items become tasks with owner, deadline and evidence" }, sentido: "escreve" },
    { nome: "Painel de fábrica", papel: { pt: "Indicadores do dia lidos direto dos registros", en: "Daily indicators read straight from the records" }, sentido: "escreve" },
    { nome: "Hub de IA", papel: { pt: "Os agentes consultam o mesmo banco, com data e origem", en: "Agents query the same database, with date and source" }, sentido: "ambos" },
    { nome: "WhatsApp · n8n", papel: { pt: "Avisos aos grupos da operação por fila, com controle de envio", en: "Notices to operations groups through a queue, with send control" }, sentido: "escreve" },
    { nome: "E-mail · PDF", papel: { pt: "Ficha oficial em PDF e alerta de divergência", en: "Official form as PDF and discrepancy alerts" }, sentido: "escreve" },
  ] as Integracao[],

  arquitetura: [
    {
      titulo: { pt: "Fonte única de dados", en: "Single source of truth" },
      pt: "App separado para o chão de fábrica, mas backend e banco compartilhados com o Hub de IA: a IA, o FlowPilot e o painel leem o dado no lugar onde ele nasce, sem exportação nem cópia.",
      en: "A separate app for the shop floor, but backend and database shared with the AI Hub: AI, FlowPilot and the dashboard read the data where it is born, with no exports or copies.",
    },
    {
      titulo: { pt: "Login único e permissão por tela", en: "Single sign-on and per-screen permissions" },
      pt: "Uma conta para os dois ambientes. Cada tela tem quatro níveis (ver, preencher, editar, excluir) e cada usuário enxerga só as unidades dele, com a regra aplicada no servidor.",
      en: "One account for both environments. Each screen has four levels (view, fill in, edit, delete) and each user sees only their plants, enforced on the server.",
    },
    {
      titulo: { pt: "Horário e evidência confiáveis", en: "Trustworthy timestamps and evidence" },
      pt: "O servidor carimba o registro; a pessoa declara só o que aconteceu antes de abrir o app, com limite de tempo. Foto obrigatória nas etapas críticas, comprimida no celular e conferida pelos bytes, não pela extensão.",
      en: "The server stamps each record; people only declare what happened before opening the app, within a time limit. Photos are mandatory at critical steps, compressed on the phone and checked by their bytes, not their extension.",
    },
    {
      titulo: { pt: "ERP intocado", en: "ERP untouched" },
      pt: "O TOTVS é consultado só para validar e enriquecer o registro. Nenhum dado é escrito de volta, e o que o ERP diz sobre a nota aparece como somente leitura na tela.",
      en: "TOTVS is queried only to validate and enrich the record. Nothing is written back, and what the ERP says about the invoice shows as read-only on screen.",
    },
    {
      titulo: { pt: "Nada se apaga", en: "Nothing is deleted" },
      pt: "Cadastros são desativados, fotos são descartadas com registro, e o histórico continua consultável. Rodar a mesma ação duas vezes não duplica nada.",
      en: "Records are deactivated, photos are discarded with a log entry, and history stays queryable. Running the same action twice duplicates nothing.",
    },
  ] as (Text & { titulo: Text })[],
};
