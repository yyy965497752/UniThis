(function() {
	'use strict';

	// Draggable items with jQueryUI, for more examples please check out https://jqueryui.com/sortable/
	// By adding the attribute 'data-js-draggable'
	angular
		.module( 'app' )
		.directive( 'jsDraggable', function() {
			return {
				link: function( scope, element ) {
					jQuery( '.draggable-column', element ).sortable({
						connectWith: '.draggable-column',
						items: '.draggable-item',
						dropOnEmpty: true,
						opacity: .75,
						handle: '.draggable-handler',
						placeholder: 'draggable-placeholder',
						tolerance: 'pointer',
						start: function(e, ui){
							ui.placeholder.css({
								'height': ui.item.outerHeight(),
								'margin-bottom': ui.item.css( 'margin-bottom' )
							});
						}
					});
				}
			};
		});

})();
