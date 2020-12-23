$(function(){
  /*새소식 롤링*/
  var rolling=$(".news").find(".rolling");
  var rollingHeight = rolling.children().outerHeight();
  var length = rolling.children().length;
  var rollingId
  
  rollingId = setInterval(function(){rollingStart();},1000);
  
  function rollingStart(){
    rolling.css("height",rollingHeight * length + "px");
    rolling.animate({top:-rollingHeight+"px"},1500, function(){
      $(this).append("<li>" + $(this).find("li:first").html() + "</li>");
      $(this).find("li:first").remove();
      $(this).css("top", 0);
    })
  }
});
$(function(){
  /*이벤트롤링*/
  $(".jeju_event .inner ul").bxSlider({
    minSlides:2,
    maxSlides:4,
    moveSlides:1,
    pager:false
  });
});

$(function(){
  /*왕복 편도 탭메뉴*/
  $(".tab_content").hide();
  $(".flight_tabs li:first-child").addClass("active").show();
  $(".tab_content:first-child").show();

  $(".flight_tabs li").click(function(){
    $(".flight_tabs li").removeClass("active")
    $(this).addClass("active");
    $(".tab_content").hide();

    var tab_active = $(this).find("a").attr("href");
    $(tab_active).show();
    return false;
  })
})
$(function(){
  /*출발지 탭1메뉴*/
  $("#tab1 .name_container .name_list").hide();
  $("#tab1 .area_tabs li:first-child").addClass("select").show();
  $("#tab1 .name_list:first-child").show();

  $("#tab1 .area_tabs li").click(function(){
    $("#tab1 .area_tabs li").removeClass("select")
    $(this).addClass("select");
    $("#tab1 .name_container .name_list").hide();

    var tab_select = $(this).attr("data-tab");
    $("#"+ tab_select).show();
  })
  /*출발지 탭1 클릭*/
  $("#tab1 .depart_box button").click(function(){
    $("#tab1 #depart_name").show()
  });
  $("#tab1 #depart_name .name_list > ul > li > button").click(function(){
    var selected = $(this).html();
    $("#tab1 #depart").val(selected);
    $("#tab1 #depart_name").hide();
  })
})
$(function(){
  /*출발지 탭2메뉴*/
  $("#tab2 .name_container .name_list").hide();
  $("#tab2 .area_tabs li:first-child").addClass("select").show();
  $("#tab2 .name_list:first-child").show();

  $("#tab2 .area_tabs li").click(function(){
    $("#tab2 .area_tabs li").removeClass("select")
    $(this).addClass("select");
    $("#tab2 .name_container .name_list").hide();

    var tab_select = $(this).attr("data-tab");
    $("#"+ tab_select).show();
  })
   /*출발지 탭2클릭*/
   $("#tab2 .depart_box button").click(function(){
    $("#tab2 #depart_name").show()
  });
  $("#tab2 #depart_name .name_list > ul > li > button").click(function(){
    var selected = $(this).html();
    $("#tab2 #depart2").val(selected);
    $("#tab2 #depart_name").hide();
  })
})
$(function(){
  /*출발지 탭3메뉴*/
  $("#tab3 #depart_name3 .name_container .name_list").hide();
  $("#tab3 #depart_name3 .area_tabs li:first-child").addClass("select").show();
  $("#tab3 #depart_name3 .name_list:first-child").show();

  $("#tab3 #depart_name3 .area_tabs li").click(function(){
    $("#tab3 #depart_name3 .area_tabs li").removeClass("select")
    $(this).addClass("select");
    $("#tab3 #depart_name3 .name_container .name_list").hide();

    var tab_select = $(this).attr("data-tab");
    $("#"+ tab_select).show();
  })
  /*출발지 탭3메뉴2*/
  $("#tab3 #depart_name4 .name_container .name_list").hide();
  $("#tab3 #depart_name4 .area_tabs li:first-child").addClass("select").show();
  $("#tab3 #depart_name4 .name_list:first-child").show();

  $("#tab3 #depart_name4 .area_tabs li").click(function(){
    $("#tab3 #depart_name4 .area_tabs li").removeClass("select")
    $(this).addClass("select");
    $("#tab3 #depart_name4 .name_container .name_list").hide();

    var tab_select = $(this).attr("data-tab");
    $("#"+ tab_select).show();
  })

  /*출발지 탭3클릭*/
  $("#tab3 button.depart_btn").click(function(){
    $("#tab3 #depart_name3").show()
  });
  $("#tab3 button.depart_btn2").click(function(){
    $("#tab3 #depart_name4").show()
  });

  $("#tab3 #depart_name3 .name_list > ul > li > button").click(function(){
    var selected = $(this).html();
    $("#tab3 #depart3").val(selected);
    $("#tab3 #depart_name3").hide();
  })
  $("#tab3 #depart_name4 .name_list > ul > li > button").click(function(){
    var selected = $(this).html();
    $("#tab3 #depart4").val(selected);
    $("#tab3 #depart_name4").hide();
  })
})
$(function(){
  /*도착지 탭1메뉴*/
  $('#tab1 .desti_tabs li').click(function () {
    var tab_id = $(this).attr('data-tab');

    $('#tab1 .desti_tabs li').removeClass('current');
    $('#tab1 .desti_list').removeClass('current');

    $(this).addClass('current');
    $("#" + tab_id).addClass('current');
  })
  /*도착지 탭1클릭*/
  $("#tab1 .desti_box button").click(function(){
    $("#tab1 #desti_name").show();
  });
  $("#tab1 #desti_name .desti_list > ul > li > button").click(function(){
    var selected = $(this).html();
    $("#tab1 #desti").val(selected);
    $("#tab1 #desti_name").hide();
  })
})
$(function(){
  /*도착지 탭2메뉴*/
  $('#tab2 .desti_tabs li').click(function () {
    var tab_id = $(this).attr('data-tab');

    $('#tab2 .desti_tabs li').removeClass('current');
    $('#tab2 .desti_list').removeClass('current');

    $(this).addClass('current');
    $("#" + tab_id).addClass('current');
  })
  /*도착지 탭2클릭*/
  $("#tab2 .desti_box button").click(function(){
    $("#tab2 #desti_name").show();
  });
  $("#tab2 #desti_name .desti_list > ul > li > button").click(function(){
    var selected = $(this).html();
    $("#tab2 #desti2").val(selected);
    $("#tab2 #desti_name").hide();
  })
})
$(function(){
  /*도착지 탭3메뉴*/
  $('#tab3 #desti_name3 .desti_tabs li').click(function () {
    var tab_id = $(this).attr('data-tab');

    $('#tab3 #desti_name3 .desti_tabs li').removeClass('current');
    $('#tab3 #desti_name3 .desti_list').removeClass('current');

    $(this).addClass('current');
    $("#" + tab_id).addClass('current');
  })
  /*도착지 탭3메뉴2*/
  $('#tab3 #desti_name4 .desti_tabs li').click(function () {
    var tab_id = $(this).attr('data-tab');

    $('#tab3 #desti_name4 .desti_tabs li').removeClass('current');
    $('#tab3 #desti_name4 .desti_list').removeClass('current');

    $(this).addClass('current');
    $("#" + tab_id).addClass('current');
  })

  /*도착지 탭3클릭*/
  $("#tab3 .desti_btn").click(function(){
    $("#tab3 #desti_name3").show();
  });
  $("#tab3 .desti_btn2").click(function(){
    $("#tab3 #desti_name4").show();
  });

  $("#tab3 #desti_name3 .desti_list > ul > li > button").click(function(){
    var selected = $(this).html();
    $("#tab3 #desti3").val(selected);
    $("#tab3 #desti_name3").hide();
  })
  $("#tab3 #desti_name4 .desti_list > ul > li > button").click(function(){
    var selected = $(this).html();
    $("#tab3 #desti4").val(selected);
    $("#tab3 #desti_name4").hide();
  })
})

