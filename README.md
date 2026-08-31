# MK Boulangeries

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
src/assets/photos/       photos sources, converties en WebP au build
public/llms.txt          résumé factuel du site pour les assistants IA
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

## Ce qui reste à faire

1. **Les prix.** Le catalogue produits est volontairement sans prix : ils ne
   m'ont pas été communiqués, et un prix inventé se retourne contre la
   boutique au premier client. Le champ `price` de `src/data/products.ts`
   est prêt à les recevoir.
2. **Photos réelles** — voir `PHOTOS.md`. Les images actuelles sont des
   photos d'ambiance libres de droit, pas les produits de la maison.
3. **Fiches Google Business Profile** — le principal levier d'acquisition,
   davantage que le site lui-même. Notamment celle du Fournil du Sud, qui a
   très peu d'avis.
4. **Domaine** `mkboulangeries.fr` à réserver et brancher sur Vercel.

   En attendant, l'adresse qui fait autorité est celle du déploiement,
   `https://maisonkhalifa.vercel.app` : canoniques, Open Graph, données
   structurées, plan du site, `robots.txt` et `llms.txt` en découlent. Une
   canonique vers un domaine qui ne résout pas ne retarde pas
   l'indexation, elle l'empêche : Google ne peut pas atteindre l'adresse
   qu'on lui désigne comme la bonne.

   Le jour où le domaine est acheté et branché sur le projet Vercel,
   quatre endroits à corriger, et rien d'autre : `SITE.domain` dans
   `src/data/bakeries.ts`, `site` dans `astro.config.mjs`, la ligne
   `Sitemap:` de `public/robots.txt`, et les URL de `public/llms.txt`.
   Penser aussi à faire pointer les redirections des deux anciens sites
   Fournil vers ce domaine, et à mettre à jour l'étude de cas
   `mk-boulangeries` du portfolio.
