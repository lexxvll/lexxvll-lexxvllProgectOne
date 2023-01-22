$(document).ready(function() {

    let header = $("#header"),
        introH = $("#home").innerHeight(),
        scrollOffset = $(window).scrollTop();
    /* Fixed Header */

    checkScroll(scrollOffset);

    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset);

    });

    function checkScroll(scrollOffset) {
        if (scrollOffset >= introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    /* Smooth Scroll */

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this)
        blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("#nav a").removeClass("active");
        $this.addClass("active");

        $("html, body").animate({
            scrollTop: blockOffset
        }, 200);
    });

    $('.image-link').magnificPopup({ type: 'image' });

    $(function() {
        $('.popup-modal').magnificPopup({
            type: 'inline',
            preloader: false,
            focus: '#username',
            modal: true
        });
        $(document).on('click', '.popup-modal-dismiss', function(e) {
            e.preventDefault();
            $.magnificPopup.close();
        });
    });

    //Модальное окно записи
    /*$(".popup-btn").on("click", function(event) {
        event.preventDefault();
        $(".popup").fadeIn();
    });

    /* Кнопка закрывания модальных окон */
    /*$(".popup-close").on("click", function(event) {
        event.preventDefault();
        $(".popup, .popup-topping, .popup-stock").fadeOut();
    });*/
});