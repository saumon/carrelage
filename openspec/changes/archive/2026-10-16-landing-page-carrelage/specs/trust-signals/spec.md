# Spec Delta

## Purpose

Shows concrete evidence of the company's reliability, such as guarantees, experience and customer feedback, to reassure visitors before they call.

## ADDED Requirements

### Requirement: Trust signals section
The page SHALL contain a section presenting the company's trust signals, placed after the team section.

#### Scenario: Visitor reads the trust section
- **WHEN** a visitor views the trust signals section
- **THEN** at least one concrete proof is displayed, such as a guarantee, a certification, a number of years of experience or a customer review

### Requirement: Trust signals are factual
Each displayed trust signal SHALL state a verifiable fact supplied by the company, and the page SHALL NOT display placeholder claims as if they were real.

#### Scenario: Content not yet supplied
- **WHEN** a trust signal has not been supplied by the company
- **THEN** it is not displayed in the published page

### Requirement: Call action near the proof
The trust signals section SHALL include a call button, so that a convinced visitor can call without scrolling elsewhere.

#### Scenario: Visitor is convinced by the proof
- **WHEN** a visitor finishes reading the trust signals
- **THEN** a call button is available in the same section
