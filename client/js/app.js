// open this example and type person.name into the test field
var App = angular.module('myApp', []);

App.controller('MyController', ['$scope', '$filter' , function($scope, $filter){

  $scope.name = $filter('lowercase')('CHETAN');

  $scope.today = new Date();
  
}]);


App.filter('capitalize', function() {
  return function(input) {

    if(input) {
      return input[0].toUpperCase() + input.slice(1);
    }
    
  }
});
