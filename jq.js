$(document).ready(function() {
	$(".form--container").hide();
	$(".login").hide();
	$(".register").hide();

	$(".login_button").click(function() {
		$(".top-bar--container__mobile").fadeOut();
		$(".form--container").show();		
		$("body").addClass("no_scroll");
		$(".login").fadeIn(500);
	});

	$(".register_button").click(function() {
		$(".top-bar--container__mobile").fadeOut();
		$(".form--container").show();		
		$("body").addClass("no_scroll");
		$(".login").fadeOut();
		$(".register").fadeIn(500);	
	});

	$(".icon-cancel").click(function() {
		$(".top-bar--container__mobile").fadeIn();
		$("body").removeClass("no_scroll");
		$(".login").fadeOut();
		$(".register").fadeOut();
		$(".form--container").hide();
	});
});