(function() {
  'use strict';

  angular.module('contactsApp.contacts')
    .controller('ContactsController', ContactsController);

  ContactsController.$inject = ['ContactsFactory'];

  function ContactsController(ContactsFactory) {
    var vm = this;
    vm.newContact = {};
    ContactsFactory.getContacts().then(function(data) {
      console.log(data);
      // vm.contactData = data
    });
    // vm.getContacts = ContactsFactory
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