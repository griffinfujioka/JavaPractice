"use strict";angular.module("ngLocale",[],["$provide",function(e){function n(e){e=e+"";var t=e.indexOf(".");return t==-1?0:e.length-t-1}function r(e,t){var r=t;if(undefined===r){r=Math.min(n(e),3)}var i=Math.pow(10,r);var s=(e*i|0)%i;return{v:r,f:s}}var t={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["претпладне","попладне"],DAY:["недела","понеделник","вторник","среда","четврток","петок","сабота"],MONTH:["јануари","февруари","март","април","мај","јуни","јули","август","септември","октомври","ноември","декември"],SHORTDAY:["нед.","пон.","вт.","сре.","чет.","пет.","саб."],SHORTMONTH:["јан.","фев.","мар.","апр.","мај","јун.","јул.","авг.","септ.","окт.","ноем.","дек."],fullDate:"EEEE, dd MMMM y",longDate:"dd MMMM y",medium:"dd.M.y HH:mm:ss",mediumDate:"dd.M.y",mediumTime:"HH:mm:ss","short":"dd.M.yy HH:mm",shortDate:"dd.M.yy",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"din",DECIMAL_SEP:",",GROUP_SEP:".",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"¤ -",negSuf:"",posPre:"¤ ",posSuf:""}]},id:"mk",pluralCat:function(e,n){var i=e|0;var s=r(e,n);if(s.v==0&&i%10==1||s.f%10==1){return t.ONE}return t.OTHER}})}])