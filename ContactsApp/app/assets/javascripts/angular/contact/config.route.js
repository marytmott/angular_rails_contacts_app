(function() {
  'use strict';

  angular.module('contactsApp.contact')
    .config(configRoutes);

  configRoutes.$inject = ['$routeProvider'];

  function configRoutes($routeProvider) {
    $routeProvider
      .when('/:id', {
        templateUrl: '/partials/show.html',
        controller: 'ContactController',
        controllerAs: 'vm'
      });
  }
})();