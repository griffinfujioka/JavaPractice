(function(e,t,n){"use strict";function i(){function n(t,n,r){return function(i,s,o){var u=o.$normalize(n);if(e[u]&&!o[u]){i.$watch(o[t],function(e){if(r){e=!e}s.attr(n,e)})}}}var e={ariaHidden:true,ariaChecked:true,ariaDisabled:true,ariaRequired:true,ariaInvalid:true,ariaMultiline:true,ariaValue:true,tabindex:true,bindKeypress:true};this.config=function(n){e=t.extend(e,n)};this.$get=function(){return{config:function(t){return e[t]},$$watchExpr:n}}}var r=t.module("ngAria",["ng"]).provider("$aria",i);r.directive("ngShow",["$aria",function(e){return e.$$watchExpr("ngShow","aria-hidden",true)}]).directive("ngHide",["$aria",function(e){return e.$$watchExpr("ngHide","aria-hidden",false)}]).directive("ngModel",["$aria",function(e){function t(t,n,r){return e.config(n)&&!r.attr(t)}function n(e,t){var n=e.type,r=e.role;return(n||r)==="checkbox"||r==="menuitemcheckbox"?"checkbox":(n||r)==="radio"||r==="menuitemradio"?"radio":n==="range"||r==="progressbar"||r==="slider"?"range":(n||r)==="textbox"||t[0].nodeName==="TEXTAREA"?"multiline":""}return{restrict:"A",require:"?ngModel",link:function(r,i,s,o){function f(){return o.$modelValue}function l(){if(a){a=false;return function(t){var n=t===s.value;i.attr("aria-checked",n);i.attr("tabindex",0-!n)}}else{return function(t){i.attr("aria-checked",t===s.value)}}}function c(e){i.attr("aria-checked",!!e)}var u=n(s,i);var a=t("tabindex","tabindex",i);switch(u){case"radio":case"checkbox":if(t("aria-checked","ariaChecked",i)){r.$watch(f,u==="radio"?l():c)}break;case"range":if(e.config("ariaValue")){if(s.min&&!i.attr("aria-valuemin")){i.attr("aria-valuemin",s.min)}if(s.max&&!i.attr("aria-valuemax")){i.attr("aria-valuemax",s.max)}if(!i.attr("aria-valuenow")){r.$watch(f,function(t){i.attr("aria-valuenow",t)})}}break;case"multiline":if(t("aria-multiline","ariaMultiline",i)){i.attr("aria-multiline",true)}break}if(a){i.attr("tabindex",0)}if(o.$validators.required&&t("aria-required","ariaRequired",i)){r.$watch(function(){return o.$error.required},function(t){i.attr("aria-required",!!t)})}if(t("aria-invalid","ariaInvalid",i)){r.$watch(function(){return o.$invalid},function(t){i.attr("aria-invalid",!!t)})}}}}]).directive("ngDisabled",["$aria",function(e){return e.$$watchExpr("ngDisabled","aria-disabled")}]).directive("ngMessages",function(){return{restrict:"A",require:"?ngMessages",link:function(e,t,n,r){if(!t.attr("aria-live")){t.attr("aria-live","assertive")}}}}).directive("ngClick",["$aria","$parse",function(e,t){return{restrict:"A",compile:function(n,r){var i=t(r.ngClick,null,true);return function(t,n,r){if(e.config("tabindex")&&!n.attr("tabindex")){n.attr("tabindex",0)}if(e.config("bindKeypress")&&!r.ngKeypress){n.on("keypress",function(e){function n(){i(t,{$event:e})}if(e.keyCode===32||e.keyCode===13){t.$apply(n)}})}}}}}]).directive("ngDblclick",["$aria",function(e){return function(t,n,r){if(e.config("tabindex")&&!n.attr("tabindex")){n.attr("tabindex",0)}}}])})(window,window.angular)