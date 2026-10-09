// Auditoria de SEO on-page / dados estruturados do build estático (dist/).
// Uso: `bun run audit` (roda `astro build` antes) ou `bun run scripts/audit.ts`
// direto se o dist/ já estiver atualizado.
//
// Não depende de nenhum pacote novo: usa `sharp` (já instalado como
// dependência transitiva do Astro) só para medir dimensões de imagem, com
// fallback silencioso caso não esteja disponível.

import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { SITE } from '../src/data/site';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const DIST_DIR = path.join(ROOT, 'dist');

type Severity = 'ERROR' | 'WARN';
type Issue = { severity: Severity; code: string; message: string };

type PageReport = {
  route: string;
  file: string;
  title: string | null;
  description: string | null;
  h1Count: number;
  canonical: string | null;
  noindex: boolean;
  lang: string | null;
  jsonLdTypes: string[];
  issues: Issue[];
};

const results: PageReport[] = [];
const globalIssues: Issue[] = [];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function walkHtml(dir: string): string[] {
  const out: string[] = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walkHtml(full));
    else if (entry.name.endsWith('.html')) out.push(full);
  }
  return out;
}

function routeFromFile(file: string): string {
  const rel = path.relative(DIST_DIR, file).split(path.sep).join('/');
  if (rel === 'index.html') return '/';
  if (rel.endsWith('/index.html')) return '/' + rel.slice(0, -'/index.html'.length);
  if (rel.endsWith('.html')) return '/' + rel.slice(0, -'.html'.length);
  return '/' + rel;
}

function attr(tag: string, name: string): string | null {
  const m = tag.match(new RegExp(`${name}="([^"]*)"`));
  return m ? m[1] : null;
}

