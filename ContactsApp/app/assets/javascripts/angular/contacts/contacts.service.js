(function() {
  'use strict';

  angular.module('contactsApp.contacts')
    .service('Contacts', Contacts)

  Contacts.$inject = ['$resource'];

  function Contacts($resource) {
    return $resource('/contacts/:id', {id:'@id'}, {});
  }
})();