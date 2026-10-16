# Tasks

## 1. Base de la page

- [x] 1.1 Créer `index.html` avec `lang="fr"`, balises meta (viewport, titre, description) et le squelette des sections dans l'ordre hero, services, équipe, preuves, contact ; vérifier que le fichier s'ouvre dans un navigateur sans erreur de validation HTML
- [x] 1.2 Créer `style.css` avec les variables CSS provisoires (couleurs, typographie, espacements), un reset minimal et la mise en page mobile first ; vérifier que la page s'affiche à 320px sans défilement horizontal
- [x] 1.3 Ajouter les media queries tablette et desktop avec un contenu centré et des longueurs de ligne lisibles ; vérifier visuellement à 768px et 1440px

## 2. Appel (spec `call-to-action`)

- [x] 2.1 Ajouter le hero avec accroche, numéro en lien `tel:` au format international et bouton d'appel ; vérifier que le bouton est visible sans défilement sur un viewport mobile
- [x] 2.2 Ajouter le bouton d'appel fixe visible uniquement en mobile, avec une marge en bas de page pour ne pas masquer le dernier contenu ; vérifier au défilement jusqu'en bas à 375px, puis à 1440px où il doit être masqué
- [x] 2.3 Ajouter le bloc de contact final (numéro, horaires, zone d'intervention, bouton d'appel, lien `mailto:` secondaire) sans formulaire ; vérifier que la page ne contient aucun élément `<form>`

## 3. Services (spec `services-presentation`)

- [x] 3.1 Ajouter la section services juste après le hero, avec nom et description d'une phrase par prestation (contenu provisoire) ; vérifier l'ordre des sections et la mise en page à 320px et 1440px
- [x] 3.2 Isoler chaque section dans son propre bloc `<section>` indépendant ; vérifier qu'une section factice insérée entre services et équipe n'altère pas le style des autres, puis la retirer

## 4. Équipe (spec `team-presentation`)

- [ ] 4.1 Préparer les 5 portraits optimisés (dimensions explicites, format compressé, `loading="lazy"`) dans `images/` ; vérifier qu'aucun fichier ne dépasse un poids raisonnable pour le mobile (cible : moins de 150 Ko chacun)
- [x] 4.2 Ajouter la section équipe avec exactement 5 experts (portrait, prénom, métier ou spécialité) et un texte alternatif nommant chaque personne ; vérifier que la grille s'adapte du mobile au desktop et que chaque image a un `alt`

## 5. Preuves de confiance (spec `trust-signals`)

- [ ] 5.1 Ajouter la section preuves après l'équipe avec uniquement les éléments fournis par la société (garantie, expérience, certifications, avis) ; vérifier qu'aucune preuve fictive n'apparaît
- [x] 5.2 Ajouter un bouton d'appel dans la section preuves ; vérifier qu'il déclenche bien le lien `tel:`

## 6. Contrôles finaux

- [x] 6.1 Vérifier l'accessibilité de base : un seul `h1`, hiérarchie des titres cohérente, contraste du texte suffisant, cibles tactiles d'au moins 44 x 44 px ; contrôler avec un audit Lighthouse ou équivalent
- [x] 6.2 Vérifier le fonctionnement avec JavaScript désactivé et l'absence de dépendance externe (aucune requête vers un service tiers dans l'onglet réseau)
- [ ] 6.3 Remplacer les valeurs provisoires par le contenu réel (numéro, horaires, zone, textes, preuves) et vérifier qu'il ne reste aucun texte de remplacement dans la page
- [x] 6.4 Mesurer le chargement mobile avec Lighthouse et vérifier un bon score de performance

## Workflow follow-up

- Choisir l'hébergement et le nom de domaine (décision ouverte, hors de ce changement).
- Archiver le changement une fois la page publiée et validée.
