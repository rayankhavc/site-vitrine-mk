# MK Boulangeries — mkboulangeries.fr

Site des trois boulangeries : **MK Boulangerie & Pâtisserie** (Nantes),
**Au Fournil du Sillon** et **Au Fournil du Sud** (Saint-Herblain).

Un seul site, une page par boulangerie. Les trois pages sont autonomes
(adresse, horaires, téléphone, données structurées propres) pour pouvoir
ressortir séparément sur Google, tout en partageant l'autorité d'un seul
domaine.

## Modifier les informations

**Tout est dans `src/data/bakeries.ts`, et nulle part ailleurs.**

Horaires, téléphones, adresses, spécialités : on modifie ce fichier, et le
reste du site suit — pages, plans Google, données structurées, footer,
badge « ouvert / fermé ». Aucune information n'est recopiée ailleurs.

Les horaires actuels sont les mêmes pour les trois : **6h – 20h tous les
jours, fermé le vendredi**.

### À faire valider

- Le numéro de rue du Fournil du Sud (« 1 Boulevard Salvador Allende »)
  vient d'un annuaire, pas de la fiche Google. À confirmer.

### Ce qui n'est volontairement pas dans le site

Les **notes et le nombre d'avis Google** ne sont pas écrits en dur : ils
changent en permanence et deviendraient faux en quelques semaines. Chaque
page renvoie vers la fiche Google, toujours à jour et sans maintenance.

## Développement

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # génère dist/
npm run preview  # sert le build
```

## Structure

```
src/data/bakeries.ts     source unique de vérité (les 3 boutiques)
src/layouts/Base.astro   <head>, styles globaux, JS partagé
src/components/          Nav, Footer, Status (ouvert/fermé), CallBar
src/data/products.ts     catalogue produits et questions fréquentes
src/pages/index.astro    accueil : choix de la boulangerie
src/pages/[slug].astro   une page par boulangerie, générée depuis les données
src/pages/nos-produits.astro   catalogue complet
src/pages/commandes.astro      commandes sur mesure et délais
src/pages/faq.astro            questions fréquentes (données FAQPage)
src/pages/mentions-legales.astro   éditeur, hébergeur, crédits
src/pages/confidentialite.astro    données personnelles et cookies
src/pages/robots.txt.ts        robots.txt généré (URL du sitemap correcte)
src/pages/llms.txt.ts          résumé factuel généré pour les assistants IA
src/layouts/LegalPage.astro    gabarit des pages légales
src/assets/photos/       photos sources, converties en WebP au build
```

## Choix techniques

- **Astro en statique** : pages HTML pré-générées, très peu de JavaScript.
  Le site se charge vite même en 4G devant la boutique.
- **Barre d'appel collante sur mobile** : sur un site de boulangerie,
  l'action utile est un appel ou un itinéraire, jamais un formulaire. Elle
  reste à portée de pouce en permanence.
- **Badge ouvert / fermé en temps réel**, calculé à l'heure de Paris quelle
  que soit la zone du visiteur. Il est masqué tant que le JavaScript n'a
  pas répondu, pour ne jamais afficher « Ouvert » à tort.
- **Le contenu reste lisible sans JavaScript** : les animations
  d'apparition ne s'activent que si le JS tourne.
- **Données structurées `Bakery`** par boutique, avec adresse et horaires
  dérivés automatiquement des données.
- **Suivi des conversions** : les clics « Appeler », « Itinéraire » et
  « Écrire » sont envoyés à Google Analytics (`appel_telephone`,
  `itineraire`, `message_ecrit`) avec le nom de la boulangerie, pour
  mesurer ce que le site rapporte réellement.
- **Commandes écrites** : boutons WhatsApp et SMS avec message pré-rempli,
  vers le 07 82 29 74 51. Beaucoup de clients n'osent pas appeler.
- **Transitions de page natives** (View Transitions), parallaxe sur les
  images de héros et révélation des images au défilement. Tout est
  désactivé si le visiteur a demandé moins d'animations, et la parallaxe
  ne s'active qu'au-delà de 900 px de large pour ne pas coûter d'images
  par seconde sur mobile.
- **Coordonnées GPS réelles** relevées sur OpenStreetMap, présentes dans
  les données structurées de chaque boutique.
- **Lisible par les robots des IA** : le site est en HTML statique, donc
  GPTBot, ClaudeBot, PerplexityBot et consorts lisent tout le contenu sans
  exécuter de JavaScript — c'est ce qui bloque la plupart des sites récents
  construits côté navigateur. `robots.txt` les autorise nommément et
  `llms.txt` leur donne un résumé factuel généré depuis les mêmes données
  que les pages, pour qu'il ne puisse jamais contredire le site.
- **Prix dans les données structurées** (`Offer`), pour les produits dont le
  prix est connu. Ceux qui n'en ont pas sont publiés sans offre plutôt
  qu'avec une estimation : un prix inventé serait ensuite cité comme un
  fait par les moteurs et les assistants.

## Adresse canonique du site

Elle est déclarée **une seule fois**, dans `astro.config.mjs` (`SITE_URL`).
Les balises `canonical`, le sitemap, `robots.txt`, `llms.txt` et les URL des
données structurées en dérivent tous.

Elle pointe actuellement vers `https://maisonkhalifa.vercel.app`. Le jour où
`mkboulangeries.fr` est acheté et branché sur Vercel : changer cette ligne,
et rien d'autre.

## Ce qui reste à faire

1. **Bandeau de consentement aux cookies.** Google Analytics dépose des
   cookies ; la CNIL impose de recueillir l'accord du visiteur au préalable.
   Le site n'a pas encore ce bandeau — la politique de confidentialité le
   dit franchement et donne les moyens de refuser. À mettre en conformité,
   soit par un bandeau, soit en passant à une mesure sans cookie.
2. **Capital social et numéro de TVA** dans les mentions légales :
   obligatoires pour une SAS, absents des données publiques, à reprendre du
   Kbis. Un encart le signale sur la page.
3. **Prix manquants** : viennoiseries, mille-feuille, paninis, quiches,
   pains spéciaux. Ces produits s'affichent sans prix, ce qui est correct —
   il suffit de renseigner leur champ `price` dans `src/data/products.ts`.
4. **Photos réelles** — voir `PHOTOS.md`. Les images actuelles sont des
   photos d'ambiance libres de droit, pas les produits de la maison.
5. **Fiches Google Business Profile** — le principal levier d'acquisition,
   davantage que le site lui-même. Notamment celle du Fournil du Sud, qui a
   très peu d'avis.
6. **Vérifier les entités juridiques** des deux Fournils : les données
   publiques ne rattachent qu'un établissement ouvert à la SAS MK. Si les
   deux autres relèvent d'autres sociétés, les mentions légales devront le
   refléter.
