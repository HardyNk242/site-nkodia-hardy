# CLAUDE.md — Référence rapide du projet

## Identité du projet
Site académique de **Dr. Nkodia Hardy Medry Dieu-Veil**, géologue structuraliste.  
URL : **www.nkodiahardy.com** (domaine Squarespace → Vercel via CNAME)  
Repo GitHub : `HardyNk242/site-nkodia-hardy` (branche `main` → déploiement Vercel auto)

---

## Stack technique
| Couche | Technologie |
|---|---|
| Framework | Next.js 14.2.35 — App Router, SSG |
| Style | Tailwind CSS v3 + `@layer components` dans `globals.css` |
| Fonts | Oswald (titres), Open Sans (corps), Bitter (citations) — Google Fonts via `next/font` |
| Images | `next/image` avec `fill` + `sizes` partout |
| Langue | Contexte React `LanguageContext` — `useLang()` → `T({fr, en})` |
| Déploiement | Vercel (push main → build automatique) |

---

## Palette de couleurs (`tailwind.config.js`)
```js
corail:      "#C2A88D"   // grès ensoleillé — accent principal (boutons, liens, barres)
"corail-dk": "#A8906B"   // hover des boutons corail
encre:       "#F4F1ED"   // calcaire blanc — texte principal
"encre-lt":  "#A6A29C"   // texte secondaire / muted
clair:       "#2A2B2A"   // basalte sombre — fond principal du body
surface:     "#3A3A38"   // roche weatherée — fond des cartes
muted:       "#A6A29C"   // alias encre-lt
sombre:      "#1A1C1A"   // très sombre — footer, sections dark
```
`body { background: #2A2B2A; color: #F4F1ED; }` dans `globals.css`.

---

## Structure des fichiers clés

```
app/
  page.js                  ← Accueil (hero + citation + pubs récentes + journaux + actualités)
  actualites/[slug]/page.js ← Détail d'une actualité (compte-rendu + galerie photos)
  publications/page.js     ← Liste complète des publications avec "En bref"
  recherches/page.js       ← Thèmes de recherche
  equipe/page.js           ← Collaborateurs
  cv/page.js               ← Curriculum vitae
  cours/page.js            ← Liste des cours
  cours/[slug]/page.js     ← Détail d'un cours
  cours/[slug]/quiz/[n]/page.js  ← Quiz surveillé (QuizInteractif)
  globals.css              ← Base + composants Tailwind (.carte, .btn-corail, etc.)
  layout.js                ← Navbar + Footer + LanguageProvider

components/
  HeroAccueil.js           ← Hero page d'accueil (hero-bg2.jpg + portrait + card)
  Hero.js                  ← Hero générique pour les autres pages
  Navbar.js                ← Navigation sticky (dark, bg-clair)
  Footer.js                ← Footer (bg-sombre)
  ImageCarousel.js         ← Carrousel horizontal (prop `href` optionnel par item → click-through)
  CoursDetail.js           ← Détail cours + quiz modal + exercices
  Quiz.js                  ← Quiz modal (inline, non surveillé)
  QuizInteractif.js        ← Quiz surveillé anti-triche + webhook Google Sheets
  PdfViewer.js             ← Visionneuse PDF embedée

data/
  site.js                  ← TOUTES les données éditoriales (profil, pubs, équipe, CV…)
  translations.js          ← Chaînes UI bilingues FR/EN (tr.home.xxx, tr.nav.xxx…)
  quizzes/                 ← Fichiers JSON des quiz (chapitre1..6, tp-tectonique-1..4)

public/images/             ← Toutes les images statiques
  hero-bg2.jpg             ← Fond hero accueil (rock texture, 100% width sans crop)
  photo-profil-new.jpg     ← Photo profil (portrait hero + page CV)
  ResearchGate_icon_SVG.svg.png  ← Logo RG (PNG)
  Google_Scholar_logo.svg.png    ← Logo Scholar (PNG)
  figure-pub-2026-korea-stress.png  ← Figure Tectonophysics 2026
  figure-pub-2026.jpg      ← Figure IJGeoP 2026
  figure-pub-2025.jpg      ← Figure Tectonics 2025
  Actualité_Fieldwork_2025-02-04/  ← 13 photos terrain Belgique-France fév. 2025
  equipe-*.jpg             ← Portraits équipe
```

---

## Composants CSS réutilisables (`globals.css`)
| Classe | Usage |
|---|---|
| `.titre-section` | Titre h2 de section (Oswald, uppercase, 3xl-4xl) |
| `.barre-corail` | Barre décorative sandstone sous un titre |
| `.lien-corail` | Lien inline couleur accent |
| `.btn-corail` | Bouton principal (fond sandstone) |
| `.btn-contour` | Bouton outline (bord encre, hover sandstone) |
| `.carte` | Carte avec fond `surface`, ombre, hover lift |
| `.tag` | Chip texte discret |
| `.tag-corail` | Chip couleur accent |

---

## Système de traduction
```js
// Dans n'importe quel composant client :
const { T } = useLang();
T({ fr: "Texte français", en: "English text" })  // retourne la bonne langue
T(tr.home.profil)  // via l'objet tr dans data/translations.js
```
`T()` accepte aussi une chaîne simple (retournée telle quelle).

