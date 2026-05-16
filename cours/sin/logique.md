# Logique combinatoire

La logique combinatoire permet de décrire des systèmes où la sortie dépend uniquement des entrées à l'instant considéré. En SIN, elle est très utile pour comprendre des automatismes simples, des états de capteurs et des décisions rapides. Le chapitre fait le lien entre le binaire et le comportement réel d'un système numérique.

## Objectifs du chapitre

- Comprendre les états logiques.
- Lire une relation simple entre entrées et sortie.
- Savoir expliquer un petit schéma logique.

## Ce qu'il faut savoir

- Une entrée logique vaut souvent 0 ou 1.
- Une porte logique combine plusieurs entrées.
- La sortie dépend seulement de l'état présent des entrées.

## Définitions importantes

- ET: sortie vraie si toutes les entrées sont vraies
- OU: sortie vraie si au moins une entrée est vraie
- NON: inverse un état logique
- Table de vérité: tableau qui montre toutes les sorties possibles

## Méthodes types

- Lister les entrées possibles.
- Compléter une table de vérité.
- Expliquer le comportement du système.
- Vérifier la cohérence entre schéma et résultat.

## Développement du cours

La logique combinatoire est la base de nombreuses décisions automatiques. Par exemple, une alarme peut s'activer si un capteur est déclenché et si le système est armé. On ne demande pas encore au système d'avoir une mémoire ou un historique: il réagit seulement à l'instant présent.

Cette logique est importante parce qu'elle relie le binaire à une décision réelle. Un système numérique n'est pas une suite d'états abstraits: il prend des décisions en fonction de conditions simples, codées par des 0 et des 1.

## Exemple simple corrigé

Si la porte est ouverte ET si l'alarme est armée, alors la sirène se déclenche.

- Entrée 1: porte ouverte
- Entrée 2: alarme armée
- Sortie: sirène

Conclusion:

- La sortie dépend des deux conditions en même temps.

## Erreurs fréquentes

- Confondre ET et OU.
- Oublier la table de vérité.
- Croire que la logique combinatoire garde une mémoire.
- Ne pas relier la logique au système réel.

## Mini quiz de 5 questions

1. Qu'est-ce qu'une entrée logique ?
2. Quand la sortie d'un ET est-elle vraie ?
3. Que fait la porte NON ?
4. Qu'est-ce qu'une table de vérité ?
5. Pourquoi cette logique est-elle utile en SIN ?

## Réponses du mini quiz

1. Un état 0 ou 1.
2. Quand toutes les entrées sont vraies.
3. Elle inverse l'état.
4. Un tableau des sorties possibles.
5. Pour modéliser des décisions simples et rapides.

## Liens ou sources utiles

- [STI2D Option SIN / Terminale | Révisions Partie 3 : binaire, numération, CNA, CAN, logique](https://sti2d.ecolelamache.org/ressources/sin/terminale/cours/3_revision_binaire_eleves.pdf)
- [En Sciences - Terminale STI2D](https://www.ensciences.fr/terminale_sti2d)

