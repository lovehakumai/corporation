$(function(){
    // Hamburger Menu
    $('.hamburger').on('click',function(){
        if($('#header').hasClass('open')) {
            $('#header').removeClass('open');
        } else {
            $('#header').addClass('open');
        }
    });

    // to TOP
    let pagetop = $('#page-top');
    pagetop.hide(); // 初期値設定は隠す

    $(window).scroll(function(){
        if($(this).scrollTop() > 700){
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });

    // クリックイベント 
    pagetop.click(function(){
        $('body,html').animate({scrollTop: 0}, 500);
        return false;
    });
});