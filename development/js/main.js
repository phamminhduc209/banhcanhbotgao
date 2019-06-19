(function ($) {
    "use strict";

    $(window).scroll(function () {
        if ($(this).scrollTop() >= 200) {
            $('#return-to-top').addClass('td-scroll-up-visible');
        } else {
            $('#return-to-top').removeClass('td-scroll-up-visible');
        }
    });
    $('#return-to-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 'slow');
    });

    $('.product_qty .qty_inc').click(function () {
        var val = $('.product_qty .control input').val();
        $('.product_qty .control input').val(parseInt(val) + 1);
    });
    $('.product_qty .qty_dec').click(function () {
        var val = $('.product_qty .control input').val();
        if (val > 1)
            $('.product_qty .control input').val(parseInt(val) - 1);
    });

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

    $('.btn_mobile_nav').click(function () {
        $('html').css('overflow', 'hidden');
        $('.m_menu_mobile_overlay').addClass('active');
        $('.m_menu_mobile').addClass('active')
    });
    $('.m_menu_mobile_close').click(function () {
        $('html').css('overflow', '');
        $('.m_menu_mobile_overlay').removeClass('active');
        $('.m_menu_mobile').removeClass('active')
    });

    $('.btn_mobile_cart').click(function () {
        $('html').css('overflow', 'hidden');
        $('.m_cart_mobile_overlay').addClass('active');
        $('.m_cart_mobile').addClass('active')
    });
    $('.m_cart_mobile_close').click(function () {
        $('html').css('overflow', '');
        $('.m_cart_mobile_overlay').removeClass('active');
        $('.m_cart_mobile').removeClass('active')
    });

    function reduceFooter() {
        var HeightBtn = $('.m_btn_booknow').height() + 20;
        $('.footer').css('padding-bottom', HeightBtn);
    }

    reduceFooter();
    $(window).on('load resize', function () {
        reduceFooter();
    })

    $('.shipping_address_other').hide();
    if ($("#other_address").is(':checked')) {
        $(this).parent().next().show();
    } else {
        // Code in the case checkbox is NOT checked.
    }

})(jQuery); // End of use strict