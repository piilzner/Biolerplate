angular.module('app', ['ngRoute'])
.config(["$locationProvider", "$routeProvider", function($locationProvider, $routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'public/views/home.html',
		controller: 'homectrl',
		//controllerAs: "$ctrl"
	}).otherwise({ redirectTo: '/' });
}])


angular.module('app').controller("homectrl", ["$scope", function($scope){

    $scope.title = "pbp boilerplates";
    $scope.desc = "Ground zero for your next AngularJS project.";

}]);