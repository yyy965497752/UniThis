/**
 * App Dashboard Controller
 */

'use strict';

angular.module( 'app' )
.controller( 'AppDashboardCtrl', ['$scope', '$localStorage', '$window', 'uiHelpers',
	function( $scope, $localStorage, $window, uiHelpers ) {

		/**
		 * Init Chart.js Chart, for more examples please check out http://www.chartjs.org/docs
		 */
		// Set global Chartjs options
		var chartjsOptions = {
			showScale: false,
			tooltipCornerRadius: 2,
			maintainAspectRatio: false,
			responsive: true,
			animation: false,
			pointDotStrokeWidth: 2,
		};


		// Company overview chart
		var companyOverviewData = {
			labels: ['2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014'],
			datasets: [
				{
					label: 'This Week',
					fillColor: 'rgba(255, 255, 255, .1)',
					strokeColor: 'rgba(255, 255, 255, .38)',
					pointColor: $scope.app.colors.info,
					pointStrokeColor: '#fff',
					data: [20, 40, 24, 75, 16, 42, 20, 42, 40, 65, 48, 56, 80, 95]
				}
			]
		};

		var ctx = jQuery( '#card-company-overview .js-chartjs-lines' )[0].getContext( '2d' );
		var myNewChart = new Chart( ctx ).Line( companyOverviewData, chartjsOptions );


		// Weekly transactions chart
		var weeklyTransactionsData = {
			labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
			datasets: [
				{
					label: 'This Week',
					fillColor: uiHelpers.hexToRgba( $scope.app.colors.info, .2 ),
					strokeColor: uiHelpers.hexToRgba( $scope.app.colors.info, .2 ),
					pointColor: '#fff',
					pointStrokeColor: uiHelpers.hexToRgba( $scope.app.colors.info, .7 ),
					data: [20, 25, 40, 30, 55, 60, 80]
				}
			]
		};
		var ctx = jQuery( '#card-weekly-transactions .js-chartjs-lines' )[0].getContext( '2d' );
		var myNewChart = new Chart( ctx ).Line( weeklyTransactionsData, chartjsOptions );


		// Weekly users chart
		var weeklyUsersData = {
			labels: ['20', '40', '60', '80', '100', '120', '140'],
			datasets: [
				{
					label: 'This Week',
					fillColor: uiHelpers.hexToRgba( $scope.app.colors.info, .5 ),
					pointColor: $scope.app.colors.info,
					data: [2500, 1500, 1200, 3200, 4800, 3500, 1500]
				}
			]
		};
		var weeklyUsersOptions = {
			scaleBeginAtZero: false,
			scaleShowVerticalLines: false,
			barShowStroke: false,
			scaleFontFamily: "'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif",
			scaleFontColor: $scope.app.colors.text_muted,
			tooltipTitleFontFamily: "'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif",
			tooltipCornerRadius: 2,
			maintainAspectRatio: false,
			responsive: true,
			animation: false,
		};
		var ctx = jQuery( '#card-weekly-users .js-chartjs-bars' )[0].getContext( '2d' );
		var myNewChart = new Chart( ctx ).Bar( weeklyUsersData, weeklyUsersOptions );


		// Transactions history chart
		var transactionsHistoryData = {
			labels: ['2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014'],
			datasets: [
				{
					label: 'This Week',
					strokeColor: $scope.app.colors.info,
					pointColor: '#fff',
					pointStrokeColor: $scope.app.colors.info,
					data: [20, 25, 40, 30, 45, 40, 55, 40, 48, 40, 42, 50]
				}
			]
		};
		var transactionsHistoryOptions = {
			scaleShowHorizontalLines: false,
			bezierCurve: false,
			datasetFill: false,
			pointDotStrokeWidth: 2,
			scaleFontFamily: "'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif",
			scaleFontColor: $scope.app.colors.text_muted,
			scaleFontStyle: '500',
			tooltipTitleFontFamily: "'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif",
			tooltipCornerRadius: 2,
			maintainAspectRatio: false,
			responsive: true,
			animation: false,
		};
		var ctx = jQuery( '#card-transactions-history .js-chartjs-lines' )[0].getContext( '2d' );
		var myNewChart = new Chart( ctx ).Line( transactionsHistoryData, transactionsHistoryOptions );


		// Yearly summary charts
		var yearlySummaryOptions = {
			pointDot: false,
			showScale: false,
			maintainAspectRatio: false,
			responsive: true,
			animation: false
		};

		// First chart
		var yearlySummaryData1 = {
			labels: ['2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016'],
			datasets: [
				{
					fillColor: uiHelpers.hexToRgba( $scope.app.colors.primary, .3 ),
					strokeColor: $scope.app.colors.primary,
					pointColor: '#fff',
					pointStrokeColor: $scope.app.colors.primary,
					pointStrokeWidth: 0,
					data: [50, 45, 52, 35, 45, 64, 50, 47, 45, 53]
				}
			]
		};
		var ctx = jQuery( '#card-yearly-summary .js-chartjs-lines' )[0].getContext( '2d' );
		var myNewChart = new Chart( ctx ).Line( yearlySummaryData1, yearlySummaryOptions );

		// Second chart
		var yearlySummaryData2 = {
			labels: ['2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016'],
			datasets: [
				{
					fillColor: uiHelpers.hexToRgba( $scope.app.colors.info, .3 ),
					strokeColor: $scope.app.colors.info,
					pointColor: '#fff',
					pointDot: false,
					pointStrokeColor: $scope.app.colors.info,
					data: [30, 35, 42, 35, 60, 38, 50, 40, 48, 48]
				}
			]
		};
		var ctx = jQuery( '#card-yearly-summary .js-chartjs-lines' )[1].getContext( '2d' );
		var myNewChart = new Chart( ctx ).Line( yearlySummaryData2, yearlySummaryOptions );

		// Third chart
		var yearlySummaryData3 = {
			labels: ['2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016'],
			datasets: [
				{
					fillColor: uiHelpers.hexToRgba( $scope.app.colors.tertiary, .3 ),
					strokeColor: $scope.app.colors.tertiary,
					pointColor: '#fff',
					pointDot: false,
					pointStrokeColor: $scope.app.colors.tertiary,
					data: [60, 55, 52, 38, 62, 40, 50, 46, 50, 54]
				}
			]
		};
		var ctx = jQuery( '#card-yearly-summary .js-chartjs-lines' )[2].getContext( '2d' );
		var myNewChart = new Chart( ctx ).Line( yearlySummaryData3, yearlySummaryOptions );


		// Server load chart
		var flotContainer = jQuery( '.js-flot-live' );
		var dataLive = [];

		// Generate random data
		function getRandomData() {

			if ( dataLive.length > 0 )
				dataLive = dataLive.slice( 1 );

			while ( dataLive.length < 300 ) {
				var prev = dataLive.length > 0 ? dataLive[dataLive.length - 1] : 50;
				var y = prev + Math.random() * 10 - 5;
				if ( y < 0 )
					y = 0;
				if ( y > 100 )
					y = 100;
				dataLive.push( y );
			}

			var res = [];
			for ( var i = 0; i < dataLive.length; ++i )
				res.push([i, dataLive[i]]);

			// Show live chart info
			jQuery( '.js-flot-live-info' ).html( y.toFixed( 0 ) + '%' );

			return res;
		}

		// Update live chart
		function updateChartLive() {
			chartLive.setData( [getRandomData()] );
			chartLive.draw();
			setTimeout( updateChartLive, 70 );
		}

		// Init live chart
		var chartLive = jQuery.plot( flotContainer,
			[{
				data: getRandomData()
			}], {
				series: {
					shadowSize: 0
				},
				lines: {
					show: true,
					lineWidth: 1,
					fill: true,
					fillColor: {
						colors: [{
							opacity: .2
						}, {
							opacity: .2
						}]
					}
				},
				colors: ['#fff'],
				grid: {
					borderWidth: 0,
					color: $scope.app.colors.gray_lighter,
				},
				yaxis: {
					show: false,
					min: 0,
					max: 110
				},
				xaxis: {
					show: false
				}
			}
		);

		// Start getting new data
		updateChartLive();
	}
]);
