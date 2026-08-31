// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  // Provisoire, le temps que mkboulangeries.fr soit réservé : voir le
  // commentaire de SITE.domain dans src/data/bakeries.ts. Les deux doivent
  // toujours dire la même chose.
  site: "https://maisonkhalifa.vercel.app",
  integrations: [sitemap()],
  build: {
    // CSS en ligne pour les petits fichiers : une requête de moins avant
    // le premier rendu, ce qui compte sur mobile en 4G.
    inlineStylesheets: "auto",
  },
});
