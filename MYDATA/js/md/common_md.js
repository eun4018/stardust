//const md_os 			= useragent.match(/1QPAOS/i) ? "A" : "I";

function goSessionOut () {
	location.href = "getmore://session_out"; //���Ǹ���� app�α��� �˾����
}


var go_main = function(){
	window.location.href = "getmore://go_main?type=main_mydata_move";
}

/**
 * Get Method ��ũ �̵� function 
 */
function goLink(url){

	if($('body #goForm') != null || $('body #goForm') != undefined){
		$('#goForm').remove();
	}

	jQuery("<form name=\"goForm\" method=\"get\"></form>").appendTo('body');
	
	document.goForm.action = url;
	document.goForm.submit();
}


/**
 * Post Method ��ũ �̵� function
 * @param url
 * @param param(�ĸ����� test=test&test1=test1.......)
 */
function goLinkParam(url, param){
//�� �ʱ�ȭ	�� input type �߰�
	if($('body #goForm') != null || $('body #goForm') != undefined){
		$('#goForm').remove();
	}
	
	var form = $('<form id=\"goForm\" name=\"goForm\" method=\"post\">');	
	var params = param.split('&');
	if(param != "" && param != null){
		//alert(params.length);
		if(params.length > 1){
			for(var i = 0; i < params.length; i++){
				var temp = params[i].split("=");
				jQuery("<input type=\"hidden\" name=\""+temp[0]+"\" value=\""+temp[1]+"\"/>").appendTo(form);
			}
		}
		else {
			var temp = param.split("=");
			jQuery("<input type=\"hidden\" name=\""+temp[0]+"\" value=\""+temp[1]+"\"/>").appendTo(form);
		}
	}
	jQuery("</form>").appendTo(form);
//end
	
	
	form.appendTo('body');
	$('body #goForm').attr("action", url);
	$('body #goForm').submit();
	
	
}

/**
 * Post Method ��ũ �̵� function
 * @param url
 * @param param Object {key:value, keys : [Objects]}
 */
function goSubmitParam(url, param){
	
	//alert("goSubmitParam:");
	//�� �ʱ�ȭ	�� input type �߰�
		if($('body #goForm') != null || $('body #goForm') != undefined){
			$('#goForm').remove();
		}
		
		var form = $('<form id=\"goForm\" name=\"goForm\" method=\"post\">');
		if(param != "" && param != null){
			$.each(param, function(key, value) {  // objct
				console.log("key:" + key);
				if( (typeof value === 'object') ){
					$.each(value, function(index1, item1) { // Aray
						$.each(item1, function(key2, value2){ // objct
							console.log("key:"+key+", value:"+ value);
							jQuery('<input type=\"hidden\" name=\"'+key2+'\" value=\"'+value2+'\"/>').appendTo(form);
						});
					});
				}else {
					jQuery('<input type=\"hidden\" name=\"'+key+'\" value=\"'+value+'\"/>').appendTo(form);
				}
			});
		}
		jQuery("</form>").appendTo(form);
	//end	
		form.appendTo('body');
		$('body #goForm').attr("action", url);
		$('body #goForm').submit();
}


/**
 * Post Method ��ũ �̵� function
 * @param url
 * @param param(�ĸ����� test=test&test1=test1.......)
 */
function goPageParam(url, param){
//�� �ʱ�ȭ	�� input type �߰�
	$('#goForm').remove();
	let form = $('<form id"goForm"></form>');
	form.attr('action', url);
	form.attr('method', 'post');
	form.appendTo('body');
	//form.append("<input type=\"hidden\" name=\"nm1\" value=\"val1\"/>");
	form.submit();
}


/**
 * AJAX web app ȣ��
 * @param param
 * @param url
 * @param callbackMethod
 */ 
function ajaxCall(reqData,url,callbackMethod){
	let reqMap = reqData;
	let methodType = "post";
	let asyncType = "true";
	
	let dataType = "json";
	let headerInfo = {'X-Ajax-Error-Accept': 'application/json'};

	showLoadingAni(9000);
	
	JqueryAjaxCall(reqData,url,callbackMethod, methodType, asyncType, dataType, headerInfo );

}

