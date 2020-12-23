/**
 * 데이터 유효성을 체크한다.
 *
 * @param	form
 */
function validate(form) {
	var obj;
	var title;
	var dataType;
	var minValue;
	var maxValue;
	var minLength;
	var isValid;
	var value;
	var equals;
	var checkNull;
	var jumin1 = "";
	var jumin2 = "";
	var frgnlic1 = "";
	var frgnlic2 = "";
	
	for (i = 0; i < form.elements.length; i++) {
		obj = form.elements[i];
		if(obj.getAttribute("type") != "file"){
			obj.value = trim(obj.value);
		}

		// 날짜형식
		title = obj.getAttribute("title");
		dataType = obj.getAttribute("dataType");
		minValue = obj.getAttribute("minValue");
		maxValue = obj.getAttribute("maxValue");
		minLength = obj.getAttribute("minLength");
		equals = obj.getAttribute("equals");
		len = obj.getAttribute("len");
		checkNull = obj.getAttribute("isNullCheck");
		
		
		value = obj.value;
		if(dataType=="strDate"){
			value = str_replace('-','',value);
		}
		//value = jsGetValue(obj);

		if (title == null) {
			title = obj.name;
		}
		
		// 필수 입력 항목 체크
		if (checkNull != null && checkNull == "true" && obj.disabled == false) {
			isValid = false;

			if (obj.type == "radio" || obj.type == "checkbox") {
				if (form.elements[obj.name].length) {
					for (j = 0; j < form.elements[obj.name].length; j++) {
						if (form.elements[obj.name][j].checked) {
							isValid = true;
							break;
						}
					}
				} else {
					if (obj.checked) {
						isValid = true;
					}
				}
			} else {
				if (value.replace(/^\s*/, '').replace(/\s*$/, '') != "") {
					isValid = true;
				} else {
					if (obj.getAttribute("comma") != null) {
						obj.value = 0;
						isValid = true;
					}
				}
			}

			if (!isValid) {

				if(obj.type =="text" || obj.type =="password" || obj.type == "textarea"){
					alert(title + "을(를) 입력하십시오.");
				}else{
					alert(title + "을(를) 선택하십시오.");
				}
				
				try{
					//alert(obj.type);
					obj.focus();
				} catch(ex)	{}
				if (window.event) {
					window.event.returnValue = false;
				}
				return	false;
			}
		}

		// 데이터 길이 체크
		
		if (len != null) {
			if (jsGetValue(obj).length != eval(len)) {
				alert(title + "은(는) " + len + "자리를 입력해야 합니다.");
				try{
					obj.focus();
				} catch(ex)	{}
				if (window.event) {
					window.event.returnValue = false;
				}
				return	false;
			}
		}

		if (obj.type == "text" || obj.type == "textarea" || obj.type == "hidden" || obj.type =="password") {


				if (obj.readOnly == false && minLength != null && jsByteLength(value) < minLength) {
					if(obj.type =="password"){
						alert(title + "은(는) " + minLength + "자 이상 입력하세요.");
					}else{
						alert(title + "은(는) 한글 " + (minLength / 2) + "자, 영문 " + minLength + "자 이상 입력하세요.");
					}
					try{
						obj.focus();
					} catch(e){}
					if (window.event) {
						window.event.returnValue = false;
					}

					return	false;
				}

				if(equals!= null){
						eval("isValid = isEqualValidate(value, document.getElementById('"+ equals + "').value)");
						if(!isValid){
							eval("var title2 =" +equals+".title;");
							alert(title + "은(는) " + title2 +"과(와) 일치하지 않습니다");
							try{
								obj.focus();
							} catch(ex)	{}
							if (window.event) {
								window.event.returnValue = false;
							}
							return	false;
						}
				}
				
		} 
		if ((value != "") && (dataType != null)) {
				isValid = true;
				if (dataType == "date" || dataType == "strDate") {
					value = deleteDateFormatStr(value);
					isValid = isDate(value);
				} else if (dataType == "email") {
					isValid = isEmail(value);
				} else if (dataType == "email2") {
					var subfield = obj.getAttribute("subfield");
					value = value + "@" + eval("obj.form." + subfield + ".value" ) ;
					isValid = isEmail(value);
				} else if (dataType == "float") {
					value = deleteCommaStr(value);
					isValid = isFloat(value);
					
				} else if (dataType == "integer") {
					value = deleteCommaStr(value);
					isValid = isInteger(value);
					
				} else if (dataType == "number") {
					value = deleteCommaStr(value);
					isValid = isNumber(value);
					
				} else if (dataType == "zipCode") {
					value = deleteZipCodeFormatStr(value);
					isValid = isZipCode(value);
					
				} else if (dataType == "time") {
					value = deleteTimeFormatStr(value);
					isValid = isTime(value);
					
				} else if (dataType == "jumin") {
					value = deleteJuminFormatStr(value);
					isValid = isJumin(value);
					
				} else if (dataType == "saup") {
					value = deleteSaupFormatStr(value);
					isValid = isSaup(value);
					
				} else if (dataType == "memberCard") {
					value = deleteMemberCardFormatStr(value);
					isValid = isMemberCard(value);
					
				} else if (dataType == "corporate") {
					value = deleteCorporateFormatStr(value);
					isValid = isCorporate(value);
					
				} else if (dataType == "datetime") {
					value = deleteDatetimeFormatStr(value);
					isValid = isDatetime(value);
					
				} else if (dataType == "license") {
					value = deleteLicenseFormatStr(value);
					isValid = isLicense(value);
					
				} else if (dataType == "licenseFull") {
					value = deleteLicenseFullFormatStr(value);
					isValid = isLicenseFull(value);
					
				} else if (dataType == "phone") {
					value = deletePhoneFormatStr(value);
					isValid = isPhone(value);
					
				} else if (dataType == "timestamp") {
					value = deleteTimestampFormatStr(value);
					isValid = isTimestamp(value);
					
				} else if (dataType == "telephone") {
					isValid = isTelephone(value);
					
				} else if (dataType == "id") {
					isValid = isValidID(value);
				} else if (dataType == "passwd") {
					isValid = isValidPwd(value);
				} else if (dataType == "jumin1"){
					jumin1 = trim(value);
				} else if (dataType == "jumin2"){
					jumin2 = trim(value);
				} else if (dataType == "frgnlic"){ //외국인 등록번호
					value = trim(value);
					isValid = frgnRrnoCnfm(value);
				} else if (dataType == "frgnlic1"){ //외국인 등록번호1
					frgnlic1 = trim(value);
				} else if (dataType == "frgnlic2"){ //외국인 등록번호2
					frgnlic2 = trim(value);
				} else if (dataType == "txt2000"){ //textarea 2000 이상 입력시 체크
					isValid = fc_chk_byte(obj);
				} else if (dataType == "biznum"){ //사업장번호
					isValid = validBusiNo(obj.value);
				} else if (dataType = "checkFileExt") {
					isValid = checkFileExt(obj.value);
				}
				
				//주민번호 체크
				if(jumin1 != "" && jumin2 != ""){
					isValid = isJumin(jumin1 + jumin2);
				}
				
				//외국인 등록번호
				if(frgnlic1 != "" && frgnlic2 != ""){
					isValid = frgnRrnoCnfm(frgnlic1 + frgnlic2);
				}
				
				if (!isValid) {
					if(mj_message == ""){
						alert(title + " 형식이 올바르지 않습니다.");
					}else{
						alert(mj_message);
						mj_message="";
					}
					if (dataType == "float" || dataType == "integer" || dataType == "number") {
						obj.value = "0";
					}
					try{
						obj.focus();
					} catch(ex)	{}
					if (window.event) {
						window.event.returnValue = false;
					}
					return	false;
				}else{
				
				/*
				if(equals!= null){
						eval("isValid = isEqualValidate(value,form."+ equals+ ".value)");
						if(!isValid){
							eval("var title2 = form." +equals+".title;");
							alert(title + "은(는) " + title2 +"과(와) 일치하지 않습니다");
							try{
								obj.focus();
							} catch(ex)	{}
							if (window.event) {
								window.event.returnValue = false;
							}
							return	false;
						}
				}
				*/
				

				if ((minValue != null)) {
					if (eval(minValue) > eval(value)) {
						alert(title + " 값은 최소값(" + minValue + ") 이상이여야 합니다.");
						try{
							obj.focus();
						} catch(ex)	{}
						if (window.event) {
							window.event.returnValue = false;
						}
						return	false;
					}
				}

				if ((maxValue != null)) {
					if (eval(maxValue) < eval(value)) {
						alert(title + " 값이 최대값(" + maxValue + ")을 미만이여야 합니다.");
						try{
							obj.focus();
						} catch(ex)	{}
						if (window.event) {
							window.event.returnValue = false;
						}
						return	false;
					}
				}

			}
		}
	}

	return	true;
}


/**
 * 총일수를 구한다.
 *
 * @param	yearStr
 * @param	monthStr
 * @return	총일수
 */
function getTotalDays(yearStr, monthStr) {
	var total_days;
	var year = eval(yearStr);
	var month = eval(monthStr);

	switch (month) {
		case 1 :
			total_days = 31;
			break;
		case 2 :
			if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
				total_days = 29;
			} else {
				total_days = 28;
			}
			break;
		case 3 :
			total_days = 31;
			break;
		case 4 :
			total_days = 30;
			break;
		case 5 :
			total_days = 31;
			break;
		case 6 :
			total_days = 30;
			break;
		case 7 :
			total_days = 31;
			break;
		case 8 :
			total_days = 31;
			break;
		case 9 :
			total_days = 30;
			break;
		case 10 :
			total_days = 31;
			break;
		case 11 :
			total_days = 30;
			break;
		case 12 :
			total_days = 31;
			break;
		default :
			alert("default");
			total_days = 30;
			break;
	}

	return	total_days;
}

