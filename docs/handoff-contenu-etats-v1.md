# Handoff — Portfolio immersif (états narratifs + architecture + exécution) — V1

> Objectif : permettre de **reprendre dans un nouveau chat** sans perte de contexte, et **travailler le contenu** (phrases / citations / fragments) en cohérence avec la doc.

---

## 1) Où tu en es (résumé fidèle)

### Décisions produit / UX actées
- Portfolio **one-page immersive** sur un **canvas unique**.
- Progression **en profondeur (axe Z)** : l’utilisateur n’a pas la sensation de “descendre une page”, il **avance**.
- Le scroll pilote une **progression continue** `progress ∈ [0..1]`.
- Immersion V1.1 : **tunnel + caméra** (trajet doux), décor minimal et stable.
- Parcours en **états narratifs** (pas des sections classiques) :
  - État 0 : Seuil d’entrée
  - État 1 : Hero / Posture
  - État 2 : Identité (fragments)
  - État 3 : Manière de construire (méthode)
  - État 4 : Preuves concrètes (projets)
  - État 5 : Relation & collaboration
  - État 6 : Contact
- **Seuil narratif** = moment court (phrase / citation) quand l’intention change, sans blocage, sans effet gratuit.
- **Un seul point focal à la fois**.
 - Le DOM reste **dans le flux scroll**, visuellement centré dans le tunnel si besoin.

### Direction artistique actée (DA)
- Ambiance **sombre nuancée**, lumière contrôlée, profondeur par contraste / mise au point.
- Influences secondaires très subtiles (verre, métal, reflets discrets), **jamais décoratives**.
- Règles : lisibilité > esthétique, sobriété, pas d’effets gratuits.
- Grille : logique **12 colonnes** (desktop) = cadre de mise en page, marges larges, axe central, respiration.

### Architecture technique actée (V1 audacieuse maîtrisée)
- Next.js (App Router) + TypeScript + Tailwind.
- WebGL/3D : Three.js + React Three Fiber (+ drei).
- Orchestrator : scroll → `progress` → `activeState` (source unique de vérité).
- **SEO + a11y** : le sens est dans le DOM, le canvas est un support d’ambiance.
- `prefers-reduced-motion` (reduced motion) + fallback DOM-only = fonctionnalités (non optionnelles).

### Wireframes (V1) déjà rédigés
- Desktop low-fi + Mobile low-fi, états + transitions + règles.

### Plan d’exécution (roadmap)
- Sprint 0 → Sprint 6, avec priorité : DOM complet avant canvas, puis orchestrator, puis expérience WebGL minimale, puis transitions, puis a11y/perf, puis polish & déploiement.

---

## 2) Le problème actuel (contexte)
Tu vas attaquer le **contenu** (citations / fragments / phrases courtes).  
Un autre chat “improvise” et ne respecte plus :
- la logique “**faire deviner le profil**” (peu de texte),
- l’usage des **seuils** (portes),
- la cohérence entre états (posture → identité → méthode → preuves → relation → contact).

Donc on repart ici avec un cadre **strict** : on définit le contenu **par état**, avec des règles de densité et de rôle.

---

## 3) Règles de contenu (V1) — très concrètes

### 3.1 La priorité du recruteur (contraintes)
- Temps court, lecture en diagonale.
- Besoin d’indices rapides : posture → crédibilité → preuve → contact.

### 3.2 Densité cible par état (règle simple)
- État 1 (Hero) : **1 phrase forte + 1 phrase secondaire** (max 2 lignes chacune).
- État 2 (Identité) : **fragments** (3 à 6 fragments, 1 fragment à la fois sur mobile).
- État 3 (Méthode) : **3 à 5 principes** (phrases courtes, “je fais X parce que Y”).
- État 4 (Projets) : **2 à 4 projets** avec *contexte en 1 phrase* + *ce que tu as livré* + *stack* (ultra court).
- État 5 (Relation) : **2 blocs max** (comment tu travailles avec les gens).
- État 6 (Contact) : **1 action primaire** + 1 secondaire max.

### 3.3 Règles d’écriture (important)
- Style : **calme, précis, mature**, zéro marketing.
- Pas de jargon gratuit, pas d’auto-célébration.
- Éviter “Je suis passionné” ; préférer “Je documente / je mesure / je livre”.
- Chaque état = **un message** (pas de multi-sujets).

### 3.4 Seuils narratifs (portes) : comment écrire
- 6 à 12 mots idéalement.
- Rôle : valider mentalement l’étape précédente + orienter vers la suivante.
- Pas une punchline d’ego, pas un slogan.
- Exemple de structure : “Comprendre le profil → maintenant, voir comment je construis.”

---

## 4) Template de contenu par état (à remplir)

> Ce template sert de base de travail : on remplit sans coder, puis on implémente sprint 1.

### État 0 — Seuil d’entrée
- Micro-texte (optionnel) : `Scroll pour entrer`
- Intention : rupture / porte

**Propositions (au choix)**  
- “Scroll pour entrer.”  
- “Avancer.”  
- “Entrer dans la mise en scène.” (si pas trop littéral)

---

### État 1 — Hero / Posture (2 phrases max)
- Phrase forte (1) : `[...]`
- Phrase secondaire (2) : `[...]`

