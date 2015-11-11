(function() {
  'use strict';

  angular.module('contactsApp.contacts')
    .config(configRoutes);

  configRoutes.$inject = ['$routeProvider'];

  function configRoutes($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/partials/contacts.html',
        controller: 'ContactsController',
        controllerAs: 'vm'
      });
  }
})();


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