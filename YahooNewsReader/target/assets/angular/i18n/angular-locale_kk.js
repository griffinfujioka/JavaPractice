"use strict";angular.module("ngLocale",[],["$provide",function(e){var t={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["таңертеңгі","түстен кейінгі"],DAY:["жексенбі","дүйсенбі","сейсенбі","сәрсенбі","бейсенбі","жұма","сенбі"],MONTH:["қаңтар","ақпан","наурыз","сәуір","мамыр","маусым","шілде","тамыз","қыркүйек","қазан","қараша","желтоқсан"],SHORTDAY:["жек","дүй","сей","сәр","бей","жұма","сен"],SHORTMONTH:["қаң.","ақп.","нау.","сәу.","мам.","мау.","шіл.","там.","қыр.","қаз.","қар.","желт."],fullDate:"EEEE, d MMMM y",longDate:"d MMMM y",medium:"y, dd-MMM HH:mm:ss",mediumDate:"y, dd-MMM",mediumTime:"HH:mm:ss","short":"dd/MM/yy HH:mm",shortDate:"dd/MM/yy",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"₸",DECIMAL_SEP:",",GROUP_SEP:" ",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:" ¤",posPre:"",posSuf:" ¤"}]},id:"kk",pluralCat:function(e,n){if(e==1){return t.ONE}return t.OTHER}})}])