**Contraintes**
- Pas de liste de compétences.
- Pas de biographie.
- Le ton doit donner : maîtrise calme + exigence + curiosité.

---

### État 2 — Identité (fragments)
- Fragments (3 à 6) :
  1. `[...]`
  2. `[...]`
  3. `[...]`
  4. `[...]` (option)
  5. `[...]` (option)
  6. `[...]` (option)

**Contraintes**
- Chaque fragment doit être compréhensible seul.
- Le lecteur doit “deviner” ton profil : reconversion, maturité, sens produit, rigueur.

---

### Seuil — État 2 → État 3 (porte courte)
- Phrase seuil : `[...]`

**Rôle**  
Fin identité → ouverture méthode.

---

### État 3 — Manière de construire (principes)
- Titre méthode (très court) : `[...]`
- Principes (3 à 5) :
  - `[...]`
  - `[...]`
  - `[...]`
  - `[...]` (option)
  - `[...]` (option)

**Contraintes**
- Format “action → raison” (ex : “Je documente pour réduire les retours en arrière.”)
- Doit respirer la crédibilité.

---

### État 4 — Preuves concrètes (projets)
Pour chaque projet (2 à 4) :
- Nom : `[...]`
- Contexte (1 phrase) : `[...]`
- Impact/livraison (1 phrase) : `[...]`
- Stack (ultra court) : `[...]`
- Lien : `[...]` (si dispo) / `TBD`

**Contraintes**
- Contexte avant esthétique.
- Prouver ce que tu as annoncé dans l’état 3.

---

### État 5 — Relation & collaboration
- Bloc 1 : `[...]`
- Bloc 2 (option) : `[...]`

**Contraintes**
- Ton calme, sans “vente”.
- Dire comment tu fonctionnes en équipe, comment tu gères la qualité / les compromis.

---

### État 6 — Contact
- Action primaire : `Me contacter`
- Moyen : email + copy / ou mailto
- Action secondaire (option) : LinkedIn / GitHub

---

## 5) Prompt à copier-coller pour un nouveau chat (zéro improvisation)

> Tu peux coller ce prompt tel quel dans un nouveau chat.  
> Il force le contexte et empêche l’assistant de partir ailleurs.

---

### PROMPT — NOUVEAU CHAT (À COLLER)
Je travaille sur un portfolio développeur immersif (Next.js) avec une progression narrative “en profondeur” (axe Z) dans un canvas unique, version **tunnel / caméra**.

Contexte figé (à respecter) :
- UX : parcours en états narratifs, pas des sections classiques.
- États : (0) Seuil, (1) Hero/Posture, (2) Identité en fragments, (3) Manière de construire, (4) Preuves concrètes/projets, (5) Relation & collaboration, (6) Contact.
- Scroll pilote `progress ∈ [0..1]` ; un seul point focal à la fois.
- Immersion V1.1 : **tunnel + caméra** (trajet doux), décor minimal et stable.
- Seuil narratif = phrase très courte (6–12 mots) quand l’intention change, sans blocage.
- DA : sombre nuancé, lumière contrôlée, profondeur par contraste/mise au point, sobriété stricte, lisibilité prioritaire.
- Tech : Next.js App Router + TS + Tailwind + Three/R3F (+ drei). Le sens est dans le DOM (SEO/a11y), le canvas sert l’ambiance. `prefers-reduced-motion` + fallback DOM-only obligatoires.
- Le DOM reste **dans le flux scroll** ; on peut le centrer visuellement dans le tunnel sans le sortir du DOM.
- On est à l’étape “contenu” : écrire les phrases/citations/fragments par état, très peu de texte, mais très compréhensible. Zéro marketing, ton calme et pro.

Ta tâche :
1) Me proposer 3 variations cohérentes (A/B/C) pour le contenu complet des états 0→6 (Hero 2 phrases, Identité 4–6 fragments, Seuil 2→3 1 phrase, Méthode 3–5 principes, Projets 2–3 fiches courtes, Relation 1–2 blocs, Contact 1 CTA).
2) Chaque variation doit rester très courte, orientée recruteur, sans jargon, sans auto-promo.
3) Ensuite, me donner une checklist de cohérence (1 message par état, pas de répétition, progression logique).

Ne change pas l’architecture ni les règles. Ne parle pas d’UI kit. Ne propose pas de nouvelles sections.

---

## 6) Point important : “Reduced motion”, c’est quoi (rappel simple)
`prefers-reduced-motion` est une préférence système (Windows/macOS/iOS/Android) qui indique que l’utilisateur veut **moins d’animations** (confort, vestibulaire, etc.).  
Dans le projet, ça implique :
- limiter les mouvements de caméra / parallax,
- réduire l’amplitude et la durée des transitions,
- garder le sens intact (DOM toujours présent).

---

## 7) Prochaine étape recommandée (dans l’ordre)
1) Remplir le template de contenu (section 4) en version **brouillon V0**.
2) Valider la cohérence (une idée par état).
3) Implémenter Sprint 1 (DOM complet) avec ce contenu.
4) Ajuster ensuite uniquement après tests (lecture rapide).