function decodeEntities(s: string): string {
  return s
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

// Tipagem solta de propósito: sharp é dependência transitiva do Astro (não
// declarada no package.json deste projeto), então evitamos depender da forma
// exata dos tipos exportados por ela.
let sharpMod: ((input: string) => { metadata(): Promise<{ width?: number; height?: number }> }) | null | undefined;
async function getSharp() {
  if (sharpMod !== undefined) return sharpMod;
  try {
    const mod: any = await import('sharp');
    sharpMod = mod.default ?? mod;
  } catch {
    sharpMod = null;
  }
  return sharpMod;
}

async function localFileForUrl(url: string): Promise<string | null> {
  try {
    const u = new URL(url);
    if (u.hostname !== new URL(SITE.url).hostname) return null;
    const p = path.join(DIST_DIR, decodeURIComponent(u.pathname));
    return existsSync(p) ? p : null;
  } catch {
    // relative path
    const p = path.join(DIST_DIR, decodeURIComponent(url.split('?')[0]));
    return existsSync(p) ? p : null;
  }
}

// ---------------------------------------------------------------------------
// Build check
// ---------------------------------------------------------------------------

if (!existsSync(DIST_DIR)) {
  console.error('dist/ não encontrado. Rode `bun run build` (astro build) antes de `bun run audit`.');
  process.exit(1);
}

const htmlFiles = walkHtml(DIST_DIR).sort();
const allRoutes = new Set(htmlFiles.map(routeFromFile));

// ---------------------------------------------------------------------------
// Per-page checks (itens 1, 2, 3, 4, 5, 6, 7, 8, 10, 12)
// ---------------------------------------------------------------------------

const seenTitles = new Map<string, string[]>();
const seenDescriptions = new Map<string, string[]>();
const napPhoneDisplays = new Set<string>();

for (const file of htmlFiles) {
  const route = routeFromFile(file);
  const html = readFileSync(file, 'utf8');
  const issues: Issue[] = [];

  // --- lang (item 12) ---
  const langMatch = html.match(/<html[^>]*\blang="([^"]*)"/);
  const lang = langMatch ? langMatch[1] : null;
  if (lang !== 'pt-BR') {
    issues.push({ severity: 'ERROR', code: 'lang', message: `lang="${lang}" (esperado "pt-BR")` });
  }

  // --- noindex (item 10) ---
  const robotsMatch = html.match(/<meta name="robots" content="([^"]*)"/);
  const noindex = !!robotsMatch && /noindex/.test(robotsMatch[1]);
  const shouldBeNoindex = route === '/404';
  if (noindex && !shouldBeNoindex) {
    issues.push({ severity: 'ERROR', code: 'noindex', message: 'página indexável está com noindex' });
  }
  if (!noindex && shouldBeNoindex) {
    issues.push({ severity: 'ERROR', code: 'noindex', message: '404 deveria ter noindex e não tem' });
  }

  // --- title (item 1) ---
  const titleMatch = html.match(/<title>([^<]*)<\/title>/);
  const title = titleMatch ? decodeEntities(titleMatch[1]) : null;
  if (!title) {
    issues.push({ severity: 'ERROR', code: 'title', message: 'sem <title>' });
  } else if (!shouldBeNoindex) {
    // Faixa ideal: 50–60. ERRO só fora de 30–60; entre 30 e a faixa ideal, AVISO.
    if (title.length < 30 || title.length > 60) {
      issues.push({
        severity: 'ERROR',
        code: 'title-length',
        message: `title com ${title.length} caracteres (limite 30–60, ideal 50–60)`,
      });
    } else if (title.length < 50) {
      issues.push({
        severity: 'WARN',
        code: 'title-length',
        message: `title com ${title.length} caracteres (abaixo da faixa ideal 50–60)`,
      });
    }
    const list = seenTitles.get(title) ?? [];
    list.push(route);
    seenTitles.set(title, list);
  }

  // --- description (item 2) ---
  const descMatch = html.match(/<meta name="description" content="([^"]*)"/);
  const description = descMatch ? decodeEntities(descMatch[1]) : null;
  if (!description) {
    issues.push({ severity: 'ERROR', code: 'description', message: 'sem meta description' });
  } else if (!shouldBeNoindex) {
    // Faixa ideal: 140–155. ERRO só fora de 110–160; entre esses limites e a
    // faixa ideal, AVISO.
    if (description.length < 110 || description.length > 160) {
      issues.push({
        severity: 'ERROR',
        code: 'description-length',
        message: `description com ${description.length} caracteres (limite 110–160, ideal 140–155)`,
      });
    } else if (description.length < 140 || description.length > 155) {
      issues.push({
        severity: 'WARN',
        code: 'description-length',
        message: `description com ${description.length} caracteres (fora da faixa ideal 140–155)`,
      });
    }
    const list = seenDescriptions.get(description) ?? [];
    list.push(route);
    seenDescriptions.set(description, list);
  }

  // --- H1 / hierarquia (item 3) ---
  const headings = [...html.matchAll(/<(h[1-6])\b[^>]*>/g)].map((m) => Number(m[1][1]));
  const h1Count = headings.filter((h) => h === 1).length;
  if (h1Count !== 1) {
    issues.push({ severity: 'ERROR', code: 'h1-count', message: `${h1Count} H1 encontrados (esperado 1)` });
  }
  let lastLevel = 0;
  let skipped = false;
  for (const level of headings) {
    if (lastLevel > 0 && level > lastLevel + 1) skipped = true;
    lastLevel = level;
  }
  if (skipped) {
    issues.push({
      severity: 'ERROR',
      code: 'heading-skip',
      message: `hierarquia pula nível: ${headings.map((h) => 'H' + h).join(' > ')}`,
    });
  }

  // --- canonical (item 4) ---
  const canonicalMatch = html.match(/<link rel="canonical" href="([^"]*)"/);
  const canonical = canonicalMatch ? canonicalMatch[1] : null;
  if (!canonical) {
    issues.push({ severity: 'ERROR', code: 'canonical', message: 'sem <link rel="canonical">' });
  } else {
    if (!canonical.startsWith('https://www.')) {
      issues.push({ severity: 'ERROR', code: 'canonical-host', message: `canonical sem https://www. (${canonical})` });
    }
    const expected = new URL(route === '/' ? '/' : route, SITE.url).toString();
    if (canonical !== expected) {
      issues.push({
        severity: 'WARN',
        code: 'canonical-self',
        message: `canonical "${canonical}" != URL real da página "${expected}"`,
      });
    }
  }

  // --- Open Graph / Twitter (item 5) ---
  const ogTags: Record<string, string> = {};
  for (const m of html.matchAll(/<meta property="(og:[a-z_]+)" content="([^"]*)"/g)) ogTags[m[1]] = m[2];
  const requiredOg = ['og:type', 'og:site_name', 'og:title', 'og:description', 'og:url', 'og:image', 'og:locale'];
  const missingOg = requiredOg.filter((k) => !ogTags[k]);
  if (missingOg.length) {
    issues.push({ severity: 'ERROR', code: 'og-incomplete', message: `faltando: ${missingOg.join(', ')}` });
  }
  const twitterTags: Record<string, string> = {};
  for (const m of html.matchAll(/<meta name="(twitter:[a-z_]+)" content="([^"]*)"/g)) twitterTags[m[1]] = m[2];
  const requiredTwitter = ['twitter:card', 'twitter:title', 'twitter:description', 'twitter:image'];
  const missingTwitter = requiredTwitter.filter((k) => !twitterTags[k]);
  if (missingTwitter.length) {
    issues.push({ severity: 'ERROR', code: 'twitter-incomplete', message: `faltando: ${missingTwitter.join(', ')}` });
  }
  if (ogTags['og:image']) {
    const sharp = await getSharp();
    const localImg = await localFileForUrl(ogTags['og:image']);
    if (!localImg) {
      issues.push({ severity: 'WARN', code: 'og-image-missing', message: `og:image não encontrado em dist/: ${ogTags['og:image']}` });
    } else if (sharp) {
      try {
        const meta = await sharp(localImg).metadata();
        if (meta.width !== 1200 || meta.height !== 630) {
          issues.push({
            severity: 'ERROR',
            code: 'og-image-size',
            message: `og:image mede ${meta.width}x${meta.height} (esperado 1200x630)`,
          });
        }
      } catch {
        issues.push({ severity: 'WARN', code: 'og-image-unreadable', message: 'não foi possível ler dimensões do og:image' });
      }
    }
  }

  // --- JSON-LD (item 6) ---
  const jsonLdBlocks: any[] = [];
  for (const m of html.matchAll(/<script type="application\/ld\+json">([^<]*)<\/script>/g)) {
    try {
      jsonLdBlocks.push(JSON.parse(m[1]));
    } catch (e) {
      issues.push({ severity: 'ERROR', code: 'jsonld-parse', message: `JSON-LD inválido: ${(e as Error).message}` });
    }
  }
  const jsonLdTypes = jsonLdBlocks.map((b) => b['@type']).filter(Boolean);
  const business = jsonLdBlocks.find((b) => b['@type'] === 'HomeAndConstructionBusiness');
  if (!business) {
    issues.push({ severity: 'ERROR', code: 'jsonld-business', message: 'bloco HomeAndConstructionBusiness ausente' });
  }
  if (route !== '/' && !shouldBeNoindex) {
    const breadcrumb = jsonLdBlocks.find((b) => b['@type'] === 'BreadcrumbList');
    if (!breadcrumb) {
      issues.push({ severity: 'ERROR', code: 'jsonld-breadcrumb', message: 'BreadcrumbList ausente em página interna' });
    }
  }
  if (route.startsWith('/servicos/') && !shouldBeNoindex) {
    const service = jsonLdBlocks.find((b) => b['@type'] === 'Service');
    const faq = jsonLdBlocks.find((b) => b['@type'] === 'FAQPage');
    if (!service) issues.push({ severity: 'ERROR', code: 'jsonld-service', message: 'bloco Service ausente' });
    if (!faq) issues.push({ severity: 'ERROR', code: 'jsonld-faq', message: 'bloco FAQPage ausente' });
    if (service && business && service.provider?.['@id'] !== business['@id']) {
      issues.push({ severity: 'ERROR', code: 'jsonld-provider-id', message: 'Service.provider.@id não aponta para o @id do business' });
    }
  }

  // --- Imagens (item 7) ---
  const imgTags = [...html.matchAll(/<img\b[^>]*>/g)].map((m) => m[0]);
  for (const tag of imgTags) {
    const src = attr(tag, 'src');
    const alt = attr(tag, 'alt');
    const width = attr(tag, 'width');
    const height = attr(tag, 'height');
    const label = src ?? '(sem src)';
    if (alt === null) issues.push({ severity: 'ERROR', code: 'img-alt', message: `imagem sem alt: ${label}` });
    if (!width || !height) {
      issues.push({ severity: 'ERROR', code: 'img-dimensions', message: `imagem sem width/height: ${label}` });
    }
    if (src) {
      const localImg = await localFileForUrl(new URL(src, SITE.url).toString());
      if (localImg) {
        const kb = statSync(localImg).size / 1024;
        if (kb > 200) {
          issues.push({ severity: 'ERROR', code: 'img-weight', message: `${label} tem ${kb.toFixed(0)} KB (> 200 KB)` });
        }
      }
    }
  }

  // --- Links internos (item 8) ---
  const hrefs = [...html.matchAll(/<a\b[^>]*href="([^"]*)"/g)].map((m) => decodeEntities(m[1]));
  const brokenInternal: string[] = [];
  let linksToContato = false;
  for (const href of hrefs) {
    if (href.startsWith('/')) {
      const clean = href.split('#')[0].split('?')[0].replace(/\/$/, '') || '/';
      if (clean === '/contato') linksToContato = true;
      const isAsset = /\.[a-z0-9]+$/i.test(clean);
      if (isAsset) {
        if (!existsSync(path.join(DIST_DIR, clean))) brokenInternal.push(href);
      } else if (!allRoutes.has(clean)) {
        brokenInternal.push(href);
      }
    }
  }
  // "Relacionados" conta só o conteúdo principal (<main>), já que o rodapé
  // lista todos os serviços em todas as páginas (nav sitewide, não é o bloco
  // de "serviços relacionados" em si).
  const mainMatch = html.match(/<main\b[^>]*>([\s\S]*)<\/main>/);
  const mainHtml = mainMatch ? mainMatch[1] : html;
  const relatedServiceLinks = new Set<string>();
  for (const m of mainHtml.matchAll(/<a\b[^>]*href="([^"]*)"/g)) {
    const clean = decodeEntities(m[1]).split('#')[0].split('?')[0].replace(/\/$/, '') || '/';
    if (/^\/servicos\/[a-z0-9-]+$/.test(clean) && clean !== route) relatedServiceLinks.add(clean);
  }
  if (brokenInternal.length) {
    issues.push({ severity: 'ERROR', code: 'broken-link', message: `links internos quebrados: ${brokenInternal.join(', ')}` });
  }
  if (route.startsWith('/servicos/') && !shouldBeNoindex) {
    if (relatedServiceLinks.size < 2 || relatedServiceLinks.size > 3) {
      issues.push({
        severity: 'ERROR',
        code: 'related-links',
        message: `${relatedServiceLinks.size} links para outros serviços (esperado 2 ou 3)`,
      });
    }
    if (!linksToContato) {
      issues.push({ severity: 'ERROR', code: 'contato-link', message: 'página de serviço não linka para /contato' });
    }
  }

  // --- WhatsApp / tel (item 11) ---
  const waLinks = [...html.matchAll(/href="(https:\/\/wa\.me\/[^"]*)"/g)].map((m) => decodeEntities(m[1]));
  const telLinks = [...html.matchAll(/href="(tel:[^"]*)"/g)].map((m) => decodeEntities(m[1]));
  if (waLinks.length === 0) {
    issues.push({ severity: 'WARN', code: 'wa-missing', message: 'nenhum link de WhatsApp estático na página' });
  } else {
    const wrongNumber = waLinks.filter((l) => !l.includes(`wa.me/${SITE.whatsappNumber}`));
    if (wrongNumber.length) {
      issues.push({ severity: 'ERROR', code: 'wa-number', message: `número divergente: ${wrongNumber.join(', ')}` });
    }
    const withoutText = waLinks.filter((l) => !l.includes('?text='));
    if (withoutText.length) {
      issues.push({
        severity: 'WARN',
        code: 'wa-no-prefill',
        message: `${withoutText.length} link(s) de WhatsApp sem mensagem pré-preenchida (?text=)`,
      });
    }
  }
  if (telLinks.length) {
    const wrongTel = telLinks.filter((l) => l !== `tel:${SITE.phoneE164}`);
    if (wrongTel.length) {
      issues.push({ severity: 'ERROR', code: 'tel-number', message: `tel: divergente: ${wrongTel.join(', ')}` });
    }
  }

  // --- favicon / manifest (item 12) ---
  if (!/<link rel="icon"/.test(html)) {
    issues.push({ severity: 'ERROR', code: 'favicon-missing', message: 'sem <link rel="icon">' });
  }
  if (!/<link rel="manifest"/.test(html)) {
    issues.push({ severity: 'WARN', code: 'manifest-missing', message: 'sem <link rel="manifest"> / web app manifest' });
  }

  // --- NAP (item 13): coleta o telefone exibido nesta página ---
  for (const m of html.matchAll(/\(\d{2}\)\s?\d{4,5}-\d{4}/g)) napPhoneDisplays.add(m[0]);

  results.push({ route, file, title, description, h1Count, canonical, noindex, lang, jsonLdTypes, issues });
}

