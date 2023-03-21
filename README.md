# About

F1 app to try out some things.

Made with NX, Angular, Jest, Cypress en Tailwind. DaisyUI Tailwind thema, Hero Icons

## Assignment

So we've made changes to the assignment for recruitment and we want to achieve the following

Create a driver page where you can:

* select a driver
* see details of said driver
* see a list of his last 5 results.
* If he has wins, show his last 5 wins.
* If he has podiums, show his last 5 podiums.
* If he has point finishes, show his last 5 point finishes.

Outside of that we've implemented basic pages to consume the API and get it working properly.

## Sources

* Angular: the main framework used <https://www.angular.io>
* Jest: to unit test our code <https://jestjs.io>
* Cypress: to end-to-end test our code <https://www.cypress.io>
* Tailwind CSS Framework: to style our application <https://tailwindcss.com>
* Daisy Tailwind CSS Theme: to apply a nice theme to our styling <https://daisyui.com>
* NX Workspace: to manage application <https://nx.dev>
* Leaflet: to show maps <https://leafletjs.com/index.html>
* Three: to render 3d models <https://threejs.org>

### Plugins and libraries

* FontAwesome Icons - to get some easy and clean icons
* Tailwind plugins - to make tailwind have a few more features
  * Aspect Ratio (official)
  * Forms (official)
  * Line Clamp (official)
  * Typography (official)
* Date-FNS - For managing dates <https://date-fns.org>
* NGX-Date-FNS - for using them in Angular easily <https://github.com/joanllenas/ngx-date-fns>
* ESLint - for validating code
* Prettier - for formatting code
* NG Mocks - for easily mock items to test code <https://github.com/ike18t/ng-mocks>
* NG Spectator - for easily bootstrapping tests and parsing DOM in tests<https://github.com/ngneat/spectator>

## Developed

Project developed in Visual Studio Code <https://code.visualstudio.com>
Contains settings and configuration to run it easily.
Also used NX to generate project and settings to easily maintain and develop.
Uses Jest instead of Karma/Jasmine and Cypress instead of Protractor.

## Installation notes

Because there is a conflict from NX v14.0.5 for peer dependencies we need to (temporarily) use legacy peer deps to install the project.
As soon as its fixed we will update the project.

Also there is an issue with autoprefixer whining about the CSS for LeafletJS (and @tailwindcss/forms) and the only workaround seems to be that we fix it locally. Otherwise the browser console will start listing a few warnings that just aren't very interesting. Something about a css line being deprecated which isn't used much but also can't really be overridden. So when either the warning is gone or the projects are updated we can use it normally again.

Well, of course we could downgrade but where's the fun in that?
