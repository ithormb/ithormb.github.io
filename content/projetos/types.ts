import type { Text } from "@/lib/i18n";

export type Projeto = {
  slug: string;
  ordem: number;
  destaque?: boolean;
  titulo: Text;
  resumo: Text;
  tese: Text;
  stack: string[];
  problema: Text;
  arquitetura: Text;
  armadilhas: Text[];
  resultado: Text;
  metricas: { value: string; label: Text }[];
};
