(function() {
	'use strict';

	// Select2, for more examples please check out https://github.com/select2/select2
	// By adding the attribute 'data-js-select2' to <select>
	angular
		.module( 'app' )
		.directive( 'jsSelect2', function() {
			return {
				link: function( scope, element ) {
					jQuery( element ).select2();
				}
			};
		});

})();
