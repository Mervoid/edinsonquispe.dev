import { defineConfig } from 'astro/config';
import ghPages from '@astrojs/gh-pages';

export default defineConfig({
  site: 'https://TU_USUARIO.github.io',
  base: '/edinsonquispe.dev',
  adapter: ghPages()
});