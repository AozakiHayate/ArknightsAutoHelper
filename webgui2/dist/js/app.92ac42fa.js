(function(e){function t(t){for(var a,r,s=t[0],l=t[1],c=t[2],d=0,b=[];d<s.length;d++)r=s[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&b.push(i[r][0]),i[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);u&&u(t);while(b.length)b.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,s=1;s<n.length;s++){var l=n[s];0!==i[l]&&(a=!1)}a&&(o.splice(t--,1),e=r(r.s=n[0]))}return e}var a={},i={app:0},o=[];function r(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"9c0c":function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("0cdd");var a=n("2b0e"),i=n("5f5b");n("ab8b"),n("2dd8");a["default"].use(i["a"]);var o,r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("b-container",{attrs:{id:"columns-container"}},[n("b-row",{staticClass:"justify-content-md-center",attrs:{"no-gutters":"",cols:"1","cols-sm":"1","cols-md":"2","cols-lg":"3","cols-xl":"4"}},[n("b-col",{attrs:{sm:"",xl:"3"}},[n("b-card",{staticClass:"status-card",attrs:{title:"Arknights Auto Helper","sub-title":e.version}},[n("b-input-group",{staticClass:"mt-3"},[n("b-input-group-prepend",{attrs:{"is-text":""}},[n("b-icon",{attrs:{icon:"plug-fill"}}),e._v("设备 ")],1),n("b-input-group-append",{staticClass:"flex-grow-1"},[n("b-dropdown",{staticClass:"flex-grow-1",attrs:{text:e.deviceName,right:""}},[n("b-dropdown-item",{attrs:{disabled:""}},[n("b",[e._v("可用设备")])]),e._l(e.availiableDevices,(function(t){return n("b-dropdown-item",{key:t,on:{click:function(n){return e.connectDevice(t)}}},[e._v(e._s(t))])})),n("b-dropdown-divider"),n("b-dropdown-item",{directives:[{name:"b-modal",rawName:"v-b-modal.connect-device",modifiers:{"connect-device":!0}}]},[e._v("连接设备")])],2)],1)],1),n("div",{staticClass:"mt-3"},[e._v("任务队列 "),n("div",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"float-right",attrs:{title:"移除选中项"}},[n("b-button",{attrs:{size:"sm",variant:"outline-danger",disabled:0==e.selectedPendingJob.length},on:{click:e.dequeueSelectedJobs}},[n("b-icon-trash")],1)],1)]),n("b-form-select",{staticClass:"mt-1",attrs:{options:e.pendingJobs,multiple:"","select-size":8},model:{value:e.selectedPendingJob,callback:function(t){e.selectedPendingJob=t},expression:"selectedPendingJob"}}),n("b-button",{staticClass:"mt-1",attrs:{block:"",size:"sm",variant:e.canPauseJob?"warning":"success",disabled:!(e.canPauseJob||e.canResumeJobQueue)},on:{click:e.toggleQueueState}},[n("b-icon",{attrs:{icon:e.canPauseJob?"pause-fill":"play-fill"}}),e._v(e._s(e.canPauseJob?"暂停":e.appRunning?"继续":"启动")+"队列")],1),n("div",{staticClass:"mt-3"},[e._v("运行状态")]),n("b-input-group",[n("b-input-group-prepend",{attrs:{"is-text":""}},[n("b-icon",{attrs:{icon:"arrow-right"}})],1),n("b-form-input",{attrs:{readonly:"",value:e.currentJobTitle}})],1),n("b-input-group",{staticClass:"mt-1"},[n("b-input-group-prepend",{attrs:{"is-text":""}},[n("b-icon",{directives:[{name:"show",rawName:"v-show",value:!e.appRunning,expression:"!appRunning"}],attrs:{icon:"pause-circle"}}),n("b-icon",{directives:[{name:"show",rawName:"v-show",value:e.appRunning&&e.workerWaiting,expression:"appRunning && workerWaiting"}],attrs:{icon:"stopwatch"}}),n("b-spinner",{directives:[{name:"show",rawName:"v-show",value:e.appRunning&&!e.workerWaiting,expression:"appRunning && !workerWaiting"}],attrs:{small:""}})],1),n("b-form-input",{attrs:{readonly:"",value:e.timerText}}),n("b-input-group-append",[n("b-button",{attrs:{variant:"info",title:"跳过当前等待时间",disabled:!(e.appRunning&&e.workerWaiting&&e.allowSkipWait)},on:{click:e.skipWait}},[n("b-icon-skip-forward-fill")],1),n("b-button",{attrs:{variant:"outline-danger",title:"停止助手",disabled:!e.appRunning},on:{click:e.interruptWorker}},[n("b-icon-x-octagon",{attrs:{size:"sm"}})],1)],1)],1),e.debug?[n("b-form-checkbox",{model:{value:e.appRunning,callback:function(t){e.appRunning=t},expression:"appRunning"}},[e._v("app running")]),n("b-form-checkbox",{model:{value:e.workerWaiting,callback:function(t){e.workerWaiting=t},expression:"workerWaiting"}},[e._v("worker waiting")]),n("b-form-checkbox",{model:{value:e.allowSkipWait,callback:function(t){e.allowSkipWait=t},expression:"allowSkipWait"}},[e._v("allow skip wait")]),n("button",{on:{click:function(t){return e.loots.push(["至纯源石",1919])}}},[e._v("add loot")])]:e._e()],2)],1),n("b-col",{attrs:{sm:"",xl:"6"}},[n("b-card-group",{staticClass:"ml-md-3 mx-lg-3",attrs:{columns:""}},[n("b-card",{staticClass:"action-card",attrs:{title:"快速启动"},scopedSlots:e._u([{key:"footer",fn:function(){return[n("div",{staticClass:"clearfix"},[n("b-button-group",{staticClass:"float-right"},[n("b-button",{attrs:{disabled:e.appRunning},on:{click:function(t){e.goJob(e.getQuickStartJob())}}},[e._v("Go")]),n("b-button",{attrs:{variant:"outline-secondary"},on:{click:function(t){e.enqueueJob(e.getQuickStartJob())}}},[e._v("Enqueue")])],1)],1)]},proxy:!0}])},[n("b-form",{staticClass:"mt-3"},[n("b-form-group",{attrs:{label:"关卡","label-for":"navigate-option","label-cols":"2","label-cols-xl":"12"}},[n("b-form-radio-group",{attrs:{id:"navigate-option",buttons:"","button-variant":"outline-secondary",size:"sm"},model:{value:e.onStage,callback:function(t){e.onStage=t},expression:"onStage"}},[n("b-form-radio",{attrs:{value:"current"}},[e._v("当前关卡")]),n("b-form-radio",{attrs:{value:"navigate"}},[e._v("指定关卡")]),"navigate"==e.onStage?n("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.choose-stage",modifiers:{"choose-stage":!0}}],attrs:{variant:"outline-secondary"}},[e._v(e._s(e.choosedStage))]):e._e()],1)],1),n("b-form-group",{attrs:{label:"次数","label-for":"repeat-count","label-cols":"2","label-cols-xl":"12"}},[n("div",{staticClass:"d-flex flex-row align-items-center"},[n("b-form-input",{staticStyle:{width:"5em"},attrs:{id:"repeat-count",min:"0",max:"9999",type:"number"},model:{value:e.repeatCount,callback:function(t){e.repeatCount=t},expression:"repeatCount"}}),n("b-button-group",{staticClass:"ml-2",attrs:{size:"sm"}},[n("b-button",{attrs:{variant:"outline-secondary"},on:{click:function(t){e.repeatCount=1}}},[e._v("1")]),n("b-button",{attrs:{variant:"outline-secondary",disabled:0==e.repeatCount},on:{click:function(t){e.repeatCount--}}},[n("b-icon-dash")],1),n("b-button",{attrs:{variant:"outline-secondary"},on:{click:function(t){e.repeatCount++}}},[n("b-icon-plus")],1),n("b-button",{attrs:{variant:"outline-secondary"},on:{click:function(t){e.repeatCount=9999}}},[e._v("∞")])],1)],1)]),n("b-form-checkbox",{attrs:{name:"",switch:""},model:{value:e.refillWithItem,callback:function(t){e.refillWithItem=t},expression:"refillWithItem"}},[e._v("使用道具回复体力")]),n("b-form-checkbox",{staticClass:"mt-1",attrs:{name:"",switch:""},model:{value:e.refillWithOriginium,callback:function(t){e.refillWithOriginium=t},expression:"refillWithOriginium"}},[e._v("使用源石回复体力")]),n("b-form-group",{attrs:{size:"sm",label:"最多回复","label-for":"refill-count","label-cols":"4"}},[n("div",{staticClass:"d-flex flex-row align-items-center"},[n("b-form-input",{staticStyle:{width:"5em"},attrs:{size:"sm",id:"refill-count",min:"0",max:"9999",type:"number"},model:{value:e.maxRefillCount,callback:function(t){e.maxRefillCount=t},expression:"maxRefillCount"}}),e._v("次 "),n("b-button-group",{staticClass:"ml-2",attrs:{size:"sm"}},[n("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{variant:"outline-secondary",title:"每周获得的理智药剂数量"},on:{click:function(t){e.maxRefillCount=9,e.refillWithItem=!0}}},[e._v("9")]),n("b-button",{attrs:{variant:"outline-secondary",disabled:0==e.maxRefillCount},on:{click:function(t){e.maxRefillCount--}}},[e._v("－")]),n("b-button",{attrs:{variant:"outline-secondary"},on:{click:function(t){e.maxRefillCount++,e.refillWithItem=!0}}},[e._v("＋")]),n("b-button",{attrs:{variant:"outline-secondary"},on:{click:function(t){e.maxRefillCount=9999,e.refillWithItem=!0}}},[e._v("∞")])],1)],1)])],1)],1),n("b-card",{staticClass:"action-card",attrs:{title:"领取任务奖励"},scopedSlots:e._u([{key:"footer",fn:function(){return[n("div",{staticClass:"clearfix"},[n("b-button-group",{staticClass:"float-right"},[n("b-button",{attrs:{disabled:e.appRunning},on:{click:function(t){e.goJob(e.getCollectJob())}}},[e._v("Go")]),n("b-button",{attrs:{variant:"outline-secondary"},on:{click:function(t){e.enqueueJob(e.getCollectJob())}}},[e._v("Enqueue")])],1)],1)]},proxy:!0}])}),n("b-card",{staticClass:"action-card",attrs:{title:"公开招募计算"},scopedSlots:e._u([{key:"footer",fn:function(){return[n("div",{staticClass:"clearfix"},[n("b-button",{staticClass:"float-right",attrs:{disabled:e.appRunning},on:{click:e.recruit}},[e._v("Go")])],1)]},proxy:!0}])})],1)],1),n("b-col",{attrs:{sm:"",md:"12",xl:"3"}},[n("b-card",{staticClass:"status-card",attrs:{header:"战利品"}},[n("div",{staticClass:"d-flex flex-row flex-wrap align-content-start"},e._l(e.loots,(function(t){var a=t[0],i=t[1];return n("div",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],key:a+"x"+i,staticClass:"item-container",attrs:{title:a}},[n("b-img",{staticClass:"item-icon",attrs:{alt:a,src:e.serverbase+"itemimg/"+encodeURIComponent(a)+".png"}}),n("b-badge",{staticClass:"item-qty-badge"},[e._v(e._s(i))])],1)})),0)])],1)],1)],1),n("div",{staticClass:"log-console bg-dark text-light"},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.consoleExpanded,expression:"consoleExpanded"}],ref:"consoleDragger",staticClass:"dragger"}),n("div",{directives:[{name:"show",rawName:"v-show",value:e.consoleExpanded,expression:"consoleExpanded"}],ref:"consoleContainer",attrs:{id:"detailed-console"}}),n("div",{attrs:{id:"status-line"},on:{click:e.toggleConsole}},[n("b-button",{attrs:{size:"sm",squared:""}},[n("b-icon",{attrs:{icon:e.consoleExpanded?"chevron-bar-down":"chevron-bar-up"}})],1),n("div",{staticClass:"ml-2",attrs:{id:"last-console-line"}},[n("span",{staticClass:"align-middle"},[e._v(e._s(e.lastConsoleLine))])])],1)]),n("b-modal",{attrs:{id:"connect-device",title:"连接设备"},on:{ok:e.confirmConnectDevice}},[e._v(" TODO 协议: adb "),n("b-form-input",{model:{value:e.deviceToConnect,callback:function(t){e.deviceToConnect=t},expression:"deviceToConnect"}})],1),n("b-modal",{attrs:{id:"choose-stage",title:"选择关卡"},on:{show:e.chooseStageShown,ok:e.chooseStageConfirm}},[e._v(" TODO "),n("b-form-input",{model:{value:e.newChoosedStage,callback:function(t){e.newChoosedStage=t},expression:"newChoosedStage"}})],1),n("b-modal",{attrs:{id:"recruit-modal",title:"公开招募"},model:{value:e.showRecruitResult,callback:function(t){e.showRecruitResult=t},expression:"showRecruitResult"}},[e._l(e.recruitResult,(function(t){return[t[1].length>0?[n("div",{key:t[0].join(",")},[n("b-button-group",{attrs:{size:"sm"}},e._l(t[0],(function(a){return n("b-button",{key:a,attrs:{variant:(t[2]<1?"outline-":"")+"dark"}},[e._v(e._s(a))])})),1),n("div",{staticClass:"mt-1"},e._l(t[1],(function(a){return n("b-button",{key:a[0],staticClass:"mr-1",attrs:{size:"sm",variant:(t[2]<1?"outline-":"")+e.rarityMap[a[1]]}},[e._v(e._s(a[0]))])})),1),n("hr")],1)]:e._e()]}))],2),n("div",{attrs:{id:"alert-container"}},e._l(e.alerts,(function(t){return n("b-toast",{key:t.id,attrs:{visible:"",fade:"",dismissible:"",title:t.title,variant:t.level},on:{hidden:function(n){return e.clearAlert(t.id)}}},[n("p",{staticClass:"alert-text"},[e._v(e._s(t.message))])])})),1)],1)},s=[],l=n("b85c"),c=n("1da1"),u=n("d4ec"),d=n("bee2"),b=n("257e"),p=n("262e"),v=n("2caf"),h=n("ade3"),f=n("3835"),g=(n("96cf"),n("d3b7"),n("99af"),n("4ec9"),n("3ca3"),n("ddb0"),n("2b3d"),n("ac1f"),n("5319"),n("25f0"),n("1276"),n("1e25"),n("b0c0"),n("a434"),n("c740"),n("b680"),n("4fad"),n("a15b"),n("2fe1")),m=n("b1e0");function k(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return new Promise((function(n){var a=new IntersectionObserver((function(e){var t=Object(f["a"])(e,1),i=t[0];n(1===i.intersectionRatio),a.disconnect()}),{root:t});a.observe(e)}))}a["default"].use(m["a"]);var w=Object(g["a"])(o=function(e){Object(p["a"])(n,e);var t=Object(v["a"])(n);function n(){var e;Object(u["a"])(this,n);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return e=t.call.apply(t,[this].concat(i)),Object(h["a"])(Object(b["a"])(e),"debug",!1),Object(h["a"])(Object(b["a"])(e),"serverbase",""),Object(h["a"])(Object(b["a"])(e),"version","loading"),Object(h["a"])(Object(b["a"])(e),"deviceName","(auto)"),Object(h["a"])(Object(b["a"])(e),"availiableDevices",["adb:127.0.0.1:5555","adb:127.0.0.1:7555"]),Object(h["a"])(Object(b["a"])(e),"deviceToConnect",""),Object(h["a"])(Object(b["a"])(e),"onStage","current"),Object(h["a"])(Object(b["a"])(e),"choosedStage","1-7"),Object(h["a"])(Object(b["a"])(e),"newChoosedStage",""),Object(h["a"])(Object(b["a"])(e),"repeatCount",9999),Object(h["a"])(Object(b["a"])(e),"appRunning",!1),Object(h["a"])(Object(b["a"])(e),"timerText",""),Object(h["a"])(Object(b["a"])(e),"loots",[]),Object(h["a"])(Object(b["a"])(e),"workerWaiting",!0),Object(h["a"])(Object(b["a"])(e),"allowSkipWait",!0),Object(h["a"])(Object(b["a"])(e),"drainingJobQueue",!1),Object(h["a"])(Object(b["a"])(e),"refillWithItem",!1),Object(h["a"])(Object(b["a"])(e),"refillWithOriginium",!1),Object(h["a"])(Object(b["a"])(e),"maxRefillCount",0),Object(h["a"])(Object(b["a"])(e),"selectedPendingJob",[]),Object(h["a"])(Object(b["a"])(e),"consoleExpanded",!1),Object(h["a"])(Object(b["a"])(e),"lastConsoleLine","shit"),Object(h["a"])(Object(b["a"])(e),"currentJobTitle","空闲"),Object(h["a"])(Object(b["a"])(e),"pendingJobs",[]),Object(h["a"])(Object(b["a"])(e),"alerts",[]),Object(h["a"])(Object(b["a"])(e),"showRecruitResult",!1),Object(h["a"])(Object(b["a"])(e),"recruitResult",[]),Object(h["a"])(Object(b["a"])(e),"rarityMap",["info","secondary","success","primary","warning","danger"]),e}return Object(d["a"])(n,[{key:"canResumeJobQueue",get:function(){return this.pendingJobs.length>0&&(!this.drainingJobQueue||!this.appRunning)}},{key:"canPauseJob",get:function(){return this.appRunning&&this.pendingJobs.length>0&&this.drainingJobQueue}},{key:"mounted",value:function(){var e,t=this;this.lastelm=null,this.currentWaitInterval=null,this.pendingCalls=new Map,this.serverbase="",e=location.href;var n=new URL("ws",e);n.protocol=n.protocol.replace(/^http/,"ws");var a=new WebSocket(n.toString());this.callSequence=0,this.ws=a,a.addEventListener("message",(function(e){if("string"===typeof e.data){var n=JSON.parse(e.data);Object.prototype.hasOwnProperty.call(n,"type")&&t.onReceived(n)}}));var i=this.$refs.consoleDragger,o=this.$refs.consoleContainer;i.addEventListener("mousedown",(function(e){e.preventDefault(),this.draginitY=e.pageY;var t=i,n=o.getBoundingClientRect().height,a=function(e){e.preventDefault();var a=e.pageY-t.draginitY,i=n-a;o.style.height=i+"px"};document.addEventListener("mousemove",a);var r=function e(t){t.preventDefault(),document.removeEventListener("mousemove",a),document.removeEventListener("mouseup",e)};document.addEventListener("mouseup",r)}))}},{key:"beforeDestroy",value:function(){this.ws.close()}},{key:"addConsoleLine",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"info";this.lastConsoleLine=e.trimEnd().split("\n").pop();var n=document.createElement("p");n.innerText=e,n.classList.add("log-"+t);var a=this.$refs.consoleContainer;a.appendChild(n),a.childElementCount>1e3&&a.firstElementChild.remove(),this.lastelm&&k(this.lastelm,a).then((function(e){e?(console.log("last line visible"),a.scrollTop=n.offsetTop):console.log("last line invisible")})),this.lastelm=n}},{key:"scrollConsoleToLast",value:function(){var e=this;this.$nextTick((function(){e.$refs.consoleContainer.lastElementChild.scrollIntoView()}))}},{key:"toggleConsole",value:function(){console.log("Toggle button clicked"),this.consoleExpanded=!this.consoleExpanded,this.consoleExpanded&&this.scrollConsoleToLast()}},{key:"getQuickStartJob",value:function(){var e={value:"Job@"+ +new Date,text:"",action:[]},t="current"===this.onStage?"当前关卡":"["+this.choosedStage+"]",n=parseInt(this.repeatCount),a=t+"×"+n;return this.refillWithItem&&(a+=" 使用道具"),this.refillWithOriginium&&(a+=" 使用源石"),e.text=a,this.refillWithItem||this.refillWithOriginium?(e.action.push({name:"worker:set_enable_refill",args:[!0]}),e.action.push({name:"worker:set_refill_with_item",args:[this.refillWithItem]}),e.action.push({name:"worker:set_refill_with_originium",args:[this.refillWithOriginium]}),e.action.push({name:"worker:set_max_refill_count",args:[parseInt(this.maxRefillCount)]})):e.action.push({name:"worker:set_enable_refill",args:[!1]}),"current"===this.onStage?e.action.push({name:"worker:module_battle_slim",args:[n]}):e.action.push({name:"worker:module_battle",args:[this.choosedStage,n]}),console.log(e),e}},{key:"getCollectJob",value:function(){return{value:"Job@"+ +new Date,text:"领取任务奖励",action:[{name:"worker:clear_task",args:[]}]}}},{key:"goJob",value:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(t){var n,a,i,o,r=this,s=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=s.length>1&&void 0!==s[1]&&s[1],this.appRunning=!0,this.currentJobTitle=t.text,a=Object(l["a"])(t.action),e.prev=4,a.s();case 6:if((i=a.n()).done){e.next=19;break}return o=i.value,e.prev=8,e.next=11,this.callRemote(o.name,o.args);case 11:e.next=17;break;case 13:return e.prev=13,e.t0=e["catch"](8),this.drainingJobQueue=!1,e.abrupt("break",19);case 17:e.next=6;break;case 19:e.next=24;break;case 21:e.prev=21,e.t1=e["catch"](4),a.e(e.t1);case 24:return e.prev=24,a.f(),e.finish(24);case 27:!n&&this.drainingJobQueue&&this.$nextTick((function(){return r.runJobQueue()})),this.drainingJobQueue||this.setAppIdle();case 29:case"end":return e.stop()}}),e,this,[[4,21,24,27],[8,13]])})));function t(t){return e.apply(this,arguments)}return t}()},{key:"sendMessage",value:function(e){console.log("sending message",e),this.ws.send(JSON.stringify(e))}},{key:"skipWait",value:function(){this.sendMessage({type:"web:skip"})}},{key:"interruptWorker",value:function(){this.sendMessage({type:"web:interrupt"})}},{key:"callRemote",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];console.log("calling",e,"with args",n);var a="Call#"+this.callSequence+"@"+ +new Date;return this.callSequence++,this.ws.send(JSON.stringify({type:"call",action:e,args:n,tag:a})),new Promise((function(i,o){t.pendingCalls.set(a,{action:e,args:n,resolve:i,reject:o})}))}},{key:"enqueueJob",value:function(e){var t=this.pendingJobs.length;this.pendingJobs.push(e),0===t&&(this.drainingJobQueue=!0)}},{key:"dequeueSelectedJobs",value:function(){var e=this;console.log(this.selectedPendingJob);var t,n=Object(l["a"])(this.selectedPendingJob);try{var a=function(){var n=t.value,a=e.pendingJobs.splice(e.pendingJobs.findIndex((function(e){return e.value===n})),1);console.log(a)};for(n.s();!(t=n.n()).done;)a()}catch(i){n.e(i)}finally{n.f()}}},{key:"toggleQueueState",value:function(){this.appRunning?this.drainingJobQueue=!this.drainingJobQueue:this.runJobQueue()}},{key:"runJobQueue",value:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.drainingJobQueue=!0,this.appRunning=!0;case 2:if(!(this.drainingJobQueue&&this.pendingJobs.length>0)){e.next=7;break}return e.next=5,this.goJob(this.pendingJobs.shift(),!0);case 5:e.next=2;break;case 7:this.setAppIdle();case 8:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"confirmConnectDevice",value:function(){return this.connectDevice("adb:"+this.deviceToConnect)}},{key:"connectDevice",value:function(e){return this.callRemote("web:connect",[e])}},{key:"setAppIdle",value:function(){this.appRunning=!1,this.currentJobTitle="空闲"}},{key:"onReceived",value:function(e){switch(console.log("received message",e),e.type){case"need-authorize":this.onNeedAuthorize();break;case"notify":this.onNotify(e.name,e.value);break;case"alert":this.showAlert(e);break;case"idle":this.onWorkerIdle();break;case"update-wait":this.onWait(e.duration,e.allow_skip);break;case"authorized":this.onAuthorized();break;case"log":this.addConsoleLine(e.message,e.level);break;case"call-result":this.onCallResult(e);break;default:break}}},{key:"onNeedAuthorize",value:function(){var e=new URL(location.href).searchParams.get("token");this.sendMessage({type:"web:authorize",token:e})}},{key:"onWorkerIdle",value:function(){}},{key:"onWait",value:function(e,t){var n=this;if(null!==this.currentWaitInterval&&clearInterval(this.currentWaitInterval),0==e)return this.workerWaiting=!1,void(this.timerText="");this.workerWaiting=!0,this.allowSkipWait=t;var a=+new Date/1e3;this.timerText="0/"+e.toFixed(0),this.currentWaitInterval=setInterval((function(){var t=+new Date/1e3,i=t-a;n.timerText=i.toFixed(0)+"/"+e.toFixed(0),i>=e&&clearInterval(n.currentWaitInterval)}),1e3)}},{key:"onNotify",value:function(e,t){switch(console.log("update value",e,"=",t),e){case"web:current-device":this.deviceName=t.toString();break;case"web:availiable-devices":this.availiableDevices=t;break;case"web:version":this.version=t.toString();break;case"wait":this.onWait(t.duration,t.allow_skip);break;case"loots":this.loots=Object.entries(t);break;default:break}}},{key:"onCallResult",value:function(e){var t=e.tag,n=this.pendingCalls.get(t);if(this.pendingCalls.delete(t),Object.prototype.hasOwnProperty.call(n,"resolve"))if("resolved"==e.status)n.resolve(e.return_value);else{var a=e.exception,i=new Error(a.message);i.stack=a.trace,this.showAlert({level:"error",title:"Exception in RPC invocation ",message:"Invocation: "+JSON.stringify({action:n.action,args:n.args})+"\n"+a.message}),this.addConsoleLine(a.message.join(),"error"),this.addConsoleLine(a.trace,"error"),this.consoleExpanded||this.toggleConsole(),n.reject(i)}}},{key:"showAlert",value:function(e){var t=e.level,n=e.title,a=e.message,i=e.details;console.log("alert",t,a);var o="alert@"+ +new Date;"error"===t&&(t="danger"),this.alerts.push({id:o,level:t,title:n,message:a,details:i})}},{key:"clearAlert",value:function(e){var t=this.alerts.findIndex((function(t){return t.id===e}));this.alerts.splice(t,1)}},{key:"recruit",value:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.callRemote("worker:recruit");case 2:this.recruitResult=e.sent,this.showRecruitResult=!0;case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"chooseStageShown",value:function(){this.newChoosedStage=this.choosedStage}},{key:"chooseStageConfirm",value:function(){this.choosedStage=this.newChoosedStage}}]),n}(a["default"]))||o,x=w,y=(n("5c0b"),n("2877")),C=Object(y["a"])(x,r,s,!1,null,null,null),O=C.exports;a["default"].config.productionTip=!1,new a["default"]({render:function(e){return e(O)}}).$mount("#app")}});
//# sourceMappingURL=app.92ac42fa.js.map