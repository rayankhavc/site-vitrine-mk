/**
 * Catalogue produits.
 *
 * ⚠ LES PRIX SONT VOLONTAIREMENT ABSENTS. Personne ne me les a donnés, et
 * un prix inventé sur un site de commerce se retourne contre la boutique
 * dès le premier client qui arrive au comptoir. Le champ `price` est prêt :
 * dès que le gérant donne ses tarifs, on les ajoute ici et ils s'affichent
 * partout, y compris dans les données structurées.
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
      { name: "Baguette de tradition", desc: "Farine sans additif, façonnée à la main, mie alvéolée et croûte fine." },
      { name: "Baguette blanche", desc: "La baguette de tous les jours, croustillante et régulière." },
      { name: "Pain de campagne", desc: "Une pointe de seigle, mie dense et goût légèrement acidulé. Se garde plusieurs jours." },
      { name: "Pain complet", desc: "Farine complète, riche en fibres, pour les tartines du matin." },
      { name: "Pain aux céréales", desc: "Mélange de graines — tournesol, lin, sésame — pour un pain nourrissant." },
      { name: "Pain viennois", desc: "Mie douce et sucrée, la préférée des enfants au goûter." },
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
      { name: "Brioche", desc: "Nature ou aux pépites, moelleuse et beurrée." },
    ],
  },
  {
    slug: "patisseries-francaises",
    title: "Pâtisseries françaises",
    lead: "Préparées chaque matin au laboratoire, en quantité limitée.",
    items: [
      { name: "Éclair", desc: "Chocolat ou café, crème pâtissière maison." },
      { name: "Mille-feuille", desc: "Trois feuilletages, crème vanille, glaçage marbré." },
      { name: "Tarte au citron meringuée", desc: "Citron franc et meringue légèrement dorée." },
      { name: "Flan pâtissier", desc: "Épais et vanillé, cuit en grande plaque." },
      { name: "Entremets", desc: "Selon la saison, à la part ou en format à partager." },
      { name: "Tartes aux fruits", desc: "Fraise, framboise, pomme, selon l'arrivage." },
    ],
  },
  {
    slug: "patisseries-orientales",
    title: "Pâtisseries orientales",
    lead:
      "Notre spécialité, façonnée à la main selon la tradition, au miel, aux amandes et à la fleur d'oranger.",
    items: [
      { name: "Cornes de gazelle", desc: "Pâte fine garnie de pâte d'amande parfumée à la fleur d'oranger." },
      { name: "Baklawa", desc: "Feuilles de brick, amandes ou pistaches, sirop de miel." },
      { name: "Makrout", desc: "Semoule et pâte de dattes, frit puis trempé dans le miel." },
      { name: "Assortiments", desc: "Plateaux mélangés à emporter, pour un dessert ou un cadeau." },
    ],
  },
  {
    slug: "snacking",
    title: "Snacking & formules du midi",
    lead: "Préparés sur place avec nos pains, à emporter pour la pause déjeuner.",
    items: [
      { name: "Sandwichs garnis", desc: "Sur baguette tradition, préparés dans la matinée." },
      { name: "Paninis", desc: "Chauds, préparés à la commande." },
      { name: "Pizzas", desc: "À la part ou entières.", only: ["au-fournil-du-sud"] },
      { name: "Formule du midi", desc: "Sandwich ou panini, boisson et dessert." },
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
