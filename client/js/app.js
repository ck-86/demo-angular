// open this example and type person.name into the test field
var App = angular.module('myApp', []);

App.controller('ListController', function($scope){
  $scope.people = [
    {name:"Tom", age:20},
    {name:"Jeffrey", age:20},
    {name:"Dan", age:22},
    {name:"David", age:23},
    {name:"James", age:24}
  ];

  $scope.add = function () {
    
    $scope.people.push({
      name : $scope.new_name,
      age : $scope.new_age
    });

    $scope.new_name = "";
    $scope.new_age = "";
  };

  $scope.remove = function(index) {
    $scope.people.splice(index, 1);
  }
});

