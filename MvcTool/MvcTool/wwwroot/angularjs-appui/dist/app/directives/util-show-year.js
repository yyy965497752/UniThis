(function() {
	'use strict';

	// Populate element's content with the correct copyright year
	// By adding the attribute 'data-util-show-year'
	angular
		.module( 'app' )
		.directive( 'utilShowYear', function() {
			return {
				link: function( scope, element ) {
					var gdate = new Date();
					var copyright	= '2016';

					if ( gdate.getFullYear() !== 2016 ) {
						copyright = copyright + '-' + gdate.getFullYear().toString().substr( 2,2 );
					}

					element.text( copyright );
				}
			};
		});

})();
