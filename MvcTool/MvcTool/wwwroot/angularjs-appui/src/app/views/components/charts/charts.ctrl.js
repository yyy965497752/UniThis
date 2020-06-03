// Components Charts Controller
angular
	.module( 'app' )
	.controller( 'ChartsCtrl', ['$scope', '$localStorage', '$window', 'uiHelpers',
		function( $scope, $localStorage, $window, uiHelpers ) {
			// Chart.js Charts, for more examples please check out http://www.chartjs.org/docs
			var initChartsChartJS = function() {
				// Get Chart Containers
				var	chartLinesCon	= jQuery( '.js-chartjs-lines' )[0].getContext( '2d' ),
						chartBarsCon		= jQuery( '.js-chartjs-bars' )[0].getContext( '2d' ),
						chartRadarCon	= jQuery( '.js-chartjs-radar' )[0].getContext( '2d' );

				// Set Chart and Chart Data variables
				var chartLines, chartBars, chartRadar;
				var chartLinesBarsRadarData;

				// Set global chart options
				var globalOptions = {
					scaleFontFamily: "Roboto, 'Helvetica Neue', Helvetica, Arial, sans-serif",
					scaleFontColor: '#999',
					scaleFontStyle: '500',
					tooltipTitleFontFamily: "Roboto, 'Helvetica Neue', Helvetica, Arial, sans-serif",
					tooltipCornerRadius: 3,
					maintainAspectRatio: false,
					responsive: true
				};

				// Lines/Bar/Radar Chart Data
				var chartLinesBarsRadarData = {
					labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
					datasets: [
						{
							label: 'Last Week',
							fillColor: uiHelpers.hexToRgba( $scope.app.colors.success, .7 ),
							strokeColor: uiHelpers.hexToRgba( $scope.app.colors.success, .7 ),
							pointColor: '#fff',
							pointStrokeColor: uiHelpers.hexToRgba( $scope.app.colors.success, .7 ),
							pointHighlightFill: '#fff',
							pointHighlightStroke: uiHelpers.hexToRgba( $scope.app.colors.success, .9 ),
							data: [30, 16, 36, 22, 42, 28, 55]
						},
						{
							label: 'This Week',
							fillColor: uiHelpers.hexToRgba( $scope.app.colors.warning, .3 ),
							strokeColor: uiHelpers.hexToRgba( $scope.app.colors.warning, .3 ),
							pointColor: '#fff',
							pointStrokeColor: uiHelpers.hexToRgba( $scope.app.colors.warning, .3 ),
							pointHighlightFill: '#fff',
							pointHighlightStroke: uiHelpers.hexToRgba( $scope.app.colors.warning, .7 ),
							data: [14, 28, 18, 32, 24, 40, 32]
						}
					]
				};

				// Init Charts
				chartLines = new Chart( chartLinesCon ).Line( chartLinesBarsRadarData, globalOptions );
				chartBars = new Chart( chartBarsCon ).Bar( chartLinesBarsRadarData, globalOptions );
				chartRadar = new Chart( chartRadarCon ).Radar( chartLinesBarsRadarData, globalOptions );
			};

			// jQuery Sparkline Charts, for more examples please check out http://omnipotent.net/jquery.sparkline/#s-docs
			var initChartsSparkline = function() {
				// Bar Charts
				var barOptions = {
					type: 'bar',
					barWidth: 8,
					barSpacing: 6,
					height: '70px',
					barColor: uiHelpers.hexToRgba( $scope.app.colors.primary, .7 ),
					tooltipPrefix: '',
					tooltipSuffix: ' Tickets',
					tooltipFormat: '{{prefix}}{{value}}{{suffix}}'
				};
				jQuery( '.js-slc-bar1' ).sparkline( 'html', barOptions );

				barOptions['barColor'] = uiHelpers.hexToRgba( $scope.app.colors.success, .7 );
				barOptions['tooltipPrefix'] = '$ ';
				barOptions['tooltipSuffix'] = '';
				jQuery( '.js-slc-bar2' ).sparkline( 'html', barOptions );

				barOptions['barColor']         = uiHelpers.hexToRgba( $scope.app.colors.warning, .3 );
				barOptions['tooltipPrefix']    = '';
				barOptions['tooltipSuffix']    = ' Sales';
				jQuery( '.js-slc-bar3' ).sparkline( 'html', barOptions );

				// Line Charts
				var lineOptions = {
					type: 'line',
					width: '120px',
					height: '70px',
					tooltipOffsetX: -25,
					tooltipOffsetY: 20,
					lineColor: uiHelpers.hexToRgba( $scope.app.colors.primary, .7 ),
					fillColor: uiHelpers.hexToRgba( $scope.app.colors.primary, .7 ),
					spotColor: '#777777',
					minSpotColor: '#777777',
					maxSpotColor: '#777777',
					highlightSpotColor: '#777777',
					highlightLineColor: '#777777',
					spotRadius: 2,
					tooltipPrefix: '',
					tooltipSuffix: ' Tickets',
					tooltipFormat: '{{prefix}}{{y}}{{suffix}}'
				};
				jQuery( '.js-slc-line1' ).sparkline( 'html', lineOptions );

				lineOptions['lineColor'] = uiHelpers.hexToRgba( $scope.app.colors.success, .7 );
				lineOptions['fillColor'] = uiHelpers.hexToRgba( $scope.app.colors.success, .7 );
				lineOptions['tooltipPrefix'] = '$ ';
				lineOptions['tooltipSuffix'] = '';
				jQuery( '.js-slc-line2' ).sparkline( 'html', lineOptions );

				lineOptions['lineColor'] = uiHelpers.hexToRgba( $scope.app.colors.warning, .3 );
				lineOptions['fillColor'] = uiHelpers.hexToRgba( $scope.app.colors.warning, .3 );
				lineOptions['tooltipPrefix'] = '';
				lineOptions['tooltipSuffix'] = ' Sales';
				jQuery( '.js-slc-line3' ).sparkline( 'html', lineOptions );

				// Pie Charts
				var pieCharts = {
					type: 'pie',
					width: '50px',
					height: '50px',
					sliceColors: [uiHelpers.hexToRgba( $scope.app.colors.primary, .9 ), uiHelpers.hexToRgba( $scope.app.colors.success, .9 ), uiHelpers.hexToRgba( $scope.app.colors.info, .9 ), uiHelpers.hexToRgba( $scope.app.colors.warning, .7 )],
					tooltipPrefix: '',
					tooltipSuffix: ' Tickets',
					tooltipFormat: '{{prefix}}{{value}}{{suffix}}'
				};
				jQuery( '.js-slc-pie1' ).sparkline( 'html', pieCharts );

				pieCharts['tooltipPrefix'] = '$ ';
				pieCharts['tooltipSuffix'] = '';
				jQuery( '.js-slc-pie2' ).sparkline( 'html', pieCharts );

				pieCharts['tooltipPrefix'] = '';
				pieCharts['tooltipSuffix'] = ' Sales';
				jQuery( '.js-slc-pie3' ).sparkline( 'html', pieCharts );

				// Tristate Charts
				var tristateOptions = {
					type: 'tristate',
					barWidth: 8,
					barSpacing: 6,
					height: '80px',
					posBarColor: uiHelpers.hexToRgba( $scope.app.colors.primary, .7 ),
					negBarColor: uiHelpers.hexToRgba( $scope.app.colors.info, .7 )
				};
				jQuery( '.js-slc-tristate1' ).sparkline( 'html', tristateOptions );
				jQuery( '.js-slc-tristate2' ).sparkline( 'html', tristateOptions );
				jQuery( '.js-slc-tristate3' ).sparkline( 'html', tristateOptions );
			};

			// Flot charts, for more examples please check out http://www.flotcharts.org/flot/examples/
			var initChartsFlot = function() {
				// Get the elements where we will attach the charts
				var	flotLines			= jQuery( '.js-flot-lines' ),
						flotStacked		= jQuery( '.js-flot-stacked' ),
						flotLive			= jQuery( '.js-flot-live' ),
						flotPie				= jQuery( '.js-flot-pie' ),
						flotBars			= jQuery( '.js-flot-bars' );

				// Demo Data
				var dataEarnings		= [[1, 2500], [2, 2300], [3, 3200], [4, 2500], [5, 4500], [6, 2800], [7, 3900], [8, 3100], [9, 4600], [10, 3200], [11, 4200], [12, 5700]];
				var dataSales				= [[1, 1100], [2, 700], [3, 1300], [4, 900], [5, 1900], [6, 950], [7, 1700], [8, 1250], [9, 1800], [10, 1300], [11, 1750], [12, 2900]];

				var dataSalesBefore	= [[1, 500], [4, 390], [7, 1000], [10, 600], [13, 800], [16, 1050], [19, 1200], [22, 750], [25, 980], [28, 900], [31, 1350], [34, 1200]];
				var dataSalesAfter		= [[2, 650], [5, 600], [8, 1400], [11, 900], [14, 1300], [17, 1200], [20, 1420], [23, 1650], [26, 1300], [29, 1120], [32, 1550], [35, 1650]];

				var dataMonths			= [[1, 'Jan'], [2, 'Feb'], [3, 'Mar'], [4, 'Apr'], [5, 'May'], [6, 'Jun'], [7, 'Jul'], [8, 'Aug'], [9, 'Sep'], [10, 'Oct'], [11, 'Nov'], [12, 'Dec']];
				var dataMonthsBars	= [[2, 'Jan'], [5, 'Feb'], [8, 'Mar'], [11, 'Apr'], [14, 'May'], [17, 'Jun'], [20, 'Jul'], [23, 'Aug'], [26, 'Sep'], [29, 'Oct'], [32, 'Nov'], [35, 'Dec']];

				// Init lines chart
				jQuery.plot( flotLines,
					[
						{
							label: 'Earnings',
							data: dataEarnings,
							lines: {
								show: true,
								fill: false,
							},
							points: {
								show: true,
								radius: 5
							}
						},
						{
							label: 'Sales',
							data: dataSales,
							lines: {
								show: true,
								fill: false,
							},
							points: {
								show: true,
								radius: 5
							}
						}
					],
					{
						colors: [uiHelpers.hexToRgba( $scope.app.colors.primary, 1 ), uiHelpers.hexToRgba( $scope.app.colors.info, 1 )],
						legend: {
							show: true,
							position: 'nw',
							backgroundOpacity: 0
						},
						grid: {
							borderWidth: 0,
							hoverable: true,
							clickable: true
						},
						yaxis: {
							tickColor: '#ffffff',
							ticks: 3
						},
						xaxis: {
							ticks: dataMonths,
							tickColor: '#f5f5f5'
						}
					}
				);

				// Creating and attaching a tooltip to the classic chart
				var previousPoint = null, ttlabel = null;
				flotLines.bind( 'plothover', function( event, pos, item ) {
					if (item ) {
						if (previousPoint !== item.dataIndex ) {
							previousPoint = item.dataIndex;

							jQuery( '.js-flot-tooltip' ).remove();
							var x = item.datapoint[0], y = item.datapoint[1];

							if (item.seriesIndex === 0 ) {
								ttlabel = '$ <strong>' + y + '</strong>';
							} else if (item.seriesIndex === 1 ) {
								ttlabel = '<strong>' + y + '</strong> sales';
							} else {
								ttlabel = '<strong>' + y + '</strong> tickets';
							}

							jQuery( '<div class="js-flot-tooltip flot-tooltip">' + ttlabel + '</div>' )
								.css( {top: item.pageY - 45, left: item.pageX + 5} ).appendTo( "body" ).show();
						}
					}
					else {
						jQuery( '.js-flot-tooltip' ).remove();
						previousPoint = null;
					}
				});

				// Stacked Chart
				jQuery.plot( flotStacked,
					[
						{
							label: 'Sales',
							data: dataSales
						},
						{
							label: 'Earnings',
							data: dataEarnings
						}
					],
					{
						colors: [uiHelpers.hexToRgba( $scope.app.colors.success, .7 ), uiHelpers.hexToRgba( $scope.app.colors.warning, .3 )],
						series: {
							stack: true,
							lines: {
								show: true,
								fill: true
							}
						},
						lines: {show: true,
							lineWidth: 0,
							fill: true,
							fillColor: {
								colors: [{opacity: 1}, {opacity: 1}]
							}
						},
						legend: {
							show: true,
							position: 'nw',
							sorted: true,
							backgroundOpacity: 0
						},
						grid: {
							borderWidth: 0
						},
						yaxis: {
							tickColor: '#ffffff',
							ticks: 3
						},
						xaxis: {
							ticks: dataMonths,
							tickColor: '#f5f5f5'
						}
					}
				);

				// Live Chart
				var dataLive = [];

				function getRandomData( ) { // Random data generator

					if ( dataLive.length > 0 )
						dataLive = dataLive.slice(1);

					while (dataLive.length < 300 ) {
						var prev = dataLive.length > 0 ? dataLive[dataLive.length - 1] : 50;
						var y = prev + Math.random() * 10 - 5;
						if (y < 0)
							y = 0;
						if (y > 100)
							y = 100;
						dataLive.push(y);
					}

					var res = [];
					for (var i = 0; i < dataLive.length; ++i)
						res.push([i, dataLive[i]]);

					// Show live chart info
					jQuery( '.js-flot-live-info' ).html( y.toFixed(0) + '%' );

					return res;
				}

				function updateChartLive( ) { // Update live chart
					chartLive.setData([getRandomData()]);
					chartLive.draw();
					setTimeout( updateChartLive, 70 );
				}

				var chartLive = jQuery.plot(flotLive, // Init live chart
					[{ data: getRandomData() }],
					{
						series: {
							shadowSize: 0
						},
						lines: {
							show: true,
							lineWidth: 2,
							fill: true,
							fillColor: {
								colors: [{opacity: .2}, {opacity: .2}]
							}
						},
						colors: [uiHelpers.hexToRgba( $scope.app.colors.info, .7 )],
						grid: {
							borderWidth: 0,
							color: uiHelpers.hexToRgba( $scope.app.colors.text_muted, .4 )
						},
						yaxis: {
							show: true,
							min: 0,
							max: 110
						},
						xaxis: {
							show: false
						}
					}
				);

				updateChartLive(); // Start getting new data

				// Bars Chart
				jQuery.plot(flotBars,
					[
						{
							label: 'Sales Before',
							data: dataSalesBefore,
							bars: {
								show: true,
								lineWidth: 0,
								fillColor: {
									colors: [{opacity: 1}, {opacity: 1}]
								}
							}
						},
						{
							label: 'Sales After',
							data: dataSalesAfter,
							bars: {
								show: true,
								lineWidth: 0,
								fillColor: {
									colors: [{opacity: 1}, {opacity: 1}]
								}
							}
						}
					],
					{
						colors: [uiHelpers.hexToRgba( $scope.app.colors.info, .7 ), uiHelpers.hexToRgba( $scope.app.colors.primary, .7 )],
						legend: {
							show: true,
							position: 'nw',
							backgroundOpacity: 0
						},
						grid: {
							borderWidth: 0
						},
						yaxis: {
							ticks: 3,
							tickColor: '#f5f5f5'
						},
						xaxis: {
							ticks: dataMonthsBars,
							tickColor: '#f5f5f5'
						}
					}
				);

				// Pie Chart
				jQuery.plot(flotPie,
					[
						{
							label: 'Sales',
							data: 22
						},
						{
							label: 'Tickets',
							data: 22
						},
						{
							label: 'Earnings',
							data: 56
						}
					],
					{
						colors: [uiHelpers.hexToRgba( $scope.app.colors.success, .7 ), uiHelpers.hexToRgba( $scope.app.colors.warning, .3 ), uiHelpers.hexToRgba( $scope.app.colors.primary, .7 )],
						legend: {show: false},
						series: {
							pie: {
								show: true,
								radius: 1,
								label: {
									show: true,
									radius: 2/3,
									formatter: function( label, pieSeries ) {
										return '<div class="flot-pie-label">' + label + '<br>' + Math.round(pieSeries.percent) + '%</div>';
									},
									background: {
										opacity: .75,
										color: '#000000'
									}
								}
							}
						}
					}
				);
			};

			// Init all charts
			initChartsChartJS();
			initChartsFlot();
			initChartsSparkline();
		}
	]);
