!function(t){function e(n){if(o[n])return o[n].exports;var i=o[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var o={};e.m=t,e.c=o,e.d=function(t,o,n){e.o(t,o)||Object.defineProperty(t,o,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,"a",o),o},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=65)}({0:function(t,e,o){"use strict";var n=function(){function t(t,e){void 0===e&&(e={}),this.varName=t,this.defaults=e,this.settings={};var o=void 0!==window[t]?window[t]:{};Object.assign(this.settings,e,o)}return t.prototype.get=function(t){if(void 0!==this.settings[t])return this.settings[t]},t.prototype.getAll=function(){return this.settings},t.prototype.delete=function(t){this.settings.hasOwnProperty(t)&&delete this.settings[t]},t}();e.a=n},65:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(66),i=o(0);window.$=window.jQuery,jQuery(function(t){var e=new i.a("atumMarketingPopupVars");new n.a(e)})},66:function(t,e,o){"use strict";var n=function(){function t(t){this.settings=t,this.swal=window.swal,this.getPopupInfo()}return t.prototype.getPopupInfo=function(){var t=this;$.ajax({url:window.ajaxurl,dataType:"json",method:"post",data:{action:"atum_get_marketing_popup_info",token:this.settings.get("nonce")},success:function(e){if(!0===e.success){var o=e.data,n=o.description.text_color?"color:"+o.description.text_color+";":"",i=o.description.text_size?"font-size:"+o.description.text_size+";":"",s=o.description.text_align?"text-align:"+o.description.text_align+";":"",r=o.description.padding?"padding:"+o.description.padding+";":"",a='<p data-transient-key="'+o.transient_key+'" style="'+(n+i+s+r)+'">'+o.description.text+"</p>",c="",u="",l="",p=o.title.text_color?"color:"+o.title.text_color+";":"",d=o.title.text_size?"font-size:"+o.title.text_size+";":"",g=o.title.text_align?"text-align:"+o.title.text_align+";":"",f=void 0,h="",x=o.images.top_left,_='<img class="mp-logo" src="'+o.images.logo+'">',w=o.footerNotice.bg_color?' style="background-color:'+o.footerNotice.bg_color+';"':"",v=o.footerNotice.text?'<div class="footer-notice"'+w+">"+o.footerNotice.text+"</div>":"";o.version&&Object.keys(o.version).length&&(c=o.version.text_color?"color:"+o.version.text_color+";":"",u=o.version.background?"background:"+o.version.background+";":"",l='<span class="version" style="'+(u+c)+'">'+o.version.text+"</span>"),f='<h1 style="'+(p+d+g)+'"><span>'+(o.title.text+l)+"</span></h1>",o.buttons&&o.buttons.length&&o.buttons.forEach(function(t){h+='<button data-url="'+t.url+'" class="'+t.class+' popup-button" style="'+t.css+'">'+t.text+"</button>"}),t.swal({width:520,padding:null,customClass:"marketing-popup",background:o.background,showCloseButton:!0,showConfirmButton:!1,html:_+f+a+h+v,imageUrl:x}).catch(t.swal.noop),$(".popup-button").on("click",function(t){t.preventDefault(),window.open($(t.currentTarget).data("url"),"_blank")}),$(".marketing-popup .swal2-close").on("click",function(){t.hideMarketingPopup($(".swal2-content p").data("transient-key"))})}}})},t.prototype.hideMarketingPopup=function(t){$.ajax({url:window.ajaxurl,dataType:"json",method:"post",data:{action:"atum_hide_marketing_popup",token:this.settings.get("nonce"),transientKey:t}})},t}();e.a=n}});
//# sourceMappingURL=atum-marketing-popup.js.map