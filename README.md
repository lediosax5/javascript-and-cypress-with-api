# JavaScript and Cypress API Testing

A Cypress practice suite that exercises browser flows and HTTP endpoints against the public Pushing IT demo application. It preserves examples built while learning Cypress, including assertions, fixtures, XPath, a page object model, and API requests.

## Overview

The repository is a collection of end-to-end exercises rather than an application or a standalone API. The specs cover registration and login, to-do tasks, cart and checkout flows, assertion styles, and direct API calls. The tests depend on a third-party demo service, so results can change when that service or its data changes.

## Features

- Browser-based Cypress E2E examples.
- Direct HTTP requests for registration, login, and user deletion.
- Reusable page objects and JSON fixtures for shopping scenarios.
- Examples using CSS selectors, XPath, and Cypress assertions.

## Tech Stack

- JavaScript
- Node.js and npm
- Cypress 13
- `cypress-xpath`

## Project Structure

```text
cypress/
  e2e/          Test specifications
  fixtures/     Test data
  support/      Cypress support code and page objects
cypress.config.js
package.json
```

## Getting Started

### Requirements

- Node.js (the project was configured with Cypress 13; use an LTS release compatible with Cypress 13)
- npm
- Google Chrome for the `open` script
- Network access to the Pushing IT demo application

Install dependencies:

```sh
npm ci
```

The login examples use the public demo application's shared test account. Supply its values as Cypress environment variables instead of storing them in the repository:

```sh
# PowerShell
$env:CYPRESS_user = "<demo-user>"
$env:CYPRESS_pass = "<demo-password>"
$env:CYPRESS_apiUser = "<unused-test-user>"
$env:CYPRESS_apiPassword = "<test-password>"

# macOS / Linux
export CYPRESS_user="<demo-user>"
export CYPRESS_pass="<demo-password>"
export CYPRESS_apiUser="<unused-test-user>"
export CYPRESS_apiPassword="<test-password>"
```

`apiUser` must be available for registration on the demo API. The API specs use this account for both scenarios and attempt to delete it when they finish.

## Available Scripts

```sh
npm test       # Open Cypress in Chrome
npm run open   # Same interactive runner
npm run test:run  # Run the suite headlessly
```

The headless suite includes tests that create and delete data on a remote demo service. Run it only when that service is available and its test-data behavior is understood.

## Testing

Run `npm run test:run` for a headless run, or `npm test` to select and run specs interactively. The tests are integration examples, not isolated unit tests; a failure may come from the remote application, network availability, or changed demo data.

## What This Project Demonstrates

- Cypress browser automation and assertions.
- API requests and response validation with `cy.request`.
- Reuse of page object helpers and fixture data.
- Use of CSS and XPath selectors in end-to-end scenarios.

## Project Status

This is a completed learning and portfolio project. Its examples are retained for reference; the external demo application is not maintained by this repository, so long-term test reproducibility is not guaranteed.
