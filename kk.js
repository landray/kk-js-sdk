/*!
 * kkjs v1.2.27
 * Copyright© 2017 深圳市蓝凌软件股份有限公司版权所有
 */
!function(a,b){"function"==typeof define&&(define.amd||define.cmd)?define(function(){return b(a)}):"object"==typeof exports?module.exports=b(a):a.Easymi=a.kk=b(a)}("undefined"!=typeof window?window:this,function(a){"use strict";var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L=[].slice,M={}.hasOwnProperty,N=function(a,b){return function(){return a.apply(b,arguments)}},O=[].indexOf||function(a){for(var b=0,c=this.length;b<c;b++)if(b in this&&this[b]===a)return b;return-1};return K=a.kk,k="",C=function(){var b,c,d;return d=null,b=function(){var a;if(a=Was.readyArgs,a.callArgs&&a.callArgs.__JSON__)try{a.callArgs=JSON.parse(a.callArgs.__JSON__)}catch(b){b,a.callArgs=a.callArgs.__JSON__}},c=function(c){a.Was&&Was.ready?(b(),c(Was.readyArgs)):d?d.push(c):(d=[c],void 0!==a&&null!==a&&a.addEventListener("kkJsBridgeReady",function(){var a,c;for(b(),c=Was.readyArgs;a=d.shift();)a(c)}))},{ready:c,version:"1.2.27"}}(),C.noConflict=function(){return a.kk=K,C},C.isKK=function(){return/kkPlus/i.test(navigator.userAgent)},I=function(a,b){return function(){var d,e;d=1<=arguments.length?L.call(arguments,0):[],e="["+a+"][success]",c.detailLog&&(e+="[arguments]: "+JSON.stringify(d)),x.debug(e),"function"==typeof b&&b.apply(null,d)}},J=function(a,b){return function(){var d,e;d=1<=arguments.length?L.call(arguments,0):[],e="["+a+"][fail]",c.detailLog&&(e+="[arguments]: "+JSON.stringify(d)),x.debug(e),"function"==typeof b&&b.apply(null,d)}},H={exec:function(){var b,c,d,e;if(c=1<=arguments.length?L.call(arguments,0):[],b=c.shift(),d=c[3],c[3]=I(b,d),e=c[4],c[4]=J(b,e),"undefined"==typeof Was)return a.console.log("Was is not defined, can not call native api"),void c[4](-999,"Native is not ready yet, API should be called in kk.ready. For more help, check http://kk5.landray.com.cn:6789/jssdk/index.html#core ");x.debug("["+b+"][call-arguments] : "+JSON.stringify(c[2])),Was.exec.apply(Was,c)}},E=t={noop:function(){},type:function(a,b){var c;return null!=a?(c=Object.prototype.toString.call(a),1===arguments.length?c.slice(8,-1):c.toLowerCase()===("[object "+b+"]").toLowerCase()):(c=String(a),arguments.length>1?c.toLowerCase()===String(b).toLowerCase():c)},isArray:Array.isArray||function(a){return E.type(a,"Array")},isWindow:function(a){return!(null==a||!a.window||a!==a.window)},isObject:function(a){return E.type(a,"Object")},isPlainObject:function(a){return E.isObject(a)&&!E.isWindow(a)&&Object.getPrototypeOf(a)===Object.prototype},splitURI:function(a){return(""+a).match(/(?:([^:\/?#]+):)?(?:\/\/([^\/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/)},isURI:function(a){var b,c,d,e;if(!a)return!1;if(/[^a-z0-9\:\/\?\#\[\]\@\!\$\&\'\(\)\*\+\,\;\=\.\-\_\~\%]/i.test(a))return!1;if(/%[^0-9a-f]/i.test(a))return!1;if(/%[0-9a-f](:?[^0-9a-f]|$)/i.test(a))return!1;if(e=E.splitURI(a),!e||!e.length)return!1;if(d=e[1],b=e[2],c=e[3],!(d&&c.length>=0))return!1;if(b&&b.length){if(0!==c.length&&!/^\//.test(c))return!1}else if(/^\/\//.test(c))return!1;return!!/^[a-z][a-z0-9\+\-\.]*$/.test(d.toLowerCase())},isURL:function(a){var b,c,d;return!!E.isURI(a)&&(d=E.splitURI(a),c=d[1],b=d[2],!!c&&(!!/^https?$/i.test(c)&&!!b))},isEmpty:function(a){return null===a||void 0===a||""===a||E.isArray(a)&&!a.length},isFunction:function(a){return E.type(a,"Function")},extend:function(a,b){var c,d,e,f,g,h,i,j;for(c=[].slice.call(arguments),"boolean"==typeof c[0]?(e=c.shift(),a=c[0]):e=!1,i="boolean"!=typeof c[c.length-1]||c.pop(),g=1,1===c.length&&(a=E.isWindow(this)?{}:this,g=0),a||(a={});g<c.length;)if(b=c[g++])for(h in b)M.call(b,h)&&(j=b[h],!i&&h in a||(e&&j&&(E.isArray(j)||E.isPlainObject(j))?(f=a[h],d=E.isArray(j)?E.isArray(f)?f:[]:f&&E.isPlainObject(f)?f:{},a[h]=E.extend(e,d,j,i)):void 0!==j&&(a[h]=j)));return a},toQueryObjects:function(a,b,c){var d,e,f,g,h,i,j,k;if(d=E.toQueryObjects,f=[],E.isArray(b))if(c)for(e=h=0,j=b.length;h<j;e=++h)g=b[e],f=f.concat(d(""+a+"["+e+"]",g,!0));else for(e=i=0,k=b.length;i<k;e=++i)g=b[e],f.push({name:a,value:g});else if(E.isObject(b))if(c)for(e in b)M.call(b,e)&&(g=b[e],f=f.concat(d(""+a+"["+e+"]",g,!0)));else for(e in b)M.call(b,e)&&(g=b[e],f.push({name:a,value:g}));else f.push({name:a,value:b});return f},toQueryString:function(a){var b,c,d,e,f,g,h;e=[],d=[];for(b in a)M.call(a,b)&&(f=a[b],d=d.concat(E.toQueryObjects(b,f,!0)));for(g=0,h=d.length;g<h;g++)c=d[g],f=c.value,E.isEmpty(f)?f="":E.type(f,"Date")&&(f=E.formatTime(f)),e.push(""+encodeURIComponent(c.name)+"="+encodeURIComponent(String(f)));return e.join("&")},renameKeys:function(a,b,c){var d,e,f;if(!a||!b)return b;e=E.extend(!0,{},b);for(d in a)M.call(a,d)&&(f=a[d],void 0!==e[d]&&(void 0===e[f]&&(e[f]=e[d]),c&&delete e[d]));return e}},y=function(a,b){x.error("[kk api defaultFailCB]code:"+a+", msg:"+b)},F=function(a,b,c){if(null==c&&(c=!0),c){if(!E.type(a,"function"))return!1}else if(null!=a&&!E.type(a,"function"))return!1;return!(null!=b&&!E.type(b,"function"))},G=function(a){return a=(""+a).toLowerCase(),"jpg"===a&&(a="jpeg"),"jpeg"!==a&&"png"!==a&&(a="png"),a},C.utils=t,c={debug:!0,detailLog:!1},C.config=function(){var a,b,d,e;if(a=1<=arguments.length?L.call(arguments,0):[],!a.length)return E.extend({},c);if(d=a[0],e=typeof d,1!==a.length)return"string"===e&&d in c?c[d]=a[1]:void 0;if("string"===e)return c[d];if("object"===e){for(b in c)M.call(c,b)&&(c[b],b in d&&(c[b]=d[b]));return E.extend({},c)}},f=function(){function a(a){this.setSuccess=N(this.setSuccess,this),this.setError=N(this.setError,this);var b,c,d,e;this.chain=this.noop,this.resultGetter=null,c=this,e=function(){var a;return a=1<=arguments.length?L.call(arguments,0):[],c.resolve.apply(c,a)},d=function(){var a;return a=1<=arguments.length?L.call(arguments,0):[],c.reject.apply(c,a)};try{a&&a(e,d)}catch(a){b=a,d(b)}}return a.prototype.noop=function(){},a.prototype.processResult=function(a,b,c){var d;d=this,a[0]&&a[0].then?a[0].then(function(){var a;a=1<=arguments.length?L.call(arguments,0):[],d.processResult(a,b,c)}).catch(function(){var a;a=1<=arguments.length?L.call(arguments,0):[],d.processResult(a,c,c)}):b.apply(null,a)},a.prototype.setResult=function(a){this.resultGetter=function(b,c){var d;try{a(b,c)}catch(a){d=a,c(d)}},this.chain(),this.chain=void 0},a.prototype.setError=function(){var a;a=1<=arguments.length?L.call(arguments,0):[],this.setResult(function(b,c){c.apply(null,a)})},a.prototype.setSuccess=function(){var a;a=1<=arguments.length?L.call(arguments,0):[],this.setResult(function(b){b.apply(null,a)})},a.prototype.buildChain=function(a,b){var c,d;d=this.chain,c=this,this.chain=function(){d(),c.resultGetter(a,b)}},a.prototype.resolve=function(){var a;a=1<=arguments.length?L.call(arguments,0):[],!this.resultGetter&&this.processResult(a,this.setSuccess,this.setError)},a.prototype.reject=function(){var a;return a=1<=arguments.length?L.call(arguments,0):[],!this.resultGetter&&this.processResult(a,this.setError,this.setError)},a.prototype.then=function(b,c){var d,e;return d=this,e=this.resultGetter?function(){var a;return a=1<=arguments.length?L.call(arguments,0):[],d.resultGetter.apply(d,a)}:function(){var a;return a=1<=arguments.length?L.call(arguments,0):[],d.buildChain.apply(d,a)},new a(function(a,d){e(function(){var c;return c=1<=arguments.length?L.call(arguments,0):[],"function"==typeof b?a(b.apply(null,c)):a.apply(null,c)},function(){var a;return a=1<=arguments.length?L.call(arguments,0):[],"function"==typeof c?d(c.apply(null,a)):d.apply(null,a)})})},a.prototype.catch=function(a){return this.then(null,a)},a.prototype.done=function(a){return this.then(a)},a.prototype.always=function(a){return this.then(a,a)},a.prototype.finally=function(){var a;return a=1<=arguments.length?L.call(arguments,0):[],this.always.apply(this,a)},a.prototype.fail=function(a){return this.then(null,a)},a.resolve=function(){var b;return b=1<=arguments.length?L.call(arguments,0):[],new a(function(a){return a.apply(null,b)})},a.reject=function(){var b;return b=1<=arguments.length?L.call(arguments,0):[],new a(function(a,c){return c.apply(null,b)})},a.race=function(b){return null==b&&(b=[]),new a(function(a,c){var d,e,f;if(!b.length)return a();for(e=0,f=b.length;e<f;e++)d=b[e],d&&d.then&&d.then(a,c)})},a.all=function(b){return null==b&&(b=[]),new a(function(a,c){var d,e,f,g,h,i,j;if(d=b.length,!d)return a();for(e=function(){--d<=0&&a(b)},h=function(a,d){a&&a.then?a.then(function(){var a;return a=1<=arguments.length?L.call(arguments,0):[],b[d]=a,e()},c):e()},f=i=0,j=b.length;i<j;f=++i)g=b[f],h(g,f)})},a}(),C.Deferred=f,x=function(){var b,d;return b=["log","debug","error","warn"],d={},a.console?b.forEach(function(b){d[b]=function(){c.debug&&a.console[b].apply(a.console,arguments)}}):b.forEach(function(a){d[a]=function(){}}),d}(),z={},w=function(a){var b;b="on"+a.charAt(0).toUpperCase()+a.slice(1),Was.addEventListener(b,function(){var b,d,e,f,g,h,i,j;if(b=1<=arguments.length?L.call(arguments,0):[],e=z[a],e&&e.length){for(f=""+a+" was triggered",c.detailLog&&(f+=", with params:"+JSON.stringify(b)),x.debug(f),g=void 0,h=void 0,i=0,j=e.length;i<j&&(d=e[i],h=d.apply(null,b),null!=h&&(g=h),g!==!1);i++);return g===!1?g:void 0}})},B={on:function(a,b){var c;"function"==typeof b&&(c=z[a],c?O.call(c,b)<0&&c.push(b):(z[a]=[b],w(a)))},off:function(a,b){var c,d;if(c=z[a],c&&c.length&&"function"==typeof b)for(d=c.length;d--;)if(c[d]===b){c.splice(d,1);break}}},b={exit:function(){Was.exec("app","exitApp",{})},isOfflineApp:function(){return/^(file|kkapp)/i.test(location.protocol)},callApp:function(a,b,c,d){if("function"!=typeof b&&b||(d=c,c=b,b=null),null!=b&&(b={__JSON__:JSON.stringify(b)}),F(c,d,!1)){if(!a)return void d(-1,"appInfo should not be empty");b||(b={}),"string"==typeof a&&(a=E.isURL(a)?{url:a}:{code:a}),a=E.renameKeys({code:"__command",url:"__startUrl"},a),b=E.extend(a,b),H.exec("app.callApp","app","callApp",b,c,d)}},callNativeApp:function(a,b,c){var d,e,f;if(F(b,c,!1)){e={};for(d in a)M.call(a,d)&&(f=a[d],e["__"+d.replace(/^__/,"")]=f);e.__otherParam&&E.extend(e,D(e.__otherParam),!1),H.exec("app.callNativeApp","app","callNativeApp",e,b,c)}},on:B.on,off:B.off,setBadge:function(a,b,c){F(b,c,!1)&&H.exec("app.setBadge","message","setAppBadge",a,b,c)},getBadge:function(a,b){F(a,b)&&H.exec("app.getBadge","message","getAppBadge",{},a,b)},getNetState:function(){return{netState:Was.netState}},getDeviceInfo:function(){var a,b,c,d;return(a=Was.deviceInfo)?(b=a.pixel.split("x"),c=E.renameKeys({deviceUUID:"deviceID"},a,!0),c=E.extend(c,{largerPixel:parseInt(b[0]),smallerPixel:parseInt(b[1])})):(d=window.screen,c={os:"windows",type:"pad",largerPixel:d.width,smallerPixel:d.height,pixel:""+d.width+"x"+d.height}),c},getUserInfo:function(){return h.getUserInfo()},getAppInfo:function(){return E.extend({},Was.appInfo)},getAppIcon:function(a){return a=a||Was.appInfo.code,k+"/serverj/getAppIcon?appCode="+encodeURIComponent(a)},getClientInfo:function(){var a,b,c;return Was.kkClientInfo?(c=/^v?(\d(\.\d)+)/,a=E.renameKeys({version:"innerVersion"},Was.kkClientInfo,!0),a=E.renameKeys({visibleVersion:"version"},a,!0),b=c.exec(a.version),b&&(a.semver=b[1]),a):{}},getClientConfig:function(a,b,c){F(b,c)&&H.exec("app.getClientConfig","config","getConfigValue",{configName:a},function(a){return b(a.configValue)},c)},setCookie:function(a,b,c){F(b,c,!1)&&H.exec("app.setCookie","cookie","setCookie",a,b,c)},getCookie:function(a,b,c){F(b,c)&&H.exec("app.getCookie","cookie","getCookie",a,b,c)},captureScreen:function(a,b,c){var d;E.isFunction(a)&&(c=b,b=a,a={}),F(b,c)&&(d={targetWidth:100,targetHeight:100,encodingType:"png",quality:50,destinationType:"data"},a=E.extend({},d,a||{}),a.encodingType=G(a.encodingType),H.exec("app.captureScreen","app","screenCapture",a,function(c){"data"===a.destinationType&&(c.imageData="data:image/"+a.encodingType+";base64,"+c.imageData),b(c)},c))},showTitleBar:function(){H.exec("app.showTitleBar","app","config",{isTitleBarVisible:!0},null,null)},hideTitleBar:function(){H.exec("app.hideTitleBar","app","config",{isTitleBarVisible:!1},null,null)},setTitle:function(a){""!==a&&(a=""+a,H.exec("app.setTitle","app","config",{title:a},null,null))},onUpdate:function(a,b){var c;C.app.onUpdate.triggered||(c="kk-app-"+C.app.getAppInfo().appID+"ver",a+="",C.app.onUpdate.triggered=!0,localStorage.getItem(c)!==a&&"function"==typeof b&&b(),localStorage.setItem(c,a))}},C.ready(function(){var a;a=b.getClientInfo(),a.webServer?k=a.webServer.replace(/\/$/,""):b.getClientConfig("kk_config_webserver_http_url",function(a){k=a&&a.replace(/\/$/,"")})}),D=function(a){var b,c,d,e;if(a){b=/^\d+\.\d+$/,d={};for(c in a)if(M.call(a,c))if(e=a[c],E.isArray(e))e.length&&"number"==typeof e[0]?b.test(e[0])?d[c]=String.fromCharCode(3)+"06"+e.join(String.fromCharCode(4)):d[c]=String.fromCharCode(3)+"05"+e.join(String.fromCharCode(4)):d[c]=String.fromCharCode(3)+"04"+e.join(String.fromCharCode(4));else if("number"==typeof e)b.test(e)?d[c]=String.fromCharCode(3)+"03"+e:d[c]=String.fromCharCode(3)+"02"+e;else if("string"==typeof e)switch(e.charAt(0)){case String.fromCharCode(128):d[c]=String.fromCharCode(3)+"08"+e.slice(1);break;case String.fromCharCode(129):d[c]=String.fromCharCode(3)+"09"+e.slice(1);break;default:d[c]=String.fromCharCode(3)+"01"+e}return d}},C.app=b,q=function(){var b,c,d,e;return d={},b={},e=function(c){var d,e,f,g,h,i;if(g={},h=c[0],f=c[1]||{},"string"==typeof h)f.url=h;else{if(!E.isObject(h))return!1;f=h}return null==f.contentType&&(f.contentType=b.contentType||"form"),f=E.extend(!0,{},b,f),g.dataType=f.dataType,g.__url=f.url,f.data||(f.data={_easymi_random_:(new Date).getTime()}),e=f.contentType&&"form"!==f.contentType?"json"===f.contentType?"application/json":f.contentType:"application/x-www-form-urlencoded",d=f.data,"string"!=typeof d&&(d=e.indexOf("x-www-form-urlencoded")>-1?E.toQueryString(d):e.indexOf("application/json")>-1?JSON.stringify(d):String(d)),e.indexOf("charset")===-1&&(e=e.replace(/;?\s*$/,"; charset=UTF-8")),i=a.navigator.userAgent,window.Was&&window.Was.isEmulator&&(i+=" KKEmulator"),g["User-Agent"]=i,g["Content-Type"]=e,g.__content=d,null==f.headers&&(f.headers={}),E.extend(g,f.headers,!1),g.failure=f.error,g.success=f.success,g},d.requestSetup=function(a){return b=a||{},this},d.request=function(){var a,b,c,d;if(d=e([].slice.call(arguments)),F(d.success,d.failure,!1)&&d.__url)return a=d.dataType,b=d.success,c=d.failure,delete d.dataType,delete d.success,delete d.failure,new f(function(b,c){return H.exec("proxy.request","message","send",d,function(d){if(d=d.content,"json"===a)try{d=JSON.parse(d)}catch(a){return a,void c(-1,"data from server isn't a valid json string")}b(d)},c)}).then(b,c)},c={init:function(a,b,c,d,e){if(this.options=a,this.plugin=d,this.methods=e,F(b,c))return this.options.taskflag=!this.options.isContinuous,this.done=b,this.fail=c,this},start:function(){return H.exec("proxy."+this.plugin+".start",this.plugin,this.methods[0],this.options,this.done,this.fail),this},pause:function(){return H.exec("proxy."+this.plugin+".pause/resume",this.plugin,this.methods[1],{url:this.options.url}),this},resume:function(){return this.start()},stop:function(){return H.exec("proxy."+this.plugin+".stop",this.plugin,this.methods[2],{url:this.options.url}),this}},d.Download=function(a,b,c){this.init(a,b,c,"download",["download","pausedown","stopdown"])},E.extend(d.Download.prototype,c),d.Upload=function(a,b,c){this.init(a,b,c,"upload",["upload","pauseupload","stopupload"])},E.extend(d.Upload.prototype,c),d.ekpUpload=function(a,b,c){F(b,c,!1)&&(a.userkey&&!a.token&&(a.token=a.userkey),H.exec("proxy.uploadView","ekpupload","upload",a,b,c))},d.uploadView=d.ekpUpload,d}(),C.proxy=q,g={setOrientation:function(a){H.exec("device.setOrientation","device","setOrientation",{orientation:a},!0,y)},getNetType:function(a,b){F(a,b)&&H.exec("device.getNetType","device","getCurrentNetType",{},function(b){a(b)},b)},setClipboard:function(a){H.exec("device.setClipboard","device","setClipboardData",{data:a},null,null)}},C.device=g,n={showMenuItems:function(a){var b;b={isMenuButtonVisible:!0},null!=a&&(E.isArray(a)||(a=[a]),b.menuList=a),H.exec("menu.showMenuItems","app","config",b,null,null)},hideMenuItems:function(a){var b;b={isMenuButtonVisible:!1},null!=a&&(E.isArray(a)||(a=[a]),b.menuList=a),H.exec("menu.hideMenuItems","app","config",b,null,null)}},C.menu=n,m={getPicture:function(a,b,c){var d;E.isFunction(a)&&(c=b,b=a,a={}),F(b,c)&&(d={sourceType:"camera",targetWidth:100,targetHeight:100,encodingType:"png",quality:50,destinationType:"file"},a=E.extend({},d,a||{}),a.encodingType=G(a.encodingType),E.isArray(a.savePath)&&(a.savePath=a.savePath.join(",")),H.exec("media.getPicture","image","getPicture",a,function(d){var e;if(e=[],d.pictures)try{e=new Function("return "+d.pictures)()}catch(a){return a,x.warn("failed to transform pictures to array: "+d.pictures),void c(-1,"invalid arguments from native")}else e=[d];e=e.map(function(b){var c;return"data"===a.destinationType&&(b.imageData="data:image/"+a.encodingType+";base64,"+b.imageData),b.imagePath&&(b.imageFileOSPath=b.imagePath),b.imageTime&&(b.imageTimeString=b.imageTime,c=b.imageTime.match(/(\w{4})(\w{2})(\w{2})(\w{2})(\w{2})(\w{2})/).map(function(a){return parseInt(a,10)}),b.imageTime=new Date(c[1],c[2]-1,c[3],c[4],c[5],c[6])),b}),b(void 0===a.count&&1===e.length?e[0]:e)},c))},getMultiPicture:function(a,b,c){var d;F(b,c)&&(d={targetWidth:100,targetHeight:100,encodingType:"jpeg",quality:50,limitTime:-1},a=E.extend({},d,a),a.exifFlag=!1,E.isArray(a.savePath)&&(a.savePath=a.savePath.join(",")),a.encodingType=G(a.encodingType),H.exec("media.getMultiPicture","image","getMultiCameraPics",a,function(a){b({imageURI:a.imageURI.split(","),imageFileOSPath:a.imageFileOSPath.split(",")})},c))},save2album:function(a,b,c){var d;d=a.uri||a.filepath,E.isURL(d)?(a.fileURI=d,delete a.filepath):a.filepath=d,F(b,c,!1)&&H.exec("media.save2album","image","save2album",a,b,c)},previewImage:function(a,b){a&&(a.start_index=+a.current||0,E.isArray(a.paths)&&(a.paths=a.paths.join(",")),F(null,b,!1)&&H.exec("media.previewImage","image","gallery",a,null,b))},captureVideo:function(a,b,c){var d;E.isFunction(a)&&(c=b,b=a,a={}),F(b,c)&&(d={quality:"LOW"},a=E.extend({},d,a||{}),H.exec("media.captureVideo","media","captureVideo",a,b,c))},captureAudio:function(a,b){F(a,b)&&H.exec("media.captureAudio","media","captureAudioView",{},a,b)},playAudio:function(a,b){var c;c=F(null,b,!1),c[0],b=c[1],H.exec("media.playAudio","media","playAudioView",{fileurl:a},!0,b)},getSignImage:function(a,b,c){var d;F(b,c)&&(d={penSize:2,penColor:1},a=E.extend({},d,a||{}),H.exec("media.getSignImage","image","getSignImage",a,b,c))}},C.media=m,i=function(){function a(a){this.fileName=a}return a.prototype.getOSPath=function(a,b){return A.getOSPath(this.fileName,a,b)},a.prototype.info=function(a,b){return A.getFileInfo(this.fileName,a,b)},a.prototype.exists=function(a,b){return A.exists(this.fileName,a,b)},a.prototype.exist=a.prototype.exists,a.prototype.remove=function(a,b){return A.remove(this.fileName,a,b)},a.prototype.view=function(a,b,c){return E.type(a,"function")?(c=b,b=a,a=this.fileName):a=E.extend(!0,a,{filepath:this.fileName}),A.view(a,b,c)},a.prototype.readAsText=function(a,b,c){var d;return E.isFunction(a)&&(c=b,b=a,a="utf-8"),d={filepath:this.fileName,encoding:a},A.readAsText(d,b,c)},a.prototype.readAsBase64=function(a,b){return A.readAsBase64(this.fileName,a,b)},a.prototype.copyTo=function(a,b,c){var d;return d={source:this.fileName,target:a},A.copy(d,b,c)},a}(),C.File=i,A={getOSPath:function(a,b,c){F(b,c)&&H.exec("file.getOSPath","file","getFileOSPath",{EasyMIPath:a},b,c)},getFileInfo:function(a,b,c){F(b,c)&&H.exec("file.getFileInfo","file","info",{filepath:a},function(a){a.isDir=1===+a.isDir,b(a)},c)},exists:function(a,b,c){if(F(b,c))return H.exec("file.exists","file","exists",{filepath:a},b,function(a,d){x.debug("[file][exist][failCB]"+a+", "+d),1===a?b({exists:!1}):c(a,d)})},remove:function(a,b,c){if(F(b,c,!1))return H.exec("file.remove","file","delete",{filepath:a,needConfirm:0},b,c)},view:function(a,b,c){var d;F(b,c,!1)&&(d={},E.type(a,"string")&&(a={filepath:a},E.isURL(a.filepath)&&(a.useWebview=!0)),E.isURL(a.filepath)&&(a.mimeType="text/html"),a=E.extend(!0,d,a),a.customButtons&&(a.otherButton=a.otherButton||a.customButtons),H.exec("file.view","file","viewdoc",a,function(a){var c;return c=E.extend(!0,{},a),null!=c.otherButton&&delete c.otherButton,b?b(c):c},c))},readAsText:function(a,b,c){var d;if(F(b,c)){if(d={encode:"utf-8"},E.type(a,"string"))d.filepath=a;else{if(!E.type(a,"object"))return;d=E.extend(!0,d,a)}a=E.extend(!0,{},d),a.encoding&&(a.encode=a.encoding),H.exec("file.readAsText","file","getFileContent",a,b,c)}},readAsBase64:function(a,b,c){if(F(b,c))return H.exec("file.readAsBase64","file","getFileContent",{filepath:a,filetype:2},b,c)},copy:function(a,b,c){F(b,c,!1)&&H.exec("file.copy","file","copy",a,b,c)}},C.file=A,d={add:function(a,b,c){F(b,c,!1)&&H.exec("contact.add","contact","add",a,b,c)},remove:function(a,b,c){F(b,c,!1)&&H.exec("contact.remove","contact","delete",{id:a},b,c)},update:function(a,b,c){F(b,c,!1)&&H.exec("contact.update","contact","update",a,b,c)},find:function(a,b,c){F(b,c)&&H.exec("contact.find","contact","find",a,function(a){var c,d,e,f,g;for(c=[],f=a.count,e=0;e<f;)d="return "+a["record"+e],g=new Function(d)(),c.push(g),++e;b(c)},c)},choose:function(a,b,c){var d;if(d={mode:1},"function"==typeof a&&(c=b,b=a,a={}),a=E.extend(d,a),F(b,c))return H.exec("contact.choose","contact","choose",a,function(a){var c;c=new Function("return "+a.contactors)(),b(c)},c)}},C.contact=d,r={scanBarCode:function(a,b){F(a,b)&&H.exec("scaner.scanBarCode","barcode","getBarcode",{},a,b)},scanQRCode:function(a,b){F(a,b)&&H.exec("scaner.scanQRCode","barcode","getTdBarcode",{},a,b)},getQRCode:function(a,b,c){F(b,c,!1)&&H.exec("scaner.getQRCode","barcode","genQRCode",a,function(c){"data"===a.destinationType&&(c.imageData="data:image/png;base64,"+c.imageData),b(c)},c)}},r.scanTDCode=r.scanQRCode,C.scaner=r,h={choose:function(a,b,c){var d;E.isFunction(a)&&(c=b,b=a,a={}),F(b,c)&&(d={initList:[],isSticky:!1,stickyList:[],maxCount:0,isSelfSticky:!1},a=E.extend(d,a||{}),E.isArray(a.initList)&&(a.initList=a.initList.join(",")),a.initList=String(a.initList),E.isArray(a.stickyList)&&(a.stickyList=a.stickyList.join(",")),a.stickyList=String(a.stickyList),H.exec("econtact.choose","contactor","chooseContactors",a,function(a){a&&a.contactors?(a=new Function("return "+a.contactors)(),a=a.map(function(a){return a.deptPath=a.deptPath?a.deptPath.split(String.fromCharCode(3)):[],a})):a=[],b(a)},c))},getUserInfoById:function(){var a;return a=1<=arguments.length?L.call(arguments,0):[],a[0]&&(a[0]={userList:a[0]}),h.getUserInfo.apply(h,a)},getUserInfo:function(a,b,c){var d;if(d={type:"userID",userList:Was.userInfo.userID},0===arguments.length)return Was.userInfo.loginName||(Was.userInfo.loginName=Was.userInfo.userName),E.extend({},Was.userInfo);if(E.type(a,"function"))c=null,E.type(b,"function")&&(c=b),b=a,a={};else if(E.type(a,"object")){if(!F(b,c))return}else{if(!F(b,c))return;a={userList:a}}a=E.extend(!0,d,a),E.isArray(a.userList)||(a.userList=[a.userList]),a.ids=a.userList.join(","),H.exec("econtact.getUserInfo","contactor","getContactorDetail",a,function(a){a&&a.contactors?(a=new Function("return "+a.contactors)(),a=a.map(function(a){return a.deptPath=a.deptPath.split(String.fromCharCode(3)),a})):a=[],b(a)},c)},getUserAvatar:function(a,b){var c;return E.type(a,"boolean")&&(a=!1),b=a&&b,a=a||Was.userInfo.loginName,c=b?"userId=":"user=",k+"/serverj/readUserIcon?"+c+encodeURIComponent(a)},startChat:function(a,b,c){a=E.renameKeys({userID:"recieverID",loginName:"recieverName"},a),F(b,c,!1)&&H.exec("econtact.startChat","im","sendP2P",a,b,c)},showECard:function(a,b,c){a=E.renameKeys({userID:"personID",loginName:"personName"},a),F(b,c,!1)&&H.exec("econtact.showECard","contactor","showPersonDetailView",a,b,c)}},C.econtact=h,e={encrypt:function(a,b,c){F(b,c)&&H.exec("crypto.encrypt","crypto","AESEncode",a,b,c)},decrypt:function(a,b,c){F(b,c)&&H.exec("crypto.decrypt","crypto","AESDecode",a,b,c)},obscureFile:function(a,b,c){F(b,c,!1)&&H.exec("crypto.obscureFile","crypto","obscureFile",a,b,c)},restoreFile:function(a,b,c){F(b,c,!1)&&H.exec("crypto.restoreFile","crypto","restoreFile",a,b,c)}},C.crypto=e,l={getLocation:function(a,b){F(a,b)&&H.exec("location.getLocation","location","locate",{type:"Cell"},a,b)}},C.location=l,s={to:function(a,b,c,d){var e,f,g;if(f={user:1,group:2},g={text:1,card:10},e={type:"card",showChooseView:!0},!b||E.type(b,"function")?(d=c,c=b,b={url:C.app.isOfflineApp()?s.getAppShareLink():location.href}):E.type(b,"string")&&(E.isURL(b)?b={url:b}:"kk"===a&&(b={content:b,type:"text"})),!E.type(b,"object"))return void d(-6,"参数错误");if(F(c,d,!1))switch(b=E.extend(!0,{},e,b),b.type=g[b.type]||1,b.content&&!b.summary&&(b.summary=b.content),a){case"weixin":b.shareTo="weixin_msg",H.exec("share.to","share","shareUrl",b,c,function(a,b){switch(a){case 3:return d(-1,b);default:return d(a,b)}});break;case"kk":return b.recieverType&&(b.recieverType=f[b.recieverType]),b.recieverList&&(b.recieverList=[].concat(b.recieverList).join(",")),10===b.type&&(b.imageUri&&(b.picUrl=b.imageUri),b.url&&(b.linkUrl=b.url)),void H.exec("share.to","im","send",b,c,d);default:d(-6,"参数错误")}},appMessage:function(a,b,c){var d,e;if(F(b,c,!1))return d=E.extend(!0,{},a,{type:"card"}),e=E.extend(!0,{},d),delete e.type,delete e.title,delete e.content,delete e.recieverType,delete e.recieverList,delete e.showChooseView,d.linkUrl=d.linkUrl||s.getAppShareLink(e),delete d.data,s.to("kk",d,b,c)},getAppShareLink:function(a){var b,c,d;return c=E.extend(!0,{},a),c.data&&(c.data=JSON.stringify(c.data)),d=E.extend(!0,{targetType:"universal",targetPlatform:"mobile"},c,{appCode:Was.appInfo.code,appName:Was.appInfo.name}),b=k+"/serverj/open-kk-app/",b+="?"+E.toQueryString(d)}},C.share=s,o={weixin:function(a,b,c){var d;F(b,c)&&(d={},a=E.extend(d,a||{}),H.exec("pay.weixin","pay","weixinAppPay",a,b,c))}},C.pay=o,p={call:function(a,b){null==b&&(b=!0),H.exec("phone.call","phone","call",{number:a,confirm:b})},sms:function(a,b){var c;null==b&&(b=""),c={number:a,content:b},H.exec("phone.sms","sms","send",c)}},C.phone=p,v={zip:function(a,b,c){F(b,c,!1)&&(a.folderPath&&(a.FolderPath=a.folderPath),a.filePaths&&(E.isArray(a.filePaths)&&(a.filePaths=a.filePaths.join(",")),a.toZipFiles=a.filePaths),H.exec("zip.zip","zip","zip",a,b,c))},unzip:function(a,b,c){F(b,c,!1)&&H.exec("zip.unzip","zip","unzip",{zipFilePath:a.zipFilePath,outPath:a.outPath},b,c)}},C.zip=v,j={canGo:function(a){F(a)&&H.exec("history.canGo","app","canGo",{},a,y)},hasPrev:function(a){F(a)&&j.canGo(function(b){a({hasPrev:b.canGoBack})})},back:function(a){E.isFunction(a)||(a=y),H.exec("history.back","app","goBack",{},null,a)},forward:function(a){E.isFunction(a)||(a=y),H.exec("history.forward","app","goForward",{},null,a)}},C.history=j,u=function(){var a,b;return function(a){return function(b,c){E.isFunction(a)?a({errMsg:c,code:b}):y(b,c)}},a=null,b={ready:function(a){C.ready(a)},error:function(){},checkJsApi:function(a){var c,d,e,f,g;for(c=a.jsApiList,e={},f=0,g=c.length;f<g;f++)d=c[f],e[d]=!!b[d];a.success({checkResult:e,errMsg:"checkJsApi:ok"})},previewImage:function(a){a.current&&(a.current=a.urls.indexOf(current)),a.paths=a.urls,a.current=a.current||0,C.media.previewImage(a)},startRecord:function(){C.media.captureAudio(function(b){"function"==typeof a&&a(b),a=null})},stopRecord:function(b){a=b.success},onVoiceRecordEnd:function(){},playVoice:function(a){C.media.playAudio(a.localId)},getNetworkType:function(a){C.device.getNetType(function(b){a.success({networkType:b.netType.toLowerCase()})})},getLocation:function(a){C.location.getLocation(a.success)},closeWindow:function(){C.app.exit()},scanQRCode:function(a){var b;b=a.scanType,b=b?b[0]:"qrCode",b="barCode"===b?"scanBarCode":"scanTDCode",C.scaner[b](function(b){"function"==typeof a.success&&a.success({resultStr:b.code})})}},b.kk=!0,b}(),C.wx=u,C});