$(window).scroll(function() {
    if ($(window).scrollTop() > 10) {
        $('.navBar').addClass('shadow-sm');
    } else {
        $('.navBar').removeClass('shadow-sm');
    }
});