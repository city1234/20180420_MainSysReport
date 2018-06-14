$(document).ready(function() {
    //information_outbox
    /*
    $(".information_out").click(function() {
        $(this).toggleClass('information_show');
    });
    $(".information_out").mouseleave(function () {
        var turethis = $(this);
        setTimeout(function () {
            turethis.removeClass('information_show');
        }, 500);
    });
    */
    //datepicker_outbox
    $(".datepickerout input ,.datepickerout .icon-icon_date").click(function () {
        $(this).parent(".datepickerout").toggleClass('datepickerout_active');
        $(".plantbox").removeClass('plantbox_active');
    });
    //more_plant_outbox
    $(".moreplantbtn").click(function () {
        $(".plantbox").toggleClass('plantbox_active');
        $(".datepickerout").removeClass('datepickerout_active');
    });
    //icon-check_circle_active
    $("td:not('.check_all') .icon-check_circle").click(function () {
        $(this).toggleClass('active');
    });
    $(".check_all").click(function () {
        $(this).children('i.icon-check_circle').toggleClass('active');
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


    //outbox
    $(".outpayboxtoggle").click(function () {
        $(".outboxout").fadeToggle(300);
    });
});