/**
 * AJAX web app ȣ��
 * @param param
 * @param url
 * @param callbackMethod
 * @param methodType
 * @param asyncType
 * @param dataType
 * @param headerInfo
 */ 
function JqueryAjaxCall(reqData,url,callbackMethod, methodType, asyncType, dataType, headerInfo){
	
	if(stringUtil.isEmpty(url)){
		console.log("URL Empty!!");
		return;
	}
	
	jQuery.ajax({
	 	url			: url,
		type		: methodType,
		async		: asyncType,
		dataType	: dataType,
		contentType : "application/x-www-form-urlencoded;charset=euc-kr",
	    headers		: headerInfo,
		data		: reqData,
		cache		: false,
		success: function (data) {
			// �ε� ����
			hideLoadingAni();
			var dataMap = data.dataMap;
			console.log(data);
			
			if (dataMap.ERROR_CODE != undefined && dataMap.ERROR_CODE != null) {			
				console.log("ERROR_CODE!!" + dataMap.ERROR_CODE);
				if (dataMap.ERROR_MESSAGE != undefined && dataMap.ERROR_MESSAGE != null) {
					alert("["+dataMap.ERROR_CODE+"]"+dataMap.ERROR_MESSAGE);
					console.log(dataMap.ERROR_MESSAGE);
				}else {
					alert("�ý��� ����Դϴ�.\r\n ��� �� �ٽ� �̿��� �ּ���.");
					console.log("�ý��� ����Դϴ�. ��� �� �ٽ� �̿��� �ּ���.");
				}
				return;
			}
			// ����
			if (dataMap.RESULT == "SUCCESS") {
				if(stringUtil.isNotEmpty(callbackMethod)){
					console.log("callbackMethod");
					console.log(dataMap);
					callbackMethod(dataMap);
				}else{
					alert("����Ϸ�");
					console.log("����Ϸ�");
				}
			} else {
				if (dataMap.ERROR_MESSAGE != undefined && dataMap.ERROR_MESSAGE != null) {

					alert("�̿�:"+dataMap.ERROR_MESSAGE);
					console.log(dataMap.ERROR_MESSAGE);
				}else {
					alert("�̿�:"+"�ý��� ����Դϴ�. ��� �� �ٽ� �̿��� �ּ���.");
					console.log("�ý��� ����Դϴ�. ��� �� �ٽ� �̿��� �ּ���.");
				}
			}
		},
		error : function(request, status, error) {
			//�ε� ����
			hideLoadingAni();
			console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
			console.log(data);
			
		}
	});
}

/**
 * key �ش� �ϴ� ������ �׷� Map �����Ͽ� return �Ѵ�.
 * ArrayList to Map
 * @param param
 * 
 * @example
 * list : [ ['a', '1'], ['a','2'],['a','3']];
 * => {'a':['1','2','3']}
 */ 
function arrToMap(list, key) {
	var dataMap = {};
	
	if(!list) return dataMap;
	
	for(var i=0; i<list.length; i++){
		var keyVal = list[i][key];
		
		if(dataMap[keyVal]) {
			var value = dataMap[keyVal];
			value.push(list[i]);
		} else {
			var value = [];
			value.push(list[i]);
			dataMap[keyVal] = value;
		}
	}
	
	return dataMap;
}

/**
 * �Ķ��� �����ϴ� page�� load �Ͽ� �ش� ȭ���� html�� callback �Լ��� return �Ѵ�. 
 * @param page
 * @param param
 * @param callback
 * @example 
 * var param = {};
 * param.ASTS_SEQ = ASTS_SEQ;
 * loadPage('/QW500302205PWBM.web', param, function(r) {
 * 	   $('#acco-selectArea-1').append(r);	
 * });
 */
