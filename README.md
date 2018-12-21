# Dnd5e

## Angular Material

Included [Angular Material](https://material.angular.io/) into project for the purposes of appealing to modern web designs.

Examples of its use demonstrated in spells component. The following Materials were used: 

+ select / drop down list
+ input:text
+ list:nav

### [Drop down list](https://material.angular.io/components/select/overview)

A select list can be inside mat-form-field so long as the select element has a matNativeControl attribute. Accessibility is handled by mat-label.

The selection from the complete list of spells demonstrates this.

### [Input text](https://material.angular.io/components/input/overview)

Inputs with a 'clearing' feature are done with input and button elements as siblings and matInput and mat-button as attributes, respectively. The 'clearing' button is done as a button element with additional attributes matSuffix, mat-icon-button. For accessibility purposes, aria-label is provided with an appropriate value ('Clear' in this case). Child of button element is max-icon with child 'close'. 

The spell search input demonstrates this.

### [List with navigation](https://material.angular.io/components/list/overview#navigation-lists)

Navigational lists can be generated using mat-nav-list elements. Accessibility is handled when using mat-nav-list with the generated role='navigation' attribute and value. List is rendered using [virtual scrolling](https://material.angular.io/cdk/scrolling/overview).

Default styling of links is black. Addition of material-nav-list-items.css for the purpose of overriding the default styling to familiar a:link blue.

The spell search input results demonstrates this.

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