/**
 * obj의 value값을 얻는다.
 * comma나 /은 제거된다.
 *
 * @param	obj
 * @return	value
 * @since	2002-01-30
 */
function jsGetValue(obj) {
	if (obj == null) {
		return	null;
	}

	var value = obj.value;
	dataType = obj.getAttribute("dataType");

	if (dataType == "date") {
		value = deleteDateFormatStr(obj.value);

		if (!isDate(value)) {
			value = "";
		}
	} else if (dataType == "number") {
		if (obj.getAttribute("comma") != null) {
			value = deleteCommaStr(obj.value);
		}

		if (!isNumber(value)) {
			value = "0";
		}

	} else if (dataType == "integer") {
		if (obj.getAttribute("comma") != null) {
			value = deleteCommaStr(obj.value);
		}

		if (!isInteger(value)) {
			value = "0";
		}

	} else if (dataType == "float") {
		if (obj.getAttribute("comma") != null) {
			value = deleteCommaStr(obj.value);
		}

		if (!isFloat(value)) {
			value = "0";
		}
	} else if (dataType == "zipCode") {
		value = deleteZipCodeFormatStr(obj.value);

		if (!isZipCode(value)) {
			value = "";
		}
	} else if (dataType == "time") {
		value = deleteTimeFormatStr(obj.value);

		if (!isTime(value)) {
			value = "";
		}
	} else if (dataType == "jumin") {
		value = deleteJuminFormatStr(obj.value);

		if (!isJumin(value)) {
			value = "";
		}
	} else if (dataType == "saup") {
		value = deleteSaupFormatStr(obj.value);

		if (!isSaup(value)) {
			value = "";
		}
	} else if (dataType == "memberCard") {
		value = deleteMemberCardFormatStr(obj.value);

		if (!isMemberCard(value)) {
			value = "";
		}
	} else if (dataType == "corporate") {
		value = deleteCorporateFormatStr(obj.value);

		if (!isCorporate(value)) {
			value = "";
		}
	} else if (dataType == "datetime") {
		value = deleteDatetimeFormatStr(obj.value);

		if (!isDatetime(value)) {
			value = "";
		}
	} else if (dataType == "license") {
		value = deleteLicenseFormatStr(obj.value);

		if (!isLicense(value)) {
			value = "";
		}
	} else if (dataType == "licenseFull") {
		value = deleteLicenseFullFormatStr(obj.value);

		if (!isLicenseFull(value)) {
			value = "";
		}
	} else if (dataType == "phone") {
		value = deletePhoneFormatStr(obj.value);

		if (!isPhone(value)) {
			value = "";
		}
	} else if (dataType == "timestamp") {
		value = deleteTimestampFormatStr(obj.value);

		if (!isTimestamp(value)) {
			value = "";
		}
	} else if (dataType == "hyphen1") {
		value = deleteHyphen1FormatStr(obj.value);
		
	} else if (dataType == "id") {
		value = trim(obj.value);
	}

	return	value;
}

/**
 * 문자열의 byte length를 얻는다.
 *
 * @param	str 문자열
 * @return	byte length
 */
function jsByteLength(str) {
	if (str == "" || str == null) {
		return	0;
	}

	var len = 0;

	for (var i = 0; i < str.length; i++) {
		if (str.charCodeAt(i) > 128) {
			len++;
		}
		len++;
	}

	return	len;
}

/**
 * Object에 값을 세팅한다.
 *
 * @param	obj
 * @param	value
 */
function jsSetValue(obj, value) {
	if (obj) {
		if (obj.type == "text") {
			obj.value = value;
		} else if ((obj.type == "radio") || (obj.type == "checkbox")) {
			if (obj.value == value) {
				obj.checked = true;
			} else {
				obj.checked = false;
			}
		} else if (obj.tagName == "SELECT") {
			for (var i = 0; i < obj.length; i++) {
				if (obj.options[i].value == value) {
					obj.options[i].selected = true;
					break;
				}
			}
		} else if (obj.tagName == "TEXTAREA") {
			obj.value = value;
		} else if (obj.length) { // 배열
			for (var i = 0; i < obj.length; i++) {
				if ((obj[i].type == "radio") || (obj[i].type == "checkbox")) {
					if (obj[i].value == value) {
						obj[i].checked = true;
					}
				}
			}
		}
	}
}

/**
 * 값의 공백을 제거한다.
 *
 * @param	str
 * @return	str
 */
function ltrim(str)
{
        var s = new String(str);

        if (s.substr(0,1) == " ")
                return ltrim(s.substr(1));
        else
                return s;
}

function rtrim(str)
{
        var s = new String(str);
        if(s.substr(s.length-1,1) == " ")
                return rtrim(s.substring(0, s.length-1))
        else
                return s;
}

function trim(str)
{
        return ltrim(rtrim(str));
}

/**
 * 오직 숫자로만 이루어져 있는지 체크 한다.
 *
 * @param	num
 * @return	boolean
 */
function isNumber(num) {
	re = /[0-9]*[0-9]$/;

	if (re.test(rtrim(num))) {
		return	true;
	}

	return	false;
}

/**
 * 정수 체크
 *
 * 1. +, - 부호를 생략하거나 넣을 수 있다 : ^[\+-]?
 * 2. 0에서 9까지 숫자가 0번 이상 올 수 있다 : [0-9]*
 * 3. 마지막은 숫자로 끝나야 한다 : [0-9]$
 *
 * @param	num
 * @return	boolean
 */
function isInteger(num) {
	re = /^[\+-]?[0-9]*[0-9]$/;

	if (re.test(num)) {
		return	true;
	}

	return	false;
}

/**
 * 유리수 체크
 *
 * 1. +, - 부호를 생략하거나 넣을 수 있다 : ^[\+-]?
 * 2. 0에서 9까지 숫자가 0번 이상 올 수 있다 : [0-9]*
 * 3. 소수점을 넣을 수 있다 : [.]?
 * 4. 소수점 이하 자리에 0에서 9까지 숫자가 올 수 있다 : [0-9]*
 * 5. 마지막은 숫자로 끝나야 한다 : [0-9]$
 *
 * @param	num
 * @return	boolean
 */
function isFloat(num) {
	re = /^[\+-]?[0-9]*[.]?[0-9]*[0-9]$/;

	if (re.test(num)) {
		return	true;
	}

	return	false;
}

/**
 * 이메일 체크
 *
 * @param	email
 * @return	boolean
 */
function isEmail(str) {
  var supported = 0;
  if (window.RegExp) {
	var tempStr = "a";
	var tempReg = new RegExp(tempStr);
	if (tempReg.test(tempStr)) supported = 1;
  }
  if (!supported) 
	return (str.indexOf(".") > 2) && (str.indexOf("@") > 0);
  var r1 = new RegExp("(@.*@)|(\\.\\.)|(@\\.)|(^\\.)");
  var r2 = new RegExp("^.+\\@(\\[?)[a-zA-Z0-9\\-\\.]+\\.([a-zA-Z]{2,3}|[0-9]{1,3})(\\]?)$");
  return (!r1.test(str) && r2.test(str));
}

/**
 *
 *TEXTAREA에 한글을 2000자 이상 입력하면 경고 메시지를 띄운다.
 *
**/
function fc_chk_byte(aro_name)
{

   var ls_str     = aro_name.value; // 이벤트가 일어난 컨트롤의 value 값
   var li_str_len = ls_str.length;  // 전체길이

   // 변수초기화
   var li_max      = 2000; // 제한할 글자수 크기
   var i           = 0;  // for문에 사용
   var li_byte     = 0;  // 한글일경우는 2 그밗에는 1을 더함
   var li_len      = 0;  // substring하기 위해서 사용
   var ls_one_char = ""; // 한글자씩 검사한다
   var ls_str2     = ""; // 글자수를 초과하면 제한할수 글자전까지만 보여준다.

   for(i=0; i< li_str_len; i++)
   {
      // 한글자추출
      ls_one_char = ls_str.charAt(i);

      // 한글이면 2를 더한다.
      if (escape(ls_one_char).length > 4)
      {
         li_byte = li_byte+2;
      }
      // 그외의 경우는 1을 더한다.
      else
      {
         li_byte++;
      }

      // 전체 크기가 li_max를 넘지않으면
      if(li_byte <= li_max)
      {
         li_len = i + 1;
      }
   }
   
   // 전체길이를 초과하면
   if(li_byte > li_max)
   {
      mj_message = "2000 글자를 초과 입력할수 없습니다.";
      //ls_str2 = ls_str.substr(0, li_len);
      //aro_name.value = ls_str2;
      aro_name.focus();
      return false;
   }
   
   return true;   
}

/**
 * 전화번호 체크
 * - 숫자(0~9)와 하이픈(-) 만으로 구성되었는지 체크 
 * @param	telephone
 * @return	boolean
 */
function isTelephone(str) {
 
  re = /[0-9]|[-]/;
  for(var i = 0; i < str.length; i ++) {
	  if(!re.test(str.charAt(i))) {
		  return false;
		  break;
	  }
  }
	  
	  return true;
}

/**
 * 날짜 체크
 *
 * @param	date
 * @return	boolean
 */
function isDate(date) {
	if (date == null || date.length != 10) {
		return	false;
	}
/*
	if (!isNumber(date)) {
		return	false;
	}
*/
	var str = /[0-9][0-9][0-9][0-9][\-][0-9][0-9][\-][0-9][0-9]*$/;
	if(!str.test(date)){
		return	false;
	}

	var year = eval(date.substring(0, 4));
	var month = eval(date.substring(5, 7));
	var day = eval(date.substring(8, 10));

	if (month < 1 || month > 12) {
		return	false;
	}

	var totalDays;

	switch (eval(month)){

		case 1 :
			totalDays = 31;
			break;
		case 2 :
			if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0))
				totalDays = 29;
			else
				totalDays = 28;
			break;
		case 3 :
			totalDays = 31;
			break;
		case 4 :
			totalDays = 30;
			break;
		case 5 :
			totalDays = 31;
			break;
		case 6 :
			totalDays = 30;
			break;
		case 7 :
			totalDays = 31;
			break;
		case 8 :
			totalDays = 31;
			break;
		case 9 :
			totalDays = 30;
			break;
		case 10 :
			totalDays = 31;
			break;
		case 11 :
			totalDays = 30;
			break;
		case 12 :
			totalDays = 31;
			break;
	}

	if (day > totalDays) {
		return	false;
	}

	return	true;
}

