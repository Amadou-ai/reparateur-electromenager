// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  vite: {
    server: {
      // Autorise l'accès via un tunnel (localtunnel, ngrok...) pour tester
      // le site depuis un téléphone. En dev uniquement.
      allowedHosts: true,
    },
  },
});