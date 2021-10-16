/**
 * @author zhixin wen <wenzhixin2010@gmail.com>
 * https://github.com/wenzhixin/bootstrap-show-password
 * version: 1.0.2
 */
!function(t){"use strict";var e=function(t){var e=arguments,s=!0,i=1;return t=t.replace(/%s/g,function(){var t=e[i++];return"undefined"==typeof t?(s=!1,""):t}),s?t:""},s=function(e,s){this.options=s,this.$element=t(e),this.isShown=!1,this.init()};s.DEFAULTS={placement:"after",white:!1,message:"Click here to show/hide password"},s.prototype.init=function(){var s,i;"before"===this.options.placement?(s="insertBefore",i="input-prepend"):(this.options.placement="after",s="insertAfter",i="input-append"),this.$element.wrap(e('<div class="%s input-group" />',i)),this.$text=t('<input type="text" />')[s](this.$element).attr("class",this.$element.attr("class")).attr("placeholder",this.$element.attr("placeholder")).css("display",this.$element.css("display")).val(this.$element.val()).hide(),this.$icon=t(['<span tabindex="100" title="'+this.options.message+'" class="add-on input-group-addon">','<i class="icon-eye-open'+(this.options.white?" icon-white":"")+' glyphicon glyphicon-eye-open"></i>',"</span>"].join(""))[s](this.$text).css("cursor","pointer"),this.$text.off("keyup").on("keyup",t.proxy(function(){this.$element.val(this.$text.val())},this)),this.$icon.off("click").on("click",t.proxy(function(){this.$text.val(this.$element.val()),this.toggle()},this))},s.prototype.toggle=function(t){this[this.isShown?"hide":"show"](t)},s.prototype.show=function(e){var s=t.Event("show.bs.password",{relatedTarget:e});this.$element.trigger(s),this.isShown=!0,this.$element.hide(),this.$text.show(),this.$icon.find("i").removeClass("icon-eye-open glyphicon-eye-open").addClass("icon-eye-close glyphicon-eye-close"),this.$text[this.options.placement](this.$element)},s.prototype.hide=function(e){var s=t.Event("hide.bs.password",{relatedTarget:e});this.$element.trigger(s),this.isShown=!1,this.$element.show(),this.$text.hide(),this.$icon.find("i").removeClass("icon-eye-close glyphicon-eye-close").addClass("icon-eye-open glyphicon-eye-open"),this.$element[this.options.placement](this.$text)},s.prototype.val=function(t){return"undefined"==typeof t?this.$element.val():(this.$element.val(t),void this.$text.val(t))};var i=t.fn.password;t.fn.password=function(){var e,i=arguments[0],n=arguments,o=["show","hide","toggle","val"];return this.each(function(){var a=t(this),h=a.data("bs.password"),r=t.extend({},s.DEFAULTS,a.data(),"object"==typeof i&&i);if("string"==typeof i){if(t.inArray(i,o)<0)throw"Unknown method: "+i;e=h[i](n[1])}else h?h.init(r):(h=new s(a,r),a.data("bs.password",h))}),e?e:this},t.fn.password.Constructor=s,t.fn.password.noConflict=function(){return t.fn.password=i,this},t(function(){t('[data-toggle="password"]').password()})}(window.jQuery);