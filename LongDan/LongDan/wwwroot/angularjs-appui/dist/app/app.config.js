(function() {
	'use strict';

	angular
		.module( 'app' )
		.config( ['$uibTooltipProvider', 'cfpLoadingBarProvider', '$translateProvider',
			function( $uibTooltipProvider, cfpLoadingBarProvider, $translateProvider ) {
				// Angular Bootstrap Tooltips and Popovers configuration
				$uibTooltipProvider.options({
					appendToBody: true,
					trigger: 'mouseenter',
				});

				// Angular Loading Bar configuration
				cfpLoadingBarProvider.includeBar = true;
				cfpLoadingBarProvider.includeSpinner = false;

				// Register a loader for the static files
				// So, the module will search missing translation tables under the specified urls.
				// Those urls are [prefix][langKey][suffix].
				$translateProvider.useStaticFilesLoader({
					prefix: 'i18n/',
					suffix: '.json'
				});
				// Tell the module what language to use by default
				$translateProvider.preferredLanguage( 'en' );
				// Tell the module to store the language in the local storage
				$translateProvider.useLocalStorage();
				// Selected sanitization strategy https://angular-translate.github.io/docs/#/guide/19_security
				$translateProvider.useSanitizeValueStrategy('escape');
			}
		])

})();

/**
 * Custom UI helper functions
 */
