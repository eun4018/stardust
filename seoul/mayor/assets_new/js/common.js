
var online = online || {};

(function(online, $, win, doc ){

	
	online.util = online.util || {};

	var $win = $(win),
		  $doc = $(document),
			$wrap = $('#wrap'),
			$body = $doc.find('body'),
			$content = $body.find('.content'),
			$footer = $body.find('#footer');

	online.util.skipNavigation = function() {

		$('#skip a').on('click', function(){
			var skipTo="#"+this.href.split('#')[1];
			$(skipTo).attr('tabindex', -1).on('blur focusout', function() {
				$(this).removeAttr('tabindex');
			}).focus();
		});
	}

	/* check scrollbar Width */
	online.util.getScrollWidth = function() {
		var body = document.querySelector('body');
		var scrollDiv = document.createElement('div');
		scrollDiv.className = 'div-scroll';
		body.appendChild(scrollDiv);
		var scrollbarWidth = $(document).height() > $(window).height() ? scrollDiv.offsetWidth - scrollDiv.clientWidth : 0;
		body.removeChild(scrollDiv);
		return scrollbarWidth;
	}

	/* mobile check */
	online.util.isMobile = {
		Android: function () {
			return navigator.userAgent.match(/Android/i) == null ? false : true;
		},
		BlackBerry: function () {
			return navigator.userAgent.match(/BlackBerry/i) == null ? false : true;
		},
		IOS: function () {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i) == null ? false : true;
		},
		Opera: function () {
			return navigator.userAgent.match(/Opera Mini/i) == null ? false : true;
		},
		Windows: function () {
			return navigator.userAgent.match(/IEMobile/i) == null ? false : true;
		},
		any: function () {
			return (online.util.isMobile.Android() || online.util.isMobile.BlackBerry() || online.util.isMobile.IOS() || online.util.isMobile.Opera() || online.util.isMobile.Windows());
		},
		isLandscape: function() {
			return (online.util.isMobile.any() && window.innerWidth > window.innerHeight);
		},
		addClass: function() {

			var scroll = online.util.getScrollWidth();

			var winWidTablet;
			if(online.util.isMobile.any()) { 
				winWidTablet = 1151;				
			} else {
				winWidTablet = 1151 - scroll; /* add scrollbar width */	
			}
			var winWidth = $win.width();
			var winHeight = $win.height();

			if(	online.util.isMobile.any() && winWidth <= winWidTablet){
				if(	online.util.isMobile.Android()){
						$("html").addClass("android mobile");
				}else if(online.util.isMobile.IOS()){
						$("html").addClass("ios mobile");
				}else if(online.util.isMobile.BlackBerry()){
						$("html").addClass("android mobile");
				}else if(online.util.isMobile.Opera()){
						$("html").addClass("android mobile");
				}else if(online.util.isMobile.Windows()){
						$("html").addClass("android mobile");
				}
			} else {
				$("html").addClass("pc")
			}

			if(!online.util.isMobile.any() && winWidth > winWidTablet){
				$("body").removeClass('mobile').addClass('pc');
				$('#header').removeClass('open');
				$('#btn-menu').addClass('btn-menu-pc').removeClass('btn-menu-mobile').removeClass('mopen');
				
			}else if(!online.util.isMobile.any() && winWidth <= winWidTablet) {
				$("body").removeClass('pc').addClass('mobile');
				$('#header').removeClass('hover');
				$('#btn-menu').addClass('btn-menu-mobile').removeClass('btn-menu-pc').removeClass('open');				
			} else if(online.util.isMobile.any()  && winWidth <= winWidTablet ) {
				$("body").removeClass('pc').addClass('mobile');
				$('#header').removeClass('hover');
				$('#btn-menu').addClass('btn-menu-mobile').removeClass('btn-menu-pc').removeClass('open');
			} else if(online.util.isMobile.any() && winWidth > winWidTablet){
				$("body").removeClass('mobile').addClass('pc');
				$('#header').removeClass('open');
				$('#btn-menu').addClass('btn-menu-pc').removeClass('btn-menu-mobile').removeClass('mopen');
			}

			if( online.util.isMobile.isLandscape() ) {
				$('body').removeClass('portrait').addClass('landscape');
			} else {
				$('body').removeClass('landscape').addClass('portrait');
			}

		}
	};

	/* GNB */
	online.util.gnb = function(){

		online.util.isMobile.addClass();

		if($('body').hasClass('pc')) {
			$('.menu>li>a').on('mouseenter focus', function(){
				//$('#header').addClass('hover');
				$(this).closest('li').find('.sub-menu').addClass('open');
			});

			$('.menu li').on('mouseleave', function(){
				//$('#header').addClass('hover');
				$(this).closest('li').find('.sub-menu').removeClass('open');
			});	

			$('.sub-menu').hover(function(){$(this).closest('li').find('a').addClass('menuhover');}, function(){$('.menu>li>a').removeClass('menuhover');});

			$('.menu li:last-child ul.sub-menu li:last-child a').on('keydown', function(e){
				if(e.keyCode == 9 && !e.shiftKey ){
					$('#header').removeClass('hover');
					$('.sub-menu').removeClass('open');
				}
			});
			/*
			$("#navigation").on('mouseleave', function(){
				$('#header').removeClass('hover');
			});
			*/
		};


		//$('.btn-menu-pc').on('click', function(){
		$(document).on('click', '.btn-menu-pc', function(){
			
			if($(this).hasClass('open')) {
				$("#header").removeClass('hover');
				$(this).focus().removeClass('open').find('em').text('전체보기');				
			} else {
				$("#header").addClass('hover');
				$(this).focus().addClass('open').find('em').text('전체보기 닫기');					
			}
			//console.log('pc');
		});

		//$('.btn-menu-mobile').on('click', function(){
		$(document).on('click', '.btn-menu-mobile', function(){
			//console.log('mo');
			if($(this).hasClass('mopen')) {
				$("#header").removeClass('open');
				$(this).focus().removeClass('mopen').find('em').text('전체보기');				
			} else {
				$("#header").addClass('open');
				$(this).focus().addClass('mopen').find('em').text('전체보기 닫기');					
			}
		});

		$('.menu>li>a').on('click', function(e){
			if($('body').hasClass('mobile')) {
				e.preventDefault();
				if($(this).hasClass('on')) {
					$(this).removeClass('on').find('em').text('메뉴 펼치기');
					$('.menu li .sub-menu').slideUp();
				} else {
					$('.menu>li>a').removeClass('on');					
					$('.sub-menu').slideUp();
					$(this).addClass('on').find('em').text('메뉴 닫기');
					$(this).closest('li').find('.sub-menu').slideDown();
				}
			}
		})

	};
	

	/* tab */
	online.util.tab = function(){
		var $tab = $('#wrap').find('.tab'),
				$anchor = $tab.find('li'),
				$tgId = $anchor.filter('.on').find('a').attr('href');

		if (!$tab.length) return false;	

		$anchor.find('a').on('click', function(e){
			var $this = $(this),
				$tgId = $this.attr('href');

			if ($tgId.indexOf('#') === -1) return; // check for linktab;
			e.preventDefault();
			$this.closest('.tab-content').find('.tab li').removeClass('on');
			$this.parent('li').addClass('on');
			$this.closest('.tab-content').find('.tab-cont').removeClass('on').filter($tgId).addClass('on');
		});	


	};
	/* 팝업 */
	online.util.popupOpen = function(url, name, specs){
		window.open(url, name, specs);
	}

	/* mdoal popup open 
		<button type="button" class="btn-modal" data-modal-anchor="sample-popup"><span>모달창 띄우기</span></button>
	*/

	online.util.modal = function(action, target){	
		var $modal = $('.modal-window'),
				$openBtn = $('.btn-modal'),
				$closeBtn = $('.btn-modal-close'),
				$modalTarget = null,
				$currentBtn = null,
				focusableElement = "a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]";		

		var init = function() {
			if (!$modal.length) return false;

			$openBtn.on('click', function(e) {
				e.preventDefault();
				modalShow($(this));
			});

			$closeBtn.on('click', function(e) {
				e.preventDefault();
				modalHide($currentBtn);
			});

			$('.modal-window').on('keydown', function(e){
				tapTracking($(this), e);
			});

			$(window).on('keydown', function(e) {
				if( e.keyCode === 27 ) {
					e.preventDefault();
					modalHide(currentBtn);
				}
			});
		}

		var setPosition = function(modalTarget) {
			var modalContainer = modalTarget.find('.modal-container'),
			modalHeight = modalContainer.outerHeight(),
			modalWidth	= modalContainer.outerWidth(),
			winHeight	= $(window).height(),
			winWidth	= $(window).width(),
			docHeight	= $(document).height(),
			docWidth	= $(document).width();

			if( modalHeight < winHeight ) {
				modalContainer.css({
					'top'			: '50%',
					'margin-top'	: -(modalHeight / 2)
				});
			} else {
				modalContainer.css({
					'top'			: 0,
					'margin-top'	: 0
				});
			}
			if( modalWidth < winWidth ) {
				modalContainer.css({
					'left'			: '50%',
					'margin-left'	: -(modalWidth / 2)
				});
			} else {
				modalContainer.css({
					'left'			: 0,
					'margin-left'	: 0
				});
			}
		};

		var setScrollbarArea = function() {
			var scroll = online.util.getScrollWidth();
			$('body').css({ 'padding-right' : scroll + 'px' });
		};

		var modalShow = function(el) {

			if( $modal.hasClass('current') ) {
				return false;
			}

			currentBtn	= el;
			modalTarget = getTarget(currentBtn);

			if( currentBtn != null && !currentBtn.hasClass('current') ) {
				currentBtn.addClass('current');
			}

			if( modalTarget.length == 0 ) {
				return false;
			}

			if( !modalTarget.hasClass('current') ) {
				modalTarget.fadeIn(300).addClass('current').attr('tabindex', '0').focus();
			}
	
			modalTarget.after('<div class="modal-dimed"></div>');

			$('.modal-dimed').fadeTo(300, 0.5);

			if( modalTarget.scrollTop() > 0 ) {
				modalTarget.animate({ 'scrollTop' : 0 }, 300);
			}
			$('body').addClass('modal-open');

			setPosition(modalTarget);
			setScrollbarArea();

			$(window).resize(function() {
				setPosition(modalTarget);
				setScrollbarArea();
			});

		}

		var modalHide = function(el) {
			if( modalTarget == null ) {
				return false;
			}
	
			if( currentBtn != null && currentBtn.hasClass('current') ) {
				currentBtn.removeClass('current').focus();
			}
	
			if( modalTarget.hasClass('current') ) {
				modalTarget.fadeOut(300, function(){	
					$('body').removeClass('modal-open');	
				}).removeClass('current').removeAttr('tabindex');
			}	
			if( $('.modal-dimed').length > 0 ) {
				$('.modal-dimed').fadeOut(300, function(){	
					$('.modal-dimed').remove();
					$('body').removeClass('modal-open');
					$('body').css({ 'padding-right' : '0' });
				});
			}	
			$(window).off('resize');

		}

		var getButton = function(el) {
			var button = null;
			$openBtn.each(function() {
				if( $(this).attr('data-modal-anchor') == el.attr('id') || $(this).attr('href') == '#' + el.attr('id') ) {
					button = $(this);
				}
			});
			return button;
		}

		var getTarget = function(el) {
			var targetId;
			
			if( el.attr('href') ) {
				targetId = el.attr('href').split('#')[1];
			} else {
				targetId = el.attr('data-modal-anchor');
			}
			return $('#' + targetId);
		}

		var tapTracking = function(obj, event) {
			if (event.which == 9) {
					var o = obj.find('*');
					var focusItmes, focusedItem, focuseItemsNumber, focusedItemIndex;
					focusItmes = o.filter(focusableElement).filter(':visible');
					focusedItem = jQuery(':focus');
					focuseItemsNumber = focusItmes.length;
					focusedItemIndex = focusItmes.index(focusedItem);
					// tab tracking
					if (event.shiftKey) {
							if (focusedItemIndex == 0) {
									focusItmes.get(focuseItemsNumber - 1).focus();
									event.preventDefault();
							}

					} else {
							if (focusedItemIndex == focuseItemsNumber - 1) {
									focusItmes.get(0).focus();
									event.preventDefault();
							}
					}
			}			
		}
		init();
	};

	// location
	online.util.location = function(){
		var $btn = $('.btn-location');

		$btn.on('click', function(){
			if($(this).hasClass('open')) {
				$(this).removeClass('open').closest('li').find('.menu-list').removeClass('open');
			} else {
				$(this).addClass('open').closest('li').find('.menu-list').addClass('open');
			}
		});		
		$('.menu-list .sub-menu li:last-child a').on('keydown', function(e){
			if(e.keyCode == 9 && !e.shiftKey ){
				$(this).parent('li').parent('ul').closest('li').find('.btn-location').trigger('click');
			}
		});
		$('body').on('click', function(e){
			if($(!e.target).is('.link-location') || !$(e.target).is('.txt-location')) { 
				if(!$(e.target).is('.btn-location')) {
					$('.btn-location').removeClass('open');
					$('.menu-list').removeClass('open');
				}
			} 
		});
	};

	// top button
	online.util.top = function(){
		var _scope, ctrl, topBtn;
		var init = function() {
			_scope = window;
			ctrl = false;
			topBtn = document.querySelector('.btn-top');
			bind();
		};
		var bind = function() {
			$(_scope).on('scroll', function() {
				var _scrollTop = $(_scope).scrollTop();
				if(ctrl == true && _scrollTop == 0) {
					ctrl = false;
					$(topBtn).removeClass('show');
				} else if( ctrl == false && _scrollTop > 20 ) {
					ctrl = true;
					$(topBtn).addClass('show');
					$(topBtn).off('click').on('click', function() {
					$("html, body").animate({ scrollTop: 0 }, 300);
					$('#header h1 a').focus();
				});
				}
			});
		};
		init();
	};

	// main visual
	online.util.mainVisual = function(){
		if( $('body').hasClass('main') == 0 ) {
			return false;
		}
		var $addWidth = ($('#wrap').innerWidth() - 1152)/2;
		var $articleWidth = $addWidth + 1152;

		if($articleWidth >= 1152) {
			$('.article-slide').css('width', $articleWidth + 'px');
		} else {
			$('.article-slide').css('width', '100%');
		}

	};

	// main motion 
	online.util.mainMotion = function(){

		if( $('body').hasClass('main') == 0 ) {
			return false;
		}

		
		
		gsap.registerPlugin(ScrollTrigger);
		gsap.fromTo("#mtxt-01", {x: -40, autoAlpha: 0}, {
			scrollTrigger: {
				trigger: '#seoul-common-gnb',
				toggleActions: 'play none none none'
			},
			x: 0,
			autoAlpha: 1,
			ease: "expo", 
			duration: 1
		});
		gsap.fromTo("#mtxt-02", {x: -40, autoAlpha: 0}, {
			scrollTrigger: {
				trigger: '#seoul-common-gnb',
				toggleActions: 'play none none none'
			},
			x: 0,
			autoAlpha: 1,
			ease: "expo", 
			duration: 1,
			delay: .5,
		});
		gsap.fromTo("#mtxt-03", {x: -40, autoAlpha: 0}, {
			scrollTrigger: {
				trigger: '#seoul-common-gnb',
				toggleActions: 'play none none none'
			},
			x: 0,
			autoAlpha: 1,
			ease: "expo", 
			duration: 1,
			delay: 1
		});
		gsap.fromTo("#mtxt-04", {x: -40, autoAlpha: 0}, {
			scrollTrigger: {
				trigger: '#seoul-common-gnb',
				toggleActions: 'play none none none'
			},
			x: 0,
			autoAlpha: 1,
			ease: "expo", 
			duration: 1,
			delay: 1.5
		});
		gsap.fromTo("#mtxt-05", {x: -40, autoAlpha: 0}, {
			scrollTrigger: {
				trigger: '#seoul-common-gnb',
				toggleActions: 'play none none none'
			},
			x: 0,
			autoAlpha: 1,
			ease: "expo", 
			duration: 1,
			delay: 1.8
		});
		/*
		gsap.fromTo(".ico-sns-youtube", {y: -20, autoAlpha: 0}, {
			scrollTrigger: {
				trigger: '#seoul-common-gnb',
				toggleActions: 'play none none none'
			},
			y: 0,
			autoAlpha: 1,
			ease: "expo", 
			duration: 1,
			delay: 2
		});
		gsap.fromTo(".ico-sns-facebook", {y: -20, autoAlpha: 0}, {
			scrollTrigger: {
				trigger: '#seoul-common-gnb',
				toggleActions: 'play none none none'
			},
			y: 0,
			autoAlpha: 1,
			ease: "expo", 
			duration: 1,
			delay: 2.2
		});
		gsap.fromTo(".ico-sns-instar", {y: -20, autoAlpha: 0}, {
			scrollTrigger: {
				trigger: '#seoul-common-gnb',
				toggleActions: 'play none none none'
			},
			y: 0,
			autoAlpha: 1,
			ease: "expo", 
			duration: 1,
			delay: 2.4
		});
		gsap.fromTo(".ico-sns-blog", {y: -20, autoAlpha: 0}, {
			scrollTrigger: {
				trigger: '#seoul-common-gnb',
				toggleActions: 'play none none none'
			},
			y: 0,
			autoAlpha: 1,
			ease: "expo", 
			duration: 1,
			delay: 2.6
		});

		gsap.fromTo(".main-article-news", {y: -40, autoAlpha: 0}, {
			scrollTrigger: {
				trigger: '.main-article-news',
				toggleActions: 'play none none none'
			},
			y: 0,
			autoAlpha: 1,
			duration: 1
		});

		gsap.fromTo(".main-article-schedule", {y: -40, autoAlpha: 0}, {
			scrollTrigger: {
				trigger: '.main-article-schedule',
				toggleActions: 'play none none none'
			},
			y: 0,
			autoAlpha: 1,
			duration: 1
		});

		gsap.fromTo(".main-article-movie", {y: -40, autoAlpha: 0}, {
			scrollTrigger: {
				trigger: '.main-article-movie',
				toggleActions: 'play none none none'
			},
			y: 0,
			autoAlpha: 1,
			duration: 1
		});

		gsap.fromTo(".main-article-picture", {y: -40, autoAlpha: 0}, {
			scrollTrigger: {
				trigger: '.main-article-picture',
				toggleActions: 'play none none none'
			},
			y: 0,
			autoAlpha: 1,
			duration: 1
		});

		gsap.fromTo("#section-together", {y: -40, autoAlpha: 0}, {
			scrollTrigger: {
				trigger: '#section-together				',
				toggleActions: 'play none none none'
			},
			y: 0,
			autoAlpha: 1,
			duration: 1
		});
		*/

		
		
		/*
		gsap.to(".motion2", {
			scrollTrigger: {
				trigger: '.motion2',
				toggleActions: 'restart pause reverse none'
			},
			x: 400,
			rotation: 360,
			duration: 3
		});
		gsap.to(".motion3", {
			scrollTrigger: {
				trigger: '.motion3',
				toggleActions: 'restart pause reverse none'
			},
			x: 400,
			rotation: 360,
			duration: 3
		});
		*/

	}
	// online.util.mainMotion

	// main visual 
	online.util.mainHeight = function(){
		var $container = $wrap.find('#container'),
				$cont = $container.find('.main-new-section-quick'),
				footerHeight = $footer.outerHeight(),
				winWidth = $win.outerWidth(),
				winHeight = $win.outerHeight(),
				contentHeight,
				contentTotalHeight,
				seoulHeight; 														// #seoul-gnb-holder 높이값
		
		if( $('body').hasClass('main') == 0 ) {
			return false;
		}


		if (winWidth > 1023) { 
			seoulHeight = 150;
		} else {
			seoulHeight = 50;
		}

		contentHeight = $('.main-new-section-quick').outerHeight();
		footerHeight = $('#footer').outerHeight();
		contentTotalHeight = contentHeight + seoulHeight + footerHeight + 200;
		//console.log(contentTotalHeight);
		//console.log(winHeight);

		if (winWidth > 1151) { 
			if(winHeight > 863) {
				$('body').removeClass('narrow').removeClass('middle').addClass('wide');
				$('#content,  .new-slide-wrap .swiper-slide').css('height', winHeight - seoulHeight);
			} else if (winHeight <= 863 && winHeight > 700) {
				$('body').removeClass('narrow').removeClass('wide').addClass('middle');
				$('#content,  .new-slide-wrap .swiper-slide').css('height', winHeight - seoulHeight);
				//console.log($('#content').outerHeight());

			} else {
				$('body').removeClass('middle').removeClass('wide').addClass('narrow');
				$('#content,  .new-slide-wrap .swiper-slide').css('height', '720')

			}

		} else {
			$('body').removeClass('narrow').removeClass('wide');
			$('#content, .new-slide-wrap .swiper-slide').css('height', 'auto')

		}


	};


	$(document).ready(function(){

		online.util.skipNavigation();
		
		online.util.isMobile.addClass();
		online.util.tab();
		online.util.modal();
		online.util.gnb();
		online.util.location();
		online.util.top();
		online.util.mainVisual();
		online.util.mainMotion();
		online.util.mainHeight();

		$win.on({
			'resize' : function() { 
				online.util.isMobile.addClass();
				//online.util.gnb();
				online.util.mainVisual();
				online.util.mainHeight();
			},
			'onorientationchange' : function() { 
				online.util.isMobile.addClass();
				//online.util.gnb();
				online.util.mainVisual();
				online.util.mainHeight();
			}
		});
	});

})(online, jQuery, window, document);


