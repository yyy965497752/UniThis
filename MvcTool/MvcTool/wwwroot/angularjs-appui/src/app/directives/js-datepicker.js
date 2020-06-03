(function() {
	'use strict';

	// Bootstrap Datepicker, for more examples please check out https://github.com/eternicode/bootstrap-datepicker
	// By adding the attribute 'data-js-datepicker'
	angular
		.module( 'app' )
		.directive( 'jsDatepicker', function() {
			return {
				link: function( scope, element ) {
					jQuery( element ).datepicker({
						weekStart: 1,
						autoclose: true,
						todayHighlight: true
					});
				}
			};
		});

})();
