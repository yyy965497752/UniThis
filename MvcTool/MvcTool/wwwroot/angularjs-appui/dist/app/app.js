/**
 * AppUI - Admin & Frontend Template
 * Copyright 2016 © rustheme
 * Document: main.js
 * Description: Main app controller
 */

'use strict';

// Application Main Controller
angular
	.module( 'app' )
	.controller( 'AppCtrl', ['$rootScope', '$scope', '$state', '$localStorage', '$window', '$translate', 'cfpLoadingBar',
		function( $rootScope, $scope, $state, $localStorage, $window, $translate, cfpLoadingBar ) {
			// Template Settings
			$scope.app = {
				name: 'AppUI',
				version: '1.3', // Template version
				localStorage: true, // Enable/Disable local storage
				settings: {
					boxedCanvas: false,
					sidebarLeft: true, // true: Drawer shown (> 991px)
					sidebarOpen: false, // Toggles drawer (< 991px)
					headerFixed: true // Enables fixed header
				},
				// Colors for charts
				colors: {
					primary: '#7dc855',
					success: '#53bbb3',
					info: '#358ed7',
					warning: '#ffbe0b',
					danger: '#f6511d',
					tertiary: '#838cc7',
					text_muted: '#86939e',
				}
			};

			// If local storage setting is enabled
			if ( $scope.app.localStorage ) {
				// Save/Restore local storage settings
				if ( $scope.app.localStorage ) {
					if ( angular.isDefined( $localStorage.appSettings ) ) {
						$scope.app.settings = $localStorage.appSettings;
					} else {
						$localStorage.appSettings = $scope.app.settings;
					}
				}

				// Watch for settings changes
				$scope.$watch( 'app.settings', function() {
					// If settings are changed then save them to localstorage
					$localStorage.appSettings = $scope.app.settings;
				}, true );
			}

			// Angular translate
			$scope.lang = { isopen: false };
			$scope.langs = {
				en: 'English',
				ru: 'Русский',
			};
			$scope.selectLang = $scope.langs[$translate.proposedLanguage()] || "English";
			$scope.setLang = function( langKey, $event ) {
				// set the current lang
				$scope.selectLang = $scope.langs[langKey];
				// You can change the language during runtime
				$translate.use( langKey );
				$scope.lang.isopen = ! $scope.lang.isopen;
			};

			// Loading bar
			$rootScope.$on( '$stateChangeStart', function( event, toState, toParams, fromState, fromParams ) {
				//start loading bar on stateChangeStart
				cfpLoadingBar.start();
			});

			$rootScope.$on( '$stateChangeSuccess', function( event, toState, toParams, fromState, fromParams ) {
				//stop loading bar on stateChangeSuccess
				event.targetScope.$watch( '$viewContentLoaded', function( ) {
					cfpLoadingBar.complete();
				});

				// Save the route title
				$rootScope.currTitle = $state.current.title;

				// Close drawer
				$scope.app.settings.sidebarOpen = false;
			});

			// When view content is loaded
			$scope.$on('$viewContentLoaded', function() {
				// Resize #main-container
				$scope.helpers.uiHandleMain();
			});
		}
	]);


angular
	.module( 'app' )
	.run( ['$rootScope', 'uiHelpers', function( $rootScope, uiHelpers ) {
		// Access uiHelpers easily from all controllers
		$rootScope.helpers = uiHelpers;

		// On window resize or orientation change resize #main-container & Handle scrolling
		var resizeTimeout;

		jQuery( window ).on( 'resize orientationchange', function() {
			clearTimeout( resizeTimeout );

			resizeTimeout = setTimeout( function() {
				$rootScope.helpers.uiHandleScroll();
				$rootScope.helpers.uiHandleMain();
			}, 100);
		});
	}]);
