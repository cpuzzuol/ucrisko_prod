(function(e){function t(t){for(var o,i,s=t[0],u=t[1],c=t[2],l=0,p=[];l<s.length;l++)i=s[l],r[i]&&p.push(r[i][0]),r[i]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);f&&f(t);while(p.length)p.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,i=1;i<n.length;i++){var u=n[i];0!==r[u]&&(o=!1)}o&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},r={app:0},a=[];function i(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"d288b4f1"}[e]+".js"}function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise(function(t,o){n=r[e]=[t,o]});t.push(n[2]=o);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=i(e),a=function(t){u.onerror=u.onload=null,clearTimeout(c);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+o+": "+a+")");i.type=o,i.request=a,n[1](i)}r[e]=void 0}};var c=setTimeout(function(){a({type:"timeout",target:u})},12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(t)},s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var f=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],i=(n("5c0b"),n("2877")),s={},u=Object(i["a"])(s,r,a,!1,null,null,null),c=u.exports,l=n("8c4f"),f=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"home"},[o("img",{attrs:{height:"500",width:"500",alt:"University of Crisko logo",src:n("7950")}}),o("UCLanding",{attrs:{msg:"The University of CRISKO."}})],1)},p=[],d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))]),n("p",[e._v("Page A")]),n("button",{on:{click:e.getTasks}},[e._v("Get Tasks")]),e.tasks.length>0?n("ul",e._l(e.tasks,function(t,o){return n("li",{key:"task-"+o},[e._v(e._s(t.title))])}),0):e._e()])},g=[],h=n("bc3a"),v=n.n(h),b={name:"HelloWorld",props:{msg:String},data:function(){return{tasks:[]}},methods:{getTasks:function(){var e=this;v.a.get("http://laravelapi-env.e865rx5fgi.us-east-1.elasticbeanstalk.com/api/tasks").then(function(t){e.tasks=t.data}).catch(function(e){console.log(e)})}}},m=b,y=Object(i["a"])(m,d,g,!1,null,"643a3820",null),w=y.exports,k={name:"home",components:{UCLanding:w}},_=k,j=Object(i["a"])(_,f,p,!1,null,null,null),O=j.exports;o["a"].use(l["a"]);var x=new l["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:O},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]}),P=n("2f62");o["a"].use(P["a"]);var S=new P["a"].Store({state:{},mutations:{},actions:{}}),T=n("9483");Object(T["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),o["a"].config.productionTip=!1,new o["a"]({router:x,store:S,render:function(e){return e(c)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var o=n("5e27"),r=n.n(o);r.a},"5e27":function(e,t,n){},7950:function(e,t,n){e.exports=n.p+"img/uclogo.995d088b.png"}});
//# sourceMappingURL=app.0da5062c.js.map