(function(e){function t(t){for(var r,s,c=t[0],i=t[1],l=t[2],u=0,h=[];u<c.length;u++)s=c[u],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&h.push(o[s][0]),o[s]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);p&&p(t);while(h.length)h.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],r=!0,s=1;s<a.length;s++){var i=a[s];0!==o[i]&&(r=!1)}r&&(n.splice(t--,1),e=c(c.s=a[0]))}return e}var r={},o={app:0},n=[];function s(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"2754be50"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(e){var t=[],a=o[e];if(0!==a)if(a)t.push(a[2]);else{var r=new Promise((function(t,r){a=o[e]=[t,r]}));t.push(a[2]=r);var n,i=document.createElement("script");i.charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.src=s(e);var l=new Error;n=function(t){i.onerror=i.onload=null,clearTimeout(u);var a=o[e];if(0!==a){if(a){var r=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+n+")",l.name="ChunkLoadError",l.type=r,l.request=n,a[1](l)}o[e]=void 0}};var u=setTimeout((function(){n({type:"timeout",target:i})}),12e4);i.onerror=i.onload=n,document.head.appendChild(i)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(a,r,function(t){return e[t]}.bind(null,r));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/dmrjpg/",c.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var p=l;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0bc5":function(e,t,a){},1536:function(e,t,a){"use strict";a("ee1e")},"1a85":function(e,t,a){},"29cf":function(e,t,a){},4040:function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("navbar"),a("router-view")],1)},n=[],s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-navbar",{scopedSlots:e._u([{key:"brand",fn:function(){return[r("b-navbar-item",{attrs:{tag:"router-link",to:{path:"/"}}},[r("img",{staticClass:"LOGO",attrs:{src:a("cf05"),alt:"Lightweight UI components for Vue.js based on Bulma"}}),r("span",[e._v(". JPG")])])]},proxy:!0},{key:"start",fn:function(){return[r("b-navbar-item",{staticClass:"navitem"},[r("router-link",{staticClass:"hover",attrs:{to:{path:"/"}}},[e._v("Photos")])],1),r("b-navbar-item",{staticClass:"navitem"},[r("router-link",{attrs:{to:{path:"/vector"}}},[e._v("Vector")])],1)]},proxy:!0}])})},c=[],i=(a("1536"),a("2877")),l={},u=Object(i["a"])(l,s,c,!1,null,"0b0d86ca",null),p=u.exports,h={components:{navbar:p}},m=h,f=Object(i["a"])(m,o,n,!1,null,null,null),d=f.exports,g=(a("d3b7"),a("3ca3"),a("ddb0"),a("8c4f")),v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._m(0),a("div",{attrs:{id:"hero"}},[e._m(1),a("div",[a("form",{on:{submit:e.redirect}},[a("b-field",{staticClass:"centerme"},[a("b-input",{staticClass:"searchbox",attrs:{placeholder:"Search for images.....",type:"search","icon-pack":"fas",icon:"search"},model:{value:e.searchText,callback:function(t){e.searchText=t},expression:"searchText"}})],1)],1)])])])},b=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h5",{staticClass:"header",staticStyle:{color:"white"}},[e._v("Stunning free images "),a("h3",[e._v("Best Free Stock Photos")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"background-container"},[a("picture",[a("source",{attrs:{srcset:"https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg",media:"(min-width: 1440px)"}}),a("source",{attrs:{srcset:"https://images.unsplash.com/photo-1536431311719-398b6704d4cc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",media:"(max-width: 640px)"}}),a("img",{staticClass:"hero-background",attrs:{src:"https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg"}})])])}],y={data:function(){return{searchText:""}},methods:{redirect:function(){this.$router.push({name:"gallery",params:{message:this.searchText}})}}},x=y,_=(a("f437"),Object(i["a"])(x,v,b,!1,null,"f8e50f0e",null)),w=_.exports,k=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"background"}},[a("form",{on:{submit:function(t){return t.preventDefault(),e.request.apply(null,arguments)}}},[a("b-field",{staticClass:"centerme"},[a("b-input",{staticClass:"searchbox",attrs:{placeholder:"Search...",type:"search","icon-pack":"fas",icon:"search"},model:{value:e.searchText,callback:function(t){e.searchText=t},expression:"searchText"}})],1)],1),a("span",{staticClass:"allignmee"},[a("b-field",{staticClass:"positionme",attrs:{label:"No of Images"}},[a("b-select",{attrs:{placeholder:"Select",rounded:""},on:{change:function(t){return e.changedValue()}},model:{value:e.Noimages,callback:function(t){e.Noimages=t},expression:"Noimages"}},[a("option",[e._v("10")]),a("option",[e._v("20")]),a("option",[e._v("30")])])],1),a("b-field",{staticClass:"positionme",attrs:{label:"   Orientation"}},[a("b-select",{attrs:{placeholder:"Select",rounded:""},model:{value:e.selection,callback:function(t){e.selection=t},expression:"selection"}},[a("option",[e._v("vertical")]),a("option",[e._v("horizontal")]),a("option",[e._v("all")])])],1),a("b-field",{staticClass:"positionme",attrs:{label:"category"}},[a("b-select",{attrs:{placeholder:"Select",rounded:""},model:{value:e.category,callback:function(t){e.category=t},expression:"category"}},[a("option",[e._v("backgrounds")]),a("option",[e._v("fashion")]),a("option",[e._v("nature")]),a("option",[e._v("science")]),a("option",[e._v("education")]),a("option",[e._v("health")]),a("option",[e._v("people")]),a("option",[e._v("religion")]),a("option",[e._v("places")]),a("option",[e._v("animals")]),a("option",[e._v("industry")]),a("option",[e._v("computer")]),a("option",[e._v("food")]),a("option",[e._v("sports")]),a("option",[e._v("transportation")]),a("option",[e._v("travel")])])],1),a("b-field",{staticClass:"positionme",attrs:{label:"order"}},[a("b-select",{attrs:{placeholder:"Select",rounded:""},model:{value:e.order,callback:function(t){e.order=t},expression:"order"}},[a("option",[e._v("Popular")]),a("option",[e._v("Latest")])])],1)],1),a("br"),e.resultfound?a("span",{staticClass:"allignme"},[e._v("Search Results for "),a("span",[e._v(e._s(this.resultname))]),e._v("..")]):e._e(),a("br"),a("br"),a("div",{staticStyle:{background:"#f6f5fa"}},[a("section",{staticClass:"columns is-multiline"},e._l(e.images,(function(t){return a("figure",{key:t.id,staticClass:"column is-one-third"},[a("img",{staticClass:"cursor",attrs:{src:""+t.webformatURL},on:{click:function(a){return e.imageModal(""+t.webformatURL)}}})])})),0)])])},T=[],C=a("1da1"),j=(a("96cf"),a("99af"),a("bc3a")),q=a.n(j),O={data:function(){return{searchText:"",previousText:this.$route.params.message,apiUrl:"https://pixabay.com/api/",apiKey:"23294204-5ba3b34b4c9aaa6b3bef520eb",images:[],resultfound:!1,resultname:"",Noimages:"20",selection:"all",order:"Popular",selectedimage:[],status:!1,category:"",iscategory:!1}},created:function(){var e=this;return Object(C["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,q.a.get("".concat(e.apiUrl,"/?key=").concat(e.apiKey,"&q=").concat(e.previousText,"&image_type=photo&per_page=30&safesearch=true"));case 3:a=t.sent,e.images=a.data.hits,e.resultfound=!e.resultfound,e.resultname=e.previousText,e.status=!0,console.log(e.images),t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](0),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))()},methods:{request:function(){var e=this;return Object(C["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,q.a.get("".concat(e.apiUrl,"/?key=").concat(e.apiKey,"&q=").concat(e.searchText,"&image_type=photo&per_page=").concat(e.Noimages,"&orientation=").concat(e.selection,"&order=").concat(e.order,"safesearch=true"));case 3:a=t.sent,e.images=a.data.hits,console.log(e.images),e.resultname=e.searchText,e.status=!1,e.iscategory=!1,e.category="",e.resultfound=!0,t.next=16;break;case 13:t.prev=13,t.t0=t["catch"](0),console.log(t.t0);case 16:case"end":return t.stop()}}),t,null,[[0,13]])})))()},imageModal:function(e){console.log(e),console.log(this.selectedimage);var t=this.$createElement,a=t("p",{class:"modalimage"},[t("img",{attrs:{src:e}})]);this.$buefy.modal.open({content:[a]})},createdbyme:function(){var e=this;return Object(C["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,q.a.get("".concat(e.apiUrl,"/?key=").concat(e.apiKey,"&q=").concat(e.previousText,"&image_type=photo&per_page=").concat(e.Noimages,"&orientation=").concat(e.selection,"&order=").concat(e.order,"safesearch=true"));case 3:a=t.sent,e.images=a.data.hits,e.resultfound=!0,e.resultname=e.previousText,console.log(e.images),e.iscategory=!1,t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](0),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))()},categoryrequest:function(){var e=this;return Object(C["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,q.a.get("".concat(e.apiUrl,"/?key=").concat(e.apiKey,"&category=").concat(e.category,"&image_type=photo&per_page=").concat(e.Noimages,"&orientation=").concat(e.selection,"&order=").concat(e.order,"safesearch=true"));case 3:a=t.sent,e.images=a.data.hits,e.resultfound=!0,e.resultname=e.category,console.log(e.images),e.iscategory=!0,t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](0),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))()}},watch:{selection:function(){1==this.iscategory?this.categoryrequest():null!==this.searchText?(this.createdbyme(),console.log("somethingiswrong")):(this.request(),console.log("nothingiswrong"))},order:function(){1==this.iscategory?this.categoryrequest():null!==this.searchText?(this.createdbyme(),console.log("somethingiswrong")):(this.request(),console.log("nothingiswrong"))},Noimages:function(){1==this.iscategory?this.categoryrequest():null!==this.searchText?(this.createdbyme(),console.log("somethingiswrong")):(this.request(),console.log("nothingiswrong"))},category:function(){this.categoryrequest()}}},S=O,R=(a("646a"),Object(i["a"])(S,k,T,!1,null,"48f40eb8",null)),M=R.exports,N=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h5",{staticClass:"header"},[e._v("Stunning vector images ")]),a("div",{attrs:{id:"hero"}},[e._m(0),a("div",[a("form",{on:{submit:e.redirect}},[a("b-field",{staticClass:"centerme"},[a("b-input",{staticClass:"searchbox",attrs:{placeholder:"Search for images.....",type:"search","icon-pack":"fas",icon:"search"},model:{value:e.searchText,callback:function(t){e.searchText=t},expression:"searchText"}})],1)],1)])])])},$=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"background-container"},[a("picture",[a("source",{attrs:{srcset:"https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"}}),a("source",{attrs:{srcset:"https://images.unsplash.com/photo-1436891620584-47fd0e565afb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",media:"(max-width: 640px)"}}),a("img",{staticClass:"hero-background",attrs:{src:"https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"}})])])}],P={data:function(){return{searchText:""}},methods:{redirect:function(){this.$router.push({name:"vectorgallery",params:{message:this.searchText}})}}},E=P,U=(a("5dd6"),Object(i["a"])(E,N,$,!1,null,"fc5503ac",null)),H=U.exports,B=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"background"}},[a("form",{on:{submit:function(t){return t.preventDefault(),e.request.apply(null,arguments)}}},[a("b-field",{staticClass:"centerme"},[a("b-input",{staticClass:"searchbox",attrs:{placeholder:"Search...",type:"search","icon-pack":"fas",icon:"search"},model:{value:e.searchText,callback:function(t){e.searchText=t},expression:"searchText"}})],1)],1),a("span",{staticClass:"allignmee"},[a("b-field",{staticClass:"positionme",attrs:{label:"No of Images"}},[a("b-select",{attrs:{placeholder:"Select",rounded:""},model:{value:e.Noimages,callback:function(t){e.Noimages=t},expression:"Noimages"}},[a("option",[e._v("10")]),a("option",[e._v("20")]),a("option",[e._v("30")])])],1),a("b-field",{staticClass:"positionme",attrs:{label:"   Orientation"}},[a("b-select",{attrs:{placeholder:"Select",rounded:""},model:{value:e.selection,callback:function(t){e.selection=t},expression:"selection"}},[a("option",[e._v("vertical")]),a("option",[e._v("horizontal")]),a("option",[e._v("all")])])],1),a("b-field",{staticClass:"positionme",attrs:{label:"category"}},[a("b-select",{attrs:{placeholder:"Select",rounded:""},model:{value:e.category,callback:function(t){e.category=t},expression:"category"}},[a("option",[e._v("backgrounds")]),a("option",[e._v("fashion")]),a("option",[e._v("nature")]),a("option",[e._v("science")]),a("option",[e._v("education")]),a("option",[e._v("health")]),a("option",[e._v("people")]),a("option",[e._v("religion")]),a("option",[e._v("places")]),a("option",[e._v("animals")]),a("option",[e._v("industry")]),a("option",[e._v("computer")]),a("option",[e._v("food")]),a("option",[e._v("sports")]),a("option",[e._v("transportation")]),a("option",[e._v("travel")])])],1),a("b-field",{staticClass:"positionme",attrs:{label:" Order"}},[a("b-select",{attrs:{placeholder:"Select",rounded:""},model:{value:e.order,callback:function(t){e.order=t},expression:"order"}},[a("option",[e._v("Popular")]),a("option",[e._v("Latest")])])],1)],1),a("br"),e.resultfound?a("span",{staticClass:"allignme"},[e._v("Search Results for "),a("span",[e._v(e._s(this.resultname))]),e._v("..")]):e._e(),a("br"),a("br"),a("div",{staticStyle:{background:"#f6f5fa"}},[a("section",{staticClass:"columns is-multiline"},e._l(e.images,(function(e){return a("figure",{key:e.id,staticClass:"column is-one-third"},[a("img",{attrs:{src:""+e.webformatURL}})])})),0)])])},D=[],G={data:function(){return{searchText:"",previousText:this.$route.params.message,apiUrl:"https://pixabay.com/api/",apiKey:"23294204-5ba3b34b4c9aaa6b3bef520eb",images:[],resultfound:!1,resultname:"",Noimages:"20",selection:"all",order:"Popular",selectedimage:[],status:!1,category:"",iscategory:!1}},created:function(){var e=this;return Object(C["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,q.a.get("".concat(e.apiUrl,"/?key=").concat(e.apiKey,"&q=").concat(e.previousText,"&image_type=vector&per_page=30&safesearch=true"));case 3:a=t.sent,e.images=a.data.hits,e.resultfound=!e.resultfound,e.resultname=e.previousText,console.log(e.images),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))()},methods:{request:function(){var e=this;return Object(C["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,q.a.get("".concat(e.apiUrl,"/?key=").concat(e.apiKey,"&q=").concat(e.searchText,"&image_type=vector&per_page=").concat(e.Noimages,"&orientation=").concat(e.selection,"&order=").concat(e.order,"safesearch=true"));case 3:a=t.sent,e.images=a.data.hits,console.log(e.images),e.resultname=e.searchText,t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()},imageModal:function(e){console.log(e),console.log(this.selectedimage);var t=this.$createElement,a=t("p",{class:"modalimage"},[t("img",{attrs:{src:e}})]);this.$buefy.modal.open({content:[a]})},createdbyme:function(){var e=this;return Object(C["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,q.a.get("".concat(e.apiUrl,"/?key=").concat(e.apiKey,"&q=").concat(e.previousText,"&image_type=vector&per_page=").concat(e.Noimages,"&orientation=").concat(e.selection,"&order=").concat(e.order,"safesearch=true"));case 3:a=t.sent,e.images=a.data.hits,e.resultfound=!0,e.resultname=e.previousText,console.log(e.images),e.iscategory=!1,t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](0),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))()},categoryrequest:function(){var e=this;return Object(C["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,q.a.get("".concat(e.apiUrl,"/?key=").concat(e.apiKey,"&category=").concat(e.category,"&image_type=vector&per_page=").concat(e.Noimages,"&orientation=").concat(e.selection,"&order=").concat(e.order,"safesearch=true"));case 3:a=t.sent,e.images=a.data.hits,e.resultfound=!0,e.resultname=e.category,console.log(e.images),e.iscategory=!0,t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](0),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))()}},watch:{selection:function(){1==this.iscategory?this.categoryrequest():null!==this.searchText?this.createdbyme():this.request()},order:function(){1==this.iscategory?this.categoryrequest():null!==this.searchText?this.createdbyme():this.request()},Noimages:function(){1==this.iscategory?this.categoryrequest():null!==this.searchText?this.createdbyme():this.request()},category:function(){this.categoryrequest()}}},K=G,L=(a("f184"),Object(i["a"])(K,B,D,!1,null,"6e64ed4a",null)),V=L.exports;r["a"].use(g["a"]);var A=[{path:"/",name:"Home",component:w},{path:"/gallery",name:"gallery",component:M},{path:"/vector",name:"vectorhome",component:H},{path:"/vectorgallery",name:"vectorgallery",component:V},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],W=new g["a"]({mode:"history",base:"/dmrjpg/",routes:A}),Y=W,I=a("2f62");r["a"].use(I["a"]);var J=new I["a"].Store({state:{},mutations:{},actions:{},modules:{}}),z=a("289d");a("5abe"),a("7051");r["a"].use(z["a"]),r["a"].config.productionTip=!1,new r["a"]({router:Y,store:J,render:function(e){return e(d)}}).$mount("#app")},"5dd6":function(e,t,a){"use strict";a("1a85")},"646a":function(e,t,a){"use strict";a("29cf")},cf05:function(e,t,a){e.exports=a.p+"img/logo.3390ef3b.png"},ee1e:function(e,t,a){},f184:function(e,t,a){"use strict";a("0bc5")},f437:function(e,t,a){"use strict";a("4040")}});
//# sourceMappingURL=app.1c516dce.js.map