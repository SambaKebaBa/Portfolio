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
        <strong className="ml-4">Boutique de football en ligne</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Rapport en vedette
        </Text>
      </Row>
    ),
    href: "/work/boutique-football-ventes-clients",
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
        Je suis développeur BI, basé à Québec. Je conçois des rapports Power BI de bout en bout :
        j'interroge et je valide les données, je fais la modélisation dans Power BI, j'automatise ce qui peut
        l'être et je livre des tableaux de bord que les équipes utilisent au quotidien. J'ai été développeur dans
        deux migrations vers Power BI, depuis SAP Web Intelligence puis depuis SAP Analytics Cloud.
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
            Seul développeur BI de l'entreprise : développement des rapports de la migration de SAP Analytics Cloud
            vers Power BI, recréation des rapports existants et conception de nouveaux rapports pour tous les
            secteurs, des magasins à la haute direction.
          </>,
          <>
            Interrogation des données dans Databricks (bronze / argent / or) et création de tableaux de bord, en
            plus de la modélisation et des rapports dans Power BI.
          </>,
          <>
            Gestion des espaces de travail et de la sécurité dans Power BI Service ; création du thème et des
            gabarits visuels de l'entreprise.
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
            Conception des rapports financiers Power BI de toutes les unités administratives : suivi budgétaire,
            masse salariale et projections financières, publiés dans Power BI Service avec un accès de chaque
            direction limité à ses propres données (RLS).
          </>,
          <>
            Développement des nouvelles solutions pendant la migration de SAP Web Intelligence vers Power BI, et
            maintien des rapports WebI encore en service, avec les modifications demandées par les clients.
          </>,
          <>
            Automatisation de processus du Service des finances avec les outils Microsoft 365 : formulaires
            Forms, flux Power Automate, alertes et tâches Planner pour recevoir et suivre les demandes. Ce circuit
            alimentait un tableau de bord de suivi, dont le projet « Suivi des projets » est une version aux
            données fictives.
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
        name: "Baccalauréat en informatique",
        description: <>Université du Québec en Outaouais</>,
        date: "2023",
      },
      {
        name: "DEC en sciences mathématiques et expérimentales",
        description: <>Groupe scolaire Educazur, Dakar</>,
        date: "2019",
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
        description: <>Rapports de bout en bout, de la modélisation à la publication, dans Desktop et Service.</>,
        tags: [{ name: "DAX" }, { name: "Power Query (M)" }, { name: "Modélisation" }, { name: "Fonctions DAX (UDF)" }, { name: "Visuels SVG / HTML" }, { name: "Thèmes JSON" }, { name: "Power BI Service" }, { name: "GitHub" }],
        images: [],
      },
      {
        title: "Données",
        description: <>Interroger, préparer et transformer les données avant le rapport.</>,
        tags: [{ name: "SQL" }, { name: "Databricks" }, { name: "Architecture médaillon" }, { name: "Microsoft Fabric" }, { name: "Python" }],
        images: [],
      },
      {
        title: "Automatisation Microsoft 365",
        description: <>Des flux qui recueillent les demandes, alertent et alimentent les tableaux de bord.</>,
        tags: [{ name: "Power Automate" }, { name: "Power Apps" }, { name: "Microsoft Forms" }, { name: "Planner" }, { name: "Lists" }, { name: "SharePoint" }],
        images: [],
      },
      {
        title: "Migration & gouvernance",
        description: <>Migrer des rapports existants et garder un environnement Power BI propre et sécurisé.</>,
        tags: [{ name: "Migration SAP WebI vers Power BI" }, { name: "Migration SAP Analytics Cloud vers Power BI" }, { name: "Sécurité RLS / OLS / PLS" }, { name: "Espaces de travail" }, { name: "Gabarits d'entreprise" }],
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
    { src: "/Portfolio/projects/astravale-sante-serveurs-sql/cover.png", alt: "AstraVale : santé des serveurs SQL", orientation: "horizontal" },
    { src: "/Portfolio/projects/boutique-football-ventes-clients/cover.png", alt: "Boutique de football en ligne : ventes et clients", orientation: "horizontal" },
    { src: "/Portfolio/projects/suivi-meteo/cover.png", alt: "Dashboard Suivi météo", orientation: "horizontal" },
    { src: "/Portfolio/projects/analyse-ventes/cover.png", alt: "Dashboard Ventes & Performance", orientation: "horizontal" },
    { src: "/Portfolio/projects/catalogue-vehicules/cover.png", alt: "Catalogue des véhicules", orientation: "horizontal" },
    { src: "/Portfolio/projects/suivi-projets/cover.png", alt: "Suivi des projets", orientation: "horizontal" },
    { src: "/Portfolio/projects/uber-flotte/cover.png", alt: "Dashboard Uber", orientation: "horizontal" },
    { src: "/Portfolio/projects/salaires-budget-rh/cover.png", alt: "Salaires & Budget RH", orientation: "horizontal" },
  ],
};

export { person, social, home, about, work, gallery };
