(function() {
	'use strict';

	// Dropzone, for more examples please check out http://www.dropzonejs.com/#usage
	// By adding the attribute 'data-js-dropzone' to your form
	angular
		.module( 'app' )
		.directive( 'jsDropzone', function() {
			return {
				link: function( scope, element ) {
					scope.dropzone = new Dropzone( element[0] );
				}
			};
		});

})();
