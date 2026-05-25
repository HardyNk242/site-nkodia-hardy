# CLAUDE.md — Référence rapide du projet

## Règle absolue @hardy
**Ne jamais changer la palette de couleurs ni le thème sombre du site.**

---

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
| Déploiement | Vercel (push main → build automatique ~2 min) |

---

## Palette de couleurs (`tailwind.config.js`) — NE PAS MODIFIER
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
Opacités non-standard (`/6`, `/8`, `/12`, `/18`) ajoutées dans `tailwind.config.js → theme.extend.opacity`.

---

## Navigation — 7 entrées (ordre fixe)
```
Accueil | Publications | Recherches | Engagement | Vulgarisation | Équipe | CV
```
`components/Navbar.js` — tableau `liens[]`. La page `/cours` existe toujours mais n'est plus dans le menu principal.

---

## Structure des fichiers clés

```
app/
  page.js                        ← Accueil : hero + citation + 3 pubs + presse + vidéo + événements + actualités
  publications/page.js           ← Liste complète des publications avec "En bref"
  recherches/page.js             ← Thèmes de recherche
  engagement/page.js             ← 4 sections : projets, pédagogie, Kongo Science, conférences
  engagement/[slug]/page.js      ← Détail d'un projet (consomme data/projets/[slug].json)
  vulgarisation/page.js          ← 3 sections : presse, vidéos YouTube, communication sociétale
  actualites/[slug]/page.js      ← Détail actualité (fieldwork, conférence) + galerie photos
  equipe/page.js                 ← Collaborateurs
  cv/page.js                     ← Curriculum vitae
  cours/page.js                  ← Liste des cours
  cours/[slug]/page.js           ← Détail d'un cours
  cours/[slug]/quiz/[n]/page.js  ← Quiz surveillé (QuizInteractif)
  globals.css                    ← Base + composants Tailwind (.carte, .btn-corail, etc.)
  layout.js                      ← Navbar + Footer + LanguageProvider

components/
  HeroAccueil.js     ← Hero page d'accueil (hero-bg2.jpg + portrait 400px + card 400px)
  Hero.js            ← Hero générique toutes autres pages (supporte prop `image` pour photo de fond)
  Navbar.js          ← Navigation sticky 7 entrées (dark, bg-sombre)
  Footer.js          ← Footer (bg-sombre)
  ImageCarousel.js   ← Carrousel horizontal auto-scroll 4s, pause au hover ; prop `href` → click-through
  CoursDetail.js     ← Détail cours + quiz modal + exercices
  Quiz.js            ← Quiz modal (inline, non surveillé)
  QuizInteractif.js  ← Quiz surveillé anti-triche + webhook Google Sheets
  PdfViewer.js       ← Visionneuse PDF embarquée

data/
  site.js            ← Données principales : profil, publicationsRecentes, evenements, actualites, cv…
  translations.js    ← Chaînes UI bilingues FR/EN (tr.nav.*, tr.home.*, tr.engagement.*, tr.vulgarisation.*, …)
  engagement.js      ← pedagogieItems, kongoScience, conferencesEngagement
  vulgarisation.js   ← presseArticles[], videos[]
  projets/
    index.js         ← importe et exporte tous les projets (tableau `projets`)
    amorce-geo.json  ← données complètes du projet AMORCE-GEO
  quizzes/           ← JSON des quiz (chapitre1..6, tp-tectonique-1..4)

public/images/
  hero-bg2.jpg                    ← Fond hero accueil (rock texture, 100% width sans crop)
  photo-nkodia-hardy2.jpg         ← Photo profil (portrait hero + page CV)
  ResearchGate_icon_SVG.svg.png   ← Logo RG (PNG 3840×3840)
  Google_Scholar_logo.svg.png     ← Logo Scholar (PNG)
  figure-pub-2026-korea-stress.png
  figure-pub-2026.jpg
  figure-pub-2025.jpg
  Actualités/                     ← Dossier racine des actualités
    Actualité_Fieldwork_2025-02-04/     ← 13 photos terrain Belgique-France fév. 2025
    Actualité_conference_geologica_belgica_2021/  ← 4 photos conférence sept. 2021
  projets/                        ← Logos des projets (placeholder → remplacer)
    amorce-geo-logo.png           ← Logo AMORCE-GEO (à fournir)
  equipe-*.jpg                    ← Portraits équipe
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
| `.prose-site` | Texte corps long (text-encre/75, leading-relaxed, max-w-3xl) |

---

## Système de traduction
```js
const { T } = useLang();
T({ fr: "Texte français", en: "English text" })  // inline
T(tr.home.profil)                                  // via objet tr
```
`T()` accepte aussi une chaîne simple (retournée telle quelle).  
Toutes les clés UI sont dans `data/translations.js`.

---

## Données éditoriales — que modifier où ?

### Publications récentes (homepage, 3 cartes)
```js
// data/site.js → publicationsRecentes[]
{ annee, titre, revue, auteurs, doi, image?, resume: {fr, en} }
```

### Publications liste complète
```js
// data/publications/ ou data/site.js section publications
{ type, ref, doi, image?, badge?, resumePublic: {fr, en} }
```

### Événements à venir (homepage)
```js
// data/site.js → evenements[]
{ titre: {fr, en}, lieu: {fr, en}, date: "string" }
```

### Actualités (fieldwork / conférences avec galerie)
```js
// data/site.js → actualites[]
{
  id: "slug",           // → URL /actualites/slug
  type: "fieldwork",    // fieldwork | conference | news
  titre, sousTitre, cover, date, lieu, description,
  images: [{ src, legende: {fr, en} }]
}
```
**Piège** : espaces/accents dans les noms de fichiers → URL-encoder dans `src`  
(`é` → `%C3%A9`, espace → `%20`).  
Dossier racine des images : `public/images/Actualités/` → URL : `/images/Actualit%C3%A9s/`

### Ajouter un projet d'engagement
1. Créer `data/projets/mon-projet.json` (suivre le schéma d'amorce-geo.json)
2. Ajouter `import monProjet from "./mon-projet.json"` dans `data/projets/index.js`
3. Ajouter `monProjet` au tableau `projets`
→ La page `/engagement/mon-projet` est générée automatiquement.

### Articles presse (page Vulgarisation + 2 premiers sur homepage)
```js
// data/vulgarisation.js → presseArticles[]  (ordre : plus récent en premier)
{ titre: {fr, en}, media, date, url, image? }
```

### Vidéos (page Vulgarisation + 1ère sur homepage)
```js
// data/vulgarisation.js → videos[]
{ titre: {fr, en}, description: {fr, en}, youtubeId: "XXXXXXXXXXX" }
```

---

## Hero page d'accueil (`HeroAccueil.js`)
- **Fond** : `hero-bg2.jpg`, `backgroundSize: "100% auto"` (pas de crop horizontal)
- **Portrait** : `photo-nkodia-hardy2.jpg`, visible `lg+`, `mask-image` CSS pour bords diffus
- **Card info** : 400 px, transparence `rgba(26,28,26,0.62)`, `marginBottom: -220`, `zIndex: 2`
- **Section profil** (page.js) : `zIndex: 10; paddingTop: 240` → passe DEVANT la card
- **Fond partagé** : dans `page.js`, un `<div>` wrapper `hero-bg2.jpg` enveloppe HeroAccueil + section profil

---

## ImageCarousel
- Auto-scroll toutes les 4 s → wrap-around au dernier élément ; pause au hover
- Prop `href` sur chaque item → overlay "Voir →" + clic vers la page détail
- Prop `autoDelay` optionnel (ms, défaut 4000)

---

## Quiz surveillé (`QuizInteractif.js`)
- Env var Vercel : `NEXT_PUBLIC_GOOGLE_SHEETS_WEBHOOK_URL`
- Anti-triche : Fullscreen API, visibilitychange, DevTools (outerHeight-innerHeight > 160 px)
- Seuils : 3 sorties → warning, 4 → interruption ; 2 DevTools → interruption

---

## Workflow de déploiement
```bash
git add fichier.js
git commit -m "Description"
git push          # Vercel build auto (~2 min)
```

**Pièges courants :**
- Opacités Tailwind `/6 /8 /12 /18` : ajoutées dans `tailwind.config.js → theme.extend.opacity`
- `@apply` en CSS : n'accepte que les classes Tailwind connues au build
- Images `fill` : le parent doit avoir `position: relative` + hauteur définie
- Commits PowerShell : `git commit -m "msg"` simple (pas de heredoc `<<EOF`)
- Images non committées → Vercel ne les reçoit pas (`git add public/images/...`)
- Noms de dossiers avec accents : URL-encoder dans les `src` JS

---

## Liens importants
| Ressource | URL |
|---|---|
| ResearchGate | https://www.researchgate.net/profile/Hardy-Medry-Dieu-Veil-Nkodia |
| Google Scholar | https://scholar.google.com/citations?user=gYOI-FkAAAAJ&hl=en |
| Email | hardy.nkodia@umng.cg |
| Vercel dashboard | https://vercel.com/hardynk242s-projects |
| GitHub repo | https://github.com/HardyNk242/site-nkodia-hardy |
| YouTube (GPS tuto) | https://www.youtube.com/watch?v=wtlFhRysIr0 |
| AMORCE-GEO (ULB) | https://actus.ulb.be/fr/actus/international/un-reseau-academique-pour-propulser-la-formation-en-geosciences-en-afrique-centrale |
