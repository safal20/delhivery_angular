var app = angular.module('myApp', []);

app.controller('myCtrl', function ($scope) {
	$scope.suggestions = [];

	$scope.addSuggestion = function (name) {
		console.log(name);
		$scope.suggestions.push(name);
		//$scope.$apply();
	}
});
