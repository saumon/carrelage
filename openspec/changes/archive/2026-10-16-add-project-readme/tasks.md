# Tasks

## 1. Validation (spec `quality-checks`)

- [x] 1.1 Lancer localement `npx vnu-jar@26.10.12` (HTML, `--also-check-css`, `--also-check-svg`) sur `index.html`, `style.css` et `images/*.svg`, et corriger les erreurs éventuelles ; vérifier que la commande se termine sans erreur
- [x] 1.2 Créer `.github/workflows/quality.yml` (déclencheurs `push` toutes branches et `pull_request`, `concurrency`) avec le job `validate` : checkout, Java, Node 24, validation Nu, et contrôle d'absence de balise `<script>` dans `index.html` ; vérifier la syntaxe du workflow avec `npx action-validator` ou équivalent, puis vérifier localement que le contrôle `<script>` échoue sur une copie de la page contenant un script

## 2. Lighthouse (spec `quality-checks`)

- [x] 2.1 Créer `lighthouserc.json` (`staticDistDir: "."`, mobile, 3 exécutions, assertions performance ≥ 0,9 et accessibilité, bonnes pratiques, SEO ≥ 0,95, sortie dans `.lighthouseci/`) et ajouter `.lighthouseci/` à `.gitignore` ; vérifier localement avec `npx @lhci/cli@0.15.1 autorun` et le Chrome local que les assertions passent
- [x] 2.2 Ajouter le job `lighthouse` au workflow, avec l'envoi de `.lighthouseci/` comme artefact du run (`actions/upload-artifact@v7`, même en cas d'échec) ; vérifier la syntaxe du workflow

## 3. README (spec `project-documentation`)

- [x] 3.1 Générer `docs/apercu.png` (capture desktop avec Chrome headless) ; vérifier que l'image fait moins de 300 Ko et montre la page
- [x] 3.2 Rédiger `README.md` en français : titre, badges (CI, dernier commit, Lighthouse, HTML valide W3C, 0 JavaScript), description, aperçu avec mention du contenu provisoire, fonctionnalités, démarrage rapide, structure du projet, contrôles qualité avec commandes locales, contenu provisoire (`data-placeholder`, preuves fictives), workflow OpenSpec, déploiement à définir, « Tous droits réservés » ; vérifier que chaque badge statique correspond à un contrôle de la CI et que chaque commande documentée fonctionne telle quelle en local
- [x] 3.3 Vérifier que tous les liens relatifs du README (images, fichiers, dossiers) pointent vers des chemins existants

## 4. Vérification sur GitHub

- [x] 4.1 Après push sur `dev`, vérifier que les jobs `validate` et `lighthouse` passent sur GitHub Actions, que le rapport Lighthouse est téléchargeable depuis le run et que le badge CI du README s'affiche à l'état « passing » ; si les bonnes pratiques passent sous 0,95 à cause du favicon, s'arrêter et proposer l'ajout d'un favicon

## Workflow follow-up

- Archiver le changement une fois la CI verte sur `dev`.
