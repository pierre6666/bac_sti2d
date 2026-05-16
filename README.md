# Révisions BAC STI2D SIN

Site web statique conçu pour un élève de Terminale STI2D spécialité SIN.

## Ce que contient le site

- un planning de révision jusqu'au 15 juin 2026 ;
- un planning Grand Oral du 16 au 30 juin 2026 ;
- des fiches de révision en mathématiques, physique-chimie et STI2D / SIN ;
- des fiches de révision chapitre par chapitre, imprimables ;
- des sujets type bac corrigés en maths, physique-chimie et STI2D;
- une page de fiches ultra-prioritaires pour les révisions express;
- une checklist quotidienne du matin en 30 minutes;
- un mode révision express 30 minutes;
- une page d’erreurs fréquentes par matière;
- des mini-tests interactifs ;
- un tableau de suivi local dans `localStorage` ;
- une page méthode pour réviser quand on est en difficulté.

## Hypothèses

- Les dates du bac sont prises sur l'année 2026, car le contexte du projet est à proximité du 15 mai 2026.
- La philosophie n'est pas intégrée au planning.
- Le suivi de progression reste local au navigateur via `localStorage`.
- Le site est volontairement simple pour rester facile à maintenir.

## Lancer en local

```bash
npm install
npm run dev
```

Puis ouvrir l'URL affichée par Vite.

## Build de production

```bash
npm run build
```

Le dossier `dist/` contient le site prêt à être servi.

## Lancer avec Docker

```bash
docker compose up -d --build
```

Le site est ensuite disponible sur :

```text
http://localhost:8080
```

## Déploiement

Le conteneur Docker sert le build statique avec Nginx.

## Fichiers à modifier pour ajuster le planning

- `src/data.js` pour les dates, le planning et les contenus ;
- `src/main.js` pour la logique d'affichage et de suivi ;
- `src/styles.css` pour l'apparence.

## Impression des fiches

- Ouvre la page `Fiches`.
- Choisis une matière puis un chapitre.
- Clique sur `Imprimer` sur une fiche précise pour ouvrir une version dédiée à l'impression.
