# Proposal

## Why

La société, composée de 5 experts en pose de carrelage, n'a pas de présence web qui présente son activité. Les clients de ce métier décident surtout sur la confiance et contactent l'artisan par téléphone : une page simple, rapide sur mobile, qui rassure et pousse à appeler répond directement à ce besoin.

## What Changes

- Création d'une landing page web statique (HTML/CSS, JavaScript minimal voire aucun), sans framework ni backend.
- Objectif unique de la page : faire appeler. Le numéro est un lien `tel:` cliquable, visible dès le hero, répété en bas de page, et accessible via un bouton d'appel fixe sur mobile.
- Pas de formulaire de contact. Un simple lien `mailto:` peut servir de canal secondaire.
- Sections : hero avec appel, services, équipe (section vedette, 5 portraits), preuves de confiance, bloc d'appel/contact.
- Pas de galerie de réalisations au lancement ; la structure doit permettre d'en ajouter une plus tard sans refonte.
- Page responsive, de mobile à grand écran.

Hors périmètre : formulaire de devis, galerie de réalisations, blog ou pages multiples, nom de domaine et hébergement (décision de déploiement laissée ouverte), identité visuelle définitive (logo, charte) : des valeurs provisoires sobres sont utilisées en attendant.

## Capabilities

### New Capabilities
- `call-to-action`: moyens de déclencher un appel depuis la page (lien `tel:`, bouton fixe mobile, répétition du numéro, horaires et zone d'intervention).
- `team-presentation`: présentation des 5 experts (portrait, prénom, métier ou spécialité).
- `trust-signals`: preuves de confiance affichées (garanties, expérience, certifications, avis clients).
- `services-presentation`: liste des prestations de pose de carrelage proposées.
- `responsive-layout`: comportement de la page selon la taille d'écran, et contraintes de performance et d'accessibilité de base.

### Modified Capabilities

Aucune : le projet ne contient pas encore de spécification.

## Impact

- Nouveau code : une page statique (`index.html`, feuille de style, images des portraits) à la racine du dépôt.
- Aucune dépendance d'exécution, aucune API, aucun service externe.
- Contenu à fournir par la société : numéro de téléphone, zone d'intervention, horaires, liste des services, portraits et textes des 5 experts, preuves de confiance. Des valeurs provisoires sont utilisées tant que ce contenu manque.
