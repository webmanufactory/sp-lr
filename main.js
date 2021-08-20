$(document).ready(function () {
    $('.seo-more__item').slideUp();

    $('.seo-more__btn').click(function () {
        $(this).toggleClass('seo-more__btn--active')
        $('.seo-more__item').slideToggle();
    })

    // var slider = document.getElementById("car-calc__range");
    // var output = document.getElementById("car-calc__total");
    // output.innerHTML = slider.value;

    // slider.oninput = function () {
    //     output.innerHTML = this.value;
    // }
    $(".faq__expand").click(function (e) {
        e.preventDefault();
        $(this).toggleClass("faq__expand--active");
        $(this).parents().eq(1).find(".faq__answer").slideToggle();
    });
    $('.diagnostic-review__items').slick({
        centerMode: true,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: '<button class="diagnostic-review__select diagnostic-review__select--prev slick-arrow" style=""><svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25 50C38.8071 50 50 38.8071 50 25C50 11.1929 38.8071 0 25 0C11.1929 0 0 11.1929 0 25C0 38.8071 11.1929 50 25 50Z" fill="#F1F1F1"></path><path d="M10.9393 23.9393C10.3536 24.5251 10.3536 25.4749 10.9393 26.0607L20.4853 35.6066C21.0711 36.1924 22.0208 36.1924 22.6066 35.6066C23.1924 35.0208 23.1924 34.0711 22.6066 33.4853L14.1213 25L22.6066 16.5147C23.1924 15.9289 23.1924 14.9792 22.6066 14.3934C22.0208 13.8076 21.0711 13.8076 20.4853 14.3934L10.9393 23.9393ZM37 23.5H12V26.5H37V23.5Z" fill="#04AC69"></path></svg></button>',
        prevArrow: '<button class="diagnostic-review__select diagnostic-review__select--next slick-arrow" style=""><svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25 50C38.8071 50 50 38.8071 50 25C50 11.1929 38.8071 0 25 0C11.1929 0 0 11.1929 0 25C0 38.8071 11.1929 50 25 50Z" fill="#F1F1F1"></path><path d="M38.0607 26.0607C38.6464 25.4749 38.6464 24.5251 38.0607 23.9393L28.5147 14.3934C27.9289 13.8076 26.9792 13.8076 26.3934 14.3934C25.8076 14.9792 25.8076 15.9289 26.3934 16.5147L34.8787 25L26.3934 33.4853C25.8076 34.0711 25.8076 35.0208 26.3934 35.6066C26.9792 36.1924 27.9289 36.1924 28.5147 35.6066L38.0607 26.0607ZM12 26.5H37V23.5H12V26.5Z" fill="#04AC69"></path></svg></button>',
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
        ]
    });
});