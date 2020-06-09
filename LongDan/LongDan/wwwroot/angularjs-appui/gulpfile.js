/**
 * AppUI - Admin & Frontend Template
 * Copyright 2016 © rustheme
 * Document: gulpfile.js
 * Description: Gulp automated tasks ( http://gulpjs.com/ )
 */

// Dependencies
var	config						= require('./config'),
		path						= require('path'),
		util							= require('util'),
		gulp							= require('gulp'),
		bs							= require('browser-sync').create(),
		proxyMiddleware	= require('http-proxy-middleware'),
		_ 								= require('lodash'),
		bower						= require('main-bower-files'),
		cleanCss					= require('gulp-clean-css'),
		plugins					= require('gulp-load-plugins')({
											pattern: ['gulp-*', 'gulp.*', '*'],
											replaceString: /\bgulp[\-.]/
										});

// App version
var packageJson = require('./package.json');
var version = packageJson.version;

/**
 * Copy App files
 */
gulp.task('app:html', function(){
	return gulp.src(path.join(config.paths.src, '**/*.html'))
		.pipe(plugins.changed(config.paths.dist))
		.pipe(gulp.dest(config.paths.dist))
});

gulp.task('app:js', function(){
	return gulp.src(path.join(config.paths.src, '**/*.js'))
		.pipe(plugins.changed(config.paths.dist))
		.pipe(gulp.dest(config.paths.dist))
});

gulp.task('app:img', function(){
	return gulp.src(path.join(config.srcPaths.images, '**/*.{jpg,jpeg,bmp,png,gif,tiff,ico}'))
		.pipe(plugins.changed(config.distPaths.images))		
		.pipe(plugins.imagemin({
			progressive: true,
		}))
		.pipe(gulp.dest(config.distPaths.images))
});

gulp.task('app:json', function(){
	return gulp.src(path.join(config.paths.src, '**/*.json'))
		.pipe(plugins.changed(config.paths.dist))
		.pipe(gulp.dest(config.paths.dist))
});

/**
 * Copy Bower dependencies
 */
gulp.task('bower:js', function(){
	return gulp.src(bower('**/*.js'))
		.pipe(plugins.changed(path.join(config.distPaths.vendor)))
		.pipe(plugins.uglify())
		.pipe(gulp.dest(path.join(config.distPaths.vendor)))
});

gulp.task('bower:css', function(){
	return gulp.src(bower('**/*.css'))
		.pipe(plugins.changed(path.join(config.distPaths.vendor)))
		.pipe(cleanCss())
		.pipe(gulp.dest(path.join(config.distPaths.vendor)))
});

gulp.task('bower:fonts', function(){
	return gulp.src([
			path.join(config.srcPaths.vendor, 'font-awesome/fonts/*.{eot,svg,ttf,woff,woff2}'),
			path.join(config.srcPaths.vendor, 'ionicons/fonts/*.{eot,svg,ttf,woff,woff2}'),
		])
		.pipe(plugins.changed(config.distPaths.fonts))		
		.pipe(gulp.dest(config.distPaths.fonts));
});

/**
 * Process App scripts
 */
function buildScripts(){
	return gulp.src(path.join(config.paths.src, '**/*.js'))
		.pipe(plugins.eslint())
		.pipe(plugins.eslint.format())
		.pipe(plugins.size())
};

gulp.task('app:scripts-reload', function(){
	return buildScripts()
		.pipe(bs.stream());
});

gulp.task('app:scripts', function(){
	return buildScripts();
});

/**
 * Process App styles
 */
function buildStyles(){
	var sassOptions = {
		style: 'expanded',
		outputStyle: 'expanded',
		sourceComments: false,
		indentType: 'tab',
		indentWidth: 1,
		includePaths: [
			path.join(config.srcPaths.vendor, 'bootstrap-sass/assets/stylesheets')
		],
	};

	var injectFiles = gulp.src([
		// Order of injected files is important!
		path.join(config.srcPaths.vendor, 'bootstrap-sass/assets/stylesheets/bootstrap/_variables.scss'),
		path.join(config.srcPaths.vendor, 'bootstrap-sass/assets/stylesheets/bootstrap/_mixins.scss'),
		path.join(config.srcPaths.styles, 'bootstrap.scss'),
		path.join(config.srcPaths.vendor, 'font-awesome/scss/font-awesome.scss'),
		path.join(config.srcPaths.vendor, 'ionicons/scss/ionicons.scss'),
	], { read: false });

	var injectOptions = {
		transform: function(filePath){
			filePath = filePath.replace(config.srcPaths.styles + 'app/', '');
			return '@import "' + filePath + '";';
		},
		starttag: '// inject:scss',
		endtag: '// endinject',
		addRootSlash: false
	};
	return gulp.src([
		path.join(config.srcPaths.styles, 'app.scss'),
	])
		.pipe(plugins.inject(injectFiles, injectOptions))
		.pipe(plugins.sourcemaps.init())
		.pipe(plugins.sass(sassOptions).on('error', plugins.sass.logError))
		.pipe(plugins.sourcemaps.write('maps'))
		.pipe(gulp.dest(config.distPaths.styles));
};

gulp.task('app:styles-reload', ['app:styles'], function(){
	return buildStyles()
		.pipe(bs.stream());
});

gulp.task('app:styles', function(){
	return buildStyles();
});

/**
 * Watch for changes
 */
function isOnlyChange(event){
	return event.type === 'changed';
}

gulp.task('watch', ['app:html', 'app:js', 'app:json', 'app:img', 'bower:js', 'bower:css', 'bower:fonts', 'app:scripts', 'app:styles'], function(){
	// HTML changes
	gulp.watch(path.join(config.paths.src, '**/*.html'), ['app:html', 'bs-reload']);

	// JS changes
	gulp.watch(
		path.join(config.paths.src, '**/*.js'),
		function(event){
			if (isOnlyChange(event)) {
				gulp.start('app:js');
				gulp.start('app:scripts-reload');
			} else {
				gulp.start('bs-reload');
			}
		}
	);

	// SCSS changes
	gulp.watch(
		path.join(config.srcPaths.styles, '**/*.scss'),
		function(event){
			if (isOnlyChange(event)) {
				gulp.start('app:styles-reload');
			} else {
				gulp.start('bs-reload');
			}
		}
	);
});

/**
 * Browsersync http://www.browsersync.io/docs/
 */
function bsInit(baseDir, browser){
	browser = browser === undefined ? 'default' : browser;

	var routes = null;
	var server = {
		baseDir: baseDir,
		routes: routes
	};

	/*
	* You can add a proxy to your backend by uncommenting the line below.
	* You just have to configure a context which will we redirected and the target url.
	* Example: $http.get('/users') requests will be automatically proxified.
	*
	* For more details and option, https://github.com/chimurai/http-proxy-middleware/blob/v0.9.0/README.md
	*/
	// server.middleware = proxyMiddleware('/users', {target: 'http://jsonplaceholder.typicode.com', changeOrigin: true});

	bs.init({
		startPath: '/',
		server: server,
		browser: browser
	});
}

gulp.task('serve', ['watch'], function(){
	bsInit([config.paths.dist, config.paths.src]);
});

// Reload browser
gulp.task('bs-reload', function(){
	bs.reload();
});

// Default task
gulp.task('default', function(){
	gulp.start('serve');
});
