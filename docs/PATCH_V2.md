# PATCH V1.2 — Tunnel narratif immersif (contrat UX / technique)

> Ce patch remplace la logique de “sections qui défilent” jugée trop saccadée et junior.  
> Il formalise une expérience immersive continue basée sur un **tunnel narratif**,
> tout en respectant strictement **DOM, accessibilité et SEO**.

---

## 1. Principe fondamental

- La **caméra reste centrée** et progresse en profondeur.
- Le **tunnel avance, monte légèrement et se décale vers la gauche**.
- L’utilisateur ne “contrôle pas tout” : le scroll devient un **déclencheur cinématique**, pas un simple défilement.
- Le parcours reste **linéaire, lisible et guidé**.

Objectif :
> Donner une sensation de progression maîtrisée et immersive,  
> sans effets gadgets ni scroll saccadé.

---

## 2. Structure spatiale — Tunnel

### Tunnel
- Composé d’**anneaux successifs** (segments).
- Courbure :
  - Légère montée progressive
  - Décalage latéral subtil (gauche)
- Aucune décoration superflue :
  - Pas d’objets flottants
  - Pas d’éléments concurrents

Le tunnel sert uniquement à **donner une direction et un rythme**.

---

## 3. Stations narratives (États)

Chaque **état narratif** correspond à une **station** dans le tunnel.

- Une station = une zone de ralentissement + focalisation.
- Le tunnel **ne s’arrête pas**, mais le mouvement est amorti.
- La caméra s’aligne naturellement face à la station.

Ordre inchangé :
1. Seuil
2. Hero / Posture
3. Identité
4. Manière de construire
5. Preuves
6. Relation
7. Contact

---

## 4. Contenu — règle DOM absolue

### Règle non négociable
- **Le texte narratif vit dans le DOM**, toujours.
- Lisible sans canvas.
- Accessible (screen readers, SEO, sélection texte).

Le canvas **ne porte jamais le sens principal**.

---

## 5. Mesh narratif (doublon visuel optionnel)

### Principe
- Chaque station peut avoir un **repère visuel** dans le tunnel :
  - plaque
  - surface
  - silhouette neutre
- Optionnellement : un **mesh texte décoratif** (redondant).

### Règles strictes
- Le mesh texte :
  - n’est **jamais la seule source du contenu**
  - est synchronisé avec le DOM
  - disparaît si `prefers-reduced-motion`
- Le DOM reste la référence.

➡️ Ce n’est pas “deux modes”.
➡️ C’est **un seul mode**, avec un **niveau d’enrichissement visuel progressif**.

---

## 6. Scroll & rythme (cinématique contrôlée)

### Scroll behavior
- Le scroll déclenche la progression.
- La vitesse réelle est **lissée et amortie**.
- Zones de stations :
  - ralentissement perceptible
  - micro-pause implicite
  - reprise fluide

⚠️ Pas de scroll-jacking brutal :
- l’utilisateur peut toujours sortir
- aucun blocage sec
- aucun piège UX

---

## 7. Accessibilité & préférences utilisateur

### prefers-reduced-motion
- Désactivation :
  - des mouvements de tunnel
  - des ralentissements cinématiques
- Fallback :
  - layout DOM statique
  - transitions simples (opacity / translate minime)

### Sans WebGL / Canvas
- Le site reste **100 % fonctionnel**.
- Ordre narratif intact.
- Aucun contenu perdu.

---

## 8. Ce que cette approche garantit

- Immersion **mature**, pas démonstrative
- Sensation de maîtrise, pas de bidouille
- Narration continue
- Respect total :
  - accessibilité
  - SEO
  - performance

Ce n’est pas une démo technique.  
C’est une **mise en scène au service du fond**.

---

## 9. Règle finale (contrat)

> Si un effet nuit à la lisibilité,  
> à la compréhension ou à la crédibilité,  
> il est supprimé, même s’il est “impressionnant”.

---