angular
	.module( 'app' )
	.factory( 'uiHelpers', function() {
		return {
			// Hex to rgba helper
			hexToRgba: function( hex, opacity ) {
				hex = hex.replace( '#', '' );
				r = parseInt( hex.substring( 0, 2 ), 16 );
				g = parseInt( hex.substring( 2, 4 ), 16 );
				b = parseInt( hex.substring( 4, 6 ), 16 );
				result = 'rgba( ' + r + ', ' + g + ', ' + b + ', ' + opacity + ')';
				return result;
			},

			// Handles #main-container height resize to push footer to the bottom of the page
			uiHandleMain: function() {
				var	lMain			= jQuery( '.app-layout-content' ),
						hWindow	= jQuery( window ).height(),
						hHeader		= jQuery( '.app-layout-header' ).outerHeight(),
						hFooter		= jQuery( '.app-layout-footer' ).outerHeight();

				if (jQuery('body').hasClass('layout-has-fixed-header')){
					lMain.css('min-height', hWindow - hFooter);
				} else {
					lMain.css('min-height', hWindow - (hHeader + hFooter));
				}
			},

			// Handles sidebar and side overlay custom scrolling functionality
			uiHandleScroll: function( mode ) {
				var	windowW			= window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
						lPage					= jQuery( '.app-layout-container' ),
						lDrawer				= jQuery( '.app-layout-drawer' ),
						lDrawerScroll		= jQuery( '.app-layout-drawer-scroll' );

				// Init scrolling
				if ( mode === 'init' ) {
					// Init scrolling only if required the first time
					uiHandleScroll();
				} else {
					// If screen width is greater than 991 pixels and .side-scroll is added to #page-container
					// if ( windowW > 991 ) {
					if ( windowW > 991 ) {
						// If sidebar exists
						if ( lDrawer.length ) {
							// Turn sidebar's scroll lock off (slimScroll will take care of it)
							jQuery( lDrawer ).scrollLock( 'off' );

							// If sidebar scrolling does not exist init it..
							if ( lDrawerScroll.length && ( ! lDrawerScroll.parent( '.slimScrollDiv' ).length ) ) {
								lDrawerScroll.slimScroll({
									height: lDrawer.outerHeight(),
									color: 'rgba(0, 20, 35, .14)',
									size: '5px',
									opacity : .35,
									wheelStep : 15,
									distance : '2px',
									railVisible: false,
									railOpacity: 1
								});
							}
							else { // ..else resize scrolling height
								lDrawerScroll
									.add( lDrawerScroll.parent() )
									.css( 'height', lDrawer.outerHeight() );
							}
						}
					} else {
						// If sidebar exists
						if ( lDrawer.length ) {
							// If sidebar scrolling exists destroy it..
							if ( lDrawerScroll.length && lDrawerScroll.parent( '.slimScrollDiv' ).length ) {
								lDrawerScroll
									.slimScroll({ destroy: true });
								lDrawerScroll
									.attr( 'style', '' );
							}

							// Turn sidebars's scroll lock on
							jQuery( lDrawer ).scrollLock();
						}
					}
				}
			},

			// Handles Cards API functionality
			uiCards: function( card, mode, button ) {
				// Set default icons for fullscreen and content toggle buttons
				var	$iconFullscreen				= 'ion-android-expand',
						$iconFullscreenActive	= 'ion-android-contract',
						$iconContent					= 'ion-chevron-down',
						$iconContentActive		= 'ion-chevron-up';

				if ( mode === 'init' ) {
					// Auto add the default toggle icons
					switch( button.data( 'action' ) ) {
						case 'fullscreen_toggle':
							button.html( '<i class="' + ( button.closest( '.card' ).hasClass( 'card-action-fullscreen' ) ? $iconFullscreenActive : $iconFullscreen ) + '"></i>' );
							break;
						case 'content_toggle':
							button.html( '<i class="' + ( button.closest( '.card' ).hasClass( 'card-action-hidden' ) ? $iconContentActive : $iconContent ) + '"></i>' );
							break;
						default:
							return false;
					}
				} else {
					// Get card element
					var elCard = ( card instanceof jQuery) ? card : jQuery( card );

					// If element exists, procceed with cards functionality
					if ( elCard.length ) {
						// Get card action buttons if exist (need them to update their icons)
						var btnFullscreen	= jQuery( '[data-js-card-action][data-action="fullscreen_toggle"]', elCard );
						var btnToggle			= jQuery( '[data-js-card-action][data-action="content_toggle"]', elCard );

						// Mode selection
						switch ( mode ) {

							// Card fullscreen TOGGLE
							case 'fullscreen_toggle' :
								elCard.toggleClass( 'card-action-fullscreen' );

								// Enable/disable scroll lock to card
								elCard.hasClass( 'card-action-fullscreen') ? jQuery( elCard ).scrollLock() : jQuery( elCard ).scrollLock( 'off' );

								// Update card action icon
								if ( btnFullscreen.length ) {
									if ( elCard.hasClass( 'card-action-fullscreen' ) ) {
										jQuery( 'i', btnFullscreen )
											.removeClass( $iconFullscreen )
											.addClass( $iconFullscreenActive );
									} else {
										jQuery( 'i', btnFullscreen )
											.removeClass( $iconFullscreenActive )
											.addClass( $iconFullscreen );
									}
								}
								break;

							// Card fullscreen ON
							case 'fullscreen_on' :
								elCard.addClass( 'card-action-fullscreen' );

								// Enable scroll lock to card
								jQuery( elCard ).scrollLock();

								// Update card action icon
								if ( btnFullscreen.length ) {
									jQuery( 'i', btnFullscreen )
										.removeClass( $iconFullscreen )
										.addClass( $iconFullscreenActive );
								}
								break;

							// Card fullscreen OFF
							case 'fullscreen_off':
								elCard.removeClass( 'card-action-fullscreen' );

								// Disable scroll lock to card
								jQuery( elCard ).scrollLock( 'off' );

								// Update card action icon
								if ( btnFullscreen.length ) {
									jQuery( 'i', btnFullscreen )
										.removeClass( $iconFullscreenActive )
										.addClass( $iconFullscreen );
								}
								break;

							// Card content TOGGLE
							case 'content_toggle' :
								elCard.toggleClass( 'card-action-hidden' );

								// Update card action icon
								if ( btnToggle.length ) {
									if ( elCard.hasClass( 'card-action-hidden' ) ) {
										jQuery( 'i', btnToggle )
											.removeClass( $iconContent )
											.addClass( $iconContentActive );
									} else {
										jQuery( 'i', btnToggle )
											.removeClass( $iconContentActive )
											.addClass( $iconContent );
									}
								}
								break;

							// Card content HIDE
							case 'content_hide' :
								elCard.addClass( 'card-action-hidden' );

								// Update card action icon
								if ( btnToggle.length ) {
									jQuery( 'i', btnToggle )
										.removeClass( $iconContent )
										.addClass( $iconContentActive );
								}
								break;

							// Card content SHOW
							case 'content_show' :
								elCard.removeClass( 'card-action-hidden' );

								// Update card action icon
								if ( btnToggle.length ) {
									jQuery( 'i', btnToggle )
										.removeClass( $iconContentActive )
										.addClass( $iconContent );
								}
								break;

							// Card state (refresh/normal) TOGGLE
							case 'refresh_toggle' :
								elCard.toggleClass( 'card-action-refresh' );

								// Return card to normal state if the demostration mode is on in the refresh option button - data-action-mode="demo"
								if ( jQuery( '[data-js-card-action][data-action="refresh_toggle"][data-action-mode="demo"]', elCard ).length ) {
									setTimeout( function() {
										elCard.removeClass( 'card-action-refresh' );
									}, 2000 );
								}
								break;

							// Card state LOADING
							case 'state_loading' :
								elCard.addClass( 'card-action-refresh' );
								break;

							// Card state NORMAL
							case 'state_normal' :
								elCard.removeClass( 'card-action-refresh' );
								break;

							// Card CLOSE
							case 'close' :
								elCard.hide();
								break;

							// Card OPEN
							case 'open' :
								elCard.show();
								break;
							default:
								return false;
						}
					}
				}
			}
		};
	});
