# Spec Delta

## Purpose

Tells visitors which tiling work the company performs, so that they can quickly judge whether their project fits.

## ADDED Requirements

### Requirement: Services listed
The page SHALL contain a services section listing the types of tiling work the company offers, each with a short name and a one-sentence description.

#### Scenario: Visitor reads the services
- **WHEN** a visitor views the services section
- **THEN** each service is displayed with a name and a one-sentence description

### Requirement: Services section placement
The services section SHALL appear directly after the hero section.

#### Scenario: Section order
- **WHEN** a visitor scrolls past the hero
- **THEN** the services section is the next section displayed

### Requirement: Page can host a gallery later
The page structure SHALL allow a realizations gallery to be added between the services and the team sections without altering other sections.

#### Scenario: Gallery added later
- **WHEN** a gallery section is added after the services section
- **THEN** the existing sections keep their content and styling unchanged
