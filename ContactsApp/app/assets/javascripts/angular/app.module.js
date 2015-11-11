(function() {
  'use strict';

  angular.module('contactsApp', [
    'ngRoute',
    'contactsApp.contacts',
    'contactsApp.contact'
  ])
  .config(configRoutes);

  configRoutes.$inject = ['$httpProvider','$routeProvider'];

  function configRoutes($httpProvider, $routeProvider) {
    $routeProvider
      .otherwise({redirectTo: '/'});

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

