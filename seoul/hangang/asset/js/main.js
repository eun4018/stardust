$(document).ready(function() {
	var twtterSlider = $("#divTwitter").bxSlider({
		'pager' : false,
		'auto' : true,
		speed : 500,
		'autoHover' : true
	});
	$('#t-prev').on('click', function() {
		twtterSlider.goToPrevSlide();
	});
	$('#t-next').on('click', function() {
		twtterSlider.goToNextSlide();
	});
	$('#t-auto').on('click', function() {
		if($(this).hasClass('t-auto')) {
			$(this).attr('class', 't-hold');
			twtterSlider.startAuto();
		} else {
			$(this).attr('class', 't-auto');
			twtterSlider.stopAuto();
		}
	});
	
	var sliderTween = [];
	var sliderTweenEvent = {
		start : function(el) {
			el.find('.tooltip').each(function() {
				var linesize = $(this).attr('data-linesize');
				var direct = $(this).attr('data-direct');

				$(this).find('span').each(function() {
					switch(direct) {
						case 'left' :
							sliderTween.push(TweenMax.to($(this), linesize*0.0075, {width:linesize, ease:Power4.easeIn}));
						break;
						case 'right' :
							sliderTween.push(TweenMax.to($(this), linesize*0.0075, {width:linesize, ease:Power4.easeIn}));
						break;
						case 'top' : 
							sliderTween.push(TweenMax.to($(this), linesize*0.0075, {height:linesize, ease:Power4.easeIn}));
						break;
						case 'bottom' : 
							sliderTween.push(TweenMax.to($(this), linesize*0.0075, {height:linesize, ease:Power4.easeIn}));
						break;
					}
				});
				$(this).find('img').each(function() {
					var time = linesize*0.0075;
					switch(direct) {
						case 'left' :
						sliderTween.push(TweenMax.to($(this), time*2, {delay:time, opacity:1, left:0, ease:Elastic.easeInOut.config(1, 0.7)}));
						break;
						case 'right' :
							sliderTween.push(TweenMax.to($(this), time*2, {delay:time, opacity:1, left:0, ease:Elastic.easeInOut.config(1, 0.7)}));
						break;
						case 'top' : 
							sliderTween.push(TweenMax.to($(this), time*2, {delay:time, opacity:1, top:0, ease:Elastic.easeInOut.config(1, 0.7)}));
						break;
						case 'bottom' : 
							sliderTween.push(TweenMax.to($(this), time*2, {delay:time, opacity:1, top:0, ease:Elastic.easeInOut.config(1, 0.7)}));
						break;
					}
				});
			});
		},
		end : function(el) {
			el.find('.tooltip').each(function() {
				$(this).find('span').removeAttr('style');
				$(this).find('img').removeAttr('style');
			});
			sliderTween = [];
		}
	};
	
	sliderTweenEvent.start($('.tooltip-img1').parents('li'));
	/*210525*/
	var mainSlider = $('#sec-main-visual .bxslider').bxSlider({
		mode : 'fade', controls : true, auto : true, speed : 1000, autoDelay : 3000, autoHover : true, pager : false, autoControls:'true', captions : true,
		onSlideBefore : function($slideElement, oldIndex, newIndex){
			//sliderTweenEvent.end($slideElement);
			var current_index = parseInt(newIndex + 1);
			$('.current').text(current_index);
		},
		onSlideAfter : function($slideElement, oldIndex, newIndex){
			//sliderTweenEvent.start($slideElement);
		},
		onSliderLoad : function($currentIndex) {
			//sliderTweenEvent.start($('#tooltip1-1').parents('li'));
		}
	});
	/*pager-control*/
	$('.bx-controls').prepend('<div class="pager-custom"><span class="current">1</span>/<span class="total"></span></div>')
	var total = $('.bxslider .bg-visual').length;
	$('.total').html(total);

	/*play stop*/
	$('.bx-wrapper .bx-start').hide();
    $(".bx-wrapper .bx-stop").click(function(){
        mainSlider.stopAuto();
        $(".bx-wrapper .bx-stop").hide();
        $(".bx-wrapper .bx-start").show();
    });
    $('.bx-wrapper .bx-start').click(function(){
        mainSlider.startAuto();
        $('.bx-wrapper .bx-start').hide();
        $('.bx-wrapper .bx-stop').show();
    })

	/* main animation */
	var aniTxt1 = $('#visual-tit01'),
		aniTxt2 = $('#visual-tit02'),
		aniTxt3 = $('#visual-tit03'),
		aniTxt4 = $('#visual-tit04'),
		aniTxt5 = $('#visual-tit05'),
		aniTxt0 = $('#visual-tit00');

	var tlStart = new TimelineMax();
	tlStart
		.from(aniTxt0, 1, {autoAlpha: 0, x: -50})
		.from(aniTxt1, 1, {autoAlpha: 0, x: -50}, '-=0.5')
		.from(aniTxt2, 1, {autoAlpha: 0, x: -50}, '-=0.5')
		.from(aniTxt3, 1, {autoAlpha: 0, x: -50}, '-=0.5')
		.from(aniTxt4, 1, {autoAlpha: 0, x: -50}, '-=0.5')
		.from(aniTxt5, 1, {autoAlpha: 0, x: -50}, '-=0.5');




	
	
	
	var subSlider = $('#sec-main-movie .bxslider').bxSlider({'slideMargin' : 25, 'pager' : false, 'infiniteLoop' : false, 'auto' : false, breaks : [{screen:0, slides:3},{screen:1000, slides:3}]});
	//�됱궗 �앹뾽
	$('.event-tit > ul > li').click(function(){
		var idx = $(this).index();
		$('.event-tit > ul > li').removeClass('on');
		$('.event-tit > ul > li').eq(idx).addClass('on')
		$('.event-box-2022 > div').hide();
		$('.event-box-2022 > div').eq(idx).show();
	})
	// �곗��곸긽蹂닿린
	/*
	$('.teaser-area > a').on('click', function(){
			$('html, body').css('overflow', 'hidden');
			$('body').css('height', '100%');
			$('#movie').slideDown();
	});
	$('#movepage2 > a').on('click', function(){
			$('html, body').css('overflow', '');
			$('body').css('height', '');
			$('#movie').slideUp();
	});
	*/

	//�뚭컻�곸긽
	$('.teaser-area > a').on('click', function(){
			$('html, body').css('overflow', 'hidden');
			$('body').css('height', '100%');
			$('#movie1').slideDown();
			$('#movie1 .video-container').append('<iframe src="https://videos.seoul.go.kr/2+6+vh" style="width: 100%;height:100%;border:0" title="2022 �쒓컯紐쎈븙 �띾낫�숈쁺��" frameborder="0"></iframe>');
			
	});

	// �띾낫�곸긽蹂닿린
	$('.btn-hongbo').on('click', function(){
			$('html, body').css('overflow', 'hidden');
			$('body').css('height', '100%');
			$('#movie1').slideDown();
			$('#movie1 .video-container').append('<iframe src="https://videos.seoul.go.kr/1o+RCJ" style="width: 100%;height:100%;border:0" title="2022 �쒓컯紐쎈븙 �띾낫�숈쁺��" frameborder="0"></iframe>');
			
	});
	$('#movepage3 > a').on('click', function(){
			$('html, body').css('overflow', '');
			$('body').css('height', '');
			$('#movie1 .video-container').html('');
			$('#movie1').slideUp();
	});
	//�ъ뒪�� �リ린
	$(".closer").on('click',function(){
		$(".layor-pop").addClass('on');
	})
});