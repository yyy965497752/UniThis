/**
 * AppUI - Admin & Frontend Template
 * Copyright 2016 © rustheme
 * Document: config.router.js
 * Description: Router configuration
 * Here you can define your app's states
 * as well as lazy loaded scripts.
 */
 
(function() {
	'use strict';

	angular
		.module( 'app' )
		.config( routerConfig );

	/** @ngInject */
	function routerConfig( $stateProvider, $urlRouterProvider ) {
		$urlRouterProvider.otherwise( '/dashboard' );
		$stateProvider

		/**
		 * Apps
		 */
		.state( 'dashboard', {
			url: '/dashboard',
			templateUrl: 'app/views/apps/dashboard/dashboard.html',
			title: 'Dashboard',
			controller: 'AppDashboardCtrl',
			resolve: {
				deps: ['$ocLazyLoad', function( $ocLazyLoad ) {
					return $ocLazyLoad.load({
						serie: true,
						files: [
							'app/views/apps/dashboard/dashboard.ctrl.js',
							'vendor/Chart.js',
							'vendor/jquery.flot.js',
							'vendor/jquery.flot.pie.js',
							'vendor/jquery.flot.stack.js',
							'vendor/jquery.flot.resize.js',
						]
					});
				}]
			},
		})

		.state( 'calendar', {
			url: '/calendar',
			templateUrl: 'app/views/apps/calendar/calendar.html',
			title: 'Calendar',
			controller: 'AppCalendarCtrl',
			resolve: {
				deps: ['$ocLazyLoad', function( $ocLazyLoad ) {
					return $ocLazyLoad.load({
						// If component has css (fullcalendar.css in this case),
						// it should be placed before core app's css (#css-app) file
						// for proper style rendering
						insertBefore: '#css-app',
						serie: true,
						files: [
							'app/views/apps/calendar/calendar.ctrl.js',
							'vendor/jquery-ui.js',
							'vendor/moment.js',
							'vendor/fullcalendar.css',
							'vendor/fullcalendar.js',
							'vendor/gcal.js',
						]
					});
				}]
			},
		})

		/**
		 * Components
		 */
		// UI Elements
		.state( 'uiCards', {
			url: '/ui/cards',
			title: 'Cards API',
			templateUrl: 'app/views/components/ui/cards/cards.html',
		})

		.state( 'uiAlerts', {
			url: '/ui/alerts',
			title: 'Alerts',
			templateUrl: 'app/views/components/ui/alerts/alerts.html',
			controller: 'UiAlertsCtrl',
			resolve: {
				deps: ['$ocLazyLoad', function( $ocLazyLoad ) {
					return $ocLazyLoad.load({
						insertBefore: '#css-app',
						serie: true,
						files: [
							'app/views/components/ui/alerts/alerts.ctrl.js',
							'app/directives/js-notify.js',
							'vendor/sweetalert.css',
							'vendor/sweetalert.min.js',
							'vendor/bootstrap-notify.js',
						]
					});
				}]
			}
		})

		.state( 'uiTabs', {
			url: '/ui/tabs',
			templateUrl: 'app/views/components/ui/tabs/tabs.html',
			title: 'Tabs',
			resolve: {
				deps: ['$ocLazyLoad', function( $ocLazyLoad ) {
					return $ocLazyLoad.load({
						insertBefore: '#css-app',
						serie: true,
						files: [
							'app/directives/js-tabs.js',
						]
					});
				}]
			}
		})

		.state( 'uiModalsTooltips', {
			url: '/ui/modals-tooltips',
			templateUrl: 'app/views/components/ui/modals_tooltips/modals_tooltips.html',
			title: 'Modals & Tooltips'
		})

		.state( 'uiCardsDraggable', {
			url: '/ui/cards-draggable',
			templateUrl: 'app/views/components/ui/cards_draggable/cards_draggable.html',
			title: 'Draggable items',
			resolve: {
				deps: ['$ocLazyLoad', function( $ocLazyLoad ) {
					return $ocLazyLoad.load({
						insertBefore: '#css-app',
						serie: true,
						files: [
							'app/directives/js-draggable.js',
							'vendor/jquery-ui.js'
						]
					});
				}]
			}
		})

		.state( 'uiScrolling', {
			url: '/ui/scrolling',
			templateUrl: 'app/views/components/ui/scrolling/scrolling.html',
			title: 'Scrolling'
		})

		.state( 'uiSyntaxHighlight', {
			url: '/ui/syntax-highlight',
			templateUrl: 'app/views/components/ui/syntax_highlight/syntax_highlight.html',
			title: 'Syntax Highlight',
			controller: 'UiSyntaxHighlightingCtrl',
			resolve: {
				deps: ['$ocLazyLoad', function( $ocLazyLoad ) {
					return $ocLazyLoad.load({
						insertBefore: '#css-app',
						serie: true,
						files: [
							'app/views/components/ui/syntax_highlight/syntax_highlight.ctrl.js',
							'vendor/default.css',
							'vendor/highlight.pack.js'
						]
					});
				}]
			}
		})

		// Tables
		.state( 'tablesTools', {
			url: '/tables/tools',
			templateUrl: 'app/views/components/tables/tools/tools.html',
			title: 'Tables Tools',
			resolve: {
				deps: ['$ocLazyLoad', function( $ocLazyLoad ) {
					return $ocLazyLoad.load({
						insertBefore: '#css-app',
						serie: true,
						files: [
							'app/directives/ui-table-checkable.js',
							'app/directives/ui-table-sections.js',
						]
					});
				}]
			}
		})
		.state( 'tablesDatatables', {
			url: '/tables/datatables',
			templateUrl: 'app/views/components/tables/datatables/datatables.html',
			title: 'Datatables',
			controller: 'TablesDatatablesCtrl',
			resolve: {
				deps: ['$ocLazyLoad', function( $ocLazyLoad ) {
					return $ocLazyLoad.load({
						insertBefore: '#css-app',
						serie: true,
						files: [
							'app/views/components/tables/datatables/datatables.ctrl.js',
							'vendor/jquery.dataTables.js',
							'vendor/jquery.dataTables.css',
						]
					});
				}]
			}
		})

		// Forms
		.state( 'formsPickersSelect', {
			url: '/forms/pickers-select',
			templateUrl: 'app/views/components/forms/pickers_select/pickers_select.html',
			title: 'Pickers & Select',
			controller: 'FormsPickersSelectCtrl',
			resolve: {
				deps: ['$ocLazyLoad', function( $ocLazyLoad ) {
					return $ocLazyLoad.load({
						insertBefore: '#css-app',
						serie: true,
						files: [
							'app/views/components/forms/pickers_select/pickers_select.ctrl.js',
							'app/directives/js-colorpicker.js',
							'app/directives/js-datepicker.js',
							'app/directives/js-datetimepicker.js',
							'app/directives/js-dropzone.js',
							'app/directives/js-masked-input.js',
							'app/directives/js-select2.js',
							'app/directives/js-tags-input.js',
							// Moment.js chould be loaded before bootstrap-datetimepicker
							'vendor/moment.js',
							'vendor/bootstrap-colorpicker.css',
							'vendor/bootstrap-colorpicker.js',
							'vendor/bootstrap-datepicker3.css',
							'vendor/bootstrap-datepicker.min.js',
							'vendor/bootstrap-datetimepicker.min.css',
							'vendor/bootstrap-datetimepicker.min.js',
							'vendor/bootstrap-maxlength.js',
							'vendor/dropzone.min.css',
							'vendor/dropzone.min.js',
							'vendor/jquery.auto-complete.css',
							'vendor/jquery.auto-complete.js',
							'vendor/jquery.maskedinput.js',
							'vendor/jquery.tagsinput.css',
							'vendor/jquery.tagsinput.js',
							'vendor/select2.css',
							'vendor/select2.full.js',
						]
					});
				}]
			}
		})

		.state( 'formsValidation', {
			url: '/forms/validation',
			templateUrl: 'app/views/components/forms/validation/validation.html',
			title: 'Forms Validation',
			controller: 'FormsValidationCtrl',
			resolve: {
				deps: ['$ocLazyLoad', function( $ocLazyLoad ) {
					return $ocLazyLoad.load({
						insertBefore: '#css-app',
						serie: true,
						files: [
							'app/views/components/forms/validation/validation.ctrl.js',
							'app/directives/js-select2.js',
							'vendor/jquery.validate.js',
							'vendor/select2.css',
							'vendor/select2.full.js',
						]
					});
				}]
			}
		})

		.state( 'formsWizard', {
			url: '/forms/wizard',
			templateUrl: 'app/views/components/forms/wizard/wizard.html',
			title: 'Forms Wizard',
			controller: 'FormsWizardCtrl',
			resolve: {
				deps: ['$ocLazyLoad', function( $ocLazyLoad ) {
					return $ocLazyLoad.load({
						insertBefore: '#css-app',
						serie: true,
						files: [
							'app/views/components/forms/wizard/wizard.ctrl.js',
							'app/directives/js-tabs.js',
							'vendor/jquery.bootstrap.wizard.min.js',
							'vendor/jquery.validate.js',
						]
					});
				}]
			}
		})

		// Maps
		.state( 'mapsGoogle', {
			url: '/maps/google',
			templateUrl: 'app/views/components/maps/maps/maps.html',
			title: 'Google Maps',
			controller: 'MapsGoogleCtrl',
			resolve: {
				deps: ['$ocLazyLoad', function( $ocLazyLoad ) {
					return $ocLazyLoad.load({
						insertBefore: '#css-app',
						serie: true,
						files: [
							{ type: 'js', path: 'http://maps.google.com/maps/api/js' },
							'app/views/components/maps/maps/maps.ctrl.js',
							'vendor/gmaps.js',
						]
					});
				}]
			}
		})

		.state( 'mapsGoogleFull', {
			url: '/maps/google-full',
			templateUrl: 'app/views/components/maps/full/full.html',
			title: 'Fullsize Map',
			controller: 'MapsGoogleFullCtrl',
			resolve: {
				deps: ['$ocLazyLoad', function( $ocLazyLoad ) {
					return $ocLazyLoad.load({
						insertBefore: '#css-app',
						serie: true,
						files: [
							{ type: 'js', path: 'http://maps.google.com/maps/api/js' },
							'app/views/components/maps/full/full.ctrl.js',
							'vendor/gmaps.js',
						]
					});
				}]
			}
		})

		// Charts
		.state( 'charts', {
			url: '/charts',
			templateUrl: 'app/views/components/charts/charts.html',
			title: 'Charts',
			controller: 'ChartsCtrl',
			resolve: {
				deps: ['$ocLazyLoad', function( $ocLazyLoad ) {
					return $ocLazyLoad.load({
						insertBefore: '#css-app',
						serie: true,
						files: [
							'app/views/components/charts/charts.ctrl.js',
							'vendor/Chart.js',
							'vendor/jquery.flot.js',
							'vendor/jquery.flot.pie.js',
							'vendor/jquery.flot.resize.js',
							'vendor/jquery.flot.stack.js',
							'vendor/jquery.sparkline.js',
						]
					});
				}]
			}
		})

	}

})();
