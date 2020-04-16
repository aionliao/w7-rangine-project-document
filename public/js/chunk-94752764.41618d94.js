(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-94752764"],{"1a4c":function(t,e,i){},"7f7f":function(t,e,i){var n=i("86cc").f,l=Function.prototype,a=/^\s*function ([^ (]*)/,o="name";o in l||i("9e1e")&&n(l,o,{configurable:!0,get:function(){try{return(""+this).match(a)[1]}catch(t){return""}}})},b49c:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"setting-login"},[i("div",{staticClass:"page-head"},[t._v("登录设置")]),i("div",{staticClass:"we7-panel-form"},[i("div",{staticClass:"we7-panel-form__header"},[t._v("登录方式设置")]),i("div",{staticClass:"we7-panel-form__body"},[i("div",{staticClass:"we7-panel-form__item"},[i("div",{staticClass:"we7-panel-form__label"},[t._v("登录方式")]),i("div",{staticClass:"we7-panel-form__value"},[1==t.loginMethod?[t._v("\n              依赖第三方登录："+t._s(t.default_login_name)+"\n            ")]:[t._v("\n              文档系统登录："+t._s("1"==t.is_need_bind?"第三方登录时需绑定用户自己创建的已有账号":"第三方登录时系统自动创建一个账号对应")+"\n            ")]],2),i("div",{staticClass:"we7-panel-form__action"},[i("el-tooltip",{attrs:{effect:"dark",content:"编辑",placement:"bottom"}},[i("i",{staticClass:"wi wi-edit wi-oper",on:{click:function(e){t.dialogVisible=!0}}})])],1)])])]),i("el-dialog",{staticClass:"w7-dialog",attrs:{title:"登录方式设置",visible:t.dialogVisible,"close-on-click-modal":!1,center:""},on:{"update:visible":function(e){t.dialogVisible=e}}},[i("el-form",{attrs:{"label-width":"120px","label-position":"left"}},[i("el-form-item",{attrs:{label:"登录方式"}},[i("el-radio-group",{on:{change:t.change},model:{value:t.loginMethod,callback:function(e){t.loginMethod=e},expression:"loginMethod"}},[i("el-radio",{attrs:{label:0}},[t._v("文档系统登录")]),i("el-radio",{attrs:{label:1}},[t._v("依赖第三方登录")])],1),i("div",{staticClass:"we7-help-block"},[t._v("文档系统登录：登录时通过文档系统登录页面进行登录；依赖第三方登录：用户登录时跳转至第三方登录页面登录。")])],1),0==t.loginMethod?i("el-form-item",{attrs:{label:"第三方登录设置"}},[i("el-select",{attrs:{placeholder:"请选择"},model:{value:t.is_need_bind,callback:function(e){t.is_need_bind=e},expression:"is_need_bind"}},[i("el-option",{attrs:{label:"第三方登录时需绑定用户自己创建的已有账号",value:"1"}}),i("el-option",{attrs:{label:"第三方登录时系统自动创建一个账号对应",value:"0"}})],1)],1):t._e(),1==t.loginMethod?i("el-form-item",{attrs:{label:"选择第三方"}},[i("el-select",{attrs:{placeholder:"请选择","no-data-text":"暂无第三方配置"},model:{value:t.default_login_channel,callback:function(e){t.default_login_channel=e},expression:"default_login_channel"}},t._l(t.thirdParty,function(t){return i("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}),1),t.thirdParty.length?i("div",{staticClass:"we7-help-block"},[t._v("用户使用该第三方登录时，系统将随机创建一个账号与该第三方账号绑定，用户可在账号信息中查看或修改。")]):i("el-button",{staticClass:"textBtn",attrs:{type:"text"},on:{click:t.goto}},[t._v("去配置第三方登录")])],1):t._e()],1),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary"},on:{click:t.confirmBtn}},[t._v("确 定")]),i("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")])],1)],1)],1)},l=[],a=(i("7f7f"),{data:function(){return{dialogVisible:!1,loginMethod:0,is_need_bind:"0",default_login_channel:"",default_login_name:"",thirdParty:[],thirdPartyFisrtId:""}},created:function(){this.init(),this.getThirdParty()},methods:{init:function(){var t=this;this.$post("/admin/third-party-login/get-default-channel").then(function(e){e&&(e.default_login_channel?(t.loginMethod=1,t.default_login_channel=e.default_login_channel):t.is_need_bind=e.is_need_bind?"1":"0")})},getThirdParty:function(){var t=this;this.$post("/admin/third-party-login/all").then(function(e){for(var i in t.thirdParty=[],e)0==i&&(t.thirdPartyFisrtId=e[i].id),t.default_login_channel==e[i].id&&(t.default_login_name=e[i].name),e[i].enable&&(t.thirdParty.push({id:e[i].id+"",name:e[i].name}),t.default_login_channel||(t.default_login_channel=e[i].id+""))})},change:function(t){1!=t||this.thirdParty.length||this.getThirdParty()},goto:function(){var t=this.$router.resolve({path:"/admin/setting/third-party?id="+this.thirdPartyFisrtId});window.open(t.href,"_blank")},confirmBtn:function(){var t=this,e={};e=0==this.loginMethod?{is_need_bind:this.is_need_bind}:{default_login_channel:this.default_login_channel},this.$post("/admin/third-party-login/set-default-channel",e).then(function(){t.$message("修改成功！"),t.dialogVisible=!1})}}}),o=a,s=(i("fc08"),i("2877")),d=Object(s["a"])(o,n,l,!1,null,null,null);e["default"]=d.exports},fc08:function(t,e,i){"use strict";var n=i("1a4c"),l=i.n(n);l.a}}]);
//# sourceMappingURL=chunk-94752764.41618d94.js.map