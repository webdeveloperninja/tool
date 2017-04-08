var paymentApp = paymentApp || {};

paymentApp.testMode = true;
paymentApp.usernameExists = false;
paymentApp.stripeKey = 'pk_live_WAT0XAXb4Hw3KJvnZQVl2IuX';
paymentApp.formErrors = [];

paymentApp.init = function () {
	paymentApp.validPassword = false;
	$('#noticeUsername').hide();
	$('#noticePayment').hide();
	$('#notice').css({display: 'none'});

	$('[data-numeric]').payment('restrictNumeric');
	$('.cc-number').payment('formatCardNumber');
	$('.cc-exp').payment('formatCardExpiry');
	$('.cc-cvc').payment('formatCardCVC');
	$.fn.toggleInputError = function(erred) {
		this.parent('.form-group').toggleClass('has-error', erred);
		return this;
	};

	if(paymentApp.testMode) {
		paymentApp.setStripeTestMode();
	}

	paymentApp.setPasswordChangeListeners();
	paymentApp.setUsernameChangeListeners();

	Stripe.setPublishableKey(paymentApp.stripeKey);

	var $form = $('#payment-form');
	// Main Form Submit
	$form.submit(function (event) {
		// Improve validation
		if (paymentApp.validPassword && !paymentApp.usernameExists) {
			var cardType = $.payment.cardType($('.cc-number').val());
			$('.cc-number').toggleInputError(!$.payment.validateCardNumber($('.cc-number').val()));
			$('.cc-exp').toggleInputError(!$.payment.validateCardExpiry($('.cc-exp').payment('cardExpiryVal')));
			$('.cc-cvc').toggleInputError(!$.payment.validateCardCVC($('.cc-cvc').val(), cardType));
			$('.cc-brand').text(cardType);
			$('.validation').removeClass('text-danger text-success');
			$('.validation').addClass($('.has-error').length ? 'text-danger' : 'text-success');

			$form.find('.submit').prop('disabled', true);

			// Request a token from Stripe: this is the submit method
			Stripe.card.createToken($form, paymentApp.stripeResponseHandler);
		} else {
			return false
		}
		// Prevent the form from being submitted:
		return false;
	});
};

paymentApp.setStripeTestMode = function() {
	paymentApp.stripeKey = 'pk_test_7ySNAoNYSJEwRZuD6xaPec4Z';
};

paymentApp.passwordChange = function($password, $passwordMatch) {
	var password = $password.val();
	var passwordMatch = $passwordMatch.val();
	if (passwordMatch) {
		if (password != passwordMatch) {
			paymentApp.errorMessage('Make sure your passwords match');
			paymentApp.validPassword = false;
		} else {
			$('#notice').css({display: 'none'});
			paymentApp.validPassword = true;
		}
	}
};

paymentApp.setPasswordChangeListeners = function() {
	var $password = $('#password');
	var $passwordMatch = $('#password-match');
	$password.change(function () {
		paymentApp.passwordChange($password, $passwordMatch);
	});
	$passwordMatch.change(function () {
		paymentApp.passwordChange($passwordMatch, $password);
	});
};

paymentApp.errorMessage = function(message) {
	if (message) {
		$('#notice').css({display: 'block'});
		$('#notice .panel-heading').html(message);
	} else {
		$('#notice').css({display: 'none'});
	}
};

paymentApp.stripeResponseHandler = function(status, response) {
	// Grab the form:
	var $form = $('#payment-form');
	if (response.error && paymentApp.validPassword  && !paymentApp.usernameExists) { // Problem!
		// Show the errors on the form:

		$('#noticePayment').show();
		$('#noticePayment .panel-heading').html(response.error.message);

		$form.find('.submit').prop('disabled', false); // Re-enable submission
	} else { // Token was created!
		$('#noticePayment').hide();
		// Get the token ID:
		var token = response.id;
		// Insert the token ID into the form so it gets submitted to the server:
		$form.append($('<input type="hidden" name="stripeToken">').val(token));
		// Submit the form:
		$form.get(0).submit();
	}
};

paymentApp.setUsernameChangeListeners = function() {
	var usernameExists = false;
	$('input[name="username"]').keyup(function() {
		paymentApp.delay(function(){
			var username = $('input[name="username"]').val();
			$.post( "/does-username-exist", { username: username } ).done(function(data) {
				// set validation in here
				if (data.usernameExists) {
					$('#noticeUsername').show();
					$('#noticeUsername .panel-heading').html('Username exists please choose another one');
					paymentApp.usernameExists = true;
				} else {
					$('#noticeUsername').hide();
					paymentApp.usernameExists = false;
				}
			});
		}, 500 );
	});
};

paymentApp.delay = (function(){
	var timer = 0;
	return function(callback, ms){
		clearTimeout (timer);
		timer = setTimeout(callback, ms);
	};
})();

$(document).ready(function () {
	paymentApp.init();
});
