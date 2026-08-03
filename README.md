# Portfolio — Samba Kéba Ba

Portfolio personnel de **Samba Kéba Ba**, développeur BI (Power BI, Databricks, Microsoft Fabric).
Application Next.js exportée en statique et hébergée sur GitHub Pages.

**En ligne :** https://sambakebaba.github.io/Portoflio3/

---

## Développement local

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # export statique -> ./out
```

Déploiement **automatique** sur GitHub Pages via `.github/workflows/deploy.yml` à chaque push sur `main` (~1-2 min).

> Note : en local les images peuvent apparaître cassées car leur chemin est préfixé `/Portoflio3`
> (le nom du repo). C'est normal ; elles s'affichent correctement sur l'URL GitHub Pages.

---

## Structure du projet

> `node_modules/`, `.next/`, `out/` sont générés automatiquement et ignorés par git.

```
.
├── .github/workflows/deploy.yml   # Action : build + déploiement GitHub Pages
├── next.config.mjs                # Config Next : export statique, basePath, MDX, images
├── package.json / package-lock    # Dépendances + scripts (dev/build/start)
├── tsconfig.json                  # Config TypeScript
├── public/
│   └── images/samba/              # Avatar + captures des dashboards (assets servis tels quels)
└── src/
    ├── app/                       # Les pages (1 dossier = 1 route)
    │   ├── layout.tsx             # Gabarit global (header, footer, thème)
    │   ├── page.tsx               # Accueil (/)
    │   ├── about/page.tsx         # À propos (/about)
    │   ├── gallery/page.tsx       # Galerie (/gallery)
    │   ├── work/page.tsx          # Liste des projets (/work)
    │   ├── work/[slug]/page.tsx   # Gabarit d'une page projet (/work/xxx)
    │   ├── work/projects/*.mdx    # CONTENU des projets (1 fichier = 1 projet)
    │   ├── not-found.tsx          # Page 404
    │   ├── robots.ts              # Génère robots.txt (SEO)
    │   └── sitemap.ts             # Génère sitemap.xml (SEO)
    ├── components/                # Briques d'interface réutilisables
    │   ├── Header / Footer        # Navigation + pied de page
    │   ├── RouteGuard.tsx         # Autorise/bloque les pages selon `routes`
    │   ├── ProjectCard.tsx        # Carte d'un projet
    │   ├── work/Projects.tsx      # Grille des projets
    │   ├── gallery/GalleryView    # Affichage galerie
    │   ├── about/TableOfContents  # Sommaire À propos
    │   ├── mdx.tsx                # Rendu du Markdown des projets
    │   ├── ThemeToggle / Providers# Thème clair/sombre
    │   └── index.ts               # Exports regroupés
    ├── resources/                 # TON contenu + réglages visuels
    │   ├── content.tsx            # ⭐ Nom, à-propos, expérience, formation, compétences, liens, galerie
    │   ├── once-ui.config.ts      # Thème, couleurs, polices, routes actives, baseURL
    │   ├── custom.css             # CSS perso
    │   └── icons.ts               # Icônes disponibles
    ├── types/                     # Définitions TypeScript (forme des données)
    └── utils/                     # Fonctions utilitaires (lecture des .mdx, dates)
```

### Ce que tu édites au quotidien
| Pour changer... | Fichier / dossier |
|---|---|
| Nom, à-propos, expérience, compétences, liens | `src/resources/content.tsx` |
| Tes rapports (projets) | `src/app/work/projects/*.mdx` |
| Tes images | `public/images/samba/` |
| Couleurs / thème / polices | `src/resources/once-ui.config.ts` |

---

## Ajouter un nouveau projet

Un projet = **un fichier `.mdx`**. Pas besoin de toucher au code.

**1.** Dépose la capture du rapport dans `public/images/samba/` (ex. `nouveau.png`).

**2.** Crée `src/app/work/projects/mon-projet.mdx` (le nom du fichier = l'URL `/work/mon-projet`).

**3.** Colle ce modèle :

```mdx
---
title: "Titre du projet"
publishedAt: "2025-07-01"
summary: "Résumé court affiché sur la carte et l'accueil."
images:
  - "/Portoflio3/images/samba/nouveau.png"
tag: "Power BI"
---

Description du projet en un ou deux paragraphes.

**Stack :** Power BI · Power Query (M) · DAX

<iframe src="LIEN_PUBLISH_TO_WEB" style={{width:'100%',aspectRatio:'16 / 9',border:0,borderRadius:12}} allowFullScreen />
```

**4.** Commit + push (ou upload via github.com). L'Action redéploie automatiquement.

### Règles importantes
- **Chemin image** : toujours préfixer `/Portoflio3/...` sinon l'image renvoie 404 sur GitHub Pages.
- **`publishedAt`** : format `AAAA-MM-JJ`. Le plus récent passe en premier (et en vedette sur l'accueil).
- **iframe** : syntaxe JSX → `style={{...}}` (accolades), `allowFullScreen` avec un F majuscule.
- Projet sans rapport public (write-back) : **enlève la ligne `<iframe>`**.
- Enregistre le fichier en **UTF-8** (accents).

---

## Déploiement

Poussé sur `main` → `.github/workflows/deploy.yml` construit (`npm ci` + `next build`), ajoute `.nojekyll`,
et publie `out/` sur GitHub Pages. `basePath` est fixé automatiquement au nom du repo.

Réglage requis une fois : **Settings → Pages → Source = GitHub Actions**.