function loadPage(page, param, callback) {
	param = param || {};
	$.post(page, param, function(r) {
		if(callback) callback(r);
	}).fail(function(){
		alert("�ý��� ����Դϴ�. ��� �� �ٽ� �̿��� �ּ���.");
	});
}

function setMyDataScreenRefrash(yn, screenCode){
	$.cookie('MY_DATA_SCREEN_REFRASH_YN_' + screenCode, yn, {expires:1});
}

function closeWebView(){
	window.location.href = 'getmore://page_close';
}

// ���� ȭ���� �������� ���� �� ȣ�� ��(�˾� ��� �� ���� ���� ��Ȳ)
// ȭ�鿡�� ������ �� Ŀ���͸���¡ ����
function myDataScreenOnResume(){
	var screenCode = location.pathname.replace('/mydata/', '').replaceAll('/', '').replace('.web', '');
	
	if($.cookie('MY_DATA_SCREEN_REFRASH_YN_'+screenCode) == 'Y'){
		$.cookie('MY_DATA_SCREEN_REFRASH_YN_'+screenCode, 'N', {expires:1});
		location.reload();
	}
}

/**
 * ���� �з� �ڵ� 
 */
var bzgIconPath = new Map();
//bzgIconPath.set("01", "my-ic-assets-0");  // 01:"�ϳ������׷�"
bzgIconPath.set("02", "my-ic-assets-1");  // 02:"ī��"
bzgIconPath.set("03", "my-ic-assets-12");  // 03:"����"
bzgIconPath.set("04", "my-ic-assets-3");  // 04:"��������"
bzgIconPath.set("05", "my-ic-assets-8");  // 05:"����"
bzgIconPath.set("06", "my-ic-assets-11");  // 06:"���̸Ӵ�"
bzgIconPath.set("07", "my-ic-assets-13");  // 07:"ĳ��Ż"
bzgIconPath.set("08", "my-ic-assets-14");  // 08:"��Ÿ"
bzgIconPath.set("09", "my-ic-assets-20");  // 09:"��������"

// ����� ������ ����
function Org(bzg, bzgNm, burNo, burNm){
    this.bzg=bzg, this.bzgNm=bzgNm, this.burNo=burNo, this.burNm=burNm;
	this.toString = function() {
	    return "bzg:"+this.bzg+", bzgNm:"+this.bzgNm+", burNo:"+this.burNo+", burNm:"+this.burNm;
	};
	this.getImgBzgIconPath = function() {
		var sbzgIconPath = "";
		switch(this.bzg) {
			case "01" : sbzgIconPath = "my-ic-assets-0"; // 01:"�ϳ������׷�"  ������� ����.
			  break;
			case "02" : sbzgIconPath = "my-ic-assets-1"; // 02:"ī��"
			  break;
			case "03" : sbzgIconPath = "my-ic-assets-2"; // 03:"����"
			  break;
			case "04" : sbzgIconPath = "my-ic-assets-3"; // 04:"��������"
			  break;
			case "05" : sbzgIconPath = "my-ic-assets-8"; // 05:"����"
			  break;
			case "06" : sbzgIconPath = "my-ic-assets-11"; // 06:"���̸Ӵ�"
			  break;
			case "07" : sbzgIconPath = "my-ic-assets-13"; // 07:"ĳ��Ż"
			  break;
			case "08" : sbzgIconPath = "my-ic-assets-14"; // 08:"��Ÿ"
			  break;
			case "09" : sbzgIconPath = "my-ic-assets-20"; // 09:"��������"
			  break;
			default : ""
		}
		return sbzgIconPath;
	};
	this.getImgBur = function() {
		return "/images/md/code/"+this.burNo+"_logo.png";
	};
	this.getImgBurErr = function() {
		// /images/md/code/@null-bank.png
		if(this.bzg=="01"){
			return "/images/md/@img-organization-hana.png";
		}else {
			return "/images/md/code/@null-"+this.getBzgScope()+".png";
		}
	};
	this.getBzgScope = function() {
		let bzgScope = "";
		switch(this.bzg) {
			case "01" : bzgScope = "hana"; // 01:"�ϳ������׷�"  ������� ����.
			  break;
			case "02" : bzgScope = "card"; // 02:"ī��"
			  break;
			case "03" : bzgScope = "bank"; // 03:"����"
			  break;
			case "04" : bzgScope = "invest"; // 04:"��������"
			  break;
			case "05" : bzgScope = "insu"; // 05:"����"
			  break;
			case "06" : bzgScope = "efin"; // 06:"���̸Ӵ�"
			  break;
			case "07" : bzgScope = "capital"; // 07:"ĳ��Ż"
			  break;
			case "08" : bzgScope = "telecom"; // 08:"telecom"
			  break;
			case "09" : bzgScope = "bank"; // 09:"��������"
			  break;
			default : bzgScope = this.bzg;
		}
		return bzgScope;
	};
}


