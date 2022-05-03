# About

F1 app to try out some things for Sogeti

Made with NX, Angular, Jest, Cypress en Tailwind. DaisyUI Tailwind thema, Hero Icons

# Sources:

- Angular: https://www.angular.io
- Jest: https://jestjs.io
- Cypress: https://www.cypress.io
- Tailwind CSS Framework: https://tailwindcss.com
- Daisy Tailwind CSS Theme: https://daisyui.com
- NX Workspace: https://nx.dev

## Plugins and libraries:

- NG Icons: https://github.com/ng-icons/ng-icons
- Hero Icons: https://heroicons.com
- Tailwind plugins: 
  - Aspect Ratio (official)
  - Forms (official)
  - Line Clamp (official)
  - Typography (official)
- MomentJS - NGX Moment - https://github.com/urish/ngx-moment
- ESLint
- Prettier
- NG Mocks - https://github.com/ike18t/ng-mocks
- NG Spectator - https://github.com/ngneat/spectator

## Developed

Project developed in Visual Studio Code https://code.visualstudio.com
Contains settings and configuration to run it easily.
Also used NX to generate project and settings to easily maintain and develop.
Uses Jest instead of Karma/Jasmine and Cypress instead of Protractor.

# Installation notes

Because there is a conflict from NX v14.0.5 for peer dependencies we need to (temporarily) use legacy peer deps to install the project.
As soon as its fixed we will update the project.

Also there is an issue with autoprefixer whining about the CSS for LeafletJS (and @tailwindcss/forms) and the only workaround seems to be that we fix it locally. Otherwise the browser console will start listing a few warnings that just aren't very interesting. Something about a css line being deprecated which isn't used much but also can't really be overriden. So when either the warning is gone or the projects are updated we can use it normally again.

Well, of course we could downgrade but where's the fun in that?
