(function() {
	'use strict';

	// Bootstrap Tabs
	// By adding the attribute 'data-js-tabs' to a ul with Bootstrap tabs markup
	angular
		.module( 'app' )
		.directive( 'jsTabs', function() {
			return {
				link: function( scope, element ) {
					jQuery( 'a', element ).on( 'click', function( e ) {
						e.preventDefault();
						jQuery( this ).tab( 'show' );
					});
				}
			};
		});

})();
