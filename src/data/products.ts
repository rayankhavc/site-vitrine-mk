/**
 * Catalogue produits.
 *
 * Les prix viennent du gérant. Quelques-uns manquent encore (viennoiseries,
 * mille-feuille, paninis, quiches, pains spéciaux) : ils restent sans prix
 * plutôt qu'estimés. Un prix inventé sur un site de commerce se retourne
 * contre la boutique dès le premier client au comptoir — mieux vaut une
 * ligne sans prix qu'une ligne fausse.
 */

export type Product = {
  name: string;
  desc: string;
  /** Prix indicatif, ex. "1,20 €". Laisser vide tant qu'il n'est pas confirmé. */
  price?: string;
  /** Boutiques concernées ; vide = disponible partout. */
  only?: string[];
};

export type ProductCategory = {
  slug: string;
  title: string;
  lead: string;
  items: Product[];
};

export const categories: ProductCategory[] = [
  {
    slug: "pains",
    title: "Pains",
    lead:
      "Cuits au fil de la journée plutôt qu'en une seule fournée : à 8h comme à 18h, il reste du pain sorti du four il y a peu.",
    items: [
      { name: "Baguette de tradition", desc: "Farine sans additif, façonnée à la main, mie alvéolée et croûte fine.", price: "1,10 €" },
      { name: "Baguette blanche", desc: "La baguette de tous les jours, croustillante et régulière.", price: "1,00 €" },
      { name: "Pain de campagne", desc: "Une pointe de seigle, mie dense et goût légèrement acidulé. Se garde plusieurs jours.", price: "2,00 €" },
      { name: "Pain complet", desc: "Farine complète, riche en fibres, pour les tartines du matin.", price: "2,20 €" },
      { name: "Pain aux céréales", desc: "Mélange de graines — tournesol, lin, sésame — pour un pain nourrissant.", price: "2,20 €" },
      { name: "Pain viennois", desc: "Mie douce et sucrée, la préférée des enfants au goûter.", price: "2,50 €" },
      { name: "Pains spéciaux", desc: "Selon les jours : olives, noix, lardons, ou pain de mie maison." },
    ],
  },
  {
    slug: "viennoiseries",
    title: "Viennoiseries",
    lead: "Pur beurre, cuites sur place chaque matin.",
    items: [
      { name: "Croissant", desc: "Pur beurre, feuilletage levé le matin même." },
      { name: "Pain au chocolat", desc: "Deux barres de chocolat dans un feuilletage doré." },
      { name: "Pain aux raisins", desc: "Crème pâtissière et raisins, roulé en escargot." },
      { name: "Chausson aux pommes", desc: "Compote maison dans un feuilletage croustillant." },
      { name: "Brioche", desc: "Nature ou aux pépites, moelleuse et beurrée.", price: "6,00 €" },
    ],
  },
  {
    slug: "patisseries-francaises",
    title: "Pâtisseries françaises",
    lead: "Préparées chaque matin au laboratoire, en quantité limitée.",
    items: [
      { name: "Éclair", desc: "Chocolat ou café, crème pâtissière maison.", price: "2,50 €" },
      { name: "Mille-feuille", desc: "Trois feuilletages, crème vanille, glaçage marbré." },
      { name: "Tarte au citron meringuée", desc: "Citron franc et meringue légèrement dorée.", price: "3,00 €" },
      { name: "Flan pâtissier", desc: "Épais et vanillé, cuit en grande plaque.", price: "2,50 €" },
      { name: "Entremets", desc: "Selon la saison, à la part ou en format à partager.", price: "3,80 € la part" },
      { name: "Tartes aux fruits", desc: "Fraise, framboise, pomme, selon l'arrivage.", price: "2,80 €" },
    ],
  },
  {
    slug: "patisseries-orientales",
    title: "Pâtisseries orientales",
    lead:
      "Notre spécialité, façonnée à la main selon la tradition, au miel, aux amandes et à la fleur d'oranger.",
    items: [
      { name: "Cornes de gazelle", desc: "Pâte fine garnie de pâte d'amande parfumée à la fleur d'oranger.", price: "1,50 €" },
      { name: "Baklawa", desc: "Feuilles de brick, amandes ou pistaches, sirop de miel.", price: "1,50 €" },
      { name: "Makrout", desc: "Semoule et pâte de dattes, frit puis trempé dans le miel.", price: "1,50 €" },
      { name: "Assortiments", desc: "Plateaux mélangés à emporter, pour un dessert ou un cadeau." },
    ],
  },
  {
    slug: "snacking",
    title: "Snacking & formules du midi",
    lead: "Préparés sur place avec nos pains, à emporter pour la pause déjeuner.",
    items: [
      { name: "Sandwich froid", desc: "Sur baguette tradition, préparé dans la matinée.", price: "4,50 €" },
      { name: "Formule sandwich froid", desc: "Un sandwich froid et une boisson.", price: "6,00 €" },
      { name: "Formule du midi", desc: "Un plat chaud, une boisson et un dessert.", price: "8,00 €" },
      { name: "Sandwich chaud", desc: "Servi avec des frites et une boisson.", price: "8,00 €" },
      { name: "Paninis", desc: "Chauds, préparés à la commande." },
      { name: "Pizza margherita", desc: "À la part ou entière.", price: "8,90 €", only: ["au-fournil-du-sud"] },
      { name: "Autres pizzas", desc: "Selon la garniture.", price: "9,90 €", only: ["au-fournil-du-sud"] },
      { name: "Quiches et tartes salées", desc: "Selon les jours, à emporter chaud ou froid." },
    ],
  },
];

