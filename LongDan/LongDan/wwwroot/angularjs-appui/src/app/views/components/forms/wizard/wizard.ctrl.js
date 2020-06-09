// Forms Wizard Controller
angular
	.module( 'app' )
	.controller( 'FormsWizardCtrl', ['$scope', '$localStorage', '$window',
		function( $scope, $localStorage, $window ) {
			// Init simple wizard, for more examples please check out http://vadimg.com/twitter-bootstrap-wizard-example/
			var initWizardSimple = function() {
				jQuery( '.js-wizard-simple' ).bootstrapWizard({
					'tabClass': '',
					'firstSelector': '.wizard-first',
					'previousSelector': '.wizard-prev',
					'nextSelector': '.wizard-next',
					'lastSelector': '.wizard-last',
					'onTabShow': function( tab, navigation, index ) {
						var total      = navigation.find( 'li' ).length;
						var current    = index + 1;
						var percent    = ( current/total ) * 100;

						// Get vital wizard elements
						var	wizard			= navigation.parents( '.card' ),
								progress		= wizard.find( '.wizard-progress > .progress-bar' ),
								btnPrev		= wizard.find( '.wizard-prev' ),
								btnNext		= wizard.find( '.wizard-next' ),
								btnFinish	= wizard.find( '.wizard-finish' );

						// Update progress bar if there is one
						if ( progress ) {
							progress.css({ width: percent + '%' });
						}

						// If it's the last tab then hide the last button and show the finish instead
						if ( current >= total ) {
							btnNext.hide();
							btnFinish.show();
						} else {
							btnNext.show();
							btnFinish.hide();
						}
					}
				});
			};

			// Init wizards with validation, for more examples please check out http://vadimg.com/twitter-bootstrap-wizard-example/
			var initWizardValidation = function() {
				// Get forms
				var form1 = jQuery( '.js-form1' );
				var form2 = jQuery( '.js-form2' );

				// Prevent forms from submitting on enter key press
				form1.add(form2).on( 'keyup keypress', function( e ) {
					var code = e.keyCode || e.which;

					if (code === 13 ) {
						e.preventDefault();
						return false;
					}
				});

				// Init form validation on classic wizard form
				var validator1 = form1.validate({
					errorClass: 'help-block',
					errorElement: 'div',
					errorPlacement: function( error, e ) {
						jQuery(e).parents( '.form-group > div' ).append(error);
					},
					highlight: function( e ) {
						jQuery(e).closest( '.form-group' ).removeClass( 'has-error' ).addClass( 'has-error' );
						jQuery(e).closest( '.help-block' ).remove();
					},
					success: function( e ) {
						jQuery(e).closest( '.form-group' ).removeClass( 'has-error' );
						jQuery(e).closest( '.help-block' ).remove();
					},
					rules: {
						'validation-classic-firstname': {
							required: true,
							minlength: 2
						},
						'validation-classic-lastname': {
							required: true,
							minlength: 2
						},
						'validation-classic-email': {
							required: true,
							email: true
						},
						'validation-classic-details': {
							required: true,
							minlength: 5
						},
						'validation-classic-city': {
							required: true
						},
						'validation-classic-skills': {
							required: true
						},
						'validation-classic-terms': {
							required: true
						}
					},
					messages: {
						'validation-classic-firstname': {
							required: 'Please enter a firstname',
							minlength: 'Your firtname must consist of at least 2 characters'
						},
						'validation-classic-lastname': {
							required: 'Please enter a lastname',
							minlength: 'Your lastname must consist of at least 2 characters'
						},
						'validation-classic-email': 'Please enter a valid email address',
						'validation-classic-details': 'Let us know a few thing about yourself',
						'validation-classic-skills': 'Please select a skill!',
						'validation-classic-terms': 'You must agree to the service terms!'
					}
				});

				// Init form validation on the other wizard form
				var validator2 = form2.validate({
					errorClass: 'help-block text-right',
					errorElement: 'div',
					errorPlacement: function( error, e ) {
						jQuery(e).parents( '.form-group > div' ).append(error);
					},
					highlight: function( e ) {
						jQuery(e).closest( '.form-group' ).removeClass( 'has-error' ).addClass( 'has-error' );
						jQuery(e).closest( '.help-block' ).remove();
					},
					success: function( e ) {
						jQuery(e).closest( '.form-group' ).removeClass( 'has-error' );
						jQuery(e).closest( '.help-block' ).remove();
					},
					rules: {
						'validation-firstname': {
							required: true,
							minlength: 2
						},
						'validation-lastname': {
							required: true,
							minlength: 2
						},
						'validation-email': {
							required: true,
							email: true
						},
						'validation-details': {
							required: true,
							minlength: 5
						},
						'validation-city': {
							required: true
						},
						'validation-skills': {
							required: true
						},
						'validation-terms': {
							required: true
						}
					},
					messages: {
						'validation-firstname': {
							required: 'Please enter a firstname',
							minlength: 'Your firtname must consist of at least 2 characters'
						},
						'validation-lastname': {
							required: 'Please enter a lastname',
							minlength: 'Your lastname must consist of at least 2 characters'
						},
						'validation-email': 'Please enter a valid email address',
						'validation-details': 'Let us know a few thing about yourself',
						'validation-skills': 'Please select a skill!',
						'validation-terms': 'You must agree to the service terms!'
					}
				});

				// Init classic wizard with validation
				jQuery( '.js-wizard-classic-validation' ).bootstrapWizard({
					'tabClass': '',
					'previousSelector': '.wizard-prev',
					'nextSelector': '.wizard-next',
					'onTabShow': function( tab, nav, index ) {
						var	total			= nav.find( 'li' ).length,
								current		= index + 1,

								// Get vital wizard elements
								wizard			= nav.parents( '.card' ),
								btnNext		= wizard.find( '.wizard-next' ),
								btnFinish	= wizard.find( '.wizard-finish' );

						// If it's the last tab then hide the last button and show the finish instead
						if ( current >= total ) {
							btnNext.hide();
							btnFinish.show();
						} else {
							btnNext.show();
							btnFinish.hide();
						}
					},
					'onNext': function( tab, nav, index ) {
						var valid = form1.valid();

						if ( ! valid ) {
							validator1.focusInvalid();

							return false;
						}
					},
					'onTabClick': function( tab, nav, index ) {
						return false;
					}
				});

				// Init wizard with validation
				jQuery( '.js-wizard-validation' ).bootstrapWizard({
					'tabClass': '',
					'previousSelector': '.wizard-prev',
					'nextSelector': '.wizard-next',
					'onTabShow': function( tab, nav, index ) {
						var total      = nav.find( 'li' ).length;
						var current    = index + 1;

						// Get vital wizard elements
						var wizard     = nav.parents( '.card' );
						var btnNext    = wizard.find( '.wizard-next' );
						var btnFinish  = wizard.find( '.wizard-finish' );

						// If it's the last tab then hide the last button and show the finish instead
						if ( current >= total ) {
							btnNext.hide();
							btnFinish.show();
						} else {
							btnNext.show();
							btnFinish.hide();
						}
					},
					'onNext': function( tab, nav, index ) {
						var valid = form2.valid();

						if ( ! valid ) {
							validator2.focusInvalid();

							return false;
						}
					},
					'onTabClick': function( tab, nav, index ) {
						return false;
					}
				});
			};

			// Init simple wizard
			initWizardSimple();

			// Init wizards with validation
			initWizardValidation();
		}
	]);
