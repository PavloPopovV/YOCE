$(function () {
    $('.plugin__input_jmp').mask('+38(000)000-00-00');
});

$(function () {
    $('.lang').on('click', function () {
        $('.lang').removeClass('active');
        $(this).addClass('active');
    });
});

$(function () {
    $("#icon_block").on("click", function (e) {
        $(".media_icon").show();
        e.preventDefault();
    });
});

$(function () {
    $('.faq_one').click(function (e) {
        $('.question_one').slideToggle();
        e.preventDefault();
    });
    $('.faq_two').click(function (e) {
        $('.question_two').slideToggle();
        e.preventDefault();
    });
    $('.faq_three').click(function (e) {
        $('.question_three').slideToggle();
        e.preventDefault();
    });
    $('.faq_four').click(function (e) {
        $('.question_four').slideToggle();
        e.preventDefault();
    });
    $('.faq_five').click(function (e) {
        $('.question_five').slideToggle();
        e.preventDefault();
    });
});

$(function () {
    $('.form_question').submit(function (e) {
        var empty = $(this).parent().find("input").filter(function () {
            return this.value === "";
        });
        if (!empty.length) {
            $('.form_box_wrapper').show();
            e.preventDefault();
        }
        
    })

    $(".window_order_close").on("click", function () {
        $(".form_box_wrapper").hide();
        $(".news_modal_wrapper").hide();
    });
});

$(function () {
    function onEntry(entry) {
        entry.forEach(change => {
            if (change.isIntersecting) {
                change.target.classList.add('element-show');
            } else {
                change.target.classList.remove('element-show');
            }
        });
    }

    let options = {
        threshold: [0.5]
    };
    let observer = new IntersectionObserver(onEntry, options);
    let elements = document.querySelectorAll('.element-animation');

    for (let elm of elements) {
        observer.observe(elm);
    }
});

$(function () {
    $('.news_slider').slick({
        arrows: false,
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots:false,
                    arrows:true,
                }
            }
        ]
    });
});

$(".news_card_button").on("click", function () {
    $(".news_modal_wrapper").show();
});
