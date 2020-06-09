(function() {
	'use strict';

	// Cards actions functionality
	// By adding the attribute 'data-ui-card-action'
	angular
		.module( 'app' )
		.directive( 'jsCardAction', function() {
			return {
				link: function( scope, element ) {
					var el = jQuery( element );

					// Init Icons
					scope.helpers.uiCards( false, 'init', el );

					// Call cards API on click
					el.on( 'click', function() {
						scope.helpers.uiCards( el.closest( '.card' ), el.data( 'action' ) );
					});
				}
			};
		});

})();
