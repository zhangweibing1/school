(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["apartmentSafety"],{"6acc":function(t,e,o){"use strict";o.r(e);var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"apartmentSafety"},[o("van-nav-bar",{attrs:{title:"安全检查","left-text":"返回","right-text":" ","left-arrow":"",fixed:""},on:{"click-left":t.onClickLeft}}),o("div",{staticClass:"top"},[o("van-cell-group",[o("van-cell",{attrs:{title:"校区","is-link":"",border:"",required:""},on:{click:function(e){t.campus=!0}},model:{value:t.sCampus,callback:function(e){t.sCampus=e},expression:"sCampus"}}),o("van-popup",{attrs:{position:"bottom"},model:{value:t.campus,callback:function(e){t.campus=e},expression:"campus"}},[o("van-picker",{attrs:{"show-toolbar":"",title:"校区",columns:t.campusList},on:{confirm:t.selectCampus,cancel:function(e){t.campus=!1}}})],1),o("van-cell",{attrs:{title:"公寓","is-link":"",border:"",required:""},on:{click:function(e){t.apartment=!0}},model:{value:t.sApartment,callback:function(e){t.sApartment=e},expression:"sApartment"}}),o("van-popup",{attrs:{position:"bottom"},model:{value:t.apartment,callback:function(e){t.apartment=e},expression:"apartment"}},[o("van-picker",{attrs:{"show-toolbar":"",title:"公寓",columns:t.apartmentList},on:{confirm:t.selectApartment,cancel:function(e){t.apartment=!1}}})],1),o("van-cell",{attrs:{title:"楼层","is-link":"",border:"",required:""},on:{click:function(e){t.floor=!0}},model:{value:t.sFloor,callback:function(e){t.sFloor=e},expression:"sFloor"}}),o("van-popup",{attrs:{position:"bottom"},model:{value:t.floor,callback:function(e){t.floor=e},expression:"floor"}},[o("van-picker",{attrs:{"show-toolbar":"",title:"楼层",columns:t.floorList},on:{confirm:t.selectFloor,cancel:function(e){t.floor=!1}}})],1),o("van-cell",{attrs:{title:"宿舍","is-link":"",border:"",required:""},on:{click:function(e){t.dorm=!0}},model:{value:t.sDorm,callback:function(e){t.sDorm=e},expression:"sDorm"}}),o("van-popup",{attrs:{position:"bottom"},model:{value:t.dorm,callback:function(e){t.dorm=e},expression:"dorm"}},[o("van-picker",{attrs:{"show-toolbar":"",title:"宿舍",columns:t.dormList},on:{confirm:t.selectDorm,cancel:function(e){t.dorm=!1}}})],1),o("van-cell",{attrs:{title:"违规对象","is-link":"",border:"",required:""},on:{click:function(e){t.vobj=!0}},model:{value:t.sVobj,callback:function(e){t.sVobj=e},expression:"sVobj"}}),o("van-popup",{attrs:{position:"bottom"},model:{value:t.vobj,callback:function(e){t.vobj=e},expression:"vobj"}},[o("van-picker",{attrs:{"show-toolbar":"",title:"违规对象",columns:t.vobjList},on:{confirm:t.selectVobj,cancel:function(e){t.vobj=!1}}})],1),t.objPerson?o("van-cell",{attrs:{title:"问题人","is-link":"",border:"",required:""},on:{click:function(e){t.person=!0}},model:{value:t.sPerson,callback:function(e){t.sPerson=e},expression:"sPerson"}}):t._e(),o("van-popup",{attrs:{position:"bottom"},model:{value:t.person,callback:function(e){t.person=e},expression:"person"}},[o("van-picker",{attrs:{"show-toolbar":"",title:"问题人",columns:t.personList},on:{confirm:t.selectPerson,cancel:function(e){t.person=!1}}})],1),o("van-cell",{attrs:{title:"隐患类型","is-link":"",border:"",required:""},on:{click:function(e){t.securityType=!0}},model:{value:t.sSecurityType,callback:function(e){t.sSecurityType=e},expression:"sSecurityType"}}),o("van-popup",{attrs:{position:"bottom"},model:{value:t.securityType,callback:function(e){t.securityType=e},expression:"securityType"}},[o("van-picker",{attrs:{"show-toolbar":"",title:"隐患类型",columns:t.securityTypeList},on:{confirm:t.selectSecurityType,cancel:function(e){t.securityType=!1}}})],1),o("van-cell",{attrs:{title:"检查时间","is-link":"",border:"",required:""},on:{click:function(e){t.time=!0}},model:{value:t.sTime,callback:function(e){t.sTime=e},expression:"sTime"}}),o("van-popup",{attrs:{position:"bottom"},model:{value:t.time,callback:function(e){t.time=e},expression:"time"}},[o("van-datetime-picker",{attrs:{"show-toolbar":"",type:"datetime","min-date":t.minDate},on:{confirm:t.confirm,cancel:function(e){t.time=!1}}})],1),o("van-cell",{attrs:{value:"添加图片"}}),o("upload-img",{on:{imgData:t.imgData}})],1)],1),o("div",{staticClass:"btn-group"},[o("van-button",{staticClass:"btn blue",attrs:{round:"",size:"large"},on:{click:t.submitVisitor}},[t._v("提交")])],1)],1)},s=[],r=(o("7f7f"),o("ac6a"),o("f3e2"),o("96cf"),o("cb0c")),a=o("a302"),n=o("c583"),c={name:"apartmentSafety",data:function(){return{sCampus:"请选择",sApartment:"请选择",sFloor:"请选择",sDorm:"请选择",sPerson:"请选择",sSecurityType:"请选择",sTime:"请选择",sVobj:"请选择",campus:!1,apartment:!1,floor:!1,dorm:!1,vobj:!1,person:!1,securityType:!1,objPerson:!1,time:!1,minDate:new Date,campusData:[],apartmentData:[],floorData:[],dormData:[],vobjData:[{objCode:"1",objText:"宿舍"},{objCode:"2",objText:"学生"}],personData:[],securityTypeData:[],campusList:[],apartmentList:[],floorList:[],dormList:[],personList:[],securityTypeList:[],vobjList:["宿舍","学生"],schoolId:"",buildingId:"",floorId:"",roomId:"",illegalCode:"",securityData:{schoolId:"",schoolName:"",buildId:"",buildName:"",floolId:"",floolName:"",roomId:"",roomName:"",objCode:"",objText:"",bedCode:"",stuId:"",stuName:"",illegalCode:"",illegalText:"",checkTime:"",photo:"",userSexCode:"",userSexText:""},photoList:[]}},components:{uploadImg:n["a"]},methods:{onClickLeft:function(){this.$router.go(-1)},confirm:function(t){this.time=!1,this.sTime=t.toLocaleString("chinese",{hour12:!1})},getCampus:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var e,o,i=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(a["b"])();case 2:e=t.sent,o=e.data,this.campusData=o,this.campusData.forEach(function(t){i.campusList.push(t.xXMC)});case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),selectCampus:function(t){var e=this;this.campus=!1,this.sCampus=t,this.sApartment="请选择",this.sFloor="请选择",this.sDorm="请选择",this.sPerson="请选择",this.sSecurityType="请选择",this.apartmentList=[],this.floorList=[],this.dormList=[],this.personList=[],this.securityTypeList=[],this.campusData.forEach(function(o){o.xXMC===t&&(e.schoolId=o.id,e.securityData.schoolId=o.id,e.securityData.schoolName=t)}),this.getApartment()},getApartment:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var e,o,i=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(a["h"])(this.schoolId);case 2:e=t.sent,o=e.data,this.apartmentData=o,this.apartmentData.forEach(function(t){i.apartmentList.push(t.mC)});case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),selectApartment:function(t){var e=this;this.apartment=!1,this.sApartment=t,this.sFloor="请选择",this.sDorm="请选择",this.sPerson="请选择",this.sSecurityType="请选择",this.floorList=[],this.dormList=[],this.personList=[],this.securityTypeList=[],this.apartmentData.forEach(function(o){o.mC===t&&(e.buildingId=o.id,e.securityData.buildId=e.buildingId,e.securityData.buildName=t,e.securityData.userSexCode=o.uses,e.securityData.userSexText=o.usesText)}),this.getFloor()},getFloor:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var e,o,i=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(a["a"])(this.buildingId);case 2:e=t.sent,o=e.data,this.floorData=o,this.floorData.forEach(function(t){i.floorList.push(t.name)});case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),selectFloor:function(t){var e=this;this.floor=!1,this.sFloor=t,this.sDorm="请选择",this.sPerson="请选择",this.sSecurityType="请选择",this.dormList=[],this.personList=[],this.securityTypeList=[],this.floorData.forEach(function(o){o.name===t&&(e.floorId=o.id,e.securityData.floolId=e.floorId,e.securityData.floolName=t)}),this.getDorm()},getDorm:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var e,o,i=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(a["c"])(this.floorId);case 2:e=t.sent,o=e.data,this.dormData=o,this.dormData.forEach(function(t){i.dormList.push(t.name)});case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),selectDorm:function(t){var e=this;this.dorm=!1,this.sDorm=t,this.sPerson="请选择",this.sSecurityType="请选择",this.personList=[],this.securityTypeList=[],this.dormData.forEach(function(o){o.name===t&&(e.roomId=o.id,e.securityData.roomId=e.roomId,e.securityData.roomName=t)})},selectVobj:function(t){var e=this;this.vobj=!1,this.sVobj=t,this.sPerson="请选择",this.personList=[],this.securityTypeList=[],this.vobjData.forEach(function(o){o.objText===t&&(e.securityData.objCode=o.objCode,e.securityData.objText=t)}),"宿舍"===t?this.objPerson=!1:"学生"===t&&(this.objPerson=!0,this.getPerson())},getPerson:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var e,o,i=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(a["i"])(this.roomId);case 2:e=t.sent,o=e.data,this.personData=o,this.personData.forEach(function(t){i.personList.push(t.userName)});case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),selectPerson:function(t){var e=this;this.person=!1,this.sPerson=t,this.sSecurityType="请选择",this.securityTypeList=[],this.personData.forEach(function(o){o.userName===t&&(e.stuId=o.userId,e.securityData.bedCode=o.bedCode,e.securityData.stuId=e.stuId,e.securityData.stuName=t)}),this.getSecurityType()},getSecurityType:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var e,o,i=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(a["d"])();case 2:e=t.sent,o=e.data,this.securityTypeData=o,this.securityTypeData.forEach(function(t){i.securityTypeList.push(t.codeText)});case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),selectSecurityType:function(t){var e=this;this.securityType=!1,this.sSecurityType=t,this.securityTypeData.forEach(function(o){o.codeText===t&&(e.illegalCode=o.code,e.securityData.illegalCode=e.illegalCode,e.securityData.illegalText=t)})},postSecurity:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return console.log(this.securityData),t.next=3,Object(a["g"])(this.securityData);case 3:e=t.sent,console.log(e),e.httpCode,this.$toast.success("提交成功！"),this.$router.go(-1);case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),imgData:function(t){var e=this;t.filePrikeys.forEach(function(t){e.photoList.push(t.filePath)})},submitVisitor:function(){this.securityData.checkTime=this.sTime,this.securityData.photo=this.photoList.join(","),""!==this.securityData.schoolName?""!==this.securityData.buildName?""!==this.securityData.floolName?""!==this.securityData.roomName?""!==this.securityData.stuName?""!==this.securityData.objText?""!==this.securityData.illegalText?""!==this.securityData.checkTime?this.postSecurity():this.$toast("请选择检查时间！"):this.$toast("请选择隐患类型！"):this.$toast("请选择违规对象！"):this.$toast("请选择问题人！"):this.$toast("请选择宿舍！"):this.$toast("请选择楼层！"):this.$toast("请选择公寓楼！"):this.$toast("请选择校区！")}},mounted:function(){this.getCampus()}},u=c,l=(o("ea9a"),o("2877")),p=Object(l["a"])(u,i,s,!1,null,"a513a18c",null);p.options.__file="apartmentSafety.vue";e["default"]=p.exports},a302:function(t,e,o){"use strict";o.d(e,"b",function(){return s}),o.d(e,"h",function(){return r}),o.d(e,"a",function(){return a}),o.d(e,"c",function(){return n}),o.d(e,"i",function(){return c}),o.d(e,"e",function(){return u}),o.d(e,"d",function(){return l}),o.d(e,"g",function(){return p}),o.d(e,"f",function(){return m});var i=o("b775");function s(){return Object(i["a"])({method:"put",url:"/api/mobileSchoolInfo/read/getCurrSchoolInfoList",data:{}})}function r(t){return Object(i["a"])({method:"put",url:"/api/schoolBuilding/read/selectGongYuBuild",data:{schoolId:t}})}function a(t){return Object(i["a"])({method:"put",url:"/api/mobileSchoolFloor/read/asynchronousLoadingFloor",data:{buildingId:t}})}function n(t){return Object(i["a"])({method:"put",url:"/api/mobileSchoolRoom/read/asynchronousLoadingRoom",data:{floorId:t}})}function c(t){return Object(i["a"])({method:"put",url:"/api/mobileNDormBedinfoController/read/selectList",data:{roomId:t}})}function u(t){return Object(i["a"])({method:"post",url:"/api/mobileDormVisitController",data:t})}function l(){return Object(i["a"])({method:"put",url:"/api/mobileDic/read/dic",data:{type:"SSYHLX"}})}function p(t){return Object(i["a"])({method:"post",url:"/api/mobileDormSecurityCheck",data:t})}function m(t){return Object(i["a"])({method:"put",url:"/api/mobileJiGuangController/save/getUserId",data:t})}},b2ff:function(t,e,o){},ea9a:function(t,e,o){"use strict";var i=o("b2ff"),s=o.n(i);s.a}}]);
//# sourceMappingURL=apartmentSafety.7c296707.js.map