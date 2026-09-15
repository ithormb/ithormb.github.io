import type { Projeto } from "./types";

export const agenteWhatsapp: Projeto = {
  slug: "agente-whatsapp",
  ordem: 4,
  titulo: { pt: "Agente conversacional no WhatsApp", en: "Conversational agent on WhatsApp" },
  resumo: {
    pt: "A pessoa fala em texto ou áudio e o agente cria, edita e conclui tarefas reais no gerenciador corporativo — com eco da fala antes de qualquer escrita.",
    en: "People speak in text or voice and the agent creates, edits and completes real tasks in the corporate task manager — echoing the transcript before any write.",
  },
  tese: {
    pt: "Transcrição alucina. Nada é gravado sem a pessoa ler o que o sistema entendeu.",
    en: "Transcription hallucinates. Nothing is written until the person reads what the system understood.",
  },
  stack: ["NestJS", "Evolution API", "Whisper", "LLM (classificação)", "PostgreSQL"],
  problema: { pt: "[[PREENCHER]]", en: "[[FILL IN]]" },
  arquitetura: {
    pt: "Menu numerado em texto puro; a frase inteira é lida com a lista na tela e a IA só entra no que a regra não resolve, devolvendo um número conferido em código. A escrita sai por conta de serviço e o rastro da pessoa vive no comentário.",
    en: "Numbered plain-text menu; the whole sentence is parsed against the on-screen list and AI only steps in where rules can't, returning a number verified in code. Writes go through a service account; the person's trail lives in the comment.",
  },
  armadilhas: [
    {
      pt: "Botão e lista interativa foram construídos, testados e descartados — a conexão descartava a mensagem antes de chegar.",
      en: "Interactive buttons and lists were built, tested and discarded — the connection dropped the message before delivery.",
    },
    {
      pt: "Um tom puro de áudio voltou da transcrição como um recado completo. Daí o eco obrigatório.",
      en: "A pure audio tone came back from transcription as a full message. Hence the mandatory echo.",
    },
    {
      pt: "Excluir não existe, por decisão de produto: a remoção física levaria comentários e anexos junto.",
      en: "Delete doesn't exist, by product decision: physical removal would take comments and attachments with it.",
    },
  ],
  resultado: { pt: "[[PREENCHER]]", en: "[[FILL IN]]" },
  metricas: [],
};
