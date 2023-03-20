;(function ($) {
    "use strict";
    
    $(document).ready(function() {
        $('ss.gallery').fancybox();
    });

    $(document).ready(function() {

        //Gallery
        $("#featured-gallery").on("click", function() {
          $("[data-fancybox='gallery']").eq(0).trigger("click");
        });

        //Video
        $("#featured-video").fancybox({
            type: "iframe",
        });
    });

 
}(jQuery));