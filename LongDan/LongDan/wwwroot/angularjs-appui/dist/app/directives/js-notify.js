(function() {
	'use strict';

	// Bootstrap Notify, for more examples please check out http://bootstrap-growl.remabledesigns.com/
	// By adding the attribute (with custom values) 'data-js-notify="{message: 'Your message!', ... }'
	angular
	.module( 'app' )
	.directive( 'jsNotify', function() {
		return {
			link: function( scope, element, attrs ) {
				var options = ( typeof scope.$eval( attrs.jsNotify ) !== 'undefined' ) ? scope.$eval( attrs.jsNotify ) : new Object();

				jQuery( element ).on( 'click', function() {
					jQuery.notify({
						icon: options.icon ? options.icon : '',
						message: options.message,
						url: options.url ? options.url : ''
					},
					{
						element: 'body',
						type: options.type ? options.type : 'info',
						allow_dismiss: true,
						newest_on_top: true,
						showProgressbar: false,
						placement: {
							from: options.from ? options.from : 'top',
							align: options.align ? options.align : 'right'
						},
						offset: 20,
						spacing: 10,
						z_index: 1033,
						delay: 5000,
						timer: 1000,
						animate: {
							enter: 'animated fadeIn',
							exit: 'animated fadeOutDown'
						}
					});
				});
			}
		};
	});

})();
