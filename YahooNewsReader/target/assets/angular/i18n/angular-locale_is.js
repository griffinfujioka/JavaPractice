"use strict";angular.module("ngLocale",[],["$provide",function(e){function n(e){e=e+"";var t=e.indexOf(".");return t==-1?0:e.length-t-1}function r(e,t){var r=t;if(undefined===r){r=Math.min(n(e),3)}var i=Math.pow(10,r);var s=(e*i|0)%i;return{v:r,f:s}}function i(e,t){if(t===0){return{w:0,t:0}}while(t%10===0){t/=10;e--}return{w:e,t:t}}var t={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["f.h.","e.h."],DAY:["sunnudagur","mánudagur","þriðjudagur","miðvikudagur","fimmtudagur","föstudagur","laugardagur"],MONTH:["janúar","febrúar","mars","apríl","maí","júní","júlí","ágúst","september","október","nóvember","desember"],SHORTDAY:["sun.","mán.","þri.","mið.","fim.","fös.","lau."],SHORTMONTH:["jan.","feb.","mar.","apr.","maí","jún.","júl.","ágú.","sep.","okt.","nóv.","des."],fullDate:"EEEE, d. MMMM y",longDate:"d. MMMM y",medium:"d. MMM y HH:mm:ss",mediumDate:"d. MMM y",mediumTime:"HH:mm:ss","short":"d.M.y HH:mm",shortDate:"d.M.y",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"kr",DECIMAL_SEP:",",GROUP_SEP:".",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:" ¤",posPre:"",posSuf:" ¤"}]},id:"is",pluralCat:function(e,n){var s=e|0;var o=r(e,n);var u=i(o.v,o.f);if(u.t==0&&s%10==1&&s%100!=11||u.t!=0){return t.ONE}return t.OTHER}})}])