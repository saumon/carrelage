# project-documentation Specification

## Purpose

Tells visitors and contributors of the repository what the project is, what state it is in and how to work on it, with status indicators that can be trusted.

## Requirements

### Requirement: README presents the project
The repository SHALL contain a README written in French that describes the project, shows a preview image of the page, and explains its goal of prompting visitors to call.

#### Scenario: Visitor opens the repository
- **WHEN** a visitor opens the repository home page on GitHub
- **THEN** the README shows the project name, a short description and a preview image of the landing page

### Requirement: README explains how to work on the project
The README SHALL explain how to preview the page locally, how the files are organized, how to run the quality checks locally, and how changes are planned with OpenSpec.

#### Scenario: New contributor sets up the project
- **WHEN** a contributor follows the README's local preview instructions on a machine with Python 3
- **THEN** the page is served locally and opens in a browser

### Requirement: Badges reflect a verified state
Every badge in the README SHALL either be computed from live repository or CI data, or state a fact that the quality checks enforce. The README SHALL NOT display a badge whose claim nothing verifies.

#### Scenario: CI fails
- **WHEN** the latest quality check run on the default branch fails
- **THEN** the CI status badge in the README shows a failing state

#### Scenario: Static badge audit
- **WHEN** a reviewer compares each static badge with the quality check configuration
- **THEN** each static badge's claim is enforced by a quality check

### Requirement: Provisional content is disclosed
The README SHALL state that part of the page content is provisional, including fictitious trust signals, and that it must be replaced before the page goes live.

#### Scenario: Reader evaluates the page content
- **WHEN** a reader looks for the status of the page content
- **THEN** the README tells them which content is provisional and how to find it in the source

### Requirement: Rights are stated
The README SHALL state that all rights are reserved, and the repository SHALL NOT include an open source license.

#### Scenario: Reader checks reuse rights
- **WHEN** a reader looks for the project's license
- **THEN** the README states that all rights are reserved
