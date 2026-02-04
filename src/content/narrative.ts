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
      "Reconversion terminée. RNCP en cours.",
      "Ex-vendeur / conseil technique — peinture bâtiment & revêtements.",
      "Habitué aux contraintes réelles : clients, délais, litiges, qualité.",
      "Je m’efforce de finir ce que je commence.",
      "J’anticipe : risques, dépendances, étapes.",
      "Je préfère les systèmes clairs aux solutions brillantes.",
      "L’IA : un copilote pour accélérer l’apprentissage, pas un alibi.",
    ],
  },
  {
    id: "method",
    title: "Manière de construire",
    subtitle: "La crédibilité, c’est une méthode visible.",
    body: [
      "Je ne pars jamais du code.",
      "Je pars d’un cadre clair, puis je fais évoluer la solution à l’intérieur de ce cadre.",
    ],
    principles: [
      {
        title: "Comprendre avant d’implémenter",
        body: [
          "Je prends le temps de comprendre le problème, ses contraintes et ses usages.",
        ],
      },
      {
        title: "Découper pour garder le contrôle",
        body: [
          "Je découpe les sujets en unités simples et indépendantes pour avancer sans perdre la vision d’ensemble.",
        ],
      },
      {
        title: "Tester les idées avant de les embellir",
        body: [
          "Je valide d’abord le sens, la logique et l’utilité avant d’ajouter de la complexité visuelle ou technique.",
        ],
      },
    ],
  },
  {
    id: "projects",
    title: "Projets (preuve)",
    projects: [
      {
        name: "ATS / Recrutement",
        context:
          "Gestion offres / candidatures, pages candidat/RH/admin.",
        work: "Structuration, routing, API REST, auth (JWT), docs Swagger, DB, RGPD.",
        method: "Découpage en couches, contrats, itérations.",
        cta: [
          {
            label: "Voir le projet",
            href: "https://landing-ats-recrutement.vercel.app/",
          },
          { label: "Lire la démarche", href: "#" },
        ],
      },
      {
        name: "Zafira solidaire Site vitrine associatif / CMS",
        context: "Contenu, blog/articles, partenaires, mise en prod.",
        work: "Intégration, structure contenu, perf, accessibilité.",
        method: "Priorité à la lisibilité et au concret.",
        cta: [{ label: "Voir le site", href: "https://www.zafirasolidaire.org/" }],
      },
    ],
  },
  {
    id: "relation",
    title: "Travailler ensemble",
    body: [
      "J’aime les missions claires, les feedbacks réguliers, et une qualité défendable.",
      "Ouvert : CDI, freelance, apprentissage — tant que le sujet est réel et utile.",
    ],
  },
  {
    id: "contact",
    title: "Contact",
    body: ["Je réponds simplement."],
    cta: [
      { label: "Email", href: "mailto:jeffrey-31@hotmail.fr" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/jeffrey-basset/" },
      { label: "GitHub", href: "https://github.com/JeffToken31" },
    ],
  },
];

export const STATE_IDS = STATES.map((state) => state.id);

export const STATE_COUNT = STATE_IDS.length;
export const UNIFORM_TARGETS = STATE_IDS.map((_, index) => {
  if (STATE_COUNT <= 1) return 0;
  return index / (STATE_COUNT - 1);
});
