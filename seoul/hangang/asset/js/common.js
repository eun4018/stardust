(function($) {
	$.isIe = function() {
		var myNav = navigator.userAgent.toLowerCase();
		return (myNav.indexOf('msie') != -1 && myNav.indexOf('trident') != -1) ? parseInt(myNav.split('msie')[1]) : false;
	};
	
	$.touchPrevent = function(e) {
		e.preventDefault();
	};
	
	$.fn.tabFocus = function() {
		$(this).click(function(event) {
			var skipTo="#"+this.href.split('#')[1];
			$(skipTo).attr('tabindex', -1).on('blur focusout', function() {
				$(this).removeAttr('tabindex');
			}).focus();
			return false;
		});
	};
	
	$.fn.navigation = function() {
		var el = $(this);
		var navBg = $(this).find('.nav-background');
		var navSlide = {
			init : function() {
				el.find('.holder > ul > li').each(function() {
					var targetUl = $(this).find('ul');
					
					//targetUl.css({'left' : 0});
					//var targetUlLeft		= $(this).offset().left + ($(this).outerWidth()/2);
					//var targetUlMarginLeft	= (targetUl.outerWidth()/-2);
					//var targetUlWidth		= targetUl.outerWidth();
					
					
					//if(targetUlLeft + targetUlMarginLeft + targetUlWidth > 1000 && $(window).width() < 1281) {
					//	targetUl.css({'left' : $(this).offset().left + $(this).outerWidth(), 'margin-left' : (targetUlWidth*-1)});
					//}else{
						//targetUl.css({'left' : $(this).offset().left + ($(this).outerWidth()/2), 'margin-left' : (targetUlWidth/-2)});
					//}
				});
			},
			enter : function() {
				
				if(!navBg.hasClass('on')) {
					TweenMax.to(navBg, .5, {height:151, ease:Power4.easeOut, onUpdate : function(){
						navBg.addClass('on');
						el.find('#hangang2022 ul li ul').css('display', 'block');
						//console.log('on');
						/*20220525*/
						$('#navigation .nav-list').addClass('on',function(){
							$('#navigation .nav-list > li').addClass('active');
						});
						$('#navigation .nav-border').addClass('on')
					}});
				}
				$('.top-search').css('display', 'none');
			},
			leave : function() {
				el.find('#hangang2022 ul li ul').css('display', 'none');

				if(navBg.hasClass('search-on')) { // 寃��됱갹�� �대젮�덉쑝硫�
					el.find('#hangang2022 > ul > li').removeClass('on');					
					el.find('#hangang2022 ul li ul').css('display', 'none');
					navBg.removeClass('on').removeClass('search-on');
				} else {
					TweenMax.to(navBg, .5, {height:0, ease:Power4.easeOut, onStart : function(){
						el.find('#hangang2022 > ul > li').removeClass('on');
						navBg.removeClass('on');
						el.find('#hangang2022 ul li ul').css('display', 'none');			
						//console.log('out');
						/*20220525*/
						$('#navigation .nav-list').removeClass('on',function(){
							$('#navigation .nav-list > li').removeClass('active');
						});
						$('#navigation .nav-border').removeClass('on')	
					}});
				}
				$('.top-search').css('display', 'none');
			},
			focus : function() {			
				var target = ($(this).get(0).tagName === 'LI') ? $(this) : $(this).parent();				
				target.addClass('on').siblings().each(function() {
					$(this).removeClass('on');
					//el.find('.holder ul li ul').css('display', 'block');
				});				
				navSlide.enter();
			}
		};
		
		navSlide.init();
		
		el.find('.holder > ul > li').on('mouseenter', navSlide.focus);

		el.on('mouseleave', function(){
			el.find('.holder ul li ul').css('display', 'none');			
		
		})
		
		el.on('mouseleave', navSlide.leave).find('.holder > ul > li > a').on({
			focus : navSlide.focus,
			keydown : function(e) {
				if(e.keyCode == 9 && e.shiftKey) {
					if($(this).parent().index() === 0) {
						navSlide.leave();
					}
					$(this).parent().removeClass('on').prev().addClass('on');
				};
			}
		});
		
		$(window).on('resize', function(){
			navSlide.init();
		});

		/* search */
//NOTE: mouseenter>>click (20220514)
		$('#btn-top-search-open').on('click', function(){

			$('.nav-background').addClass('search-on').css({
				"box-shadow" : "4px 4px 5px rgba(0,0,0,.37)",
				"-webkit-box-shadow" : "4px 4px 5px rgba(0,0,0,.37)"
			})
			navSlide.leave(); 
			/*210521*/
			$('.nav-background').animate({
						height : '151px'
			});				
			
			setTimeout(function(){
					$('.top-search').css('display', 'block');			
			}, 300);			
		});

		$('.btn-top-search-close').on('click', function(){
			$('.top-search').css('display', 'none');
				navSlide.leave(); // 硫붾돱媛� �대젮�덉쑝硫� �リ린			
				$('#btn-top-search-open').focus();

		});
	
	
	};
})(jQuery);

