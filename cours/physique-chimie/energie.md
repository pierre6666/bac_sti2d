# Énergie et puissance

L'énergie et la puissance reviennent constamment en STI2D parce qu'elles servent à comparer des solutions techniques. La puissance dit à quelle vitesse un système consomme ou produit de l'énergie; l'énergie dit combien il en a consommé ou produit au total. Cette distinction est essentielle pour parler d'autonomie, de rendement ou de dimensionnement.

Un cours complet sur ce chapitre doit faire apparaître le calcul, mais aussi le sens concret du résultat.

## Objectifs du chapitre

- Comprendre la différence entre puissance et énergie.
- Savoir calculer une consommation.
- Estimer une autonomie ou un rendement.

## Ce qu'il faut savoir

- La puissance décrit un rythme de consommation ou de production.
- L'énergie est la quantité totale consommée ou produite sur une durée.
- En STI2D, ce chapitre sert souvent à juger si un système est réaliste.

Il faut bien séparer les deux notions. Une puissance de 100 W ne veut pas dire qu'on consomme 100 W "en tout": cela veut dire qu'on consomme 100 joules par seconde. Pour connaître la consommation totale, il faut tenir compte du temps. C'est cette différence qui permet de calculer une autonomie ou de comparer deux solutions techniques.

Cette distinction revient dans presque tous les sujets de bac. Si l'énoncé donne une durée, tu dois penser à l'énergie. S'il parle d'un état instantané de fonctionnement, tu dois penser à la puissance. C'est un réflexe de base à automatiser.

Dans les systèmes techniques, on se pose souvent trois questions:

1. quelle puissance faut-il fournir ?
2. quelle énergie sera consommée ?
3. combien de temps le système peut-il fonctionner avec une réserve donnée ?

## Définitions importantes

- Puissance: énergie par unité de temps.
- Énergie: grandeur cumulée sur une durée.
- Rendement: rapport entre ce qui est utile et ce qui est reçu.

## Formules importantes

- $P = U \times I$
- $E = P \times t$
- $\eta = \dfrac{E_{\text{utile}}}{E_{\text{reçue}}}$

On utilise aussi les unités suivantes:

- $J$ pour le joule;
- $\mathrm{Wh}$ pour une énergie électrique pratique;
- $\mathrm{kWh}$ pour des consommations plus grandes.

Savoir passer de l'une à l'autre évite des erreurs de conversion.

## Méthodes types

- Partir de la puissance si l'appareil est électrique.
- Multiplier par la durée pour obtenir une énergie.
- Vérifier les unités: $\mathrm{W}$, $\mathrm{Wh}$, $\mathrm{kWh}$, $J$.
- Commenter si l'autonomie est cohérente.

Si on te donne une batterie ou une durée d'utilisation, il faut aussi penser à la relation inverse:

- $t = \dfrac{E}{P}$

Cette écriture sert à estimer une autonomie à partir d'une énergie disponible et d'une puissance consommée.

## Lecture de la méthode

Le plus souvent, l'énoncé donne une puissance et une durée. Il faut alors passer à l'énergie. Si l'on parle d'autonomie, on inverse parfois la démarche: on part de l'énergie disponible et on la compare à la consommation. Le raisonnement doit rester simple, mais complet.

Quand on parle de rendement, il faut bien distinguer:

- l'énergie reçue, qui entre dans le système;
- l'énergie utile, qui produit l'effet attendu;
- les pertes, qui ne sont pas récupérées.

En STI2D, cette idée sert à comparer des solutions techniques et à discuter leur efficacité réelle.

### Exemple guidé d'autonomie

Une batterie stocke $120\ \mathrm{Wh}$ et l'appareil consomme $15\ \mathrm{W}$.

- $t = \dfrac{E}{P}$
- $t = \dfrac{120}{15} = 8\ \mathrm{h}$

Conclusion:

- l'autonomie théorique est de $8\ \mathrm{h}$;
- en pratique, elle peut être un peu plus faible à cause des pertes.

## Exemple simple corrigé

Un appareil de $60\ \mathrm{W}$ fonctionne pendant $5\ \mathrm{h}$.

- $E = P \times t$
- $E = 60 \times 5 = 300\ \mathrm{Wh}$

Conclusion:

- L'appareil consomme $300\ \mathrm{Wh}$, soit $0{,}3\ \mathrm{kWh}$.

Cette valeur permet ensuite de comparer l'appareil à une autre solution. Un bon cours doit faire apparaître ce lien entre calcul et choix technique.

Cette comparaison est utile pour décider si une solution est acceptable, trop énergivore ou intéressante du point de vue du rendement.

## Erreurs fréquentes

- Confondre puissance et énergie.
- Oublier la durée.
- Mélanger $\mathrm{Wh}$ et $J$ sans conversion.
- Oublier de conclure sur le contexte.

## Ce qu'il faut savoir écrire au bac

- "La puissance vaut ..."
- "L'énergie consommée est ..."
- "L'autonomie théorique est ..."
- "Le rendement est faible/bon car ..."

Ces formulations simples montrent que le calcul est compris et pas seulement appliqué.

## Mini quiz de 5 questions

1. Quelle est la différence entre puissance et énergie ?
2. Quelle formule relie puissance, tension et intensité ?
3. Comment calcule-t-on une énergie consommée ?
4. Qu'est-ce qu'un rendement ?
5. Pourquoi faut-il commenter le résultat ?

## Réponses du mini quiz

1. La puissance est un débit, l'énergie est une quantité totale.
2. $P = U \times I$.
3. $E = P \times t$.
4. Un rapport entre utile et reçu.
5. Pour dire si le résultat est exploitable dans la situation.

## Liens ou sources utiles

- [Programme de physique-chimie et mathématiques de terminale STI2D](https://eduscol.education.fr/sites/default/files/document/spe261annexe1158935pdf-84513.pdf)
- [Annabac - physique-chimie STI2D](https://www.annabac.com/tle-sti2d/physique-chimie)
- [Lumni - Terminale](https://www.lumni.fr/lycee/terminale/bac)
