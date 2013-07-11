'use strict';

/* Controllers */
devSlides.controller('slidePreview',['$scope', '$http', function($scope, $http){
	$scope.name = 'Travis Wilson';
}]);
devSlides.controller('editorFrame',['$scope', '$http', function($scope, $http){
	$scope.email = 'traviswilson@gmail.com';
}]);

// angular.module('myApp.controllers', []).
// 	controller('slidePreview', function($scope) {
// 		$scope.name = 'Travis Wilson';
// 	})
// 	.controller('editorFrame', function($scope) {
// 		$scope.email = 'traviswilson@gmail.com';
// 	})
// 	.controller('MyCtrl2', [function() {
// 	}]);