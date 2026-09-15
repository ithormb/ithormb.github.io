import { projetos, type Projeto } from "@/content/projetos";

export function listarProjetos(): Projeto[] {
  return projetos;
}

export function getProjeto(slug: string): Projeto | undefined {
  return projetos.find((p) => p.slug === slug);
}
