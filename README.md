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
src/pages/index.astro    accueil : choix de la boulangerie
src/pages/[slug].astro   une page par boulangerie, générée depuis les données
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
- **Suivi des conversions** : les clics « Appeler » et « Itinéraire » sont
  envoyés à Google Analytics (`appel_telephone`, `itineraire`) avec le nom
  de la boulangerie, pour mesurer ce que le site rapporte réellement.

## Ce qui reste à faire

1. **Photos** — le site est construit pour les recevoir. C'est le premier
   facteur de conversion sur un site de boulangerie.
2. **Fiches Google Business Profile** — le principal levier d'acquisition,
   davantage que le site lui-même. Notamment celle du Fournil du Sud, qui a
   très peu d'avis.
3. **Domaine** `mkboulangeries.fr` à réserver et brancher sur Vercel.