/*
 * Spider DataMap�� _BeginLoop_A �ݺ��θ� javascript Array(<Object>) �� ��ȯ
 * [in]
 *     DataSet dsBzgList = (DataSet)dataMap.get("_BeginLoop_A");
 *     var vDsBzgList = 'dsBzgList.toArrayList()' jsp code to javascript
 * [out]
 *     Array
 */
function stringArrayToMapArray (strArrList) {
	
	if(strArrList == 'undefined' || strArrList == '' ){
		return;
	}

	// block data�� map���� ��ȯ
	let blockMap = new Map();
	// blockMap�� array�� ����
	let blockMapArray = new Array();

	// ���� String array data�� �����ϱ� ���� ������ ���� �и�
	var arrStr = strArrList.split('{');
	arrStr.forEach( function(item, index) {
	    let tmpStr = item;
	    if( item.indexOf('[') > -1 ) {
	    }else {
	        tmpStr = tmpStr.replace(/},/gi,'').replace(/}]/gi,'');
	        //console.log(tmpStr);
	        let tmpStrArr = tmpStr.split(", ");
	        
	        blockMap = new Map();
	        tmpStrArr.forEach( function(item1, index1) {
	        // block data work
	            //console.log("Inner Item ::" + item1);
	            let strArrIn1 = item1.split('=');
	            blockMap.set ( strArrIn1[0].trim(), strArrIn1[1].trim() );
	        });
	        blockMapArray.push(blockMap);
	        //console.log("blockMapArray::"+blockMapArray);
	    }
	} );

	// test code
	//blockMapArray.forEach( item => {
	//    console.log( item );
	//});
	return blockMapArray;
}



/*
 * Spider DataMap�� _BeginLoop_A �ݺ��θ� javascript Array(<Object>) �� ��ȯ
 * [in]
 *     DataSet dsBzgList = (DataSet)dataMap.get("_BeginLoop_A");
 *     var vDsBzgList = 'dsBzgList.toArrayList()' jsp code to javascript
 * [out]
 *     Array
 */
function stringArrayToJsonArray (strArrList) {
	
	if(strArrList == 'undefined' || strArrList == '' ){
		return;
	}

	// block data�� map���� ��ȯ
	let blockObj = new Object();
	// blockMap�� array�� ����
	let blockArray = new Array();

	// ���� String array data�� �����ϱ� ���� ������ ���� �и�
	var arrStr = strArrList.split('{');
	arrStr.forEach( function(item, index) {
	    let tmpStr = item;
	    if( item.indexOf('[') > -1 ) {
	    }else {
	        tmpStr = tmpStr.replace(/},/gi,'').replace(/}]/gi,'');
	        //console.log(tmpStr);
	        let tmpStrArr = tmpStr.split(", ");
	        
	        blockObj = new Object();
	        tmpStrArr.forEach( function(item1, index1) {
	        // block data work
	            //console.log("Inner Item ::" + item1);
	            let strArrIn1 = item1.split('=');
	            blockObj[strArrIn1[0].trim()] = strArrIn1[1].trim() ;
	        });
	        blockArray.push(blockObj);
	        //console.log("blockMapArray::"+blockMapArray);
	    }
	} );

	// test code
	//blockMapArray.forEach( item => {
	//    console.log( item );
	//});
	return JSON.parse(JSON.stringify(blockArray));
}

