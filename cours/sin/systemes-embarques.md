# Systèmes embarqués

Un système embarqué est un système intégré dans un objet, avec des contraintes fortes de taille, d'énergie, de mémoire et de fiabilité. En SIN, ce chapitre permet de relier matériel, logiciel et usage réel. Il faut savoir décrire l'architecture et expliquer pourquoi elle est adaptée.

Les sujets de bac insistent souvent sur les compromis: plus de fonctionnalités peut vouloir dire plus de consommation, plus de mémoire ou plus de complexité.

## Objectifs du chapitre

- Comprendre ce qu'est un système embarqué.
- Identifier les contraintes de mémoire, d'énergie et de temps réel.
- Relier architecture matérielle et logiciel embarqué.

## Ce qu'il faut savoir

- Un système embarqué est intégré dans un objet technique.
- Il a souvent peu de ressources mais doit être fiable.
- On le trouve dans les objets connectés, les alarmes, les automatismes et les interfaces.

Un système embarqué est conçu pour une tâche précise. Il doit donc être compact, efficace et stable. La mémoire, la consommation électrique et le temps de réponse deviennent des contraintes de conception à part entière. C'est pour cela qu'en SIN, on insiste autant sur l'architecture que sur le comportement.

Le cours complet doit montrer que le logiciel et le matériel sont pensés ensemble. Ce n'est pas un ordinateur généraliste, mais un système spécialisé.

Un système embarqué n'est pas un ordinateur généraliste. Il remplit une fonction précise dans un objet donné, avec des contraintes de taille, de consommation, de mémoire et de temps de réponse. En SIN, il faut donc savoir décrire son architecture et comprendre pourquoi elle est adaptée.

Le cours complet doit faire apparaître le compromis entre fonctionnalités, consommation et fiabilité.

## Définitions importantes

- Microcontrôleur: composant qui exécute un programme et pilote des entrées/sorties.
- Mémoire: espace où sont stockées les données ou le programme.
- Temps réel: réponse dans un délai utile.
- Interface: moyen de communiquer avec l'utilisateur ou le reste du système.

## Formules importantes

- Pas de formule unique.
- La logique à retenir est: capteurs -> traitement -> mémoire -> actionneurs.

## Méthodes types

- Décrire les entrées et les sorties.
- Citer la mémoire ou les données à conserver.
- Expliquer la contrainte principale: autonomie, fiabilité, rapidité ou taille.
- Donner un exemple concret.

## Lecture de la méthode

Un système embarqué se lit en regardant d'abord ce qu'il doit faire, puis les ressources dont il dispose. Si l'objet doit répondre vite, la question du temps réel devient importante. S'il est portable, la consommation et l'autonomie deviennent prioritaires.

## Lecture de la méthode

Un système embarqué se lit en regardant d'abord ce qu'il doit faire, puis les ressources dont il dispose. Si l'objet doit répondre vite, la question du temps réel devient importante. S'il est portable, la consommation et l'autonomie deviennent prioritaires.

## Exemple simple corrigé

Un badge d'accès.

- Le lecteur identifie la carte.
- Le microcontrôleur compare l'information.
- La porte s'ouvre si le droit d'accès est valide.

Conclusion:

- Le système embarqué fonctionne s'il répond vite et de façon fiable.

Cette fiabilité doit être reliée au besoin réel de l'objet et à ses contraintes d'usage.

Cette fiabilité doit être reliée au besoin réel de l'objet et à ses contraintes d'usage.

## Erreurs fréquentes

- Réduire le système embarqué au seul boîtier.
- Oublier la mémoire ou le stockage.
- Ne pas parler de contraintes.
- Confondre matériel et programme.

## Mini quiz de 5 questions

1. Qu'est-ce qu'un système embarqué ?
2. Quel est le rôle d'un microcontrôleur ?
3. Pourquoi parle-t-on de temps réel ?
4. Quelles contraintes faut-il souvent citer ?
5. Pourquoi l'architecture logicielle compte-t-elle autant que le matériel ?

## Réponses du mini quiz

1. Un système intégré dans un objet technique.
2. Exécuter le programme et piloter les entrées/sorties.
3. Parce que la réponse doit arriver dans un délai utile.
4. La mémoire, l'autonomie, la fiabilité, la taille ou la rapidité.
5. Parce que le comportement final dépend des deux.

## Liens ou sources utiles

- [Cours de Terminale STI2D - SIN](https://sti2d.ecolelamache.org/cours_de_terminale_sti2d__sin.html)
- [STI2D Option SIN / Terminale | Révisions Partie 5 : stockage](https://sti2d.ecolelamache.org/ressources/sin/terminale/cours/5%20Stockage_eleves.pdf)
- [Programme d’innovation technologique et d’ingénierie et développement durable de terminale STI2D](https://eduscol.education.fr/sites/default/files/document/spe591annexe11063610pdf-84507.pdf)
