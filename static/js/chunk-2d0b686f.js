(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b686f"],{"1e16":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"app-component-column",attrs:{id:"text-page"}},[s("mu-dialog",{attrs:{width:"80%",open:t.open,"esc-press-close":!1,"overlay-close":!1},on:{"update:open":function(e){t.open=e}}},[s("div",{staticClass:"bottom-margin text-filter"},[s("mu-row",{staticClass:"bottom-margin",attrs:{"align-items":"center",w:""}},[s("div",{staticClass:"left-part-row"},[s("mu-text-field",{attrs:{type:"text","help-text":"текст"},on:{input:t.getPageTexts},model:{value:t.searchText,callback:function(e){t.searchText=e},expression:"searchText"}}),s("mu-text-field",{attrs:{type:"text","help-text":"url"},on:{input:t.getPageTexts},model:{value:t.searchUrl,callback:function(e){t.searchUrl=e},expression:"searchUrl"}}),s("a",{staticClass:"create",attrs:{title:"Сброс"},on:{click:t.resetFilters}},[s("span",{staticStyle:{"font-size":"17px"}},[s("font-awesome-icon",{attrs:{icon:"times-circle"}})],1)])],1),s("div",{staticClass:"right-part-row"},[s("button",{staticClass:"add-button",on:{click:function(e){return e.preventDefault(),t.addText(e)}}},[t._v("Добавить текст")]),s("a",{staticClass:"close",on:{click:function(e){return e.preventDefault(),t.close(e)}}},[s("span",{staticStyle:{"font-size":"18px"}},[s("font-awesome-icon",{attrs:{icon:"times"}})],1)])])])],1),t.listTexts?s("table",{staticClass:"text-table"},[s("thead",[s("tr",[s("th",[t._v("Язык")]),s("th",[t._v("Текст")]),s("th",[t._v("URL")]),s("th")])]),s("tbody",t._l(t.listTexts,(function(e,n){return s("tr",{key:n},[s("td",[t._v(t._s(e.lang.name))]),s("td",[t._v(t._s(e.text))]),s("td",[e.url?s("a",{staticClass:"url-link",attrs:{href:e.url,target:"_blank"}},[t._v(t._s(e.url))]):s("span",[t._v("-")])]),s("td",[s("a",{staticClass:"create",on:{click:function(s){return s.preventDefault(),t.passTextId(e.id)}}},[s("font-awesome-icon",{attrs:{icon:"pencil-alt",title:"Редактировать"}})],1),s("a",{staticClass:"create",on:{click:function(s){return s.preventDefault(),t.openDeleteModal(e.id)}}},[s("font-awesome-icon",{attrs:{icon:"trash-alt",title:"Удалить"}})],1)])])})),0)]):t._e(),t.listTexts?s("div",[t.countResult>t.limit?s("pagination",{attrs:{quantity:t.countResult,limit:t.limit,currentPage:t.page},on:{update:t.getPageTexts,setPage:t.setPage}}):t._e()],1):t._e(),t.errSearch?s("mu-row",{staticClass:"error-response",attrs:{"justify-content":"center"}},[t._v(" "+t._s(t.errSearch)+" ")]):t._e(),t.textDeleteId?s("mu-dialog",{attrs:{title:"Удалить выбранный текст?",width:"500","max-width":"80%","esc-press-close":!1,"overlay-close":!1,open:t.openDelete},on:{"update:open":function(e){t.openDelete=e}}},[t.resultDelete?s("div",[s("span",{staticClass:"orange-text"},[t._v(t._s(t.resultDelete))]),s("mu-flex",{staticClass:"flex-wrapper",attrs:{"justify-content":"end"}},[s("button",{staticClass:"del-button",on:{click:function(e){return e.preventDefault(),t.closeDeleteModal(e)}}},[t._v("Закрыть")])])],1):s("div",[s("mu-flex",{staticClass:"flex-wrapper",attrs:{"justify-content":"end"}},[s("button",{staticClass:"del-button",on:{click:function(e){return e.preventDefault(),t.closeDeleteModal(e)}}},[t._v("НЕТ")]),s("button",{staticClass:"del-button yes",on:{click:function(e){return e.preventDefault(),t.deleteText(e)}}},[t._v("ДА")])])],1)]):t._e()],1)],1)},a=[],l=(s("d3b7"),s("bc3a")),i=s.n(l),o={name:"textPageComponent",components:{pagination:function(){return s.e("chunk-b998e2be").then(s.bind(null,"6407"))}},props:{open:{type:Boolean,required:!0}},data:function(){return{listTexts:null,countResult:null,page:1,limit:5,searchText:"",searchUrl:"",errSearch:"",textDeleteId:null,openDelete:!1,resultDelete:null}},methods:{getPageTexts:function(){var t=this;this.errSearch="";var e={page:this.page,limit:this.limit,sort_by:[{name:"it.id",ascending:!0},{name:"it.object_text",ascending:!0}],filter:{text_like:this.searchText,url_like:this.searchUrl}};i.a.post("/texts",e).then((function(e){e.data.obect_texts?(t.listTexts=e.data.obect_texts,t.countResult=e.data.count):(t.listTexts=null,t.countResult=null,t.errSearch="Ничего не найдено")})).catch((function(t){console.log(t.response.data.error)}))},addText:function(){this.$emit("addText"),this.close()},passTextId:function(t){this.$emit("getText",t,!0),this.close()},close:function(){this.$emit("close")},openDeleteModal:function(t){this.textDeleteId=t,this.openDelete=!0},closeDeleteModal:function(){this.openDelete=!1,this.setInitPage(),this.getPageTexts(),this.textDeleteId=null,this.resultDelete=null},deleteText:function(){var t=this;this.textDeleteId?i.a.delete("/text?id=".concat(this.textDeleteId)).then((function(e){t.resultDelete="Выполнено успешно",t.getPageTexts()})):this.resultDelete="Ошибка при удалении :("},resetFilters:function(){this.searchText="",this.searchUrl="",this.getPageTexts()},setInitPage:function(){this.page=1},setPage:function(t){this.page=t}},mounted:function(){this.getPageTexts(),this.setInitPage()}},c=o,r=s("2877"),u=Object(r["a"])(c,n,a,!1,null,"2794ee24",null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d0b686f.js.map