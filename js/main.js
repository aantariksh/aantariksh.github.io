(function ($) {
	"use strict";
	//Owl-Carousel
	$(".owl-carousel").each(function () {
		var $Carousel = $(this);
		$Carousel.owlCarousel({
			loop: $Carousel.data('loop'),
			autoplay: $Carousel.data("autoplay"),
			margin: $Carousel.data('space'),
			nav: $Carousel.data('nav'),
			dots: $Carousel.data('dots'),
			dotsSpeed: $Carousel.data('speed'),
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: $Carousel.data('slide-res')
				},
				1000: {
					items: $Carousel.data('slide'),
				}
			}
		});
	});
	//Counter Up
    $(".counter").counterUp({
		delay: 10,
		time: 2500,
	});

	//Scroll to top
	$.scrollUp({
		animation: 'fade',
		scrollImg: { active: true, type: 'background'}
	});

	//Stikey Header
	$(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 10) {
            $(".navbar").removeClass("sticky");
			} else {
            $(".navbar").addClass("sticky");
		}
	});

	//Portfolio Filter
	$('.card-list').imagesLoaded( function() {
		// init Isotope
		var $grid = $('.card-list').isotope({
			itemSelector: '.single-card-item',
			percentPosition: true,
			masonry: {
				// use outer width of grid-sizer for columnWidth
				columnWidth: '.grid-sizer'
			}
		});
		// filter items on button click
		$('.filter-menu').on( 'click', 'li', function() {
			var filterValue = $(this).attr('data-filter');
			$grid.isotope({ filter: filterValue });
		});
	});
	//for menu active class
	$('.filter-menu li').on('click', function(event) {
		$(this).siblings('.is-checked').removeClass('is-checked');
		$(this).addClass('is-checked');
		event.preventDefault();
	});
})(jQuery);
