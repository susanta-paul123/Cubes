
        $('.cubes-module-carousel .owl-carousel').owlCarousel({
            // loop: true,
            autoplay: false,
            autoplayTimeout:4000,
            autoplaySpeed: 1500,
            smartSpeed: 1500,
            margin:30,
            lazyLoad: true,
            items: 1,
            responsiveClass: true,
            nav: true,
            dots: false,
            responsive: {
                0: {
                    items:1,
                },
                768: {
                    items: 2
                },
                1024: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            }
        });

        //

        // our-service-carousel
        $('.testimonials-carousel .owl-carousel').owlCarousel({
            loop: true,
            autoplay: false,
            autoplayTimeout: 6000,
            autoplaySpeed: 1500,
            smartSpeed: 1500,
            margin:15,
            lazyLoad: true,
            items: 1,
            responsiveClass: true,
            nav: false,
            dots: true,
            center:true,
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });


if ($('div').hasClass('timeline')) {
    var timelineCarousel = $('#timeline');

    timelineCarousel.owlCarousel({

            loop: false,
            // nav:true,
            dots:false,
            margin: 30,
            autoplay: false,
            autoplayTimeout: 2000,
            autoplayHoverPause: true,
            touchDrag:false,
            slideBy: 2,
            responsive: {
                0: {
                    items: 1
                },
                992: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });

    $(".pwNext").click(function() {
        timelineCarousel.trigger('next.owl.carousel');
    });
    $(".pwPrev").click(function() {
        timelineCarousel.trigger('prev.owl.carousel');
    });
}

if ($('div').hasClass('timeline')) {
    var timelineCarousel2 = $('#timeline2');

    timelineCarousel2.owlCarousel({

            loop: false,
            // nav:true,
            dots:false,
            margin: 0,
            autoplay: false,
            autoplayTimeout: 2000,
            autoplayHoverPause: true,
            touchDrag:false,
            slideBy: 1,
            center:true,
            responsive: {
                0: {
                    items: 4
                },
                992: {
                    items: 5
                },
                1000: {
                    items: 6
                }
            }
        });

    $(".pwNext").click(function() {
        timelineCarousel2.trigger('next.owl.carousel');
    });
    $(".pwPrev").click(function() {
        timelineCarousel2.trigger('prev.owl.carousel');
    });
}

$('.rc-carousel .owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout:4000,
    autoplaySpeed: 1500,
    smartSpeed: 1500,
    margin:30,
    lazyLoad: true,
    items: 1,
    responsiveClass: true,
    nav: false,
    dots: false,
    responsive: {
        0: {
            items:1,
        },
        768: {
            items: 2
        },
        1024: {
            items: 3
        },
        1200: {
            items: 3
        }
    }
});

//WHAT WE OFFER YOU

$('.offer-carousel .owl-carousel').owlCarousel({
    // loop: true,
    autoplay: true,
    autoplayTimeout:4000,
    autoplaySpeed: 1500,
    smartSpeed: 1500,
    margin:30,
    lazyLoad: true,
    items: 1,
    responsiveClass: true,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items:1,
        },
        768: {
            items: 2
        },
        1024: {
            items: 3
        },
        1200: {
            items: 4
        }
    }
});
//


//Guides

$('.guides-carousel .owl-carousel').owlCarousel({
// loop: true,
autoplay: false,
autoplayTimeout:4000,
autoplaySpeed: 1500,
smartSpeed: 1500,
margin:30,
lazyLoad: true,
items: 1,
responsiveClass: true,
nav: true,
dots: false,
responsive: {
    0: {
        items:1,
    },
    768: {
        items: 2
    },
    1024: {
        items: 3
    },
    1200: {
        items: 3
    }
}
});
//  

//material

