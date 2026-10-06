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
| Couvertures + vidéos des rapports | `public/projects/<slug>/` |
| Images des certifications | `public/certifications/<slug>/` |
| Photo de profil / favicon | `public/images/avatar.jpg` et `src/app/icon.jpg` |
| Couleurs / thème / polices | `src/resources/once-ui.config.ts` |

> **Accueil** : ne montre que le **projet phare** (le rapport avec la date `publishedAt` la plus récente).
> Tous les rapports sont sur la page **Projets** (`/work`).

---

## Ajouter un nouveau rapport

Un rapport = **un fichier `.mdx`**. Pas besoin de toucher au code.

**1.** Choisis un slug en kebab-case, ex. `mon-nouveau-rapport` (= l'URL `/work/mon-nouveau-rapport`).

**2.** Dépose la capture dans `public/projects/mon-nouveau-rapport/cover.png` et crée `src/content/projects/mon-nouveau-rapport.mdx`.

**3.** Colle ce modèle :

```mdx
---
title: "Titre complet du rapport"
publishedAt: "2025-07-01"
summary: "Résumé court affiché sur la carte."
images:
  - "/Portfolio/projects/mon-nouveau-rapport/cover.png"
tag: "Power BI"
link: "LIEN_PUBLISH_TO_WEB"
---

Description en un ou deux paragraphes.

**Technologies :** Power BI · Power Query (M) · DAX

<div style={{textAlign:'right',marginBottom:'0.5rem'}}><a href="LIEN_PUBLISH_TO_WEB">Ouvrir en plein écran <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{verticalAlign:'-2px',marginLeft:'4px'}}><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg></a></div>

<iframe src="LIEN_PUBLISH_TO_WEB" style={{width:'100%',aspectRatio:'16 / 9',border:0,borderRadius:12}} allowFullScreen />
```

Pour une **vidéo** au lieu d'un rapport public (write-back), remplace l'iframe par :
```mdx
<video controls playsInline style={{width:'100%',borderRadius:12}} src="/Portfolio/projects/mon-nouveau-rapport/demo.mp4"></video>
```

### Règles importantes
- **Chemins** : toujours préfixer `/Portfolio/...` (sinon 404 sur GitHub Pages).
- **`publishedAt`** : `AAAA-MM-JJ`. Le plus récent passe en premier (et en vedette sur l'accueil).
- **JSX dans MDX** : `style={{...}}` (accolades), `allowFullScreen` / `strokeWidth` en camelCase.
- **Noms de fichiers** : kebab-case, sans espaces ni accents (URL propres).
- Enregistrer en **UTF-8** (accents).

---

## Ajouter une certification

Dans `src/resources/content.tsx`, section `about.certifications.items`, ajoute un bloc :

```ts
{
  name: "Nom complet de la certification",
  issuer: "IBM · Coursera",
  date: "Mois AAAA",
  link: "https://coursera.org/verify/XXXX",
  image: "/Portfolio/certifications/nom-de-la-certification/cover.jpg",
},
```

Et dépose l'image dans `public/certifications/nom-de-la-certification/cover.jpg` (dossier en kebab-case, ex. `excel-basics-data-analysis`).

---

## Déploiement

Push sur `main` → `deploy.yml` construit (`npm ci` + `next build`), ajoute `.nojekyll`, publie `out/` sur Pages.
`basePath` = nom du repo (auto). Une fois : **Settings → Pages → Source = GitHub Actions**.
