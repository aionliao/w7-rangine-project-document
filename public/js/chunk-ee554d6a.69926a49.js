(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ee554d6a"],{"11bb":function(t,e,n){"use strict";var a=n("874b"),i=n.n(a);i.a},"11e9":function(t,e,n){var a=n("52a7"),i=n("4630"),r=n("6821"),s=n("6a99"),o=n("69a8"),c=n("c69a"),u=Object.getOwnPropertyDescriptor;e.f=n("9e1e")?u:function(t,e){if(t=r(t),e=s(e,!0),c)try{return u(t,e)}catch(n){}if(o(t,e))return i(!a.f.call(t,e),t[e])}},"454f":function(t,e,n){n("46a7");var a=n("584a").Object;t.exports=function(t,e,n){return a.defineProperty(t,e,n)}},"456d":function(t,e,n){var a=n("4bf8"),i=n("0d58");n("5eda")("keys",function(){return function(t){return i(a(t))}})},"46a7":function(t,e,n){var a=n("63b6");a(a.S+a.F*!n("8e60"),"Object",{defineProperty:n("d9f6").f})},"5eda":function(t,e,n){var a=n("5ca1"),i=n("8378"),r=n("79e5");t.exports=function(t,e){var n=(i.Object||{})[t]||Object[t],s={};s[t]=e(n),a(a.S+a.F*r(function(){n(1)}),"Object",s)}},"7f7f":function(t,e,n){var a=n("86cc").f,i=Function.prototype,r=/^\s*function ([^ (]*)/,s="name";s in i||n("9e1e")&&a(i,s,{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(t){return""}}})},"85f2":function(t,e,n){t.exports=n("454f")},"874b":function(t,e,n){},"8e6e":function(t,e,n){var a=n("5ca1"),i=n("990b"),r=n("6821"),s=n("11e9"),o=n("f1ae");a(a.S,"Object",{getOwnPropertyDescriptors:function(t){var e,n,a=r(t),c=s.f,u=i(a),f={},l=0;while(u.length>l)n=c(a,e=u[l++]),void 0!==n&&o(f,e,n);return f}})},9093:function(t,e,n){var a=n("ce10"),i=n("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return a(t,i)}},"990b":function(t,e,n){var a=n("9093"),i=n("2621"),r=n("cb7c"),s=n("7726").Reflect;t.exports=s&&s.ownKeys||function(t){var e=a.f(r(t)),n=i.f;return n?e.concat(n(t)):e}},ac6a:function(t,e,n){for(var a=n("cadf"),i=n("0d58"),r=n("2aba"),s=n("7726"),o=n("32e9"),c=n("84f2"),u=n("2b4c"),f=u("iterator"),l=u("toStringTag"),m=c.Array,d={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},h=i(d),g=0;g<h.length;g++){var p,v=h[g],b=d[v],w=s[v],_=w&&w.prototype;if(_&&(_[f]||o(_,f,m),_[l]||o(_,l,v),c[v]=m,b))for(p in a)_[p]||r(_,p,a[p],!0)}},bd86:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var a=n("85f2"),i=n.n(a);function r(t,e,n){return e in t?i()(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},ed3a:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-container",{staticClass:"admin-view"},[n("el-header",{class:t.NavMenu.theme},[n("router-link",{staticClass:"logo",attrs:{to:t.UserInfo.username?"/admin":""}},[n("i",{staticClass:"wi wi-wendang-logo"}),t._v("文档控制台\n    ")]),t.docName?[n("div",{staticClass:"menu-line"}),n("div",{staticClass:"menu-icon",on:{click:function(e){return t.goto("admin")}}},[n("i",{staticClass:"wi wi-shouye"})]),n("i",{staticClass:"el-icon-arrow-right"})]:t._e(),n("div",{staticClass:"menu"},[t.isRead||t.docName?!t.isRead&&t.docName?[n("span",{staticClass:"doc-name"},[t._v(t._s(t.docName))])]:t._l(t.NavMenu.list,function(e,a){return n("a",{key:a,staticClass:"item",attrs:{underline:!1,href:e.url,target:"_blank"}},[t._v("\n          "+t._s(e.name)+"\n        ")])}):[n("router-link",{staticClass:"item",attrs:{to:"/admin/document"}},[t._v("项目管理")]),t.UserInfo.acl&&t.UserInfo.acl.has_manage?n("router-link",{staticClass:"item",attrs:{to:"/admin/user"}},[t._v("用户管理")]):t._e(),t.UserInfo.acl&&t.UserInfo.acl.has_manage?n("router-link",{staticClass:"item",attrs:{to:"/admin/setting"}},[t._v("系统设置")]):t._e()]],2),t.UserInfo.username?n("div",{staticClass:"user"},[n("div",{staticClass:"username text-over",attrs:{title:t.UserInfo.username}},[t._v(t._s(t.UserInfo.username))]),n("div",{staticClass:"menu-bar",attrs:{id:"w7-nav-menu"}},[n("ul",{staticClass:"menu-ul"},[n("li",{staticClass:"menu__item",on:{click:function(e){return t.goto("accountInfo")}}},[t._v("个人中心")]),n("li",{staticClass:"menu__item",on:{click:t.exit}},[t._v("退出系统")])])])]):t._e(),t.UserInfo.username?t._e():n("router-link",{staticClass:"item",attrs:{to:"/admin/login"}},[t._v("登录")])],2),n("div",{staticClass:"admin-content"},[n("router-view")],1),n("el-footer",{staticClass:"w7-footer",class:t.$route.meta.footerClass,attrs:{height:"80px"}},[n("div",{staticClass:"footer-law"},[n("p",[t._v("Copyright © 2018 宿州市涛盛网络科技有限公司 www.w7.cc All Rights Reserved ")]),n("p",[t._v("网站备案：皖ICP备17004788号-1  增值电信业务经营许可证：皖B2-20200003  "),n("a",{attrs:{href:"http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=34130202000406",target:"_blank"}},[n("img",{attrs:{src:"//cdn.w7.cc/new/img/icon/bei.png?imageView2/5/w/14/h/14",alt:""}}),t._v("  皖公网安备 34130202000406号")]),t._v("  "),n("a",{attrs:{href:"http://www.cyberpolice.cn",target:"_blank"}},[n("img",{attrs:{src:"//cdn.w7.cc/new/img/icon/jubao.png?imageView2/5/w/14/h/14",alt:""}}),t._v("  网络违法犯罪举报网站")])])])])],1)},i=[],r=(n("8e6e"),n("ac6a"),n("456d"),n("7f7f"),n("bd86")),s=n("2f62");function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,a)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(n,!0).forEach(function(e){Object(r["a"])(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var u={name:"admin",data:function(){return{isRead:!1,docName:""}},computed:c({},Object(s["b"])(["UserInfo","NavMenu"])),watch:{$route:function(t){"homeChild"==t.name?this.isRead=!0:(this.isRead=!1,"manageSetting"==t.name||"chapter"==t.name?this.getDocName():this.docName="")}},created:function(){this.$store.dispatch("getUserInfo"),this.$store.dispatch("getNavMenu"),this.isReadFnc()},methods:{isReadFnc:function(){"homeChild"==this.$route.name&&(this.isRead=!0),"manageSetting"==this.$route.name||"chapter"==this.$route.name?this.getDocName():this.docName=""},getDocName:function(){var t=this;this.$post("/admin/chapter/detail",{document_id:this.$route.params.id}).then(function(e){t.docName=e.data.name})},goto:function(t){this.$router.push({name:t})},exit:function(){window.location.href=window.location.origin+"/common/auth/logout"}}},f=u,l=(n("11bb"),n("2877")),m=Object(l["a"])(f,a,i,!1,null,"f486912c",null);e["default"]=m.exports},f1ae:function(t,e,n){"use strict";var a=n("86cc"),i=n("4630");t.exports=function(t,e,n){e in t?a.f(t,e,i(0,n)):t[e]=n}}}]);
//# sourceMappingURL=chunk-ee554d6a.69926a49.js.map