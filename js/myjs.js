$(document).ready(function() {
    //information_outbox
    $(".information_out").click(function() {
        $(this).toggleClass('information_show');
    });
    $(".information_out").mouseleave(function () {
        var turethis = $(this);
        setTimeout(function () {
            turethis.removeClass('information_show');
        }, 500);
    });
    //datepicker_outbox
    $(".datepickerout input ,.datepickerout .icon-icon_date").click(function () {
        $(this).parent(".datepickerout").toggleClass('datepickerout_active');
    });
    //more_plant_outbox
    $(".moreplantbtn").click(function () {
        $(".plantbox").toggleClass('plantbox_active');
    });





    //demo_display_link
    var pagenum = location.hash.replace(/^.*#/, '');
    pagelink_fn();
    function pagelink_fn() {
        if (pagenum == "") {
        } else {
            $(".contentbox").eq(pagenum).fadeIn(300).siblings(".contentbox").fadeOut(0);
        }
    }
});