/*Testimonials carousel*/
$(document).ready(function(){
    $('.t-carousel-wrapper').slick({
        dots: true,
        prevArrow: false,
        nextArrow: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        adaptiveHeight: true
    });
    /*Latest blog carousel*/
    $('.b-carousel_wrapper').slick({
        dots: true,
        prevArrow: false,
        nextArrow: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    /*Anchors*/
    $(".navigation a, .banner-scroll").on('click', function(event){
        event.preventDefault();
        console.log(event);
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 1000);
        $('.navigation').fadeOut();
        $('.burg-wrapper').removeClass('change');
    });
    /*menu burger*/
    $('.burg-wrapper').click(function() {
        $('.navigation').fadeToggle();
        $('.navigation').animate({width: '100%'});
        $(".burg-wrapper").toggleClass('change');
    })
});
