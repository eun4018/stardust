
//<![CDATA[
/*-------------------------------------------------------------*/
	function fnCho(str){
		var cho = ['ㄱ','ㄲ','ㄴ','ㄷ','ㄸ','ㄹ','ㅁ','ㅂ','ㅃ','ㅅ','ㅆ','ㅇ','ㅈ','ㅉ','ㅊ','ㅋ','ㅌ','ㅍ','ㅎ'];
		var result = [];
		for(var i in str){
			var char = str.substr(i, 1);
			var index = Math.floor((char.charCodeAt() - 44032) / 588);
			result.push(cho[index] || char);
		}
		return result.join('');
	}
	
	function fnMatch(keyword, data){
		var dataCho = fnCho(data);
		var keywordCho = fnCho(keyword);
		
		var matchIndexList = [];
		var index = -1;		
		var isExit = false;
		
		while(!isExit){
			index = dataCho.indexOf(keywordCho, (index + 1));
			if(index > -1){
				matchIndexList.push(index);
			}else{
				isExit = true;
			}
		}

		return matchIndexList;
	}
	
	function fnSearchKeyword(keyword, data){
		var matchIndexList = fnMatch(keyword, data);		
		
		var keywordLength = keyword.length;
		var dataCho = fnCho(data);
		var result = [];
		var matchList = [];
		
		for(var i in matchIndexList){
			var index = matchIndexList[i];
			var flag = true;
			
			for(var j = 0; j < keywordLength; j++){
				var keywordChar = keyword.substr(j, 1);
				var dataChar = (keywordChar.match(/[ㄱ-ㅎ]/)? dataCho : data).substr(j + index, 1);
								
				if(dataChar !== keywordChar){
					flag = false;
				}

				if(flag){
					result.push(index);
					break;
				}
			}
		}
		if(result.length > 0){
			for(var i in result){
				var val = data.substr(result[i], keywordLength);
				matchList.push(val);
			}
		}

		var tempSet = new Set(matchList);
		matchList = [...tempSet];

		return matchList;
	}
	
	
	/**
	 * 기관 검색 결과 출력 
	 * @param searchKey
	 * @returns
	 */
	function searchOrgListPop(searchKey) {

		let bzgBurnoSearchJsonArray = new Array();
		let tgBzgBurnoArray = new Array();
        
		$('[name=organ]').remove();
		$('#searchid').val(searchKey);

		let htmlObj = $('#srchResultBurnos');
		try {
			if(typeof bzgBurnoSearchJsonArray !== 'undefined') {
				let targetCnt = 0;
				// 검색목록 추출
				let tgBzgBurnoArray = new Array();
				let burnoCnt = 0;
				if( bzgBurnoJsonArray!= 'undefined') {
					burnoCnt = bzgBurnoJsonArray.length;
				}
				if( burnoCnt>0 ) {
					let burnoInfo;
					try {
					for(z=0; z<burnoCnt; z++ ) {
						burnoInfo = bzgBurnoJsonArray[z];
						//console.log("seq:"+i+", burno:"+ burnoInfo.BUR_NM);
						var name = burnoInfo.BUR_NM;
						// 실제 초성검색 하는 부
						// 일치하는 단어를 찾어서 리턴(Array 이며 중복은 제거됨)
						var matchList = fnSearchKeyword(searchKey.toUpperCase(), name.toUpperCase());
						// 일치하는 단어가 있는 경우 하이라이트 처리하는 부분
						// 퍼블에 맞게 교체할 template을 수정한다.
						
						// 리스트 재구성하는 건 화면에 맞게 수정 필요
						if(matchList.length > 0){
							targetCnt++;
							//console.log(obj);
							// 찾은 단어를 하이라이트 처리한다.
							for(var i in matchList){
								bzgBurnoSearchJsonArray.push(burnoInfo);
								//console.log("matchList["+i+"]:" + matchList[i]);
								name = name.replaceAll(matchList[i], '<font color="red">'+matchList[i]+'</font>');
							}
							burnoInfo["SRCH_NM"] = name;
							tgBzgBurnoArray.push(burnoInfo);
						}
					}
					}catch(e){console.log(e);}
				}

                let resCnt = 0;
				let searchBzgSet = new Set();				
				let isNewBzg = false;
				let bzgHtml = "";
				let preObj;
				bzgHtml += "<h2 id=\"burnoSrchGuid\">내 자산을 불러올<br><strong>기관을 선택</strong>해 주세요.</h2>";
				$(tgBzgBurnoArray).each(function(idx, obj){
					//console.log(obj);
					let tOrg = new Org(obj.BZG, obj.BZG_NM, obj.BUR_NO, obj.BUR_NM);
					
					if(!searchBzgSet.has(obj.BZG)){
						isNewBzg = true;
						searchBzgSet.add(obj.BZG);
					}else {
						isNewBzg = false;
					}
					if(isNewBzg) {
						if(idx==0){
						    bzgHtml += '<h3 class="tit" name="organ" id="'+obj.BZG+'">'+obj.BZG_NM+'</h3><div class="row_group_list" name="organ">';
						}else {
							bzgHtml += '</div><h3 class="tit" name="organ" id="'+obj.BZG+'">'+obj.BZG_NM+'</h3><div class="row_group_list" name="organ">';
						}
						//htmlObj.after(bzgHtml);
					}

					let spanObj = '<span class="organization-checkbox-box">';
					spanObj += '<input type="checkbox" name="organization" id="'+obj.BUR_NO+'" data.burNo="'+obj.BUR_NO+'" data.burNm="'+obj.BUR_NM+'" data.bzg="'+obj.BZG+'" data.bzgNm="'+obj.BZG_NM+'" data.bizId="'+obj.BIZ_ID+'" prechecked="" onClick=\"javascript:thisPage.doBurSrchSelBtnCtrl();return;\">';
					
					spanObj += '<label for="'+obj.BUR_NO+'"><img src="'+tOrg.getImgBur()+'" onerror="this.src=\''+tOrg.getImgBurErr()+'\'" alt="'+obj.BUR_NM+'"><em>';
					if ("Y" == obj.PKG_INC_YN) {
						spanObj += '<span name="PRE_CONN_ING">연결됨</span>';
					}
					spanObj += '<em>';
					spanObj += obj.SRCH_NM;
					spanObj += '</em></label></span>';
					bzgHtml += spanObj;
					
					if( targetCnt==(idx+1)){
						bzgHtml += '</div>';
						//htmlObj.after(bzgHtml);
						htmlObj.html(bzgHtml);
					}
					preObj = obj;
				});
				if(bzgBurnoSearchJsonArray.length==0) {
					$('#searchRstNoData').show();
				}else {
					$('#searchRstNoData').hide();
				}
			    $('#totCntSearchRst').text(bzgBurnoSearchJsonArray.length);
				if(bzgBurnoSearchJsonArray.length>0){
					doDrawerArea.open("secSrchOrg");
				}
			}
		}catch (e) {console.error(e);}
	}

    function doneSrchSelBur () {
        
		// 선택한 연동기관들의  건수 저장
		let orgSrchTotCnt = $('input[type=checkbox][name=organization]').length;;
		let orgSrchSelCnt = $('input[type=checkbox][name=organization]:checked').length;
		//thisData.SEL_ORG_LIST["CNT_"+thisData.SEL_BZG_CODE] =  orgCnt;
		
		// 기관코드 선택 건수 저장 - 전자서명, 마이데이터 서비스 거래내역 선택 요청 목적
		//thisData.SEL_ORG_LIST.SEL_ORG[thisData.SEL_BZG_CODE] = orgCnt;
        let selOrgSrchObj = new Object();
        let selOrgSrchArr = new Array();
        let selOrgSrchScope = new Set();
        // 검색결과 선택 element, 기선택  element
		$('input[name=organization][prechecked="1"],input[name=organization]:checked').each(function(idx, item){

            console.log($(item).attr("data.bzg"));
			selOrgSrchObj = new Object();
			selOrgSrchObj.BZG = $(item).attr("data.bzg");
			selOrgSrchObj.BZG_NM = $(item).attr("data.bzgnm");
			selOrgSrchObj.BIZ_ID = $(item).attr("data.data.bizId");
			selOrgSrchObj.BUR_NO = $(item).attr("data.burno");
			selOrgSrchObj.BUR_NM = $(item).attr("data.burnm");
			selOrgSrchObj.PRE_CHECKED = $(item).attr("prechecked");
			selOrgSrchObj.IS_CHECKED = ($(item).is(":checked")?"1":"0");
			selOrgSrchArr.push(selOrgSrchObj);
			selOrgSrchScope.add(selOrgSrchObj.BZG);
			console.log($(item).is(":checked"));
		});
		console.log("orgSrchTotCnt:" + orgSrchTotCnt);
		console.log("orgSrchSelCnt:" + selOrgSrchArr.length);
		console.log("bzgSrchSelCnt:" + selOrgSrchScope.size);
		arrangeSelOrgArr(selOrgSrchArr);

		// 업권분류 목로 화면에서 선택 기관 건수 update
		thisPage.doDispOrgCntOnScope();
		
		let orgTotCnt = thisPage.getOrgStoredCnt();
		thisPage.setBtnText("nextBtn", "" );
		if(orgTotCnt>0) {
			$('#nextBtn').attr('disabled', false);
		}else {
			$('#nextBtn').attr('disabled', true);
		}
		thisPage.popupClose("orgSelSrchPopCloseBtn");
		// Layer popup 리스트 data 삭제
		thisPage.delBurList();
    }
    
    function arrangeSelOrgArr(pSelOrgArr) {
    	// pBzg 정보가 {SEL_ORG}에 있으면, pPreChked가 1이면 skip 1이 아니면 차감 및 삭제
    	//      정보가 {SEL_ORG}에 없으면, pPreChked가 1일 경우 없음, 1이 아니면 추가(SEL_ORG, LIST_${BZG} )
    	// pBurNo 정보가 
    	if(pSelOrgArr===undefined || pSelOrgArr.length==0 ){
    		return;
    	}
    	
    	$(pSelOrgArr).each(function(idx, obj){
    		if(!arrangeSelOrgData(obj)){
    			console.log("선택한 기관정보 저장에 적합한 형식인지 확인 하십시요."+"["+obj.BUR_NM+"]"+obj);
    		}
    	});
    }
    
    function arrangeSelOrgData(pSelOrgObj) {
    	if(pSelOrgObj===undefined){
    		return false;
    	}
    	
    	console.log("thisData.SEL_ORG_LIST.SEL_ORG[BZG]:" + thisData.SEL_ORG_LIST.SEL_ORG[pSelOrgObj.BZG] );
    	
    	let tmpArr = thisData.SEL_ORG_LIST["LIST_"+pSelOrgObj.BZG];
    	// IS_CHECKED 1 , 저장된 기관정보 없으면 추가 저장
    	if("1" === pSelOrgObj.IS_CHECKED){
    		if(tmpArr===undefined) {
    			tmpArr = new Array();
    		}
    		let isExist = false;
    		$(tmpArr).each(function(idx, obj){
    			if(obj.BUR_NO === pSelOrgObj.BUR_NO){
    				isExist = true;
    			}
    		});
    		
    		// 기관정보가 없을 경우 추가
    		if(!isExist){
    			tmpArr.push(pSelOrgObj);
    			thisData.SEL_ORG_LIST.SEL_ORG[pSelOrgObj.BZG] = tmpArr.length;
    			thisData.SEL_ORG_LIST["LIST_"+pSelOrgObj.BZG] = tmpArr;
    		}
    	}else {
    		// IS_CHECKED 0, PRE_CHECKED 1
    		if("1"===pSelOrgObj.PRE_CHECKED ){
        		let isExist = false;
        		$(tmpArr).each(function(idx, obj){
        			if(obj.BUR_NO === pSelOrgObj.BUR_NO){
        				isExist = true;
        				tmpArr.splice(idx, 1);
        			}
        		});
    			if(isExist){
        			thisData.SEL_ORG_LIST.SEL_ORG[pSelOrgObj.BZG] = tmpArr.length;
        			thisData.SEL_ORG_LIST["LIST_"+pSelOrgObj.BZG] = tmpArr;
    			}
    		}
    	} // end if("1" === pSelOrgObj.IS_CHECKED){
    	
    	return true;
    }
	
//]]>

/*-------------------------------------------------------------*/
	