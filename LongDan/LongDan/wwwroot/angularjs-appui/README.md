# AppUI - AngularJS version

## Intro

AngularJS version uses the same CSS files as [HTML version](https://rustheme.xyz/appui/html), so any markup from the sample pages of HTML can be used in AngularJS. All ready pages which are not presented in AngularJS will look the same as HTML, so no worries.

## Overview

Within `ng1/` root folder you'll find the following directories and files, providing distribution ready (`dist/`) files, as well as raw source files (`src/`).

```
ng1/
  |-- dist/
      |-- app/
      |-- assets/
	      |-- css/
	      |-- fonts/
	      |-- img/
      |-- i18n/
      |-- index.html
  |-- src/
      |-- app/
      |-- i18n/
      |-- img/
      |-- scss/
      |-- index.html
  |-- bower.json
  |-- config.js
  |-- gulpfile.js
  |-- package.json
  |-- README.md
```

## Installation

It's assumed you have Node.js & NPM installed on your computer. So, open up your terminal / command line and go to the root folder of project (this is where gulpfile.js and package.json are placed):

```
cd ~/projects/ng1/
```

Run `npm install` command which will install required node modules and bower components:

```
npm install
```

If there will no errors, `node_modules/` and `bower_components/` folders will appear in root of your project. Now you're ready to work with template.

```
ng1/
  |-- bower_components/
  |-- node_modules/
  |-- dist/
  |-- src/
  |-- bower.json
  |-- config.js
  |-- gulpfile.js
  |-- package.json
  |-- README.md
```

## Usage

To run virtual server and watch changes, run:

```
gulp
```

This will create / overwrite files in `dist/` folder, and will open your browser on localhost:3000 where app is virtually hosted. Browser will be reloaded on changes in html / js / scss files. Note that scss files (`src/scss/`) will be rendered into css (`dist/app/assets/css/`), images (`src/img/') to (`dist/app/assets/img/`).

### Creating pages

AppUI uses Angular UI router for navigation. That means to create new page you need to basically configure ui-router state.
Router states are configured in `src/app/app.route.js`, every state can optionally lazyload sources:

```
/* app.route.js */

(function() {
	'use strict';

	angular
		.module( 'app' )
		.config( routerConfig );

	/** @ngInject */
	function routerConfig( $stateProvider, $urlRouterProvider ) {
		$urlRouterProvider.otherwise( '/dashboard' );
		$stateProvider

		...
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
```

Then, you should add drawer nav element in `src/app/layout/drawer/drawer.html`:

```
/* drawer.html */
...
	<!-- Drawer navigation -->
	<nav class="drawer-main">
		<!-- Main navigation functionality (data-js-main-nav attribute is initialized in js/directives.js) -->
		<ul class="nav nav-drawer" data-ui-nav-drawer>
			<li class="nav-drawer-header" translate="drawer.nav.apps.APPS">Apps</li>
			<li data-ui-sref-active="active">
				<a data-ui-sref="dashboard">
					<i class="ion-ios-speedometer-outline"></i><span class="nav-drawer-label" translate="drawer.nav.apps.DASHBOARD">Dashboard</span>
				</a>
			</li>
...
```