// ---------------------------------------------------------------------------
// Checks globais
// ---------------------------------------------------------------------------

// Title/description únicos (item 1 e 2)
for (const [title, routes] of seenTitles) {
  if (routes.length > 1) {
    globalIssues.push({ severity: 'ERROR', code: 'title-duplicate', message: `title repetido em ${routes.join(', ')}: "${title}"` });
  }
}
for (const [, routes] of seenDescriptions) {
  if (routes.length > 1) {
    globalIssues.push({ severity: 'ERROR', code: 'description-duplicate', message: `description repetida em ${routes.join(', ')}` });
  }
}

// NAP (item 13)
if (napPhoneDisplays.size > 1) {
  globalIssues.push({
    severity: 'ERROR',
    code: 'nap-phone',
    message: `mais de um telefone exibido no site: ${[...napPhoneDisplays].join(', ')}`,
  });
} else if (napPhoneDisplays.size === 1 && ![...napPhoneDisplays][0]?.includes(SITE.phoneDisplay.replace(/^\(\d{2}\)\s?/, ''))) {
  if (![...napPhoneDisplays].includes(SITE.phoneDisplay)) {
    globalIssues.push({
      severity: 'ERROR',
      code: 'nap-phone-mismatch',
      message: `telefone exibido (${[...napPhoneDisplays][0]}) difere de SITE.phoneDisplay (${SITE.phoneDisplay})`,
    });
  }
}

