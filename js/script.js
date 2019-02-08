$(function () {
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:1,
                dots:true,
                nav:false
            },
            767:{
                items:2,
                dots:true,
                nav:false
            },
            1200:{
                items:3
            }
        }
    });

    $("a[href^='#']").click(function(){
        var _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });

    $('.top-animate__block').addClass('active');
});