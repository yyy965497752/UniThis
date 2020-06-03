(function() {
	'use strict';

	// Bootstrap Datetimepicker, for more examples please check out https://github.com/Eonasdan/bootstrap-datetimepicker
	// By adding the attribute (with custom values) 'data-js-datetimepicker="{format: 'false', useCurrent: 'false', ... }'
	angular
		.module( 'app' )
		.directive( 'jsDatetimepicker', function() {
			return {
				link: function( scope, element, attrs ) {
					var options = ( typeof scope.$eval( attrs.jsDatetimepicker ) !== 'undefined' ) ? scope.$eval( attrs.jsDatetimepicker ) : new Object();

					jQuery( element ).datetimepicker({
						format: options.format ? options.format : false,
						useCurrent: options.useCurrent ? options.useCurrent : false,
						locale: moment.locale('' + (options.locale ? options.locale : '') +''),
						showTodayButton: options.showTodayButton ? options.showTodayButton : false,
						showClear: options.showClear ? options.showClear : false,
						showClose: options.showClose ? options.showClose : false,
						sideBySide: options.sideBySide ? options.sideBySide : false,
						inline: options.inline ? options.inline : false,
						icons: {
							time: 'ion-ios-clock',
							date: 'ion-ios-calendar',
							up: 'ion-ios-arrow-up',
							down: 'ion-ios-arrow-down',
							previous: 'ion-ios-arrow-left',
							next: 'ion-ios-arrow-right',
							today: 'ion-android-expand',
							clear: 'ion-ios-trash',
							close: 'ion-ios-close'
						}
					});
				}
			};
		});

})();
