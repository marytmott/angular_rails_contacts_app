(function() {
  'use strict';

  angular.module('contactsApp.contacts')
    .factory('ContactsFactory', ContactsFactory);

  ContactsFactory.$inject = ['$resource'];

  function ContactsFactory($resource) {
    return $resource('/api/contacts/:id', {id: '@id'},
      { update: {method: 'PUT'} });

    // function getContacts() {
    //   return $http.get('/api/contacts')
    //     .success(requestSuccess)
    //     .error(requestError);
    // }

    // function createContact(newContact) {
    //   return $http.post('/api/contacts', newContact)
    //     .success(requestSuccess)
    //     .error(requestError);
    // }


    // function requestSuccess(data) {
    //   console.log(data);
    //   return data;
    // }

    // function requestError(error) {
    //   console.log(error);
    // }

    // return {
    //   getContacts: getContacts,
    //   createContact: createContact
    // };
  }
})();


/////
// app.factory('ContactList', function() {
//   var ContactList = {};

//   ContactList.contactList = [
//     {
//       name: 'Peter',
//       email: 'peter@email.com',
//       phone: '(123) 456-7890',
//       giphy: 'http://media0.giphy.com/media/zHBySqsGYTGeI/100.gif'
//     },
//     {
//       name: 'Sarah Myers',
//       email: 'sarah@email.com',
//       phone: '(123) 456-7890',
//       giphy: 'http://media3.giphy.com/media/2r9KZBmdeIw6I/100.gif'
//     }
//   ];

//   ContactList.addContact = function(obj) {
//     ContactList.contactList.push(obj);
//   };

//   ContactList.findContact = function(name) {
//     var found;
//     //can use underscore
//     //note: buggy if multiple names
//     ContactList.contactList.forEach(function(contact, index) {
//       if (contact.name === name) {
//         contact.index = index;
//         found = contact;
//       }
//     });
//     return found;
//   };

//   ContactList.removeContact = function(index) {
//     ContactList.contactList.splice(index, 1);
//   };

//   return ContactList;
// });

// app.factory('Giphy', ['$http', '$q', function($http, $q) {
//   var Giphy = {};
//   Giphy.search = function(name) {
//     var encodedName = encodeURIComponent(name);
//     var url = 'http://api.giphy.com/v1/gifs/search?q=' + encodedName + '&api_key=dc6zaTOxFJmzC';

//     //make it return a random number in the array of returned data
//     $http.get(url).success(function(data) {
//       // console.log(data.data);
//       return data.data[0].images.fixed_height_small.url;
//     }).error(function() {
//       //return null if error
//       return null;
//     });

//     // return
//   };

//   //encodeuri
//   //gte response --> what doesit look like?

//   //save it
//   return Giphy;
// }]);