(function ($) {
    "use strict";

    // Back To Top
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 200) {
            $('.td_scroll_up').addClass('td_scroll_up_visible');
        } else {
            $('.td_scroll_up').removeClass('td_scroll_up_visible');
        }
    });
    $('.td_scroll_up').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 'slow');
    });

    // Increase or decrease in quantity
    $('.product_qty .qty_inc').click(function () {
        var val = $('.product_qty .control input').val();
        $('.product_qty .control input').val(parseInt(val) + 1);
    });
    $('.product_qty .qty_dec').click(function () {
        var val = $('.product_qty .control input').val();
        if (val > 1)
            $('.product_qty .control input').val(parseInt(val) - 1);
    });

    // Slide Carousel 
    $(document).ready(function () {
        $(".owl-carousel").each(function (index, el) {
            var config = $(this).data();
            config.navText = ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'];
            config.smartSpeed = "800";
            if ($(this).hasClass('owl-style2')) {
                config.animateOut = "fadeOut";
                config.animateIn = "fadeIn";
            }
            if ($(this).hasClass('dotsData')) {
                config.dotsData = "true";
            }
            $(this).owlCarousel(config);
        });
    });

    // Show menu on mobile
    $('.btn_mobile_nav').click(function () {
        $('html').css('overflow', 'hidden');
        $('.m_menu_mobile_overlay').addClass('active');
        $('.m_menu_mobile').addClass('active')
    });
    // Hide menu on mobile
    $('.m_menu_mobile_close').click(function () {
        $('html').css('overflow', '');
        $('.m_menu_mobile_overlay').removeClass('active');
        $('.m_menu_mobile').removeClass('active')
    });

    // Show cart on mobile
    $('.btn_mobile_cart').click(function () {
        $('html').css('overflow', 'hidden');
        $('.m_cart_mobile_overlay').addClass('active');
        $('.m_cart_mobile').addClass('active')
    });
    // Hide cart on mobile
    $('.m_cart_mobile_close').click(function () {
        $('html').css('overflow', '');
        $('.m_cart_mobile_overlay').removeClass('active');
        $('.m_cart_mobile').removeClass('active')
    });

    // Footer is not covered under mobile
    function reduceFooter() {
        var HeightBtn = $('.m_btn_booknow').height() + 20;
        $('.footer').css('padding-bottom', HeightBtn);
    };
    reduceFooter();
    $(window).on('load resize', function () {
        reduceFooter();
    });

    // Sticky Header
    $(document).ready(function(){
        $(".header_inner").sticky({
            topSpacing: 0,
            zIndex: 9,
        });
    });

})(jQuery); // End of use strict