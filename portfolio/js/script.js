/*헤더 스크롤 색변함*/
$(function(){
  var Header = $(".header");
  var change = $("#about");
  var OffsetTop = change.offset().top;
  $(window).resize(function(){
    OffsetTop = change.offset().top;
  })
  $(window).scroll(function() {
      if($(window).scrollTop() >= OffsetTop) {
        $(".header").addClass("fixed");
      } else {
        $(".header").removeClass("fixed");
      }
  })
})

$(function(){
	$('a[href*=#]:not([href=#])').click(function() {
	  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }

	
  });


/* 스크롤 체크 효과 */
var scroll = window.requestAnimationFrame || function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow = document.querySelectorAll('.show-on-scroll'); 

function loop() {
    Array.prototype.forEach.call(elementsToShow, function(element){
      if (isElementInViewport(element)) {
        element.classList.add('is-visible');
      } else {
        element.classList.remove('is-visible');
      }
    });

    scroll(loop);
}
loop();

function isElementInViewport(el) {
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}
})

/*modal*/
function openModal() {
  document.getElementById("myModal").style.display = "block";
  document.getElementById("header").style.display = "none";
}
function closeModal() {
  document.getElementById("myModal").style.display = "none";
  document.getElementById("header").style.display = "block";
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
}
/*scroll bar*/
(function($){
    $(window).on("load",function(){
        $(".img_box").mCustomScrollbar();
    });
})(jQuery);