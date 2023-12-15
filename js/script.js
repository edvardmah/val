$(document).ready(function() {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
            $('.nav_bar').addClass('black-background');
        } else {
            $('.nav_bar').removeClass('black-background');
        }
    });
});