/**
 * 우편번호 형식인지 체크 한다.
 *
 * @param	code
 * @return	boolean
 */
function isZipCode(code) {

	if (code.length != 6) {
		return	false;
	}

	return	isNumber(code);
}

/**
 * 시간 형식인지 체크 한다.(HH24MI)
 *
 * @param	code
 * @return	boolean
 */
function isTime(time) {

	if (time.length != 4) {
		return	false;
	}

	if (!isNumber(time)) {
		return	false;
	}

	var hour = eval(time.substring(0, 2));
	var minute = eval(time.substring(2, 4));

	if (hour < 0 || 24 < hour) {
		return	false;
	}

	if (minute < 0 || 60 <= minute) {
		return	false;
	}

	if (hour == 24 && minute > 0) {
		return	false;
	}

	return	true;
}

/**
 * 초 형식인지 체크 한다.(SS)
 *
 * @param	sec
 * @return	boolean
 */
function isSecond(sec) {

	if (sec.length != 2) {
		return	false;
	}

	if (!isNumber(sec)) {
		return	false;
	}

	var ss = eval(sec);

	if (ss < 0 || 60 <= ss) {
		return	false;
	}

	return	true;
}

/** 숫자 또는 - 만 가능
* @author seok
* param obj
* return
*/
function checkNum2(obj)
{
	var strNum = obj.value
	var unit;
	var res = 1;

	for(var i=0; i<strNum.length; i++) {
		if(i<strNum.length-1) {
			unit = strNum.substring(i,i+1);
		}

		if(!isNumber(unit) && unit!="-") {
			res = 0;
		}
	}

	if (res==1) {
		return	true;
	} else {
		alert("숫자 또는 - 기호만 입력이 가능합니다.");
		obj.value = "";
		try{
			obj.focus();
		} catch(ex)	{}

		if (window.event) {
			window.event.returnValue = false;
		}
		return;
	}
}

/**
 * 주민번호 형식인지 체크 한다.
 *
 * @param	str
 * @return	boolean
 */
function isJumin(str) {
	var tmp = 0;
	var sex = str.substring(6, 7);
	var birthday;

	if (str.length != 13) {
		return	false;
	}

	if (sex == 1 || sex == 2) {
		birthday = "19" + str.substring(0, 6);
	} else if (sex == 3  || sex == 4) {
		birthday = "20" + str.substring(0, 6);
	} else {
		return	false;
	}

	if (!isDate(birthday)) {
		return	false;
	}

	for (var i = 0; i < 12 ; i++) {
		tmp = tmp + ((i%8+2) * parseInt(str.substring(i,i+1)));
	}

	tmp = 11 - (tmp %11);
	tmp = tmp % 10;

    if (tmp != str.substring(12, 13)) {
		return	false;
	}

	return	true;
}

/**
 * 사업자번호 형식인지 체크 한다.
 *
 * @param	str
 * @return	boolean
 */
function isSaup(str) {

	if (str.length != 10) {
		return	false;
	}

	return	isNumber(str);
}

/**
 * 회원카드번호 형식인지 체크 한다.
 *
 * @param	str
 * @return	boolean
 */
function isMemberCard(str) {

	if (str.length != 16) {
		return	false;
	}

	return	isNumber(str);
}

/**
 * 법인번호 형식인지 체크 한다.
 *
 * @param	str
 * @return	boolean
 */
function isCorporate(str) {

	if (str.length != 13) {
		return	false;
	}

	return	isNumber(str);
}

/**
 * 날짜 시간 형식인지 체크 한다.
 *
 * @param	str
 * @return	boolean
 */
function isDatetime(str) {

	if (str.length != 12) {
		return	false;
	}

	if (!isDate(str.substring(0, 8))) {
		return	false;
	}

	if (!isTime(str.substring(8))) {
		return	false;
	}

	return	true;
}

/**
 * 날짜 시간 초 형식인지 체크 한다.
 *
 * @param	str
 * @return	boolean
 */
function isTimestamp(str) {

	if (str.length != 14) {
		return	false;
	}

	if (!isDate(str.substring(0, 8))) {
		return	false;
	}

	if (!isTime(str.substring(8, 12))) {
		return	false;
	}

	if (!isSecond(str.substring(12))) {
		return	false;
	}

	return	true;
}

/**
 * 운전면허 형식인지 체크 한다.
 * 94-111111-11
 *
 * @param	str
 * @return	boolean
 */
function isLicense(str) {

	if (str.length != 10) {
		return	false;
	}

	return	isNumber(str);
}

/**
 * 완전한 형식의운전면허 형식인지 체크 한다.
 * 서울94-111111-11
 *
 * @param	str
 * @return	boolean
 */
function isLicenseFull(str) {

	if (str.length != 12) {
		return	false;
	}

	return	isNumber(str.substring(2));
}

/**
 * 전화번호 형식인지 체크 한다.
 * 222-3333
 *
 * @param	str
 * @return	boolean
 */
function isPhone(str) {

	return	isNumber(str);
}


function isPwd(form, str, obj) {
	eval("var data = form." +obj+".value;");
	return (str==data);
}



/**
 * 숫자에 comma를 붙인다.
 *
 * @param	obj
 */
function addComma(obj) {
	obj.value = trim(obj.value);
	var value = obj.value;

	if (value == "") {
		return;
	}

	var title = obj.getAttribute("title");
	var dataType = obj.getAttribute("dataType");
	var correct = true;

	if (title == null) {
		title = "";
	}

	if (dataType == null) {
		dataType = "float";
	}

	value = deleteCommaStr(value);

	if (dataType == "number") {
		correct = isNumber(value);
	} else if (dataType == "integer") {
		correct = isInteger(value);
	} else if (dataType == "float") {
		correct = isFloat(value);
	} else {
		correct = isFloat(value);
	}

	if (!correct) {
		alert(title + " 형식이 올바르지 않습니다.");
		obj.value = "0";
		try{
			obj.focus();
		} catch(ex)	{}

		if (window.event) {
			window.event.returnValue = false;
		}

		return;
	}

	obj.value = addCommaStr(value);
}

/**
 * 숫자에 comma를 붙인다.
 */
function addComma2() {
	var obj = window.event.srcElement;
	addColor(obj);
	addComma(obj);
}

/**
 * 숫자에 comma를 붙인다.
 *
 * @param	str
 */
function addCommaStr(str) {
	var num = "";
	var sign = "";

	if (str.charAt(0) == "+" || str.charAt(0) == "-") {
		sign = str.charAt(0);
		str = str.substr(1);
	}

	var index = str.indexOf('.');

	if (index != -1) {
		num = str.substr(index);
	} else {
		index = str.length;
	}

	for (var i = index - 3; i > 0; ) {
		num = ',' + str.substr(i, 3) + num;

		index = i;
		i -= 3;
	}

	num = sign + str.substr(0, index) + num;

	return	num;
}

/**
 * 숫자에서 comma를 없앤다.
 *
 * @param	obj
 */
function deleteComma(obj) {
	obj.value = deleteCommaStr(obj.value);
}

/**
 * 숫자에서 comma를 없앤다.
 */
function deleteComma2() {
	var obj = window.event.srcElement;
	deleteColor(obj);
	deleteComma(obj);
	obj.select();
}

/**
 * 숫자에서 comma를 없앤다.
 *
 * @param	str
 */
function deleteCommaStr(str) {
	var temp = '';

	for (var i = 0; i < str.length; i++) {
		if (str.charAt(i) == ',') {
			continue;
		} else {
			temp += str.charAt(i);
		}
	}

	return	temp;
}

/**
 * 날짜에 "/"를 붙인다.
 *
 * @param	obj
 */
function addDateFormat(obj) {
	var value = obj.value;

	if (trim(value) == "") {
		return;
	}

	value = deleteDateFormatStr(value);

	if (!isDate(value)) {
		title = obj.getAttribute("title");

		if (title == null) {
			title = "";
		}

		alert(title + " 형식이 올바르지 않습니다.");
		try{
			obj.focus();
		} catch(ex)	{}

		if (window.event) {
			window.event.returnValue = false;
		}

		return;
	}

	obj.value = addDateFormatStr(value);
}

/**
 * 날짜에 "/"를 붙인다.
 */
function addDateFormat2() {
	var obj = window.event.srcElement;
	addColor(obj);
	addDateFormat(obj);
}

/**
 * 날짜에 "/"를 붙인다.
 *
 * @param	str
 */
function addDateFormatStr(str) {
	return	str.substring(0, 4) + "/" + str.substring(4, 6) + "/" + str.substring(6, 8);
}

/**
 * 날짜에서 "/"를 없앤다.
 *
 * @param	obj
 */
function deleteDateFormat(obj) {
	obj.value = deleteDateFormatStr(obj.value);
}

/**
 * 날짜에서 "/"를 없앤다.
 */
function deleteDateFormat2() {
	var obj = window.event.srcElement;
	deleteColor(obj);
	deleteDateFormat(obj);
	obj.select();
}

/**
 * 날짜에서 "/"를 없앤다.
 *
 * @param	str
 */
function deleteDateFormatStr(str) {
	var temp = '';

	for (var i = 0; i < str.length; i++) {
		if (str.charAt(i) == '/') {
			continue;
		} else {
			temp += str.charAt(i);
		}
	}

	return	temp;
}

/**
 * 우편번호에 "-"를 붙인다.
 *
 * @param	obj
 */
