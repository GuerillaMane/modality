(function(t){function e(e){for(var s,a,o=e[0],c=e[1],l=e[2],u=0,d=[];u<o.length;u++)a=o[u],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&d.push(r[a][0]),r[a]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);h&&h(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],s=!0,a=1;a<n.length;a++){var o=n[a];0!==r[o]&&(s=!1)}s&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var s={},a={app:0},r={app:0},i=[];function o(t){return c.p+"js/"+({"menu-item":"menu-item"}[t]||t)+".js"}function c(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-44c43dfa":1,"chunk-b998e2be":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var s="css/"+({"menu-item":"menu-item"}[t]||t)+".css",r=c.p+s,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var l=i[o],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===s||u===r))return e()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){l=d[o],u=l.getAttribute("data-href");if(u===s||u===r)return e()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=e,h.onerror=function(e){var s=e&&e.target&&e.target.src||r,i=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=s,delete a[t],h.parentNode.removeChild(h),n(i)},h.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(h)})).then((function(){a[t]=0})));var s=r[t];if(0!==s)if(s)e.push(s[2]);else{var i=new Promise((function(e,n){s=r[t]=[e,n]}));e.push(s[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=o(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(h);var n=r[t];if(0!==n){if(n){var s=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+s+": "+a+")",d.name="ChunkLoadError",d.type=s,d.request=a,n[1](d)}r[t]=void 0}};var h=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=s,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)c.d(n,s,function(e){return t[e]}.bind(null,s));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var h=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},4678:function(t,e,n){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(t){var e=r(t);return n(e)}function r(t){if(!n.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}a.keys=function(){return Object.keys(s)},a.resolve=r,t.exports=a,a.id="4678"},"4a88":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[],i={name:"App",components:{}},o=i,c=(n("034f"),n("2877")),l=Object(c["a"])(o,a,r,!1,null,null,null),u=l.exports,d=n("8c4f"),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("div",{attrs:{id:"app-private"}},[n("header",[n("div",{staticClass:"wrap"},[n("div",{staticClass:"menu-comp"},t._l(t.routes,(function(t,e){return n("menu-item",{key:e,attrs:{route:t}})})),1)])]),n("keep-alive",[n("router-view",{staticClass:"view"})],1)],1)])},f=[],g=(n("7db0"),n("b0c0"),n("d3b7"),{name:"mainComponent",components:{menuItem:function(){return n.e("menu-item").then(n.bind(null,"2251"))}},computed:{routes:function(){var t=this.$router.options.routes.find((function(t){return"mainComponent"===t.name})).children;return t}}}),p=g,m=(n("7178"),Object(c["a"])(p,h,f,!1,null,"e5da8206",null)),b=m.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-component",attrs:{id:"app-modality"}},[n("div",{staticClass:"left-item"},[t.currentText?n("ul",{staticClass:"legend-li"},t._l(t.allTypes,(function(e){return n("li",{key:e},[t._v(" "+t._s(e.name)+" ")])})),0):t._e()]),n("div",[n("mu-row",{staticClass:"bottom-margin"},[n("mu-select",{staticStyle:{width:"100px","margin-right":"30px"},model:{value:t.currentLangId,callback:function(e){t.currentLangId=e},expression:"currentLangId"}},t._l(t.allLanguages,(function(t){return n("mu-option",{key:t,attrs:{label:t.name,value:t.id}})})),1)],1),t.errResult?n("mu-row",{staticClass:"error-response",attrs:{"justify-content":"center"}},[n("span",{staticClass:"red-text"},[t._v(t._s(t.errResult))])]):t._e(),n("mu-row",{staticClass:"bottom-margin",on:{contextmenu:t.openMenu}},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.currentText,expression:"currentText"}],staticClass:"mod-text",attrs:{id:"txt"},domProps:{value:t.currentText},on:{input:function(e){e.target.composing||(t.currentText=e.target.value)}}})]),n("mu-row",{staticClass:"bottom-margin"},[t.editMode?n("button",{staticClass:"def-button",on:{click:function(e){return e.preventDefault(),t.fixText(e)}}},[t._v("Сохранить")]):t._e(),t.fixMode?n("button",{staticClass:"def-button",on:{click:function(e){return e.preventDefault(),t.nextText(e)}}},[t._v("След.")]):t._e()]),t.viewMenu?n("ul",{ref:"right",style:{top:t.top,left:t.left},attrs:{id:"right-click-menu",tabindex:"-1"},on:{blur:t.closeMenu}},t._l(t.allTypes,(function(e){return n("li",{key:e,on:{click:function(n){t.chooseType(e),t.selectHighlightedText()}}},[t._v(" "+t._s(e.name)+" ")])})),0):t._e()],1),n("div",{staticClass:"right-item"},[n("mu-row",[n("button",{staticClass:"text-button",on:{click:function(e){t.openTexts=!0}}},[t._v("Список текстов")])])],1),t.openTexts?n("text-page-component",{attrs:{open:t.openTexts},on:{getText:t.getText,close:function(e){t.openTexts=!1}}}):t._e()],1)},j=[],v=n("b85c"),x=n("bc3a"),w=n.n(x),k=n("1157"),T=n.n(k),C={name:"modalityComponent",components:{textPageComponent:function(){return n.e("chunk-44c43dfa").then(n.bind(null,"1e16"))}},data:function(){return{textData:{text:null,lang:{id:null}},selectedText:"",selectedModalityStart:null,currentText:null,currentTextId:null,currentModalities:null,modalitiesObjectArray:null,viewMenu:!1,top:"0px",left:"0px",typeChoice:null,allTypes:null,allLanguages:null,currentLangId:null,openTexts:!1,textHighlighted:!1,editMode:!0,fixMode:!1,modalitiesColors:["green","light-red","blue","yellow","violet","gray","mint","purple","ginger","peach","brown","pink","light-blue","orange","red","acid-green","fluorescent-orange","prune"],errResult:null}},methods:{fixText:function(){if(this.currentLangId)document.getElementById("txt").readOnly="true",this.editMode=!1,this.fixMode=!0,this.putText();else{this.errResult="Выберите язык данного текста";var t=this;setTimeout((function(){t.errResult=null}),2e3)}},nextText:function(){this.typeChoice=null,this.currentText="",this.currentTextId=null,this.currentLangId=null,this.destroyTextHighlight(this.textHighlighted),document.getElementsByTagName("textarea")[0].readOnly=!1,this.fixMode=!1,this.editMode=!0},selectHighlightedText:function(){var t=document.getElementById("txt");this.selectedText=t.value.substring(t.selectionStart,t.selectionEnd),this.selectedModalityStart=t.selectionStart},chooseType:function(t){this.typeChoice=t,this.putModality(),this.closeMenu()},putModality:function(){var t=this;if(this.typeChoice&&this.selectedText){var e,n={text:this.selectedText,type_id:this.typeChoice.id,text_id:this.currentTextId,start_symbol:this.selectedModalityStart},s=Object(v["a"])(this.modalitiesObjectArray);try{for(s.s();!(e=s.n()).done;){var a=e.value;(n.start_symbol>=a.start_symbol&&n.start_symbol<=a.start_symbol+a.text.length||n.start_symbol<=a.start_symbol&&a.start_symbol<=n.start_symbol+n.text.length)&&this.deleteModality(a.id)}}catch(r){s.e(r)}finally{s.f()}w.a.put("/modality",n).then((function(e){200===e.status&&(t.getText(t.currentTextId),t.cancelPutModality())})).catch((function(e){t.errResult="Ошибка добавления"}))}},deleteModality:function(t){w.a.delete("/modality?id=".concat(t)).then((function(t){console.log(t)})).catch((function(t){console.log(t.response.data.error)}))},cancelPutModality:function(){this.errResult=null,this.typeChoice=null,this.selectedText="",this.selectedModalityStart=null},getLanguages:function(){var t=this;w.a.get("/langs").then((function(e){200===e.status&&(t.allLanguages=e.data.languages)})).catch((function(t){console.log(t.response.data.error)}))},getTypes:function(){var t=this;w.a.get("/types").then((function(e){t.allTypes=e.data.types})).catch((function(t){console.log(t.response.data.error)}))},getText:function(t){var e=this;this.currentLangId=null,w.a.get("text?id=".concat(t)).then((function(t){e.currentText=t.data.text,e.currentTextId=t.data.id,e.currentLangId=t.data.lang.id,e.editMode=!1,e.fixMode=!0})).then((function(){e.getCurrentTextModalities(t)})).catch((function(t){console.log(t.response.data.error)}))},getCurrentTextModalities:function(t){var e=this;w.a.get("modalities?id=".concat(t)).then((function(t){e.modalitiesObjectArray=t.data.modalities})).then((function(){e.destroyTextHighlight(e.textHighlighted);var t=e.splitModalitiesByType();t&&e.highlightText(t)})).catch((function(t){console.log(t.response.data.error)}))},putText:function(){var t=this,e={text:this.currentText,lang:{id:this.currentLangId}};w.a.put("/text",e).then((function(e){200===e.status&&(t.currentTextId=e.data.id)})).then((function(){})).catch((function(e){t.errResult=e.response.data.error}))},highlightText:function(t){this.textHighlighted=!0,T()(".mod-text").highlightWithinTextarea({highlight:t})},destroyTextHighlight:function(t){t&&(T()(".mod-text").highlightWithinTextarea("destroy"),this.textHighlighted=!1)},splitModalitiesByType:function(){if(this.modalitiesObjectArray){for(var t=[],e=[],n=1;n<19;n++){var s,a=Object(v["a"])(this.modalitiesObjectArray);try{for(a.s();!(s=a.n()).done;){var r=s.value;if(r.type_id===n){var i=r.start_symbol+r.text.length;e.push([r.start_symbol,i])}}}catch(o){a.e(o)}finally{a.f()}t.push({highlight:e,className:this.modalitiesColors[n-1]}),e=[]}return t}return null},setMenu:function(t,e){var n=window.innerHeight-this.$refs.right.offsetHeight-25,s=window.innerWidth-this.$refs.right.offsetWidth-25;t>n&&(t=n),e>s&&(e=s),this.top=t+"px",this.left=e+"px"},closeMenu:function(){this.viewMenu=!1},openMenu:function(t){this.selectHighlightedText(),this.viewMenu=!0,this.$nextTick(function(){this.$refs.right.focus(),this.setMenu(t.y,t.x)}.bind(this)),t.preventDefault()}},mounted:function(){this.getLanguages(),this.getTypes()}},_=C,M=Object(c["a"])(_,y,j,!1,null,"0af56916",null),O=M.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-component-column",attrs:{id:"chart-bar"}},[n("div",{staticClass:"card-table"},[n("mu-row",{attrs:{"justify-content":"center"}},[n("mu-select",{staticClass:"mu-text-hide",attrs:{multiple:"",filerable:"","help-text":"Модальности",tags:""},on:{change:function(e){return t.getStatistics()}},model:{value:t.typeIds,callback:function(e){t.typeIds=e},expression:"typeIds"}},t._l(t.allTypes,(function(t){return n("mu-option",{key:t,attrs:{label:t.name,value:t.id}})})),1)],1),n("mu-row",{attrs:{"justify-content":"center"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.process,expression:"process"}],staticClass:"process-icon"},[n("mu-circular-progress",{staticClass:"demo-circular-progress",attrs:{size:52}})],1),n("div",{staticClass:"div-chart-canvas"},[n("canvas",{ref:"canvasChart",staticClass:"chartjs-render-monitor"})])])],1)])},S=[],R=(n("d81d"),n("96cf"),n("1da1")),I=n("30ef"),z=n.n(I),E={name:"chartComponent",data:function(){return{process:!0,barChart:null,allStats:[],allTypes:[],typeIds:null}},methods:{getStatistics:function(){var t=this;this.allStats=[];var e={type_ids:this.typeIds};w.a.post("/statistic",e).then((function(e){200===e.status&&(t.allStats=e.data.statistic_languages,t.updateChart())})).catch((function(t){console.log(t)}))},getTypes:function(){var t=Object(R["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:w.a.get("/types").then((function(t){200===t.status&&(e.allTypes=t.data.types,e.typeIds=t.data.types.map((function(t){return t.id})),e.getStatistics())})).catch((function(t){console.log(t)}));case 1:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}(),updateChart:function(){this.barChart&&this.barChart.destroy(),this.createChart()},createChart:function(){this.process=!0,this.barChart=new z.a(this.$refs.canvasChart,{type:"bar",data:{labels:[this.allStats[0].name,this.allStats[1].name],datasets:[{label:"Частота встречаемости",backgroundColor:["rgba(252,168,62,0.1)","rgba(255,99,132,0.1)"],borderColor:["#fca83a","rgb(255,99,132)"],hoverBackgroundColor:["rgba(252,168,62,0.4)","rgba(255,99,132,0.4)"],pointBackgroundColor:"white",borderWidth:1,pointBorderColor:"#249EBF",data:[this.allStats[0].avg_count,this.allStats[1].avg_count]}]},options:{scales:{yAxes:[{ticks:{beginAtZero:!0},gridLines:{display:!0}}],xAxes:[{ticks:{beginAtZero:!0},gridLines:{display:!1}}]},legend:{display:!1},responsive:!0,maintainAspectRatio:!1,height:200}}),this.process=!1}},mounted:function(){this.getTypes()}},L=E,A=(n("d275"),Object(c["a"])(L,$,S,!1,null,"6501cc38",null)),N=A.exports,B=new d["a"]({routes:[{path:"/",name:"mainComponent",component:b,children:[{path:"modality",name:"Модальности",component:O},{path:"charts",name:"Графики",component:N}]}]}),P=B,H=(n("99af"),n("4160"),n("c975"),n("fb6a"),n("45fc"),n("4d63"),n("ac1f"),n("25f0"),n("466d"),n("5319"),n("159b"),n("53ca"));(function(t){var e="hwt",n=function(t,e){this.init(t,e)};n.prototype={init:function(t,e){this.$el=t,"function"===this.getType(e)&&(e={highlight:e}),"custom"===this.getType(e)?(this.highlight=e,this.generate()):console.error("valid config object not provided")},getType:function(t){var e=Object(H["a"])(t);if(!t)return"falsey";if(Array.isArray(t))return 2===t.length&&"number"===typeof t[0]&&"number"===typeof t[1]?"range":"array";if("object"===e){if(t instanceof RegExp)return"regexp";if(t.hasOwnProperty("highlight"))return"custom"}else if("function"===e||"string"===e)return e;return"other"},generate:function(){switch(this.$el.addClass(e+"-input "+e+"-content").on("input."+e,this.handleInput.bind(this)).on("scroll."+e,this.handleScroll.bind(this)),this.$highlights=t("<div>",{class:e+"-highlights "+e+"-content"}),this.$backdrop=t("<div>",{class:e+"-backdrop"}).append(this.$highlights),this.$container=t("<div>",{class:e+"-container"}).insertAfter(this.$el).append(this.$backdrop,this.$el).on("scroll",this.blockContainerScroll.bind(this)),this.browser=this.detectBrowser(),this.browser){case"firefox":this.fixFirefox();break;case"ios":this.fixIOS();break}this.isGenerated=!0,this.handleInput()},detectBrowser:function(){var t=window.navigator.userAgent.toLowerCase();return-1!==t.indexOf("firefox")?"firefox":t.match(/msie|trident\/7|edge/)?"ie":t.match(/ipad|iphone|ipod/)&&-1===t.indexOf("windows phone")?"ios":"other"},fixFirefox:function(){var t=this.$highlights.css(["padding-top","padding-right","padding-bottom","padding-left"]),e=this.$highlights.css(["border-top-width","border-right-width","border-bottom-width","border-left-width"]);this.$highlights.css({padding:"0","border-width":"0"}),this.$backdrop.css({"margin-top":"+="+t["padding-top"],"margin-right":"+="+t["padding-right"],"margin-bottom":"+="+t["padding-bottom"],"margin-left":"+="+t["padding-left"]}).css({"margin-top":"+="+e["border-top-width"],"margin-right":"+="+e["border-right-width"],"margin-bottom":"+="+e["border-bottom-width"],"margin-left":"+="+e["border-left-width"]})},fixIOS:function(){this.$highlights.css({"padding-left":"+=3px","padding-right":"+=3px"})},handleInput:function(){var t=this.$el.val(),e=this.getRanges(t,this.highlight),n=this.removeStaggeredRanges(e),s=this.getBoundaries(n);this.renderMarks(s)},getRanges:function(t,e){var n=this.getType(e);switch(n){case"array":return this.getArrayRanges(t,e);case"function":return this.getFunctionRanges(t,e);case"regexp":return this.getRegExpRanges(t,e);case"string":return this.getStringRanges(t,e);case"range":return this.getRangeRanges(t,e);case"custom":return this.getCustomRanges(t,e);default:if(!e)return[];console.error("unrecognized highlight type")}},getArrayRanges:function(t,e){var n=e.map(this.getRanges.bind(this,t));return Array.prototype.concat.apply([],n)},getFunctionRanges:function(t,e){return this.getRanges(t,e(t))},getRegExpRanges:function(t,e){var n,s=[];while(n=e.exec(t),null!==n)if(s.push([n.index,n.index+n[0].length]),!e.global)break;return s},getStringRanges:function(t,e){var n=[],s=t.toLowerCase(),a=e.toLowerCase(),r=0;while(r=s.indexOf(a,r),-1!==r)n.push([r,r+a.length]),r+=a.length;return n},getRangeRanges:function(t,e){return[e]},getCustomRanges:function(t,e){var n=this.getRanges(t,e.highlight);return e.className&&n.forEach((function(t){t.className?t.className=e.className+" "+t.className:t.className=e.className})),n},removeStaggeredRanges:function(t){var e=[];return t.forEach((function(t){var n=e.some((function(e){var n=t[0]>e[0]&&t[0]<e[1],s=t[1]>e[0]&&t[1]<e[1];return n!==s}));n||e.push(t)})),e},getBoundaries:function(t){var e=[];return t.forEach((function(t){e.push({type:"start",index:t[0],className:t.className}),e.push({type:"stop",index:t[1]})})),this.sortBoundaries(e),e},sortBoundaries:function(t){t.sort((function(t,e){return t.index!==e.index?e.index-t.index:"stop"===t.type&&"start"===e.type?1:"start"===t.type&&"stop"===e.type?-1:0}))},renderMarks:function(t){var e=this.$el.val();t.forEach((function(t,n){var s;s="start"===t.type?"{{hwt-mark-start|"+n+"}}":"{{hwt-mark-stop}}",e=e.slice(0,t.index)+s+e.slice(t.index)})),e=e.replace(/\n(\{\{hwt-mark-stop\}\})?$/,"\n\n$1"),e=e.replace(/</g,"&lt;").replace(/>/g,"&gt;"),"ie"===this.browser&&(e=e.replace(/ /g," <wbr>")),e=e.replace(/\{\{hwt-mark-start\|(\d+)\}\}/g,(function(e,n){var s=t[+n].className;return s?'<mark class="'+s+'">':"<mark>"})),e=e.replace(/\{\{hwt-mark-stop\}\}/g,"</mark>"),this.$highlights.html(e)},handleScroll:function(){var t=this.$el.scrollTop();this.$backdrop.scrollTop(t);var e=this.$el.scrollLeft();this.$backdrop.css("transform",e>0?"translateX("+-e+"px)":"")},blockContainerScroll:function(){this.$container.scrollLeft(0)},destroy:function(){this.$backdrop.remove(),this.$el.unwrap().removeClass(e+"-text "+e+"-input").off(e).removeData(e)}},t.fn.highlightWithinTextarea=function(s){return this.each((function(){var a=t(this),r=a.data(e);if("string"===typeof s)if(r)switch(s){case"update":r.handleInput();break;case"destroy":r.destroy();break;default:console.error("unrecognized method string")}else console.error("plugin must be instantiated first");else r&&r.destroy(),r=new n(a,s),r.isGenerated&&a.data(e,r)}))}})(T.a);var D=n("30f4"),F=(n("d6f6"),n("ad3d")),W=n("ecee"),q=n("c074");s["a"].use(D["a"]),s["a"].use(d["a"]),W["c"].add(q["a"],q["d"],q["b"],q["e"],q["c"]),s["a"].component("font-awesome-icon",F["a"]),s["a"].config.productionTip=!1,new s["a"]({router:P,render:function(t){return t(u)}}).$mount("#app")},7178:function(t,e,n){"use strict";n("bc27")},"85ec":function(t,e,n){},bc27:function(t,e,n){},d275:function(t,e,n){"use strict";n("4a88")}});
//# sourceMappingURL=app.js.map