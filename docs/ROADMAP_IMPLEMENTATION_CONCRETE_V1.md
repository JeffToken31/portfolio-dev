# ROADMAP_D_IMPLÉMENTATION_CONCRÈTE_V1
> Document d’exécution.  
> Objectif : savoir **quoi faire**, **dans quel ordre**, **avec quel contenu**, sans improvisation ni retour arrière inutile.

Ce document complète :
- la **documentation de conception** (figée)
- le **plan d’implémentation guidé** (structurel)

Il décrit **le travail réel à produire**, sprint par sprint.

---

## Principes non négociables

- On implémente **ce qui est déjà décidé**, rien de plus.
- Chaque sprint produit quelque chose de **visible, testable, validable**.
- Aucun sprint ne dépend d’un suivant pour être “correct”.
- Le contenu est implémenté **avant** les effets.
- Immersion V1.1 : **tunnel + caméra**, décor minimal et stable.
- Scroll guidé : **un geste = une station**, blocage pendant la transition.
- Le DOM reste **dans le flux scroll**, centré visuellement dans le tunnel si besoin.

---

## Vue d’ensemble — Roadmap V1

```text
Sprint 0 — Setup & socle
Sprint 1 — Parcours DOM complet (contenu réel)
Sprint 2 — Orchestrator & états narratifs
Sprint 3 — Canvas minimal & spatialisation
Sprint 4 — Transitions & seuils narratifs
Sprint 5 — Accessibilité, performance, fallbacks
Sprint 6 — Polish, cohérence, déploiement
```

---

## Sprint 0 — Setup & socle technique

### Objectif
Avoir un projet **stable, strict, vide de toute dette**.

### Actions concrètes
- Init Next.js (App Router)
- TypeScript strict
- ESLint / Prettier
- Tailwind (config minimale)
- Fonts définitives
- Layout global (`<main>` unique)
- Metadata de base

### Livrable
- App qui build
- Page blanche avec structure `<main>`

### Sortie de sprint
- Aucun warning
- Repo prêt à recevoir du contenu

---

## Sprint 1 — Parcours DOM complet (contenu réel)

### Objectif
Avoir **100 % du parcours narratif en HTML**, sans canvas.

### Contenu à implémenter
Créer les composants DOM suivants, avec **vrai texte** (pas de lorem) :

- `Hero`
  - Citation principale
  - Phrase secondaire
- `Identity`
  - Fragments d’identité
- `Method`
  - Principes de construction
- `Projects`
  - Cartes projets (contenu réel ou placeholder assumé)
- `Relation`
  - Projection collaboration
- `Contact`
  - Action unique

### Règles
- Aucun effet complexe
- Lisible sans CSS
- Navigation clavier OK

### Livrable
- Parcours complet scrollable
- Sens compréhensible sans animation

### Sortie de sprint
- Le site est **présentable à un recruteur**, sans “wow”

---

## Sprint 2 — Orchestrator & états narratifs

### Objectif
Connecter le scroll à une **progression logique**.

### Actions concrètes
- Implémenter `useScrollProgress`
- Normaliser `progress` (0..1)
- Définir des **targets uniformes** par état
- Exposer :
  - `activeState`
  - `stateProgress`
  - `isArrived`
- Synchroniser le DOM (mise en avant de l’état actif)

### Contenu attendu
- Mapping clair :
  - Hero → Identity → Method → Projects → Relation → Contact

### Livrable
- Scroll = avancement narratif **par paliers**
- Aucun canvas encore

### Sortie de sprint
- Les états sont **perceptibles sans animation**
- Le scroll ne saute jamais une station

---

## Sprint 3 — Canvas minimal & tunnel (V1.1)

### Objectif
Introduire la **profondeur** via un tunnel et une trajectoire caméra stable.

### Actions concrètes
- Ajouter le canvas R3F
- Tunnel minimal (arceaux répétés ou cylindre)
- Caméra sur trajectoire (spline légère)
- Liaison caméra ↔ `progress`

### Règles
- Aucun asset lourd
- Aucun texte critique
- Performance prioritaire
- Décor minimal et stable

### Livrable
- Sensation d’avancer dans un tunnel continu

### Sortie de sprint
- Expérience immersive perceptible
- Pas de baisse visible de perf

---

## Sprint 4 — Transitions & seuils narratifs (V1.1)

### Objectif
Donner du **rythme et du sens**.

### Actions concrètes
- Implémenter les seuils narratifs définis en doc
- Apparitions par approche
- Un point focal à la fois
- Transitions DOM + canvas synchronisées
- Marquage d’état par **lumière/fog** (léger)
- DOM : apparition par approche **seule** (pas d’animation canvas liée au texte)
- Déclenchement visuel aligné à l’arrivée réelle (caméra)

### Règles
- Pas d’effet démonstratif
- Durées courtes
- Scroll toujours maître

### Livrable
- Parcours fluide et lisible

### Sortie de sprint
- Les transitions racontent quelque chose

---

## Sprint 5 — Accessibilité, performance, fallbacks

### Objectif
Rendre le site **responsable et robuste**.

### Actions concrètes
- `prefers-reduced-motion`
- Désactivation canvas possible
- Tests clavier
- Audits Lighthouse
- Ajustements perf

### Livrable
- Expérience accessible
- Budgets respectés

### Sortie de sprint
- Aucun risque bloquant connu

---

## Sprint 6 — Polish, cohérence, déploiement

### Objectif
Finaliser sans surjouer.

### Actions concrètes
- Micro-ajustements rythme
- Lisibilité mobile
- Nettoyage code
- Déploiement Vercel
- Monitoring activé

### Livrable
- Version publique V1

### Sortie de sprint
- Projet prêt à être partagé

---

## Journal d’implémentation (à remplir)

À chaque décision importante :

- Date
- Décision
- Pourquoi
- Impact
- Acceptée / temporaire

---

## Règle de clôture

Quand Sprint 6 est terminé :
- on ne “bricole” plus
- toute évolution = V1.1 ou V2
