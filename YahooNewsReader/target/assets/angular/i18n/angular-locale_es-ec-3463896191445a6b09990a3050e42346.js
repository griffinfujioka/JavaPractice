"use strict";angular.module("ngLocale",[],["$provide",function(e){var t={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["a. m.","p. m."],DAY:["domingo","lunes","martes","miércoles","jueves","viernes","sábado"],MONTH:["enero","febrero","marzo","abril","mayo","junio","julio","agosto","setiembre","octubre","noviembre","diciembre"],SHORTDAY:["dom.","lun.","mar.","mié.","jue.","vie.","sáb."],SHORTMONTH:["ene.","feb.","mar.","abr.","may.","jun.","jul.","ago.","set.","oct.","nov.","dic."],fullDate:"EEEE, d 'de' MMMM 'de' y",longDate:"d 'de' MMMM 'de' y",medium:"d 'de' MMM 'de' y h:mm:ss a",mediumDate:"d 'de' MMM 'de' y",mediumTime:"h:mm:ss a","short":"d/M/yy h:mm a",shortDate:"d/M/yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:",",GROUP_SEP:".",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"¤-",negSuf:"",posPre:"¤",posSuf:""}]},id:"es-ec",pluralCat:function(e,n){if(e==1){return t.ONE}return t.OTHER}})}])