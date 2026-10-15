# Portfolio — Samba Kéba Ba

Portfolio personnel de **Samba Kéba Ba**, développeur BI (Power BI, Databricks, Microsoft Fabric).
Application Next.js exportée en statique, hébergée sur GitHub Pages.

**En ligne :** https://sambakebaba.github.io/Portfolio/

---

## Développement local

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # export statique -> ./out
```

Déploiement **automatique** sur GitHub Pages via `.github/workflows/deploy.yml` à chaque push sur `main` (~1-2 min).
Réglage requis une fois : **Settings → Pages → Source = GitHub Actions**.

> En local, les images peuvent sembler cassées : leur chemin est préfixé `/Portfolio` (nom du repo).
> C'est normal, elles s'affichent bien sur l'URL GitHub Pages. Si tu **renommes le repo**, remplace
> `/Portfolio/` par le nouveau nom dans `content.tsx` et les `.mdx`.

---

## Structure

```
.
├── .github/workflows/deploy.yml     # Action : build + déploiement GitHub Pages
├── next.config.mjs                  # export statique, basePath, MDX, images
├── package.json / package-lock      # dépendances + scripts
├── public/
│   ├── images/
│   │   ├── avatar.jpg               # photo de profil
│   │   └── arriere-plan.png
│   ├── certifications/<slug>/       # image d'une certification : cover.jpg
│   └── projects/<slug>/             # assets d'un rapport : cover.png (+ demo.mp4)
└── src/
    ├── app/
    │   ├── layout.tsx               # gabarit global (header, footer, thème)
    │   ├── icon.jpg                 # favicon (onglet + aperçu de lien)
    │   ├── page.tsx                 # ACCUEIL (affiche uniquement le projet phare)
    │   ├── about/page.tsx           # À propos (intro, expériences, études, certifications, compétences)
    │   ├── work/page.tsx            # liste des projets (/work)
    │   ├── work/[slug]/page.tsx     # gabarit d'une page rapport
    │   ├── gallery/page.tsx         # galerie
    │   ├── not-found.tsx / robots.ts / sitemap.ts
    ├── content/projects/*.mdx       # CONTENU des rapports (1 fichier = 1 rapport)
    ├── components/
    │   ├── layout/                  # Header, Footer, ThemeToggle, Providers, RouteGuard
    │   ├── mdx/                     # rendu MDX, HeadingLink, ScrollToHash
    │   ├── work/                    # Projects, ProjectCard
    │   ├── about/  gallery/
    ├── styles/                      # custom.css, breakpoints.scss
    ├── resources/
    │   ├── content.tsx              # ⭐ nom, à-propos, expériences, études, certifications, compétences, galerie
    │   └── once-ui.config.ts        # thème, couleurs, polices, routes, baseURL
    ├── types/  utils/
```

### Ce que tu édites au quotidien
| Pour changer... | Fichier / dossier |
|---|---|
| Nom, à-propos, expériences, études, certifications, compétences | `src/resources/content.tsx` |
| Les rapports (projets) | `src/content/projects/*.mdx` |
| La galerie (liste des captures affichées) | `src/resources/content.tsx`, liste `gallery.images` |
| Couvertures + vidéos des rapports | `public/projects/<slug>/` |
| Images des certifications | `public/certifications/<slug>/` |
| Photo de profil / favicon | `public/images/avatar.jpg` et `src/app/icon.jpg` |
| Couleurs / thème / polices | `src/resources/once-ui.config.ts` |

> **Accueil** : ne montre que le **projet phare** (le rapport avec la date `publishedAt` la plus récente).
> Tous les rapports sont sur la page **Projets** (`/work`).

---

## Ajouter un nouveau rapport

Un rapport touche **trois endroits**. Les deux premiers sont obligatoires ; le troisième sert seulement pour la
galerie, qui ne lit pas les fichiers MDX.

| Où | Quoi | Fait apparaître le rapport dans |
|---|---|---|
| `public/projects/<slug>/cover.png` | la capture du rapport | les cartes et la page du rapport |
| `src/content/projects/<slug>.mdx` | la page du rapport | **Projets** (`/work`) et l'**accueil** s'il est le plus récent |
| `src/resources/content.tsx`, liste `gallery.images` | une ligne | la **Galerie** (`/gallery`) |

### Étape 1 : choisir le slug
Le slug est le nom technique du rapport : kebab-case, minuscules, sans accents ni espaces, par exemple
`suivi-des-ventes`. Il donne l'adresse de la page (`/work/suivi-des-ventes`) et le nom du dossier de la capture.
Le même slug sert aux trois endroits.

### Étape 2 : déposer la capture
Crée le dossier `public/projects/<slug>/` et mets-y la capture sous le nom **`cover.png`** (format 16:9).
Une vidéo de démonstration éventuelle va dans le même dossier (`demo.mp4`).

### Étape 3 : créer la page du rapport
Crée `src/content/projects/<slug>.mdx`, en UTF-8, et colle ce modèle. Remplace `<slug>` partout et
`LIEN_PUBLISH_TO_WEB` aux **trois** endroits par le lien « Publier sur le web » du rapport
(`https://app.powerbi.com/view?r=…`).

```mdx
---
title: "Titre complet du rapport"
publishedAt: "2026-10-15"
summary: "Résumé court, une phrase, affiché sur la carte."
images:
  - "/Portfolio/projects/<slug>/cover.png"
tag: "Power BI"
link: "LIEN_PUBLISH_TO_WEB"
---

Description longue : le besoin, l'approche, puis une ligne par page.

**Technologies :** Power BI · Power Query (M) · DAX

<div style={{textAlign:'right',marginBottom:'0.5rem'}}><a href="LIEN_PUBLISH_TO_WEB">Ouvrir en plein écran <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{verticalAlign:'-2px',marginLeft:'4px'}}><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg></a></div>

<iframe src="LIEN_PUBLISH_TO_WEB" style={{width:'100%',aspectRatio:'16 / 9',border:0,borderRadius:12}} allowFullScreen />
```

Pour une **vidéo** au lieu d'un rapport public (rapport avec écriture de données, par exemple), remplace l'iframe
par :
```mdx
<video controls playsInline style={{width:'100%',borderRadius:12}} src="/Portfolio/projects/<slug>/demo.mp4"></video>
```

### Étape 4 : ajouter le rapport à la galerie
Dans `src/resources/content.tsx`, section `gallery`, ajoute une ligne dans `images` (l'ordre de la liste est
l'ordre d'affichage) :

```ts
{ src: "/Portfolio/projects/<slug>/cover.png", alt: "Titre du rapport", orientation: "horizontal" },
```

Sans cette ligne, le rapport existe sur le site mais n'apparaît pas dans la galerie.

### Étape 5 : vérifier puis publier
1. Facultatif, en local : `npm run build`. Le build échoue si un MDX est mal formé.
2. Commit et push sur `main`.
3. Attends 1 à 2 minutes (onglet **Actions** du dépôt : le déploiement doit être vert).
4. Vérifie en ligne : la carte dans Projets, la page `https://sambakebaba.github.io/Portfolio/work/<slug>`
   (rapport affiché dans l'iframe), la galerie, et l'accueil si c'est le plus récent.

### Règles à respecter
- **Chemins** : toujours préfixer par `/Portfolio/...`, sinon l'image donne une erreur 404 sur GitHub Pages.
- **`publishedAt`** : format `AAAA-MM-JJ`. Le rapport le plus récent passe en premier dans Projets et devient le
  projet phare de l'accueil.
- **JSX dans le MDX** : `style={{...}}` avec doubles accolades ; `allowFullScreen`, `strokeWidth` en camelCase.
- **Noms de fichiers et dossiers** : kebab-case, sans espaces ni accents.
- **Encodage** : UTF-8, pour les accents.

### Retirer un rapport
Supprime les trois éléments, sinon il reste une carte sans image ou une image orpheline dans la galerie :
1. `src/content/projects/<slug>.mdx` ;
2. le dossier `public/projects/<slug>/` ;
3. sa ligne dans `gallery.images` de `src/resources/content.tsx`.

Puis commit et push.

---

## Ajouter une certification

Une certification touche **deux endroits** et apparaît dans la page **À propos**, section Certifications.

### Étape 1 : choisir le slug
Nom du dossier de l'image, en kebab-case sans accents, par exemple `excel-basics-data-analysis`.

### Étape 2 : déposer l'image
Mets l'image du certificat dans `public/certifications/<slug>/cover.jpg`.

### Étape 3 : ajouter le bloc
Dans `src/resources/content.tsx`, section `about.certifications.items`, ajoute ce bloc. L'ordre de la liste est
l'ordre d'affichage : mets la plus récente en premier.

```ts
{
  name: "Nom complet de la certification",
  issuer: "IBM · Coursera",
  date: "Février 2024",
  link: "https://coursera.org/verify/XXXX",
  image: "/Portfolio/certifications/<slug>/cover.jpg",
},
```

- `issuer` : l'organisme et la plateforme, séparés par ` · `.
- `date` : le mois en français et l'année.
- `link` : le lien de vérification du certificat.

### Étape 4 : publier
Commit et push sur `main`, attends 1 à 2 minutes, puis vérifie la page À propos en ligne.

Pour **retirer** une certification : supprime son bloc et le dossier `public/certifications/<slug>/`.

---

## Déploiement

Push sur `main` → `deploy.yml` construit (`npm ci` + `next build`), ajoute `.nojekyll`, publie `out/` sur Pages.
`basePath` = nom du repo (auto). Une fois : **Settings → Pages → Source = GitHub Actions**.
