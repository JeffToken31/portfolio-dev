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


export const STATES: NarrativeState[] = [
  {
    id: "entry",
    body: ["Scroller pour entrer", "Une expérience guidée."],
  },

  {
    id: "hero",
    title:
      "Je construis des produits comme on construit une solution : avec méthode.",
    subtitle:
      "Junior en expérience, exigeant sur la clarté, la performance et l’accessibilité.",
    body: ["Scroll = progression."],
  },

  {
    id: "identity",
    fragments: [
      "Reconversion vers le développement logiciel.",
      "Ancien conseil technique en BTP, habitué aux contraintes du terrain.",
      "Décisions prises face à des clients, des délais et des problèmes réels.",
      "Je m’efforce de finir ce que je commence.",
      "J’anticipe pour éviter la complexité inutile.",
      "Je privilégie les structures claires aux solutions brillantes.",
      "L’IA est un outil d’apprentissage, pas un substitut de réflexion.",
    ],
  },

  {
    id: "method",
    title: "Manière de construire",
    subtitle: "Ce qui est clair tient mieux dans le temps.",
    principles: [
      {
        title: "Comprendre avant d’implémenter",
        body: [
          "Je prends le temps de comprendre le problème, son contexte et ses contraintes avant d’écrire du code.",
        ],
      },
      {
        title: "Structurer pour garder le contrôle",
        body: [
          "Une base claire permet de faire évoluer une solution, de la tester sereinement et de la maintenir dans le temps.",
        ],
      },
      {
        title: "Valider avant d’embellir",
        body: [
          "Je vérifie d’abord le sens et l’utilité avant d’ajouter de la complexité visuelle ou technique.",
        ],
      },
    ],
  },

  {
    id: "projects",
    title: "Projets",
    projects: [
      {
        name: "ATS / Recrutement",
        context:
          "Gestion d’offres et de candidatures avec espaces candidat, RH et administration.",
        work:
          "Architecture API, authentification, gestion des données, documentation, prise en compte du cadre RGPD.",
        method:
          "Découpage en couches, contrats clairs, itérations progressives.",
        cta: [
          {
            label: "Voir le projet",
            href: "https://landing-ats-recrutement.vercel.app",
          },
        ],
      },
      {
        name: "Zafira Solidaire — Site associatif",
        context:
          "Site vitrine avec gestion de contenu, articles et partenaires.",
        work:
          "Intégration, structuration du contenu, performance et accessibilité.",
        method:
          "Priorité à la lisibilité et à la simplicité d’usage.",
        cta: [
          {
            label: "Voir le site",
            href: "https://www.zafirasolidaire.org",
          },
          {
            label: "Lire la démarche",
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
      "J’apprécie les cadres clairs, les échanges réguliers et une qualité défendable.",
      "Ouvert à différents formats de collaboration, tant que le cadre est défini.",
    ],
  },

  {
    id: "contact",
    title: "Contact",
    body: ["Je réponds simplement."],
    cta: [
      { label: "Email", href: "mailto:jeffrey-31@hotmail.fr" },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/jeffrey-basset/",
      },
    ],
  },
];


export const STATE_IDS = STATES.map((state) => state.id);

export const STATE_COUNT = STATE_IDS.length;
export const UNIFORM_TARGETS = STATE_IDS.map((_, index) => {
  if (STATE_COUNT <= 1) return 0;
  return index / (STATE_COUNT - 1);
});
