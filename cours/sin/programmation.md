# Programmation

La programmation en SIN sert à piloter un système à partir de règles explicites. Le cours doit donc montrer comment on passe d'un besoin à un algorithme, puis d'un algorithme à un comportement réel. En terminale, on attend surtout de la logique, de la clarté et une bonne lecture des structures de base.

L'objectif n'est pas de produire du code compliqué, mais de savoir expliquer ce que fait un programme.

Il faut aussi comprendre qu'un programme peut lire une information, prendre une décision et déclencher une action. C'est cette chaîne logique qui relie le code au système réel.

## Objectifs du chapitre

- Lire un algorithme simple.
- Comprendre variables, conditions et boucles.
- Relier le code au comportement du système.

## Ce qu'il faut savoir

- La programmation sert à faire exécuter une logique précise par un système.
- En SIN, il faut être capable de décrire ce que fait le programme.
- Le bac apprécie les réponses simples, propres et justifiées.
- Un programme peut gérer une alarme, une mesure, une commande ou un affichage.

La programmation n'est pas seulement de l'informatique. En STI2D, elle permet de donner un comportement à un objet technique: déclencher une alarme, commander un moteur, lire un capteur, envoyer une donnée. Le plus important est de savoir expliquer la logique, pas de produire du code sophistiqué.

Un bon cours doit donc montrer le lien entre l'algorithme et l'effet réel. Si le programme change, le comportement du système change aussi.

Le vocabulaire doit rester précis: une variable stocke une donnée, une condition teste une situation, une boucle répète, une fonction réutilise. Ces quatre idées couvrent la majorité des questions de base.

Dans un cours complet, il faut aussi voir comment ces éléments s'enchaînent:

- une entrée fournit une donnée;
- un test compare cette donnée à une consigne;
- une action est déclenchée;
- le programme recommence si nécessaire.

Cette logique est très fréquente dans les systèmes embarqués et les objets connectés.

## Définitions importantes

- Variable: zone de mémoire qui stocke une valeur.
- Condition: test qui permet de choisir une action.
- Boucle: répétition d'instructions.
- Fonction: bloc réutilisable qui réalise une tâche.
- Programme: ensemble d'instructions exécutées dans un ordre précis.

On peut ajouter deux notions très utiles:

- constante: valeur qui ne change pas pendant l'exécution;
- algorithme: suite d'étapes pour résoudre un problème.

## Formules importantes

- Pas de formule unique.
- On retient surtout la structure: entrée -> traitement -> sortie.

En pseudo-code, cette structure peut s'écrire:

- lire une valeur;
- comparer;
- agir;
- recommencer si besoin.

### Méthode de lecture

1. Repérer les entrées.
2. Repérer la condition ou la boucle.
3. Expliquer le résultat attendu.
4. Déboguer en cherchant l'erreur logique.
5. Vérifier la cohérence avec le système réel.

## Méthodes types

- Repérer les entrées.
- Repérer la condition ou la boucle.
- Expliquer le résultat attendu.
- Déboguer en cherchant l'erreur logique.

Quand une erreur apparaît, il faut relire le programme dans l'ordre d'exécution. Beaucoup d'erreurs viennent d'une mauvaise condition, d'une variable mal initialisée ou d'une boucle qui ne s'arrête pas.

## Lecture de la méthode

Commence toujours par identifier ce qui entre dans le programme: mesure, état, consigne ou événement. Ensuite, suis le chemin logique des instructions. Si le programme contient une boucle, demande-toi ce qu'elle répète et pourquoi. Si elle contient une condition, demande-toi quand la décision change.

Quand on rédige une réponse, on doit parler en langage clair: "si le capteur détecte...", "alors le système...", "sinon...". Cette formulation montre qu'on a compris la logique du code.

### Exemple guidé

On veut allumer une LED quand la luminosité est trop faible.

- le capteur mesure la lumière;
- le programme compare la valeur à un seuil;
- si la valeur est trop faible, la LED s'allume;
- sinon, elle reste éteinte.

Conclusion:

- le programme transforme une mesure en décision automatique.

Cette logique correspond exactement à la chaîne d'information du système.

## Exemple simple corrigé

Programme d'alarme:

- Si le capteur détecte un mouvement, alors la sirène s'active.
- Sinon, la sirène reste éteinte.

Conclusion:

- La condition permet d'activer la bonne réponse seulement quand c'est nécessaire.

Dans un cours complet, on insiste sur la lisibilité du programme et sur la cohérence entre le code et le besoin du système.

On peut aussi demander à l'élève de repérer une erreur dans un programme simple. Dans ce cas, il faut suivre le raisonnement ligne par ligne plutôt que de chercher au hasard.

## Erreurs fréquentes

- Confondre variable et constante.
- Oublier un `sinon`.
- Croire qu'une boucle est toujours infinie.
- Ne pas lire le rôle des données d'entrée.
- Oublier de relier le programme à l'effet réel.

## Ce qu'il faut savoir écrire

- "Si ... alors ..."
- "Sinon ..."
- "La variable contient ..."
- "La boucle répète ..."

Ces tournures simples montrent que tu sais lire ou expliquer un programme.

## Ce qu'il faut retenir pour le bac

- Un programme formalise une logique.
- Il doit être lisible et relié au besoin.
- Variables, conditions et boucles sont essentielles.
- Il faut savoir expliquer ce que fait le code.

## Mini quiz de 5 questions

1. Qu'est-ce qu'une variable ?
2. À quoi sert une condition ?
3. À quoi sert une boucle ?
4. Pourquoi écrire une fonction ?
5. Que faut-il faire si le programme ne marche pas ?

## Réponses du mini quiz

1. À stocker une valeur.
2. À choisir entre plusieurs actions.
3. À répéter des instructions.
4. À réutiliser un bloc de code.
5. Chercher l'erreur logique étape par étape.

## Liens ou sources utiles

- [STI2D Option SIN / Terminale | Révisions Partie 2 : informatique](https://sti2d.ecolelamache.org/ressources/sin/terminale/cours/2_revision_informatique_eleves.pdf)
- [STI2D Option SIN / Terminale | Révisions Partie 3 : binaire, numération, CNA, CAN, logique](https://sti2d.ecolelamache.org/ressources/sin/terminale/cours/3_revision_binaire_eleves.pdf)
- [En Sciences - Terminale STI2D](https://www.ensciences.fr/terminale_sti2d)
