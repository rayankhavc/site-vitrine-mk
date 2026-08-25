/**
 * SOURCE UNIQUE DE VÉRITÉ
 * ------------------------------------------------------------------
 * Toutes les infos des 3 boulangeries sont ici, et NULLE PART AILLEURS.
 * Pour changer un horaire, un téléphone ou une adresse : c'est ce
 * fichier, et seulement ce fichier. Le reste du site se met à jour tout
 * seul (pages, plans, données Google, footer, horaires en temps réel).
 *
 * Les coordonnées GPS ont été relevées sur OpenStreetMap au numéro de rue
 * près : elles servent aux données structurées et aux itinéraires, une
 * approximation enverrait des clients au mauvais endroit.
 */

import type { ImageMetadata } from "astro";
import painsRustiques from "../assets/photos/pains-rustiques.jpg";
import baguettesPapier from "../assets/photos/baguettes-papier.jpg";
import croissantFarine from "../assets/photos/croissant-farine.jpg";

export const SITE = {
  name: "MK Boulangeries",
  domain: "https://mkboulangeries.fr",
  ga: "G-MFFMYTCF6R",
  legalName: "MK",
  /** Ligne mobile qui reçoit les commandes écrites (WhatsApp et SMS). */
  contactMobile: "07 82 29 74 51",
  contactWhatsApp: "33782297451",
};

/** Horaires communs aux 3 boutiques : 6h–20h, fermé le vendredi. */
const HORAIRES_STANDARD = [
  { day: "Lundi", open: "06:00", close: "20:00" },
  { day: "Mardi", open: "06:00", close: "20:00" },
  { day: "Mercredi", open: "06:00", close: "20:00" },
  { day: "Jeudi", open: "06:00", close: "20:00" },
  { day: "Vendredi", open: null, close: null },
  { day: "Samedi", open: "06:00", close: "20:00" },
  { day: "Dimanche", open: "06:00", close: "20:00" },
] as const;

export type Hours = typeof HORAIRES_STANDARD;

export type Bakery = {
  slug: string;
  name: string;
  /** Découpage du nom pour la mise en valeur typographique du logo. */
  logo: { before: string; accent: string; after: string };
  city: string;
  district: string;
  street: string;
  postalCode: string;
  phone: string;
  phoneHref: string;
  geo: { lat: number; lng: number };
  /** Accent couleur propre à la boutique. */
  accent: string;
  accentSoft: string;
  tagline: string;
  intro: string;
  /** Texte propre au quartier : c'est lui qui fait ranker la page. */
  neighbourhood: string;
  hero: ImageMetadata;
  heroAlt: string;
  hours: Hours;
  specialties: { title: string; desc: string; tag: string }[];
  /** Fiche Google Business Profile — lien vers les avis, jamais figés en dur. */
  googleReviewsUrl: string;
  mapsUrl: string;
};

