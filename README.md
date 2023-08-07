# About

F1 app to try out some things.

Made with NX, Angular, Jest, Cypress en Tailwind. DaisyUI Tailwind thema, Hero Icons

I was having some fun with an F1 statistics API so I thought why not go mad and add various cool things.

* Season/Race/Driver statistics
* Wikipedia links and summary for driver page
* Show laptimes and compare between drivers
* 3d model of track when viewing track page
* map of season locations
* countdown to next race
* automatically grab latest season and show details on home screen
* verstappen direct link to profile
* hype hype for getting into the F1 mood by playing the most iconic F1 music
* QR code generation for sharing URL easily
* Can compile into an application by using Capacitor

## Sources

* Angular: the main framework used <https://www.angular.io>
* Jest: to unit test our code <https://jestjs.io>
* Cypress: to end-to-end test our code <https://www.cypress.io>
* Tailwind CSS Framework: to style our application <https://tailwindcss.com>
* Daisy Tailwind CSS Theme: to apply a nice theme to our styling <https://daisyui.com>
* NX Workspace: to manage application <https://nx.dev>
* Leaflet: to show maps <https://leafletjs.com/index.html>
* Three: to render 3d models <https://threejs.org> (STL Files are from 3d printable files)
* Capacitor: to build a mobile application and deploy it there <https://capacitorjs.com>

### Plugins and libraries

* FontAwesome Icons - to get some easy and clean icons
* Tailwind plugins - to make tailwind have a few more features
  * Aspect Ratio (official)
  * Forms (official)
  * Typography (official)
* Date-FNS - For managing dates <https://date-fns.org>
* NGX-Date-FNS - for using them in Angular easily <https://github.com/joanllenas/ngx-date-fns>
* ESLint - for validating code (though rules are still very basic and not as tight as I could do)
* Prettier - for formatting code
* NG Mocks - for easily mock items to test code <https://github.com/ike18t/ng-mocks>
* NG Neat Spectator - for easily bootstrapping tests and parsing DOM in tests <https://github.com/ngneat/spectator>
* NG Neat Dialog - helper for adding modals easily to your page. Could probably make this work myself but compatibility is still annoying enough <https://github.com/ngneat/dialog>

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

Installation commands is as follows: `npm run install-project`

## Running and deployment

If you want to run it locally, just use `nx serve` once everything is installed.

You can also run tests `nx test` and lint `nx lint` to see some quality information, though I haven't really done much there yet (since its still more of a playground for me)

Also with the right credentials (so only me basically) its possible to manually deploy to Github Pages with `npm run deploy` and it automatically builds once a new push to the main branch is done.

## Version info

### 8-8 updated dependencies and renewed icon

* Updated dependencies
* Updated header logo link
* Added icon
* Added generating assets from icon and splash for devices
* Fixed deploying to my Android device
* Added a few tasks to run on Android and generate resources

### 20-6 fixed some bugs

* updated readme with current status and tech
* date of races in season list
* audio player now pausing previous track when switching
* different modal solution to easier make modals
* removal of dummy or test data
* open wiki links in new tab
* added github link
* removed ability to share current page link. Just always use main site (otherwise I have to make github behave with angular routing and environments and I don't really wanna)

Earlier releases can be found in github history
