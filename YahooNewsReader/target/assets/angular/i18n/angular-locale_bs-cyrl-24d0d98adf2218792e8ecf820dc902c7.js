"use strict";angular.module("ngLocale",[],["$provide",function(e){function n(e){e=e+"";var t=e.indexOf(".");return t==-1?0:e.length-t-1}function r(e,t){var r=t;if(undefined===r){r=Math.min(n(e),3)}var i=Math.pow(10,r);var s=(e*i|0)%i;return{v:r,f:s}}var t={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["пре подне","поподне"],DAY:["недеља","понедељак","уторак","сриједа","четвртак","петак","субота"],MONTH:["јануар","фебруар","март","април","мај","јуни","јули","август","септембар","октобар","новембар","децембар"],SHORTDAY:["нед","пон","уто","сри","чет","пет","суб"],SHORTMONTH:["јан","феб","мар","апр","мај","јун","јул","авг","сеп","окт","нов","дец"],fullDate:"EEEE, dd. MMMM y.",longDate:"dd. MMMM y.",medium:"dd.MM.y. HH:mm:ss",mediumDate:"dd.MM.y.",mediumTime:"HH:mm:ss","short":"d.M.yy. HH:mm",shortDate:"d.M.yy.",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"€",DECIMAL_SEP:",",GROUP_SEP:".",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:" ¤",posPre:"",posSuf:" ¤"}]},id:"bs-cyrl",pluralCat:function(e,n){var i=e|0;var s=r(e,n);if(i==1&&s.v==0){return t.ONE}return t.OTHER}})}])