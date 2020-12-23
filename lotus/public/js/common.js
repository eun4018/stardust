$(document).ready(function(){	

	$(".gnb").hover(function(){
		if($("#header .header-wrap .mobile-menu").css("display") == "none"){
			if(!$(".gnb-sub").is(":animated")){
				$(".gnb-sub").stop().clearQueue().slideDown(200);			
				//$(".gnb-sub-bg").stop().clearQueue().slideDown(200);
			}
		}
	}, function(){
		if($("#header .header-wrap .mobile-menu").css("display") == "none"){
			//if(!$(".gnb-sub").is(":animated")){
				$(".gnb-sub").stop().clearQueue().slideUp(100);			
				//$(".gnb-sub-bg").stop().clearQueue().slideUp(100);
			//}
		}
	});

	$(".mobile-menu").on("click", function(e){
		e.preventDefault();
		//$(".gnb-wrap").slideToggle(600, "easeOutExpo");

		if($(".gnb-wrap").css("display") == "none"){
			$("#blind-bg").show();
		}else{
			$("#blind-bg").hide();
		}

		$(".gnb-wrap").slideToggle(200);
	});
	



	//최초 이미지 사이즈를 입력
	$("#cont").imagesLoaded(function(){	
		 $("#cont .inner-cont img").each(function(idx){
			$(this).attr("w", $(this).width());
			$(this).attr("h", $(this).height());
		});
	});


	$("#footer .family-site .label").on("click", function(e){
		e.preventDefault();
		$(this).siblings("ul").toggle();
	});

	$(".custom-select .label").on("click", function(e){
		e.preventDefault();
		$(this).siblings("ul").toggle();
	});
	$(".custom-select ul li a").on("click", function(e){
		e.preventDefault();
		$(this).parent().parent().siblings(".label").find("span").text($(this).text());
		$(this).parent().parent().toggle();
	});
	


	//백그라운드
	if($("#blind-bg").length == 0){
		$("#wrapper").prepend("<div id='blind-bg'></div>");
	}

	rspsBg();	

	//iniGnbClick();

});


$(window).resize(function(){
	
	//console.log($(document).width());

	if($("#header .header-wrap .mobile-menu").css("display") == "none"){
		$(".gnb-wrap").show();
		$(".gnb-wrap").removeAttr("style");	
		$(".gnb-sub").removeAttr("style");
		$(".gnb-sub").hide();
		$("#blind-bg").hide();
	}else{
		$(".gnb-wrap").removeAttr("style");
		$(".gnb-sub").removeAttr("style");
		$(".gnb-sub").show();
		$("#blind-bg").hide();
	}
	
	rspsBg();
});


function iniGnbClick(){
	$(".gnb>li>a").on("click", function(e){
		if($("#header .header-wrap .mobile-menu").css("display") == "block"){
			e.preventDefault();

			$(this).parent().find(".gnb-sub").slideToggle(300);			
			$(this).parent().siblings("li").find(".gnb-sub").slideUp(300);		
			$(this).parent().siblings("li").find(">a").removeClass("on");		
			if($(this).hasClass("on")){
				$(this).removeClass("on");
			}else{
				$(this).addClass("on");				
			}
		}
	});

}


function rspsBg(){			
	
	var now_width = 0;
	var now_height = 0;
	var ori_width = 0;
	var ori_height = 0;
	var xy_rate = 0;

	$(".rsps-bg").each(function(){
		now_width = $(this).width();

		ori_width = $(this).attr("w");
		ori_height = $(this).attr("h");
		xy_rate = ori_height / ori_width;
		
		now_height = now_width * xy_rate;
		$(this).css("height", now_height+"px");
		
	});

}