function addZipCodeFormat(obj) {
	var value = obj.value;

	if (trim(value) == "") {
		return;
	}

	value = deleteZipCodeFormatStr(value);

	if (!isZipCode(value)) {
		title = obj.getAttribute("title");

		if (title == null) {
			title = "";
		}

		alert(title + " 형식이 올바르지 않습니다.");
		try{
			obj.focus();
		} catch(ex)	{}

		if (window.event) {
			window.event.returnValue = false;
		}

		return;
	}

	obj.value = addZipCodeFormatStr(value);
}

/**
 * 우편번호에 "-"를 붙인다.
 */
function addZipCodeFormat2() {
	var obj = window.event.srcElement;
	addColor(obj);
	addZipCodeFormat(obj);
}

/**
 * 우편번호에 "-"를 붙인다.
 *
 * @param	str
 */
function addZipCodeFormatStr(str) {
	return	str.substring(0, 3) + "-" + str.substring(3, 6);
}

/**
 * 우편번호에서 "-"를 없앤다.
 *
 * @param	obj
 */
function deleteZipCodeFormat(obj) {
	obj.value = deleteZipCodeFormatStr(obj.value);
}

/**
 * 우편번호에서 "-"를 없앤다.
 */
function deleteZipCodeFormat2() {
	var obj = window.event.srcElement;
	deleteColor(obj);
	deleteZipCodeFormat(obj);
	obj.select();
}

/**
 * 우편번호에서 "-"를 없앤다.
 *
 * @param	str
 */
function deleteZipCodeFormatStr(str) {
	var temp = '';

	for (var i = 0; i < str.length; i++) {
		if (str.charAt(i) == '-') {
			continue;
		} else {
			temp += str.charAt(i);
		}
	}

	return	temp;
}

/**
 * 시간에 ":"를 붙인다.
 *
 * @param	obj
 */
function addTimeFormat(obj) {
	var value = obj.value;

	if (trim(value) == "") {
		return;
	}

	value = deleteTimeFormatStr(value);

	if (!isTime(value)) {
		title = obj.getAttribute("title");

		if (title == null) {
			title = "";
		}

		alert(title + " 형식이 올바르지 않습니다.");
		try{
			obj.focus();
		} catch(ex)	{}

		if (window.event) {
			window.event.returnValue = false;
		}

		return;
	}

	obj.value = addTimeFormatStr(value);
}

/**
 * 시간에 ":"를 붙인다.
 */
function addTimeFormat2() {
	var obj = window.event.srcElement;
	addColor(obj);
	addTimeFormat(obj);
}

/**
 * 시간에 ":"를 붙인다.
 *
 * @param	str
 */
function addTimeFormatStr(str) {
	return	str.substring(0, 2) + ":" + str.substring(2, 4);
}

/**
 * 시간에서 ":"를 없앤다.
 *
 * @param	obj
 */
function deleteTimeFormat(obj) {
	obj.value = deleteTimeFormatStr(obj.value);
}

/**
 * 시간에서 ":"를 없앤다.
 */
function deleteTimeFormat2() {
	var obj = window.event.srcElement;
	deleteColor(obj);
	deleteTimeFormat(obj);
	obj.select();
}

/**
 * 시간에서 ":"를 없앤다.
 *
 * @param	str
 */
function deleteTimeFormatStr(str) {
	var temp = '';

	for (var i = 0; i < str.length; i++) {
		if (str.charAt(i) == ':') {
			continue;
		} else {
			temp += str.charAt(i);
		}
	}

	return	temp;
}

/**
 * 주민번호에 "-"를 붙인다.
 *
 * @param	obj
 */
function addJuminFormat(obj) {
	var value = obj.value;

	if (trim(value) == "") {
		return;
	}

	value = deleteJuminFormatStr(value);

	if (!isJumin(value)) {
		title = obj.getAttribute("title");

		if (title == null) {
			title = "";
		}

		alert(title + " 형식이 올바르지 않습니다.");
		try{
			obj.focus();
		} catch(ex)	{}

		if (window.event) {
			window.event.returnValue = false;
		}

		return;
	}

	obj.value = addJuminFormatStr(value);
}

/**
 * 주민번호에 "-"를 붙인다.
 */
function addJuminFormat2() {
	var obj = window.event.srcElement;
	addColor(obj);
	addJuminFormat(obj);
}

/**
 * 주민번호에 "-"를 붙인다.
 *
 * @param	str
 */
function addJuminFormatStr(str) {
	return	str.substring(0, 6) + "-" + str.substring(6, 13);
}

/**
 * 주민번호에서 "-"를 없앤다.
 *
 * @param	obj
 */
function deleteJuminFormat(obj) {
	obj.value = deleteJuminFormatStr(obj.value);
}

/**
 * 주민번호에서 "-"를 없앤다.
 */
function deleteJuminFormat2() {
	var obj = window.event.srcElement;
	deleteColor(obj);
	deleteJuminFormat(obj);
	obj.select();
}

/**
 * 주민번호에서 "-"를 없앤다.
 *
 * @param	str
 */
function deleteJuminFormatStr(str) {
	var temp = '';

	for (var i = 0; i < str.length; i++) {
		if (str.charAt(i) == '-') {
			continue;
		} else {
			temp += str.charAt(i);
		}
	}

	return	temp;
}


/**
 * 사업자번호에 "-"를 붙인다.
 *
 * @param	obj
 */
function addSaupFormat(obj) {
	var value = obj.value;

	if (trim(value) == "") {
		return;
	}

	value = deleteSaupFormatStr(value);

	if (!isSaup(value)) {
		title = obj.getAttribute("title");

		if (title == null) {
			title = "";
		}

		alert(title + " 형식이 올바르지 않습니다.");
		try{
			obj.focus();
		} catch(ex)	{}

		if (window.event) {
			window.event.returnValue = false;
		}

		return;
	}

	obj.value = addSaupFormatStr(value);
}

/**
 * 사업자번호에 "-"를 붙인다.
 */
function addSaupFormat2() {
	var obj = window.event.srcElement;
	addColor(obj);
	addSaupFormat(obj);
}

/**
 * 사업자번호에 "-"를 붙인다.
 *
 * @param	str
 */
function addSaupFormatStr(str) {
	return	str.substring(0, 3) + "-"+ str.substring(3, 5) + "-"+ str.substring(5);
}

/**
 * 사업자번호에서 "-"를 없앤다.
 *
 * @param	obj
 */
function deleteSaupFormat(obj) {
	obj.value = deleteSaupFormatStr(obj.value);
}

/**
 * 사업자번호에서 "-"를 없앤다.
 */
function deleteSaupFormat2() {
	var obj = window.event.srcElement;
	deleteColor(obj);
	deleteSaupFormat(obj);
	obj.select();
}

/**
 * 사업자번호에서 "-"를 없앤다.
 *
 * @param	str
 */
function deleteSaupFormatStr(str) {
	var temp = '';

	for (var i = 0; i < str.length; i++) {
		if (str.charAt(i) == '-') {
			continue;
		} else {
			temp += str.charAt(i);
		}
	}

	return	temp;
}


/**
 * 회원카드번호에 "-"를 붙인다.
 *
 * @param	obj
 */
function addMemberCardFormat(obj) {
	var value = obj.value;

	if (trim(value) == "") {
		return;
	}

	value = deleteMemberCardFormatStr(value);

	if (!isMemberCard(value)) {
		title = obj.getAttribute("title");

		if (title == null) {
			title = "";
		}

		alert(title + " 형식이 올바르지 않습니다.");
		try{
			obj.focus();
		} catch(ex)	{}

		if (window.event) {
			window.event.returnValue = false;
		}

		return;
	}

	obj.value = addMemberCardFormatStr(value);
}

/**
 * 회원카드번호에 "-"를 붙인다.
 */
function addMemberCardFormat2() {
	var obj = window.event.srcElement;
	addColor(obj);
	addMemberCardFormat(obj);
}

/**
 * 회원카드번호에 "-"를 붙인다.
 *
 * @param	str
 */
function addMemberCardFormatStr(str) {
	return	str.substring(0, 4) + "-" + str.substring(4, 8) + "-" + str.substring(8, 12) + "-" + str.substring(12);
}

/**
 * 회원카드번호에서 "-"를 없앤다.
 *
 * @param	obj
 */
function deleteMemberCardFormat(obj) {
	obj.value = deleteMemberCardFormatStr(obj.value);
}

/**
 * 회원카드번호에서 "-"를 없앤다.
 */
function deleteMemberCardFormat2() {
	var obj = window.event.srcElement;
	deleteColor(obj);
	deleteMemberCardFormat(obj);
	obj.select();
}

/**
 * 회원카드번호에서 "-"를 없앤다.
 *
 * @param	str
 */
function deleteMemberCardFormatStr(str) {
	var temp = '';

	for (var i = 0; i < str.length; i++) {
		if (str.charAt(i) == '-') {
			continue;
		} else {
			temp += str.charAt(i);
		}
	}

	return	temp;
}

/**
 * 법인번호에 "-"를 붙인다.
 *
 * @param	obj
 */
function addCorporateFormat(obj) {
	var value = obj.value;

	if (trim(value) == "") {
		return;
	}

	value = deleteCorporateFormatStr(value);

	if (!isCorporate(value)) {
		title = obj.getAttribute("title");

		if (title == null) {
			title = "";
		}

		alert(title + " 형식이 올바르지 않습니다.");
		try{
			obj.focus();
		} catch(ex)	{}

		if (window.event) {
			window.event.returnValue = false;
		}

		return;
	}

	obj.value = addCorporateFormatStr(value);
}

/**
 * 법인번호에 "-"를 붙인다.
 */
function addCorporateFormat2() {
	var obj = window.event.srcElement;
	addColor(obj);
	addCorporateFormat(obj);
}

/**
 * 법인번호에 "-"를 붙인다.
 *
 * @param	str
 */
function addCorporateFormatStr(str) {
	return	str.substring(0, 6) + "-" + str.substring(6);
}

