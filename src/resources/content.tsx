import { About, Gallery, Home, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Samba Kéba",
  lastName: "Ba",
  name: `Samba Kéba Ba`,
  role: "Développeur BI",
  avatar: "/Portfolio/images/avatar.jpg",
  email: "bpanopi@gmail.com",
  location: "America/Montreal", // IANA tz valide — Québec (heure de l'Est)
  languages: ["Français", "Anglais"],
  locale: "fr",
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/SambaKebaBa",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/sambak%C3%A9baba",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/Portfolio/images/arriere-plan.png",
  label: "Accueil",
  title: `${person.name} — ${person.role}`,
  description: `Portfolio de ${person.name}, ${person.role} : Power BI, Databricks, Microsoft Fabric.`,
  headline: <>Des tableaux de bord que vos équipes utilisent vraiment</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Atlético de Madrid</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Rapport en vedette
        </Text>
      </Row>
    ),
    href: "/work/atletico-madrid-ventes-en-ligne",
  },
  subline: (
    <>
      Je suis {person.firstName}, développeur BI. Je conçois des rapports Power BI de bout en bout, <br /> de la donnée brute jusqu'à la décision.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "À propos",
  title: `À propos – ${person.name}`,
  description: `${person.name}, ${person.role} basé à Québec (QC).`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        {person.firstName} est {person.role.toLowerCase()} basé à Québec, analyste en intelligence d'affaires
        chez Canac. Seul développeur Power BI de son entreprise, il conçoit les tableaux de bord de bout en bout :
        collecte et validation des données, modélisation, automatisation, gouvernance et visualisation.
      </>
    ),
  },
  work: {
    display: true,
    title: "Expériences",
    experiences: [
      {
        company: "Canac – Siège social, Québec (QC)",
        timeframe: "Depuis février 2026",
        role: "Analyste en intelligence d'affaires",
        achievements: [
          <>
            Seul développeur Power BI de l'entreprise : conçoit l'ensemble des tableaux de bord, du suivi
            budgétaire aux rapports opérationnels, et gère les espaces de travail et la sécurité dans Power BI Service.
          </>,
          <>
            Reconçoit en Power BI les rapports historiques SAP Analytics Cloud et conçoit le thème JSON et les
            gabarits visuels de l'entreprise. Interroge et valide les données dans Databricks (bronze / argent / or).
          </>,
        ],
        images: [],
      },
      {
        company: "Ville de Québec – Service des finances",
        timeframe: "2024 – 2026",
        role: "Technicien en exploitation et valorisation de données",
        achievements: [
          <>
            Transition des rapports SAP Web Intelligence vers Power BI ; rapports financiers stratégiques déployés
            dans toutes les unités administratives, cloisonnés par direction avec la sécurité au niveau des lignes (RLS).
          </>,
          <>
            Conception seul d'un système de gestion des demandes de rapports de bout en bout : Microsoft Forms →
            Power Automate → Microsoft Planner → tableau de bord Power BI de suivi alimenté chaque jour.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Études",
    institutions: [
      {
        name: "Université du Québec en Outaouais",
        description: <>Baccalauréat en informatique (2023).</>,
      },
      {
        name: "Groupe scolaire Educazur, Dakar",
        description: <>DEC en sciences mathématiques et expérimentales (2019).</>,
      },
    ],
  },
  certifications: {
    display: true,
    title: "Certifications",
    items: [
      {
        name: "Python for Data Science, AI & Development",
        issuer: "IBM · Coursera",
        date: "Février 2024",
        link: "https://coursera.org/verify/SHBQNFUEKYCD",
        image: "/Portfolio/certifications/python-data-science-ai-development/cover.jpg",
      },
      {
        name: "Data Visualization and Dashboards with Excel and Cognos",
        issuer: "IBM · Coursera",
        date: "Février 2024",
        link: "https://coursera.org/verify/GAZDPELXZRF5",
        image: "/Portfolio/certifications/data-visualization-dashboards-excel-cognos/cover.jpg",
      },
      {
        name: "Excel Basics for Data Analysis",
        issuer: "IBM · Coursera",
        date: "Février 2024",
        link: "https://coursera.org/verify/JQMLS8BLRNK7",
        image: "/Portfolio/certifications/excel-basics-data-analysis/cover.jpg",
      },
      {
        name: "Introduction to Data Analytics",
        issuer: "IBM · Coursera",
        date: "Janvier 2024",
        link: "https://coursera.org/verify/NFK75XGG96WJ",
        image: "/Portfolio/certifications/introduction-data-analytics/cover.jpg",
      },
    ],
  },
  technical: {
    display: true,
    title: "Compétences techniques",
    skills: [
      {
        title: "Power BI",
        description: (
          <>DAX avancé, Power Query (M), fonctions personnalisées (UDF), thèmes JSON, visuels SVG / HTML / JS. Desktop &amp; Service.</>
        ),
        tags: [],
        images: [],
      },
      {
        title: "Données & plateformes",
        description: (
          <>Databricks (architecture médaillon bronze / argent / or), Microsoft Fabric, SAP WEBI / SAC, SQL.</>
        ),
        tags: [],
        images: [],
      },
      {
        title: "Automatisation & gouvernance",
        description: (
          <>Power Automate, Power Apps, Microsoft Forms, Lists. Sécurité RLS / OLS, Python, bonnes pratiques de modélisation.</>
        ),
        tags: [],
        images: [],
      },
    ],
  },
};

const work: Work = {
  path: "/work",
  label: "Projets",
  title: `Projets – ${person.name}`,
  description: `Rapports Power BI par ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Galerie",
  title: `Galerie – ${person.name}`,
  description: `Aperçus de rapports par ${person.name}`,
  images: [
    { src: "/Portfolio/projects/atletico-madrid-ventes-en-ligne/cover.png", alt: "Atlético de Madrid : ventes en ligne", orientation: "horizontal" },
    { src: "/Portfolio/projects/suivi-meteo/cover.png", alt: "Dashboard Suivi météo", orientation: "horizontal" },
    { src: "/Portfolio/projects/analyse-ventes/cover.png", alt: "Dashboard Ventes & Performance", orientation: "horizontal" },
    { src: "/Portfolio/projects/catalogue-vehicules/cover.png", alt: "Catalogue des véhicules", orientation: "horizontal" },
    { src: "/Portfolio/projects/suivi-projets/cover.png", alt: "Suivi des projets", orientation: "horizontal" },
    { src: "/Portfolio/projects/uber-flotte/cover.png", alt: "Dashboard Uber", orientation: "horizontal" },
    { src: "/Portfolio/projects/salaires-budget-rh/cover.png", alt: "Salaires & Budget RH", orientation: "horizontal" },
    { src: "/Portfolio/projects/commentaires-temps-reel/cover.png", alt: "Commentaires en temps réel", orientation: "horizontal" },
  ],
};

export { person, social, home, about, work, gallery };
