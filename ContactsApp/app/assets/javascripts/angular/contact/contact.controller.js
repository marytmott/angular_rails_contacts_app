(function() {
  'use strict';

  angular.module('contactsApp.contact')
    .controller('ContactController', ContactController);

  ContactController.$inject = ['$routeParams', '$location', 'ContactRequestFactory'];

  function ContactController($routeParams, $location, ContactRequestFactory) {
    var vm = this;
    function removeContact() {
      ContactRequestFactory.removeContact(vm.contact.id);
      $location.path('/');
    }

    function updateContact() {
      vm.update = !vm.update;
      console.log(vm.update);
      if (!vm.update) {
        ContactRequestFactory.updateContact(vm.contact.id, vm.contact).then(function(data) {
          console.log(data);
        });
      }
    }

    ContactRequestFactory.getOneContact($routeParams.id).then(function(data) {
      console.log(data);
      vm.contact = data.data;
    });
    vm.removeContact = removeContact;
    vm.update = false;
    vm.updateContact = updateContact;
  }
})();


/////////
// app.controller('contactsController', ['$scope', 'ContactList', 'Giphy', function($scope, ContactList, Giphy) {
//   $scope.contactData = ContactList.contactList;
//   $scope.newContact = {};
//   $scope.addContact = function() {
//     var giphy = Giphy.search($scope.newContact.name);

//     //DRY this code up!
//     if (giphy) {
//       $scope.newContact.giphy = giphy;
//       ContactList.addContact($scope.newContact);
//       $scope.newContact = {};
//     } else {
//       ContactList.addContact($scope.newContact);
//       $scope.newContact = {};
//     }
//   };
// }]);
// app.controller('showContactController', ['$scope', '$routeParams', '$location', 'ContactList', function($scope, $routeParams, $location, ContactList) {
//   $scope.contact = ContactList.findContact($routeParams.name);
//   $scope.removeContact = function() {
//     ContactList.removeContact($scope.contact.index);
//     $location.path('/');
//   };
// }]);