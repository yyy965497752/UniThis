(function() {
	'use strict';

	// Ion Range Slider, for more examples please check out https://github.com/IonDen/ion.rangeSlider
	// By adding the attribute 'data-js-range-slider'
	angular
		.module( 'app' )
		.directive( 'jsRangeSlider', function() {
			return {
				link: function( scope, element ) {
					jQuery( element ).ionRangeSlider({
						input_values_separator: ';'
					});
				}
			};
		});

})();
