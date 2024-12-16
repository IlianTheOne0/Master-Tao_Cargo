$(document).ready(function() {
    function restartSlider() {
        if ($('.main-section .slider').hasClass('slick-initialized')) {
            $('.main-section .slider').slick('unslick');
        }
        $('.main-section .slider').slick({
            infinite: true,
            variableWidth: true,
            dots: true,
            arrows: true,
            prevArrow: "<button type='button' class='slick-prev pull-left'><img src='https://iliantheone0.github.io/Master-Tao_Cargo/assets/icons/sliders/arrow-left.svg'></button>",
            nextArrow: "<button type='button' class='slick-next pull-right'><img src='https://iliantheone0.github.io/Master-Tao_Cargo/assets/icons/sliders/arrow-right.svg'></button>",
            appendDots: $('.main-section .dots'),
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 500,
            draggable: false,
            autoplay: false,
            responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: false,
                }
            }]
        });

        if ($(window).width() <= 1023) {
            const slidesToShow = $(window).width() <= 767 ? 1 : 2;
            const slidesToScroll = $(window).width() <= 767 ? 1 : 2;
            if ($('.advantages .slider').hasClass('slick-initialized')) {
                $('.advantages .slider').slick('unslick');
            }
            $('.advantages .slider').slick({
                infinite: true,
                variableWidth: true,
                dots: true,
                arrows: true,
                prevArrow: "<button type='button' class='slick-advantages-prev pull-left'><img src='https://iliantheone0.github.io/Master-Tao_Cargo/assets/icons/sliders/arrow-left.svg'></button>",
                nextArrow: "<button type='button' class='slick-advantages-next pull-right'><img src='https://iliantheone0.github.io/Master-Tao_Cargo/assets/icons/sliders/arrow-right.svg'></button>",
                appendDots: $('.advantages .dots'),
                slidesToShow: slidesToShow,
                slidesToScroll: slidesToScroll,
                draggable: true,
                swipe: true,
                autoplay: true,
                autoplaySpeed: 5000,
            });
        }

		const centerMode = $(window).width() <= 1023 ? true : false;
		const dots = $(window).width() <= 1023 ? true : false;

        if ($('.delivery .slider').hasClass('slick-initialized')) {
            $('.delivery .slider').slick('unslick');
        }
        $('.delivery .slider').slick({
            infinite: false,
            variableWidth: true,
            dots: dots,
            arrows: true,
            prevArrow: "<button type='button' class='slick-delivery-prev pull-left' disabled><img src='https://iliantheone0.github.io/Master-Tao_Cargo/assets/icons/sliders/arrow-left__disabled.svg'></button>",
            nextArrow: "<button type='button' class='slick-delivery-next pull-right'><img src='https://iliantheone0.github.io/Master-Tao_Cargo/assets/icons/sliders/arrow-right.svg'></button>",
            appendDots: $('.delivery .dots'),
			slidesToShow: 1,
            slidesToScroll: 1,
            draggable: false,
			centerMode: centerMode,
        })
		
		if ($(window).width() <= 1436 && $(window).width() >= 1024) {
			$('.delivery .slider').on('afterChange', function(event, slick, currentSlide) {
				var totalSlides = slick.$slides.length;

				if (currentSlide === 0) {
					$('.slick-delivery-prev').attr('disabled', true).html("<img src='https://iliantheone0.github.io/Master-Tao_Cargo/assets/icons/sliders/arrow-left__disabled.svg'>");
					$('.slick-delivery-next').attr('disabled', false).html("<img src='https://iliantheone0.github.io/Master-Tao_Cargo/assets/icons/sliders/arrow-right.svg'>");
				} else {
					$('.slick-delivery-prev').attr('disabled', false).html("<img src='https://iliantheone0.github.io/Master-Tao_Cargo/assets/icons/sliders/arrow-left.svg'>");
					$('.slick-delivery-next').attr('disabled', true).html("<img src='https://iliantheone0.github.io/Master-Tao_Cargo/assets/icons/sliders/arrow-right__disabled.svg'>");
				}
			});
		} else if ($(window).width() <= 1023) {
			$('.delivery .slider').on('afterChange', function(event, slick, currentSlide) {
				var totalSlides = slick.$slides.length;

				if (currentSlide === 0) {
					$('.slick-delivery-prev').attr('disabled', true).html("<img src='https://iliantheone0.github.io/Master-Tao_Cargo/assets/icons/sliders/arrow-left__disabled.svg'>");
					$('.slick-delivery-next').attr('disabled', false).html("<img src='https://iliantheone0.github.io/Master-Tao_Cargo/assets/icons/sliders/arrow-right.svg'>");
				} else if (currentSlide === totalSlides - 1) {
					$('.slick-delivery-prev').attr('disabled', false).html("<img src='https://iliantheone0.github.io/Master-Tao_Cargo/assets/icons/sliders/arrow-left.svg'>");
					$('.slick-delivery-next').attr('disabled', true).html("<img src='https://iliantheone0.github.io/Master-Tao_Cargo/assets/icons/sliders/arrow-right__disabled.svg'>");
				} else {
					$('.slick-delivery-prev').attr('disabled', false).html("<img src='https://iliantheone0.github.io/Master-Tao_Cargo/assets/icons/sliders/arrow-left.svg'>");
					$('.slick-delivery-next').attr('disabled', false).html("<img src='https://iliantheone0.github.io/Master-Tao_Cargo/assets/icons/sliders/arrow-right.svg'>");
				}
			});
		} else {
			$('.slick-delivery-prev').attr('disabled', true).html("<img src='https://iliantheone0.github.io/Master-Tao_Cargo/assets/icons/sliders/arrow-left__disabled.svg'>");
			$('.slick-delivery-next').attr('disabled', true).html("<img src='https://iliantheone0.github.io/Master-Tao_Cargo/assets/icons/sliders/arrow-right__disabled.svg'>");
		}

		const slidesToShowSERVICES = $(window).width() <= 1439 ? 1 : 3;
		let slidesToScrollSERVICES;
		if ($(window).width() <= 1436 && $(window).width() >= 1024) {
			slidesToScrollSERVICES = 2;
		} else if ($(window).width() >= 1440) {
			slidesToScrollSERVICES = 1;
		} else {
			slidesToScrollSERVICES = 1;
		}
		console.log(slidesToScrollSERVICES, $(window).width());
		if ($('.services .slider').hasClass('slick-initialized')) {
			$('.services .slider').slick('unslick');
		}
		$('.services .slider').slick({
			infinite: false,
			variableWidth: true,
			dots: true,
			arrows: true,
			prevArrow: "<button type='button' class='slick-services-prev pull-left' disabled='disabled'><img src='https://iliantheone0.github.io/Master-Tao_Cargo/assets/icons/sliders/arrow-left__disabled.svg'></button>",
			nextArrow: "<button type='button' class='slick-services-next pull-right'><img src='https://iliantheone0.github.io/Master-Tao_Cargo/assets/icons/sliders/arrow-right.svg'></button>",
			appendDots: $('.services .dots'),
			slidesToShow: slidesToScrollSERVICES,
			slidesToScroll: slidesToScrollSERVICES,
			draggable: false,
			centerMode: false,
			focusOnSelect: true,
		}).on('afterChange', function(event, slick, currentSlide) {
			var totalSlides = slick.$slides.length;
			if (slidesToScrollSERVICES === 2) {
				if (currentSlide === 0) {
					$('.slick-services-prev').attr('disabled', true).html("<img src='https://iliantheone0.github.io/Master-Tao_Cargo/assets/icons/sliders/arrow-left__disabled.svg'>");
					$('.slick-services-next').attr('disabled', false).html("<img src='https://iliantheone0.github.io/Master-Tao_Cargo/assets/icons/sliders/arrow-right.svg'>");
				} else {
					$('.slick-services-prev').attr('disabled', false).html("<img src='https://iliantheone0.github.io/Master-Tao_Cargo/assets/icons/sliders/arrow-left.svg'>");
					$('.slick-services-next').attr('disabled', true).html("<img src='https://iliantheone0.github.io/Master-Tao_Cargo/assets/icons/sliders/arrow-right__disabled.svg'>");
				}
			} else if ($(window).width() >= 1436) {
				if (currentSlide === 0) {
					$('.slick-services-prev').attr('disabled', true).html("<img src='https://iliantheone0.github.io/Master-Tao_Cargo/assets/icons/sliders/arrow-left__disabled.svg'>");
					$('.slick-services-next').attr('disabled', false).html("<img src='https://iliantheone0.github.io/Master-Tao_Cargo/assets/icons/sliders/arrow-right.svg'>");
				} else if (currentSlide === totalSlides - 1) {
					$('.slick-services-prev').attr('disabled', false).html("<img src='https://iliantheone0.github.io/Master-Tao_Cargo/assets/icons/sliders/arrow-left.svg'>");
					$('.slick-services-next').attr('disabled', true).html("<img src='https://iliantheone0.github.io/Master-Tao_Cargo/assets/icons/sliders/arrow-right__disabled.svg'>");
				} else {
					$('.slick-services-prev').attr('disabled', false).html("<img src='https://iliantheone0.github.io/Master-Tao_Cargo/assets/icons/sliders/arrow-left.svg'>");
					$('.slick-services-next').attr('disabled', true).html("<img src='https://iliantheone0.github.io/Master-Tao_Cargo/assets/icons/sliders/arrow-right__disabled.svg'>");
				}
			} else {
				if (currentSlide === 0) {
					$('.slick-services-prev').attr('disabled', true).html("<img src='https://iliantheone0.github.io/Master-Tao_Cargo/assets/icons/sliders/arrow-left__disabled.svg'>");
					$('.slick-services-next').attr('disabled', false).html("<img src='https://iliantheone0.github.io/Master-Tao_Cargo/assets/icons/sliders/arrow-right.svg'>");
				} else if (currentSlide === totalSlides - 1) {
					$('.slick-services-prev').attr('disabled', false).html("<img src='https://iliantheone0.github.io/Master-Tao_Cargo/assets/icons/sliders/arrow-left.svg'>");
					$('.slick-services-next').attr('disabled', true).html("<img src='https://iliantheone0.github.io/Master-Tao_Cargo/assets/icons/sliders/arrow-right__disabled.svg'>");
				} else {
					$('.slick-services-prev').attr('disabled', false).html("<img src='https://iliantheone0.github.io/Master-Tao_Cargo/assets/icons/sliders/arrow-left.svg'>");
					$('.slick-services-next').attr('disabled', false).html("<img src='https://iliantheone0.github.io/Master-Tao_Cargo/assets/icons/sliders/arrow-right.svg'>");
				}
			}
		});
    }

    restartSlider();

    window.addEventListener('resize', function() {
        restartSlider();
    });
});




