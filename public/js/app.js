import { HomeController } from "./controllers/home.controller";
require('../scss/style.scss');

var app = angular.module('app', ['ngRoute']);
app.config(["$locationProvider", "$routeProvider", function($locationProvider, $routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'public/views/home.html',
		controller: 'HomeController',
		//controllerAs: "$ctrl"
	}).otherwise({ redirectTo: '/' });
	
	$locationProvider.html5Mode(true);
}])
.controller("HomeController", ["$scope", HomeController]);

