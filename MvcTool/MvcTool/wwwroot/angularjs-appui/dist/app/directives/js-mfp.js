(function() {
	'use strict';

	// Magnific Popup, for more examples please check out http://dimsemenov.com/plugins/magnific-popup/
	// By adding the attribute (with custom value) 'data-js-mfp="{advancedGallery: false}'
	angular
		.module( 'app' )
		.directive( 'jsMfp', function() {
			return {
				link: function( scope, element, attrs ) {
					var options = ( typeof scope.$eval( attrs.jsMfp ) !== 'undefined' ) ? scope.$eval( attrs.jsMfp ) : new Object();

					jQuery( element ).magnificPopup({
						delegate: options.advancedGallery ? 'a.img-lightbox' : 'a.img-link',
						type: 'image',
						gallery: {
							enabled: true
						}
					});
				}
			};
		});

})();
