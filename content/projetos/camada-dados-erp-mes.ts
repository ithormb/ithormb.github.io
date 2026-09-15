import type { Projeto } from "./types";

export const camadaDadosErpMes: Projeto = {
  slug: "camada-dados-erp-mes",
  ordem: 2,
  titulo: { pt: "Camada de dados sobre ERP e MES", en: "Data layer over ERP and MES" },
  resumo: {
    pt: "ERP, MES em BigQuery e planilha de chão de fábrica — três origens respondendo a mesma pergunta, com leitura estritamente somente-leitura.",
    en: "ERP, MES on BigQuery and a shop-floor spreadsheet — three sources answering the same question, strictly read-only.",
  },
  tese: {
    pt: "O ERP só guarda o estado atual. Quem quer história precisa fotografar.",
    en: "The ERP only keeps the current state. If you want history, take snapshots.",
  },
  stack: ["SQL Server (leitura)", "BigQuery", "Google Sheets", "PostgreSQL", "NestJS"],
  problema: { pt: "[[PREENCHER]]", en: "[[FILL IN]]" },
  arquitetura: {
    pt: "Usuário de banco com permissão apenas de leitura, por princípio. Fotografia diária dos títulos e comparação entre duas fotos para responder 'como estava no dia X'. Duas plantas em datasets diferentes do MES e uma terceira em planilha, consolidadas num único número.",
    en: "Read-only database user, on principle. Daily snapshot of financial titles, compared pairwise to answer 'how was it on day X'. Two plants in different MES datasets plus a third on a spreadsheet, consolidated into one number.",
  },
  armadilhas: [
    {
      pt: "Campo com duas semânticas dependendo do processo: total do lote repetido em toda linha num, valor por linha noutro. Somar do jeito errado deu 47% num caso e 154% no outro.",
      en: "One field, two meanings depending on the process: batch total repeated on every row in one, per-row value in the other. Summing the wrong way gave 47% in one case and 154% in the other.",
    },
    {
      pt: "Turno da madrugada gera duração negativa quando a hora é guardada sem data — toda jornada precisa de aritmética modular.",
      en: "Night shift yields negative durations when time is stored without a date — every shift needs modular arithmetic.",
    },
    {
      pt: "As tabelas de movimento financeiro não substituem a fotografia: reagendar um título não move dinheiro e não deixa rastro nelas.",
      en: "Financial movement tables don't replace the snapshot: rescheduling a title moves no money and leaves no trace there.",
    },
  ],
  resultado: { pt: "[[PREENCHER]]", en: "[[FILL IN]]" },
  metricas: [],
};
