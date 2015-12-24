$(document).ready(function(){

	//slider init
	$("#slides").responsiveSlides({
		speed: 700, //speed of transition
		timeout: 3500, //time between slide transitions
		pager: false //show the pagination
	});
});

//wow.js init

wow = new WOW(
	{
		animateClass: 'animated',
		mobile: false,
		offset: 100
	}
);
wow.init();