/**
 * 법인번호에서 "-"를 없앤다.
 *
 * @param	obj
 */
function deleteCorporateFormat(obj) {
	obj.value = deleteCorporateFormatStr(obj.value);
}

/**
 * 법인번호에서 "-"를 없앤다.
 */
function deleteCorporateFormat2() {
	var obj = window.event.srcElement;
	deleteColor(obj);
	deleteCorporateFormat(obj);
	obj.select();
}

/**
 * 법인번호에서 "-"를 없앤다.
 *
 * @param	str
 */
function deleteCorporateFormatStr(str) {
	var temp = '';

	for (var i = 0; i < str.length; i++) {
		if (str.charAt(i) == '-') {
			continue;
		} else {
			temp += str.charAt(i);
		}
	}

	return	temp;
}

/**
 * 날짜 시간에 구분자를 붙인다.
 *
 * @param	obj
 */
function addDatetimeFormat(obj) {
	var value = obj.value;

	if (trim(value) == "") {
		return;
	}

	value = deleteDatetimeFormatStr(value);

	if (!isDatetime(value)) {
		title = obj.getAttribute("title");

		if (title == null) {
			title = "";
		}

		alert(title + " 형식이 올바르지 않습니다.");
		try{
			obj.focus();
		} catch(ex)	{}

		if (window.event) {
			window.event.returnValue = false;
		}

		return;
	}

	obj.value = addDatetimeFormatStr(value);
}

/**
 * 날짜 시간에 구분자를 붙인다.
 */
function addDatetimeFormat2() {
	var obj = window.event.srcElement;
	addColor(obj);
	addDatetimeFormat(obj);
}

/**
 * 날짜 시간에 구분자를 붙인다.
 *
 * @param	str
 */
function addDatetimeFormatStr(str) {
	return	str.substring(0, 4) + "/" + str.substring(4, 6) + "/" + str.substring(6, 8) + " " +
		str.substring(8, 10) + ":" + str.substring(10);
}

/**
 * 날짜 시간에서 구분자를 없앤다.
 *
 * @param	obj
 */
function deleteDatetimeFormat(obj) {
	obj.value = deleteDatetimeFormatStr(obj.value);
}

/**
 * 날짜 시간에서 구분자를 없앤다.
 */
function deleteDatetimeFormat2() {
	var obj = window.event.srcElement;
	deleteColor(obj);
	deleteDatetimeFormat(obj);
	obj.select();
}

/**
 * 날짜 시간에서 구분자 없앤다.
 *
 * @param	str
 */
function deleteDatetimeFormatStr(str) {
	var temp = '';

	for (var i = 0; i < str.length; i++) {
		if (str.charAt(i) == '/') {
			continue;
		} else if (str.charAt(i) == ' ') {
			continue;
		} else if (str.charAt(i) == ':') {
			continue;
		} else {
			temp += str.charAt(i);
		}
	}

	return	temp;
}

/**
 * 운전면허에 구분자를 붙인다.
 *
 * @param	obj
 */
function addLicenseFormat(obj) {
	var value = obj.value;

	if (trim(value) == "") {
		return;
	}

	value = deleteLicenseFormatStr(value);

	if (!isLicense(value)) {
		title = obj.getAttribute("title");

		if (title == null) {
			title = "";
		}

		alert(title + " 형식이 올바르지 않습니다.");
		try{
			obj.focus();
		} catch(ex)	{}

		if (window.event) {
			window.event.returnValue = false;
		}

		return;
	}

	obj.value = addLicenseFormatStr(value);
}

/**
 * 운전면허에 구분자를 붙인다.
 */
function addLicenseFormat2() {
	var obj = window.event.srcElement;
	addColor(obj);
	addLicenseFormat(obj);
}

/**
 * 운전면허에 구분자를 붙인다.
 *
 * @param	str
 */
function addLicenseFormatStr(str) {
	return	str.substring(0, 2) + "-" + str.substring(2, 8) + "-" + str.substring(8);
}

/**
 * 운전면허에서 구분자를 없앤다.
 *
 * @param	obj
 */
function deleteLicenseFormat(obj) {
	obj.value = deleteLicenseFormatStr(obj.value);
}

/**
 * 운전면허에서 구분자를 없앤다.
 */
function deleteLicenseFormat2() {
	var obj = window.event.srcElement;
	deleteColor(obj);
	deleteLicenseFormat(obj);
	obj.select();
}

/**
 * 운전면허에서 구분자 없앤다.
 *
 * @param	str
 */
function deleteLicenseFormatStr(str) {
	var temp = '';

	for (var i = 0; i < str.length; i++) {
		if (str.charAt(i) == '-') {
			continue;
		} else {
			temp += str.charAt(i);
		}
	}

	return	temp;
}

/**
 * 완전한 운전면허에 구분자를 붙인다.
 *
 * @param	obj
 */
function addLicenseFullFormat(obj) {
	var value = obj.value;

	if (trim(value) == "") {
		return;
	}

	value = deleteLicenseFullFormatStr(value);

	if (!isLicenseFull(value)) {
		title = obj.getAttribute("title");

		if (title == null) {
			title = "";
		}

		alert(title + " 형식이 올바르지 않습니다.");
		try{
			obj.focus();
		} catch(ex)	{}

		if (window.event) {
			window.event.returnValue = false;
		}

		return;
	}

	obj.value = addLicenseFullFormatStr(value);
}

/**
 * 완전한 운전면허에 구분자를 붙인다.
 */
function addLicenseFullFormat2() {
	var obj = window.event.srcElement;
	addColor(obj);
	addLicenseFullFormat(obj);
}

/**
 * 완전한 운전면허에 구분자를 붙인다.
 *
 * @param	str
 */
function addLicenseFullFormatStr(str) {
	return	str.substring(0, 4) + "-" + str.substring(4, 10) + "-" + str.substring(10);
}

/**
 * 완전한 운전면허에서 구분자를 없앤다.
 *
 * @param	obj
 */
function deleteLicenseFullFormat(obj) {
	obj.value = deleteLicenseFullFormatStr(obj.value);
}

/**
 * 완전한 운전면허에서 구분자를 없앤다.
 */
function deleteLicenseFullFormat2() {
	var obj = window.event.srcElement;
	deleteColor(obj);
	deleteLicenseFullFormat(obj);
	obj.select();
}

/**
 * 완전한 운전면허에서 구분자 없앤다.
 *
 * @param	str
 */
function deleteLicenseFullFormatStr(str) {
	var temp = '';

	for (var i = 0; i < str.length; i++) {
		if (str.charAt(i) == '-') {
			continue;
		} else {
			temp += str.charAt(i);
		}
	}

	return	temp;
}

/**
 * 전화번호에 구분자를 붙인다.
 *
 * @param	obj
 */
function addPhoneFormat(obj) {
	var value = obj.value;

	if (trim(value) == "") {
		return;
	}

	value = deletePhoneFormatStr(value);

	if (!isPhone(value)) {
		title = obj.getAttribute("title");

		if (title == null) {
			title = "";
		}

		alert(title + " 형식이 올바르지 않습니다.");
		try{
			obj.focus();
		} catch(ex)	{}

		if (window.event) {
			window.event.returnValue = false;
		}

		return;
	}

	obj.value = addPhoneFormatStr(value);
}

/**
 * 전화번호에 구분자를 붙인다.
 */
function addPhoneFormat2() {
	var obj = window.event.srcElement;
	addColor(obj);
	addPhoneFormat(obj);
}

/**
 * 전화번호에 구분자를 붙인다.
 *
 * @param	str
 */
function addPhoneFormatStr(str) {
	if (str.length <= 4) {
		return	str;
	}

	return	str.substring(0, str.length - 4) + "-" + str.substring(str.length - 4);
}

/**
 * 전화번호에서 구분자를 없앤다.
 *
 * @param	obj
 */
function deletePhoneFormat(obj) {
	obj.value = deletePhoneFormatStr(obj.value);
}

/**
 * 전화번호에서 구분자를 없앤다.
 */
function deletePhoneFormat2() {
	var obj = window.event.srcElement;
	deleteColor(obj);
	deletePhoneFormat(obj);
	obj.select();
}

/**
 * 전화번호에서 구분자 없앤다.
 *
 * @param	str
 */
function deletePhoneFormatStr(str) {
	var temp = '';

	for (var i = 0; i < str.length; i++) {
		if (str.charAt(i) == '-') {
			continue;
		} else {
			temp += str.charAt(i);
		}
	}

	return	temp;
}

/**
 * 날짜 시간(초)에 구분자를 붙인다.
 *
 * @param	obj
 */
function addTimestampFormat(obj) {
	var value = obj.value;

	if (trim(value) == "") {
		return;
	}

	value = deleteTimestampFormatStr(value);

	if (!isTimestamp(value)) {
		title = obj.getAttribute("title");

		if (title == null) {
			title = "";
		}

		alert(title + " 형식이 올바르지 않습니다.");
		try{
			obj.focus();
		} catch(ex)	{}

		if (window.event) {
			window.event.returnValue = false;
		}

		return;
	}

	obj.value = addTimestampFormatStr(value);
}

/**
 * 날짜 시간(초)에 구분자를 붙인다.
 */
function addTimestampFormat2() {
	var obj = window.event.srcElement;
	addColor(obj);
	addTimestampFormat(obj);
}

/**
 * 날짜 시간(초)에 구분자를 붙인다.
 *
 * @param	str
 */
function addTimestampFormatStr(str) {
	return	str.substring(0, 4) + "/" + str.substring(4, 6) + "/" + str.substring(6, 8) + " " +
		str.substring(8, 10) + ":" + str.substring(10, 12) + ":" + str.substring(12);
}

/**
 * 날짜 시간(초)에서 구분자를 없앤다.
 *
 * @param	obj
 */
function deleteTimestampFormat(obj) {
	obj.value = deleteTimestampFormatStr(obj.value);
}

