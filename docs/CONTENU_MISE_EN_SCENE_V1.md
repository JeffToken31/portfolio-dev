# CONTENU + MISE EN SCÈNE — V1 (DOM + Canvas)
> Source de vérité **exécutable** pour Sprint 1 (DOM) + Sprint 3/4 (Canvas/Transitions).  
> Axe V1 : **Ouvert (CDI / freelance / apprentissage)** — je montre **méthode**, **fiabilité**, **capacité à apprendre sur des missions réelles**.

---

## 1) Tokens visuels V1 (minimal, non “design final”)

### 1.1 Palette V1 (provisoire mais stable)
- **Fond principal** : sombre nuancé (éviter noir pur) → `bg-neutral-950` / `bg-zinc-950`
- **Surface** (cartes/sections) : léger contraste → `bg-neutral-900/40` (ou `bg-white/5`)
- **Texte** : `text-neutral-100` (principal), `text-neutral-300` (secondaire)
- **Accent unique** (1 seule couleur) : bleu froid ou cyan très discret  
  - ex : `text-cyan-300` / `ring-cyan-300/30` (à doser)

> Objectif : **premium sobre**. Pas d’effets “verre” agressifs en V1. On garde les reflets/metal **très subtils** pour V2 si perf OK.

### 1.2 Typo V1 (provisoire)
- Contenu : Inter (Next Font) ou système (fallback propre)
- Titres : même police mais **variation de graisse** (éviter 2 polices au début)
- Hiérarchie : H1 (Hero) → H2 (états) → H3 (sous-blocs max)

### 1.3 Grille & spacing V1 (ce que “12 colonnes” veut dire)
- Sur desktop, on pense en **container** centré + **12 colonnes virtuelles** :
  - Le texte principal occupe souvent **6 à 8 colonnes** au centre.
  - Les côtés (marges) servent à la **respiration** (rendu plus premium).
- Sur mobile : 1 colonne, largeur confortable, grands espacements verticaux.

**Règle simple pour coder :**
- `max-w-6xl` pour le container
- `px-6` (mobile) → `px-10` (desktop)
- grands espacements : `py-24` / `py-32` selon états

### 1.4 Mouvement V1.1 (contrat — tunnel)
- Le mouvement principal est porté par **la caméra** (trajectoire type tunnel/décollage).
- “Apparition par approche” = **petite translation + légère opacité** (DOM uniquement, pas dans le canvas).
- Aucun objet animé autour du texte (anti-saccade / anti‑“junior”).
- `prefers-reduced-motion` : réduire amplitude + neutraliser mouvements caméra.
- Le DOM reste **dans le flux scroll**, visuellement centré dans le tunnel si besoin.
- Option future (à valider) : mode “contenu dans le tunnel” en **progressive enhancement**, avec fallback DOM-only intact.

---

## 2) Schéma des états (source de vérité)
États : 0 → 6  
Ordre : **inchangé** (desktop & mobile)

1. État 0 — Seuil d’entrée  
2. État 1 — Hero / Posture  
3. État 2 — Identité (fragments)  
4. État 3 — Manière de construire (méthode)  
5. État 4 — Preuves concrètes (projets)  
6. État 5 — Relation & collaboration  
7. État 6 — Contact

---

# 3) Contenu + Mise en scène par état (V1)

> Pour chaque état :
> - **DOM (SEO)** : ce qui est réellement rendu en HTML
> - **Mise en scène (layout)** : hiérarchie, densité, position
> - **Canvas (option V1)** : intention d’ambiance (sans asset lourd)
> - **À ne pas faire** : garde-fous anti “scolaire / marketing / prétentieux”

---

## État 0 — Seuil d’entrée

### Intention (interne)
Créer une **rupture**. Faire “entrer” sans parler de toi.

### DOM (contenu V1)
- Micro-indication : « Scroller pour entrer »
- (Option) micro-sous-texte : « Une expérience guidée. »

### Mise en scène (layout)
- Écran très vide
- Centre-bas : micro-texte
- Aucun logo, aucune liste

### Canvas (option)
- Tunnel très sombre, lointain, fog discret (profondeur)

### À ne pas faire
- Pas de slogan CV
- Pas de “Développeur full-stack” ici

---

## État 1 — Hero / Posture

