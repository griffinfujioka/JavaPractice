"use strict";angular.module("ngLocale",[],["$provide",function(e){function n(e){e=e+"";var t=e.indexOf(".");return t==-1?0:e.length-t-1}function r(e,t){var r=t;if(undefined===r){r=Math.min(n(e),3)}var i=Math.pow(10,r);var s=(e*i|0)%i;return{v:r,f:s}}var t={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["སྔ་ཆ་","ཕྱི་ཆ་"],DAY:["གཟའ་ཟླ་བ་","གཟའ་མིག་དམར་","གཟའ་ལྷག་པ་","གཟའ་ཕུར་བུ་","གཟའ་པ་སངས་","གཟའ་སྤེན་པ་","གཟའ་ཉི་མ་"],MONTH:["ཟླ་དངཔ་","ཟླ་གཉིས་པ་","ཟླ་གསུམ་པ་","ཟླ་བཞི་པ་","ཟླ་ལྔ་པ་","ཟླ་དྲུག་པ","ཟླ་བདུན་པ་","ཟླ་བརྒྱད་པ་","ཟླ་དགུ་པ་","ཟླ་བཅུ་པ་","ཟླ་བཅུ་གཅིག་པ་","ཟླ་བཅུ་གཉིས་པ་"],SHORTDAY:["ཟླ་","མིར་","ལྷག་","ཕུར་","སངས་","སྤེན་","ཉི་"],SHORTMONTH:["༡","༢","༣","༤","༥","༦","༧","༨","༩","༡༠","༡༡","12"],fullDate:"EEEE, སྤྱི་ལོ་y MMMM ཚེས་dd",longDate:"སྤྱི་ལོ་y MMMM ཚེས་ dd",medium:"སྤྱི་ལོ་y ཟླ་MMM ཚེས་dd ཆུ་ཚོད་h:mm:ss a",mediumDate:"སྤྱི་ལོ་y ཟླ་MMM ཚེས་dd",mediumTime:"ཆུ་ཚོད་h:mm:ss a","short":"y-MM-dd ཆུ་ཚོད་ h སྐར་མ་ mm a",shortDate:"y-MM-dd",shortTime:"ཆུ་ཚོད་ h སྐར་མ་ mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"Nu.",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:2,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:2,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"¤-",negSuf:"",posPre:"¤",posSuf:""}]},id:"dz-bt",pluralCat:function(e,n){var i=e|0;var s=r(e,n);if(i==1&&s.v==0){return t.ONE}return t.OTHER}})}])