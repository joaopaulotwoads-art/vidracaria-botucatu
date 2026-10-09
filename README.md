# Vidraçaria Botucatu — site institucional

Site institucional para uma vidraçaria em Botucatu - SP, construído com [Astro](https://astro.build),
Tailwind CSS v4 e Bun. Foco em SEO on-page (meta tags, dados estruturados, sitemap) e performance.

## Stack

- **Astro** — geração estática (SSG)
- **Tailwind CSS v4** — estilos (via `@tailwindcss/vite`)
- **@astrojs/sitemap** — `sitemap-index.xml` gerado automaticamente no build
- **Bun** — gerenciador de pacotes e runtime
- Imagens via [Pexels](https://www.pexels.com) (licença gratuita), otimizadas pelo `astro:assets`

## Comandos

| Comando         | Ação                                           |
| --------------- | ----------------------------------------------- |
| `bun install`   | Instala as dependências                         |
| `bun run dev`   | Inicia o servidor local em `localhost:4321`     |
| `bun run build` | Gera o build de produção em `./dist/`           |
| `bun run preview` | Pré-visualiza o build de produção              |

## ⚠️ Antes de publicar — dados a atualizar

Todos os dados de negócio (nome, endereço, telefone, WhatsApp, e-mail, coordenadas) estão
centralizados em `src/data/site.ts` e são **placeholders**. Atualize com os dados reais antes do
deploy, garantindo que fiquem **idênticos** aos cadastrados no Google Business Profile (consistência
de NAP é um fator importante de SEO local):

- `src/data/site.ts` → nome, endereço, telefone, WhatsApp, e-mail, horário, coordenadas (`geo`), redes sociais
- `astro.config.mjs` → campo `site` (domínio final em produção)
- `src/pages/contato.astro` → `SITE.mapEmbedSrc` (iframe do Google Maps com o endereço real)
- `public/og-default.jpg` e `public/favicon.*` → trocar por imagens/marca reais, se desejado
- Fotos de serviços em `src/data/services.ts` (`heroImage`) são do Pexels; recomenda-se substituir
  por fotos reais dos trabalhos da vidraçaria assim que possível, para reforçar E-E-A-T

## SEO on-page implementado

- Title e meta description únicos por página, com palavra-chave + cidade
- Canonical, Open Graph e Twitter Card em todas as páginas (`src/components/Seo.astro`)
- Dados estruturados JSON-LD: `LocalBusiness`/`HomeAndConstructionBusiness` (global),
  `BreadcrumbList`, `Service` e `FAQPage` por serviço (`src/lib/schema.ts`)
- `sitemap-index.xml` e `robots.txt` apontando para o sitemap
- HTML semântico (um único `<h1>` por página, hierarquia de headings) e link para pular para o conteúdo
- Imagens com `alt` descritivo e otimização automática (`astro:assets`)
- Página 404 customizada com `noindex`

## Deploy (GitHub + Vercel)

1. Crie um repositório no GitHub e faça push deste projeto.
2. Importe o repositório na [Vercel](https://vercel.com/new) — o framework Astro é detectado
   automaticamente (`bun run build`, output em `dist/`).
3. Configure o domínio final em Vercel e atualize o campo `site` em `astro.config.mjs` para o mesmo
   domínio (necessário para canonical, sitemap e OG tags corretos).