$(function(){
      $.datepicker.setDefaults({
        changeMonth: true, 
        changeYear: true,
        showButtonPanel: true,
        numberOfMonths: [1,1],
        closeText: '닫기', 
        dateFormat: "yy-mm-dd",
        nextText: '다음 달',
        prevText: '이전 달',
        dayNames: ['월요일', '화요일', '수요일', '목요일', '금요일', '토요일', '일요일'],
        dayNamesMin: ['월', '화', '수', '목', '금', '토', '일'], 
        monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
        monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
        showMonthAfterYear: true,
        yearSuffix: '년',
        constrainInput: true,
        disabled:true,
        showOtherMonths: true,
      });
        $("#Datepicker,#Datepicker1,#Datepicker2,#Datepicker3,#Datepicker4").datepicker({
        minDate:"-10M",
        maxDate: "+1Y",
        ignoreReadonly: true,
        beforeShow: function() {
          setTimeout(function(){
              $('.ui-datepicker').css('z-index', 7);
          }, 0);
        }
      }).attr('readonly', 'readonly');
      //현재날짜 출력
      $( "#Datepicker,#Datepicker1,#Datepicker2,#Datepicker3,#Datepicker4").datepicker('setDate', 'today');
})


/*탭1 인원수 어른클릭*/
$(function(){
 var adult_val = $("#adult_val").text();
 var number = parseInt(adult_val,9);
  $("#adult_mi").click(function() {
   number--;
   if(number<=0){
     alert("더이상 줄일 수 없습니다.")
     number = 1;
   }
   $("#adult_val").text(number);
  })

  $("#adult_pl").click(function() {
  number++;
  if(number>9){
    alert("최대예약 인원은 9명입니다.")
    number = 1;
    }
    $("#adult_val").text(number);
  })
})
/*탭2 인원수 어른클릭*/
$(function(){
  var adult_val2 = $("#adult_val2").text();
  var number2 = parseInt(adult_val2,9);
 
  $("#adult_mi2").click(function() {
    number2--;
    if(number2<=0){
      alert("더이상 줄일 수 없습니다.")
      number2 = 1;
    }
    $("#adult_val2").text(number2);
  })
 
  $("#adult_pl2").click(function() {
   number2++;
   if(number2>9){
     alert("최대예약 인원은 9명입니다.")
     number2 = 1;
     }
     $("#adult_val2").text(number2);
   })
 })
