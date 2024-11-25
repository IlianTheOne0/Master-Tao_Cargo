$(document).ready(function() {
	$('.first-slider .slider').slick({
		infinite: true,
		variableWidth: true,
		dots: true,
		arrows: true,
		prevArrow: "<button type='button' class='slick-prev pull-left'><img src='../assets/icons/sliders/first slider/arrow-left.svg'></button>",
		nextArrow: "<button type='button' class='slick-next pull-right'><img src='../assets/icons/sliders/first slider/arrow-right.svg'></button>",
		appendDots: $('.first-slider .dots'),
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 500,
		draggable: false,
		responsive: [ {
			breakpoint: 768,
			settings: {
			  arrows: false,
			}
		  }]
		});
	})