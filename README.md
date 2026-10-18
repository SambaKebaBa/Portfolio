# Portfolio 💼

[![Next.js](https://img.shields.io/badge/Next.js-16-black.svg)](https://nextjs.org/)
[![Once UI](https://img.shields.io/badge/Once%20UI-design%20system-6E56CF.svg)](https://once-ui.com/)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-en%20ligne-222.svg)](https://sambakebaba.github.io/Portfolio/)

Mon portfolio de développeur BI (Power BI, Databricks, Microsoft Fabric) : mes rapports Power BI en ligne, ma galerie, mon parcours et mes certifications.

**En ligne :** https://sambakebaba.github.io/Portfolio/

## 📋 Fonctionnalités

- **Accueil** : le rapport en vedette et le dernier rapport publié
- **Projets** : chaque rapport avec sa description et le rapport Power BI intégré
- **Galerie** : les captures de mes rapports
- **À propos** : expériences, études, certifications et compétences

## 🔧 Installation

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # export statique dans ./out
```

En local, les images peuvent sembler cassées : leur chemin commence par `/Portfolio`, le nom du dépôt. Elles s'affichent normalement sur GitHub Pages.

## 📚 Utilisation

### Ajouter un rapport
1. Mettre la capture dans `public/projects/<slug>/cover.png` (16:9).
2. Créer la page `src/content/projects/<slug>.mdx` (titre, date, résumé, lien « Publier sur le web », description).
3. Ajouter la capture à la galerie : liste `gallery.images` de `src/resources/content.tsx`.

Le rapport en vedette se choisit dans `home.featured` de `src/resources/content.tsx` (lien `/work/<slug>`) : il s'affiche en bandeau et en grande carte sur l'accueil, et en tête de la liste des projets. Les autres rapports suivent, du plus récent au plus ancien (`publishedAt`).

### Ajouter une certification
1. Mettre l'image dans `public/certifications/<slug>/cover.jpg`.
2. Ajouter son bloc (nom, organisme, date, lien de vérification) dans `about.certifications.items` de `src/resources/content.tsx`.

Les chemins d'images commencent toujours par `/Portfolio/`.

### Déploiement
Chaque push sur `main` reconstruit le site et le publie sur GitHub Pages en 1 à 2 minutes (`.github/workflows/deploy.yml`).

## 📁 Structure du projet

```
Portfolio/
├── .github/workflows/deploy.yml   # Construction et déploiement sur GitHub Pages
├── public/
│   ├── images/                    # Photo de profil, arrière-plan
│   ├── projects/<slug>/           # Capture de chaque rapport
│   └── certifications/<slug>/     # Image de chaque certification
├── src/
│   ├── app/                       # Pages : accueil, projets, galerie, à propos
│   ├── components/                # Composants de l'interface
│   ├── content/projects/          # Un fichier MDX par rapport
│   └── resources/
│       ├── content.tsx            # Textes du site, parcours, certifications, galerie
│       └── once-ui.config.ts      # Thème, couleurs, polices
├── next.config.mjs
└── package.json
```

## 👤 Auteur

**SAMBA KEBA BA** · [LinkedIn](https://www.linkedin.com/in/sambak%C3%A9baba/)

---

⭐ Si ce projet vous plaît, n'hésitez pas à lui donner une étoile !