// robots.txt (item 9)
const robotsPath = path.join(DIST_DIR, 'robots.txt');
if (!existsSync(robotsPath)) {
  globalIssues.push({ severity: 'ERROR', code: 'robots-missing', message: 'dist/robots.txt não existe' });
} else {
  const robots = readFileSync(robotsPath, 'utf8');
  if (!/Sitemap:\s*https:\/\/www\./.test(robots)) {
    globalIssues.push({ severity: 'ERROR', code: 'robots-sitemap', message: 'robots.txt não aponta para o sitemap' });
  }
}

// sitemap (item 9)
const sitemapIndexPath = path.join(DIST_DIR, 'sitemap-index.xml');
const indexableRoutes = results.filter((r) => !r.noindex && r.route !== '/404').map((r) => r.route);
if (!existsSync(sitemapIndexPath)) {
  globalIssues.push({ severity: 'ERROR', code: 'sitemap-missing', message: 'dist/sitemap-index.xml não existe' });
} else {
  const sitemapFiles = readdirSync(DIST_DIR).filter((f) => /^sitemap-\d+\.xml$/.test(f));
  const sitemapUrls = new Set<string>();
  for (const f of sitemapFiles) {
    const xml = readFileSync(path.join(DIST_DIR, f), 'utf8');
    for (const m of xml.matchAll(/<loc>([^<]*)<\/loc>/g)) sitemapUrls.add(m[1]);
  }
  const sitemapPaths = new Set([...sitemapUrls].map((u) => new URL(u).pathname.replace(/\/$/, '') || '/'));
  const missingFromSitemap = indexableRoutes.filter((r) => !sitemapPaths.has(r));
  const extraInSitemap = [...sitemapPaths].filter((p) => !indexableRoutes.includes(p));
  if (missingFromSitemap.length) {
    globalIssues.push({ severity: 'ERROR', code: 'sitemap-missing-pages', message: `faltando no sitemap: ${missingFromSitemap.join(', ')}` });
  }
  if (extraInSitemap.length) {
    globalIssues.push({ severity: 'ERROR', code: 'sitemap-extra-pages', message: `sitemap com páginas extras/indevidas: ${extraInSitemap.join(', ')}` });
  }
  if (sitemapPaths.has('/404')) {
    globalIssues.push({ severity: 'ERROR', code: 'sitemap-404', message: '/404 está no sitemap' });
  }
}

