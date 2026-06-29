# Handoff : MK Boulangerie & Pâtisserie — Site vitrine one-page

## Vue d'ensemble
Site vitrine one-page premium pour **MK Boulangerie & Pâtisserie** à Nantes. Ambiance luxe oriental : fond noir profond, accents or, typographie Playfair Display. Le fichier `Maison Khalifa.dc.html` est une **référence de design haute-fidélité** — il montre l'apparence finale et les interactions souhaitées. La mission du développeur est de **recréer ce design dans le vrai codebase** (framework de son choix : Next.js, Astro, etc.) en respectant fidèlement les specs ci-dessous.

> ⚠️ Ce fichier HTML est une référence de design, pas du code de production. Ne pas le déployer directement.

---

## Fidelité
**Haute-fidélité (hifi)** — Couleurs, typographie, espacements et interactions tous finalisés. Recréer pixel-perfect.

---

## Stack recommandée
- **Next.js** (ou Astro pour un site statique) avec Tailwind CSS
- Google Fonts : Playfair Display, Cormorant Garamond, Inter
- Pas de librairie d'animation externe — CSS transitions + vanilla IntersectionObserver

---

## Design Tokens

### Couleurs
```
--bg-deep:       #080808   /* fond principal */
--bg-section:    #0D0D0D   /* fond sections alternées */
--bg-footer:     #050505   /* fond footer */
--gold:          #C9A260   /* or principal — accents, bordures, titres clés */
--gold-light:    #E2B97A   /* or clair — liens, sous-titres */
--cream:         #F5F0E8   /* texte principal */
--muted:         #888878   /* texte secondaire */
--border-gold:   rgba(201,162,96,0.2)   /* bordures cartes */
--border-subtle: rgba(201,162,96,0.12)  /* séparateurs */
--border-section:rgba(201,162,96,0.15)  /* colonnes spécialités */
```

### Typographie
```
Playfair Display — titres H1/H2/H3, monogramme MK (Google Fonts)
Cormorant Garamond italic — accroches, sous-titres (Google Fonts)
Inter 300 — corps de texte, labels, boutons

H1 : Playfair Display 500, clamp(64px, 12vw, 150px), line-height 0.98
H2 : Playfair Display 500, clamp(38px, 5vw, 58px)
H3 : Playfair Display 500, 28–34px
Accroche : Cormorant Garamond italic, 18px, letter-spacing 0.14em
Corps : Inter 300, 15–18px, line-height 1.6–1.7
```

### Espacements & layout
```
Max-width contenu : 1080–1180px, centré
Padding sections : 110–130px top/bottom, 48px left/right
Border-radius : 3px max (flat design)
Shadows : aucune
Gradients : aucun (sauf radial très subtil hero pour fondu bords)
```

---

## Sections

