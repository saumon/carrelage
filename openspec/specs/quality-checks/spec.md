# quality-checks Specification

## Purpose

Automatically verifies the quality of the landing page on every change pushed to the repository, so that regressions in validity, accessibility or performance are caught before they ship.

## Requirements

### Requirement: Checks run on every push and pull request
The repository SHALL run the quality checks automatically on every push to any branch and on every pull request.

#### Scenario: Push to a branch
- **WHEN** a contributor pushes a commit to any branch
- **THEN** the quality checks run and report a status on that commit

#### Scenario: Pull request opened
- **WHEN** a pull request is opened or updated
- **THEN** the quality checks run and their status is shown on the pull request

### Requirement: Markup and styles are validated
The quality checks SHALL validate the page's HTML, its CSS and its SVG images against the W3C Nu validator, and SHALL fail if any error is reported.

#### Scenario: Invalid HTML introduced
- **WHEN** a commit introduces an HTML validation error in the page
- **THEN** the quality checks fail and the error is visible in the run log

#### Scenario: Valid files
- **WHEN** the page, stylesheet and SVG images contain no validation errors
- **THEN** the validation step passes

### Requirement: Lighthouse thresholds are enforced
The quality checks SHALL audit the page with Lighthouse in mobile mode and SHALL fail if the performance score is below 90, or if the accessibility, best practices or SEO score is below 95.

#### Scenario: Score below threshold
- **WHEN** a commit lowers the accessibility score below 95
- **THEN** the quality checks fail and name the failing category

#### Scenario: Scores meet thresholds
- **WHEN** all four Lighthouse scores meet their thresholds
- **THEN** the Lighthouse step passes

### Requirement: Audit report is available
Each quality check run SHALL keep the Lighthouse report as a downloadable artifact of the run.

#### Scenario: Contributor inspects a failure
- **WHEN** a contributor opens a finished quality check run
- **THEN** the Lighthouse report can be downloaded from that run
