$(function() {
     if ($(window).width() < 1200) {
        $(".container").removeClass("container").addClass("container-fluid");
    }
    else if($(window).width() > 1200) {
        $(".container-fluid").removeClass("container-fluid").addClass("container");
    }
});
$(window).resize(function(e){
     if ($(window).width() < 1200) {
        $(".container").removeClass("container").addClass("container-fluid");
    }
    else if($(window).width() > 1200) {
        $(".container-fluid").removeClass("container-fluid").addClass("container");
    }
});
