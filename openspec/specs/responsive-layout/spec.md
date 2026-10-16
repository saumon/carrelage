# responsive-layout Specification

## Purpose

Ensures the page is comfortable to read and use on any screen size, with fast loading on mobile connections and basic accessibility.

## Requirements

### Requirement: Layout adapts to screen width
The page SHALL display correctly from a 320px viewport width up to large desktop screens, without horizontal scrolling.

#### Scenario: Narrow phone
- **WHEN** the page is viewed at a 320px width
- **THEN** all content is readable and no horizontal scrolling is needed

#### Scenario: Wide desktop
- **WHEN** the page is viewed on a wide desktop screen
- **THEN** the content stays centered and readable, with comfortable line lengths

### Requirement: Touch targets are usable
Interactive elements on touch devices SHALL be large enough to tap reliably, with a minimum target size of 44 by 44 CSS pixels.

#### Scenario: Tapping the call button
- **WHEN** a visitor taps the call button on a phone
- **THEN** the button's tappable area is at least 44 by 44 CSS pixels

### Requirement: Fast and self-contained page
The page SHALL load without any backend or third-party runtime service, and SHALL remain usable if JavaScript is disabled.

#### Scenario: JavaScript disabled
- **WHEN** a visitor opens the page with JavaScript disabled
- **THEN** all content and the call actions work normally

### Requirement: Basic accessibility
The page SHALL use a logical heading hierarchy, readable text contrast, and a language declaration set to French.

#### Scenario: Screen reader navigation
- **WHEN** a screen reader user navigates by headings
- **THEN** the page offers one main heading followed by section headings in order