// ---------------------------------------------------------------------------
// Relatório
// ---------------------------------------------------------------------------

const severityRank = { ERROR: 0, WARN: 1 } as const;
results.sort((a, b) => a.route.localeCompare(b.route));

console.log('\n=== Auditoria SEO — ' + new Date().toISOString().slice(0, 10) + ' ===\n');

console.log('| Página | Title (chars) | Description (chars) | H1 | Status |');
console.log('|---|---|---|---|---|');
let totalErrors = 0;
let totalWarns = 0;
for (const r of results) {
  const errors = r.issues.filter((i) => i.severity === 'ERROR').length;
  const warns = r.issues.filter((i) => i.severity === 'WARN').length;
  totalErrors += errors;
  totalWarns += warns;
  const status = errors > 0 ? `ERRO (${errors})` : warns > 0 ? `OK (${warns} aviso)` : 'OK';
  console.log(
    `| ${r.route} | ${r.title ? r.title.length : '—'} | ${r.description ? r.description.length : '—'} | ${r.h1Count} | ${status} |`
  );
}

console.log('\n--- Detalhe por página ---\n');
for (const r of results) {
  if (r.issues.length === 0) continue;
  console.log(`${r.route}`);
  for (const issue of [...r.issues].sort((a, b) => severityRank[a.severity] - severityRank[b.severity])) {
    console.log(`  [${issue.severity}] ${issue.code}: ${issue.message}`);
  }
  console.log('');
}

if (globalIssues.length) {
  console.log('--- Checks globais ---\n');
  for (const issue of globalIssues) {
    console.log(`[${issue.severity}] ${issue.code}: ${issue.message}`);
    if (issue.severity === 'ERROR') totalErrors++;
    else totalWarns++;
  }
  console.log('');
}

console.log(`Total: ${totalErrors} erro(s), ${totalWarns} aviso(s) em ${results.length} página(s) (${indexableRoutes.length} indexáveis).`);

process.exit(totalErrors > 0 ? 1 : 0);
