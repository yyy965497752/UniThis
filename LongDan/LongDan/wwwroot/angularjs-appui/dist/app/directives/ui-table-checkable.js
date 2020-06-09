(function() {
	'use strict';

	// Custom Table functionality: Checkable rows
	// By adding the attribute 'data-ui-table-checkable' to your table
	angular
		.module( 'app' )
		.directive( 'uiTableCheckable', function() {
			return {
				link: function( scope, element ) {
					var table = jQuery( element );

					// When a checkbox is clicked in thead
					jQuery( 'thead input:checkbox', table ).click( function() {
						var checkedStatus = jQuery( this ).prop( 'checked' );

						// Check or uncheck all checkboxes in tbody
						jQuery( 'tbody input:checkbox', table ).each( function() {
							var checkbox = jQuery( this );

							checkbox.prop( 'checked', checkedStatus );
							uiCheckRow( checkbox, checkedStatus );
						});
					});

					// When a checkbox is clicked in tbody
					jQuery( 'tbody input:checkbox', table ).click( function() {
						var checkbox = jQuery( this );

						uiCheckRow( checkbox, checkbox.prop( 'checked' ) );
					});

					// When a row is clicked in tbody
					jQuery( 'tbody > tr', table ).click( function(e) {
						if (e.target.type !== 'checkbox'
								&& e.target.type !== 'button'
								&& e.target.tagName.toLowerCase() !== 'a'
								&& !jQuery( e.target ).parent( 'label' ).length ) {
							var checkbox = jQuery( 'input:checkbox', this );
							var checkedStatus  = checkbox.prop( 'checked' );

							checkbox.prop( 'checked', ! checkedStatus );
							uiCheckRow( checkbox, ! checkedStatus );
						}
					});

					// Checkable table functionality helper - Checks or unchecks table row
					var uiCheckRow = function( checkbox, checkedStatus ) {
						if ( checkedStatus ) {
							checkbox
								.closest( 'tr' )
								.addClass( 'active' );
						} else {
							checkbox
								.closest( 'tr' )
								.removeClass( 'active' );
						}
					};
				}
			};
		});

})();
