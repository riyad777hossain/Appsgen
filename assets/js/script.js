(function($) {
    'use strict'

    /* ============================================================
        [Master Stylesheet]

    	Theme Name: Mariana - App Landing HTML Template
    	Theme URI: https://themeforest.net/user/jubaearislam86664
    	Description: Mariana - App Landing HTML Template
    	Author: Riyadhossain 
    	Author URI: 
    	Version: 1.0

    ============================================================== */
    /*
    ========================================
        Preloader
    ========================================
    */
    /* $(window).on('load', function() {
        $('#preloader').delay(200).fadeOut('slow');
        $('body').delay(200).css({
            'overflow': 'visible'
        });
    }); */

    /* 
    =====================================================
        Responsive Menu
    ======================================================
    */


    // Responsive Menu
    $(document).ready(function() {
        // jQuery code
        $("[data-trigger]").on("click", function(e) {
            e.preventDefault();
            e.stopPropagation();
            var offcanvas_id = $(this).attr('data-trigger');
            $(offcanvas_id).toggleClass("show");
            $('body').toggleClass("offcanvas-active");
            $(".screen-overlay").toggleClass("show");
        });

        $(".close, .screen-overlay,.menu-one ul li a").click(function(e) {
            $(".screen-overlay").removeClass("show");
            $(".mobile-offcanvas").removeClass("show");
            $("body").removeClass("offcanvas-active");
            $(".icon").removeClass("icon-bar");

        });

    }); // jquery end

    /* close  */
    $('.icon').click(function() {
        $('.icon').toggleClass('icon-bar');
    });
    /* ===============================================
            AddClass menu js
       ===============================================
    */

    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 100) {
            $("#mainNav").addClass("shrinkheader");
        } else {
            $("#mainNav").removeClass("shrinkheader");
        }
    });



    /* 
    =====================================================
        Start active menu
    ======================================================
    */

    var sections = jQuery('section'),
        nav = jQuery('nav'),
        nav_height = nav.outerHeight();

    jQuery(window).on('scroll', function() {
        var cur_pos = jQuery(this).scrollTop();

        sections.each(function() {
            var top = jQuery(this).offset().top - nav_height,
                bottom = top + jQuery(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('active');
                sections.removeClass('active');

                jQuery(this).addClass('active');
                nav.find('a[href="#' + jQuery(this).attr('id') + '"]').addClass('active');
            }
        });
    });


    /*
    ========================================
        Counter-Up
    ========================================
    */

    if ($('.counts').length) {
        $('.counts').countUp({
            'time': 2000,
            'delay': 30
        });
    };

    /*
    ========================================
        Magnific Popup
    ========================================
    */

    $('.video-play-btn').magnificPopup({
        type: 'iframe'
    });

    /* gallery */
    /* $('.images-gallery').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    }); */
    /* 
    ========================================
        portfolio filter
    ========================================
    */
    /* if ($('.images-loads').length) {
        $('.images-loads').imagesLoaded(function() {
            var $grid = $('.portfolio-filters').isotope({
                itemSelector: '.grid-item',
            });
            // filter items on button click
            $('.filter-button-group').on('click', 'button', function() {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({ filter: filterValue });
            });
            //for filter button active class
            $('.filter-button-group button').on('click', function(event) {
                $(this).siblings('.active').removeClass('active');
                $(this).addClass('active');
                event.preventDefault();
            });
        });
    }; */
    /* 
    ========================================
        slick slide
    ========================================
    */
    $('.hero-logo').slick({
        dots: false,
        fade: false,
        speed: 2500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 500,
        pauseOnHover: true,
        arrows: false,
        responsive: [{
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
        ]
    });

    $('.slide-discover').slick({
        dots: true,
        fade: false,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 5000,
        centerMode: true,
        arrows: false,
        variableWidth: true,
        responsive: [{
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 424,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });


    $('.testimonial-left').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.testimonial-right',
    });
    $('.testimonial-right').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.testimonial-left',
        dots: false,
        centerMode: false,
        arrows: false,
        focusOnSelect: false,
        autoplay: true,
        autoplaySpeed: 6000,
        pauseOnHover: true,
    });


    /* 
    ========================================
        introduce-tab
    ========================================
    */
    $('ul.tabs li').click(function() {
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('active');
        $('.tab-content').removeClass('active');

        $(this).addClass('active');
        $("#" + tab_id).addClass('active');
    });


    /*
        ========================================
        accordion
        ========================================
        */

    if ($('.accordion').length) {
        // (Optional) Active an item if it has the class "is-active"	
        $(".accordion > .accordion-item.is-active").children(".accordion-panel").slideDown();

        $(".accordion > .accordion-item").on('click', function() {
            // Cancel the siblings
            $(this).siblings(".accordion-item").removeClass("is-active").children(".accordion-panel").slideUp();
            // Toggle the item
            $(this).toggleClass("is-active").children(".accordion-panel").slideToggle("ease-out");
        });
    }

    /*
    ========================================
    Scroll to top
    ========================================
    */


    function scrollToTop() {
        var $scrollUp = $('#scroll-top'),
            $lastScrollTop = 0,
            $window = $(window);

        $window.on('scroll', function() {
            var st = $(this).scrollTop();
            if (st > $lastScrollTop) {
                $scrollUp.removeClass('show');
            } else {
                if ($window.scrollTop() > 200) {
                    $scrollUp.addClass('show');
                } else {
                    $scrollUp.removeClass('show');
                }
            }
            $lastScrollTop = st;
        });

        $scrollUp.on('click', function(evt) {
            $('html, body').animate({ scrollTop: 0 }, 600);
            evt.preventDefault();
        });
    }
    scrollToTop();

    /* 
    ========================================
        Wow Animation
    ========================================
    */

    new WOW().init();


})(jQuery);