// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

/**
 * ADRESSE CANONIQUE DU SITE — le seul endroit où elle est écrite.
 *
 * Tout en dérive : balises canonical, sitemap, robots.txt, llms.txt et les
 * URL des données structurées. Le jour où mkboulangeries.fr est acheté et
 * branché sur Vercel, on change cette ligne et c'est tout.
 *
 * Elle a d'abord pointé vers mkboulangeries.fr, qui n'existait pas encore :
 * les moteurs et les robots des IA suivaient donc des liens morts, et
 * aucune page ne pouvait être indexée correctement.
 */
const SITE_URL = "https://maisonkhalifa.vercel.app";

export default defineConfig({
  site: SITE_URL,
  integrations: [sitemap()],
  build: {
    // CSS en ligne pour les petits fichiers : une requête de moins avant
    // le premier rendu, ce qui compte sur mobile en 4G.
    inlineStylesheets: "auto",
  },
});
