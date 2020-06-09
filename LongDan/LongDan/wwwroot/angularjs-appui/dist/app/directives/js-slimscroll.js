(function() {
	'use strict';

	// SlimScroll, for more examples please check out http://rocha.la/jQuery-slimScroll
	// By adding the attribute (with custom values) 'data-js-slimscroll="{height: '100px', size: '3px', ...}'
	angular
		.module( 'app' )
		.directive( 'jsSlimscroll', function() {
			return {
				link: function( scope, element, attrs ) {
					var options = ( typeof scope.$eval( attrs.jsSlimscroll ) !== 'undefined' ) ? scope.$eval( attrs.jsSlimscroll ) : new Object();

					jQuery( element ).slimScroll({
						height: options.height ? options.height : '200px',
						size: options.size ? options.size : '5px',
						position: options.position ? options.position : 'right',
						color: options.color ? options.color : scope.app.colors.text_muted,
						alwaysVisible: options.alwaysVisible ? true : false,
						railVisible: options.railVisible ? true : false,
						railColor: options.railColor ? options.railColor : '#ccc',
						railOpacity: options.railOpacity ? options.railOpacity : .3
					});
				}
			};
		});

})();
