# Spec Delta

## Purpose

Makes calling the company the single, obvious action a visitor can take, from any point of the page and on any device.

## ADDED Requirements

### Requirement: Phone number is a tappable link
The page SHALL present the company phone number as a `tel:` link, so that activating it starts a call on devices that support calling.

#### Scenario: Visitor taps the number on a phone
- **WHEN** a visitor on a mobile device taps the displayed phone number
- **THEN** the device offers to start a call to that number

#### Scenario: Number is readable as text
- **WHEN** a visitor on a desktop browser views the page
- **THEN** the phone number is displayed as readable text that can be copied

### Requirement: Call action visible in the hero
The hero section SHALL display a call button and the phone number without requiring the visitor to scroll.

#### Scenario: First screen on mobile
- **WHEN** the page loads on a mobile viewport
- **THEN** a call button is visible within the first screen

### Requirement: Persistent call button on mobile
On mobile viewports, the page SHALL keep a call button visible at all times while the visitor scrolls.

#### Scenario: Visitor scrolls down on mobile
- **WHEN** a visitor on a mobile viewport scrolls to any section of the page
- **THEN** a call button remains visible and tappable

#### Scenario: Persistent button does not hide content
- **WHEN** a visitor reaches the end of the page on a mobile viewport
- **THEN** the persistent button does not cover the last piece of content

### Requirement: Closing contact block
The page SHALL end with a contact block repeating the phone number, the opening hours and the service area.

#### Scenario: Visitor reaches the bottom of the page
- **WHEN** a visitor scrolls to the end of the page
- **THEN** the phone number, the opening hours and the service area are displayed together with a call button

### Requirement: No contact form
The page SHALL NOT include a contact or quote form. It MAY offer an email address as a `mailto:` link as a secondary channel.

#### Scenario: Visitor looks for another way to contact
- **WHEN** a visitor looks for a way to write to the company
- **THEN** the page offers an email link, and the phone call remains the primary action
