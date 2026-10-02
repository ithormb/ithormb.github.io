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
  nome: { pt: "Painéis de BI e pipeline de dados", en: "BI dashboards and data pipeline" } satisfies Text,
  resumo: {
    pt: "Mais de 50 painéis de BI construídos em Power BI e Looker Studio ao longo da carreira — de pricing e inteligência de mercado a produção industrial. Nesta página, os painéis industriais: dashboards organizados por frente que acompanham a operação de ponta a ponta, da matéria-prima que entra ao produto que sai, além da contabilidade, das despesas e da gestão de tarefas.",
    en: "More than 50 BI dashboards built in Power BI and Looker Studio throughout my career — from pricing and market intelligence to industrial production. This page shows the industrial ones: dashboards organized by area that follow operations end to end, from the raw material that comes in to the product that goes out, plus accounting, expenses and task management.",
  } satisfies Text,
  stack: ["SQL", "Python", "dbt", "BigQuery", "Power BI", "Looker Studio", "DAX", "Power Query (M)", "Modelagem dimensional", "PBIP / TMDL", "Git"],
  telas: [
    { arquivo: "/bi/controle-geral.webp", frente: "visao-geral", titulo: { pt: "Balanço da planta", en: "Plant balance" },
      legenda: { pt: "Recebido, expedido, refugo e saldo; inventário contado × estoque calculado; balanço de massa de cada etapa do processo.", en: "Received, shipped, scrap and balance; counted inventory × calculated stock; mass balance for each process stage." } },
    { arquivo: "/bi/oee.webp", frente: "oee", titulo: { pt: "OEE por linha", en: "OEE by line" },
      legenda: { pt: "Disponibilidade, performance e qualidade contra a meta, com o OEE diário e mensal.", en: "Availability, performance and quality against target, with daily and monthly OEE." } },
    { arquivo: "/bi/producao.webp", frente: "producao", titulo: { pt: "Produção por linha", en: "Production by line" },
      legenda: { pt: "Produção por item, turno e dia, produzido × refugo, e os fatores do OEE lote a lote.", en: "Output by item, shift and day, produced × scrap, and OEE factors batch by batch." } },
    { arquivo: "/bi/estoque-mp.webp", frente: "estoques", titulo: { pt: "Estoque de insumos", en: "Input inventory" },
      legenda: { pt: "Saldo por item e por origem do movimento, com o sinal resolvido na carga.", en: "Balance by item and by movement origin, with the sign resolved at load time." } },
    { arquivo: "/bi/ativos.webp", frente: "financeiro", titulo: { pt: "Balanço patrimonial", en: "Balance sheet" },
      legenda: { pt: "Ativo em hierarquia de contas, com saldo inicial, débitos, créditos e evolução mensal.", en: "Assets in account hierarchy, with opening balance, debits, credits and monthly trend." } },
    { arquivo: "/bi/despesas.webp", frente: "financeiro", titulo: { pt: "Despesas operacionais", en: "Operating expenses" },
      legenda: { pt: "Despesa do mês e despesa sobre receita líquida contra a meta, aberta por grupo e conta.", en: "Monthly expense and expense over net revenue against target, broken down by group and account." } },
    { arquivo: "/bi/tarefas.webp", frente: "tarefas", titulo: { pt: "Painel de tarefas", en: "Task dashboard" },
      legenda: { pt: "Volume, atraso e entregas por situação, área, dia e responsável.", en: "Volume, delays and deliveries by status, area, day and owner." } },
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
        { pt: "Produção por etapa do processo", en: "Output by process stage" },
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
        { pt: "Insumo, semiacabado e produto acabado", en: "Inputs, work-in-progress and finished goods" },
        { pt: "Químicos, embalagens e refugo", en: "Chemicals, packaging and scrap" },
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
  // Projeto de estudo em Looker Studio, sobre dado PÚBLICO (Olist, Kaggle): aqui vai o print real.
  looker: {
    titulo: { pt: "E-commerce — visão geral de performance", en: "E-commerce — performance overview" },
    imagem: "/bi/looker-ecommerce.webp",
    fonte: { pt: "Projeto de estudo · dados públicos de e-commerce brasileiro (Olist, via Kaggle)", en: "Study project · public Brazilian e-commerce data (Olist, via Kaggle)" },
    descricao: {
      pt: "O mesmo painel construído em Looker Studio e em Power BI, sobre um pipeline automatizado, para comparar as duas ferramentas na prática: facilidade de uso, desempenho, atualização automática, personalização visual, integração e custo.",
      en: "The same dashboard built in Looker Studio and in Power BI, on an automated pipeline, to compare both tools in practice: ease of use, performance, automatic refresh, visual customization, integration and cost.",
    },
    mostra: [
      { pt: "Receita, pedidos, ticket médio, pedidos em atraso e avaliação dos clientes", en: "Revenue, orders, average ticket, late orders and customer rating" },
      { pt: "Série temporal da receita e detalhamento por categoria", en: "Revenue time series and breakdown by category" },
      { pt: "Tipo de pagamento, status dos pedidos e distribuição geográfica em mapa", en: "Payment type, order status and geographic distribution on a map" },
    ],
    etapas: ["API do Kaggle", "Python (ETL no Colab)", "BigQuery + views SQL", "Looker Studio"],
    relatorio: "https://lookerstudio.google.com/reporting/8a85399b-7788-4bd3-959e-3e93ea45def2",
    codigo: "https://github.com/ithormb/Projeto_Ecommerce_PowerBI_vs_LookerStudio",
  },

  // Do dado bruto ao dashboard: as seis etapas do pipeline, com o que faço em cada uma.
  pipeline: [
    {
      id: "extracao",
      titulo: { pt: "Extração", en: "Extraction" },
      lema: { pt: "Cada fonte do jeito que ela aguenta", en: "Each source the way it can handle" },
      praticas: [
        { pt: "ERP lido só com SELECT e usuário somente leitura, sem travar a operação", en: "ERP read with SELECT only and a read-only user, without locking operations" },
        { pt: "Extração incremental por data de alteração (watermark), com reprocessamento por janela", en: "Incremental extraction by change date (watermark), with window-based reprocessing" },
        { pt: "MES, APIs REST e planilhas na mesma esteira, agendada e monitorada", en: "MES, REST APIs and spreadsheets on the same scheduled, monitored track" },
      ],
      ferramentas: ["SQL", "Python", "n8n", "APIs REST"],
    },
    {
      id: "bruta",
      titulo: { pt: "Camada bruta", en: "Raw layer" },
      lema: { pt: "O dado como veio, para sempre reconstruível", en: "Data as it came, always rebuildable" },
      praticas: [
        { pt: "Carga sem transformação no BigQuery, com origem e horário de cada carga", en: "Untransformed load into BigQuery, with source and time of every load" },
        { pt: "Cargas idempotentes: rodar de novo não duplica nada", en: "Idempotent loads: running again duplicates nothing" },
        { pt: "Fotografia diária do que a fonte não guarda em histórico", en: "Daily snapshot of whatever the source doesn't keep in history" },
      ],
      ferramentas: ["BigQuery", "Python", "PostgreSQL"],
    },
    {
      id: "dbt",
      titulo: { pt: "Transformação em dbt", en: "Transformation in dbt" },
      lema: { pt: "staging → intermediate → marts", en: "staging → intermediate → marts" },
      praticas: [
        { pt: "Staging: tipagem, datas, separador decimal, chaves e sinal de entrada/saída resolvidos uma vez", en: "Staging: types, dates, decimal separator, keys and in/out sign resolved once" },
        { pt: "Intermediate: regras de negócio — balanço de massa, classificação de parada, custo por lote", en: "Intermediate: business rules — mass balance, downtime classification, cost per batch" },
        { pt: "Marts por domínio (produção, estoque, custo, financeiro), incrementais, com macros para regra repetida", en: "Marts by domain (production, inventory, cost, finance), incremental, with macros for repeated rules" },
      ],
      ferramentas: ["dbt", "SQL", "Jinja", "BigQuery"],
    },
    {
      id: "testes",
      titulo: { pt: "Testes e documentação", en: "Tests and documentation" },
      lema: { pt: "Nenhum número chega ao painel sem teste", en: "No number reaches the dashboard untested" },
      praticas: [
        { pt: "Testes de schema: unique, not_null, relationships e accepted_values", en: "Schema tests: unique, not_null, relationships and accepted_values" },
        { pt: "Testes de negócio: estoque fecha pelas origens, OEE nunca passa de 100%, a soma das partes bate o total", en: "Business tests: inventory closes by origin, OEE never exceeds 100%, parts add up to the total" },
        { pt: "Reconciliação contra a fonte, e linhagem e dicionário gerados pelo dbt docs", en: "Reconciliation against the source, with lineage and data dictionary from dbt docs" },
      ],
      ferramentas: ["dbt tests", "dbt docs", "SQL"],
    },
    {
      id: "semantico",
      titulo: { pt: "Modelo semântico", en: "Semantic model" },
      lema: { pt: "Star schema antes do gráfico", en: "Star schema before the chart" },
      praticas: [
        { pt: "Fatos e dimensões conformadas: calendário, item, lote, máquina, turno, unidade", en: "Conformed facts and dimensions: calendar, item, batch, machine, shift, plant" },
        { pt: "Power Query só para conectar — a regra mora no dbt, não escondida no relatório", en: "Power Query only to connect — rules live in dbt, not hidden in the report" },
        { pt: "Medidas DAX por domínio, com variáveis, divisão protegida e relações 1:N", en: "DAX measures by domain, with variables, safe division and 1:N relationships" },
      ],
      ferramentas: ["Power BI", "DAX", "Power Query", "Modelagem dimensional"],
    },
    {
      id: "entrega",
      titulo: { pt: "Entrega e operação", en: "Delivery and operations" },
      lema: { pt: "Painel tratado como produto", en: "Dashboards treated as products" },
      praticas: [
        { pt: "Projeto PBIP/TMDL versionado em Git, com revisão por diferença entre versões", en: "PBIP/TMDL project versioned in Git, reviewed by diff between versions" },
        { pt: "Atualização agendada, carimbo de última atualização em cada tela e aviso quando a carga falha", en: "Scheduled refresh, last-update stamp on every screen and an alert when a load fails" },
        { pt: "Manual técnico por painel: fontes, regras, diagnóstico por sintoma e pendências numeradas", en: "Technical manual per dashboard: sources, rules, symptom-based diagnosis and numbered open issues" },
      ],
      ferramentas: ["Git", "PBIP / TMDL", "Power BI"],
    },
  ] as { id: string; titulo: Text; lema: Text; praticas: Text[]; ferramentas: string[] }[],
};
