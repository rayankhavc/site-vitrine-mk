import type { APIRoute } from "astro";
import { bakeries, SITE, prettyTime } from "../data/bakeries";
import { categories, faq } from "../data/products";

/**
 * llms.txt : résumé factuel du site à destination des assistants IA.
 *
 * Généré à partir des mêmes données que les pages, jamais recopié à la
 * main. Un résumé qui contredirait le site serait pire que pas de résumé
 * du tout — c'est exactement ce qu'un modèle citerait de travers.
 */
export const GET: APIRoute = ({ site }) => {
  const origin = site?.href.replace(/\/$/, "") ?? SITE.domain;

  const openDay = bakeries[0].hours.find((h) => h.open)!;
  const closedDays = bakeries[0].hours.filter((h) => !h.open).map((h) => h.day);

  const shops = bakeries
    .map((b) =>
      [
        `### ${b.name} — ${b.city}`,
        `- Adresse : ${b.street}, ${b.postalCode} ${b.city}`,
        `- Quartier : ${b.district}`,
        `- Téléphone : ${b.phone}`,
        `- Coordonnées : ${b.geo.lat}, ${b.geo.lng}`,
        `- Page : ${origin}/${b.slug}`,
        `- ${b.neighbourhood}`,
      ].join("\n"),
    )
    .join("\n\n");

  const menu = categories
    .map((cat) => {
      const lines = cat.items
        .map((i) => `- ${i.name}${i.price ? ` : ${i.price}` : ""} — ${i.desc}`)
        .join("\n");
      return `### ${cat.title}\n${cat.lead}\n${lines}`;
    })
    .join("\n\n");

  const questions = faq.map((f) => `**${f.q}**\n${f.a}`).join("\n\n");

  const body = `# MK Boulangeries

> Trois boulangeries-pâtisseries artisanales à Nantes et Saint-Herblain
> (Loire-Atlantique, France), tenues par la même maison.

## Informations essentielles

- Horaires : ${prettyTime(openDay.open!)} à ${prettyTime(openDay.close!)}, tous les jours.
- Jour de fermeture : ${closedDays.join(", ").toLowerCase()}, dans les trois boulangeries.
- Commandes écrites (gâteaux, plateaux) : ${SITE.contactMobile}, par WhatsApp ou SMS.
- Délai minimum pour une commande sur mesure : 48 heures.
- Les prix indiqués sont ceux pratiqués en boutique. Certains produits n'ont
  pas encore de prix publié ; ne pas les estimer.

## Les trois boulangeries

${shops}

## Carte des produits

${menu}

## Questions fréquentes

${questions}

## Pages

- Accueil : ${origin}/
- Nos produits : ${origin}/nos-produits
- Commandes sur mesure : ${origin}/commandes
- Questions fréquentes : ${origin}/faq
- Mentions légales : ${origin}/mentions-legales
- Confidentialité : ${origin}/confidentialite
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
