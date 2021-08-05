#How to run this app

run ng serve

ng generate 

ng lint to check erros like variables that have to be campbell 

Lifecycle
1.-Consturctor
2.-ngOnChanges:resets data-bound input properties. The method receives a 
SimpleChanges object of current and previous property values.
3.-ngOnInit:Initialize the component after Angular first displays the data-bound properties 
4.-ngDocheck:Detect and act upon changes that Angular can't or won't detect on its own.
5.ngOnDestroy:  unsuscribe observables and clean up components

pipe in angular: 
Decorator that marks a class as pipe and supplies configuration metadata.
*uppercase (defect)
*slice: to cut a string sample : slice:0:10 (range) 
*currency for money
*date (check docuemntation for diffrent formart ); sample== date: medium

custom pipe

ng g pipe "pipe name"" to create a new pipe 
they are better than funtions 

directives
Directives are classes that add additional behavior to elements
ng g directive "directive name"
decoract + selector
modify DOM dynimic 

Modules and Route 

Route
ActivetedRoute: injection of dependency
Params: tipado 

to create the banner of this app we used 

Swiper - Most Modern Mobile Touch Slider

https://idangero.us/swiper/

ng g service "service name"
ng g s folthername/servename


Lazy Loading
Angular helps to reduce time of load 
Download 
Parse
Compile
Execute

to generate modules
n g m "module name" --routing

Both are for share but each one keep different modules 
shared: module to save all the save files 

core: module to save all the static files 

guardians
ng g (generate) g (guardian) "name of guardian"
Different types:
CanActivate,
CanActivateChild
CanLoad

Angular Material
ng add @angular/material
Go to archivo angular.json in the  array of styles
ng generate @angular/material:nav <component-name>
https://material.angular.io/

Grid System: FlexBox
http://flexboxgrid.com/
set up angular.json
styles => "./node_modules/flexboxgrid/dist/flexboxgrid.min.css",

Angular Matirial Icons
https://fonts.google.com/icons?selected=Material+Icons

Angular schematic
https://material.angular.io/guide/schematics

ng generate @angular/material:address-form "component name"

HTTP Client
HttpClientModule
HttpClient

Enviroments
Diferentes enviaroments 
production and prepoduction and staging 

ng build --prod
ng serve -c=stag

Environment for testing  
enviroments/environment.stag.ts

Reactive forms
FormControl when is just one
FormGroup when is json and more than one 

AbstractControl
This is the base class for FormControl, FormGroup, and FormArray.

The RxJS library =  reactive programing  --- BehaviorSubject
is a library for reactive programming using observables 
that makes it easier to compose asynchronous or callback-based code

Observables

Firebase:
Create an account in fire base 
create a project then go to auth, hosting and storage to push enable
Add angular firebase
ng add @angular/fire

To Hosting our project 
Firebase init --> choose Hosting --> dist/platzi-store
ng build --prod
firebase deploy



# PlatziStore

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