/**
 * 날짜 시간(초)에서 구분자를 없앤다.
 */
function deleteTimestampFormat2() {
	var obj = window.event.srcElement;
	deleteColor(obj);
	deleteTimestampFormat(obj);
	obj.select();
}

/**
 * 날짜 시간(초)에서 구분자 없앤다.
 *
 * @param	str
 */
function deleteTimestampFormatStr(str) {
	var temp = '';

	for (var i = 0; i < str.length; i++) {
		if (str.charAt(i) == '/') {
			continue;
		} else if (str.charAt(i) == ' ') {
			continue;
		} else if (str.charAt(i) == ':') {
			continue;
		} else {
			temp += str.charAt(i);
		}
	}

	return	temp;
}

/**
 * "-"를 붙인다.
 *
 * @param	obj
 */
function addHyphen1Format(obj) {
	var value = obj.value;

	if (trim(value) == "") {
		return;
	}

	value = deleteHyphen1FormatStr(value);

	obj.value = addHyphen1FormatStr(value);
}

/**
 * "-"를 붙인다.
 */
function addHyphen1Format2() {
	var obj = window.event.srcElement;
	addColor(obj);
	addHyphen1Format(obj);
}

/**
 * "-"를 붙인다.
 *
 * @param	str
 */
function addHyphen1FormatStr(str) {
	if (str.length == 13) {
		return	str.substring(0, 6) + "-" + str.substring(6);
	}

	return	str;
}

/**
 * "-"를 없앤다.
 *
 * @param	obj
 */
function deleteHyphen1Format(obj) {
	obj.value = deleteHyphen1FormatStr(obj.value);
}

/**
 * "-"를 없앤다.
 */
function deleteHyphen1Format2() {
	var obj = window.event.srcElement;
	deleteColor(obj);
	deleteHyphen1Format(obj);
	obj.select();
}

/**
 * "-"를 없앤다.
 *
 * @param	str
 */
function deleteHyphen1FormatStr(str) {

	if (str.length != 14 || str.charAt(6) != '-') {
		return	str;
	}

	var temp = '';

	for (var i = 0; i < str.length; i++) {
		if (str.charAt(i) == '-') {
			continue;
		} else {
			temp += str.charAt(i);
		}
	}

	return	temp;
}

/**
 * "-"를 없앤다.
 *
 * @param	str
 */
function delHyphenAllStr(str) {

	var temp = '';

	for (var i = 0; i < str.length; i++) {
		if (str.charAt(i) == '-') {
			continue;
		} else {
			temp += str.charAt(i);
		}
	}

	return	temp;
}

/**
 * trim
 *
 * @param	text
 * @return	string
 */
function trim(text) {
	if (text == "" || text == null ) {
		return	text;
	}
	
	var len = text.length;
	var st = 0;

	while ((st < len) && (text.charAt(st) <= ' ')) {
		st++;
	}

	while ((st < len) && (text.charAt(len - 1) <= ' ')) {
		len--;
	}

	return	((st > 0) || (len < text.length)) ? text.substring(st, len) : text;
}

/**
 * ltrim
 *
 * @param	text
 * @return	string
 */
function ltrim(text) {
	if (text == "") {
		return	text;
	}

	var len = text.length;
	var st = 0;

	while ((st < len) && (text.charAt(st) <= ' ')) {
		st++;
	}

	return	(st > 0) ? text.substring(st, len) : text;
}

/**
 * rtrim
 *
 * @param	text
 * @return	string
 */
function rtrim(text) {
	if (text == "") {
		return	text;
	}

	var len = text.length;
	var st = 0;

	while ((st < len) && (text.charAt(len - 1) <= ' ')) {
		len--;
	}

	return	(len < text.length) ? text.substring(st, len) : text;
}

/**
 * 이벤트 핸들러를 등록한다.
 */
function setEventHandler() {
	for (i = 0; i < document.forms.length; i++) {

		var elements = document.forms[i].elements;

		for (j = 0; j < elements.length; j++) {
			// INPUT 객체의 onblur 이벤트에 핸들러를 등록한다.
			if (elements[j].tagName == "INPUT") {

				dataType = elements[j].getAttribute("dataType");

				if (dataType == "date") {
					elements[j].onblur = addDateFormat2;
					elements[j].onfocus = deleteDateFormat2;
					addDateFormat(elements[j]);
				} else if (dataType == "number" || dataType == "integer" || dataType == "float") {
					if (elements[j].getAttribute("comma") != null) {
						elements[j].onblur = addComma2;
						elements[j].onfocus = deleteComma2;
						addComma(elements[j]);
					} else {
						elements[j].onblur = addColor2;
						elements[j].onfocus = deleteColor2;
					}
				} else if (dataType == "zipCode") {
					elements[j].onblur = addZipCodeFormat2;
					elements[j].onfocus = deleteZipCodeFormat2;
					addZipCodeFormat(elements[j]);
				} else if (dataType == "time") {
					elements[j].onblur = addTimeFormat2;
					elements[j].onfocus = deleteTimeFormat2;
					addTimeFormat(elements[j]);
				} else if (dataType == "jumin") {
					elements[j].onblur = addJuminFormat2;
					elements[j].onfocus = deleteJuminFormat2;
					addJuminFormat(elements[j]);
				} else if (dataType == "saup") {
					elements[j].onblur = addSaupFormat2;
					elements[j].onfocus = deleteSaupFormat2;
					addSaupFormat(elements[j]);
				} else if (dataType == "memberCard") {
					elements[j].onblur = addMemberCardFormat2;
					elements[j].onfocus = deleteMemberCardFormat2;
					addMemberCardFormat(elements[j]);
				} else if (dataType == "corporate") {
					elements[j].onblur = addCorporateFormat2;
					elements[j].onfocus = deleteCorporateFormat2;
					addCorporateFormat(elements[j]);
				} else if (dataType == "datetime") {
					elements[j].onblur = addDatetimeFormat2;
					elements[j].onfocus = deleteDatetimeFormat2;
					addDatetimeFormat(elements[j]);
				} else if (dataType == "license") {
					elements[j].onblur = addLicenseFormat2;
					elements[j].onfocus = deleteLicenseFormat2;
					addLicenseFormat(elements[j]);
				} else if (dataType == "licenseFull") {
					elements[j].onblur = addLicenseFullFormat2;
					elements[j].onfocus = deleteLicenseFullFormat2;
					addLicenseFullFormat(elements[j]);
				} else if (dataType == "phone") {
					elements[j].onblur = addPhoneFormat2;
					elements[j].onfocus = deletePhoneFormat2;
					addPhoneFormat(elements[j]);
				} else if (dataType == "timestamp") {
					elements[j].onblur = addTimestampFormat2;
					elements[j].onfocus = deleteTimestampFormat2;
					addTimestampFormat(elements[j]);
				} else if (dataType == "hyphen1") {
					elements[j].onblur = addHyphen1Format2;
					elements[j].onfocus = deleteHyphen1Format2;
					addHyphen1Format(elements[j]);
				} else {
					elements[j].onblur = addColor2;
					elements[j].onfocus = deleteColor2;
				}
			} else {
				elements[j].onblur = addColor2;
				elements[j].onfocus = deleteColor2;
			}
		}
	}
}

/**
 * 숫자형식에서 comma를 없애고, 날짜형식에서 "/" 를 없앤다.
 *
 * @param	form
 */
function makeValue(form) {
	for (i = 0; i < form.elements.length; i++) {
		obj = form.elements(i);

		if (obj.tagName == "INPUT") {
			dataType = obj.getAttribute("dataType");

			if (dataType == "date") {
				deleteDateFormat(obj);
			} else if (dataType == "number" || dataType == "integer" || dataType == "float") {
				if (obj.getAttribute("comma") != null) {
					deleteComma(obj);
				}
			} else if (dataType == "zipCode") {
				deleteZipCodeFormat(obj);
			} else if (dataType == "time") {
				deleteTimeFormat(obj);
			} else if (dataType == "jumin") {
				deleteJuminFormat(obj);
			} else if (dataType == "saup") {
				deleteSaupFormat(obj);
			} else if (dataType == "memberCard") {
				deleteMemberCardFormat(obj);
			} else if (dataType == "corporate") {
				deleteCorporateFormat(obj);
			} else if (dataType == "datetime") {
				deleteDatetimeFormat(obj);
			} else if (dataType == "license") {
				deleteLicenseFormat(obj);
			} else if (dataType == "licenseFull") {
				deleteLicenseFullFormat(obj);
			} else if (dataType == "phone") {
				deletePhoneFormat(obj);
			} else if (dataType == "timestamp") {
				deleteTimestampFormat(obj);
			} else if (dataType == "hyphen1") {
				deleteHyphen1Format(obj);
			}
		}
	}
}


/**
 * 숫자형식에서 comma를 없애고, 날짜형식에서 "/" 를 없앤다.
 * 하나의 오브젝트에 대한 것임.
 *
 * @param	form
 * @param	obj
 */
function makeValueObj(form, obj) {
	if (obj.tagName == "INPUT") {
		dataType = obj.getAttribute("dataType");

		if (dataType == "date") {
			deleteDateFormat(obj);
		} else if (dataType == "number" || dataType == "integer" || dataType == "float") {
			if (obj.getAttribute("comma") != null) {
				deleteComma(obj);
			}
		} else if (dataType == "zipCode") {
			deleteZipCodeFormat(obj);
		} else if (dataType == "time") {
			deleteTimeFormat(obj);
		} else if (dataType == "jumin") {
			deleteJuminFormat(obj);
		} else if (dataType == "saup") {
			deleteSaupFormat(obj);
		} else if (dataType == "memberCard") {
			deleteMemberCardFormat(obj);
		} else if (dataType == "corporate") {
			deleteCorporateFormat(obj);
		} else if (dataType == "datetime") {
			deleteDatetimeFormat(obj);
		} else if (dataType == "license") {
			deleteLicenseFormat(obj);
		} else if (dataType == "licenseFull") {
			deleteLicenseFullFormat(obj);
		} else if (dataType == "phone") {
			deletePhoneFormat(obj);
		} else if (dataType == "timestamp") {
			deleteTimestampFormat(obj);
		} else if (dataType == "hyphen1") {
			deleteHyphen1Format(obj);
		}
	}
}

 /**
 * 문자에서 Hyphen을 없앤다.
 *
 * @param	str
 */
