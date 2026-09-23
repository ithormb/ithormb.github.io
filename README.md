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

## CV em PDF

O CV é a página `/pt/cv/` (e `/en/cv/`), diagramada em A4 com o mesmo conteúdo do
site. Depois de mudar o conteúdo, gere os PDFs de novo e faça o build:

```bash
npm run build && (cd out && python3 -m http.server 8080 &) && \
GOTENBERG=http://localhost:3000 SITE=http://localhost:8080 ./scripts/gerar-cv.sh && \
npm run build
```

O segundo build copia os PDFs novos de `public/cv/` para o site. Confira que cada
PDF tem **uma página** (`pdfinfo public/cv/thomas-barbosa-cv.pdf`).
