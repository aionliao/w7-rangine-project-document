(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-99103508"],{"0dd8":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"setting-store"},[a("div",{staticClass:"page-head"},[t._v("腾讯云存储")]),a("el-form",{ref:"form",staticClass:"we7-panel-form",class:{edit:t.editStatus},attrs:{model:t.formData,rules:t.rules,"label-position":"left","label-width":"120px"}},[a("div",{staticClass:"we7-panel-form__header"},[t._v("腾讯云存储")]),a("div",{staticClass:"we7-panel-form__body"},[a("el-form-item",{attrs:{label:"APPID",prop:"app_id"}},[t.editStatus?a("el-input",{attrs:{placeholder:"APPID 是您项目的唯一ID"},model:{value:t.formData.app_id,callback:function(e){t.$set(t.formData,"app_id",e)},expression:"formData.app_id"}}):a("span",[t._v(t._s(t.formData.app_id))])],1),a("el-form-item",{attrs:{label:"SecretID",prop:"secret_id"}},[t.editStatus?a("el-input",{attrs:{placeholder:"SecretID 是您项目的安全密钥，具有该账户完全的权限，请妥善保管"},model:{value:t.formData.secret_id,callback:function(e){t.$set(t.formData,"secret_id",e)},expression:"formData.secret_id"}}):a("span",[t._v(t._s(t.formData.secret_id))])],1),a("el-form-item",{attrs:{label:"SecretKEY",prop:"secret_key"}},[t.editStatus?a("el-input",{attrs:{placeholder:"SecretKEY 是您项目的安全密钥，具有该账户完全的权限，请妥善保管"},model:{value:t.formData.secret_key,callback:function(e){t.$set(t.formData,"secret_key",e)},expression:"formData.secret_key"}}):a("span",[t._v(t._s(t.formData.secret_key))])],1),a("el-form-item",{attrs:{label:"Bucket",prop:"bucket"}},[t.editStatus?a("el-input",{attrs:{placeholder:"请保证bucket为可公共读取的"},model:{value:t.formData.bucket,callback:function(e){t.$set(t.formData,"bucket",e)},expression:"formData.bucket"}}):a("span",[t._v(t._s(t.formData.bucket))])],1),a("el-form-item",{attrs:{label:"所属地域",prop:"region"}},[t.editStatus?a("el-select",{attrs:{placeholder:"所属地域"},model:{value:t.formData.region,callback:function(e){t.$set(t.formData,"region",e)},expression:"formData.region"}},t._l(t.regionList,function(t,e){return a("el-option",{key:e,attrs:{value:e,label:t}})}),1):a("span",[t._v(t._s(t.regionList[t.formData.region]))])],1),a("el-form-item",{attrs:{label:"Url",prop:"url"}},[t.editStatus?a("el-input",{attrs:{placeholder:"腾讯云支持用户自定义访问域名。注：url结尾不加 ‘/’例：http://abc.com"},model:{value:t.formData.url,callback:function(e){t.$set(t.formData,"url",e)},expression:"formData.url"}}):a("span",[t._v(t._s(t.formData.url))]),t.formData.url?t._e():a("div",{},[t._v("\n          不填写则使用默认的地址"),t.formData.app_id&&t.formData.region&&t.formData.bucket?a("span",[t._v(t._s(t.formData.bucket+"-"+t.formData.app_id+".cos."+t.formData.region+".myqcloud.com"))]):t._e()])],1),a("el-form-item",{attrs:{label:"保存目录",prop:"path"}},[t.editStatus?a("el-input",{attrs:{placeholder:"指定保存目录后，上传图片后会在COS中新建相应的目录，保存图片方便管理"},model:{value:t.formData.path,callback:function(e){t.$set(t.formData,"path",e)},expression:"formData.path"}}):a("span",[t._v(t._s(t.formData.path))])],1)],1)]),t.editStatus?t._e():a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.editStatus=!0}}},[t._v("编辑")]),t.editStatus?[a("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("保存")]),a("el-button",{on:{click:function(e){t.editStatus=!1}}},[t._v("取消")])]:t._e()],2)},o=[],s={data:function(){return{editStatus:!1,formData:{key:"cloud_cosv5",app_id:"",secret_id:"",secret_key:"",bucket:"",region:"",url:"",path:""},regionList:{"ap-beijing-1":"北京一区","ap-beijing":"北京","ap-shanghai":"上海（华东）","ap-guangzhou":"广州（华南)","ap-chengdu":"成都（西南）","ap-chongqing":"重庆","ap-shenzhen-fsi":"深圳金融","ap-shanghai-fsi":"深圳金融","ap-beijing-fsi":"北京金融","ap-hongkong":"中国香港","ap-singapore":"新加坡","ap-mumbai":"孟买","ap-seoul":"首尔","ap-bangkok":"曼谷","ap-tokyo":"东京","na-siliconvalley":"硅谷","na-ashburn":"弗吉尼亚","na-toronto":"多伦多","eu-frankfurt":"法兰克福","eu-moscow":"莫斯科"},rules:{app_id:[{required:!0,message:"请输入APPID",trigger:"blur"}],secret_id:[{required:!0,message:"请输入SecretID",trigger:"blur"}],secret_key:[{required:!0,message:"请输入SecretKEY",trigger:"blur"}],bucket:[{required:!0,message:"请输入Bucket",trigger:"blur"}],region:[{required:!0,message:"请输入Bucket所属地域",trigger:"blur"}]}}},created:function(){this.init()},methods:{init:function(){var t=this;this.$post("/admin/setting/cos",{}).then(function(e){t.formData=Object.assign(t.formData,e.data.setting),t.formData.key=e.data.key}).catch(function(){})},onSubmit:function(){var t=this;this.$refs["form"].validate(function(e){if(!e)return!1;t.$post("/admin/setting/save",{key:"cloud_cosv5",setting:t.formData}).then(function(){t.$message("保存成功！")})})}}},i=s,n=(a("8687"),a("2877")),l=Object(n["a"])(i,r,o,!1,null,null,null);e["default"]=l.exports},6031:function(t,e,a){},8687:function(t,e,a){"use strict";var r=a("6031"),o=a.n(r);o.a}}]);
//# sourceMappingURL=chunk-99103508.0f16feaf.js.map