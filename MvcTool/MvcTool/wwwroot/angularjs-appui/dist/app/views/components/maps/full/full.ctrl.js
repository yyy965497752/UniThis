// Components Maps Google Full Controller
angular.module( 'app' )
.controller( 'MapsGoogleFullCtrl', ['$scope', '$localStorage', '$window',
	function( $scope, $localStorage, $window ) {
		// Gmaps.js, for more examples please check out https://hpneo.github.io/gmaps/

		// Init Full Map
		var initMapFull = function() {
			var	mainCon	= jQuery( '#main-container' ),
					mlat		= 37.7577,
					mlong		= -122.4376,
					rTimeout;

			// Set #main-container position to be relative
			mainCon.css( 'position', 'relative' );

			// Adjust map container position
			jQuery( '#js-map-full' ).css({
				'position': 'absolute',
				'top': mainCon.css( 'padding-top'),
				'right': '0',
				'bottom': '0',
				'left': '0',
				'height': '100%'
			});

			// Init map itself
			var mapFull = new GMaps({
				div: '#js-map-full',
				lat: mlat,
				lng: mlong,
				zoom: 11,
				scrollwheel: false,
			});

			// Set map type
			mapFull.setMapTypeId(google.maps.MapTypeId.TERRAIN);

			// Resize and center the map on browser window resize
			jQuery( window ).on( 'resize orientationchange', function() {
				clearTimeout( rTimeout );

				rTimeout = setTimeout( function() {
					mapFull.refresh();
					mapFull.setCenter( mlat, mlong );
				}, 150);
			});

			// Trigger a resize to refresh the map (helps for proper rendering because we dynamically change the height of map's container)
			jQuery( window ).resize( );
		};

		// Init Full Map
		initMapFull();
	}
]);
