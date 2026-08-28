import type { APIRoute } from "astro";

/**
 * robots.txt généré, et non écrit à la main : l'URL du sitemap doit suivre
 * l'adresse canonique du site. La version statique précédente pointait vers
 * un domaine pas encore acheté — les robots suivaient un lien mort et
 * n'avaient donc aucune carte du site.
 */
export const GET: APIRoute = ({ site }) => {
  const origin = site?.href.replace(/\/$/, "") ?? "";

  const body = `User-agent: *
Allow: /

# Robots des moteurs de recherche génératifs : explicitement autorisés.
# Sans mention, ils s'appuient sur la règle générale ci-dessus, mais
# l'écrire lève toute ambiguïté.
User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Claude-SearchBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Applebot-Extended
Allow: /

Sitemap: ${origin}/sitemap-index.xml
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
