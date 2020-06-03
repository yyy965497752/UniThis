/**
 * AppUI - Admin & Frontend Template
 * Copyright 2016 © rustheme
 * Document: app.js
 * Description: Declare app module with dependencies
 */

(function() {
	'use strict';

	angular
		.module( 'app', [
			'ngCookies',
			'ngStorage',
			'ui.router',
			'ui.bootstrap',
			'oc.lazyLoad',
			'cfp.loadingBar',
			'pascalprecht.translate',
		]);

})();
