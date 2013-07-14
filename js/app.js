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

			// set editor options
			editor.setShowPrintMargin(false);

			// data binding to ngModel
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
						devSlides.content = value;

					});
				});

				resizeEditor(editor, elem);
			});
		}
	};
}]);


/* Directives */
// angular.module('ace', []).directive('ace', function() {
//   var ACE_EDITOR_CLASS = 'ace-editor';

//   function loadAceEditor(element, mode) {
//     var editor = ace.edit($(element).find('.' + ACE_EDITOR_CLASS)[0]);
//     editor.session.setMode("ace/mode/" + mode);
//     editor.renderer.setShowPrintMargin(false);

//     return editor;
//   }

//   function valid(editor) {
//     return (Object.keys(editor.getSession().getAnnotations()).length == 0);
//   }

//   return {
//     restrict: 'A',
//     require: '?ngModel',
//     transclude: true,
//     template: '<div class="transcluded" ng-transclude></div><div class="' + ACE_EDITOR_CLASS + '"></div>',

//     link: function(scope, element, attrs, ngModel) {
//       var textarea = $(element).find('textarea');
//       textarea.hide();

//       var mode = attrs.ace;
//       var editor = loadAceEditor(element, mode);

//       scope.ace = editor;

//       if (!ngModel) return; // do nothing if no ngModel

//       ngModel.$render = function() {
//         var value = ngModel.$viewValue || '';
//         editor.getSession().setValue(value);
//         textarea.val(value);
//       };

//       editor.getSession().on('changeAnnotation', function() {
//         if (valid(editor)) {
//           scope.$apply(read);
//         }
//       });

//       editor.getSession().setValue(textarea.val());
//       read();

//       function read() {
//         ngModel.$setViewValue(editor.getValue());
//         textarea.val(editor.getValue());
//       }
//     }
//   }
// });

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