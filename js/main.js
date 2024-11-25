$(document).ready(function() {
	$('.first-slider .slider').slick({
		infinite: true,
		variableWidth: true,
		dots: true,
		arrows: true,
		prevArrow: "<button type='button' class='slick-prev pull-left'><img src='/Master-Tao_Cargo/assets/icons/sliders/first_slider/arrow-left.svg'></button>",
		nextArrow: "<button type='button' class='slick-next pull-right'><img src='/Master-Tao_Cargo/assets/icons/sliders/first_slider/arrow-right.svg'></button>",
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
