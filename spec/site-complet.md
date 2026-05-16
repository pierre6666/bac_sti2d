# Spécification - Site complet de révision STI2D

## Vision produit

Créer un site web simple, clair, responsive et utilisable localement ou en production pour aider un élève de Terminale STI2D à réviser efficacement jusqu'au bac et à préparer le Grand Oral.

Le site doit être pensé pour un élève en difficulté sur les matières techniques et scientifiques, avec une navigation simple, des contenus courts mais utiles, et un suivi local sans backend.

## Public cible

- Élève de Terminale STI2D
- Spécialité SIN
- Niveau hétérogène, avec besoin de structure et de repères simples

## Contraintes scolaires

- Bac principal: 15 juin
- Grand Oral: 30 juin
- Pas de philosophie dans le planning
- Priorité aux matières difficiles:
  - Mathématiques
  - Physique-chimie
  - 2I2D / STI2D
  - SIN si pertinent

## Fonctionnalités attendues

### 1. Accueil

- Présenter l'objectif du site.
- Afficher les dates importantes.
- Afficher une progression globale.
- Afficher les tâches du jour ou de la semaine.
- Donner un message motivant.

### 2. Planning

- Planning semaine par semaine jusqu'au 15 juin.
- Planning spécifique Grand Oral du 16 au 30 juin.
- Séances réalistes:
  - maximum 2 h en semaine;
  - davantage possible le week-end;
  - pauses régulières;
  - au moins une demi-journée légère par semaine.
- Prévoir des séances de rattrapage.
- Chaque séance doit indiquer:
  - durée;
  - matière;
  - objectif;
  - notion;
  - tâche concrète;
  - résultat attendu;
  - case à cocher.

### 3. Cours

- Cours complets, progressifs et rédigés en markdown.
- Organisation par matière.
- Rendu mathématique propre avec LaTeX.
- Sources citées par chapitre ou par matière.

### 4. Fiches

- Fiches de révision ultra condensées.
- Elles doivent contenir uniquement l'essentiel à retenir.
- Elles doivent être plus courtes que les cours.

### 5. Exercices et mini-tests

- Exercices courts.
- Mini-tests interactifs si possible.
- Score visible.
- Conseils selon le score.
- Sauvegarde locale des résultats.

### 6. Checklist

- Checklists par matière.
- Checklists de révision rapide.
- Suivi des tâches cochées.

### 7. Suivi

- Progression globale.
- Progression par matière.
- Mini-tests réalisés.
- Points faibles à retravailler.
- Réinitialisation des données localStorage.

### 8. Méthode

- Conseils pour réviser en difficulté.
- Conseils pour faire une fiche.
- Conseils pour corriger ses erreurs.
- Conseils pour gérer le stress.
- Conseils pour préparer un oral.

### 9. Grand Oral

- Page dédiée pour les deux sujets de départ.
- Problématique, plan, introduction, conclusion, questions du jury, réponses possibles.
- Version courte et version longue.
- Programme d'entraînement du 16 au 30 juin.

### 10. Annexe

- Références officielles.
- Notes de recherche.
- Correspondance entre contenu et programme.

## Stack et architecture

- Site statique ou front simple.
- Vite accepté et privilégié ici.
- Pas de backend.
- Pas de base de données.
- Pas d'authentification.
- Données séparées du code si possible.
- Suivi côté navigateur via `localStorage`.
- Build servi avec Docker et Nginx.

## Design et ergonomie

- Interface simple et moderne.
- Lecture facile sur téléphone.
- Navigation claire.
- Hiérarchie visuelle nette.
- Pas trop chargé.
- Pas de dépendances inutiles.

## Organisation de contenu

Le contenu doit rester versionné sous forme de fichiers simples si possible:

- Markdown
- JSON
- JS/TS de données

## Qualité attendue

- Code propre.
- Contenu original.
- Ton pédagogique.
- Pas de contenu copié.
- Mise à jour facile.
- Fonctionnement hors ligne autant que possible une fois chargé.

## Docker et production

- `Dockerfile` multi-stage si nécessaire.
- `docker-compose.yml`.
- Port hôte `8080`.
- Commandes documentées dans le README.

## Vérification

- `npm run build` doit passer.
- Les contenus doivent rester cohérents avec le programme STI2D.
- Les cours doivent rester plus complets que les fiches.

