// Mede sobreposição de 5-gramas entre o texto visível de cada página em dist/.
// Uso: node scripts/overlap.mjs [limiar]  (limiar padrão: 0.4)
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const DIST = join(process.cwd(), 'dist');
const threshold = Number(process.argv[2] ?? 0.4);

function findHtmlFiles(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const st = statSync(full);
    if (st.isDirectory()) findHtmlFiles(full, out);
    else if (entry === 'index.html') out.push(full);
  }
  return out;
}

function extractBodyText(html) {
  // Remove header e footer (compartilhados entre todas as páginas) para não
  // inflar a sobreposição com texto de navegação/rodapé.
  const mainMatch = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
  const body = mainMatch ? mainMatch[1] : html;
  const noScripts = body.replace(/<script[\s\S]*?<\/script>/gi, ' ');
  const text = noScripts.replace(/<[^>]+>/g, ' ');
  const decoded = text
    .replace(/&amp;/g, '&')
    .replace(/&nbsp;/g, ' ')
    .replace(/&[a-z]+;/gi, ' ');
  return decoded;
}

function tokenize(text) {
  return (text.toLowerCase().match(/[a-zà-ÿ0-9]+/gi) || []);
}

function fiveGrams(tokens) {
  const grams = new Set();
  for (let i = 0; i <= tokens.length - 5; i++) {
    grams.add(tokens.slice(i, i + 5).join(' '));
  }
  return grams;
}

function jaccard(a, b) {
  if (a.size === 0 || b.size === 0) return 0;
  let intersection = 0;
  const [small, big] = a.size < b.size ? [a, b] : [b, a];
  for (const g of small) if (big.has(g)) intersection++;
  const union = a.size + b.size - intersection;
  return intersection / union;
}

const files = findHtmlFiles(DIST).filter((f) => !f.includes('404'));
const pages = files.map((file) => {
  const html = readFileSync(file, 'utf-8');
  const text = extractBodyText(html);
  const tokens = tokenize(text);
  const url = file.replace(DIST, '').replace(/\\/g, '/').replace(/index\.html$/, '') || '/';
  return { url, wordCount: tokens.length, grams: fiveGrams(tokens) };
});

console.log(`Páginas analisadas: ${pages.length}\n`);
console.log('Contagem de palavras (corpo, sem header/footer):');
for (const p of pages.sort((a, b) => a.wordCount - b.wordCount)) {
  console.log(`  ${p.wordCount.toString().padStart(5)}  ${p.url}`);
}

console.log(`\nPares com sobreposição de 5-gramas acima de ${(threshold * 100).toFixed(0)}%:`);
let found = false;
for (let i = 0; i < pages.length; i++) {
  for (let j = i + 1; j < pages.length; j++) {
    const score = jaccard(pages[i].grams, pages[j].grams);
    if (score > threshold) {
      found = true;
      console.log(`  ${(score * 100).toFixed(1)}%  ${pages[i].url}  <->  ${pages[j].url}`);
    }
  }
}
if (!found) console.log('  Nenhum par acima do limiar.');
