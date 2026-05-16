# Réseaux et communications

Les réseaux permettent à des systèmes d'échanger de l'information. En SIN, il faut savoir caractériser un réseau, expliquer la communication et comprendre les contraintes de débit, de latence et de fiabilité. Le sujet n'est pas seulement informatique: il concerne le service rendu au système.

Le cours doit toujours relier le réseau au besoin réel: transmettre une alerte, récupérer une mesure, synchroniser des données ou piloter un équipement.

## Objectifs du chapitre

- Comprendre le rôle d'un réseau dans un système SIN.
- Identifier les notions de débit, latence et protocole.
- Lire simplement une architecture de communication.

## Ce qu'il faut savoir

- Un réseau sert à transporter de l'information entre des appareils.
- Le bon fonctionnement dépend du support de communication et des règles d'échange.
- En SIN, on doit savoir relier le réseau au service rendu.

Un réseau n'est utile que s'il sert un besoin réel: envoyer une mesure, transmettre une alerte, coordonner plusieurs appareils ou piloter à distance. Dans un cours complet, on ne se contente pas de dire qu'il y a un réseau; on explique ce qu'il permet de faire et pourquoi il est adapté.

Il faut aussi savoir distinguer les grandes familles de communication:

- filaire: plus stable, souvent plus fiable;
- sans fil: plus flexible, souvent plus pratique pour des objets mobiles;
- local: adapté à quelques appareils proches;
- distant: utile pour du suivi à distance ou des services connectés.

Chaque choix dépend du besoin du système et pas seulement de la mode technologique.

Un réseau n'est utile que s'il sert un besoin réel: envoyer une mesure, transmettre une alerte, coordonner plusieurs appareils ou piloter à distance. Dans un cours complet, on ne se contente pas de dire qu'il y a un réseau; on explique ce qu'il permet de faire et pourquoi il est adapté.

## Définitions importantes

- Réseau: ensemble d'équipements qui échangent des données.
- Protocole: ensemble de règles pour communiquer.
- Débit: quantité de données transmises par unité de temps.
- Latence: temps de réponse.

On rencontre aussi:

- adresse: identifiant d'un appareil;
- paquet: unité de données envoyée sur un réseau;
- protocole: règles qui organisent l'échange.

## Formules importantes

- Pas de formule unique.
- On retient surtout les ordres de grandeur et l'unité des débits.

Quand un débit est donné, il faut vérifier s'il est suffisant pour l'usage. Quand une latence est donnée, il faut se demander si le temps de réponse est compatible avec l'application.

## Méthodes types

- Identifier les appareils reliés.
- Dire quel support est utilisé: filaire ou sans fil.
- Préciser si le système vise la rapidité, la portée ou la fiabilité.
- Comparer deux solutions de transmission.

On peut comparer une solution filaire et une solution sans fil en fonction de:

- la portée;
- la fiabilité;
- la consommation;
- la facilité d'installation;
- la maintenance.

## Lecture de la méthode

Un réseau se lit comme une chaîne de transport de données. On commence par l'émetteur et le récepteur, puis on regarde le support de communication et les règles d'échange. Enfin, on évalue si la communication répond bien au besoin du système.

### Exemple guidé

Dans une maison connectée:

- un capteur envoie la température;
- le réseau transmet la donnée à une application;
- l'utilisateur consulte l'information à distance;
- une commande peut ensuite être renvoyée vers le système.

Conclusion:

- le réseau est pertinent si la communication est stable, rapide et adaptée au besoin.

## Lecture de la méthode

Un réseau se lit comme une chaîne de transport de données. On commence par l'émetteur et le récepteur, puis on regarde le support de communication et les règles d'échange. Enfin, on évalue si la communication répond bien au besoin du système.

## Exemple simple corrigé

Une salle connectée envoie une alerte vers une tablette.

- Le capteur envoie une donnée.
- Le réseau transporte l'information.
- La tablette affiche le message.

Conclusion:

- Le réseau est utile si l'alerte arrive vite et sans perte importante.

Ce type de conclusion montre qu'on a compris le service rendu, et pas seulement le schéma technique.

## Erreurs fréquentes

- Confondre réseau et Internet.
- Parler du matériel sans parler de la communication.
- Oublier la notion de débit.
- Ne pas expliquer l'intérêt du protocole.

## Ce qu'il faut savoir dire

- "Le réseau transmet ..."
- "Le protocole fixe ..."
- "Le débit est ..."
- "La latence est ..."

Ces phrases donnent une réponse claire et directement exploitable au bac.

## Mini quiz de 5 questions

1. À quoi sert un réseau ?
2. Qu'est-ce qu'un protocole ?
3. Que mesure le débit ?
4. Que signifie la latence ?
5. Pourquoi choisir un réseau filaire ou sans fil ?

## Réponses du mini quiz

1. À transporter de l'information.
2. À fixer les règles d'échange.
3. La quantité de données par unité de temps.
4. Le temps de réponse.
5. Selon la portée, la stabilité ou la mobilité recherchées.

## Liens ou sources utiles

- [STI2D - Réseaux et communications informatiques SIN](https://sti2d.ecolelamache.org/ressources/sin/terminale/cours/reseaux_eleves.pdf)
- [Cours de Terminale STI2D - SIN](https://sti2d.ecolelamache.org/cours_de_terminale_sti2d__sin.html)
- [Programme d’innovation technologique et d’ingénierie et développement durable de terminale STI2D](https://eduscol.education.fr/sites/default/files/document/spe591annexe11063610pdf-84507.pdf)
