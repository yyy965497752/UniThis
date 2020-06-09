(function() {
	'use strict';

	// Print page on click
	// By adding the attribute 'data-util-print'
	angular
		.module( 'app' )
		.directive( 'utilPrint', function() {
			return {
				link: function( scope, element ) {
					jQuery( element ).on( 'click', function() {
						// Store all #page-container classes
						var lPage = jQuery( '#page-container' );
						var pageCls = lPage.prop( 'class' );

						// Remove all classes from #page-container
						lPage.prop( 'class', '' );

						// Print the page
						window.print();

						// Restore all #page-container classes
						lPage.prop( 'class', pageCls );
					});
				}
			};
		});

})();