function deleteHyphen(str) {
	var temp = '';

	for (var i = 0; i < str.length; i++) {
		if (str.charAt(i) == '-') {
			continue;
		} else {
			temp += str.charAt(i);
		}
	}

	return	temp;
}

/**
 * 금액을 단수 처리한다.
 *
 * 	단수처리
 * 		1 - 반올림
 * 		2 - 절상
 * 		3 - 절사
 *
 * 	단수단위
 * 		0 - 원미만
 * 		1 - 십원미만
 * 		2 - 백원미만
 * 		3 - 천원미만
 *
 *
 * @param	amt 금액 (text)
 * @param	unit 단수처리단위 (text)
 * @param	method 단수처리방법 (text)
 */
function jsTruncAmt(amt, unit, method) {

	var after = eval(amt);

	after /= Math.pow(10, eval(unit));

	if (method == "1") {
		after = Math.round(after);
	} else if (method == "2") {
		after = Math.ceil(after);
	} else if (method == "3") {
		after = Math.floor(after);
	}

	after *= Math.pow(10, eval(unit));

	return	after;
}

/**
 * 금액을 단수 처리한다.
 *
 * 외화
 * 	단수처리 :
 * 		1 - 반올림
 * 		2 - 절상
 * 		3 - 절사
 *
 * 	단수단위
 * 		0 - 소수점 0 미만
 * 		1 - 소수점 1 미만
 * 		2 - 소수점 2 미만
 *
 * @param	currency 통화 (text)
 * @param	amt 금액 (text)
 * @param	unit 단수처리단위 (text)
 * @param	method 단수처리방법 (text)
 */
function jsTruncAmtf(amt, unit, method) {

	var after = eval(amt);

	after *= Math.pow(10, eval(unit));

	if (method == "1") {
		after = Math.round(after);
	} else if (method == "2") {
		after = Math.ceil(after);
	} else if (method == "3") {
		after = Math.floor(after);
	}

	after /= Math.pow(10, eval(unit));

	return	after;
}

/**
 * String이 null인 경우 '0'으로 바꾸어 준다.
 *
 * @param	string
 * @return	String
 */
function jsNumnvl(str) {
	if(str == null || str == "") {
		return "0";
	}
	return	str;
}

function jsNvl(str) {
	if(str == null) {
		return "";
	}
	return	str;
}

/**
 * 폼 안의 숫자 오브젝트에 콤마를 붙여준다.
 */
function setComma() {

	for (i = 0; i < document.forms.length; i++) {
		var elements = document.forms[i].elements;
		for (j = 0; j < elements.length; j++) {
			if (elements[j].tagName == "INPUT") {
				dataType = elements[j].getAttribute("dataType");
				if (dataType == "number" || dataType == "integer" ||
				dataType == "float") {
					if (elements[j].getAttribute("comma") != null) {
						addComma(elements[j]);
					}
				}
			}
		}
	}
}

/**
 * 일수를 계산한다.(초일산입 말일불산입)
 *
 * @param	from 시작일
 * @param	to 종료일
 * @return	일수
 */
function jsGetDays(from, to) {

	var fromDt = deleteDateFormatStr(from);
	var toDt = deleteDateFormatStr(to);
	var days = 0 ;

	var fromYy = eval(fromDt.substring(0,4));
	var fromMm = eval(fromDt.substring(4,6) - 1);
	var fromDd = eval(fromDt.substring(6,8));

	var toYy = eval(toDt.substring(0,4));
	var toMm = eval(toDt.substring(4,6) - 1);
	var toDd = eval(toDt.substring(6,8));

	var fromDate = new Date(fromYy, fromMm, fromDd) ;
	var toDate = new Date(toYy, toMm, toDd) ;

	days = ((toDate - fromDate) / 60 / 60 / 24 / 1000);

	return	days;
}

/* 영문글자만 체크
* @author seok
* param obj
* return
*/
function checkEng(obj)
{
	var strEng = obj.value

	var strEng = strEng.toUpperCase();

	if (strEng <  "A" || strEng > "Z")
	{
		alert("영문자만 입력이 가능합니다.");
		obj.value = "";
		try{
			obj.focus();
		} catch(ex)	{}

		if (window.event) {
			window.event.returnValue = false;
		}

		return;

	}
	obj.value = strEng;
}

/* 숫자만 체크
* @author seok
* param obj
* return
*/
function checkNum(obj)
{
	var strNum = obj.value

	if (strNum <  "0" || strNum  > "9")
	{
		alert("숫자만 입력이 가능합니다.");
		obj.value = "";
		try{
			obj.focus();
		} catch(ex)	{}

		if (window.event) {
			window.event.returnValue = false;
		}

		return;

	}
	obj.value = strNum;
}

/**
 * Javascript 의 Date 객체를 반환한다.
 *
 * @param	yyyymmdd
 * @param	hhmi
 * @return	Date
 */
function jsGetDateObj(yyyymmdd, hhmi) {

	var yy = eval(yyyymmdd.substring(0,4));
	var mm = eval(yyyymmdd.substring(4,6) - 1);
	var dd = eval(yyyymmdd.substring(6,8));

	var hh = eval(hhmi.substring(0,2));
	var mi = eval(hhmi.substring(2));

	return	new Date(yy, mm, dd, hh, mi);

}

/**
 * 배경색을 delete.
 */
function deleteColor(obj) {
	obj.style.backgroundColor = "#D5EAEE";
}
/**
 * 배경색을 add.
 */
function addColor(obj) {
	obj.style.backgroundColor = "";
}

/**
 * 배경색을 delete.
 */
function deleteColor2() {
	var obj = window.event.srcElement;
	deleteColor(obj);
}
/**
 * 배경색을 add.
 */
function addColor2() {
	var obj = window.event.srcElement;
	addColor(obj);
}

// ADDMONTHS
function addMonths(strdate, months) {
	if (strdate == null || !isNumber(strdate) || strdate.length != 8) {
		return null;
	}

	var year = Number(strdate.substring(0, 4));
	var month = Number(strdate.substring(4, 6));
	var day = Number(strdate.substring(6));

	var monthsum = month + months;
	if(months>=0) {
		if (monthsum > 12) {
			month = monthsum % 12;
			if (month == 0) {
				month = 12;
				year += monthsum / 12 - 1;
			} else {
				year += (monthsum - month) / 12;
			}
		} else {
			month = monthsum;
		}
	} else {
		if (monthsum <= 0) {
			month = (monthsum % 12) + 12;
			year = year + (parseInt(months/12));
			if(Math.abs(monthsum % 12)<Math.abs(months)) {
				year = year -1;
			}
		} else {
			month = monthsum;
		}
	}

	var total_days = 0;
	switch (eval(month))
	{
		case 1 :
			total_days = 31;
			break;
		case 2 :
			if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0))
				total_days = 29;
			else
				total_days = 28;
			break;
		case 3 :
			total_days = 31;
			break;
		case 4 :
			total_days = 30;
			break;
		case 5 :
			total_days = 31;
			break;
		case 6 :
			total_days = 30;
			break;
		case 7 :
			total_days = 31;
			break;
		case 8 :
			total_days = 31;
			break;
		case 9 :
			total_days = 30;
			break;
		case 10 :
			total_days = 31;
			break;
		case 11 :
			total_days = 30;
			break;
		case 12 :
			total_days = 31;
			break;
		default :
			alert("default");
			total_days = 30;
			break;
	}

	if (day > total_days) {
		day = total_days;
	}

	if (month < 10) {
		month = "0" + month;
	}
	if (day < 10) {
		day = "0" + day;
	}

	return ("" + year + month + day);
}

/**
 * 일자를 더한다.
 */
function jsAddDays(yyyymmdd, days) {
	if (!isDate(yyyymmdd)) {
		return	"";
	}

	var yy = eval(yyyymmdd.substring(0,4));
	var mm = eval(yyyymmdd.substring(4,6) - 1);
	var dd = eval(yyyymmdd.substring(6,8));

	var obj = new Date(yy, mm, dd);
	obj = new Date(Number(obj) + (1000 * 60 * 60 * 24 * days));

	var year = obj.getYear();
	var month = obj.getMonth() + 1;
	var date = obj.getDate();
	var str = "" + year;

	if (month < 10) {
		str += "0" + month;
	} else {
		str += month;
	}

	if (date < 10) {
		str += "0" + date;
	} else {
		str += date;
	}

	return	str;
}

//날짜계산
// seok
//date1 => fromdate
//date2 => todate
//치환 input text

function checkDiffDate(date1, date2) {
	startdate = new Date(date1);
	enddate   = new Date(date2);
	days = (enddate - startdate) / 1000 / 60 / 60 / 24;
	daysRound = Math.floor(days);

	return daysRound ;

}

// 그 달의 마지말 일을 구한다.
function lastDate(yyyymmdd) {
	if (yyyymmdd == null || !isNumber(yyyymmdd) || yyyymmdd.length != 8) {
		return null;
	}

	var year = Number(yyyymmdd.substring(0, 4));
	var month = Number(yyyymmdd.substring(4, 6));
	var day = Number(yyyymmdd.substring(6));

	var total_days = 0;
	switch (eval(month))
	{
		case 1 :
			total_days = 31;
			break;
		case 2 :
			if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0))
				total_days = 29;
			else
				total_days = 28;
			break;
		case 3 :
			total_days = 31;
			break;
		case 4 :
			total_days = 30;
			break;
		case 5 :
			total_days = 31;
			break;
		case 6 :
			total_days = 30;
			break;
		case 7 :
			total_days = 31;
			break;
		case 8 :
			total_days = 31;
			break;
		case 9 :
			total_days = 30;
			break;
		case 10 :
			total_days = 31;
			break;
		case 11 :
			total_days = 30;
			break;
		case 12 :
			total_days = 31;
			break;
		default :
			alert("default");
			total_days = 30;
			break;
	}

	day = total_days;

	if (month < 10) {
		month = "0" + month;
	}
	if (day < 10) {
		day = "0" + day;
	}

	return ("" + year + month + day);
}

