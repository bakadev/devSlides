'use strict';

var devSlides = angular.module('devSlides.app', []);

devSlides.log = angular.module('devSlides.log', []);

angular.module('devSlides', ['devSlides.app']).config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/home', {
		templateUrl: 'partials/partial1.html',
		controller: 'slidePreview'
	});
	// $routeProvider.when('/home', {
	// 	templateUrl: 'partials/partial2.html',
	// 	controller: 'editorFrame'
	// });
	$routeProvider.otherwise({redirectTo: '/home'});
}]);





// // Declare app level module which depends on filters, and services
// angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers']).
// 	config(['$routeProvider', function($routeProvider) {
// 		$routeProvider.when('/home', {
// 			templateUrl: 'partials/partial1.html',
// 			controller: 'slidePreview'
// 		});
// 		$routeProvider.when('/home', {
// 			templateUrl: 'partials/partial2.html',
// 			controller: 'editorFrame'
// 		});
// 		$routeProvider.when('/view2', {
// 			templateUrl: 'partials/partial2.html',
// 			controller: 'MyCtrl2'
// 		});
// 		$routeProvider.otherwise({redirectTo: '/home'});
// }]).run(function($route){});