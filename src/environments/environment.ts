// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  //This is for REST API 
  url_api: 'http://platzi-store.herokuapp.com',
  firebase: {
    apiKey: "AIzaSyDkTY18i3Y9uLl3lI3H3KTXZogIElvdnA0",
    authDomain: "angular-store-20bc1.firebaseapp.com",
    projectId: "angular-store-20bc1",
    storageBucket: "angular-store-20bc1.appspot.com",
    messagingSenderId: "460959484142",
    appId: "1:460959484142:web:b54a0bc0ece91a664e0bff"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
