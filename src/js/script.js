$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        /*adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000,*/
        prevArrow: '<button type="button" class="slick-prev"><img src="../img/catalogue/chevron-left.svg"></button>',
        nextArrow:'<button type="button" class="slick-next"><img src="../img/catalogue/chevron-right.svg"></button>',

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]

        }
    );
});