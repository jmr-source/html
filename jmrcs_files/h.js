(function(){var h={},mt={},c={id:"110fc9b2e1cae4d110b7959ee4f27e3b",dm:["51cto.com"],js:"tongji.baidu.com/hm-web/js/",etrk:[],icon:'/hmt/icon/21|gif|20|20',ctrk:true,align:1,nv:-1,vdur:1800000,age:31536000000,rec:0,rp:[],trust:0,vcard:0,qiao:0,lxb:0,conv:0,med:0,cvcc:'',cvcf:[],apps:''};var q=void 0,r=!0,s=null,w=!1;mt.h={};mt.h.T=/msie (\d+\.\d+)/i.test(navigator.userAgent);mt.h.Ga=/msie (\d+\.\d+)/i.test(navigator.userAgent)?document.documentMode||+RegExp.$1:q;mt.h.cookieEnabled=navigator.cookieEnabled;mt.h.javaEnabled=navigator.javaEnabled();mt.h.language=navigator.language||navigator.browserLanguage||navigator.systemLanguage||navigator.userLanguage||"";mt.h.Ja=(window.screen.width||0)+"x"+(window.screen.height||0);mt.h.colorDepth=window.screen.colorDepth||0;mt.cookie={};
mt.cookie.set=function(a,d,e){var b;e.I&&(b=new Date,b.setTime(b.getTime()+e.I));document.cookie=a+"="+d+(e.domain?"; domain="+e.domain:"")+(e.path?"; path="+e.path:"")+(b?"; expires="+b.toGMTString():"")+(e.Ua?"; secure":"")};mt.cookie.get=function(a){return(a=RegExp("(^| )"+a+"=([^;]*)(;|$)").exec(document.cookie))?a[2]:s};mt.m={};mt.m.ra=function(a){return document.getElementById(a)};mt.m.sa=function(a){var d;for(d="A";(a=a.parentNode)&&1==a.nodeType;)if(a.tagName==d)return a;return s};
(mt.m.W=function(){function a(){if(!a.B){a.B=r;for(var d=0,e=b.length;d<e;d++)b[d]()}}function d(){try{document.documentElement.doScroll("left")}catch(b){setTimeout(d,1);return}a()}var e=w,b=[],l;document.addEventListener?l=function(){document.removeEventListener("DOMContentLoaded",l,w);a()}:document.attachEvent&&(l=function(){"complete"===document.readyState&&(document.detachEvent("onreadystatechange",l),a())});(function(){if(!e)if(e=r,"complete"===document.readyState)a.B=r;else if(document.addEventListener)document.addEventListener("DOMContentLoaded",
l,w),window.addEventListener("load",a,w);else if(document.attachEvent){document.attachEvent("onreadystatechange",l);window.attachEvent("onload",a);var b=w;try{b=window.frameElement==s}catch(m){}document.documentElement.doScroll&&b&&d()}})();return function(d){a.B?d():b.push(d)}}()).B=w;mt.event={};mt.event.c=function(a,d,e){a.attachEvent?a.attachEvent("on"+d,function(b){e.call(a,b)}):a.addEventListener&&a.addEventListener(d,e,w)};
mt.event.preventDefault=function(a){a.preventDefault?a.preventDefault():a.returnValue=w};mt.j={};mt.j.parse=function(){return(new Function('return (" + source + ")'))()};
mt.j.stringify=function(){function a(a){/["\\\x00-\x1f]/.test(a)&&(a=a.replace(/["\\\x00-\x1f]/g,function(a){var b=e[a];if(b)return b;b=a.charCodeAt();return"\\u00"+Math.floor(b/16).toString(16)+(b%16).toString(16)}));return'"'+a+'"'}function d(a){return 10>a?"0"+a:a}var e={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};return function(b){switch(typeof b){case "undefined":return"undefined";case "number":return isFinite(b)?String(b):"null";case "string":return a(b);case "boolean":return String(b);
default:if(b===s)return"null";if(b instanceof Array){var e=["["],g=b.length,m,f,k;for(f=0;f<g;f++)switch(k=b[f],typeof k){case "undefined":case "function":case "unknown":break;default:m&&e.push(","),e.push(mt.j.stringify(k)),m=1}e.push("]");return e.join("")}if(b instanceof Date)return'"'+b.getFullYear()+"-"+d(b.getMonth()+1)+"-"+d(b.getDate())+"T"+d(b.getHours())+":"+d(b.getMinutes())+":"+d(b.getSeconds())+'"';m=["{"];f=mt.j.stringify;for(g in b)if(Object.prototype.hasOwnProperty.call(b,g))switch(k=
b[g],typeof k){case "undefined":case "unknown":case "function":break;default:e&&m.push(","),e=1,m.push(f(g)+":"+f(k))}m.push("}");return m.join("")}}}();mt.lang={};mt.lang.d=function(a,d){return"[object "+d+"]"==={}.toString.call(a)};mt.lang.Ra=function(a){return mt.lang.d(a,"Number")&&isFinite(a)};mt.lang.Ta=function(a){return mt.lang.d(a,"String")};mt.localStorage={};
mt.localStorage.G=function(){if(!mt.localStorage.f)try{mt.localStorage.f=document.createElement("input"),mt.localStorage.f.type="hidden",mt.localStorage.f.style.display="none",mt.localStorage.f.addBehavior("#default#userData"),document.getElementsByTagName("head")[0].appendChild(mt.localStorage.f)}catch(a){return w}return r};
mt.localStorage.set=function(a,d,e){var b=new Date;b.setTime(b.getTime()+e||31536E6);try{window.localStorage?(d=b.getTime()+"|"+d,window.localStorage.setItem(a,d)):mt.localStorage.G()&&(mt.localStorage.f.expires=b.toUTCString(),mt.localStorage.f.load(document.location.hostname),mt.localStorage.f.setAttribute(a,d),mt.localStorage.f.save(document.location.hostname))}catch(l){}};
mt.localStorage.get=function(a){if(window.localStorage){if(a=window.localStorage.getItem(a)){var d=a.indexOf("|"),e=a.substring(0,d)-0;if(e&&e>(new Date).getTime())return a.substring(d+1)}}else if(mt.localStorage.G())try{return mt.localStorage.f.load(document.location.hostname),mt.localStorage.f.getAttribute(a)}catch(b){}return s};
mt.localStorage.remove=function(a){if(window.localStorage)window.localStorage.removeItem(a);else if(mt.localStorage.G())try{mt.localStorage.f.load(document.location.hostname),mt.localStorage.f.removeAttribute(a),mt.localStorage.f.save(document.location.hostname)}catch(d){}};mt.sessionStorage={};mt.sessionStorage.set=function(a,d){if(window.sessionStorage)try{window.sessionStorage.setItem(a,d)}catch(e){}};
mt.sessionStorage.get=function(a){return window.sessionStorage?window.sessionStorage.getItem(a):s};mt.sessionStorage.remove=function(a){window.sessionStorage&&window.sessionStorage.removeItem(a)};mt.Y={};mt.Y.log=function(a,d){var e=new Image,b="mini_tangram_log_"+Math.floor(2147483648*Math.random()).toString(36);window[b]=e;e.onload=e.onerror=e.onabort=function(){e.onload=e.onerror=e.onabort=s;e=window[b]=s;d&&d(a)};e.src=a};mt.F={};
mt.F.ya=function(){var a="";if(navigator.plugins&&navigator.mimeTypes.length){var d=navigator.plugins["Shockwave Flash"];d&&d.description&&(a=d.description.replace(/^.*\s+(\S+)\s+\S+$/,"$1"))}else if(window.ActiveXObject)try{if(d=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"))(a=d.GetVariable("$version"))&&(a=a.replace(/^.*\s+(\d+),(\d+).*$/,"$1.$2"))}catch(e){}return a};
mt.F.la=function(a,d,e,b,l){return'<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="'+a+'" width="'+e+'" height="'+b+'"><param name="movie" value="'+d+'" /><param name="flashvars" value="'+(l||"")+'" /><param name="allowscriptaccess" value="always" /><embed type="application/x-shockwave-flash" name="'+a+'" width="'+e+'" height="'+b+'" src="'+d+'" flashvars="'+(l||"")+'" allowscriptaccess="always" /></object>'};mt.url={};
mt.url.i=function(a,d){var e=a.match(RegExp("(^|&|\\?|#)("+d+")=([^&#]*)(&|$|#)",""));return e?e[3]:s};mt.url.Qa=function(a){return(a=a.match(/^(https?:)\/\//))?a[1]:s};mt.url.va=function(a){return(a=a.match(/^(https?:\/\/)?([^\/\?#]*)/))?a[2].replace(/.*@/,""):s};mt.url.R=function(a){return(a=mt.url.va(a))?a.replace(/:\d+$/,""):a};mt.url.Pa=function(a){return(a=a.match(/^(https?:\/\/)?[^\/]*(.*)/))?a[2].replace(/[\?#].*/,"").replace(/^$/,"/"):s};
h.p={Fa:"http://tongji.baidu.com/hm-web/welcome/ico",N:"hm.baidu.com/hm.gif",ca:"baidu.com",Ca:"hmmd",Da:"hmpl",Ba:"hmkw",za:"hmci",Ea:"hmsr",Aa:"hmcu",o:0,k:Math.round(+new Date/1E3),protocol:"https:"===document.location.protocol?"https:":"http:",Sa:0,ia:6E5,ka:10,P:1024,ha:1,w:2147483647,Z:"bs cc cf ci ck cl cm cp cu cw ds ep et fl ja ln lo lt nv rnd si st su v cv lv api u tt".split(" ")};
(function(){var a={l:{},c:function(a,e){this.l[a]=this.l[a]||[];this.l[a].push(e)},z:function(a,e){this.l[a]=this.l[a]||[];for(var b=this.l[a].length,l=0;l<b;l++)this.l[a][l](e)}};return h.r=a})();
(function(){function a(a,b){var l=document.createElement("script");l.charset="utf-8";d.d(b,"Function")&&(l.readyState?l.onreadystatechange=function(){if("loaded"===l.readyState||"complete"===l.readyState)l.onreadystatechange=s,b()}:l.onload=function(){b()});l.src=a;var g=document.getElementsByTagName("script")[0];g.parentNode.insertBefore(l,g)}var d=mt.lang;return h.load=a})();
(function(){var a=h.p,d=mt.F,e={init:function(){if(""!==c.icon){var b;b=c.icon.split("|");var e=a.Fa+"?s="+c.id,g=("http:"==a.protocol?"http://eiv":"https://bs")+".baidu.com"+b[0]+"."+b[1];switch(b[1]){case "swf":b=d.la("HolmesIcon"+a.k,g,b[2],b[3],"s="+e);break;case "gif":b='<a href="'+e+'" target="_blank"><img border="0" src="'+g+'" width="'+b[2]+'" height="'+b[3]+'"></a>';break;default:b='<a href="'+e+'" target="_blank">'+b[0]+"</a>"}document.write(b)}}};h.r.c("pv-b",e.init);return e})();
(function(){var a=mt.m,d=mt.event,e=mt.h,b=h.p,l=[],g={$:function(){c.ctrk&&(d.c(document,"mouseup",g.ga()),d.c(window,"unload",function(){g.C()}),setInterval(function(){g.C()},b.ia))},ga:function(){return function(a){a=g.ta(a);if(""!==a){var f=(b.protocol+"//"+b.N+"?"+h.b.X().replace(/ep=[^&]*/,"ep="+encodeURIComponent("["+a+"]"))).length;f+(b.w+"").length>b.P||(f+encodeURIComponent(l.join(",")+(l.length?",":"")).length+(b.w+"").length>b.P&&g.C(),l.push(a),(l.length>=b.ka||/t:a/.test(a))&&g.C())}}},
ta:function(d){if(0===b.ha){var f=d.target||d.srcElement,k=f.tagName.toLowerCase();if("embed"==k||"object"==k)return""}e.T?(f=Math.max(document.documentElement.scrollTop,document.body.scrollTop),k=Math.max(document.documentElement.scrollLeft,document.body.scrollLeft),k=d.clientX+k,f=d.clientY+f):(k=d.pageX,f=d.pageY);var n=window.innerWidth||document.documentElement.clientWidth||document.body.offsetWidth;switch(c.align){case 1:k-=n/2;break;case 2:k-=n}k="{x:"+k+",y:"+f+",";f=d.target||d.srcElement;
return k=(d="a"==f.tagName.toLowerCase()?f:a.sa(f))?k+("t:a,u:"+encodeURIComponent(d.href)+"}"):k+"t:b}"},C:function(){0!==l.length&&(h.b.a.et=2,h.b.a.ep="["+l.join(",")+"]",h.b.g(),l=[])}};h.r.c("pv-b",g.$);return g})();
(function(){function a(){function a(b){function k(){}for(var e=r,g=0,u=0,p=s,t=s,y=b.length,x=0,z=s,g=0;g<y;g++)if(p=b[g],p.chromeVer===m){e=r;t=p.tests;x=t.length;for(u=0;u<x;u++)if(k=d[t[u].name],k()!==t[u].expect){e=w;break}if(x&&e){z={name:"360browser",type:p.type,version:p.ver};break}}return z}var b=[];b.push({ver:"8.3",type:"fast",tests:[{name:"seamlessiframe",expect:1}],chromeVer:"42"});var d={pointerevents:function(){return"maxTouchPoints"in window.navigator?1:"msMaxTouchPoints"in window.navigator||
"mozMaxTouchPoints"in window.navigator||"webkitMaxTouchPoints"in window.navigator?9:0},webgl3D:function(){for(var a="webgl ms-webgl experimental-webgl moz-webgl opera-3d webkit-3d ms-3d 3d".split(" "),k=a.length,b="",d=document.createElement("canvas"),e=w,p=0;p<k;p++)try{if(d.getContext(a[p])){e=r;b=a[p];break}}catch(t){}return e?"webgl"===b?1:9:0},seamlessiframe:function(){return"seamless"in document.createElement("iframe")?1:0},speechsynthesis:function(){return"speechSynthesis"in window?1:"webkitSpeechSynthesis"in
window||"mozSpeechSynthesis"in window||"oSpeechSynthesis"in window||"msSpeechSynthesis"in window?9:0}},g=s,m=function(){var a=navigator.userAgent.toLowerCase().match(/chrome\/(\d+)/i);return a?a[1]:"-1"}();"-1"!==m&&(g=a(b));return g}var d=function(){var d=navigator.userAgent.toLowerCase();if(0<=d.indexOf("chrome")){var d=(d=d.match(/chrome\/(\d+)/))?d[1]:-1,b=window.document,l="track"in b.createElement("track"),b="scoped"in b.createElement("style"),g="v8Locale"in window,m=document.createElement("canvas"),
f="seamless"in document.createElement("iframe"),k=w;try{m.getContext("webgl")&&(k=r)}catch(n){}if(m=a())return"fast"===m.type?7:1;if(!k&&"31"===d)return 1;if(!(f=(f||!k)&&"38"===d))if(f=l)if(f=!b)if(f=!g){var v;a:{f=window.navigator.mimeTypes;for(v in f)if("application/vnd.chromium.remoting-viewer"===f[v].type){v=r;break a}v=w}f=!v&&46>+d}if(f)return 7;if(l&&b&&g)return 1}return-1}();return h.ea=d})();
(function(){function a(){return function(){h.b.a.nv=0;h.b.a.st=4;h.b.a.et=3;h.b.a.ep=h.H.wa()+","+h.H.ua();h.b.g()}}function d(){clearTimeout(z);var a;y&&(a="visible"==document[y]);x&&(a=!document[x]);f="undefined"==typeof a?r:a;if((!m||!k)&&f&&n)t=r,u=+new Date;else if(m&&k&&(!f||!n))t=w,p+=+new Date-u;m=f;k=n;z=setTimeout(d,100)}function e(a){var k=document,b="";if(a in k)b=a;else for(var d=["webkit","ms","moz","o"],p=0;p<d.length;p++){var f=d[p]+a.charAt(0).toUpperCase()+a.slice(1);if(f in k){b=
f;break}}return b}function b(a){if(!("focus"==a.type||"blur"==a.type)||!(a.target&&a.target!=window))n="focus"==a.type||"focusin"==a.type?r:w,d()}var l=mt.event,g=h.r,m=r,f=r,k=r,n=r,v=+new Date,u=v,p=0,t=r,y=e("visibilityState"),x=e("hidden"),z;d();(function(){var a=y.replace(/[vV]isibilityState/,"visibilitychange");l.c(document,a,d);l.c(window,"pageshow",d);l.c(window,"pagehide",d);"object"==typeof document.onfocusin?(l.c(document,"focusin",b),l.c(document,"focusout",b)):(l.c(window,"focus",b),
l.c(window,"blur",b))})();h.H={wa:function(){return+new Date-v},ua:function(){return t?+new Date-u+p:p}};g.c("pv-b",function(){l.c(window,"unload",a())});return h.H})();
(function(){var a=mt.lang,d=h.p,e=h.load,b={Ha:function(b){if((window._dxt===q||a.d(window._dxt,"Array"))&&"undefined"!==typeof h.b){var g=h.b.J();e([d.protocol,"//datax.baidu.com/x.js?si=",c.id,"&dm=",encodeURIComponent(g)].join(""),b)}},Oa:function(b){if(a.d(b,"String")||a.d(b,"Number"))window._dxt=window._dxt||[],window._dxt.push(["_setUserId",b])}};return h.ma=b})();
(function(){function a(k){for(var b in k)if({}.hasOwnProperty.call(k,b)){var d=k[b];e.d(d,"Object")||e.d(d,"Array")?a(d):k[b]=String(d)}}function d(a){return a.replace?a.replace(/'/g,"'0").replace(/\*/g,"'1").replace(/!/g,"'2"):a}var e=mt.lang,b=mt.j,l=h.p,g=h.r,m=h.ma,f={s:[],D:0,U:w,init:function(){f.e=0;g.c("pv-b",function(){f.na();f.pa()});g.c("pv-d",f.qa);g.c("stag-b",function(){h.b.a.api=f.e||f.D?f.e+"_"+f.D:""});g.c("stag-d",function(){h.b.a.api=0;f.e=0;f.D=0})},na:function(){var a=window._hmt||
[];if(!a||e.d(a,"Array"))window._hmt={id:c.id,cmd:{},push:function(){for(var a=window._hmt,k=0;k<arguments.length;k++){var b=arguments[k];e.d(b,"Array")&&(a.cmd[a.id].push(b),"_setAccount"===b[0]&&(1<b.length&&/^[0-9a-f]{32}$/.test(b[1]))&&(b=b[1],a.id=b,a.cmd[b]=a.cmd[b]||[]))}}},window._hmt.cmd[c.id]=[],window._hmt.push.apply(window._hmt,a)},pa:function(){var a=window._hmt;if(a&&a.cmd&&a.cmd[c.id])for(var b=a.cmd[c.id],d=/^_track(Event|MobConv|Order|RTEvent)$/,e=0,p=b.length;e<p;e++){var t=b[e];
d.test(t[0])?f.s.push(t):f.M(t)}a.cmd[c.id]={push:f.M}},qa:function(){if(0<f.s.length)for(var a=0,b=f.s.length;a<b;a++)f.M(f.s[a]);f.s=s},M:function(a){var b=a[0];if(f.hasOwnProperty(b)&&e.d(f[b],"Function"))f[b](a)},_setAccount:function(a){1<a.length&&/^[0-9a-f]{32}$/.test(a[1])&&(f.e|=1)},_setAutoPageview:function(a){if(1<a.length&&(a=a[1],w===a||r===a))f.e|=2,h.b.S=a},_trackPageview:function(a){if(1<a.length&&a[1].charAt&&"/"===a[1].charAt(0)){f.e|=4;h.b.a.et=0;h.b.a.ep="";h.b.K?(h.b.a.nv=0,h.b.a.st=
4):h.b.K=r;var b=h.b.a.u,d=h.b.a.su;h.b.a.u=l.protocol+"//"+document.location.host+a[1];f.U||(h.b.a.su=document.location.href);h.b.g();h.b.a.u=b;h.b.a.su=d}},_trackEvent:function(a){2<a.length&&(f.e|=8,h.b.a.nv=0,h.b.a.st=4,h.b.a.et=4,h.b.a.ep=d(a[1])+"*"+d(a[2])+(a[3]?"*"+d(a[3]):"")+(a[4]?"*"+d(a[4]):""),h.b.g())},_setCustomVar:function(a){if(!(4>a.length)){var b=a[1],e=a[4]||3;if(0<b&&6>b&&0<e&&4>e){f.D++;for(var g=(h.b.a.cv||"*").split("!"),p=g.length;p<b-1;p++)g.push("*");g[b-1]=e+"*"+d(a[2])+
"*"+d(a[3]);h.b.a.cv=g.join("!");a=h.b.a.cv.replace(/[^1](\*[^!]*){2}/g,"*").replace(/((^|!)\*)+$/g,"");""!==a?h.b.setData("Hm_cv_"+c.id,encodeURIComponent(a),c.age):h.b.Ia("Hm_cv_"+c.id)}}},_setReferrerOverride:function(a){1<a.length&&(h.b.a.su=a[1].charAt&&"/"===a[1].charAt(0)?l.protocol+"//"+window.location.host+a[1]:a[1],f.U=r)},_trackOrder:function(d){d=d[1];e.d(d,"Object")&&(a(d),f.e|=16,h.b.a.nv=0,h.b.a.st=4,h.b.a.et=94,h.b.a.ep=b.stringify(d),h.b.g())},_trackMobConv:function(a){if(a={webim:1,
tel:2,map:3,sms:4,callback:5,share:6}[a[1]])f.e|=32,h.b.a.et=93,h.b.a.ep=a,h.b.g()},_trackRTPageview:function(d){d=d[1];e.d(d,"Object")&&(a(d),d=b.stringify(d),512>=encodeURIComponent(d).length&&(f.e|=64,h.b.a.rt=d))},_trackRTEvent:function(d){d=d[1];if(e.d(d,"Object")){a(d);d=encodeURIComponent(b.stringify(d));var g=function(a){var b=h.b.a.rt;f.e|=128;h.b.a.et=90;h.b.a.rt=a;h.b.g();h.b.a.rt=b},m=d.length;if(900>=m)g.call(this,d);else for(var m=Math.ceil(m/900),u="block|"+Math.round(Math.random()*
l.w).toString(16)+"|"+m+"|",p=[],t=0;t<m;t++)p.push(t),p.push(d.substring(900*t,900*t+900)),g.call(this,u+p.join("|")),p=[]}},_setUserId:function(a){a=a[1];m.Ha();m.Oa(a)}};f.init();h.da=f;return h.da})();
(function(){function a(){"undefined"===typeof window["_bdhm_loaded_"+c.id]&&(window["_bdhm_loaded_"+c.id]=r,this.a={},this.S=r,this.K=w,this.init())}var d=mt.url,e=mt.Y,b=mt.F,l=mt.lang,g=mt.cookie,m=mt.h,f=mt.localStorage,k=mt.sessionStorage,n=h.p,v=h.ea,u=h.r;a.prototype={L:function(a,b){a="."+a.replace(/:\d+/,"");b="."+b.replace(/:\d+/,"");var d=a.indexOf(b);return-1<d&&d+b.length===a.length},V:function(a,b){a=a.replace(/^https?:\/\//,"");return 0===a.indexOf(b)},A:function(a){for(var b=0;b<c.dm.length;b++)if(-1<
c.dm[b].indexOf("/")){if(this.V(a,c.dm[b]))return r}else{var e=d.R(a);if(e&&this.L(e,c.dm[b]))return r}return w},J:function(){for(var a=document.location.hostname,b=0,d=c.dm.length;b<d;b++)if(this.L(a,c.dm[b]))return c.dm[b].replace(/(:\d+)?[\/\?#].*/,"");return a},Q:function(){for(var a=0,b=c.dm.length;a<b;a++){var d=c.dm[a];if(-1<d.indexOf("/")&&this.V(document.location.href,d))return d.replace(/^[^\/]+(\/.*)/,"$1")+"/"}return"/"},xa:function(){if(!document.referrer)return n.k-n.o>c.vdur?1:4;var a=
w;this.A(document.referrer)&&this.A(document.location.href)?a=r:(a=d.R(document.referrer),a=this.L(a||"",document.location.hostname));return a?n.k-n.o>c.vdur?1:4:3},getData:function(a){try{return g.get(a)||k.get(a)||f.get(a)}catch(b){}},setData:function(a,b,d){try{g.set(a,b,{domain:this.J(),path:this.Q(),I:d}),d?f.set(a,b,d):k.set(a,b)}catch(e){}},Ia:function(a){try{g.set(a,"",{domain:this.J(),path:this.Q(),I:-1}),k.remove(a),f.remove(a)}catch(b){}},Ma:function(){var a,b,d,e,f;n.o=this.getData("Hm_lpvt_"+
c.id)||0;13===n.o.length&&(n.o=Math.round(n.o/1E3));b=this.xa();a=4!==b?1:0;if(d=this.getData("Hm_lvt_"+c.id)){e=d.split(",");for(f=e.length-1;0<=f;f--)13===e[f].length&&(e[f]=""+Math.round(e[f]/1E3));for(;2592E3<n.k-e[0];)e.shift();f=4>e.length?2:3;for(1===a&&e.push(n.k);4<e.length;)e.shift();d=e.join(",");e=e[e.length-1]}else d=n.k,e="",f=1;this.setData("Hm_lvt_"+c.id,d,c.age);this.setData("Hm_lpvt_"+c.id,n.k);d=n.k===this.getData("Hm_lpvt_"+c.id)?"1":"0";if(0===c.nv&&this.A(document.location.href)&&
(""===document.referrer||this.A(document.referrer)))a=0,b=4;this.a.nv=a;this.a.st=b;this.a.cc=d;this.a.lt=e;this.a.lv=f},X:function(){for(var a=[],b=this.a.et,d=0,e=n.Z.length;d<e;d++){var f=n.Z[d],g=this.a[f];"undefined"!==typeof g&&""!==g&&("tt"!==f||"tt"===f&&0===b)&&a.push(f+"="+encodeURIComponent(g))}this.a.rt&&(0===b?a.push("rt="+encodeURIComponent(this.a.rt)):90===b&&a.push("rt="+this.a.rt));return a.join("&")},Na:function(){this.Ma();this.a.si=c.id;this.a.su=document.referrer;this.a.ds=m.Ja;
this.a.cl=m.colorDepth+"-bit";this.a.ln=m.language;this.a.ja=m.javaEnabled?1:0;this.a.ck=m.cookieEnabled?1:0;this.a.bs=v;this.a.lo="number"===typeof _bdhm_top?1:0;this.a.fl=b.ya();this.a.v="1.1.30";this.a.cv=decodeURIComponent(this.getData("Hm_cv_"+c.id)||"");this.a.tt=document.title||"";var a=document.location.href;this.a.cm=d.i(a,n.Ca)||"";this.a.cp=d.i(a,n.Da)||"";this.a.cw=d.i(a,n.Ba)||"";this.a.ci=d.i(a,n.za)||"";this.a.cf=d.i(a,n.Ea)||"";this.a.cu=d.i(a,n.Aa)||""},init:function(){try{this.Na(),
0===this.a.nv?this.La():this.O(".*"),h.b=this,this.fa(),u.z("pv-b"),this.Ka()}catch(a){var b=[];b.push("si="+c.id);b.push("n="+encodeURIComponent(a.name));b.push("m="+encodeURIComponent(a.message));b.push("r="+encodeURIComponent(document.referrer));e.log(n.protocol+"//"+n.N+"?"+b.join("&"))}},Ka:function(){function a(){u.z("pv-d")}this.S?(this.K=r,this.a.et=0,this.a.ep="",this.g(a)):a()},g:function(a){var b=this;b.a.rnd=Math.round(Math.random()*n.w);u.z("stag-b");var d=n.protocol+"//"+n.N+"?"+b.X();
u.z("stag-d");b.ba(d);e.log(d,function(d){b.O(d);l.d(a,"Function")&&a.call(b)})},fa:function(){var a=document.location.hash.substring(1),b=RegExp(c.id),e=-1<document.referrer.indexOf(n.ca),f=d.i(a,"jn"),g=/^heatlink$|^select$/.test(f);a&&(b.test(a)&&e&&g)&&(this.a.rnd=Math.round(Math.random()*n.w),a=document.createElement("script"),a.setAttribute("type","text/javascript"),a.setAttribute("charset","utf-8"),a.setAttribute("src",n.protocol+"//"+c.js+f+".js?"+this.a.rnd),f=document.getElementsByTagName("script")[0],
f.parentNode.insertBefore(a,f))},ba:function(a){var b=k.get("Hm_unsent_"+c.id)||"",d=this.a.u?"":"&u="+encodeURIComponent(document.location.href),b=encodeURIComponent(a.replace(/^https?:\/\//,"")+d)+(b?","+b:"");k.set("Hm_unsent_"+c.id,b)},O:function(a){var b=k.get("Hm_unsent_"+c.id)||"";b&&(a=encodeURIComponent(a.replace(/^https?:\/\//,"")),a=RegExp(a.replace(/([\*\(\)])/g,"\\$1")+"(%26u%3D[^,]*)?,?","g"),(b=b.replace(a,"").replace(/,$/,""))?k.set("Hm_unsent_"+c.id,b):k.remove("Hm_unsent_"+c.id))},
La:function(){var a=this,b=k.get("Hm_unsent_"+c.id);if(b)for(var b=b.split(","),d=function(b){e.log(n.protocol+"//"+decodeURIComponent(b),function(b){a.O(b)})},f=0,g=b.length;f<g;f++)d(b[f])}};return new a})();
(function(){var a=mt.m,d=mt.event,e=mt.url,b=mt.j;try{if(window.performance&&performance.timing&&"undefined"!==typeof h.b){var l=+new Date,g=function(a){var b=performance.timing,d=b[a+"Start"]?b[a+"Start"]:0;a=b[a+"End"]?b[a+"End"]:0;return{start:d,end:a,value:0<a-d?a-d:0}},m=s;a.W(function(){m=+new Date});var f=function(){var a,d,f;f=g("navigation");d=g("request");f={netAll:d.start-f.start,netDns:g("domainLookup").value,netTcp:g("connect").value,srv:g("response").start-d.start,dom:performance.timing.domInteractive-
performance.timing.fetchStart,loadEvent:g("loadEvent").end-f.start};a=document.referrer;var k=a.match(/^(http[s]?:\/\/)?([^\/]+)(.*)/)||[],t=s;d=s;if("www.baidu.com"===k[2]||"m.baidu.com"===k[2])t=e.i(a,"qid"),d=e.i(a,"click_t");a=t;f.qid=a!=s?a:"";d!=s?(f.bdDom=m?m-d:0,f.bdRun=l-d,f.bdDef=g("navigation").start-d):(f.bdDom=0,f.bdRun=0,f.bdDef=0);h.b.a.et=87;h.b.a.ep=b.stringify(f);h.b.g()};d.c(window,"load",function(){setTimeout(f,500)})}}catch(k){}})();
(function(){var a=mt.h,d=mt.lang,e=mt.event,b=mt.j;if("undefined"!==typeof h.b&&(c.med||(!a.T||7<a.Ga)&&c.cvcc)){var l,g,m,f,k=function(a){if(a.item){for(var b=a.length,d=Array(b);b--;)d[b]=a[b];return d}return[].slice.call(a)},n=function(a,b){for(var d in a)if(a.hasOwnProperty(d)&&b.call(a,d,a[d])===w)return w},v=function(a,f){var e={};e.n=l;e.t="clk";e.v=a;if(f){var g=f.getAttribute("href"),k=f.getAttribute("onclick")?""+f.getAttribute("onclick"):s,n=f.getAttribute("id")||"";m.test(g)?(e.sn="mediate",
e.snv=g):d.d(k,"String")&&m.test(k)&&(e.sn="wrap",e.snv=k);e.id=n}h.b.a.et=86;h.b.a.ep=b.stringify(e);h.b.g();for(e=+new Date;400>=+new Date-e;);};if(c.med)g="/zoosnet",l="swt",m=/swt|zixun|call|chat|zoos|business|talk|kefu|openkf|online|\/LR\/Chatpre\.aspx/i,f={click:function(){for(var a=[],b=k(document.getElementsByTagName("a")),b=[].concat.apply(b,k(document.getElementsByTagName("area"))),b=[].concat.apply(b,k(document.getElementsByTagName("img"))),d,f,e=0,g=b.length;e<g;e++)d=b[e],f=d.getAttribute("onclick"),
d=d.getAttribute("href"),(m.test(f)||m.test(d))&&a.push(b[e]);return a}};else if(c.cvcc){g="/other-comm";l="other";m=c.cvcc.q||q;var u=c.cvcc.id||q;f={click:function(){for(var a=[],b=k(document.getElementsByTagName("a")),b=[].concat.apply(b,k(document.getElementsByTagName("area"))),b=[].concat.apply(b,k(document.getElementsByTagName("img"))),d,e,f,g=0,l=b.length;g<l;g++)d=b[g],m!==q?(e=d.getAttribute("onclick"),f=d.getAttribute("href"),u?(d=d.getAttribute("id"),(m.test(e)||m.test(f)||u.test(d))&&
a.push(b[g])):(m.test(e)||m.test(f))&&a.push(b[g])):u!==q&&(d=d.getAttribute("id"),u.test(d)&&a.push(b[g]));return a}}}if("undefined"!==typeof f&&"undefined"!==typeof m){var p;g+=/\/$/.test(g)?"":"/";var t=function(a,b){if(p===b)return v(g+a,b),w;if(d.d(b,"Array")||d.d(b,"NodeList"))for(var e=0,f=b.length;e<f;e++)if(p===b[e])return v(g+a+"/"+(e+1),b[e]),w};e.c(document,"mousedown",function(a){a=a||window.event;p=a.target||a.srcElement;var b={};for(n(f,function(a,e){b[a]=d.d(e,"Function")?e():document.getElementById(e)});p&&
p!==document&&n(b,t)!==w;)p=p.parentNode})}}})();(function(){var a=mt.m,d=mt.lang,e=mt.event,b=mt.j;if("undefined"!==typeof h.b&&d.d(c.cvcf,"Array")&&0<c.cvcf.length){var l={aa:function(){for(var b=c.cvcf.length,d,f=0;f<b;f++)(d=a.ra(decodeURIComponent(c.cvcf[f])))&&e.c(d,"click",l.oa())},oa:function(){return function(){h.b.a.et=86;var a={n:"form",t:"clk"};a.id=this.id;h.b.a.ep=b.stringify(a);h.b.g()}}};a.W(function(){l.aa()})}})();
(function(){var a=mt.event,d=mt.j;if(c.med&&"undefined"!==typeof h.b){var e=+new Date,b={n:"anti",sb:0,kb:0,clk:0},l=function(){h.b.a.et=86;h.b.a.ep=d.stringify(b);h.b.g()};a.c(document,"click",function(){b.clk++});a.c(document,"keyup",function(){b.kb=1});a.c(window,"scroll",function(){b.sb++});a.c(window,"unload",function(){b.t=+new Date-e;l()});a.c(window,"load",function(){setTimeout(l,5E3)})}})();})();