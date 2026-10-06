# ithormb.github.io

Portfólio pessoal de **Thomas Barbosa**, especialista em Dados, IA & Automações.

**Site:** https://ithormb.github.io · [Português](https://ithormb.github.io/pt/) · [English](https://ithormb.github.io/en/)

## O que tem no site

- Trajetória, experiência e formação
- Projetos de dados, BI, automação e agentes de IA
- Galeria de painéis de BI (reproduções com dados fictícios) e o pipeline de dados por trás deles
- Catálogo de automações em n8n
- CV em PDF, em português e inglês

## Stack

Next.js (exportação estática) · TypeScript · Tailwind CSS · GitHub Pages via GitHub Actions.
Sem backend, sem banco de dados e sem rastreadores.

## Rodar localmente

```bash
npm install     # Node 20+
npm run dev     # http://localhost:3000/pt/
npm run build   # gera ./out, que é o que vai para o ar
```

O conteúdo fica em `content/` (textos em PT e EN) e os componentes em `components/`.
Todo push na `main` publica o site.

## CV em PDF

O CV é a página `/pt/cv/` (e `/en/cv/`), diagramada em A4. Para regerar os PDFs
depois de mudar o conteúdo, com um [Gotenberg](https://gotenberg.dev) rodando:

```bash
npm run build && (cd out && python3 -m http.server 8080 &) && \
GOTENBERG=http://localhost:3000 SITE=http://localhost:8080 ./scripts/gerar-cv.sh && \
npm run build
```

Cada PDF deve ter uma página só.