jQuery(document).ready(function($) {

	if($("#masonry").length > 0){
		gallery_2022_init();
	}
	
	//�ъ빱�� �대깽��
	$("#accessibility a").tabFocus();
	
	$('#navigation').navigation();
	
	//faq event
	$('.cnt-faq-content h4 a').click(function() {
		var parent = $(this).parents('article');
		if(parent.hasClass('on')) {
			parent.removeClass('on');
		} else {
			parent.siblings().each(function(){
				$(this).removeClass('on');
			});
			parent.addClass('on');
		}
		return false;	
	});
	
	//content sns move
	if($('#cnt-program-detail').length > 0) {
		$('#sns_elem').insertBefore('#cnt-program-detail header .info');
	}
	
	//map layer popup
	$('.lst-maplayer li a').on('click', function() {
		var layerHtml = '';
		var bigImg = $(this).attr('href');
		var bigLink = bigImg.replace('.jpg', '-big.jpg');

		layerHtml += '<div class="wrp-maplayer"><div class="mask"></div><div class="cont">';
		layerHtml += '<p class="title">' + $(this).text() + '</p>';
		layerHtml += '<p><a href="' + bigLink + '" target="_blank" class="btn-link2"><img src="' + $(this).attr('href') + '" /></a></p>';
		layerHtml += '<button type="button"><span class="hd-element">�リ린</span></button>';
		layerHtml += '</div></div>';

		$(this).parent().addClass('on').siblings().each(function() {
			$(this).removeClass('on');
		});
		
		$('html, body').css({'overflow' : 'hidden'});
		$(layerHtml).insertAfter('.lst-maplayer');
		
		$('.wrp-maplayer').fadeTo(400, 1);
		
		$('.wrp-maplayer .mask, .wrp-maplayer button').on('click', function(){
			$('.wrp-maplayer').fadeTo(70, 0, function(){
				$('.lst-maplayer li.on a').focus().parent().removeClass('on');
				$(this).remove();
				$('html, body').css({'overflow' : 'auto'});
			});
		});
		
		return false;

	});
	//top button 210525
	$(".top-button").hide();
	$(window).scroll(function(){
		if($(this).scrollTop() > 20){
			$(".top-button").fadeIn();
		} else{
			$(".top-button").fadeOut();
		}	
	})
	$(".top-button").click(function(){
		$("html,body").animate({"scrollTop":0},1000)
	})
	/*
	$('.btn-program-location, .btn-program-bus').on('click', function() {
		alert('以�鍮� 以묒엯�덈떎.');
		return false;
	});
	*/
	
	$('a[class*=jspopup]').on('click', function() {
		var param = $(this).attr('class').split('-');
		param.shift();
		param[0] = (param[0] === undefined) ? 0 : param[0];
		param[1] = (param[1] === undefined) ? 0 : param[1];
		param[2] = (param[2] === undefined) ? 0 : param[2];
		param[3] = (param[3] === undefined) ? 0 : param[3];
		window.open($(this).attr('href'), '', 'resizable=no,status=no,location=no,toolbar=no,menubar=no,fullscreen=no,scrollbars=yes,dependent=no,width='+param[0]+',height='+param[1]+',top='+param[2]+',left='+param[3]);
		return false;
	});
	
	$('.select button').on('click', function(){
		var selectVal = $('#lang-select option:selected').val();
		if (selectVal == 'https://english.seoul.go.kr/2022-hangang-river-festival-summer/')		{
			window.open($('#lang-select option:selected').val(), '', '');
		} else {
					/* alert('以�鍮꾩쨷�낅땲��.');*/
		}
		window.open($('#lang-select option:selected').val(), '', '');
		//alert('以�鍮꾩쨷�낅땲��.');
	});
	

	$("body .lst-mapbeacon a").on("click", function(){
		
		//console.log(point);

		$(this).addClass("on").parent().siblings().each(function() {
			$(this).find('a').removeClass('on');
		});
		$('.cnt-location dt').text($(this).text() + ' �쒓컯怨듭썝');
		var bigImg = $(this).attr('href');
		var bigResult = bigImg.replace('.jpg', '-big.jpg');
		console.log(bigResult);
		$('.cnt-location dd a').attr('href', bigResult);
		$('.cnt-location dd img').attr('src', $(this).attr('href'));


		var point = $(this).parent().attr('class');
		$('.point-map').css('display', 'none');
		$('.point-map-'+ point ).css('display', 'block');

		return false;
	});
});


