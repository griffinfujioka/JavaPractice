"use strict";angular.module("ngLocale",[],["$provide",function(e){function n(e){e=e+"";var t=e.indexOf(".");return t==-1?0:e.length-t-1}function r(e,t){var r=t;if(undefined===r){r=Math.min(n(e),3)}var i=Math.pow(10,r);var s=(e*i|0)%i;return{v:r,f:s}}var t={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["फुं","बेलासे"],DAY:["रबिबार","समबार","मंगलबार","बुदबार","बिसथिबार","सुखुरबार","सुनिबार"],MONTH:["जानुवारी","फेब्रुवारी","मार्स","एफ्रिल","मे","जुन","जुलाइ","आगस्थ","सेबथेज्ब़र","अखथबर","नबेज्ब़र","दिसेज्ब़र"],SHORTDAY:["रबि","सम","मंगल","बुद","बिसथि","सुखुर","सुनि"],SHORTMONTH:["जानुवारी","फेब्रुवारी","मार्स","एफ्रिल","मे","जुन","जुलाइ","आगस्थ","सेबथेज्ब़र","अखथबर","नबेज्ब़र","दिसेज्ब़र"],fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",medium:"MMM d, y h:mm:ss a",mediumDate:"MMM d, y",mediumTime:"h:mm:ss a","short":"M/d/yy h:mm a",shortDate:"M/d/yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"₹",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:2,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:2,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"¤ -",negSuf:"",posPre:"¤ ",posSuf:""}]},id:"brx-in",pluralCat:function(e,n){var i=e|0;var s=r(e,n);if(i==1&&s.v==0){return t.ONE}return t.OTHER}})}])