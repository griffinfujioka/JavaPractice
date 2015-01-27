(function(e,t,n){"use strict";t.module("ngMessages",[]).directive("ngMessages",["$compile","$animate","$templateRequest",function(e,n,r){var i="ng-active";var s="ng-inactive";return{restrict:"AE",controller:function(){this.$renderNgMessageClasses=t.noop;var e=[];this.registerMessage=function(t,n){for(var r=0;r<e.length;r++){if(e[r].type==n.type){if(t!=r){var i=e[t];e[t]=e[r];if(t<e.length){e[r]=i}else{e.splice(0,r)}}return}}e.splice(t,0,n)};this.renderMessages=function(n,r){function s(e){return e!==null&&e!==false&&e}n=n||{};var i;t.forEach(e,function(e){if((!i||r)&&s(n[e.type])){e.attach();i=true}else{e.detach()}});this.renderElementClasses(i)}},require:"ngMessages",link:function(o,u,a,f){f.renderElementClasses=function(e){e?n.setClass(u,i,s):n.setClass(u,s,i)};var l=t.isString(a.ngMessagesMultiple)||t.isString(a.multiple);var c,h=a.ngMessages||a["for"];o.$watchCollection(h,function(e){c=e;f.renderMessages(e,l)});var p=a.ngMessagesInclude||a.include;if(p){r(p).then(function(r){var i,s=t.element("<div/>").html(r);t.forEach(s.children(),function(n){n=t.element(n);i?i.after(n):u.prepend(n);i=n;e(n)(o)});f.renderMessages(c,l)})}}}}]).directive("ngMessage",["$animate",function(e){var t=8;return{require:"^ngMessages",transclude:"element",terminal:true,restrict:"AE",link:function(n,r,i,s,o){var u,a;var f=r[0];var l=f.parentNode;for(var c=0,h=0;c<l.childNodes.length;c++){var p=l.childNodes[c];if(p.nodeType==t&&p.nodeValue.indexOf("ngMessage")>=0){if(p===f){u=h;break}h++}}s.registerMessage(u,{type:i.ngMessage||i.when,attach:function(){if(!a){o(n,function(t){e.enter(t,null,r);a=t})}},detach:function(t){if(a){e.leave(a);a=null}}})}}}])})(window,window.angular)