/** Questions réellement posées au comptoir, reprises telles quelles. */
export const faq: { q: string; a: string }[] = [
  {
    q: "Vos boulangeries sont-elles ouvertes le dimanche ?",
    a: "Oui, les trois boulangeries sont ouvertes le dimanche de 6h à 20h, comme tous les autres jours. Le seul jour de fermeture hebdomadaire est le vendredi.",
  },
  {
    q: "Quel jour êtes-vous fermés ?",
    a: "Le vendredi. Les trois boutiques — MK Boulangerie à Nantes, Au Fournil du Sillon et Au Fournil du Sud à Saint-Herblain — sont fermées ce jour-là et ouvertes les six autres jours de 6h à 20h.",
  },
  {
    q: "À quelle heure ouvrez-vous le matin ?",
    a: "À 6h, tous les jours sauf le vendredi. Le pain et les viennoiseries sont déjà sortis du four à l'ouverture.",
  },
  {
    q: "Peut-on commander un gâteau d'anniversaire ?",
    a: "Oui. Appelez directement la boulangerie de votre choix ou envoyez un message au 07 82 29 74 51 en précisant le nombre de parts, le parfum et la date. Comptez au minimum 48 heures à l'avance, et davantage pour les grandes pièces ou les week-ends chargés.",
  },
  {
    q: "Faites-vous des plateaux de pâtisseries orientales ?",
    a: "Oui, en assortiment ou par variété : cornes de gazelle, baklawas, makrouts. Les plateaux se commandent à l'avance, en particulier pour les fêtes et le Ramadan, où la demande est forte.",
  },
  {
    q: "Où se trouvent vos boulangeries ?",
    a: "MK Boulangerie & Pâtisserie se trouve 51 rue du Corps de Garde à Nantes, quartier Dervallières – Zola. Au Fournil du Sillon est 13 place des Thébaudières à Saint-Herblain, au pied du Sillon de Bretagne. Au Fournil du Sud est 1 boulevard Salvador Allende, également à Saint-Herblain.",
  },
  {
    q: "Proposez-vous des formules pour le déjeuner ?",
    a: "Oui, dans les trois boutiques : sandwichs sur baguette tradition, paninis chauds, quiches, et une formule comprenant un plat, une boisson et un dessert. Le Fournil du Sud propose également des pizzas.",
  },
  {
    q: "Vos pains sont-ils cuits sur place ?",
    a: "Oui, dans les trois boulangeries, et au fil de la journée plutôt qu'en une seule fournée du matin. C'est ce qui permet de trouver du pain récent aussi bien à 8h qu'en fin d'après-midi.",
  },
];