// functions
function popup_clear(){
	jQuery("#gallerypopup #delbox #photo_password").val('');
	jQuery("#gallerypopup #delbox :hidden[name=photo_id]").val('');
}

var popLayer = function(id) {
	var selector = jQuery("#" + id);
	var fnOpen = function(width) {
		selector.fadeTo(400, 1).find('.cont').css({'width' : width});
		selector.find('.mask').css({'height' : selector.find('.wrapper').outerHeight()}).on('click', fnExit);

		//�ъ쭊 ��젣�� �リ린異붽�
		selector.find('.control .closed').on('click', function(){
			popup_clear();
			fnExit();
			jQuery('.delbox').hide();
			return false;
		});
		
		selector.find('.control .delete').on('click', function(){
			jQuery(jQuery(this).attr('href')).show();
			
			return false;
		});
		selector.find('.delclosed').on('click', function(){
			jQuery(jQuery(this).attr('href')).hide();
			
			return false;
		});
	};

	var fnExit = function() {
		selector.fadeTo(70, 0, function(){jQuery(this).hide();});
	};

	return {
		open : fnOpen,
		exit : fnExit
	};
};

function gallery_2022_init(){
	
	jQuery('#masonry span.photo').on('mouseenter', function() {
		jQuery(this).find('span.mask').stop().animate({'opacity' : 1}, 400);
	}).on('mouseleave', function(){
		jQuery(this).find('span.mask').stop().animate({'opacity' : 0}, 400);
	});
	
	var popviewer	= new popLayer('gallerypopup');
	
	// jQuery(".lightbox").ClassyBox({
	// });

	jQuery('#masonry .photo a').on("click",function() {
		var target_photo_id = jQuery(this).parent().parent().parent().attr("class").replace(/photo-/g,"");
		jQuery("#gallerypopup input.photo_id").attr("value",target_photo_id);
		
		var target_image_url = jQuery(this).parent().parent().children("img").attr("src");
		jQuery("#gallerypopup p.photo > img").attr("src",target_image_url);
		
		var target_title = jQuery(this).parent().parent().parent().children("figcaption").children("span.title").text();
		jQuery("#gallerypopup > div.wrapper > p.title").text(target_title);
		
		popviewer.open(700);
	});
	
	jQuery(".facebook").sharrre({
		share:{
			facebook:true
		},
		template:'<img src="http://hangang.seoul.go.kr/wp-content/themes/seoul_hangang/images/btn/btn_gallery_facebook.gif" alt="�섏씠�ㅻ턿">',
		enableHover:false,
		enableTracking:false,
		url:"http://hangang.seoul.go.kr/project2014/community/gallery",
		click:function(api, options){
			//api.simulateClick();
			api.openPopup('facebook');
			return false;
		}
	});
	
	jQuery(".twitter").sharrre({
		share:{
			twitter:true
		},
		template:'<img src="http://hangang.seoul.go.kr/wp-content/themes/seoul_hangang/images/btn/btn_gallery_twitter.gif" alt="�몄쐞��">',
		enableHover:false,
		enableTracking:false,
		click:function(api, options){
			//api.simulateClick();
			api.openPopup('twitter');
			return false;
		},
		url:"http://hangang.seoul.go.kr/project2014/community/gallery"
	});
}