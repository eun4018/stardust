$(document).ready(function () {
  // typing animation
  (function ($) {
    $.fn.writeText = function (content) {
      var contentArray = content.split(""),
        current = 0,
        elem = this;
      setInterval(function () {
        if (current < contentArray.length) {
          elem.text(elem.text() + contentArray[current++]);
        }
      }, 80);
    };
  })(jQuery);

  // input text for typing animation
  
  if($("body").hasClass("japan") === true) {

    $("#holder").writeText("こんにちは。ジョンソウンのポートフォリオです。");
    
    } else {
    
      $("#holder").writeText("안녕하세요. 정서은의 포트폴리오입니다.");
    
    }

  // initialize wow.js
  new WOW().init();

  // Push the body and the nav over by 285px over
  var main = function () {
    $(".fa-bars").click(function () {
      $(".nav-screen").animate(
        {
          right: "0px"
        },
        200
      );

      $("body").animate(
        {
          right: "100%"
        },
        200
      );
    });

    // Then push them back */
    $(".fa-times").click(function () {
      $(".nav-screen").animate(
        {
          right: "-100%"
        },
        200
      );

      $("body").animate(
        {
          right: "0px"
        },
        200
      );
    });

    $(".nav-links a").click(function () {
      $(".nav-screen").animate(
        {
          right: "-100%"
        },
        500
      );

      $("body").animate(
        {
          right: "0px"
        },
        500
      );
    });
  };
  $('.langset').on('click',function(){
    $('.lang_pc ul').toggleClass('active',function(){
      $('.lang_pc ul li').on('click',function(){
        var current = $(this).html();
        $(".langset").html(current);
      })
    });
  })
  $(document).ready(main);

  // initiate full page scroll

  $("#fullpage").fullpage({
    scrollBar: true,
    responsiveWidth: 414,
    navigation: true,
    navigationTooltips: ["home", "about", "portfolio", "contact"],
    anchors: ["home", "about", "portfolio", "contact"],
    menu: "#myMenu",
    fitToSection: true,

    afterLoad: function (anchorLink, index) {
      var loadedSection = $(this);
     //using index
     if (index == 1) {
      /* add opacity to arrow */
      $(".fa-chevron-down").each(function () {
        $(this).css("opacity", "1");
      });
      $(".header-links a").each(function () {
        $(this).css("color", "#fff");
      });
      $(".header-links > .lang_pc ul").css("border","1px solid #fff")
      $(".header-links").css("background-color", "transparent");
    } else if (index != 1) {
      $(".header-links a").each(function () {
        $(this).css("color", "#222");
      });
      $(".header-links > .lang_pc ul").css("border","1px solid #222")
      $(".header-links").css("background-color", "transparent");
    }

      //using index
      if (index == 2) {
        /* animate skill bars */
        $(".skillbar").each(function () {
          $(this).find(".skillbar-bar")
            .animate(
              {
                width: $(this).attr("data-percent")
              },
              2500
            );
        });
      }
      if (index = 3){
        $('.port-btn').on('click',function(){
          $('html,body').css({'overflow': 'hidden'});
          $('html,body').on('scroll touchmove mousewheel', function(event) {
            event.preventDefault();
            event.stopPropagation();
            return false;
            });
          $('.close').on('click',function(){
            $('html, body').css({'overflow': 'initial','height':'auto'});
            $('html,body').off('scroll touchmove mousewheel');
          })
        })

      }
    }
  });
  // move section down one
  $(document).on("click", "#moveDown", function () {
    $.fn.fullpage.moveSectionDown();
  });
  // fullpage.js link navigation
  $(document).on("click", "#skills", function () {
    $.fn.fullpage.moveTo(2);
  });

  $(document).on("click", "#projects", function () {
    $.fn.fullpage.moveTo(3);
  });

  $(document).on("click", "#contact", function () {
    $.fn.fullpage.moveTo(4);
  });

  // smooth scrolling
  $(function () {
    $("a[href*=#]:not([href=#])").click(function () {
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          $("html,body").animate(
            {
              scrollTop: target.offset().top
            },
            700
          );
          return false;
        }
      }
    });
  });
});

function openModal() {
  document.getElementById("myModal").style.display = "block";
  document.body.style.overflow="hidden";
}
function closeModal() {
  document.getElementById("myModal").style.display = "none";
  document.body.style.overflow="visible";
}

var slideIndex = 1;
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
  document.body.style.overflow="hidden";
}
/*scroll bar*/
(function($){
  $(window).on("load",function(){
    $(".img_box").mCustomScrollbar();
  });
})(jQuery);