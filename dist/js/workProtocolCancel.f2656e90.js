(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["workProtocolCancel"],{"08c8":function(t,e,a){"use strict";var n=a("a5d4"),c=a.n(n);c.a},"3e74":function(t,e,a){},"49f7":function(t,e,a){"use strict";var n=a("3e74"),c=a.n(n);c.a},"683c":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"workProtocolCancel"},[a("back-button"),a("van-nav-bar",{attrs:{title:"三方协议撤销","left-text":"返回","right-text":" ","left-arrow":"",fixed:""},on:{"click-left":t.onClickLeft}}),a("div",{staticClass:"top"},[a("van-cell-group",[a("van-cell",{attrs:{title:"姓名",border:"",required:""},model:{value:t.person,callback:function(e){t.person=e},expression:"person"}}),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.cancelForm.backResult,expression:"cancelForm.backResult"}],attrs:{name:"reason",resize:"",placeholder:"请填写撤销理由"},domProps:{value:t.cancelForm.backResult},on:{input:function(e){e.target.composing||t.$set(t.cancelForm,"backResult",e.target.value)}}})],1),a("div",{staticClass:"top"},[a("van-cell",{attrs:{value:"添加图片"}}),a("upload-img",{on:{imgData:t.imgData}})],1)],1),a("div",{staticClass:"btn-group"},[a("van-button",{staticClass:"btn blue",attrs:{round:"",size:"large"},on:{click:t.submit}},[t._v("提交")])],1)],1)},c=[],o=(a("ac6a"),a("f3e2"),a("96cf"),a("cb0c")),r=a("9395"),s=a("a976"),i=a("c583"),u=a("2f62"),l=a("1c41"),f={name:"workProtocolCancel",data:function(){return{person:"",cancelForm:{backResult:"",diagram:""}}},components:{backButton:s["a"],uploadImg:i["a"]},computed:Object(r["a"])({},Object(u["b"])("system",["userInfo"])),mounted:function(){this.person=this.userInfo.userName},methods:{onClickLeft:function(){this.$router.go(-1)},updateRevoke:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(l["e"])(this.cancelForm);case 2:e=t.sent,e.httpCode,this.$route.go(-1);case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),imgData:function(t){var e=this;t.filePrikeys.forEach(function(t){e.cancelForm.diagram=t.filePath})},submit:function(){""!==this.cancelForm.backResult?""!==this.cancelForm.diagram?this.updateRevoke():this.$toast("请上传解除劳动关系照片!"):this.$toast("请填写撤销理由!")}}},p=f,m=(a("08c8"),a("2877")),b=Object(m["a"])(p,n,c,!1,null,"526f9fdd",null);b.options.__file="workProtocolCancel.vue";e["default"]=b.exports},a5d4:function(t,e,a){},a976:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.back?a("div",{staticClass:"back",on:{click:function(e){t.goBack()}}},[a("van-icon",{attrs:{name:"arrow-left"}}),a("span",[t._v("返回")])],1):t._e()},c=[],o={name:"back-button",data:function(){return{back:!1,appJSObject:window.AppJSObject}},methods:{goBack:function(){this.appJSObject.go_app("back")}},mounted:function(){}},r=o,s=(a("49f7"),a("2877")),i=Object(s["a"])(r,n,c,!1,null,"7bf55662",null);i.options.__file="backButton.vue";e["a"]=i.exports}}]);
//# sourceMappingURL=workProtocolCancel.f2656e90.js.map