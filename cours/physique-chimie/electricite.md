# Électricité

L'électricité est une base de lecture des systèmes techniques en STI2D. Elle permet de comprendre l'alimentation, la commande, la consommation et le comportement d'un circuit. Les exercices demandent surtout de la rigueur: bon schéma mental, bonnes unités, et phrase de conclusion correcte.

Le chapitre est utile dès qu'on parle d'un capteur, d'un moteur, d'une résistance ou d'une carte électronique. Il faut donc apprendre à relier le calcul à l'objet réel.

## Objectifs du chapitre

- Comprendre la loi d'Ohm.
- Utiliser les grandeurs électriques de base.
- Lire un circuit simple et vérifier un résultat.

## Ce qu'il faut savoir

- La tension, l'intensité et la résistance sont les grandeurs de base en électricité.
- En terminale STI2D, on les utilise pour étudier un système réel.
- La cohérence des unités est indispensable.

L'électricité sert à comprendre comment un système est alimenté et comment il consomme. Une tension n'est pas juste un nombre: c'est une différence de potentiel entre deux points. Une intensité n'est pas juste une formule: c'est la manière dont le courant traverse le circuit. La résistance décrit, elle, la difficulté plus ou moins grande du passage du courant.

Quand on étudie un objet technique, il faut relier ces grandeurs à l'usage: pourquoi le courant circule, quel composant le limite, et quelle tension est nécessaire pour que l'ensemble fonctionne correctement.

On travaille souvent avec des valeurs réelles: alimentation de 5 V, batterie de 12 V, résistance de quelques dizaines d'ohms, moteur ou LED. Le chapitre doit donc être compris comme un outil de lecture pratique. Un bon raisonnement en électricité commence par un circuit proprement identifié, puis par le choix de la relation adaptée.

Dans les sujets de bac, on demande souvent d'expliquer si un composant est correctement alimenté, si une valeur est cohérente ou si un montage risque de fonctionner de travers. Cela oblige à relier calcul et sens physique.

Dans un circuit de bac, l'objectif n'est pas seulement de calculer. Il faut aussi savoir dire quel composant est étudié, pourquoi la grandeur est importante et si la valeur obtenue est acceptable. Par exemple, une LED ne fonctionne pas comme une résistance: elle a un comportement particulier et demande souvent une limitation de courant. Cette idée doit rester présente dans tout le chapitre.

Le raisonnement de base est toujours le même:

1. repérer le composant ou le dipôle;
2. identifier la grandeur qu'on cherche;
3. choisir la relation adaptée;
4. vérifier les unités;
5. conclure sur le fonctionnement réel.

## Définitions importantes

- Tension $U$: différence de potentiel entre deux points.
- Intensité $I$: débit de charges électriques.
- Résistance $R$: opposition au passage du courant.
- Circuit série: les dipôles sont traversés par le même courant.

## Formules importantes

- $U = R \times I$
- $I = \dfrac{U}{R}$
- $R = \dfrac{U}{I}$

Ces trois écritures sont la même relation, simplement réorganisée. Il faut savoir choisir celle qui isole la grandeur cherchée.

Quand on passe d'une formule à l'autre, on ne fait pas juste un "truc de calcul". On isole une grandeur pour répondre à une question précise. Cette logique est importante en bac parce qu'elle évite les erreurs de manipulation.

### Circuit série et circuit parallèle

- En série, le courant est le même dans tous les dipôles.
- En parallèle, la tension est la même aux bornes de chaque branche.

Cette distinction revient souvent dans les questions de lecture de schéma. Avant de calculer, il faut donc reconnaître la structure du circuit.

## Méthodes types

- Identifier les données connues.
- Choisir la bonne formule.
- Convertir les unités si besoin.
- Écrire le calcul puis la conclusion.

### Méthode pas à pas

