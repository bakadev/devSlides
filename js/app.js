'use strict';
var devSlides = angular.module('devSlides', ['$strap.directives']);

devSlides.config(function($routeProvider) {
	$routeProvider.when('/home', {
		templateUrl: 'partials/home.html',
		controller: 'slidePreview'
	});
	$routeProvider.when('/editor', {
		templateUrl: 'partials/preview.html',
		controller: 'slidePreview'
	});
	$routeProvider.when('/html', {
		templateUrl: 'partials/htmlmode.html',
		controller: 'slidePreview'
	});
	$routeProvider.otherwise({redirectTo: '/editor'});
});

/* Controllers */
devSlides.controller('slidePreview', ['$scope', function($scope){
	$scope.name = 'Travis Wilson';
}]);
devSlides.controller('editorFrame', ['$scope', function($scope){
	$scope.email = 'traviswilson@gmail.com';
}]);

/* Directives */
// angular.module('devSlides.directives', []).
// 	directive('appVersion', ['version', function(version) {
// 		return function(scope, elm, attrs) {
// 			elm.text(version);
// 		};
// }]);


/* Filters */
// angular.module('devSlides.filters', []).
// 	filter('interpolate', ['version', function(version) {
// 		return function(text) {
// 			return String(text).replace(/\%VERSION\%/mg, version);
// 		}
// }]);


/* Services */
// angular.module('devSlides.services', []).
//   value('version', '0.1');



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