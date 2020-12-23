$(function(){
    /*헤더고정*/
    var mainMenu = $("#mainmenu").offset().top;
    $(window).scroll(function() {
          var window = $(this).scrollTop();
    
        if(mainMenu <= window) {
          $("#mainmenu").addClass("fixed");
        } else {
          $("#mainmenu").removeClass("fixed");
        }
    })
})
$(function(){
    /*검색아이콘*/
    $(".right_gnb > li:last-child button").click(function(){
        $(".right_gnb > li:last-child input").addClass("search_on");
    })
})
$(function(){
    /*헤더 드롭다운메뉴 여행사 선택메뉴*/
    $(".travelbtn").click(function(){
      $(this).parent().toggleClass("active");
    })
    $(".planeline > li").click(function(){
      $(this).parents("#gnbmenu .inner > ul > li.select_area").removeClass("active");
    })
    /*헤더 드롭다운메뉴 언어 선택메뉴*/
    $(".langset").click(function(){
      $(this).parent().toggleClass("active");
    })
    $(".lang_content > li").click(function(){
      var current = $(this).html();
      $(".langset").html(current);
      $(this).parents("#gnbmenu .inner > ul > li.select_area").removeClass("active");
    })
})
$(function(){
    /*푸터 드롭다운메뉴*/
    $(".btn_site > button").click(function(){
      $(this).parent().toggleClass("active");
    })
    $(".btn_site > ul > li").click(function(){
      $(this).parents(".btn_site").removeClass("active");
    })
})
$(function(){
    /*모바일 메뉴아이콘*/
    $(".menu_icon").click(function(){
        $(".menu_list").addClass("on");
    })
    $(".close_icon").click(function(){
        $(".menu_list").removeClass("on");
    })
})
//메인메뉴
$(function(){
    var menuSetting = function () {
    if ($(window).outerWidth() < 1000) {
        // 모바일
        var mobileGnb = false;
        console.log("모바일 셋팅");
        $(".menu_list>ul>li a").click(function(){
            console.log("mobile");
            if (!mobileGnb) {
                mobileGnb = true;
                $(this).parent(".menu_list>ul>li").stop().toggleClass("show")
                $(".small_ico > a").click(function(){
                    if(!mobileGnb){
                        $(this).parent().addClass("select")
                    }
                    else{
                        $(this).parent().removeClass("select")
                    }
                })
            } else {
                mobileGnb = false;
                $(this).parent(".menu_list>ul>li").stop().removeClass("show")
            }
        });
    } else {
        // 데스크탑  
        var pcGnb = false;
            $(".menu_list>ul>li").hover(function(){
                console.log("데스크탑");
                if (!pcGnb) {
                    pcGnb = true;
                    $(this).children(".submenu_box").stop().addClass("on");
                } else {
                    pcGnb = false;
                    $(this).children(".submenu_box").stop().removeClass("on");
                }
            });
    }
}
$(window).on("resize", function () {
    console.log("리사이즈")
    $(".menu_list > ul > li a").unbind()
    $(".menu_list > ul > li").unbind()
    $(".searchbtn").unbind()
    menuSetting();
});
menuSetting(); 
});