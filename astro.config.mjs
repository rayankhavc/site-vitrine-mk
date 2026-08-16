// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://mkboulangeries.fr",
  integrations: [sitemap()],
  build: {
    // CSS en ligne pour les petits fichiers : une requête de moins avant
    // le premier rendu, ce qui compte sur mobile en 4G.
    inlineStylesheets: "auto",
  },
});
