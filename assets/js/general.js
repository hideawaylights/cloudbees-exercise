
/*!
 * Simple jQuery Equal Heights
 *
 * Copyright (c) 2013 Matt Banks
 * Dual licensed under the MIT and GPL licenses.
 * Uses the same license as jQuery, see:
 * http://docs.jquery.com/License
 *
 * @version 1.5.1
 */
(function($) {

    $.fn.equalHeights = function() {
        var maxHeight = 0,
            $this = $(this);

        $this.each( function() {
            var height = $(this).innerHeight();

            if ( height > maxHeight ) { maxHeight = height; }
        });

        return $this.css('min-height', maxHeight);
    };

    // auto-initialize plugin
    $('[data-equal]').each(function(){
        var $this = $(this),
            target = $this.data('equal');
        $this.find(target).equalHeights();
    });

})(jQuery);



(function($) {

    $(document).ready(function() {


        // Initialize jquery.unveil.js and target image attributes // http://luis-almeida.github.io/unveil/
        // Viewport check for triggering animations on differing device sizes
    	function mediaSize() {
    		// Set the matchMedia
    		if (window.matchMedia('(min-width: 800px)').matches) {

                // Initialize jquery.unveil.js small device up
                $(".unveil-loading").unveil(-500, function() {
                    $(this).load(function() {
                        $(this).addClass('active-animation');
                        // alert("Test 1");
                    });
                });

    		} else {

                // Initialize jquery.unveil.js small device down
                $(".unveil-loading").unveil(-200, function() {
                    $(this).load(function() {
                        $(this).addClass('active-animation-mobile');
                        // alert("-200");
                    });
                });

    		}
    	};







        // Call the function
        mediaSize();
        // Attach the function to the resize event listener
        window.addEventListener('resize', mediaSize, false);


        // Mobile Menu functionality
        $('.toggle-navigation').on('click', function(e) {

            e.preventDefault();

            // hide open nav accordions in main menu
            $('.navigation-container .dropdown-item').removeClass('active-dropdown');

            $('body').toggleClass('navigation-engaged transitioning');
            setTimeout(function () { $('body').removeClass('transitioning'); }, 1000);

        });


        // Toggle of accordion items
        $('.dropdown-toggle').on('click', function(e) {
            $(this).closest('.dropdown-item').toggleClass('active-dropdown');
        });


        // Set card grid items to equal Heights
        $('.size-cards .card-container, .size-item').equalHeights();


    });

    // Initiate "Slick" slider feature-gallery
    $('.feature-gallery').slick({
        dots: true,
        infinite: true,
        speed: 400,
        fade: true,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [{
            breakpoint: 800,
            settings: {
                autoplay: false,
                arrows: false,
                fade: false,
                touchThreshold: 6
            }

        }]
    });


    // Initiate "Slick" slider feature-gallery
    $('.comparison-gallery').slick({
        dots: false,
        infinite: true,
        speed: 1200,
        fade: true,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 3500,
        pauseOnHover: false,
        pauseOnFocus: false,
        responsive: [{
            breakpoint: 800,
            settings: {
                infinite: true,
                autoplay: false,
                arrows: false,
                speed: 400,
                fade: true,
                autoplaySpeed: 1500,
                touchThreshold: 6
            }

        }],
        responsive: [{
            breakpoint: 680,
            settings: {
                infinite: true,
                autoplay: false,
                arrows: false,
                speed: 400,
                fade: false,
                swipe: false,
                autoplaySpeed: 1500,
                touchThreshold: 6
            }

        }]
    });


    // Initiate "Slick" slider feature-gallery
    $('.quote-gallery').slick({
        dots: true,
        infinite: true,
        speed: 700,
        fade: true,
        arrows: true,
        autoplay: false,
        autoplaySpeed: 6500,
        adaptiveHeight: true,
        responsive: [{
            breakpoint: 1200,
            settings: {
                infinite: true,
                arrows: false,
                autoplay: false,
                touchThreshold: 6
            }

        }]
    });


    // Initiate "Slick" slider feature-gallery
    $('.product-options-gallery').slick({
        dots: false,
        infinite: true,
        speed: 400,
        fade: true,
        arrows: false,
        adaptiveHeight: true,
        responsive: [{
            breakpoint: 800,
            settings: {
                autoplay: false,
                arrows: false,
                swipe: false,
                swipeToSlide: false,
                touchMove: false,
                draggable: false
            }

        }]
    });

    // Gallery slide selection controls
    $('a[data-slide]').click(function(e) {
        e.preventDefault();
        var slideno = $(this).data('slide');

        // $('.gallery-container').slick('slickGoTo', slideno - 1);

        $(this).closest('.banner-section').find('.gallery-container').slick('slickGoTo', slideno - 1);
    });

    // Toggle active state of gallery slide selection controls
    $('.gallery-controls-container .option').click(function(e){
        e.preventDefault();
        $(this).addClass('active');
        $(this).parent().find('.option').not(this).removeClass('active');
    });


    // Touch effect class
    $('*[data-touch="true"]').bind('touchstart touchend', function() {
        // e.preventDefault();
        $(this).toggleClass('touch-engaged');
    });

})(jQuery);
