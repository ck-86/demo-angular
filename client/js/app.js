// open this example and type person.name into the test field
var App = angular.module('myApp', []);

App.controller('ContactsController', function($scope){
  $scope.people = [
    {name : 'Tom Ashworth', number:'12345'},
    {name : 'Jeffrey Way', number:'12346'},
    {name : 'Joe Bloggs', number:'12347'}
  ];
});