---

## Données éditoriales — `data/site.js`

### Ajouter une publication récente (homepage)
```js
// Tableau publicationsRecentes — max 3 éléments affichés en grid lg:3 colonnes
{
  annee: 2026,
  titre: "Titre de l'article",
  revue: "Nom Revue, vol(n), pages",
  auteurs: "Nkodia H. M. D.-V., ...",
  doi: "10.xxxx/xxxxx",
  image: "/images/figure-pub-XXXX.jpg",  // optionnel
  resume: { fr: "...", en: "..." },       // optionnel — "En bref" homepage
}
```

### Ajouter une publication à la liste complète (`publications/page.js`)
```js
{
  type: "Article",  // Article | Communication | Thèse | Mémoire | Livre | Jeu de données
  ref: "Référence complète au format Chicago/APA",
  doi: "10.xxxx/xxxxx",
  image: "/images/figure.jpg",     // optionnel — affichée full-width (object-contain)
  badge: "In Press",               // optionnel — badge ambre
  resumePublic: { fr: "...", en: "..." },  // obligatoire pour les articles principaux
}
```

---

## Hero page d'accueil (`HeroAccueil.js`)
- **Fond** : `hero-bg2.jpg`, `backgroundSize: "100% auto"` (pas de crop horizontal), `backgroundColor: "#1A1C1A"`
- **Portrait** : `photo-profil-new.jpg`, visible `lg+`, `mask-image` CSS pour bords diffus
- **Card info** : même largeur (400 px), transparence `rgba(26,28,26,0.62)`, `marginBottom: -220`, `zIndex: 2`
- **Section profil** (page.js) : `position: relative; zIndex: 10; paddingTop: 240` → passe DEVANT la card
- **Fond partagé** : dans `page.js`, un `<div>` wrapper contient `<HeroAccueil />` + section profil avec le même background

---

## Section Actualités

- Export `actualites` dans `data/site.js` — tableau d'entrées `{ id, type, titre, sousTitre, date, lieu, description, images[] }`
- Chaque image : `{ src, legende: {fr, en} }` — paths URL-encodés pour les accents et espaces
- Dossier images : `public/images/Actualité_Fieldwork_2025-02-04/` → src : `/images/Actualit%C3%A9_Fieldwork_2025-02-04/...`
- `ImageCarousel` : prop `href` optionnel par item → overlay "VOIR →" au hover + `<Link>` sur le clic
- Page détail : `app/actualites/[slug]/page.js` — Hero + back link + tag + sous-titre + compte-rendu + galerie grid
- Translations : `tr.home.actualites`, `tr.home.voirActualite`, `tr.actualites.*`

### Ajouter une nouvelle actualité
```js
// data/site.js → tableau actualites
{
  id: "slug-unique",          // correspond à l'URL /actualites/slug-unique
  type: "fieldwork",          // fieldwork | news | conference | …
  titre: { fr: "…", en: "…" },
  sousTitre: { fr: "…", en: "…" },
  date: "Mois AAAA",
  lieu: { fr: "…", en: "…" },
  description: { fr: "Paragraphe 1\n\nParagraphe 2", en: "…" },
  images: [
    { src: "/images/monDossier/photo.jpg", legende: { fr: "…", en: "…" } },
  ],
}
```
**Piège** : les espaces et accents dans les noms de fichiers/dossiers doivent être URL-encodés dans `src` (espace → `%20`, é → `%C3%A9`).

---

## Quiz surveillé (`QuizInteractif.js`)
- Env var Vercel : `NEXT_PUBLIC_GOOGLE_SHEETS_WEBHOOK_URL` → URL Apps Script Google Sheets
- Anti-triche : Fullscreen API, visibilitychange, DevTools detection (outerHeight-innerHeight > 160 px)
- Seuils : 3 sorties → warning, 4 → interruption ; 2 DevTools → interruption
- Résultats envoyés en `fetch(url, { method: "POST", mode: "no-cors" })`

---

## Workflow de déploiement
```bash
# Modifier → commit → push → Vercel build automatique (~2 min)
git add fichier.js
git commit -m "Description"
git push
# Vérifier sur Vercel dashboard ou attendre la notification
```

**Pièges courants :**
- Opacités Tailwind : uniquement multiples de 5 par défaut. Valeurs 6, 8, 12, 18 ajoutées dans `tailwind.config.js` → `theme.extend.opacity`
- `@apply` en CSS : n'accepte que les classes Tailwind connues au moment du build
- Images `fill` : le parent doit avoir `position: relative` et une hauteur définie
- Commits multilignes PowerShell : utiliser `git commit -m "msg"` simple, pas de heredoc

---

## Liens importants
| Ressource | URL |
|---|---|
| ResearchGate | https://www.researchgate.net/profile/Hardy-Medry-Dieu-Veil-Nkodia |
| Google Scholar | https://scholar.google.com/citations?user=gYOI-FkAAAAJ&hl=en |
| Email | hardy.nkodia@umng.cg |
| Vercel dashboard | https://vercel.com/hardynk242s-projects |
| GitHub repo | https://github.com/HardyNk242/site-nkodia-hardy |
