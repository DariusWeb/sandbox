(function(e){function t(t){for(var r,o,u=t[0],i=t[1],s=t[2],f=0,l=[];f<u.length;f++)o=u[f],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&l.push(c[o][0]),c[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);h&&h(t);while(l.length)l.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==c[u]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},c={app:0},a=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-55a3abaf":"b79c7264","chunk-71134176":"87b1a0eb","chunk-76a2a2cc":"13c436de","chunk-78f92654":"a36ee9ec"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-55a3abaf":1,"chunk-71134176":1,"chunk-76a2a2cc":1,"chunk-78f92654":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-55a3abaf":"f79c6b70","chunk-71134176":"1b295bd7","chunk-76a2a2cc":"459c77ea","chunk-78f92654":"0a18f4d2"}[e]+".css",c=i.p+r,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var s=a[u],f=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(f===r||f===c))return t()}var l=document.getElementsByTagName("style");for(u=0;u<l.length;u++){s=l[u],f=s.getAttribute("data-href");if(f===r||f===c)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var r=t&&t.target&&t.target.src||c,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete o[e],h.parentNode.removeChild(h),n(a)},h.href=c;var b=document.getElementsByTagName("head")[0];b.appendChild(h)})).then((function(){o[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=a);var s,f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=u(e);var l=new Error;s=function(t){f.onerror=f.onload=null,clearTimeout(h);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",l.name="ChunkLoadError",l.type=r,l.request=o,n[1](l)}c[e]=void 0}};var h=setTimeout((function(){s({type:"timeout",target:f})}),12e4);f.onerror=f.onload=s,document.head.appendChild(f)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],f=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var h=f;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0787":function(e,t,n){},"089c":function(e,t,n){"use strict";n("e8f3")},"0dd8":function(e,t,n){"use strict";n("3468")},"2f59":function(e,t,n){"use strict";n("0787")},3468:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function o(e,t,n,o,c,a){var u=Object(r["y"])("Header"),i=Object(r["y"])("router-view");return Object(r["q"])(),Object(r["e"])(r["a"],null,[Object(r["h"])(u),Object(r["h"])(i)],64)}var c=Object(r["J"])("data-v-2bf7bccb");Object(r["t"])("data-v-2bf7bccb");var a={class:"nav"},u=Object(r["g"])("Home"),i=Object(r["g"])(" Products "),s=Object(r["g"])("Register"),f=Object(r["g"])("Login");Object(r["r"])();var l=c((function(e,t,n,o,l,h){var b=Object(r["y"])("router-link");return Object(r["q"])(),Object(r["e"])("nav",a,[Object(r["h"])(b,{to:"/"},{default:c((function(){return[u]})),_:1}),Object(r["h"])(b,{to:"/products",class:[h.checkToken?"auth":"noAuth"]},{default:c((function(){return[i,Object(r["h"])("span",null,Object(r["A"])(l.msg),1)]})),_:1},8,["class"]),Object(r["h"])(b,{to:"/register"},{default:c((function(){return[s]})),_:1}),Object(r["h"])(b,{to:"/login"},{default:c((function(){return[f]})),_:1}),h.checkToken?(Object(r["q"])(),Object(r["e"])("span",{key:0,onClick:t[1]||(t[1]=function(){return h.logout&&h.logout.apply(h,arguments)})},"Logout")):Object(r["f"])("",!0)])})),h=(n("d3b7"),{data:function(){return{status:"",msg:"Please login first",url:"https://test-api.updivision.work/api/logout"}},methods:{logout:function(){var e=this;fetch(this.url,{method:"POST",headers:{Accept:"application/json",Authorization:"Bearer ".concat(this.$store.getters.getToken)}}).then((function(t){e.status=t.status,t.json().then((function(){200===e.status&&(e.$store.state.userToken="",e.$router.push({name:"Login"}))}))})).catch((function(t){e.errorMsg=t.message,e.showError=!0}))}},computed:{checkToken:function(){return this.$store.getters.getToken}}});n("089c");h.render=l,h.__scopeId="data-v-2bf7bccb";var b=h,d={components:{Header:b}};n("0dd8");d.render=o;var p=d,g=(n("45fc"),n("6c02")),m=n("5502"),v=Object(m["a"])({state:{userToken:""},getters:{getToken:function(e){return e.userToken}},mutations:{userKey:function(e,t){e.userToken=t}}}),j=Object(r["J"])("data-v-2bb4bfbc");Object(r["t"])("data-v-2bb4bfbc");var O={class:"page-home"},k=Object(r["h"])("h1",null,"Hello Updivision",-1),y=Object(r["h"])("div",{class:"smile"},":)",-1);Object(r["r"])();var T=j((function(e,t,n,o,c,a){return Object(r["q"])(),Object(r["e"])("div",O,[k,y])})),w={name:"Home"};n("2f59");w.render=T,w.__scopeId="data-v-2bb4bfbc";var _=w,P=[{path:"/",name:"Home",component:_},{path:"/thanks",name:"Thanks",component:function(){return n.e("chunk-78f92654").then(n.bind(null,"aa78"))}},{path:"/register",name:"Register",component:function(){return n.e("chunk-76a2a2cc").then(n.bind(null,"73cf"))}},{path:"/login",name:"Login",component:function(){return n.e("chunk-55a3abaf").then(n.bind(null,"a55b"))}},{path:"/products",name:"Products",meta:{requiresAuth:!0},component:function(){return n.e("chunk-71134176").then(n.bind(null,"e6dc"))}}],A=Object(g["a"])({history:Object(g["b"])("/"),routes:P});A.beforeEach((function(e,t,n){e.matched.some((function(e){return e.meta.requiresAuth}))?v.getters.getToken?n():n("/login"):n()}));var E=A;Object(r["d"])(p).use(v).use(E).mount("#app")},e8f3:function(e,t,n){}});
//# sourceMappingURL=app.fdd0e7bd.js.map