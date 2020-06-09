(function() {
	'use strict';

	// Bootstrap Maxlength, for more examples please check out https://github.com/mimo84/bootstrap-maxlength
	// By adding the attribute (with custom values) 'data-js-maxlength="{alwaysShow: 'true', threshold: '10', ... }'
	angular
		.module( 'app' )
		.directive( 'jsMaxlength', function() {
			return {
				link: function( scope, element, attrs ) {
					var options = ( typeof scope.$eval( attrs.jsMaxlength ) !== 'undefined' ) ? scope.$eval( attrs.jsMaxlength ) : new Object();

					jQuery( element ).maxlength({
						alwaysShow: options.alwaysShow ? true : false,
						threshold: options.threshold ? options.threshold : 10,
						warningClass: options.warningClass ? options.warningClass : 'label label-warning',
						limitReachedClass: options.limitReachedClass ? options.limitReachedClass : 'label label-danger',
						placement: options.placement ? options.placement : 'bottom',
						preText: options.preText ? options.preText : '',
						separator: options.separator ? options.separator : '/',
						postText: options.postText ? options.postText : ''
					});
				}
			};
		});

})();
