
$(document).ready(function() {

	var dropdown_tooltip = $('#menu_tooltip');
	var dropdown = $('.dropdown');

	var search = $('#search');
	var search_from = $('.navbar-form');

	$(dropdown).click(function(){
	    $(dropdown_tooltip).toggle();
	});

	$(search).click(function(){
	    $(search_from).toggle(500);
	});	


	// Custom Slider
	$('.slide_items').first().addClass('active');
	$('.slide_items').hide();
	$('.active').show();

	//prev btn click
	$('#btnprev').click(function(event) {		
		$('.active').removeClass('active').addClass('old_active');

		if($('.old_active').is(':first-child')) {
			$('.slide_items').last().addClass('active')
		}
		else {
			$('.old_active').prev().addClass('active');
		}

		$('.old_active').removeClass('old_active');
		$('.slide_items').fadeOut();
		$('.active').fadeIn();
	});	


	//next btn click
	$('#btnnext').click(function(event) {		
		$('.active').removeClass('active').addClass('old_active');

		if($('.old_active').is(':last-child')) {
			$('.slide_items').first().addClass('active')
		}
		else if($('.active').is(':first-child')) {
			alert('A');
		}
		else {
			$('.old_active').next().addClass('active');
		}

		$('.old_active').removeClass('old_active');
		$('.slide_items').fadeOut();
		$('.active').fadeIn();
	});	


});