/*



		$('.services .slider').slick({
			infinite: false,
			variableWidth: true,
			dots: false,
			arrows: true,
			prevArrow: "<button type='button' class='slick-prev pull-left' disabled='disabled'><img src='https://iliantheone0.github.io/Master-Tao_Cargo/assets/icons/sliders/arrow-left__disabled.svg'></button>",
			nextArrow: "<button type='button' class='slick-next pull-right'><img src='https://iliantheone0.github.io/Master-Tao_Cargo/assets/icons/sliders/arrow-right.svg'></button>",
			slidesToShow: 3,
			slidesToScroll: 1,
			draggable: false,
			centerMode: false,
			focusOnSelect: true,
		}).on('afterChange', function(event, slick, currentSlide) {
			var totalSlides = slick.$slides.length;
			
			slick.$slides.each(function(index, slide) {
				if (index < currentSlide || index >= currentSlide + slick.options.slidesToShow) {
					$(slide).addClass('out-of-view');
				} else {
					$(slide).removeClass('out-of-view');
				}
			});

			if (currentSlide === 0) {
				$('.slick-prev').attr('disabled', true).html("<img src='https://iliantheone0.github.io/Master-Tao_Cargo/assets/icons/sliders/arrow-left__disabled.svg'>");
				$('.slick-next').attr('disabled', false).html("<img src='https://iliantheone0.github.io/Master-Tao_Cargo/assets/icons/sliders/arrow-right.svg'>");
			} else if (currentSlide === totalSlides - 1) {
				$('.slick-prev').attr('disabled', false).html("<img src='https://iliantheone0.github.io/Master-Tao_Cargo/assets/icons/sliders/arrow-left.svg'>");
				$('.slick-next').attr('disabled', false).html("<img src='https://iliantheone0.github.io/Master-Tao_Cargo/assets/icons/sliders/arrow-right.svg'>");
			} else {
				$('.slick-prev').attr('disabled', false).html("<img src='https://iliantheone0.github.io/Master-Tao_Cargo/assets/icons/sliders/arrow-left.svg'>");
				$('.slick-next').attr('disabled', true).html("<img src='https://iliantheone0.github.io/Master-Tao_Cargo/assets/icons/sliders/arrow-right__disabled.svg'>");
			}
		}).slick('slickGoTo', 0);



*/