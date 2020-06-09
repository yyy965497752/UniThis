(function() {
	'use strict';

	// Toggle class of a target element
	// By adding the attribute (with custom values) 'data-ui-toggle-class="{target: '#target_element_id', class: 'class_name_to_toggle'}'
	angular
		.module( 'app' )
		.directive( 'uiToggleClass', function() {
			return {
				link: function( scope, element, attrs ) {
					var options = ( typeof scope.$eval( attrs.jsToggleClass ) !== 'undefined' ) ? scope.$eval( attrs.jsToggleClass ) : new Object();

					jQuery( element ).on( 'click', function() {
						jQuery( options.target ).toggleClass( options.class );
					});
				}
			};
		});

})();
