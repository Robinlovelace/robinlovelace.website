(function(){var h,n=this;function p(a){return void 0!==a}
function q(a,b,c){a=a.split(".");c=c||n;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&p(b)?c[d]=b:c[d]&&Object.prototype.hasOwnProperty.call(c,d)?c=c[d]:c=c[d]={}}
function t(a,b){for(var c=a.split("."),d=b||n,e;e=c.shift();)if(null!=d[e])d=d[e];else return null;return d}
function aa(){}
function ba(a){a.Aa=void 0;a.getInstance=function(){return a.Aa?a.Aa:a.Aa=new a}}
function ca(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function da(a){return"array"==ca(a)}
function ea(a){var b=ca(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function u(a){return"string"==typeof a}
function fa(a){return"number"==typeof a}
function ga(a){return"function"==ca(a)}
function ha(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function ia(a){return a[ja]||(a[ja]=++ka)}
var ja="closure_uid_"+(1E9*Math.random()>>>0),ka=0;function la(a,b,c){return a.call.apply(a.bind,arguments)}
function ma(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function v(a,b,c){v=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?la:ma;return v.apply(null,arguments)}
function na(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}
function oa(a,b){for(var c in b)a[c]=b[c]}
var pa=Date.now||function(){return+new Date};
function w(a,b){function c(){}
c.prototype=b.prototype;a.B=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.cd=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}}
;function qa(a,b,c){this.i=c;this.g=a;this.w=b;this.f=0;this.b=null}
qa.prototype.get=function(){var a;0<this.f?(this.f--,a=this.b,this.b=a.next,a.next=null):a=this.g();return a};
function ra(a,b){a.w(b);a.f<a.i&&(a.f++,b.next=a.b,a.b=b)}
;function sa(a){if(Error.captureStackTrace)Error.captureStackTrace(this,sa);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
w(sa,Error);sa.prototype.name="CustomError";var ta;function ua(a,b,c){for(var d in a)b.call(c,a[d],d,a)}
function va(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}
function xa(a){var b=ya,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function za(){var a=Aa,b;for(b in a)return!1;return!0}
function Ba(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function Ca(a){var b={},c;for(c in a)b[c]=a[c];return b}
var Da="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ea(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Da.length;f++)c=Da[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var Fa=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},Ga=String.prototype.repeat?function(a,b){return a.repeat(b)}:function(a,b){return Array(b+1).join(a)};
function Ha(a){a=p(void 0)?a.toFixed(void 0):String(a);var b=a.indexOf(".");-1==b&&(b=a.length);return Ga("0",Math.max(0,2-b))+a}
function Ia(a,b){return a<b?-1:a>b?1:0}
function Ja(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
function Ka(a){return String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()})}
function La(a){var b=u(void 0)?"undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08"):"\\s";return a.replace(new RegExp("(^"+(b?"|["+b+"]+":"")+")([a-z])","g"),function(a,b,e){return b+e.toUpperCase()})}
;var Ma=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};q("yt.config_",Ma,void 0);q("yt.msgs_",window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{},void 0);function x(a,b){ga(a)&&(a=Na(a));return window.setTimeout(a,b)}
function Oa(a){window.clearTimeout(a)}
function Na(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Pa(b)}}:a}
function Pa(a,b){var c=t("yt.logging.errors.log");c?c(a,b,void 0,void 0,void 0):(c=[],c="ERRORS"in Ma?Ma.ERRORS:c,c.push([a,b,void 0,void 0,void 0]),Qa("ERRORS",c))}
var Ra=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()},Sa="Microsoft Internet Explorer"==navigator.appName;
function Qa(a){var b=arguments;if(1<b.length){var c=b[0];Ma[c]=b[1]}else for(c in b=b[0],b)Ma[c]=b[c]}
;function Ta(a,b,c){a&&(a.dataset?a.dataset[Ua(b)]=c:a.setAttribute("data-"+b,c))}
function Va(a,b){return a?a.dataset?a.dataset[Ua(b)]:a.getAttribute("data-"+b):null}
function Wa(a,b){a&&(a.dataset?delete a.dataset[Ua(b)]:a.removeAttribute("data-"+b))}
var Xa={};function Ua(a){return Xa[a]||(Xa[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))}
;function Ya(a,b){if(1<b.length){var c=b[0];a[c]=b[1]}else{var d=b[0];for(c in d)a[c]=d[c]}}
;function y(){this.S=this.S;this.H=this.H}
y.prototype.S=!1;y.prototype.C=function(){return this.S};
y.prototype.dispose=function(){this.S||(this.S=!0,this.G())};
function Za(a,b){a.S?p(void 0)?b.call(void 0):b():(a.H||(a.H=[]),a.H.push(p(void 0)?v(b,void 0):b))}
y.prototype.G=function(){if(this.H)for(;this.H.length;)this.H.shift()()};
function $a(a){a&&"function"==typeof a.dispose&&a.dispose()}
function ab(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];ea(d)?ab.apply(null,d):$a(d)}}
;var bb;a:{var cb=n.navigator;if(cb){var db=cb.userAgent;if(db){bb=db;break a}}bb=""}function z(a){return-1!=bb.indexOf(a)}
;function eb(a){Ya(Ma,arguments)}
function B(a,b){return a in Ma?Ma[a]:b}
;var fb=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;
if(u(a))return u(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},C=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=u(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},gb=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=u(a)?a.split(""):a,k=0;k<d;k++)if(k in g){var l=g[k];
b.call(c,l,k,a)&&(e[f++]=l)}return e},hb=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=u(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));
return e},ib=Array.prototype.some?function(a,b,c){return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=u(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;
return!1};
function jb(a,b){var c;a:{c=a.length;for(var d=u(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:u(a)?a.charAt(c):a[c]}
function kb(a,b){return 0<=fb(a,b)}
function lb(a,b){var c=fb(a,b);0<=c&&Array.prototype.splice.call(a,c,1)}
function mb(a){return Array.prototype.concat.apply(Array.prototype,arguments)}
function nb(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function ob(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(ea(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
function pb(a,b,c,d){return Array.prototype.splice.apply(a,qb(arguments,1))}
function qb(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)}
function rb(a){for(var b=[],c=0;c<arguments.length;c++){var d=arguments[c];if(da(d))for(var e=0;e<d.length;e+=8192)for(var f=rb.apply(null,qb(d,e,e+8192)),g=0;g<f.length;g++)b.push(f[g]);else b.push(d)}return b}
;function sb(){this.f=this.b=null}
var ub=new qa(function(){return new tb},function(a){a.reset()},100);
sb.prototype.remove=function(){var a=null;this.b&&(a=this.b,this.b=this.b.next,this.b||(this.f=null),a.next=null);return a};
function tb(){this.next=this.scope=this.b=null}
tb.prototype.set=function(a,b){this.b=a;this.scope=b;this.next=null};
tb.prototype.reset=function(){this.next=this.scope=this.b=null};function vb(a,b){isNaN(b)&&(b=void 0);var c=t("yt.scheduler.instance.addJob");return c?c(a,1,b):void 0===b?(a(),NaN):x(a,b||0)}
;function wb(){this.b="";this.f=xb}
wb.prototype.za=!0;wb.prototype.ya=function(){return this.b};
var xb={};function yb(){return z("Safari")&&!(zb()||z("Coast")||z("Opera")||z("Edge")||z("Silk")||z("Android"))}
function zb(){return(z("Chrome")||z("CriOS"))&&!z("Edge")}
;function Ab(a){n.setTimeout(function(){throw a;},0)}
var Bb;
function Cb(){var a=n.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!z("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,a=v(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!z("Trident")&&!z("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(p(c.next)){c=c.next;var a=c.Oa;c.Oa=null;a()}};
return function(a){d.next={Oa:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){n.setTimeout(a,0)}}
;function Db(){this.b="";this.f=Eb}
Db.prototype.za=!0;Db.prototype.ya=function(){return this.b};
function Fb(a){if(a instanceof Db&&a.constructor===Db&&a.f===Eb)return a.b;ca(a);return"type_error:SafeUrl"}
var Gb=/^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/i;function Hb(a){if(a instanceof Db)return a;a=a.za?a.ya():String(a);Gb.test(a)||(a="about:invalid#zClosurez");return Ib(a)}
var Eb={};function Ib(a){var b=new Db;b.b=a;return b}
Ib("about:blank");function Jb(a,b){Kb||Lb();Mb||(Kb(),Mb=!0);var c=Nb,d=ub.get();d.set(a,b);c.f?c.f.next=d:c.b=d;c.f=d}
var Kb;function Lb(){if(-1!=String(n.Promise).indexOf("[native code]")){var a=n.Promise.resolve(void 0);Kb=function(){a.then(Ob)}}else Kb=function(){var a=Ob;
!ga(n.setImmediate)||n.Window&&n.Window.prototype&&!z("Edge")&&n.Window.prototype.setImmediate==n.setImmediate?(Bb||(Bb=Cb()),Bb(a)):n.setImmediate(a)}}
var Mb=!1,Nb=new sb;function Ob(){for(var a;a=Nb.remove();){try{a.b.call(a.scope)}catch(b){Ab(b)}ra(ub,a)}Mb=!1}
;function Pb(){this.b="";this.f=Qb}
Pb.prototype.za=!0;Pb.prototype.ya=function(){return this.b};
function Rb(a){if(a instanceof Pb&&a.constructor===Pb&&a.f===Qb)return a.b;ca(a);return"type_error:SafeHtml"}
var Qb={};function Sb(a){var b=new Pb;b.b=a;return b}
Sb("<!DOCTYPE html>");Sb("");Sb("<br>");function Tb(a,b){var c;c=b instanceof Db?b:Hb(b);a.href=Fb(c)}
function Ub(a,b){a.rel="stylesheet";var c;b instanceof wb&&b.constructor===wb&&b.f===xb?c=b.b:(ca(b),c="type_error:TrustedResourceUrl");a.href=c}
;function D(a){y.call(this);this.w=1;this.g=[];this.i=0;this.b=[];this.f={};this.A=!!a}
w(D,y);h=D.prototype;h.subscribe=function(a,b,c){var d=this.f[a];d||(d=this.f[a]=[]);var e=this.w;this.b[e]=a;this.b[e+1]=b;this.b[e+2]=c;this.w=e+3;d.push(e);return e};
function Vb(a,b){var c=!1,d=a.subscribe("ROOT_MENU_REMOVED",function(a){c||(c=!0,this.U(d),b.apply(void 0,arguments))},a)}
function Wb(a,b,c,d){if(b=a.f[b]){var e=a.b;(b=jb(b,function(a){return e[a+1]==c&&e[a+2]==d}))&&a.U(b)}}
h.U=function(a){var b=this.b[a];if(b){var c=this.f[b];0!=this.i?(this.g.push(a),this.b[a+1]=aa):(c&&lb(c,a),delete this.b[a],delete this.b[a+1],delete this.b[a+2])}return!!b};
h.M=function(a,b){var c=this.f[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.A)for(e=0;e<c.length;e++){var g=c[e];Xb(this.b[g+1],this.b[g+2],d)}else{this.i++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.b[g+1].apply(this.b[g+2],d)}finally{if(this.i--,0<this.g.length&&0==this.i)for(;c=this.g.pop();)this.U(c)}}return 0!=e}return!1};
function Xb(a,b,c){Jb(function(){a.apply(b,c)})}
h.clear=function(a){if(a){var b=this.f[a];b&&(C(b,this.U,this),delete this.f[a])}else this.b.length=0,this.f={}};
h.fa=function(a){if(a){var b=this.f[a];return b?b.length:0}a=0;for(b in this.f)a+=this.fa(b);return a};
h.G=function(){D.B.G.call(this);this.clear();this.g.length=0};var Yb=t("yt.pubsub.instance_")||new D;D.prototype.subscribe=D.prototype.subscribe;D.prototype.unsubscribeByKey=D.prototype.U;D.prototype.publish=D.prototype.M;D.prototype.clear=D.prototype.clear;q("yt.pubsub.instance_",Yb,void 0);var Zb=t("yt.pubsub.subscribedKeys_")||{};q("yt.pubsub.subscribedKeys_",Zb,void 0);var $b=t("yt.pubsub.topicToKeys_")||{};q("yt.pubsub.topicToKeys_",$b,void 0);var ac=t("yt.pubsub.isSynchronous_")||{};q("yt.pubsub.isSynchronous_",ac,void 0);
var bc=t("yt.pubsub.skipSubId_")||null;q("yt.pubsub.skipSubId_",bc,void 0);function cc(a,b,c){var d=dc();if(d){var e=d.subscribe(a,function(){if(!bc||bc!=e){var d=arguments,g;g=function(){Zb[e]&&b.apply(c||window,d)};
try{ac[a]?g():x(g,0)}catch(k){Pa(k)}}},c);
Zb[e]=!0;$b[a]||($b[a]=[]);$b[a].push(e);return e}return 0}
function ec(a){var b=dc();b&&("number"==typeof a?a=[a]:"string"==typeof a&&(a=[parseInt(a,10)]),C(a,function(a){b.unsubscribeByKey(a);delete Zb[a]}))}
function E(a,b){var c=dc();return c?c.publish.apply(c,arguments):!1}
function fc(a,b){ac[a]=!0;var c=dc();c&&c.publish.apply(c,arguments);ac[a]=!1}
function gc(a){$b[a]&&(a=$b[a],C(a,function(a){Zb[a]&&delete Zb[a]}),a.length=0)}
function hc(a){var b=dc();if(b)if(b.clear(a),a)gc(a);else for(var c in $b)gc(c)}
function dc(){return t("yt.pubsub.instance_")}
;function ic(a,b){if(window.spf){var c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(jc,""),c=c.replace(kc,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else lc(a,b)}
function lc(a,b){var c=mc(a),d=document.getElementById(c),e=d&&Va(d,"loaded"),f=d&&!e;if(e)b&&b();else{if(b){var e=cc(c,b),g=""+ia(b);nc[g]=e}f||(d=oc(a,c,function(){Va(d,"loaded")||(Ta(d,"loaded","true"),E(c),x(na(hc,c),0))}))}}
function oc(a,b,c){var d=document.createElement("script");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
d.onreadystatechange=function(){switch(d.readyState){case "loaded":case "complete":d.onload()}};
d.src=a;a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(d,a.firstChild);return d}
function pc(a,b){if(a&&b){var c=""+ia(b);(c=nc[c])&&ec(c)}}
function mc(a){var b=document.createElement("a");Tb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Ja(a)}
var jc=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,kc=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/,nc={};var qc=null;function rc(){var a=B("BG_I",null),b=B("BG_IU",null),c=B("BG_P",void 0);b?ic(b,function(){qc=new botguard.bg(c)}):a&&(eval(a),qc=new botguard.bg(c))}
function sc(){return null!=qc}
function tc(){return qc?qc.invoke():null}
;var uc=[],vc=!1;function wc(){function a(){vc=!0;"google_ad_status"in window?eb("DCLKSTAT",1):eb("DCLKSTAT",2)}
ic("//static.doubleclick.net/instream/ad_status.js",a);uc.push(vb(function(){vc||"google_ad_status"in window||(pc("//static.doubleclick.net/instream/ad_status.js",a),eb("DCLKSTAT",3))},5E3))}
function xc(){return parseInt(B("DCLKSTAT",0),10)}
;function yc(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a)throw Error("Invalid URI scheme in origin");var c="",d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1),b=b.substring(0,d);
if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;function zc(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;r=m=0}
function b(a){for(var b=g,c=0;64>c;c+=4)b[c/4]=a[c]<<24|a[c+1]<<16|a[c+2]<<8|a[c+3];for(c=16;80>c;c++)a=b[c-3]^b[c-8]^b[c-14]^b[c-16],b[c]=(a<<1|a>>>31)&4294967295;a=e[0];for(var d=e[1],f=e[2],k=e[3],l=e[4],m,r,c=0;80>c;c++)40>c?20>c?(m=k^d&(f^k),r=1518500249):(m=d^f^k,r=1859775393):60>c?(m=d&f|k&(d|f),r=2400959708):(m=d^f^k,r=3395469782),m=((a<<5|a>>>27)&4294967295)+m+l+r+b[c]&4294967295,l=k,k=f,f=(d<<30|d>>>2)&4294967295,d=a,a=m;e[0]=e[0]+a&4294967295;e[1]=e[1]+d&4294967295;e[2]=e[2]+f&4294967295;
e[3]=e[3]+k&4294967295;e[4]=e[4]+l&4294967295}
function c(a,c){if("string"===typeof a){a=unescape(encodeURIComponent(a));for(var d=[],e=0,g=a.length;e<g;++e)d.push(a.charCodeAt(e));a=d}c||(c=a.length);d=0;if(0==m)for(;d+64<c;)b(a.slice(d,d+64)),d+=64,r+=64;for(;d<c;)if(f[m++]=a[d++],r++,64==m)for(m=0,b(f);d+64<c;)b(a.slice(d,d+64)),d+=64,r+=64}
function d(){var a=[],d=8*r;56>m?c(k,56-m):c(k,64-(m-56));for(var g=63;56<=g;g--)f[g]=d&255,d>>>=8;b(f);for(g=d=0;5>g;g++)for(var l=24;0<=l;l-=8)a[d++]=e[g]>>l&255;return a}
for(var e=[],f=[],g=[],k=[128],l=1;64>l;++l)k[l]=0;var m,r;a();return{reset:a,update:c,digest:d,Nb:function(){for(var a=d(),b="",c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}}}
;/*
 gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
var Ac=window,Bc=document,Cc=Ac.location;function Dc(){}
var Ec=/\[native code\]/;function F(a,b,c){return a[b]=a[b]||c}
function Fc(a){for(var b=0;b<this.length;b++)if(this[b]===a)return b;return-1}
function Gc(a){a=a.sort();for(var b=[],c=void 0,d=0;d<a.length;d++){var e=a[d];e!=c&&b.push(e);c=e}return b}
function Hc(){var a;if((a=Object.create)&&Ec.test(a))a=a(null);else{a={};for(var b in a)a[b]=void 0}return a}
var Ic=F(Ac,"gapi",{});function Jc(a){return/^\s*$/.test(a)?!1:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,""))}
function Kc(a){a=String(a);if(Jc(a))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);}
function Lc(a){return eval("("+a+")")}
function Mc(a){var b=[];Nc(new Oc,a,b);return b.join("")}
function Oc(){}
function Nc(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(da(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),e=d[f],Nc(a,e,c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");f="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(e=b[d],"function"!=typeof e&&(c.push(f),Pc(d,c),c.push(":"),Nc(a,e,c),f=","));c.push("}");return}}switch(typeof b){case "string":Pc(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Qc={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Rc=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;function Pc(a,b){b.push('"',a.replace(Rc,function(a){var b=Qc[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),Qc[a]=b);return b}),'"')}
;function Sc(a,b){this.width=a;this.height=b}
h=Sc.prototype;h.Lb=function(){return this.width*this.height};
h.aspectRatio=function(){return this.width/this.height};
h.isEmpty=function(){return!this.Lb()};
h.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
h.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
h.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Tc(a){this.b=a||{cookie:""}}
var Uc=/\s*;\s*/;h=Tc.prototype;h.isEnabled=function(){return navigator.cookieEnabled};
h.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');p(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(pa()+1E3*c)).toUTCString();this.b.cookie=a+"="+b+e+d+c+f};
h.get=function(a,b){for(var c=a+"=",d=(this.b.cookie||"").split(Uc),e=0,f;f=d[e];e++){if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
h.remove=function(a,b,c){var d=p(this.get(a));this.set(a,"",0,b,c);return d};
h.isEmpty=function(){return!this.b.cookie};
h.fa=function(){return this.b.cookie?(this.b.cookie||"").split(Uc).length:0};
h.clear=function(){for(var a=(this.b.cookie||"").split(Uc),b=[],c=[],d,e,f=0;e=a[f];f++)d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var Vc=new Tc("undefined"==typeof document?null:document);Vc.f=3950;function Wc(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0}
;function Xc(a){Xc[" "](a);return a}
Xc[" "]=aa;function Yc(a,b){var c=Zc;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)}
;function $c(){}
;function ad(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=null;if(a=a||window.event){this.event=a;for(var b in a)b in bd||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?b=a.fromElement:"mouseout"==
this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey}}
ad.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
ad.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
ad.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};
var bd={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};function cd(a,b,c){this.b=a;this.g=b;this.f=c}
var dd=1;function ed(a){var b={};void 0!==a.b?b.trackingParams=a.b:(b.veType=a.g,null!=a.f&&(b.veCounter=a.f));return b}
;var fd=null;"undefined"!=typeof XMLHttpRequest?fd=function(){return new XMLHttpRequest}:"undefined"!=typeof ActiveXObject&&(fd=function(){return new ActiveXObject("Microsoft.XMLHTTP")});
function gd(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function hd(a){this.b=a}
hd.prototype.set=function(a,b){p(b)?this.b.set(a,Mc(b)):this.b.remove(a)};
hd.prototype.get=function(a){var b;try{b=this.b.get(a)}catch(c){return}if(null!==b)try{return Kc(b)}catch(c){throw"Storage: Invalid value was encountered";}};
hd.prototype.remove=function(a){this.b.remove(a)};var G;G=F(Ac,"___jsl",Hc());F(G,"I",0);F(G,"hel",10);function id(){var a=Cc.href,b;if(G.dpo)b=G.h;else{b=G.h;var c=RegExp("([#].*&|[#])jsh=([^&#]*)","g"),d=RegExp("([?#].*&|[?#])jsh=([^&#]*)","g");if(a=a&&(c.exec(a)||d.exec(a)))try{b=decodeURIComponent(a[2])}catch(e){}}return b}
function jd(a){var b=F(G,"PQ",[]);G.PQ=[];var c=b.length;if(0===c)a();else for(var d=0,e=function(){++d===c&&a()},f=0;f<c;f++)b[f](e)}
function ld(a){return F(F(G,"H",Hc()),a,Hc())}
;function md(){return z("iPhone")&&!z("iPod")&&!z("iPad")}
;function nd(a){this.b=a}
w(nd,hd);function od(a){this.data=a}
function pd(a){return!p(a)||a instanceof od?a:new od(a)}
nd.prototype.set=function(a,b){nd.B.set.call(this,a,pd(b))};
nd.prototype.f=function(a){a=nd.B.get.call(this,a);if(!p(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
nd.prototype.get=function(a){if(a=this.f(a)){if(a=a.data,!p(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};var qd=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function rd(a){return a.match(qd)}
function sd(a){return a?decodeURI(a):a}
function td(a){if(a[1]){var b=a[0],c=b.indexOf("#");0<=c&&(a.push(b.substr(c)),a[0]=b=b.substr(0,c));c=b.indexOf("?");0>c?a[1]="?":c==b.length-1&&(a[1]=void 0)}return a.join("")}
function ud(a,b,c){if(da(b))for(var d=0;d<b.length;d++)ud(a,String(b[d]),c);else null!=b&&c.push("&",a,""===b?"":"=",encodeURIComponent(String(b)))}
function vd(a,b,c){for(c=c||0;c<b.length;c+=2)ud(b[c],b[c+1],a);return a}
function wd(a,b){for(var c in b)ud(c,b[c],a);return a}
function xd(a){a=wd([],a);a[0]="";return a.join("")}
function yd(a,b){return td(2==arguments.length?vd([a],arguments[1],0):vd([a],arguments,1))}
;function zd(a){return B("EXPERIMENT_FLAGS",{})[a]}
;function Ad(){return{apiaryHost:B("APIARY_HOST",void 0),Jb:B("APIARY_HOST_FIRSTPARTY",void 0),gapiHintOverride:B("GAPI_HINT_OVERRIDE"),gapiHintParams:B("GAPI_HINT_PARAMS",void 0),innertubeApiKey:B("INNERTUBE_API_KEY",void 0),innertubeApiVersion:B("INNERTUBE_API_VERSION",void 0),cc:B("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:B("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),ec:B("INNERTUBE_CONTEXT_HL",void 0),dc:B("INNERTUBE_CONTEXT_GL",void 0),Qc:B("XHR_APIARY_HOST",void 0)}}
function Bd(a){a={client:{hl:a.ec,gl:a.dc,clientName:a.cc,clientVersion:a.innertubeContextClientVersion}};B("DELEGATED_SESSION_ID")&&(a.user={onBehalfOfUser:B("DELEGATED_SESSION_ID")});return a}
;function Cd(a,b,c){var d=[],e=[];if(1==(da(c)?2:1))return e=[b,a],C(d,function(a){e.push(a)}),Dd(e.join(" "));
var f=[],g=[];C(c,function(a){g.push(a.key);f.push(a.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];C(d,function(a){e.push(a)});
a=Dd(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Dd(a){var b=zc();b.update(a);return b.Nb().toLowerCase()}
;var Ed=F(G,"perf",Hc());F(Ed,"g",Hc());var Fd=F(Ed,"i",Hc());F(Ed,"r",[]);Hc();Hc();function Gd(a,b,c){b&&0<b.length&&(b=Hd(b),c&&0<c.length&&(b+="___"+Hd(c)),28<b.length&&(b=b.substr(0,28)+(b.length-28)),c=b,b=F(Fd,"_p",Hc()),F(b,c,Hc())[a]=(new Date).getTime(),b=Ed.r,"function"===typeof b?b(a,"_p",c):b.push([a,"_p",c]))}
function Hd(a){return a.join("__").replace(/\./g,"_").replace(/\-/g,"_").replace(/\,/g,"_")}
;function Id(a){if(a.classList)return a.classList;a=a.className;return u(a)&&a.match(/\S+/g)||[]}
function I(a,b){return a.classList?a.classList.contains(b):kb(Id(a),b)}
function J(a,b){a.classList?a.classList.add(b):I(a,b)||(a.className+=0<a.className.length?" "+b:b)}
function Jd(a,b){if(a.classList)C(b,function(b){J(a,b)});
else{var c={};C(Id(a),function(a){c[a]=!0});
C(b,function(a){c[a]=!0});
a.className="";for(var d in c)a.className+=0<a.className.length?" "+d:d}}
function Kd(a,b){a.classList?a.classList.remove(b):I(a,b)&&(a.className=gb(Id(a),function(a){return a!=b}).join(" "))}
function Ld(a,b){a.classList?C(b,function(b){Kd(a,b)}):a.className=gb(Id(a),function(a){return!kb(b,a)}).join(" ")}
function Md(a,b,c){c?J(a,b):Kd(a,b)}
function Nd(a,b,c){I(a,b)&&(Kd(a,b),J(a,c))}
function Od(a,b){var c=!I(a,b);Md(a,b,c)}
;function Pd(a){this.b=a}
w(Pd,nd);Pd.prototype.set=function(a,b,c){if(b=pd(b)){if(c){if(c<pa()){Pd.prototype.remove.call(this,a);return}b.expiration=c}b.creation=pa()}Pd.B.set.call(this,a,b)};
Pd.prototype.f=function(a,b){var c=Pd.B.f.call(this,a);if(c){var d;if(d=!b){d=c.creation;var e=c.expiration;d=!!e&&e<pa()||!!d&&d>pa()}if(d)Pd.prototype.remove.call(this,a);else return c}};function Qd(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=decodeURIComponent((e[0]||"").replace(/\+/g," ")),e=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?da(b[f])?ob(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b}
function Rd(a,b){var c=a.split("#",2);a=c[0];var c=1<c.length?"#"+c[1]:"",d=a.split("?",2);a=d[0];var d=Qd(d[1]||""),e;for(e in b)d[e]=b[e];return td(wd([a],d))+c}
;var Sd=Hc(),Td=[];function Ud(a){throw Error("Bad hint"+(a?": "+a:""));}
Td.push(["jsl",function(a){for(var b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b];"object"==typeof c?G[b]=F(G,b,[]).concat(c):F(G,b,c)}if(b=a.u)a=F(G,"us",[]),a.push(b),(b=/^https:(.*)$/.exec(b))&&a.push("http:"+b[1])}]);
var Vd=/^(\/[a-zA-Z0-9_\-]+)+$/,Wd=[/\/amp\//,/\/amp$/,/^\/amp$/],Xd=/^[a-zA-Z0-9\-_\.,!]+$/,Yd=/^gapi\.loaded_[0-9]+$/,Zd=/^[a-zA-Z0-9,._-]+$/;function $d(a,b,c,d){var e=a.split(";"),f=e.shift(),g=Sd[f],k=null;g?k=g(e,b,c,d):Ud("no hint processor for: "+f);k||Ud("failed to generate load url");b=k;c=b.match(ae);(d=b.match(be))&&1===d.length&&ce.test(b)&&c&&1===c.length||Ud("failed sanity: "+a);return k}
function de(a,b,c,d){function e(a){return encodeURIComponent(a).replace(/%2C/g,",")}
a=ee(a);Yd.test(c)||Ud("invalid_callback");b=fe(b);d=d&&d.length?fe(d):null;return[encodeURIComponent(a.Cc).replace(/%2C/g,",").replace(/%2F/g,"/"),"/k=",e(a.version),"/m=",e(b),d?"/exm="+e(d):"","/rt=j/sv=1/d=1/ed=1",a.Ma?"/am="+e(a.Ma):"",a.lb?"/rs="+e(a.lb):"",a.xb?"/t="+e(a.xb):"","/cb=",e(c)].join("")}
function ee(a){"/"!==a.charAt(0)&&Ud("relative path");for(var b=a.substring(1).split("/"),c=[];b.length;){a=b.shift();if(!a.length||0==a.indexOf("."))Ud("empty/relative directory");else if(0<a.indexOf("=")){b.unshift(a);break}c.push(a)}a={};for(var d=0,e=b.length;d<e;++d){var f=b[d].split("="),g=decodeURIComponent(f[0]),k=decodeURIComponent(f[1]);2==f.length&&g&&k&&(a[g]=a[g]||k)}b="/"+c.join("/");Vd.test(b)||Ud("invalid_prefix");c=0;for(d=Wd.length;c<d;++c)Wd[c].test(b)&&Ud("invalid_prefix");c=ge(a,
"k",!0);d=ge(a,"am");e=ge(a,"rs");a=ge(a,"t");return{Cc:b,version:c,Ma:d,lb:e,xb:a}}
function fe(a){for(var b=[],c=0,d=a.length;c<d;++c){var e=a[c].replace(/\./g,"_").replace(/-/g,"_");Zd.test(e)&&b.push(e)}return b.join(",")}
function ge(a,b,c){a=a[b];!a&&c&&Ud("missing: "+b);if(a){if(Xd.test(a))return a;Ud("invalid: "+b)}return null}
var ce=/^https?:\/\/[a-z0-9_.-]+\.google\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,be=/\/cb=/g,ae=/\/\//g;function he(){var a=id();if(!a)throw Error("Bad hint");return a}
Sd.m=function(a,b,c,d){(a=a[0])||Ud("missing_hint");return"https://apis.google.com"+de(a,b,c,d)};
var ie=decodeURI("%73cript"),je=/^[-+_0-9\/A-Za-z]+={0,2}$/;function ke(a,b){for(var c=[],d=0;d<a.length;++d){var e=a[d];e&&0>Fc.call(b,e)&&c.push(e)}return c}
function le(){var a=G.nonce;if(void 0!==a)return a&&a===String(a)&&a.match(je)?a:G.nonce=null;var b=F(G,"us",[]);if(!b||!b.length)return G.nonce=null;for(var c=Bc.getElementsByTagName(ie),d=0,e=c.length;d<e;++d){var f=c[d];if(f.src&&(a=String(f.getAttribute("nonce")||"")||null)){for(var g=0,k=b.length;g<k&&b[g]!==f.src;++g);if(g!==k&&a&&a===String(a)&&a.match(je))return G.nonce=a}}return null}
function me(a){if("loading"!=Bc.readyState)ne(a);else{var b=le(),c="";null!==b&&(c=' nonce="'+b+'"');Bc.write("<"+ie+' src="'+encodeURI(a)+'"'+c+"></"+ie+">")}}
function ne(a){var b=Bc.createElement(ie);b.setAttribute("src",a);a=le();null!==a&&b.setAttribute("nonce",a);b.async="true";(a=Bc.getElementsByTagName(ie)[0])?a.parentNode.insertBefore(b,a):(Bc.head||Bc.body||Bc.documentElement).appendChild(b)}
function oe(a,b){var c=b&&b._c;if(c)for(var d=0;d<Td.length;d++){var e=Td[d][0],f=Td[d][1];f&&Object.prototype.hasOwnProperty.call(c,e)&&f(c[e],a,b)}}
function pe(a,b,c){qe(function(){var c;c=b===id()?F(Ic,"_",Hc()):Hc();c=F(ld(b),"_",c);a(c)},c)}
function re(a,b){var c=b||{};"function"==typeof b&&(c={},c.callback=b);oe(a,c);var d=a?a.split(":"):[],e=c.h||he(),f=F(G,"ah",Hc());if(f["::"]&&d.length){for(var g=[],k=null;k=d.shift();){var l=k.split("."),l=f[k]||f[l[1]&&"ns:"+l[0]||""]||e,m=g.length&&g[g.length-1]||null,r=m;m&&m.hint==l||(r={hint:l,features:[]},g.push(r));r.features.push(k)}var M=g.length;if(1<M){var V=c.callback;V&&(c.callback=function(){0==--M&&V()})}for(;d=g.shift();)se(d.features,c,d.hint)}else se(d||[],c,e)}
function se(a,b,c){function d(a,b){if(M)return 0;Ac.clearTimeout(r);V.push.apply(V,A);var d=((Ic||{}).config||{}).update;d?d(f):f&&F(G,"cu",[]).push(f);if(b){Gd("me0",a,H);try{pe(b,c,m)}finally{Gd("me1",a,H)}}return 1}
a=Gc(a)||[];var e=b.callback,f=b.config,g=b.timeout,k=b.ontimeout,l=b.onerror,m=void 0;"function"==typeof l&&(m=l);var r=null,M=!1;if(g&&!k||!g&&k)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";var l=F(ld(c),"r",[]).sort(),V=F(ld(c),"L",[]).sort(),H=[].concat(l);0<g&&(r=Ac.setTimeout(function(){M=!0;k()},g));
var A=ke(a,V);if(A.length){var A=ke(a,l),wa=F(G,"CP",[]),Y=wa.length;wa[Y]=function(a){function b(){var a=wa[Y+1];a&&a()}
function c(b){wa[Y]=null;d(A,a)&&jd(function(){e&&e();b()})}
if(!a)return 0;Gd("ml1",A,H);0<Y&&wa[Y-1]?wa[Y]=function(){c(b)}:c(b)};
if(A.length){var kd="loaded_"+G.I++;Ic[kd]=function(a){wa[Y](a);Ic[kd]=null};
a=$d(c,A,"gapi."+kd,l);l.push.apply(l,A);Gd("ml0",A,H);b.sync||Ac.___gapisync?me(a):ne(a)}else wa[Y](Dc)}else d(A)&&e&&e()}
function qe(a,b){if(G.hee&&0<G.hel)try{return a()}catch(c){b&&b(c),G.hel--,re("debug_error",function(){try{window.___jsl.hefn(c)}catch(d){throw c;}})}else try{return a()}catch(c){throw b&&b(c),c;
}}
Ic.load=function(a,b){return qe(function(){return re(a,b)})};var te="StopIteration"in n?n.StopIteration:{message:"StopIteration",stack:""};function ue(){}
ue.prototype.next=function(){throw te;};
ue.prototype.ea=function(){return this};
function ve(a){if(a instanceof ue)return a;if("function"==typeof a.ea)return a.ea(!1);if(ea(a)){var b=0,c=new ue;c.next=function(){for(;;){if(b>=a.length)throw te;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function we(a,b){if(ea(a))try{C(a,b,void 0)}catch(c){if(c!==te)throw c;}else{a=ve(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==te)throw c;}}}
function xe(a){if(ea(a))return nb(a);a=ve(a);var b=[];we(a,function(a){b.push(a)});
return b}
;function K(a,b){this.l=p(a)?a:0;this.o=p(b)?b:0}
K.prototype.equals=function(a){return a instanceof K&&(this==a?!0:this&&a?this.l==a.l&&this.o==a.o:!1)};
function ye(a,b){return new K(a.l-b.l,a.o-b.o)}
K.prototype.ceil=function(){this.l=Math.ceil(this.l);this.o=Math.ceil(this.o);return this};
K.prototype.floor=function(){this.l=Math.floor(this.l);this.o=Math.floor(this.o);return this};
K.prototype.round=function(){this.l=Math.round(this.l);this.o=Math.round(this.o);return this};var ze=z("Opera"),L=z("Trident")||z("MSIE"),Ae=z("Edge"),Be=Ae||L,Ce=z("Gecko")&&!(-1!=bb.toLowerCase().indexOf("webkit")&&!z("Edge"))&&!(z("Trident")||z("MSIE"))&&!z("Edge"),De=-1!=bb.toLowerCase().indexOf("webkit")&&!z("Edge"),Ee=z("Macintosh"),Fe=z("Windows"),Ge=z("Android"),He=md(),Ie=z("iPad"),Je=z("iPod");function Ke(){var a=n.document;return a?a.documentMode:void 0}
var Le;a:{var Me="",Ne=function(){var a=bb;if(Ce)return/rv\:([^\);]+)(\)|;)/.exec(a);if(Ae)return/Edge\/([\d\.]+)/.exec(a);if(L)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(De)return/WebKit\/(\S+)/.exec(a);if(ze)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Ne&&(Me=Ne?Ne[1]:"");if(L){var Oe=Ke();if(null!=Oe&&Oe>parseFloat(Me)){Le=String(Oe);break a}}Le=Me}var Pe=Le,Zc={};
function Qe(a){return Yc(a,function(){for(var b=0,c=Fa(String(Pe)).split("."),d=Fa(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",k=d[f]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];k=/(\d*)(\D*)(.*)/.exec(k)||["","","",""];if(0==g[0].length&&0==k[0].length)break;b=Ia(0==g[1].length?0:parseInt(g[1],10),0==k[1].length?0:parseInt(k[1],10))||Ia(0==g[2].length,0==k[2].length)||Ia(g[2],k[2]);g=g[3];k=k[3]}while(0==b)}return 0<=b})}
var Re;var Se=n.document;Re=Se&&L?Ke()||("CSS1Compat"==Se.compatMode?parseInt(Pe,10):5):void 0;var Te=!Ce&&!L||L&&9<=Number(Re)||Ce&&Qe("1.9.1"),Ue=L&&!Qe("9");function Ve(a){this.b=a}
w(Ve,Pd);function We(){}
w(We,$c);We.prototype.fa=function(){var a=0;we(this.ea(!0),function(){a++});
return a};
We.prototype.clear=function(){var a=xe(this.ea(!0)),b=this;C(a,function(a){b.remove(a)})};var Xe=z("Firefox"),Ye=md()||z("iPod"),Ze=z("iPad"),$e=z("Android")&&!(zb()||z("Firefox")||z("Opera")||z("Silk")),af=zb(),bf=yb()&&!(md()||z("iPad")||z("iPod"));function cf(a){df();var b=new wb;b.b=a;return b}
var df=aa;function ef(a,b){this.b=0;this.D=void 0;this.i=this.f=this.g=null;this.w=this.A=!1;if(a!=aa)try{var c=this;a.call(b,function(a){ff(c,2,a)},function(a){ff(c,3,a)})}catch(d){ff(this,3,d)}}
function gf(){this.next=this.context=this.f=this.g=this.b=null;this.i=!1}
gf.prototype.reset=function(){this.context=this.f=this.g=this.b=null;this.i=!1};
var hf=new qa(function(){return new gf},function(a){a.reset()},100);
function jf(a,b,c){var d=hf.get();d.g=a;d.f=b;d.context=c;return d}
function kf(a){if(a instanceof ef)return a;var b=new ef(aa);ff(b,2,a);return b}
function lf(a){return new ef(function(b,c){c(a)})}
ef.prototype.then=function(a,b,c){return mf(this,ga(a)?a:null,ga(b)?b:null,c)};
Wc(ef);ef.prototype.cancel=function(a){0==this.b&&Jb(function(){var b=new nf(a);of(this,b)},this)};
function of(a,b){if(0==a.b)if(a.g){var c=a.g;if(c.f){for(var d=0,e=null,f=null,g=c.f;g&&(g.i||(d++,g.b==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.b&&1==d?of(c,b):(f?(d=f,d.next==c.i&&(c.i=d),d.next=d.next.next):pf(c),qf(c,e,3,b)))}a.g=null}else ff(a,3,b)}
function rf(a,b){a.f||2!=a.b&&3!=a.b||sf(a);a.i?a.i.next=b:a.f=b;a.i=b}
function mf(a,b,c,d){var e=jf(null,null,null);e.b=new ef(function(a,g){e.g=b?function(c){try{var e=b.call(d,c);a(e)}catch(m){g(m)}}:a;
e.f=c?function(b){try{var e=c.call(d,b);!p(e)&&b instanceof nf?g(b):a(e)}catch(m){g(m)}}:g});
e.b.g=a;rf(a,e);return e.b}
ef.prototype.H=function(a){this.b=0;ff(this,2,a)};
ef.prototype.K=function(a){this.b=0;ff(this,3,a)};
function ff(a,b,c){if(0==a.b){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.b=1;var d;a:{var e=c,f=a.H,g=a.K;if(e instanceof ef)rf(e,jf(f||aa,g||null,a)),d=!0;else{var k;if(e)try{k=!!e.$goog_Thenable}catch(m){k=!1}else k=!1;if(k)e.then(f,g,a),d=!0;else{if(ha(e))try{var l=e.then;if(ga(l)){tf(e,l,f,g,a);d=!0;break a}}catch(m){g.call(a,m);d=!0;break a}d=!1}}}d||(a.D=c,a.b=b,a.g=null,sf(a),3!=b||c instanceof nf||uf(a,c))}}
function tf(a,b,c,d,e){function f(a){k||(k=!0,d.call(e,a))}
function g(a){k||(k=!0,c.call(e,a))}
var k=!1;try{b.call(a,g,f)}catch(l){f(l)}}
function sf(a){a.A||(a.A=!0,Jb(a.F,a))}
function pf(a){var b=null;a.f&&(b=a.f,a.f=b.next,b.next=null);a.f||(a.i=null);return b}
ef.prototype.F=function(){for(var a;a=pf(this);)qf(this,a,this.b,this.D);this.A=!1};
function qf(a,b,c,d){if(3==c&&b.f&&!b.i)for(;a&&a.w;a=a.g)a.w=!1;if(b.b)b.b.g=null,vf(b,c,d);else try{b.i?b.g.call(b.context):vf(b,c,d)}catch(e){wf.call(null,e)}ra(hf,b)}
function vf(a,b,c){2==b?a.g.call(a.context,c):a.f&&a.f.call(a.context,c)}
function uf(a,b){a.w=!0;Jb(function(){a.w&&wf.call(null,b)})}
var wf=Ab;function nf(a){sa.call(this,a)}
w(nf,sa);nf.prototype.name="cancel";function xf(a){this.b=a}
w(xf,We);h=xf.prototype;h.isAvailable=function(){if(!this.b)return!1;try{return this.b.setItem("__sak","1"),this.b.removeItem("__sak"),!0}catch(a){return!1}};
h.set=function(a,b){try{this.b.setItem(a,b)}catch(c){if(0==this.b.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
h.get=function(a){a=this.b.getItem(a);if(!u(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
h.remove=function(a){this.b.removeItem(a)};
h.fa=function(){return this.b.length};
h.ea=function(a){var b=0,c=this.b,d=new ue;d.next=function(){if(b>=c.length)throw te;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!u(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
h.clear=function(){this.b.clear()};
h.key=function(a){return this.b.key(a)};function yf(a){return a?new zf(Af(a)):ta||(ta=new zf)}
function N(a){return u(a)?document.getElementById(a):a}
function Bf(a){var b=document;return u(a)?b.getElementById(a):a}
function Cf(a,b){var c=b||document;return c.querySelectorAll&&c.querySelector?c.querySelectorAll("."+a):Df("*",a,b)}
function O(a,b){var c=b||document,d=null;c.getElementsByClassName?d=c.getElementsByClassName(a)[0]:c.querySelectorAll&&c.querySelector?d=c.querySelector("."+a):d=Df("*",a,b)[0];return d||null}
function Df(a,b,c){var d=document;c=c||d;a=a&&"*"!=a?String(a).toUpperCase():"";if(c.querySelectorAll&&c.querySelector&&(a||b))return c.querySelectorAll(a+(b?"."+b:""));if(b&&c.getElementsByClassName){c=c.getElementsByClassName(b);if(a){for(var d={},e=0,f=0,g;g=c[f];f++)a==g.nodeName&&(d[e++]=g);d.length=e;return d}return c}c=c.getElementsByTagName(a||"*");if(b){d={};for(f=e=0;g=c[f];f++)a=g.className,"function"==typeof a.split&&kb(a.split(/\s+/),b)&&(d[e++]=g);d.length=e;return d}return c}
function Ef(a,b){ua(b,function(b,d){"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:Ff.hasOwnProperty(d)?a.setAttribute(Ff[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})}
var Ff={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};function Gf(a){a=a.document;a=Hf(a)?a.documentElement:a.body;return new Sc(a.clientWidth,a.clientHeight)}
function If(a){var b=Jf(a);a=Kf(a);return L&&Qe("10")&&a.pageYOffset!=b.scrollTop?new K(b.scrollLeft,b.scrollTop):new K(a.pageXOffset||b.scrollLeft,a.pageYOffset||b.scrollTop)}
function Jf(a){return a.scrollingElement?a.scrollingElement:!De&&Hf(a)?a.documentElement:a.body||a.documentElement}
function Kf(a){return a.parentWindow||a.defaultView}
function Hf(a){return"CSS1Compat"==a.compatMode}
function Lf(a){for(var b;b=a.firstChild;)a.removeChild(b)}
function Mf(a){a&&a.parentNode&&a.parentNode.removeChild(a)}
function Nf(a){return Te&&void 0!=a.children?a.children:gb(a.childNodes,function(a){return 1==a.nodeType})}
function Of(a){if(!a)return null;if(a.firstChild)return a.firstChild;for(;a&&!a.nextSibling;)a=a.parentNode;return a?a.nextSibling:null}
function Pf(a){if(!a)return null;if(!a.previousSibling)return a.parentNode;for(a=a.previousSibling;a&&a.lastChild;)a=a.lastChild;return a}
function Qf(a){return ha(a)&&1==a.nodeType}
function Rf(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a}
function Af(a){return 9==a.nodeType?a:a.ownerDocument||a.document}
function Sf(a,b){if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=b;else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=b}else Lf(a),a.appendChild(Af(a).createTextNode(String(b)))}
function Tf(a,b){var c=[];return Uf(a,b,c,!0)?c[0]:void 0}
function Uf(a,b,c,d){if(null!=a)for(a=a.firstChild;a;){if(b(a)&&(c.push(a),d)||Uf(a,b,c,d))return!0;a=a.nextSibling}return!1}
var Vf={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1},Wf={IMG:" ",BR:"\n"};function Xf(a){var b;if((b="A"==a.tagName||"INPUT"==a.tagName||"TEXTAREA"==a.tagName||"SELECT"==a.tagName||"BUTTON"==a.tagName?!a.disabled&&(!Yf(a)||Zf(a)):Yf(a)&&Zf(a))&&L){var c;!ga(a.getBoundingClientRect)||L&&null==a.parentElement?c={height:a.offsetHeight,width:a.offsetWidth}:c=a.getBoundingClientRect();a=null!=c&&0<c.height&&0<c.width}else a=b;return a}
function Yf(a){return L&&!Qe("9")?(a=a.getAttributeNode("tabindex"),null!=a&&a.specified):a.hasAttribute("tabindex")}
function Zf(a){a=a.tabIndex;return fa(a)&&0<=a&&32768>a}
function $f(a){if(Ue&&null!==a&&"innerText"in a)a=a.innerText.replace(/(\r\n|\r|\n)/g,"\n");else{var b=[];ag(a,b,!0);a=b.join("")}a=a.replace(/ \xAD /g," ").replace(/\xAD/g,"");a=a.replace(/\u200B/g,"");Ue||(a=a.replace(/ +/g," "));" "!=a&&(a=a.replace(/^\s*/,""));return a}
function ag(a,b,c){if(!(a.nodeName in Vf))if(3==a.nodeType)c?b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):b.push(a.nodeValue);else if(a.nodeName in Wf)b.push(Wf[a.nodeName]);else for(a=a.firstChild;a;)ag(a,b,c),a=a.nextSibling}
function bg(a,b,c,d){if(!b&&!c)return null;var e=b?String(b).toUpperCase():null;return cg(a,function(a){return(!e||a.nodeName==e)&&(!c||u(a.className)&&kb(a.className.split(/\s+/),c))},!0,d)}
function P(a,b){return bg(a,null,b,void 0)}
function cg(a,b,c,d){a&&!c&&(a=a.parentNode);for(c=0;a&&(null==d||c<=d);){if(b(a))return a;a=a.parentNode;c++}return null}
function zf(a){this.b=a||n.document||document}
h=zf.prototype;h.getElementsByTagName=function(a,b){return(b||this.b).getElementsByTagName(String(a))};
h.createElement=function(a){return this.b.createElement(String(a))};
h.appendChild=function(a,b){a.appendChild(b)};
h.isElement=Qf;h.contains=Rf;function dg(){var a=null;try{a=window.localStorage||null}catch(b){}this.b=a}
w(dg,xf);function eg(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.b=a}
w(eg,xf);function fg(a){this.b=a||Ad();gg||(gg=hg(this.b))}
var gg=null;function hg(a){return(new ef(function(b){try{var c={gapiHintOverride:a.gapiHintOverride,_c:{jsl:{h:a.gapiHintParams}},callback:b},d=ga(c)?{callback:c}:c||{};d._c&&d._c.jsl&&d._c.jsl.h||Ea(d,{_c:{jsl:{h:B("GAPI_HINT_PARAMS",void 0)}}});if(d.gapiHintOverride||B("GAPI_HINT_OVERRIDE")){var e;var f=document.location.href;if(-1!=f.indexOf("?")){var f=(f||"").split("#")[0],g=f.split("?",2);e=Qd(1<g.length?g[1]:g[0])}else e={};var k=e.gapi_jsh;k&&Ea(d,{_c:{jsl:{h:k}}})}re("client",d)}catch(l){Pa(l)}})).then(function(){})}
fg.prototype.i=function(){var a=t("gapi.config.update");a("googleapis.config/auth/useFirstPartyAuth",!0);var b=this.b.apiaryHost;/^[\s\xa0]*$/.test(null==b?"":String(b))||a("googleapis.config/root",(-1==b.indexOf("://")?"//":"")+b);b=this.b.Jb;/^[\s\xa0]*$/.test(null==b?"":String(b))||a("googleapis.config/root-1p",(-1==b.indexOf("://")?"//":"")+b);a("googleapis.config/sessionIndex",B("SESSION_INDEX"));t("gapi.client.setApiKey")(this.b.innertubeApiKey)};
fg.prototype.f=function(){return{context:Bd(this.b)}};
fg.prototype.g=function(a,b,c){var d,e=!1;0<c.timeout&&(d=x(function(){e||(e=!0,c.$&&c.$())},c.timeout));
ig(this,a,b,function(a){if(!e)if(e=!0,d&&Oa(d),a)c.O&&c.O(a);else if(c.onError)c.onError()})};
function ig(a,b,c,d){var e={path:"/youtubei/"+a.b.innertubeApiVersion+"/"+b,headers:{"X-Goog-Visitor-Id":B("VISITOR_DATA")},method:"POST",body:Mc(c)},f=v(a.i,a);gg.then(function(){f();t("gapi.client.request")(e).execute(d||aa)})}
;function jg(a){var b=a.__yt_uid_key;b||(b=kg(),a.__yt_uid_key=b);return b}
var kg=t("yt.dom.getNextId_");if(!kg){kg=function(){return++lg};
q("yt.dom.getNextId_",kg,void 0);var lg=0}function mg(a,b){a=N(a);b=N(b);return!!cg(a,function(a){return a===b},!0,void 0)}
function ng(a,b){var c=Df(a,null,b);return c.length?c[0]:null}
function og(){var a=document,b;ib(["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"],function(c){b=a[c];return!!b});
return b}
function pg(){Md(document.body,"hide-players",!1);C(Cf("preserve-players"),function(a){Kd(a,"preserve-players")})}
;var qg={log_event:"events",log_interaction:"interactions"},rg={},sg={},tg=0,Aa=t("yt.logging.transport.logsQueue_")||{};q("yt.logging.transport.logsQueue_",Aa,void 0);function ug(a,b){Aa[a.endpoint]=Aa[a.endpoint]||[];var c=Aa[a.endpoint];c.push(a.ib);sg[a.endpoint]=b;c.length>=(Number(zd("web_logging_max_batch")||0)||20)?vg():wg()}
function vg(){Oa(tg);if(!za()){for(var a in Aa){var b=rg[a];if(!b){b=sg[a];if(!b)continue;b=new b;rg[a]=b}var c=b.f();c.requestTimeMs=Math.round(Ra());c[qg[a]]=Aa[a];b.g(a,c,{});delete Aa[a]}za()||wg()}}
function wg(){Oa(tg);tg=x(vg,B("LOGGING_BATCH_TIMEOUT",1E4))}
;function xg(){if(!yg&&!zg||!window.JSON)return null;var a;try{a=yg.get("yt-player-two-stage-token")}catch(b){}if(!u(a))try{a=zg.get("yt-player-two-stage-token")}catch(b){}if(!u(a))return null;try{a=JSON.parse(a,void 0)}catch(b){}return a}
var zg,Ag=new dg;zg=Ag.isAvailable()?new Ve(Ag):null;var yg,Bg=new eg;yg=Bg.isAvailable()?new Ve(Bg):null;var ya=t("yt.events.listeners_")||{};q("yt.events.listeners_",ya,void 0);var Cg=t("yt.events.counter_")||{count:0};q("yt.events.counter_",Cg,void 0);function Dg(a,b,c,d){a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return xa(function(e){return e[0]==a&&e[1]==b&&e[2]==c&&e[4]==!!d})}
function Q(a,b,c,d){if(!a||!a.addEventListener&&!a.attachEvent)return"";d=!!d;var e=Dg(a,b,c,d);if(e)return e;var e=++Cg.count+"",f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document),g;g=f?function(d){d=new ad(d);if(!cg(d.relatedTarget,function(b){return b==a},!0))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new ad(b);
b.currentTarget=a;return c.call(a,b)};
g=Na(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),a.addEventListener(b,g,d)):a.attachEvent("on"+b,g);ya[e]=[a,b,c,g,d];return e}
function Eg(a,b,c){return Fg(a,b,function(a){return I(a,c)})}
function Fg(a,b,c){var d=a||document;return Q(d,"click",function(a){var e=cg(a.target,function(a){return a===d||c(a)},!0);
e&&e!==d&&!e.disabled&&(a.currentTarget=e,b.call(e,a))})}
function Gg(a){a&&("string"==typeof a&&(a=[a]),C(a,function(a){if(a in ya){var b=ya[a],d=b[0],e=b[1],f=b[3],b=b[4];d.removeEventListener?d.removeEventListener(e,f,b):d.detachEvent&&d.detachEvent("on"+e,f);delete ya[a]}}))}
function Hg(a){a=a||window.event;a=a.target||a.srcElement;3==a.nodeType&&(a=a.parentNode);return a}
function Ig(a){if(document.createEvent){var b=document.createEvent("HTMLEvents");b.initEvent("click",!0,!0);a.dispatchEvent(b)}else b=document.createEventObject(),a.fireEvent("onclick",b)}
;function Jg(a,b,c,d,e,f,g){function k(){4==(l&&"readyState"in l?l.readyState:0)&&b&&Na(b)(l)}
var l=fd&&fd();if(!("open"in l))return null;"onloadend"in l?l.addEventListener("loadend",k,!1):l.onreadystatechange=k;c=(c||"GET").toUpperCase();d=d||"";l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);f="POST"==c;if(e=Kg(a,e))for(var m in e)l.setRequestHeader(m,e[m]),"content-type"==m.toLowerCase()&&(f=!1);f&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");l.send(d);return l}
function Kg(a,b){b=b||{};var c;c||(c=window.location.href);var d=rd(a)[1]||null,e=sd(rd(a)[3]||null);d&&e?(d=c,c=rd(a),d=rd(d),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?sd(rd(c)[3]||null)==e&&(Number(rd(c)[4]||null)||null)==(Number(rd(a)[4]||null)||null):!0;for(var f in Lg){if((e=d=B(Lg[f]))&&!(e=c)){var e=f,g=B("CORS_HEADER_WHITELIST")||{},k=sd(rd(a)[3]||null);e=k?(g=g[k])?kb(g,e):!1:!0}e&&(b[f]=d)}return b}
function Mg(a,b){b.method="POST";b.J||(b.J={});Ng(a,b)}
function Og(a,b){var c=B("XSRF_FIELD_NAME",void 0),d;b.headers&&(d=b.headers["Content-Type"]);return!b.ed&&(!sd(rd(a)[3]||null)||b.withCredentials||sd(rd(a)[3]||null)==document.location.hostname)&&"POST"==b.method&&(!d||"application/x-www-form-urlencoded"==d)&&!(b.J&&b.J[c])}
function Ng(a,b){var c=b.format||"JSON";b.ac&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var d=B("XSRF_FIELD_NAME",void 0),e=B("XSRF_TOKEN",void 0),f=b.Da;f&&(f[d]&&delete f[d],a=Rd(a,f||{}));var g=b.postBody||"",f=b.J;Og(a,b)&&(f||(f={}),f[d]=e);f&&u(g)&&(d=Qd(g),Ea(d,f),g=b.jb&&"JSON"==b.jb?JSON.stringify(d):xd(d));var k=!1,l,m=Jg(a,function(a){if(!k){k=!0;l&&Oa(l);var d=gd(a),e=null;if(d||400<=a.status&&500>a.status)e=
Pg(c,a,b.dd);if(d)a:if(204==a.status)d=!0;else{switch(c){case "XML":d=0==parseInt(e&&e.return_code,10);break a;case "RAW":d=!0;break a}d=!!e}var e=e||{},f=b.context||n;d?b.O&&b.O.call(f,a,e):b.onError&&b.onError.call(f,a,e);b.Ba&&b.Ba.call(f,a,e)}},b.method,g,b.headers,b.responseType,b.withCredentials);
b.$&&0<b.timeout&&(l=x(function(){k||(k=!0,m.abort(),Oa(l),b.$.call(b.context||n,m))},b.timeout))}
function Pg(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=Lc(a));break;case "XML":if(b=(b=b.responseXML)?Qg(b):null)d={},C(b.getElementsByTagName("*"),function(a){d[a.tagName]=Rg(a)})}c&&Sg(d);
return d}
function Sg(a){if(ha(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d;d=Sb(a[b]);a[c]=d}else Sg(a[b])}}
function Qg(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Rg(a){var b="";C(a.childNodes,function(a){b+=a.nodeValue});
return b}
var Lg={"X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"};var Tg={},Ug=0;function Vg(){this.b=Ad()}
Vg.prototype.f=function(){return{context:Bd(this.b)}};
Vg.prototype.g=function(a,b,c){b={headers:{"Content-Type":"application/json","X-Goog-Visitor-Id":B("VISITOR_DATA")},J:b,jb:"JSON",$:c.$,O:c.O,onError:c.onError,timeout:c.timeout,withCredentials:!0};a:{c=[];var d=yc(String(n.location.href)),e=n.__OVERRIDE_SID;null==e&&(e=(new Tc(document)).get("SID"));if(e&&(d=(e=0==d.indexOf("https:")||0==d.indexOf("chrome-extension:"))?n.__SAPISID:n.__APISID,null==d&&(d=(new Tc(document)).get(e?"SAPISID":"APISID")),d)){var e=e?"SAPISIDHASH":"APISIDHASH",f=String(n.location.href);
c=f&&d&&e?[e,Cd(yc(f),d,c||null)].join(" "):null;break a}c=null}c&&(b.headers.Authorization=c,b.headers["X-Goog-AuthUser"]=B("SESSION_INDEX",0));Mg("//"+this.b.Qc+("/youtubei/"+this.b.innertubeApiVersion+"/"+a)+"?alt=json&key="+this.b.innertubeApiKey,b)};function Wg(){if(null==t("_lact",window)){var a=parseInt(B("LACT"),10),a=isFinite(a)?pa()-Math.max(a,0):-1;q("_lact",a,window);-1==a&&Xg();Q(document,"keydown",Xg);Q(document,"keyup",Xg);Q(document,"mousedown",Xg);Q(document,"mouseup",Xg);cc("page-mouse",Xg);cc("page-scroll",Xg);cc("page-resize",Xg)}}
function Xg(){null==t("_lact",window)&&(Wg(),t("_lact",window));var a=pa();q("_lact",a,window);E("USER_ACTIVE")}
function Yg(){var a=t("_lact",window);return null==a?-1:Math.max(pa()-a,0)}
;function Zg(a,b,c,d){var e={};e.eventTimeMs=Math.round(d||Ra());e[a]=b;zd("web_gel_lact")&&(e.context={lastActivityMs:Yg()});ug({endpoint:"log_event",ib:e},c)}
;function $g(a,b,c){ah(bh(),{attachChild:{csn:a,parentVisualElement:ed(b),visualElements:[ed(c)]}},void 0)}
function ch(a,b){var c=bh(),d=hb(b,function(a){return ed(a)});
ah(c,{visibilityUpdate:{csn:a,visualElements:d}})}
function ah(a,b,c){b.eventTimeMs=Math.round(Ra());b.lactMs=Yg();c&&(b.clientData=dh(c));ug({endpoint:"log_interaction",ib:b},a)}
function dh(a){var b={};a.analyticsChannelData&&(b.analyticsDatas=hb(a.analyticsChannelData,function(a){return{tabName:a.tabName,cardName:a.cardName,isChannelScreen:a.isChannelScreen,insightId:a.insightId,externalChannelId:a.externalChannelId,externalContentOwnerId:a.externalContentOwnerId}}));
return{playbackData:{clientPlaybackNonce:a.clientPlaybackNonce},analyticsChannelData:b,externalLinkData:a.externalLinkData}}
;function bh(){return zd("enable_youtubei_innertube")?Vg:fg}
;function eh(){var a=B("ROOT_VE_TYPE",void 0);return a?new cd(void 0,a,void 0):null}
function fh(){var a=B("client-screen-nonce",void 0);a||(a=B("EVENT_ID",void 0));return a}
;var gh=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};q("yt.msgs_",gh,void 0);var hh=pa().toString();function ih(a){var b,c;b=void 0===b?{}:b;c=void 0===c?"":c;var d=window.location;a=td(wd([a],b))+c;a=a instanceof Db?a:Hb(a);d.href=Fb(a)}
function jh(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=B("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){var d=a,e=B("VALID_SESSION_TEMPDATA_DOMAINS",[]),f=sd(rd(window.location.href)[3]||null);f&&e.push(f);f=sd(rd(d)[3]||null);if(kb(e,f)||!f&&0==d.lastIndexOf("/",0))if(zd("autoescape_tempdata_url")&&(e=document.createElement("a"),Tb(e,d),d=e.href),d){var f=rd(d),d=f[5],e=f[6],f=f[7],g="";d&&(g+=d);e&&(g+="?"+e);f&&(g+="#"+f);d=g;e=d.indexOf("#");if(d=0>e?d:d.substr(0,e)){if(b.itct||b.ved)b.csn=b.csn||
fh();d="ST-"+Ja(d).toString(36);e=b?xd(b):"";Vc.set(""+d,e,5,"/","youtube.com");b&&(b=b.itct||b.ved,d=t("yt.logging.screen.storeParentElement"),b&&d&&d(new cd(b)))}}}if(c)return!1;(window.ytspf||{}).enabled?spf.navigate(a):ih(a);return!0}
;function kh(a){a=a||{};this.url=a.url||"";this.urlV9As2=a.url_v9as2||"";this.args=a.args||Ca(lh);this.assets=a.assets||{};this.attrs=a.attrs||Ca(mh);this.params=a.params||Ca(nh);this.minVersion=a.min_version||"8.0.0";this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
var lh={enablejsapi:1},mh={},nh={allowscriptaccess:"always",allowfullscreen:"true",bgcolor:"#000000"};function oh(a){a instanceof kh||(a=new kh(a));return a}
function ph(a){var b=new kh,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"object"==ca(d)?b[c]=Ca(d):b[c]=d}return b}
;function qh(){this.g=this.f=this.b=0;this.i="";var a=t("window.navigator.plugins"),b=t("window.navigator.mimeTypes"),a=a&&a["Shockwave Flash"],b=b&&b["application/x-shockwave-flash"],b=a&&b&&b.enabledPlugin&&a.description||"";if(a=b){var c=a.indexOf("Shockwave Flash");0<=c&&(a=a.substr(c+15));for(var c=a.split(" "),d="",a="",e=0,f=c.length;e<f;e++)if(d)if(a)break;else a=c[e];else d=c[e];d=d.split(".");c=parseInt(d[0],10)||0;d=parseInt(d[1],10)||0;e=0;if("r"==a.charAt(0)||"d"==a.charAt(0))e=parseInt(a.substr(1),
10)||0;a=[c,d,e]}else a=[0,0,0];this.i=b;b=a;this.b=b[0];this.f=b[1];this.g=b[2];if(0>=this.b){var g,k,l,m;if(Sa)try{g=new ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(r){g=null}else l=document.body,m=document.createElement("object"),m.setAttribute("type","application/x-shockwave-flash"),g=l.appendChild(m);if(g&&"GetVariable"in g)try{k=g.GetVariable("$version")}catch(r){k=""}l&&m&&l.removeChild(m);(g=k||"")?(g=g.split(" ")[1].split(","),g=[parseInt(g[0],10)||0,parseInt(g[1],10)||0,parseInt(g[2],
10)||0]):g=[0,0,0];this.b=g[0];this.f=g[1];this.g=g[2]}}
ba(qh);function rh(a,b,c,d){b="string"==typeof b?b.split("."):[b,c,d];b[0]=parseInt(b[0],10)||0;b[1]=parseInt(b[1],10)||0;b[2]=parseInt(b[2],10)||0;return a.b>b[0]||a.b==b[0]&&a.f>b[1]||a.b==b[0]&&a.f==b[1]&&a.g>=b[2]}
;function sh(){y.call(this);this.b=new D;Za(this,na($a,this.b))}
w(sh,y);sh.prototype.subscribe=function(a,b,c){return this.C()?0:this.b.subscribe(a,b,c)};
sh.prototype.U=function(a){return this.C()?!1:this.b.U(a)};
sh.prototype.i=function(a,b){this.C()||this.b.M.apply(this.b,arguments)};function th(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d}
h=th.prototype;h.getHeight=function(){return this.bottom-this.top};
h.contains=function(a){return this&&a?a instanceof th?a.left>=this.left&&a.right<=this.right&&a.top>=this.top&&a.bottom<=this.bottom:a.l>=this.left&&a.l<=this.right&&a.o>=this.top&&a.o<=this.bottom:!1};
h.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};
h.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};
h.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};function uh(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d}
uh.prototype.contains=function(a){return a instanceof K?a.l>=this.left&&a.l<=this.left+this.width&&a.o>=this.top&&a.o<=this.top+this.height:this.left<=a.left&&this.left+this.width>=a.left+a.width&&this.top<=a.top&&this.top+this.height>=a.top+a.height};
uh.prototype.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
uh.prototype.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
uh.prototype.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function vh(a,b,c){if(u(b))(b=wh(a,b))&&(a.style[b]=c);else for(var d in b){c=a;var e=b[d],f=wh(c,d);f&&(c.style[f]=e)}}
var xh={};function wh(a,b){var c=xh[b];if(!c){var d=Ka(b),c=d;void 0===a.style[d]&&(d=(De?"Webkit":Ce?"Moz":L?"ms":ze?"O":null)+La(d),void 0!==a.style[d]&&(c=d));xh[b]=c}return c}
function yh(a,b){var c=Af(a);return c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,null))?c[b]||c.getPropertyValue(b)||"":""}
function zh(a,b){return yh(a,b)||(a.currentStyle?a.currentStyle[b]:null)||a.style&&a.style[b]}
function Ah(a){var b;try{b=a.getBoundingClientRect()}catch(c){return{left:0,top:0,right:0,bottom:0}}L&&a.ownerDocument.body&&(a=a.ownerDocument,b.left-=a.documentElement.clientLeft+a.body.clientLeft,b.top-=a.documentElement.clientTop+a.body.clientTop);return b}
function Bh(a){if(L&&!(8<=Number(Re)))return a.offsetParent;var b=Af(a),c=zh(a,"position"),d="fixed"==c||"absolute"==c;for(a=a.parentNode;a&&a!=b;a=a.parentNode)if(11==a.nodeType&&a.host&&(a=a.host),c=zh(a,"position"),d=d&&"static"==c&&a!=b.documentElement&&a!=b.body,!d&&(a.scrollWidth>a.clientWidth||a.scrollHeight>a.clientHeight||"fixed"==c||"absolute"==c||"relative"==c))return a;return null}
function Ch(a){for(var b=new th(0,Infinity,Infinity,0),c=yf(a),d=c.b.body,e=c.b.documentElement,f=Jf(c.b);a=Bh(a);)if(!(L&&0==a.clientWidth||De&&0==a.clientHeight&&a==d)&&a!=d&&a!=e&&"visible"!=zh(a,"overflow")){var g=Dh(a),k=new K(a.clientLeft,a.clientTop);g.l+=k.l;g.o+=k.o;b.top=Math.max(b.top,g.o);b.right=Math.min(b.right,g.l+a.clientWidth);b.bottom=Math.min(b.bottom,g.o+a.clientHeight);b.left=Math.max(b.left,g.l)}d=f.scrollLeft;f=f.scrollTop;b.left=Math.max(b.left,d);b.top=Math.max(b.top,f);c=
Gf(Kf(c.b)||window);b.right=Math.min(b.right,d+c.width);b.bottom=Math.min(b.bottom,f+c.height);return 0<=b.top&&0<=b.left&&b.bottom>b.top&&b.right>b.left?b:null}
function Dh(a){var b=Af(a),c=new K(0,0),d;d=b?Af(b):document;d=!L||9<=Number(Re)||Hf(yf(d).b)?d.documentElement:d.body;if(a==d)return c;a=Ah(a);b=If(yf(b).b);c.l=a.left+b.l;c.o=a.top+b.o;return c}
function Eh(a){a=Ah(a);return new K(a.left,a.top)}
function Fh(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a}
function Gh(a){var b=Hh;if("none"!=zh(a,"display"))return b(a);var c=a.style,d=c.display,e=c.visibility,f=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";a=b(a);c.display=d;c.position=f;c.visibility=e;return a}
function Hh(a){var b=a.offsetWidth,c=a.offsetHeight,d=De&&!b&&!c;return p(b)&&!d||!a.getBoundingClientRect?new Sc(b,c):(a=Ah(a),new Sc(a.right-a.left,a.bottom-a.top))}
function Ih(a){var b=Dh(a);a=Gh(a);return new uh(b.l,b.o,a.width,a.height)}
function Jh(a){return"rtl"==zh(a,"direction")}
function Kh(a,b){if(/^\d+px?$/.test(b))return parseInt(b,10);var c=a.style.left,d=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;a.style.left=b;var e=a.style.pixelLeft;a.style.left=c;a.runtimeStyle.left=d;return+e}
function Lh(a,b){var c=a.currentStyle?a.currentStyle[b]:null;return c?Kh(a,c):0}
var Mh={thin:2,medium:4,thick:6};function Nh(a,b){if("none"==(a.currentStyle?a.currentStyle[b+"Style"]:null))return 0;var c=a.currentStyle?a.currentStyle[b+"Width"]:null;return c in Mh?Mh[c]:Kh(a,c)}
;function Oh(a,b,c,d){y.call(this);this.g=b||null;this.D="*";this.i=c||null;this.b=null;this.channel=d||null;this.K=!!a;this.F=v(this.N,this);window.addEventListener("message",this.F)}
w(Oh,y);Oh.prototype.N=function(a){if(!("*"!=this.i&&a.origin!=this.i||this.g&&a.source!=this.g)&&u(a.data)){var b;try{b=Kc(a.data)}catch(c){return}if(!(null==b||this.K&&(this.b&&this.b!=b.id||this.channel&&this.channel!=b.channel))&&b)switch(b.event){case "listening":"null"!=a.origin?this.i=this.D=a.origin:Pa(Error("MessageEvent origin is null"),"WARNING");this.g=a.source;this.b=b.id;this.f&&(this.f(),this.f=null);break;case "command":this.w&&(this.A&&!kb(this.A,b.func)||this.w(b.func,b.args))}}};
Oh.prototype.sendMessage=function(a,b){var c=b||this.g;if(c){this.b&&(a.id=this.b);this.channel&&(a.channel=this.channel);try{var d=Mc(a);c.postMessage(d,this.D)}catch(e){Pa(e,"WARNING")}}};
Oh.prototype.G=function(){window.removeEventListener("message",this.F);Oh.B.G.call(this)};function Ph(a,b,c){Oh.call(this,a,b,c||B("POST_MESSAGE_ORIGIN",void 0)||window.document.location.protocol+"//"+window.document.location.hostname,"widget");this.A=this.f=this.w=null}
w(Ph,Oh);function Qh(){var a=og();return a?a:null}
;function Rh(a){if(window.spf){var b=a.match(Sh);spf.style.load(a,b?b[1]:"",void 0)}else Th(a)}
function Th(a){var b=Uh(a),c=document.getElementById(b),d=c&&Va(c,"loaded");d||c&&!d||(c=Vh(a,b,function(){Va(c,"loaded")||(Ta(c,"loaded","true"),E(b),x(na(hc,b),0))}))}
function Vh(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=cf(a);Ub(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function Uh(a){var b=document.createElement("a");Tb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Ja(a)}
var Sh=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;var Wh={},Xh=0;function Yh(a,b){a&&(B("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)?Jg(a,b):Zh(a,b))}
function Zh(a,b){var c=new Image,d=""+Xh++;Wh[d]=c;c.onload=c.onerror=function(){b&&Wh[d]&&b();delete Wh[d]};
c.src=a}
;function $h(){var a=Ca(ai);return new ef(function(b,c){a.O=function(a){gd(a)?b(a):c(new bi("Request failed, status="+a.status,"net.badstatus"))};
a.onError=function(){c(new bi("Unknown request error","net.unknown"))};
a.$=function(){c(new bi("Request timed out","net.timeout"))};
Ng("//googleads.g.doubleclick.net/pagead/id",a)})}
function bi(a,b){sa.call(this,a+", errorCode="+b);this.errorCode=b}
w(bi,sa);bi.prototype.name="PromiseAjaxError";var ci;var di=bb,di=di.toLowerCase();if(-1!=di.indexOf("android")){var ei=di.match(/android\D*(\d\.\d)[^\;|\)]*[\;\)]/);if(ei)ci=Number(ei[1]);else{var fi={cupcake:1.5,donut:1.6,eclair:2,froyo:2.2,gingerbread:2.3,honeycomb:3,"ice cream sandwich":4,jellybean:4.1,kitkat:4.4,lollipop:5.1,marshmallow:6,nougat:7.1},gi=[],hi=0,ii;for(ii in fi)gi[hi++]=ii;var ji=di.match("("+gi.join("|")+")");ci=ji?fi[ji[0]]:0}}else ci=void 0;var ki=bb,li=ki.match(/\((BB10|PlayBook|BlackBerry);/);!li||2>li.length||ki.match(/Version\/(\d+\.\d+)/);bb.match(/Mozilla\/[\d\.]+ \(Mobile;.* rv:([\d\.]+)\) Gecko\/[\d\.]+ Firefox\/[\d\.]+/);var mi;var ni=bb,oi=ni.match(/\((iPad|iPhone|iPod)( Simulator)?;/);if(!oi||2>oi.length)mi=void 0;else{var pi=ni.match(/\((iPad|iPhone|iPod)( Simulator)?; (U; )?CPU (iPhone )?OS (\d+_\d)[_ ]/);mi=pi&&6==pi.length?Number(pi[5].replace("_",".")):0}0<=mi&&0<=bb.search("Safari")&&bb.search("Version");var qi=['video/mp4; codecs="avc1.42001E, mp4a.40.2"','video/webm; codecs="vp8.0, vorbis"'],ri=['audio/mp4; codecs="mp4a.40.2"'];L&&Qe("9");!De||Qe("528");Ce&&Qe("1.9b")||L&&Qe("8")||ze&&Qe("9.5")||De&&Qe("528");Ce&&!Qe("8")||L&&Qe("9");function si(a){y.call(this);this.b=[];this.f=a||this}
w(si,y);function ti(a,b,c,d){d=Na(v(d,a.f));d={target:b,name:c,va:d};b.addEventListener(c,d.va,void 0);a.b.push(d)}
function ui(a){for(;a.b.length;){var b=a.b.pop();b.target.removeEventListener(b.name,b.va)}}
si.prototype.G=function(){ui(this);si.B.G.call(this)};function R(a,b){this.version=a;this.args=b}
function vi(a){if(!a.qb){var b={};a.call(b);a.qb=b.version}return a.qb}
function wi(a,b){function c(){a.apply(this,b.args)}
if(!b.args||!b.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");var d;try{d=vi(a)}catch(e){}if(!d||b.version!=d)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");c.prototype=a.prototype;try{return new c}catch(e){throw e.message="yt.pubsub2.Data.deserialize(): "+e.message,e;}}
function S(a,b){this.topic=a;this.b=b}
S.prototype.toString=function(){return this.topic};var xi=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{};function yi(a){R.call(this,1,arguments)}
w(yi,R);var zi=new S("timing-sent",yi);var Ai=t("yt.pubsub2.instance_")||new D;D.prototype.subscribe=D.prototype.subscribe;D.prototype.unsubscribeByKey=D.prototype.U;D.prototype.publish=D.prototype.M;D.prototype.clear=D.prototype.clear;q("yt.pubsub2.instance_",Ai,void 0);var Bi=t("yt.pubsub2.subscribedKeys_")||{};q("yt.pubsub2.subscribedKeys_",Bi,void 0);var Ci=t("yt.pubsub2.topicToKeys_")||{};q("yt.pubsub2.topicToKeys_",Ci,void 0);var Di=t("yt.pubsub2.isAsync_")||{};q("yt.pubsub2.isAsync_",Di,void 0);q("yt.pubsub2.skipSubKey_",null,void 0);
function T(a,b){var c=Ei();c&&c.publish.call(c,a.toString(),a,b)}
function Fi(a,b,c){var d=Ei();if(!d)return 0;var e=d.subscribe(a.toString(),function(d,g){if(!window.yt.pubsub2.skipSubKey_||window.yt.pubsub2.skipSubKey_!=e){var f=function(){if(Bi[e])try{if(g&&a instanceof S&&a!=d)try{g=wi(a.b,g)}catch(l){throw l.message="yt.pubsub2 cross-binary conversion error for "+a.toString()+": "+l.message,l;}b.call(c||window,g)}catch(l){Pa(l)}};
Di[a.toString()]?t("yt.scheduler.instance")?vb(f,void 0):x(f,0):f()}});
Bi[e]=!0;Ci[a.toString()]||(Ci[a.toString()]=[]);Ci[a.toString()].push(e);return e}
function Gi(a){var b=Ei();b&&(fa(a)&&(a=[a]),C(a,function(a){b.unsubscribeByKey(a);delete Bi[a]}))}
function Ei(){return t("yt.pubsub2.instance_")}
;function Hi(a,b,c){y.call(this);this.b=a;this.i=b||0;this.f=c;this.g=v(this.Pb,this)}
w(Hi,y);h=Hi.prototype;h.ga=0;h.G=function(){Hi.B.G.call(this);this.stop();delete this.b;delete this.f};
h.start=function(a){this.stop();var b=this.g;a=p(a)?a:this.i;if(!ga(b))if(b&&"function"==typeof b.handleEvent)b=v(b.handleEvent,b);else throw Error("Invalid listener argument");this.ga=2147483647<Number(a)?-1:n.setTimeout(b,a||0)};
h.stop=function(){this.isActive()&&n.clearTimeout(this.ga);this.ga=0};
h.isActive=function(){return 0!=this.ga};
h.Pb=function(){this.ga=0;this.b&&this.b.call(this.f)};var Ii={vc:!0},Ji={ad_at:"adType",cpn:"clientPlaybackNonce",csn:"clientScreenNonce",is_nav:"isNavigation",yt_lt:"loadType",yt_ad:"isMonetized",yt_ad_pr:"prerollAllowed",yt_red:"isRedSubscriber",yt_vis:"isVisible",docid:"videoId",plid:"videoId"},Ki="ap c cver ei yt_fss yt_li".split(" "),Li=["isNavigation","isMonetized","prerollAllowed","isRedSubscriber","isVisible"],Mi=v(xi.clearResourceTimings||xi.webkitClearResourceTimings||xi.mozClearResourceTimings||xi.msClearResourceTimings||xi.oClearResourceTimings||
aa,xi);
function Ni(a,b){if(!b&&"_"!=a[0]){var c=a;xi.mark&&(0==c.lastIndexOf("mark_",0)||(c="mark_"+c),xi.mark(c))}var c=Oi(),d=b||Ra();c[a]&&(c["_"+a]=c["_"+a]||[c[a]],c["_"+a].push(d));c[a]=d;(Pi()["tick_"+a]=b)||Ra();zd("csi_on_gel")?(c=Qi(),"_start"==a?Zg("latencyActionBaselined",{clientActionNonce:c},Vg,b):Zg("latencyActionTicked",{tickName:a,clientActionNonce:c},Vg,b),c=!0):c=!1;if(c=!c)c=!t("yt.timing.pingSent_");if(c&&(d=B("TIMING_ACTION",void 0),c=Oi(),t("yt.timing.ready_")&&d&&c._start&&Ri())){var d=
!0,e=B("TIMING_WAIT",[]);if(e.length)for(var f=0,g=e.length;f<g;++f)if(!(e[f]in c)){d=!1;break}d&&Si()}}
function Ti(){var a=Ui().info.yt_lt="hot_bg";Pi().info_yt_lt=a;if(zd("csi_on_gel"))if("yt_lt"in Ji){var b={},c=Ji.yt_lt;kb(Li,c)&&(a=!!a);b[c]=a;a=Qi();b.clientActionNonce=a;Zg("latencyActionInfo",b,Vg)}else"yt_lt"in Ki||Pa(Error("Unknown label yt_lt logged with GEL CSI."))}
function Ri(){var a=Oi();if(a.aft)return a.aft;for(var b=B("TIMING_AFT_KEYS",["ol"]),c=b.length,d=0;d<c;d++){var e=a[b[d]];if(e)return e}return NaN}
function Si(){if(!zd("csi_on_gel")){var a=Oi(),b=Ui().info,c=a._start,d;for(d in a)if(0==d.lastIndexOf("_",0)&&da(a[d])){var e=d.slice(1);if(e in Ii){var f=hb(a[d],function(a){return Math.round(a-c)});
b["all_"+e]=f.join()}delete a[d]}e=!!b.ap;if(f=t("yt.timing.reportbuilder_")){if(f=f(a,b,void 0))Vi(f,e),Wi(),Mi(),Xi(!1,void 0),B("TIMING_ACTION")&&eb("PREVIOUS_ACTION",B("TIMING_ACTION")),eb("TIMING_ACTION","")}else{var g=B("CSI_SERVICE_NAME","youtube"),f={v:2,s:g,action:B("TIMING_ACTION",void 0)},k=b.srt;void 0!==a.srt&&delete b.srt;if(b.h5jse){var l=window.location.protocol+t("ytplayer.config.assets.js");(l=xi.getEntriesByName?xi.getEntriesByName(l)[0]:null)?b.h5jse=Math.round(b.h5jse-l.responseEnd):
delete b.h5jse}a.aft=Ri();Yi()&&"youtube"==g&&(Ti(),g=a.vc,l=a.pbs,delete a.aft,b.aft=Math.round(l-g));for(var m in b)"_"!=m.charAt(0)&&(f[m]=b[m]);a.ps=Ra();b={};m=[];for(d in a)"_"!=d.charAt(0)&&(g=Math.round(a[d]-c),b[d]=g,m.push(d+"."+g));f.rt=m.join(",");(a=t("ytdebug.logTiming"))&&a(f,b);Vi(f,e,void 0);T(zi,new yi(b.aft+(k||0)))}}}
function Vi(a,b,c){if(zd("debug_csi_data")){var d=t("yt.timing.csiData");d||(d=[],q("yt.timing.csiData",d,void 0));d.push({page:location.href,time:new Date,args:a})}var d="",e;for(e in a)d+="&"+e+"="+a[e];a="/csi_204?"+d.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b)try{window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")||Yh(a,void 0)}catch(f){Yh(a,void 0)}else Yh(a);Xi(!0,c)}
function Qi(){var a=Ui().nonce;if(!a){var b;a:{if(window.crypto&&window.crypto.getRandomValues)try{var c=Array(16),d=new Uint8Array(16);window.crypto.getRandomValues(d);for(a=0;a<c.length;a++)c[a]=d[a];b=c;break a}catch(e){}b=Array(16);for(c=0;16>c;c++){d=pa();for(a=0;a<d%23;a++)b[c]=Math.random();b[c]=Math.floor(256*Math.random())}if(hh)for(c=1,d=0;d<hh.length;d++)b[c%16]=b[c%16]^b[(c-1)%16]/4^hh.charCodeAt(d),c++}c=[];for(d=0;d<b.length;d++)c.push("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_".charAt(b[d]&
63));a=c.join("");Ui().nonce=a}return a}
function Oi(){return Ui().tick}
function Pi(){var a=Ui();"gel"in a||(a.gel={});return a.gel}
function Ui(){return t("ytcsi.data_")||Wi()}
function Wi(){var a={tick:{},info:{}};q("ytcsi.data_",a,void 0);return a}
function Xi(a,b){q("yt.timing."+(b||"")+"pingSent_",a,void 0)}
function Yi(){var a=Oi(),b=a.pbr,c=a.vc,a=a.pbs;return b&&c&&a&&b<c&&c<a&&1==Ui().info.yt_pvis}
;new Hi(Zi,1E3);function Zi(){Ni("vptl",0);Ni("vpl",0)}
;var $i={"api.invalidparam":2,auth:150,"drm.auth":150,"heartbeat.net":150,"heartbeat.servererror":150,"heartbeat.stop":150,"html5.unsupportedads":5,"fmt.noneavailable":5,"fmt.decode":5,"fmt.unplayable":5,"html5.missingapi":5,"html5.unsupportedlive":5,"drm.unavailable":5};function aj(a,b){y.call(this);this.A=this.w=a;this.ca=b;this.F=!1;this.f={};this.ka=this.ba=null;this.da=new D;Za(this,na($a,this.da));this.i={};this.K=this.la=this.g=this.ua=this.b=null;this.ha=!1;this.N=this.D=this.V=this.W=null;this.ma={};this.Hb=["onReady"];this.ia=new si(this);Za(this,na($a,this.ia));this.sa=null;this.Ka=NaN;this.ja={};bj(this);this.R("onDetailedError",v(this.sc,this));this.R("onTabOrderChange",v(this.Mb,this));this.R("onTabAnnounce",v(this.La,this));this.R("WATCH_LATER_VIDEO_ADDED",
v(this.tc,this));this.R("WATCH_LATER_VIDEO_REMOVED",v(this.uc,this));Xe||(this.R("onMouseWheelCapture",v(this.pc,this)),this.R("onMouseWheelRelease",v(this.qc,this)));this.R("onAdAnnounce",v(this.La,this));this.T=new si(this);Za(this,na($a,this.T));this.ta=!1;this.ra=null}
w(aj,y);var cj=["drm.unavailable","fmt.noneavailable","html5.missingapi","html5.unsupportedads","html5.unsupportedlive"];h=aj.prototype;h.Ea=function(a,b){this.C()||(dj(this,a),ej(this,b),this.F&&fj(this))};
function dj(a,b){a.ua=b;a.b=ph(b);a.g=a.b.attrs.id||a.g;"video-player"==a.g&&(a.g=a.ca,a.b.attrs.id=a.ca);a.A.id==a.g&&(a.g+="-player",a.b.attrs.id=a.g);a.b.args.enablejsapi="1";a.b.args.playerapiid=a.ca;a.la||(a.la=gj(a,a.b.args.jsapicallback||"onYouTubePlayerReady"));a.b.args.jsapicallback=null;var c=a.b.attrs.width;c&&(a.A.style.width=Fh(Number(c)||c,!0));if(c=a.b.attrs.height)a.A.style.height=Fh(Number(c)||c,!0)}
h.Tb=function(){return this.ua};
function fj(a){a.b.loaded||(a.b.loaded=!0,"0"!=a.b.args.autoplay?a.f.loadVideoByPlayerVars(a.b.args):a.f.cueVideoByPlayerVars(a.b.args))}
function hj(a){if(!p(a.b.disable.flash)){var b=a.b.disable,c;c=rh(qh.getInstance(),a.b.minVersion);b.flash=!c}return!a.b.disable.flash}
function ij(a,b){if((!b||(5!=($i[b.errorCode]||5)?0:-1!=cj.indexOf(b.errorCode)))&&hj(a)){var c=jj(a);c&&c.stopVideo&&c.stopVideo();var d=a.b;c&&c.getUpdatedConfigurationData&&(c=c.getUpdatedConfigurationData(),d=oh(c));d.args.autoplay=1;d.args.html5_unavailable="1";dj(a,d);ej(a,"flash")}}
function ej(a,b){if(!a.C()){if(!b){var c;if(!(c=!a.b.html5&&hj(a))){if(!p(a.b.disable.html5)){var d;c=!0;void 0!=a.b.args.deviceHasDisplay&&(c=a.b.args.deviceHasDisplay);if(2.2==ci)d=!0;else{a:{var e=c;c=t("yt.player.utils.videoElement_");c||(c=document.createElement("VIDEO"),q("yt.player.utils.videoElement_",c,void 0));try{if(c.canPlayType)for(var e=e?qi:ri,f=0;f<e.length;f++)if(c.canPlayType(e[f])){d=null;break a}d="fmt.noneavailable"}catch(g){d="html5.missingapi"}}d=!d}d&&(d=kj(a)||a.b.assets.js);
a.b.disable.html5=!d;d||(a.b.args.html5_unavailable="1")}c=!!a.b.disable.html5}b=c?hj(a)?"flash":"unsupported":"html5"}("flash"==b?a.Oc:a.Pc).call(a)}}
function kj(a){var b=!0,c=jj(a);c&&a.b&&(a=a.b,b=Va(c,"version")==a.assets.js);return b&&!!t("yt.player.Application.create")}
h.Pc=function(){if(!this.ha){var a=kj(this);a&&"html5"==lj(this)?(this.K="html5",this.F||this.aa()):(mj(this),this.K="html5",a&&this.V?(this.w.appendChild(this.V),this.aa()):(this.b.loaded=!0,this.W=v(function(){var a=this.w,c=ph(this.b);t("yt.player.Application.create")(a,c);this.aa()},this),this.ha=!0,a?this.W():(ic(this.b.assets.js,this.W),Rh(this.b.assets.css))))}};
h.Oc=function(){var a=ph(this.b);if(!this.D){var b=jj(this);b&&(this.D=document.createElement("SPAN"),this.D.tabIndex=0,ti(this.ia,this.D,"focus",this.eb),this.N=document.createElement("SPAN"),this.N.tabIndex=0,ti(this.ia,this.N,"focus",this.eb),b.parentNode&&b.parentNode.insertBefore(this.D,b),b.parentNode&&b.parentNode.insertBefore(this.N,b.nextSibling))}a.attrs.width=a.attrs.width||"100%";a.attrs.height=a.attrs.height||"100%";if("flash"==lj(this))this.K="flash",this.F||this.aa();else{mj(this);
this.K="flash";this.b.loaded=!0;var b=qh.getInstance(),c=(-1<b.i.indexOf("Gnash")&&-1==b.i.indexOf("AVM2")||9==b.b&&1==b.f||9==b.b&&0==b.f&&1==b.g?0:9<=b.b)||-1<navigator.userAgent.indexOf("Sony/COM2")&&!rh(b,9,1,58)?a.url:a.urlV9As2;window!=window.top&&document.referrer&&(a.args.framer=document.referrer.substring(0,128));b=this.w;if(c){var b=u(b)?Bf(b):b,d=Ca(a.attrs);d.tabindex=0;var e=Ca(a.params);e.flashvars=xd(a.args);if(Sa){d.classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000";e.movie=c;var a=
document.createElement("object"),f;for(f in d)a.setAttribute(f,d[f]);for(var g in e)f=document.createElement("param"),f.setAttribute("name",g),f.setAttribute("value",e[g]),a.appendChild(f)}else{d.type="application/x-shockwave-flash";d.src=c;a=document.createElement("embed");a.setAttribute("name",d.id);for(var k in d)a.setAttribute(k,d[k]);for(var l in e)a.setAttribute(l,e[l])}g=document.createElement("div");g.appendChild(a);b.innerHTML=g.innerHTML}this.aa()}};
h.eb=function(){jj(this).focus()};
function jj(a){var b=N(a.g);!b&&a.A&&a.A.querySelector&&(b=a.A.querySelector("#"+a.g));return b}
h.aa=function(){if(!this.C()){var a=jj(this),b=!1;try{a&&a.getApiInterface&&a.getApiInterface()&&(b=!0)}catch(f){}if(b)if(this.ha=!1,a.isNotServable&&a.isNotServable(this.b.args.video_id))ij(this);else{bj(this);this.F=!0;a=jj(this);a.addEventListener&&(this.ba=nj(this,a,"addEventListener"));a.removeEventListener&&(this.ka=nj(this,a,"removeEventListener"));for(var b=a.getApiInterface(),b=b.concat(a.getInternalApiInterface()),c=0;c<b.length;c++){var d=b[c];this.f[d]||(this.f[d]=nj(this,a,d))}for(var e in this.i)this.ba(e,
this.i[e]);fj(this);this.la&&this.la(this.f);this.da.M("onReady",this.f)}else this.Ka=x(v(this.aa,this),50)}};
function nj(a,b,c){var d=b[c];return function(){try{return a.sa=null,d.apply(b,arguments)}catch(e){"Bad NPObject as private data!"!=e.message&&"sendAbandonmentPing"!=c&&(e.message+=" ("+c+")",a.sa=e,Pa(e,"WARNING"))}}}
function bj(a){a.F=!1;if(a.ka)for(var b in a.i)a.ka(b,a.i[b]);for(var c in a.ja)Oa(parseInt(c,10));a.ja={};a.ba=null;a.ka=null;for(var d in a.f)a.f[d]=null;a.f.addEventListener=v(a.R,a);a.f.removeEventListener=v(a.Ec,a);a.f.destroy=v(a.dispose,a);a.f.getLastError=v(a.Ub,a);a.f.getPlayerType=v(a.Vb,a);a.f.getCurrentVideoConfig=v(a.Tb,a);a.f.loadNewVideoConfig=v(a.Ea,a);a.f.isReady=v(a.Rc,a)}
h.Rc=function(){return this.F};
h.R=function(a,b){if(!this.C()){var c=gj(this,b);if(c){if(!kb(this.Hb,a)&&!this.i[a]){var d=oj(this,a);this.ba&&this.ba(a,d)}this.da.subscribe(a,c);"onReady"==a&&this.F&&x(na(c,this.f),0)}}};
h.Ec=function(a,b){if(!this.C()){var c=gj(this,b);c&&Wb(this.da,a,c)}};
function gj(a,b){var c=b;if("string"==typeof b){if(a.ma[b])return a.ma[b];c=function(){var a=t(b);a&&a.apply(n,arguments)};
a.ma[b]=c}return c?c:null}
function oj(a,b){var c="ytPlayer"+b+a.ca;a.i[b]=c;n[c]=function(c){var d=x(function(){if(!a.C()){a.da.M(b,c);var e=a.ja,g=String(d);g in e&&delete e[g]}},0);
Ba(a.ja,String(d))};
return c}
h.Mb=function(a){a=a?Pf:Of;for(var b=a(document.activeElement);b&&(1!=b.nodeType||b==this.D||b==this.N||(b.focus(),b!=document.activeElement));)b=a(b)};
h.La=function(a){E("a11y-announce",a)};
h.sc=function(a){ij(this,a)};
h.tc=function(a){E("WATCH_LATER_VIDEO_ADDED",a)};
h.uc=function(a){E("WATCH_LATER_VIDEO_REMOVED",a)};
h.pc=function(){this.ta||(af?(this.ra=If(document),ti(this.T,window,"scroll",this.Ac),ti(this.T,this.w,"touchmove",this.yc)):(ti(this.T,this.w,"mousewheel",this.hb),ti(this.T,this.w,"wheel",this.hb)),this.ta=!0)};
h.qc=function(){ui(this.T);this.ta=!1};
h.hb=function(a){a=a||window.event;a.returnValue=!1;a.preventDefault&&a.preventDefault()};
h.Ac=function(){window.scrollTo(this.ra.l,this.ra.o)};
h.yc=function(a){a.preventDefault()};
h.Vb=function(){return this.K||lj(this)};
h.Ub=function(){return this.sa};
function lj(a){return(a=jj(a))?"div"==a.tagName.toLowerCase()?"html5":"flash":null}
function mj(a){Ni("dcp");a.cancel();bj(a);a.K=null;a.b&&(a.b.loaded=!1);var b=jj(a);"html5"==lj(a)?a.V=b:b&&b.destroy&&b.destroy();Lf(a.w);ui(a.ia);a.D=null;a.N=null}
h.cancel=function(){this.W&&pc(this.b.assets.js,this.W);Oa(this.Ka);this.ha=!1};
h.G=function(){mj(this);if(this.V&&this.b)try{this.V.destroy()}catch(b){Pa(b)}this.ma=null;for(var a in this.i)n[this.i[a]]=null;this.ua=this.b=this.f=null;delete this.w;delete this.A;aj.B.G.call(this)};var pj={},qj="player_uid_"+(1E9*Math.random()>>>0);function rj(a,b){a=u(a)?Bf(a):a;b=oh(b);var c=qj+"_"+ia(a),d=pj[c];if(d)return d.Ea(b),d.f;d=new aj(a,c);pj[c]=d;E("player-added",d.f);Za(d,na(sj,d));x(function(){d.Ea(b)},0);
return d.f}
function sj(a){pj[a.ca]=null}
function tj(a){a=N(a);if(!a)return null;var b=qj+"_"+ia(a),c=pj[b];c||(c=new aj(a,b),pj[b]=c);return c.f}
;var uj=t("yt.abuse.botguardInitialized")||sc;q("yt.abuse.botguardInitialized",uj,void 0);var vj=t("yt.abuse.invokeBotguard")||tc;q("yt.abuse.invokeBotguard",vj,void 0);var wj=t("yt.abuse.dclkstatus.checkDclkStatus")||xc;q("yt.abuse.dclkstatus.checkDclkStatus",wj,void 0);var xj=t("yt.player.exports.navigate")||jh;q("yt.player.exports.navigate",xj,void 0);var yj=t("yt.player.embed")||rj;q("yt.player.embed",yj,void 0);var zj=t("yt.player.getPlayerByElement")||tj;q("yt.player.getPlayerByElement",zj,void 0);
var Aj=t("yt.util.activity.init")||Wg;q("yt.util.activity.init",Aj,void 0);var Bj=t("yt.util.activity.getTimeSinceActive")||Yg;q("yt.util.activity.getTimeSinceActive",Bj,void 0);var Cj=t("yt.util.activity.setTimestamp")||Xg;q("yt.util.activity.setTimestamp",Cj,void 0);function Dj(a,b,c){fa(a)?(this.date=Ej(a,b||0,c||1),Fj(this,c||1)):ha(a)?(this.date=Ej(a.getFullYear(),a.getMonth(),a.getDate()),Fj(this,a.getDate())):(this.date=new Date(pa()),a=this.date.getDate(),this.date.setHours(0),this.date.setMinutes(0),this.date.setSeconds(0),this.date.setMilliseconds(0),Fj(this,a))}
function Ej(a,b,c){b=new Date(a,b,c);0<=a&&100>a&&b.setFullYear(b.getFullYear()-1900);return b}
h=Dj.prototype;h.getFullYear=function(){return this.date.getFullYear()};
h.getMonth=function(){return this.date.getMonth()};
h.getDate=function(){return this.date.getDate()};
h.getTime=function(){return this.date.getTime()};
function Gj(a){a=a.date.getTimezoneOffset();if(0==a)a="Z";else{var b=Math.abs(a)/60,c=Math.floor(b),b=60*(b-c);a=(0<a?"-":"+")+Ha(c)+":"+Ha(b)}return a}
h.set=function(a){this.date=new Date(a.getFullYear(),a.getMonth(),a.getDate())};
h.pa=function(a,b){return[this.getFullYear(),Ha(this.getMonth()+1),Ha(this.getDate())].join(a?"-":"")+(b?Gj(this):"")};
h.equals=function(a){return!(!a||this.getFullYear()!=a.getFullYear()||this.getMonth()!=a.getMonth()||this.getDate()!=a.getDate())};
h.toString=function(){return this.pa()};
function Fj(a,b){a.getDate()!=b&&a.date.setUTCHours(a.date.getUTCHours()+(a.getDate()<b?1:-1))}
h.valueOf=function(){return this.date.valueOf()};
function Hj(a,b,c,d,e,f,g){this.date=fa(a)?new Date(a,b||0,c||1,d||0,e||0,f||0,g||0):new Date(a&&a.getTime?a.getTime():pa())}
w(Hj,Dj);Hj.prototype.pa=function(a,b){var c=Dj.prototype.pa.call(this,a);return a?c+" "+Ha(this.date.getHours())+":"+Ha(this.date.getMinutes())+":"+Ha(this.date.getSeconds())+(b?Gj(this):""):c+"T"+Ha(this.date.getHours())+Ha(this.date.getMinutes())+Ha(this.date.getSeconds())+(b?Gj(this):"")};
Hj.prototype.equals=function(a){return this.getTime()==a.getTime()};
Hj.prototype.toString=function(){return this.pa()};function Ij(a){R.call(this,1,arguments);this.b=a}
w(Ij,R);function Jj(a){R.call(this,1,arguments);this.b=a}
w(Jj,R);function Kj(a,b,c){R.call(this,3,arguments);this.g=a;this.f=b;this.b=null!=c?!!c:null}
w(Kj,R);function Lj(a,b,c,d,e){R.call(this,2,arguments);this.f=a;this.b=b;this.i=c||null;this.g=d||null;this.source=e||null}
w(Lj,R);function Mj(a,b,c){R.call(this,1,arguments);this.b=a;this.subscriptionId=b}
w(Mj,R);function Nj(a,b,c,d,e,f,g){R.call(this,1,arguments);this.f=a;this.subscriptionId=b;this.b=c;this.w=d||null;this.i=e||null;this.g=f||null;this.source=g||null}
w(Nj,R);
var Oj=new S("subscription-batch-subscribe",Ij),Pj=new S("subscription-batch-unsubscribe",Ij),Qj=new S("subscription-subscribe",Lj),Rj=new S("subscription-subscribe-loading",Jj),Sj=new S("subscription-subscribe-loaded",Jj),Tj=new S("subscription-subscribe-success",Mj),Uj=new S("subscription-subscribe-external",Lj),Vj=new S("subscription-unsubscribe",Nj),Wj=new S("subscription-unsubscirbe-loading",Jj),Xj=new S("subscription-unsubscribe-loaded",Jj),Yj=new S("subscription-unsubscribe-success",Jj),Zj=
new S("subscription-external-unsubscribe",Nj),ak=new S("subscription-enable-ypc",Jj),bk=new S("subscription-disable-ypc",Jj),ck=new S("subscription-prefs",Kj),dk=new S("subscription-prefs-success",Kj),ek=new S("subscription-prefs-failure",Kj);function fk(a,b){(a=N(a))&&a.style&&(a.style.display=b?"":"none",Md(a,"hid",!b))}
function gk(a){return(a=N(a))?"none"!=a.style.display&&!I(a,"hid"):!1}
function hk(a){C(arguments,function(a){!ea(a)||a instanceof Element?fk(a,!0):C(a,function(a){hk(a)})})}
function ik(a){C(arguments,function(a){!ea(a)||a instanceof Element?fk(a,!1):C(a,function(a){ik(a)})})}
;function jk(a,b,c,d,e,f,g){var k,l;if(k=c.offsetParent){var m="HTML"==k.tagName||"BODY"==k.tagName;m&&"static"==zh(k,"position")||(l=Dh(k),m||(m=(m=Jh(k))&&Ce?-k.scrollLeft:!m||Be&&Qe("8")||"visible"==zh(k,"overflowX")?k.scrollLeft:k.scrollWidth-k.clientWidth-k.scrollLeft,l=ye(l,new K(m,k.scrollTop))))}k=l||new K;l=Ih(a);if(m=Ch(a)){var r=new uh(m.left,m.top,m.right-m.left,m.bottom-m.top),m=Math.max(l.left,r.left),M=Math.min(l.left+l.width,r.left+r.width);if(m<=M){var V=Math.max(l.top,r.top),r=Math.min(l.top+
l.height,r.top+r.height);V<=r&&(l.left=m,l.top=V,l.width=M-m,l.height=r-V)}}m=yf(a);V=yf(c);if(m.b!=V.b){var M=m.b.body,H;var V=Kf(V.b),r=new K(0,0),A;A=(A=Af(M))?Kf(A):window;b:{try{Xc(A.parent);H=!0;break b}catch(kd){}H=!1}if(H){H=M;do{var wa=A==V?Dh(H):Eh(H);r.l+=wa.l;r.o+=wa.o}while(A&&A!=V&&A!=A.parent&&(H=A.frameElement)&&(A=A.parent))}H=ye(r,Dh(M));!L||9<=Number(Re)||Hf(m.b)||(H=ye(H,If(m.b)));l.left+=H.l;l.top+=H.o}a=kk(a,b);b=l.left;a&4?b+=l.width:a&2&&(b+=l.width/2);b=new K(b,l.top+(a&1?
l.height:0));b=ye(b,k);e&&(b.l+=(a&4?-1:1)*e.l,b.o+=(a&1?-1:1)*e.o);var Y;g&&(Y=Ch(c))&&(Y.top-=k.o,Y.right-=k.l,Y.bottom-=k.o,Y.left-=k.l);return lk(b,c,d,f,Y,g,void 0)}
function lk(a,b,c,d,e,f,g){a=new K(a.l,a.o);var k=kk(b,c);c=Gh(b);g=g?new Sc(g.width,g.height):new Sc(c.width,c.height);a=new K(a.l,a.o);g=new Sc(g.width,g.height);var l=0;if(d||0!=k)k&4?a.l-=g.width+(d?d.right:0):k&2?a.l-=g.width/2:d&&(a.l+=d.left),k&1?a.o-=g.height+(d?d.bottom:0):d&&(a.o+=d.top);if(f){if(e){d=a;k=g;l=0;65==(f&65)&&(d.l<e.left||d.l>=e.right)&&(f&=-2);132==(f&132)&&(d.o<e.top||d.o>=e.bottom)&&(f&=-5);d.l<e.left&&f&1&&(d.l=e.left,l|=1);if(f&16){var m=d.l;d.l<e.left&&(d.l=e.left,l|=
4);d.l+k.width>e.right&&(k.width=Math.min(e.right-d.l,m+k.width-e.left),k.width=Math.max(k.width,0),l|=4)}d.l+k.width>e.right&&f&1&&(d.l=Math.max(e.right-k.width,e.left),l|=1);f&2&&(l|=(d.l<e.left?16:0)|(d.l+k.width>e.right?32:0));d.o<e.top&&f&4&&(d.o=e.top,l|=2);f&32&&(m=d.o,d.o<e.top&&(d.o=e.top,l|=8),d.o+k.height>e.bottom&&(k.height=Math.min(e.bottom-d.o,m+k.height-e.top),k.height=Math.max(k.height,0),l|=8));d.o+k.height>e.bottom&&f&4&&(d.o=Math.max(e.bottom-k.height,e.top),l|=2);f&8&&(l|=(d.o<
e.top?64:0)|(d.o+k.height>e.bottom?128:0));e=l}else e=256;l=e}f=new uh(0,0,0,0);f.left=a.l;f.top=a.o;f.width=g.width;f.height=g.height;e=l;if(e&496)return e;g=new K(f.left,f.top);g instanceof K?(a=g.l,g=g.o):(a=g,g=void 0);b.style.left=Fh(a,!1);b.style.top=Fh(g,!1);g=new Sc(f.width,f.height);c==g||c&&g&&c.width==g.width&&c.height==g.height||(c=g,g=Hf(yf(Af(b)).b),!L||Qe("10")||g&&Qe("8")?(b=b.style,Ce?b.MozBoxSizing="border-box":De?b.WebkitBoxSizing="border-box":b.boxSizing="border-box",b.width=Math.max(c.width,
0)+"px",b.height=Math.max(c.height,0)+"px"):(a=b.style,g?(L?(g=Lh(b,"paddingLeft"),f=Lh(b,"paddingRight"),d=Lh(b,"paddingTop"),k=Lh(b,"paddingBottom"),g=new th(d,f,k,g)):(g=yh(b,"paddingLeft"),f=yh(b,"paddingRight"),d=yh(b,"paddingTop"),k=yh(b,"paddingBottom"),g=new th(parseFloat(d),parseFloat(f),parseFloat(k),parseFloat(g))),!L||9<=Number(Re)?(f=yh(b,"borderLeftWidth"),d=yh(b,"borderRightWidth"),k=yh(b,"borderTopWidth"),b=yh(b,"borderBottomWidth"),b=new th(parseFloat(k),parseFloat(d),parseFloat(b),
parseFloat(f))):(f=Nh(b,"borderLeft"),d=Nh(b,"borderRight"),k=Nh(b,"borderTop"),b=Nh(b,"borderBottom"),b=new th(k,d,b,f)),a.pixelWidth=c.width-b.left-g.left-g.right-b.right,a.pixelHeight=c.height-b.top-g.top-g.bottom-b.bottom):(a.pixelWidth=c.width,a.pixelHeight=c.height)));return e}
function kk(a,b){return(b&8&&Jh(a)?b^4:b)&-9}
;var mk={},nk="ontouchstart"in document;function ok(a,b,c){var d;switch(a){case "mouseover":case "mouseout":d=3;break;case "mouseenter":case "mouseleave":d=9}return cg(c,function(a){return I(a,b)},!0,d)}
function pk(a){var b="mouseover"==a.type&&"mouseenter"in mk||"mouseout"==a.type&&"mouseleave"in mk,c=a.type in mk||b;if("HTML"!=a.target.tagName&&c){if(b){var b="mouseover"==a.type?"mouseenter":"mouseleave",c=mk[b],d;for(d in c.f){var e=ok(b,d,a.target);e&&!cg(a.relatedTarget,function(a){return a==e},!0)&&c.M(d,e,b,a)}}if(b=mk[a.type])for(d in b.f)(e=ok(a.type,d,a.target))&&b.M(d,e,a.type,a)}}
Q(document,"blur",pk,!0);Q(document,"change",pk,!0);Q(document,"click",pk);Q(document,"focus",pk,!0);Q(document,"mouseover",pk);Q(document,"mouseout",pk);Q(document,"mousedown",pk);Q(document,"keydown",pk);Q(document,"keyup",pk);Q(document,"keypress",pk);Q(document,"cut",pk);Q(document,"paste",pk);nk&&(Q(document,"touchstart",pk),Q(document,"touchend",pk),Q(document,"touchcancel",pk));function qk(a){this.w=a;this.D={};this.H=[];this.F=[]}
h=qk.prototype;h.L=function(a){return P(a,U(this))};
function U(a,b){return"yt-uix"+(a.w?"-"+a.w:"")+(b?"-"+b:"")}
h.unregister=function(){ec(this.H);this.H.length=0;Gi(this.F);this.F.length=0};
h.init=aa;h.dispose=aa;function rk(a,b,c){a.H.push(cc(b,c,a))}
function sk(a,b,c){a.F.push(Fi(b,c,a))}
function W(a,b,c,d){d=U(a,d);var e=v(c,a);b in mk||(mk[b]=new D);mk[b].subscribe(d,e);a.D[c]=e}
function X(a,b,c,d){if(b in mk){var e=mk[b];Wb(e,U(a,d),a.D[c]);0>=e.fa()&&(e.dispose(),delete mk[b])}delete a.D[c]}
h.Z=function(a,b,c){var d=this.j(a,b);if(d&&(d=t(d))){var e=qb(arguments,2);pb(e,0,0,a);d.apply(null,e)}};
h.j=function(a,b){return Va(a,b)};
function tk(a,b){Ta(a,"tooltip-text",b)}
;function uk(){qk.call(this,"button");this.b=null;this.g=[];this.f={}}
w(uk,qk);ba(uk);h=uk.prototype;h.register=function(){W(this,"click",this.rb);W(this,"keydown",this.Wa);W(this,"keypress",this.Xa);rk(this,"page-scroll",this.Yb)};
h.unregister=function(){X(this,"click",this.rb);X(this,"keydown",this.Wa);X(this,"keypress",this.Xa);vk(this);this.f={};uk.B.unregister.call(this)};
h.rb=function(a){a&&!a.disabled&&(wk(this,a),this.click(a))};
h.Wa=function(a,b,c){if(!(c.altKey||c.ctrlKey||c.shiftKey)&&(b=xk(this,a))){var d=function(a){var b="";a.tagName&&(b=a.tagName.toLowerCase());return"ul"==b||"table"==b},e;
d(b)?e=b:e=Tf(b,d);if(e){e=e.tagName.toLowerCase();var f;"ul"==e?f=this.kc:"table"==e&&(f=this.jc);f&&yk(this,a,b,c,v(f,this))}}};
h.Yb=function(){var a=this.f,b=0,c;for(c in a)b++;if(0!=b)for(var d in a){b=a[d];c=P(b.activeButtonNode||b.parentNode,U(this));if(void 0==c||void 0==b)break;zk(this,c,b,!0)}};
function yk(a,b,c,d,e){var f=gk(c),g=9==d.keyCode;if(g||32==d.keyCode||13==d.keyCode)if(d=Ak(a,c)){if(p(d.firstElementChild))b=d.firstElementChild;else for(b=d.firstChild;b&&1!=b.nodeType;)b=b.nextSibling;"a"==b.tagName.toLowerCase()?ih(b.href):Ig(b)}else g&&Bk(a,b);else f?27==d.keyCode?(Ak(a,c),Bk(a,b)):e(b,c,d):(a=I(b,U(a,"reverse"))?38:40,d.keyCode==a&&(Ig(b),d.preventDefault()))}
h.Xa=function(a,b,c){c.altKey||c.ctrlKey||c.shiftKey||(a=xk(this,a),gk(a)&&c.preventDefault())};
function Ak(a,b){var c=U(a,"menu-item-highlight"),d=O(c,b);d&&Kd(d,c);return d}
function Ck(a,b,c){J(c,U(a,"menu-item-highlight"));var d=c.getAttribute("id");d||(d=U(a,"item-id-"+ia(c)),c.setAttribute("id",d));b.setAttribute("aria-activedescendant",d)}
h.jc=function(a,b,c){var d=Ak(this,b);if(d){var e=ng("table",b);b=Df("td",null,e);d=Dk(d,b,Df("td",null,ng("tr",e)).length,c);-1!=d&&(Ck(this,a,b[d]),c.preventDefault())}};
h.kc=function(a,b,c){if(40==c.keyCode||38==c.keyCode){var d=Ak(this,b);d&&(b=gb(Df("li",null,b),gk),Ck(this,a,b[Dk(d,b,1,c)]),c.preventDefault())}};
function Dk(a,b,c,d){var e=b.length;a=fb(b,a);if(-1==a)if(38==d.keyCode)a=e-c;else{if(37==d.keyCode||38==d.keyCode||40==d.keyCode)a=0}else 39==d.keyCode?(a%c==c-1&&(a-=c),a+=1):37==d.keyCode?(0==a%c&&(a+=c),--a):38==d.keyCode?(a<c&&(a+=e),a-=c):40==d.keyCode&&(a>=e-c&&(a-=e),a+=c);return a}
function Ek(a,b){var c=b.iframeMask;c||(c=document.createElement("iframe"),c.src='javascript:""',c.className=U(a,"menu-mask"),ik(c),b.iframeMask=c);return c}
function zk(a,b,c,d){var e=P(b,U(a,"group")),f=!!a.j(b,"button-menu-ignore-group"),e=e&&!f?e:b,f=9,g=8,k=Ih(b);if(I(b,U(a,"reverse"))){f=8;g=9;k=k.top+"px";try{c.style.maxHeight=k}catch(r){}}I(b,"flip")&&(I(b,U(a,"reverse"))?(f=12,g=13):(f=13,g=12));var l;a.j(b,"button-has-sibling-menu")?l=Bh(e):a.j(b,"button-menu-root-container")&&(l=Fk(a,b));L&&!Qe("8")&&(l=null);var m;l&&(m=Ih(l),m=new th(-m.top,m.left,m.top,-m.left));l=new K(0,1);I(b,U(a,"center-menu"))&&(l.l-=Math.round((Gh(c).width-Gh(b).width)/
2));d&&(l.o+=If(document).o);if(a=Ek(a,b))b=Gh(c),a.style.width=b.width+"px",a.style.height=b.height+"px",jk(e,f,a,g,l,m,197),d&&vh(a,"position","fixed");jk(e,f,c,g,l,m,197)}
function Fk(a,b){if(a.j(b,"button-menu-root-container")){var c=a.j(b,"button-menu-root-container");return P(b,c)}return document.body}
h.tb=function(a){if(a){var b=xk(this,a);if(b){a.setAttribute("aria-pressed","true");a.setAttribute("aria-expanded","true");b.originalParentNode=b.parentNode;b.activeButtonNode=a;b.parentNode.removeChild(b);var c;this.j(a,"button-has-sibling-menu")?c=a.parentNode:c=Fk(this,a);c.appendChild(b);b.style.minWidth=a.offsetWidth-2+"px";var d=Ek(this,a);d&&c.appendChild(d);(c=!!this.j(a,"button-menu-fixed"))&&(this.f[jg(a).toString()]=b);zk(this,a,b,c);fc("yt-uix-button-menu-before-show",a,b);hk(b);d&&hk(d);
this.Z(a,"button-menu-action",!0);J(a,U(this,"active"));b=v(this.sb,this,a,!1);d=v(this.sb,this,a,!0);c=v(this.Nc,this,a,void 0);this.b&&xk(this,this.b)==xk(this,a)||vk(this);E("yt-uix-button-menu-show",a);Gg(this.g);this.g=[Q(document,"click",d),Q(document,"contextmenu",b),Q(window,"resize",c)];this.b=a}}};
function Bk(a,b){if(b){var c=xk(a,b);if(c){a.b=null;b.setAttribute("aria-pressed","false");b.setAttribute("aria-expanded","false");b.removeAttribute("aria-activedescendant");ik(c);a.Z(b,"button-menu-action",!1);var d=Ek(a,b),e=jg(c).toString();delete a.f[e];x(function(){d&&d.parentNode&&(ik(d),d.parentNode.removeChild(d));c.originalParentNode&&(c.parentNode.removeChild(c),c.originalParentNode.appendChild(c),c.originalParentNode=null,c.activeButtonNode=null)},1)}var e=P(b,U(a,"group")),f=[U(a,"active")];
e&&f.push(U(a,"group-active"));Ld(b,f);E("yt-uix-button-menu-hide",b);Gg(a.g);a.g.length=0}}
h.Nc=function(a,b){var c=xk(this,a);if(c){b&&(b instanceof Pb?c.innerHTML=Rb(b):Sf(c,b));var d=!!this.j(a,"button-menu-fixed");zk(this,a,c,d)}};
h.sb=function(a,b,c){c=Hg(c);var d=P(c,U(this));if(d){var d=xk(this,d),e=xk(this,a);if(d==e)return}var d=P(c,U(this,"menu")),e=d==xk(this,a),f=I(c,U(this,"menu-item")),g=I(c,U(this,"menu-close"));if(!d||e&&(f||g))Bk(this,a),d&&b&&this.j(a,"button-menu-indicate-selected")&&((a=O(U(this,"content"),a))&&Sf(a,$f(c)),Gk(this,d,c))};
function Gk(a,b,c){var d=U(a,"menu-item-selected");C(Cf(d,b),function(a){Kd(a,d)});
J(c.parentNode,d)}
function xk(a,b){if(!b.widgetMenu){var c=a.j(b,"button-menu-id"),c=c&&N(c),d=U(a,"menu");c?Jd(c,[d,U(a,"menu-external")]):c=O(d,b);b.widgetMenu=c}return b.widgetMenu}
h.isToggled=function(a){return I(a,U(this,"toggled"))};
function wk(a,b){if(a.j(b,"button-toggle")){var c=P(b,U(a,"group")),d=U(a,"toggled"),e=I(b,d);if(c&&a.j(c,"button-toggle-group")){var f=a.j(c,"button-toggle-group");C(Cf(U(a),c),function(a){a!=b||"optional"==f&&e?(Kd(a,d),a.removeAttribute("aria-pressed")):(J(b,d),a.setAttribute("aria-pressed","true"))})}else e?b.removeAttribute("aria-pressed"):b.setAttribute("aria-pressed","true"),Od(b,d)}}
h.click=function(a){if(xk(this,a)){var b=xk(this,a);if(b){var c=P(b.activeButtonNode||b.parentNode,U(this));c&&c!=a?(Bk(this,c),x(v(this.tb,this,a),1)):gk(b)?Bk(this,a):this.tb(a)}a.focus()}this.Z(a,"button-action")};
function vk(a){a.b&&Bk(a,a.b)}
;function Hk(a){qk.call(this,a);this.g=null}
w(Hk,qk);h=Hk.prototype;h.L=function(a){var b=qk.prototype.L.call(this,a);return b?b:a};
h.register=function(){rk(this,"yt-uix-kbd-nav-move-out-done",this.P)};
h.dispose=function(){Hk.B.dispose.call(this);Ik(this)};
h.j=function(a,b){var c=Hk.B.j.call(this,a,b);return c?c:(c=Hk.B.j.call(this,a,"card-config"))&&(c=t(c))&&c[b]?c[b]:null};
h.show=function(a){var b=this.L(a);if(b){J(b,U(this,"active"));var c=Jk(this,a,b);if(c){c.cardTargetNode=a;c.cardRootNode=b;Kk(this,a,c);var d=U(this,"card-visible"),e=this.j(a,"card-delegate-show")&&this.j(b,"card-action");this.Z(b,"card-action",a);this.g=a;ik(c);x(v(function(){e||(hk(c),E("yt-uix-card-show",b,a,c));Lk(c);J(c,d);E("yt-uix-kbd-nav-move-in-to",c)},this),10)}}};
function Jk(a,b,c){var d=c||b,e=U(a,"card");c=Mk(a,d);var f=N(U(a,"card")+jg(d));if(f)return a=O(U(a,"card-body"),f),Rf(a,c)||(Mf(c),a.appendChild(c)),f;f=document.createElement("div");f.id=U(a,"card")+jg(d);f.className=e;(d=a.j(d,"card-class"))&&Jd(f,d.split(/\s+/));d=document.createElement("div");d.className=U(a,"card-border");b=a.j(b,"orientation")||"horizontal";e=document.createElement("div");e.className="yt-uix-card-border-arrow yt-uix-card-border-arrow-"+b;var g=document.createElement("div");
g.className=U(a,"card-body");a=document.createElement("div");a.className="yt-uix-card-body-arrow yt-uix-card-body-arrow-"+b;Mf(c);g.appendChild(c);d.appendChild(a);d.appendChild(g);f.appendChild(e);f.appendChild(d);document.body.appendChild(f);return f}
function Kk(a,b,c){var d=a.j(b,"orientation")||"horizontal",e=O(U(a,"anchor"),b)||b,f=a.j(b,"position"),g=!!a.j(b,"force-position"),k=a.j(b,"position-fixed"),d="horizontal"==d,l="bottomright"==f||"bottomleft"==f,m="topright"==f||"bottomright"==f,r,M;m&&l?(M=13,r=8):m&&!l?(M=12,r=9):!m&&l?(M=9,r=12):(M=8,r=13);var V=Jh(document.body),f=Jh(b);V!=f&&(M^=4);var H;d?(f=b.offsetHeight/2-12,H=new K(-12,b.offsetHeight+6)):(f=b.offsetWidth/2-6,H=new K(b.offsetWidth+6,-12));var A=Gh(c),f=Math.min(f,(d?A.height:
A.width)-24-6);6>f&&(f=6,d?H.o+=12-b.offsetHeight/2:H.l+=12-b.offsetWidth/2);A=null;g||(A=10);b=U(a,"card-flip");a=U(a,"card-reverse");Md(c,b,m);Md(c,a,l);A=jk(e,M,c,r,H,null,A);!g&&A&&(A&48&&(m=!m,M^=4,r^=4),A&192&&(l=!l,M^=1,r^=1),Md(c,b,m),Md(c,a,l),jk(e,M,c,r,H));k&&(e=parseInt(c.style.top,10),g=If(document).o,vh(c,"position","fixed"),vh(c,"top",e-g+"px"));V&&(c.style.right="",e=Ih(c),e.left=e.left||parseInt(c.style.left,10),g=Gf(window),c.style.left="",c.style.right=g.width-e.left-e.width+"px");
e=O("yt-uix-card-body-arrow",c);g=O("yt-uix-card-border-arrow",c);d=d?l?"top":"bottom":!V&&m||V&&!m?"left":"right";e.setAttribute("style","");g.setAttribute("style","");e.style[d]=f+"px";g.style[d]=f+"px";l=O("yt-uix-card-arrow",c);m=O("yt-uix-card-arrow-background",c);l&&m&&(c="right"==d?Gh(c).width-f-13:f+11,f=c/Math.sqrt(2),l.style.left=c+"px",l.style.marginLeft="1px",m.style.marginLeft=-f+"px",m.style.marginTop=f+"px")}
h.P=function(a){if(a=this.L(a)){var b=N(U(this,"card")+jg(a));b&&(Kd(a,U(this,"active")),Kd(b,U(this,"card-visible")),ik(b),this.g=null,b.cardTargetNode=null,b.cardRootNode=null,b.cardMask&&(Mf(b.cardMask),b.cardMask=null))}};
function Ik(a){a.g&&a.P(a.g)}
h.Mc=function(a,b){var c=this.L(a);if(c){if(b){var d=Mk(this,c);if(!d)return;b instanceof Pb?d.innerHTML=Rb(b):Sf(d,b)}I(c,U(this,"active"))&&(c=Jk(this,a,c),Kk(this,a,c),hk(c),Lk(c))}};
h.isActive=function(a){return(a=this.L(a))?I(a,U(this,"active")):!1};
function Mk(a,b){var c=b.cardContentNode;if(!c){var d=U(a,"content"),e=U(a,"card-content");(c=(c=a.j(b,"card-id"))?N(c):O(d,b))||(c=document.createElement("div"));var f=c;Kd(f,d);J(f,e);b.cardContentNode=c}return c}
function Lk(a){var b=a.cardMask;b||(b=document.createElement("iframe"),b.src='javascript:""',Jd(b,["yt-uix-card-iframe-mask"]),a.cardMask=b);b.style.position=a.style.position;b.style.top=a.style.top;b.style.left=a.offsetLeft+"px";b.style.height=a.clientHeight+"px";b.style.width=a.clientWidth+"px";document.body.appendChild(b)}
;var Nk=!L&&!yb();function Ok(a,b){return Nk&&a.dataset?b in a.dataset?a.dataset[b]:null:a.getAttribute("data-"+String(b).replace(/([A-Z])/g,"-$1").toLowerCase())}
;function Pk(){qk.call(this,"kbd-nav")}
var Qk;w(Pk,qk);ba(Pk);h=Pk.prototype;h.register=function(){W(this,"keydown",this.Ua);rk(this,"yt-uix-kbd-nav-move-in",this.bb);rk(this,"yt-uix-kbd-nav-move-in-to",this.lc);rk(this,"yt-uix-kbd-move-next",this.cb);rk(this,"yt-uix-kbd-nav-move-to",this.na)};
h.unregister=function(){X(this,"keydown",this.Ua);Gg(Qk)};
h.Ua=function(a,b,c){var d=c.keyCode;if(a=P(a,U(this)))switch(d){case 13:case 32:this.bb(a);break;case 27:c.preventDefault();c.stopImmediatePropagation();a:{for(c=Ok(a,"kbdNavMoveOut");!c;){c=P(a.parentElement,U(this));if(!c)break a;c=Ok(c,"kbdNavMoveOut")}c=N(c);this.na(c);E("yt-uix-kbd-nav-move-out-done",c)}break;case 40:case 38:if((b=c.target)&&I(a,U(this,"list")))switch(d){case 40:this.cb(b,a);break;case 38:d=document.activeElement==a,a=Rk(a),b=a.indexOf(b),0>b&&!d||(b=d?a.length-1:(a.length+
b-1)%a.length,a[b].focus(),Sk(this,a[b]))}c.preventDefault()}};
h.bb=function(a){var b=Ok(a,"kbdNavMoveIn"),b=N(b);Tk(this,a,b);this.na(b)};
h.lc=function(a){var b;a:{var c=document;try{b=c&&c.activeElement;break a}catch(d){}b=null}Tk(this,b,a);this.na(a)};
h.na=function(a){if(a)if(Xf(a))a.focus();else{var b=Tf(a,function(a){return Qf(a)?Xf(a):!1});
b?b.focus():(a.setAttribute("tabindex","-1"),a.focus())}};
function Tk(a,b,c){b&&c&&(J(c,U(a)),a=b.id,a||(a="kbd-nav-"+Math.floor(1E6*Math.random()+1),b.id=a),b=a,Nk&&c.dataset?c.dataset.kbdNavMoveOut=b:c.setAttribute("data-"+"kbdNavMoveOut".replace(/([A-Z])/g,"-$1").toLowerCase(),b))}
h.cb=function(a,b){var c=document.activeElement==b,d=Rk(b),e=d.indexOf(a);0>e&&!c||(c=c?0:(e+1)%d.length,d[c].focus(),Sk(this,d[c]))};
function Sk(a,b){if(b){var c=bg(b,"LI");c&&(J(c,U(a,"highlight")),Qk=Q(b,"blur",v(function(a){Kd(a,U(this,"highlight"));Gg(Qk)},a,c)))}}
function Rk(a){if("UL"!=a.tagName.toUpperCase())return[];a=gb(Nf(a),function(a){return"LI"==a.tagName.toUpperCase()});
return gb(hb(a,function(a){return gk(a)?Tf(a,function(a){return Qf(a)?Xf(a):!1}):!1}),function(a){return!!a})}
;function Uk(){qk.call(this,"menu");this.f=this.b=null;this.g={};this.A={};this.i=null}
w(Uk,qk);ba(Uk);function Vk(a){var b=Uk.getInstance();if(I(a,U(b)))return a;var c=b.L(a);return c?c:P(a,U(b,"content"))==b.b?b.f:null}
h=Uk.prototype;h.register=function(){W(this,"click",this.Ta);W(this,"mouseenter",this.Wb);rk(this,"page-scroll",this.Zb);rk(this,"yt-uix-kbd-nav-move-out-done",function(a){a=this.L(a);Wk(this,a)});
this.i=new D};
h.unregister=function(){X(this,"click",this.Ta);this.f=this.b=null;Gg(rb(va(this.g)));this.g={};ua(this.A,function(a){Mf(a)},this);
this.A={};$a(this.i);this.i=null;Uk.B.unregister.call(this)};
h.Ta=function(a,b,c){a&&(b=Xk(this,a),!b.disabled&&mg(c.target,b)&&Yk(this,a))};
h.Wb=function(a,b,c){a&&I(a,U(this,"hover"))&&mg(c.target,Xk(this,a))&&Yk(this,a,!0)};
h.Zb=function(){this.b&&this.f&&Zk(this,this.f,this.b)};
function Zk(a,b,c){var d=$k(a,b);if(d){var e=Gh(c),f;if(e instanceof Sc)f=e.height,e=e.width;else throw Error("missing height argument");d.style.width=Fh(e,!0);d.style.height=Fh(f,!0)}c==a.b&&(e=9,f=8,I(b,U(a,"reversed"))&&(e^=1,f^=1),I(b,U(a,"flipped"))&&(e^=4,f^=4),a=new K(0,1),d&&jk(b,e,d,f,a,null,197),jk(b,e,c,f,a,null,197))}
function Yk(a,b,c){al(a,b)&&!c?Wk(a,b):(bl(a,b),!a.b||mg(b,a.b)?a.ub(b):Vb(a.i,v(a.ub,a,b)))}
h.ub=function(a){if(a){var b=cl(this,a);if(b){fc("yt-uix-menu-before-show",a,b);this.b?mg(a,this.b)||Wk(this,this.f):(this.f=a,this.b=b,I(a,U(this,"sibling-content"))||(Mf(b),document.body.appendChild(b)),b.style.minWidth=Xk(this,a).offsetWidth-2+"px");var c=$k(this,a);c&&b.parentNode&&b.parentNode.insertBefore(c,b.nextSibling);Kd(b,U(this,"content-hidden"));Zk(this,a,b);Jd(Xk(this,a),[U(this,"trigger-selected"),"yt-uix-button-toggled"]);E("yt-uix-menu-show",a);dl(b);el(this,a);E("yt-uix-kbd-nav-move-in-to",
b);var d=v(this.Sc,this,a),e=v(this.hc,this,a),c=ia(a).toString();this.g[c]=[Q(b,"click",e),Q(document,"click",d)];I(a,U(this,"indicate-selected"))&&(d=v(this.ic,this,a),this.g[c].push(Q(b,"click",d)));I(a,U(this,"hover"))&&(a=v(this.Xb,this,a),this.g[c].push(Q(document,"mousemove",a)))}}};
h.Xb=function(a,b){var c=Hg(b);c&&(mg(c,Xk(this,a))||fl(this,c)||gl(this,a))};
h.Sc=function(a,b){var c=Hg(b);if(c){if(fl(this,c)){var d=P(c,U(this,"content")),e=bg(c,"LI");e&&d&&Rf(d,e)&&fc("yt-uix-menu-item-clicked",c);c=P(c,U(this,"close-on-select"));if(!c)return;d=Vk(c)}Wk(this,d||a)}};
function bl(a,b){if(b){var c=P(b,U(a,"content"));c&&C(Cf(U(a),c),function(a){!mg(a,b)&&al(this,a)&&gl(this,a)},a)}}
function Wk(a,b){if(b){var c=[];c.push(b);var d=cl(a,b);d&&(d=Cf(U(a),d),d=nb(d),c=c.concat(d),C(c,function(a){al(this,a)&&gl(this,a)},a))}}
function gl(a,b){if(b){var c=cl(a,b);Ld(Xk(a,b),[U(a,"trigger-selected"),"yt-uix-button-toggled"]);J(c,U(a,"content-hidden"));var d=cl(a,b);d&&Ef(d,{"aria-expanded":"false"});(d=$k(a,b))&&d.parentNode&&Mf(d);c&&c==a.b&&(a.f.appendChild(c),a.b=null,a.f=null,a.i&&a.i.M("ROOT_MENU_REMOVED"));E("yt-uix-menu-hide",b);c=ia(b).toString();Gg(a.g[c]);delete a.g[c]}}
h.hc=function(a,b){var c=Hg(b);c&&hl(this,a,c)};
h.ic=function(a,b){var c=Hg(b);if(c){var d=Xk(this,a);if(d&&(c=bg(c,"LI")))if(c=$f(c).trim(),d.hasChildNodes()){var e=uk.getInstance();(d=O(U(e,"content"),d))&&Sf(d,c)}else Sf(d,c)}};
function el(a,b){var c=cl(a,b);if(c){C(c.children,function(a){"LI"==a.tagName&&Ef(a,{role:"menuitem"})});
Ef(c,{"aria-expanded":"true"});var d=c.id;d||(d="aria-menu-id-"+ia(c),c.id=d);(c=Xk(a,b))&&Ef(c,{"aria-controls":d})}}
function hl(a,b,c){var d=cl(a,b);d&&I(b,U(a,"checked"))&&(a=bg(c,"LI"))&&(a=O("yt-ui-menu-item-checked-hid",a))&&(C(Cf("yt-ui-menu-item-checked",d),function(a){Nd(a,"yt-ui-menu-item-checked","yt-ui-menu-item-checked-hid")}),Nd(a,"yt-ui-menu-item-checked-hid","yt-ui-menu-item-checked"))}
function al(a,b){var c=cl(a,b);return c?!I(c,U(a,"content-hidden")):!1}
function dl(a){C(Df("UL",null,a),function(a){a.tabIndex=0;var b=Pk.getInstance();Jd(a,[U(b),U(b,"list")])})}
function cl(a,b){var c=Va(b,"menu-content-id");return c&&(c=N(c))?(Jd(c,[U(a,"content"),U(a,"content-external")]),c):b==a.f?a.b:O(U(a,"content"),b)}
function $k(a,b){var c=ia(b).toString(),d=a.A[c];if(!d){d=document.createElement("IFRAME");d.src='javascript:""';var e=[U(a,"mask")];C(Id(b),function(a){e.push(a+"-mask")});
Jd(d,e);a.A[c]=d}return d||null}
function Xk(a,b){return O(U(a,"trigger"),b)}
function fl(a,b){return mg(b,a.b)||mg(b,a.f)}
;function il(){Hk.call(this,"clickcard");this.b={};this.f={}}
w(il,Hk);ba(il);h=il.prototype;h.register=function(){il.B.register.call(this);W(this,"click",this.Qa,"target");W(this,"click",this.Pa,"close")};
h.unregister=function(){il.B.unregister.call(this);X(this,"click",this.Qa,"target");X(this,"click",this.Pa,"close");for(var a in this.b)Gg(this.b[a]);this.b={};for(a in this.f)Gg(this.f[a]);this.f={}};
h.Qa=function(a,b,c){c.preventDefault();b=bg(c.target,"button");b&&b.disabled||(a=(b=this.j(a,"card-target"))?Bf(b):a,b=this.L(a),this.j(b,"disabled")||(I(b,U(this,"active"))?(this.P(a),Kd(b,U(this,"active"))):(this.show(a),J(b,U(this,"active")))))};
h.show=function(a){il.B.show.call(this,a);var b=this.L(a),c=ia(a).toString();if(!Va(b,"click-outside-persists")){if(this.b[c])return;var b=Q(document,"click",v(this.Ra,this,a)),d=Q(window,"blur",v(this.Ra,this,a));this.b[c]=[b,d]}a=Q(window,"resize",v(this.Mc,this,a,void 0));this.f[c]=a};
h.P=function(a){il.B.P.call(this,a);a=ia(a).toString();var b=this.b[a];b&&(Gg(b),this.b[a]=null);if(b=this.f[a])Gg(b),delete this.f[a]};
h.Ra=function(a,b){var c="yt-uix"+(this.w?"-"+this.w:"")+"-card",d=null;b.target&&(d=P(b.target,c)||P(Vk(b.target),c));(d=d||P(document.activeElement,c)||P(Vk(document.activeElement),c))||this.P(a)};
h.Pa=function(a){(a=P(a,U(this,"card")))&&(a=a.cardTargetNode)&&this.P(a)};function jl(){Hk.call(this,"hovercard")}
w(jl,Hk);ba(jl);h=jl.prototype;h.register=function(){W(this,"mouseenter",this.Ya,"target");W(this,"mouseleave",this.$a,"target");W(this,"mouseenter",this.Za,"card");W(this,"mouseleave",this.ab,"card")};
h.unregister=function(){X(this,"mouseenter",this.Ya,"target");X(this,"mouseleave",this.$a,"target");X(this,"mouseenter",this.Za,"card");X(this,"mouseleave",this.ab,"card")};
h.Ya=function(a){if(kl!=a){kl&&(this.P(kl),kl=null);var b=v(this.show,this,a),c=parseInt(this.j(a,"delay-show"),10),b=x(b,-1<c?c:200);Ta(a,"card-timer",b.toString());kl=a;a.alt&&(Ta(a,"card-alt",a.alt),a.alt="");a.title&&(Ta(a,"card-title",a.title),a.title="")}};
h.$a=function(a){var b=parseInt(this.j(a,"card-timer"),10);Oa(b);this.L(a).isCardHidable=!0;b=parseInt(this.j(a,"delay-hide"),10);b=-1<b?b:200;x(v(this.$b,this,a),b);if(b=this.j(a,"card-alt"))a.alt=b;if(b=this.j(a,"card-title"))a.title=b};
h.$b=function(a){this.L(a).isCardHidable&&(this.P(a),kl=null)};
h.Za=function(a){a&&(a.cardRootNode.isCardHidable=!1)};
h.ab=function(a){a&&this.P(a.cardTargetNode)};
var kl=null;function ll(a,b,c,d,e,f){this.b=a;this.D=null;this.g=O("yt-dialog-fg",this.b)||this.b;if(a=O("yt-dialog-title",this.g)){var g="yt-dialog-title-"+ia(this.g);a.setAttribute("id",g);this.g.setAttribute("aria-labelledby",g)}this.g.setAttribute("tabindex","-1");this.K=O("yt-dialog-focus-trap",this.b);this.N=!1;this.i=new D;this.F=[];this.F.push(Eg(this.b,v(this.mc,this),"yt-dialog-dismiss"));this.F.push(Q(this.K,"focus",v(this.Sb,this),!0));ml(this);this.S=b;this.V=c;this.T=d;this.H=e;this.W=f;this.A=
this.w=null}
var nl={LOADING:"loading",Vc:"content",bd:"working"};function ol(a,b){a.C()||a.i.subscribe("post-all",b)}
function ml(a){a=O("yt-dialog-fg-content",a.b);var b=[];ua(nl,function(a){b.push("yt-dialog-show-"+a)});
Ld(a,b);J(a,"yt-dialog-show-content")}
h=ll.prototype;
h.show=function(){if(!this.C()){this.D=document.activeElement;if(!this.T){this.f||(this.f=N("yt-dialog-bg"),this.f||(this.f=document.createElement("div"),this.f.id="yt-dialog-bg",this.f.className="yt-dialog-bg",document.body.appendChild(this.f)));var a;var b=window,c=b.document;a=0;if(c){a=c.body;var d=c.documentElement;if(d&&a)if(b=Gf(b).height,Hf(c)&&d.scrollHeight)a=d.scrollHeight!=b?d.scrollHeight:d.offsetHeight;else{var c=d.scrollHeight,e=d.offsetHeight;d.clientHeight!=e&&(c=a.scrollHeight,e=
a.offsetHeight);a=c>b?c>e?c:e:c<e?c:e}else a=0}this.f.style.height=a+"px";hk(this.f)}this.Va();a=pl(this);ql(a);this.w=Q(document,"keydown",v(this.gc,this));a=this.b;d=cc("player-added",this.Va,this);Ta(a,"player-ready-pubsub-key",d);this.V&&(this.A=Q(document,"click",v(this.Bc,this)));hk(this.b);this.g.setAttribute("tabindex","0");rl(this);this.H||J(document.body,"yt-dialog-active");vk(uk.getInstance());Ik(il.getInstance());Ik(jl.getInstance());E("yt-ui-dialog-show-complete",this)}};
function sl(){return ib(Cf("yt-dialog"),function(a){return gk(a)})}
h.Va=function(){if(!this.W){var a=this.b;Md(document.body,"hide-players",!0);a&&Md(a,"preserve-players",!0)}};
function pl(a){var b=Df("iframe",null,a.b);C(b,function(a){var b=Va(a,"onload");b&&(b=t(b))&&Q(a,"load",b);if(b=Va(a,"src"))a.src=b},a);
return nb(b)}
function ql(a){C(document.getElementsByTagName("iframe"),function(b){-1==fb(a,b)&&J(b,"iframe-hid")})}
function tl(){C(Cf("iframe-hid"),function(a){Kd(a,"iframe-hid")})}
h.mc=function(a){a=a.currentTarget;a.disabled||(a=Va(a,"action")||"",this.dismiss(a))};
h.dismiss=function(a){if(!this.C()){this.i.M("pre-all");this.i.M("pre-"+a);ik(this.b);Ik(il.getInstance());Ik(jl.getInstance());this.g.setAttribute("tabindex","-1");sl()||(ik(this.f),this.H||Kd(document.body,"yt-dialog-active"),pg(),tl());this.w&&(Gg(this.w),this.w=null);this.A&&(Gg(this.A),this.A=null);var b=this.b;if(b){var c=Va(b,"player-ready-pubsub-key");c&&(ec(c),Wa(b,"player-ready-pubsub-key"))}this.i.M("post-all");E("yt-ui-dialog-hide-complete",this);"cancel"==a&&E("yt-ui-dialog-cancelled",
this);this.i&&this.i.M("post-"+a);this.D&&this.D.focus()}};
h.setTitle=function(a){Sf(O("yt-dialog-title",this.b),a)};
h.gc=function(a){x(v(function(){this.S||27!=a.keyCode||this.dismiss("cancel")},this),0);
9==a.keyCode&&a.shiftKey&&I(document.activeElement,"yt-dialog-fg")&&a.preventDefault()};
h.Bc=function(a){"yt-dialog-base"==a.target.className&&this.dismiss("cancel")};
h.C=function(){return this.N};
h.dispose=function(){gk(this.b)&&this.dismiss("dispose");Gg(this.F);this.F.length=0;x(v(function(){this.D=null},this),0);
this.K=this.g=null;this.i.dispose();this.i=null;this.N=!0};
h.Sb=function(a){a.stopPropagation();rl(this)};
function rl(a){x(v(function(){this.g&&this.g.focus()},a),0)}
q("yt.ui.Dialog",ll,void 0);function ul(){qk.call(this,"overlay");this.i=this.f=this.g=this.b=null}
w(ul,qk);ba(ul);h=ul.prototype;h.register=function(){W(this,"click",this.Ca,"target");W(this,"click",this.vb,"close");vl(this)};
h.unregister=function(){ul.B.unregister.call(this);X(this,"click",this.Ca,"target");X(this,"click",this.vb,"close");this.i&&(ec(this.i),this.i=null);this.f&&(Gg(this.f),this.f=null)};
h.Ca=function(a){if(!this.b||!gk(this.b.b)){var b=this.L(a);a=wl(b,a);b||(b=a?a.overlayParentNode:null);if(b&&a){var c=!!this.j(b,"disable-shortcuts")||!1,d=!!this.j(b,"disable-outside-click-dismiss")||!1;this.b=new ll(a,c);this.g=b;var e=O("yt-dialog-fg",a);if(e){var f=this.j(b,"overlay-class")||"",g=this.j(b,"overlay-style")||"default",k=this.j(b,"overlay-shape")||"default",f=f?f.split(" "):[];f.push(U(this,g));f.push(U(this,k));Jd(e,f)}this.b.show();E("yt-uix-kbd-nav-move-to",e||a);vl(this);c||
d||(c=v(function(a){I(a.target,"yt-dialog-base")&&xl(this)},this),this.f=Q(O("yt-dialog-base",a),"click",c));
this.Z(b,"overlay-shown");E("yt-uix-overlay-shown",b)}}};
function vl(a){a.i||(a.i=cc("yt-uix-overlay-hide",yl));a.b&&ol(a.b,function(){var a=ul.getInstance();a.g=null;a.b.dispose();a.b=null})}
function xl(a){if(a.b){var b=a.g;a.b.dismiss("overlayhide");b&&a.Z(b,"overlay-hidden");a.g=null;a.f&&(Gg(a.f),a.f=null);a.b=null}}
function wl(a,b){var c;if(a)if(c=O("yt-dialog",a)){var d=N("body-container");d&&(d.appendChild(c),a.overlayContentNode=c,c.overlayParentNode=a)}else c=a.overlayContentNode;else b&&(c=P(b,"yt-dialog"));return c}
function zl(){var a=ul.getInstance();if(a.g)a=O("yt-dialog-fg-content",a.g.overlayContentNode);else a:{if(a=Cf("yt-dialog-fg-content"))for(var b=0;b<a.length;b++){var c=P(a[b],"yt-dialog");if(gk(c)){a=a[b];break a}}a=null}return a}
h.vb=function(a){a&&a.disabled||E("yt-uix-overlay-hide")};
function yl(){xl(ul.getInstance())}
h.show=function(a){this.Ca(a)};var Al={},Bl=[];function Cl(a){a=P(a,"yt-uix-button-subscription-container");return O("yt-dialog",O("unsubscribe-confirmation-overlay-container",a))}
function Dl(a,b){Gg(Bl);Bl.length=0;Al[b]||(Al[b]=Cl(a));ul.getInstance().show(Al[b]);var c=zl();return new ef(function(a){Bl.push(Eg(c,function(){a()},"overlay-confirmation-unsubscribe-button"))})}
;function El(a,b){var c=document.location.protocol+"//"+document.domain+"/post_login";b&&(c=yd(c,"mode",b));c=yd("/signin?context=popup","next",c);c=yd(c,"feature","sub_button");if(c=window.open(c,"loginPopup","width=375,height=440,resizable=yes,scrollbars=yes",!0)){var d=cc("LOGGED_IN",function(b){ec(B("LOGGED_IN_PUBSUB_KEY",void 0));eb("LOGGED_IN",!0);a(b)});
eb("LOGGED_IN_PUBSUB_KEY",d);c.moveTo((screen.width-375)/2,(screen.height-440)/2)}}
q("yt.pubsub.publish",E,void 0);function Fl(){var a=B("PLAYER_CONFIG");return a&&a.args&&void 0!==a.args.authuser?!0:!(!B("SESSION_INDEX")&&!B("LOGGED_IN"))}
;function Gl(){qk.call(this,"tooltip");this.b=0;this.f={}}
w(Gl,qk);ba(Gl);h=Gl.prototype;h.register=function(){W(this,"mouseover",this.oa);W(this,"mouseout",this.X);W(this,"focus",this.Sa);W(this,"blur",this.Na);W(this,"click",this.X);W(this,"touchstart",this.pb);W(this,"touchend",this.qa);W(this,"touchcancel",this.qa)};
h.unregister=function(){X(this,"mouseover",this.oa);X(this,"mouseout",this.X);X(this,"focus",this.Sa);X(this,"blur",this.Na);X(this,"click",this.X);X(this,"touchstart",this.pb);X(this,"touchend",this.qa);X(this,"touchcancel",this.qa);this.dispose();Gl.B.unregister.call(this)};
h.dispose=function(){for(var a in this.f)this.X(this.f[a]);this.f={}};
h.oa=function(a){if(!(this.b&&1E3>pa()-this.b)){var b=parseInt(this.j(a,"tooltip-hide-timer"),10);b&&(Wa(a,"tooltip-hide-timer"),Oa(b));var b=v(function(){Hl(this,a);Wa(a,"tooltip-show-timer")},this),c=parseInt(this.j(a,"tooltip-show-delay"),10)||0,b=x(b,c);
Ta(a,"tooltip-show-timer",b.toString());a.title&&(tk(a,Il(this,a)),a.title="");b=ia(a).toString();this.f[b]=a}};
h.X=function(a){var b=parseInt(this.j(a,"tooltip-show-timer"),10);b&&(Oa(b),Wa(a,"tooltip-show-timer"));b=v(function(){if(a){var b=N(Jl(this,a));b&&(Kl(b),Mf(b),Wa(a,"content-id"));b=N(Jl(this,a,"arialabel"));Mf(b)}Wa(a,"tooltip-hide-timer")},this);
b=x(b,50);Ta(a,"tooltip-hide-timer",b.toString());if(b=this.j(a,"tooltip-text"))a.title=b;b=ia(a).toString();delete this.f[b]};
h.Sa=function(a){this.b=0;this.oa(a)};
h.Na=function(a){this.b=0;this.X(a)};
h.pb=function(a,b,c){c.changedTouches&&(this.b=0,(a=ok(b,U(this),c.changedTouches[0].target))&&this.oa(a))};
h.qa=function(a,b,c){c.changedTouches&&(this.b=pa(),(a=ok(b,U(this),c.changedTouches[0].target))&&this.X(a))};
function Ll(a,b,c){tk(b,c);a=a.j(b,"content-id");(a=N(a))&&Sf(a,c)}
function Il(a,b){return a.j(b,"tooltip-text")||b.title}
function Hl(a,b){if(b){var c=Il(a,b);if(c){var d=N(Jl(a,b));if(!d){d=document.createElement("div");d.id=Jl(a,b);d.className=U(a,"tip");var e=document.createElement("div");e.className=U(a,"tip-body");var f=document.createElement("div");f.className=U(a,"tip-arrow");var g=document.createElement("div");g.setAttribute("aria-hidden","true");g.className=U(a,"tip-content");var k=Ml(a,b),l=Jl(a,b,"content");g.id=l;Ta(b,"content-id",l);e.appendChild(g);k&&d.appendChild(k);d.appendChild(e);d.appendChild(f);
var m=$f(b),l=Jl(a,b,"arialabel"),f=document.createElement("div");J(f,U(a,"arialabel"));f.id=l;m=b.hasAttribute("aria-label")?b.getAttribute("aria-label"):"rtl"==document.body.getAttribute("dir")?c+" "+m:m+" "+c;Sf(f,m);b.setAttribute("aria-labelledby",l);l=Qh()||document.body;l.appendChild(f);l.appendChild(d);Ll(a,b,c);(c=parseInt(a.j(b,"tooltip-max-width"),10))&&e.offsetWidth>c&&(e.style.width=c+"px",J(g,U(a,"normal-wrap")));g=I(b,U(a,"reverse"));Nl(a,b,d,e,k,g)||Nl(a,b,d,e,k,!g);var r=U(a,"tip-visible");
x(function(){J(d,r)},0)}}}}
function Nl(a,b,c,d,e,f){Md(c,U(a,"tip-reverse"),f);var g=0;f&&(g=1);var k=Gh(b);f=new K((k.width-10)/2,f?k.height:0);var l=Dh(b);lk(new K(l.l+f.l,l.o+f.o),c,g);f=Gf(window);var m;1==c.nodeType?m=Eh(c):(c=c.changedTouches?c.changedTouches[0]:c,m=new K(c.clientX,c.clientY));c=Gh(d);var r=Math.floor(c.width/2),g=!!(f.height<m.o+k.height),k=!!(m.o<k.height),l=!!(m.l<r);f=!!(f.width<m.l+r);m=(c.width+3)/-2- -5;a=a.j(b,"force-tooltip-direction");if("left"==a||l)m=-5;else if("right"==a||f)m=20-c.width-
3;a=Math.floor(m)+"px";d.style.left=a;e&&(e.style.left=a,e.style.height=c.height+"px",e.style.width=c.width+"px");return!(g||k)}
function Jl(a,b,c){a=U(a)+jg(b);c&&(a+="-"+c);return a}
function Ml(a,b){var c=null;Fe&&I(b,U(a,"masked"))&&((c=N("yt-uix-tooltip-shared-mask"))?(c.parentNode.removeChild(c),hk(c)):(c=document.createElement("iframe"),c.src='javascript:""',c.id="yt-uix-tooltip-shared-mask",c.className=U(a,"tip-mask")));return c}
function Kl(a){var b=N("yt-uix-tooltip-shared-mask"),c=b&&cg(b,function(b){return b==a},!1,2);
b&&c&&(b.parentNode.removeChild(b),ik(b),document.body.appendChild(b))}
;function Ol(){qk.call(this,"subscription-button")}
w(Ol,qk);ba(Ol);Ol.prototype.register=function(){W(this,"click",this.Fa);sk(this,Rj,this.gb);sk(this,Sj,this.fb);sk(this,Tj,this.xc);sk(this,Wj,this.gb);sk(this,Xj,this.fb);sk(this,Yj,this.zc);sk(this,ak,this.oc);sk(this,bk,this.nc)};
Ol.prototype.unregister=function(){X(this,"click",this.Fa);Ol.B.unregister.call(this)};
var Pl={Ga:"hover-enabled",yb:"yt-uix-button-subscribe",zb:"yt-uix-button-subscribed",Tc:"ypc-enabled",Ab:"yt-uix-button-subscription-container",Bb:"yt-subscription-button-disabled-mask-container"},Ql={Uc:"channel-external-id",Cb:"subscriber-count-show-when-subscribed",Db:"subscriber-count-tooltip",Eb:"subscriber-count-title",Wc:"href",Xc:"insecure",Ha:"is-subscribed",Yc:"parent-url",Zc:"clicktracking",Fb:"show-unsub-confirm-dialog",$c:"show-unsub-confirm-time-frame",Gb:"style-type",Ia:"subscribed-timestamp",
Ja:"subscription-id",ad:"target",Ib:"ypc-enabled"};h=Ol.prototype;h.Fa=function(a){var b=this.j(a,"href"),c=this.j(a,"insecure"),d=Fl(),c=c&&!0;if(b)a=this.j(a,"target")||"_self",window.open(b,a);else if(!c)if(d){var b=this.j(a,"channel-external-id"),d=this.j(a,"clicktracking"),c=Rl(this,a),e=this.j(a,"parent-url");if(this.j(a,"is-subscribed")){var f=this.j(a,"subscription-id"),g=new Nj(b,f,c,a,d,e);Sl(this,a)?Dl(a,b).then(function(){T(Vj,g)}):T(Vj,g)}else T(Qj,new Lj(b,c,d,e))}else Tl(this,a)};
h.gb=function(a){this.Y(a.b,this.nb,!0)};
h.fb=function(a){this.Y(a.b,this.nb,!1)};
h.xc=function(a){this.Y(a.b,this.ob,!0,a.subscriptionId)};
h.zc=function(a){this.Y(a.b,this.ob,!1)};
h.oc=function(a){this.Y(a.b,this.Qb)};
h.nc=function(a){this.Y(a.b,this.Ob)};
h.ob=function(a,b,c){b?(Ta(a,Ql.Ha,"true"),c&&Ta(a,Ql.Ja,c),this.j(a,Ql.Fb)&&(b=new Hj,Ta(a,Ql.Ia,(b.getTime()/1E3).toString()))):(Wa(a,Ql.Ha),Wa(a,Ql.Ia),Wa(a,Ql.Ja));Ul(this,a)};
function Rl(a,b){if(!a.j(b,"ypc-enabled"))return null;var c=a.j(b,"ypc-item-type"),d=a.j(b,"ypc-item-id");return{itemType:c,itemId:d,subscriptionElement:b}}
h.nb=function(a,b){var c=P(a,Pl.Ab);Md(c,Pl.Bb,b);a.setAttribute("aria-busy",b?"true":"false");a.disabled=b};
function Ul(a,b){var c=a.j(b,Ql.Gb),d=!!a.j(b,"is-subscribed"),c="-"+c,e=Pl.zb+c;Md(b,Pl.yb+c,!d);Md(b,e,d);a.j(b,Ql.Db)&&!a.j(b,Ql.Cb)&&(c=U(Gl.getInstance()),Md(b,c,!d),b.title=d?"":a.j(b,Ql.Eb));d?x(function(){J(b,Pl.Ga)},1E3):Kd(b,Pl.Ga)}
h.Qb=function(a){var b=!!this.j(a,"ypc-item-type"),c=!!this.j(a,"ypc-item-id");!this.j(a,"ypc-enabled")&&b&&c&&(J(a,"ypc-enabled"),Ta(a,Ql.Ib,"true"))};
h.Ob=function(a){this.j(a,"ypc-enabled")&&(Kd(a,"ypc-enabled"),Wa(a,"ypc-enabled"))};
function Vl(a,b){return gb(Cf(U(a)),function(a){return b==this.j(a,"channel-external-id")},a)}
h.Kb=function(a,b,c){var d=qb(arguments,2);C(a,function(a){b.apply(this,mb(a,d))},this)};
h.Y=function(a,b,c){var d=Vl(this,a);this.Kb.apply(this,mb([d],qb(arguments,1)))};
function Tl(a,b){var c=v(function(a){a.discoverable_subscriptions&&eb("SUBSCRIBE_EMBED_DISCOVERABLE_SUBSCRIPTIONS",a.discoverable_subscriptions);this.Fa(b)},a);
El(c,"subscribe")}
function Sl(a,b){if(!a.j(b,"show-unsub-confirm-dialog"))return!1;var c=a.j(b,"show-unsub-confirm-time-frame");return"always"==c||"ten_minutes"==c&&(c=parseInt(a.j(b,"subscribed-timestamp"),10),(new Hj).getTime()<1E3*(c+600))?!0:!1}
;var Wl=window.yt&&window.yt.uix&&window.yt.uix.widgets_||{};q("yt.uix.widgets_",Wl,void 0);function Xl(a){return(0==a.search("cue")||0==a.search("load"))&&"loadModule"!=a}
function Yl(a,b,c){u(a)&&(a={mediaContentUrl:a,startSeconds:b,suggestedQuality:c});b=/\/([ve]|embed)\/([^#?]+)/.exec(a.mediaContentUrl);a.videoId=b&&b[2]?b[2]:null;return Zl(a)}
function Zl(a,b,c){if(ha(a)){b="endSeconds startSeconds mediaContentUrl suggestedQuality videoId two_stage_token".split(" ");c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}return{videoId:a,startSeconds:b,suggestedQuality:c}}
function $l(a,b,c,d){if(ha(a)&&!da(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}c={index:b,startSeconds:c,suggestedQuality:d};u(a)&&16==a.length?c.list="PL"+a:c.playlist=a;return c}
function am(a){var b=a.video_id||a.videoId;if(u(b)){var c=xg()||{},d=xg()||{};p(void 0)?d[b]=void 0:delete d[b];var e=pa()+3E5,f=zg;if(f&&window.JSON){u(d)||(d=JSON.stringify(d,void 0));try{f.set("yt-player-two-stage-token",d,e)}catch(g){f.remove("yt-player-two-stage-token")}}(b=c[b])&&(a.two_stage_token=b)}}
;var bm=null,cm=[];function dm(a){return{externalChannelId:a.externalChannelId,fc:!!a.isChannelPaid,source:a.source,subscriptionId:a.subscriptionId}}
function em(a){a&&a.externalChannelId&&fm(dm(a))}
function fm(a){Fl()?(T(Qj,new Lj(a.externalChannelId,a.fc?{itemType:"U",itemId:a.externalChannelId}:null)),a=xd({event:"subscribe",source:a.source}),Yh("/gen_204?"+a,void 0)):gm(a)}
function gm(a){El(function(b){b.subscription_ajax&&fm(a)},null)}
function hm(a){a=dm(a);T(Vj,new Nj(a.externalChannelId,a.subscriptionId,null));a=xd({event:"unsubscribe",source:a.source});Yh("/gen_204?"+a,void 0)}
function im(a){bm&&bm.channelSubscribed(a.b,a.subscriptionId)}
function jm(a){bm&&bm.channelUnsubscribed(a.b)}
;function km(a){y.call(this);this.f=a;this.f.subscribe("command",this.kb,this);this.g={};this.i=!1}
w(km,y);h=km.prototype;h.start=function(){this.i||this.C()||(this.i=!0,lm(this.f,"RECEIVING"))};
h.kb=function(a,b){if(this.i&&!this.C()){var c=b||{};switch(a){case "addEventListener":if(u(c.event)&&(c=c.event,!(c in this.g))){var d=v(this.Gc,this,c);this.g[c]=d;this.addEventListener(c,d)}break;case "removeEventListener":u(c.event)&&mm(this,c.event);break;default:this.b.isReady()&&this.b[a]&&(c=nm(a,b||{}),c=this.b[a].apply(this.b,c),(c=om(a,c))&&this.i&&!this.C()&&lm(this.f,a,c))}}};
h.Gc=function(a,b){this.i&&!this.C()&&lm(this.f,a,this.wa(a,b))};
h.wa=function(a,b){if(null!=b)return{value:b}};
function mm(a,b){b in a.g&&(a.removeEventListener(b,a.g[b]),delete a.g[b])}
h.G=function(){var a=this.f;a.C()||Wb(a.b,"command",this.kb,this);this.f=null;for(var b in this.g)mm(this,b);km.B.G.call(this)};function pm(a,b,c){sh.call(this);this.f=a;this.g=b;this.w=c}
w(pm,sh);function lm(a,b,c){if(!a.C()){var d=a.f;d.C()||a.g!=d.b||(a={id:a.w,command:b},c&&(a.data=c),d.b.postMessage(Mc(a),d.g))}}
pm.prototype.G=function(){this.g=this.f=null;pm.B.G.call(this)};new D;function qm(){var a=this.f=new Ph(!!B("WIDGET_ID_ENFORCE")),b=v(this.Dc,this);a.w=b;a.A=null;this.f.channel="widget";if(a=B("WIDGET_ID"))this.f.b=a;this.i=[];this.A=!1;this.w={}}
h=qm.prototype;h.Dc=function(a,b){if("addEventListener"==a&&b){var c=b[0];this.w[c]||"onReady"==c||(this.addEventListener(c,rm(this,c)),this.w[c]=!0)}else this.wb(a,b)};
h.wb=function(){};
function rm(a,b){return v(function(a){this.sendMessage(b,a)},a)}
h.addEventListener=function(){};
h.Rb=function(){this.A=!0;this.sendMessage("initialDelivery",this.xa());this.sendMessage("onReady");C(this.i,this.mb,this);this.i=[]};
h.xa=function(){return null};
function sm(a,b){a.sendMessage("infoDelivery",b)}
h.mb=function(a){this.A?this.f.sendMessage(a):this.i.push(a)};
h.sendMessage=function(a,b){this.mb({event:a,info:void 0==b?null:b})};
h.dispose=function(){this.f=null};function tm(a,b,c){y.call(this);this.b=a;this.g=c;this.i=Q(window,"message",v(this.w,this));this.f=new pm(this,a,b);Za(this,na($a,this.f))}
w(tm,y);tm.prototype.w=function(a){var b;if(b=!this.C())if(b=a.origin==this.g)a:{b=this.b;do{var c;b:{c=a.source;do{if(c==b){c=!0;break b}if(c==c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(a=a.data,u(a))){try{a=Kc(a)}catch(d){return}a.command&&(b=this.f,b.C()||b.i("command",a.command,a.data))}};
tm.prototype.G=function(){Gg(this.i);this.b=null;tm.B.G.call(this)};function um(a,b){km.call(this,b);this.b=a;this.start()}
w(um,km);um.prototype.addEventListener=function(a,b){this.b.addEventListener(a,b)};
um.prototype.removeEventListener=function(a,b){this.b.removeEventListener(a,b)};
function nm(a,b){switch(a){case "loadVideoById":return b=Zl(b),am(b),[b];case "cueVideoById":return b=Zl(b),am(b),[b];case "loadVideoByPlayerVars":return am(b),[b];case "cueVideoByPlayerVars":return am(b),[b];case "loadPlaylist":return b=$l(b),am(b),[b];case "cuePlaylist":return b=$l(b),am(b),[b];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];
case "setLoop":return[b.loopPlaylists];case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey]}return[]}
function om(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
um.prototype.wa=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return um.B.wa.call(this,a,b)};
um.prototype.G=function(){um.B.G.call(this);delete this.b};function vm(a){qm.call(this);this.b=a;this.g=[];this.addEventListener("onReady",v(this.wc,this));this.addEventListener("onVideoProgress",v(this.Kc,this));this.addEventListener("onVolumeChange",v(this.Lc,this));this.addEventListener("onApiChange",v(this.Fc,this));this.addEventListener("onPlaybackQualityChange",v(this.Hc,this));this.addEventListener("onPlaybackRateChange",v(this.Ic,this));this.addEventListener("onStateChange",v(this.Jc,this))}
w(vm,qm);h=vm.prototype;h.wb=function(a,b){if(this.b[a]){b=b||[];if(0<b.length&&Xl(a)){var c;c=b;if(ha(c[0])&&!da(c[0]))c=c[0];else{var d={};switch(a){case "loadVideoById":case "cueVideoById":d=Zl.apply(window,c);break;case "loadVideoByUrl":case "cueVideoByUrl":d=Yl.apply(window,c);break;case "loadPlaylist":case "cuePlaylist":d=$l.apply(window,c)}c=d}am(c);b.length=1;b[0]=c}this.b[a].apply(this.b,b);Xl(a)&&sm(this,this.xa())}};
h.wc=function(){var a=v(this.Rb,this);this.f.f=a};
h.addEventListener=function(a,b){this.g.push({eventType:a,listener:b});this.b.addEventListener(a,b)};
h.xa=function(){if(!this.b)return null;var a=this.b.getApiInterface();lb(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c],f=e;if(0==f.search("get")||0==f.search("is")){var f=e,g=0;0==f.search("get")?g=3:0==f.search("is")&&(g=2);f=f.charAt(g).toLowerCase()+f.substr(g+1);try{var k=this.b[e]();b[f]=k}catch(l){}}}b.videoData=this.b.getVideoData();b.currentTimeLastUpdated_=pa()/1E3;return b};
h.Jc=function(a){a={playerState:a,currentTime:this.b.getCurrentTime(),duration:this.b.getDuration(),videoData:this.b.getVideoData(),videoStartBytes:0,videoBytesTotal:this.b.getVideoBytesTotal(),videoLoadedFraction:this.b.getVideoLoadedFraction(),playbackQuality:this.b.getPlaybackQuality(),availableQualityLevels:this.b.getAvailableQualityLevels(),videoUrl:this.b.getVideoUrl(),playlist:this.b.getPlaylist(),playlistIndex:this.b.getPlaylistIndex(),currentTimeLastUpdated_:pa()/1E3,playbackRate:this.b.getPlaybackRate(),
mediaReferenceTime:this.b.getMediaReferenceTime()};this.b.getProgressState&&(a.progressState=this.b.getProgressState());this.b.getStoryboardFormat&&(a.storyboardFormat=this.b.getStoryboardFormat());sm(this,a)};
h.Hc=function(a){sm(this,{playbackQuality:a})};
h.Ic=function(a){sm(this,{playbackRate:a})};
h.Fc=function(){for(var a=this.b.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.b.getOptions(e);b[e]={options:f};for(var g=0,k=f.length;g<k;g++){var l=f[g],m=this.b.getOption(e,l);b[e][l]=m}}this.sendMessage("apiInfoDelivery",b)};
h.Lc=function(){sm(this,{muted:this.b.isMuted(),volume:this.b.getVolume()})};
h.Kc=function(a){a={currentTime:a,videoBytesLoaded:this.b.getVideoBytesLoaded(),videoLoadedFraction:this.b.getVideoLoadedFraction(),currentTimeLastUpdated_:pa()/1E3,playbackRate:this.b.getPlaybackRate(),mediaReferenceTime:this.b.getMediaReferenceTime()};this.b.getProgressState&&(a.progressState=this.b.getProgressState());sm(this,a)};
h.dispose=function(){vm.B.dispose.call(this);for(var a=0;a<this.g.length;a++){var b=this.g[a];this.b.removeEventListener(b.eventType,b.listener)}this.g=[]};var wm=document,Z=window;var xm=!1,ym="";function zm(a){a=a.match(/[\d]+/g);if(!a)return"";a.length=3;return a.join(".")}
(function(){if(navigator.plugins&&navigator.plugins.length){var a=navigator.plugins["Shockwave Flash"];if(a&&(xm=!0,a.description)){ym=zm(a.description);return}if(navigator.plugins["Shockwave Flash 2.0"]){xm=!0;ym="2.0.0.11";return}}if(navigator.mimeTypes&&navigator.mimeTypes.length&&(a=navigator.mimeTypes["application/x-shockwave-flash"],xm=!(!a||!a.enabledPlugin))){ym=zm(a.enabledPlugin.description);return}try{var b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");xm=!0;ym=zm(b.GetVariable("$version"));
return}catch(c){}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");xm=!0;ym="6.0.21";return}catch(c){}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),xm=!0,ym=zm(b.GetVariable("$version"))}catch(c){}})();
var Am=xm,Bm=ym;(function(){var a;return Fe?(a=/Windows NT ([0-9.]+)/,(a=a.exec(bb))?a[1]:"0"):Ee?(a=/10[_.][0-9_.]+/,(a=a.exec(bb))?a[0].replace(/_/g,"."):"10"):Ge?(a=/Android\s+([^\);]+)(\)|;)/,(a=a.exec(bb))?a[1]:""):He||Ie||Je?(a=/(?:iPhone|CPU)\s+OS\s+(\S+)/,(a=a.exec(bb))?a[1].replace(/_/g,"."):""):""})();function Cm(a){return(a=a.exec(bb))?a[1]:""}
(function(){if(Xe)return Cm(/Firefox\/([0-9.]+)/);if(L||Ae||ze)return Pe;if(af)return Cm(/Chrome\/([0-9.]+)/);if(bf&&!(md()||z("iPad")||z("iPod")))return Cm(/Version\/([0-9.]+)/);if(Ye||Ze){var a=/Version\/(\S+).*Mobile\/(\S+)/.exec(bb);if(a)return a[1]+"."+a[2]}else if($e)return(a=Cm(/Android\s+([0-9.]+)/))?a:Cm(/Version\/([0-9.]+)/);return""})();(function(){var a=!1;try{var b=Object.defineProperty({},"passive",{get:function(){a=!0}});
n.addEventListener("test",null,b)}catch(c){}return a})();var Dm=(new Date).getTime();function Em(a){sa.call(this,a.message||a.description||a.name);this.b=a instanceof nf}
w(Em,sa);Em.prototype.name="BiscottiError";function Fm(a,b){this.f=a;this.b=b}
Fm.prototype.then=function(a,b,c){try{if(p(this.f))return a?kf(a.call(c,this.f)):kf(this.f);if(p(this.b)){if(!b)return lf(this.b);var d=b.call(c,this.b);return!p(d)&&this.b.b?lf(this.b):kf(d)}throw Error("Invalid Result_ state");}catch(e){return lf(e)}};
Wc(Fm);var ai={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Gm=null;function Hm(a){a=a.responseText;if(0!=a.lastIndexOf(")]}'",0))return Im(""),Gm=new Fm(""),"";a=JSON.parse(a.substr(4)).id;Im(a);Gm=new Fm(a);Jm(18E5,2);return a}
function Km(a,b){var c=new Em(b);Im("");Gm=new Fm(void 0,c);0<a&&Jm(12E4,a-1);throw c;}
function Jm(a,b){x(function(){var a=v(Km,n,b),a=$h().then(Hm,a);mf(a,null,aa,void 0)},a)}
function Im(a){q("yt.www.ads.biscotti.lastId_",a,void 0)}
;function Lm(){}
function Mm(){try{var a;try{var b=t("yt.www.ads.biscotti.getId_"),c;if(b)c=b();else{if(!Gm){var d=v(Km,n,2);Gm=$h().then(Hm,d)}c=Gm}a=c}catch(e){a=lf(e)}a.then(Nm,Lm);x(Mm,18E5)}catch(e){Pa(e)}}
function Nm(a){var b;a:{try{b=window.top.location.href}catch(r){b=2;break a}b=null!=b?b==window.document.location.href?0:1:2}b={dt:Dm,flash:Bm||"0",frm:b};b.u_tz=-(new Date).getTimezoneOffset();var c;try{c=Z.history.length}catch(r){c=0}b.u_his=c;b.u_java=!!Z.navigator&&"unknown"!==typeof Z.navigator.javaEnabled&&!!Z.navigator.javaEnabled&&Z.navigator.javaEnabled();Z.screen&&(b.u_h=Z.screen.height,b.u_w=Z.screen.width,b.u_ah=Z.screen.availHeight,b.u_aw=Z.screen.availWidth,b.u_cd=Z.screen.colorDepth);
Z.navigator&&Z.navigator.plugins&&(b.u_nplug=Z.navigator.plugins.length);Z.navigator&&Z.navigator.mimeTypes&&(b.u_nmime=Z.navigator.mimeTypes.length);b.bid=a;b.ca_type=Am?"flash":"image";if(zd("enable_server_side_search_pyv")||zd("enable_server_side_mweb_search_pyv")){var d;a=window;try{d=a.screenX;var e=a.screenY}catch(r){}try{var f=a.outerWidth,g=a.outerHeight}catch(r){}try{var k=a.innerWidth,l=a.innerHeight}catch(r){}d=[a.screenLeft,a.screenTop,d,e,a.screen?a.screen.availWidth:void 0,a.screen?
a.screen.availTop:void 0,f,g,k,l];var m;e=window.top||Z;try{m=e.document&&!e.document.body?new Sc(-1,-1):Gf(e||window).round()}catch(r){m=new Sc(-12245933,-12245933)}e=0;window.SVGElement&&document.createElementNS&&(e|=1);oa(b,{bc:e,bih:m.height,biw:m.width,brdim:d.join(),vis:{visible:1,hidden:2,prerender:3,preview:4}[wm.webkitVisibilityState||wm.mozVisibilityState||wm.visibilityState||""]||0,wgl:!!Z.WebGLRenderingContext})}Mg("//www.youtube.com/ad_data_204",{ac:!1,J:b})}
;function Om(){this.b=B("ALT_PREF_COOKIE_NAME","PREF");var a;if(a=Vc.get(""+this.b,void 0)){a=unescape(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Pm[d]=c.toString())}}}
ba(Om);var Pm=t("yt.prefs.UserPrefs.prefs_")||{};q("yt.prefs.UserPrefs.prefs_",Pm,void 0);function Qm(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function Rm(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function Sm(a){a=void 0!==Pm[a]?Pm[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
Om.prototype.get=function(a,b){Rm(a);Qm(a);var c=void 0!==Pm[a]?Pm[a].toString():null;return null!=c?c:b?b:""};
Om.prototype.set=function(a,b){Rm(a);Qm(a);if(null==b)throw Error("ExpectedNotNull");Pm[a]=b.toString()};
Om.prototype.remove=function(a){Rm(a);Qm(a);delete Pm[a]};
Om.prototype.clear=function(){Pm={}};function Tm(a){for(var b=0;b<a.length;b++){var c=a[b];"send_follow_on_ping_action"==c.name&&c.data&&c.data.follow_on_url&&Yh(c.data.follow_on_url)}}
;function Um(a){R.call(this,1,arguments);this.va=a}
w(Um,R);function Vm(a,b){R.call(this,2,arguments);this.f=a;this.b=b}
w(Vm,R);function Wm(a,b,c,d){R.call(this,1,arguments);this.b=b;this.f=c||null;this.itemId=d||null}
w(Wm,R);function Xm(a,b){R.call(this,1,arguments);this.f=a;this.b=b||null}
w(Xm,R);function Ym(a){R.call(this,1,arguments)}
w(Ym,R);var Zm=new S("ypc-core-load",Um),$m=new S("ypc-guide-sync-success",Vm),an=new S("ypc-purchase-success",Wm),bn=new S("ypc-subscription-cancel",Ym),cn=new S("ypc-subscription-cancel-success",Xm),dn=new S("ypc-init-subscription",Ym);var en=!1,fn=[],gn=[];function hn(a){a.b?en?T(Uj,a):T(Zm,new Um(function(){T(dn,new Ym(a.b))})):jn(a.f,a.i,a.g,a.source)}
function kn(a){a.b?en?T(Zj,a):T(Zm,new Um(function(){T(bn,new Ym(a.b))})):ln(a.f,a.subscriptionId,a.i,a.g,a.source)}
function mn(a){nn(nb(a.b))}
function on(a){pn(nb(a.b))}
function qn(a){rn(a.g,a.f,a.b)}
function sn(a){var b=a.itemId,c=a.b.subscriptionId;b&&c&&T(Tj,new Mj(b,c,a.b.channelInfo))}
function tn(a){var b=a.b;ua(a.f,function(a,d){T(Tj,new Mj(d,a,b[d]))})}
function un(a){T(Yj,new Jj(a.f.itemId));a.b&&a.b.length&&(vn(a.b,Yj),vn(a.b,ak))}
function jn(a,b,c,d){var e=new Jj(a);T(Rj,e);var f={};f.c=a;c&&(f.eurl=c);d&&(f.source=d);c={};(d=B("PLAYBACK_ID"))&&(c.plid=d);(d=B("EVENT_ID"))&&(c.ei=d);b&&wn(b,c);Ng("/subscription_ajax?action_create_subscription_to_channel=1",{method:"POST",Da:f,J:c,O:function(b,c){var d=c.response;T(Tj,new Mj(a,d.id,d.channel_info));d.show_feed_privacy_dialog&&E("SHOW-FEED-PRIVACY-SUBSCRIBE-DIALOG",a);d.actions&&Tm(d.actions)},
Ba:function(){T(Sj,e)}})}
function ln(a,b,c,d,e){var f=new Jj(a);T(Wj,f);var g={};d&&(g.eurl=d);e&&(g.source=e);d={};d.c=a;d.s=b;(a=B("PLAYBACK_ID"))&&(d.plid=a);(a=B("EVENT_ID"))&&(d.ei=a);c&&wn(c,d);Ng("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",Da:g,J:d,O:function(a,b){var c=b.response;T(Yj,f);c.actions&&Tm(c.actions)},
Ba:function(){T(Xj,f)}})}
function rn(a,b,c){if(a){var d={};d.channel_id=a;switch(b){case "receive-all-updates":d.receive_all_updates=!0;break;case "receive-no-updates":d.receive_no_updates=!0;d.receive_post_updates=!1;break;case "receive-highlight-updates":d.receive_all_updates=!1;d.receive_no_updates=!1;break;default:return}null===c||d.receive_no_updates||(d.receive_post_updates=c);var e=new Kj(a,b,c);Ng("/subscription_ajax?action_update_subscription_preferences=1",{method:"POST",J:d,onError:function(){T(ek,e)},
O:function(){T(dk,e)}})}}
function nn(a){if(a.length){var b=pb(a,0,40);T("subscription-batch-subscribe-loading");vn(b,Rj);var c={};c.a=b.join(",");var d=function(){T("subscription-batch-subscribe-loaded");vn(b,Sj)};
Ng("/subscription_ajax?action_create_subscription_to_all=1",{method:"POST",J:c,O:function(c,f){d();var e=f.response,k=e.id;if(da(k)&&k.length==b.length){var l=e.channel_info_map;C(k,function(a,c){var d=b[c];T(Tj,new Mj(d,a,l[d]))});
a.length?nn(a):T("subscription-batch-subscribe-finished")}},
onError:function(){d();T("subscription-batch-subscribe-failure")}})}}
function pn(a){if(a.length){var b=pb(a,0,40);T("subscription-batch-unsubscribe-loading");vn(b,Wj);var c={};c.c=b.join(",");var d=function(){T("subscription-batch-unsubscribe-loaded");vn(b,Xj)};
Ng("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",J:c,O:function(){d();vn(b,Yj);a.length&&pn(a)},
onError:function(){d()}})}}
function vn(a,b){C(a,function(a){T(b,new Jj(a))})}
function wn(a,b){var c=Qd(a);oa(b,c)}
;var xn=null,yn=null,zn=null,An={};function Bn(a){Zg(a.payload_name,a.payload,zd("enable_youtubei_innertube")?Vg:fg,void 0)}
function Cn(a){var b=a.id;a=a.ve_type;var c=dd++;a=new cd(void 0,a,c);An[b]=a;b=fh();c=eh();b&&c&&$g(b,c,a)}
function Dn(a){var b=a.csn;a=a.root_ve_type;if(b&&a&&(eb("client-screen-nonce",b),eb("ROOT_VE_TYPE",a),a=eh()))for(var c in An)$g(b,a,An[c])}
function En(a){An[a.id]=new cd(a.tracking_params)}
function Fn(a){var b=fh();a=An[a.id];b&&a&&ah(bh(),{click:{csn:b,visualElement:ed(a)}},void 0)}
function Gn(a){a=a.ids;var b=fh();if(b){for(var c=[],d=0;d<a.length;d++){var e=An[a[d]];e&&c.push(e)}c.length&&ch(b,c)}}
function Hn(){var a=xn;a&&a.startInteractionLogging&&a.startInteractionLogging()}
;q("yt.setConfig",eb,void 0);q("yt.setMsg",function(a){Ya(gh,arguments)},void 0);
q("yt.logging.errors.log",function(a,b,c,d,e){c={name:c||B("INNERTUBE_CONTEXT_CLIENT_NAME",1),version:d||B("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0)};e=window&&window.yterr||e||!1;if(a&&e&&!(5<=Ug)){e=a.stacktrace;d=a.columnNumber;var f=t("window.location.href");if(u(a))a={message:a,name:"Unknown error",lineNumber:"Not available",fileName:f,stack:"Not available"};else{var g,k,l=!1;try{g=a.lineNumber||a.line||"Not available"}catch(M){g="Not available",l=!0}try{k=a.fileName||a.filename||a.sourceURL||
n.$googDebugFname||f}catch(M){k="Not available",l=!0}a=!l&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:{message:a.message||"Not available",name:a.name||"UnknownError",lineNumber:g,fileName:k,stack:a.stack||"Not available"}}e=e||a.stack;g=a.lineNumber.toString();isNaN(g)||isNaN(d)||(g=g+":"+d);if(!(Tg[a.message]||0<=e.indexOf("/YouTubeCenter.js")||0<=e.indexOf("/mytube.js"))){b={Da:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,1E3),line:g,level:b||"ERROR"},J:{url:B("PAGE_NAME",
window.location.href),file:a.fileName},method:"POST"};e&&(b.J.stack=e);for(var m in c)b.J["client."+m]=c[m];if(m=B("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var r in m)b.J[r]=m[r];Ng("/error_204",b);Tg[a.message]=!0;Ug++}}},void 0);
q("writeEmbed",function(){var a=B("PLAYER_CONFIG",void 0);"1"!=a.privembed&&Mm();"gvn"==a.args.ps&&(document.body.style.backgroundColor="transparent");var b=document.referrer,c=B("POST_MESSAGE_ORIGIN");window!=window.top&&b&&b!=document.URL&&(a.args.loaderUrl=b);B("LIGHTWEIGHT_AUTOPLAY")&&(a.args.autoplay="1");a.args.autoplay&&am(a.args);xn=a=rj("player",a);a.addEventListener("onScreenChanged",Dn);a.addEventListener("onLogClientVeCreated",Cn);a.addEventListener("onLogServerVeCreated",En);a.addEventListener("onLogToGel",
Bn);a.addEventListener("onLogVeClicked",Fn);a.addEventListener("onLogVesShown",Gn);a.addEventListener("onReady",Hn);b=B("POST_MESSAGE_ID","player");B("ENABLE_JS_API")?zn=new vm(a):B("ENABLE_POST_API")&&u(b)&&u(c)&&(yn=new tm(window.parent,b,c),zn=new um(a,yn.f));B("BG_P")&&(B("BG_I")||B("BG_IU"))&&rc();wc();bm=a;bm.addEventListener("SUBSCRIBE",em);bm.addEventListener("UNSUBSCRIBE",hm);cm.push(Fi(Tj,im),Fi(Yj,jm))},void 0);
q("yt.www.watch.ads.restrictioncookie.spr",function(a){Yh(a+"mac_204?action_fcts=1");return!0},void 0);
var In=Na(function(){Ni("ol");en=!0;gn.push(Fi(Qj,hn),Fi(Vj,kn));en||gn.push(Fi(Uj,hn),Fi(Zj,kn),Fi(Oj,mn),Fi(Pj,on),Fi(ck,qn),Fi(an,sn),Fi(cn,un),Fi($m,tn));var a=Om.getInstance(),b=1<window.devicePixelRatio;if(!!((Sm("f"+(Math.floor(119/31)+1))||0)&67108864)!=b){var c="f"+(Math.floor(119/31)+1),d=Sm(c)||0,d=b?d|67108864:d&-67108865;0==d?delete Pm[c]:(b=d.toString(16),Pm[c]=b.toString());var a=a.b,c=[],e;for(e in Pm)c.push(e+"="+escape(Pm[e]));Vc.set(""+a,c.join("&"),63072E3,"/","youtube.com")}}),
Jn=Na(function(){var a=xn;
a&&a.sendAbandonmentPing&&a.sendAbandonmentPing();B("PL_ATT")&&(qc=null);for(var a=0,b=uc.length;a<b;a++){var c=uc[a];if(!isNaN(c)){var d=t("yt.scheduler.instance.cancelJob");d?d(c):Oa(c)}}uc.length=0;a=mc("//static.doubleclick.net/instream/ad_status.js");if(b=document.getElementById(a))hc(a),b.parentNode.removeChild(b);vc=!1;eb("DCLKSTAT",0);ec(fn);fn.length=0;Gi(gn);gn.length=0;en=!1;bm&&(bm.removeEventListener("SUBSCRIBE",fm),bm.removeEventListener("UNSUBSCRIBE",hm));bm=null;Gi(cm);cm.length=0;
ab(zn,yn);if(a=xn)a.removeEventListener("onScreenChanged",Dn),a.removeEventListener("onLogClientVeCreated",Cn),a.removeEventListener("onLogServerVeCreated",En),a.removeEventListener("onLogToGel",Bn),a.removeEventListener("onLogVeClicked",Fn),a.removeEventListener("onLogVesShown",Gn),a.removeEventListener("onReady",Hn),a.destroy();An={}});
window.addEventListener?(window.addEventListener("load",In),window.addEventListener("unload",Jn)):window.attachEvent&&(window.attachEvent("onload",In),window.attachEvent("onunload",Jn));var Kn=Ol.getInstance(),Ln=U(Kn);Ln in Wl||(Kn.register(),rk(Kn,"yt-uix-init-"+Ln,Kn.init),rk(Kn,"yt-uix-dispose-"+Ln,Kn.dispose),Wl[Ln]=Kn);}).call(this);
