# WeatherApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.11.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

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


# Preparação do ambiente e criação do projeto

nvm install 18.19.0

nvm use 18.19.0

npm install -g @angular/cli@15 ou npm install -g @angular/cli@15.2.10 

ng version

C:\Users\jrpbj>ng version

     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/


Angular CLI: 15.2.11
Node: 18.19.0
Package Manager: npm 10.2.3
OS: win32 x64

Angular:
...

Package                      Version
------------------------------------------------------
@angular-devkit/architect    0.1502.11 (cli-only)
@angular-devkit/core         15.2.11 (cli-only)
@angular-devkit/schematics   15.2.11 (cli-only)
@schematics/angular          15.2.11 (cli-only)

ng new weather-app

C:\Users\jrpbj\Documentos\projetosAngular>ng new weather-app
? Would you like to add Angular routing? Yes
? Which stylesheet format would you like to use?
  CSS
> SCSS   [ https://sass-lang.com/documentation/syntax#scss                ]
  Sass   [ https://sass-lang.com/documentation/syntax#the-indented-syntax ]
  Less   [ http://lesscss.org                                             ]

# Comandos para rodar o projeto

opção 1 : npm start
opção 2 : ng server ou s
opção 3 : ng s --o open

? Would you like to share pseudonymous usage data about this project with the Angular Team
at Google under Google's Privacy Policy at https://policies.google.com/privacy. For more
details and how to change this setting, see https://angular.io/analytics. (y/N) y

# Instalando biblioteca de ícones the Free Packages
npm install --save @fortawesome/fontawesome-svg-core

# Select the styles you need and install them with the following commands.

npm install --save @fortawesome/free-solid-svg-icons
npm install --save @fortawesome/free-regular-svg-icons
npm install --save @fortawesome/free-brands-svg-icons

npm install @fortawesome/angular-fontawesome@0.12.x


