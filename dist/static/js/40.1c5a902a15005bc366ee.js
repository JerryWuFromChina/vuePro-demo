webpackJsonp([40,73],{75:function(t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={data:function(){return{knowShow:!1}}}},215:function(t,n,e){var o,r;o=e(75);var a=e(297);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(r=o=o.default),"function"==typeof r&&(r=r.options),r.render=a.render,r.staticRenderFns=a.staticRenderFns,t.exports=o},297:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement;return n("div",{staticClass:"container"},[n("topComponent",{attrs:{title:"借款详情"}},[n("span",{staticClass:"save",on:{click:function(n){t.$router.push("/user/repayRecord")}},slot:"right"},["还款记录"])])," ",n("div",{staticClass:"borrowInfoDetail"},[n("p",["收款银行卡",n("i",{staticClass:"queryIcon",on:{click:function(n){t.alertKnow("skyhk")}}},["?"]),n("span",["562365411956231256"])])," ",t._m(0)," ",t._m(1)," ",t._m(2)," ",t._m(3)])," ",t.knowShow?n("alertKnow",{attrs:{title:t.knowTit,content:t.knowCon},on:{goHide:function(n){t.knowShow=!t.knowShow}}}):t._e()])},staticRenderFns:[function(){var t=this,n=t.$createElement;return n("p",["开户行省市 ",n("span",["浙江省杭州市"])])},function(){var t=this,n=t.$createElement;return n("p",["开户行",n("span",["建设银行"])])},function(){var t=this,n=t.$createElement;return n("p",["开户行支行",n("span",["萍水西街支行萍水西街支行萍水西街支行萍水西街支行"])])},function(){var t=this,n=t.$createElement;return n("p",["保证金(元)",n("span",["200"])])}]}}});