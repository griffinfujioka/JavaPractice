"use strict";angular.module("ngLocale",[],["$provide",function(e){function n(e){e=e+"";var t=e.indexOf(".");return t==-1?0:e.length-t-1}function r(e,t){var r=t;if(undefined===r){r=Math.min(n(e),3)}var i=Math.pow(10,r);var s=(e*i|0)%i;return{v:r,f:s}}var t={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["म.पू.","म.नं."],DAY:["आदित्यवार","सोमवार","मंगळार","बुधवार","गुरुवार","शुक्रवार","शनिवार"],MONTH:["जानेवारी","फेब्रुवारी","मार्च","एप्रिल","मे","जून","जुलै","ओगस्ट","सेप्टेंबर","ओक्टोबर","नोव्हेंबर","डिसेंबर"],SHORTDAY:["रवि","सोम","मंगळ","बुध","गुरु","शुक्र","शनि"],SHORTMONTH:["जानेवारी","फेब्रुवारी","मार्च","एप्रिल","मे","जून","जुलै","ओगस्ट","सेप्टेंबर","ओक्टोबर","नोव्हेंबर","डिसेंबर"],fullDate:"EEEE d MMMM y",longDate:"d MMMM y",medium:"dd-MM-y h:mm:ss a",mediumDate:"dd-MM-y",mediumTime:"h:mm:ss a","short":"d-M-yy h:mm a",shortDate:"d-M-yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"₹",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:2,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:2,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"¤ -",negSuf:"",posPre:"¤ ",posSuf:""}]},id:"kok-in",pluralCat:function(e,n){var i=e|0;var s=r(e,n);if(i==1&&s.v==0){return t.ONE}return t.OTHER}})}])