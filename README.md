# Portfólio

Site estático (Next.js, `output: 'export'`). Sem backend, sem banco, sem segredo.

```bash
npm install     # requer Node 20+
npm run dev     # http://localhost:3000/pt/
npm run build   # gera ./out — é isso que vai para a hospedagem
```

## Adicionar um projeto

1. Crie `content/projetos/<slug>.ts` exportando um `Projeto` (veja `types.ts`).
2. Importe e adicione ao array em `content/projetos/index.ts`.

A home, a página do projeto e o sitemap passam a existir no próximo build.
