$(document).ready(function() {
    $(".information_out").click(function() {
        $(this).toggleClass('information_show');
    });
    $(".information_out").mouseleave(function () {
        var turethis = $(this);
        setTimeout(function () {
            turethis.removeClass('information_show');
        }, 500);
    });
    $(".datepickerout input ,.datepickerout .icon-icon_date").click(function () {
        $(this).parent(".datepickerout").toggleClass('datepickerout_active');
    });
    $(".moreplantbtn").click(function () {
        $(".plantbox").toggleClass('plantbox_active');
    });
    /*
    $(".datepickerout .icon-icon_date").click(function () {
        $(this).parent(".datepickerout").removeClass('datepickerout_active');
    });
    */
   /*
    $(".datepickerout").mouseleave(function () {
        var turethis = $(this);
        setTimeout(function () {
            turethis.removeClass('datepickerout_active');
        }, 500);
    });
    */


    /*allheight*/
    var domminheight = $(window).height() - 35;
    $("body").css("min-height", domminheight);
    /*endallheight*/

    /*animatetop*/
    $(".top").click(function() {
        $('html,body').animate({ scrollTop: 0 }, 300);
    });
    /*endanimatetop*/

    

    /*linkhashanimate*/
    $(function() {

        $(".awardlistbtn a").click(function() {
            var target = $(this.hash);
            $("html,body").animate({
                scrollTop: target.offset().top
            }, 500);
            return false;
        });
    });
    /*endlinkhashanimate*/

});
