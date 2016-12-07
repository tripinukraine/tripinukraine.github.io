$( document ).ready(function() {
	
	// show pop-ups
	$('.show-on').click(function() {
		$('.show-on-map').slideDown('slow', function() {

		});
	});

	$('.make-route').click(function() {
		$('.our-route').slideDown('slow', function() {

		});
	});

	// hide pop-ups
	$('span').click(function() {
		$('.our-route, .show-on-map').fadeOut('slow', function() {

		});
	});

	// show sidebar
	$('.route-details').click(function () {
		$('.sidebar').show('slow');
	});

	// hide sidebar 
	$('span').click(function() {
		$('.sidebar').hide('slow', function() {

		});
	});

	//pop-up on map link
	$('.leaflet-popup-content a').click(function(e) {
		$('.sidebar').show('slow');
	});

	// alert('It\'s work!');
});