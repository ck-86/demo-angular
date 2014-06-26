var app = angular.module('myApp',[]);
/*----------------------------------------/
	Creating Controller Nesting
/-----------------------------------------*/	

app.controller('ParentController', function($scope){
	$scope.person = { greeted : false };
});

app.controller('ChildController', function($scope){
	$scope.sayHello = function() {
		$scope.person.name = "Chetan";
		$scope.person.greeted = true;
	}
});