(function() {
  'use strict';

  angular.module('contactsApp', [
    'ngRoute',
    'ngResource',
    'contactsApp.contacts',
    'contactsApp.contact'
  ])
  .config(configRoutes);

  configRoutes.$inject = ['$httpProvider', '$routeProvider', '$locationProvider'];

  function configRoutes($httpProvider, $routeProvider, $locationProvider) {
    $routeProvider
      .otherwise({redirectTo: '/'});

    $locationProvider.html5Mode(true);

    $httpProvider.defaults.headers.common['X-CSRF-Token'] =
      $('meta[name=csrf-token]').attr('content');
  }

})();