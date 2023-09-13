# Cypress Cucumber Boilerplate

This is a sample project that demonstrates how to integrate Cypress with Cucumber for behavior-driven development (BDD).

## Getting Started

### Prerequisites

-   [Node.js](https://nodejs.org/en/) installed on your machine
-   [Cypress](https://www.cypress.io/) installed globally (`npm install -g cypress`)

### Installing

1. Clone this repository:

    ```
    git clone git@github.com:tamil777selvan/cypress-cucumber-boilerplate.git
    ```

2. Install dependencies:

    ```
    npm install
    ```

### Running the tests

To run the tests, use the following command:

```
npm run cypress:run
```

This will run all the feature files in the `cypress_boilerplate_for_Katlon/e2e/features` directory.

Alternatively, you can open the Cypress Test Runner using the following command:

```
npm run cypress:open
```

This will open the Cypress Test Runner, where you can select which feature files or scenarios to run.

### Writing tests

Feature files are written in Gherkin syntax and can be found in the `cypress_boilerplate_for_Katlon/e2e/features` directory. Step definitions are written in Typescript and can be found in the `cypress_boilerplate_for_Katlon/step_definitions` directory.

### Additional configuration

You can configure additional settings for Cypress and Cucumber in the `cypress.config.ts` file.
