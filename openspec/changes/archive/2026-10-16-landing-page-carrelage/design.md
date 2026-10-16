# Design

## Context

Dépôt vide : aucune base de code, aucun outil de build. Voir proposal.md pour la motivation. Contraintes : page unique, statique, responsive, sans backend, optimisée pour l'appel depuis un mobile. Contenu réel (numéro, horaires, zone, textes, portraits, preuves) fourni plus tard par la société.

## Goals / Non-Goals

**Goals:**
- Une page qui charge instantanément sur mobile et fonctionne sans JavaScript.
- Du contenu isolé du style, pour remplacer facilement les valeurs provisoires.
- Une structure par sections indépendantes, qui accepte une galerie plus tard.

**Non-Goals:**
- Chaîne de build, framework, générateur de site, préprocesseur CSS.
- Analytics, cookies, services tiers.
- Choix d'hébergement et de domaine.

## Decisions

**Fichiers à la racine : `index.html`, `style.css`, dossier `images/`.** Une seule page ne justifie ni arborescence ni outillage. Alternative écartée : générateur statique (Astro, Eleventy), utile seulement avec plusieurs pages ou un blog.

**Une seule feuille de style avec variables CSS** (couleurs, espacements, typographie). L'identité visuelle n'est pas définie : des valeurs sobres provisoires se changent à un seul endroit.

**Mobile first, mise en page par CSS Grid/Flexbox et quelques media queries.** La majorité des visites viendra de mobiles. Pas de framework CSS : le volume de style ne le justifie pas.

**Bouton d'appel fixe mobile en CSS pur** (`position: fixed`, masqué à partir d'une largeur desktop). Pas de JavaScript. Un espace en bas de page évite que le bouton couvre le dernier contenu.

**Numéro en lien `tel:` au format international**, avec le texte affiché au format lisible. Le même numéro apparaît dans le hero, la section preuves et le bloc final.

**Ordre des sections :** hero, services, équipe, preuves, contact. Les sections sont des blocs `<section>` indépendants, ce qui permet d'insérer une galerie entre services et équipe sans toucher aux autres.

**Images : portraits optimisés (WebP ou JPEG compressé) avec dimensions explicites**, `loading="lazy"` hors hero, pour éviter les décalages de mise en page.

**Sans JavaScript.** Aucune fonctionnalité de la page n'en a besoin.

**Contenu provisoire clairement repérable.** Le numéro, les textes et les portraits manquants sont des valeurs de remplacement faciles à retrouver. Les preuves de confiance non fournies ne sont pas affichées (voir spec `trust-signals`).

## Risks / Trade-offs

- [Contenu réel tardif ou incomplet] → Valeurs provisoires centralisées et liste de contenu à fournir dans les tâches ; ne pas publier avec du faux contenu.
- [Pas d'identité visuelle définie] → Variables CSS et design sobre, remplaçables sans refonte.
- [Sans galerie, hero et services peuvent paraître abstraits] → Équipe mise en avant ; structure prête pour ajouter des photos de chantiers plus tard.
- [Pas de suivi des appels] → Accepté pour l'instant ; l'ajout d'une mesure serait une décision séparée.
- [Fichier HTML unique à éditer à la main] → Acceptable pour une page ; à revoir seulement si le site grandit.
