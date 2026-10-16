# team-presentation Specification

## Purpose

Puts a human face on the company by presenting each of its five experts, so that visitors feel confident enough to call.

## Requirements

### Requirement: All five experts are presented
The page SHALL contain a team section presenting each of the five experts of the company.

#### Scenario: Team section content
- **WHEN** a visitor views the team section
- **THEN** exactly five experts are shown, each with a portrait, a first name and a trade or specialty

### Requirement: Portraits have text alternatives
Each portrait SHALL have an alternative text identifying the person it shows.

#### Scenario: Portrait cannot be displayed
- **WHEN** a portrait fails to load or is read by a screen reader
- **THEN** the alternative text names the expert

### Requirement: Team section is prominent
The team section SHALL appear in the main flow of the page, no later than after the services section.

#### Scenario: Section order
- **WHEN** a visitor scrolls the page from top to bottom
- **THEN** the team section appears after the services section and before the closing contact block
