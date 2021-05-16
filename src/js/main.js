import "../scss/fontawesome.scss";
import "../scss/styles.scss";

import $ from "jquery";

var travel = 300;
var over = 0;
if( $(window).width() > 600 ){
    over = ($(window).width() - 600) / 2;
    travel = travel + over;
}

$(window).on("scroll", function() {
    let pos = $(document).scrollTop();
    let div = $(document).height() - $(window).height();
    if( pos > 0.95 * div) {
        if(!$("#contact").hasClass("shown") && !$("#contact").hasClass("active")) {
            $("#to-bottom").on("click");
            $("#contact").addClass("shown");
        }
    }
});

$( function() {
    $("#contact").css("width", travel);  
    $("#contact").css("right", -travel);  
    
    $("#to-bottom").on("click", function () {
        if($("#contact").hasClass("active")){    
            $("#to-bottom i").removeClass("fa-caret-right").addClass("fa-caret-left");
            $("#contact").removeClass("active");
            $("#contact").animate({right: -travel});
        } else {   
            $("#to-bottom i").removeClass("fa-caret-left").addClass("fa-caret-right");
            $("#contact").addClass("active");
            $("#contact").animate({right: -over});
            if(!$("#contact").hasClass("shown")) {
                $("#contact").addClass("shown");
            }
        }
    });
    
    $(".back-to-top").on("click", function() {
        $("html, body").animate({ scrollTop: 0});    
    });
    
});