1. Relever les grandeurs données dans l'énoncé.
2. Écrire la relation utile avant de remplacer les valeurs.
3. Convertir les milliampères, kilohms ou volts si nécessaire.
4. Effectuer le calcul.
5. Vérifier que l'ordre de grandeur est plausible.

## Lecture de la méthode

Avant de calculer, repère le rôle de chaque élément du circuit. Demande-toi ce qui est connu, ce qui est inconnu et ce qui est demandé. Ensuite, choisis la relation adaptée. Le bon résultat est un résultat vérifié par les unités et par le sens physique.

Il faut aussi faire attention au montage série ou parallèle quand il est mentionné. Les règles de répartition du courant et de la tension changent selon la structure du circuit. C'est une source d'erreur classique, donc il faut toujours lire le schéma avant de calculer.

### Exemple guidé

On étudie une résistance alimentée sous $12\ \mathrm{V}$ avec un courant de $0{,}4\ \mathrm{A}$.

- on repère la relation $U = R \times I$;
- on calcule $R = \dfrac{U}{I}$;
- $R = \dfrac{12}{0{,}4} = 30\ \Omega$.

Conclusion:

- la résistance vaut $30\ \Omega$;
- la valeur est cohérente si le courant attendu est modéré.

Cette rédaction est complète parce qu'elle explique la formule, le calcul et la conclusion.

## Exemple simple corrigé

On a $R = 20\ \Omega$ et $I = 0{,}2\ \mathrm{A}$.

- $U = R \times I$
- $U = 20 \times 0{,}2 = 4\ \mathrm{V}$

Conclusion:

- La tension aux bornes du dipôle est de $4\ \mathrm{V}$.

On peut vérifier le résultat: si la résistance est de 20 ohms et le courant de 0,2 ampère, une tension de 4 volts est cohérente. Cette vérification finale est un réflexe important au bac.

### Ce qu'il faut observer sur un schéma

- la source d'alimentation;
- les dipôles en série ou en parallèle;
- la grandeur demandée;
- l'endroit où la tension ou le courant est mesuré.

Plus le schéma est lu correctement, plus le calcul devient simple.

## Erreurs fréquentes

- Inverser les grandeurs dans la formule.
- Oublier la conversion des milliampères.
- Donner un résultat sans unité.
- Ne pas vérifier si le résultat est réaliste.
- Confondre tension et intensité.
- Oublier que la loi d'Ohm ne s'applique pas à tous les dipôles de la même façon.

## Ce qu'il faut retenir pour le bac

- U, I et R sont les trois grandeurs de base.
- Les unités doivent être cohérentes.
- La réponse doit être écrite comme une conclusion physique.
- Le sens du résultat compte autant que le calcul.

## Rappel bac

Quand tu rédiges, pense toujours à écrire une phrase de conclusion du type:

- "La tension aux bornes du composant vaut ..."
- "Le courant dans la branche est ..."
- "La valeur est cohérente avec le fonctionnement attendu ..."

Cette phrase montre que tu n'as pas seulement fait un calcul, mais aussi interprété le résultat.

## Mini quiz de 5 questions

1. Quelle formule relie tension, résistance et intensité ?
2. Quelle unité correspond à l'intensité ?
3. Que mesure la résistance ?
4. Pourquoi convertir les unités avant de calculer ?
5. Quelle phrase doit accompagner le résultat ?

## Réponses du mini quiz

1. $U = R \times I$.
2. L'ampère, noté $\mathrm{A}$.
3. L'opposition au passage du courant.
4. Pour éviter un résultat faux ou incohérent.
5. Une phrase qui dit clairement quelle grandeur on a trouvée.

## Liens ou sources utiles

- [Programme de physique-chimie et mathématiques de terminale STI2D](https://eduscol.education.fr/sites/default/files/document/spe261annexe1158935pdf-84513.pdf)
- [Annabac - physique-chimie STI2D](https://www.annabac.com/tle-sti2d/physique-chimie)
