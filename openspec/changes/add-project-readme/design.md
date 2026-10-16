# Design

## Context

Voir proposal.md pour la motivation. Le dépôt contient une page statique (`index.html`, `style.css`, `images/*.svg`) sans outillage. Il est public sur GitHub (`saumon/carrelage`) et sa branche par défaut est `dev`, la seule branche distante. Les contrôles faits à la main lors du changement précédent servent de référence : Lighthouse mobile performance 100, accessibilité 100, bonnes pratiques 96, SEO 100. Les 4 points perdus en bonnes pratiques viennent d'une erreur console : le 404 sur `/favicon.ico`.

## Goals / Non-Goals

**Goals:**
- Une CI simple et lisible, sans dépendance ajoutée au dépôt (pas de `package.json`).
- Des badges qui ne mentent jamais : chacun dérive d'une donnée réelle ou d'un contrôle de la CI.
- Un README reproductible : chaque commande documentée fonctionne telle quelle.

**Non-Goals:**
- Publier les scores Lighthouse sur un service tiers (stockage public temporaire, serveur LHCI, gist) pour en faire des badges dynamiques.
- Déploiement automatique ou prévisualisation des pull requests.

## Decisions

**Un workflow unique `.github/workflows/quality.yml`, déclenché sur `push` (toutes branches) et `pull_request`, avec deux jobs parallèles `validate` et `lighthouse`.** Deux jobs donnent deux lignes de statut distinctes dans GitHub, ce qui rend l'origine d'un échec lisible. Le workflow annule les exécutions précédentes de la même branche (`concurrency`).

**Validation par le validateur Nu officiel (`vnu-jar`, version figée 26.10.12) lancé via `npx`, Java fourni par `actions/setup-java@v6`.** Une seule commande valide le HTML, le CSS (`--also-check-css`) et les SVG (`--also-check-svg`), et l'outil est la référence du W3C. Alternative écartée : `html-validate`, qui applique ses propres règles plutôt que la spécification, et qui ne valide ni le CSS ni le SVG.

**Lighthouse via `@lhci/cli` (version figée 0.15.1) lancé par `npx`, avec un `lighthouserc.json` à la racine.** `staticDistDir: "."` permet à LHCI de servir le dépôt lui-même, sans serveur à écrire. Les assertions de catégories reprennent la spec : performance au moins 0,9 ; accessibilité, bonnes pratiques et SEO au moins 0,95. Trois exécutions sont faites et LHCI retient la médiane, pour réduire la variance des runners. Les rapports vont dans `.lighthouseci/` et sont conservés comme artefact du run avec `actions/upload-artifact`, sans `upload.target` vers un stockage public. Alternative écartée : `treosh/lighthouse-ci-action`, une action tierce de plus pour un gain faible face à deux lignes de `npx`.

**Actions officielles figées sur leur version majeure actuelle** (`actions/checkout@v7`, `actions/setup-node@v7`, `actions/setup-java@v6`, `actions/upload-artifact@v7`). Node 24 est utilisé dans la CI, la même version qu'en local.

**Badges du README, sur une ligne, au style shields.io `flat` :**
- Statut CI : badge natif GitHub `actions/workflows/quality.yml/badge.svg`. Il est dynamique et porte sur la branche par défaut `dev`.
- Dernier commit : badge dynamique shields.io (`github/last-commit`).
- Lighthouse : un badge statique « Lighthouse ≥ 90 / 95 », dont l'affirmation est garantie par les assertions de la CI.
- HTML valide W3C : badge statique, garanti par le job `validate`.
- « 0 JavaScript » : badge statique. Sa garantie demande un contrôle dédié : une étape du job `validate` vérifie qu'`index.html` ne contient aucune balise `<script>`.
- Pas de badge licence, puisqu'il n'y a pas de licence. La mention « Tous droits réservés » figure en fin de README.

**Aperçu : `docs/apercu.png`, une capture desktop du premier écran et des sections principales**, générée avec Chrome headless. C'est une image statique versionnée, à régénérer quand la page change visuellement. Le README en donne la commande.

**Structure du README :** titre et badges, description, aperçu, fonctionnalités, démarrage rapide (`python3 -m http.server`), structure du projet, contrôles qualité (CI et commandes locales équivalentes), contenu provisoire (attribut `data-placeholder`, preuves fictives), workflow OpenSpec (`openspec/specs/`, `/opsx:*`), déploiement (à définir), droits.

## Risks / Trade-offs

- [Le 404 du favicon peut faire passer les bonnes pratiques sous 0,95 selon l'environnement de la CI] → Le premier run de la CI sert de vérification. Si le seuil n'est pas atteint, ajouter un favicon SVG simple à la page plutôt que baisser le seuil. Ce serait un petit ajout à `index.html`, à signaler pendant l'implémentation.
- [Variabilité des scores de performance sur les runners partagés] → Médiane de 3 exécutions et seuil de performance à 90, pour une page mesurée à 100 en local.
- [Le badge statique Lighthouse peut devenir faux si les seuils de `lighthouserc.json` changent] → Le README mentionne que ce badge reflète les seuils de ce fichier, et toute modification de l'un impose de mettre à jour l'autre.
- [L'aperçu PNG devient obsolète quand la page évolue] → Commande de régénération documentée ; image légère (moins de 300 Ko).
- [La capture montre du contenu provisoire, dont les preuves fictives] → Le README le signale juste sous l'aperçu.
- [Dépendances téléchargées à chaque run (vnu-jar, LHCI, Chrome)] → Versions figées ; le cache npm de `setup-node` est inutile sans `package-lock.json`, donc accepté tel quel.
