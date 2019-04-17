$( document ).ready(function() {
    $('.switch input[type="checkbox"]').change(function(){        
        if($(this).is(":checked")) {
            $('body').addClass("orange-theme").removeClass("blue-theme");
        } else {
            $('body').removeClass("orange-theme").addClass("blue-theme");
        }
    });
});