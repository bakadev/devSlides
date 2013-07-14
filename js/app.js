
'use strict';
var slideContent;
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
devSlides.controller('editor', function ($scope) {
	$scope.content = '# This is the initial content.';
});

devSlides.directive('ace', ['$timeout', function ($timeout) {
	var resizeEditor = function (editor, elem) {
		var lineHeight = editor.renderer.lineHeight;
		var rows = editor.getSession().getLength();
		$(elem).height(rows * lineHeight);
		editor.resize();
	};

	return {
		restrict: 'A',
		require: '?ngModel',
		scope: true,
		link: function (scope, elem, attrs, ngModel) {
			var node = elem[0];
			var editor = ace.edit(node);

			editor.setTheme('ace/theme/xcode');

			var MarkdownMode = require('ace/mode/html').Mode;

			editor.getSession().setMode(new MarkdownMode());
			editor.setShowPrintMargin(false);

			ngModel.$render = function () {
				editor.setValue(ngModel.$viewValue);
				resizeEditor(editor, elem);
			};

			editor.on('change', function () {
				$timeout(function () {
					scope.$apply(function () {
						var value = editor.getValue();
						ngModel.$setViewValue(value);
						$('#previewHTML').html(value);
						 slideContent = value;
					});
				});

				resizeEditor(editor, elem);
			});
		}
	};
}]);

// devSlides.directive('preview', ['$timeout', '$rootScope', function ($timeout, $rootScope) {
// 	console.log('ok', slideContent);
// 	return {
// 		restrict: 'E',
// 		replace: true,
// 		link: function(scope, element) {
// 			scope.$watch(slideContent, function(markdownText){
// 				console.log(markdownText);
// 			});
// 		}
// 	}	
// }]);