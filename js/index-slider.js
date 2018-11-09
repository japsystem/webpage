$(document).ready(function() {
	$('.carousel').carousel({
		interval: 2700,
		ride: true,
		pause: false,
		wrap: false
	});

	$('.carousel').on('slid.bs.carousel', function(){
		if($('.carousel .carousel-item:last').hasClass('active')){
			$('.carousel').carousel('pause');
		}else{
			$('.carousel').carousel('cycle');
		}
	})
});