;(function ($) {
    "use strict";
    
    $(document).ready(function() {
        $('.gallery').fancybox();
    });
    $(document).ready(function() {
        //Featured Gallery
        $("#featured-gallery").on("click", function() {
          $("[data-fancybox='tf-gallery']").eq(0).trigger("click");
        });
        //Featured Video
        $("#featured-video").fancybox({
            type: "iframe",
        });
    });

    // Tour person Info
    $('.tf-trip-person-info .person-info').click(function() {
        $('.person-info.active').removeClass('active');
        $(this).addClass('active');
    });

    // Itininary Section active
    $('.tf-itinerary-items .tf-single-itinerary-item').click(function() {
        $('.tf-single-itinerary-item.active').removeClass('active');
        $(this).addClass('active');
    });

    // Itininary Section sliding
    $('.tf-single-itinerary-item').find('.tf-itinerary-content-box').hide();
    $('.tf-single-itinerary-item.active').find('.tf-itinerary-content-box').show();
    
    $('.tf-itinerary-items .tf-itinerary-title').click(function() {
        $(this).siblings('.tf-itinerary-content-box').slideToggle();
    });

    //Faq section
    $('.tf-faq-inner .tf-faq-title').click(function() {
        $('.tf-faq-single').removeClass('active');
        $(this).closest('.tf-faq-single').addClass('active');
    });

    $('.tf-faq-single').find('.tf-faq-content ').hide();
    $('.tf-faq-single.active').find('.tf-faq-content').show();
    $('.tf-faq-single-inner .tf-faq-title').click(function() {
        $('.tf-faq-single-inner .tf-faq-title').siblings('.tf-faq-content').hide();
        $(this).siblings('.tf-faq-content').show();
    });
    
 
}(jQuery));