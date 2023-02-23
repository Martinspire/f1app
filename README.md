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

* Angular: <https://www.angular.io>
* Jest: <https://jestjs.io>
* Cypress: <https://www.cypress.io>
* Tailwind CSS Framework: <https://tailwindcss.com>
* Daisy Tailwind CSS Theme: <https://daisyui.com>
* NX Workspace: <https://nx.dev>
* Leaflet (Maps): <https://leafletjs.com/index.html>
* Three (3d viewer): <https://threejs.org>

### Plugins and libraries

* FontAwesome Icons
* Tailwind plugins
  * Aspect Ratio (official)
  * Forms (official)
  * Line Clamp (official)
  * Typography (official)
* MomentJS - NGX Moment - <https://github.com/urish/ngx-moment>
* ESLint
* Prettier
* NG Mocks - <https://github.com/ike18t/ng-mocks>
* NG Spectator - <https://github.com/ngneat/spectator>

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
