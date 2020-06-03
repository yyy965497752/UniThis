// Components Syntax Highlight Controller
angular.module( 'app' )
.controller( 'UiSyntaxHighlightingCtrl', ['$scope', '$localStorage', '$window',
	function( $scope, $localStorage, $window ) {
		// Init HighlightJS
		hljs.initHighlighting();
	}
]);
