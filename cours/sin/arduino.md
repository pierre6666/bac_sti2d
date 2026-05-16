# Arduino et entrées-sorties

Arduino est souvent utilisé comme support d'apprentissage en SIN parce qu'il permet de relier facilement capteurs, actionneurs et logique de programmation. Le but de ce chapitre n'est pas de devenir expert du matériel, mais de comprendre comment on lit une entrée et comment on pilote une sortie.

## Objectifs du chapitre

- Comprendre le rôle d'une carte de prototypage.
- Lire une entrée numérique ou analogique.
- Commander une sortie simple.

## Ce qu'il faut savoir

- Une entrée lit une information.
- Une sortie commande un composant.
- Les capteurs peuvent être analogiques ou numériques.

## Définitions importantes

- Entrée numérique: état 0/1
- Entrée analogique: valeur variable
- Sortie: signal envoyé vers un composant
- Broche: point de connexion sur la carte

## Méthodes types

- Identifier l'entrée et la sortie.
- Dire ce que mesure ou commande la carte.
- Expliquer le rôle du programme.
- Relier l'exemple à un objet réel.

## Développement du cours

Arduino sert de support d'expérimentation. On y branche souvent un capteur, un bouton, une LED, un moteur ou un afficheur. Ce qui compte en cours, ce n'est pas seulement le câblage: c'est la logique de fonctionnement. La carte lit une information, la traite selon un programme, puis commande une sortie.

Cette structure est très proche de ce qu'on retrouve dans la spécialité SIN: acquisition, traitement et action. En terminale, il faut donc savoir expliquer ce que fait la carte et pourquoi le programme entraîne telle réponse.

## Exemple simple corrigé

Un bouton est appuyé.

- La carte lit l'entrée numérique
- Le programme teste l'état
- La LED s'allume si le bouton est pressé

Conclusion:

- L'entrée commande le comportement de sortie.

## Erreurs fréquentes

- Confondre entrée et sortie.
- Oublier la logique du programme.
- Penser que le câblage suffit sans code.
- Ne pas distinguer analogique et numérique.

## Mini quiz de 5 questions

1. Qu'est-ce qu'une entrée ?
2. Qu'est-ce qu'une sortie ?
3. Quelle différence entre analogique et numérique ?
4. Pourquoi utiliser Arduino en classe ?
5. Que fait le programme dans le système ?

## Réponses du mini quiz

1. Une information lue par la carte.
2. Un signal envoyé vers un composant.
3. L'analogique varie, le numérique prend des états.
4. Pour prototyper et comprendre les liens capteur-actionneur.
5. Il décide de la réponse du système.

## Liens ou sources utiles

- [STI2D Option SIN / Terminale | Révisions Partie 2 : informatique](https://sti2d.ecolelamache.org/ressources/sin/terminale/cours/2_revision_informatique_eleves.pdf)
- [Cours de Terminale STI2D - SIN](https://sti2d.ecolelamache.org/cours_de_terminale_sti2d__sin.html)

