# Portfolio Développeur — Documentation Professionnelle

> Document vivant et évolutif.  
> Objectif : cadrer, justifier et tracer les décisions (UX, produit, technique) de la conception à la mise en production.

## Table des matières

- [Portfolio Développeur — Documentation Professionnelle](#portfolio-développeur--documentation-professionnelle)
  - [Table des matières](#table-des-matières)
  - [1. Informations generales](#1-informations-generales)
  - [2. Contexte et motivation](#2-contexte-et-motivation)
  - [3. Brainstorming et inspirations](#3-brainstorming-et-inspirations)
  - [4. Cadrage : objectifs, périmètre, risques](#4-cadrage--objectifs-périmètre-risques)
    - [Objectifs produit](#objectifs-produit)
    - [In-scope](#in-scope)
    - [Out-of-scope](#out-of-scope)
    - [Risques \& mitigations](#risques--mitigations)
  - [5. Méthodologies et standards utilisés](#5-méthodologies-et-standards-utilisés)
  - [6. Parcours mental du recruteur](#6-parcours-mental-du-recruteur)
  - [7. Identité \& mise en scène — Principes d’expérience](#7-identité--mise-en-scène--principes-dexpérience)
  - [8. Conception UX — Parcours immersif \& wireframe narratif (progression en profondeur)](#8-conception-ux--parcours-immersif--wireframe-narratif-progression-en-profondeur)
    - [8.1 Principe général (rappel)](#81-principe-général-rappel)
    - [8.2 Wireframe low-fi — Desktop (V1)](#82-wireframe-low-fi--desktop-v1)
      - [Vue d’ensemble](#vue-densemble)
      - [État 0 — Seuil d’entrée](#état-0--seuil-dentrée)
      - [État 1 — Hero / Posture](#état-1--hero--posture)
      - [État 2 — Identité (fragments)](#état-2--identité-fragments)
      - [Transition — État 2 → État 3 (seuil léger)](#transition--état-2--état-3-seuil-léger)
      - [État 3 — Manière de construire](#état-3--manière-de-construire)
      - [Transition — État 3 → État 4](#transition--état-3--état-4)
      - [État 4 — Preuves concrètes](#état-4--preuves-concrètes)
      - [Transition — État 4 → État 5](#transition--état-4--état-5)
      - [État 5 — Relation \& collaboration](#état-5--relation--collaboration)
      - [État 6 — Contact](#état-6--contact)
      - [Points de contrôle](#points-de-contrôle)
    - [8.3 Wireframe low-fi — Mobile (V1)](#83-wireframe-low-fi--mobile-v1)
      - [Vue d’ensemble](#vue-densemble-1)
      - [État 0 — Seuil d’entrée (mobile)](#état-0--seuil-dentrée-mobile)
      - [État 1 — Hero / Posture (mobile)](#état-1--hero--posture-mobile)
      - [État 2 — Identité (fragments) (mobile)](#état-2--identité-fragments-mobile)
      - [Transition — État 2 → État 3 (seuil fonctionnel)](#transition--état-2--état-3-seuil-fonctionnel)
      - [État 3 — Manière de construire (mobile)](#état-3--manière-de-construire-mobile)
      - [Transition — État 3 → État 4 (respiration)](#transition--état-3--état-4-respiration)
      - [État 4 — Preuves concrètes / Projets (mobile)](#état-4--preuves-concrètes--projets-mobile)
      - [Transition — État 4 → État 5 (ouverture)](#transition--état-4--état-5-ouverture)
      - [État 5 — Relation \& collaboration (mobile)](#état-5--relation--collaboration-mobile)
      - [État 6 — Contact (mobile)](#état-6--contact-mobile)
      - [Points de contrôle — Mobile](#points-de-contrôle--mobile)
    - [8.4 Concepts UX — Seuil narratif](#84-concepts-ux--seuil-narratif)
    - [8.5 Transitions détaillées — Contrat UX](#85-transitions-détaillées--contrat-ux)
      - [Transition — État 1 → État 2](#transition--état-1--état-2)
      - [Transition — État 2 → État 3](#transition--état-2--état-3)
      - [Transition — État 3 → État 4](#transition--état-3--état-4-1)
      - [Transition — État 4 → État 5](#transition--état-4--état-5-1)
      - [Transition — État 5 → État 6](#transition--état-5--état-6)
  - [9. Direction artistique](#9-direction-artistique)
    - [9.1 Intention générale](#91-intention-générale)
    - [9.2 Orientation choisie](#92-orientation-choisie)
    - [9.3 Principes non négociables](#93-principes-non-négociables)
    - [9.4 Palette \& contrastes (à préciser)](#94-palette--contrastes-à-préciser)
    - [9.5 Règles de mouvement \& animation (DA)](#95-règles-de-mouvement--animation-da)
    - [9.6 Répartition de l’audace visuelle](#96-répartition-de-laudace-visuelle)
    - [9.7 Objectif perceptif](#97-objectif-perceptif)
    - [9.8 Typographie](#98-typographie)
    - [9.9 Grille \& spacing](#99-grille--spacing)
  - [10. Architecture technique et déploiement (V1 — trajectoire audacieuse)](#10-architecture-technique-et-déploiement-v1--trajectoire-audacieuse)
    - [10.1 Décision d’architecture (résumé exécutif)](#101-décision-darchitecture-résumé-exécutif)
    - [10.2 Objectifs techniques (liés aux objectifs UX)](#102-objectifs-techniques-liés-aux-objectifs-ux)
    - [10.3 Contraintes et budgets (performance, accessibilité, SEO)](#103-contraintes-et-budgets-performance-accessibilité-seo)
      - [10.3.1 Principes performance (V1)](#1031-principes-performance-v1)
      - [10.3.2 Accessibilité — “Reduced motion” (V1)](#1032-accessibilité--reduced-motion-v1)
      - [10.3.3 SEO (V1)](#1033-seo-v1)
    - [10.4 Architecture front — découpage (V1)](#104-architecture-front--découpage-v1)
      - [10.4.1 Vue d’ensemble](#1041-vue-densemble)
      - [10.4.2 Concepts techniques clés](#1042-concepts-techniques-clés)
    - [10.5 Orchestration scroll → progression (V1)](#105-orchestration-scroll--progression-v1)
    - [10.6 Roadmap maîtrisée (V1 → V2)](#106-roadmap-maîtrisée-v1--v2)
    - [10.7 Déploiement (Vercel) — principes](#107-déploiement-vercel--principes)
    - [10.8 Stack cible détaillée (V1)](#108-stack-cible-détaillée-v1)
      - [10.8.1 Langage \& conventions](#1081-langage--conventions)
      - [10.8.2 Framework \& rendu](#1082-framework--rendu)
      - [10.8.3 UI / Styles](#1083-ui--styles)
      - [10.8.4 3D / Canvas](#1084-3d--canvas)
      - [10.8.5 Orchestration scroll → progress](#1085-orchestration-scroll--progress)
      - [10.8.6 Animation](#1086-animation)
      - [10.8.7 Accessibilité (a11y) — stack et règles](#1087-accessibilité-a11y--stack-et-règles)
      - [10.8.8 SEO](#1088-seo)
      - [10.8.9 Outils qualité \& perf](#1089-outils-qualité--perf)
      - [10.8.10 Dépendances (liste “propre” V1)](#10810-dépendances-liste-propre-v1)
    - [10.9 Structure du projet — Architecture en couches (V1)](#109-structure-du-projet--architecture-en-couches-v1)
      - [Principe fondamental](#principe-fondamental)
      - [Vue d’ensemble des couches](#vue-densemble-des-couches)
      - [1. App Shell — Next.js](#1-app-shell--nextjs)
        - [Rôle](#rôle)
        - [Responsabilités](#responsabilités)
        - [Technologies](#technologies)
        - [Règles](#règles)
      - [2. Content Layer — DOM sémantique](#2-content-layer--dom-sémantique)
        - [Rôle](#rôle-1)
        - [Contenu](#contenu)
        - [Technologies](#technologies-1)
        - [Règles strictes](#règles-strictes)
      - [3. Experience Layer — Canvas immersif (R3F)](#3-experience-layer--canvas-immersif-r3f)
        - [Rôle](#rôle-2)
        - [Contenu](#contenu-1)
        - [Technologies](#technologies-2)
        - [Règles](#règles-1)
      - [4. Orchestrator — Progression \& états](#4-orchestrator--progression--états)
        - [Rôle](#rôle-3)
        - [Responsabilités](#responsabilités-1)
        - [Technologies](#technologies-3)
        - [Règles](#règles-2)
      - [Arborescence cible (indicative)](#arborescence-cible-indicative)
      - [Contrats entre couches](#contrats-entre-couches)
      - [Pourquoi cette structure est clé pour ce projet](#pourquoi-cette-structure-est-clé-pour-ce-projet)
      - [Critères de validation (V1)](#critères-de-validation-v1)
    - [10.10 — SEO \& Accessibilité avec Canvas (V1)](#1010--seo--accessibilité-avec-canvas-v1)
      - [10.10.1 Principe fondamental](#10101-principe-fondamental)
        - [Règle d’or](#règle-dor)
      - [10.10.2 Structure sémantique du document](#10102-structure-sémantique-du-document)
        - [Organisation HTML](#organisation-html)
        - [Lisibilité sans styles](#lisibilité-sans-styles)
      - [10.10.3 Navigation clavier \& focus](#10103-navigation-clavier--focus)
        - [Navigation clavier](#navigation-clavier)
        - [Focus visible](#focus-visible)
      - [10.10.4 Préférence utilisateur — Réduction des animations](#10104-préférence-utilisateur--réduction-des-animations)
        - [Définition](#définition)
        - [Application dans le projet](#application-dans-le-projet)
      - [10.10.5 Canvas \& accessibilité](#10105-canvas--accessibilité)
        - [Règles strictes](#règles-strictes-1)
        - [Rôle du canvas](#rôle-du-canvas)
      - [10.10.6 Fallbacks \& résilience](#10106-fallbacks--résilience)
        - [Absence ou désactivation WebGL](#absence-ou-désactivation-webgl)
      - [10.10.7 SEO — Next.js](#10107-seo--nextjs)
        - [Indexation](#indexation)
        - [SEO technique](#seo-technique)
      - [10.10.8 Performance \& accessibilité](#10108-performance--accessibilité)
      - [10.10.9 Critères d’acceptation UX (BDD)](#10109-critères-dacceptation-ux-bdd)
        - [Scénario 1 — Canvas indisponible](#scénario-1--canvas-indisponible)
        - [Scénario 2 — Réduction des animations](#scénario-2--réduction-des-animations)
        - [Scénario 3 — Navigation clavier](#scénario-3--navigation-clavier)
      - [10.10.10 Résumé — Contrat qualité](#101010-résumé--contrat-qualité)
    - [10.11 — Performance \& budgets](#1011--performance--budgets)
      - [10.11.1 Intention](#10111-intention)
      - [10.11.2 Positionnement](#10112-positionnement)
      - [10.11.3 Définition des budgets de performance](#10113-définition-des-budgets-de-performance)
        - [Budgets cibles (V1)](#budgets-cibles-v1)
      - [10.11.4 Budgets liés aux assets](#10114-budgets-liés-aux-assets)
        - [JavaScript](#javascript)
        - [Canvas \& animations](#canvas--animations)
        - [Médias](#médias)
      - [10.11.5 Relation entre performance et narration](#10115-relation-entre-performance-et-narration)
      - [10.11.6 Accessibilité et performance perçue](#10116-accessibilité-et-performance-perçue)
      - [10.11.7 Mesure et validation](#10117-mesure-et-validation)
      - [10.11.8 Risques identifiés et mitigations](#10118-risques-identifiés-et-mitigations)
        - [Risque : surcharge liée au canvas](#risque--surcharge-liée-au-canvas)
        - [Risque : dette technique liée aux animations](#risque--dette-technique-liée-aux-animations)
        - [Risque : divergence desktop / mobile](#risque--divergence-desktop--mobile)
      - [10.11.9 Décisions actées](#10119-décisions-actées)
      - [10.11.10 Hypothèses \& évolutions possibles](#101110-hypothèses--évolutions-possibles)
    - [10.12 — Déploiement \& monitoring](#1012--déploiement--monitoring)
      - [10.12.1 Intention](#10121-intention)
      - [10.12.2 Positionnement](#10122-positionnement)
      - [10.12.3 Plateforme de déploiement — Décision](#10123-plateforme-de-déploiement--décision)
        - [Décision](#décision)
        - [Justification](#justification)
        - [Conséquence](#conséquence)
      - [10.12.4 Environnements](#10124-environnements)
        - [Environnements définis](#environnements-définis)
        - [Règles](#règles-3)
      - [10.12.5 Déploiement continu (CI/CD)](#10125-déploiement-continu-cicd)
        - [Principe](#principe)
        - [Objectifs](#objectifs)
      - [10.12.6 Monitoring — Performance](#10126-monitoring--performance)
        - [Indicateurs suivis](#indicateurs-suivis)
        - [Outils](#outils)
        - [Règles](#règles-4)
      - [10.12.7 Monitoring — UX \& usage](#10127-monitoring--ux--usage)
      - [10.12.8 Gestion des erreurs](#10128-gestion-des-erreurs)
        - [Objectif](#objectif)
        - [Approche](#approche)
      - [10.12.9 Sécurité \& conformité](#10129-sécurité--conformité)
        - [Principes](#principes)
        - [Conformité](#conformité)
      - [10.12.10 Stratégie d’évolution](#101210-stratégie-dévolution)
      - [10.12.11 Décisions actées](#101211-décisions-actées)
  - [11. Implémentation, tests, qualité](#11-implémentation-tests-qualité)
  - [12 — Livrables \& suivi (V1)](#12--livrables--suivi-v1)
    - [12.1 Intention](#121-intention)
    - [12.2 Livrables principaux](#122-livrables-principaux)
      - [12.2.1 Portfolio en production](#1221-portfolio-en-production)
      - [12.2.2 Code source](#1222-code-source)
      - [12.2.3 Documentation projet](#1223-documentation-projet)
    - [12.3 Checklist de mise en ligne finale](#123-checklist-de-mise-en-ligne-finale)
      - [Qualité produit](#qualité-produit)
      - [Performance \& accessibilité](#performance--accessibilité)
      - [Technique](#technique)
    - [12.4 Suivi post‑mise en ligne](#124-suivi-postmise-en-ligne)
      - [12.4.1 Observation](#1241-observation)
      - [12.4.2 Itérations légères](#1242-itérations-légères)
    - [12.5 Évolution du portfolio dans le temps](#125-évolution-du-portfolio-dans-le-temps)
    - [12.6 Posture professionnelle (message implicite)](#126-posture-professionnelle-message-implicite)

---

## 1. Informations generales

- **Nom du projet :** Portfolio Développeur Full-Stack JS
- **Auteur :** [Ton nom]
- **Cible :** recruteurs (poste), clients (freelance), pairs techniques
- **Objectif global :**
  - Démontrer des compétences full-stack JS (Next.js/React, Node/Nest)
  - Mettre en avant la **maturité professionnelle** (reconversion) et la **méthode**
  - Construire une expérience **immersive et narrative** guidant le lecteur

---

## 2. Contexte et motivation

- **Contexte :** reconversion (≈ 1,5–2 ans). Expérience précédente : vente, prescription technique, gestion de litiges (B2B/B2C).
- **Intention :** créer un portfolio qui marque dès l’entrée, sans démonstration gratuite.
- **Positionnement :** junior techniquement, mais **mature dans la posture** : raisonnement, décisions, documentation.

---

## 3. Brainstorming et inspirations

- **Expérience visée :** one-page immersive basée sur un **canvas unique évolutif**.
- **Principes directeurs :**
  - **Audace dans l’intention**, **sobriété dans l’exécution**
  - Chaque animation sert une intention UX
- **Inspirations :**
  - Sites immersifs (ex : Active Theory, GTA6) pour la mise en scène
  - Product thinking (clarté, hiérarchie, conversion)
- **Hypothèses initiales :**
  - Effet wow porté par l’entrée et la Hero
  - Immersion maintenue par la progression spatiale

---

## 4. Cadrage : objectifs, périmètre, risques

### Objectifs produit

- Créer un **wow immédiat** sans sacrifier lisibilité et performance
- Montrer une capacité à **raisonner et structurer**
- Conduire naturellement vers le contact

### In-scope

- One-page immersive (canvas unique)
- Parcours narratif guidé par le scroll
- Projets contextualisés
- Performance, accessibilité, SEO prioritaires

### Out-of-scope

- Backend complexe
- Auth complète
- Effets 3D démonstratifs

### Risques & mitigations

- **Surcharge visuelle →** sobriété stricte
- **Perte de lisibilité →** hiérarchie claire, tests
- **Complexité inutile →** itération progressive

---

## 5. Méthodologies et standards utilisés

- **UX cognitif :** parcours mental du recruteur
- **États narratifs :** progression par transformations successives
- **Gherkin (BDD) :** validation des intentions UX
- **Documentation vivante :** décisions consignées comme des commits
- **Qualité :** performance, accessibilité, maintenabilité

---

## 6. Parcours mental du recruteur

1. Accroche
2. Posture
3. Raisonnement
4. Crédibilité
5. Projection
6. Contact

Chaque étape correspond à un **état narratif**, non à une section classique.

---

## 7. Identité & mise en scène — Principes d’expérience

L’identité du portfolio repose sur l’expérience vécue, pas sur un branding classique.

- Pas de logo central
- Pas de navigation décorative
- Aucun effet gratuit

Le site doit :

- créer une rupture dès l’entrée
- inviter à la réflexion (Hero cognitive)
- maintenir une immersion fluide
- rester lisible et confortable

La 3D est envisagée comme un **outil de spatialisation**, pas comme une finalité visuelle.

---

## 8. Conception UX — Parcours immersif & wireframe narratif (progression en profondeur)

Le portfolio est conçu comme un **espace unique évolutif**.
Le scroll vertical agit comme un **déclencheur d’avancement**, tandis que la narration progresse principalement sur un **axe de profondeur (axe Z)**.

L’utilisateur n’a pas la sensation de descendre une page,
mais d’**avancer dans une expérience continue**.

### 8.1 Principe général (rappel)

- Un seul canvas
- Progression guidée par le scroll
- Le scroll contrôle la vitesse d’avancement
- Apparition des contenus par rapprochement et mise au point
- Progression principale sur l’axe de profondeur (axe Z)

> Note : sur la documentation, on conserve des schémas verticaux (↓) uniquement comme convention de lecture.  
> Dans l’expérience, l’utilisateur **avance** dans la profondeur.

### 8.2 Wireframe low-fi — Desktop (V1)

> Document de structure visuelle.  
> Objectif : poser la hiérarchie, le rythme et la logique spatiale avant toute direction graphique.

---

#### Vue d’ensemble

```text
[ État 0 ] — Seuil d’entrée
      ⇢
[ État 1 ] — Hero / Posture
      ⇢
[ État 2 ] — Identité (fragments)
      ⇢
[ État 3 ] — Manière de construire
      ⇢
[ État 4 ] — Preuves concrètes
      ⇢
[ État 5 ] — Relation & collaboration
      ⇢
[ État 6 ] — Contact
```

Un seul canvas continu.  
Aucune section plein écran rigide.

---

#### État 0 — Seuil d’entrée

```diff
+--------------------------------------------------+
|                                                  |
|            (espace lointain / vide)              |
|                                                  |
|               indication discrète                |
|               "scroll pour entrer"               |
|                                                  |
+--------------------------------------------------+
```

**Objectif UX**

- Marquer la rupture avec l’extérieur
- Inviter à entrer dans l’expérience

**Règles**

- Pas de logo
- Pas de texte long
- Pas d’effet décoratif

---

#### État 1 — Hero / Posture

```diff
+--------------------------------------------------+
|                                                  |
|        [ PHRASE / CITATION FORTE ]               |
|                                                  |
|      [ phrase secondaire / posture ]             |
|                                                  |
|            indication de progression             |
|                                                  |
+--------------------------------------------------+
```

**Objectif UX**

- Installer la posture intellectuelle
- Créer le premier impact

**Règles**

- Une phrase dominante
- Beaucoup d’air
- Aucun listing de compétences

---

#### État 2 — Identité (fragments)

```diff
+--------------------------------------------------+
|                                                  |
|        [ fragment identité ]                     |
|                                                  |
|              [ fragment ]                        |
|                                                  |
|        [ fragment identité ]                     |
|                                                  |
+--------------------------------------------------+
```

**Objectif UX**

- Faire deviner le profil
- Créer de la cohérence sans CV classique

**Règles**

- Fragments courts
- Apparition progressive
- Lecture non linéaire possible

---

#### Transition — État 2 → État 3 (seuil léger)

```diff
+--------------------------------------------------+
|                                                  |
|           [ phrase courte / seuil ]              |
|                                                  |
+--------------------------------------------------+
```

**Rôle**

- Valider la compréhension
- Recentrer vers la méthode

---

#### État 3 — Manière de construire

```diff
+--------------------------------------------------+
|                                                  |
|            [ Titre méthode ]                     |
|                                                  |
|        [ principe / point ]                      |
|        [ principe / point ]                      |
|        [ principe / point ]                      |
|                                                  |
+--------------------------------------------------+
```

**Objectif UX**

- Montrer la logique de travail
- Installer la crédibilité

**Règles**

- Structure claire
- Densité contrôlée
- Aucun jargon inutile

---

#### Transition — État 3 → État 4

```diff
+--------------------------------------------------+
|                                                  |
|            (respiration visuelle)                |
|                                                  |
+--------------------------------------------------+
```

---

#### État 4 — Preuves concrètes

```diff
+--------------------------------------------------+
|                                                  |
|        [ Projet ]    [ Projet ]                  |
|                                                  |
|        [ Projet ]    [ Projet ]                  |
|                                                  |
+--------------------------------------------------+
```

**Objectif UX**

- Vérifier ce qui a été annoncé
- Ancrer dans le réel

**Règles**

- Cartes sobres
- Contexte avant esthétique
- Pas de vitrine graphique

---

#### Transition — État 4 → État 5

```diff
+--------------------------------------------------+
|                                                  |
|            (espace plus ouvert)                  |
|                                                  |
+--------------------------------------------------+
```

---

#### État 5 — Relation & collaboration

```diff
+--------------------------------------------------+
|                                                  |
|        [ phrase relationnelle ]                  |
|                                                  |
|        [ projection collaboration ]              |
|                                                  |
+--------------------------------------------------+
```

**Objectif UX**

- Projection humaine
- Rassurer sans convaincre

---

#### État 6 — Contact

```diff
+--------------------------------------------------+
|                                                  |
|          [ action de contact unique ]            |
|                                                  |
+--------------------------------------------------+
```

**Objectif UX**

- Conversion naturelle
- Friction minimale

**Règles**

- Une action
- Aucun sentiment d’urgence

---

#### Points de contrôle

- Chaque état porte un seul message
- La densité augmente puis redescend
- Aucun état ne répète le précédent
- Le wireframe fonctionne sans couleur

---

### 8.3 Wireframe low-fi — Mobile (V1)

> Document de structure UX.  
> Objectif : décliner le parcours narratif desktop en version mobile, sans modifier l’ordre, le sens ni les intentions.

---

#### Vue d’ensemble

```text
[ État 0 ] — Seuil d’entrée
      ⇢
[ État 1 ] — Hero / Posture
      ⇢
[ État 2 ] — Identité (fragments)
      ⇢
[ État 3 ] — Manière de construire
      ⇢
[ État 4 ] — Preuves concrètes (projets)
      ⇢
[ État 5 ] — Relation & collaboration
      ⇢
[ État 6 ] — Contact
```

Mobile = compression contrôlée du parcours desktop.  
Un seul message dominant par écran.

---

#### État 0 — Seuil d’entrée (mobile)

```text
+------------------------------+
|                              |
|        (espace / vide)       |
|                              |
|       "scroll pour entrer"   |
|                              |
+------------------------------+
```

**Objectif UX**

- Marquer la rupture avec l’extérieur
- Inviter à entrer dans l’expérience

**Règles**

- Une micro‑indication maximum
- Aucun texte long
- Aucun élément décoratif

---

#### État 1 — Hero / Posture (mobile)

```text
+------------------------------+
|                              |
|   [ CITATION / PHRASE FORTE ]|
|                              |
| [ phrase secondaire courte ] |
|                              |
|      (indication scroll)     |
+------------------------------+
```

**Objectif UX**

- Impact immédiat
- Installation de la posture intellectuelle

**Règles**

- Phrase secondaire limitée (2 lignes max)
- Beaucoup d’air vertical
- Aucun listing de compétences

---

#### État 2 — Identité (fragments) (mobile)

Lecture volontairement linéaire : un fragment à la fois.

```text
+------------------------------+
|                              |
|     [ fragment identité ]    |
|                              |
+------------------------------+
```

Puis, au scroll :

```text
+------------------------------+
|                              |
|        [ fragment ]          |
|                              |
+------------------------------+
```

**Objectif UX**
- Faire deviner le profil
- Installer une cohérence implicite

**Règles**

- Fragments courts
- Jamais deux fragments concurrents à l’écran
- Apparition progressive par approche

---

#### Transition — État 2 → État 3 (seuil fonctionnel)

```text
+------------------------------+
|                              |
|     [ phrase courte / seuil ]|
|                              |
+------------------------------+
```

**Rôle**

- Valider la compréhension de l’identité
- Recentrer vers la méthode

---

#### État 3 — Manière de construire (mobile)

Organisation verticale simple.

```text
+------------------------------+
|                              |
|       [ Titre méthode ]      |
|                              |
|   [ principe / point ]       |
|   [ principe / point ]       |
|   [ principe / point ]       |
|                              |
+------------------------------+
```

**Objectif UX**

- Montrer la logique de travail
- Installer la crédibilité

**Règles**

- 3 à 5 points visibles maximum
- Aucun jargon
- Densité contrôlée

---

#### Transition — État 3 → État 4 (respiration)

```text
+------------------------------+
|                              |
|        (respiration)         |
|                              |
+------------------------------+
```

Transition optionnelle, sans texte.

---

#### État 4 — Preuves concrètes / Projets (mobile)

Une carte par rang.

```text
+------------------------------+
|                              |
|          [ PROJET ]          |
|  titre                       |
|  contexte (court)            |
|  action / voir               |
|                              |
+------------------------------+
```

**Objectif UX**

- Vérification simple
- Ancrage dans le réel

**Règles**

- Cartes sobres
- Contexte court (1–2 lignes)
- Pas de vitrine graphique

---

#### Transition — État 4 → État 5 (ouverture)

```text
+------------------------------+
|                              |
|     (espace plus ouvert)     |
|                              |
+------------------------------+
```

---

#### État 5 — Relation & collaboration (mobile)

```text
+------------------------------+
|                              |
|   [ phrase relationnelle ]   |
|                              |
| [ projection collaboration ]|
|                              |
+------------------------------+
```

**Objectif UX**

- Projection humaine
- Rassurer sans convaincre

**Règles**

- Deux blocs maximum
- Ton calme et direct

---

#### État 6 — Contact (mobile)

```text
+------------------------------+
|                              |
|     [ ME CONTACTER ]         |
|                              |
|  email / linkedin / copy     |
|                              |
+------------------------------+
```

**Objectif UX**

- Action naturelle
- Friction minimale

**Règles**

- Une action primaire
- Une action secondaire maximum
- Aucun sentiment d’urgence

---

#### Points de contrôle — Mobile

- Un seul message dominant par écran
- Transitions plus rapides que sur desktop
- Seuils fonctionnels, jamais décoratifs
- Parcours compréhensible en moins d’une minute
- Le wireframe fonctionne sans couleur ni animation

---

### 8.4 Concepts UX — Seuil narratif

**Définition**  
Un seuil narratif est un **moment de passage perceptible** entre deux états narratifs.  
Il ne s’agit ni d’une section, ni d’un effet spectaculaire, mais d’un **temps de bascule** dans l’expérience.

Le seuil peut être perçu comme une **porte** (ou “passage”) :  
il **marque le changement d’intention** sans casser l’immersion, ni ralentir inutilement le recruteur.

---

**Rôle UX**  
Le seuil narratif a pour objectifs :

- Marquer une **transition de sens**
- Introduire une **respiration cognitive**
- Maintenir la continuité de l’immersion
- Préparer l’utilisateur au changement d’intention du contenu

Le seuil n’interrompt pas le parcours, il le **recalibre**.

---

**Positionnement dans le parcours**

- Un seuil apparaît **entre deux états narratifs**
- Il n’est **pas systématique**
- Il est utilisé lorsque :
  - l’intention change fortement
  - le rythme doit être ajusté
  - une pause cognitive est nécessaire

Tous les passages ne nécessitent pas un seuil.

---

**Relation avec la progression spatiale**

- Le seuil se situe sur l’**axe de profondeur (axe Z)**
- Il correspond à une **zone de transition**, pas à un point fixe
- L’axe de progression reste **rectiligne** (axe Z) pour la V1

L’utilisateur perçoit une **variation subtile du chemin**, pas une rupture.

---

**Contenu du seuil**
Un seuil narratif peut contenir :

- Une phrase courte
- Une citation
- Un fragment de pensée

Ce contenu doit :

- Être lisible rapidement
- Provoquer une réflexion
- Ne jamais devenir un message principal

Le contenu doit rester court : il sert de **signal** (porte), pas de message principal.

---

**Règles de conception**

- Aucun effet spectaculaire
- Scroll guidé par paliers (blocage pendant la transition)
- Aucun contenu long
- Aucun élément décoratif gratuit

Le seuil doit être perceptible, fluide et discret.

---

**Relation avec le langage de mouvement**

- Apparition par **approche**, jamais par apparition brutale
- Lisibilité progressive
- Synchronisation avec l’avancement sur l’axe Z
- Intégration continue dans le mouvement

---

**Relation avec la direction artistique**

- Le seuil n’impose aucun style
- Il doit être soutenu, pas surjoué
- La direction artistique renforce la respiration et la lisibilité

---

**Relation avec la technique**

- Le seuil n’est pas une fonctionnalité
- C’est un **concept d’expérience**
- Toute implémentation doit préserver :
  - la fluidité
  - les performances
  - l’accessibilité

---

**Résumé (contrat UX)**

- Le seuil est un **moment**, pas un effet
- Il prépare sans interrompre
- Il accompagne sans distraire
- Il donne du sens sans expliquer

---

### 8.5 Transitions détaillées — Contrat UX

**Aperçu des transitions**
1 → 2, 2 → 3, 3 → 4, 4 → 5, 5 → 6

Les transitions décrivent **comment l’utilisateur progresse d’un état narratif à l’autre**.
Elles constituent un **contrat d’expérience**, indépendant de la direction artistique
et de l’implémentation technique.

---

#### Transition — État 1 → État 2  

**Posture (Hero cognitive) → Identité en construction**

**Intention UX**  
Passer d’un **temps de pause intellectuelle** à une **première compréhension du profil**,
sans rupture ni effet de “section suivante”.

L’utilisateur ne doit pas percevoir un changement de page,
mais une **progression naturelle dans un même espace**.

---

**Déclencheur**  

- Scroll volontaire après la Hero  
- Aucun déclenchement automatique

---

**Transformation de l’espace**  

- Avancée progressive sur l’axe de profondeur (axe Z)
- La Hero :
  - recule légèrement dans l’espace
  - perd son statut de point focal principal
- L’environnement :
  - se stabilise
  - gagne en structure visuelle

---

**Évolution du contenu**  

- La citation :
  - diminue légèrement en échelle
  - devient un élément d’arrière-plan
- Le contenu d’identité :
  - apparaît par fragments
  - devient lisible à mesure de l’approche
  - n’est jamais affiché d’un seul bloc

---

**Rythme & contrôle**  

- Transition continue, sans seuil net
- Le scroll contrôle la vitesse de progression
- Aucun point de blocage ou d’animation imposée

---

**Hiérarchie visuelle**  

- Un seul point d’attention à la fois :
  1. La citation (au début de la transition)
  2. Le contenu d’identité (à l’arrivée)
- Aucun élément concurrent ou décoratif

---

**Ressenti utilisateur attendu**  
> « Je comprends progressivement qui il est,  
sans avoir l’impression qu’on me l’explique. »

---

**Règles de conception**  

- Aucun fade utilisé seul (toujours accompagné d’un mouvement)
- Aucun texte pleinement lisible trop tôt
- Aucune rupture brutale de rythme
- Aucun effet démonstratif

---

**Critères d’acceptation UX (BDD — V1)**  

- **Given** je suis positionné sur l’état Posture (Hero)
- **When** je déclenche un scroll vers l’avant
- **Then** la citation perd progressivement son rôle central
- **And** le contenu d’identité devient lisible par approche
- **And** je n’ai jamais l’impression de changer de page

---

#### Transition — État 2 → État 3  

**Identité en construction → Manière de construire**

**Intention UX**  
Passer de la compréhension du **profil** à la compréhension de la **méthode**,  
sans ralentir le rythme ni surcharger le lecteur.

L’objectif est de valider implicitement :
> « J’ai compris qui il est. Maintenant, je veux voir comment il travaille. »

---

**Déclencheur**  

- Scroll continu après l’état Identité  
- Aucun arrêt imposé

---

**Transformation de l’espace**  

- Avancée continue sur l’axe de profondeur (axe Z)
- L’espace :
  - gagne en structure
  - devient plus stable et plus lisible
- La courbure de l’axe peut être légèrement accentuée pour marquer le changement de posture

---

**Seuil narratif (léger)**  

- Zone de transition courte
- Rythme légèrement ralenti, sans blocage
- Apparition d’une **phrase courte ou citation fonctionnelle**

Rôle du seuil :

- Valider la compréhension de l’identité
- Recalibrer l’attention vers la méthode
- Marquer un changement de sujet, pas une pause

---

**Contenu du seuil**  

- Phrase brève, lisible immédiatement
- Pas de citation longue
- Ton affirmatif, non démonstratif

Le seuil ne doit jamais devenir un message central.

---

**Évolution du contenu**  

- Le contenu d’identité :
  - s’éloigne progressivement
  - perd son statut de point focal
- Les éléments liés à la méthode :
  - apparaissent par approche
  - se structurent progressivement
  - donnent une sensation de clarté et d’organisation

---

**Rythme & contrôle**  

- Transition fluide et continue
- Le scroll contrôle entièrement la progression
- Aucun effet spectaculaire ou décoratif

---

**Hiérarchie visuelle**  

- Un seul point d’attention à la fois :
  1. Le seuil (très bref)
  2. Les premiers éléments de la méthode
- Aucun élément concurrent

---

**Ressenti utilisateur attendu**  
> « Je vois clairement comment il réfléchit et comment il construit.  
> C’est structuré, ça me rassure. »

---

**Règles de conception**  

- Pas de ralentissement excessif
- Pas de surcharge visuelle
- Pas de texte explicatif long
- Pas de rupture de rythme

---

**Critères d’acceptation UX (BDD — V1)**  

- **Given** je suis positionné sur l’état Identité
- **When** je poursuis la progression vers l’avant
- **Then** un seuil léger valide la fin de l’état Identité
- **And** mon attention est redirigée vers la méthode
- **And** je n’ai jamais l’impression d’une pause inutile

---

#### Transition — État 3 → État 4  

**Manière de construire → Preuves concrètes**

**Intention UX**  
Passer de la compréhension de la **méthode** à la **preuve tangible**,  
sans effet de démonstration ni rupture de crédibilité.

L’objectif est de transformer la confiance intellectuelle en confiance factuelle.

---

**Déclencheur**  

- Scroll continu après l’état Manière de construire
- Aucun arrêt ou interaction forcée

---

**Transformation de l’espace**  

- Avancée stable sur l’axe de profondeur (axe Z)
- L’espace :
  - devient plus concret
  - gagne en matérialité
  - réduit légèrement l’abstraction visuelle

---

**Seuil narratif**  

- Seuil présent, très discret
- Rythme légèrement stabilisé
- Aucun effet visuel marquant

Rôle du seuil :

- Clore la phase de raisonnement
- Préparer l’entrée dans le concret
- Installer une attente de preuve

---

**Évolution du contenu**  

- Les éléments de méthode :
  - s’éloignent progressivement
  - cessent d’être le point focal
- Les projets :
  - apparaissent par approche
  - sont contextualisés
  - ne sont jamais présentés comme une vitrine

---

**Rythme & contrôle**  

- Transition fluide
- Le scroll contrôle l’avancement
- Aucun effet spectaculaire

---

**Hiérarchie visuelle**  

- Un seul point d’attention :
  - les premiers éléments concrets
- Aucun élément concurrent

---

**Ressenti utilisateur attendu**  
> « Ce qu’il dit, je peux le vérifier.  
> Ce qu’il annonce, il l’a déjà fait. »

---

**Règles de conception**  

- Pas de mise en scène excessive
- Pas d’auto-promotion visuelle
- Pas de rupture de rythme

---

**Critères d’acceptation UX (BDD — V1)**  

- **Given** je suis positionné sur l’état Manière de construire
- **When** je poursuis la progression
- **Then** mon attention est dirigée vers des preuves concrètes
- **And** je perçois une continuité logique avec la méthode

---

#### Transition — État 4 → État 5  

**Preuves concrètes → Relation & collaboration**

**Intention UX**  
Passer de la preuve de compétence à la **projection humaine**,  
sans casser la crédibilité ni tomber dans le discours commercial.

---

**Déclencheur**  

- Scroll continu après les projets
- Aucun arrêt imposé

---

**Transformation de l’espace**  

- Avancée douce sur l’axe Z
- L’espace :
  - devient plus ouvert
  - plus respirant
  - moins dense visuellement

---

**Seuil narratif**  

- Seuil présent
- Rythme légèrement relâché
- Pas de citation imposée

Rôle du seuil :

- Fermer la phase d’évaluation
- Ouvrir la phase de projection
- Changer de registre sans rupture

---

**Évolution du contenu**  

- Les projets :
  - reculent progressivement
  - cessent d’être centraux
- Les éléments relationnels :
  - apparaissent de manière plus directe
  - sont lisibles rapidement
  - ne cherchent pas à convaincre, mais à rassurer

---

**Rythme & contrôle**  

- Transition fluide
- Scroll libre
- Aucun effet décoratif

---

**Hiérarchie visuelle**  

- Un seul point d’attention :
  - la relation future
- Aucun élément concurrent

---

**Ressenti utilisateur attendu**  
> « Je pourrais travailler avec lui.  
> Ça se passerait bien. »

---

**Règles de conception**  

- Pas de discours marketing
- Pas d’arguments forcés
- Pas de rupture émotionnelle

---

**Critères d’acceptation UX (BDD — V1)**  

- **Given** je suis positionné sur l’état Preuves concrètes
- **When** je poursuis la progression
- **Then** je passe naturellement vers une projection relationnelle
- **And** je conserve un sentiment de confiance

---

#### Transition — État 5 → État 6  

**Relation & collaboration → Continuité / Contact**

**Intention UX**  
Passer de la projection humaine à l’action,  
sans pression ni rupture de ton.

Le contact doit apparaître comme une **suite logique**, pas comme un objectif imposé.

---

**Déclencheur**  

- Scroll naturel en fin de parcours
- Aucun appel à l’action agressif

---

**Transformation de l’espace**  

- Avancée vers l’avant-plan
- L’espace :
  - se simplifie
  - se stabilise
  - réduit la complexité visuelle

---

**Seuil narratif**  

- Seuil optionnel
- Peut être absorbé dans la continuité
- Aucun ralentissement volontaire

Rôle du seuil :

- Clore l’expérience immersive
- Ramener doucement à l’action

---

**Évolution du contenu**  

- Les éléments relationnels :
  - s’effacent progressivement
- Le contact :
  - apparaît clairement
  - sans sur-valorisation
  - avec une friction minimale

---

**Rythme & contrôle**  

- Transition très fluide
- Aucun effet notable
- Sensation de fin naturelle

---

**Hiérarchie visuelle**  

- Un point d’attention :
  - le contact
- Aucun élément concurrent

---

**Ressenti utilisateur attendu**  
> « C’est logique de le contacter maintenant. »

---

**Règles de conception**  

- Pas d’urgence artificielle
- Pas de pression
- Pas d’effet spectaculaire de sortie

---

**Critères d’acceptation UX (BDD — V1)**  

- **Given** je suis positionné sur l’état Relation
- **When** je poursuis naturellement la progression
- **Then** le contact s’impose comme une continuité logique
- **And** je ne ressens aucune contrainte

---

## 9. Direction artistique

### 9.1 Intention générale

La direction artistique vise à soutenir une expérience immersive basée sur la progression en profondeur (axe Z).
Le style retenu privilégie une ambiance sombre et maîtrisée, où la lumière, le contraste et la mise au point
guident l’attention sans jamais distraire.

L’objectif n’est pas de créer une démonstration graphique,
mais un espace de lecture et de projection confortable, immersif et crédible.

---

### 9.2 Orientation choisie

**Orientation principale :**

- Fond sombre nuancé
- Lumière contrôlée
- Profondeur perçue par contraste, mise au point et spatialisation

**Influences secondaires (subtiles) :**

- Matières légères (verre, métal, surfaces diffuses)
- Reflets très discrets
- Sensation d’espace “exposé”, sans décoratif

Ces influences ne doivent jamais devenir un sujet visuel en soi.

---

### 9.3 Principes non négociables

- Lisibilité prioritaire sur l’esthétique
- Sobriété avant démonstration
- Un seul point focal à la fois
- Aucune texture ou effet purement décoratif
- La direction artistique sert l’expérience, jamais l’inverse

---

### 9.4 Palette & contrastes (à préciser)

- Fond : sombre nuancé (éviter le noir pur)
- Texte principal : clair, contrasté, confortable
- Accents : une couleur maximum, utilisée avec parcimonie
- Aucun dégradé agressif
- Aucun contraste insuffisant pour l’accessibilité

---

### 9.5 Règles de mouvement & animation (DA)

- Les animations renforcent la progression en profondeur
- Apparition par approche (échelle + position + opacité secondaire)
- Aucune apparition brutale
- Durées courtes et constantes
- Aucun easing excessif (rebond, élasticité)
- Respect strict de l’accessibilité (réduction des animations possible)

---

### 9.6 Répartition de l’audace visuelle

- Entrée / Hero : audace contrôlée (mise en scène, rythme, contraste)
- Corps du parcours : sobriété maximale
- Projets : clarté et contextualisation avant esthétique
- Contact : simplicité, lisibilité, efficacité

---

### 9.7 Objectif perceptif

L’utilisateur doit ressentir :
- une maîtrise calme
- une maturité professionnelle
- une expérience fluide et confortable
- un environnement qui sert le récit, sans s’imposer

### 9.8 Typographie

**Structure**

- 2 polices maximum
- Une police fonctionnelle (contenu)
- Une police expressive mais sobre (titres)

**Police principale (contenu)**

- Lisibilité prioritaire
- Corps confortable
- Interlignage généreux
- Aucun effet décoratif

**Police secondaire (titres)**

- Utilisée avec parcimonie
- Réservée aux moments clés (Hero, états, seuils)
- Bonne tenue en grands corps

**Règles**

- Pas de texte justifié
- Pas de variations excessives de graisse
- Hiérarchie claire (H1 → H3 max)
- Contraste strict pour l’accessibilité

### 9.9 Grille & spacing

**Grille**

- Grille principale en 12 colonnes
- Marges latérales larges
- Gouttières généreuses
- Contenu majoritairement centré

**Axe de lecture**

- Axe central privilégié
- Les zones latérales servent à la respiration visuelle
- Aucun contenu dense en bordure

**Spacing vertical**

- Espaces verticaux généreux entre états narratifs
- Transitions lisibles, jamais abruptes
- Le scroll doit rester confortable et fluide

**Règles de densité**

- Hero : très aérée
- Identité : aérée et structurée
- Méthode : plus dense mais lisible
- Projets : clarté maximale
- Contact : minimalisme assumé

---

## 10. Architecture technique et déploiement (V1 — trajectoire audacieuse)

> Objectif : traduire l’intention UX (canvas unique + progression en profondeur) en architecture technique **maintenable**, **performante** et **accessible**.  
> Choix assumé : une V1 “audacieuse maîtrisée”, avec une trajectoire d’évolution documentée.

**Mini-TOC — Chapitre 10**
10.1 Décision d’architecture  
10.2 Objectifs techniques  
10.3 Contraintes et budgets  
10.4 Architecture front  
10.5 Orchestration scroll  
10.6 Roadmap maîtrisée  
10.7 Déploiement — principes  
10.8 Stack cible détaillée  
10.9 Structure du projet  
10.10 SEO & accessibilité  
10.11 Performance & budgets  
10.12 Déploiement & monitoring

---

### 10.1 Décision d’architecture (résumé exécutif)

**Décision**  

- Construire l’expérience autour d’un **canvas unique** piloté par le scroll, avec une progression “en profondeur” (axe Z) et des **états narratifs**.
- Implémenter cette spatialisation via une stack WebGL **(Three.js + React Three Fiber)**, avec un système d’orchestration **scroll → progression → états**.
- Prévoir dès la V1 une stratégie **accessibilité + SEO** : l’expérience immersive ne doit pas empêcher l’accès au contenu.

**Justification**  

- L’objectif principal est un effet “wow” immersif proche d’une mise en scène type Active Theory : sensation d’**avancer** dans un espace.
- La 3D est utilisée comme **outil de spatialisation** (mise en scène), pas comme démonstration d’assets 3D.
- La doc, l’architecture et les garde-fous (perf, a11y) sont traités comme des **exigences produit**.

**Conséquence**  

- V1 plus exigeante techniquement, mais **contrôlée** par des budgets (perf), un fallback (reduced motion), et une structure de code claire.

---

### 10.2 Objectifs techniques (liés aux objectifs UX)

**Objectifs UX à traduire techniquement**

- Progression continue (pas une suite de sections)
- Transitions fluides et contrôlées par le scroll
- Un seul point focal à la fois
- Seuils narratifs = “portes” de sens (courts, guidés)

**Objectifs techniques**

- Maintenir une sensation **smooth** (cible : 60fps sur desktop, stable sur mobile)
- Garantir la **lisibilité** des contenus (typo, contraste, hiérarchie)
- Préserver **l’accessibilité** (clavier, réduction animations, structure sémantique)
- Préserver **le SEO** (contenu indexable, métadonnées, performance)

---

### 10.3 Contraintes et budgets (performance, accessibilité, SEO)

#### 10.3.1 Principes performance (V1)

**Principes**

- Pas de chargement lourd initial : le “wow” doit rester rapide.
- Limiter la charge GPU : shaders simples, peu de post-processing, textures minimales.
- Éviter les gros bundles JS au premier rendu (lazy-load des éléments non critiques).

**Règles**

- Pas d’assets 3D lourds en V1 (pas de modèles complexes “démo”).
- Les effets visuels doivent être atteints avec : lumière, contraste, DOF léger (si nécessaire), mouvement maîtrisé.

#### 10.3.2 Accessibilité — “Reduced motion” (V1)

**Principe**  
Respecter la préférence utilisateur `prefers-reduced-motion`.

**Renvoi**  
Voir 10.10.4 — Réduction des animations (règles complètes et cas de figure).

#### 10.3.3 SEO (V1)

**Principe**  
Le contenu important doit exister en DOM sémantique et indexable, même si l’expérience principale est portée par le canvas.

**Règles**

- Chaque état narratif a un équivalent sémantique (titres, texte, liens).
- Le canvas ne doit pas être l’unique source de contenu.
- Métadonnées (title/description/OG) + performance web vitals pris en compte.

---

### 10.4 Architecture front — découpage (V1)

#### 10.4.1 Vue d’ensemble

- **App shell (Next.js)** : layout, fonts, meta, structure sémantique
- **Experience Layer** : canvas WebGL + orchestration scroll
- **Content Layer** : contenu textuel sémantique (SEO/a11y), synchronisé avec l’état narratif
- **UI Utilities** : toggles (reduce motion), contact, analytics léger

#### 10.4.2 Concepts techniques clés

**Progression globale**

- Une variable continue `progress` ∈ [0..1] représente l’avancement dans l’expérience.
- `progress` est pilotée par un **scroll guidé** (un geste = une station), pas par un simple “scrollY”.

**États narratifs (targets)**

- Chaque état narratif correspond à un **target uniforme** de `progress`.
- Les transitions sont des glides temporels entre targets.

**Orchestration**

- Un orchestrateur transforme `scroll → progress`, puis expose :
  - `activeState`
  - `stateProgress` (0..1 dans l’état courant)
  - `transitionProgress` (0..1 dans la transition)

**Rendu**

- Le canvas (R3F) consomme `progress` pour :
- position caméra sur trajectoire (Z rectiligne)
  - mise au point / profondeur perçue
  - apparition par approche des éléments
- La couche contenu consomme `activeState` pour :
  - mettre en avant le texte correspondant
  - conserver une structure DOM indexable

---

### 10.5 Orchestration scroll → progression (V1)

**Contrat**

- Le scroll ne “déplace pas une page” : il modifie une **vitesse d’avancement**.
- L’avancement est un glide temporel entre stations (ease).
- Le système doit fonctionner :
  - à la molette
  - au trackpad
  - au tactile (mobile)

**Règles**

- Blocage des inputs pendant la transition
- Possibilité de “revenir en arrière” naturellement (palier précédent)

---

### 10.6 Roadmap maîtrisée (V1 → V2)

**V1 (priorité)**

- Spatialisation simple + caméra + lumière
- États narratifs + transitions + seuils (portes)
- a11y (reduced motion) + SEO (contenu sémantique)
- Performance : budgets respectés

**V2 (si nécessaire)**

- Détails de matière (verre/métal) plus poussés
- Post-processing plus fin (DOF, bloom léger) si budget perf OK
- Micro-interactions additionnelles (sans surcharger)

---

### 10.7 Déploiement (Vercel) — principes

Déploiement continu (preview deployments), domaine custom quand prêt, observabilité légère (Web Vitals + analytics minimal).
Voir 10.12 — Déploiement & monitoring pour la stratégie complète.

---

### 10.8 Stack cible détaillée (V1)

> Objectif : stack orientée “expérience immersive” (canvas WebGL) tout en gardant un socle pro : SEO, accessibilité, performance, déploiement simple.

---

#### 10.8.1 Langage & conventions

- **TypeScript** (obligatoire)
  - Réduction des erreurs dans une base animée / state-driven
  - Contrats clairs entre orchestration (scroll/progress) et rendu (canvas + UI)
- **ESLint + Prettier** (obligatoire)
  - Conventions strictes pour garder la maintenabilité

---

#### 10.8.2 Framework & rendu

- **Next.js (App Router)**  
  Raison : structure moderne, layouts, metadata API, routing propre, intégration Vercel.
- **Rendu hybride maîtrisé**
  - Pages/sections SEO en **Server Components** si possible
  - Expérience canvas en **Client Components** (nécessaire pour WebGL/scroll)
- **Déploiement : Vercel** (preview deploy + prod)

---

#### 10.8.3 UI / Styles

- **Tailwind CSS**
  - Vitesse de prototypage
  - Cohérence spacing/typo
  - Facile à “designer” proprement sans dériver
- (Optionnel) **shadcn/ui**
  - Uniquement pour composants utilitaires (buttons, toggles a11y, dialogs)
  - Ne pas transformer le portfolio en “dashboard UI”

---

#### 10.8.4 3D / Canvas

- **Three.js** (moteur WebGL)
- **React Three Fiber (R3F)** (binding React)
- **@react-three/drei** (helpers indispensables)
  - Caméra, controls (si besoin), loaders, Text (si on choisit du texte en 3D)
- **Post-processing (optionnel V1, contrôlé)**
  - À n’activer que si budget perf OK
  - Exemple : DOF léger / bloom très léger
  - Sinon : privilégier lumière/contraste plutôt que FX

---

#### 10.8.5 Orchestration scroll → progress

- **Choix V1 : orchestration maison (simple et documentée)**
  - un geste `scroll` → target suivant/précédent
  - glide temporel (ease) vers `progress`
  - exposer `progress` ∈ [0..1] au moteur d’états + rendu R3F
- **Optionnel (si besoin UX) : Lenis**
  - Uniquement si le scroll natif rend l’inertie trop “cassée” selon devices
  - Attention : tester accessibilité + mobile + performance
- Scroll guidé : blocage court pendant la transition, puis réactivation à l’arrivée.

---

#### 10.8.6 Animation

- **Framer Motion**
  - Pour la couche DOM/UI (titres, textes, micro-interactions)
  - Pour synchroniser opacité/position avec `progress` côté UI
- **Animations canvas**
  - Pilotées par `progress` (pas par timelines cachées)
  - L’idée : “l’utilisateur avance”, donc les animations sont une conséquence du déplacement

---

#### 10.8.7 Accessibilité (a11y) — stack et règles

- Support natif du media query :
  - `prefers-reduced-motion: reduce`
- Comportement à implémenter :
  - si reduce : diminuer/neutraliser mouvements caméra et parallax
  - conserver la narration, mais en transitions “calmes”
- Navigation clavier :
  - Le contenu DOM doit rester focusable (CTA, liens projets, contact)
- Contraste / typographie :
  - validés via audits (Lighthouse + checks manuels)

---

#### 10.8.8 SEO

- Le contenu clé existe en **DOM sémantique**, indexable
  - titres (h1/h2), paragraphes, liens
- Le canvas est une **couche d’expérience**, pas la seule source d’information
- Next Metadata :
  - title/description/OG
- Images :
  - `next/image` quand applicable (projets, thumbnails)

---

#### 10.8.9 Outils qualité & perf

- **Lighthouse** (budget perf)
- **Web Vitals** (sur Vercel)
- Stratégies perf :
  - lazy-load des éléments non critiques
  - pas de modèles 3D lourds V1
  - limiter textures/postprocess
  - fonts optimisées (Next Font)

---

#### 10.8.10 Dépendances (liste “propre” V1)

- next, react, react-dom
- typescript
- tailwindcss (+ postcss/autoprefixer)
- three
- @react-three/fiber
- @react-three/drei
- framer-motion
- (optionnel) @react-three/postprocessing
- (optionnel) @studio-freight/lenis
- eslint + prettier

---

### 10.9 Structure du projet — Architecture en couches (V1)

> Objectif : garantir une architecture claire, maintenable et évolutive, tout en séparant nettement contenu, expérience immersive et orchestration.

Cette structure permet :

- de préserver l’accessibilité et le SEO
- de maîtriser les performances
- de faire évoluer l’expérience immersive sans casser le socle
- d’apprendre progressivement sans dette technique inutile

---

#### Principe fondamental

Le projet est structuré en **couches indépendantes**, chacune ayant une responsabilité claire.

Aucune couche ne doit “fuir” sur une autre.

---

#### Vue d’ensemble des couches

```text
┌─────────────────────────────────────┐
│  App Shell (Next.js)                 │
│  routing · SEO · metadata            │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│  Content Layer (DOM)                 │
│  texte · structure · accessibilité  │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│  Experience Layer (Canvas / R3F)     │
│  espace · profondeur · ambiance     │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│  Orchestrator (Scroll / State)       │
│  progression · états narratifs       │
└─────────────────────────────────────┘
```

---

#### 1. App Shell — Next.js

##### Rôle

- Encapsuler l’application
- Gérer le routing
- Garantir SEO, performance et accessibilité de base

##### Responsabilités

- Layout global
- Meta tags
- Fonts
- Viewport
- Chargement progressif

##### Technologies

- Next.js (App Router)
- Metadata API
- Fonts optimisées

##### Règles

- Aucun code d’animation complexe
- Aucun WebGL ici
- Cette couche doit rester **stable et lisible**

---

#### 2. Content Layer — DOM sémantique

##### Rôle

Porter **le sens**, pas l’effet.

C’est la couche qui :

- est lue par les recruteurs
- est indexée par les moteurs
- est accessible aux lecteurs d’écran

##### Contenu

- Titres
- Textes
- Fragments d’identité
- Méthode
- Projets
- Contact

##### Technologies

- HTML sémantique
- CSS / Tailwind
- Framer Motion (animations légères DOM)

##### Règles strictes

- Tout le texte important est ici
- Aucun texte critique dans le canvas
- Animations DOM légères, progression guidée par paliers

---

#### 3. Experience Layer — Canvas immersif (R3F)

##### Rôle
Créer la **mise en scène spatiale** :

- profondeur
- rythme
- ambiance
- perception premium

Cette couche ne porte **aucun message critique**.

##### Contenu

- Caméra
- Lumières
- Plans
- Volumes abstraits
- Atmosphère

##### Technologies

- Three.js
- React Three Fiber
- @react-three/drei (helpers)

##### Règles

- Pas de logique métier
- Pas de texte essentiel
- Pas de surcharge visuelle
- Performance prioritaire

---

#### 4. Orchestrator — Progression & états

##### Rôle

Faire le lien entre :

- le scroll utilisateur
- les états narratifs
- les transformations visuelles

C’est le **chef d’orchestre** du projet.

##### Responsabilités

- Calculer une progression normalisée (0 → 1)
- Déterminer l’état narratif actif
- Piloter :
  - l’apparition du contenu
  - la caméra
  - les transitions

##### Technologies

- Scroll natif
- Hooks React
- Event listeners maîtrisés

##### Règles

- Une seule source de vérité
- Pas de logique dans le canvas
- Pas de logique dans le DOM

---

#### Arborescence cible (indicative)

```text
/app
  layout.tsx
  page.tsx

/components
  /content
    Hero.tsx
    Identity.tsx
    Method.tsx
    Projects.tsx
    Contact.tsx

  /experience
    Canvas.tsx
    CameraRig.tsx
    Lights.tsx
    Atmosphere.tsx

  /orchestrator
    useScrollProgress.ts
    useNarrativeState.ts

  /ui
    Text.tsx
    Section.tsx

/lib
  constants.ts
  easing.ts
```

---

#### Contrats entre couches

- Content → Orchestrator : **déclare ses états**
- Orchestrator → Experience : **envoie des valeurs**
- Experience → DOM : **aucune dépendance**

Chaque couche peut être testée et comprise seule.

---

#### Pourquoi cette structure est clé pour ce projet

- Elle permet une **audace maîtrisée**
- Elle évite le “site démonstratif”
- Elle protège l’accessibilité et le SEO
- Elle permet d’apprendre sans chaos
- Elle est lisible par un recruteur senior

---

#### Critères de validation (V1)

- Le site reste lisible sans WebGL
- Le canvas peut être désactivé sans casser le contenu
- Le scroll reste fluide sur machine moyenne
- Chaque couche a un rôle clair et documenté

---

### 10.10 — SEO & Accessibilité avec Canvas (V1)

> Objectif : démontrer qu’une expérience immersive basée sur un canvas peut rester **indexable, accessible, performante et utilisable**.
> Cette section constitue un **point critique de crédibilité professionnelle** du projet.

---

#### 10.10.1 Principe fondamental

##### Règle d’or

> **Le sens est dans le DOM, pas dans le canvas.**

- Tout contenu porteur de sens (texte, titres, projets, contact) est rendu en **HTML sémantique**.
- Le canvas (WebGL / 3D / effets) est un **support d’ambiance et de spatialisation**, jamais une source de contenu critique.
- Si le canvas ne se charge pas, l’expérience reste compréhensible, navigable et exploitable.

Le canvas **augmente l’expérience**, il ne la conditionne jamais.

---

#### 10.10.2 Structure sémantique du document

##### Organisation HTML

- `<main>` : contient l’intégralité du parcours narratif
- `<section>` : chaque état narratif correspond à une section logique
- `<header>` / `<footer>` : utilisés uniquement lorsque sémantiquement pertinents
- Titres hiérarchisés :
  - Un seul `<h1>` (Hero / posture)
  - `<h2>` pour les grands états
  - `<h3>` maximum pour les sous-éléments

Aucun saut de hiérarchie n’est autorisé.

---

##### Lisibilité sans styles

Le site doit rester :

- lisible sans CSS
- compréhensible sans animations
- navigable sans JavaScript avancé

C’est un **test mental permanent** pendant le développement.

---

#### 10.10.3 Navigation clavier & focus

##### Navigation clavier

- Tous les éléments interactifs sont accessibles au clavier
- Ordre de tabulation logique et cohérent avec la narration
- Aucun piège de focus (focus trap non contrôlé)

##### Focus visible

- Focus toujours visible
- Jamais supprimé
- Adapté au thème sombre

Le focus fait partie de la direction artistique, il n’est jamais “technique par défaut”.

---

#### 10.10.4 Préférence utilisateur — Réduction des animations

##### Définition

Les systèmes d’exploitation permettent à l’utilisateur d’indiquer une préférence :
> **Réduire les animations** (`prefers-reduced-motion: reduce`)

##### Application dans le projet

Lorsque cette préférence est active :

- Les transitions restent présentes mais :
  - durées réduites
  - amplitudes diminuées
  - déplacements de caméra limités
- Les effets purement atmosphériques peuvent être désactivés
- La narration reste intacte

Ce mode n’est pas une dégradation, mais une **variante sobre et respectueuse**.

---

#### 10.10.5 Canvas & accessibilité

##### Règles strictes

- Le canvas n’intercepte jamais la navigation clavier
- Le canvas ne contient aucune information essentielle
- Le canvas ne remplace jamais un texte visible

##### Rôle du canvas

- Spatialiser
- Accompagner
- Donner de la profondeur

Jamais :

- expliquer
- convaincre
- informer seul

---

#### 10.10.6 Fallbacks & résilience

##### Absence ou désactivation WebGL

Si :

- WebGL indisponible
- appareil peu performant
- préférence utilisateur

Alors :

- le site bascule automatiquement en **DOM only**
- la progression narrative reste fonctionnelle
- aucune erreur bloquante

Ce comportement est volontairement documenté et assumé.

---

#### 10.10.7 SEO — Next.js

##### Indexation

- Rendu HTML côté serveur (SSR / RSC)
- Métadonnées définies par état narratif
- Balises OpenGraph et Twitter Cards

##### SEO technique

- Sitemap généré
- Robots.txt explicite
- URLs propres
- Canonical défini

Le SEO n’est jamais sacrifié au profit de l’effet visuel.

---

#### 10.10.8 Performance & accessibilité

- Pas de chargement bloquant inutile
- Chargement progressif des assets visuels
- Texte visible rapidement (First Contentful Paint)
- Respect des contrastes WCAG

Performance et accessibilité sont traitées comme des **features**, pas comme des contraintes.

---

#### 10.10.9 Critères d’acceptation UX (BDD)

##### Scénario 1 — Canvas indisponible

- **Given** le canvas ne se charge pas
- **When** l’utilisateur navigue dans le site
- **Then** le contenu reste lisible et compréhensible
- **And** le parcours narratif est intact

---

##### Scénario 2 — Réduction des animations

- **Given** l’utilisateur a activé “réduire les animations”
- **When** il parcourt le site
- **Then** les transitions sont plus discrètes
- **And** aucune information n’est perdue

---

##### Scénario 3 — Navigation clavier

- **Given** je navigue uniquement au clavier
- **When** je parcours les états narratifs
- **Then** tous les éléments sont accessibles
- **And** l’ordre logique est respecté

---

#### 10.10.10 Résumé — Contrat qualité

- Le canvas est un **bonus**, jamais une dépendance
- Le sens est toujours porté par le DOM
- L’accessibilité est intégrée dès la conception
- Le SEO est maîtrisé, pas subi
- L’expérience immersive reste responsable

Cette section engage la crédibilité du projet.

---

### 10.11 — Performance & budgets

> Cette section définit le cadre de performance du portfolio immersif.
> Elle formalise des **objectifs mesurables**, des **budgets explicites** et des **choix assumés**, afin de garantir une expérience fluide, crédible et soutenable.

---

#### 10.11.1 Intention

La performance n’est pas traitée comme une optimisation tardive, mais comme une **contrainte de conception dès l’origine**.

Dans le contexte d’un portfolio immersif basé sur un canvas unique et une progression narrative animée, l’enjeu est double :

- préserver la **fluidité perceptible** de l’expérience
- maintenir une **excellente performance réelle**, mesurable et défendable face à un recruteur

L’objectif n’est pas de battre des records artificiels, mais de démontrer une **maîtrise consciente des compromis**.

---

#### 10.11.2 Positionnement

Le portfolio adopte un positionnement clair :

- La performance sert l’UX, pas l’inverse
- Les effets immersifs sont **budgétés**, pas improvisés
- Toute dégradation mesurable doit être **justifiée par un gain d’intention UX**

Ce positionnement permet :

- d’éviter la surenchère visuelle
- de conserver une crédibilité technique
- de rassurer sur la capacité à livrer des produits réels

---

#### 10.11.3 Définition des budgets de performance

Les budgets de performance constituent un **contrat non négociable**.
Ils sont définis avant implémentation et servent de garde-fou tout au long du développement.

##### Budgets cibles (V1)

- **LCP (Largest Contentful Paint)** : ≤ 2,5 s
- **INP (Interaction to Next Paint)** : ≤ 200 ms
- **CLS (Cumulative Layout Shift)** : ≤ 0,1
- **Score Lighthouse Performance** : ≥ 90 (desktop)
- **Score Lighthouse Accessibility** : ≥ 95

Ces seuils sont volontairement ambitieux, mais compatibles avec une expérience immersive maîtrisée.

---

#### 10.11.4 Budgets liés aux assets

##### JavaScript

- Bundle initial strictement limité
- Découpage systématique (code splitting)
- Chargement progressif des modules non critiques

Règle :

> Aucun script non essentiel ne doit bloquer le rendu initial.

##### Canvas & animations

- Un seul canvas principal
- Pas de rendu hors champ inutile
- Framerate cible : 60 FPS sur desktop récent
- Dégradation gracieuse sur machines modestes

##### Médias

- Images optimisées (formats modernes)
- Pas de vidéo autoplay lourde
- Préchargement strictement contrôlé

---

#### 10.11.5 Relation entre performance et narration

La narration immersive repose sur la continuité.
Toute perte de fluidité est immédiatement perçue comme une rupture d’intention.

Principes adoptés :

- La progression est **pilotée par le scroll**, jamais par des timelines autonomes
- Les animations sont **courtes, prévisibles et cohérentes**
- Aucun effet ne doit provoquer de micro-latence perceptible

La performance devient ainsi un **élément narratif implicite** :

> une expérience fluide traduit une pensée maîtrisée.

---

#### 10.11.6 Accessibilité et performance perçue

Les préférences utilisateur influencent directement les budgets appliqués.  
Voir 10.10.4 — Réduction des animations.

Appareils peu performants :

- simplification automatique du rendu
- priorité absolue à la lisibilité du contenu

La performance perçue prime sur la performance brute.

---

#### 10.11.7 Mesure et validation

La performance n’est pas supposée, elle est mesurée.

Outils de référence :

- Lighthouse
- Web Vitals
- Audits manuels en conditions réelles

Chaque itération doit :

- rester dans les budgets définis
- ou documenter explicitement tout dépassement

---

#### 10.11.8 Risques identifiés et mitigations

##### Risque : surcharge liée au canvas

**Mitigation** : rendu conditionnel, logique de culling, sobriété visuelle

##### Risque : dette technique liée aux animations

**Mitigation** : animations simples, testables, documentées

##### Risque : divergence desktop / mobile

**Mitigation** : budgets distincts, priorisation mobile

---

#### 10.11.9 Décisions actées

- La performance est un pilier du projet, pas un bonus
- Les budgets sont définis avant implémentation
- Toute entorse doit être justifiée par un gain UX clair

---

#### 10.11.10 Hypothèses & évolutions possibles

- Ajustement des budgets après tests terrain
- Introduction de profils de rendu (high / standard / reduced)
- Optimisations fines après stabilisation de l’UX

Ces évolutions ne doivent jamais remettre en cause la lisibilité, l’accessibilité ou la crédibilité du projet.

---

### 10.12 — Déploiement & monitoring

> Cette section formalise la stratégie de mise en production du portfolio et le suivi post‑déploiement.
> L’objectif n’est pas seulement de « mettre en ligne », mais de démontrer une **posture produit professionnelle** : déployer, observer, corriger.

---

#### 10.12.1 Intention

Le déploiement est considéré comme une **étape à part entière du produit**, pas comme une formalité finale.

Dans le cadre d’un portfolio immersif :

- la mise en ligne valide les choix techniques
- le monitoring valide les hypothèses UX et performance
- la capacité à observer et ajuster renforce la crédibilité professionnelle

L’objectif est de montrer que le projet est **vivant, mesuré et maîtrisé**, même à petite échelle.

---

#### 10.12.2 Positionnement

Le projet adopte une approche volontairement sobre et réaliste :

- Infrastructure simple, lisible, maintenable
- Outils standards du marché
- Observabilité suffisante, sans sur‑outillage

Ce positionnement permet :

- de rester cohérent avec un projet personnel
- de montrer des réflexes transposables en contexte pro
- d’éviter toute complexité artificielle

---

#### 10.12.3 Plateforme de déploiement — Décision

##### Décision

Le portfolio est déployé sur **Vercel**.

##### Justification

- Intégration native avec Next.js
- Déploiement continu simple
- Gestion automatique des environnements
- Web Vitals intégrés
- Infrastructure invisible (focus sur le produit)

##### Conséquence

- Dépendance à un provider unique
- Choix assumé pour un projet vitrine / portfolio

---

#### 10.12.4 Environnements

##### Environnements définis

- **Local** : développement et expérimentation
- **Preview** : déploiements automatiques par branche / PR
- **Production** : version publique stable

##### Règles

- Toute modification significative passe par un preview deployment
- La production n’est mise à jour que depuis une branche stable
- Aucun test expérimental directement en production

---

#### 10.12.5 Déploiement continu (CI/CD)

##### Principe

Chaque push déclenche automatiquement :

- un build
- un déploiement (preview ou production selon la branche)

##### Objectifs

- Réduire les frictions
- Encourager les petites itérations
- Visualiser rapidement l’impact des changements

Aucun pipeline complexe n’est nécessaire à ce stade.

---

#### 10.12.6 Monitoring — Performance

##### Indicateurs suivis

- Web Vitals (LCP, INP, CLS)
- Temps de chargement perçu
- Stabilité du rendu

##### Outils

- Vercel Analytics / Web Vitals
- Lighthouse (audits réguliers)

##### Règles

- Les budgets définis en 10.11 servent de référence
- Toute dérive doit être identifiée et expliquée

---

#### 10.12.7 Monitoring — UX & usage

Même sans objectif de trafic élevé, certains signaux sont utiles :

- Temps passé sur la page
- Scroll depth (progression dans le parcours)
- Taux d’abandon précoce

Ces données servent à :

- vérifier la lisibilité du parcours
- identifier d’éventuelles ruptures d’attention

---

#### 10.12.8 Gestion des erreurs

##### Objectif

Détecter rapidement les problèmes bloquants, sans sur‑instrumentation.

##### Approche

- Logs accessibles côté plateforme
- Surveillance des erreurs critiques
- Pas de collecte excessive de données

La priorité reste la **stabilité de l’expérience**.

---

#### 10.12.9 Sécurité & conformité

##### Principes

- Aucun stockage de données sensibles
- Pas d’authentification complexe
- Pas de surface d’attaque inutile

##### Conformité

- Cookies limités au strict nécessaire
- Analytics sobres
- Respect de la vie privée

---

#### 10.12.10 Stratégie d’évolution

Le déploiement n’est pas figé.

Évolutions possibles :

- Ajustement des budgets performance après observation réelle
- Raffinement progressif de l’expérience immersive
- Amélioration ciblée de la lisibilité mobile

Ces évolutions doivent toujours rester cohérentes avec :

- l’intention UX
- la performance
- l’accessibilité

---

#### 10.12.11 Décisions actées

- Vercel comme plateforme unique de déploiement
- Déploiement continu activé
- Monitoring léger mais réel

---

## 11. Implémentation, tests, qualité

- Développement par itérations
- Tests ciblés
- Audits Lighthouse

---

## 12 — Livrables & suivi (V1)

> Cette section formalise ce qui est **livré**, ce qui est **montrable**, et ce qui est **suivi dans le temps**.
> Elle clôt le projet du point de vue produit, sans le figer : le portfolio reste un objet vivant.

---

### 12.1 Intention

Les livrables ne sont pas réduits au code final.
Ils incluent tout ce qui permet de juger la **qualité du raisonnement**, de l’exécution
et de la capacité à maintenir un produit dans le temps.

L’objectif est double :

- rendre le projet **présentable immédiatement**
- montrer une **posture professionnelle durable**

---

### 12.2 Livrables principaux

#### 12.2.1 Portfolio en production

- Site déployé publiquement
- Expérience immersive fonctionnelle
- Version DOM-only pleinement utilisable
- Performances et accessibilité conformes aux budgets définis

**Critère de validation**

- Le site peut être partagé sans contexte ni explication orale.

---

#### 12.2.2 Code source

- Repository public
- Historique de commits lisible
- Découpage clair (contenu / orchestrator / canvas)
- Aucun code expérimental non justifié en branche principale

**Critère de validation**

- Un développeur tiers peut comprendre l’architecture en parcourant le repo.

---

#### 12.2.3 Documentation projet

- Documentation complète (ce document)
- Décisions tracées et justifiées
- Hypothèses clairement identifiées
- Compromis explicités

**Critère de validation**

- La documentation peut être lue indépendamment du code.

---

### 12.3 Checklist de mise en ligne finale

> À utiliser avant communication publique (recruteurs, clients).

#### Qualité produit

- [ ] Parcours narratif compréhensible sans explication
- [ ] Aucun état inutile ou redondant
- [ ] Contact clair et fonctionnel

#### Performance & accessibilité

- [ ] Budgets 10.11 respectés (ou documentés)
- [ ] Navigation clavier complète
- [ ] `prefers-reduced-motion` fonctionnel
- [ ] Canvas désactivable sans perte de sens

#### Technique

- [ ] Aucun warning bloquant au build
- [ ] Déploiement stable
- [ ] Monitoring actif

---

### 12.4 Suivi post‑mise en ligne

#### 12.4.1 Observation

Après mise en ligne, le suivi porte sur :

- Web Vitals réels
- Comportement utilisateur (scroll, abandon)
- Stabilité de l’expérience selon devices

L’objectif n’est pas l’optimisation obsessionnelle,
mais la **validation des hypothèses** formulées dans la documentation.

---

#### 12.4.2 Itérations légères

Les itérations doivent rester :

- ciblées
- documentées
- justifiées par un signal réel

Exemples :

- ajustement du rythme d’une transition
- simplification d’un état trop dense
- correction d’un point de friction mobile

---

### 12.5 Évolution du portfolio dans le temps

Le portfolio est conçu comme un **support évolutif**, non comme un produit figé.

Évolutions possibles :

- ajout de nouveaux projets
- itérations UX ponctuelles
- amélioration progressive de la mise en scène

Chaque évolution doit :

- respecter l’intention initiale
- ne pas casser la cohérence globale
- être traçable dans la documentation

---

### 12.6 Posture professionnelle (message implicite)

Ce projet démontre :

- une capacité à penser avant de coder
- une maîtrise des compromis techniques
- une attention réelle à l’UX et à l’accessibilité
- une logique produit, même sur un projet personnel

Ce n’est pas un exercice scolaire.
C’est un **objet professionnel**.

---
