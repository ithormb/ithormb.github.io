import type { Text } from "@/lib/i18n";

// Dashboards industriais em Power BI, descritos por CAPACIDADE: o que cada frente
// responde e como foi construída. Sem número do negócio, por decisão (02/10/2026).
// Cada página de painel é um dashboard; as frentes agrupam essas páginas.
export type Frente = {
  id: string;
  nome: Text;
  pergunta: Text; // a pergunta de negócio que a frente responde
  mostra: Text[]; // o que aparece nos dashboards da frente
};

// Telas reconstruídas a partir dos painéis reais, com DADOS FICTÍCIOS: mesmo layout e
// mesmos visuais; números, produtos, pessoas e marca trocados. Os prints originais não
// entram no repositório. O gerador fica fora do site (scratchpad), só as imagens vêm.
export type Tela = { arquivo: string; titulo: Text; frente: string; legenda: Text };

export const bi = {
  nome: { pt: "Dashboards industriais em Power BI", en: "Industrial dashboards in Power BI" } satisfies Text,
  resumo: {
    pt: "Mais de 60 dashboards, organizados por frente, que acompanham uma operação industrial de ponta a ponta — da matéria-prima que entra até o produto que sai, passando por produção, eficiência, estoque e custo — e também a contabilidade, as despesas e a gestão de tarefas. Cada frente responde uma pergunta de negócio e é usada por quem decide sobre ela.",
    en: "More than 60 dashboards, organized by area, that follow an industrial operation end to end — from the raw material that comes in to the product that goes out, through production, efficiency, inventory and cost — plus accounting, expenses and task management. Each area answers a business question and is used by whoever decides on it.",
  } satisfies Text,
  stack: ["Power BI", "DAX", "Power Query (M)", "BigQuery", "Modelagem dimensional", "PBIP / TMDL"],
  telas: [
    { arquivo: "/bi/controle-geral.webp", frente: "visao-geral", titulo: { pt: "Controle geral da fábrica", en: "Plant control panel" },
      legenda: { pt: "Entradas, saídas, quebras e saldo; inventário contado × estoque virtual; balanço de cada etapa (lavação e extrusão).", en: "Inflows, outflows, losses and balance; counted inventory × virtual stock; balance per stage (washing and extrusion)." } },
    { arquivo: "/bi/oee.webp", frente: "oee", titulo: { pt: "OEE da extrusão", en: "Extrusion OEE" },
      legenda: { pt: "Disponibilidade, performance e qualidade contra a meta, com o OEE diário e mensal.", en: "Availability, performance and quality against target, with daily and monthly OEE." } },
    { arquivo: "/bi/producao.webp", frente: "producao", titulo: { pt: "Produção da extrusão", en: "Extrusion production" },
      legenda: { pt: "Produção por produto, por turno e por dia, produto acabado × resíduo, e os fatores do OEE lote a lote.", en: "Output by product, shift and day, finished product × scrap, and OEE factors batch by batch." } },
    { arquivo: "/bi/estoque-mp.webp", frente: "estoques", titulo: { pt: "Estoque de matéria-prima", en: "Raw material inventory" },
      legenda: { pt: "Saldo por produto e por setor de movimentação, com o sinal resolvido na carga.", en: "Balance by product and by movement sector, with the sign resolved at load time." } },
    { arquivo: "/bi/ativos.webp", frente: "financeiro", titulo: { pt: "Detalhamento dos ativos", en: "Assets breakdown" },
      legenda: { pt: "Balanço em hierarquia de contas, com saldo anterior, débito, crédito e evolução mensal.", en: "Balance sheet in account hierarchy, with opening balance, debit, credit and monthly trend." } },
    { arquivo: "/bi/despesas.webp", frente: "financeiro", titulo: { pt: "Despesas gerais", en: "General expenses" },
      legenda: { pt: "Despesa total e despesa sobre faturamento líquido contra a meta, aberta por grupo e conta, mês a mês.", en: "Total expense and expense over net revenue against target, broken down by group and account, month by month." } },
    { arquivo: "/bi/tarefas.webp", frente: "tarefas", titulo: { pt: "Painel de tarefas", en: "Task dashboard" },
      legenda: { pt: "Volume, atraso e entregáveis por status, setor, data e pessoa — base para o painel em HTML que o substituiu.", en: "Volume, delays and deliverables by status, sector, date and person — the basis for the HTML dashboard that replaced it." } },
  ] as Tela[],
  frentes: [
    {
      id: "visao-geral",
      nome: { pt: "Visão geral", en: "Overview" },
      pergunta: { pt: "A fábrica está no ritmo do mês?", en: "Is the plant on pace for the month?" },
      mostra: [
        { pt: "Painel de controle de entrada × saída da fábrica", en: "Plant inflow × outflow control panel" },
        { pt: "Tendência de fechamento do mês", en: "Month-end trend projection" },
        { pt: "Visão macro × micro para achar movimento mal classificado", en: "Macro × micro view to catch misclassified movements" },
      ],
    },
    {
      id: "producao",
      nome: { pt: "Produção", en: "Production" },
      pergunta: { pt: "Quanto produzimos, onde e em que turno?", en: "How much did we produce, where and on which shift?" },
      mostra: [
        { pt: "Produção por etapa (lavação, moagem, extrusão)", en: "Output by stage (washing, grinding, extrusion)" },
        { pt: "Por máquina, turno, produto e dia", en: "By machine, shift, product and day" },
        { pt: "Relatório diário de produção", en: "Daily production report" },
      ],
    },
    {
      id: "oee",
      nome: { pt: "OEE e eficiência", en: "OEE and efficiency" },
      pergunta: { pt: "Onde atacar: manutenção, ritmo ou qualidade?", en: "Where to act: maintenance, pace or quality?" },
      mostra: [
        { pt: "OEE decomposto em disponibilidade, performance e qualidade", en: "OEE broken down into availability, performance and quality" },
        { pt: "OEE técnico × econômico (com subproduto)", en: "Technical × economic OEE (with by-product)" },
        { pt: "Por máquina, turno e produto, contra a meta", en: "By machine, shift and product, against target" },
      ],
    },
    {
      id: "paradas",
      nome: { pt: "Paradas", en: "Downtime" },
      pergunta: { pt: "Por que as máquinas pararam?", en: "Why did the machines stop?" },
      mostra: [
        { pt: "Parada programada × não programada", en: "Planned × unplanned downtime" },
        { pt: "Histórico por código de parada e por mês", en: "History by downtime code and by month" },
        { pt: "Paradas do sistema e manuais na mesma visão", en: "System and manual stops in a single view" },
      ],
    },
    {
      id: "estoques",
      nome: { pt: "Estoques", en: "Inventory" },
      pergunta: { pt: "O que temos, em cada etapa do processo?", en: "What do we have, at each stage of the process?" },
      mostra: [
        { pt: "Matéria-prima, intermediário e produto acabado", en: "Raw material, work-in-progress and finished goods" },
        { pt: "Aditivos, pigmentos, componentes e resíduo", en: "Additives, pigments, components and scrap" },
        { pt: "Saldo calculado pelo movimento, com sinal resolvido na carga", en: "Balance computed from movements, sign resolved at load time" },
      ],
    },
    {
      id: "logistica",
      nome: { pt: "Logística e movimentações", en: "Logistics and movements" },
      pergunta: { pt: "O que entrou e saiu, e para quem?", en: "What came in and went out, and to whom?" },
      mostra: [
        { pt: "Movimentações diárias e mensais", en: "Daily and monthly movements" },
        { pt: "Vendas por cliente", en: "Sales by customer" },
        { pt: "Recibos de compra, venda, serviço e devolução no layout do formulário oficial", en: "Purchase, sales, service and return receipts in the official form layout" },
      ],
    },
    {
      id: "custos",
      nome: { pt: "Custos", en: "Costs" },
      pergunta: { pt: "Quanto custou cada lote, e quanto deveria custar?", en: "What did each batch cost, and what should it cost?" },
      mostra: [
        { pt: "Custo real por lote × custo da ficha técnica", en: "Real cost per batch × bill-of-materials cost" },
        { pt: "Custo por grade de produção", en: "Cost by production grade" },
        { pt: "Consumo macro e por lote, com tolerância de perda", en: "Macro and per-batch consumption, with a loss tolerance" },
      ],
    },
    {
      id: "lote",
      nome: { pt: "Controle de lote", en: "Batch control" },
      pergunta: { pt: "Este lote fechou a conta de massa?", en: "Does this batch close its mass balance?" },
      mostra: [
        { pt: "Balanço de massa: o que entrou × o que saiu", en: "Mass balance: what went in × what came out" },
        { pt: "Alerta de perda acima do limite por etapa", en: "Loss alert above the threshold per stage" },
        { pt: "Página da reunião diária de produção", en: "The daily production meeting page" },
      ],
    },
    {
      id: "rastreabilidade",
      nome: { pt: "Rastreabilidade e lead time", en: "Traceability and lead time" },
      pergunta: { pt: "De onde veio este produto, e quanto tempo levou?", en: "Where did this product come from, and how long did it take?" },
      mostra: [
        { pt: "Do produto acabado até a matéria-prima de origem", en: "From finished product back to the source raw material" },
        { pt: "Rendimento por etapa", en: "Yield per stage" },
        { pt: "Tempo de atravessamento entre etapas", en: "Throughput time between stages" },
      ],
    },
    {
      id: "financeiro",
      nome: { pt: "Contabilidade e financeiro", en: "Accounting and finance" },
      pergunta: { pt: "Como está o balanço, e onde a despesa pesa?", en: "How does the balance sheet look, and where do expenses weigh?" },
      mostra: [
        { pt: "Balanço em hierarquia de contas, com débito, crédito e saldo", en: "Balance sheet in account hierarchy, with debit, credit and balance" },
        { pt: "Despesa sobre faturamento líquido contra a meta", en: "Expense over net revenue against target" },
        { pt: "Abertura por grupo e conta, mês a mês", en: "Breakdown by group and account, month by month" },
      ],
    },
    {
      id: "tarefas",
      nome: { pt: "Gestão de tarefas", en: "Task management" },
      pergunta: { pt: "O que está atrasado, e com quem?", en: "What is late, and with whom?" },
      mostra: [
        { pt: "Volume por status, setor e data de criação", en: "Volume by status, sector and creation date" },
        { pt: "Atrasos e entregáveis concluídos com evidência", en: "Delays and deliverables completed with evidence" },
        { pt: "Ranking de quem cria e de quem executa", en: "Ranking of who creates and who executes" },
      ],
    },
  ] as Frente[],
  comoConstruo: [
    {
      titulo: { pt: "Fonte única no BigQuery", en: "Single source on BigQuery" },
      texto: {
        pt: "O dado nasce no apontamento do chão de fábrica e chega ao painel sem planilha no meio. Regra de negócio fica em view versionada, não escondida em cada relatório.",
        en: "Data is born on the shop-floor entry and reaches the dashboard with no spreadsheet in between. Business rules live in versioned views, not hidden in each report.",
      },
    },
    {
      titulo: { pt: "Modelo antes do gráfico", en: "Model before charts" },
      texto: {
        pt: "Modelagem dimensional com lote, produto, máquina, turno e calendário como dimensões; medidas DAX organizadas por fator e roteadas pelo tipo de produção.",
        en: "Dimensional modelling with batch, product, machine, shift and calendar as dimensions; DAX measures organized by factor and routed by production type.",
      },
    },
    {
      titulo: { pt: "Painel como código", en: "Dashboards as code" },
      texto: {
        pt: "Projetos em PBIP/TMDL: modelo e relatório em texto, versionados, com diferença legível entre uma versão e outra.",
        en: "PBIP/TMDL projects: model and report as text, versioned, with readable diffs between versions.",
      },
    },
    {
      titulo: { pt: "Manual com as pendências à vista", en: "A manual with open issues in plain sight" },
      texto: {
        pt: "Cada painel tem manual técnico: fontes, modelo, regras, diagnóstico rápido por sintoma e as pendências numeradas. O que não está resolvido está escrito.",
        en: "Each dashboard has a technical manual: sources, model, rules, quick diagnosis by symptom and numbered open issues. What isn't solved is written down.",
      },
    },
  ],
};
