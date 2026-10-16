# Proposal

## Why

Le dépôt public `saumon/carrelage` n'a pas de README : un visiteur sur GitHub ne sait ni ce qu'est le projet, ni comment le lancer, ni dans quel état il se trouve. Rien ne vérifie non plus automatiquement la qualité de la page : les contrôles (validation, accessibilité, performance) ont été faits une fois, à la main.

## What Changes

- Ajout d'un `README.md` en français, au standard actuel de GitHub : titre, badges, description, aperçu visuel, lancement en local, structure du projet, contrôles qualité, contenu provisoire, workflow OpenSpec, déploiement, mention de droits.
- Les badges reflètent un état réel et vérifiable : statut de la CI (dynamique), métadonnées du dépôt (dynamiques), et caractéristiques techniques garanties par la CI. Aucun badge ne prétend un état que rien ne vérifie.
- Ajout d'une CI GitHub Actions qui, à chaque push et pull request, valide le HTML, le CSS et les SVG, puis lance un audit Lighthouse avec des seuils minimaux. La CI échoue si un seuil n'est pas atteint.
- Ajout d'une capture d'écran de la page pour l'aperçu du README.
- Le dépôt reste sans licence open source : le README indique « tous droits réservés ».

Hors périmètre : choix de l'hébergement et déploiement automatique, remplacement du contenu provisoire de la page, publication des rapports Lighthouse sur un service externe.

## Capabilities

### New Capabilities
- `quality-checks`: contrôles automatiques exécutés sur chaque push et pull request (validation HTML/CSS/SVG, audit Lighthouse avec seuils) et leur effet sur le statut du dépôt.
- `project-documentation`: ce que la documentation du dépôt doit présenter à un visiteur ou contributeur, et la fiabilité des badges affichés.

### Modified Capabilities

Aucune : les capacités existantes décrivent la page, dont le comportement ne change pas.

## Impact

- Nouveaux fichiers : `README.md`, `.github/workflows/quality.yml`, configuration Lighthouse CI, `docs/apercu.png`.
- Aucune modification de `index.html`, `style.css` ni `images/`.
- Dépendances utilisées uniquement en CI, jamais par la page : validateur Nu HTML (`vnu-jar`, nécessite Java) et Lighthouse CI (`@lhci/cli`).
- La CI consomme des minutes GitHub Actions (gratuites pour un dépôt public).
