# Dnd5e

## Proficiencies

Starting point for proficiencies.

### Proficiencies Service (proficiencies.service.ts)

Initiated service for proficiencies with getProficiencies() returning all proficiencies from the dnd5e api.

### Proficiencies Component (proficiencies/)

List of all proficiencies populated using Proficiencies Service using getProficiencies() stored in property proficienciesList.

Initiated component for proficiencies. Component has drop down list populated by proficienciesList.

Component has search method searchProficiencies(name: string): void to filter proficienciesList and store filtered results in searchProficienciesList. If searchProficienciesList has array items, it is displayed to component's html as the user's search results.

Search in this component works differently than in the Spells component. Using .include() user can type in partial string regardless of string's position in target search term. Will consider switching Spell component's search to use .include() instead of ==.

## ---

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
