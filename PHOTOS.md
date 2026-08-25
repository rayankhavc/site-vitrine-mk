# Photos du site

## Origine

Les photos actuelles viennent d'**Unsplash** (bibliothèque gratuite, licence
autorisant l'usage commercial sans attribution). Elles ont été choisies
volontairement pour ce qu'elles montrent : **matière et geste** — pâte
travaillée à la main, pains, comptoirs, farine.

## Ce qu'elles ne sont pas

Ce ne sont **pas** les produits des boulangeries. C'est un choix assumé :
une photo d'ambiance générique est honnête, une fausse photo de vitrine ne
l'est pas. Le client qui vient chercher exactement le gâteau vu en ligne
sera déçu, et les photos de la fiche Google — les vraies — s'affichent
juste à côté dans les résultats.

## Les photos à prendre pour remplacer

Par boulangerie, en lumière naturelle, sans flash :

1. **La vitrine de l'extérieur**, de face, en journée. C'est ce qui permet
   de reconnaître la boutique en arrivant. → remplace l'image de héros.
2. **Le comptoir garni**, tôt le matin quand tout est plein.
3. **Les pâtisseries orientales** en gros plan — c'est la spécialité, et
   aucune photo de stock ne la représente correctement.
4. **Les pains en rayon**, à hauteur d'yeux.
5. **L'équipe derrière le comptoir**, même simplement. C'est ce qui
   humanise le plus une page.

Format : portrait pour les gros plans, paysage pour la vitrine.
Les mêmes photos serviront aux fiches Google Business Profile.

## Comment les remplacer

Déposer les fichiers dans `src/assets/photos/` puis mettre à jour les
imports dans `src/data/bakeries.ts` (champ `hero` de chaque boulangerie) et
dans les pages concernées. Astro se charge de la conversion en WebP et des
tailles responsives.
