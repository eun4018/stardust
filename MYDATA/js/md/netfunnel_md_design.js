NetFunnel.SkinUtil.add('default',{
	htmlStr:' \
		<div id="NetFunnel_Skin_Top" class="my-dialog-content active" role="alertdialog" data-id="acco-dialog-area-1" aria-labelledby="acco-dialog-1" tabindex="0"> \
		  <div class="my-dialog"> \
		    <h2>접속대기 중입니다. \
		      <p class="time_count">예상시간 : <span id="NetFunnel_Loading_Popup_TimeLeft" class="%M분 %02S초^ ^false"></span></p> \
		    </h2> \
		  <p class="center">앞에 <b><span id="NetFunnel_Loading_Popup_Count"></span>명</b>, 뒤에 <b><span id="NetFunnel_Loading_Popup_NextCnt"></span>명</b>의<br> \
		    대기자가 있습니다.<br> \
		    현재 접속자가 많아 대기중이며<br> \
		    잠시만 기다리시면<br> \
		      서비스로 자동 접속 됩니다.</p> \
		  <button class="btn-ok" id="NetFunnel_Countdown_Stop">중지</button> \
		  </div> \
		</div> \
		<div class="overlay active"></div>'
},'mobile');

NetFunnel.tstr = '\
	<div id="NetFunnel_Skin_Top" class="my-dialog-content active" role="alertdialog" data-id="acco-dialog-area-1" aria-labelledby="acco-dialog-1" tabindex="0"> \
	  <div class="my-dialog"> \
	    <h2>접속대기 중입니다. \
	      <p class="time_count">예상시간 : <span id="NetFunnel_Loading_Popup_TimeLeft" class="%M분 %02S초^ ^false"></span></p> \
	    </h2> \
	  <p class="center">앞에 <b><span id="NetFunnel_Loading_Popup_Count"></span>명</b>, 뒤에 <b><span id="NetFunnel_Loading_Popup_NextCnt"></span>명</b>의<br> \
	    대기자가 있습니다.<br> \
	    현재 접속자가 많아 대기중이며<br> \
	    잠시만 기다리시면<br> \
	      서비스로 자동 접속 됩니다.</p> \
	  <button class="btn-ok" id="NetFunnel_Countdown_Stop">중지</button> \
	  </div> \
	</div> \
	<div class="overlay active"></div>'
NetFunnel.SkinUtil.add('default',{htmlStr:NetFunnel.tstr},'normal');