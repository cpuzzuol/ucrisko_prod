(function(e){function n(n){for(var o,i,s=n[0],u=n[1],c=n[2],f=0,p=[];f<s.length;f++)i=s[f],r[i]&&p.push(r[i][0]),r[i]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);l&&l(n);while(p.length)p.shift()();return a.push.apply(a,c||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],o=!0,s=1;s<t.length;s++){var u=t[s];0!==r[u]&&(o=!1)}o&&(a.splice(n--,1),e=i(i.s=t[0]))}return e}var o={},r={app:0},a=[];function i(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=o,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)i.d(t,o,function(n){return e[n]}.bind(null,o));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=n,s=s.slice();for(var c=0;c<s.length;c++)n(s[c]);var l=u;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("cadf"),t("551c"),t("f751"),t("097d");var o=t("2b0e"),r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},a=[],i=(t("5c0b"),t("2877")),s={},u=Object(i["a"])(s,r,a,!1,null,null,null),c=u.exports,l=t("8c4f"),f=function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("div",{staticClass:"home"},[o("img",{attrs:{height:"500",width:"500",alt:"University of Crisko logo",src:t("7950")}}),o("UCLanding")],1)},p=[],d=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"hello"},[t("h1",[e._v("UCrisko, LLC")]),t("form",{attrs:{name:"ask-question",method:"post","data-netlify":"true","data-netlify-honeypot":"bot-field"}},[t("input",{attrs:{type:"hidden",name:"form-name",value:"ask-question"}}),e._l(e.panelists,function(n,o){return t("label",{key:o},[t("input",{attrs:{type:"radio",name:"panelist"},domProps:{value:n,checked:n===e.currentPanelist},on:{input:function(n){return e.updatePanelist}}}),t("span",[e._v(e._s(n))])])}),t("button",[e._v("Submit")])],2)])},v=[],h=t("bc3a"),g=t.n(h),b={name:"HelloWorld",props:{},data:function(){return{tasks:[],panelists:["Evan You","Chris Fritz"],currentPanelist:"Evan You"}},methods:{getTasks:function(){var e=this;g.a.get("//laravelapi2-env.2p3hx35vze.us-east-1.elasticbeanstalk.com/api/tasks").then(function(n){e.tasks=n.data}).catch(function(e){console.log(e)})},updatePanelist:function(e){this.currentPanelist=e.target.value}}},m=b,y=Object(i["a"])(m,d,v,!1,null,"6b969f30",null),w=y.exports,k={name:"home",components:{UCLanding:w}},_=k,j=Object(i["a"])(_,f,p,!1,null,null,null),O=j.exports;o["a"].use(l["a"]);var P=new l["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:O}]}),x=t("2f62");o["a"].use(x["a"]);var C=new x["a"].Store({state:{},mutations:{},actions:{}}),S=t("9483");Object(S["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),o["a"].config.productionTip=!1,new o["a"]({router:P,store:C,render:function(e){return e(c)}}).$mount("#app")},"5c0b":function(e,n,t){"use strict";var o=t("5e27"),r=t.n(o);r.a},"5e27":function(e,n,t){},7950:function(e,n,t){e.exports=t.p+"img/uclogo.995d088b.png"}});
//# sourceMappingURL=app.b5b5c17a.js.map