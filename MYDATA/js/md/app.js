!function(r,u){"use strict";var c="function",i="undefined",m="object",s="model",e="name",o="type",n="vendor",a="version",d="architecture",t="console",l="mobile",w="tablet",b="smarttv",p="wearable",f={extend:function(i,s){var e={};for(var o in i)s[o]&&s[o].length%2==0?e[o]=s[o].concat(i[o]):e[o]=i[o];return e},has:function(i,s){return"string"==typeof i&&-1!==s.toLowerCase().indexOf(i.toLowerCase())},lowerize:function(i){return i.toLowerCase()},major:function(i){return"string"==typeof i?i.replace(/[^\d\.]/g,"").split(".")[0]:u},trim:function(i){return i.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}},g={rgx:function(i,s){for(var e,o,r,n,a,d,t=0;t<s.length&&!a;){var l=s[t],w=s[t+1];for(e=o=0;e<l.length&&!a;)if(a=l[e++].exec(i))for(r=0;r<w.length;r++)d=a[++o],typeof(n=w[r])==m&&0<n.length?2==n.length?typeof n[1]==c?this[n[0]]=n[1].call(this,d):this[n[0]]=n[1]:3==n.length?typeof n[1]!=c||n[1].exec&&n[1].test?this[n[0]]=d?d.replace(n[1],n[2]):u:this[n[0]]=d?n[1].call(this,d,n[2]):u:4==n.length&&(this[n[0]]=d?n[3].call(this,d.replace(n[1],n[2])):u):this[n]=d||u;t+=2}},str:function(i,s){for(var e in s)if(typeof s[e]==m&&0<s[e].length){for(var o=0;o<s[e].length;o++)if(f.has(s[e][o],i))return"?"===e?u:e}else if(f.has(s[e],i))return"?"===e?u:e;return i}},h={browser:{oldsafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}}},device:{amazon:{model:{"Fire Phone":["SD","KF"]}},sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}},v={browser:[[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,/(opera).+version\/([\w\.]+)/i,/(opera)[\/\s]+([\w\.]+)/i],[e,a],[/(opios)[\/\s]+([\w\.]+)/i],[[e,"Opera Mini"],a],[/\s(opr)\/([\w\.]+)/i],[[e,"Opera"],a],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,/(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(rekonq)\/([\w\.]*)/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i],[e,a],[/(konqueror)\/([\w\.]+)/i],[[e,"Konqueror"],a],[/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],[[e,"IE"],a],[/(edge|edgios|edga|edg)\/((\d+)?[\w\.]+)/i],[[e,"Edge"],a],[/(yabrowser)\/([\w\.]+)/i],[[e,"Yandex"],a],[/(puffin)\/([\w\.]+)/i],[[e,"Puffin"],a],[/(focus)\/([\w\.]+)/i],[[e,"Firefox Focus"],a],[/(opt)\/([\w\.]+)/i],[[e,"Opera Touch"],a],[/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],[[e,"UCBrowser"],a],[/(comodo_dragon)\/([\w\.]+)/i],[[e,/_/g," "],a],[/(windowswechat qbcore)\/([\w\.]+)/i],[[e,"WeChat(Win) Desktop"],a],[/(micromessenger)\/([\w\.]+)/i],[[e,"WeChat"],a],[/(brave)\/([\w\.]+)/i],[[e,"Brave"],a],[/(qqbrowserlite)\/([\w\.]+)/i],[e,a],[/(QQ)\/([\d\.]+)/i],[e,a],[/m?(qqbrowser)[\/\s]?([\w\.]+)/i],[e,a],[/(BIDUBrowser)[\/\s]?([\w\.]+)/i],[e,a],[/(2345Explorer)[\/\s]?([\w\.]+)/i],[e,a],[/(MetaSr)[\/\s]?([\w\.]+)/i],[e],[/(LBBROWSER)/i],[e],[/xiaomi\/miuibrowser\/([\w\.]+)/i],[a,[e,"MIUI Browser"]],[/;fbav\/([\w\.]+);/i],[a,[e,"Facebook"]],[/safari\s(line)\/([\w\.]+)/i,/android.+(line)\/([\w\.]+)\/iab/i],[e,a],[/headlesschrome(?:\/([\w\.]+)|\s)/i],[a,[e,"Chrome Headless"]],[/\swv\).+(chrome)\/([\w\.]+)/i],[[e,/(.+)/,"$1 WebView"],a],[/((?:oculus|samsung)browser)\/([\w\.]+)/i],[[e,/(.+(?:g|us))(.+)/,"$1 $2"],a],[/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],[a,[e,"Android Browser"]],[/(sailfishbrowser)\/([\w\.]+)/i],[[e,"Sailfish Browser"],a],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],[e,a],[/(dolfin)\/([\w\.]+)/i],[[e,"Dolphin"],a],[/((?:android.+)crmo|crios)\/([\w\.]+)/i],[[e,"Chrome"],a],[/(coast)\/([\w\.]+)/i],[[e,"Opera Coast"],a],[/fxios\/([\w\.-]+)/i],[a,[e,"Firefox"]],[/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],[a,[e,"Mobile Safari"]],[/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],[a,e],[/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[[e,"GSA"],a],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[e,[a,g.str,h.browser.oldsafari.version]],[/(webkit|khtml)\/([\w\.]+)/i],[e,a],[/(navigator|netscape)\/([\w\.-]+)/i],[[e,"Netscape"],a],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,/(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]*)/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[e,a]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[[d,"amd64"]],[/(ia32(?=;))/i],[[d,f.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[[d,"ia32"]],[/windows\s(ce|mobile);\sppc;/i],[[d,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[[d,/ower/,"",f.lowerize]],[/(sun4\w)[;\)]/i],[[d,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[[d,f.lowerize]]],device:[[/\((ipad|playbook);[\w\s\),;-]+(rim|apple)/i],[s,n,[o,w]],[/applecoremedia\/[\w\.]+ \((ipad)/],[s,[n,"Apple"],[o,w]],[/(apple\s{0,1}tv)/i],[[s,"Apple TV"],[n,"Apple"]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(hp).+(tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],[n,s,[o,w]],[/(kf[A-z]+)\sbuild\/.+silk\//i],[s,[n,"Amazon"],[o,w]],[/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i],[[s,g.str,h.device.amazon.model],[n,"Amazon"],[o,l]],[/android.+aft([bms])\sbuild/i],[s,[n,"Amazon"],[o,b]],[/\((ip[honed|\s\w*]+);.+(apple)/i],[s,n,[o,l]],[/\((ip[honed|\s\w*]+);/i],[s,[n,"Apple"],[o,l]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],[n,s,[o,l]],[/\(bb10;\s(\w+)/i],[s,[n,"BlackBerry"],[o,l]],[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone|p00c)/i],[s,[n,"Asus"],[o,w]],[/(sony)\s(tablet\s[ps])\sbuild\//i,/(sony)?(?:sgp.+)\sbuild\//i],[[n,"Sony"],[s,"Xperia Tablet"],[o,w]],[/android.+\s([c-g]\d{4}|so[-l]\w+)(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[s,[n,"Sony"],[o,l]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],[n,s,[o,t]],[/android.+;\s(shield)\sbuild/i],[s,[n,"Nvidia"],[o,t]],[/(playstation\s[34portablevi]+)/i],[s,[n,"Sony"],[o,t]],[/(sprint\s(\w+))/i],[[n,g.str,h.device.sprint.vendor],[s,g.str,h.device.sprint.model],[o,l]],[/(htc)[;_\s-]+([\w\s]+(?=\)|\sbuild)|\w+)/i,/(zte)-(\w*)/i,/(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],[n,[s,/_/g," "],[o,l]],[/(nexus\s9)/i],[s,[n,"HTC"],[o,w]],[/d\/huawei([\w\s-]+)[;\)]/i,/(nexus\s6p)/i],[s,[n,"Huawei"],[o,l]],[/(microsoft);\s(lumia[\s\w]+)/i],[n,s,[o,l]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],[s,[n,"Microsoft"],[o,t]],[/(kin\.[onetw]{3})/i],[[s,/\./g," "],[n,"Microsoft"],[o,l]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i,/mot[\s-]?(\w*)/i,/(XT\d{3,4}) build\//i,/(nexus\s6)/i],[s,[n,"Motorola"],[o,l]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[s,[n,"Motorola"],[o,w]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[[n,f.trim],[s,f.trim],[o,b]],[/hbbtv.+maple;(\d+)/i],[[s,/^/,"SmartTV"],[n,"Samsung"],[o,b]],[/\(dtv[\);].+(aquos)/i],[s,[n,"Sharp"],[o,b]],[/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],[[n,"Samsung"],s,[o,w]],[/smart-tv.+(samsung)/i],[n,[o,b],s],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i,/sec-((sgh\w+))/i],[[n,"Samsung"],s,[o,l]],[/sie-(\w*)/i],[s,[n,"Siemens"],[o,l]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]*)/i],[[n,"Nokia"],s,[o,l]],[/android[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],[s,[n,"Acer"],[o,w]],[/android.+([vl]k\-?\d{3})\s+build/i],[s,[n,"LG"],[o,w]],[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],[[n,"LG"],s,[o,w]],[/(lg) netcast\.tv/i],[n,s,[o,b]],[/(nexus\s[45])/i,/lg[e;\s\/-]+(\w*)/i,/android.+lg(\-?[\d\w]+)\s+build/i],[s,[n,"LG"],[o,l]],[/(lenovo)\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+))/i],[n,s,[o,w]],[/android.+(ideatab[a-z0-9\-\s]+)/i],[s,[n,"Lenovo"],[o,w]],[/(lenovo)[_\s-]?([\w-]+)/i],[n,s,[o,l]],[/linux;.+((jolla));/i],[n,s,[o,l]],[/((pebble))app\/[\d\.]+\s/i],[n,s,[o,p]],[/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],[n,s,[o,l]],[/crkey/i],[[s,"Chromecast"],[n,"Google"]],[/android.+;\s(glass)\s\d/i],[s,[n,"Google"],[o,p]],[/android.+;\s(pixel c)[\s)]/i],[s,[n,"Google"],[o,w]],[/android.+;\s(pixel( [23])?( xl)?)[\s)]/i],[s,[n,"Google"],[o,l]],[/android.+;\s(\w+)\s+build\/hm\1/i,/android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,/android.+(mi[\s\-_]*(?:a\d|one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i,/android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i],[[s,/_/g," "],[n,"Xiaomi"],[o,l]],[/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i],[[s,/_/g," "],[n,"Xiaomi"],[o,w]],[/android.+;\s(m[1-5]\snote)\sbuild/i],[s,[n,"Meizu"],[o,l]],[/(mz)-([\w-]{2,})/i],[[n,"Meizu"],s,[o,l]],[/android.+a000(1)\s+build/i,/android.+oneplus\s(a\d{4})\s+build/i],[s,[n,"OnePlus"],[o,l]],[/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],[s,[n,"RCA"],[o,w]],[/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i],[s,[n,"Dell"],[o,w]],[/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],[s,[n,"Verizon"],[o,w]],[/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],[[n,"Barnes & Noble"],s,[o,w]],[/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],[s,[n,"NuVision"],[o,w]],[/android.+;\s(k88)\sbuild/i],[s,[n,"ZTE"],[o,w]],[/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],[s,[n,"Swiss"],[o,l]],[/android.+[;\/]\s*(zur\d{3})\s+build/i],[s,[n,"Swiss"],[o,w]],[/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],[s,[n,"Zeki"],[o,w]],[/(android).+[;\/]\s+([YR]\d{2})\s+build/i,/android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i],[[n,"Dragon Touch"],s,[o,w]],[/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],[s,[n,"Insignia"],[o,w]],[/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],[s,[n,"NextBook"],[o,w]],[/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],[[n,"Voice"],s,[o,l]],[/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],[[n,"LvTel"],s,[o,l]],[/android.+;\s(PH-1)\s/i],[s,[n,"Essential"],[o,l]],[/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],[s,[n,"Envizen"],[o,w]],[/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],[n,s,[o,w]],[/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],[s,[n,"MachSpeed"],[o,w]],[/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],[n,s,[o,w]],[/android.+[;\/]\s*TU_(1491)\s+build/i],[s,[n,"Rotor"],[o,w]],[/android.+(KS(.+))\s+build/i],[s,[n,"Amazon"],[o,w]],[/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],[n,s,[o,w]],[/\s(tablet|tab)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[[o,f.lowerize],n,s],[/[\s\/\(](smart-?tv)[;\)]/i],[[o,b]],[/(android[\w\.\s\-]{0,9});.+build/i],[s,[n,"Generic"]]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[a,[e,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)/i],[[e,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[e,a],[/rv\:([\w\.]{1,9}).+(gecko)/i],[a,e]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[e,a],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],[e,[a,g.str,h.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[e,"Windows"],[a,g.str,h.os.windows.version]],[/\((bb)(10);/i],[[e,"BlackBerry"],a],[/(blackberry)\w*\/?([\w\.]*)/i,/(tizen)[\/\s]([\w\.]+)/i,/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i],[e,a],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],[[e,"Symbian"],a],[/\((series40);/i],[e],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[e,"Firefox OS"],a],[/(nintendo|playstation)\s([wids34portablevu]+)/i,/(mint)[\/\s\(]?(\w*)/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i,/(hurd|linux)\s?([\w\.]*)/i,/(gnu)\s?([\w\.]*)/i],[e,a],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[e,"Chromium OS"],a],[/(sunos)\s?([\w\.\d]*)/i],[[e,"Solaris"],a],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],[e,a],[/(haiku)\s(\w+)/i],[e,a],[/cfnetwork\/.+darwin/i,/ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],[[a,/_/g,"."],[e,"iOS"]],[/(mac\sos\sx)\s?([\w\s\.]*)/i,/(macintosh|mac(?=_powerpc)\s)/i],[[e,"Mac OS"],[a,/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]*)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i,/(unix)\s?([\w\.]*)/i],[e,a]]},x=function(i,s){if("object"==typeof i&&(s=i,i=u),!(this instanceof x))return new x(i,s).getResult();var e=i||(r&&r.navigator&&r.navigator.userAgent?r.navigator.userAgent:""),o=s?f.extend(v,s):v;return this.getBrowser=function(){var i={name:u,version:u};return g.rgx.call(i,e,o.browser),i.major=f.major(i.version),i},this.getCPU=function(){var i={architecture:u};return g.rgx.call(i,e,o.cpu),i},this.getDevice=function(){var i={vendor:u,model:u,type:u};return g.rgx.call(i,e,o.device),i},this.getEngine=function(){var i={name:u,version:u};return g.rgx.call(i,e,o.engine),i},this.getOS=function(){var i={name:u,version:u};return g.rgx.call(i,e,o.os),i},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return e},this.setUA=function(i){return e=i,this},this};x.VERSION="0.7.20",x.BROWSER={NAME:e,MAJOR:"major",VERSION:a},x.CPU={ARCHITECTURE:d},x.DEVICE={MODEL:s,VENDOR:n,TYPE:o,CONSOLE:t,MOBILE:l,SMARTTV:b,TABLET:w,WEARABLE:p,EMBEDDED:"embedded"},x.ENGINE={NAME:e,VERSION:a},x.OS={NAME:e,VERSION:a},typeof exports!=i?(typeof module!=i&&module.exports&&(exports=module.exports=x),exports.UAParser=x):"function"==typeof define&&define.amd?define(function(){return x}):r&&(r.UAParser=x);var k=r&&(r.jQuery||r.Zepto);if(typeof k!=i&&!k.ua){var y=new x;k.ua=y.getResult(),k.ua.get=function(){return y.getUA()},k.ua.set=function(i){y.setUA(i);var s=y.getResult();for(var e in s)k.ua[e]=s[e]}}}("object"==typeof window?window:this);

!function($) {
	'use strict';

	$(function () {
    // https://github.com/faisalman/ua-parser-js
    let parser = new UAParser();
    let getBrowser = parser.getBrowser();
    let getVersion = parseInt(getBrowser.version);

    console.log(getBrowser.name, '-', getVersion)
    
    // Chrome 63 이하 버전 sticky 대응 클래스 추가
    if (getBrowser.name.replace(' WebView', '') === 'Chrome' && getVersion < 64) {
      $('html').addClass('sticky-Chrome-63');
    }

		initUI.setup();
	});

	let initUI = (function (isLoaded) {
		var isLoaded; // let X

		function setup (isLoaded) {
      
      if(isLoaded) return;
      
			isLoaded = true;

      // 하단고정 'my-btn-area-fix' 버튼 있을 시 간격조정을 위한 클래스 추가 (60px -> 80px)
      if ($('.my-container').find('.my-btn-area-fix').is(':visible')) {
        $('.my-btn-area-fix').closest('.my-container').addClass('hasFixedBtn');
      }

      // -------------------------------------------------------------------------

        registUI('.my-select-type', popupOld, 'selectMenu'); // 하단메뉴
        registUI('.my-btn-setting', popupOld, 'selectMenu'); // 설정
        registUI('.my-btn-setting-money', popupOld, 'selectMenu'); // 예산설정      
        registUI('.my-btn-estate', popupOld, 'selectMenu'); // 단지선택
        registUI('.my-btn-dialog', popupOld, 'Dialog'); // alert / confirm / dialog
        registUI('.btn-drawr-nav', drawer); // 우측팝업

      // -------------------------------------------------------------------------

        registUI('.acco-expanded', popupOld, 'Accordion'); // 아코디언
        registUI('.btn-organization-type', popupOld, 'Accordion'); // 아코디언
      
      // -------------------------------------------------------------------------

		  registUI('.my-btn-tooltip', popupOld, 'Tooltip'); // 툴팁
      
      // -------------------------------------------------------------------------

      registUI('.scrl', tabControl); // 탭메뉴
      registUI('.my-tab-area2 .scrl', tabControlMall); // 탭메뉴
	    registUI('.refresh', refresh); // 새로고침 애니메이션
      registUI('.my-nav-case-local', headerControl); // 스크롤에 따른 헤더 스타일 클래스 추가

      registUI('.my-bar-area', barChart); // 바 차트 1
      registUI('.my-bar-hor-area', barChartScope); // 바 차트 2
      registUI('.my-data-chart-rangeScope', rangeScopeChart); // 고정지출 평균 차트
      registUI('.my-carRangeScope', carRangeScope); // 고정지출 평균 차트
      registUI('.my-storeRangeScope', storeRangeScope); // 개인사업자 평균 차트
      registUI('.my-btn-cal', datePicker); // 가계부 날짜 선택

      registUI('.my-unlabeled-list', unlabeledControl); // 미분류 카테고리
      registUI('.my-2-clc-info-area', clcInfoControl); // 신용대출 비교조회 안내
      registUI('.my-2-health-info-area', healthInfoControl); // 보험건강관리
      registUI('.my-guide-area', serviceGuideControl); // 마이데이터 서비스 이용안내
      //registUI('.my-2-service-guide-area', serviceGuideControl); // 마이데이터 서비스 이용안내 old (스와이퍼 버전)
      registUI('.my-2-open-event-area', openEventControl); // 오픈이벤트

      registUI('.chart-curve-svg', chartCurve); // 내 구독지출 분포
      registUI('.my-gold-btn-area', randomPosition); // 황금동전 위치 랜덤
      registUI('.partner-scroll', partnerScroll); // 기관 로고 무한 스크롤

      registUI('.hot-place-title', hotPlaceTitle); // 내 주변 핫플 상단 타이틀
      registUI('.my-btn-filter', hotPlaceFilter); // 내 주변 핫플 필터 검색

      registUI('.my-qna-accordion', qnaAccordion); // 자주 묻는 질문

      registUI('.my-btn-type-add', addClassBody); // 자산추가 버튼 있을 때 배경 클래스 추가

      registUI('.my-2-assets-connection-unavailable', canvasScrollPlay); // 캔버스 애니메이션 스크롤에 따른 플레이
      registUI('.btn-row_group .filter', btnCalculate); // 필터 라디오버튼 개수에 따른 스타일 클래스 추가

      registUI('.open-event-btn-area', floatingClose); // 플로팅 이벤트 닫기
      registUI('.display-group-wrap', displayControl); // 버튼으로 열었다 닫았다 하기

      //registUI('.my-unlabeled-list', unlabeledControl); // 미분류 카테고리
		}
    
		function registUI (el, fn, pros) {
			let _inst;

			$(el).each(function (idx, obj) {
				_inst = new fn(pros);
				_inst.init(obj, el);
			});
		}

		return {
			setup: setup
		};
	})();


  /**
    * @name: modal()
    * @description : 팝업 공통
    * @tag : <element id="필수입력값" aria-controls="필수입력값" data-modal>
    */
  let modal = function (pros) {
    let el,
      _target,
      _close,
      _body;

    function init (_el) {
      el = $(_el);

      // 해당 상태값 변경 후 기존 (팝업) 클래스 이벤트 차단
      // getSelectMenu() / getSelectMenuEtc() / getDialog()
      // myFunc.modal.state = true;

      getModal();
      
      return this;
    }

    function getModal () {
      el.off().on('click',  function (e) {
        // e.preventDefault();

        var _ariaControls = el.attr('aria-controls');
        // var _dataId = el.data('id');
        myFunc.modal.open(_ariaControls);

        // ARIA : aria-hidden
        // myFunc.getMyContainer.ariaHidden();
      });
    }

    return {
      init: init
    }
  }

  
  /**
    * @name: popupOld()
    * @description : 공통 하단 / 레이어 메뉴 (expanded -> popupOld 으로 변경)
    * @tag : <div class="my-select-list-area">
    * @url : AST_003_0005.html
    */
  let popupOld = function (pros) {
    let el,
      _targetSelect,
      _targetDialog,
      _body,
      _overlay;

    function init (_el) {
      el = $(_el);

      _body = $('body');
      _overlay = $('.overlay');
      
      _targetSelect = $('.my-select-list-area');
      _targetDialog = $('.my-dialog-content');


      switch(pros) {
        case ('selectMenu'): getSelectMenu(); break;
        case ('selectMenuEtc'): getSelectMenuEtc(); break;
        case ('Dialog'): getDialog(); break;        
        case ('Accordion'): getAccordion(); break;
        case ('Tooltip'): getTooltip(); break;
        default: break;
      }

      return this;
    }


    function getSelectMenuEtc () {

      if (myFunc.modal.state === true) return;
      
      /**
       * data-state-id 속성값을 통해 포커스 반영
       */
      el.off().on('click', function (e) {
        e.preventDefault();
        
        let _data_id = el.data('id'); // data-id만 사용

        el.attr('aria-expanded', 'true');

        _targetSelect
        .addClass('active')
        .attr('data-state-id', _data_id).focus();

        _body.addClass('overflow-hidden');
        _overlay.addClass('active');

        // ARIA : aria-hidden
        myFunc.getMyContainer.ariaHidden();
      });

      _targetSelect.find('.my-select-close').off().on('click', function (e) {
        e.preventDefault();

        let _this = $(this).closest('[aria-labelledby]');

        let _data_id = _this.attr('aria-labelledby');
        $('[data-id="' + _data_id + '"]').attr('aria-expanded', 'false');        

        let focus_id = _this.attr('data-state-id');
        $('[data-id=' + focus_id + ']').focus();

        console.log(this)

        _this
        .removeClass('active');
        
        if (!$('.my-drawer-area').hasClass('active')) {
          _body.removeClass('overflow-hidden');
        }

        _overlay.removeClass('active');   
        
        // ARIA : aria-hidden
        myFunc.getMyContainer.ariaHidden();
      });
    }


    function getSelectMenu () {
      if (myFunc.modal.state === true) return false;

      /**
       * data-state-id 속성값을 통해 포커스 반영
       */
      el.off().on('click', function (e) {
        e.preventDefault();

        let _data_id = el.data('id'); // data-id만 사용
        let _controls = el.attr('aria-controls');

        el.attr('aria-expanded', 'true');
        
        $(`#${_controls}`)
        .addClass('active')
        .attr('data-state-id', _data_id).attr('tabindex', -1);

        setTimeout(function () {
          $(`#${_controls}`).focus();
        }, 100);

        _body.addClass('overflow-hidden');
        _overlay.addClass('active');
        _overlay.removeAttr('style'); //2022.12.02 상단 헤더 딤처리 안돼서 수정

        // ARIA : aria-hidden
        myFunc.getMyContainer.ariaHidden();
      });

      _targetSelect.find('.my-select-close').off().on('click', function (e) {
        e.preventDefault();

        let _this = $(this).closest('[aria-labelledby]');

        let _data_id = _this.attr('aria-labelledby');
        $('[data-id="' + _data_id + '"]').attr('aria-expanded', 'false');        

        let focus_id = _this.attr('data-state-id');
        setTimeout(function () {
          $('[data-id=' + focus_id + ']').focus();
        }, 100);
        

        _this
        .removeClass('active');
        
        if (!$('.my-drawer-area').hasClass('active')) {
          _body.removeClass('overflow-hidden');
        }

        _overlay.removeClass('active');
        _overlay.removeAttr('style'); //2022.12.02 상단 헤더 딤처리 안돼서 수정

        // ARIA : aria-hidden
        myFunc.getMyContainer.ariaHidden();
      });
    }

 
    function getDialog () {

      if (myFunc.modal.state === true) return;
      
      
      /**
       * data-state-id 속성값을 통해 포커스 반영
       */
      el.off().on('click', function (e) {
        e.preventDefault();

        let _data_id = el.data('id'); // data-id만 사용
        el.attr('aria-expanded', 'true');

        $('[aria-labelledby="'+_data_id+'"]').addClass('active').attr('data-state-id', _data_id).focus();

        _body.addClass('overflow-hidden');
        _overlay.addClass('active');

        // ARIA : aria-hidden
        myFunc.getMyContainer.ariaHidden();
        
      });

      _targetDialog.find('.my-select-close').off().on('click', function (e) {
        e.preventDefault();

        let _this = $(this).closest('[aria-labelledby]');

        let _data_id = _this.attr('aria-labelledby');
        $('[data-id="' + _data_id + '"]').attr('aria-expanded', 'false');        

        let focus_id = _this.attr('data-state-id');
        $('[data-id=' + focus_id + ']').focus();

        _targetDialog.removeClass('active');
        
        _body.removeClass('overflow-hidden');
        _overlay.removeClass('active');
        
        // ARIA : aria-hidden
        myFunc.getMyContainer.ariaHidden();
      });
    }

    function getAccordion () {
      el.off().on('click', function (e, bol) {
        e.preventDefault();

        let _state = (bol === 'false') ? 'false' : el.attr('aria-expanded');
        let _id = el[0].id;
        let _posY = el.offset().top - 53;

        if (_state === 'false') {
          el.closest('.my-top-total-area').addClass('active');
          el.attr('aria-expanded', 'true').addClass('active');
          $('[aria-labelledby="' + _id + '"]').slideDown();

          if ( bol === undefined && el.closest('div').hasClass('my-2-text-info-acco') ) {
            $('html, body').animate({ scrollTop: _posY }, 400);
          }

        } else {
          el.closest('.my-top-total-area').removeClass('active');
          el.attr('aria-expanded', 'false').removeClass('active');
          $('[aria-labelledby="' + _id + '"]').slideUp();
        }

        // slideDown 실행 시 시간 차 발생
        setTimeout(function () {
          if (el.closest('.my-drawer-area')[0]) {
            // 계속 보기 레이어 팝업 상태
            myFunc.getMoreScroll.open(el.closest('.my-drawer-area')[0].id, 'topX');
          } else {
            // 계속 보기 페이지 상태
            myFunc.getMoreScroll.page();
          }
        }, 300)
      });

      // aria-expanded="true" 디폴트 상태 트리거 이벤트 실행
      if (el.attr('aria-expanded') === 'true') {
        el.trigger('click', 'false');
      }
    }
    
    function getTooltip () {
      el.off().on('click', function (e) {
        e.preventDefault();

        // 열려있는 툴팁 닫기
        // $('.my-tooltip-box').attr('tabindex', '-1').removeClass('active');
        $('.my-tooltip-box').removeClass('active');

        /*
          ARIA : tooltip 속성 값 변경
          - 일단 기존 속성값 유지한 상태에서 변경
        */
        let _data_id = el.data('id'); // data-id만 사용
        
        let posY = el.offset().top,
            viewTop = el[0].getBoundingClientRect().top,
            tipH = $(`[aria-labelledby=${_data_id}], [id=${_data_id}]`).outerHeight(true),
            winH = $(window).height();
        
        let setTop = posY + 25;

        // 툴팁 영역이 뷰포트 하단 여백보다 큰 경우 포지션 위로 변경
        if ( winH - viewTop < tipH + 140 ) {
          setTop = posY - tipH - 10;
        }

        $(el).attr('aria-describedby', _data_id);
        $(`[aria-labelledby=${_data_id}], [id=${_data_id}]`)
          .attr('id', _data_id)
          .attr('tabindex', 0)
          .removeAttr('aria-labelledby')
          .addClass('active')
          .offset({ top: setTop })
          .focus();

        // 팝업 내에서 호출 시 z-index 변경
        if ($('.my-select-list-area').hasClass('active')) {
          $(`[aria-labelledby=${_data_id}], [id=${_data_id}]`).css('z-index','540');
        }
      });

      $('.my-close').off().on('click', function (e) {
        e.preventDefault();

        let _tooltip = $(this).closest('.my-tooltip-box');
        let _id = _tooltip.attr('id');
        let _describedby = _tooltip.attr('aria-describedby');
        $(this).removeAttr('aria-labelledby');

        $(`#${_id}`).removeClass('active');
        $(`[data-id=${_id}]`).focus();
      });
    }

    return {
      init: init
    }
  }


  /**
    * @name: drawer()
    * @description : 공통 사이드메뉴
    * @tag : <section class="my-drawer-area" data-id="" tabindex="0">
    * @url : SVC_002_0003.html
    */
  let drawer = function (pros) {
    let el,
      _target,
      _close,
      _body;

    function init (_el) {
      el = $(_el);

      _body = $('body');
      _target = $('.my-drawer-area');
      _close = $('.my-nav-case-local').find('.my-btn-close');

      if (myFunc.modal.state === true) return;
      
      getDrawer();
      
      return this;
    }

    function getDrawer () {

      /**
       * data-state-id 속성값을 통해 포커스 반영
       */
      el.off().on('click',  function (e) {
        // e.preventDefault();

        let _id = el.data('id');
        _target
          .addClass('active');

        setTimeout(function () {
          _target.attr('data-state-id', _id).focus();
        }, 100);
    
        

        // 개발환경에서 비동기 DOM 생성 이슈로 동작안함. 개발쪽에서 별도 반영함.
        $('.my-drawer-area .my-container').scrollTop(0);
        _body.addClass('overflow-hidden');

        // ARIA : aria-hidden
        myFunc.getMyContainer.ariaHidden();
      });

      _close.off().on('click', function (e) {
        e.preventDefault();

        let _id = _target.attr('data-state-id');

        _target.removeClass('active');
        _body.removeClass('overflow-hidden');

        $('[data-id=' + _id + ']').focus();

        // ARIA : aria-hidden
        myFunc.getMyContainer.ariaHidden();
      });
    }

    return {
      init: init
    }
  }


  /**
    * @name: tabControl()
    * @description : 탭메뉴
    * @tag : <ul class="tab-list scrl">
    * @url : AST_011_0001.html
    */
  let tabControl = function () {
    let el,
      _elLi,
      _elLink,
      _prev,
      _next;

    function init (_el) {
      el = $(_el);
      _elLi = el.find('li');
      _elLink = el.find('li a');
      _prev = $('.my-ico-tab-prev');
      _next = $('.my-ico-tab-next');

      getTabControl();

      return this;
    } 

    function getTabControl () {
      let _size = _elLi.length;
      let _index;
      let _scrollWidth = el.get(0).scrollWidth;
      let _clientWidth = el.get(0).clientWidth;
      let _Xw = 600;

      _elLi.each(function (index, item) {
        // active 기존에 사용 -> aria-selected 지금 사용
        if ($(item).find('a').hasClass('active') || $(item).find('a').attr('aria-selected') == 'true') {
          _index = ++index;
          $(item).find('a').attr('title', '현재 선택됨');
        }
      });
      
      setTimeout(function () {
        el.animate({scrollLeft: _Xw}, 0, function () { 
          _Xw = el.scrollLeft();
        });
        el.scrollLeft(_index > 4 ? _index * 45 : 0);
      }, 100);

      //220608 접근성이슈 추가
      // _elLink.off().on('click', function (e) {
      //   $(this).parents().siblings().find('a').attr('aria-selected','false').attr('title', '');
      //   $(this).attr('aria-selected','true').attr('title', '현재 선택됨');
      // });
      
      if (_scrollWidth !== _clientWidth) {
        if (_index !== 1) _prev.show();
        if (_index !== _size) _next.show();

        el.off().on('scroll', function (e) {
          
          let _x = el.scrollLeft();
          
          if (_x === 0) _prev.hide();
          else _prev.show();
          
          if ((_x + 35) > _Xw) _next.hide();
          else _next.show();
        });

        _prev.off().on('click', function (e) {
          el.stop().animate({scrollLeft: 0}, 0);
          _prev.hide();
          _next.show();
          el.find('li:first-child a').focus();
        });
        
        _next.off().on('click', function (e) {
          el.stop().animate({scrollLeft: _Xw}, 0);
          _next.hide();
          _prev.show();
          el.find('li:last-child a').focus();
        });
      }      
    }

    return {
      init: init
    }
  }


    /**
    * @name: tabControlMall()
    * @description : 탭메뉴
    * @tag : <ul class="tab-list scrl">
    * @url : MER_001_0001.html
    */
     let tabControlMall = function () {
      let el,
        _elLi,
        _elLink,
        _prev,
        _next,
        _offsetTop;
  
      function init (_el) {
        el = $(_el);
        _elLi = el.find('li');
        _elLink = el.find('li a');
        _prev = $('.my-shadow-prev');
        _next = $('.my-shadow-next');
        _offsetTop = $(_el).offset().top;

        // 페이지 내 스크롤
        $(window).on('scroll', function () {
            if ($(window).scrollTop() > _offsetTop - el.height()) {
              el.parents('.my-tab-area2').addClass('scrolled');
            } else {
              el.parents('.my-tab-area2').removeClass('scrolled');
            }
            updateLink(); //스크롤 했을 때 업데이트
        });
  
        gettabControlMall();

        _elLink.off().on('click', function (e) { //클릭했을 때 스크롤
          goToScroll($(this).attr('href'));
        })
  
        return this;
      } 
  
      function gettabControlMall () {
        let _size = _elLi.length;
        let _index;
        let _scrollWidth = el.get(0).scrollWidth;
        let _clientWidth = el.get(0).clientWidth;
        let _Xw = 600;
  
        _elLi.each(function (index, item) {
          // active 기존에 사용 -> aria-selected 지금 사용
          if ($(item).find('a').hasClass('active') || $(item).find('a').attr('aria-selected') == 'true') {
            _index = ++index;
            $(item).find('a').attr('title', '현재 선택됨');
          }
        });
        
        setTimeout(function () {
          el.animate({scrollLeft: _Xw}, 0, function () { 
            _Xw = el.scrollLeft();
          });
          el.scrollLeft(_index > 4 ? _index * 45 : 0);
        }, 100);
  
        if (_scrollWidth !== _clientWidth) {
          if (_index !== 1) _prev.show();
          if (_index !== _size) _next.show();
  
          el.off().on('scroll', function (e) {
            
            let _x = el.scrollLeft();
            
            if (_x === 0) _prev.hide();
            else _prev.show();
            
            if ((_x + 35) > _Xw) _next.hide();
            else _next.show();
          });
  
        }      
      }

      function goToScroll (hash) {
        var $target = $(hash);
        var $html = $('html');
        var $scroller = $html;
        var offsetTop = getOffsetTop($target, 35);
        //var $links = $('.' + hashScroll.classNames.link);
        var $targetLink = _elLink.filter('[href="' + hash + '"]');

        _elLink.attr('aria-selected', 'false');
        $targetLink.attr('aria-selected', 'true');

        $scroller.stop().animate(
          {
            scrollTop: offsetTop,
          },
          500
        );
  
      }

      // getOffsetTop
      function getOffsetTop($target, margin) {
        var $top = $('.my-nav-case-local');
        var topH = $top.length ? $top.outerHeight() : 0;
        var offsetTop = $target.is(':visible') ? $target.offset().top : 0;
        var scrollTop = offsetTop - topH - (typeof margin === 'number' ? margin : 40);

        return scrollTop;
      }      
      
      function updateLink() {
        var $html = $('html');
        var $scroller = $html;
        // var $links = $('.' + hashScroll.classNames.link);
  
        // if (!$links.length || $scroller.is(':animated') || !$links.eq(0).is(':visible')) {
        //   return;
        // }
  
        var hashArray = [];
        var scrollTop = $(window).scrollTop();
        var maxScrollTop = $('body').get(0).scrollHeight - $(window).height() ;
  
  
        _elLink.each(function () {
          var hash = $(this).attr('href');
  
          if (hashArray.indexOf(hash) === -1) {
            hashArray.push(hash);
          }
        });
  
        if (!hashArray.length) {
          return;
        }
  
        $.each(hashArray, function (i, v) {
          var $target = $(v);
  
          if (!$target.length || $target.is(':hidden')) {
            return;
          }
  
          var offsetTop = getOffsetTop($target, 35);
          var $targetLink = _elLink.filter('[href="' + v + '"]');

          if (scrollTop >= offsetTop - 1) {
            _elLink.attr('aria-selected', 'false');
            $targetLink.attr('aria-selected', 'true');
          }
        });
  
        if (scrollTop >= maxScrollTop) {
          _elLink.attr('aria-selected', 'false');
          _elLink.filter('[href="' + hashArray[hashArray.length - 1] + '"]').attr('aria-selected', 'true');
        }
  
        //menuNavBar.scrollTo($('.menu-nav-bar-link.' + hashScroll.classNames.link + '.' + hashScroll.classNames.active));
      }
  
      return {
        init: init
      }
    }


  /**
    * @name: refresh()
    * @description : 새로고침 애니메이션
    * @tag : <button class="refresh">
    * @url : AST_001_0001.html
    */
  let refresh = function () {
    let el;

    function init (_el) {
      el = $(_el);
      
      getRefresh();

      return this;
    }

    function getRefresh () {
      el.off().on('click', function (e) {
        e.preventDefault();

        el.addClass('spin-animation');
        setTimeout(function () {
          el.removeClass('spin-animation');
        }, 500);
      });
    }

    return {
      init: init
    }
  }


  /**
    * @name: headerControl()
    * @description : 헤더 스크롤
    * @tag : <nav class="my-nav-case-local">
    */
  let headerControl = function () {
    let el;
    function init (_el) {
      el = $(_el);
      
      // 페이지 내 스크롤
      $(window).on('scroll', function () {
        tooltipClose();
        
        if ($(window).scrollTop() > el.height()) {
          el.addClass('scrolled');
        } else {
          el.removeClass('scrolled');
        }
      });

      // 팝업 내 스클롤 
      $('.my-drawer-area .my-container').on('scroll', function () {
        tooltipClose();

        if ( $(this).scrollTop() > el.height() && $('.my-input-area.tm-b').length < 1) {
          $(this).siblings('.my-nav-case-local').addClass('scrolled');
        } else {
          $(this).siblings('.my-nav-case-local').removeClass('scrolled');
        }
      });
    }

    function tooltipClose () {
      // 스크롤 시 열려져 있는 툴팁 닫기
      if ($('.my-tooltip-box').hasClass('active')) {
        let _id = $('.my-tooltip-box.active').attr('id');
        $(`[data-id=${_id}]`).focus();
        $('.my-tooltip-box').removeClass('active');
      } 
    }

    return {
      init: init
    }
  }


  /**
    * @name: barChart()
    * @description : barChart
    * @tag : <div class="my-bar-area" data-percent="70">
    * @url : AST_004_0004.html
    */
  let barChart = function () {
    let el,
      _target,
      _d_day,
      _pecentage;

    function init (_el){
      el = $(_el);
      _target = el.find('.bar');
      _d_day = el.find('.d-day');
      _pecentage = el.data('percent');

      el.waypoint({
        handler: function() {
          _target.css('width',`${_pecentage}%`);
          _d_day.css('left',`${_pecentage}%`);
        },
        offset: '90%'
      });

      return this;
    }

    return {
      init: init
    }
  }


  /**
    * @name: barChartScope()
    * @description : barChartScope
    * @tag : <div class="my-bar-hor-area">
    * @url : CON_001_0001.html
    */
  let barChartScope = function () {
    let el,
      _target1,
      _target2,
      _pecentage1,
      _pecentage2;

    function init (_el){
      el = $(_el);
      _target1 = el.find('.bar-1');
      _target2 = el.find('.bar-2');
      _pecentage1 = _target1.data('percent');
      _pecentage2 = _target2.data('percent');
      
      el.waypoint({
        handler: function() {
          _pecentage1 !== 0 ? _target1.css('width',`${_pecentage1}%`) : _target1.hide();
          _pecentage2 !== 0 ? _target2.css('width',`${_pecentage2}%`) : _target2.hide();
        },
        offset: '100%'
      });

      return this;
    }

    return {
      init: init
    }
  }


  /**
    * @name: rangeScopeChart()
    * @description : rangeScopeChart
    * @tag : <div class="rangeScopeChart">
    * @url : CON_004_0003.html
    */
  let rangeScopeChart = function () {
    let el,
      _mean,
      _meanValue,
      _my,
      _myValue;

    function init (_el){
      el = $(_el);
      
      _mean = el.find('.mean');
      _meanValue = _mean.data('value');

      _my = el.find('.my');
      _myValue = _my.data('value');

      el.waypoint({
        handler: function() {
          _mean.animate({ left: `${ _meanValue }%` }, 300, 'swing', function () {
            $(this).delay(1500).addClass('end');
          });
          _my.animate({ left: `${ _myValue }%` }, 500, 'swing', function () {
            $(this).delay(1500).addClass('end');
          });
        },
        offset: '90%'
      });
      
      return this;
    }

    return {
      init: init
    }
  }


  /**
    * @name: carRangeScope()
    * @description : carRangeScope
    * @tag : <div class="my-carRangeScope">
    * @url : CAR_004_0001.html / CAR_004_0002.html
    */
  let carRangeScope = function () {
    let el,
        _bar,
        _myCar,
        _min,
        _max,
        _value;

    function init (_el){
      el = $(_el);
      
      _bar = el.find('.bar');
      _myCar = el.find('.myCar');

      _min = _bar.data('min');
      _max = _bar.data('max');
      _value = _myCar.data('value');

      _bar.find('.min strong').counterUp({ delay: 20, time: 800});
      _bar.find('.max strong').counterUp({ delay: 20, time: 800});

      el.waypoint({
        handler: function() {
          _bar.animate({  left: `${ _min }%`,  right: `${ 100 - _max }%`}, 500, 'swing');
          _myCar.animate({ left: `${ _value }%` }, 700, 'swing');
        },
        offset: '100%'
      });
      
      return this;
    }

    return {
      init: init
    }
  }


  /**
    * @name: storeRangeScope()
    * @description : storeRangeScope
    * @tag : <div class="storeRangeScope">
    * @url : SEM_001_0003.html
    */
  let storeRangeScope = function () {
    let el,
      _mean,
      _meanValue;

    function init (_el) {
      el = $(_el);
      
      _mean = el.find('.mean');
      _meanValue = _mean.data('value');

      el.waypoint({
        handler: function() {
          _mean.animate({ left: `${ _meanValue }%` }, 500, 'swing', function () {
            $(this).delay(1500).addClass('end');
          });
        },
        offset: '90%'
      });
      
      return this;
    }

    return {
      init: init
    }
  }


  /**
    * @name: datePicker()
    * @description : 달력 기준/예정일 선택
    * @tag : <button class="my-btn-cal">
    * @url : CON_002_0001.html
    */
  let datePicker = function () {
    let el,
        btnFold;
    
    function init (_el) {
      el = $(_el),
      btnFold = el.closest('.my-2-calendar-area').find('.btn-cal-unfold');

      // $('.my-container').addClass('hasCalendar');

      // 달력 접기
      el.off().on('click', function (e) {
        e.preventDefault();

        let _overlay = $('.my-calendar-area');
        let _calendar = $('.my-2-calendar-area');
        
        _overlay.addClass('overlay-cal');
        _calendar.addClass('folded');

        // 날짜 버튼 초기화
        $('.my-btn-cal').removeClass('active');
        
        // 날짜 버튼 활성화
        el
          .addClass('active')
          .closest('tr')
          .addClass('selectedWeek')
          .siblings()
          .slideUp(200);
        
        // 달력 펄치기 버튼 노출
        btnFold.show();        
      });

      // 달력 펼치기
      btnFold.off().on('click', function (e) {
        myFunc.getCalendarUnfold();
      });

      return this;
    }


    return {
      init: init
    }
  }


  /**
    * @name: unlabeledControl() 
    * @description : 가계부 미분류 카테고리
    * @tag : <div class="my-unlabeled-list">
    * @url : CON_002_0008.html / CAR_003_0002.html
    */
  let unlabeledControl = function () {
    let el;

    function init (_el) {
      el = $(_el);

      el.off().on('scroll', function () {
        let _scrollY = el.scrollTop();

        //스크롤 시 열려져 있는 툴팁 닫기
        if ($('.my-tooltip-box').hasClass('active')) {
          let _id = $('.my-tooltip-box.active').attr('id');
          $(`[data-id=${_id}]`).focus();
          $('.my-tooltip-box').removeClass('active');
        }

        if (_scrollY > 55 ) {
          // 스크롤 시 swiper영역 상단 고정 및 disable 처리
          el.addClass('scrolled');
          if(!el.find('.swiper-area').hasClass('select-one')) {
            myFunc.getUnlabeledSwiper.disable();
          }
        }else {
          el.removeClass('scrolled');
          if(!el.find('.swiper-area').hasClass('select-one')) {
            myFunc.getUnlabeledSwiper.enable();
          }
        }
      });

      return this;
    }

    return {
      init: init
    }
  }


  /**
    * @name: clcInfoControl() 
    * @description : 신용대출 비교조회 안내 스크롤에 따른 버튼
    * @tag : <div class="my-2-clc-info-area">
    * @url : CLC_001_0001.html
    */
  let clcInfoControl = function () {
    let el,
        btn,
        posY;

    function init (_el) {
      el = $(_el);
      btn = el.siblings('.my-btn-area');
      posY = el.siblings('.my-2-top-total-area-case')
                .find('.btn-link-banner')
                .position().top;

      $('.my-btn-area').addClass('fix-btn');

      $(window).on('scroll', function() {
        if ( $(window).scrollTop() > posY ) {
          setTimeout(function () {
            btn.addClass('my-btn-area-fix');
          }, 100);
        } else {
          setTimeout(function () {
            btn.removeClass('my-btn-area-fix');
          }, 100);
        }
      });

      return this;
    }

    return {
      init: init
    }
  }


  /**
    * @name: serviceGuideControl() 
    * @description : 마이데이터 서비스 이용안내 swiper
    * @tag : <div class="my-2-service-guide-area">
    * @url : SVC_001_0001.html
    */
  let serviceGuideControl = function () {
    let el,
        //mySwiper,
        btnBannerHide;

    function init (_el) {
      el = $(_el);
      let canvas = el.find('.my-canvas-area');

      $(window).load(function () {
        // 해당 안내영역이 visible일 경우 안내영역 안 캔버스가 view 안에 들어올 경우 실행
        if (el.is(':visible')) { 
          canvas.waypoint({
            handler: function () {

              canvas.each(function(index, item){
                myFunc.getMyCanvas.play(index);
              });
              
            },
            offset: 'bottom-in-view'
          });
        }
      });

      // 오픈이벤트 상자 닫기
      btnBannerHide = $('.open-event-btn-area').find('.btn-evt-close');
      btnBannerHide.on('click', function() {
        btnBannerHide.closest('.open-event-btn-area').addClass('hide');
      });
    }

    return {
      init: init
    }
  }

  // let serviceGuideControl = function () {
  //   let el,
  //       mySwiper,
  //       btnBannerHide;

  //   function init (_el) {
  //     el = $(_el);

  //     mySwiper = new Swiper('.myServieGuideSwiper', {
  //       loop: false,
  //       resistance : true,
  //       resistanceRatio : 0,
  //       pagination: {
  //         el: '.swiper-pagination',
  //         clickable: false,
  //       },
  //       on: {
  //         beforeInit: function(e) {
  //           animteText(e.realIndex);

  //           // canvas visibility check
  //           if (!$('.my-canvas-area').is(':visible')) return;
            
  //           $(window).load(function(){
  //             myFunc.getMyCanvas.play(0);
  //           });
  //         },
  //         slideChange: function(e) {
  //           animteText(e.realIndex);

  //           // canvas visibility check
  //           if (!$('.my-canvas-area').is(':visible')) return;
  //           myFunc.getMyCanvas.play(e.realIndex);
  //         }
  //       }
  //     });

  //     //텍스트 애니메이션 클래스
  //     function animteText(index) {
  //       let txt = $(_el).find('.guide-info ul li');
  //       txt.removeClass('active');
  //       txt.eq(index).addClass('active');
  //     }

  //     // 오픈이벤트 상자 닫기
  //     btnBannerHide = $('.open-event-btn-area').find('.btn-evt-close');
  //     btnBannerHide.on('click', function() {
  //       btnBannerHide.closest('.open-event-btn-area').addClass('hide');
  //     });
  //   }

  //   return {
  //     init: init
  //   }
  // }


  /**
    * @name: openEventControl() 
    * @description : 오픈이벤트
    * @tag : <div class="my-2-open-event-area">
    * @url : EVT_001_0001.html
    */
  let openEventControl = function () {
    let el,
        tab;

    function init (_el){
      el = $(_el);
      tab = el.find('.evt-tab-area li a');
      let headerH = $('.my-nav-case-local').height();
      let tabCont2Pos = $('.evt-detail').eq(1).offset().top - headerH;

      // 하단고정 버튼 없을 시 간격조정을 위한 클래스
      if ( !el.children('.my-btn-area-fix').is(':visible')) {
        el.parents('.my-container').removeClass('hasFixedBtn');
      }
      
      // 스크롤 시 이벤트 헤더 스타일 클래스
      $(window).on('scroll', function() {
        let scrollTop = $(window).scrollTop();
        if ( (scrollTop > headerH) && (scrollTop <= tabCont2Pos) ) {
          $('.my-nav-case-local').removeClass('type-transparent');
          evtTabActive(0);
        } else if ( (scrollTop > headerH) && (scrollTop >= tabCont2Pos) ) {
          $('.my-nav-case-local').removeClass('type-transparent');
          evtTabActive(1);
        } else {
          $('.my-nav-case-local').addClass('type-transparent');
        }
      });

      // 이벤트 탭 선택 시 해당 이벤트로 스크롤
      tab.off().on('click', function() {
        let index = $(this).closest('li').index();
        let tabConPos = $('.evt-detail').eq(index).offset().top;

        evtTabActive(index);
        $('html, body').animate({ scrollTop: `${tabConPos - headerH}px` }, 400);
      });
    }

    // 이벤트 탭 활성화
    function evtTabActive(index) {
      tab.removeClass('active');
      $('.evt-tab-area li').eq(index).find('a').addClass('active');
    }

    return {
      init: init
    }
  }


  /**
    * @name: healthInfoControl() 
    * @description : 보험건강관리 바 차트
    * @tag : <div class="my-2-health-info-area">
    * @url : HEA_001_0001.html / HEA_001_0003.html
    */
  let healthInfoControl = function () {
    let el,
        btn,
        bar;

    function init (_el){
      el = $(_el);
      btn = el.find('.acco-btn');

      // 아코디언 오픈 시 바 차트 애니메이션 실행  
      btn.each(function(){
        $(this).on('click', function(){
          bar = $(this).siblings('.acco-cnt').find('.my-bar-area .bar');
          if ($(this).hasClass('active')) {
            setTimeout(function(){
              bar.css('width', `${bar.data('percent')}%`);
            },400)
          }else {
            setTimeout(function(){
              bar.css('width', 0);
            },400);
          }
        });
      });

      return this;
    }

    return {
      init: init
    }
  }


  /**
    * @name: chartCurve()
    * @description : 곡선 그래프
    * @tag : <div class="chart-curve-svg" data-case="case2">
    * @url : CON_003_0011.html, HEA_001_0003.html
    */
  let chartCurve = function () {
    let el,
        margin;

    function init (_el){
      el = $(_el);
      let _data_case = el.data('case');

      let data = [
        { value: "90", label: "0"},
        { value: "90", label: "1"},
        { value: "92", label: "2"},
        { value: "95", label: "3"},
        { value: "100", label: "4"},
        { value: "93", label: "5"},
        { value: "91", label: "6"},
        { value: "91", label: "7"},
        { value: "91", label: "9"},
        { value: "90", label: "9"}
      ]
      
      let svgWidth = window.innerWidth;
      
      switch(_data_case) {
        case 'case2':
          margin = { top: 0, right: 36, bottom: 0, left: 36 }
          break;
        default:
          margin = { top: 0, right: 20, bottom: 0, left: 20 }
          break;
      }

      let width = svgWidth - margin.left - margin.right;
      let height = el.parents('.chart-curve').outerHeight(true);
      
      let xScale = d3.scaleLinear().range([0, width]).domain([1, 6]);
      let yScale = d3.scaleLinear().range([height, 0]).domain([90, 100]);
            
      let line = d3.line()
        .curve(d3.curveBasis)
        .x(function(d) {
          return xScale(d.label)
        })
        .y(function(d) {
          return yScale(d.value)
        });
      
        let svg = d3
          .select(_el)
          .attrs({ "width": width, "height": height })

        svg.append('path')
          .datum(data)
          .attr('stroke', '#2b9f99')
          .attr('stroke-width', 1)
          .attr('fill', 'rgba(132,215,211,0)')
          .attr('d', line);
      
        svg.append('path')
          .datum(data)
          .attr('fill', 'rgba(132,215,211,0.15)')
          .attr('d', line);

        
      let _my = el.closest('.chart-curve').find('.my');
      let _myData = _my.data('value');

      el.waypoint({
        handler: function() {
          _my.css('left', `${ _myData }%`);
        },
        offset: '90%'
      });

      return this;
    }

    return {
      init: init
    }
  }


  /**
    * @name: randomPosition()
    * @description : 황금동전 위치 랜덤
    * @tag : <div class="my-gold-btn-area">
    * @url : EVT_001_0003.html
    */
  let randomPosition = function () {
    let el;

    function init (_el){
      el = $(_el);

      // 랜덤포지션클래스 초기화
      el.removeClass(function(index, classNames) {
        let currentClasses = classNames.split(" "),
            removeClasses = [];

        $.each(currentClasses, function (index, class_name) {
          if (/randomPosition-*/.test(class_name)) {
            removeClasses.push(class_name);
          }
        });
        return removeClasses.join(" ");
      });

      // 랜덤포지션클래스 추가
      let rand_0_9 = Math.floor(Math.random() * 10);
      el.addClass("randomPosition-" + rand_0_9);
      return this;
    }

    return {
      init: init
    }
  }


  /**
    * @name: partnerScroll()
    * @description : 기관로고 무한 스크롤
    * @tag : <div class="partner-scroll">
    * @url : CLC_001_0001.html / SVC_002_0028.html
    */
  let partnerScroll = function () {
    let el;

    function init (_el){
      el = $(_el);
      let li = el.find('ul').html();

      if (el.find('ul li').length === 7) {
        el.find('ul').append([li, li, li, li]);
      } else {
        el.find('ul').append([li, li, li, li, li, li]);
      }

      return this;
    }

    return {
      init: init
    }
  }


  /**
    * @name: hotPlaceFilter()
    * @description : 내 주변 핫플 필터 검색
    * @tag : <div class="filters-area">
    * @url : HOT_001_0001.html
    */
  let hotPlaceFilter = function () {
    let el;

    function init (_el){
      el = $(_el);

      el.on('click', function() {
        let searh_area = el.closest('.my-2-hot-place-search-area');
        if (searh_area.hasClass('active')) {
          searh_area.removeClass('active');
          el.attr('aria-expanded', 'false');
        } else {
          searh_area.addClass('active');
          el.attr('aria-expanded', 'true');
        }
      });

      return this;
    }

    return {
      init: init
    }
  }


  /**
    * @name: hotPlaceTitle()
    * @description : 내 주변 핫플 상단 타이틀
    * @tag : <h2 class="hot-place-title">
    * @url : HOT_001_0001.html
    */
  let hotPlaceTitle = function () {
    let el;

    function init (_el){
      el = $(_el);

      setTimeout(function () {
        el.addClass('show');
        setTimeout(function () {
          el.removeClass('show');
        }, 1000);
      }, 1000);

      return this;
    }

    return {
      init: init
    }
  }


  /**
    * @name: qnaAccordion()
    * @description : 자주 묻는 질문
    * @tag : <dl class="qna-accordion">
    * @url : SEM_001_0006.html
    */
  let qnaAccordion = function () {
    let el;

    function init (_el){
      el = $(_el);

      let _state = el.attr('aria-expanded');
      let _id = el[0].id;

      el.off().on('click', function (e) {
        e.preventDefault();

        el
          .closest('dl')
          .find('dt')
          .removeClass('active')
          .attr('aria-expanded', 'false')
          .end()
          .find('dd')
          .hide();

        if (_state === 'false') {
          el.attr('aria-expanded', 'true').addClass('active').focus();
          $('[aria-labelledby="' + _id + '"]').show();
          _state = 'true';
        } else {
          el.attr('aria-expanded', 'false').removeClass('active').focus();
          $('[aria-labelledby="' + _id + '"]').hide();
          _state = 'false';
        }
      });
      
      return this;
    }

    return {
      init: init
    }
  }


  /**
    * @name: addClassBody()
    * @description : 자산추가 버튼 있을 때 배경 클래스 추가
    * @tag : <button class="my-btn-type-add">자산추가</button>
    * @url : AST_003_0001.html ~ AST_009_0001.html
    */
  let addClassBody = function () {
    let el;

    function init (_el){
      el = $(_el);

      $('body').addClass('assets-add-class')
      
      return this;
    }

    return {
      init: init
    }
  }


  /**
    * @name: canvasScrollPlay()
    * @description : 캔버스 애니메이션 스크롤 시 플레이
    * @tag : <div class="my-2-assets-connection-unavailable">
    * @url : CON_001_0003.html / CON_001_0005.html / UGD_001_0001.html / UGD_001_0002.html / UGD_001_0003.html / UGD_001_0004.html / UGD_001_0005.html / UGD_001_0006.html / UGD_001_0007.html
    */
  let canvasScrollPlay = function () {
    let el;

    function init (_el){
      el = $(_el);
      let canvas = el.find('.my-canvas-area');

      $(window).load(function () {
        // 해당 안내영역이 visible일 경우 안내영역 안 캔버스가 view 안에 들어올 경우 실행
        if (el.is(':visible')) { 
          canvas.waypoint({
            handler: function () {

              canvas.each(function(index, item){
                myFunc.getMyCanvas.play(index);
              });
              
            },
            offset: 'bottom-in-view'
          });
        }
      });
      
      return this;
    }

    return {
      init: init
    }
  }


  /**
    * @name: btnCalculate()
    * @description : 필터 라디오버튼 개수에 따른 스타일적용
    * @tag : <div class="btn-row_group">
    * @url : AST_003_0005 / CAR_004_0003 / CLC_005_0003 등
    */
  let btnCalculate = function () {
    let el, btnGroup;

    function init (_el){
      el = $(_el);
      btnGroup = el.closest('.btn-row_group');

      btnGroup.each(function () {
        let btn = $(this).find('.filter');
        $(this).addClass(`col-${btn.length}`);
      });
      
      return this;
    }

    return {
      init: init
    }
  }

  /**
    * @name: floatingClose()
    * @description : 필터 라디오버튼 개수에 따른 스타일적용
    * @tag : <div class="btn-row_group">
    * @url : AST_003_0005 / CAR_004_0003 / CLC_005_0003 등
    */
   let floatingClose = function () {
    let el, btnBannerHide;

    function init (_el){
      el = $(_el);
      
      // 오픈이벤트 상자 닫기
      btnBannerHide = $('.open-event-btn-area').find('.btn-evt-close');
      btnBannerHide.on('click', function() {
        btnBannerHide.closest('.open-event-btn-area').addClass('hide');
      });
      
    }

    return {
      init: init
    }
  }

    /**
    * @name: displayControl()
    * @description : 버튼으로 해당 영역 열었다 닫기
    * @tag : <div class="display-group-wrap">
    * @url :SVC_002_0017
    */
     let displayControl = function () {
      let el;
  
      function init (_el){
        el = $(_el);
        let btnDisplay = el.find('.btn-display');
        
        btnDisplay.off().on('click', function (e) {
          if(el.hasClass('active')){
            el.removeClass('active');
          }
          else{
            el.addClass('active');
          }

        });
        
      }
  
      return {
        init: init
      }
    }

  


  /**
  * function for developer
  * 개발 전용 메서드 정의
  * window.myFunc 전역 함수로 접근 가능
  */
  window.myFunc = function () {
  
    // modal 배열에 담기
    // function modalClosure () {
    //   let arr = [];
    //   return function (item) {
    //     arr.push(item);
    //     let unique = arr.filter(function (item, index, self) {
    //       console.log(item, index, self)
    //       return self.indexOf(item) === index
    //     });    

    //     return unique;
    //   };
    // }
    // let arrayCounter = modalClosure();

    let modal = {},
        getMyContainer = {},
        getDrawerArea = {},
        getSelectMenu = {},
        getMyExpensesSwiper = {},
        getMyExpensesBannerSwiper = {},
        getMyCarSwiper = {},
        getMyDataSwiper = {},
        getMyDataAutoSwiper = {},
        getExampleSwiper = {},
        getMyDataLoading = {},
        getRePaint = {},
        getDataCounter = {},
        getCardPlate = {},
        getCardPlate02 = {},
        getTodayScrollTop = {},
        getUnlabeledSwiper = {},
        getCalendarUnfold = {},
        getMyMainControl = {},
        getMyMainLoading = {},
        getMyCanvas = {},
        getChartLineCss = {},
        getGoldAnimate = {},
        getMoreScroll = {},
        getMyRankingSwiper = {},
        getMyMallSwiper = {},
        getReportSwiper = {},
        getReportCardBackScroll = {},
        getReportCardBackScrollBottom = {};



    // 기관 선택 해상도 따라 리스트 노출 영역 반영
    function row_group_list () {
      let _list = $('.my-select-list-area');
      let my_detail_organization = _list.find('.my-detail-organization');
      let row_group_list = _list.find('.row_group_list > span').length;

      if (row_group_list > 4) {
        let _maxHeight = ($(window).height() / 10) * 9 - 100;
        my_detail_organization.css('max-height', _maxHeight);
      }
    }


    /**
      * @name: modal()
      * @description : 공통 팝업 > 하단팝업 / 우측팝업 / 경고창 통합
      * @url : 공통
      */

    /**
     * myFunc.modal.open('aria-controls'); // 해당 버튼 aria-controls 속성값
     * myFunc.modal.close('aria-labelledby'); // 해당 버튼 영역 aria-labelledby 속성값
     */
    modal = function () {
      let state = false,
          open = {}, 
          close = {};

      let elArray = [];

      // 해당 팝업 열기
      // Chrome Android 49 : default function parameter
      // 해당 버튼 aria-controls 속성값
      open = function (ariaControls) {

        elArray.push(ariaControls);

        // 배열 중복 제거하기
        elArray = elArray.filter(function (ariaControls, index, self) {
          return self.indexOf(ariaControls) === index;
        });

        //console.log('1 : '+ document.activeElement.id);
       

        // id, data-id 둘 다 사용 가능
        let _ariaControls = $(`#${ariaControls}, [data-id="${ariaControls}"]`);
        _ariaControls
          .addClass('active')
          .css('z-index', 500 + (elArray.length *  10))
          .attr('tabindex', '0');          

        setTimeout(function () {
          _ariaControls.focus();
        }, 100);
          
        //console.log('2 : '+ $(":focus").name);
          
        
        // 기관 선택 해상도 따라 리스트 노출 영역 반영
        row_group_list();

        // 맨 마지막 엘리먼트 z-index 값 하단 위치
        $('.overlay')
          .addClass('active')
          .css('z-index', 499 + (elArray.length *  10));
        
        // body 태그 overflow:hidden
        $('body').addClass('overflow-hidden');

        // ARIA aria-hidden="true"
        myFunc.getMyContainer.ariaHidden();

        $('.my-select-close, .my-btn-close').one('click', function (e) {
          let ariaLabelledby = $(this).closest('[aria-labelledby]').attr('aria-labelledby');
          myFunc.modal.close(ariaLabelledby);
        });

        // 기존 클래스 팝업 이벤트 차단
        return modal.state = true;
      }

      // 해당 팝업 닫기
      // 해당 버튼 영역 aria-labelledby 속성값
      close = function (ariaLabelledby) {

        // 마지막 배열 제거
        elArray.pop();

        let _ariaControls = $(`[aria-labelledby="${ariaLabelledby}"]`);
        _ariaControls.removeClass('active');

        // id, data-id 둘 다 사용 가능
        let _dataId = $(`#${ariaLabelledby}, [data-id="${ariaLabelledby}"]`);
        _dataId.focus();

        // overlay 위치값 변경
        // $('.overlay')
        //   .css('z-index', 499 + (elArray.length *  10))
        $('.overlay').css('z-index', 0)

        // 마지막 팝업 일 때 초기화
        if (elArray.length === 0) {
          $('body').removeClass('overflow-hidden');
          $('.overlay').removeClass('active');

          // ARIA aria-hidden="false"
          myFunc.getMyContainer.ariaHidden();

          // 기존 클래스 팝업 이벤트 기능 해제
          return modal.state = false;
        }
      }
      
      return {
        state: state,
        open: open,
        close: close
      }
    }();

    /**
      * @name: getMyContainer()
      * @description : ARIA 접근성 숨긴 상태 설정
      * @tag : <section class="my-container" aria-hidden="true | false">
      * @url : 공통
      */

    /**
     * myFunc.getMyContainer.ariaHidden();
     */
     getMyContainer = function () {
      let ariaHidden = {};

        // ariaHidden = function () {
        //   let _myContainer = $('.my-container');
        //   let _ariaHidden = _myContainer.attr('aria-hidden');

        //   _ariaHidden !== 'true' ? _myContainer.attr('aria-hidden', 'true') : _myContainer.attr('aria-hidden', 'false');
        // }

        ariaHidden = function () {
          let _myContainer = $('.my-container');
          let _ariaHidden = _myContainer.attr('aria-hidden');

          if(_myContainer.parents().hasClass('my-drawer-area')){
            _ariaHidden !== 'true' ? _myContainer.attr('aria-hidden', 'true') : _myContainer.attr('aria-hidden', 'false');

            let _myContainer2 = $('.my-drawer-area .my-container');
            let _ariaHidden2 = _myContainer2.attr('aria-hidden');
            _ariaHidden2 !== 'false' ? _myContainer2.attr('aria-hidden', 'false') : _myContainer2.attr('aria-hidden', 'true');

          }
          else{
            _ariaHidden !== 'true' ? _myContainer.attr('aria-hidden', 'true') : _myContainer.attr('aria-hidden', 'false');
          }
        }

      return {
        ariaHidden: ariaHidden
      }
    }();

    /**
      *
      * @name: getDrawerArea()
      * @description : 우측 팝업 
      * @tag : <section class="my-drawer-area" data-id="" tabindex="0">
      * @url : /UI/components
      */

    /**
     * Drawer 메뉴 열기 (해당 DATA 아이디값)
     * myFunc.getDrawerArea.open('acco-drawer-1');

     * Drawer 메뉴 닫기 (열었던 버튼 혹은 링크의 아이디값)
     * myFunc.getDrawerArea.close('acco-drawer-1');
     */
     getDrawerArea = function () {
      let open = {}, 
        close = {};

      open = function (dataId) {
        $('.my-drawer-area').addClass('active').focus();

        // ARIA : aria-hidden
        myFunc.getMyContainer.ariaHidden();
      }

      close = function (dataId) {
        $('.my-drawer-area').removeClass('active');
        $(`#${dataId}`).focus();

        // ARIA : aria-hidden
        myFunc.getMyContainer.ariaHidden();
      }
      
      return {
        open: open,
        close: close
      }
    }();
  
    /**
      * 
      * @name: getSelectMenu()
      * @description : 하단 팝업
      * @tag : <div class="my-select-list-area">
      * @url : /UI/components
      */

    /**
     * 하단 메뉴 열기 (해당 버튼 data id값)
     * myFunc.getSelectMenu.open('acco-selectMenu-1');

     * 하단 메뉴 닫기 (해당 버튼 data id값)
     * myFunc.getSelectMenu.close('acco-selectMenu-1');
     */
    getSelectMenu = function () {
      let open = {}, 
        close = {};

      open = function (dataId) {
        if ( $('.my-select-list-area.active').length > 0 ) {
          // 열려있는 셀렉트 팝업 있는 경우
          $('[aria-labelledby="' + dataId + '"]').siblings('.my-select-list-area.active').addClass('prevSelect');
        }

        // 기관 선택 해상도 따라 리스트 노출 영역 반영
        row_group_list();

        $(`#${dataId}`).attr('aria-expanded', 'true');
        $('[aria-labelledby="' + dataId + '"]')
        .addClass('active');

        setTimeout(function () {
          $('[aria-labelledby="' + dataId + '"]').focus();
        }, 100);

        $('.overlay').addClass('active');
        $('body').addClass('overflow-hidden');

        // ARIA : aria-hidden
        myFunc.getMyContainer.ariaHidden();
      }

      close = function (dataId) {
        
        $(`#${dataId}`).attr('aria-expanded', 'false');
        $('[aria-labelledby="' + dataId + '"]').removeClass('active');
        
        if ( $('.my-select-list-area.active').length > 0 ) {
          // 열려있는 셀렉트 팝업 있는 경우
          $('.prevSelect').removeClass('prevSelect');
        }else {
          $('.my-select-list-area')
          .removeClass('active');

          $('.overlay').removeClass('active');
        }
      
        if (!$('.my-drawer-area').hasClass('active')) {
          $('body').removeClass('overflow-hidden');
        }

        $(`#${dataId}`).focus();

        // ARIA : aria-hidden
        myFunc.getMyContainer.ariaHidden();
      }

      return {
        open: open,
        close: close
      }
    }();

    /**
      * @name: getExpensesSwiper()
      * @description : swiperjs 라이브러리 사용
      * @tag : <div class="swiper-container myExpensesSwiper">
      * @url : CAR_001_0001
      */

    /**
     * 고정지출 분석 Swiper
     * myFunc.getMyExpensesSwiper.swiper();
     */
     getMyExpensesSwiper = function () {
      let swiper = {},
        mySwiper;

      swiper = function () {
        mySwiper = new Swiper(".myExpensesSwiper", {
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: false,
          },
          a11y: {
            prevSlideMessage: '이전 슬라이드',
            nextSlideMessage: '다음 슬라이드'
          },
        });
      }
      return {
        swiper: swiper
      }
    }();

    /**
      * @name: getExpensesSwiper()
      * @description : swiperjs 라이브러리 사용
      * @tag : <div class="swiper-container myExpensesBannerSwiper">
      * @url : CAR_001_0001
      */

    /**
     * 고정지출 배너 Swiper
     * myFunc.getMyExpensesBannerSwiper.swiper();
     */
     getMyExpensesBannerSwiper = function () {
      let swiper = {},
        mySwiper;

      swiper = function () {
        mySwiper = new Swiper(".myExpensesBannerSwiper", {
          loop: true,
          pagination: {
            el: '.expensesBanner .swiper-pagination',
            clickable: false,
          },
        });
      }
      return {
        swiper: swiper
      }
    }();

    /**
      * @name: getMyCarSwiper()
      * @description : swiperjs 라이브러리 사용
      * @tag : <div class="swiper-container myCarSwiper">
      * @url : CAR_001_0001
      */

    /**
     * 자동차금융 Swiper
     * myFunc.getMyCarSwiper.swiper();
     */
     getMyCarSwiper = function () {
      let swiper = {},
        slideTo = {},
        mySwiper;

      swiper = function () {
        mySwiper = new Swiper(".myCarSwiper", {
          loop: true,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: false,
          },
          a11y: {
            prevSlideMessage: '이전 슬라이드',
            nextSlideMessage: '다음 슬라이드'
          },
        });
      }

      slideTo = function (num) {
        mySwiper.slideTo(num);
      }

      return {
        swiper: swiper,
        slideTo: slideTo
      }
    }();

    /**
      * @name: getMyDataSwiper()
      * @description : swiperjs 라이브러리 사용
      * @tag : <div class="swiper-area">
      * @url : CON_003_0001
      */

    /**
     * 지출분석 Swiper
     * myFunc.getMyDataSwiper.swiper();
     * myFunc.getMyDataSwiper.slideTo(3);
     */
    getMyDataSwiper = function () {
      let swiper = {},
        slideTo = {},
        mySwiper;

      swiper = function () {
        mySwiper = new Swiper(".myDataSwiper", {
          loop: true,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          a11y: {
            prevSlideMessage: '이전 슬라이드',
            nextSlideMessage: '다음 슬라이드'
          },
        });
      }

      slideTo = function (num) {
        mySwiper.slideTo(num);
      }

      return {
        swiper: swiper,
        slideTo: slideTo
      }
    }();

    /**
      * @name: getMyDataAutoSwiper()
      * @description : swiperjs 라이브러리 사용
      * @tag : <div class="swiper-area">
      * @url : CLC_006_0001
      */

    /**
     *  Swiper
     * myFunc.getMyDataAutoSwiper.swiper();
     */
    getMyDataAutoSwiper = function () {
      let swiper = {},
        mySwiper;

      swiper = function () {
        mySwiper = new Swiper(".myDataAutoSwiper", {
          loop: true,
          slidesPerView: 'auto',
          autoplay: {
            delay: 15000,
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: false,
          },
        });
      }

      return {
        swiper: swiper
      }
    }();

    /**
      * @name: getExampleSwiper()
      * @description : swiperjs 라이브러리 사용
      * @tag : <div class="swiper-area">
      * @url : CON_001_0001_new.html
      */

    /**
     *  Swiper
     * myFunc.getExampleSwiper.swiper();
     */
     getExampleSwiper = function () {
      let swiper = {},
        mySwiper;

      swiper = function () {
        mySwiper = new Swiper(".myExampleSwiper", {
          loop: true,
          slidesPerView: 2.9,
          spaceBetween:10,
        });
      }

      return {
        swiper: swiper
      }
    }();

    /**
     * 미분류 카테고리 Swiper
     * myFunc.getUnlabeledSwiper.swiper();
     * myFunc.getMyDataSwiper.slideTo(3);
     * myFunc.getUnlabeledSwiper.update();
     * myFunc.getUnlabeledSwiper.disable();
     * myFunc.getUnlabeledSwiper.enable();
     * myFunc.getUnlabeledSwiper.slideChange(fn);
     * 
     */
    getUnlabeledSwiper = function () {
      let swiper = {},
        slideTo = {},
        disable = {},
        enable = {},
        slideChange = {},
        update = {},
        mySwiper;

      swiper = function () {
        mySwiper = new Swiper(".myDataSwiper", {
          loop: false,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        });
      }

      // 슬라이드 후 개발에서 작업한 function 받아서 실행
      slideChange = function(fn) {
        mySwiper.on('slideChange', function() {
          fn();
        });
      }

      slideTo = function (num) {
        mySwiper.slideTo(num);
      }

      disable = function () {
        mySwiper.disable();
      }

      enable = function () {
        mySwiper.enable();
      }
      
      update = function() {
        mySwiper.update();
      }

      return {
        swiper: swiper,
        slideTo: slideTo,
        disable: disable,
        enable: enable,
        slideChange : slideChange,
        update : update,
        mySwiper
      }
    }();

    /**
      * @name: getMyDataLoading()
      * @description : 데이터 로딩 생성 후 삭제
      * @tag : <div class="my-assets-loading"><i></i></div>
      * @url : AST_001_0001
      */
    /**
     * 해당 데이터 영역 아이디값 적용
     * myFunc.getMyDataLoading.stateStart('아이디값') // 로딩 중
     * myFunc.getMyDataLoading.stateEnd('아이디값', 'success') // 로딩 완료
     * myFunc.getMyDataLoading.stateEnd('아이디값', 'error') // 로딩 실패
     */
    getMyDataLoading = function () {
      return {
        stateStart: function (id) {
          $(`#${id}`)
            .find('.my-assets-loading')
            .show()
            .removeClass('end')
            .addClass('start');
        },

        stateEnd: function (id, state) {
          let _target = $(`#${id}`).find('.my-assets-loading');
          
          let promise = new Promise(function (resolve, reject) {

            _target.attr({
              'aria-label':'데이터 로딩중', 
              'aria-hidden': 'false'
            });

            setTimeout(function () {
              resolve(state === 'success');
            }, 3000);
          });

          promise
            .then(function (state) {
              let startDelay = _target.removeClass('start').delay(300);
              
              if (state) {
                startDelay.addClass('end');
                _target.attr({
                  'aria-label':'데이터 성공', 
                  'aria-hidden': 'true'
                });
              } else {
                startDelay.addClass('error');
                _target.attr({
                  'aria-label':'데이터 에러', 
                  'aria-hidden': 'false'
                });
              }

              return state;
            })
            .then(function (state) {
              setTimeout(function () {
                if (state) _target.fadeOut(100);
              }, 500);
            });
        }
      }
    }();

    /**
      * @name: getRePaint()
      * @description : 비동기 DOM 생성 시 DOM RePaint
      */

    /**
     * initUI : RePaint
     * myFunc.getRePaint()
     * 비동기 렌더링 후 initUI 재실행
     * 페이지 시작부터 RePaint 실행 금지
     */
    getRePaint = function () {
      return setTimeout(function () {
        $(function () {
          initUI.setup(undefined);
        });
      }, 100);
    };

    /**
      * @name: getDataCounter()
      * @description : 내 소비 한눈에 데이터 카운터
      * @tag : 
      * @url : CON_001_0001
      */

    /**
     * aquaPercent : 물고기 차트 데이터 인자값
     * myFunc.getDataCounter(aquaPercent) 
     */
    getDataCounter = function (aquaPercent) {

      // 업종별 소비
      let chart_column_area = $('.chart-column-area');
      chart_column_area
        .find('.column .counter')
        .counterUp({ 
          delay: 10, 
          time: 300 
        });

      // 가장 높은 값 구하기
      let xArray = [];
      let xArea = chart_column_area.find('.column').each(function (index, item) {
        let percent = $(item).find('.bar').data('percent');
        xArray.push(percent);
      });
      let maxValue = Math.max.apply(null, xArray.map(function (data) {
        return data;
      }));

      chart_column_area.waypoint({
        handler: function() {
          
          chart_column_area.find('.column').each(function (index, item) {
            let graph = $(item).find('.bar');
            let value = (graph.data('percent') / maxValue) * 66;

            graph.animate({ 
              height: value + "px" 
            }, "easeOutBounce", function () {
              $(this).addClass('active');
            });
          })
          
        },
        offset: '70%'
      });

      // 정기지출
      let chart_circle = $('.chart-circle');
      chart_circle
        .find('.counter')
        .counterUp({ 
          delay: 10, 
          time: 500 
        });
      chart_circle.waypoint({
        handler: function() {
          let circle = $('.circle');
          circle.attr('stroke-dasharray', '' + circle.data('percent') + ', 100').addClass('active');
        },
        offset: '90%'
      });

      // 할부
      let barArea = $('.my-bar-area');
      let pecentage = barArea.data('percent');
      barArea.waypoint({
        handler: function() {
          barArea.find('.bar').css('width',`${pecentage}%`);
        },
        offset: '90%'
      });

      // 예산대비 소비내역
      // let chart_aqua = $('.chart-aqua');
      // chart_aqua
      //   .find('.counter')
      //   .counterUp({ 
      //     delay: 10, 
      //     time: 500 
      //   });

        
      $('.aqua-percent').waypoint({
        handler: function() {
          $('.aqua').animate({ 
            height: (aquaPercent ? aquaPercent : 0) + "%" 
          }, "slow");

          this.destroy();
        },
        offset: '100%'
      });
    };

    /**
      * @name: getCardPlate()
      * @description : 카드 이미지 세로형 > 가로형으로 회전 시킴
      * @tag : <span class="ic-card-plate">
      * @url : AST_003_0001.html, AST_003_0004.html, AST_003_0007.html, AST_003_0009.html, AST_003_0010.html, AST_003_0014
      */

    /**
     * myFunc.getCardPlate();
     */
    getCardPlate = function () {
      $(document).ready(function () {
        let cardImg = $('.ic-card-plate img');

        // 카드 이미지에 파라미터 추가 브라우저 캐시 제거
        cardImg.attr('src', function () { 
          return $(this).attr('src') + "?ver=" + Math.random();
        });

        cardImg.each(function (index, el) {
          $(this).load(function () {
            let _this = $(this);
            if (_this.height() > _this.width()) _this.addClass('rotate90');
            else _this.addClass('rotate00');
          });
        });
      });
    };

    /**
      * @name: getCardPlate02()
      * @description : 카드 이미지 가로형 > 세로형으로 회전 시킴
      * @tag : <span class="ic-card-plate">
      * @url : CON_001_0001_new02
      */

    /**
     * myFunc.getCardPlate02();
     */
     getCardPlate02 = function () {
      $(document).ready(function () {
        let cardImg = $('.ic-card-plate02 img');

        // 카드 이미지에 파라미터 추가 브라우저 캐시 제거
        cardImg.attr('src', function () { 
          return $(this).attr('src') + "?ver=" + Math.random();
        });

        cardImg.each(function (index, el) {
          $(this).load(function () {
            let _this = $(this);
            if (_this.width() > _this.height()) _this.addClass('rotate90');
            else _this.addClass('rotate00');
          });
        });
      });
    };

    /**
      * @name: getTodayScrollTop()
      * @description : 오늘 날짜로 위치 이동
      * @tag : <li class="today-line-start">
      * @url : CON_004_0002
      */

    /**
     * myFunc.getTodayScrollTop();
     */
    getTodayScrollTop = function () {
      let todayPositon = $('.today-line-start').offset().top - 240;
      setTimeout(function () {
        $('html').animate({ scrollTop: `${todayPositon}px` }, 400);
      }, 600)
    };

    /**
      * @name: getCalendarUnfold()
      * @description : 가계부 달력 UI 접힘 컨트롤, 이전 / 다음 달 클릭 이벤트
      * @tag : <div class="my-2-calendar-area">
      * @url :CON_002_0001
      */

    /**
     * myFunc.getCalendarUnfold();
     */
    getCalendarUnfold = function () {
      let calendar = $('.my-2-calendar-area');
      calendar.removeClass('folded');

      $('.my-btn-cal')
        .removeClass('active')
        .closest('tr')
        .removeClass('selectedWeek')
        .slideDown(100);
        
      $('html, body').animate({ scrollTop: 0 }, 100);
    };

    /**
      * @name: getMyMainControl()
      * @description : 메인 스크롤에 따른 애니메이션
      * @tag : <div class="my-main-container"></div>
      * @url : MAN_001_0001
      */

    /**
     * myFunc.getMyMainControl();
     */
    getMyMainControl = function () {
      let mainContainer = $('.my-main-container'),
        animatedBox = mainContainer.find('.mainAnimate'),
        totalBar = $('.total-equity-rate'),
        mainHeader = $('.my-main-header');
      
      // 스크롤에 따른 메인 헤더 스타일 클래스 추가
      $(window).on('scroll', function() {
        if ( $(window).scrollTop() > mainHeader.height()) {
          mainHeader.addClass('scrolled');
        } else {
          mainHeader.removeClass('scrolled');
        }
      });
      
      // 신용점수 순위 카운터 
      if ( !$('.my-main-credit-score.paid.loading') ){
        $('.my-main-credit-score.paid')
        .find('.counter')
        .counterUp({ 
          delay: 10, 
          time: 300 
        });
      } 

      // 현금흐름, 신용점수 애니메이션
      animatedBox.each(function(index, item) {
        $(item).waypoint({
          handler: function() {
            $(item).addClass('active');
          },
          offset: '90%'
        });
      });

      // 순자산 바 차트 애니메이션
      totalBar.waypoint({
        handler: function() {
          totalBar.find('.bar').each(function (index, item) {
            let bar = $(item);
            let width = (bar.closest('li').width() - 150) * (bar.data('percent') * 0.01);
            bar.animate({ 
              width: width
            }, "easeOutBack");
          });
        },
        offset: '90%'
      });
    };

    /**
      * @name: getMyMainLoading()
      * @description : 메인 로딩
      * @tag : <div class="my-main-loading">
      * @url : MAN_001_0001
      */

    /**
     * myFunc.getMyMainLoading.loadingStart('my-main-loading');
     * myFunc.getMyMainLoading.loadingEnd('해당영역고유클래스명');
     */
    getMyMainLoading = function() {
      let loadingStart = {},
          loadingEnd = {};
      
      loadingStart = function(_el) {
        $(`.${_el}`).addClass('loading');
      }

      loadingEnd = function(_el) {
        setTimeout(function(){
          $(`.${_el}`).removeClass('loading');
        }, 500);
      }
      
      return {
        loadingStart: loadingStart,
        loadingEnd: loadingEnd
      }
    }();

    /**
      * @name: getMyCanvas()
      * @description : 캔버스 애니메이션 영역
      * @tag : <div class="my-canvas-area">
      * @url : CON_001_0003 / CON_001_0005
      */

    /**
     * 1. 한페이지내 여러 canvas일 경우 개별 스크립트 수정 해당 my-canvas-area의 id와 매칭
     * (페이지 내에 같은 AdobeAn id가 있으면 실행되지 않음)
     * 파일 마지막라인 AdobeAn변수 순서대로 숫자 추가 (AdobeAn1 부터) 
     * CON_001_0005화면은 개발페이지에서는 CON_001_0003과 한페이지에서 호출하여 AdobeAn4부터 시작
     * 
     * 2. 해당 캔버스 파일명과 cavavs id 매칭 확인
     */
    getMyCanvas = function () {
      let init = {}, 
          play = {},
          stop = {},
          el,
          padding,
          AdobeAn,
          fnStartAnimation;
      
      // 캔버스 id 배열에 담기
      let elArray = [];

      init = function(_el, _index) {
        el = _el;
        AdobeAn = window[_el.id]; // 2개 이상 캔버스 사용을 위한 아이디 할당
        padding = window.outerWidth - el.offsetWidth; // 캔버스 영역 사이즈 체크

        // Adobe Animate에서 구현한 코드
        // ------------------------------------------------------
        let canvasId = el.querySelector('canvas').id;
        let dataId = el.querySelector('canvas').dataset.id;
        let canvas = document.getElementById(canvasId);
        let overlay = el.querySelector('.canvas-overlay');
        
        let comp = AdobeAn.getComposition(dataId);
        let lib = comp.getLibrary();
        let loader = new createjs.LoadQueue(false);

        // 이미지 경로 설정
        let imageSrc = lib.properties.manifest;
        imageSrc.forEach(function(imgArr){
          imgArr.src = imgArr.src.replace("images", "/images/md/canvas");
        });

        loader.addEventListener("fileload", function(evt){
          handleFileLoad(evt,comp)
        });
        loader.addEventListener("complete", function(evt){
          handleComplete(evt,comp)
        });
        loader.loadManifest(lib.properties.manifest);

        function handleFileLoad(evt, comp) {
          let images = comp.getImages();  
          if (evt && (evt.item.type == "image")) { 
            images[evt.item.id] = evt.result; 
          }
        }

        function handleComplete(evt, comp) {
          // 이 함수는 내용에 관계없이 항상 호출
          // 토큰 create_stage에 생성된 후 "stage" 변수를 사용
          let lib = comp.getLibrary();
          let ss = comp.getSpriteSheet();
          let queue = evt.target;
          let ssMetadata = lib.ssMetadata;
          for(let i=0; i<ssMetadata.length; i++) {
            ss[ssMetadata[i].name] = new createjs.SpriteSheet( {
              "images": [queue.getResult(ssMetadata[i].name)], 
              "frames": ssMetadata[i].frames
            })
          }
    
          let exportRoot = new lib[canvasId];
          let stage = new lib.Stage(canvas);

          elArray[_index] = exportRoot;

          // "tick" 이벤트 리스너를 등록
          fnStartAnimation = function() {
            stage.addChild(exportRoot);
            createjs.Ticker.framerate = lib.properties.fps;
            createjs.Ticker.addEventListener("tick", stage);
          }     
          // hidpi 화면과 반응형 크기 조정을 지원하는 코드
          makeResponsive(true,'both',true,1,[canvas,el,overlay], stage, padding);
          AdobeAn.compositionLoaded(lib.properties.id);
          fnStartAnimation();
        }

        function makeResponsive(isResp, respDim, isScale, scaleType, domContainers, stage, padding) {
          var lastW, lastH, lastS=1;		
          window.addEventListener('resize', resizeCanvas);	
          resizeCanvas();	
          function resizeCanvas() {			
            var w = lib.properties.width, h = lib.properties.height;			
            var iw = window.innerWidth - padding, ih=window.innerHeight;			
            var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
            if(isResp) {                
              if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
                sRatio = lastS;                
              }				
              else if(!isScale) {					
                if(iw<w || ih<h)						
                  sRatio = Math.min(xRatio, yRatio);				
              }				
              else if(scaleType==1) {					
                sRatio = Math.min(xRatio, yRatio);				
              }				
              else if(scaleType==2) {					
                sRatio = Math.max(xRatio, yRatio);				
              }			
            }
            domContainers[0].width = w * pRatio * sRatio;			
            domContainers[0].height = h * pRatio * sRatio;
            domContainers.forEach(function(container) {				
              container.style.width = w * sRatio + 'px';				
              container.style.height = h * sRatio + 'px';			
            });
            stage.scaleX = pRatio*sRatio;			
            stage.scaleY = pRatio*sRatio;
            lastW = iw; lastH = ih; lastS = sRatio;            
            stage.tickOnUpdate = false;            
            stage.update();            
            stage.tickOnUpdate = true;		
          }
        }

        // ------------------------------------------------------s
      }

      play = function(index) {
        elArray[index].gotoAndPlay(1);
      }

      stop = function(index) {
        elArray[index].gotoAndStop(0);
      }

      return {
        init: init,
        play: play,
        stop: stop,
        elArray
      }
    }();

    /**
      * @name: getChartLineCss()
      * @description : 
      * @tag : Css Liine Chart
      * @url :
      */
    getChartLineCss = function (dataSet_id) {
      let el = $(`#${dataSet_id} .chart-line-css`);

      el.each(function() {
        var widgetWidth = $(this).width();
        var widgetHeight = $(this).height();
        var totalPoints = $(this).data('dp-total');
        
        var dpValueList = el.find('.data-point').map(function () {
          return $(this).data('value');
        }).get();
        
        var maxDpValue = Math.max.apply(null, dpValueList);
        var prevX = -1;
        var prevY = -1;
       
    
        el.find('.data-point').each(function (_index, elm) {
          var dataVal = $(this).data('value');
          
          if (dataSet_id !== 'AST-001-0001-1' && dataSet_id !== 'CON-005-0002-1') {
            // 상대값 계산 (해당 데이터값 / 가장 높은 데이터값) * 차트 높이 값
            var y = (dataVal / maxDpValue) * (widgetHeight);
          } else {
            // 데이터값 그대로 사용
            var y = dataVal;
          }
          
          var x = _index * (widgetWidth / (totalPoints - 1));

          $(elm).css({
            'bottom': `${y - 3.25}px`,
            'left': `${x - 4.75}px`
          });
  
          $(elm).closest('li').find('.data-label').css({
            'bottom': `${y}px`,
            'left': `${x}px`
          }).text(dpValueList[_index] + '%');

          // bal 값 전부 0일 때
          if (isNaN(y)) y = 55;
  
          $(elm).closest('li').find('.line-segment').css({
            'bottom': `${y}px`,
            'left': `${x}px`
          });
    
          if (prevX !== -1) {
            var leg = y - prevY;
            var run = x - prevX;

            // bal 값 전부 0일 때
            if (isNaN(leg)) leg = 0;
            
            var hypotenuse = Math.sqrt(Math.pow(leg, 2) + Math.pow(run, 2));
            var radians = Math.asin(leg / hypotenuse);
            var angle = radians * (180 / Math.PI);
              
            $(elm).closest('li').prev().find('.line-segment').css({
              'width': `${hypotenuse * 1}px`,
              'transform': `rotate(${angle * -1}deg)`,
            });
          }
  
          prevX = x;
          prevY = y;
        });
      });
    };

    /**
      * @name: getGoldAnimate() 
      * @description : 황금동전 애니메이션
      * @tag : <button class="my-gold-btn">
      * @url : EVT_001_0003
      */
    getGoldAnimate = function () {
      let winW = ($(window).width() / 2);
      let goldSize = 10; //황금동전 개수 설정
      let area = $('.my-2-gold-event-area').find('.img-wallet');

      animateGold();

      // 지갑 클릭 시 황금동전 애니메이션 추가
      area.off().on('click', function() {
        if ( $(this).find('.gold-group').length > 1 ) {
          return;
        } else {
          animateGold();
        }
      }); 

      // 황금동전 개별 사이즈, 기울기, 위치 랜덤 설정
      function setSizePosition (){
        let size = Math.floor(Math.random() * (40 - 25 + 1)) + 25;
        let skew = Math.floor(Math.random() * 31) - 20;
        let posX = Math.floor(Math.random() * (winW - (-winW) + 1)) + (-winW);
        
        return [size, skew, posX];
      }

      function animateGold () {
        let length = $('.gold-group').length;
        $('<div class="gold-group"></div>').appendTo(area); // 황금동전 그룹 추가

        let el_gold = new Array(goldSize).join('<span class="gold-y"><span class="my-gold"></span></span>');

        $('.gold-group')
          .eq(length)
          .append(el_gold)
          .find('.my-gold')
          .each(function (index, el) {
            let pos = setSizePosition();

            $(el)
              .css({
                width: pos[0],
                height: pos[0],
                'transform': `skew(${pos[1]}deg)`
              });

            setTimeout(function () {
              $(el).css({ left: pos[2] });
            }, 60);

            // 애니메이션 완료 후 추가 된 그룹 삭제
            setTimeout(function () {
              $(el)
                .attr('style','')
                .parents('.gold-group').remove();
            }, 1400);
          });
      }
    };



    /**
      * @name: getMoreScroll()
      * @description : 이용약관 계속 보기 스크롤
      * @tag : <div class="more-scroll-btn"></div>
      * @url : SVC_003_0008
      */
    getMoreScroll = function () {
      let page = {},
          open = {}, 
          close = {};

      //영철차장님 코드
      // page = function () {
      //   let _container = $('.my-container');   
      //   let _windowHeight = $(window).height();   
      //   let _height = _container.find('.container-scroll-area').innerHeight();
        
      //   _container.addClass('padding-none');

      //   $(window).on('scroll', function (e) {
      //     let _scrollTop = e.currentTarget.scrollY;
      //     //console.log((_height - _windowHeight), _scrollTop, _windowHeight, _height)
      //     if ((_height - _windowHeight) - 100 <= _scrollTop) {
      //       _container.find('.more-scroll-up').addClass('open');
      //       _container.find('.more-scroll-down').addClass('close');
      //     }
      //   });

      //   let _remain = _height;
      //   $('.more-scroll-down').off().on('click', function (e) {
      //     let _scrollTop = $('html').scrollTop();
      //     //console.log('_remain : ' + _remain, '_windowHeight : '+ _windowHeight, '_scrollTop : '+_scrollTop);
      //     if(_height > _windowHeight){            
      //       if (_remain >= _windowHeight) {
      //         $('html').animate({ scrollTop: _scrollTop + _windowHeight - 120}, 1100);
      //         _remain = _remain - _windowHeight + 120;
      //       }
      //       else{
      //         $('html').animate({ scrollTop: _height },  1100 );
      //       }
      //     }
      //   });
      // }

      page = function () {
        let _container = $('.my-container');   
        let _windowHeight = $(window).height();   
        let _height = _container.find('.container-scroll-area').innerHeight();

        //_container.addClass('padding-none');

        $(window).on('scroll', function (e) {
          let _scrollTop = e.currentTarget.scrollY;
          let _scrollHeight = _container.prop('scrollHeight');
          _height = _container.find('.container-scroll-area').innerHeight();
          console.log('_windowHeight : ' + _windowHeight);
          //if ((_scrollTop + _windowHeight) + 80 >= _height) {
          if ((_scrollTop + _windowHeight) - 80 >= _height) {
            _container.find('.more-scroll-up').addClass('open');
            _container.find('.more-scroll-down').addClass('close');
          }
        });

        $('.more-scroll-down').off().on('click', function (e) {
          let _scrollTop = $('html').scrollTop();
          _height = _container.find('.container-scroll-area').innerHeight();
          var $this = $(this);
          if(_height > _windowHeight && !$this.hasClass('scrolling')){            
            if (_height - (_scrollTop + _windowHeight) + 120 >= _windowHeight) {
              $this.addClass('scrolling');
              $('html').animate({ scrollTop: _scrollTop + _windowHeight - 120}, function(){
                $this.removeClass('scrolling');
              });
            }
            else{
              $this.addClass('scrolling');
              $('html').animate({ scrollTop: _height }, function(){
                $this.removeClass('scrolling');
              });
            }
          }
        });
      }


      open = function (dataId, topX) {
        let _dataId = $(`#${dataId}`);
        let _container = _dataId.find('.my-container');
        
        //_container.addClass('padding-none');

        setTimeout(function () {
          // 아코디언 클릭 시 스크롤 상단 이동 중지
          if (topX !== 'topX') _container.animate({ scrollTop: 0 }, 0);
        }, 20)
     
        let _windowHeight = $(window).height();
        let _height = _container.find('.container-scroll-area').innerHeight();
        
        _container.off().on('scroll', function (e) {
          let _scrollTop = e.currentTarget.scrollTop;
          _height = _container.find('.container-scroll-area').innerHeight();
          //if ((_height - _windowHeight) - 100 <= _scrollTop) {
          if ((_height - _windowHeight) <= _scrollTop) {
            _dataId.find('.more-scroll-up').addClass('open');
            _dataId.find('.more-scroll-down').addClass('close');
          }

          let _nav = $('.my-nav-case-local');
          if (_scrollTop > _nav.height()) {
            _nav.addClass('scrolled');
          } else {
            _nav.removeClass('scrolled');
          }
        });

        $('.more-scroll-down').off().on('click', function (e) {
          let _scrollTop = _container.scrollTop();
          _height = _container.find('.container-scroll-area').innerHeight();
          var $this = $(this);
          if(_height > _windowHeight && !$this.hasClass('scrolling')){            
            
            if (_height - (_scrollTop + _windowHeight) + 120 >= _windowHeight) {
              $this.addClass('scrolling');
              _container.animate({ scrollTop: _scrollTop + _windowHeight - 120 }, function(){
                $this.removeClass('scrolling');
              });
            }
            else{
              $this.addClass('scrolling');
              _container.animate({ scrollTop: _height }, function(){
                $this.removeClass('scrolling');
              });
            }
          }
        });
      }

      close = function (dataId) {
        let _dataId = $(`#${dataId}`);
        let _container = _dataId.find('.my-container');

        _container.removeClass('padding-none');
        
        _container.animate({ scrollTop: 0 }, 0, function () {
          _dataId.find('.more-scroll-up').removeClass('open');
          _dataId.find('.more-scroll-down').removeClass('close');
        });
      }
      
      return {
        page: page,
        open: open,
        close: close
      }
    }();


    /**
      * @name: getMyRankingSwiper()
      * @description : swiperjs 라이브러리 사용
      * @tag : <div class="swiper-area">
      * @url : CLC_006_0001
      */

    /**
     *  Swiper
     * myFunc.getMyRankingSwiper.swiper();
     */
     getMyRankingSwiper = function () {
      let swiper = {},
        mySwiper;

      swiper = function () {
        mySwiper = new Swiper(".myRankingSwiper", {
          loop: true,
          slidesPerView: 'auto',
          autoplay: {
            delay: 3000,
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: false,
          },
        });
      }

      return {
        swiper: swiper
      }
    }();


    /**
      * @name: getMyRankingSwiper()
      * @description : swiperjs 라이브러리 사용
      * @tag : <div class="swiper-area">
      * @url : CLC_006_0001
      */

    /**
     *  Swiper
     * myFunc.getMyMallSwiper.swiper();
     */
     getMyMallSwiper = function () {
      let swiper = {},
        mySwiper;

      swiper = function () {
        mySwiper = new Swiper(".myMallSwiper", {
          loop: true,
          slidesPerView: 'auto',
          autoplay: {
            delay: 3000,
          },
          pagination: {
            el: '.swiper-pagination',
            type : 'fraction'
          },
        });
        var sw = 0;
        $('.swiper-pause').click(function(){
            if(sw==0){
                $('.swiper-pause').addClass('on').find('.blind').text('재생');
                mySwiper.autoplay.stop();
                sw = 1;
            }else{
                $('.swiper-pause').removeClass('on').find('.blind').text('일시정지');;
                mySwiper.autoplay.start();
                sw = 0;
            }
        });
      }

      return {
        swiper: swiper
      }
    }();

    /**
      * @name: getReportSwiper()
      * @description : swiperjs 라이브러리 사용
      * @tag : <div class="swiper-area">
      * @url : REP_001_0001
      */

    /**
     *  Swiper
     * myFunc.getReportSwiper.swiper();
     */
    getReportSwiper = function () {
      let swiper = {},
        mySwiper2,
        mySwiper;

      swiper = function (e) {
        mySwiper = new Swiper(".reportSwiper", {
          slidesPerView: 1.665,
          breakpoints:{
            428:{
              slidesPerView:2.02,
            },
            414:{
              slidesPerView:2,
            },
            390:{
              slidesPerView:1.8,
            },
            375:{
              slidesPerView:1.75,
            }
          },
          spaceBetween: 16,
          centeredSlides: false,
          observer: true,
          observeParents: true,
          resistance : true,
          slideToClickedSlide : false,
          freeMode: {
            enabled: true,
            minimumVelocity : 0.02,
            momentum : 1,
            momentumBounce : true,
            momentumBounceRatio : 1,
            momentumRatio : 1,
            momentumVelocityRatio : 1,
            sticky: true,
          },
          pagination: {   //페이징 사용자 설정
            el: ".pagination_bullet",   //페이징 태그 클래스 설정 
            clickable: true,    //버튼 클릭 여부
            type : 'bullets',   //페이징 타입 설정(종류: bullets, fraction, progressbar)  
            clickable:false, 
            // Bullet Numbering 설정
            renderBullet: function (index, className) {
              return '<span class="' + className + '">' + (index) + "</span>";
            },
          },
        });
        mySwiper2 = new Swiper(".reportSwiper", {
          slidesPerView: 1.665,
          breakpoints:{
            428:{
              slidesPerView:2.02,
            },
            414:{
              slidesPerView:2,
            },
            390:{
              slidesPerView:1.8,
            },
            375:{
              slidesPerView:1.75,
            }
          },
          spaceBetween: 16,
          centeredSlides: false,
          observer: true,
          observeParents: true,
          resistance : true,
          slideToClickedSlide : false,
          freeMode: {
            enabled: true,
            minimumVelocity : 0.02,
            momentum : 1,
            momentumBounce : true,
            momentumBounceRatio : 1,
            momentumRatio : 1,
            momentumVelocityRatio : 1,
            sticky: true,
          },
          pagination: {
            el: '.pagination_progress',
            type : 'progressbar',
            clickable:false,
          },
        });
        mySwiper.controller.control = mySwiper2;
      }

      return {
        swiper: swiper
      }
    }();
    /**
      * @name: getReportCardBackScroll()
      * @description : 카드뒷면 스크롤버튼 활성화
      * @tag : <div class="flip-card-back-box-btn">
      * @url : REP_001_0001
      */
     getReportCardBackScroll = function () {
      var box_boby_height = $('.my-dialog-content.active .flip-card-back-box-wrap').height();     //REP_001_0002_12
      if(box_boby_height < 1){
        var box_boby_height = $('.my-dialog-content.active .flip-card-back-box-boby').height() + $('.my-dialog-content.active .flip-card-back-box-foot').height();
      }
      var box_height = $('.my-dialog-content.active .flip-card-back-box').height();
      var box_scrollTop = $('.my-dialog-content.active .flip-card-back-box').scrollTop();

      if (box_boby_height <= box_scrollTop + box_height) {
        $('.my-dialog-content.active .flip-card-back-box-btn').addClass("be-active");
        $('.my-dialog-content.active .my-data-open-area-bg').addClass("be-active");
      } else {
        $('.my-dialog-content.active .flip-card-back-box-btn').removeClass("be-active");
        $('.my-dialog-content.active .my-data-open-area-bg').removeClass("be-active");
      }       
      //console.log(box_boby_height + " / " + box_scrollTop + " / " + box_height)

    };

    /**
      * @name: getReportCardBackScrollBottom()
      * @description : 카드뒷면 스크롤버튼 활성화
      * @tag : <div class="flip-card-back-box-btn">
      * @url : REP_001_0001
      */
    getReportCardBackScrollBottom = function () {
      $('.flip-card-back-box').animate({ scrollTop:  $('.flip-card-back-box').scrollTop() + 300 }, 400);
    };
    /**
      * @name: 
      * @description : 신용정보 조회 체크박스 선택
      * @tag : 
      * @url : CIA_003_0003_1
      */
     $(function(){
      //체크박스 전체선택
      $('#checkbox').on('click',function(){
        $('.each-agree').prop('checked',$(this).is(':checked'))
      })
      //체크박스 개별선택
      $('.my-terms-select').on('click', '.each-agree',function(){
        var is_true = true;
        $('.each-agree').each(function(){
           is_true = is_true && $(this).is(':checked')
        })
        $('#checkbox').prop('checked',is_true)
      })
    })
    return {
			modal: modal,
			getMyContainer: getMyContainer,
			getDrawerArea: getDrawerArea,
			getSelectMenu: getSelectMenu,
			getMyExpensesSwiper: getMyExpensesSwiper,
			getMyExpensesBannerSwiper: getMyExpensesBannerSwiper,
			getMyCarSwiper: getMyCarSwiper,
			getMyDataSwiper: getMyDataSwiper,
			getMyDataAutoSwiper: getMyDataAutoSwiper,
      getMyRankingSwiper: getMyRankingSwiper,
      getMyMallSwiper: getMyMallSwiper,
      getExampleSwiper: getExampleSwiper,
			getMyDataLoading: getMyDataLoading,
			getRePaint: getRePaint,
			getDataCounter: getDataCounter,
			getCardPlate: getCardPlate,
      getCardPlate02: getCardPlate02,
			getTodayScrollTop: getTodayScrollTop,
            getUnlabeledSwiper: getUnlabeledSwiper,
            getCalendarUnfold: getCalendarUnfold,
            getMyMainControl: getMyMainControl,
            getMyMainLoading: getMyMainLoading,
            getMyCanvas: getMyCanvas,
            getChartLineCss: getChartLineCss,
            getGoldAnimate: getGoldAnimate,
            getMoreScroll: getMoreScroll,
            getReportSwiper: getReportSwiper,
            getReportCardBackScroll : getReportCardBackScroll,
            getReportCardBackScrollBottom : getReportCardBackScrollBottom
		}
  }();

}(jQuery);