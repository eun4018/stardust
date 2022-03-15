jQuery(function($){
	var topMenuHeight = $(".nav").outerHeight();
	$(".nav").menuScroll(topMenuHeight);
});
$(function(){
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
jQuery.fn.extend({
    menuScroll: function(offset) {
        var topMenu = this;
        var menuItems = $(topMenu).find("a");
        var lastId;
        var scrollItems = $(menuItems).map(function() {
            var item = $($(this).attr("href"));
            if (item.length) {
                return item;
            }
        });
	        $(topMenu).on("click", "a", function(e){
            var href = $(this).attr("href");
            var offsetTop = $(href).offset().top;
            $('html, body').stop().animate({ 
                scrollTop: offsetTop
            }, 300);
            e.preventDefault();
        });
        $(window).scroll(function(){
            var fromTop = $(this).scrollTop();
            var current = $(scrollItems).map(function(){
                if ($(this).offset().top <= fromTop)
                return this;
            });
            current = current[current.length-1];
            var idn = current && current.attr('id');
            if (lastId !== idn) {
                lastId = idn;
                $(menuItems)
                .parent().removeClass("active")
                .end().filter("[href='#"+idn+"']").parent().addClass("active");
            }      
        });
      }
});
$(function(){
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
});
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