function jsGetRadioValue(obj) {
	if (obj) {
		if (obj.length) {
			for (var i = 0; i < obj.length; i++) {
				if (obj[i].checked) {
					return	obj[i].value;
				}
			}
		} else {
			if (obj.checked) {
				return	obj.value;
			}
		}
	}

	return	null;
}

/**
 * 일수를 계산한다.(초일산입 말일불산입)
 *
 * @param	from 시작일
 * @param	to 종료일
 * @return	일수
 */
function jsGetDays2(from, fromtime, to, totime) {

	var fromDt = deleteDateFormatStr(from);
	var toDt = deleteDateFormatStr(to);
	var days = 0 ;

	var fromYy = eval(fromDt.substring(0,4));
	var fromMm = eval(fromDt.substring(4,6) - 1);
	var fromDd = eval(fromDt.substring(6,8));
	var fromHh = eval(fromtime.substring(0,2));
	var fromMi = eval(fromtime.substring(2));

	var toYy = eval(toDt.substring(0,4));
	var toMm = eval(toDt.substring(4,6) - 1);
	var toDd = eval(toDt.substring(6,8));
	var toHh = eval(totime.substring(0,2));
	var toMi = eval(totime.substring(2));

	var fromDate = new Date(fromYy, fromMm, fromDd, fromHh, fromMi) ;
	var toDate = new Date(toYy, toMm, toDd, toHh, toMi) ;

	days = ((toDate - fromDate) / 60 / 60 / 24 / 1000);

	return	days;
}

function nextObject(obj, nextObj) {
	var code = window.event.keyCode;

	if ((code >= 48 && code <= 57) || (code >= 96 && code <= 105)) {
		var val = jsGetValue(obj);

		if (obj.maxLength == val.length) {
			try{
				nextObj.focus();
			} catch(ex)	{}
		}
	}
}

/**
 * 사업자번호 유효확인
 *
 * @param	from 시작일
 * @param	to 종료일
 * @return	일수
 */
function 	validBusiNo(membNo){
	
	if (membNo.length == 10) {
	
		a  	= membNo.charAt(0);
		b  	= membNo.charAt(1);
		c  	= membNo.charAt(2);
		d  	= membNo.charAt(3);
		e  	= membNo.charAt(4);
		f  	= membNo.charAt(5);
		g  	= membNo.charAt(6);
		h  	= membNo.charAt(7);
		i  	= membNo.charAt(8);
		Osub 	= membNo.charAt(9);
		
		suma = a*1 + b*3 + c*7 + d*1 + e*3 + f*7 + g*1 + h*3;
		sumb = (i*5) %10;
		sumc = parseInt((i*5) / 10,10);
		sumd = sumb + sumc;	
		sume = suma + sumd;
		sumf = a + b + c + d + e + f + g + h + i
		k = sume % 10;
		Modvalue = 10 - k;
		LastVal = Modvalue % 10;
		
		if (sumf == 0) 
		{
			return false;
		}
		
	} 
	else
	{
		return false;
	}	

	if ( Osub == LastVal ) 
	{
		return true;
	} 
	else 
	{
		return false;
	}
}


/* ======================================================================
FUNCTION:	IsBupinId
DESC:		법인번호를 검사한다
RETURN:		boolean		
====================================================================== */

function validCorpRegNo(str)
{
	var check = 1;
	var no = new Array(13);
	var sum = 0;
	var rem = 0;
	var m = 0;

	m = parseInt(str.charAt(12)); // 번호의 마지막 숫자 얻기

	for(var i=0; i<12; i++) no[i] = parseInt(str.charAt(i)); // 1~12까지 숫자 얻기

	for(var i=0; i<12; i++) {
		sum += (check * no[i]);

		check = (check==1) ? 2 : 1;
	}

	rem = sum % 10; // 나머지 구하기

	rem = 10 - rem;

	rem = (rem >= 10) ? rem - 10 : rem;

	// 마지막번째와 10-rem의 값을 비교

	if(m == rem) return true; // 정확
	else return false; // 부정확
}


// 공백이 있는지 체크
function checkSpace( str )
{
	return (str.search(/\s/) != -1);
}

var mj_message="";
/**
 * 아이디 유효성을 체크한다.
 *
 * @param	str
 * @return	boolean
 */	 
 function isValidID( str )
 {	
     /* checkFormat  */
     var isID = /^[a-zA-Z0-9]{4,12}$/;
     if( !isID.test(str) ) {
    	mj_message = "아이디는 4~12자의 영문 소/대문자와 숫자만 사용할 수 있습니다.";
        return false;
     }else{
     	return true;
     }
}

 function isValidPwd( str )
 {	
     /* checkFormat  */
     var isID = /[a-zA-Z0-9]{6,12}$/;
     if( !isID.test(str) ) {
    	mj_message = "비밀번호는 6자 이상 ~12자의 영문 소/대문자와 숫자만 입력하셔야 합니다.";
        return false;
     }else{
     	return true;
     }
}

/**
 * 재외국인 등록번호 체크(내부 함수)
 */
function frgnNoChck(reg_no)
{
	var sum = 0;
	var odd = 0;

	buf = new Array(13);
	for (i = 0; i < 13; i++) {
		buf[i] = parseInt(reg_no.charAt(i));
	}

	odd = buf[7]*10 + buf[8];

	if (odd%2 != 0) {
		return false;
	}

	if ((buf[11] != 6) && (buf[11] != 7) && (buf[11] != 8) && (buf[11] != 9)) {
		return false;
	}

	multipliers = [2,3,4,5,6,7,8,9,2,3,4,5];
	for (i = 0, sum = 0; i < 12; i++) {
		sum += (buf[i] *= multipliers[i]);
	}

	sum = 11 - (sum % 11);

	if (sum >= 10) {
		sum -= 10;
	}
	sum += 2;

	if (sum >= 10) {
		sum -= 10;
	}

	if ( sum != buf[12]) {
		return false;
	}
}

/**
 * 재외국인 등록번호 체크(외부 함수)
 */
function frgnRrnoCnfm(fgn_reg_no)
{


	if (fgn_reg_no == ''){
	mj_message='주민등록등록번호를 입력하십시오.';
	return false;
}

if (fgn_reg_no.length != 13) {
	mj_message='주민등록번호는 13자리여야 합니다.';
	return false;
}

if ((fgn_reg_no.charAt(6) == "5") || (fgn_reg_no.charAt(6) == "6")) {
	birthYear = "19";
} else if ((fgn_reg_no.charAt(6) == "7") || (fgn_reg_no.charAt(6) == "8")) {
	birthYear = "20";
} else if ((fgn_reg_no.charAt(6) == "9") || (fgn_reg_no.charAt(6) == "0")) {
	birthYear = "18";
} else {
	mj_message = "외국인 등록번호에 오류가 있습니다. 다시 확인하십시오.";
	return false;
}

birthYear += fgn_reg_no.substr(0, 2);
birthMonth = fgn_reg_no.substr(2, 2) - 1;
birthDate = fgn_reg_no.substr(4, 2);
birth = new Date(birthYear, birthMonth, birthDate);

if ( birth.getYear() % 100 != fgn_reg_no.substr(0, 2) || birth.getMonth() != birthMonth || birth.getDate() != birthDate) {
	mj_message='재외국인 생년월일에 오류가 있습니다. 다시 확인하십시오.';
	return false;
}

if (frgnNoChck(fgn_reg_no) == false){
	mj_message = '외국인 등록번호에 오류가 있습니다. 다시 확인하십시오.';
		return false;
	}

	return true;
}

	// 상태바의 내용을 지운다.
window.status = "";

function str_replace(szFind, szReplace, szAll) {
	var i;
	var length;

	length = szReplace.length - szFind.length;

	for (i=0; i < szAll.length; i++) {
		if (szAll.substr(i,szFind.length) == szFind) {
			if ( i > 0 ) {
				if (szFind == "\n") {
					szAll = szAll.substr(0, i-1) + szReplace + szAll.substr(i+szFind.length,szAll.length - (i+szFind.length));
				} else {
					szAll = szAll.substr(0, i) + szReplace + szAll.substr(i+szFind.length,szAll.length - (i+szFind.length));
				}
			} else { 
				szAll = szReplace + szAll.substr(i+szFind.length,szAll.length - (i+szFind.length));
			}
			i = i + length;
		}
	}
	return szAll;
}

function isEqualValidate(str1,str2){
	if(str1==str2) return true;
	else return false;
	 
}

function checkFileExt(fileValue) {
	
	var result = true;			
	if( fileValue != null && fileValue != "" ) {
		var splitLength = (fileValue.split(".")).length;
		var ext = (fileValue.split(".")[splitLength-1]).toUpperCase();
		
		if (ext != "JPG" && ext != "JPEG" && ext != "BMP" && ext != "GIF" && ext != "TIFF") {
			
			result = false;
		}
		
		// 파일 용량 체크
		result = getFileSize(fileValue);
		if (!result) {
			mj_message = "파일의 용량은 2mb까지 가능합니다.";
			result = false;
		}
	}		
	return result;
}

function getFileSize(path){
	var result = true;
	
	var maxSize = 2000000; //2M
	var img = new Image();
	img.dynsrc = path;
	var filesize = img.fileSize; //자바스크립트로 파일용량 체크 
	//alert(filesize);
	if(filesize > maxSize) {
		result = false;
	}
	
	return result;
}

