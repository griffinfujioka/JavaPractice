"use strict";angular.module("ngLocale",[],["$provide",function(e){function n(e){e=e+"";var t=e.indexOf(".");return t==-1?0:e.length-t-1}function r(e,t){var r=t;if(undefined===r){r=Math.min(n(e),3)}var i=Math.pow(10,r);var s=(e*i|0)%i;return{v:r,f:s}}var t={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["পূৰ্বাহ্ণ","অপৰাহ্ণ"],DAY:["দেওবাৰ","সোমবাৰ","মঙ্গলবাৰ","বুধবাৰ","বৃহষ্পতিবাৰ","শুক্ৰবাৰ","শনিবাৰ"],MONTH:["জানুৱাৰী","ফেব্ৰুৱাৰী","মাৰ্চ","এপ্ৰিল","মে","জুন","জুলাই","আগষ্ট","ছেপ্তেম্বৰ","অক্টোবৰ","নৱেম্বৰ","ডিচেম্বৰ"],SHORTDAY:["ৰবি","সোম","মঙ্গল","বুধ","বৃহষ্পতি","শুক্ৰ","শনি"],SHORTMONTH:["জানু","ফেব্ৰু","মাৰ্চ","এপ্ৰিল","মে","জুন","জুলাই","আগ","সেপ্ট","অক্টো","নভে","ডিসে"],fullDate:"EEEE, d MMMM, y",longDate:"d MMMM, y",medium:"dd-MM-y h.mm.ss a",mediumDate:"dd-MM-y",mediumTime:"h.mm.ss a","short":"d-M-y h.mm. a",shortDate:"d-M-y",shortTime:"h.mm. a"},NUMBER_FORMATS:{CURRENCY_SYM:"₹",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:2,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:2,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"¤ -",negSuf:"",posPre:"¤ ",posSuf:""}]},id:"as-in",pluralCat:function(e,n){var i=e|0;var s=r(e,n);if(i==1&&s.v==0){return t.ONE}return t.OTHER}})}])