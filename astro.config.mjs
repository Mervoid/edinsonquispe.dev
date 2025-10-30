import { defineConfig } from 'astro/config';
import ghPages from '@astrojs/gh-pages';

export default defineConfig({
  site: 'https://Mervoid.github.io',
  base: '/edinsonquispe.dev',
  adapter: ghPages()
});