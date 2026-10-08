import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://vidracariabotucatu.com.br', // Substituir pelo domínio final
  integrations: [tailwind(), sitemap()]
});
