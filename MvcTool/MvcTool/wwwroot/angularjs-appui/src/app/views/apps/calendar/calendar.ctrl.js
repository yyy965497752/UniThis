// Components Calendar Controller
angular
	.module( 'app' )
	.controller( 'AppCalendarCtrl', ['$scope', '$localStorage', '$window', 'uiHelpers',
		function( $scope, $localStorage, $window, uiHelpers ) {
			// Add new event in the event list
			var addEvent = function() {
				var eventInput = jQuery( '.js-add-event' );
				var eventInputVal = '';

				// When the add event form is submitted
				jQuery( '.js-form-add-event' ).on( 'submit', function() {
					eventInputVal = eventInput.prop( 'value' ); // Get input value

					// Check if the user entered something
					if ( eventInputVal ) {
						// Add it to the events list
						jQuery( '.js-events' )
							.prepend( '<li>' +
									jQuery( '<div />' ).text( eventInputVal ).html() +
									'</li>' );

						// Clear input field
						eventInput.prop( 'value', '' );

						// Re-Init Events
						initEvents();
					}

					return false;
				});
			};

			// Init drag and drop event functionality
			var initEvents = function() {
				jQuery( '.js-events' )
					.find( 'li' )
					.each( function() {
						var event = jQuery( this );

						// create an Event Object
						var eventObject = {
							title: jQuery.trim( event.text() ),
							color: event.css( 'background-color' ) };

						// store the Event Object in the DOM element so we can get to it later
						jQuery( this ).data( 'eventObject', eventObject );

						// make the event draggable using jQuery UI
						jQuery( this ).draggable({
							zIndex: 999,
							revert: true,
							revertDuration: 0
						});
					});
			};

			// Init FullCalendar
			var initCalendar = function() {
				var	date		= new Date(),
						d			= date.getDate(),
						m			= date.getMonth(),
						y			= date.getFullYear();

				jQuery( '.js-calendar' ).fullCalendar({
					firstDay: 1,
					editable: true,
					droppable: true,
					header: {
						left: 'prev',
						center: 'title',
						right: 'next'
					/*
						left: 'title',
						right: 'prev,next month,agendaWeek,agendaDay'
					*/
					},
					// This function is called when something is dropped
					drop: function( date, allDay ) {
						// retrieve the dropped element's stored Event Object
						var originalEventObject = jQuery( this ).data( 'eventObject' );

						// we need to copy it, so that multiple events don't have a reference to the same object
						var copiedEventObject = jQuery.extend( {}, originalEventObject );

						// assign it the date that was reported
						copiedEventObject.start = date;

						// render the event on the calendar
						// the last `true` argument determines if the event "sticks" (http://arshaw.com/fullcalendar/docs/event_rendering/renderEvent/)
						jQuery( '.js-calendar' ).fullCalendar( 'renderEvent', copiedEventObject, true );

						// remove the element from the "Draggable Events" list
						jQuery( this ).remove();
					},
					events: [
						{
							title: 'Free day',
							start: new Date(y, m, 1),
							allDay: true,
							// color: uiHelpers.hexToRgba( $scope.app.colors.info, .9 ),
						},
						{
							title: 'Business Meeting',
							start: new Date(y, m, 2)
						},
						{
							title: 'Big project',
							start: new Date(y, m, 5),
							end: new Date(y, m, 8),
							allDay: true,
							color: uiHelpers.hexToRgba( $scope.app.colors.success, .9 ),
						},
						{
							title: 'Reading',
							start: new Date(y, m, 9),
							end: new Date(y, m, 11),
							allDay: true,
							// color: uiHelpers.hexToRgba( $scope.app.colors.info, .9 ),
						},
						{
							title: 'Landing Template',
							start: new Date(y, m, d - 1),
							end: new Date(y, m, d - 1),
							allDay: true,
							// color: uiHelpers.hexToRgba( $scope.app.colors.info, .9 ),
						},
						{
							title: 'Horsing',
							start: new Date(y, m, d + 5, 14, 00),
							// color: uiHelpers.hexToRgba( $scope.app.colors.info, .9 ),
						},
						{
							title: 'Admin Dashboard',
							start: new Date(y, m, d, 9, 0),
							end: new Date(y, m, d, 12, 0),
							allDay: true,
							// color: uiHelpers.hexToRgba( $scope.app.colors.info, .9 ),
						},
						{
							title: 'Party',
							start: new Date(y, m, 15),
							end: new Date(y, m, 16),
							allDay: true,
							// color: uiHelpers.hexToRgba( $scope.app.colors.info, .9 ),
						},
						{
							title: 'Reading',
							start: new Date(y, m, d + 8, 21, 0),
							end: new Date(y, m, d + 8, 23, 30),
							allDay: true
						},
						{
							title: 'Event with a link',
							start: new Date(y, m, 23),
							end: new Date(y, m, 25),
							allDay: true,
							url: 'http://google.com',
							color: uiHelpers.hexToRgba( $scope.app.colors.tertiary, .9 ),
						}
					]
				});
			};

			// Add Event functionality
			addEvent();

			// FullCalendar, for more examples please check out http://fullcalendar.io/
			initEvents();
			initCalendar();
		}
	]);
