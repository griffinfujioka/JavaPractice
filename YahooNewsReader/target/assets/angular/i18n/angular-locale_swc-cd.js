"use strict";angular.module("ngLocale",[],["$provide",function(e){function n(e){e=e+"";var t=e.indexOf(".");return t==-1?0:e.length-t-1}function r(e,t){var r=t;if(undefined===r){r=Math.min(n(e),3)}var i=Math.pow(10,r);var s=(e*i|0)%i;return{v:r,f:s}}var t={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["ya asubuyi","ya muchana"],DAY:["siku ya yenga","siku ya kwanza","siku ya pili","siku ya tatu","siku ya ine","siku ya tanu","siku ya sita"],MONTH:["mwezi ya kwanja","mwezi ya pili","mwezi ya tatu","mwezi ya ine","mwezi ya tanu","mwezi ya sita","mwezi ya saba","mwezi ya munane","mwezi ya tisa","mwezi ya kumi","mwezi ya kumi na moya","mwezi ya kumi ya mbili"],SHORTDAY:["yen","kwa","pil","tat","ine","tan","sit"],SHORTMONTH:["mkw","mpi","mtu","min","mtn","mst","msb","mun","mts","mku","mkm","mkb"],fullDate:"EEEE d MMMM y",longDate:"d MMMM y",medium:"d MMM y HH:mm:ss",mediumDate:"d MMM y",mediumTime:"HH:mm:ss","short":"d/M/y HH:mm",shortDate:"d/M/y",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"FrCD",DECIMAL_SEP:",",GROUP_SEP:".",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"¤-",negSuf:"",posPre:"¤",posSuf:""}]},id:"swc-cd",pluralCat:function(e,n){var i=e|0;var s=r(e,n);if(i==1&&s.v==0){return t.ONE}return t.OTHER}})}])