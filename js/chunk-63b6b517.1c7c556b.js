(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-63b6b517"],{"55dd":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cont"},[n("div",{staticClass:"handle"},[n("div",{staticClass:"ret"}),n("div",{staticClass:"deal"},[n("Button",{on:{click:t.returnprev}},[t._v("返回上个界面")])],1)]),n("div",{staticClass:"blog"},[n("div",{staticClass:"title"},[n("span",{directives:[{name:"show",rawName:"v-show",value:t.orchTitle,expression:"orchTitle"}]},[t._v(t._s(t.blog.name))]),t._v(t._s(t.newtitle))]),n("div",[n("span",[t._v("修改标题：")]),n("Input",{staticStyle:{width:"300px","margin-top":"10px","margin-bottom":"10px"},attrs:{placeholder:""},on:{"on-blur":t.ctitle},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),n("div",[n("span",[t._v("修改日期:  ")]),t.showtime?n("span",{on:{click:t.changetime}},[n("span",{directives:[{name:"show",rawName:"v-show",value:t.orch,expression:"orch"}]},[t._v(t._s(t.blog.time))]),t._v(t._s(t.newtime))]):n("span",[n("DatePicker",{staticStyle:{width:"200px"},attrs:{type:"date",placeholder:"Select date",format:"yyyy-MM-dd"},on:{"on-change":t.ctime}})],1)]),n("div",{staticClass:"show-cont"},[n("vue-simplemde",{ref:"markdownEditor",attrs:{configs:t.configs},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1)])])},o=[],s=(n("7364"),n("2bdd")),a={data:function(){return{name:"",blog:[],showtime:!0,orch:!0,orchTitle:!0,newtitle:null,newtime:null,blogcont:"wwwwwwwwwwwwwwww",content:"",configs:{spellChecker:!1}}},components:{VueSimplemde:s["a"]},methods:{ctitle:function(){this.orchTitle=!1,this.newtitle=this.name,this.$Notice.info({title:"Notification title",desc:name?"":"博客标题已经被修改<br>当前标题为"+this.name})},changetime:function(){this.showtime=!1},ctime:function(t){this.showtime=!0,this.orch=!1,this.newtime=t,console.log(t),this.$Notice.info({title:"Notification title",desc:"最后发布时间已经被修改<br>当前发布时间为"+this.name})},returnprev:function(){this.$router.push({path:"/blog/edit"})}},mounted:function(){var t=this;this.blog=this.$route.query.blogdata,this.$http.get("/get_cont").then(function(e){t.content=e.data.cont})}},c=a,l=(n("7dd4"),n("6691")),r=Object(l["a"])(c,i,o,!1,null,null,null);e["default"]=r.exports},"7dd4":function(t,e,n){"use strict";var i=n("977d"),o=n.n(i);o.a},"977d":function(t,e,n){}}]);