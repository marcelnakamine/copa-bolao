(function(e){function t(t){for(var r,i,u=t[0],l=t[1],c=t[2],p=0,f=[];p<u.length;p++)i=u[p],o[i]&&f.push(o[i][0]),o[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);s&&s(t);while(f.length)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,u=1;u<n.length;u++){var l=n[u];0!==o[l]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={1:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var s=l;a.push([2,0]),n()})({2:function(e,t,n){e.exports=n("Vtdi")},EDI0:function(e,t,n){},KL0g:function(e,t,n){},Vtdi:function(e,t,n){"use strict";n.r(t);n("VRzm");var r=n("Kw5r"),o=n("D/Jt"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" |\n    "),n("router-link",{attrs:{to:"/player"}},[e._v("Jogador")])],1),n("router-view")],1)},i=[],u=(n("ZL7j"),n("KHd+")),l={},c=Object(u["a"])(l,a,i,!1,null,null,null),s=c.exports,p=n("jE9Z"),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("h1",[e._v("Bolão da copa 2018")]),n("router-link",{attrs:{to:"/player"}},[e._v("Jogador")]),n("router-link",{attrs:{to:"/admin"}},[e._v("Administrador")])],1)},d=[],m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",e._l(e.matches,function(t,r){return n("article",{key:r},[n("h1",[e._v(e._s(t.team1.name))])])}))},v=[],h=n("Wcq6"),b=n.n(h),_=(n("5x/H"),{apiKey:"AIzaSyCWrml0T8jQWLUJmVfVS6yIrHj-XAManVA",authDomain:"bolao-copa-cd977.firebaseapp.com",databaseURL:"https://bolao-copa-cd977.firebaseio.com",projectId:"bolao-copa-cd977",storageBucket:"bolao-copa-cd977.appspot.com",messagingSenderId:"948611227323"}),y=b.a.initializeApp(_),g=y.firestore(),j={timestampsInSnapshots:!0};g.settings(j);var w=g,O={name:"HelloWorld",data:function(){return{matches:[]}},firestore:function(){return{matches:w.collection("matches")}}},x=O,E=(n("WEz7"),Object(u["a"])(x,m,v,!1,null,"79de5d74",null)),S=E.exports,k={name:"home",components:{HelloWorld:S}},I=k,J=Object(u["a"])(I,f,d,!1,null,null,null),L=J.exports,P=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},W=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"player"},[n("h1",[e._v("Página do jogador")])])}],H={},V=Object(u["a"])(H,P,W,!1,null,null,null),$=V.exports;r["a"].use(p["a"]);var z=new p["a"]({routes:[{path:"/",name:"home",component:L},{path:"/player",name:"player",component:$}]}),A=n("L2JU");r["a"].use(A["a"]);var K=new A["a"].Store({state:{},mutations:{},actions:{}});r["a"].use(o["a"]),r["a"].config.productionTip=!1,new r["a"]({router:z,store:K,render:function(e){return e(s)}}).$mount("#app")},WEz7:function(e,t,n){"use strict";var r=n("KL0g"),o=n.n(r);o.a},ZL7j:function(e,t,n){"use strict";var r=n("EDI0"),o=n.n(r);o.a}});
//# sourceMappingURL=app.58cb3095.js.map