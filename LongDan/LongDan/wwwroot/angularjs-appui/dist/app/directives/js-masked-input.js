(function() {
	'use strict';

	// Masked Inputs, for more examples please check out http://digitalbush.com/projects/masked-input-plugin/
	// By adding the attribute (with custom value) 'data-js-masked-input="99/99/9999"'
	angular
		.module( 'app' )
		.directive( 'jsMaskedInput', function() {
			return {
				link: function( scope, element, attrs ) {
					jQuery( element ).mask( attrs.jsMaskedInput );
				}
			};
		});

})();