/**
 * ������ �������� checkcertCheckCallback
 * @param callBack=
 * @callback certCheckCallback(String) [ 1:������ ����, 0:������ �̺��� ] 
 * @example 
 * location.href = "mydata://checkCertExisted?callBack=certCheckCallback";
 */
function certExistYn() {
	location.href = "mydata://checkCertExisted?callBack=certCheckCallback";
}
 

/**
 * ������ �������� ȭ�� ��� App�� ��û.
 * @example 
 * location.href = "jscall://mobilian_import";
 */
function getCertToScr() {
	location.href = "jscall://mobilian_import";
}


/**
 * ������ ����
 * param yyyy
 * param mm
 * param dd
 * result ������ age
 */
function getFullAge(yyyy, mm, dd) {
	const ctoday = new Date();
	const birthDate = new Date(yyyy, mm-1, dd);

	//const birthDate = new Date(yyyy, mm, dd);

	let age = ctoday.getFullYear()-birthDate.getFullYear();
	const m = ctoday.getMonth() - birthDate.getMonth();

	if(m<0 || (m===0 && ctoday.getDate() < birthDate.getDate())){
		age--;
	}
	console.log(age);
	return age;
}

/**
 * ��Ű ���� �� ��ȸ, ����
 * set : cookie.set("CNO", "1234567890", {});
 * get : cookie.set("CNO");
 * del : cookie.set("CNO");
 * use : if(!document.cookie){ cookie.set(...); }
 */
var cookie = {
	set : function(name, value, poptions ){
		if( 'undefined'==poptions) options = {};
		else if(typeof poptions == "object") options = poptions;
		options = {
			path: '/' // ��� ����
		};
		let lKeys = "";// �ƱԸ�Ʈ�� �ɼ��� �Ѱ����� ���
		for(lKeys in poptions) {
			options[lKeys] = poptions[lKeys];
		}
		
		if( options.expires instanceof Date) {
			options.expires = options.expires.toUTCString(); // �� Date ��ü��� ���Ŀ� �°� ���ڵ�
		}
		
		let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
		let optionKey = "";
		for( optionKey in options) {
			updatedCookie += "; " + optionKey;
			let optionValue = options[optionKey];
			if(optionValue!==true) { // ����� ���ٸ�
				updatedCookie += "=" + optionValue;
			}
		}
		document.cookie = updatedCookie; // ���� ����
	},
	del : function(name) {
		cookie.set(name, "", {'max-age':-1}); // �ش���Ű ��Ҹ� ����
	},
	get : function(name){
		let matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*:{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)" ));
		return matches ? decodeURIComponent(matches[1]) : undefined;
	}
}

/**
 * [����]
 *     3�ڸ��� ���� ',' �߰�
 * ��) var str = "1345245";
 *     alert(getInsComma(str));
 * @param String ó�� ���
 */
function getInsComma(val1, type) {
    var val2 = "";
    
    if (val1 <= 0 && type!= null && type == 2) {
        return "0.00";
    }
    
    val1 = (typeof(val1) == 'object') ? val1.value      : val1;
    val1 = (typeof(val1) == 'number') ? val1.NumToStr() : val1;
    
    // �Էµ� val1 �� �Ҽ����� ���� ��� �Ҽ��� 2�ڸ����� ��ȯ
    if (val1.indexOf(".") > -1) {
        val2 = val1.substring(val1.indexOf("."), val1.indexOf(".") + 3);
        val1 = val1.substring(0, val1.indexOf("."));
    }
    
    if (typeof(val1) == 'string') {
        if (val1.trim() == '') return val1;
        var resultNum = '';
        var str_tmp   = val1;
        if(val1.indexOf("-") > -1){ //val1�� �����ϰ�� �޸� ���� ����
        	str_tmp = str_tmp.replace("-","");
        }
        if (str_tmp.length > 3) {
            for (var i=str_tmp.length-1, k=0; i>=0; i--, k++) {
                if ((k % 3) == 0 && (k != 0)) {
                    resultNum = ','+ resultNum;
                }
                resultNum = str_tmp.charAt(i) + resultNum;
            }
        } else {
            resultNum = str_tmp;
        }
         if(val1.indexOf("-") > -1){ //val1�� �����ϰ�� �޸� ���� ����
        	resultNum = "-"+resultNum;
        }
        return resultNum + val2;
    }
}

