# PATCH — Expérience immersive « Tunnel / Décollage » (V1.1)

> Objectif : corriger le rendu actuel (trop “sections qui défilent”, objets qui bougent = saccades, perception junior) en conservant les règles non négociables : **DOM sémantique (SEO/a11y)**, **un seul canvas**, progression continue, performance.

Ce patch est écrit pour être **collé par blocs** (pas besoin de réécrire toute la doc).

---

## 0) Décision d’expérience (à acter)

**Décision V1.1**
- Abandonner la mise en scène “objets qui se déplacent autour du texte”.
- Passer à une expérience **camera-driven** : l’utilisateur a la sensation d’**avancer dans un tunnel**, avec une trajectoire type **décollage** (avance + légère montée).
- Les états narratifs existent toujours, mais ils sont **rythmés par la trajectoire** et la lumière, pas par des animations d’objets.

**Pourquoi**
- La caméra est un point focal unique → plus premium.
- Moins d’objets animés = moins de saccades + meilleure perf + meilleure lisibilité.
- L’immersion vient de la **continuité** (trajet) plutôt que d’effets.

---

## 1) Bloc à remplacer — Section 8 (Principe immersif)

> Remplace/complète le passage qui décrit l’immersion comme une suite d’objets/éléments qui bougent.

### 8.x — Nouveau principe de mise en scène : trajectoire “tunnel / décollage”

Le portfolio est un **espace unique** où l’utilisateur a la sensation d’**avancer** dans un environnement continu.

- Le scroll contrôle une progression normalisée `progress` ∈ [0..1].
- Cette progression pilote principalement **la caméra** (et seulement ensuite des détails d’ambiance).
- La trajectoire suit une **courbe douce** :
  - **avance** (axe Z)
  - **légère montée** (axe Y) → sensation de décollage
  - micro-variations latérales possibles (très légères), jamais démonstratives.

**Conséquence UX**
- On n’a plus l’impression que “des sections défilent”.
- On vit un **parcours continu**, avec des variations de lumière/profondeur qui marquent les états.

**Règle d’or**
> Le mouvement principal = la caméra. Le reste est secondaire, minimal, et budgété.

---

## 2) Bloc à remplacer — 10.4 / 10.5 (Architecture front + orchestration)

> Ajoute ce bloc dans 10.4.2 (concepts clés) et 10.5 (orchestration).

### 10.x — Orchestration V1.1 : `progress` pilote une trajectoire de caméra (spline)

**Principe**
- `scroll → targetProgress → progress (lissé)`.
- `progress` alimente :
  1) **CameraRig** (position/rotation sur une spline)
  2) **Ambiance** (lumière, fog, vignette légère si budget)
  3) **DOM** (mise en avant de l’état actif)

**Trajectoire (spline)**
- Une spline (courbe) définit le chemin de la caméra.
- `progress` échantillonne la spline :
  - position
  - direction (lookAt)

**Lissage (anti-saccade)**
- Toujours lisser `progress` (lerp / damping) pour éviter les micro-jumps.
- Aucune animation “timeline” indépendante : tout dérive de `progress`.

**Budget**
- Pas d’objets multiples qui se déplacent.
- Pas de postprocessing par défaut.
- Un environnement simple, répétable, stable.

---

## 3) Bloc à ajouter — Section “Canvas / scène” (10.8.4 ou 10.9)

### 10.x — Scène V1.1 : environnement tunnel minimal (premium sobre)

**Intention**
Créer un environnement immersif **sans** tomber dans le “cheap” :
- profondeur lisible
- lumière maîtrisée
- peu d’éléments
- stabilité

**Composants de scène (V1.1)**
- **Tunnel** (géométrie simple) :
  - cylindre/rounded-rect extrudé, ou série d’arceaux répétés.
  - matériau mat / légèrement satiné (pas de verre agressif).
- **Fog** discret : renforce la profondeur, masque les limites.
- **Lumière** :
  - 1 key light douce
  - 1 rim light subtile
  - 1 fill minimal
  - variation très légère selon l’état narratif.

**Anti-“junior look”**
- Pas d’objets flottants aléatoires.
- Pas de particules partout.
- Pas de rotation permanente “pour faire vivant”.

---

## 4) Bloc à remplacer — “Tokens visuels / mouvement” (CONTENU + MISE EN SCÈNE)

> Remplace la logique “objets + apparition” par la logique “trajet caméra + DOF/focus minimal”.

### Mouvement V1.1 (contrat)

- Le mouvement principal est porté par **la caméra** sur une spline.
- Les éléments DOM bougent **très peu** :
  - apparition par approche (opacité + micro-translation)
  - jamais de grandes translations de blocs
- Le tunnel fournit le “motion feel” → le DOM reste lisible.

### Reduced motion (obligatoire)

Si `prefers-reduced-motion: reduce` :
- Caméra : réduire fortement l’amplitude (quasi-linéaire, vitesse plus stable).
- Désactiver les micro-oscillations.
- Conserver la narration (DOM identique).

---

## 5) Bloc à ajouter — Ajustement des états narratifs (mise en scène)

> Les états restent les mêmes (0 → 6). On change **la façon de les marquer**.

### Marquage des états (V1.1)

Chaque état est marqué par une combinaison légère :
- **variation de lumière** (intensité/teinte très subtile)
- **variation de densité de fog** (léger)
- **variation de vitesse perçue** (micro-changement, jamais bloquant)

**Exemple**
- État 0 : tunnel très sombre, loin, quasi vide.
- État 1 (Hero) : key light plus présente, focalisation.
- État 2 (Identité) : tunnel plus lisible, rythme stable.
- État 3 (Méthode) : lumière plus “stable”, sensation de maîtrise.
- État 4 (Projets) : contraste un peu plus “concret”.
- État 5 : espace plus ouvert (tunnel s’élargit légèrement).
- État 6 : simplification / stabilisation (fin naturelle).

---

## 6) Bloc à ajouter — Critères d’acceptation (qualité perceptive)

### Critères d’acceptation UX (V1.1)

- **Given** je scrolle lentement ou rapidement
- **When** je traverse plusieurs états
- **Then** je perçois une progression continue (pas de “slide”)
- **And** le texte reste stable et lisible (pas d’effet qui vole l’attention)
- **And** je ne vois pas de saccades dues à des objets animés

### Critères de validation perf (V1.1)

- Le canvas ne doit pas être la cause principale de jank.
- Pas de postprocess par défaut.
- Sur mobile : tunnel simplifié (moins de segments), fog plus simple.

---

## 7) Actions concrètes côté dev (patch rapide)

> Ceci te dit **quoi changer** sans repartir de zéro.

1. **Supprimer / désactiver** les objets animés autour du texte.
2. Mettre en place un **Tunnel** simple (mesh unique ou répétition d’arceaux).
3. Implémenter **CameraRig spline** :
   - une courbe prédéfinie
   - `progress` échantillonne position + lookAt
4. Conserver le DOM tel quel : le canvas devient un **décor premium**, pas un show.
5. Ajouter un **mode reduced motion** qui aplatit la trajectoire.

---

## 8) Décision de documentation (pour éviter la dérive)

- On garde la doc “États narratifs” et “Contrat UX”.
- On met à jour uniquement :
  - la partie “mise en scène” (caméra/tunnel)
  - la partie “canvas” (scène minimaliste)
  - les critères d’acceptation (anti-saccade)

> Le contenu et l’ordre des états ne bougent pas. Seule la **grammaire visuelle** change.

