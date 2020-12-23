$(function() {
  $(".promo-section").slick({
	autoplay: true,
	arrows: false,
	dots: true,
	slidesToShow: 1,
	customPaging : function(slider, i) {
		var title = $(slider.$slides[i]).data('title');
		return '<span>'+title+'</span>';
	},
  });
});