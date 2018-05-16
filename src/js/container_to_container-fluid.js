$(function() {
     if ($(window).width() < 992) {
        $(".container").removeClass("container").addClass("container-fluid");
    }
    else if($(window).width() > 992) {
        $(".container-fluid").removeClass("container-fluid").addClass("container");
    }
});
$(window).resize(function(e){
     if ($(window).width() < 992) {
        $(".container").removeClass("container").addClass("container-fluid");
    }
    else if($(window).width() > 992) {
        $(".container-fluid").removeClass("container-fluid").addClass("container");
    }
});
