!function(t,e){"function"==typeof define&&define.amd?define([],function(){return e()}):"object"==typeof exports?module.exports=e():e()}(this,function(){function t(t,e){"use strict";var a=function(){var e;return{get:function(a){return e||(e=t.localStorage.getItem(a)),e},set:function(a,o){e=o,t.localStorage.setItem(a,o)},put:function(a,o){e=o,t.localStorage.setItem(a,o)}}}(),o="localStorage"in t;if(o){var r="pascalprecht.translate.storageTest";try{null!==t.localStorage?(t.localStorage.setItem(r,"foo"),t.localStorage.removeItem(r),o=!0):o=!1}catch(n){o=!1}}var c=o?a:e;return c}return t.$inject=["$window","$translateCookieStorage"],angular.module("pascalprecht.translate").factory("$translateLocalStorage",t),t.displayName="$translateLocalStorageFactory","pascalprecht.translate"});