### 1. Nav fixe
- Position : `fixed top-0`, `z-50`, fond `rgba(8,8,8,0.82)` + `backdrop-blur`
- Bordure bas : `1px solid rgba(201,162,96,0.12)`
- Gauche : monogramme **MK** (Playfair Display 600, 30px, #C9A260) + "Boulangerie & Pâtisserie" (Cormorant italic, 16px, #888878)
- Droite : badge "Nantes · Sur commande" (Cormorant italic, 14px, masqué sous 760px) + bouton `09 81 72 45 22` (border 1px #C9A260, hover : bg #C9A260 text #080808)
- Animation au load : fade-in 0.4s

### 2. Hero
- Hauteur : `min-height: 100vh`, centré flex
- Background : motif géométrique SVG arabesque (étoile octogonale lattice), `opacity: 0.08`, `background-size: 120px`
- Fondu radial : `radial-gradient(ellipse 70% 60% at 50% 42%, transparent 0%, #080808 78%)`
- Contenu (centré) :
  - Accroche : "Nantes" — Cormorant italic, 18px, #888878, lettre-spacing 0.18em
  - H1 sur 2 lignes :
    - "Maison" — Playfair 500, clamp(64px,12vw,150px), #F5F0E8
    - "Khalifa" — Playfair italic 500, même taille, #C9A260
  - Séparateur : ligne `1px` #C9A260, largeur `min(420px, 70vw)`
  - Sous-titre : "L'art de la pâtisserie orientale & française" — Cormorant italic, clamp(22px,3vw,30px)
  - 2 CTA : "Découvrir" (bg #C9A260 / hover #E2B97A) + "Commander" (border #C9A260 / hover bg #C9A260)
- Animations :
  - Accroche : `fadeUp 0.6s ease-out delay 0.1s`
  - "Maison" : `wordIn 0.7s ease-out delay 0.35s`
  - "Khalifa" : `wordIn 0.7s ease-out delay 0.55s`
  - Ligne or : `scaleX 0→1, transform-origin: left, 0.8s delay 0.95s`
  - Sous-titre + CTA : `fadeUp delay 1.1s / 1.3s`

### 3. Spécialités premium (bg #0D0D0D)
- Titre de section : accroche Cormorant italic + H2 Playfair
- Grid 3 colonnes, séparées par `1px rgba(201,162,96,0.15)`
- Chaque carte : `border: 1px solid rgba(201,162,96,0.2)`, padding 48px 38px
  - Numéro : Playfair italic, 22px, #C9A260
  - Titre : Playfair 500, 27px
  - Séparateur : 42px × 1px, rgba(201,162,96,0.4)
  - Items : Inter 300, 15px, #888878
  - Hover : `translateY(-4px)`, border → `rgba(201,162,96,0.5)`, transition 0.3s
- Stagger scroll reveal : délai 0.1s entre chaque carte

**Contenu des 3 cartes :**
| N° | Titre | Items |
|----|-------|-------|
| 01 | Spécialités orientales | Pain à la semoule & msemen / Baklawa & cornes de gazelle / Makroud & zlabia |
| 02 | Pâtisserie française | Éclairs & choux / Entremets & trompe-l'œil / Pâtisserie sèche de qualité |
| 03 | Pains & Viennoiserie | Pains à diverses farines (bûcheron, aux graines) / Brioches artisanales / Viennoiseries pur beurre |

### 4. Commandes sur mesure
- Fond #080808, centré, max-width 880px
- H2 Playfair, 2 lignes : "Vos occasions méritent / le meilleur"
- Séparateur or 90px
- Corps : "Pièces montées, plateaux orientaux, gâteaux d'anniversaire sur mesure."
- 2 colonnes info séparées par `1px rgba(201,162,96,0.12)` :
  - "Retrait en boutique" — 51 Rue du Corps de Garde, Nantes
  - "Sur commande" — Pour les pièces les plus élaborées
- CTA principal : "Appeler pour commander" → `tel:0981724522`, même style bouton or

### 5. Horaires + Adresse (bg #0D0D0D)
- 2 colonnes : tableau horaires | carte adresse
- Tableau horaires : `border-bottom: 1px solid rgba(201,162,96,0.12)` sur chaque ligne
  - Lun–Jeu + Sam–Dim : 07:00–20:00, couleur #F5F0E8
  - **Vendredi : Fermé**, couleur #C9A260 (pas rouge)
- Carte droite : `border: 1px solid rgba(201,162,96,0.3)`, padding 48px 44px
  - Adresse : 51 Rue du Corps de Garde, 44100 Nantes
  - Tél : 09 81 72 45 22 (Playfair 24px, #C9A260, cliquable)
  - Bouton "Voir sur Maps" → Google Maps, style border or

### 6. Footer (bg #050505)
- Bordure top : `1px solid rgba(201,162,96,0.2)`
- Monogramme MK centré : Playfair Display 600, 40px, #C9A260
- Tagline : Cormorant italic, "Maison Khalifa · Boulangerie & Pâtisserie · Nantes"
- Copyright : Inter 300, 13px, #555

---

## Animations

Tout en **CSS transitions + vanilla IntersectionObserver**, pas de lib externe.

```
@keyframes wordIn     { from { opacity:0; transform:translateY(0.4em) } to { opacity:1; transform:translateY(0) } }
@keyframes lineGrow   { from { transform:scaleX(0) } to { transform:scaleX(1) } }
@keyframes fadeUp     { from { opacity:0; transform:translateY(18px) } to { opacity:1; transform:translateY(0) } }
@keyframes navIn      { from { opacity:0 } to { opacity:1 } }
```

**Scroll reveal (IntersectionObserver) :**
- Initial : `opacity:0; transform:translateY(30px); transition: opacity 0.6s ease-out, transform 0.6s ease-out`
- À l'entrée dans le viewport : `opacity:1; transform:translateY(0)`
- Stagger sur les 3 cartes spécialités : `transition-delay: 0s / 0.1s / 0.2s`
- Threshold : 0.12, rootMargin : `0px 0px -8% 0px`

---

## Informations établissement

```
Nom       : MK Boulangerie & Pâtisserie
Adresse   : 51 Rue du Corps de Garde, 44100 Nantes
Téléphone : 09 81 72 45 22
Horaires  : Lun–Jeu + Sam–Dim 07:00–20:00 / Vendredi fermé
```

---

## Assets
- Aucune image pour l'instant — prévoir des emplacements pour photos des produits (hero background, cartes spécialités)
- Motif arabesque : SVG inline généré (étoile octogonale lattice, stroke #C9A260, opacity 0.08)
- Police Google Fonts : [lien](https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Cormorant+Garamond:ital,wght@0,400;1,400;1,500&family=Inter:wght@300;400;500&display=swap)

## Fichiers

```
design_handoff_mk_boulangerie/
├── README.md                ← ce fichier
└── Maison Khalifa.dc.html   ← référence design haute-fidélité (ouvrir dans un navigateur)
```