// ���Խ� : E-mail
function regularExpressEmail(val) { 
    var regExp = /^((\w|[\-\.])+)@((\w|[\-\.])+)\.([A-Za-z]+)$/;

	return regExp.test(val) ? true : false;
}

function filteringXss(ret) {
	if (ret == null || ret == "") return;
	
	ret = ret.replace(/<(S|s)(C|c)(R|r)(I|i)(P|p)(T|t)/g, "&lt;script");
	ret = ret.replace(/<\/(S|s)(C|c)(R|r)(I|i)(P|p)(T|t)/g, "&lt;/script");		
	ret = ret.replace(/<(O|o)(B|b)(J|j)(E|e)(C|c)(T|t)/g, "&lt;object");
	ret = ret.replace(/<\/(O|o)(B|b)(J|j)(E|e)(C|c)(T|t)/g, "&lt;/object");		
	ret = ret.replace(/<(A|a)(P|p)(P|p)(L|l)(E|e)(T|t)/g, "&lt;applet");
	ret = ret.replace(/<\/(A|a)(P|p)(P|p)(L|l)(E|e)(T|t)/g, "&lt;/applet");		
	ret = ret.replace(/<(E|e)(M|m)(B|b)(E|e)(D|d)/g, "&lt;embed");
	ret = ret.replace(/<\/(E|e)(M|m)(B|b)(E|e)(D|d)/g, "&lt;embed");		
	ret = ret.replace(/<(F|f)(O|o)(R|r)(M|m)/g, "&lt;form");
	ret = ret.replace(/<\/(F|f)(O|o)(R|r)(M|m)/g, "&lt;form");
	
	return ret;
}

/*
 * newWebView 
 * �ܺ�url ���½� ���: Native Title View, �������, ���� ��� ��ư �� View
 */
function showBridgeWebView(url, menuId){
	if( !menuId){
		menuId = '';
	}
	
	if(isAndroidDevice()){
		location.href = 'mydata://newWebView?url=' + encodeURIComponent(url) + '&callBack=webview&title_visibility=show&rightBtnType=close&leftBtnType=&login=N&webViewType=W_SSO&menuId=';
	}else{
		location.href = 'mydata://newWebView?url=' + encodeURIComponent(url) + '&callBack=webview&title_visibility=show&rightBtnType=close&leftBtnType=&login=N&menuId=' + menuId;
	}
}

/**
 * �� ������ ��������
 * orgsJsonArr : ���������� ����ȭ�鿡�� ������ ������
 * preConnOrgsJsonArr : ������ ��������� Y�� ���
 */
function isExistPreConnectedOrgs(orgsJsonArr, preConnOrgsJsonArr){
	let isExistPreConnectedOrg = false;
	
	if( typeof orgsJsonArr=="undefined" || typeof preConnOrgsJsonArr=="undefined" ){
		return isExistPreConnectedOrg;
	}
	try {
		$(preConnOrgsJsonArr).each(function(idx, item){
			$(orgsJsonArr).each(function(idx2,item2){
				if( item2.BUR_NO==item.BUR_NO )	{
					isExistPreConnectedOrg=true;
					if( isExistPreConnectedOrg ) return false;
				}
			});
			if( isExistPreConnectedOrg ) return false;
		});
	}catch(e){console.log(e)}
	return isExistPreConnectedOrg;
}
