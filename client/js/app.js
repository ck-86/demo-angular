    // open this example and type person.name into the test field
var App = angular.module('myApp', [])

App.controller('MyController',
    ['$scope', '$parse', function($scope, $parse) {

      $scope.person = {
        name: "Bruce Wayne",
        city: 'Gotham'
      };

      $scope.$watch('expr', function(newVal, oldVal, scope) {
        if (newVal !== oldVal) {
          // Let's set up our parseFun with the expression
          var parseFun = $parse(newVal);
          // Get the value of the parsed expression, set it on the scope for output
          scope.parsedExpr = parseFun(scope);
        }
      });
    }]);