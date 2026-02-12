export type NarrativeProject = {
  name: string;
  context: string;
  work: string;
  method: string;
  cta: { label: string; href: string }[];
};

export type NarrativePrinciple = {
  title: string;
  body: string[];
};

export type NarrativeState = {
  id:
    | "entry"
    | "hero"
    | "identity"
    | "method"
    | "projects"
    | "relation"
    | "contact";
  title?: string;
  subtitle?: string;
  body?: string[];
  fragments?: string[];
  principles?: NarrativePrinciple[];
  projects?: NarrativeProject[];
  cta?: { label: string; href: string }[];
};

export const profile = {
  fullName: "Jeffrey Basset",
  role: "Développeur Full-Stack JavaScript",
  avatar: {
    src: "/JeffreyBasset.jpg",
    alt: "Photo de Jeffrey Basset",
  },
  keywords: [
    "Next.js",
    "React",
    "Node.js",
    "Nest.js",
    "TypeScript",
    "Architecture",
    "Performance",
    "Accessibilité",
  ],
  location: "France",
  sameAs: [
    "https://www.linkedin.com/in/jeffrey-basset/",
    "https://github.com/JeffToken31",
  ],
};

export const STATES: NarrativeState[] = [
  {
    id: "entry",
    body: ["Scroll pour entrer"],
  },

{
  id: "hero",
  title: "Je construis des interfaces claires et des APIs fiables.",
  subtitle:
    "Junior en expérience, exigeant sur la lisibilité, la performance et l’accessibilité.",
  body: ["Scroll = progression."],
},

  {
    id: "identity",
    fragments: [
      "Reconversion vers le développement logiciel (full-stack JavaScript).",
      "Expérience terrain : conseil technique BTP, contraintes réelles, délais réels.",
      "Habitué à expliquer clairement, cadrer un besoin, et livrer une solution défendable.",
      "Accessibilité, performance, SEO : traités comme des exigences, pas des options.",
      "IA : j’utilise pour apprendre et accélérer, pas pour remplacer le raisonnement.",
    ],
  },

{
  id: "method",
  title: "Manière de construire",
  principles: [
    {
      title: "Comprendre avant d’implémenter",
      body: [
        "Je clarifie le problème, le contexte et les contraintes avant d’écrire du code.",
      ],
    },
    {
      title: "Structurer pour garder le contrôle",
      body: [
        "Découpage clair pour tester, faire évoluer et maintenir sans surprise.",
      ],
    },
    {
      title: "Valider avant d’embellir",
      body: [
        "Le bon comportement d’abord, les effets ensuite.",
      ],
    },
  ],
},


  {
    id: "projects",
    title: "Projets",
    projects: [
      {
        name: "ATS / Recrutement — Mairie de Montauban (2025)",
        context:
          "ATS (portail candidats + back-office RH) : offres, candidatures, statuts, documents.",
        work:
          "API REST, auth, intégration services internes (Keycloak, LDAP, SMTP), contraintes RGPD.",
        method:
          "Architecture cadrée, documentation (US / Gherkin / schémas).",
        cta: [
          {
            label: "Voir le projet",
            href: "https://landing-ats-recrutement.vercel.app",
          },
        ],
      },
      {
        name: "Zafira Vestiaire Solidaire — Association (2025)",
        context:
          "Site vitrine + contenu : articles, partenaires, gestion via dashboard.",
        work:
          "Intégration, authentification Google (OAuth2), focus performance & accessibilité.",
        method:
          "Priorité à la lisibilité, parcours simple, mise en production propre.",
        cta: [
          {
            label: "Voir le site",
            href: "https://www.zafirasolidaire.org",
          },
          {
            label: "Voir le projet",
            href: "https://zafira-project.vercel.app",
          },
        ],
      },
    ],
  },

  {
    id: "relation",
    title: "Collaboration",
    body: [
      "Je travaille bien avec un cadre clair : objectifs, contraintes, critères de validation.",
      "Ouvert à tout type de format de collaboration.",
    ],
  },

  {
    id: "contact",
    title: "Contact",
    body: ["Je réponds simplement."],
    cta: [
      { label: "Email", href: "mailto:jeffrey-31@hotmail.fr" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/jeffrey-basset/" },
    ],
  },
];


export const STATE_IDS = STATES.map((state) => state.id);

export const STATE_COUNT = STATE_IDS.length;
export const UNIFORM_TARGETS = STATE_IDS.map((_, index) => {
  if (STATE_COUNT <= 1) return 0;
  return index / (STATE_COUNT - 1);
});