### Intention (interne)
Installer : **calme**, **maturité**, **méthode**. Donner un point focal unique.

### DOM (contenu V1)
- H1 (phrase principale) :
  - « Je construis des produits comme on construit une solution : avec méthode. »
- Sous-phrase (2 lignes max) :
  - « Junior en expérience, exigeant sur la clarté, la performance et l’accessibilité. »
- Micro-ligne (option) :
  - « Scroll = progression. »

### Mise en scène (layout)
- H1 très lisible, beaucoup d’air
- Sous-phrase plus petite, contraste moindre
- Pas de stack, pas de techno listée ici

### Canvas (option)
- Légère avancée caméra, key light plus présente (spot doux)
- Rien de “wow” graphique, juste la sensation de progression

### À ne pas faire
- Pas d’ego (“exceptionnel”, “élite”)
- Pas de jargon (SSR, RSC, WebGL…) dans la Hero

---

## État 2 — Identité (fragments)

### Intention (interne)
Faire **deviner** ton profil : reconversion, ancien métier technique/terrain, curiosité, sens du concret — sans CV classique.

### DOM (contenu V1) — fragments (affichés 1 par 1)
Fragments courts (choisir 6–8, V1) :
1. « Reconversion terminée. RNCP en cours. »
2. « Ex-vendeur / conseil technique — peinture bâtiment & revêtements. »
3. « Habitué aux contraintes réelles : clients, délais, litiges, qualité. »
4. « Je m’efforce de finir ce que je commence. »
5. « J’anticipe : risques, dépendances, étapes. »
6. « Je préfère les systèmes clairs aux solutions brillantes. »
7. « L’IA : un copilote pour accélérer l’apprentissage, pas un alibi. »

### Mise en scène (layout)
- Desktop : fragments répartis verticalement, avec respirations
- Mobile : un fragment par écran (dominant)
- Chaque fragment = **un point focal**

### Canvas (option)
- Le tunnel devient plus lisible (rythme stable des arceaux)
- Profondeur plus “stable” (moins mystérieuse que la Hero)

### À ne pas faire
- Pas de timeline longue
- Pas de paragraphes autobiographiques

---

## Transition 2 → 3 — Seuil léger (fonctionnel)
### DOM (contenu V1)
- Phrase seuil (1 ligne) :
  - « La crédibilité, c’est une méthode visible. »

### Mise en scène
- Très court, respiration perceptible, puis on repart

---

## État 3 — Manière de construire

> Objectif narratif  
> Montrer **comment je réfléchis et comment je construis**, sans discours technique gratuit  
> ni promesse exagérée.

Cet état valide une chose chez le recruteur / client :
> « Je peux lui confier un sujet sérieux, il va le cadrer avant d’agir. »

---

### Principes de travail

## Manière de construire

Je ne pars jamais du code.
Je pars d’un cadre clair, puis je fais évoluer la solution à l’intérieur de ce cadre.

### 1. Comprendre avant d’implémenter
Je prends le temps de comprendre le problème, ses contraintes et ses usages
avant d’écrire la moindre ligne de code.

Un projet mal compris produit toujours une complexité inutile.

---

### 2. Découper pour garder le contrôle
Je découpe les sujets en unités simples et indépendantes :
contenu, logique, orchestration, rendu.

Ce découpage me permet d’avancer progressivement
sans perdre la vision d’ensemble.

---

### 3. Privilégier la lisibilité à l’illusion de maîtrise
Je cherche des solutions lisibles, compréhensibles et explicables,
même si elles sont moins “impressionnantes”.

Un code clair vieillit mieux qu’un code spectaculaire.

---

### 4. Tester les idées avant de les embellir
Je valide d’abord le sens, la logique et l’utilité
avant d’ajouter de la complexité visuelle ou technique.

L’esthétique et l’optimisation viennent après la stabilité.

---

### 5. Intégrer performance et accessibilité dès que le cadre est posé
Sur mes projets récents, j’intègre volontairement la performance
et l’accessibilité comme des contraintes de conception,
pas comme des corrections de fin de projet.

Je considère ces sujets comme des critères de qualité,
pas comme des options.

---

### Canvas (option)
- Lumière plus “stable” (sensation de maîtrise)
- Fog légèrement réduit pour une lecture plus nette du tunnel

