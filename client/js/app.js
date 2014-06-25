function MyController($scope){

	// Created `clock` object with `now` property
	$scope.clock = {
		now : new Date()
	}; 

	// Update `clock.now` to current time
	var updateClock = function() {
		$scope.clock.now = new Date();
	};

	setInterval( function(){
		$scope.$apply(updateClock);
	}, 1000);

	updateClock();
}