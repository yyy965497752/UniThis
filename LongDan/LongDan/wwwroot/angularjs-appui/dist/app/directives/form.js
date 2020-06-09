(function() {
	'use strict';

	// Form helper functionality (placeholder support for IE9 which uses HTML5 Placeholder plugin + Material forms)
	// Auto applied to all your form elements (<form>)
	angular
		.module( 'app' )
		.directive( 'form', function() {
			return {
				restrict: 'E',
				link: function( scope, element ) {
					// Init form placeholder (for IE9)
					jQuery( '.form-control', element ).placeholder();

					// Init material forms
					jQuery( '.form-material.floating > .form-control', element ).each( function() {
						var input  = jQuery( this );
						var parent = input.parent( '.form-material' );

						if ( input.val() ) {
							parent.addClass( 'open' );
						}

						input.on( 'change', function() {
							if ( input.val() ) {
								parent.addClass( 'open' );
							} else {
								parent.removeClass( 'open' );
							}
						});
					});
				}
			};
		});

})();
