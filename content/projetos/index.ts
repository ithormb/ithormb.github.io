import type { Projeto } from "./types";
import { hubAgentesIa } from "./hub-agentes-ia";
import { camadaDadosErpMes } from "./camada-dados-erp-mes";
import { automacoesN8n } from "./automacoes-n8n";
import { agenteWhatsapp } from "./agente-whatsapp";

export const projetos: Projeto[] = [
  hubAgentesIa,
  camadaDadosErpMes,
  automacoesN8n,
  agenteWhatsapp,
].sort((a, b) => a.ordem - b.ordem);

export type { Projeto } from "./types";
