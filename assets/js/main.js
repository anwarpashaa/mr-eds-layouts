(function ($) {
    "use strict";

    $(window).on('load', function(){
        //===== Prealoder
        $("#preloader").delay(400).fadeOut();
    });

    // sticky header
    $(window).scroll(function() {    
		var scroll = $(window).scrollTop();
	
		//>=, not <=
		if (scroll >= 1) {
			//clearHeader, not clearheader - caps H
			$(".header-area").addClass("is-stick");
		}else{
			$(".header-area").removeClass("is-stick");
		};
	});

    // Hamburger-menu
    $('.hamburger-menu, #menu li a').on('click', function () {
        $('.hamburger-menu, #menu').toggleClass('current');
    });


     	// hero-active owlCarousel
	$('.hero-active').owlCarousel({
		loop: true,
		margin: 0,
		items: 1,
		nav: true,
        navText: ['<img src="assets/img/sl-arrow.png" alt="">', '<img src="assets/img/sl-arrow.png" alt="">'],
		dots: true,
        smartSpeed:450,
	})
    // event-active owlCarousel
	$('.event-active').owlCarousel({
		loop: true,
		margin: 25,
		items: 1,
		nav: true,
        navText: ['<img src="assets/img/sl-arrow2.png" alt="">', '<img src="assets/img/sl-arrow2.png" alt="">'],
		dots: false,
        smartSpeed:450,
		responsive: {
			0: {
				items: 1
			},
			767: {
				items: 2
			},
			992: {
				items: 3
			}
		}
	})
    // midway-active owlCarousel
	$('.midway-active').owlCarousel({
		loop: true,
		margin: 20,
		items: 1,
		nav: true,
        navText: ['<img src="assets/img/sl-arrow2.png" alt="">', '<img src="assets/img/sl-arrow2.png" alt="">'],
		dots: false,
        smartSpeed:450,
		responsive: {
			0: {
				items: 1
			},
			767: {
				items: 2
			},
			992: {
				items: 4
			}
		}
	})


    // get year activation on footer
	var elements = document.getElementsByClassName("getyear");

    for (var i = 0; i < elements.length; i++) {
        elements[i].innerHTML = (new Date().getFullYear());
    }

    // Show or hide the sticky footer button
    $(window).on('scroll', function (event) {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn(200)
        } else {
            $('.back-to-top').fadeOut(200)
        }
    });

    //Animate the scroll to top
    $('.back-to-top').on('click', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });

})(jQuery);