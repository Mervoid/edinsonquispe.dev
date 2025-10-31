import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

export default defineConfig({
  site: 'https://edinsonquispe.dev',
  base: '/',
  output: 'static',
  integrations: [react()]
});