/**
 * This file contains the variables used in gulp.js file
 * These variables can help you configure
 * your project's folders in the way you like
 */
 
var gutil = require('gulp-util');

/**
 * The core paths of your project
 */
exports.paths = {
	src: 'src/', // source, raw files to work with
	dist: 'dist/', // build, production- & deploy-ready files
};

/**
 * Source paths of your project
 */
 exports.srcPaths = {
	styles: exports.paths.src + 'scss/',
	images: exports.paths.src + 'img/',
	fonts: 'bower_components/',
	lang: exports.paths.src + 'i18n/',
	data: exports.paths.src + 'data',
	vendor: 'bower_components/',
 };
 
 /**
  * Production-ready paths of your project
  */
 exports.distPaths = {
	styles: exports.paths.dist + 'assets/css/',
	images: exports.paths.dist + 'assets/img/',
	fonts: exports.paths.dist + 'assets/fonts/',
	lang: exports.paths.dist + 'i18n/',
	vendor: exports.paths.dist + 'vendor/',
 };

/**
 * Common implementation for an error handler of a Gulp plugin
 */
exports.errorHandler = function(title) {
	'use strict';

	return function(err) {
		gutil.log(gutil.colors.red( '[' + title + ']' ), err.toString());
		this.emit('end');
	};
};
