import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Samba Kéba",
  lastName: "Ba",
  name: `Samba Kéba Ba`,
  role: "Développeur BI",
  avatar: "/Portoflio3/images/samba/avatar.jpg",
  email: "bpanopi@gmail.com",
  location: "America/Montreal", // IANA tz valide — Québec (heure de l'Est)
  languages: ["Français", "Anglais"],
  locale: "fr",
};

const newsletter: Newsletter = {
  display: false,
  title: <>Infolettre de {person.firstName}</>,
  description: <></>,
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
  image: "/Portoflio3/images/samba/meteo.png",
  label: "Accueil",
  title: `${person.name} — ${person.role}`,
  description: `Portfolio de ${person.name}, ${person.role} : Power BI, Databricks, Microsoft Fabric.`,
  headline: <>Des tableaux de bord que vos équipes utilisent vraiment</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Suivi météo</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Rapport en vedette
        </Text>
      </Row>
    ),
    href: "/work/suivi-meteo",
  },
  subline: (
    <>
      Je suis {person.firstName}, {person.role.toLowerCase()} chez{" "}
      <Text as="span" size="xl" weight="strong">Canac</Text>. Je conçois des rapports Power BI de bout en bout, <br /> de la donnée brute jusqu'à la décision.
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
    title: "Expérience",
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
    title: "Formation",
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

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Notes BI & data",
  description: `Ce que ${person.name} explore en ce moment`,
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
    { src: "/Portoflio3/images/samba/meteo.png", alt: "Dashboard Suivi météo", orientation: "horizontal" },
    { src: "/Portoflio3/images/samba/ventes.png", alt: "Dashboard Ventes & Performance", orientation: "horizontal" },
    { src: "/Portoflio3/images/samba/catalogue.png", alt: "Catalogue des véhicules", orientation: "horizontal" },
    { src: "/Portoflio3/images/samba/projets.png", alt: "Suivi des projets", orientation: "horizontal" },
    { src: "/Portoflio3/images/samba/uber.png", alt: "Dashboard Uber", orientation: "horizontal" },
    { src: "/Portoflio3/images/samba/rh.png", alt: "Salaires & Budget RH", orientation: "horizontal" },
    { src: "/Portoflio3/images/samba/commentaires.png", alt: "Commentaires en temps réel", orientation: "horizontal" },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
