(function() {
	'use strict';

	// Slick, for more examples please check out http://kenwheeler.github.io/slick/
	// By adding the attribute (with custom values) 'data-js-slider="{arrows: true, dots: true, ...}"'
	angular
		.module( 'app' )
		.directive( 'jsSlider', function() {
			return {
				link: function( scope, element, attrs ) {
					var options = ( typeof scope.$eval( attrs.jsSlider ) !== 'undefined' ) ? scope.$eval( attrs.jsSlider ) : new Object();

					jQuery( element ).slick({
						arrows: options.arrows ? options.arrows : false,
						dots: options.dots ? options.dots : false,
						slidesToShow: options.slidesToShow ? options.arrows : 1,
						autoplay: options.autoplay ? options.autoplay : false,
						autoplaySpeed: options.autoplaySpeed ? options.autoplaySpeed : 3000,
						slidesPerRow: options.slidesPerRow ? options.slidesPerRow : 3,
					});
				}
			};
		});

})();