/*탭3 인원수 어른클릭*/
$(function(){
  var adult_val3 = $("#adult_val3").text();
  var number3 = parseInt(adult_val3,9);
 
  $("#adult_mi3").click(function() {
    number3--;
    if(number3<=0){
      alert("더이상 줄일 수 없습니다.")
      number3 = 1;
    }
    $("#adult_val3").text(number3);
  })
 
  $("#adult_pl3").click(function() {
   number3++;
   if(number3>9){
     alert("최대예약 인원은 9명입니다.")
     number3 = 1;
     }
     $("#adult_val3").text(number3);
  })
 })

 /*탭1 인원수 아이클릭*/
$(function(){
  var kids_val = $("#kids_val").text();
  var number = parseInt(kids_val,9);
 
  $("#kids_mi").click(function() {
    number--;
    if(number<=0){
      alert("더이상 줄일 수 없습니다.")
      number = 1;
    }
    $("#kids_val").text(number);
  })
 
  $("#kids_pl").click(function() {
   number++;
   if(number>8){
     alert("아이의 최대예약인원은 어른 포함 9명입니다.")
     number = 1;
     }
     $("#kids_val").text(number);
  })
 })

/*탭2 인원수 아이클릭*/
 $(function(){
  var kids_val2 = $("#kids_val2").text();
  var number2 = parseInt(kids_val2,9);
 
  $("#kids_mi2").click(function() {
    number2--;
    if(number2<=0){
      alert("더이상 줄일 수 없습니다.")
      number2 = 1;
    }
    $("#kids_val2").text(number2);
  })
 
  $("#kids_pl2").click(function() {
   number2++;
   if(number2>8){
     alert("아이의 최대예약인원은 어른 포함 9명입니다.")
     number2 = 1;
     }
     $("#kids_val2").text(number2);
  })
 })

