(function(e,t,n){"use strict";t.module("ngCookies",["ng"]).factory("$cookies",["$rootScope","$browser",function(e,r){function l(){var e,o,u,a;for(e in s){if(f(i[e])){r.cookies(e,n)}}for(e in i){o=i[e];if(!t.isString(o)){o=""+o;i[e]=o}if(o!==s[e]){r.cookies(e,o);a=true}}if(a){a=false;u=r.cookies();for(e in i){if(i[e]!==u[e]){if(f(u[e])){delete i[e]}else{i[e]=u[e]}a=true}}}}var i={},s={},o,u=false,a=t.copy,f=t.isUndefined;r.addPollFn(function(){var t=r.cookies();if(o!=t){o=t;a(t,s);a(t,i);if(u)e.$apply()}})();u=true;e.$watch(l);return i}]).factory("$cookieStore",["$cookies",function(e){return{get:function(n){var r=e[n];return r?t.fromJson(r):r},put:function(n,r){e[n]=t.toJson(r)},remove:function(t){delete e[t]}}}])})(window,window.angular)