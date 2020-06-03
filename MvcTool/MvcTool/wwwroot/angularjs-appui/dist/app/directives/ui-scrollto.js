(function() {
	'use strict';

	// Animated scroll to an element
	// By adding the attribute 'data-ui-scrollto="#target_element_id"' to a button or a link
	angular
		.module( 'app' )
		.directive( 'uiScrollto', ['$location', '$anchorScroll', function( $location, $anchorScroll ) {
			return {
				restrict: 'A',
				link: function( scope, el, attr ) {
					el.on( 'click', function(e) {
						$location.hash( attr.uiScrollto );
						$anchorScroll();
					});
				}
			};
		}]);

})();
