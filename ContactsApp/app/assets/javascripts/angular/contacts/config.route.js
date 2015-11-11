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