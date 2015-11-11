(function() {
  'use strict';

  angular.module('contactsApp.contact')
    .controller('ContactController', ContactController);

  ContactController.$inject = ['$routeParams', '$location', 'ContactsFactory'];

  function ContactController($routeParams, $location, ContactsFactory) {
    var vm = this;
    var contactId = $routeParams.id;

    function updateContact() {
      vm.update = !vm.update;
      if (!vm.update) {
        vm.contact = ContactsFactory.update({id: vm.contact.id},
          {
            name: vm.contact.name,
            email: vm.contact.email,
            phone: vm.contact.phone
          }
        );
      }
    }

    function removeContact() {
      ContactsFactory.delete({id: vm.contact.id});
      $location.path('/');
    }

    vm.contact = ContactsFactory.get({id: contactId});
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