if ($('div').hasClass('material-carousel')) {
var materialCarousel = $('#materialCarousel');

materialCarousel.owlCarousel({

        loop: false,
        // nav:true,
        dots:false,
        margin: 30,
        autoplay: false,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        touchDrag:false,
        slideBy: 2,

        onInitialize: function (event) {
            if ($('.material-carousel .item').length > 2) {
               
               $('.material-carousel-btn button').show()
            }else{
                $('.material-carousel-btn button').hide() 
            }
        },

        responsive: {
            0: {
                items: 1
            },
            992: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
    });

$(".pwNext").click(function() {
    materialCarousel.trigger('next.owl.carousel');
});
$(".pwPrev").click(function() {
    materialCarousel.trigger('prev.owl.carousel');
});
}


//social-feed-carousel

$('.social-feed-carousel .owl-carousel').owlCarousel({
// loop: true,
autoplay: false,
autoplayTimeout:4000,
autoplaySpeed: 1500,
smartSpeed: 1500,
margin:30,
lazyLoad: true,
items: 1,
responsiveClass: true,
nav: true,
dots: false,
responsive: {
    0: {
        items:1,
    },
    768: {
        items: 1
    },
    1024: {
        items: 2
    },
    1200: {
        items: 2
    }
}
});


// 




//
$("#phone").intlTelInput({});
$("#phone2").intlTelInput({});
$("#phone3").intlTelInput({});
$("#phone4").intlTelInput({});
$("#phone5").intlTelInput({});
$("#phone6").intlTelInput({});
$("#phone7").intlTelInput({});
$("#phone8").intlTelInput({});


$("#phone, #phone2, #phone3, #phone4,#phone5,#phone6,#phone7,#phone8").val('')


 //Resource Areas
 $('.wc-accordion .question').eq(0).addClass('show');
 $('.wc-accordion .question').on('click', function(){
     $(this).toggleClass('show');
     $(this).next('.answer').slideToggle()
     $(this).siblings().next('.answer').slideUp();
     $(this).siblings('.question').removeClass('show');
 })
 
 //

 $(".more-link").click(function(){
    $('.some-links-wrap').toggleClass('open');
})
$('.close-link').click(function(){
    $('.some-links-wrap').removeClass('open');
})

//



$( function() {
    $( "#selectDate" ).datepicker();
    
});



if($(window).width() >= 991){
    var divs = $(".wdco-lists > li");
    for(var i = 0; i < divs.length; i+=3) {
        divs.slice(i, i+3).wrapAll("<div class='wdco-list'></div>");
    }
}else{
    
    var divs = $(".wdco-lists > li");
    for(var i = 0; i < divs.length; i+=2) {
    divs.slice(i, i+2).wrapAll("<div class='wdco-list'></div>");
}
}
//


//increment counter code
var a = 0;
$(window).scroll(function () {

    var sticky = $('header'),
            scroll = $(window).scrollTop();

        if (scroll >= 250) {
            sticky.addClass('sticky-nav');
            $('body').addClass('fixed-content');
        } else {
            sticky.removeClass('sticky-nav');
            $('body').removeClass('fixed-content');
        }
//

    var oTop = $(".counter-box").offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
        $(".counter").each(function () {
            var $this = $(this),
                countTo = $this.attr("data-number");
            $({
                countNum: $this.text()
            }).animate(
                {
                    countNum: countTo
                },

                {
                    duration: 850,
                    easing: "swing",
                    step: function () {
                        $this.text(
                            Math.ceil(this.countNum).toLocaleString("en") + "+"
                        );
                    },
                    complete: function () {
                        $this.text(
                            Math.ceil(this.countNum).toLocaleString("en") + "+"
                        );

                        $this.addClass('zoom-text')
                    }
                }
            );
        });

        
        $(".counter2").each(function () {
            var $this = $(this),
                countTo = $this.attr("data-number");
            $({
                countNum: $this.text()
            }).animate(
                {
                    countNum: countTo
                },

                {
                    duration: 850,
                    easing: "swing",
                    step: function () {
                        $this.text(
                            Math.ceil(this.countNum).toLocaleString("en") + "k"
                        );
                    },
                    complete: function () {
                        $this.text(
                            Math.ceil(this.countNum).toLocaleString("en") + "k"
                        );
                        $this.addClass('zoom-text')
                    }
                }
            );
        });
        a = 1;
    }
});

//

AOS.init({
    once: true,
});

//home page slider counter       
var totalItems = $('.carousel-item').length;
var currentIndex = $('.carousel-item.active').index() + 1;
    $('.num').html('' + currentIndex + '/' + totalItems + '');

    // console.log(currentIndex)

    var myCarousel = document.getElementById('cubeSlider')
    
    myCarousel.addEventListener('slide.bs.carousel', function () {
        var currentIndex = $('.carousel-item.active').next().index() + 1;

        if(currentIndex === 0){
            $('.num').html('' + 1 + '/' + totalItems + ''); 
        }
        else{
            $('.num').html('' + currentIndex + '/' + totalItems + ''); 
        }
    })


$('.dbopen').click(function(){
    $("#downloadBrochure").show(); 
    $("#downloadBrochure").addClass('show'); 
    $("#downloadBrochure").attr("aria-modal", "true");
    $("#downloadBrochure").removeAttr("aria-hidden");
    // $("#downloadBrochure").removeAttr("style");
    $('body').append('<div class="modal-backdrop show"/>');
})

$('.abc').click(function(){
    $("#downloadBrochure").hide(); 
    $("#downloadBrochure").removeClass('show'); 
    $("#downloadBrochure").removeAttr("aria-modal");
    // $("#downloadBrochure").removeAttr("style");
    $("#downloadBrochure").attr("aria-hidden", "true");
    $('.modal-backdrop').remove();
})

// $('.some-links li')
// $(".some-links li").hasClass('.dd').prepend('<span class="down"></span>');


$(".dd").parent('li').prepend('<span class="down"></span>')













