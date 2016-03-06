A simplified troubleshooting repository for Angular 2 compilation problem.

git clone https://github.com/VilleSalonen/angular2-troubleshooting/
cd angular2-troubleshooting
npm install
typings install
cd client
tsc

Last command results in:

    app/components/app.component.ts(1,25): error TS2307: Cannot find module 'angular2/core'.
    app/main.ts(1,28): error TS2307: Cannot find module 'angular2/platform/browser'.
    app/main.ts(3,32): error TS2307: Cannot find module 'angular2/router'.