const maps = (q: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
const reviews = (q: string) =>
  `https://www.google.com/search?q=${encodeURIComponent(q + " avis")}`;

export const bakeries: Bakery[] = [
  {
    slug: "mk-nantes",
    name: "MK Boulangerie & Pâtisserie",
    logo: { before: "MK ", accent: "Boulangerie", after: " & Pâtisserie" },
    city: "Nantes",
    district: "Dervallières – Zola",
    street: "51 Rue du Corps de Garde",
    postalCode: "44100",
    phone: "09 81 72 45 22",
    phoneHref: "tel:0981724522",
    geo: { lat: 47.2129456, lng: -1.5976006 },
    accent: "#C9A260",
    accentSoft: "#E2B97A",
    tagline: "La maison de Nantes",
    intro:
      "Notre boulangerie nantaise, rue du Corps de Garde. Pains cuits tout au long de la journée, pâtisseries maison et formules du midi à emporter.",
    neighbourhood:
      "Rue du Corps de Garde, dans le quartier des Dervallières – Zola, à l'ouest de Nantes. Une boulangerie de quartier au sens propre : on y vient à pied, le matin avant le travail ou en fin de journée, et le pain sort du four toute la journée plutôt qu'en une seule fournée.",
    hero: painsRustiques,
    heroAlt: "Pains de campagne et épis de blé sur un plan de travail fariné",
    hours: HORAIRES_STANDARD,
    specialties: [
      {
        title: "Pains artisanaux",
        desc: "Baguettes de tradition, pains spéciaux et viennoiseries pur beurre, cuits au fil de la journée.",
        tag: "Cuit sur place",
      },
      {
        title: "Pâtisseries maison",
        desc: "Pâtisseries françaises et orientales préparées chaque matin dans notre laboratoire.",
        tag: "Fait maison",
      },
      {
        title: "Snacking & Sandwichs",
        desc: "Sandwichs garnis, paninis et formules du midi, préparés sur place avec nos pains.",
        tag: "Formule midi",
      },
    ],
    googleReviewsUrl: reviews("MK Boulangerie Pâtisserie 51 Rue du Corps de Garde Nantes"),
    mapsUrl: maps("MK Boulangerie 51 Rue du Corps de Garde 44100 Nantes"),
  },
  {
    slug: "au-fournil-du-sillon",
    name: "Au Fournil du Sillon",
    logo: { before: "Au ", accent: "Fournil", after: " du Sillon" },
    city: "Saint-Herblain",
    district: "Les Thébaudières · Sillon de Bretagne",
    street: "13 Place des Thébaudières",
    postalCode: "44800",
    phone: "09 73 60 10 07",
    phoneHref: "tel:0973601007",
    geo: { lat: 47.2441206, lng: -1.6062359 },
    accent: "#C97B4A",
    accentSoft: "#E09A68",
    tagline: "Place des Thébaudières",
    intro:
      "Au cœur des Thébaudières, une boulangerie de quartier ouverte dès 6h. Pains, viennoiseries et pâtisseries orientales préparés maison.",
    neighbourhood:
      "Place des Thébaudières, au pied du Sillon de Bretagne — le quartier qui donne son nom à la boulangerie. On ouvre à 6h pour ceux qui partent tôt, et la place reste le passage obligé du quartier toute la journée.",
    hero: baguettesPapier,
    heroAlt: "Baguettes de tradition dans leur sachet papier, en sortie de four",
    hours: HORAIRES_STANDARD,
    specialties: [
      {
        title: "Pâtisseries orientales",
        desc: "Cornes de gazelle, baklavas et makrouts préparés maison selon la tradition, au miel et aux amandes.",
        tag: "Fait maison",
      },
      {
        title: "Pains artisanaux",
        desc: "Baguettes de tradition, pains spéciaux et viennoiseries cuits sur place toute la journée.",
        tag: "Cuit sur place",
      },
      {
        title: "Snacking & Sandwichs",
        desc: "Sandwichs frais, paninis et formules du midi composés chaque jour avec nos pains.",
        tag: "Formule midi",
      },
    ],
    googleReviewsUrl: reviews("Au Fournil du Sillon Place des Thébaudières Saint-Herblain"),
    mapsUrl: maps("Au Fournil du Sillon 13 Place des Thébaudières 44800 Saint-Herblain"),
  },
  {
    slug: "au-fournil-du-sud",
    name: "Au Fournil du Sud",
    logo: { before: "Au ", accent: "Fournil", after: " du Sud" },
    city: "Saint-Herblain",
    district: "La Harlière · Bd Salvador Allende",
    street: "1 Boulevard Salvador Allende",
    postalCode: "44800",
    phone: "02 28 03 12 42",
    phoneHref: "tel:0228031242",
    geo: { lat: 47.2144688, lng: -1.6084201 },
    accent: "#5AAF7E",
    accentSoft: "#6CC090",
    tagline: "Au sud de Saint-Herblain",
    intro:
      "Boulangerie, pâtisserie et snacking au sud de Saint-Herblain. Pâtisseries orientales, pains artisanaux et formules du midi.",
    neighbourhood:
      "Boulevard Salvador Allende, dans le quartier de la Harlière, au sud de Saint-Herblain. La boutique la plus tournée vers le snacking des trois : sandwichs, paninis et pizzas préparés sur place pour la pause du midi.",
    hero: croissantFarine,
    heroAlt: "Croissant pur beurre saupoudré de farine sur une ardoise sombre",
    hours: HORAIRES_STANDARD,
    specialties: [
      {
        title: "Pâtisseries orientales",
        desc: "Cornes de gazelle, baklawas, makrouts et douceurs au miel et aux amandes, préparées à la main chaque jour.",
        tag: "Fait maison",
      },
      {
        title: "Snacking & Sandwichs",
        desc: "Sandwichs garnis, paninis, pizzas et formules du midi à emporter, frais et préparés sur place.",
        tag: "Formule midi",
      },
      {
        title: "Pains artisanaux",
        desc: "Baguettes de tradition, pains spéciaux et viennoiseries pur beurre, cuits au fil de la journée.",
        tag: "Cuit sur place",
      },
    ],
    googleReviewsUrl: reviews("Au Fournil du Sud Boulevard Salvador Allende Saint-Herblain"),
    mapsUrl: maps("Au Fournil du Sud 1 Boulevard Salvador Allende 44800 Saint-Herblain"),
  },
];

export const getBakery = (slug: string) =>
  bakeries.find((b) => b.slug === slug)!;

/** "06:00" → "6h", "07:30" → "7h30" : on écrit l'heure comme on la dit. */
export function prettyTime(hhmm: string): string {
  const [h, m] = hhmm.split(":").map(Number);
  return m === 0 ? `${h}h` : `${h}h${String(m).padStart(2, "0")}`;
}

/** `openingHours` au format schema.org, dérivé des horaires ci-dessus. */
export function schemaHours(hours: Hours): string[] {
  const codes = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
  return hours
    .map((h, i) => (h.open ? `${codes[i]} ${h.open}-${h.close}` : null))
    .filter((v): v is string => v !== null);
}

/** Lien WhatsApp avec message pré-rempli. */
export function whatsappUrl(message: string): string {
  return `https://wa.me/${SITE.contactWhatsApp}?text=${encodeURIComponent(message)}`;
}

/** Lien SMS pré-rempli, en repli pour qui n'a pas WhatsApp. */
export function smsUrl(message: string): string {
  const number = "+" + SITE.contactWhatsApp;
  return `sms:${number}?&body=${encodeURIComponent(message)}`;
}
