# Chaîne d'information

La chaîne d'information décrit la façon dont un système capte, traite et transmet des données. C'est une colonne vertébrale du programme 2I2D et du SIN. En pratique, il faut savoir reconnaître les blocs, leur rôle et l'ordre dans lequel l'information circule.

Une bonne lecture de schéma doit permettre de passer d'un capteur à une commande en expliquant ce qui se passe à chaque étape.

Ce chapitre est fondamental parce qu'il fait le lien entre la mesure du réel et la décision automatique. Sans chaîne d'information, un système ne sait pas quoi faire de ce qu'il détecte. C'est donc la partie "cerveau" de la solution technique.

## Objectifs du chapitre

- Décrire la chaîne d'information d'un système.
- Identifier capteur, acquisition, traitement et commande.
- Comprendre le lien entre matériel et logiciel.

## Ce qu'il faut savoir

- La chaîne d'information transforme une grandeur en décision.
- En terminale STI2D, il faut savoir lire un schéma et expliquer le rôle de chaque bloc.
- Le vocable doit être précis.

Le mot important ici est décision. La chaîne d'information transforme une observation en action possible. Cette transformation passe par plusieurs étapes que l'on doit savoir nommer clairement.

Cette chaîne est le cerveau du système. Elle capte une grandeur physique, la met en forme, la traite et transmet une décision. Dans beaucoup de sujets, il faut montrer que l'on sait distinguer capteur, acquisition, traitement et communication sans les confondre.

Le cours complet doit aussi faire apparaître le lien avec le logiciel: un système ne prend pas de décision sans programme ou logique de traitement.

Dans une analyse de projet, il faut donc regarder à la fois le capteur, la carte ou le programme, puis le moyen de transmettre l'ordre. Cette lecture évite de réduire le système à un simple objet mécanique.

Pour bien comprendre cette chaîne, il faut suivre une progression logique:

1. une grandeur physique existe dans le réel;
2. le capteur la transforme en information exploitable;
3. le traitement décide quoi faire;
4. la communication envoie la consigne ou l'état au bon endroit.

Cette progression est au cœur de la plupart des systèmes connectés étudiés en terminale STI2D.

## Définitions importantes

- Capteur: composant qui mesure une grandeur physique.
- Acquisition: récupération et mise en forme de l'information.
- Traitement: analyse de l'information pour prendre une décision.
- Communication: transmission de l'information vers un autre bloc ou un utilisateur.

On peut résumer la logique par: capter, acquérir, traiter, communiquer, commander. Cette suite de verbes doit devenir un réflexe.

### Lecture des blocs

- capteur: il mesure une grandeur du réel;
- acquisition: il convertit ou adapte le signal;
- traitement: il compare, décide ou calcule;
- communication: il transmet l'information;
- commande: il déclenche l'action attendue.

Chaque bloc a un rôle précis. Le sujet de bac attend souvent que tu sois capable de dire lequel fait quoi.

## Formules importantes

- Pas de formule unique.
- La chaîne peut se résumer ainsi: capter -> acquérir -> traiter -> communiquer -> commander.

## Méthodes types

- Repérer d'abord la grandeur mesurée.
- Suivre le trajet de l'information.
- Nommer la fonction de chaque bloc.
- Faire le lien avec le besoin du système.

Si le système est connecté, il faut aussi regarder:

- ce qui est envoyé;
- à qui c'est envoyé;
- sous quelle forme c'est transmis;
- pourquoi cette transmission est utile.

### Méthode de lecture

1. Repérer la grandeur mesurée.
2. Suivre le trajet de l'information.
3. Nommer chaque fonction avec précision.
4. Distinguer l'information de l'énergie.
5. Vérifier que la chaîne permet bien la bonne décision.

## Lecture de la méthode

Regarde toujours le schéma dans l'ordre réel de circulation de l'information. Cela évite de confondre l'entrée et la sortie. Ensuite, demande-toi quelle donnée est utile, comment elle est transformée et à quel moment la commande est envoyée.

Dans les exercices, la plupart des erreurs viennent d'un vocabulaire trop vague. Dire seulement "ça envoie des données" ne suffit pas. Il faut préciser qui mesure, qui décide et qui transmet.

### Exemple guidé

Dans un système d'éclairage automatique:

- le capteur de luminosité mesure la lumière ambiante;
- la carte acquiert cette mesure;
- le programme compare la valeur à un seuil;
- la communication envoie l'ordre d'allumer ou d'éteindre.

Conclusion:

- la chaîne d'information est correcte si la décision correspond au besoin.

On peut alors relier la chaîne d'information à la chaîne d'énergie: la première décide, la seconde agit.

## Exemple simple corrigé

Une alarme de présence.

- Le capteur détecte un mouvement.
- La carte acquiert et traite l'information.
- Le système communique une alerte et déclenche une commande.

Conclusion:

- La chaîne d'information est cohérente si la détection entraîne la bonne action.

Le rôle du cours est de montrer que cette cohérence repose sur un enchaînement logique de fonctions.

On peut aussi dire que la chaîne d'information prépare la chaîne d'énergie. Elle ne fournit pas l'action elle-même, mais elle donne l'ordre qui la déclenche.

## Erreurs fréquentes

- Confondre capteur et actionneur.
- Oublier la partie traitement.
- Parler d'énergie au lieu d'information.
- Rester trop général.
- Ne pas nommer les étapes dans le bon ordre.
- Confondre acquisition et traitement.

## Ce qu'il faut retenir pour le bac

- La chaîne d'information transforme une mesure en décision.
- Il faut savoir nommer capteur, acquisition, traitement et communication.
- L'information et l'énergie ne jouent pas le même rôle.
- La conclusion doit relier le schéma au besoin du système.

## Ce qu'il faut savoir dire

- "Le capteur mesure ..."
- "Le traitement compare ..."
- "La communication transmet ..."
- "La commande déclenche ..."

Ces verbes aident à rédiger des réponses nettes et complètes.

## Mini quiz de 5 questions

1. Quel est le rôle d'un capteur ?
2. À quoi sert le traitement ?
3. Quelle est la différence entre information et énergie ?
4. Quel bloc transmet l'alerte ?
5. Pourquoi faut-il lire le schéma en entier ?

## Réponses du mini quiz

1. Mesurer une grandeur physique.
2. Décider quoi faire à partir de l'information.
3. L'information sert à décider, l'énergie sert à agir.
4. Le bloc de communication.
5. Pour comprendre l'ensemble du système.

## Liens ou sources utiles

- [Programme d’innovation technologique et d’ingénierie et développement durable de terminale STI2D](https://eduscol.education.fr/sites/default/files/document/spe591annexe11063610pdf-84507.pdf)
- [Cours de Terminale STI2D - SIN](https://sti2d.ecolelamache.org/cours_de_terminale_sti2d__sin.html)
