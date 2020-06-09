(function() {
	'use strict';

	// Bootstrap Colorpicker, for more examples please check out http://mjolnic.com/bootstrap-colorpicker/
	// By adding the attribute (with custom value) 'data-js-colorpicker="{format: 'hex', inline: true}'
	angular
		.module( 'app' )
		.directive( 'jsColorpicker', function() {
			return {
				link: function( scope, element, attrs ) {
					var options = ( typeof scope.$eval( attrs.jsColorpicker ) !== 'undefined' ) ? scope.$eval( attrs.jsColorpicker ) : new Object();

					jQuery( element ).colorpicker({
						format: options.format ? options.format : 'hex',
						inline: options.inline ? true : false
					});
				}
			};
		});

})();
