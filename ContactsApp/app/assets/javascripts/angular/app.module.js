(function() {
  'use strict';

  angular.module('contactsApp', [
    'ngRoute',
    'ngResource',
    'contactsApp.contacts',
    'contactsApp.contact'
  ])
  .config(configRoutes);

  configRoutes.$inject = ['$httpProvider','$routeProvider', '$locationProvider'];

  function configRoutes($httpProvider, $routeProvider, $locationProvider) {
    $routeProvider
      .otherwise({redirectTo: '/'});

    $locationProvider.html5Mode(true);

    $httpProvider.defaults.headers.common['X-CSRF-Token'] =
      $('meta[name=csrf-token]').attr('content');
  }

})();


// var contactsApp = angular.module("ContactsApp", []);
// contactsApp.config(['$httpProvider', function($httpProvider) {
//   $httpProvider.defaults.headers.common['X-CSRF-Token'] =
//     $('meta[name=csrf-token]').attr('content');
// }]);

///////////////
// var app = angular.module('contacts', ['ngRoute']);
// app.config(['$routeProvider', function($routeProvider) {
//   $routeProvider
//     .when('/', {
//       templateUrl: 'partials/contacts.html',
//       controller: 'contactsController'
//     })
//     .when('/:name', {
//       templateUrl: 'partials/show.html',
//       controller: 'showContactController'
//     })
//     .otherwise({redirectTo: '/'});
// }]);

