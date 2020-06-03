(function() {
	'use strict';

	// Tags Inputs, for more examples please check out https://github.com/xoxco/jQuery-Tags-Input
	// By adding the attribute 'data-js-tags-input'
	angular
		.module( 'app' )
		.directive( 'jsTagsInput', function() {
			return {
				link: function( scope, element ) {
					jQuery( element ).tagsInput({
						height: '36px',
						width: '100%',
						defaultText: 'Add tag',
						removeWithBackspace: true,
						delimiter: [',']
					});
				}
			};
		});

})();
