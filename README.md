[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/CWq9hgWs)
##### :warning: Une fois l'étape 4 complétée, n'oubliez pas d'inclure l'URL de votre `Firebase Hosting` dans la section `About` du dépôt GitHub (ci-haut à droite !) :warning:

# Examen final (20 %)
>Travail STRICTEMENT individuel

## Site Web multilingue du restaurant *Café rouge*

### Ce qu’il faut faire
Partant du code source fourni dans ce dépôt GitHub, vous devez créer et intégrer des données dynamiques stockées dans `Firestore` pour le site du restaurant *Café rouge* développé avec React, et permettre l’interactivité de *changement de langue* du site :

La liste des fonctionnalités à implémenter suivent, et une démo de la solution modèle est disponible [ici](https://h26-ef-caferouge.web.app/)

>Suggestion : créez des **nouvelles ressources** `Firebase` pour cette évaluation (nouveau projet `Firebase` / nouvelle appli / nouvelle collection `Firestore`).

1. **Stockage du menu dans `Firestore` (3 points)**
    * Pour chaque plat dans le menu du restaurant, on veut stocker le nom en français, le nom en anglais (traduisez librement ou à l’aide de Google Translate), ainsi que le prix ; :warning: choisissez bien les types de valeurs dans `Firestore` !!! Pour les besoins de cette évaluation, vous pouvez ignorer les catégories ou sections de menu (entrées, plats principaux, etc. : occupez-vous uniquement des *plats*) ;
    * Configurez les règles de sécurité pour permettre l’accès libre à tous les documents, MAIS ceci uniquement en **lecture**. Si vous ne savez pas comment faire, utilisez cette règle (mais faites attention à ajuster le nom de la collection, ici j'utilise "*menu*") : 
        ```
        rules_version='2'

        service cloud.firestore {
            match /databases/{database}/documents {
                match /menu/{document=**} {
                    allow read: if true;
                }
            }
        }
        ```

2. **Affichage du menu dynamiquement à partir de Firestore (10 points)**
    * Programmez l’affichage du menu : au chargement de la page le menu doit être affiché dynamiquement en français ; 
    * Triez les plats en ordre **croissant** des prix (donc du moins cher au plus cher). Ça peut être fait simplement avec `Firestore` mais sinon en `JavaScript` comme nous avons vu à plusieurs reprises en classe. 

>Suggestion : utilisez *useState* et *useEffect*.

3. **Gestion du choix de langue (et sauvegarde dans localStorage) (5 points)**
    * Par défaut la langue du site est le *français* ;
    * Si l’utilisateur choisi une langue en cliquant l’un des deux « boutons », la langue du site est modifiée adéquatement ;
    * Les textes statiques (stockés dans le fichier `localisation/textes-statiques.json`) et le contenu dynamique (le menu que vous avez intégré dans `Firestore`) suivent tous deux ce choix de langue ;
    * Même chose pour les méta-informations du site (attribut `lang` de la balise `HTML`, et les éléments `TITLE`, `META`, et `NOSCRIPT`) ;
    * Le bouton de choix de langue correspondant à la langue active est surligné (comme dans la démo) ; 
    * [2 points boni] On conserve le choix de langue dans *localStorage* lorsqu'un *bouton* de langue est cliqué, et on le récupère à partir de *localStorage* à la prochaine visite au site.

>Suggestion : utilisez *useState* pour gérer la valeur de la langue choisie, et `useEffect` pour modifier les valeurs du fichier HTML de l'appli ;

4. **Hébergement sur `Firebase Hosting` (2 points)**
    * **Compilez** votre projet pour obtenir le dossier de l'application à déployer (`dist`) 
    * Configurez `Firebase Hosting` pour votre projet et déployez votre appli... suivez les instructions dans votre compte `Firebase` en ligne ; mais voici un rappel de la procédure générale :
        * Installer les `outils` `Firebase` (si ce n'était pas déjà fait)
        * Compléter la commande `firebase login` (si ce n'était pas déjà fait)
        * Compléter la commande `firebase init` (configurez `hosting` et `firestore`)
        * Compléter la commande `firebase deploy`
    * Vérifiez que votre URL d’hébergement fonctionne correctement ;
    * Ajoutez l’URL de votre site hébergé sur la page d'accueil de votre dépôt GitHub !

5. **Remise (points retirés pour toute remise non-conforme)**
    * Votre dernière *sauvegarde* (`commit`) de code avant la remise doit avoir le *message* suivant : "Examen final complété" ;
    * Synchronisez (`push`) votre solution complétée avec le dépôt `GitHub` qui vous a été assigné lorsque vous avez accepté le travail avec `GitHub Classroom` ;
    * Vérifiez auprès de moi que votre dépôt de remise contient la sauvegarde appropriée.

### Gardez une copie personnelle de votre travail : le dépôt de remise sur `582-4PA` sera supprimé une fois la correction complétée et les notes publiées.