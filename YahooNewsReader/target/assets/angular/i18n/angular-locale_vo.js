"use strict";angular.module("ngLocale",[],["$provide",function(e){function n(e){e=e+"";var t=e.indexOf(".");return t==-1?0:e.length-t-1}function r(e,t){var r=t;if(undefined===r){r=Math.min(n(e),3)}var i=Math.pow(10,r);var s=(e*i|0)%i;return{v:r,f:s}}var t={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["posz.","büz."],DAY:["sudel","mudel","tudel","vedel","dödel","fridel","zädel"],MONTH:["janul","febul","mäzil","prilul","mayul","yunul","yulul","gustul","setul","tobul","novul","dekul"],SHORTDAY:["su.","mu.","tu.","ve.","dö.","fr.","zä."],SHORTMONTH:["jan","feb","mäz","prl","may","yun","yul","gst","set","ton","nov","dek"],fullDate:"y MMMMa 'd'. d'id'",longDate:"y MMMM d",medium:"y MMM. d HH:mm:ss",mediumDate:"y MMM. d",mediumTime:"HH:mm:ss","short":"y-MM-dd HH:mm",shortDate:"y-MM-dd",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"¤ -",negSuf:"",posPre:"¤ ",posSuf:""}]},id:"vo",pluralCat:function(e,n){var i=e|0;var s=r(e,n);if(i==1&&s.v==0){return t.ONE}return t.OTHER}})}])