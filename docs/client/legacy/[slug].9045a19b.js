import{T as t,c as n,d as e,e as r,f as a,i as s,h as c,S as o,s as u,I as i,k as f,C as l,K as h,n as v,L as p,l as d,m,D as y,N as x,p as b,q as w,a as R,E,Q as g}from"./client.b6adffcb.js";function j(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,s=e(t);if(n){var c=e(this).constructor;a=Reflect.construct(s,arguments,c)}else a=s.apply(this,arguments);return r(this,a)}}function k(t){var n,e,r,a,s,c,o=t[0].title+"",u=t[0].html+"";return document.title=n=t[0].title,{c:function(){e=i(),r=f("h1"),a=l(o),s=i(),c=f("div"),this.h()},l:function(t){h('[data-svelte="svelte-1uty71u"]',document.head).forEach(v),e=p(t),r=d(t,"H1",{});var n=m(r);a=y(n,o),n.forEach(v),s=p(t),c=d(t,"DIV",{class:!0}),m(c).forEach(v),this.h()},h:function(){x(c,"class","content svelte-emm3f3")},m:function(t,n){b(t,e,n),b(t,r,n),w(r,a),b(t,s,n),b(t,c,n),c.innerHTML=u},p:function(t,e){var r=R(e,1)[0];1&r&&n!==(n=t[0].title)&&(document.title=n),1&r&&o!==(o=t[0].title+"")&&E(a,o),1&r&&u!==(u=t[0].html+"")&&(c.innerHTML=u)},i:g,o:g,d:function(t){t&&v(e),t&&v(r),t&&v(s),t&&v(c)}}}var H=function(t,n,e,r){return new(e||(e=Promise))((function(a,s){function c(t){try{u(r.next(t))}catch(t){s(t)}}function o(t){try{u(r.throw(t))}catch(t){s(t)}}function u(t){var n;t.done?a(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(c,o)}u((r=r.apply(t,n||[])).next())}))},L=function(n){var e=n.params;return H(this,void 0,void 0,t.mark((function n(){var r,a;return t.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.fetch("blog/".concat(e.slug,".json"));case 2:return r=t.sent,t.next=5,r.json();case 5:if(a=t.sent,200!==r.status){t.next=10;break}return t.abrupt("return",{post:a});case 10:this.error(r.status,a.message);case 11:case"end":return t.stop()}}),n,this)})))};function T(t,n,e){var r=n.post;return t.$$set=function(t){"post"in t&&e(0,r=t.post)},[r]}var B=function(t){n(r,o);var e=j(r);function r(t){var n;return a(this,r),n=e.call(this),s(c(n),t,T,k,u,{post:0}),n}return r}();export default B;export{L as preload};
