"use strict"
define("ui/tests/helpers/data-transfer",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Object.extend({getData:function(){return this.get("payload")},setData:function(e,t){this.set("data",{dataType:e,payload:t})}})
t.reopenClass({makeMockEvent:function(e){var t={dataTransfer:this.create({payload:e})}
return t.originalEvent=t,t.originalEvent.preventDefault=function(){console.log("prevent default")},t.originalEvent.stopPropagation=function(){console.log("stop propagation")},t},createDomEvent:function(e){var t=document.createEvent("CustomEvent")
return t.initCustomEvent(e,!0,!0,null),t.dataTransfer={data:{},setData:function(e,t){this.data[e]=t},getData:function(e){return this.data[e]}},t}})
var r=t
e.default=r}),define("ui/tests/helpers/destroy-app",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(e){Ember.run(e,"destroy")}}),define("ui/tests/helpers/drag-drop",["exports","ember-native-dom-helpers","ui/tests/helpers/mock-event"],function(e,t,r){function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,a=!1,o=void 0
try{for(var i,s=e[Symbol.iterator]();!(n=(i=s.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(u){a=!0,o=u}finally{try{n||null==s.return||s.return()}finally{if(a)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function a(e,t,r,n,a,o,i){try{var s=e[o](i),u=s.value}catch(c){return void r(c)}s.done?t(u):Promise.resolve(u).then(n,a)}function o(e){return function(){var t=this,r=arguments
return new Promise(function(n,o){var i=e.apply(t,r)
function s(e){a(i,n,o,s,u,"next",e)}function u(e){a(i,n,o,s,u,"throw",e)}s(void 0)})}}function i(e,t){return s.apply(this,arguments)}function s(){return(s=o(regeneratorRuntime.mark(function e(a,i){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return i=i||[[{clientX:1,clientY:1},a]],e.abrupt("return",i.forEach(function(){var e=o(regeneratorRuntime.mark(function e(o){var i,s,u,c
return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return i=n(o,2),s=i[0],u=i[1],c=new r.default(s),e.next=4,(0,t.triggerEvent)(u||a,"dragover",c)
case 4:case"end":return e.stop()}},e,this)}))
return function(t){return e.apply(this,arguments)}}()))
case 2:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function u(e,t,r){return c.apply(this,arguments)}function c(){return(c=o(regeneratorRuntime.mark(function e(n,a,o){var s,u,c,l
return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return s=o.drop,u=o.dropEndOptions,c=o.dragOverMoves,e.next=3,(0,t.find)(s)
case 3:if(e.sent){e.next=6
break}throw"There are no drop targets by the given selector: '".concat(s,"'")
case 6:return e.next=8,i(s,c)
case 8:if(!o.beforeDrop){e.next=11
break}return e.next=11,o.beforeDrop.call()
case 11:return l=(new r.default).useDataTransferData(a),e.next=14,(0,t.triggerEvent)(s,"drop",l)
case 14:return e.next=16,(0,t.triggerEvent)(n,"dragend",u)
case 16:return e.abrupt("return",e.sent)
case 17:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function l(){return(l=o(regeneratorRuntime.mark(function e(n){var a,o,i=arguments
return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=i.length>1&&void 0!==i[1]?i[1]:{},o=new r.default(a.dragStartOptions),e.next=4,(0,t.triggerEvent)(n,"mouseover")
case 4:return e.next=6,(0,t.triggerEvent)(n,"dragstart",o)
case 6:if(!a.afterDrag){e.next=9
break}return e.next=9,a.afterDrag.call()
case 9:if(!a.drop){e.next=12
break}return e.next=12,u(n,o,a)
case 12:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}Object.defineProperty(e,"__esModule",{value:!0}),e.drag=function(e){return l.apply(this,arguments)}}),define("ui/tests/helpers/ember-cli-clipboard",["exports"],function(e){function t(e,t,n){r({container:e.__container__,$:e.$},t,n)}function r(e,t,r){(function(e,t){var r=e[t]
Ember.run(function(){"string"==typeof r?e.sendAction(r):r()})})(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:".copy-btn",r=e.$(t).attr("id")
return e.container.lookup("-view-registry:main")[r]}(e,t),r)}Object.defineProperty(e,"__esModule",{value:!0}),e.triggerSuccess=function(e,t){r(e,t,"success")},e.triggerError=function(e,t){r(e,t,"error")},e.default=function(){Ember.Test.registerAsyncHelper("triggerCopySuccess",function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:".copy-btn"
t(e,r,"success")}),Ember.Test.registerAsyncHelper("triggerCopyError",function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:".copy-btn"
t(e,r,"error")})}}),define("ui/tests/helpers/ember-drag-drop",["exports","ui/tests/helpers/data-transfer"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.drag=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.default.makeMockEvent(),a=Ember.$(e)
Ember.run(function(){triggerEvent(a,"mouseover")}),Ember.run(function(){triggerEvent(a,"dragstart",n)}),andThen(function(){r.beforeDrop&&r.beforeDrop.call()}),andThen(function(){r.drop&&function(e,r,n){var a=Ember.$(r)
if(0===a.length)throw"There are no drop targets by the given selector: '".concat(r,"'")
Ember.run(function(){triggerEvent(a,"dragover",t.default.makeMockEvent())}),Ember.run(function(){triggerEvent(a,"drop",t.default.makeMockEvent(n.dataTransfer.get("data.payload")))}),Ember.run(function(){triggerEvent(e,"dragend",t.default.makeMockEvent())})}(a,r.drop,n)})}}),define("ui/tests/helpers/mock-event",["exports"],function(e){function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function n(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}Object.defineProperty(e,"__esModule",{value:!0}),e.createDomEvent=function(e){var t=document.createEvent("CustomEvent")
return t.initCustomEvent(e,!0,!0,null),t.dataTransfer=new a,t},e.default=void 0
var a=function(){function e(){t(this,e),this.data={}}return n(e,[{key:"setData",value:function(e,t){return this.data[e]=t,this}},{key:"getData",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Text"
return this.data[e]}},{key:"setDragImage",value:function(){}}]),e}(),o=function(){function e(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
t(this,e),this.dataTransfer=new a,this.dataTransfer.setData("Text",r.dataTransferData),this.originalEvent=this,this.setProperties(r)}return n(e,[{key:"useDataTransferData",value:function(e){return this.dataTransfer.setData("Text",e.dataTransfer.getData()),this}},{key:"setProperties",value:function(e){for(var t in e)this[t]=e[t]
return this}},{key:"preventDefault",value:function(){}},{key:"stopPropagation",value:function(){}}]),e}()
e.default=o}),define("ui/tests/helpers/module-for-acceptance",["exports","qunit","ui/tests/helpers/start-app","ui/tests/helpers/destroy-app"],function(e,t,r,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};(0,t.module)(e,{beforeEach:function(){if(this.application=(0,r.default)(),a.beforeEach)return a.beforeEach.apply(this,arguments)},afterEach:function(){var e=this,t=a.afterEach&&a.afterEach.apply(this,arguments)
return Ember.RSVP.resolve(t).then(function(){return(0,n.default)(e.application)})}})}}),define("ui/tests/helpers/resolver",["exports","ui/resolver","ui/config/environment"],function(e,t,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=t.default.create()
n.namespace={modulePrefix:r.default.modulePrefix,podModulePrefix:r.default.podModulePrefix}
var a=n
e.default=a}),define("ui/tests/helpers/start-app",["exports","ui/app","ui/config/environment"],function(e,t,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(e){var n=Ember.merge({},r.default.APP)
return n=Ember.merge(n,e),Ember.run(function(){var e=t.default.create(n)
return e.setupForTesting(),e.injectTestHelpers(),e})}}),define("ui/tests/test-helper",["ui/app","ui/config/environment","@ember/test-helpers","ember-qunit"],function(e,t,r,n){(0,r.setApplication)(e.default.create(t.default.APP)),(0,n.start)()}),define("ui/config/environment",[],function(){var e={default:{modulePrefix:"ui",environment:"test",exportApplicationGlobal:!0,locationType:"none",EmberENV:{FEATURES:{},EXTEND_PROTOTYPES:{Date:!1}},minifyCSS:{enabled:!1},minifyJS:{enabled:!1},contentSecurityPolicy:{"style-src":"'self' releases.rancher.com localhost:8000 'unsafe-inline'","font-src":"'self' releases.rancher.com","script-src":"'self' releases.rancher.com localhost:8000","object-src":"'self' releases.rancher.com","img-src":"'self' releases.rancher.com avatars.githubusercontent.com gravatar.com localhost:8000 data:","frame-src":"'self' releases.rancher.com","connect-src":"*","unsafe-eval":"'self' releases.rancher.com"},APP:{version:"2.3.12",appName:"Rancher",environment:"test",baseAssets:"/",clusterToken:"%CLUSTERID%",projectToken:"%PROJECTID%",apiServer:"https://localhost:30443",apiEndpoint:"/v3",publicApiEndpoint:"/v3-public",clusterEndpoint:"/v3/clusters/%CLUSTERID%",projectEndpoint:"/v3/projects/%PROJECTID%",proxyEndpoint:"/meta/proxy",globalSubscribeEndpoint:"/v3/subscribe",clusterSubscribeEndpoint:"/v3/clusters/%CLUSTERID%/subscribe",projectSubscribeEndpoint:"/v3/projects/%PROJECTID%/subscribe",magicEndpoint:"/r",telemetryEndpoint:"/v1-telemetry",kubernetesBase:"/k8s",kubectlEndpoint:"/r/projects/%PROJECTID%/kubectld:8091/v1-kubectl",kubernetesDashboard:"/k8s/clusters/%CLUSTERID%/api/v1/namespaces/kube-system/services/kubernetes-dashboard/proxy/",needIntlPolyfill:!1,locales:{"ar-sa":"الإنجليزية","de-de":"Deutsch","en-us":"English","es-es":"Español","fa-ir":"فارسی","fr-fr":"Française","hu-hu":"Magyar","it-it":"Italiano","ja-jp":"日本語","ko-kr":"영어","nb-no":"Norsk","nl-nl":"Nederlands",none:"None","pt-br":"Português","ru-ru":"Русский","sh-hr":"Srpskohrvatski","sv-se":"Svenska","tr-tr":"İngilizce","uk-ua":"Українська","vi-vn":"Tiếng Anh","zh-hans":"简体中文","zh-hant":"繁體中文"},stripe:{publishableKey:"pk_test_g925RcuVORh2KgHWfFbE80by"},LOG_ACTIVE_GENERATION:!1,LOG_VIEW_LOOKUPS:!1,rootElement:"#ember-testing",autoboot:!1,pl:"rancher",name:"ui"}}}
return Object.defineProperty(e,"__esModule",{value:!0}),e}),require("ui/tests/test-helper"),EmberENV.TESTS_FILE_LOADED=!0

//# sourceMappingURL=tests-ef2a6bdfb525af9911b4188e3ded11b3.map