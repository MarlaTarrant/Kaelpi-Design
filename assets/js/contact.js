(function($){

	$(document).ready(function() {

		/* ---------------------------------------------- /*
		 * Contact form ajax
		/* ---------------------------------------------- */

		$('#contact-form').find('input,textarea').jqBootstrapValidation({
			preventSubmit: true,
			submitError: function($form, event, errors) {
				// additional error messages or events
			},
			submitSuccess: function($form, event) {
				event.preventDefault();

				var name            = $("input#name").val();
				var email           = $("input#email").val();
				var message         = $("textarea#message").val();
				var submit          = $('#contact-form submit');
				var ajaxResponse    = $('#contact-response');
				var firstName = name; // For Success/Failure Message
            // Check for white space in name for Success/Fail message
            if (firstName.indexOf(' ') >= 0) {
                firstName = name.split(' ').slice(0, -1).join(' ');
            }

				$.ajax({
					url: 'assets/contact.php',
					type: 'POST',
					dataType: 'json',
					data: {
						name: name,
						email: email,
						message: message,
						submit: 1
					},
					cache: false,
					success: function() {
						// Success message
						$('#success').html("<div class='alert alert-success'>");
						$('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
							.append("</button>");
						$('#success > .alert-success')
							.append("Thank you, your message has been sent. We will get back to you shortly.");
						$('#success > .alert-success')
							.append('</div>');
	
						//clear all fields
						$('#contact-form').trigger("reset");
					},
					error: function() {
						// Fail message
						$('#success').html("<div class='alert alert-danger'>");
						$('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
							.append("</button>");
						$('#success > .alert-danger').append("Sorry " + firstName + ", it seems that our mail server is not responding. Please email kaelpidesign@gmail.com if the problem persists.");
						$('#success > .alert-danger').append('</div>');
						//clear all fields
						$('#contact-form').trigger("reset");
					},
					beforeSend: function(result) {
						submit.empty();
						submit.append('<i class="fa fa-cog fa-spin"></i> Wait...');
					},
					success: function(result) {
						if(result.sendstatus == 1) {
							ajaxResponse.html(result.message);
							$form.fadeOut(500);
						} else {
							ajaxResponse.html(result.message);
						}
					}
				});
			}
		});

	});

})(jQuery);