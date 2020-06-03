(function() {
	'use strict';

	angular
		.module( 'app' )
		.directive( 'uiNavDrawer', ['$timeout', function( $timeout ) {
			return {
				link: function( scope, element ) {
					// When a submenu link is clicked
					jQuery( '.nav-item-has-subnav > a', element ).on( 'click', function( e ) {

						// Get link
						var link = jQuery( this );

						// Get link's parent
						var parentLi = link.parent( 'li' );

						// If submenu is open, close it..
						if ( parentLi.hasClass( 'open' ) ) {
							parentLi.removeClass( 'open' );
						} else {
							// .. else if submenu is closed, close all other (same level) submenus first before open it
							link
								.closest( 'ul' )
								.find( '> li' )
								.removeClass( 'open' );

							parentLi
								.addClass( 'open' );
						}

						return false;
					});
				}
			};
		}]);

})();