/*탭3 인원수 아이클릭*/
$(function(){
  var kids_val3 = $("#kids_val3").text();
  var number3 = parseInt(kids_val3,9);
 
  $("#kids_mi3").click(function() {
    number3--;
    if(number3<=0){
      alert("더이상 줄일 수 없습니다.")
      number3 = 1;
    }
    $("#kids_val3").text(number3);
  })
 
  $("#kids_pl3").click(function() {
   number3++;
   if(number3>8){
     alert("아이의 최대예약인원은 어른 포함 9명입니다.")
     number3 = 1;
     }
     $("#kids_val3").text(number3);
  })
 })

/*탭1 인원수 유아클릭*/
$(function(){
  var baby_val = $("#baby_val").text();
  var number = parseInt(baby_val,2);
 
  $("#baby_mi").click(function() {
    number--;
    if(number<=0){
      alert("더이상 줄일 수 없습니다.")
      number = 1;
    }
    $("#baby_val").text(number);
  })
 
  $("#baby_pl").click(function() {
   number++;
   if(number>=2){
     alert("유아 1명당 성인 1명이 반드시 동반되어야 합니다.")
     number = 1;
     }
     $("#baby_val").text(number);
  })
 })

/*탭2 인원수 유아클릭*/
$(function(){
  var baby_val2 = $("#baby_val2").text();
  var number2 = parseInt(baby_val2,2);
 
  $("#baby_mi2").click(function() {
    number2--;
    if(number2<=0){
      alert("더이상 줄일 수 없습니다.")
      number2 = 1;
    }
    $("#baby_val2").text(number2);
  })
 
  $("#baby_pl2").click(function() {
   number2++;
   if(number2>=2){
     alert("유아 1명당 성인 1명이 반드시 동반되어야 합니다.")
     number2 = 1;
     }
     $("#baby_val2").text(number2);
  })
 })

 /*탭3 인원수 유아클릭*/
$(function(){
  var baby_val3 = $("#baby_val3").text();
  var number3 = parseInt(baby_val3,2);
 
  $("#baby_mi3").click(function() {
    number3--;
    if(number3<=0){
      alert("더이상 줄일 수 없습니다.")
      number3 = 1;
    }
    $("#baby_val3").text(number3);
  })
 
  $("#baby_pl3").click(function() {
   number3++;
   if(number3>=2){
     alert("유아 1명당 성인 1명이 반드시 동반되어야 합니다.")
     number3 = 1;
     }
     $("#baby_val3").text(number3);
  })
 })

  /*나이계산기 창*/
  $(function() {
    $(".age_cal a").click(function(){
      $("#modal").fadeIn()
      $(".modal_close, .button_area > button").click(function(){
        $("#modal").hide();
      })
    })

    $("#boardDate").datepicker({
      dateFormat: "yy-mm-dd",
      minDate:"-10M",
      maxDate: "+1Y"
    }).attr('readonly', 'readonly');
    
    $("#birthDay").datepicker({
      dateFormat: "yy-mm-dd",
      yearRange: "2007:2020"
    }).attr('readonly', 'readonly');
    $(".cal_print > p").css("display","none");
    $(".input_btn").click(function(){
      $(".cal_print > p").css("display","block");
      var birthDay = $("#birthDay").val();
      var boardDate = $("#boardDate").val();
      var d1 = new Date(birthDay);
      var d2 = new Date(boardDate);
      $("#Date").text(boardDate);
  
      var diff = d2.getTime() - d1.getTime();
      console.log(diff)
      var daysPast = Math.floor(diff / (1000 * 60 * 60 * 24));
      $("#Days").text(daysPast);
  
      var adult ="성인"
      var kids = "소아"
      var baby = "유아"

      if(daysPast<=730){
        $("#kids_age").text(baby)
        $("#kids_age2").text(baby)
      }else if(daysPast>730 && daysPast<=4382){
        $("#kids_age").text(kids)
        $("#kids_age2").text(kids)
      }else if(daysPast>4383 && daysPast<=4748){
        $("#kids_age").text(kids)
        $("#kids_age2").text(adult)
      }else if(daysPast>=4749){
        $("#kids_age").text(adult)
        $("#kids_age2").text(adult)
      }
        else{
        return false;
      }
    })
  })