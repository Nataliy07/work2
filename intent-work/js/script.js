; (function ($) {
    $(document).ready(function () {


        $('.hamburger').click(function () {
            $('nav').toggleClass('nav-open');
        });

        // slider
        $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
        });
        $('.slider-nav').slick({
            slidesToShow: 10,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            // dots: true,
            // arrows: true,
            centerMode: true,
            focusOnSelect: true,
            responsive: [
                {
                    breakpoint: 854,
                    settings: {
                        slidesToShow: 8,
                        slidesToScroll: 1,
                        autoplay: true,
                        autoplaySpeed: 2000,
                        arrows: false,
                    }
                }
            ]
        });

        (function () {
            var blocks = document.querySelectorAll(".r1");
            var tabs = document.querySelectorAll(".r2");
            for (var i = 0; i < blocks.length; i++) {
                blocks[i].addEventListener("click", function () {
                    for (var j = 0; j < blocks.length; j++) {
                        blocks[j].classList.remove("active");
                    }

                    this.classList.add("active");
                }, false);
            }
            for (var i = 0; i < tabs.length; i++) {
                tabs[i].addEventListener("click", function () {
                    for (var j = 0; j < tabs.length; j++) {
                        tabs[j].classList.remove("active");
                    }
                    this.classList.add("active");
                }, false);
            }
        })();


        $('#send-request-form').submit(function (e) {
            e.preventDefault();
            var first_name = $('#firstName').val();
            var last_name = $('#lastName').val();
            var email = $('#email').val();
            var url = $('#url').val();
            var message = $("#message").val();

            $(".error").remove();

            if (first_name.length < 1) {
                $('#firstName').after('<span class="error">This field is required</span>');
            }
            if (last_name.length < 1) {
                $('#lastName').after('<span class="error">This field is required</span>');
            }
            if (message.length > 20) {
                $('#message').after('<span class="error">This field is required</span>');
            }

            if (email.length < 1) {
                $('#email').after('<span class="error">This field is required</span>');
            } else {
                var regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                var validEmail = regEx.test(email);
                if (!validEmail) {
                    $('#email').after('<span class="error">Enter a valid email</span>');
                }
            }
            if (url.length < 8) {
                $('#url').after('<span class="error">Password must be atleast 8 characterslong</span>');
            }


            $("#send").click(function () {
                console.log(first_name);
                console.log(last_name);
                console.log(email);
                console.log(url);
                console.log(message);
                $("form")[0].reset();

            });

        });




    });
})(jQuery);

