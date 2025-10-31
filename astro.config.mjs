import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

export default defineConfig({
  site: 'https://mervoid.github.io',
  base: '/edinsonquispe.dev/',
  output: 'static',
  integrations: [react()]
});