---

### Règles de conception (rappel)

- Aucun jargon inutile
- Aucun principe théorique non appliqué
- Chaque point doit être vérifiable dans le projet
- Le fond précède toujours la forme

---

## État 4 — Preuves concrètes (projets)

### Intention (interne)
Ancrer : tu as déjà livré, en prod. Montrer le **contexte** avant la vitrine.

### DOM (contenu V1)
- H2 : « Projets (preuve) »
- 2 projets V1 (réels) avec structure identique :

**Projet 1 — ATS / Recrutement**
- Contexte : « Gestion offres / candidatures, pages candidat/RH/admin. »
- Ce que j’ai fait : « Structuration, routing, API REST, auth (JWT), docs Swagger, DB. »
- Point méthode : « Découpage en couches, contrats, itérations. »
- CTA : « Voir le projet » + « Lire la démarche » (option)

**Projet 2 — Site associatif / CMS**
- Contexte : « Contenu, blog/articles, partenaires, mise en prod. »
- Ce que j’ai fait : « Intégration, structure contenu, perf, accessibilité. »
- Point méthode : « Priorité à la lisibilité et au concret. »
- CTA : « Voir le site »

### Mise en scène (layout)
- Desktop : grille 2 colonnes (cartes sobres)
- Mobile : 1 carte par rang, très lisible
- Pas de carrousel en V1 (risque “cheap”)

### Canvas (option)
- Contraste un peu plus “concret” (lumière + fog léger)
- Toujours abstrait, pas d’assets lourds

### À ne pas faire
- Pas de long discours techno
- Pas de 8 projets (2 suffisent V1)

---

## État 5 — Relation & collaboration

### Intention (interne)
Projection humaine : rassurer sans vendre.

### DOM (contenu V1)
- H2 : « Travailler ensemble »
- 2 blocs max :
  - « J’aime les missions claires, les feedbacks réguliers, et une qualité défendable. »
  - « Ouvert : CDI, freelance, apprentissage — tant que le sujet est réel et utile. »

### Mise en scène (layout)
- Beaucoup d’air
- Ton calme, direct

### Canvas (option)
- Tunnel légèrement plus ouvert, respiration

### À ne pas faire
- Pas de “disponible immédiatement !!”
- Pas de promesses irréalistes

---

## État 6 — Contact

### Intention (interne)
Action simple, sans friction, sans pression.

### DOM (contenu V1)
- H2 : « Contact »
- Action primaire : Email (copier)
- Action secondaire : LinkedIn (lien)
- Micro-ligne : « Je réponds simplement. » (option)

### Mise en scène (layout)
- Minimal
- Un bouton primaire, un lien secondaire
- Focus visible (thème sombre)

### Canvas (option)
- Simplification du décor (fin naturelle)

### À ne pas faire
- Pas de formulaire long en V1
- Pas de popups

---

# 4) Ce que le portfolio dit de toi sans l’écrire (contrat implicite)
- Il réfléchit avant de coder.
- Il anticipe et structure.
- Il est junior, mais pas scolaire.
- Il respecte performance, accessibilité, SEO.
- Il peut être utile sur un vrai sujet (même sans “10 ans d’XP”).
- Il apprend vite et s’appuie sur l’IA de façon responsable.

---

# 5) “Prêt pour le dev” — mapping composants (Sprint 1)
- `StateHero.tsx` → État 1
- `StateIdentity.tsx` → État 2 (+ fragments)
- `StateMethod.tsx` → État 3 (5 principes)
- `StateProjects.tsx` → État 4 (2 cartes)
- `StateRelation.tsx` → État 5
- `StateContact.tsx` → État 6

Source de vérité future (Sprint 1) : `/content/narrative.ts`
- `states[]` : id, title, body, fragments, CTAs
- `ranges[]` : progressStart/progressEnd (Sprint 2)

---

# 6) TODO contrôlés (à remplir sans casser le cadre)
- [ ] Renseigner les liens réels des projets (repo / prod)
- [ ] Renseigner email + LinkedIn
- [ ] Ajuster 1 phrase Hero si tu la trouves trop “déclarative”
- [ ] Choisir l’accent (bleu/cyan) ou neutral-only (si tu veux encore plus sobre)
