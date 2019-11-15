/*$('.btn-on').click(function () {
    var id = $(this).attr('id');
    var offset = $('#' + id + '-scroll').offset();
    $('.menu-bar').toggleClass('dis-none');
    if (window.innerWidth < 768) {
        $('.nav-menu').stop().slideToggle();
        $('html, body').animate({scrollTop : offset.top - 100}, 400);
    } else {
        $('html, body').animate({scrollTop : offset.top - 100}, 400);
    }


});*/

$('.menu-bar').click(function () {
    if (window.innerWidth < 768) {
        $('.nav-menu').stop().slideToggle();
        $('.nav-menu li').css('color', '#fff').css('background', '#000');
        $('.menu-bar').css('color', '#fff');
        $('.menu-bar').toggleClass('dis-none');
        if (menuSwitch == true) {
            if ($('.header').css('background-color') != 'rgb(0, 0, 0)') {
                $('.header').css('background', '#000');
                $('.menu-bar').css('color', '#fff')
                $('#menu-on').addClass('dis-none');
                $('#menu-off').removeClass('dis-none');
                $('#white-logo').removeClass('dis-none');
                $('#black-logo').addClass('dis-none');
            } else {
                $('.header').css('background', '#fff');
                $('.menu-bar').css('color', '#000');
                $('#menu-on').removeClass('dis-none');
                $('#menu-off').addClass('dis-none');
                $('#white-logo').addClass('dis-none');
                $('#black-logo').removeClass('dis-none');
            }
        }
    }
});