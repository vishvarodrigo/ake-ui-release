(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[0],Array(256).concat([function(t,e,n){n(266).__DEV__
var i=n(308),r=n(264),a=n(284),o=n(270),s=n(297),l=n(283),u=n(322),h=n(330),c=n(301),f=n(392),d=n(393),p=n(395),g=n(276),v=n(331),m=n(332),_=n(333),y=n(268),x=n(265),w=n(304).throttle,b=n(397),S=n(398),M=n(400),T=n(401),C=n(402),k=n(403)
n(404)
var D=r.assert,I=r.each,A=r.isFunction,O=r.isObject,P=g.parseClassType,R=1e3,L=3e3,E={PROCESSOR:{FILTER:R,STATISTIC:5e3},VISUAL:{LAYOUT:1e3,GLOBAL:2e3,CHART:L,COMPONENT:4e3,BRUSH:5e3}},B="__flagInMainProcess",N="__optionUpdated",z=/^[a-zA-Z0-9_]+$/
function F(t){return function(e,n,i){e=e&&e.toLowerCase(),l.prototype[t].call(this,e,n,i)}}function H(){l.call(this)}function W(t,e,n){n=n||{},"string"==typeof e&&(e=ht[e]),this.id,this.group,this._dom=t
var a=this._zr=i.init(t,{renderer:n.renderer||"canvas",devicePixelRatio:n.devicePixelRatio,width:n.width,height:n.height})
this._throttledZrFlush=w(r.bind(a.flush,a),17),(e=r.clone(e))&&d(e,!0),this._theme=e,this._chartsViews=[],this._chartsMap={},this._componentsViews=[],this._componentsMap={},this._coordSysMgr=new c
var o=this._api=function(t){var e=t._coordSysMgr
return r.extend(new h(t),{getCoordinateSystems:r.bind(e.getCoordinateSystems,e),getComponentByElement:function(e){for(;e;){var n=e.__ecComponentInfo
if(null!=n)return t._model.getComponent(n.mainType,n.index)
e=e.parent}}})}(this)
function u(t,e){return t.__prio-e.__prio}s(ut,u),s(ot,u),this._scheduler=new T(this,o,ot,ut),l.call(this),this._messageCenter=new H,this._initEvents(),this.resize=r.bind(this.resize,this),this._pendingActions=[],a.animation.on("frame",this._onframe,this),function(t,e){t.on("rendered",function(){e.trigger("rendered"),!t.animation.isFinished()||e[N]||e._scheduler.unfinished||e._pendingActions.length||e.trigger("finished")})}(a,this),r.setAsPrimitive(this)}H.prototype.on=F("on"),H.prototype.off=F("off"),H.prototype.one=F("one"),r.mixin(H,l)
var V=W.prototype
function U(t,e,n){var i,r=this._model,a=this._coordSysMgr.getCoordinateSystems()
e=x.parseFinder(r,e)
for(var o=0;o<a.length;o++){var s=a[o]
if(s[t]&&null!=(i=s[t](r,e,n)))return i}}V._onframe=function(){if(!this._disposed){var t=this._scheduler
if(this[N]){var e=this[N].silent
this[B]=!0,Y(this),q.update.call(this),this[B]=!1,this[N]=!1,Z.call(this,e),$.call(this,e)}else if(t.unfinished){var n=1,i=this._model,r=this._api
t.unfinished=!1
do{var a=+new Date
t.performSeriesTasks(i),t.performDataProcessorTasks(i),G(this,i),t.performVisualTasks(i),tt(this,this._model,r,"remain"),n-=+new Date-a}while(n>0&&t.unfinished)
t.unfinished||this._zr.flush()}}},V.getDom=function(){return this._dom},V.getZr=function(){return this._zr},V.setOption=function(t,e,n){var i
if(O(e)&&(n=e.lazyUpdate,i=e.silent,e=e.notMerge),this[B]=!0,!this._model||e){var r=new f(this._api),a=this._theme,o=this._model=new u(null,null,a,r)
o.scheduler=this._scheduler,o.init(null,null,a,r)}this._model.setOption(t,st),n?(this[N]={silent:i},this[B]=!1):(Y(this),q.update.call(this),this._zr.flush(),this[N]=!1,this[B]=!1,Z.call(this,i),$.call(this,i))},V.setTheme=function(){console.log("ECharts#setTheme() is DEPRECATED in ECharts 3.0")},V.getModel=function(){return this._model},V.getOption=function(){return this._model&&this._model.getOption()},V.getWidth=function(){return this._zr.getWidth()},V.getHeight=function(){return this._zr.getHeight()},V.getDevicePixelRatio=function(){return this._zr.painter.dpr||window.devicePixelRatio||1},V.getRenderedCanvas=function(t){if(o.canvasSupported)return(t=t||{}).pixelRatio=t.pixelRatio||1,t.backgroundColor=t.backgroundColor||this._model.get("backgroundColor"),this._zr.painter.getRenderedCanvas(t)},V.getSvgDataUrl=function(){if(o.svgSupported){var t=this._zr,e=t.storage.getDisplayList()
return r.each(e,function(t){t.stopAnimation(!0)}),t.painter.pathToDataUrl()}},V.getDataURL=function(t){var e=(t=t||{}).excludeComponents,n=this._model,i=[],r=this
I(e,function(t){n.eachComponent({mainType:t},function(t){var e=r._componentsMap[t.__viewId]
e.group.ignore||(i.push(e),e.group.ignore=!0)})})
var a="svg"===this._zr.painter.getType()?this.getSvgDataUrl():this.getRenderedCanvas(t).toDataURL("image/"+(t&&t.type||"png"))
return I(i,function(t){t.group.ignore=!1}),a},V.getConnectedDataURL=function(t){if(o.canvasSupported){var e=this.group,n=Math.min,a=Math.max
if(dt[e]){var s=1/0,l=1/0,u=-1/0,h=-1/0,c=[],f=t&&t.pixelRatio||1
r.each(ft,function(i,o){if(i.group===e){var f=i.getRenderedCanvas(r.clone(t)),d=i.getDom().getBoundingClientRect()
s=n(d.left,s),l=n(d.top,l),u=a(d.right,u),h=a(d.bottom,h),c.push({dom:f,left:d.left,top:d.top})}})
var d=(u*=f)-(s*=f),p=(h*=f)-(l*=f),g=r.createCanvas()
g.width=d,g.height=p
var v=i.init(g)
return I(c,function(t){var e=new y.Image({style:{x:t.left*f-s,y:t.top*f-l,image:t.dom}})
v.add(e)}),v.refreshImmediately(),g.toDataURL("image/"+(t&&t.type||"png"))}return this.getDataURL(t)}},V.convertToPixel=r.curry(U,"convertToPixel"),V.convertFromPixel=r.curry(U,"convertFromPixel"),V.containPixel=function(t,e){var n,i=this._model
return t=x.parseFinder(i,t),r.each(t,function(t,i){i.indexOf("Models")>=0&&r.each(t,function(t){var r=t.coordinateSystem
if(r&&r.containPoint)n|=!!r.containPoint(e)
else if("seriesModels"===i){var a=this._chartsMap[t.__viewId]
a&&a.containPoint&&(n|=a.containPoint(e,t))}},this)},this),!!n},V.getVisual=function(t,e){var n=this._model,i=(t=x.parseFinder(n,t,{defaultMainType:"series"})).seriesModel.getData(),r=t.hasOwnProperty("dataIndexInside")?t.dataIndexInside:t.hasOwnProperty("dataIndex")?i.indexOfRawIndex(t.dataIndex):null
return null!=r?i.getItemVisual(r,e):i.getVisual(e)},V.getViewOfComponentModel=function(t){return this._componentsMap[t.__viewId]},V.getViewOfSeriesModel=function(t){return this._chartsMap[t.__viewId]}
var q={prepareAndUpdate:function(t){Y(this),q.update.call(this,t)},update:function(t){var e=this._model,n=this._api,i=this._zr,r=this._coordSysMgr,s=this._scheduler
if(e){s.restoreData(e,t),s.performSeriesTasks(e),r.create(e,n),s.performDataProcessorTasks(e,t),G(this,e),r.update(e,n),Q(e),s.performVisualTasks(e,t),J(this,e,n,t)
var l=e.get("backgroundColor")||"transparent"
if(o.canvasSupported)i.setBackgroundColor(l)
else{var u=a.parse(l)
l=a.stringify(u,"rgb"),0===u[3]&&(l="transparent")}et(e,n)}},updateTransform:function(t){var e=this._model,n=this,i=this._api
if(e){var a=[]
e.eachComponent(function(r,o){var s=n.getViewOfComponentModel(o)
if(s&&s.__alive)if(s.updateTransform){var l=s.updateTransform(o,e,i,t)
l&&l.update&&a.push(s)}else a.push(s)})
var o=r.createHashMap()
e.eachSeries(function(r){var a=n._chartsMap[r.__viewId]
if(a.updateTransform){var s=a.updateTransform(r,e,i,t)
s&&s.update&&o.set(r.uid,1)}else o.set(r.uid,1)}),Q(e),this._scheduler.performVisualTasks(e,t,{setDirty:!0,dirtyMap:o}),tt(n,e,i,t,o),et(e,this._api)}},updateView:function(t){var e=this._model
e&&(_.markUpdateMethod(t,"updateView"),Q(e),this._scheduler.performVisualTasks(e,t,{setDirty:!0}),J(this,this._model,this._api,t),et(e,this._api))},updateVisual:function(t){q.update.call(this,t)},updateLayout:function(t){q.update.call(this,t)}}
function Y(t){var e=t._model,n=t._scheduler
n.restorePipelines(e),n.prepareStageTasks(),K(t,"component",e,n),K(t,"chart",e,n),n.plan()}function j(t,e,n,i,a){var o=t._model
if(i){var s={}
s[i+"Id"]=n[i+"Id"],s[i+"Index"]=n[i+"Index"],s[i+"Name"]=n[i+"Name"]
var l={mainType:i,query:s}
a&&(l.subType=a)
var u=n.excludeSeriesId
null!=u&&(u=r.createHashMap(x.normalizeToArray(u))),o&&o.eachComponent(l,function(e){u&&null!=u.get(e.id)||h(t["series"===i?"_chartsMap":"_componentsMap"][e.__viewId])},t)}else I(t._componentsViews.concat(t._chartsViews),h)
function h(i){i&&i.__alive&&i[e]&&i[e](i.__model,o,t._api,n)}}function G(t,e){var n=t._chartsMap,i=t._scheduler
e.eachSeries(function(t){i.updateStreamModes(t,n[t.__viewId])})}function X(t,e){var n=t.type,i=t.escapeConnect,a=rt[n],o=a.actionInfo,s=(o.update||"update").split(":"),l=s.pop()
s=null!=s[0]&&P(s[0]),this[B]=!0
var u=[t],h=!1
t.batch&&(h=!0,u=r.map(t.batch,function(e){return(e=r.defaults(r.extend({},e),t)).batch=null,e}))
var c,f=[],d="highlight"===n||"downplay"===n
I(u,function(t){(c=(c=a.action(t,this._model,this._api))||r.extend({},t)).type=o.event||c.type,f.push(c),d?j(this,l,t,"series"):s&&j(this,l,t,s.main,s.sub)},this),"none"===l||d||s||(this[N]?(Y(this),q.update.call(this,t),this[N]=!1):q[l].call(this,t)),c=h?{type:o.event||n,escapeConnect:i,batch:f}:f[0],this[B]=!1,!e&&this._messageCenter.trigger(c.type,c)}function Z(t){for(var e=this._pendingActions;e.length;){var n=e.shift()
X.call(this,n,t)}}function $(t){!t&&this.trigger("updated")}function K(t,e,n,i){for(var r="component"===e,a=r?t._componentsViews:t._chartsViews,o=r?t._componentsMap:t._chartsMap,s=t._zr,l=t._api,u=0;u<a.length;u++)a[u].__alive=!1
function h(t){var e="_ec_"+t.id+"_"+t.type,u=o[e]
if(!u){var h=P(t.type);(u=new(r?m.getClass(h.main,h.sub):_.getClass(h.sub))).init(n,l),o[e]=u,a.push(u),s.add(u.group)}t.__viewId=u.__id=e,u.__alive=!0,u.__model=t,u.group.__ecComponentInfo={mainType:t.mainType,index:t.componentIndex},!r&&i.prepareView(u,t,n,l)}for(r?n.eachComponent(function(t,e){"series"!==t&&h(e)}):n.eachSeries(h),u=0;u<a.length;){var c=a[u]
c.__alive?u++:(!r&&c.renderTask.dispose(),s.remove(c.group),c.dispose(n,l),a.splice(u,1),delete o[c.__id],c.__id=c.group.__ecComponentInfo=null)}}function Q(t){t.clearColorPalette(),t.eachSeries(function(t){t.clearColorPalette()})}function J(t,e,n,i){!function(t,e,n,i,r){I(t._componentsViews,function(t){var r=t.__model
t.render(r,e,n,i),it(r,t)})}(t,e,n,i),I(t._chartsViews,function(t){t.__alive=!1}),tt(t,e,n,i),I(t._chartsViews,function(t){t.__alive||t.remove(e,n)})}function tt(t,e,n,i,r){var a,s=t._scheduler
e.eachSeries(function(e){var n=t._chartsMap[e.__viewId]
n.__alive=!0
var o=n.renderTask
s.updatePayload(o,i),r&&r.get(e.uid)&&o.dirty(),a|=o.perform(s.getPerformArgs(o)),n.group.silent=!!e.get("silent"),it(e,n),function(t,e){var n=t.get("blendMode")||null
e.group.traverse(function(t){t.isGroup||t.style.blend!==n&&t.setStyle("blend",n),t.eachPendingDisplayable&&t.eachPendingDisplayable(function(t){t.setStyle("blend",n)})})}(e,n)}),s.unfinished|=a,function(t,e){var n=t.storage,i=0
n.traverse(function(t){t.isGroup||i++}),i>e.get("hoverLayerThreshold")&&!o.node&&n.traverse(function(t){t.isGroup||(t.useHoverLayer=!0)})}(t._zr,e),S(t._zr.dom,e)}function et(t,e){I(lt,function(n){n(t,e)})}V.resize=function(t){this._zr.resize(t)
var e=this._model
if(this._loadingFX&&this._loadingFX.resize(),e){var n=e.resetOption("media"),i=t&&t.silent
this[B]=!0,n&&Y(this),q.update.call(this),this[B]=!1,Z.call(this,i),$.call(this,i)}},V.showLoading=function(t,e){if(O(t)&&(e=t,t=""),t=t||"default",this.hideLoading(),ct[t]){var n=ct[t](this._api,e),i=this._zr
this._loadingFX=n,i.add(n)}},V.hideLoading=function(){this._loadingFX&&this._zr.remove(this._loadingFX),this._loadingFX=null},V.makeActionFromEvent=function(t){var e=r.extend({},t)
return e.type=at[t.type],e},V.dispatchAction=function(t,e){O(e)||(e={silent:!!e}),rt[t.type]&&this._model&&(this[B]?this._pendingActions.push(t):(X.call(this,t,e.silent),e.flush?this._zr.flush(!0):!1!==e.flush&&o.browser.weChat&&this._throttledZrFlush(),Z.call(this,e.silent),$.call(this,e.silent)))},V.appendData=function(t){var e=t.seriesIndex
this.getModel().getSeriesByIndex(e).appendData(t),this._scheduler.unfinished=!0},V.on=F("on"),V.off=F("off"),V.one=F("one")
var nt=["click","dblclick","mouseover","mouseout","mousemove","mousedown","mouseup","globalout","contextmenu"]
function it(t,e){var n=t.get("z"),i=t.get("zlevel")
e.group.traverse(function(t){"group"!==t.type&&(null!=n&&(t.z=n),null!=i&&(t.zlevel=i))})}V._initEvents=function(){I(nt,function(t){this._zr.on(t,function(e){var n,i=this.getModel(),a=e.target
if("globalout"===t)n={}
else if(a&&null!=a.dataIndex){var o=a.dataModel||i.getSeriesByIndex(a.seriesIndex)
n=o&&o.getDataParams(a.dataIndex,a.dataType)||{}}else a&&a.eventData&&(n=r.extend({},a.eventData))
n&&(n.event=e,n.type=t,this.trigger(t,n))},this)},this),I(at,function(t,e){this._messageCenter.on(e,function(t){this.trigger(e,t)},this)},this)},V.isDisposed=function(){return this._disposed},V.clear=function(){this.setOption({series:[]},!0)},V.dispose=function(){if(!this._disposed){this._disposed=!0,x.setAttribute(this.getDom(),vt,"")
var t=this._api,e=this._model
I(this._componentsViews,function(n){n.dispose(e,t)}),I(this._chartsViews,function(n){n.dispose(e,t)}),this._zr.dispose(),delete ft[this.id]}},r.mixin(W,l)
var rt={},at={},ot=[],st=[],lt=[],ut=[],ht={},ct={},ft={},dt={},pt=new Date-0,gt=new Date-0,vt="_echarts_instance_",mt={}
function _t(t){dt[t]=!1}var yt=_t
function xt(t){return ft[x.getAttribute(t,vt)]}function wt(t,e){ht[t]=e}function bt(t){st.push(t)}function St(t,e){Ct(ot,t,e,R)}function Mt(t,e,n){"function"==typeof e&&(n=e,e="")
var i=O(t)?t.type:[t,t={event:e}][0]
t.event=(t.event||i).toLowerCase(),e=t.event,D(z.test(i)&&z.test(e)),rt[i]||(rt[i]={action:n,actionInfo:t}),at[e]=i}function Tt(t,e){Ct(ut,t,e,L,"visual")}function Ct(t,e,n,i,r){(A(e)||O(e))&&(n=e,e=i)
var a=T.wrapStageHandler(n,r)
return a.__prio=e,a.__raw=n,t.push(a),a}function kt(t,e){ct[t]=e}Tt(2e3,b),bt(d),St(5e3,p),kt("default",M),Mt({type:"highlight",event:"highlight",update:"highlight"},r.noop),Mt({type:"downplay",event:"downplay",update:"downplay"},r.noop),wt("light",C),wt("dark",k),e.version="4.1.0",e.dependencies={zrender:"4.0.4"},e.PRIORITY=E,e.init=function(t,e,n){var i=xt(t)
if(i)return i
var r=new W(t,e,n)
return r.id="ec_"+pt++,ft[r.id]=r,x.setAttribute(t,vt,r.id),function(t){var e="__connectUpdateStatus"
function n(t,n){for(var i=0;i<t.length;i++)t[i][e]=n}I(at,function(i,r){t._messageCenter.on(r,function(i){if(dt[t.group]&&0!==t[e]){if(i&&i.escapeConnect)return
var r=t.makeActionFromEvent(i),a=[]
I(ft,function(e){e!==t&&e.group===t.group&&a.push(e)}),n(a,0),I(a,function(t){1!==t[e]&&t.dispatchAction(r)}),n(a,2)}})})}(r),r},e.connect=function(t){if(r.isArray(t)){var e=t
t=null,I(e,function(e){null!=e.group&&(t=e.group)}),t=t||"g_"+gt++,I(e,function(e){e.group=t})}return dt[t]=!0,t},e.disConnect=_t,e.disconnect=yt,e.dispose=function(t){"string"==typeof t?t=ft[t]:t instanceof W||(t=xt(t)),t instanceof W&&!t.isDisposed()&&t.dispose()},e.getInstanceByDom=xt,e.getInstanceById=function(t){return ft[t]},e.registerTheme=wt,e.registerPreprocessor=bt,e.registerProcessor=St,e.registerPostUpdate=function(t){lt.push(t)},e.registerAction=Mt,e.registerCoordinateSystem=function(t,e){c.register(t,e)},e.getCoordinateSystemDimensions=function(t){var e=c.get(t)
if(e)return e.getDimensionsInfo?e.getDimensionsInfo():e.dimensions.slice()},e.registerLayout=function(t,e){Ct(ut,t,e,1e3,"layout")},e.registerVisual=Tt,e.registerLoading=kt,e.extendComponentModel=function(t){return g.extend(t)},e.extendComponentView=function(t){return m.extend(t)},e.extendSeriesModel=function(t){return v.extend(t)},e.extendChartView=function(t){return _.extend(t)},e.setCanvasCreator=function(t){r.$override("createCanvas",t)},e.registerMap=function(t,e,n){e.geoJson&&!e.features&&(n=e.specialAreas,e=e.geoJson),"string"==typeof e&&(e="undefined"!=typeof JSON&&JSON.parse?JSON.parse(e):new Function("return ("+e+");")()),mt[t]={geoJson:e,specialAreas:n}},e.getMap=function(t){return mt[t]},e.dataTool={}
var Dt=n(405)
!function(){for(var t in Dt)Dt.hasOwnProperty(t)&&(e[t]=Dt[t])}()},,,,,,,,function(t,e){var n={"[object Function]":1,"[object RegExp]":1,"[object Date]":1,"[object Error]":1,"[object CanvasGradient]":1,"[object CanvasPattern]":1,"[object Image]":1,"[object Canvas]":1},i={"[object Int8Array]":1,"[object Uint8Array]":1,"[object Uint8ClampedArray]":1,"[object Int16Array]":1,"[object Uint16Array]":1,"[object Int32Array]":1,"[object Uint32Array]":1,"[object Float32Array]":1,"[object Float64Array]":1},r=Object.prototype.toString,a=Array.prototype,o=a.forEach,s=a.filter,l=a.slice,u=a.map,h=a.reduce,c={}
function f(t){if(null==t||"object"!=typeof t)return t
var e=t,a=r.call(t)
if("[object Array]"===a){if(!M(t)){e=[]
for(var o=0,s=t.length;o<s;o++)e[o]=f(t[o])}}else if(i[a]){if(!M(t)){var l=t.constructor
if(t.constructor.from)e=l.from(t)
else for(e=new l(t.length),o=0,s=t.length;o<s;o++)e[o]=f(t[o])}}else if(!n[a]&&!M(t)&&!b(t))for(var u in e={},t)t.hasOwnProperty(u)&&(e[u]=f(t[u]))
return e}function d(t,e,n){if(!x(e)||!x(t))return n?f(e):t
for(var i in e)if(e.hasOwnProperty(i)){var r=t[i],a=e[i]
!x(a)||!x(r)||y(a)||y(r)||b(a)||b(r)||w(a)||w(r)||M(a)||M(r)?!n&&i in t||(t[i]=f(e[i])):d(r,a,n)}return t}function p(t,e,n){for(var i in e)e.hasOwnProperty(i)&&(n?null!=e[i]:null==t[i])&&(t[i]=e[i])
return t}var g,v=function(){return c.createCanvas()}
function m(t,e,n){if(t&&e)if(t.forEach&&t.forEach===o)t.forEach(e,n)
else if(t.length===+t.length)for(var i=0,r=t.length;i<r;i++)e.call(n,t[i],i,t)
else for(var a in t)t.hasOwnProperty(a)&&e.call(n,t[a],a,t)}function _(t,e){var n=l.call(arguments,2)
return function(){return t.apply(e,n.concat(l.call(arguments)))}}function y(t){return"[object Array]"===r.call(t)}function x(t){var e=typeof t
return"function"===e||!!t&&"object"==e}function w(t){return!!n[r.call(t)]}function b(t){return"object"==typeof t&&"number"==typeof t.nodeType&&"object"==typeof t.ownerDocument}c.createCanvas=function(){return document.createElement("canvas")}
var S="__ec_primitive__"
function M(t){return t[S]}function T(t){var e=y(t),n=this
function i(t,i){e?n.set(t,i):n.set(i,t)}t instanceof T?t.each(i):t&&m(t,i)}T.prototype={constructor:T,get:function(t){return this.hasOwnProperty(t)?this[t]:null},set:function(t,e){return this[t]=e},each:function(t,e){for(var n in void 0!==e&&(t=_(t,e)),this)this.hasOwnProperty(n)&&t(this[n],n)},removeKey:function(t){delete this[t]}},e.$override=function(t,e){"createCanvas"===t&&(g=null),c[t]=e},e.clone=f,e.merge=d,e.mergeAll=function(t,e){for(var n=t[0],i=1,r=t.length;i<r;i++)n=d(n,t[i],e)
return n},e.extend=function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])
return t},e.defaults=p,e.createCanvas=v,e.getContext=function(){return g||(g=v().getContext("2d")),g},e.indexOf=function(t,e){if(t){if(t.indexOf)return t.indexOf(e)
for(var n=0,i=t.length;n<i;n++)if(t[n]===e)return n}return-1},e.inherits=function(t,e){var n=t.prototype
function i(){}for(var r in i.prototype=e.prototype,t.prototype=new i,n)t.prototype[r]=n[r]
t.prototype.constructor=t,t.superClass=e},e.mixin=function(t,e,n){p(t="prototype"in t?t.prototype:t,e="prototype"in e?e.prototype:e,n)},e.isArrayLike=function(t){if(t)return"string"!=typeof t&&"number"==typeof t.length},e.each=m,e.map=function(t,e,n){if(t&&e){if(t.map&&t.map===u)return t.map(e,n)
for(var i=[],r=0,a=t.length;r<a;r++)i.push(e.call(n,t[r],r,t))
return i}},e.reduce=function(t,e,n,i){if(t&&e){if(t.reduce&&t.reduce===h)return t.reduce(e,n,i)
for(var r=0,a=t.length;r<a;r++)n=e.call(i,n,t[r],r,t)
return n}},e.filter=function(t,e,n){if(t&&e){if(t.filter&&t.filter===s)return t.filter(e,n)
for(var i=[],r=0,a=t.length;r<a;r++)e.call(n,t[r],r,t)&&i.push(t[r])
return i}},e.find=function(t,e,n){if(t&&e)for(var i=0,r=t.length;i<r;i++)if(e.call(n,t[i],i,t))return t[i]},e.bind=_,e.curry=function(t){var e=l.call(arguments,1)
return function(){return t.apply(this,e.concat(l.call(arguments)))}},e.isArray=y,e.isFunction=function(t){return"function"==typeof t},e.isString=function(t){return"[object String]"===r.call(t)},e.isObject=x,e.isBuiltInObject=w,e.isTypedArray=function(t){return!!i[r.call(t)]},e.isDom=b,e.eqNaN=function(t){return t!=t},e.retrieve=function(t){for(var e=0,n=arguments.length;e<n;e++)if(null!=arguments[e])return arguments[e]},e.retrieve2=function(t,e){return null!=t?t:e},e.retrieve3=function(t,e,n){return null!=t?t:null!=e?e:n},e.slice=function(){return Function.call.apply(l,arguments)},e.normalizeCssArray=function(t){if("number"==typeof t)return[t,t,t,t]
var e=t.length
return 2===e?[t[0],t[1],t[0],t[1]]:3===e?[t[0],t[1],t[2],t[1]]:t},e.assert=function(t,e){if(!t)throw new Error(e)},e.trim=function(t){return null==t?null:"function"==typeof t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")},e.setAsPrimitive=function(t){t[S]=!0},e.isPrimitive=M,e.createHashMap=function(t){return new T(t)},e.concatArray=function(t,e){for(var n=new t.constructor(t.length+e.length),i=0;i<t.length;i++)n[i]=t[i]
var r=t.length
for(i=0;i<e.length;i++)n[i+r]=e[i]
return n},e.noop=function(){}},function(t,e,n){var i=n(264),r=i.each,a=i.isObject,o=i.isArray,s="series\0"
function l(t){return t instanceof Array?t:null==t?[]:[t]}function u(t){return a(t)&&t.id&&0===(t.id+"").indexOf("\0_ec_\0")}var h=0
function c(t,e){return t&&t.hasOwnProperty(e)}e.normalizeToArray=l,e.defaultEmphasis=function(t,e,n){if(t){t[e]=t[e]||{},t.emphasis=t.emphasis||{},t.emphasis[e]=t.emphasis[e]||{}
for(var i=0,r=n.length;i<r;i++){var a=n[i]
!t.emphasis[e].hasOwnProperty(a)&&t[e].hasOwnProperty(a)&&(t.emphasis[e][a]=t[e][a])}}},e.TEXT_STYLE_OPTIONS=["fontStyle","fontWeight","fontSize","fontFamily","rich","tag","color","textBorderColor","textBorderWidth","width","height","lineHeight","align","verticalAlign","baseline","shadowColor","shadowBlur","shadowOffsetX","shadowOffsetY","textShadowColor","textShadowBlur","textShadowOffsetX","textShadowOffsetY","backgroundColor","borderColor","borderWidth","borderRadius","padding"],e.getDataItemValue=function(t){return!a(t)||o(t)||t instanceof Date?t:t.value},e.isDataItemOption=function(t){return a(t)&&!(t instanceof Array)},e.mappingToExists=function(t,e){e=(e||[]).slice()
var n=i.map(t||[],function(t,e){return{exist:t}})
return r(e,function(t,i){if(a(t)){for(var r=0;r<n.length;r++)if(!n[r].option&&null!=t.id&&n[r].exist.id===t.id+"")return n[r].option=t,void(e[i]=null)
for(r=0;r<n.length;r++){var o=n[r].exist
if(!(n[r].option||null!=o.id&&null!=t.id||null==t.name||u(t)||u(o)||o.name!==t.name+""))return n[r].option=t,void(e[i]=null)}}}),r(e,function(t,e){if(a(t)){for(var i=0;i<n.length;i++){var r=n[i].exist
if(!n[i].option&&!u(r)&&null==t.id){n[i].option=t
break}}i>=n.length&&n.push({option:t})}}),n},e.makeIdAndName=function(t){var e=i.createHashMap()
r(t,function(t,n){var i=t.exist
i&&e.set(i.id,t)}),r(t,function(t,n){var r=t.option
i.assert(!r||null==r.id||!e.get(r.id)||e.get(r.id)===t,"id duplicates: "+(r&&r.id)),r&&null!=r.id&&e.set(r.id,t),!t.keyInfo&&(t.keyInfo={})}),r(t,function(t,n){var i=t.exist,r=t.option,o=t.keyInfo
if(a(r)){if(o.name=null!=r.name?r.name+"":i?i.name:s+n,i)o.id=i.id
else if(null!=r.id)o.id=r.id+""
else{var l=0
do{o.id="\0"+o.name+"\0"+l++}while(e.get(o.id))}e.set(o.id,t)}})},e.isNameSpecified=function(t){var e=t.name
return!(!e||!e.indexOf(s))},e.isIdInner=u,e.compressBatches=function(t,e){var n={},i={}
return r(t||[],n),r(e||[],i,n),[a(n),a(i)]
function r(t,e,n){for(var i=0,r=t.length;i<r;i++)for(var a=t[i].seriesId,o=l(t[i].dataIndex),s=n&&n[a],u=0,h=o.length;u<h;u++){var c=o[u]
s&&s[c]?s[c]=null:(e[a]||(e[a]={}))[c]=1}}function a(t,e){var n=[]
for(var i in t)if(t.hasOwnProperty(i)&&null!=t[i])if(e)n.push(+i)
else{var r=a(t[i],!0)
r.length&&n.push({seriesId:i,dataIndex:r})}return n}},e.queryDataIndex=function(t,e){return null!=e.dataIndexInside?e.dataIndexInside:null!=e.dataIndex?i.isArray(e.dataIndex)?i.map(e.dataIndex,function(e){return t.indexOfRawIndex(e)}):t.indexOfRawIndex(e.dataIndex):null!=e.name?i.isArray(e.name)?i.map(e.name,function(e){return t.indexOfName(e)}):t.indexOfName(e.name):void 0},e.makeInner=function(){var t="__\0ec_inner_"+h+++"_"+Math.random().toFixed(5)
return function(e){return e[t]||(e[t]={})}},e.parseFinder=function(t,e,n){if(i.isString(e)){var a={}
a[e+"Index"]=0,e=a}var o=n&&n.defaultMainType
!o||c(e,o+"Index")||c(e,o+"Id")||c(e,o+"Name")||(e[o+"Index"]=0)
var s={}
return r(e,function(r,a){if(r=e[a],"dataIndex"!==a&&"dataIndexInside"!==a){var o=a.match(/^(\w+)(Index|Id|Name)$/)||[],l=o[1],u=(o[2]||"").toLowerCase()
if(!(!l||!u||null==r||"index"===u&&"none"===r||n&&n.includeMainTypes&&i.indexOf(n.includeMainTypes,l)<0)){var h={mainType:l}
"index"===u&&"all"===r||(h[u]=r)
var c=t.queryComponents(h)
s[l+"Models"]=c,s[l+"Model"]=c[0]}}else s[a]=r}),s},e.setAttribute=function(t,e,n){t.setAttribute?t.setAttribute(e,n):t[e]=n},e.getAttribute=function(t,e){return t.getAttribute?t.getAttribute(e):t[e]}},function(t,e,n){(function(t){var n
"undefined"!=typeof window?n=window.__DEV__:void 0!==t&&(n=t.__DEV__),void 0===n&&(n=!0)
var i=n
e.__DEV__=i}).call(this,n(4))},function(t,e){var n="undefined"==typeof Float32Array?Array:Float32Array
function i(t){return Math.sqrt(a(t))}var r=i
function a(t){return t[0]*t[0]+t[1]*t[1]}var o=a
function s(t,e){return Math.sqrt((t[0]-e[0])*(t[0]-e[0])+(t[1]-e[1])*(t[1]-e[1]))}var l=s
function u(t,e){return(t[0]-e[0])*(t[0]-e[0])+(t[1]-e[1])*(t[1]-e[1])}var h=u
e.create=function(t,e){var i=new n(2)
return null==t&&(t=0),null==e&&(e=0),i[0]=t,i[1]=e,i},e.copy=function(t,e){return t[0]=e[0],t[1]=e[1],t},e.clone=function(t){var e=new n(2)
return e[0]=t[0],e[1]=t[1],e},e.set=function(t,e,n){return t[0]=e,t[1]=n,t},e.add=function(t,e,n){return t[0]=e[0]+n[0],t[1]=e[1]+n[1],t},e.scaleAndAdd=function(t,e,n,i){return t[0]=e[0]+n[0]*i,t[1]=e[1]+n[1]*i,t},e.sub=function(t,e,n){return t[0]=e[0]-n[0],t[1]=e[1]-n[1],t},e.len=i,e.length=r,e.lenSquare=a,e.lengthSquare=o,e.mul=function(t,e,n){return t[0]=e[0]*n[0],t[1]=e[1]*n[1],t},e.div=function(t,e,n){return t[0]=e[0]/n[0],t[1]=e[1]/n[1],t},e.dot=function(t,e){return t[0]*e[0]+t[1]*e[1]},e.scale=function(t,e,n){return t[0]=e[0]*n,t[1]=e[1]*n,t},e.normalize=function(t,e){var n=i(e)
return 0===n?(t[0]=0,t[1]=0):(t[0]=e[0]/n,t[1]=e[1]/n),t},e.distance=s,e.dist=l,e.distanceSquare=u,e.distSquare=h,e.negate=function(t,e){return t[0]=-e[0],t[1]=-e[1],t},e.lerp=function(t,e,n,i){return t[0]=e[0]+i*(n[0]-e[0]),t[1]=e[1]+i*(n[1]-e[1]),t},e.applyTransform=function(t,e,n){var i=e[0],r=e[1]
return t[0]=n[0]*i+n[2]*r+n[4],t[1]=n[1]*i+n[3]*r+n[5],t},e.min=function(t,e,n){return t[0]=Math.min(e[0],n[0]),t[1]=Math.min(e[1],n[1]),t},e.max=function(t,e,n){return t[0]=Math.max(e[0],n[0]),t[1]=Math.max(e[1],n[1]),t}},function(t,e,n){var i=n(264),r=n(366),a=n(284),o=n(277),s=n(267),l=n(271),u=n(311),h=n(319)
e.Image=h
var c=n(289)
e.Group=c
var f=n(373)
e.Text=f
var d=n(374)
e.Circle=d
var p=n(375)
e.Sector=p
var g=n(376)
e.Ring=g
var v=n(377)
e.Polygon=v
var m=n(380)
e.Polyline=m
var _=n(381)
e.Rect=_
var y=n(382)
e.Line=y
var x=n(383)
e.BezierCurve=x
var w=n(384)
e.Arc=w
var b=n(385)
e.CompoundPath=b
var S=n(386)
e.LinearGradient=S
var M=n(387)
e.RadialGradient=M
var T=n(272)
e.BoundingRect=T
var C=n(388)
e.IncrementalDisplayable=C
var k=Math.round,D=Math.max,I=Math.min,A={}
function O(t,e,n,i){var a=r.createFromString(t,e),o=a.getBoundingRect()
return n&&("center"===i&&(n=P(n,o)),L(a,n)),a}function P(t,e){var n,i=e.width/e.height,r=t.height*i
return n=r<=t.width?t.height:(r=t.width)/i,{x:t.x+t.width/2-r/2,y:t.y+t.height/2-n/2,width:r,height:n}}var R=r.mergePath
function L(t,e){if(t.applyTransform){var n=t.getBoundingRect().calculateTransform(e)
t.applyTransform(n)}}function E(t,e,n){var i=k(2*t)
return(i+k(e))%2==0?i/2:(i+(n?1:-1))/2}function B(t){return null!=t&&"none"!=t}function N(t){return"string"==typeof t?a.lift(t,-.1):t}function z(t){if(t.__hoverStlDirty){var e=t.style.stroke,n=t.style.fill,i=t.__hoverStl
i.fill=i.fill||(B(n)?N(n):null),i.stroke=i.stroke||(B(e)?N(e):null)
var r={}
for(var a in i)null!=i[a]&&(r[a]=t.style[a])
t.__normalStl=r,t.__hoverStlDirty=!1}}function F(t){if(!t.__isHover){if(z(t),t.useHoverLayer)t.__zr&&t.__zr.addHover(t,t.__hoverStl)
else{var e=t.style,n=e.insideRollbackOpt
n&&function(t){var e=t.insideRollback
e&&(t.textFill=e.textFill,t.textStroke=e.textStroke,t.textStrokeWidth=e.textStrokeWidth)}(e),e.extendFrom(t.__hoverStl),n&&(Q(e,e.insideOriginalTextPosition,n),null==e.textFill&&(e.textFill=n.autoColor)),t.dirty(!1),t.z2+=1}t.__isHover=!0}}function H(t){if(t.__isHover){var e=t.__normalStl
t.useHoverLayer?t.__zr&&t.__zr.removeHover(t):(e&&t.setStyle(e),t.z2-=1),t.__isHover=!1}}function W(t){"group"===t.type?t.traverse(function(t){"group"!==t.type&&F(t)}):F(t)}function V(t){"group"===t.type?t.traverse(function(t){"group"!==t.type&&H(t)}):H(t)}function U(t,e){t.__hoverStl=t.hoverStyle||e||{},t.__hoverStlDirty=!0,t.__isHover&&z(t)}function q(t){this.__hoverSilentOnTouch&&t.zrByTouch||!this.__isEmphasis&&W(this)}function Y(t){this.__hoverSilentOnTouch&&t.zrByTouch||!this.__isEmphasis&&V(this)}function j(){this.__isEmphasis=!0,W(this)}function G(){this.__isEmphasis=!1,V(this)}function X(t,e,n,r,a){return Z(t,e,r,a),n&&i.extend(t,n),t.host&&t.host.dirty&&t.host.dirty(!1),t}function Z(t,e,n,r){if((n=n||A).isRectText){var a=e.getShallow("position")||(r?null:"inside")
"outside"===a&&(a="top"),t.textPosition=a,t.textOffset=e.getShallow("offset")
var o=e.getShallow("rotate")
null!=o&&(o*=Math.PI/180),t.textRotation=o,t.textDistance=i.retrieve2(e.getShallow("distance"),r?null:5)}var s,l=e.ecModel,u=l&&l.option.textStyle,h=function(t){for(var e;t&&t!==t.ecModel;){var n=(t.option||A).rich
if(n)for(var i in e=e||{},n)n.hasOwnProperty(i)&&(e[i]=1)
t=t.parentModel}return e}(e)
if(h)for(var c in s={},h)if(h.hasOwnProperty(c)){var f=e.getModel(["rich",c])
$(s[c]={},f,u,n,r)}return t.rich=s,$(t,e,u,n,r,!0),n.forceRich&&!n.textStyle&&(n.textStyle={}),t}function $(t,e,n,r,a,o){if(n=!a&&n||A,t.textFill=K(e.getShallow("color"),r)||n.color,t.textStroke=K(e.getShallow("textBorderColor"),r)||n.textBorderColor,t.textStrokeWidth=i.retrieve2(e.getShallow("textBorderWidth"),n.textBorderWidth),!a){if(o){var s=t.textPosition
t.insideRollback=Q(t,s,r),t.insideOriginalTextPosition=s,t.insideRollbackOpt=r}null==t.textFill&&(t.textFill=r.autoColor)}t.fontStyle=e.getShallow("fontStyle")||n.fontStyle,t.fontWeight=e.getShallow("fontWeight")||n.fontWeight,t.fontSize=e.getShallow("fontSize")||n.fontSize,t.fontFamily=e.getShallow("fontFamily")||n.fontFamily,t.textAlign=e.getShallow("align"),t.textVerticalAlign=e.getShallow("verticalAlign")||e.getShallow("baseline"),t.textLineHeight=e.getShallow("lineHeight"),t.textWidth=e.getShallow("width"),t.textHeight=e.getShallow("height"),t.textTag=e.getShallow("tag"),o&&r.disableBox||(t.textBackgroundColor=K(e.getShallow("backgroundColor"),r),t.textPadding=e.getShallow("padding"),t.textBorderColor=K(e.getShallow("borderColor"),r),t.textBorderWidth=e.getShallow("borderWidth"),t.textBorderRadius=e.getShallow("borderRadius"),t.textBoxShadowColor=e.getShallow("shadowColor"),t.textBoxShadowBlur=e.getShallow("shadowBlur"),t.textBoxShadowOffsetX=e.getShallow("shadowOffsetX"),t.textBoxShadowOffsetY=e.getShallow("shadowOffsetY")),t.textShadowColor=e.getShallow("textShadowColor")||n.textShadowColor,t.textShadowBlur=e.getShallow("textShadowBlur")||n.textShadowBlur,t.textShadowOffsetX=e.getShallow("textShadowOffsetX")||n.textShadowOffsetX,t.textShadowOffsetY=e.getShallow("textShadowOffsetY")||n.textShadowOffsetY}function K(t,e){return"auto"!==t?t:e&&e.autoColor?e.autoColor:null}function Q(t,e,n){var i,r=n.useInsideStyle
return null==t.textFill&&!1!==r&&(!0===r||n.isRectText&&e&&"string"==typeof e&&e.indexOf("inside")>=0)&&(i={textFill:null,textStroke:t.textStroke,textStrokeWidth:t.textStrokeWidth},t.textFill="#fff",null==t.textStroke&&(t.textStroke=n.autoColor,null==t.textStrokeWidth&&(t.textStrokeWidth=2))),i}function J(t,e,n,i,r,a){if("function"==typeof r&&(a=r,r=null),i&&i.isAnimationEnabled()){var o=t?"Update":"",s=i.getShallow("animationDuration"+o),l=i.getShallow("animationEasing"+o),u=i.getShallow("animationDelay"+o)
"function"==typeof u&&(u=u(r,i.getAnimationDelayParams?i.getAnimationDelayParams(e,r):null)),"function"==typeof s&&(s=s(r)),s>0?e.animateTo(n,s,u||0,l,a,!!a):(e.stopAnimation(),e.attr(n),a&&a())}else e.stopAnimation(),e.attr(n),a&&a()}function tt(t,e,n,i,r){J(!0,t,e,n,i,r)}function et(t,e,n){return e&&!i.isArrayLike(e)&&(e=u.getLocalTransform(e)),n&&(e=o.invert([],e)),s.applyTransform([],t,e)}e.extendShape=function(t){return l.extend(t)},e.extendPath=function(t,e){return r.extendFromString(t,e)},e.makePath=O,e.makeImage=function(t,e,n){var i=new h({style:{image:t,x:e.x,y:e.y,width:e.width,height:e.height},onload:function(t){if("center"===n){var r={width:t.width,height:t.height}
i.setStyle(P(e,r))}}})
return i},e.mergePath=R,e.resizePath=L,e.subPixelOptimizeLine=function(t){var e=t.shape,n=t.style.lineWidth
return k(2*e.x1)===k(2*e.x2)&&(e.x1=e.x2=E(e.x1,n,!0)),k(2*e.y1)===k(2*e.y2)&&(e.y1=e.y2=E(e.y1,n,!0)),t},e.subPixelOptimizeRect=function(t){var e=t.shape,n=t.style.lineWidth,i=e.x,r=e.y,a=e.width,o=e.height
return e.x=E(e.x,n,!0),e.y=E(e.y,n,!0),e.width=Math.max(E(i+a,n,!1)-e.x,0===a?0:1),e.height=Math.max(E(r+o,n,!1)-e.y,0===o?0:1),t},e.subPixelOptimize=E,e.setHoverStyle=function(t,e,n){t.__hoverSilentOnTouch=n&&n.hoverSilentOnTouch,"group"===t.type?t.traverse(function(t){"group"!==t.type&&U(t,e)}):U(t,e),t.on("mouseover",q).on("mouseout",Y),t.on("emphasis",j).on("normal",G)},e.setLabelStyle=function(t,e,n,r,a,o,s){var l,u=(a=a||A).labelFetcher,h=a.labelDataIndex,c=a.labelDimIndex,f=n.getShallow("show"),d=r.getShallow("show");(f||d)&&(u&&(l=u.getFormattedLabel(h,"normal",null,c)),null==l&&(l=i.isFunction(a.defaultText)?a.defaultText(h,a):a.defaultText))
var p=f?l:null,g=d?i.retrieve2(u?u.getFormattedLabel(h,"emphasis",null,c):null,l):null
null==p&&null==g||(X(t,n,o,a),X(e,r,s,a,!0)),t.text=p,e.text=g},e.setTextStyle=X,e.setText=function(t,e,n){var i,r={isRectText:!0}
!1===n?i=!0:r.autoColor=n,Z(t,e,r,i),t.host&&t.host.dirty&&t.host.dirty(!1)},e.getFont=function(t,e){var n=e||e.getModel("textStyle")
return i.trim([t.fontStyle||n&&n.getShallow("fontStyle")||"",t.fontWeight||n&&n.getShallow("fontWeight")||"",(t.fontSize||n&&n.getShallow("fontSize")||12)+"px",t.fontFamily||n&&n.getShallow("fontFamily")||"sans-serif"].join(" "))},e.updateProps=tt,e.initProps=function(t,e,n,i,r){J(!1,t,e,n,i,r)},e.getTransform=function(t,e){for(var n=o.identity([]);t&&t!==e;)o.mul(n,t.getLocalTransform(),n),t=t.parent
return n},e.applyTransform=et,e.transformDirection=function(t,e,n){var i=0===e[4]||0===e[5]||0===e[0]?1:Math.abs(2*e[4]/e[0]),r=0===e[4]||0===e[5]||0===e[2]?1:Math.abs(2*e[4]/e[2]),a=["left"===t?-i:"right"===t?i:0,"top"===t?-r:"bottom"===t?r:0]
return a=et(a,e,n),Math.abs(a[0])>Math.abs(a[1])?a[0]>0?"right":"left":a[1]>0?"bottom":"top"},e.groupTransition=function(t,e,n,r){if(t&&e){var a=function(t){var e={}
return t.traverse(function(t){!t.isGroup&&t.anid&&(e[t.anid]=t)}),e}(t)
e.traverse(function(t){if(!t.isGroup&&t.anid){var e=a[t.anid]
if(e){var i=o(t)
t.attr(o(e)),tt(t,i,n,t.dataIndex)}}})}function o(t){var e={position:s.clone(t.position),rotation:t.rotation}
return t.shape&&(e.shape=i.extend({},t.shape)),e}},e.clipPointsByRect=function(t,e){return i.map(t,function(t){var n=t[0]
n=D(n,e.x),n=I(n,e.x+e.width)
var i=t[1]
return i=D(i,e.y),[n,i=I(i,e.y+e.height)]})},e.clipRectByRect=function(t,e){var n=D(t.x,e.x),i=I(t.x+t.width,e.x+e.width),r=D(t.y,e.y),a=I(t.y+t.height,e.y+e.height)
if(i>=n&&a>=r)return{x:n,y:r,width:i-n,height:a-r}},e.createIcon=function(t,e,n){var r=(e=i.extend({rectHover:!0},e)).style={strokeNoScale:!0}
if(n=n||{x:-1,y:-1,width:2,height:2},t)return 0===t.indexOf("image://")?(r.image=t.slice(8),i.defaults(r,n),new h(e)):O(t.replace("path://",""),e,n,"center")}},function(t,e,n){var i=n(264),r=/^(?:(\d{4})(?:[-\/](\d{1,2})(?:[-\/](\d{1,2})(?:[T ](\d{1,2})(?::(\d\d)(?::(\d\d)(?:[.,](\d+))?)?)?(Z|[\+\-]\d\d:?\d\d)?)?)?)?)?$/
function a(t){return Math.floor(Math.log(t)/Math.LN10)}e.linearMap=function(t,e,n,i){var r=e[1]-e[0],a=n[1]-n[0]
if(0===r)return 0===a?n[0]:(n[0]+n[1])/2
if(i)if(r>0){if(t<=e[0])return n[0]
if(t>=e[1])return n[1]}else{if(t>=e[0])return n[0]
if(t<=e[1])return n[1]}else{if(t===e[0])return n[0]
if(t===e[1])return n[1]}return(t-e[0])/r*a+n[0]},e.parsePercent=function(t,e){switch(t){case"center":case"middle":t="50%"
break
case"left":case"top":t="0%"
break
case"right":case"bottom":t="100%"}return"string"==typeof t?function(t){return t.replace(/^\s+/,"").replace(/\s+$/,"")}(t).match(/%$/)?parseFloat(t)/100*e:parseFloat(t):null==t?NaN:+t},e.round=function(t,e,n){return null==e&&(e=10),e=Math.min(Math.max(0,e),20),t=(+t).toFixed(e),n?t:+t},e.asc=function(t){return t.sort(function(t,e){return t-e}),t},e.getPrecision=function(t){if(t=+t,isNaN(t))return 0
for(var e=1,n=0;Math.round(t*e)/e!==t;)e*=10,n++
return n},e.getPrecisionSafe=function(t){var e=t.toString(),n=e.indexOf("e")
if(n>0){var i=+e.slice(n+1)
return i<0?-i:0}var r=e.indexOf(".")
return r<0?0:e.length-1-r},e.getPixelPrecision=function(t,e){var n=Math.log,i=Math.LN10,r=Math.floor(n(t[1]-t[0])/i),a=Math.round(n(Math.abs(e[1]-e[0]))/i),o=Math.min(Math.max(-r+a,0),20)
return isFinite(o)?o:20},e.getPercentWithPrecision=function(t,e,n){if(!t[e])return 0
var r=i.reduce(t,function(t,e){return t+(isNaN(e)?0:e)},0)
if(0===r)return 0
for(var a=Math.pow(10,n),o=i.map(t,function(t){return(isNaN(t)?0:t)/r*a*100}),s=100*a,l=i.map(o,function(t){return Math.floor(t)}),u=i.reduce(l,function(t,e){return t+e},0),h=i.map(o,function(t,e){return t-l[e]});u<s;){for(var c=Number.NEGATIVE_INFINITY,f=null,d=0,p=h.length;d<p;++d)h[d]>c&&(c=h[d],f=d);++l[f],h[f]=0,++u}return l[e]/a},e.MAX_SAFE_INTEGER=9007199254740991,e.remRadian=function(t){var e=2*Math.PI
return(t%e+e)%e},e.isRadianAroundZero=function(t){return t>-1e-4&&t<1e-4},e.parseDate=function(t){if(t instanceof Date)return t
if("string"==typeof t){var e=r.exec(t)
if(!e)return new Date(NaN)
if(e[8]){var n=+e[4]||0
return"Z"!==e[8].toUpperCase()&&(n-=e[8].slice(0,3)),new Date(Date.UTC(+e[1],+(e[2]||1)-1,+e[3]||1,n,+(e[5]||0),+e[6]||0,+e[7]||0))}return new Date(+e[1],+(e[2]||1)-1,+e[3]||1,+e[4]||0,+(e[5]||0),+e[6]||0,+e[7]||0)}return null==t?new Date(NaN):new Date(Math.round(t))},e.quantity=function(t){return Math.pow(10,a(t))},e.nice=function(t,e){var n=a(t),i=Math.pow(10,n),r=t/i
return t=(e?r<1.5?1:r<2.5?2:r<4?3:r<7?5:10:r<1?1:r<2?2:r<3?3:r<5?5:10)*i,n>=-20?+t.toFixed(n<0?-n:0):t},e.reformIntervals=function(t){t.sort(function(t,e){return function t(e,n,i){return e.interval[i]<n.interval[i]||e.interval[i]===n.interval[i]&&(e.close[i]-n.close[i]==(i?-1:1)||!i&&t(e,n,1))}(t,e,0)?-1:1})
for(var e=-1/0,n=1,i=0;i<t.length;){for(var r=t[i].interval,a=t[i].close,o=0;o<2;o++)r[o]<=e&&(r[o]=e,a[o]=o?1:1-n),e=r[o],n=a[o]
r[0]===r[1]&&a[0]*a[1]!=1?t.splice(i,1):i++}return t},e.isNumeric=function(t){return t-parseFloat(t)>=0}},function(t,e){var n="object"==typeof wx&&"function"==typeof wx.getSystemInfoSync?{browser:{},os:{},node:!1,wxa:!0,canvasSupported:!0,svgSupported:!1,touchEventsSupported:!0}:"undefined"==typeof document&&"undefined"!=typeof self?{browser:{},os:{},node:!1,worker:!0,canvasSupported:!0}:"undefined"==typeof navigator?{browser:{},os:{},node:!0,worker:!1,canvasSupported:!0,svgSupported:!0}:function(t){var e={},n=t.match(/Firefox\/([\d.]+)/),i=t.match(/MSIE\s([\d.]+)/)||t.match(/Trident\/.+?rv:(([\d.]+))/),r=t.match(/Edge\/([\d.]+)/),a=/micromessenger/i.test(t)
return n&&(e.firefox=!0,e.version=n[1]),i&&(e.ie=!0,e.version=i[1]),r&&(e.edge=!0,e.version=r[1]),a&&(e.weChat=!0),{browser:e,os:{},node:!1,canvasSupported:!!document.createElement("canvas").getContext,svgSupported:"undefined"!=typeof SVGRect,touchEventsSupported:"ontouchstart"in window&&!e.ie&&!e.edge,pointerEventsSupported:"onpointerdown"in window&&(e.edge||e.ie&&e.version>=11)}}(navigator.userAgent)
t.exports=n},function(t,e,n){var i=n(291),r=n(264),a=n(292),o=n(367),s=n(317).prototype.getCanvasPattern,l=Math.abs,u=new a(!0)
function h(t){i.call(this,t),this.path=null}h.prototype={constructor:h,type:"path",__dirtyPath:!0,strokeContainThreshold:5,brush:function(t,e){var n,i=this.style,r=this.path||u,a=i.hasStroke(),o=i.hasFill(),l=i.fill,h=i.stroke,c=o&&!!l.colorStops,f=a&&!!h.colorStops,d=o&&!!l.image,p=a&&!!h.image
i.bind(t,this,e),this.setTransform(t),this.__dirty&&(c&&(n=n||this.getBoundingRect(),this._fillGradient=i.getGradient(t,l,n)),f&&(n=n||this.getBoundingRect(),this._strokeGradient=i.getGradient(t,h,n))),c?t.fillStyle=this._fillGradient:d&&(t.fillStyle=s.call(l,t)),f?t.strokeStyle=this._strokeGradient:p&&(t.strokeStyle=s.call(h,t))
var g=i.lineDash,v=i.lineDashOffset,m=!!t.setLineDash,_=this.getGlobalScale()
r.setScale(_[0],_[1]),this.__dirtyPath||g&&!m&&a?(r.beginPath(t),g&&!m&&(r.setLineDash(g),r.setLineDashOffset(v)),this.buildPath(r,this.shape,!1),this.path&&(this.__dirtyPath=!1)):(t.beginPath(),this.path.rebuildPath(t)),o&&r.fill(t),g&&m&&(t.setLineDash(g),t.lineDashOffset=v),a&&r.stroke(t),g&&m&&t.setLineDash([]),null!=i.text&&(this.restoreTransform(t),this.drawRectText(t,this.getBoundingRect()))},buildPath:function(t,e,n){},createPathProxy:function(){this.path=new a},getBoundingRect:function(){var t=this._rect,e=this.style,n=!t
if(n){var i=this.path
i||(i=this.path=new a),this.__dirtyPath&&(i.beginPath(),this.buildPath(i,this.shape,!1)),t=i.getBoundingRect()}if(this._rect=t,e.hasStroke()){var r=this._rectWithStroke||(this._rectWithStroke=t.clone())
if(this.__dirty||n){r.copy(t)
var o=e.lineWidth,s=e.strokeNoScale?this.getLineScale():1
e.hasFill()||(o=Math.max(o,this.strokeContainThreshold||4)),s>1e-10&&(r.width+=o/s,r.height+=o/s,r.x-=o/s/2,r.y-=o/s/2)}return r}return t},contain:function(t,e){var n=this.transformCoordToLocal(t,e),i=this.getBoundingRect(),r=this.style
if(t=n[0],e=n[1],i.contain(t,e)){var a=this.path.data
if(r.hasStroke()){var s=r.lineWidth,l=r.strokeNoScale?this.getLineScale():1
if(l>1e-10&&(r.hasFill()||(s=Math.max(s,this.strokeContainThreshold)),o.containStroke(a,s/l,t,e)))return!0}if(r.hasFill())return o.contain(a,t,e)}return!1},dirty:function(t){null==t&&(t=!0),t&&(this.__dirtyPath=t,this._rect=null),this.__dirty=!0,this.__zr&&this.__zr.refresh(),this.__clipTarget&&this.__clipTarget.dirty()},animateShape:function(t){return this.animate("shape",t)},attrKV:function(t,e){"shape"===t?(this.setShape(e),this.__dirtyPath=!0,this._rect=null):i.prototype.attrKV.call(this,t,e)},setShape:function(t,e){var n=this.shape
if(n){if(r.isObject(t))for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i])
else n[t]=e
this.dirty(!0)}return this},getLineScale:function(){var t=this.transform
return t&&l(t[0]-1)>1e-10&&l(t[3]-1)>1e-10?Math.sqrt(l(t[0]*t[3]-t[2]*t[1])):1}},h.extend=function(t){var e=function(e){h.call(this,e),t.style&&this.style.extendFrom(t.style,!1)
var n=t.shape
if(n){this.shape=this.shape||{}
var i=this.shape
for(var r in n)!i.hasOwnProperty(r)&&n.hasOwnProperty(r)&&(i[r]=n[r])}t.init&&t.init.call(this,e)}
for(var n in r.inherits(e,h),t)"style"!==n&&"shape"!==n&&(e.prototype[n]=t[n])
return e},r.inherits(h,i)
var c=h
t.exports=c},function(t,e,n){var i=n(267),r=n(277),a=i.applyTransform,o=Math.min,s=Math.max
function l(t,e,n,i){n<0&&(t+=n,n=-n),i<0&&(e+=i,i=-i),this.x=t,this.y=e,this.width=n,this.height=i}l.prototype={constructor:l,union:function(t){var e=o(t.x,this.x),n=o(t.y,this.y)
this.width=s(t.x+t.width,this.x+this.width)-e,this.height=s(t.y+t.height,this.y+this.height)-n,this.x=e,this.y=n},applyTransform:function(){var t=[],e=[],n=[],i=[]
return function(r){if(r){t[0]=n[0]=this.x,t[1]=i[1]=this.y,e[0]=i[0]=this.x+this.width,e[1]=n[1]=this.y+this.height,a(t,t,r),a(e,e,r),a(n,n,r),a(i,i,r),this.x=o(t[0],e[0],n[0],i[0]),this.y=o(t[1],e[1],n[1],i[1])
var l=s(t[0],e[0],n[0],i[0]),u=s(t[1],e[1],n[1],i[1])
this.width=l-this.x,this.height=u-this.y}}}(),calculateTransform:function(t){var e=this,n=t.width/e.width,i=t.height/e.height,a=r.create()
return r.translate(a,a,[-e.x,-e.y]),r.scale(a,a,[n,i]),r.translate(a,a,[t.x,t.y]),a},intersect:function(t){if(!t)return!1
t instanceof l||(t=l.create(t))
var e=this,n=e.x,i=e.x+e.width,r=e.y,a=e.y+e.height,o=t.x,s=t.x+t.width,u=t.y,h=t.y+t.height
return!(i<o||s<n||a<u||h<r)},contain:function(t,e){return t>=this.x&&t<=this.x+this.width&&e>=this.y&&e<=this.y+this.height},clone:function(){return new l(this.x,this.y,this.width,this.height)},copy:function(t){this.x=t.x,this.y=t.y,this.width=t.width,this.height=t.height},plain:function(){return{x:this.x,y:this.y,width:this.width,height:this.height}}},l.create=function(t){return new l(t.x,t.y,t.width,t.height)}
var u=l
t.exports=u},function(t,e,n){var i=n(264),r=n(278),a=n(269),o=i.normalizeCssArray,s=/([&<>"'])/g,l={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}
function u(t){return null==t?"":(t+"").replace(s,function(t,e){return l[e]})}var h=["a","b","c","d","e","f","g"],c=function(t,e){return"{"+t+(null==e?"":e)+"}"}
function f(t,e){return"0000".substr(0,e-(t+="").length)+t}var d=r.truncateText,p=r.getBoundingRect
e.addCommas=function(t){return isNaN(t)?"-":(t=(t+"").split("."))[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g,"$1,")+(t.length>1?"."+t[1]:"")},e.toCamelCase=function(t,e){return t=(t||"").toLowerCase().replace(/-(.)/g,function(t,e){return e.toUpperCase()}),e&&t&&(t=t.charAt(0).toUpperCase()+t.slice(1)),t},e.normalizeCssArray=o,e.encodeHTML=u,e.formatTpl=function(t,e,n){i.isArray(e)||(e=[e])
var r=e.length
if(!r)return""
for(var a=e[0].$vars||[],o=0;o<a.length;o++){var s=h[o]
t=t.replace(c(s),c(s,0))}for(var l=0;l<r;l++)for(var f=0;f<a.length;f++){var d=e[l][a[f]]
t=t.replace(c(h[f],l),n?u(d):d)}return t},e.formatTplSimple=function(t,e,n){return i.each(e,function(e,i){t=t.replace("{"+i+"}",n?u(e):e)}),t},e.getTooltipMarker=function(t,e){var n=(t=i.isString(t)?{color:t,extraCssText:e}:t||{}).color,r=t.type
return e=t.extraCssText,n?"subItem"===r?'<span style="display:inline-block;vertical-align:middle;margin-right:8px;margin-left:3px;border-radius:4px;width:4px;height:4px;background-color:'+u(n)+";"+(e||"")+'"></span>':'<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:'+u(n)+";"+(e||"")+'"></span>':""},e.formatTime=function(t,e,n){"week"!==t&&"month"!==t&&"quarter"!==t&&"half-year"!==t&&"year"!==t||(t="MM-dd\nyyyy")
var i=a.parseDate(e),r=n?"UTC":"",o=i["get"+r+"FullYear"](),s=i["get"+r+"Month"]()+1,l=i["get"+r+"Date"](),u=i["get"+r+"Hours"](),h=i["get"+r+"Minutes"](),c=i["get"+r+"Seconds"](),d=i["get"+r+"Milliseconds"]()
return t.replace("MM",f(s,2)).replace("M",s).replace("yyyy",o).replace("yy",o%100).replace("dd",f(l,2)).replace("d",l).replace("hh",f(u,2)).replace("h",u).replace("mm",f(h,2)).replace("m",h).replace("ss",f(c,2)).replace("s",c).replace("SSS",f(d,3))},e.capitalFirst=function(t){return t?t.charAt(0).toUpperCase()+t.substr(1):t},e.truncateText=d,e.getTextRect=p},function(t,e,n){var i=n(264),r=n(270),a=n(265).makeInner,o=n(275),s=o.enableClassExtend,l=o.enableClassCheck,u=n(363),h=n(364),c=n(365),f=n(389),d=i.mixin,p=a()
function g(t,e,n){this.parentModel=e,this.ecModel=n,this.option=t}function v(t,e,n){for(var i=0;i<e.length&&(!e[i]||null!=(t=t&&"object"==typeof t?t[e[i]]:null));i++);return null==t&&n&&(t=n.get(e)),t}function m(t,e){var n=p(t).getParent
return n?n.call(t,e):t.parentModel}g.prototype={constructor:g,init:null,mergeOption:function(t){i.merge(this.option,t,!0)},get:function(t,e){return null==t?this.option:v(this.option,this.parsePath(t),!e&&m(this,t))},getShallow:function(t,e){var n=this.option,i=null==n?n:n[t],r=!e&&m(this,t)
return null==i&&r&&(i=r.getShallow(t)),i},getModel:function(t,e){var n
return new g(null==t?this.option:v(this.option,t=this.parsePath(t)),e=e||(n=m(this,t))&&n.getModel(t),this.ecModel)},isEmpty:function(){return null==this.option},restoreData:function(){},clone:function(){return new(0,this.constructor)(i.clone(this.option))},setReadOnly:function(t){},parsePath:function(t){return"string"==typeof t&&(t=t.split(".")),t},customizeGetParent:function(t){p(this).getParent=t},isAnimationEnabled:function(){if(!r.node){if(null!=this.option.animation)return!!this.option.animation
if(this.parentModel)return this.parentModel.isAnimationEnabled()}}},s(g),l(g),d(g,u),d(g,h),d(g,c),d(g,f)
var _=g
t.exports=_},function(t,e,n){n(266).__DEV__
var i=n(264),r=".",a="___EC__COMPONENT__CONTAINER___"
function o(t){var e={main:"",sub:""}
return t&&(t=t.split(r),e.main=t[0]||"",e.sub=t[1]||""),e}var s=0
function l(t,e){var n=i.slice(arguments,2)
return this.superClass.prototype[e].apply(t,n)}function u(t,e,n){return this.superClass.prototype[e].apply(t,n)}e.parseClassType=o,e.enableClassExtend=function(t,e){t.$constructor=t,t.extend=function(t){var e=this,n=function(){t.$constructor?t.$constructor.apply(this,arguments):e.apply(this,arguments)}
return i.extend(n.prototype,t),n.extend=this.extend,n.superCall=l,n.superApply=u,i.inherits(n,this),n.superClass=e,n}},e.enableClassCheck=function(t){var e=["__\0is_clz",s++,Math.random().toFixed(3)].join("_")
t.prototype[e]=!0,t.isInstance=function(t){return!(!t||!t[e])}},e.enableClassManagement=function(t,e){e=e||{}
var n={}
if(t.registerClass=function(t,e){return e&&(function(t){i.assert(/^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)?$/.test(t),'componentType "'+t+'" illegal')}(e),(e=o(e)).sub?e.sub!==a&&((function(t){var e=n[t.main]
return e&&e[a]||((e=n[t.main]={})[a]=!0),e}(e))[e.sub]=t):n[e.main]=t),t},t.getClass=function(t,e,i){var r=n[t]
if(r&&r[a]&&(r=e?r[e]:null),i&&!r)throw new Error(e?"Component "+t+"."+(e||"")+" not exists. Load it first.":t+".type should be specified.")
return r},t.getClassesByMainType=function(t){t=o(t)
var e=[],r=n[t.main]
return r&&r[a]?i.each(r,function(t,n){n!==a&&e.push(t)}):e.push(r),e},t.hasClass=function(t){return t=o(t),!!n[t.main]},t.getAllClassMainTypes=function(){var t=[]
return i.each(n,function(e,n){t.push(n)}),t},t.hasSubTypes=function(t){t=o(t)
var e=n[t.main]
return e&&e[a]},t.parseClassType=o,e.registerWhenExtend){var r=t.extend
r&&(t.extend=function(e){var n=r.call(this,e)
return t.registerClass(n,e.type)})}return t},e.setReadOnly=function(t,e){}},function(t,e,n){var i=n(264),r=n(274),a=n(293),o=n(275),s=o.enableClassManagement,l=o.parseClassType,u=n(265).makeInner,h=n(280),c=n(390),f=u(),d=r.extend({type:"component",id:"",name:"",mainType:"",subType:"",componentIndex:0,defaultOption:null,ecModel:null,dependentModels:[],uid:null,layoutMode:null,$constructor:function(t,e,n,i){r.call(this,t,e,n,i),this.uid=a.getUID("ec_cpt_model")},init:function(t,e,n,i){this.mergeDefaultAndTheme(t,n)},mergeDefaultAndTheme:function(t,e){var n=this.layoutMode,r=n?h.getLayoutParams(t):{},a=e.getTheme()
i.merge(t,a.get(this.mainType)),i.merge(t,this.getDefaultOption()),n&&h.mergeLayoutParam(t,r,n)},mergeOption:function(t,e){i.merge(this.option,t,!0)
var n=this.layoutMode
n&&h.mergeLayoutParam(this.option,t,n)},optionUpdated:function(t,e){},getDefaultOption:function(){var t=f(this)
if(!t.defaultOption){for(var e=[],n=this.constructor;n;){var r=n.prototype.defaultOption
r&&e.push(r),n=n.superClass}for(var a={},o=e.length-1;o>=0;o--)a=i.merge(a,e[o],!0)
t.defaultOption=a}return t.defaultOption},getReferringComponents:function(t){return this.ecModel.queryComponents({mainType:t,index:this.get(t+"Index",!0),id:this.get(t+"Id",!0)})}})
s(d,{registerWhenExtend:!0}),a.enableSubTypeDefaulter(d),a.enableTopologicalTravel(d,function(t){var e=[]
return i.each(d.getClassesByMainType(t),function(t){e=e.concat(t.prototype.dependencies||[])}),e=i.map(e,function(t){return l(t).main}),"dataset"!==t&&i.indexOf(e,"dataset")<=0&&e.unshift("dataset"),e}),i.mixin(d,c)
var p=d
t.exports=p},function(t,e){var n="undefined"==typeof Float32Array?Array:Float32Array
function i(){var t=new n(6)
return r(t),t}function r(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=0,t[5]=0,t}function a(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t}e.create=i,e.identity=r,e.copy=a,e.mul=function(t,e,n){var i=e[0]*n[0]+e[2]*n[1],r=e[1]*n[0]+e[3]*n[1],a=e[0]*n[2]+e[2]*n[3],o=e[1]*n[2]+e[3]*n[3],s=e[0]*n[4]+e[2]*n[5]+e[4],l=e[1]*n[4]+e[3]*n[5]+e[5]
return t[0]=i,t[1]=r,t[2]=a,t[3]=o,t[4]=s,t[5]=l,t},e.translate=function(t,e,n){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4]+n[0],t[5]=e[5]+n[1],t},e.rotate=function(t,e,n){var i=e[0],r=e[2],a=e[4],o=e[1],s=e[3],l=e[5],u=Math.sin(n),h=Math.cos(n)
return t[0]=i*h+o*u,t[1]=-i*u+o*h,t[2]=r*h+s*u,t[3]=-r*u+h*s,t[4]=h*a+u*l,t[5]=h*l-u*a,t},e.scale=function(t,e,n){var i=n[0],r=n[1]
return t[0]=e[0]*i,t[1]=e[1]*r,t[2]=e[2]*i,t[3]=e[3]*r,t[4]=e[4]*i,t[5]=e[5]*r,t},e.invert=function(t,e){var n=e[0],i=e[2],r=e[4],a=e[1],o=e[3],s=e[5],l=n*o-a*i
return l?(l=1/l,t[0]=o*l,t[1]=-a*l,t[2]=-i*l,t[3]=n*l,t[4]=(i*s-o*r)*l,t[5]=(a*r-n*s)*l,t):null},e.clone=function(t){var e=i()
return a(e,t),e}},function(t,e,n){var i=n(272),r=n(298),a=n(264),o=a.getContext,s=a.extend,l=a.retrieve2,u=a.retrieve3,h=a.trim,c={},f=0,d=5e3,p=/\{([a-zA-Z0-9_]+)\|([^}]*)\}/g,g="12px sans-serif",v={}
function m(t,e){var n=t+":"+(e=e||g)
if(c[n])return c[n]
for(var i=(t+"").split("\n"),r=0,a=0,o=i.length;a<o;a++)r=Math.max(T(i[a],e).width,r)
return f>d&&(f=0,c={}),f++,c[n]=r,r}function _(t,e,n){return"right"===n?t-=e:"center"===n&&(t-=e/2),t}function y(t,e,n){return"middle"===n?t-=e/2:"bottom"===n&&(t-=e),t}function x(t,e,n,i,r){if(!e)return""
var a=(t+"").split("\n")
r=w(e,n,i,r)
for(var o=0,s=a.length;o<s;o++)a[o]=b(a[o],r)
return a.join("\n")}function w(t,e,n,i){(i=s({},i)).font=e,n=l(n,"..."),i.maxIterations=l(i.maxIterations,2)
var r=i.minChar=l(i.minChar,0)
i.cnCharWidth=m("国",e)
var a=i.ascCharWidth=m("a",e)
i.placeholder=l(i.placeholder,"")
for(var o=t=Math.max(0,t-1),u=0;u<r&&o>=a;u++)o-=a
var h=m(n)
return h>o&&(n="",h=0),o=t-h,i.ellipsis=n,i.ellipsisWidth=h,i.contentWidth=o,i.containerWidth=t,i}function b(t,e){var n=e.containerWidth,i=e.font,r=e.contentWidth
if(!n)return""
var a=m(t,i)
if(a<=n)return t
for(var o=0;;o++){if(a<=r||o>=e.maxIterations){t+=e.ellipsis
break}var s=0===o?S(t,r,e.ascCharWidth,e.cnCharWidth):a>0?Math.floor(t.length*r/a):0
a=m(t=t.substr(0,s),i)}return""===t&&(t=e.placeholder),t}function S(t,e,n,i){for(var r=0,a=0,o=t.length;a<o&&r<e;a++){var s=t.charCodeAt(a)
r+=0<=s&&s<=127?n:i}return a}function M(t){return m("国",t)}function T(t,e){return v.measureText(t,e)}function C(t,e,n,i){null!=t&&(t+="")
var r=M(e),a=t?t.split("\n"):[],o=a.length*r,s=o
if(n&&(s+=n[0]+n[2]),t&&i){var l=i.outerHeight,u=i.outerWidth
if(null!=l&&s>l)t="",a=[]
else if(null!=u)for(var h=w(u-(n?n[1]+n[3]:0),e,i.ellipsis,{minChar:i.minChar,placeholder:i.placeholder}),c=0,f=a.length;c<f;c++)a[c]=b(a[c],h)}return{lines:a,height:o,outerHeight:s,lineHeight:r}}function k(t,e){var n={lines:[],width:0,height:0}
if(null!=t&&(t+=""),!t)return n
for(var i,a=p.lastIndex=0;null!=(i=p.exec(t));){var o=i.index
o>a&&D(n,t.substring(a,o)),D(n,i[2],i[1]),a=p.lastIndex}a<t.length&&D(n,t.substring(a,t.length))
var s=n.lines,h=0,c=0,f=[],d=e.textPadding,g=e.truncate,v=g&&g.outerWidth,_=g&&g.outerHeight
d&&(null!=v&&(v-=d[1]+d[3]),null!=_&&(_-=d[0]+d[2]))
for(var y=0;y<s.length;y++){for(var w=s[y],b=0,S=0,T=0;T<w.tokens.length;T++){var C=(N=w.tokens[T]).styleName&&e.rich[N.styleName]||{},k=N.textPadding=C.textPadding,I=N.font=C.font||e.font,A=N.textHeight=l(C.textHeight,M(I))
if(k&&(A+=k[0]+k[2]),N.height=A,N.lineHeight=u(C.textLineHeight,e.textLineHeight,A),N.textAlign=C&&C.textAlign||e.textAlign,N.textVerticalAlign=C&&C.textVerticalAlign||"middle",null!=_&&h+N.lineHeight>_)return{lines:[],width:0,height:0}
N.textWidth=m(N.text,I)
var O=C.textWidth,P=null==O||"auto"===O
if("string"==typeof O&&"%"===O.charAt(O.length-1))N.percentWidth=O,f.push(N),O=0
else{if(P){O=N.textWidth
var R=C.textBackgroundColor,L=R&&R.image
L&&(L=r.findExistImage(L),r.isImageReady(L)&&(O=Math.max(O,L.width*A/L.height)))}var E=k?k[1]+k[3]:0
O+=E
var B=null!=v?v-S:null
null!=B&&B<O&&(!P||B<E?(N.text="",N.textWidth=O=0):(N.text=x(N.text,B-E,I,g.ellipsis,{minChar:g.minChar}),N.textWidth=m(N.text,I),O=N.textWidth+E))}S+=N.width=O,C&&(b=Math.max(b,N.lineHeight))}w.width=S,w.lineHeight=b,h+=b,c=Math.max(c,S)}for(n.outerWidth=n.width=l(e.textWidth,c),n.outerHeight=n.height=l(e.textHeight,h),d&&(n.outerWidth+=d[1]+d[3],n.outerHeight+=d[0]+d[2]),y=0;y<f.length;y++){var N,z=(N=f[y]).percentWidth
N.width=parseInt(z,10)/100*c}return n}function D(t,e,n){for(var i=""===e,r=e.split("\n"),a=t.lines,o=0;o<r.length;o++){var s=r[o],l={styleName:n,text:s,isLineHolder:!s&&!i}
if(o)a.push({tokens:[l]})
else{var u=(a[a.length-1]||(a[0]={tokens:[]})).tokens,h=u.length
1===h&&u[0].isLineHolder?u[0]=l:(s||!h||i)&&u.push(l)}}}v.measureText=function(t,e){var n=o()
return n.font=e||g,n.measureText(t)},e.DEFAULT_FONT=g,e.$override=function(t,e){v[t]=e},e.getWidth=m,e.getBoundingRect=function(t,e,n,r,a,o,s){return o?function(t,e,n,r,a,o,s){var l=k(t,{rich:o,truncate:s,font:e,textAlign:n,textPadding:a}),u=l.outerWidth,h=l.outerHeight,c=_(0,u,n),f=y(0,h,r)
return new i(c,f,u,h)}(t,e,n,r,a,o,s):function(t,e,n,r,a,o){var s=C(t,e,a,o),l=m(t,e)
a&&(l+=a[1]+a[3])
var u=s.outerHeight,h=_(0,l,n),c=y(0,u,r),f=new i(h,c,l,u)
return f.lineHeight=s.lineHeight,f}(t,e,n,r,a,s)},e.adjustTextX=_,e.adjustTextY=y,e.adjustTextPositionOnRect=function(t,e,n){var i=e.x,r=e.y,a=e.height,o=e.width,s=a/2,l="left",u="top"
switch(t){case"left":i-=n,r+=s,l="right",u="middle"
break
case"right":i+=n+o,r+=s,u="middle"
break
case"top":i+=o/2,r-=n,l="center",u="bottom"
break
case"bottom":i+=o/2,r+=a+n,l="center"
break
case"inside":i+=o/2,r+=s,l="center",u="middle"
break
case"insideLeft":i+=n,r+=s,u="middle"
break
case"insideRight":i+=o-n,r+=s,l="right",u="middle"
break
case"insideTop":i+=o/2,r+=n,l="center"
break
case"insideBottom":i+=o/2,r+=a-n,l="center",u="bottom"
break
case"insideTopLeft":i+=n,r+=n
break
case"insideTopRight":i+=o-n,r+=n,l="right"
break
case"insideBottomLeft":i+=n,r+=a-n,u="bottom"
break
case"insideBottomRight":i+=o-n,r+=a-n,l="right",u="bottom"}return{x:i,y:r,textAlign:l,textVerticalAlign:u}},e.truncateText=x,e.getLineHeight=M,e.measureText=T,e.parsePlainText=C,e.parseRichText=k,e.makeFont=function(t){var e=(t.fontSize||t.fontFamily)&&[t.fontStyle,t.fontWeight,(t.fontSize||12)+"px",t.fontFamily||"sans-serif"].join(" ")
return e&&h(e)||t.textFont||t.font}},function(t,e,n){var i=n(267),r=i.create,a=i.distSquare,o=Math.pow,s=Math.sqrt,l=1e-8,u=s(3),h=1/3,c=r(),f=r(),d=r()
function p(t){return t>-l&&t<l}function g(t){return t>l||t<-l}function v(t,e,n,i,r){var a=1-r
return a*a*(a*t+3*r*e)+r*r*(r*i+3*a*n)}function m(t,e,n,i){var r=1-i
return r*(r*t+2*i*e)+i*i*n}e.cubicAt=v,e.cubicDerivativeAt=function(t,e,n,i,r){var a=1-r
return 3*(((e-t)*a+2*(n-e)*r)*a+(i-n)*r*r)},e.cubicRootAt=function(t,e,n,i,r,a){var l=i+3*(e-n)-t,c=3*(n-2*e+t),f=3*(e-t),d=t-r,g=c*c-3*l*f,v=c*f-9*l*d,m=f*f-3*c*d,_=0
if(p(g)&&p(v))p(c)?a[0]=0:(I=-f/c)>=0&&I<=1&&(a[_++]=I)
else{var y=v*v-4*g*m
if(p(y)){var x=v/g,w=-x/2;(I=-c/l+x)>=0&&I<=1&&(a[_++]=I),w>=0&&w<=1&&(a[_++]=w)}else if(y>0){var b=s(y),S=g*c+1.5*l*(-v+b),M=g*c+1.5*l*(-v-b);(I=(-c-((S=S<0?-o(-S,h):o(S,h))+(M=M<0?-o(-M,h):o(M,h))))/(3*l))>=0&&I<=1&&(a[_++]=I)}else{var T=(2*g*c-3*l*v)/(2*s(g*g*g)),C=Math.acos(T)/3,k=s(g),D=Math.cos(C),I=(-c-2*k*D)/(3*l),A=(w=(-c+k*(D+u*Math.sin(C)))/(3*l),(-c+k*(D-u*Math.sin(C)))/(3*l))
I>=0&&I<=1&&(a[_++]=I),w>=0&&w<=1&&(a[_++]=w),A>=0&&A<=1&&(a[_++]=A)}}return _},e.cubicExtrema=function(t,e,n,i,r){var a=6*n-12*e+6*t,o=9*e+3*i-3*t-9*n,l=3*e-3*t,u=0
if(p(o))g(a)&&(c=-l/a)>=0&&c<=1&&(r[u++]=c)
else{var h=a*a-4*o*l
if(p(h))r[0]=-a/(2*o)
else if(h>0){var c,f=s(h),d=(-a-f)/(2*o);(c=(-a+f)/(2*o))>=0&&c<=1&&(r[u++]=c),d>=0&&d<=1&&(r[u++]=d)}}return u},e.cubicSubdivide=function(t,e,n,i,r,a){var o=(e-t)*r+t,s=(n-e)*r+e,l=(i-n)*r+n,u=(s-o)*r+o,h=(l-s)*r+s,c=(h-u)*r+u
a[0]=t,a[1]=o,a[2]=u,a[3]=c,a[4]=c,a[5]=h,a[6]=l,a[7]=i},e.cubicProjectPoint=function(t,e,n,i,r,o,l,u,h,p,g){var m,_,y,x,w,b=.005,S=1/0
c[0]=h,c[1]=p
for(var M=0;M<1;M+=.05)f[0]=v(t,n,r,l,M),f[1]=v(e,i,o,u,M),(x=a(c,f))<S&&(m=M,S=x)
S=1/0
for(var T=0;T<32&&!(b<1e-4);T++)_=m-b,y=m+b,f[0]=v(t,n,r,l,_),f[1]=v(e,i,o,u,_),x=a(f,c),_>=0&&x<S?(m=_,S=x):(d[0]=v(t,n,r,l,y),d[1]=v(e,i,o,u,y),w=a(d,c),y<=1&&w<S?(m=y,S=w):b*=.5)
return g&&(g[0]=v(t,n,r,l,m),g[1]=v(e,i,o,u,m)),s(S)},e.quadraticAt=m,e.quadraticDerivativeAt=function(t,e,n,i){return 2*((1-i)*(e-t)+i*(n-e))},e.quadraticRootAt=function(t,e,n,i,r){var a=t-2*e+n,o=2*(e-t),l=t-i,u=0
if(p(a))g(o)&&(c=-l/o)>=0&&c<=1&&(r[u++]=c)
else{var h=o*o-4*a*l
if(p(h))(c=-o/(2*a))>=0&&c<=1&&(r[u++]=c)
else if(h>0){var c,f=s(h),d=(-o-f)/(2*a);(c=(-o+f)/(2*a))>=0&&c<=1&&(r[u++]=c),d>=0&&d<=1&&(r[u++]=d)}}return u},e.quadraticExtremum=function(t,e,n){var i=t+n-2*e
return 0===i?.5:(t-e)/i},e.quadraticSubdivide=function(t,e,n,i,r){var a=(e-t)*i+t,o=(n-e)*i+e,s=(o-a)*i+a
r[0]=t,r[1]=a,r[2]=s,r[3]=s,r[4]=o,r[5]=n},e.quadraticProjectPoint=function(t,e,n,i,r,o,l,u,h){var p,g=.005,v=1/0
c[0]=l,c[1]=u
for(var _=0;_<1;_+=.05)f[0]=m(t,n,r,_),f[1]=m(e,i,o,_),(b=a(c,f))<v&&(p=_,v=b)
v=1/0
for(var y=0;y<32&&!(g<1e-4);y++){var x=p-g,w=p+g
f[0]=m(t,n,r,x),f[1]=m(e,i,o,x)
var b=a(f,c)
if(x>=0&&b<v)p=x,v=b
else{d[0]=m(t,n,r,w),d[1]=m(e,i,o,w)
var S=a(d,c)
w<=1&&S<v?(p=w,v=S):g*=.5}}return h&&(h[0]=m(t,n,r,p),h[1]=m(e,i,o,p)),s(v)}},function(t,e,n){var i=n(264),r=n(272),a=n(269).parsePercent,o=n(273),s=i.each,l=["left","right","top","bottom","width","height"],u=[["width","left","right"],["height","top","bottom"]]
function h(t,e,n,i,r){var a=0,o=0
null==i&&(i=1/0),null==r&&(r=1/0)
var s=0
e.eachChild(function(l,u){var h,c,f=l.position,d=l.getBoundingRect(),p=e.childAt(u+1),g=p&&p.getBoundingRect()
if("horizontal"===t){var v=d.width+(g?-g.x+d.x:0);(h=a+v)>i||l.newline?(a=0,h=v,o+=s+n,s=d.height):s=Math.max(s,d.height)}else{var m=d.height+(g?-g.y+d.y:0);(c=o+m)>r||l.newline?(a+=s+n,o=0,c=m,s=d.width):s=Math.max(s,d.width)}l.newline||(f[0]=a,f[1]=o,"horizontal"===t?a=h+n:o=c+n)})}var c=h,f=i.curry(h,"vertical"),d=i.curry(h,"horizontal")
function p(t,e,n){n=o.normalizeCssArray(n||0)
var i=e.width,s=e.height,l=a(t.left,i),u=a(t.top,s),h=a(t.right,i),c=a(t.bottom,s),f=a(t.width,i),d=a(t.height,s),p=n[2]+n[0],g=n[1]+n[3],v=t.aspect
switch(isNaN(f)&&(f=i-h-g-l),isNaN(d)&&(d=s-c-p-u),null!=v&&(isNaN(f)&&isNaN(d)&&(v>i/s?f=.8*i:d=.8*s),isNaN(f)&&(f=v*d),isNaN(d)&&(d=f/v)),isNaN(l)&&(l=i-h-f-g),isNaN(u)&&(u=s-c-d-p),t.left||t.right){case"center":l=i/2-f/2-n[3]
break
case"right":l=i-f-g}switch(t.top||t.bottom){case"middle":case"center":u=s/2-d/2-n[0]
break
case"bottom":u=s-d-p}l=l||0,u=u||0,isNaN(f)&&(f=i-g-l-(h||0)),isNaN(d)&&(d=s-p-u-(c||0))
var m=new r(l+n[3],u+n[0],f,d)
return m.margin=n,m}function g(t,e){return e&&t&&s(l,function(n){e.hasOwnProperty(n)&&(t[n]=e[n])}),t}e.LOCATION_PARAMS=l,e.HV_NAMES=u,e.box=c,e.vbox=f,e.hbox=d,e.getAvailableSize=function(t,e,n){var i=e.width,r=e.height,s=a(t.x,i),l=a(t.y,r),u=a(t.x2,i),h=a(t.y2,r)
return(isNaN(s)||isNaN(parseFloat(t.x)))&&(s=0),(isNaN(u)||isNaN(parseFloat(t.x2)))&&(u=i),(isNaN(l)||isNaN(parseFloat(t.y)))&&(l=0),(isNaN(h)||isNaN(parseFloat(t.y2)))&&(h=r),n=o.normalizeCssArray(n||0),{width:Math.max(u-s-n[1]-n[3],0),height:Math.max(h-l-n[0]-n[2],0)}},e.getLayoutRect=p,e.positionElement=function(t,e,n,a,o){var s=!o||!o.hv||o.hv[0],l=!o||!o.hv||o.hv[1],u=o&&o.boundingMode||"all"
if(s||l){var h
if("raw"===u)h="group"===t.type?new r(0,0,+e.width||0,+e.height||0):t.getBoundingRect()
else if(h=t.getBoundingRect(),t.needLocalTransform()){var c=t.getLocalTransform();(h=h.clone()).applyTransform(c)}e=p(i.defaults({width:h.width,height:h.height},e),n,a)
var f=t.position,d=s?e.x-h.x:0,g=l?e.y-h.y:0
t.attr("position","raw"===u?[d,g]:[f[0]+d,f[1]+g])}},e.sizeCalculable=function(t,e){return null!=t[u[e][0]]||null!=t[u[e][1]]&&null!=t[u[e][2]]},e.mergeLayoutParam=function(t,e,n){!i.isObject(n)&&(n={})
var r=n.ignoreSize
!i.isArray(r)&&(r=[r,r])
var a=l(u[0],0),o=l(u[1],1)
function l(n,i){var a={},o=0,l={},u=0
if(s(n,function(e){l[e]=t[e]}),s(n,function(t){h(e,t)&&(a[t]=l[t]=e[t]),c(a,t)&&o++,c(l,t)&&u++}),r[i])return c(e,n[1])?l[n[2]]=null:c(e,n[2])&&(l[n[1]]=null),l
if(2!==u&&o){if(o>=2)return a
for(var f=0;f<n.length;f++){var d=n[f]
if(!h(a,d)&&h(t,d)){a[d]=t[d]
break}}return a}return l}function h(t,e){return t.hasOwnProperty(e)}function c(t,e){return null!=t[e]&&"auto"!==t[e]}function f(t,e,n){s(t,function(t){e[t]=n[t]})}f(u[0],t,a),f(u[1],t,o)},e.getLayoutParams=function(t){return g({},t)},e.copyLayoutParams=g},function(t,e,n){var i=n(264),r=i.each,a=i.isString
function o(t,e){return!!e&&e===t.getCalculationInfo("stackedDimension")}e.enableDataStack=function(t,e,n){var i,o,s,l,u=(n=n||{}).byIndex,h=n.stackedCoordDimension,c=!(!t||!t.get("stack"))
if(r(e,function(t,n){a(t)&&(e[n]=t={name:t}),c&&!t.isExtraCoord&&(u||i||!t.ordinalMeta||(i=t),o||"ordinal"===t.type||"time"===t.type||h&&h!==t.coordDim||(o=t))}),!o||u||i||(u=!0),o){s="__\0ecstackresult",l="__\0ecstackedover",i&&(i.createInvertedIndices=!0)
var f=o.coordDim,d=o.type,p=0
r(e,function(t){t.coordDim===f&&p++}),e.push({name:s,coordDim:f,coordDimIndex:p,type:d,isExtraCoord:!0,isCalculationCoord:!0}),p++,e.push({name:l,coordDim:l,coordDimIndex:p,type:d,isExtraCoord:!0,isCalculationCoord:!0})}return{stackedDimension:o&&o.name,stackedByDimension:i&&i.name,isStackedByIndex:u,stackedOverDimension:l,stackResultDimension:s}},e.isDimensionStacked=o,e.getStackedDimension=function(t,e){return o(t,e)?t.getCalculationInfo("stackResultDimension"):e}},function(t,e,n){n(266).__DEV__
var i=n(264),r=n(408),a=n(306),o=n(295),s=n(269),l=n(409),u=l.prepareLayoutBarSeries,h=l.makeColumnLayout,c=l.retrieveColumnLayout,f=n(272)
function d(t,e){var n,r,a,o=t.type,l=e.getMin(),f=e.getMax(),d=null!=l,p=null!=f,g=t.getExtent()
"ordinal"===o?n=e.getCategories().length:(r=e.get("boundaryGap"),i.isArray(r)||(r=[r||0,r||0]),"boolean"==typeof r[0]&&(r=[0,0]),r[0]=s.parsePercent(r[0],1),r[1]=s.parsePercent(r[1],1),a=g[1]-g[0]||Math.abs(g[0])),null==l&&(l="ordinal"===o?n?0:NaN:g[0]-r[0]*a),null==f&&(f="ordinal"===o?n?n-1:NaN:g[1]+r[1]*a),"dataMin"===l?l=g[0]:"function"==typeof l&&(l=l({min:g[0],max:g[1]})),"dataMax"===f?f=g[1]:"function"==typeof f&&(f=f({min:g[0],max:g[1]})),(null==l||!isFinite(l))&&(l=NaN),(null==f||!isFinite(f))&&(f=NaN),t.setBlank(i.eqNaN(l)||i.eqNaN(f)||"ordinal"===o&&!t.getOrdinalMeta().categories.length),e.getNeedCrossZero()&&(l>0&&f>0&&!d&&(l=0),l<0&&f<0&&!p&&(f=0))
var v=e.ecModel
if(v&&"time"===o){var m,_=u("bar",v)
if(i.each(_,function(t){m|=t.getBaseAxis()===e.axis}),m){var y=h(_),x=function(t,e,n,r){var a=n.axis.getExtent(),o=a[1]-a[0],s=c(r,n.axis)
if(void 0===s)return{min:t,max:e}
var l=1/0
i.each(s,function(t){l=Math.min(t.offset,l)})
var u=-1/0
i.each(s,function(t){u=Math.max(t.offset+t.width,u)}),l=Math.abs(l),u=Math.abs(u)
var h=l+u,f=e-t,d=f/(1-(l+u)/o)-f
return{min:t-=d*(l/h),max:e+=d*(u/h)}}(l,f,e,y)
l=x.min,f=x.max}}return[l,f]}function p(t){var e=t.getLabelModel().get("formatter"),n="category"===t.type?t.scale.getExtent()[0]:null
return"string"==typeof e?e=function(t){return function(e){return t.replace("{value}",null!=e?e:"")}}(e):"function"==typeof e?function(i,r){return null!=n&&(r=i-n),e(g(t,i),r)}:function(e){return t.scale.getLabel(e)}}function g(t,e){return"category"===t.type?t.scale.getLabel(e):e}function v(t,e){var n=e*Math.PI/180,i=t.plain(),r=i.width,a=i.height,o=r*Math.cos(n)+a*Math.sin(n),s=r*Math.sin(n)+a*Math.cos(n)
return new f(i.x,i.y,o,s)}n(410),n(411),e.getScaleExtent=d,e.niceScaleExtent=function(t,e){var n=d(t,e),i=null!=e.getMin(),r=null!=e.getMax(),a=e.get("splitNumber")
"log"===t.type&&(t.base=e.get("logBase"))
var o=t.type
t.setExtent(n[0],n[1]),t.niceExtent({splitNumber:a,fixMin:i,fixMax:r,minInterval:"interval"===o||"time"===o?e.get("minInterval"):null,maxInterval:"interval"===o||"time"===o?e.get("maxInterval"):null})
var s=e.get("interval")
null!=s&&t.setInterval&&t.setInterval(s)},e.createScaleByModel=function(t,e){if(e=e||t.get("type"))switch(e){case"category":return new r(t.getOrdinalMeta?t.getOrdinalMeta():t.getCategories(),[1/0,-1/0])
case"value":return new a
default:return(o.getClass(e)||a).create(t)}},e.ifAxisCrossZero=function(t){var e=t.scale.getExtent(),n=e[0],i=e[1]
return!(n>0&&i>0||n<0&&i<0)},e.makeLabelFormatter=p,e.getAxisRawValue=g,e.estimateLabelUnionRect=function(t){var e=t.model,n=t.scale
if(e.get("axisLabel.show")&&!n.isBlank()){var i,r,a="category"===t.type,o=n.getExtent()
r=a?n.count():(i=n.getTicks()).length
var s,l=t.getLabelModel(),u=p(t),h=1
r>40&&(h=Math.ceil(r/40))
for(var c=0;c<r;c+=h){var f=u(i?i[c]:o[0]+c),d=v(l.getTextRect(f),l.get("rotate")||0)
s?s.union(d):s=d}return s}}},function(t,e){var n=Array.prototype.slice,i=function(){this._$handlers={}}
i.prototype={constructor:i,one:function(t,e,n){var i=this._$handlers
if(!e||!t)return this
i[t]||(i[t]=[])
for(var r=0;r<i[t].length;r++)if(i[t][r].h===e)return this
return i[t].push({h:e,one:!0,ctx:n||this}),this},on:function(t,e,n){var i=this._$handlers
if(!e||!t)return this
i[t]||(i[t]=[])
for(var r=0;r<i[t].length;r++)if(i[t][r].h===e)return this
return i[t].push({h:e,one:!1,ctx:n||this}),this},isSilent:function(t){var e=this._$handlers
return e[t]&&e[t].length},off:function(t,e){var n=this._$handlers
if(!t)return this._$handlers={},this
if(e){if(n[t]){for(var i=[],r=0,a=n[t].length;r<a;r++)n[t][r].h!=e&&i.push(n[t][r])
n[t]=i}n[t]&&0===n[t].length&&delete n[t]}else delete n[t]
return this},trigger:function(t){if(this._$handlers[t]){var e=arguments,i=e.length
i>3&&(e=n.call(e,1))
for(var r=this._$handlers[t],a=r.length,o=0;o<a;){switch(i){case 1:r[o].h.call(r[o].ctx)
break
case 2:r[o].h.call(r[o].ctx,e[1])
break
case 3:r[o].h.call(r[o].ctx,e[1],e[2])
break
default:r[o].h.apply(r[o].ctx,e)}r[o].one?(r.splice(o,1),a--):o++}}return this},triggerWithContext:function(t){if(this._$handlers[t]){var e=arguments,i=e.length
i>4&&(e=n.call(e,1,e.length-1))
for(var r=e[e.length-1],a=this._$handlers[t],o=a.length,s=0;s<o;){switch(i){case 1:a[s].h.call(r)
break
case 2:a[s].h.call(r,e[1])
break
case 3:a[s].h.call(r,e[1],e[2])
break
default:a[s].h.apply(r,e)}a[s].one?(a.splice(s,1),o--):s++}}return this}}
var r=i
t.exports=r},function(t,e,n){var i={transparent:[0,0,0,0],aliceblue:[240,248,255,1],antiquewhite:[250,235,215,1],aqua:[0,255,255,1],aquamarine:[127,255,212,1],azure:[240,255,255,1],beige:[245,245,220,1],bisque:[255,228,196,1],black:[0,0,0,1],blanchedalmond:[255,235,205,1],blue:[0,0,255,1],blueviolet:[138,43,226,1],brown:[165,42,42,1],burlywood:[222,184,135,1],cadetblue:[95,158,160,1],chartreuse:[127,255,0,1],chocolate:[210,105,30,1],coral:[255,127,80,1],cornflowerblue:[100,149,237,1],cornsilk:[255,248,220,1],crimson:[220,20,60,1],cyan:[0,255,255,1],darkblue:[0,0,139,1],darkcyan:[0,139,139,1],darkgoldenrod:[184,134,11,1],darkgray:[169,169,169,1],darkgreen:[0,100,0,1],darkgrey:[169,169,169,1],darkkhaki:[189,183,107,1],darkmagenta:[139,0,139,1],darkolivegreen:[85,107,47,1],darkorange:[255,140,0,1],darkorchid:[153,50,204,1],darkred:[139,0,0,1],darksalmon:[233,150,122,1],darkseagreen:[143,188,143,1],darkslateblue:[72,61,139,1],darkslategray:[47,79,79,1],darkslategrey:[47,79,79,1],darkturquoise:[0,206,209,1],darkviolet:[148,0,211,1],deeppink:[255,20,147,1],deepskyblue:[0,191,255,1],dimgray:[105,105,105,1],dimgrey:[105,105,105,1],dodgerblue:[30,144,255,1],firebrick:[178,34,34,1],floralwhite:[255,250,240,1],forestgreen:[34,139,34,1],fuchsia:[255,0,255,1],gainsboro:[220,220,220,1],ghostwhite:[248,248,255,1],gold:[255,215,0,1],goldenrod:[218,165,32,1],gray:[128,128,128,1],green:[0,128,0,1],greenyellow:[173,255,47,1],grey:[128,128,128,1],honeydew:[240,255,240,1],hotpink:[255,105,180,1],indianred:[205,92,92,1],indigo:[75,0,130,1],ivory:[255,255,240,1],khaki:[240,230,140,1],lavender:[230,230,250,1],lavenderblush:[255,240,245,1],lawngreen:[124,252,0,1],lemonchiffon:[255,250,205,1],lightblue:[173,216,230,1],lightcoral:[240,128,128,1],lightcyan:[224,255,255,1],lightgoldenrodyellow:[250,250,210,1],lightgray:[211,211,211,1],lightgreen:[144,238,144,1],lightgrey:[211,211,211,1],lightpink:[255,182,193,1],lightsalmon:[255,160,122,1],lightseagreen:[32,178,170,1],lightskyblue:[135,206,250,1],lightslategray:[119,136,153,1],lightslategrey:[119,136,153,1],lightsteelblue:[176,196,222,1],lightyellow:[255,255,224,1],lime:[0,255,0,1],limegreen:[50,205,50,1],linen:[250,240,230,1],magenta:[255,0,255,1],maroon:[128,0,0,1],mediumaquamarine:[102,205,170,1],mediumblue:[0,0,205,1],mediumorchid:[186,85,211,1],mediumpurple:[147,112,219,1],mediumseagreen:[60,179,113,1],mediumslateblue:[123,104,238,1],mediumspringgreen:[0,250,154,1],mediumturquoise:[72,209,204,1],mediumvioletred:[199,21,133,1],midnightblue:[25,25,112,1],mintcream:[245,255,250,1],mistyrose:[255,228,225,1],moccasin:[255,228,181,1],navajowhite:[255,222,173,1],navy:[0,0,128,1],oldlace:[253,245,230,1],olive:[128,128,0,1],olivedrab:[107,142,35,1],orange:[255,165,0,1],orangered:[255,69,0,1],orchid:[218,112,214,1],palegoldenrod:[238,232,170,1],palegreen:[152,251,152,1],paleturquoise:[175,238,238,1],palevioletred:[219,112,147,1],papayawhip:[255,239,213,1],peachpuff:[255,218,185,1],peru:[205,133,63,1],pink:[255,192,203,1],plum:[221,160,221,1],powderblue:[176,224,230,1],purple:[128,0,128,1],red:[255,0,0,1],rosybrown:[188,143,143,1],royalblue:[65,105,225,1],saddlebrown:[139,69,19,1],salmon:[250,128,114,1],sandybrown:[244,164,96,1],seagreen:[46,139,87,1],seashell:[255,245,238,1],sienna:[160,82,45,1],silver:[192,192,192,1],skyblue:[135,206,235,1],slateblue:[106,90,205,1],slategray:[112,128,144,1],slategrey:[112,128,144,1],snow:[255,250,250,1],springgreen:[0,255,127,1],steelblue:[70,130,180,1],tan:[210,180,140,1],teal:[0,128,128,1],thistle:[216,191,216,1],tomato:[255,99,71,1],turquoise:[64,224,208,1],violet:[238,130,238,1],wheat:[245,222,179,1],white:[255,255,255,1],whitesmoke:[245,245,245,1],yellow:[255,255,0,1],yellowgreen:[154,205,50,1]}
function r(t){return(t=Math.round(t))<0?0:t>255?255:t}function a(t){return t<0?0:t>1?1:t}function o(t){return t.length&&"%"===t.charAt(t.length-1)?r(parseFloat(t)/100*255):r(parseInt(t,10))}function s(t){return t.length&&"%"===t.charAt(t.length-1)?a(parseFloat(t)/100):a(parseFloat(t))}function l(t,e,n){return n<0?n+=1:n>1&&(n-=1),6*n<1?t+(e-t)*n*6:2*n<1?e:3*n<2?t+(e-t)*(2/3-n)*6:t}function u(t,e,n){return t+(e-t)*n}function h(t,e,n,i,r){return t[0]=e,t[1]=n,t[2]=i,t[3]=r,t}function c(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t}var f=new(n(313))(20),d=null
function p(t,e){d&&c(d,e),d=f.put(t,d||e.slice())}function g(t,e){if(t){e=e||[]
var n=f.get(t)
if(n)return c(e,n)
var r,a=(t+="").replace(/ /g,"").toLowerCase()
if(a in i)return c(e,i[a]),p(t,e),e
if("#"===a.charAt(0))return 4===a.length?(r=parseInt(a.substr(1),16))>=0&&r<=4095?(h(e,(3840&r)>>4|(3840&r)>>8,240&r|(240&r)>>4,15&r|(15&r)<<4,1),p(t,e),e):void h(e,0,0,0,1):7===a.length?(r=parseInt(a.substr(1),16))>=0&&r<=16777215?(h(e,(16711680&r)>>16,(65280&r)>>8,255&r,1),p(t,e),e):void h(e,0,0,0,1):void 0
var l=a.indexOf("("),u=a.indexOf(")")
if(-1!==l&&u+1===a.length){var d=a.substr(0,l),g=a.substr(l+1,u-(l+1)).split(","),m=1
switch(d){case"rgba":if(4!==g.length)return void h(e,0,0,0,1)
m=s(g.pop())
case"rgb":return 3!==g.length?void h(e,0,0,0,1):(h(e,o(g[0]),o(g[1]),o(g[2]),m),p(t,e),e)
case"hsla":return 4!==g.length?void h(e,0,0,0,1):(g[3]=s(g[3]),v(g,e),p(t,e),e)
case"hsl":return 3!==g.length?void h(e,0,0,0,1):(v(g,e),p(t,e),e)
default:return}}h(e,0,0,0,1)}}function v(t,e){var n=(parseFloat(t[0])%360+360)%360/360,i=s(t[1]),a=s(t[2]),o=a<=.5?a*(i+1):a+i-a*i,u=2*a-o
return h(e=e||[],r(255*l(u,o,n+1/3)),r(255*l(u,o,n)),r(255*l(u,o,n-1/3)),1),4===t.length&&(e[3]=t[3]),e}function m(t,e,n){if(e&&e.length&&t>=0&&t<=1){n=n||[]
var i=t*(e.length-1),o=Math.floor(i),s=Math.ceil(i),l=e[o],h=e[s],c=i-o
return n[0]=r(u(l[0],h[0],c)),n[1]=r(u(l[1],h[1],c)),n[2]=r(u(l[2],h[2],c)),n[3]=a(u(l[3],h[3],c)),n}}var _=m
function y(t,e,n){if(e&&e.length&&t>=0&&t<=1){var i=t*(e.length-1),o=Math.floor(i),s=Math.ceil(i),l=g(e[o]),h=g(e[s]),c=i-o,f=w([r(u(l[0],h[0],c)),r(u(l[1],h[1],c)),r(u(l[2],h[2],c)),a(u(l[3],h[3],c))],"rgba")
return n?{color:f,leftIndex:o,rightIndex:s,value:i}:f}}var x=y
function w(t,e){if(t&&t.length){var n=t[0]+","+t[1]+","+t[2]
return"rgba"!==e&&"hsva"!==e&&"hsla"!==e||(n+=","+t[3]),e+"("+n+")"}}e.parse=g,e.lift=function(t,e){var n=g(t)
if(n){for(var i=0;i<3;i++)n[i]=e<0?n[i]*(1-e)|0:(255-n[i])*e+n[i]|0,n[i]>255?n[i]=255:t[i]<0&&(n[i]=0)
return w(n,4===n.length?"rgba":"rgb")}},e.toHex=function(t){var e=g(t)
if(e)return((1<<24)+(e[0]<<16)+(e[1]<<8)+ +e[2]).toString(16).slice(1)},e.fastLerp=m,e.fastMapToColor=_,e.lerp=y,e.mapToColor=x,e.modifyHSL=function(t,e,n,i){if(t=g(t))return t=function(t){if(t){var e,n,i=t[0]/255,r=t[1]/255,a=t[2]/255,o=Math.min(i,r,a),s=Math.max(i,r,a),l=s-o,u=(s+o)/2
if(0===l)e=0,n=0
else{n=u<.5?l/(s+o):l/(2-s-o)
var h=((s-i)/6+l/2)/l,c=((s-r)/6+l/2)/l,f=((s-a)/6+l/2)/l
i===s?e=f-c:r===s?e=1/3+h-f:a===s&&(e=2/3+c-h),e<0&&(e+=1),e>1&&(e-=1)}var d=[360*e,n,u]
return null!=t[3]&&d.push(t[3]),d}}(t),null!=e&&(t[0]=function(t){return(t=Math.round(t))<0?0:t>360?360:t}(e)),null!=n&&(t[1]=s(n)),null!=i&&(t[2]=s(i)),w(v(t),"rgba")},e.modifyAlpha=function(t,e){if((t=g(t))&&null!=e)return t[3]=a(e),w(t,"rgba")},e.stringify=w},function(t,e,n){var i=n(283)
e.Dispatcher=i
var r=n(270),a="undefined"!=typeof window&&!!window.addEventListener,o=/^(?:mouse|pointer|contextmenu|drag|drop)|click/
function s(t,e,n,i){return n=n||{},i||!r.canvasSupported?l(t,e,n):r.browser.firefox&&null!=e.layerX&&e.layerX!==e.offsetX?(n.zrX=e.layerX,n.zrY=e.layerY):null!=e.offsetX?(n.zrX=e.offsetX,n.zrY=e.offsetY):l(t,e,n),n}function l(t,e,n){var i=function(t){return t.getBoundingClientRect?t.getBoundingClientRect():{left:0,top:0}}(t)
n.zrX=e.clientX-i.left,n.zrY=e.clientY-i.top}var u=a?function(t){t.preventDefault(),t.stopPropagation(),t.cancelBubble=!0}:function(t){t.returnValue=!1,t.cancelBubble=!0}
e.clientToLocal=s,e.normalizeEvent=function(t,e,n){if(null!=(e=e||window.event).zrX)return e
var i=e.type
if(i&&i.indexOf("touch")>=0){var r="touchend"!=i?e.targetTouches[0]:e.changedTouches[0]
r&&s(t,r,e,n)}else s(t,e,e,n),e.zrDelta=e.wheelDelta?e.wheelDelta/120:-(e.detail||0)/3
var a=e.button
return null==e.which&&void 0!==a&&o.test(e.type)&&(e.which=1&a?1:2&a?3:4&a?2:0),e},e.addEventListener=function(t,e,n){a?t.addEventListener(e,n):t.attachEvent("on"+e,n)},e.removeEventListener=function(t,e,n){a?t.removeEventListener(e,n):t.detachEvent("on"+e,n)},e.stop=u,e.notLeftMouse=function(t){return t.which>1}},function(t,e,n){var i=n(264),r=i.createHashMap,a=i.isTypedArray,o=n(275).enableClassCheck,s=n(287),l=s.SOURCE_FORMAT_ORIGINAL,u=s.SERIES_LAYOUT_BY_COLUMN,h=s.SOURCE_FORMAT_UNKNOWN,c=s.SOURCE_FORMAT_TYPED_ARRAY,f=s.SOURCE_FORMAT_KEYED_COLUMNS
function d(t){this.fromDataset=t.fromDataset,this.data=t.data||(t.sourceFormat===f?{}:[]),this.sourceFormat=t.sourceFormat||h,this.seriesLayoutBy=t.seriesLayoutBy||u,this.dimensionsDefine=t.dimensionsDefine,this.encodeDefine=t.encodeDefine&&r(t.encodeDefine),this.startIndex=t.startIndex||0,this.dimensionsDetectCount=t.dimensionsDetectCount}d.seriesDataToSource=function(t){return new d({data:t,sourceFormat:a(t)?c:l,fromDataset:!1})},o(d)
var p=d
t.exports=p},function(t,e){e.SOURCE_FORMAT_ORIGINAL="original",e.SOURCE_FORMAT_ARRAY_ROWS="arrayRows",e.SOURCE_FORMAT_OBJECT_ROWS="objectRows",e.SOURCE_FORMAT_KEYED_COLUMNS="keyedColumns",e.SOURCE_FORMAT_UNKNOWN="unknown",e.SOURCE_FORMAT_TYPED_ARRAY="typedArray",e.SERIES_LAYOUT_BY_COLUMN="column",e.SERIES_LAYOUT_BY_ROW="row"},function(t,e,n){n(266).__DEV__
var i=n(264),r=(i.isTypedArray,i.extend),a=(i.assert,i.each),o=i.isObject,s=n(265),l=s.getDataItemValue,u=s.isDataItemOption,h=n(269).parseDate,c=n(286),f=n(287),d=f.SOURCE_FORMAT_TYPED_ARRAY,p=f.SOURCE_FORMAT_ARRAY_ROWS,g=f.SOURCE_FORMAT_ORIGINAL,v=f.SOURCE_FORMAT_OBJECT_ROWS
function m(t,e){c.isInstance(t)||(t=c.seriesDataToSource(t)),this._source=t
var n=this._data=t.data,i=t.sourceFormat
i===d&&(this._offset=0,this._dimSize=e,this._data=n)
var a=y[i===p?i+"_"+t.seriesLayoutBy:i]
r(this,a)}var _=m.prototype
_.pure=!1,_.persistent=!0,_.getSource=function(){return this._source}
var y={arrayRows_column:{pure:!0,count:function(){return Math.max(0,this._data.length-this._source.startIndex)},getItem:function(t){return this._data[t+this._source.startIndex]},appendData:b},arrayRows_row:{pure:!0,count:function(){var t=this._data[0]
return t?Math.max(0,t.length-this._source.startIndex):0},getItem:function(t){t+=this._source.startIndex
for(var e=[],n=this._data,i=0;i<n.length;i++){var r=n[i]
e.push(r?r[t]:null)}return e},appendData:function(){throw new Error('Do not support appendData when set seriesLayoutBy: "row".')}},objectRows:{pure:!0,count:x,getItem:w,appendData:b},keyedColumns:{pure:!0,count:function(){var t=this._source.dimensionsDefine[0].name,e=this._data[t]
return e?e.length:0},getItem:function(t){for(var e=[],n=this._source.dimensionsDefine,i=0;i<n.length;i++){var r=this._data[n[i].name]
e.push(r?r[t]:null)}return e},appendData:function(t){var e=this._data
a(t,function(t,n){for(var i=e[n]||(e[n]=[]),r=0;r<(t||[]).length;r++)i.push(t[r])})}},original:{count:x,getItem:w,appendData:b},typedArray:{persistent:!1,pure:!0,count:function(){return this._data?this._data.length/this._dimSize:0},getItem:function(t,e){t-=this._offset,e=e||[]
for(var n=this._dimSize*t,i=0;i<this._dimSize;i++)e[i]=this._data[n+i]
return e},appendData:function(t){this._data=t},clean:function(){this._offset+=this.count(),this._data=null}}}
function x(){return this._data.length}function w(t){return this._data[t]}function b(t){for(var e=0;e<t.length;e++)this._data.push(t[e])}var S={arrayRows:M,objectRows:function(t,e,n,i){return null!=n?t[i]:t},keyedColumns:M,original:function(t,e,n,i){var r=l(t)
return null!=n&&r instanceof Array?r[n]:r},typedArray:M}
function M(t,e,n,i){return null!=n?t[n]:t}var T={arrayRows:C,objectRows:function(t,e,n,i){return k(t[e],this._dimensionInfos[e])},keyedColumns:C,original:function(t,e,n,i){var r=t&&(null==t.value?t:t.value)
return!this._rawData.pure&&u(t)&&(this.hasItemOption=!0),k(r instanceof Array?r[i]:r,this._dimensionInfos[e])},typedArray:function(t,e,n,i){return t[i]}}
function C(t,e,n,i){return k(t[i],this._dimensionInfos[e])}function k(t,e){var n=e&&e.type
if("ordinal"===n){var i=e&&e.ordinalMeta
return i?i.parseAndCollect(t):t}return"time"===n&&"number"!=typeof t&&null!=t&&"-"!==t&&(t=+h(t)),null==t||""===t?NaN:+t}e.DefaultDataProvider=m,e.defaultDimValueGetters=T,e.retrieveRawValue=function(t,e,n){if(t){var i=t.getRawDataItem(e)
if(null!=i){var r,a,o=t.getProvider().getSource().sourceFormat,s=t.getDimensionInfo(n)
return s&&(r=s.name,a=s.index),S[o](i,e,a,r)}}},e.retrieveRawAttr=function(t,e,n){if(t){var i=t.getProvider().getSource().sourceFormat
if(i===g||i===v){var r=t.getRawDataItem(e)
return i!==g||o(r)||(r=null),r?r[n]:void 0}}}},function(t,e,n){var i=n(264),r=n(310),a=n(272),o=function(t){for(var e in t=t||{},r.call(this,t),t)t.hasOwnProperty(e)&&(this[e]=t[e])
this._children=[],this.__storage=null,this.__dirty=!0}
o.prototype={constructor:o,isGroup:!0,type:"group",silent:!1,children:function(){return this._children.slice()},childAt:function(t){return this._children[t]},childOfName:function(t){for(var e=this._children,n=0;n<e.length;n++)if(e[n].name===t)return e[n]},childCount:function(){return this._children.length},add:function(t){return t&&t!==this&&t.parent!==this&&(this._children.push(t),this._doAdd(t)),this},addBefore:function(t,e){if(t&&t!==this&&t.parent!==this&&e&&e.parent===this){var n=this._children,i=n.indexOf(e)
i>=0&&(n.splice(i,0,t),this._doAdd(t))}return this},_doAdd:function(t){t.parent&&t.parent.remove(t),t.parent=this
var e=this.__storage,n=this.__zr
e&&e!==t.__storage&&(e.addToStorage(t),t instanceof o&&t.addChildrenToStorage(e)),n&&n.refresh()},remove:function(t){var e=this.__zr,n=this.__storage,r=this._children,a=i.indexOf(r,t)
return a<0?this:(r.splice(a,1),t.parent=null,n&&(n.delFromStorage(t),t instanceof o&&t.delChildrenFromStorage(n)),e&&e.refresh(),this)},removeAll:function(){var t,e,n=this._children,i=this.__storage
for(e=0;e<n.length;e++)t=n[e],i&&(i.delFromStorage(t),t instanceof o&&t.delChildrenFromStorage(i)),t.parent=null
return n.length=0,this},eachChild:function(t,e){for(var n=this._children,i=0;i<n.length;i++){var r=n[i]
t.call(e,r,i)}return this},traverse:function(t,e){for(var n=0;n<this._children.length;n++){var i=this._children[n]
t.call(e,i),"group"===i.type&&i.traverse(t,e)}return this},addChildrenToStorage:function(t){for(var e=0;e<this._children.length;e++){var n=this._children[e]
t.addToStorage(n),n instanceof o&&n.addChildrenToStorage(t)}},delChildrenFromStorage:function(t){for(var e=0;e<this._children.length;e++){var n=this._children[e]
t.delFromStorage(n),n instanceof o&&n.delChildrenFromStorage(t)}},dirty:function(){return this.__dirty=!0,this.__zr&&this.__zr.refresh(),this},getBoundingRect:function(t){for(var e=null,n=new a(0,0,0,0),i=t||this._children,r=[],o=0;o<i.length;o++){var s=i[o]
if(!s.ignore&&!s.invisible){var l=s.getBoundingRect(),u=s.getLocalTransform(r)
u?(n.copy(l),n.applyTransform(u),(e=e||n.clone()).union(n)):(e=e||l.clone()).union(l)}}return e||n}},i.inherits(o,r)
var s=o
t.exports=s},function(t,e){var n=1
"undefined"!=typeof window&&(n=Math.max(window.devicePixelRatio||1,1))
var i=n
e.debugMode=0,e.devicePixelRatio=i},function(t,e,n){var i=n(264),r=n(315),a=n(310),o=n(359)
function s(t){for(var e in t=t||{},a.call(this,t),t)t.hasOwnProperty(e)&&"style"!==e&&(this[e]=t[e])
this.style=new r(t.style,this),this._rect=null,this.__clipPaths=[]}s.prototype={constructor:s,type:"displayable",__dirty:!0,invisible:!1,z:0,z2:0,zlevel:0,draggable:!1,dragging:!1,silent:!1,culling:!1,cursor:"pointer",rectHover:!1,progressive:!1,incremental:!1,inplace:!1,beforeBrush:function(t){},afterBrush:function(t){},brush:function(t,e){},getBoundingRect:function(){},contain:function(t,e){return this.rectContain(t,e)},traverse:function(t,e){t.call(e,this)},rectContain:function(t,e){var n=this.transformCoordToLocal(t,e)
return this.getBoundingRect().contain(n[0],n[1])},dirty:function(){this.__dirty=!0,this._rect=null,this.__zr&&this.__zr.refresh()},animateStyle:function(t){return this.animate("style",t)},attrKV:function(t,e){"style"!==t?a.prototype.attrKV.call(this,t,e):this.style.set(e)},setStyle:function(t,e){return this.style.set(t,e),this.dirty(!1),this},useStyle:function(t){return this.style=new r(t,this),this.dirty(!1),this}},i.inherits(s,a),i.mixin(s,o)
var l=s
t.exports=l},function(t,e,n){var i=n(279),r=n(267),a=n(323),o=n(272),s=n(290).devicePixelRatio,l={M:1,L:2,C:3,Q:4,A:5,Z:6,R:7},u=[],h=[],c=[],f=[],d=Math.min,p=Math.max,g=Math.cos,v=Math.sin,m=Math.sqrt,_=Math.abs,y="undefined"!=typeof Float32Array,x=function(t){this._saveData=!t,this._saveData&&(this.data=[]),this._ctx=null}
x.prototype={constructor:x,_xi:0,_yi:0,_x0:0,_y0:0,_ux:0,_uy:0,_len:0,_lineDash:null,_dashOffset:0,_dashIdx:0,_dashSum:0,setScale:function(t,e){this._ux=_(1/s/t)||0,this._uy=_(1/s/e)||0},getContext:function(){return this._ctx},beginPath:function(t){return this._ctx=t,t&&t.beginPath(),t&&(this.dpr=t.dpr),this._saveData&&(this._len=0),this._lineDash&&(this._lineDash=null,this._dashOffset=0),this},moveTo:function(t,e){return this.addData(l.M,t,e),this._ctx&&this._ctx.moveTo(t,e),this._x0=t,this._y0=e,this._xi=t,this._yi=e,this},lineTo:function(t,e){var n=_(t-this._xi)>this._ux||_(e-this._yi)>this._uy||this._len<5
return this.addData(l.L,t,e),this._ctx&&n&&(this._needsDash()?this._dashedLineTo(t,e):this._ctx.lineTo(t,e)),n&&(this._xi=t,this._yi=e),this},bezierCurveTo:function(t,e,n,i,r,a){return this.addData(l.C,t,e,n,i,r,a),this._ctx&&(this._needsDash()?this._dashedBezierTo(t,e,n,i,r,a):this._ctx.bezierCurveTo(t,e,n,i,r,a)),this._xi=r,this._yi=a,this},quadraticCurveTo:function(t,e,n,i){return this.addData(l.Q,t,e,n,i),this._ctx&&(this._needsDash()?this._dashedQuadraticTo(t,e,n,i):this._ctx.quadraticCurveTo(t,e,n,i)),this._xi=n,this._yi=i,this},arc:function(t,e,n,i,r,a){return this.addData(l.A,t,e,n,n,i,r-i,0,a?0:1),this._ctx&&this._ctx.arc(t,e,n,i,r,a),this._xi=g(r)*n+t,this._yi=v(r)*n+t,this},arcTo:function(t,e,n,i,r){return this._ctx&&this._ctx.arcTo(t,e,n,i,r),this},rect:function(t,e,n,i){return this._ctx&&this._ctx.rect(t,e,n,i),this.addData(l.R,t,e,n,i),this},closePath:function(){this.addData(l.Z)
var t=this._ctx,e=this._x0,n=this._y0
return t&&(this._needsDash()&&this._dashedLineTo(e,n),t.closePath()),this._xi=e,this._yi=n,this},fill:function(t){t&&t.fill(),this.toStatic()},stroke:function(t){t&&t.stroke(),this.toStatic()},setLineDash:function(t){if(t instanceof Array){this._lineDash=t,this._dashIdx=0
for(var e=0,n=0;n<t.length;n++)e+=t[n]
this._dashSum=e}return this},setLineDashOffset:function(t){return this._dashOffset=t,this},len:function(){return this._len},setData:function(t){var e=t.length
this.data&&this.data.length==e||!y||(this.data=new Float32Array(e))
for(var n=0;n<e;n++)this.data[n]=t[n]
this._len=e},appendPath:function(t){t instanceof Array||(t=[t])
for(var e=t.length,n=0,i=this._len,r=0;r<e;r++)n+=t[r].len()
for(y&&this.data instanceof Float32Array&&(this.data=new Float32Array(i+n)),r=0;r<e;r++)for(var a=t[r].data,o=0;o<a.length;o++)this.data[i++]=a[o]
this._len=i},addData:function(t){if(this._saveData){var e=this.data
this._len+arguments.length>e.length&&(this._expandData(),e=this.data)
for(var n=0;n<arguments.length;n++)e[this._len++]=arguments[n]
this._prevCmd=t}},_expandData:function(){if(!(this.data instanceof Array)){for(var t=[],e=0;e<this._len;e++)t[e]=this.data[e]
this.data=t}},_needsDash:function(){return this._lineDash},_dashedLineTo:function(t,e){var n,i,r=this._dashSum,a=this._dashOffset,o=this._lineDash,s=this._ctx,l=this._xi,u=this._yi,h=t-l,c=e-u,f=m(h*h+c*c),g=l,v=u,_=o.length
for(a<0&&(a=r+a),g-=(a%=r)*(h/=f),v-=a*(c/=f);h>0&&g<=t||h<0&&g>=t||0==h&&(c>0&&v<=e||c<0&&v>=e);)g+=h*(n=o[i=this._dashIdx]),v+=c*n,this._dashIdx=(i+1)%_,h>0&&g<l||h<0&&g>l||c>0&&v<u||c<0&&v>u||s[i%2?"moveTo":"lineTo"](h>=0?d(g,t):p(g,t),c>=0?d(v,e):p(v,e))
h=g-t,c=v-e,this._dashOffset=-m(h*h+c*c)},_dashedBezierTo:function(t,e,n,r,a,o){var s,l,u,h,c,f=this._dashSum,d=this._dashOffset,p=this._lineDash,g=this._ctx,v=this._xi,_=this._yi,y=i.cubicAt,x=0,w=this._dashIdx,b=p.length,S=0
for(d<0&&(d=f+d),d%=f,s=0;s<1;s+=.1)l=y(v,t,n,a,s+.1)-y(v,t,n,a,s),u=y(_,e,r,o,s+.1)-y(_,e,r,o,s),x+=m(l*l+u*u)
for(;w<b&&!((S+=p[w])>d);w++);for(s=(S-d)/x;s<=1;)h=y(v,t,n,a,s),c=y(_,e,r,o,s),w%2?g.moveTo(h,c):g.lineTo(h,c),s+=p[w]/x,w=(w+1)%b
w%2!=0&&g.lineTo(a,o),l=a-h,u=o-c,this._dashOffset=-m(l*l+u*u)},_dashedQuadraticTo:function(t,e,n,i){var r=n,a=i
n=(n+2*t)/3,i=(i+2*e)/3,t=(this._xi+2*t)/3,e=(this._yi+2*e)/3,this._dashedBezierTo(t,e,n,i,r,a)},toStatic:function(){var t=this.data
t instanceof Array&&(t.length=this._len,y&&(this.data=new Float32Array(t)))},getBoundingRect:function(){u[0]=u[1]=c[0]=c[1]=Number.MAX_VALUE,h[0]=h[1]=f[0]=f[1]=-Number.MAX_VALUE
for(var t=this.data,e=0,n=0,i=0,s=0,d=0;d<t.length;){var p=t[d++]
switch(1==d&&(i=e=t[d],s=n=t[d+1]),p){case l.M:e=i=t[d++],n=s=t[d++],c[0]=i,c[1]=s,f[0]=i,f[1]=s
break
case l.L:a.fromLine(e,n,t[d],t[d+1],c,f),e=t[d++],n=t[d++]
break
case l.C:a.fromCubic(e,n,t[d++],t[d++],t[d++],t[d++],t[d],t[d+1],c,f),e=t[d++],n=t[d++]
break
case l.Q:a.fromQuadratic(e,n,t[d++],t[d++],t[d],t[d+1],c,f),e=t[d++],n=t[d++]
break
case l.A:var m=t[d++],_=t[d++],y=t[d++],x=t[d++],w=t[d++],b=t[d++]+w,S=(t[d++],1-t[d++])
1==d&&(i=g(w)*y+m,s=v(w)*x+_),a.fromArc(m,_,y,x,w,b,S,c,f),e=g(b)*y+m,n=v(b)*x+_
break
case l.R:i=e=t[d++],s=n=t[d++]
var M=t[d++],T=t[d++]
a.fromLine(i,s,i+M,s+T,c,f)
break
case l.Z:e=i,n=s}r.min(u,u,c),r.max(h,h,f)}return 0===d&&(u[0]=u[1]=h[0]=h[1]=0),new o(u[0],u[1],h[0]-u[0],h[1]-u[1])},rebuildPath:function(t){for(var e,n,i,r,a,o,s=this.data,u=this._ux,h=this._uy,c=this._len,f=0;f<c;){var d=s[f++]
switch(1==f&&(e=i=s[f],n=r=s[f+1]),d){case l.M:e=i=s[f++],n=r=s[f++],t.moveTo(i,r)
break
case l.L:a=s[f++],o=s[f++],(_(a-i)>u||_(o-r)>h||f===c-1)&&(t.lineTo(a,o),i=a,r=o)
break
case l.C:t.bezierCurveTo(s[f++],s[f++],s[f++],s[f++],s[f++],s[f++]),i=s[f-2],r=s[f-1]
break
case l.Q:t.quadraticCurveTo(s[f++],s[f++],s[f++],s[f++]),i=s[f-2],r=s[f-1]
break
case l.A:var p=s[f++],m=s[f++],y=s[f++],x=s[f++],w=s[f++],b=s[f++],S=s[f++],M=s[f++],T=y>x?y:x,C=y>x?1:y/x,k=y>x?x/y:1,D=w+b
Math.abs(y-x)>.001?(t.translate(p,m),t.rotate(S),t.scale(C,k),t.arc(0,0,T,w,D,1-M),t.scale(1/C,1/k),t.rotate(-S),t.translate(-p,-m)):t.arc(p,m,T,w,D,1-M),1==f&&(e=g(w)*y+p,n=v(w)*x+m),i=g(D)*y+p,r=v(D)*x+m
break
case l.R:e=i=s[f],n=r=s[f+1],t.rect(s[f++],s[f++],s[f++],s[f++])
break
case l.Z:t.closePath(),i=e,r=n}}}},x.CMD=l
var w=x
t.exports=w},function(t,e,n){var i=n(264),r=n(275).parseClassType,a=0
e.getUID=function(t){return[t||"",a++,Math.random().toFixed(5)].join("_")},e.enableSubTypeDefaulter=function(t){var e={}
return t.registerSubTypeDefaulter=function(t,n){t=r(t),e[t.main]=n},t.determineSubType=function(n,i){var a=i.type
if(!a){var o=r(n).main
t.hasSubTypes(n)&&e[o]&&(a=e[o](i))}return a},t},e.enableTopologicalTravel=function(t,e){function n(t,e){return t[e]||(t[e]={predecessor:[],successor:[]}),t[e]}t.topologicalTravel=function(t,r,a,o){if(t.length){var s=function(t){var r={},a=[]
return i.each(t,function(o){var s=n(r,o),l=function(t,e){var n=[]
return i.each(t,function(t){i.indexOf(e,t)>=0&&n.push(t)}),n}(s.originalDeps=e(o),t)
s.entryCount=l.length,0===s.entryCount&&a.push(o),i.each(l,function(t){i.indexOf(s.predecessor,t)<0&&s.predecessor.push(t)
var e=n(r,t)
i.indexOf(e.successor,t)<0&&e.successor.push(o)})}),{graph:r,noEntryList:a}}(r),l=s.graph,u=s.noEntryList,h={}
for(i.each(t,function(t){h[t]=!0});u.length;){var c=u.pop(),f=l[c],d=!!h[c]
d&&(a.call(o,c,f.originalDeps.slice()),delete h[c]),i.each(f.successor,d?g:p)}i.each(h,function(){throw new Error("Circle dependency may exists")})}function p(t){l[t].entryCount--,0===l[t].entryCount&&u.push(t)}function g(t){h[t]=!0,p(t)}}}},function(t,e,n){n(266).__DEV__
var i=n(265),r=i.makeInner,a=i.getDataItemValue,o=n(329).getCoordSysDefineBySeries,s=n(264),l=s.createHashMap,u=s.each,h=s.map,c=s.isArray,f=s.isString,d=s.isObject,p=s.isTypedArray,g=s.isArrayLike,v=s.extend,m=(s.assert,n(286)),_=n(287),y=_.SOURCE_FORMAT_ORIGINAL,x=_.SOURCE_FORMAT_ARRAY_ROWS,w=_.SOURCE_FORMAT_OBJECT_ROWS,b=_.SOURCE_FORMAT_KEYED_COLUMNS,S=_.SOURCE_FORMAT_UNKNOWN,M=_.SOURCE_FORMAT_TYPED_ARRAY,T=_.SERIES_LAYOUT_BY_ROW,C=r()
function k(t){if(t){var e=l()
return h(t,function(t,n){if(null==(t=v({},d(t)?t:{name:t})).name)return t
t.name+="",null==t.displayName&&(t.displayName=t.name)
var i=e.get(t.name)
return i?t.name+="-"+i.count++:e.set(t.name,{count:1}),t})}}function D(t,e,n,i){if(null==i&&(i=1/0),e===T)for(var r=0;r<n.length&&r<i;r++)t(n[r]?n[r][0]:null,r)
else{var a=n[0]||[]
for(r=0;r<a.length&&r<i;r++)t(a[r],r)}}function I(t,e,n,i,r,o){var s,l
if(p(t))return!1
if(i&&(l=i[o],l=d(l)?l.name:l),e===x)if(n===T){for(var u=t[o],h=0;h<(u||[]).length&&h<5;h++)if(null!=(s=_(u[r+h])))return s}else for(h=0;h<t.length&&h<5;h++){var g=t[r+h]
if(g&&null!=(s=_(g[o])))return s}else if(e===w){if(!l)return
for(h=0;h<t.length&&h<5;h++)if((v=t[h])&&null!=(s=_(v[l])))return s}else if(e===b){if(!l)return
if(!(u=t[l])||p(u))return!1
for(h=0;h<u.length&&h<5;h++)if(null!=(s=_(u[h])))return s}else if(e===y)for(h=0;h<t.length&&h<5;h++){var v=t[h],m=a(v)
if(!c(m))return!1
if(null!=(s=_(m[o])))return s}function _(t){return(null==t||!isFinite(t)||""===t)&&(!(!f(t)||"-"===t)||void 0)}return!1}e.detectSourceFormat=function(t){var e=t.option.source,n=S
if(p(e))n=M
else if(c(e))for(var i=0,r=e.length;i<r;i++){var a=e[i]
if(null!=a){if(c(a)){n=x
break}if(d(a)){n=w
break}}}else if(d(e)){for(var o in e)if(e.hasOwnProperty(o)&&g(e[o])){n=b
break}}else if(null!=e)throw new Error("Invalid data")
C(t).sourceFormat=n},e.getSource=function(t){return C(t).source},e.resetSourceDefaulter=function(t){C(t).datasetMap=l()},e.prepareSource=function(t){var e=t.option,n=e.data,i=p(n)?M:y,r=!1,s=e.seriesLayoutBy,h=e.sourceHeader,g=e.dimensions,v=function(t){var e=t.option
if(!e.data)return t.ecModel.getComponent("dataset",e.datasetIndex||0)}(t)
if(v){var _=v.option
n=_.source,i=C(v).sourceFormat,r=!0,s=s||_.seriesLayoutBy,null==h&&(h=_.sourceHeader),g=g||_.dimensions}var S=function(t,e,n,i,r){if(!t)return{dimensionsDefine:k(r)}
var o,s,l,h
if(e===x)"auto"===i||null==i?D(function(t){null!=t&&"-"!==t&&(f(t)?null==s&&(s=1):s=0)},n,t,10):s=i?1:0,r||1!==s||(r=[],D(function(t,e){r[e]=null!=t?t:""},n,t)),o=r?r.length:n===T?t.length:t[0]?t[0].length:null
else if(e===w)r||(r=function(t){for(var e,n=0;n<t.length&&!(e=t[n++]););if(e){var i=[]
return u(e,function(t,e){i.push(e)}),i}}(t),l=!0)
else if(e===b)r||(r=[],l=!0,u(t,function(t,e){r.push(e)}))
else if(e===y){var p=a(t[0])
o=c(p)&&p.length||1}return l&&u(r,function(t,e){"name"===(d(t)?t.name:t)&&(h=e)}),{startIndex:s,dimensionsDefine:k(r),dimensionsDetectCount:o,potentialNameDimIndex:h}}(n,i,s,h,g),A=e.encode
!A&&v&&(A=function(t,e,n,i,r,a){var s=o(t),h={},c=[],f=[],d=t.subType,p=l(["pie","map","funnel"]),g=l(["line","bar","pictorialBar","scatter","effectScatter","candlestick","boxplot"])
if(s&&null!=g.get(d)){var v=t.ecModel,m=C(v).datasetMap,_=e.uid+"_"+r,y=m.get(_)||m.set(_,{categoryWayDim:1,valueWayDim:0})
u(s.coordSysDims,function(t){if(null==s.firstCategoryDimIndex){var e=y.valueWayDim++
h[t]=e,f.push(e)}else if(s.categoryAxisMap.get(t))h[t]=0,c.push(0)
else{e=y.categoryWayDim++
h[t]=e,f.push(e)}})}else if(null!=p.get(d)){for(var x,w=0;w<5&&null==x;w++)I(n,i,r,a.dimensionsDefine,a.startIndex,w)||(x=w)
if(null!=x){h.value=x
var b=a.potentialNameDimIndex||Math.max(x-1,0)
f.push(b),c.push(b)}}return c.length&&(h.itemName=c),f.length&&(h.seriesName=f),h}(t,v,n,i,s,S)),C(t).source=new m({data:n,fromDataset:r,seriesLayoutBy:s,sourceFormat:i,dimensionsDefine:S.dimensionsDefine,startIndex:S.startIndex,dimensionsDetectCount:S.dimensionsDetectCount,encodeDefine:A})},e.guessOrdinal=function(t,e){return I(t.data,t.sourceFormat,t.seriesLayoutBy,t.dimensionsDefine,t.startIndex,e)}},function(t,e,n){var i=n(275)
function r(t){this._setting=t||{},this._extent=[1/0,-1/0],this._interval=0,this.init&&this.init.apply(this,arguments)}r.prototype.parse=function(t){return t},r.prototype.getSetting=function(t){return this._setting[t]},r.prototype.contain=function(t){var e=this._extent
return t>=e[0]&&t<=e[1]},r.prototype.normalize=function(t){var e=this._extent
return e[1]===e[0]?.5:(t-e[0])/(e[1]-e[0])},r.prototype.scale=function(t){var e=this._extent
return t*(e[1]-e[0])+e[0]},r.prototype.unionExtent=function(t){var e=this._extent
t[0]<e[0]&&(e[0]=t[0]),t[1]>e[1]&&(e[1]=t[1])},r.prototype.unionExtentFromData=function(t,e){this.unionExtent(t.getApproximateExtent(e))},r.prototype.getExtent=function(){return this._extent.slice()},r.prototype.setExtent=function(t,e){var n=this._extent
isNaN(t)||(n[0]=t),isNaN(e)||(n[1]=e)},r.prototype.isBlank=function(){return this._isBlank},r.prototype.setBlank=function(t){this._isBlank=t},r.prototype.getLabel=null,i.enableClassExtend(r),i.enableClassManagement(r,{registerWhenExtend:!0})
var a=r
t.exports=a},,function(t,e){var n=7
function i(t,e,n,i){var r=e+1
if(r===n)return 1
if(i(t[r++],t[e])<0){for(;r<n&&i(t[r],t[r-1])<0;)r++
!function(t,e,n){for(n--;e<n;){var i=t[e]
t[e++]=t[n],t[n--]=i}}(t,e,r)}else for(;r<n&&i(t[r],t[r-1])>=0;)r++
return r-e}function r(t,e,n,i,r){for(i===e&&i++;i<n;i++){for(var a,o=t[i],s=e,l=i;s<l;)r(o,t[a=s+l>>>1])<0?l=a:s=a+1
var u=i-s
switch(u){case 3:t[s+3]=t[s+2]
case 2:t[s+2]=t[s+1]
case 1:t[s+1]=t[s]
break
default:for(;u>0;)t[s+u]=t[s+u-1],u--}t[s]=o}}function a(t,e,n,i,r,a){var o=0,s=0,l=1
if(a(t,e[n+r])>0){for(s=i-r;l<s&&a(t,e[n+r+l])>0;)o=l,(l=1+(l<<1))<=0&&(l=s)
l>s&&(l=s),o+=r,l+=r}else{for(s=r+1;l<s&&a(t,e[n+r-l])<=0;)o=l,(l=1+(l<<1))<=0&&(l=s)
l>s&&(l=s)
var u=o
o=r-l,l=r-u}for(o++;o<l;){var h=o+(l-o>>>1)
a(t,e[n+h])>0?o=h+1:l=h}return l}function o(t,e,n,i,r,a){var o=0,s=0,l=1
if(a(t,e[n+r])<0){for(s=r+1;l<s&&a(t,e[n+r-l])<0;)o=l,(l=1+(l<<1))<=0&&(l=s)
l>s&&(l=s)
var u=o
o=r-l,l=r-u}else{for(s=i-r;l<s&&a(t,e[n+r+l])>=0;)o=l,(l=1+(l<<1))<=0&&(l=s)
l>s&&(l=s),o+=r,l+=r}for(o++;o<l;){var h=o+(l-o>>>1)
a(t,e[n+h])<0?l=h:o=h+1}return l}function s(t,e){var i,r,s=n,l=0
t.length
var u=[]
function h(h){var c=i[h],f=r[h],d=i[h+1],p=r[h+1]
r[h]=f+p,h===l-3&&(i[h+1]=i[h+2],r[h+1]=r[h+2]),l--
var g=o(t[d],t,c,f,0,e)
c+=g,0!=(f-=g)&&0!==(p=a(t[c+f-1],t,d,p,p-1,e))&&(f<=p?function(i,r,l,h){var c=0
for(c=0;c<r;c++)u[c]=t[i+c]
var f=0,d=l,p=i
if(t[p++]=t[d++],0!=--h)if(1!==r){for(var g,v,m,_=s;;){g=0,v=0,m=!1
do{if(e(t[d],u[f])<0){if(t[p++]=t[d++],v++,g=0,0==--h){m=!0
break}}else if(t[p++]=u[f++],g++,v=0,1==--r){m=!0
break}}while((g|v)<_)
if(m)break
do{if(0!==(g=o(t[d],u,f,r,0,e))){for(c=0;c<g;c++)t[p+c]=u[f+c]
if(p+=g,f+=g,(r-=g)<=1){m=!0
break}}if(t[p++]=t[d++],0==--h){m=!0
break}if(0!==(v=a(u[f],t,d,h,0,e))){for(c=0;c<v;c++)t[p+c]=t[d+c]
if(p+=v,d+=v,0==(h-=v)){m=!0
break}}if(t[p++]=u[f++],1==--r){m=!0
break}_--}while(g>=n||v>=n)
if(m)break
_<0&&(_=0),_+=2}if((s=_)<1&&(s=1),1===r){for(c=0;c<h;c++)t[p+c]=t[d+c]
t[p+h]=u[f]}else{if(0===r)throw new Error
for(c=0;c<r;c++)t[p+c]=u[f+c]}}else{for(c=0;c<h;c++)t[p+c]=t[d+c]
t[p+h]=u[f]}else for(c=0;c<r;c++)t[p+c]=u[f+c]}(c,f,d,p):function(i,r,l,h){var c=0
for(c=0;c<h;c++)u[c]=t[l+c]
var f=i+r-1,d=h-1,p=l+h-1,g=0,v=0
if(t[p--]=t[f--],0!=--r)if(1!==h){for(var m=s;;){var _=0,y=0,x=!1
do{if(e(u[d],t[f])<0){if(t[p--]=t[f--],_++,y=0,0==--r){x=!0
break}}else if(t[p--]=u[d--],y++,_=0,1==--h){x=!0
break}}while((_|y)<m)
if(x)break
do{if(0!=(_=r-o(u[d],t,i,r,r-1,e))){for(r-=_,v=1+(p-=_),g=1+(f-=_),c=_-1;c>=0;c--)t[v+c]=t[g+c]
if(0===r){x=!0
break}}if(t[p--]=u[d--],1==--h){x=!0
break}if(0!=(y=h-a(t[f],u,0,h,h-1,e))){for(h-=y,v=1+(p-=y),g=1+(d-=y),c=0;c<y;c++)t[v+c]=u[g+c]
if(h<=1){x=!0
break}}if(t[p--]=t[f--],0==--r){x=!0
break}m--}while(_>=n||y>=n)
if(x)break
m<0&&(m=0),m+=2}if((s=m)<1&&(s=1),1===h){for(v=1+(p-=r),g=1+(f-=r),c=r-1;c>=0;c--)t[v+c]=t[g+c]
t[p]=u[d]}else{if(0===h)throw new Error
for(g=p-(h-1),c=0;c<h;c++)t[g+c]=u[c]}}else{for(v=1+(p-=r),g=1+(f-=r),c=r-1;c>=0;c--)t[v+c]=t[g+c]
t[p]=u[d]}else for(g=p-(h-1),c=0;c<h;c++)t[g+c]=u[c]}(c,f,d,p))}i=[],r=[],this.mergeRuns=function(){for(;l>1;){var t=l-2
if(t>=1&&r[t-1]<=r[t]+r[t+1]||t>=2&&r[t-2]<=r[t]+r[t-1])r[t-1]<r[t+1]&&t--
else if(r[t]>r[t+1])break
h(t)}},this.forceMergeRuns=function(){for(;l>1;){var t=l-2
t>0&&r[t-1]<r[t+1]&&t--,h(t)}},this.pushRun=function(t,e){i[l]=t,r[l]=e,l+=1}}t.exports=function(t,e,n,a){n||(n=0),a||(a=t.length)
var o=a-n
if(!(o<2)){var l=0
if(o<32)r(t,n,a,n+(l=i(t,n,a,e)),e)
else{var u=new s(t,e),h=function(t){for(var e=0;t>=32;)e|=1&t,t>>=1
return t+e}(o)
do{if((l=i(t,n,a,e))<h){var c=o
c>h&&(c=h),r(t,n,n+c,n+l,e),l=c}u.pushRun(n,l),u.mergeRuns(),o-=l,n+=l}while(0!==o)
u.forceMergeRuns()}}}},function(t,e,n){var i=new(n(313))(50)
function r(){var t=this.__cachedImgObj
this.onload=this.__cachedImgObj=null
for(var e=0;e<t.pending.length;e++){var n=t.pending[e],i=n.cb
i&&i(this,n.cbPayload),n.hostEl.dirty()}t.pending.length=0}function a(t){return t&&t.width&&t.height}e.findExistImage=function(t){if("string"==typeof t){var e=i.get(t)
return e&&e.image}return t},e.createOrUpdateImage=function(t,e,n,o,s){if(t){if("string"==typeof t){if(e&&e.__zrImageSrc===t||!n)return e
var l=i.get(t),u={hostEl:n,cb:o,cbPayload:s}
return l?!a(e=l.image)&&l.pending.push(u):(!e&&(e=new Image),e.onload=r,i.put(t,e.__cachedImgObj={image:e,pending:[u]}),e.src=e.__zrImageSrc=t),e}return t}return e},e.isImageReady=a},function(t,e,n){var i=n(264)
t.exports=function(t){for(var e=0;e<t.length;e++)t[e][1]||(t[e][1]=t[e][0])
return function(e,n,r){for(var a={},o=0;o<t.length;o++){var s=t[o][1]
if(!(n&&i.indexOf(n,s)>=0||r&&i.indexOf(r,s)<0)){var l=e.getShallow(s)
null!=l&&(a[t[o][0]]=l)}}return a}}},function(t,e){var n=function(t){this.colorStops=t||[]}
n.prototype={constructor:n,addColorStop:function(t,e){this.colorStops.push({offset:t,color:e})}}
var i=n
t.exports=i},function(t,e,n){var i=n(264),r={}
function a(){this._coordinateSystems=[]}a.prototype={constructor:a,create:function(t,e){var n=[]
i.each(r,function(i,r){var a=i.create(t,e)
n=n.concat(a||[])}),this._coordinateSystems=n},update:function(t,e){i.each(this._coordinateSystems,function(n){n.update&&n.update(t,e)})},getCoordinateSystems:function(){return this._coordinateSystems.slice()}},a.register=function(t,e){r[t]=e},a.get=function(t){return r[t]}
var o=a
t.exports=o},function(t,e,n){var i=n(264),r=(i.assert,i.isArray)
function a(t){t=t||{},this._reset=t.reset,this._plan=t.plan,this._count=t.count,this._onDirty=t.onDirty,this._dirty=!0,this.context}n(266).__DEV__
var o=a.prototype
o.perform=function(t){var e,n=this._upstream,i=t&&t.skip
if(this._dirty&&n){var a=this.context
a.data=a.outputData=n.context.outputData}this.__pipeline&&(this.__pipeline.currentTask=this),this._plan&&!i&&(e=this._plan(this.context))
var o,s=f(this._modBy),u=this._modDataCount||0,h=f(t&&t.modBy),c=t&&t.modDataCount||0
function f(t){return!(t>=1)&&(t=1),t}s===h&&u===c||(e="reset"),(this._dirty||"reset"===e)&&(this._dirty=!1,o=function(t,e){var n,i
t._dueIndex=t._outputDueEnd=t._dueEnd=0,t._settedOutputEnd=null,!e&&t._reset&&((n=t._reset(t.context))&&n.progress&&(i=n.forceFirstProgress,n=n.progress),r(n)&&!n.length&&(n=null)),t._progress=n,t._modBy=t._modDataCount=null
var a=t._downstream
return a&&a.dirty(),i}(this,i)),this._modBy=h,this._modDataCount=c
var d=t&&t.step
if(this._dueEnd=n?n._outputDueEnd:this._count?this._count(this.context):1/0,this._progress){var p=this._dueIndex,g=Math.min(null!=d?this._dueIndex+d:1/0,this._dueEnd)
if(!i&&(o||p<g)){var v=this._progress
if(r(v))for(var m=0;m<v.length;m++)l(this,v[m],p,g,h,c)
else l(this,v,p,g,h,c)}this._dueIndex=g
var _=null!=this._settedOutputEnd?this._settedOutputEnd:g
this._outputDueEnd=_}else this._dueIndex=this._outputDueEnd=null!=this._settedOutputEnd?this._settedOutputEnd:this._dueEnd
return this.unfinished()}
var s=function(){var t,e,n,i,r,a={reset:function(l,u,h,c){e=l,t=u,n=h,i=c,r=Math.ceil(i/n),a.next=n>1&&i>0?s:o}}
return a
function o(){return e<t?e++:null}function s(){var a=e%r*n+Math.ceil(e/r),o=e>=t?null:a<i?a:e
return e++,o}}()
function l(t,e,n,i,r,a){s.reset(n,i,r,a),t._callingProgress=e,t._callingProgress({start:n,end:i,count:i-n,next:s.next},t.context)}o.dirty=function(){this._dirty=!0,this._onDirty&&this._onDirty(this.context)},o.unfinished=function(){return this._progress&&this._dueIndex<this._dueEnd},o.pipe=function(t){(this._downstream!==t||this._dirty)&&(this._downstream=t,t._upstream=this,t.dirty())},o.dispose=function(){this._disposed||(this._upstream&&(this._upstream._downstream=null),this._downstream&&(this._downstream._upstream=null),this._dirty=!1,this._disposed=!0)},o.getUpstream=function(){return this._upstream},o.getDownstream=function(){return this._downstream},o.setOutputEnd=function(t){this._outputDueEnd=this._settedOutputEnd=t},e.createTask=function(t){return new a(t)}},function(t,e,n){var i=n(265).makeInner
t.exports=function(){var t=i()
return function(e){var n=t(e),i=e.pipelineContext,r=n.large,a=n.progressiveRender,o=n.large=i.large,s=n.progressiveRender=i.progressiveRender
return!!(r^o||a^s)&&"reset"}}},function(t,e){var n="\0__throttleOriginMethod",i="\0__throttleRate",r="\0__throttleType"
function a(t,e,n){var i,r,a,o,s,l=0,u=0,h=null
function c(){u=(new Date).getTime(),h=null,t.apply(a,o||[])}e=e||0
var f=function(){i=(new Date).getTime(),a=this,o=arguments
var t=s||e,f=s||n
s=null,r=i-(f?l:u)-t,clearTimeout(h),f?h=setTimeout(c,t):r>=0?c():h=setTimeout(c,-r),l=i}
return f.clear=function(){h&&(clearTimeout(h),h=null)},f.debounceNextCall=function(t){s=t},f}e.throttle=a,e.createOrUpdate=function(t,e,o,s){var l=t[e]
if(l){var u=l[n]||l,h=l[r]
if(l[i]!==o||h!==s){if(null==o||!s)return t[e]=u;(l=t[e]=a(u,o,"debounce"===s))[n]=u,l[r]=s,l[i]=o}return l}},e.clear=function(t,e){var i=t[e]
i&&i[n]&&(t[e]=i[n])}},function(t,e,n){var i=n(264),r=i.each,a=i.createHashMap,o=(i.assert,n(266).__DEV__,a(["tooltip","label","itemName","itemId","seriesName"]))
e.OTHER_DIMENSIONS=o,e.summarizeDimensions=function(t){var e={},n=e.encode={},i=a(),s=[],l=[]
r(t.dimensions,function(e){var r=t.getDimensionInfo(e),a=r.coordDim
if(a){var u=n[a]
n.hasOwnProperty(a)||(u=n[a]=[]),u[r.coordDimIndex]=e,r.isExtraCoord||(i.set(a,1),function(t){return!("ordinal"===t||"time"===t)}(r.type)&&(s[0]=e)),r.defaultTooltip&&l.push(e)}o.each(function(t,e){var i=n[e]
n.hasOwnProperty(e)||(i=n[e]=[])
var a=r.otherDims[e]
null!=a&&!1!==a&&(i[a]=r.name)})})
var u=[],h={}
i.each(function(t,e){var i=n[e]
h[e]=i[0],u=u.concat(i)}),e.dataDimsOnCoord=u,e.encodeFirstDimNotExtra=h
var c=n.label
c&&c.length&&(s=c.slice())
var f=n.tooltip
return f&&f.length?l=f.slice():l.length||(l=s.slice()),n.defaultedLabel=s,n.defaultedTooltip=l,e},e.getDimensionTypeByAxis=function(t){return"category"===t?"ordinal":"time"===t?"time":"float"}},function(t,e,n){var i=n(269),r=n(273),a=n(295),o=n(339),s=i.round,l=a.extend({type:"interval",_interval:0,_intervalPrecision:2,setExtent:function(t,e){var n=this._extent
isNaN(t)||(n[0]=parseFloat(t)),isNaN(e)||(n[1]=parseFloat(e))},unionExtent:function(t){var e=this._extent
t[0]<e[0]&&(e[0]=t[0]),t[1]>e[1]&&(e[1]=t[1]),l.prototype.setExtent.call(this,e[0],e[1])},getInterval:function(){return this._interval},setInterval:function(t){this._interval=t,this._niceExtent=this._extent.slice(),this._intervalPrecision=o.getIntervalPrecision(t)},getTicks:function(){return o.intervalScaleGetTicks(this._interval,this._extent,this._niceExtent,this._intervalPrecision)},getLabel:function(t,e){if(null==t)return""
var n=e&&e.precision
return null==n?n=i.getPrecisionSafe(t)||0:"auto"===n&&(n=this._intervalPrecision),t=s(t,n,!0),r.addCommas(t)},niceTicks:function(t,e,n){t=t||5
var i=this._extent,r=i[1]-i[0]
if(isFinite(r)){r<0&&(r=-r,i.reverse())
var a=o.intervalScaleNiceTicks(i,t,e,n)
this._intervalPrecision=a.intervalPrecision,this._interval=a.interval,this._niceExtent=a.niceTickExtent}},niceExtent:function(t){var e=this._extent
if(e[0]===e[1])if(0!==e[0]){var n=e[0]
t.fixMax?e[0]-=n/2:(e[1]+=n/2,e[0]-=n/2)}else e[1]=1
var i=e[1]-e[0]
isFinite(i)||(e[0]=0,e[1]=1),this.niceTicks(t.splitNumber,t.minInterval,t.maxInterval)
var r=this._interval
t.fixMin||(e[0]=s(Math.floor(e[0]/r)*r)),t.fixMax||(e[1]=s(Math.ceil(e[1]/r)*r))}})
l.create=function(){return new l}
var u=l
t.exports=u},function(t,e,n){var i=n(264),r=n(268),a=n(272),o=r.extendShape({type:"triangle",shape:{cx:0,cy:0,width:0,height:0},buildPath:function(t,e){var n=e.cx,i=e.cy,r=e.width/2,a=e.height/2
t.moveTo(n,i-a),t.lineTo(n+r,i+a),t.lineTo(n-r,i+a),t.closePath()}}),s=r.extendShape({type:"diamond",shape:{cx:0,cy:0,width:0,height:0},buildPath:function(t,e){var n=e.cx,i=e.cy,r=e.width/2,a=e.height/2
t.moveTo(n,i-a),t.lineTo(n+r,i),t.lineTo(n,i+a),t.lineTo(n-r,i),t.closePath()}}),l=r.extendShape({type:"pin",shape:{x:0,y:0,width:0,height:0},buildPath:function(t,e){var n=e.x,i=e.y,r=e.width/5*3,a=Math.max(r,e.height),o=r/2,s=o*o/(a-o),l=i-a+o+s,u=Math.asin(s/o),h=Math.cos(u)*o,c=Math.sin(u),f=Math.cos(u),d=.6*o,p=.7*o
t.moveTo(n-h,l+s),t.arc(n,l,o,Math.PI-u,2*Math.PI+u),t.bezierCurveTo(n+h-c*d,l+s+f*d,n,i-p,n,i),t.bezierCurveTo(n,i-p,n-h+c*d,l+s+f*d,n-h,l+s),t.closePath()}}),u=r.extendShape({type:"arrow",shape:{x:0,y:0,width:0,height:0},buildPath:function(t,e){var n=e.height,i=e.width,r=e.x,a=e.y,o=i/3*2
t.moveTo(r,a),t.lineTo(r+o,a+n),t.lineTo(r,a+n/4*3),t.lineTo(r-o,a+n),t.lineTo(r,a),t.closePath()}}),h={line:r.Line,rect:r.Rect,roundRect:r.Rect,square:r.Rect,circle:r.Circle,diamond:s,pin:l,arrow:u,triangle:o},c={line:function(t,e,n,i,r){r.x1=t,r.y1=e+i/2,r.x2=t+n,r.y2=e+i/2},rect:function(t,e,n,i,r){r.x=t,r.y=e,r.width=n,r.height=i},roundRect:function(t,e,n,i,r){r.x=t,r.y=e,r.width=n,r.height=i,r.r=Math.min(n,i)/4},square:function(t,e,n,i,r){var a=Math.min(n,i)
r.x=t,r.y=e,r.width=a,r.height=a},circle:function(t,e,n,i,r){r.cx=t+n/2,r.cy=e+i/2,r.r=Math.min(n,i)/2},diamond:function(t,e,n,i,r){r.cx=t+n/2,r.cy=e+i/2,r.width=n,r.height=i},pin:function(t,e,n,i,r){r.x=t+n/2,r.y=e+i/2,r.width=n,r.height=i},arrow:function(t,e,n,i,r){r.x=t+n/2,r.y=e+i/2,r.width=n,r.height=i},triangle:function(t,e,n,i,r){r.cx=t+n/2,r.cy=e+i/2,r.width=n,r.height=i}},f={}
i.each(h,function(t,e){f[e]=new t})
var d=r.extendShape({type:"symbol",shape:{symbolType:"",x:0,y:0,width:0,height:0},beforeBrush:function(){var t=this.style
"pin"===this.shape.symbolType&&"inside"===t.textPosition&&(t.textPosition=["50%","40%"],t.textAlign="center",t.textVerticalAlign="middle")},buildPath:function(t,e,n){var i=e.symbolType,r=f[i]
"none"!==e.symbolType&&(r||(r=f[i="rect"]),c[i](e.x,e.y,e.width,e.height,r.shape),r.buildPath(t,r.shape,n))}})
function p(t,e){if("image"!==this.type){var n=this.style,i=this.shape
i&&"line"===i.symbolType?n.stroke=t:this.__isEmptyBrush?(n.stroke=t,n.fill=e||"#fff"):(n.fill&&(n.fill=t),n.stroke&&(n.stroke=t)),this.dirty(!1)}}e.createSymbol=function(t,e,n,i,o,s,l){var u,h=0===t.indexOf("empty")
return h&&(t=t.substr(5,1).toLowerCase()+t.substr(6)),(u=0===t.indexOf("image://")?r.makeImage(t.slice(8),new a(e,n,i,o),l?"center":"cover"):0===t.indexOf("path://")?r.makePath(t.slice(7),{},new a(e,n,i,o),l?"center":"cover"):new d({shape:{symbolType:t,x:e,y:n,width:i,height:o}})).__isEmptyBrush=h,u.setColor=p,u.setColor(s),u}},function(t,e,n){var i=n(309),r=n(270),a=n(264),o=n(351),s=n(353),l=n(357),u=n(360),h=n(361),c=!r.canvasSupported,f={canvas:l},d={},p=function(t,e,n){n=n||{},this.dom=e,this.id=t
var i=this,l=new s,d=n.renderer
if(c){if(!f.vml)throw new Error("You need to require 'zrender/vml/vml' to support IE8")
d="vml"}else d&&f[d]||(d="canvas")
var p=new f[d](e,l,n,t)
this.storage=l,this.painter=p
var g=r.node||r.worker?null:new h(p.getViewportRoot())
this.handler=new o(l,p,g,p.root),this.animation=new u({stage:{update:a.bind(this.flush,this)}}),this.animation.start(),this._needsRefresh
var v=l.delFromStorage,m=l.addToStorage
l.delFromStorage=function(t){v.call(l,t),t&&t.removeSelfFromZr(i)},l.addToStorage=function(t){m.call(l,t),t.addSelfToZr(i)}}
p.prototype={constructor:p,getId:function(){return this.id},add:function(t){this.storage.addRoot(t),this._needsRefresh=!0},remove:function(t){this.storage.delRoot(t),this._needsRefresh=!0},configLayer:function(t,e){this.painter.configLayer&&this.painter.configLayer(t,e),this._needsRefresh=!0},setBackgroundColor:function(t){this.painter.setBackgroundColor&&this.painter.setBackgroundColor(t),this._needsRefresh=!0},refreshImmediately:function(){this._needsRefresh=!1,this.painter.refresh(),this._needsRefresh=!1},refresh:function(){this._needsRefresh=!0},flush:function(){var t
this._needsRefresh&&(t=!0,this.refreshImmediately()),this._needsRefreshHover&&(t=!0,this.refreshHoverImmediately()),t&&this.trigger("rendered")},addHover:function(t,e){this.painter.addHover&&(this.painter.addHover(t,e),this.refreshHover())},removeHover:function(t){this.painter.removeHover&&(this.painter.removeHover(t),this.refreshHover())},clearHover:function(){this.painter.clearHover&&(this.painter.clearHover(),this.refreshHover())},refreshHover:function(){this._needsRefreshHover=!0},refreshHoverImmediately:function(){this._needsRefreshHover=!1,this.painter.refreshHover&&this.painter.refreshHover()},resize:function(t){t=t||{},this.painter.resize(t.width,t.height),this.handler.resize()},clearAnimation:function(){this.animation.clear()},getWidth:function(){return this.painter.getWidth()},getHeight:function(){return this.painter.getHeight()},pathToImage:function(t,e){return this.painter.pathToImage(t,e)},setCursorStyle:function(t){this.handler.setCursorStyle(t)},findHover:function(t,e){return this.handler.findHover(t,e)},on:function(t,e,n){this.handler.on(t,e,n)},off:function(t,e){this.handler.off(t,e)},trigger:function(t,e){this.handler.trigger(t,e)},clear:function(){this.storage.delRoot(),this.painter.clear()},dispose:function(){var t
this.animation.stop(),this.clear(),this.storage.dispose(),this.painter.dispose(),this.handler.dispose(),this.animation=this.storage=this.painter=this.handler=null,t=this.id,delete d[t]}},e.version="4.0.4",e.init=function(t,e){var n=new p(i(),t,e)
return d[n.id]=n,n},e.dispose=function(t){if(t)t.dispose()
else{for(var e in d)d.hasOwnProperty(e)&&d[e].dispose()
d={}}return this},e.getInstance=function(t){return d[t]},e.registerPainter=function(t,e){f[t]=e}},function(t,e){var n=2311
t.exports=function(){return n++}},function(t,e,n){var i=n(309),r=n(283),a=n(311),o=n(354),s=n(264),l=function(t){a.call(this,t),r.call(this,t),o.call(this,t),this.id=t.id||i()}
l.prototype={type:"element",name:"",__zr:null,ignore:!1,clipPath:null,isGroup:!1,drift:function(t,e){switch(this.draggable){case"horizontal":e=0
break
case"vertical":t=0}var n=this.transform
n||(n=this.transform=[1,0,0,1,0,0]),n[4]+=t,n[5]+=e,this.decomposeTransform(),this.dirty(!1)},beforeUpdate:function(){},afterUpdate:function(){},update:function(){this.updateTransform()},traverse:function(t,e){},attrKV:function(t,e){if("position"===t||"scale"===t||"origin"===t){if(e){var n=this[t]
n||(n=this[t]=[]),n[0]=e[0],n[1]=e[1]}}else this[t]=e},hide:function(){this.ignore=!0,this.__zr&&this.__zr.refresh()},show:function(){this.ignore=!1,this.__zr&&this.__zr.refresh()},attr:function(t,e){if("string"==typeof t)this.attrKV(t,e)
else if(s.isObject(t))for(var n in t)t.hasOwnProperty(n)&&this.attrKV(n,t[n])
return this.dirty(!1),this},setClipPath:function(t){var e=this.__zr
e&&t.addSelfToZr(e),this.clipPath&&this.clipPath!==t&&this.removeClipPath(),this.clipPath=t,t.__zr=e,t.__clipTarget=this,this.dirty(!1)},removeClipPath:function(){var t=this.clipPath
t&&(t.__zr&&t.removeSelfFromZr(t.__zr),t.__zr=null,t.__clipTarget=null,this.clipPath=null,this.dirty(!1))},addSelfToZr:function(t){this.__zr=t
var e=this.animators
if(e)for(var n=0;n<e.length;n++)t.animation.addAnimator(e[n])
this.clipPath&&this.clipPath.addSelfToZr(t)},removeSelfFromZr:function(t){this.__zr=null
var e=this.animators
if(e)for(var n=0;n<e.length;n++)t.animation.removeAnimator(e[n])
this.clipPath&&this.clipPath.removeSelfFromZr(t)}},s.mixin(l,o),s.mixin(l,a),s.mixin(l,r)
var u=l
t.exports=u},function(t,e,n){var i=n(277),r=n(267),a=i.identity,o=5e-5
function s(t){return t>o||t<-o}var l=function(t){(t=t||{}).position||(this.position=[0,0]),null==t.rotation&&(this.rotation=0),t.scale||(this.scale=[1,1]),this.origin=this.origin||null},u=l.prototype
u.transform=null,u.needLocalTransform=function(){return s(this.rotation)||s(this.position[0])||s(this.position[1])||s(this.scale[0]-1)||s(this.scale[1]-1)},u.updateTransform=function(){var t=this.parent,e=t&&t.transform,n=this.needLocalTransform(),r=this.transform
n||e?(r=r||i.create(),n?this.getLocalTransform(r):a(r),e&&(n?i.mul(r,t.transform,r):i.copy(r,t.transform)),this.transform=r,this.invTransform=this.invTransform||i.create(),i.invert(this.invTransform,r)):r&&a(r)},u.getLocalTransform=function(t){return l.getLocalTransform(this,t)},u.setTransform=function(t){var e=this.transform,n=t.dpr||1
e?t.setTransform(n*e[0],n*e[1],n*e[2],n*e[3],n*e[4],n*e[5]):t.setTransform(n,0,0,n,0,0)},u.restoreTransform=function(t){var e=t.dpr||1
t.setTransform(e,0,0,e,0,0)}
var h=[]
u.decomposeTransform=function(){if(this.transform){var t=this.parent,e=this.transform
t&&t.transform&&(i.mul(h,t.invTransform,e),e=h)
var n=e[0]*e[0]+e[1]*e[1],r=e[2]*e[2]+e[3]*e[3],a=this.position,o=this.scale
s(n-1)&&(n=Math.sqrt(n)),s(r-1)&&(r=Math.sqrt(r)),e[0]<0&&(n=-n),e[3]<0&&(r=-r),a[0]=e[4],a[1]=e[5],o[0]=n,o[1]=r,this.rotation=Math.atan2(-e[1]/r,e[0]/n)}},u.getGlobalScale=function(){var t=this.transform
if(!t)return[1,1]
var e=Math.sqrt(t[0]*t[0]+t[1]*t[1]),n=Math.sqrt(t[2]*t[2]+t[3]*t[3])
return t[0]<0&&(e=-e),t[3]<0&&(n=-n),[e,n]},u.transformCoordToLocal=function(t,e){var n=[t,e],i=this.invTransform
return i&&r.applyTransform(n,n,i),n},u.transformCoordToGlobal=function(t,e){var n=[t,e],i=this.transform
return i&&r.applyTransform(n,n,i),n},l.getLocalTransform=function(t,e){a(e=e||[])
var n=t.origin,r=t.scale||[1,1],o=t.rotation||0,s=t.position||[0,0]
return n&&(e[4]-=n[0],e[5]-=n[1]),i.scale(e,e,r),o&&i.rotate(e,e,o),n&&(e[4]+=n[0],e[5]+=n[1]),e[4]+=s[0],e[5]+=s[1],e}
var c=l
t.exports=c},function(t,e,n){var i=n(355),r=n(284),a=n(264).isArrayLike,o=Array.prototype.slice
function s(t,e){return t[e]}function l(t,e,n){t[e]=n}function u(t,e,n){return(e-t)*n+t}function h(t,e,n){return n>.5?e:t}function c(t,e,n,i,r){var a=t.length
if(1==r)for(var o=0;o<a;o++)i[o]=u(t[o],e[o],n)
else{var s=a&&t[0].length
for(o=0;o<a;o++)for(var l=0;l<s;l++)i[o][l]=u(t[o][l],e[o][l],n)}}function f(t,e,n){var i=t.length,r=e.length
if(i!==r)if(i>r)t.length=r
else for(var a=i;a<r;a++)t.push(1===n?e[a]:o.call(e[a]))
var s=t[0]&&t[0].length
for(a=0;a<t.length;a++)if(1===n)isNaN(t[a])&&(t[a]=e[a])
else for(var l=0;l<s;l++)isNaN(t[a][l])&&(t[a][l]=e[a][l])}function d(t,e,n){if(t===e)return!0
var i=t.length
if(i!==e.length)return!1
if(1===n){for(var r=0;r<i;r++)if(t[r]!==e[r])return!1}else{var a=t[0].length
for(r=0;r<i;r++)for(var o=0;o<a;o++)if(t[r][o]!==e[r][o])return!1}return!0}function p(t,e,n,i,r,a,o,s,l){var u=t.length
if(1==l)for(var h=0;h<u;h++)s[h]=g(t[h],e[h],n[h],i[h],r,a,o)
else{var c=t[0].length
for(h=0;h<u;h++)for(var f=0;f<c;f++)s[h][f]=g(t[h][f],e[h][f],n[h][f],i[h][f],r,a,o)}}function g(t,e,n,i,r,a,o){var s=.5*(n-t),l=.5*(i-e)
return(2*(e-n)+s+l)*o+(-3*(e-n)-2*s-l)*a+s*r+e}function v(t){if(a(t)){var e=t.length
if(a(t[0])){for(var n=[],i=0;i<e;i++)n.push(o.call(t[i]))
return n}return o.call(t)}return t}function m(t){return t[0]=Math.floor(t[0]),t[1]=Math.floor(t[1]),t[2]=Math.floor(t[2]),"rgba("+t.join(",")+")"}function _(t,e,n,o,s,l){var v=t._getter,_=t._setter,y="spline"===e,x=o.length
if(x){var w,b=o[0].value,S=a(b),M=!1,T=!1,C=S?function(t){var e=o[o.length-1].value
return a(e&&e[0])?2:1}():0
o.sort(function(t,e){return t.time-e.time}),w=o[x-1].time
for(var k=[],D=[],I=o[0].value,A=!0,O=0;O<x;O++){k.push(o[O].time/w)
var P=o[O].value
if(S&&d(P,I,C)||!S&&P===I||(A=!1),I=P,"string"==typeof P){var R=r.parse(P)
R?(P=R,M=!0):T=!0}D.push(P)}if(l||!A){var L=D[x-1]
for(O=0;O<x-1;O++)S?f(D[O],L,C):!isNaN(D[O])||isNaN(L)||T||M||(D[O]=L)
S&&f(v(t._target,s),L,C)
var E,B,N,z,F,H=0,W=0
if(M)var V=[0,0,0,0]
var U=new i({target:t._target,life:w,loop:t._loop,delay:t._delay,onframe:function(t,e){var n
if(e<0)n=0
else if(e<W){for(n=Math.min(H+1,x-1);n>=0&&!(k[n]<=e);n--);n=Math.min(n,x-2)}else{for(n=H;n<x&&!(k[n]>e);n++);n=Math.min(n-1,x-2)}H=n,W=e
var i=k[n+1]-k[n]
if(0!==i)if(E=(e-k[n])/i,y)if(N=D[n],B=D[0===n?n:n-1],z=D[n>x-2?x-1:n+1],F=D[n>x-3?x-1:n+2],S)p(B,N,z,F,E,E*E,E*E*E,v(t,s),C)
else{if(M)r=p(B,N,z,F,E,E*E,E*E*E,V,1),r=m(V)
else{if(T)return h(N,z,E)
r=g(B,N,z,F,E,E*E,E*E*E)}_(t,s,r)}else if(S)c(D[n],D[n+1],E,v(t,s),C)
else{var r
if(M)c(D[n],D[n+1],E,V,1),r=m(V)
else{if(T)return h(D[n],D[n+1],E)
r=u(D[n],D[n+1],E)}_(t,s,r)}},ondestroy:n})
return e&&"spline"!==e&&(U.easing=e),U}}}var y=function(t,e,n,i){this._tracks={},this._target=t,this._loop=e||!1,this._getter=n||s,this._setter=i||l,this._clipCount=0,this._delay=0,this._doneList=[],this._onframeList=[],this._clipList=[]}
y.prototype={when:function(t,e){var n=this._tracks
for(var i in e)if(e.hasOwnProperty(i)){if(!n[i]){n[i]=[]
var r=this._getter(this._target,i)
if(null==r)continue
0!==t&&n[i].push({time:0,value:v(r)})}n[i].push({time:t,value:e[i]})}return this},during:function(t){return this._onframeList.push(t),this},pause:function(){for(var t=0;t<this._clipList.length;t++)this._clipList[t].pause()
this._paused=!0},resume:function(){for(var t=0;t<this._clipList.length;t++)this._clipList[t].resume()
this._paused=!1},isPaused:function(){return!!this._paused},_doneCallback:function(){this._tracks={},this._clipList.length=0
for(var t=this._doneList,e=t.length,n=0;n<e;n++)t[n].call(this)},start:function(t,e){var n,i=this,r=0,a=function(){--r||i._doneCallback()}
for(var o in this._tracks)if(this._tracks.hasOwnProperty(o)){var s=_(this,t,a,this._tracks[o],o,e)
s&&(this._clipList.push(s),r++,this.animation&&this.animation.addClip(s),n=s)}if(n){var l=n.onframe
n.onframe=function(t,e){l(t,e)
for(var n=0;n<i._onframeList.length;n++)i._onframeList[n](t,e)}}return r||this._doneCallback(),this},stop:function(t){for(var e=this._clipList,n=this.animation,i=0;i<e.length;i++){var r=e[i]
t&&r.onframe(this._target,1),n&&n.removeClip(r)}e.length=0},delay:function(t){return this._delay=t,this},done:function(t){return t&&this._doneList.push(t),this},getClips:function(){return this._clipList}}
var x=y
t.exports=x},function(t,e){var n=function(){this.head=null,this.tail=null,this._len=0},i=n.prototype
i.insert=function(t){var e=new r(t)
return this.insertEntry(e),e},i.insertEntry=function(t){this.head?(this.tail.next=t,t.prev=this.tail,t.next=null,this.tail=t):this.head=this.tail=t,this._len++},i.remove=function(t){var e=t.prev,n=t.next
e?e.next=n:this.head=n,n?n.prev=e:this.tail=e,t.next=t.prev=null,this._len--},i.len=function(){return this._len},i.clear=function(){this.head=this.tail=null,this._len=0}
var r=function(t){this.value=t,this.next,this.prev},a=function(t){this._list=new n,this._map={},this._maxSize=t||10,this._lastRemovedEntry=null},o=a.prototype
o.put=function(t,e){var n=this._list,i=this._map,a=null
if(null==i[t]){var o=n.len(),s=this._lastRemovedEntry
if(o>=this._maxSize&&o>0){var l=n.head
n.remove(l),delete i[l.key],a=l.value,this._lastRemovedEntry=l}s?s.value=e:s=new r(e),s.key=t,n.insertEntry(s),i[t]=s}return a},o.get=function(t){var e=this._map[t],n=this._list
if(null!=e)return e!==n.tail&&(n.remove(e),n.insertEntry(e)),e.value},o.clear=function(){this._list.clear(),this._map={}}
var s=a
t.exports=s},function(t,e,n){var i=n(290).debugMode,r=function(){}
1===i?r=function(){for(var t in arguments)throw new Error(arguments[t])}:i>1&&(r=function(){for(var t in arguments)console.log(arguments[t])})
var a=r
t.exports=a},function(t,e,n){var i=n(316),r=[["shadowBlur",0],["shadowOffsetX",0],["shadowOffsetY",0],["shadowColor","#000"],["lineCap","butt"],["lineJoin","miter"],["miterLimit",10]],a=function(t,e){this.extendFrom(t,!1),this.host=e}
for(var o=a.prototype={constructor:a,host:null,fill:"#000",stroke:null,opacity:1,lineDash:null,lineDashOffset:0,shadowBlur:0,shadowOffsetX:0,shadowOffsetY:0,lineWidth:1,strokeNoScale:!1,text:null,font:null,textFont:null,fontStyle:null,fontWeight:null,fontSize:null,fontFamily:null,textTag:null,textFill:"#000",textStroke:null,textWidth:null,textHeight:null,textStrokeWidth:0,textLineHeight:null,textPosition:"inside",textRect:null,textOffset:null,textAlign:null,textVerticalAlign:null,textDistance:5,textShadowColor:"transparent",textShadowBlur:0,textShadowOffsetX:0,textShadowOffsetY:0,textBoxShadowColor:"transparent",textBoxShadowBlur:0,textBoxShadowOffsetX:0,textBoxShadowOffsetY:0,transformText:!1,textRotation:0,textOrigin:null,textBackgroundColor:null,textBorderColor:null,textBorderWidth:0,textBorderRadius:0,textPadding:null,rich:null,truncate:null,blend:null,bind:function(t,e,n){for(var a=n&&n.style,o=!a,s=0;s<r.length;s++){var l=r[s],u=l[0];(o||this[u]!==a[u])&&(t[u]=i(t,u,this[u]||l[1]))}if((o||this.fill!==a.fill)&&(t.fillStyle=this.fill),(o||this.stroke!==a.stroke)&&(t.strokeStyle=this.stroke),(o||this.opacity!==a.opacity)&&(t.globalAlpha=null==this.opacity?1:this.opacity),(o||this.blend!==a.blend)&&(t.globalCompositeOperation=this.blend||"source-over"),this.hasStroke()){var h=this.lineWidth
t.lineWidth=h/(this.strokeNoScale&&e&&e.getLineScale?e.getLineScale():1)}},hasFill:function(){var t=this.fill
return null!=t&&"none"!==t},hasStroke:function(){var t=this.stroke
return null!=t&&"none"!==t&&this.lineWidth>0},extendFrom:function(t,e){if(t)for(var n in t)!t.hasOwnProperty(n)||!0!==e&&(!1===e?this.hasOwnProperty(n):null==t[n])||(this[n]=t[n])},set:function(t,e){"string"==typeof t?this[t]=e:this.extendFrom(t,!0)},clone:function(){var t=new this.constructor
return t.extendFrom(this,!0),t},getGradient:function(t,e,n){for(var i=("radial"===e.type?function(t,e,n){var i=n.width,r=n.height,a=Math.min(i,r),o=null==e.x?.5:e.x,s=null==e.y?.5:e.y,l=null==e.r?.5:e.r
return e.global||(o=o*i+n.x,s=s*r+n.y,l*=a),t.createRadialGradient(o,s,0,o,s,l)}:function(t,e,n){var i=null==e.x?0:e.x,r=null==e.x2?1:e.x2,a=null==e.y?0:e.y,o=null==e.y2?0:e.y2
return e.global||(i=i*n.width+n.x,r=r*n.width+n.x,a=a*n.height+n.y,o=o*n.height+n.y),i=isNaN(i)?0:i,r=isNaN(r)?1:r,a=isNaN(a)?0:a,o=isNaN(o)?0:o,t.createLinearGradient(i,a,r,o)})(t,e,n),r=e.colorStops,a=0;a<r.length;a++)i.addColorStop(r[a].offset,r[a].color)
return i}},s=0;s<r.length;s++){var l=r[s]
l[0]in o||(o[l[0]]=l[1])}a.getGradient=o.getGradient
var u=a
t.exports=u},function(t,e){var n={shadowBlur:1,shadowOffsetX:1,shadowOffsetY:1,textShadowBlur:1,textShadowOffsetX:1,textShadowOffsetY:1,textBoxShadowBlur:1,textBoxShadowOffsetX:1,textBoxShadowOffsetY:1}
t.exports=function(t,e,i){return n.hasOwnProperty(e)?i*t.dpr:i}},function(t,e){var n=function(t,e){this.image=t,this.repeat=e,this.type="pattern"}
n.prototype.getCanvasPattern=function(t){return t.createPattern(this.image,this.repeat||"repeat")}
var i=n
t.exports=i},function(t,e){var n="undefined"!=typeof window&&(window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.msRequestAnimationFrame&&window.msRequestAnimationFrame.bind(window)||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame)||function(t){setTimeout(t,16)}
t.exports=n},function(t,e,n){var i=n(291),r=n(272),a=n(264),o=n(298)
function s(t){i.call(this,t)}s.prototype={constructor:s,type:"image",brush:function(t,e){var n=this.style,i=n.image
n.bind(t,this,e)
var r=this._image=o.createOrUpdateImage(i,this._image,this,this.onload)
if(r&&o.isImageReady(r)){var a=n.x||0,s=n.y||0,l=n.width,u=n.height,h=r.width/r.height
if(null==l&&null!=u?l=u*h:null==u&&null!=l?u=l/h:null==l&&null==u&&(l=r.width,u=r.height),this.setTransform(t),n.sWidth&&n.sHeight){var c=n.sx||0,f=n.sy||0
t.drawImage(r,c,f,n.sWidth,n.sHeight,a,s,l,u)}else if(n.sx&&n.sy){var d=l-(c=n.sx),p=u-(f=n.sy)
t.drawImage(r,c,f,d,p,a,s,l,u)}else t.drawImage(r,a,s,l,u)
null!=n.text&&(this.restoreTransform(t),this.drawRectText(t,this.getBoundingRect()))}},getBoundingRect:function(){var t=this.style
return this._rect||(this._rect=new r(t.x||0,t.y||0,t.width||0,t.height||0)),this._rect}},a.inherits(s,i)
var l=s
t.exports=l},function(t,e,n){var i=n(264),r=i.retrieve2,a=i.retrieve3,o=i.each,s=i.normalizeCssArray,l=i.isString,u=i.isObject,h=n(278),c=n(321),f=n(298),d=n(316),p={left:1,right:1,center:1},g={top:1,bottom:1,middle:1}
function v(t){if(t){t.font=h.makeFont(t)
var e=t.textAlign
"middle"===e&&(e="center"),t.textAlign=null==e||p[e]?e:"left"
var n=t.textVerticalAlign||t.textBaseline
"center"===n&&(n="middle"),t.textVerticalAlign=null==n||g[n]?n:"top",t.textPadding&&(t.textPadding=s(t.textPadding))}}function m(t,e,n,i,r){if(n&&e.textRotation){var a=e.textOrigin
"center"===a?(i=n.width/2+n.x,r=n.height/2+n.y):a&&(i=a[0]+n.x,r=a[1]+n.y),t.translate(i,r),t.rotate(-e.textRotation),t.translate(-i,-r)}}function _(t,e,n,i,o,s,l,u){var c=i.rich[n.styleName]||{},f=n.textVerticalAlign,d=s+o/2
"top"===f?d=s+n.height/2:"bottom"===f&&(d=s+o-n.height/2),!n.isLineHolder&&y(c)&&x(t,e,c,"right"===u?l-n.width:"center"===u?l-n.width/2:l,d-n.height/2,n.width,n.height)
var p=n.textPadding
p&&(l=k(l,u,p),d-=n.height/2-p[2]-n.textHeight/2),S(e,"shadowBlur",a(c.textShadowBlur,i.textShadowBlur,0)),S(e,"shadowColor",c.textShadowColor||i.textShadowColor||"transparent"),S(e,"shadowOffsetX",a(c.textShadowOffsetX,i.textShadowOffsetX,0)),S(e,"shadowOffsetY",a(c.textShadowOffsetY,i.textShadowOffsetY,0)),S(e,"textAlign",u),S(e,"textBaseline","middle"),S(e,"font",n.font||h.DEFAULT_FONT)
var g=M(c.textStroke||i.textStroke,m),v=T(c.textFill||i.textFill),m=r(c.textStrokeWidth,i.textStrokeWidth)
g&&(S(e,"lineWidth",m),S(e,"strokeStyle",g),e.strokeText(n.text,l,d)),v&&(S(e,"fillStyle",v),e.fillText(n.text,l,d))}function y(t){return t.textBackgroundColor||t.textBorderWidth&&t.textBorderColor}function x(t,e,n,i,r,a,o){var s=n.textBackgroundColor,h=n.textBorderWidth,d=n.textBorderColor,p=l(s)
if(S(e,"shadowBlur",n.textBoxShadowBlur||0),S(e,"shadowColor",n.textBoxShadowColor||"transparent"),S(e,"shadowOffsetX",n.textBoxShadowOffsetX||0),S(e,"shadowOffsetY",n.textBoxShadowOffsetY||0),p||h&&d){e.beginPath()
var g=n.textBorderRadius
g?c.buildPath(e,{x:i,y:r,width:a,height:o,r:g}):e.rect(i,r,a,o),e.closePath()}if(p)S(e,"fillStyle",s),e.fill()
else if(u(s)){var v=s.image;(v=f.createOrUpdateImage(v,null,t,w,s))&&f.isImageReady(v)&&e.drawImage(v,i,r,a,o)}h&&d&&(S(e,"lineWidth",h),S(e,"strokeStyle",d),e.stroke())}function w(t,e){e.image=t}function b(t,e,n){var i=e.x||0,r=e.y||0,a=e.textAlign,o=e.textVerticalAlign
if(n){var s=e.textPosition
if(s instanceof Array)i=n.x+C(s[0],n.width),r=n.y+C(s[1],n.height)
else{var l=h.adjustTextPositionOnRect(s,n,e.textDistance)
i=l.x,r=l.y,a=a||l.textAlign,o=o||l.textVerticalAlign}var u=e.textOffset
u&&(i+=u[0],r+=u[1])}return{baseX:i,baseY:r,textAlign:a,textVerticalAlign:o}}function S(t,e,n){return t[e]=d(t,e,n),t[e]}function M(t,e){return null==t||e<=0||"transparent"===t||"none"===t?null:t.image||t.colorStops?"#000":t}function T(t){return null==t||"none"===t?null:t.image||t.colorStops?"#000":t}function C(t,e){return"string"==typeof t?t.lastIndexOf("%")>=0?parseFloat(t)/100*e:parseFloat(t):t}function k(t,e,n){return"right"===e?t-n[1]:"center"===e?t+n[3]/2-n[1]/2:t+n[3]}e.normalizeTextStyle=function(t){return v(t),o(t.rich,v),t},e.renderText=function(t,e,n,i,r){i.rich?function(t,e,n,i,r){var a=t.__textCotentBlock
a&&!t.__dirty||(a=t.__textCotentBlock=h.parseRichText(n,i)),function(t,e,n,i,r){var a=n.width,o=n.outerWidth,s=n.outerHeight,l=i.textPadding,u=b(0,i,r),c=u.baseX,f=u.baseY,d=u.textAlign,p=u.textVerticalAlign
m(e,i,r,c,f)
var g=h.adjustTextX(c,o,d),v=h.adjustTextY(f,s,p),w=g,S=v
l&&(w+=l[3],S+=l[0])
var M=w+a
y(i)&&x(t,e,i,g,v,o,s)
for(var T=0;T<n.lines.length;T++){for(var C,k=n.lines[T],D=k.tokens,I=D.length,A=k.lineHeight,O=k.width,P=0,R=w,L=M,E=I-1;P<I&&(!(C=D[P]).textAlign||"left"===C.textAlign);)_(t,e,C,i,A,S,R,"left"),O-=C.width,R+=C.width,P++
for(;E>=0&&"right"===(C=D[E]).textAlign;)_(t,e,C,i,A,S,L,"right"),O-=C.width,L-=C.width,E--
for(R+=(a-(R-w)-(M-L)-O)/2;P<=E;)_(t,e,C=D[P],i,A,S,R+C.width/2,"center"),R+=C.width,P++
S+=A}}(t,e,a,i,r)}(t,e,n,i,r):function(t,e,n,i,r){var a=S(e,"font",i.font||h.DEFAULT_FONT),o=i.textPadding,s=t.__textCotentBlock
s&&!t.__dirty||(s=t.__textCotentBlock=h.parsePlainText(n,a,o,i.truncate))
var l=s.outerHeight,u=s.lines,c=s.lineHeight,f=b(0,i,r),d=f.baseX,p=f.baseY,g=f.textAlign,v=f.textVerticalAlign
m(e,i,r,d,p)
var _=h.adjustTextY(p,l,v),w=d,C=_,D=y(i)
if(D||o){var I=h.getWidth(n,a)
o&&(I+=o[1]+o[3])
var A=h.adjustTextX(d,I,g)
D&&x(t,e,i,A,_,I,l),o&&(w=k(d,g,o),C+=o[0])}S(e,"textAlign",g||"left"),S(e,"textBaseline","middle"),S(e,"shadowBlur",i.textShadowBlur||0),S(e,"shadowColor",i.textShadowColor||"transparent"),S(e,"shadowOffsetX",i.textShadowOffsetX||0),S(e,"shadowOffsetY",i.textShadowOffsetY||0),C+=c/2
var O=i.textStrokeWidth,P=M(i.textStroke,O),R=T(i.textFill)
P&&(S(e,"lineWidth",O),S(e,"strokeStyle",P)),R&&S(e,"fillStyle",R)
for(var L=0;L<u.length;L++)P&&e.strokeText(u[L],w,C),R&&e.fillText(u[L],w,C),C+=c}(t,e,n,i,r)},e.getStroke=M,e.getFill=T,e.needDrawText=function(t,e){return null!=t&&(t||e.textBackgroundColor||e.textBorderWidth&&e.textBorderColor||e.textPadding)}},function(t,e){e.buildPath=function(t,e){var n,i,r,a,o,s=e.x,l=e.y,u=e.width,h=e.height,c=e.r
u<0&&(s+=u,u=-u),h<0&&(l+=h,h=-h),"number"==typeof c?n=i=r=a=c:c instanceof Array?1===c.length?n=i=r=a=c[0]:2===c.length?(n=r=c[0],i=a=c[1]):3===c.length?(n=c[0],i=a=c[1],r=c[2]):(n=c[0],i=c[1],r=c[2],a=c[3]):n=i=r=a=0,n+i>u&&(n*=u/(o=n+i),i*=u/o),r+a>u&&(r*=u/(o=r+a),a*=u/o),i+r>h&&(i*=h/(o=i+r),r*=h/o),n+a>h&&(n*=h/(o=n+a),a*=h/o),t.moveTo(s+n,l),t.lineTo(s+u-i,l),0!==i&&t.arc(s+u-i,l+i,i,-Math.PI/2,0),t.lineTo(s+u,l+h-r),0!==r&&t.arc(s+u-r,l+h-r,r,0,Math.PI/2),t.lineTo(s+a,l+h),0!==a&&t.arc(s+a,l+h-a,a,Math.PI/2,Math.PI),t.lineTo(s,l+n),0!==n&&t.arc(s+n,l+n,n,Math.PI,1.5*Math.PI)}},function(t,e,n){n(266).__DEV__
var i=n(264),r=i.each,a=i.filter,o=i.map,s=i.isArray,l=i.indexOf,u=i.isObject,h=i.isString,c=i.createHashMap,f=i.assert,d=i.clone,p=i.merge,g=i.extend,v=i.mixin,m=n(265),_=n(274),y=n(276),x=n(391),w=n(328),b=n(294).resetSourceDefaulter,S="\0_ec_inner",M=_.extend({init:function(t,e,n,i){n=n||{},this.option=null,this._theme=new _(n),this._optionManager=i},setOption:function(t,e){f(!(S in t),"please use chart.getOption()"),this._optionManager.setOption(t,e),this.resetOption(null)},resetOption:function(t){var e=!1,n=this._optionManager
if(!t||"recreate"===t){var i=n.mountOption("recreate"===t)
this.option&&"recreate"!==t?(this.restoreData(),this.mergeOption(i)):function(t){t=t,this.option={},this.option[S]=1,this._componentsMap=c({series:[]}),this._seriesIndices,this._seriesIndicesMap,function(t,e){var n=t.color&&!t.colorLayer
r(e,function(e,i){"colorLayer"===i&&n||y.hasClass(i)||("object"==typeof e?t[i]=t[i]?p(t[i],e,!1):d(e):null==t[i]&&(t[i]=e))})}(t,this._theme.option),p(t,x,!1),this.mergeOption(t)}.call(this,i),e=!0}if("timeline"!==t&&"media"!==t||this.restoreData(),!t||"recreate"===t||"timeline"===t){var a=n.getTimelineOption(this)
a&&(this.mergeOption(a),e=!0)}if(!t||"recreate"===t||"media"===t){var o=n.getMediaOption(this,this._api)
o.length&&r(o,function(t){this.mergeOption(t,e=!0)},this)}return e},mergeOption:function(t){var e=this.option,n=this._componentsMap,i=[]
b(this),r(t,function(t,n){null!=t&&(y.hasClass(n)?n&&i.push(n):e[n]=null==e[n]?d(t):p(e[n],t,!0))}),y.topologicalTravel(i,y.getAllClassMainTypes(),function(i,a){var o=m.normalizeToArray(t[i]),l=m.mappingToExists(n.get(i),o)
m.makeIdAndName(l),r(l,function(t,e){var n=t.option
u(n)&&(t.keyInfo.mainType=i,t.keyInfo.subType=function(t,e,n){return e.type?e.type:n?n.subType:y.determineSubType(t,e)}(i,n,t.exist))})
var h=function(t,e){s(e)||(e=e?[e]:[])
var n={}
return r(e,function(e){n[e]=(t.get(e)||[]).slice()}),n}(n,a)
e[i]=[],n.set(i,[]),r(l,function(t,r){var a=t.exist,o=t.option
if(f(u(o)||a,"Empty component definition"),o){var s=y.getClass(i,t.keyInfo.subType,!0)
if(a&&a instanceof s)a.name=t.keyInfo.name,a.mergeOption(o,this),a.optionUpdated(o,!1)
else{var l=g({dependentModels:h,componentIndex:r},t.keyInfo)
a=new s(o,this,this,l),g(a,l),a.init(o,this,this,l),a.optionUpdated(null,!0)}}else a.mergeOption({},this),a.optionUpdated({},!1)
n.get(i)[r]=a,e[i][r]=a.option},this),"series"===i&&T(this,n.get("series"))},this),this._seriesIndicesMap=c(this._seriesIndices=this._seriesIndices||[])},getOption:function(){var t=d(this.option)
return r(t,function(e,n){if(y.hasClass(n)){for(var i=(e=m.normalizeToArray(e)).length-1;i>=0;i--)m.isIdInner(e[i])&&e.splice(i,1)
t[n]=e}}),delete t[S],t},getTheme:function(){return this._theme},getComponent:function(t,e){var n=this._componentsMap.get(t)
if(n)return n[e||0]},queryComponents:function(t){var e=t.mainType
if(!e)return[]
var n,i=t.index,r=t.id,u=t.name,h=this._componentsMap.get(e)
if(!h||!h.length)return[]
if(null!=i)s(i)||(i=[i]),n=a(o(i,function(t){return h[t]}),function(t){return!!t})
else if(null!=r){var c=s(r)
n=a(h,function(t){return c&&l(r,t.id)>=0||!c&&t.id===r})}else if(null!=u){var f=s(u)
n=a(h,function(t){return f&&l(u,t.name)>=0||!f&&t.name===u})}else n=h.slice()
return C(n,t)},findComponents:function(t){var e=t.query,n=t.mainType,i=function(t){var e=n+"Index",i=n+"Id",r=n+"Name"
return!t||null==t[e]&&null==t[i]&&null==t[r]?null:{mainType:n,index:t[e],id:t[i],name:t[r]}}(e)
return function(e){return t.filter?a(e,t.filter):e}(C(i?this.queryComponents(i):this._componentsMap.get(n),t))},eachComponent:function(t,e,n){var i=this._componentsMap
if("function"==typeof t)n=e,e=t,i.each(function(t,i){r(t,function(t,r){e.call(n,i,t,r)})})
else if(h(t))r(i.get(t),e,n)
else if(u(t)){var a=this.findComponents(t)
r(a,e,n)}},getSeriesByName:function(t){var e=this._componentsMap.get("series")
return a(e,function(e){return e.name===t})},getSeriesByIndex:function(t){return this._componentsMap.get("series")[t]},getSeriesByType:function(t){var e=this._componentsMap.get("series")
return a(e,function(e){return e.subType===t})},getSeries:function(){return this._componentsMap.get("series").slice()},getSeriesCount:function(){return this._componentsMap.get("series").length},eachSeries:function(t,e){r(this._seriesIndices,function(n){var i=this._componentsMap.get("series")[n]
t.call(e,i,n)},this)},eachRawSeries:function(t,e){r(this._componentsMap.get("series"),t,e)},eachSeriesByType:function(t,e,n){r(this._seriesIndices,function(i){var r=this._componentsMap.get("series")[i]
r.subType===t&&e.call(n,r,i)},this)},eachRawSeriesByType:function(t,e,n){return r(this.getSeriesByType(t),e,n)},isSeriesFiltered:function(t){return null==this._seriesIndicesMap.get(t.componentIndex)},getCurrentSeriesIndices:function(){return(this._seriesIndices||[]).slice()},filterSeries:function(t,e){T(this,a(this._componentsMap.get("series"),t,e))},restoreData:function(t){var e=this._componentsMap
T(this,e.get("series"))
var n=[]
e.each(function(t,e){n.push(e)}),y.topologicalTravel(n,y.getAllClassMainTypes(),function(n,i){r(e.get(n),function(e){("series"!==n||!function(t,e){if(e){var n=e.seiresIndex,i=e.seriesId,r=e.seriesName
return null!=n&&t.componentIndex!==n||null!=i&&t.id!==i||null!=r&&t.name!==r}}(e,t))&&e.restoreData()})})}})
function T(t,e){t._seriesIndicesMap=c(t._seriesIndices=o(e,function(t){return t.componentIndex})||[])}function C(t,e){return e.hasOwnProperty("subType")?a(t,function(t){return t.subType===e.subType}):t}v(M,w)
var k=M
t.exports=k},function(t,e,n){var i=n(267),r=n(279),a=Math.min,o=Math.max,s=Math.sin,l=Math.cos,u=2*Math.PI,h=i.create(),c=i.create(),f=i.create(),d=[],p=[]
e.fromPoints=function(t,e,n){if(0!==t.length){var i,r=t[0],s=r[0],l=r[0],u=r[1],h=r[1]
for(i=1;i<t.length;i++)r=t[i],s=a(s,r[0]),l=o(l,r[0]),u=a(u,r[1]),h=o(h,r[1])
e[0]=s,e[1]=u,n[0]=l,n[1]=h}},e.fromLine=function(t,e,n,i,r,s){r[0]=a(t,n),r[1]=a(e,i),s[0]=o(t,n),s[1]=o(e,i)},e.fromCubic=function(t,e,n,i,s,l,u,h,c,f){var g,v=r.cubicExtrema,m=r.cubicAt,_=v(t,n,s,u,d)
for(c[0]=1/0,c[1]=1/0,f[0]=-1/0,f[1]=-1/0,g=0;g<_;g++){var y=m(t,n,s,u,d[g])
c[0]=a(y,c[0]),f[0]=o(y,f[0])}for(_=v(e,i,l,h,p),g=0;g<_;g++){var x=m(e,i,l,h,p[g])
c[1]=a(x,c[1]),f[1]=o(x,f[1])}c[0]=a(t,c[0]),f[0]=o(t,f[0]),c[0]=a(u,c[0]),f[0]=o(u,f[0]),c[1]=a(e,c[1]),f[1]=o(e,f[1]),c[1]=a(h,c[1]),f[1]=o(h,f[1])},e.fromQuadratic=function(t,e,n,i,s,l,u,h){var c=r.quadraticExtremum,f=r.quadraticAt,d=o(a(c(t,n,s),1),0),p=o(a(c(e,i,l),1),0),g=f(t,n,s,d),v=f(e,i,l,p)
u[0]=a(t,s,g),u[1]=a(e,l,v),h[0]=o(t,s,g),h[1]=o(e,l,v)},e.fromArc=function(t,e,n,r,a,o,d,p,g){var v=i.min,m=i.max,_=Math.abs(a-o)
if(_%u<1e-4&&_>1e-4)return p[0]=t-n,p[1]=e-r,g[0]=t+n,void(g[1]=e+r)
if(h[0]=l(a)*n+t,h[1]=s(a)*r+e,c[0]=l(o)*n+t,c[1]=s(o)*r+e,v(p,h,c),m(g,h,c),(a%=u)<0&&(a+=u),(o%=u)<0&&(o+=u),a>o&&!d?o+=u:a<o&&d&&(a+=u),d){var y=o
o=a,a=y}for(var x=0;x<o;x+=Math.PI/2)x>a&&(f[0]=l(x)*n+t,f[1]=s(x)*r+e,v(p,f,p),m(g,f,g))}},function(t,e){var n=2*Math.PI
e.normalizeRadian=function(t){return(t%=n)<0&&(t+=n),t}},function(t,e){t.exports=function(t,e,n,i,r,a){if(a>e&&a>i||a<e&&a<i)return 0
if(i===e)return 0
var o=i<e?1:-1,s=(a-e)/(i-e)
1!==s&&0!==s||(o=i<e?.5:-.5)
var l=s*(n-t)+t
return l===r?1/0:l>r?o:0}},function(t,e,n){var i=n(270),r=[["shadowBlur",0],["shadowColor","#000"],["shadowOffsetX",0],["shadowOffsetY",0]]
t.exports=function(t){return i.browser.ie&&i.browser.version>=11?function(){var e,n=this.__clipPaths,i=this.style
if(n)for(var a=0;a<n.length;a++){var o=n[a],s=o&&o.shape,l=o&&o.type
if(s&&("sector"===l&&s.startAngle===s.endAngle||"rect"===l&&(!s.width||!s.height))){for(var u=0;u<r.length;u++)r[u][2]=i[r[u][0]],i[r[u][0]]=r[u][1]
e=!0
break}}if(t.apply(this,arguments),e)for(u=0;u<r.length;u++)i[r[u][0]]=r[u][2]}:t}},function(t,e,n){var i=n(378),r=n(379)
e.buildPath=function(t,e,n){var a=e.points,o=e.smooth
if(a&&a.length>=2){if(o&&"spline"!==o){var s=r(a,o,n,e.smoothConstraint)
t.moveTo(a[0][0],a[0][1])
for(var l=a.length,u=0;u<(n?l:l-1);u++){var h=s[2*u],c=s[2*u+1],f=a[(u+1)%l]
t.bezierCurveTo(h[0],h[1],c[0],c[1],f[0],f[1])}}else{"spline"===o&&(a=i(a,n)),t.moveTo(a[0][0],a[0][1]),u=1
for(var d=a.length;u<d;u++)t.lineTo(a[u][0],a[u][1])}n&&t.closePath()}}},function(t,e,n){var i=n(265),r=i.makeInner,a=i.normalizeToArray,o=r(),s={clearColorPalette:function(){o(this).colorIdx=0,o(this).colorNameMap={}},getColorFromPalette:function(t,e,n){var i=o(e=e||this),r=i.colorIdx||0,s=i.colorNameMap=i.colorNameMap||{}
if(s.hasOwnProperty(t))return s[t]
var l=a(this.get("color",!0)),u=this.get("colorLayer",!0),h=null!=n&&u?function(t,e){for(var n=t.length,i=0;i<n;i++)if(t[i].length>e)return t[i]
return t[n-1]}(u,n):l
if((h=h||l)&&h.length){var c=h[r]
return t&&(s[t]=c),i.colorIdx=(r+1)%h.length,c}}}
t.exports=s},function(t,e,n){n(266).__DEV__
var i=n(264),r=i.createHashMap,a=(i.retrieve,i.each),o={cartesian2d:function(t,e,n,i){var r=t.getReferringComponents("xAxis")[0],a=t.getReferringComponents("yAxis")[0]
e.coordSysDims=["x","y"],n.set("x",r),n.set("y",a),s(r)&&(i.set("x",r),e.firstCategoryDimIndex=0),s(a)&&(i.set("y",a),e.firstCategoryDimIndex=1)},singleAxis:function(t,e,n,i){var r=t.getReferringComponents("singleAxis")[0]
e.coordSysDims=["single"],n.set("single",r),s(r)&&(i.set("single",r),e.firstCategoryDimIndex=0)},polar:function(t,e,n,i){var r=t.getReferringComponents("polar")[0],a=r.findAxisModel("radiusAxis"),o=r.findAxisModel("angleAxis")
e.coordSysDims=["radius","angle"],n.set("radius",a),n.set("angle",o),s(a)&&(i.set("radius",a),e.firstCategoryDimIndex=0),s(o)&&(i.set("angle",o),e.firstCategoryDimIndex=1)},geo:function(t,e,n,i){e.coordSysDims=["lng","lat"]},parallel:function(t,e,n,i){var r=t.ecModel,o=r.getComponent("parallel",t.get("parallelIndex")),l=e.coordSysDims=o.dimensions.slice()
a(o.parallelAxisIndex,function(t,a){var o=r.getComponent("parallelAxis",t),u=l[a]
n.set(u,o),s(o)&&null==e.firstCategoryDimIndex&&(i.set(u,o),e.firstCategoryDimIndex=a)})}}
function s(t){return"category"===t.get("type")}e.getCoordSysDefineBySeries=function(t){var e=t.get("coordinateSystem"),n={coordSysName:e,coordSysDims:[],axisMap:r(),categoryAxisMap:r()},i=o[e]
if(i)return i(t,n,n.axisMap,n.categoryAxisMap),n}},function(t,e,n){var i=n(264),r=["getDom","getZr","getWidth","getHeight","getDevicePixelRatio","dispatchAction","isDisposed","on","off","getDataURL","getConnectedDataURL","getModel","getOption","getViewOfComponentModel","getViewOfSeriesModel"]
t.exports=function(t){i.each(r,function(e){this[e]=i.bind(t[e],t)},this)}},function(t,e,n){n(266).__DEV__
var i=n(264),r=n(270),a=n(273),o=a.formatTime,s=a.encodeHTML,l=a.addCommas,u=a.getTooltipMarker,h=n(265),c=n(276),f=n(328),d=n(396),p=n(280),g=p.getLayoutParams,v=p.mergeLayoutParam,m=n(302).createTask,_=n(294),y=_.prepareSource,x=_.getSource,w=n(288).retrieveRawValue,b=h.makeInner(),S=c.extend({type:"series.__base__",seriesIndex:0,coordinateSystem:null,defaultOption:null,legendDataProvider:null,visualColorAccessPath:"itemStyle.color",layoutMode:null,init:function(t,e,n,i){this.seriesIndex=this.componentIndex,this.dataTask=m({count:T,reset:C}),this.dataTask.context={model:this},this.mergeDefaultAndTheme(t,n),y(this)
var r=this.getInitialData(t,n)
D(r,this),this.dataTask.context.data=r,b(this).dataBeforeProcessed=r,M(this)},mergeDefaultAndTheme:function(t,e){var n=this.layoutMode,r=n?g(t):{},a=this.subType
c.hasClass(a)&&(a+="Series"),i.merge(t,e.getTheme().get(this.subType)),i.merge(t,this.getDefaultOption()),h.defaultEmphasis(t,"label",["show"]),this.fillDataTextStyle(t.data),n&&v(t,r,n)},mergeOption:function(t,e){t=i.merge(this.option,t,!0),this.fillDataTextStyle(t.data)
var n=this.layoutMode
n&&v(this.option,t,n),y(this)
var r=this.getInitialData(t,e)
D(r,this),this.dataTask.dirty(),this.dataTask.context.data=r,b(this).dataBeforeProcessed=r,M(this)},fillDataTextStyle:function(t){if(t&&!i.isTypedArray(t))for(var e=["show"],n=0;n<t.length;n++)t[n]&&t[n].label&&h.defaultEmphasis(t[n],"label",e)},getInitialData:function(){},appendData:function(t){this.getRawData().appendData(t.data)},getData:function(t){var e=A(this)
if(e){var n=e.context.data
return null==t?n:n.getLinkedData(t)}return b(this).data},setData:function(t){var e=A(this)
if(e){var n=e.context
n.data!==t&&e.modifyOutputEnd&&e.setOutputEnd(t.count()),n.outputData=t,e!==this.dataTask&&(n.data=t)}b(this).data=t},getSource:function(){return x(this)},getRawData:function(){return b(this).dataBeforeProcessed},getBaseAxis:function(){var t=this.coordinateSystem
return t&&t.getBaseAxis&&t.getBaseAxis()},formatTooltip:function(t,e,n){var r=this.getData(),a=r.mapDimension("defaultedTooltip",!0),c=a.length,f=this.getRawValue(t),d=i.isArray(f),p=r.getItemVisual(t,"color")
i.isObject(p)&&p.colorStops&&(p=(p.colorStops[0]||{}).color),p=p||"transparent"
var g=c>1||d&&!c?function(n){var h=i.reduce(n,function(t,e,n){var i=r.getDimensionInfo(n)
return t|(i&&!1!==i.tooltip&&null!=i.displayName)},0),c=[]
function f(t,n){var i=r.getDimensionInfo(n)
if(i&&!1!==i.otherDims.tooltip){var a=i.type,f=u({color:p,type:"subItem"}),d=(h?f+s(i.displayName||"-")+": ":"")+s("ordinal"===a?t+"":"time"===a?e?"":o("yyyy/MM/dd hh:mm:ss",t):l(t))
d&&c.push(d)}}return a.length?i.each(a,function(e){f(w(r,t,e),e)}):i.each(n,f),(h?"<br/>":"")+c.join(h?"<br/>":", ")}(f):function(t){return s(l(t))}(c?w(r,t,a[0]):d?f[0]:f),v=u(p),m=r.getName(t),_=this.name
return h.isNameSpecified(this)||(_=""),_=_?s(_)+(e?": ":"<br/>"):"",e?v+_+g:_+v+(m?s(m)+": "+g:g)},isAnimationEnabled:function(){if(r.node)return!1
var t=this.getShallow("animation")
return t&&this.getData().count()>this.getShallow("animationThreshold")&&(t=!1),t},restoreData:function(){this.dataTask.dirty()},getColorFromPalette:function(t,e,n){var i=this.ecModel,r=f.getColorFromPalette.call(this,t,e,n)
return r||(r=i.getColorFromPalette(t,e,n)),r},coordDimToDataDim:function(t){return this.getRawData().mapDimension(t,!0)},getProgressive:function(){return this.get("progressive")},getProgressiveThreshold:function(){return this.get("progressiveThreshold")},getAxisTooltipData:null,getTooltipPosition:null,pipeTask:null,preventIncremental:null,pipelineContext:null})
function M(t){var e=t.name
h.isNameSpecified(t)||(t.name=function(t){var e=t.getRawData(),n=e.mapDimension("seriesName",!0),r=[]
return i.each(n,function(t){var n=e.getDimensionInfo(t)
n.displayName&&r.push(n.displayName)}),r.join(" ")}(t)||e)}function T(t){return t.model.getRawData().count()}function C(t){var e=t.model
return e.setData(e.getRawData().cloneShallow()),k}function k(t,e){t.end>e.outputData.count()&&e.model.getRawData().cloneShallow(e.outputData)}function D(t,e){i.each(t.CHANGABLE_METHODS,function(n){t.wrapMethod(n,i.curry(I,e))})}function I(t){var e=A(t)
e&&e.setOutputEnd(this.count())}function A(t){var e=(t.ecModel||{}).scheduler,n=e&&e.getPipeline(t.uid)
if(n){var i=n.currentTask
if(i){var r=i.agentStubMap
r&&(i=r.get(t.uid))}return i}}i.mixin(S,d),i.mixin(S,f)
var O=S
t.exports=O},function(t,e,n){var i=n(289),r=n(293),a=n(275),o=function(){this.group=new i,this.uid=r.getUID("viewComponent")},s=o.prototype={constructor:o,init:function(t,e){},render:function(t,e,n,i){},dispose:function(){}}
s.updateView=s.updateLayout=s.updateVisual=function(t,e,n,i){},a.enableClassExtend(o),a.enableClassManagement(o,{registerWhenExtend:!0})
var l=o
t.exports=l},function(t,e,n){var i=n(264).each,r=n(289),a=n(293),o=n(275),s=n(265),l=n(302).createTask,u=n(303),h=s.makeInner(),c=u()
function f(){this.group=new r,this.uid=a.getUID("viewChart"),this.renderTask=l({plan:v,reset:m}),this.renderTask.context={view:this}}f.prototype={type:"chart",init:function(t,e){},render:function(t,e,n,i){},highlight:function(t,e,n,i){g(t.getData(),i,"emphasis")},downplay:function(t,e,n,i){g(t.getData(),i,"normal")},remove:function(t,e){this.group.removeAll()},dispose:function(){},incrementalPrepareRender:null,incrementalRender:null,updateTransform:null}
var d=f.prototype
function p(t,e){if(t&&(t.trigger(e),"group"===t.type))for(var n=0;n<t.childCount();n++)p(t.childAt(n),e)}function g(t,e,n){var r=s.queryDataIndex(t,e)
null!=r?i(s.normalizeToArray(r),function(e){p(t.getItemGraphicEl(e),n)}):t.eachItemGraphicEl(function(t){p(t,n)})}function v(t){return c(t.model)}function m(t){var e=t.model,n=t.ecModel,i=t.api,r=t.payload,a=e.pipelineContext.progressiveRender,o=t.view,s=r&&h(r).updateMethod,l=a?"incrementalPrepareRender":s&&o[s]?s:"render"
return"render"!==l&&o[l](e,n,i,r),_[l]}d.updateView=d.updateLayout=d.updateVisual=function(t,e,n,i){this.render(t,e,n,i)},o.enableClassExtend(f,["dispose"]),o.enableClassManagement(f,{registerWhenExtend:!0}),f.markUpdateMethod=function(t,e){h(t).updateMethod=e}
var _={incrementalPrepareRender:{progress:function(t,e){e.view.incrementalRender(t,e.model,e.ecModel,e.api,e.payload)}},render:{forceFirstProgress:!0,progress:function(t,e){e.view.render(e.model,e.ecModel,e.api,e.payload)}}},y=f
t.exports=y},function(t,e,n){var i=n(264),r=n(335),a=n(336),o=n(287).SOURCE_FORMAT_ORIGINAL,s=n(305).getDimensionTypeByAxis,l=n(265).getDataItemValue,u=n(301),h=n(329).getCoordSysDefineBySeries,c=n(286),f=n(281).enableDataStack
t.exports=function(t,e,n){n=n||{},c.isInstance(t)||(t=c.seriesDataToSource(t))
var d,p=e.get("coordinateSystem"),g=u.get(p),v=h(e)
v&&(d=i.map(v.coordSysDims,function(t){var e={name:t},n=v.axisMap.get(t)
if(n){var i=n.get("type")
e.type=s(i)}return e})),d||(d=g&&(g.getDimensionsInfo?g.getDimensionsInfo():g.dimensions.slice())||["x","y"])
var m,_,y=a(t,{coordDimensions:d,generateCoord:n.generateCoord})
v&&i.each(y,function(t,e){var n=t.coordDim,i=v.categoryAxisMap.get(n)
i&&(null==m&&(m=e),t.ordinalMeta=i.getOrdinalMeta()),null!=t.otherDims.itemName&&(_=!0)}),_||null==m||(y[m].otherDims.itemName=0)
var x=f(e,y),w=new r(y,e)
w.setCalculationInfo(x)
var b=null!=m&&function(t){if(t.sourceFormat===o){var e=function(t){for(var e=0;e<t.length&&null==t[e];)e++
return t[e]}(t.data||[])
return null!=e&&!i.isArray(l(e))}}(t)?function(t,e,n,i){return i===m?n:this.defaultDimValueGetter(t,e,n,i)}:null
return w.hasItemOption=!1,w.initData(t,null,b),w}},function(t,e,n){n(266).__DEV__
var i=n(264),r=n(274),a=n(407),o=n(286),s=n(288),l=s.defaultDimValueGetters,u=s.DefaultDataProvider,h=n(305).summarizeDimensions,c=i.isObject,f="e\0\0",d={float:"undefined"==typeof Float64Array?Array:Float64Array,int:"undefined"==typeof Int32Array?Array:Int32Array,ordinal:Array,number:Array,time:Array},p="undefined"==typeof Uint32Array?Array:Uint32Array,g="undefined"==typeof Uint16Array?Array:Uint16Array
function v(t){return t._rawCount>65535?p:g}function m(t){var e=t.constructor
return e===Array?t.slice():new e(t)}var _=["hasItemOption","_nameList","_idList","_invertedIndicesMap","_rawData","_chunkSize","_chunkCount","_dimValueGetter","_count","_rawCount","_nameDimIdx","_idDimIdx"],y=["_extent","_approximateExtent","_rawExtent"]
function x(t,e){i.each(_.concat(e.__wrappedMethods||[]),function(n){e.hasOwnProperty(n)&&(t[n]=e[n])}),t.__wrappedMethods=e.__wrappedMethods,i.each(y,function(n){t[n]=i.clone(e[n])}),t._calculationInfo=i.extend(e._calculationInfo)}var w=function(t,e){t=t||["x","y"]
for(var n={},r=[],a={},o=0;o<t.length;o++){var s=t[o]
i.isString(s)&&(s={name:s})
var l=s.name
s.type=s.type||"float",s.coordDim||(s.coordDim=l,s.coordDimIndex=0),s.otherDims=s.otherDims||{},r.push(l),n[l]=s,s.index=o,s.createInvertedIndices&&(a[l]=[])}this.dimensions=r,this._dimensionInfos=n,this.hostModel=e,this.dataType,this._indices=null,this._count=0,this._rawCount=0,this._storage={},this._nameList=[],this._idList=[],this._optionModels=[],this._visual={},this._layout={},this._itemVisuals=[],this.hasItemVisual={},this._itemLayouts=[],this._graphicEls=[],this._chunkSize=1e5,this._chunkCount=0,this._rawData,this._rawExtent={},this._extent={},this._approximateExtent={},this._dimensionsSummary=h(this),this._invertedIndicesMap=a,this._calculationInfo={}},b=w.prototype
function S(t,e,n){var i
if(null!=e){var r=t._chunkSize,a=Math.floor(n/r),o=n%r,s=t.dimensions[e],l=t._storage[s][a]
if(l){i=l[o]
var u=t._dimensionInfos[s].ordinalMeta
u&&u.categories.length&&(i=u.categories[i])}}return i}function M(t){return t}function T(t){return t<this._count&&t>=0?this._indices[t]:-1}function C(t,e){var n=t._idList[e]
return null==n&&(n=S(t,t._idDimIdx,e)),null==n&&(n=f+e),n}function k(t){return i.isArray(t)||(t=[t]),t}function D(t,e){var n=t.dimensions,r=new w(i.map(n,t.getDimensionInfo,t),t.hostModel)
x(r,t)
for(var a=r._storage={},o=t._storage,s=0;s<n.length;s++){var l=n[s]
o[l]&&(i.indexOf(e,l)>=0?(a[l]=I(o[l]),r._rawExtent[l]=[1/0,-1/0],r._extent[l]=null):a[l]=o[l])}return r}function I(t){for(var e=new Array(t.length),n=0;n<t.length;n++)e[n]=m(t[n])
return e}b.type="list",b.hasItemOption=!0,b.getDimension=function(t){return isNaN(t)||(t=this.dimensions[t]||t),t},b.getDimensionInfo=function(t){return this._dimensionInfos[this.getDimension(t)]},b.getDimensionsOnCoord=function(){return this._dimensionsSummary.dataDimsOnCoord.slice()},b.mapDimension=function(t,e){var n=this._dimensionsSummary
if(null==e)return n.encodeFirstDimNotExtra[t]
var i=n.encode[t]
return!0===e?(i||[]).slice():i&&i[e]},b.initData=function(t,e,n){(o.isInstance(t)||i.isArrayLike(t))&&(t=new u(t,this.dimensions.length)),this._rawData=t,this._storage={},this._indices=null,this._nameList=e||[],this._idList=[],this._nameRepeatCount={},n||(this.hasItemOption=!1),this.defaultDimValueGetter=l[this._rawData.getSource().sourceFormat],this._dimValueGetter=n=n||this.defaultDimValueGetter,this._rawExtent={},this._initDataFromProvider(0,t.count()),t.pure&&(this.hasItemOption=!1)},b.getProvider=function(){return this._rawData},b.appendData=function(t){var e=this._rawData,n=this.count()
e.appendData(t)
var i=e.count()
e.persistent||(i+=n),this._initDataFromProvider(n,i)},b._initDataFromProvider=function(t,e){if(!(t>=e)){for(var n,r=this._chunkSize,a=this._rawData,o=this._storage,s=this.dimensions,l=s.length,u=this._dimensionInfos,h=this._nameList,c=this._idList,f=this._rawExtent,g=this._nameRepeatCount={},v=this._chunkCount,m=v-1,_=0;_<l;_++){f[I=s[_]]||(f[I]=[1/0,-1/0])
var y=u[I]
0===y.otherDims.itemName&&(n=this._nameDimIdx=_),0===y.otherDims.itemId&&(this._idDimIdx=_)
var x=d[y.type]
o[I]||(o[I]=[])
var w=o[I][m]
if(w&&w.length<r){for(var b=new x(Math.min(e-m*r,r)),S=0;S<w.length;S++)b[S]=w[S]
o[I][m]=b}for(var M=v*r;M<e;M+=r)o[I].push(new x(Math.min(e-M,r)))
this._chunkCount=o[I].length}for(var T=new Array(l),C=t;C<e;C++){T=a.getItem(C,T)
var k=Math.floor(C/r),D=C%r
for(M=0;M<l;M++){var I,A=o[I=s[M]][k],O=this._dimValueGetter(T,I,C,M)
A[D]=O
var P=f[I]
O<P[0]&&(P[0]=O),O>P[1]&&(P[1]=O)}if(!a.pure){var R=h[C]
if(T&&null==R)if(null!=T.name)h[C]=R=T.name
else if(null!=n){var L=s[n],E=o[L][k]
if(E){R=E[D]
var B=u[L].ordinalMeta
B&&B.categories.length&&(R=B.categories[R])}}var N=null==T?null:T.id
null==N&&null!=R&&(g[R]=g[R]||0,N=R,g[R]>0&&(N+="__ec__"+g[R]),g[R]++),null!=N&&(c[C]=N)}}!a.persistent&&a.clean&&a.clean(),this._rawCount=this._count=e,this._extent={},function(t){var e=t._invertedIndicesMap
i.each(e,function(n,i){var r=t._dimensionInfos[i].ordinalMeta
if(r){n=e[i]=new p(r.categories.length)
for(var a=0;a<n.length;a++)n[a]=NaN
for(a=0;a<t._count;a++)n[t.get(i,a)]=a}})}(this)}},b.count=function(){return this._count},b.getIndices=function(){var t=this._indices
if(t){var e=t.constructor,n=this._count
if(e===Array){r=new e(n)
for(var i=0;i<n;i++)r[i]=t[i]}else r=new e(t.buffer,0,n)}else{var r=new(e=v(this))(this.count())
for(i=0;i<r.length;i++)r[i]=i}return r},b.get=function(t,e){if(!(e>=0&&e<this._count))return NaN
var n=this._storage
if(!n[t])return NaN
e=this.getRawIndex(e)
var i=Math.floor(e/this._chunkSize),r=e%this._chunkSize
return n[t][i][r]},b.getByRawIndex=function(t,e){if(!(e>=0&&e<this._rawCount))return NaN
var n=this._storage[t]
if(!n)return NaN
var i=Math.floor(e/this._chunkSize),r=e%this._chunkSize
return n[i][r]},b._getFast=function(t,e){var n=Math.floor(e/this._chunkSize),i=e%this._chunkSize
return this._storage[t][n][i]},b.getValues=function(t,e){var n=[]
i.isArray(t)||(e=t,t=this.dimensions)
for(var r=0,a=t.length;r<a;r++)n.push(this.get(t[r],e))
return n},b.hasValue=function(t){for(var e=this._dimensionsSummary.dataDimsOnCoord,n=this._dimensionInfos,i=0,r=e.length;i<r;i++)if("ordinal"!==n[e[i]].type&&isNaN(this.get(e[i],t)))return!1
return!0},b.getDataExtent=function(t){t=this.getDimension(t)
var e=[1/0,-1/0]
if(!this._storage[t])return e
var n,i=this.count()
if(!this._indices)return this._rawExtent[t].slice()
if(n=this._extent[t])return n.slice()
for(var r=(n=e)[0],a=n[1],o=0;o<i;o++){var s=this._getFast(t,this.getRawIndex(o))
s<r&&(r=s),s>a&&(a=s)}return n=[r,a],this._extent[t]=n,n},b.getApproximateExtent=function(t){return t=this.getDimension(t),this._approximateExtent[t]||this.getDataExtent(t)},b.setApproximateExtent=function(t,e){e=this.getDimension(e),this._approximateExtent[e]=t.slice()},b.getCalculationInfo=function(t){return this._calculationInfo[t]},b.setCalculationInfo=function(t,e){c(t)?i.extend(this._calculationInfo,t):this._calculationInfo[t]=e},b.getSum=function(t){var e=0
if(this._storage[t])for(var n=0,i=this.count();n<i;n++){var r=this.get(t,n)
isNaN(r)||(e+=r)}return e},b.getMedian=function(t){var e=[]
this.each(t,function(t,n){isNaN(t)||e.push(t)})
var n=[].concat(e).sort(function(t,e){return t-e}),i=this.count()
return 0===i?0:i%2==1?n[(i-1)/2]:(n[i/2]+n[i/2-1])/2},b.rawIndexOf=function(t,e){var n=(t&&this._invertedIndicesMap[t])[e]
return null==n||isNaN(n)?-1:n},b.indexOfName=function(t){for(var e=0,n=this.count();e<n;e++)if(this.getName(e)===t)return e
return-1},b.indexOfRawIndex=function(t){if(!this._indices)return t
if(t>=this._rawCount||t<0)return-1
var e=this._indices,n=e[t]
if(null!=n&&n<this._count&&n===t)return t
for(var i=0,r=this._count-1;i<=r;){var a=(i+r)/2|0
if(e[a]<t)i=a+1
else{if(!(e[a]>t))return a
r=a-1}}return-1},b.indicesOfNearest=function(t,e,n){var i=[]
if(!this._storage[t])return i
null==n&&(n=1/0)
for(var r=Number.MAX_VALUE,a=-1,o=0,s=this.count();o<s;o++){var l=e-this.get(t,o),u=Math.abs(l)
l<=n&&u<=r&&((u<r||l>=0&&a<0)&&(r=u,a=l,i.length=0),i.push(o))}return i},b.getRawIndex=M,b.getRawDataItem=function(t){if(this._rawData.persistent)return this._rawData.getItem(this.getRawIndex(t))
for(var e=[],n=0;n<this.dimensions.length;n++){var i=this.dimensions[n]
e.push(this.get(i,t))}return e},b.getName=function(t){var e=this.getRawIndex(t)
return this._nameList[e]||S(this,this._nameDimIdx,e)||""},b.getId=function(t){return C(this,this.getRawIndex(t))},b.each=function(t,e,n,r){"use strict"
if(this._count){"function"==typeof t&&(r=n,n=e,e=t,t=[]),n=n||r||this
for(var a=(t=i.map(k(t),this.getDimension,this)).length,o=0;o<this.count();o++)switch(a){case 0:e.call(n,o)
break
case 1:e.call(n,this.get(t[0],o),o)
break
case 2:e.call(n,this.get(t[0],o),this.get(t[1],o),o)
break
default:for(var s=0,l=[];s<a;s++)l[s]=this.get(t[s],o)
l[s]=o,e.apply(n,l)}}},b.filterSelf=function(t,e,n,r){"use strict"
if(this._count){"function"==typeof t&&(r=n,n=e,e=t,t=[]),n=n||r||this,t=i.map(k(t),this.getDimension,this)
for(var a=this.count(),o=new(v(this))(a),s=[],l=t.length,u=0,h=t[0],c=0;c<a;c++){var f,d=this.getRawIndex(c)
if(0===l)f=e.call(n,c)
else if(1===l){var p=this._getFast(h,d)
f=e.call(n,p,c)}else{for(var g=0;g<l;g++)s[g]=this._getFast(h,d)
s[g]=c,f=e.apply(n,s)}f&&(o[u++]=d)}return u<a&&(this._indices=o),this._count=u,this._extent={},this.getRawIndex=this._indices?T:M,this}},b.selectRange=function(t){"use strict"
if(this._count){var e=[]
for(var n in t)t.hasOwnProperty(n)&&e.push(n)
var i=e.length
if(i){var r=this.count(),a=new(v(this))(r),o=0,s=e[0],l=t[s][0],u=t[s][1],h=!1
if(!this._indices){var c=0
if(1===i){for(var f=this._storage[e[0]],d=0;d<this._chunkCount;d++)for(var p=f[d],g=Math.min(this._count-d*this._chunkSize,this._chunkSize),m=0;m<g;m++)((b=p[m])>=l&&b<=u||isNaN(b))&&(a[o++]=c),c++
h=!0}else if(2===i){f=this._storage[s]
var _=this._storage[e[1]],y=t[e[1]][0],x=t[e[1]][1]
for(d=0;d<this._chunkCount;d++){p=f[d]
var w=_[d]
for(g=Math.min(this._count-d*this._chunkSize,this._chunkSize),m=0;m<g;m++){var b=p[m],S=w[m];(b>=l&&b<=u||isNaN(b))&&(S>=y&&S<=x||isNaN(S))&&(a[o++]=c),c++}}h=!0}}if(!h)if(1===i)for(m=0;m<r;m++){var C=this.getRawIndex(m);((b=this._getFast(s,C))>=l&&b<=u||isNaN(b))&&(a[o++]=C)}else for(m=0;m<r;m++){var k=!0
for(C=this.getRawIndex(m),d=0;d<i;d++){var D=e[d];((b=this._getFast(n,C))<t[D][0]||b>t[D][1])&&(k=!1)}k&&(a[o++]=this.getRawIndex(m))}return o<r&&(this._indices=a),this._count=o,this._extent={},this.getRawIndex=this._indices?T:M,this}}},b.mapArray=function(t,e,n,i){"use strict"
"function"==typeof t&&(i=n,n=e,e=t,t=[]),n=n||i||this
var r=[]
return this.each(t,function(){r.push(e&&e.apply(this,arguments))},n),r},b.map=function(t,e,n,r){"use strict"
n=n||r||this
var a=D(this,t=i.map(k(t),this.getDimension,this))
a._indices=this._indices,a.getRawIndex=a._indices?T:M
for(var o=a._storage,s=[],l=this._chunkSize,u=t.length,h=this.count(),c=[],f=a._rawExtent,d=0;d<h;d++){for(var p=0;p<u;p++)c[p]=this.get(t[p],d)
c[u]=d
var g=e&&e.apply(n,c)
if(null!=g){"object"!=typeof g&&(s[0]=g,g=s)
for(var v=this.getRawIndex(d),m=Math.floor(v/l),_=v%l,y=0;y<g.length;y++){var x=t[y],w=g[y],b=f[x],S=o[x]
S&&(S[m][_]=w),w<b[0]&&(b[0]=w),w>b[1]&&(b[1]=w)}}}return a},b.downSample=function(t,e,n,i){for(var r=D(this,[t]),a=r._storage,o=[],s=Math.floor(1/e),l=a[t],u=this.count(),h=this._chunkSize,c=r._rawExtent[t],f=new(v(this))(u),d=0,p=0;p<u;p+=s){s>u-p&&(s=u-p,o.length=s)
for(var g=0;g<s;g++){var m=this.getRawIndex(p+g),_=Math.floor(m/h),y=m%h
o[g]=l[_][y]}var x=n(o),w=this.getRawIndex(Math.min(p+i(o,x)||0,u-1)),b=w%h
l[Math.floor(w/h)][b]=x,x<c[0]&&(c[0]=x),x>c[1]&&(c[1]=x),f[d++]=w}return r._count=d,r._indices=f,r.getRawIndex=T,r},b.getItemModel=function(t){var e=this.hostModel
return new r(this.getRawDataItem(t),e,e&&e.ecModel)},b.diff=function(t){var e=this
return new a(t?t.getIndices():[],this.getIndices(),function(e){return C(t,e)},function(t){return C(e,t)})},b.getVisual=function(t){var e=this._visual
return e&&e[t]},b.setVisual=function(t,e){if(c(t))for(var n in t)t.hasOwnProperty(n)&&this.setVisual(n,t[n])
else this._visual=this._visual||{},this._visual[t]=e},b.setLayout=function(t,e){if(c(t))for(var n in t)t.hasOwnProperty(n)&&this.setLayout(n,t[n])
else this._layout[t]=e},b.getLayout=function(t){return this._layout[t]},b.getItemLayout=function(t){return this._itemLayouts[t]},b.setItemLayout=function(t,e,n){this._itemLayouts[t]=n?i.extend(this._itemLayouts[t]||{},e):e},b.clearItemLayouts=function(){this._itemLayouts.length=0},b.getItemVisual=function(t,e,n){var i=this._itemVisuals[t],r=i&&i[e]
return null!=r||n?r:this.getVisual(e)},b.setItemVisual=function(t,e,n){var i=this._itemVisuals[t]||{},r=this.hasItemVisual
if(this._itemVisuals[t]=i,c(e))for(var a in e)e.hasOwnProperty(a)&&(i[a]=e[a],r[a]=!0)
else i[e]=n,r[e]=!0},b.clearAllVisual=function(){this._visual={},this._itemVisuals=[],this.hasItemVisual={}}
var A=function(t){t.seriesIndex=this.seriesIndex,t.dataIndex=this.dataIndex,t.dataType=this.dataType}
b.setItemGraphicEl=function(t,e){var n=this.hostModel
e&&(e.dataIndex=t,e.dataType=this.dataType,e.seriesIndex=n&&n.seriesIndex,"group"===e.type&&e.traverse(A,e)),this._graphicEls[t]=e},b.getItemGraphicEl=function(t){return this._graphicEls[t]},b.eachItemGraphicEl=function(t,e){i.each(this._graphicEls,function(n,i){n&&t&&t.call(e,n,i)})},b.cloneShallow=function(t){if(!t){var e=i.map(this.dimensions,this.getDimensionInfo,this)
t=new w(e,this.hostModel)}if(t._storage=this._storage,x(t,this),this._indices){var n=this._indices.constructor
t._indices=new n(this._indices)}else t._indices=null
return t.getRawIndex=t._indices?T:M,t},b.wrapMethod=function(t,e){var n=this[t]
"function"==typeof n&&(this.__wrappedMethods=this.__wrappedMethods||[],this.__wrappedMethods.push(t),this[t]=function(){var t=n.apply(this,arguments)
return e.apply(this,[t].concat(i.slice(arguments)))})},b.TRANSFERABLE_METHODS=["cloneShallow","downSample","map"],b.CHANGABLE_METHODS=["filterSelf","selectRange"]
var O=w
t.exports=O},function(t,e,n){var i=n(337)
t.exports=function(t,e){return i((e=e||{}).coordDimensions||[],t,{dimsDef:e.dimensionsDefine||t.dimensionsDefine,encodeDef:e.encodeDefine||t.encodeDefine,dimCount:e.dimensionsCount,generateCoord:e.generateCoord,generateCoordCount:e.generateCoordCount})}},function(t,e,n){var i=n(264),r=i.createHashMap,a=i.each,o=i.isString,s=i.defaults,l=i.extend,u=i.isObject,h=i.clone,c=n(265).normalizeToArray,f=n(294).guessOrdinal,d=n(286),p=n(305).OTHER_DIMENSIONS
function g(t,e,n){if(n||null!=e.get(t)){for(var i=0;null!=e.get(t+i);)i++
t+=i}return e.set(t,!0),t}t.exports=function(t,e,n){d.isInstance(e)||(e=d.seriesDataToSource(e)),n=n||{},t=(t||[]).slice()
for(var i=(n.dimsDef||[]).slice(),v=r(n.encodeDef),m=r(),_=r(),y=[],x=function(t,e,n,i){var r=Math.max(t.dimensionsDetectCount||1,e.length,n.length,i||0)
return a(e,function(t){var e=t.dimsDef
e&&(r=Math.max(r,e.length))}),r}(e,t,i,n.dimCount),w=0;w<x;w++){var b=i[w]=l({},u(i[w])?i[w]:{name:i[w]}),S=b.name,M=y[w]={otherDims:{}}
null!=S&&null==m.get(S)&&(M.name=M.displayName=S,m.set(S,w)),null!=b.type&&(M.type=b.type),null!=b.displayName&&(M.displayName=b.displayName)}v.each(function(t,e){t=c(t).slice()
var n=v.set(e,[])
a(t,function(t,i){o(t)&&(t=m.get(t)),null!=t&&t<x&&(n[i]=t,C(y[t],e,i))})})
var T=0
function C(t,e,n){null!=p.get(e)?t.otherDims[e]=n:(t.coordDim=e,t.coordDimIndex=n,_.set(e,!0))}a(t,function(t,e){var n,i,r
if(o(t))n=t,t={}
else{n=t.name
var l=t.ordinalMeta
t.ordinalMeta=null,(t=h(t)).ordinalMeta=l,i=t.dimsDef,r=t.otherDims,t.name=t.coordDim=t.coordDimIndex=t.dimsDef=t.otherDims=null}var f=c(v.get(n))
if(!f.length)for(var d=0;d<(i&&i.length||1);d++){for(;T<y.length&&null!=y[T].coordDim;)T++
T<y.length&&f.push(T++)}a(f,function(e,a){var o=y[e]
if(C(s(o,t),n,a),null==o.name&&i){var l=i[a]
!u(l)&&(l={name:l}),o.name=o.displayName=l.name,o.defaultTooltip=l.defaultTooltip}r&&s(o.otherDims,r)})})
var k=n.generateCoord,D=n.generateCoordCount,I=null!=D
D=k?D||1:0
for(var A=k||"value",O=0;O<x;O++)null==(M=y[O]=y[O]||{}).coordDim&&(M.coordDim=g(A,_,I),M.coordDimIndex=0,(!k||D<=0)&&(M.isExtraCoord=!0),D--),null==M.name&&(M.name=g(M.coordDim,m)),null==M.type&&f(e,O,M.name)&&(M.type="ordinal")
return y}},function(t,e,n){var i=n(264),r=i.createHashMap,a=i.isObject,o=i.map
function s(t){this.categories=t.categories||[],this._needCollect=t.needCollect,this._deduplication=t.deduplication,this._map}s.createByAxisModel=function(t){var e=t.option,n=e.data,i=n&&o(n,h)
return new s({categories:i,needCollect:!i,deduplication:!1!==e.dedplication})}
var l=s.prototype
function u(t){return t._map||(t._map=r(t.categories))}function h(t){return a(t)&&null!=t.value?t.value:t+""}l.getOrdinal=function(t){return u(this).get(t)},l.parseAndCollect=function(t){var e,n=this._needCollect
if("string"!=typeof t&&!n)return t
if(n&&!this._deduplication)return e=this.categories.length,this.categories[e]=t,e
var i=u(this)
return null==(e=i.get(t))&&(n?(e=this.categories.length,this.categories[e]=t,i.set(t,e)):e=NaN),e}
var c=s
t.exports=c},function(t,e,n){var i=n(269),r=i.round
function a(t){return i.getPrecisionSafe(t)+2}function o(t,e,n){t[e]=Math.max(Math.min(t[e],n[1]),n[0])}function s(t,e){!isFinite(t[0])&&(t[0]=e[0]),!isFinite(t[1])&&(t[1]=e[1]),o(t,0,e),o(t,1,e),t[0]>t[1]&&(t[0]=t[1])}e.intervalScaleNiceTicks=function(t,e,n,o){var l={},u=t[1]-t[0],h=l.interval=i.nice(u/e,!0)
null!=n&&h<n&&(h=l.interval=n),null!=o&&h>o&&(h=l.interval=o)
var c=l.intervalPrecision=a(h)
return s(l.niceTickExtent=[r(Math.ceil(t[0]/h)*h,c),r(Math.floor(t[1]/h)*h,c)],t),l},e.getIntervalPrecision=a,e.fixExtent=s,e.intervalScaleGetTicks=function(t,e,n,i){var a=[]
if(!t)return a
e[0]<n[0]&&a.push(e[0])
for(var o=n[0];o<=n[1]&&(a.push(o),(o=r(o+t,i))!==a[a.length-1]);)if(a.length>1e4)return[]
return e[1]>(a.length?a[a.length-1]:n[1])&&a.push(e[1]),a}},function(t,e,n){var i=n(264),r=(n(282),{getMin:function(t){var e=this.option,n=t||null==e.rangeStart?e.min:e.rangeStart
return this.axis&&null!=n&&"dataMin"!==n&&"function"!=typeof n&&!i.eqNaN(n)&&(n=this.axis.scale.parse(n)),n},getMax:function(t){var e=this.option,n=t||null==e.rangeEnd?e.max:e.rangeEnd
return this.axis&&null!=n&&"dataMax"!==n&&"function"!=typeof n&&!i.eqNaN(n)&&(n=this.axis.scale.parse(n)),n},getNeedCrossZero:function(){var t=this.option
return null==t.rangeStart&&null==t.rangeEnd&&!t.scale},getCoordSysModel:i.noop,setRange:function(t,e){this.option.rangeStart=t,this.option.rangeEnd=e},resetRange:function(){this.option.rangeStart=this.option.rangeEnd=null}})
t.exports=r},function(t,e,n){var i=n(264),r=i.each,a=i.map,o=n(269),s=o.linearMap,l=o.getPixelPrecision,u=n(415),h=u.createAxisTicks,c=u.createAxisLabels,f=u.calculateCategoryInterval,d=[0,1],p=function(t,e,n){this.dim=t,this.scale=e,this._extent=n||[0,0],this.inverse=!1,this.onBand=!1}
function g(t,e){var n=(t[1]-t[0])/e/2
t[0]+=n,t[1]-=n}p.prototype={constructor:p,contain:function(t){var e=this._extent,n=Math.min(e[0],e[1]),i=Math.max(e[0],e[1])
return t>=n&&t<=i},containData:function(t){return this.contain(this.dataToCoord(t))},getExtent:function(){return this._extent.slice()},getPixelPrecision:function(t){return l(t||this.scale.getExtent(),this._extent)},setExtent:function(t,e){var n=this._extent
n[0]=t,n[1]=e},dataToCoord:function(t,e){var n=this._extent,i=this.scale
return t=i.normalize(t),this.onBand&&"ordinal"===i.type&&g(n=n.slice(),i.count()),s(t,d,n,e)},coordToData:function(t,e){var n=this._extent,i=this.scale
this.onBand&&"ordinal"===i.type&&g(n=n.slice(),i.count())
var r=s(t,n,d,e)
return this.scale.scale(r)},pointToData:function(t,e){},getTicksCoords:function(t){var e=(t=t||{}).tickModel||this.getTickModel(),n=h(this,e),i=n.ticks,o=a(i,function(t){return{coord:this.dataToCoord(t),tickValue:t}},this),s=e.get("alignWithLabel")
return function(t,e,n,i,a){var o=e.length
if(t.onBand&&!i&&o){var s,l=t.getExtent()
if(1===o)e[0].coord=l[0],s=e[1]={coord:l[0]}
else{var u=e[1].coord-e[0].coord
r(e,function(t){t.coord-=u/2
var e=e||0
e%2>0&&(t.coord-=u/(2*(e+1)))}),s={coord:e[o-1].coord+u},e.push(s)}var h=l[0]>l[1]
c(e[0].coord,l[0])&&(a?e[0].coord=l[0]:e.shift()),a&&c(l[0],e[0].coord)&&e.unshift({coord:l[0]}),c(l[1],s.coord)&&(a?s.coord=l[1]:e.pop()),a&&c(s.coord,l[1])&&e.push({coord:l[1]})}function c(t,e){return h?t>e:t<e}}(this,o,n.tickCategoryInterval,s,t.clamp),o},getViewLabels:function(){return c(this).labels},getLabelModel:function(){return this.model.getModel("axisLabel")},getTickModel:function(){return this.model.getModel("axisTick")},getBandWidth:function(){var t=this._extent,e=this.scale.getExtent(),n=e[1]-e[0]+(this.onBand?1:0)
0===n&&(n=1)
var i=Math.abs(t[1]-t[0])
return Math.abs(i)/n},isHorizontal:null,getRotate:null,calculateCategoryInterval:function(){return f(this)}}
var v=p
t.exports=v},,,,,,,,,,function(t,e,n){var i=n(264),r=n(267),a=n(352),o=n(283),s="silent"
function l(){}l.prototype.dispose=function(){}
var u=["click","dblclick","mousewheel","mouseout","mouseup","mousedown","mousemove","contextmenu"],h=function(t,e,n,i){o.call(this),this.storage=t,this.painter=e,this.painterRoot=i,n=n||new l,this.proxy=null,this._hovered={},this._lastTouchMoment,this._lastX,this._lastY,a.call(this),this.setHandlerProxy(n)}
function c(t,e,n){if(t[t.rectHover?"rectContain":"contain"](e,n)){for(var i,r=t;r;){if(r.clipPath&&!r.clipPath.contain(e,n))return!1
r.silent&&(i=!0),r=r.parent}return!i||s}return!1}h.prototype={constructor:h,setHandlerProxy:function(t){this.proxy&&this.proxy.dispose(),t&&(i.each(u,function(e){t.on&&t.on(e,this[e],this)},this),t.handler=this),this.proxy=t},mousemove:function(t){var e=t.zrX,n=t.zrY,i=this._hovered,r=i.target
r&&!r.__zr&&(r=(i=this.findHover(i.x,i.y)).target)
var a=this._hovered=this.findHover(e,n),o=a.target,s=this.proxy
s.setCursor&&s.setCursor(o?o.cursor:"default"),r&&o!==r&&this.dispatchToElement(i,"mouseout",t),this.dispatchToElement(a,"mousemove",t),o&&o!==r&&this.dispatchToElement(a,"mouseover",t)},mouseout:function(t){this.dispatchToElement(this._hovered,"mouseout",t)
var e,n=t.toElement||t.relatedTarget
do{n=n&&n.parentNode}while(n&&9!=n.nodeType&&!(e=n===this.painterRoot))
!e&&this.trigger("globalout",{event:t})},resize:function(t){this._hovered={}},dispatch:function(t,e){var n=this[t]
n&&n.call(this,e)},dispose:function(){this.proxy.dispose(),this.storage=this.proxy=this.painter=null},setCursorStyle:function(t){var e=this.proxy
e.setCursor&&e.setCursor(t)},dispatchToElement:function(t,e,n){var i=(t=t||{}).target
if(!i||!i.silent){for(var r="on"+e,a=function(t,e,n){return{type:t,event:n,target:e.target,topTarget:e.topTarget,cancelBubble:!1,offsetX:n.zrX,offsetY:n.zrY,gestureEvent:n.gestureEvent,pinchX:n.pinchX,pinchY:n.pinchY,pinchScale:n.pinchScale,wheelDelta:n.zrDelta,zrByTouch:n.zrByTouch,which:n.which}}(e,t,n);i&&(i[r]&&(a.cancelBubble=i[r].call(i,a)),i.trigger(e,a),i=i.parent,!a.cancelBubble););a.cancelBubble||(this.trigger(e,a),this.painter&&this.painter.eachOtherLayer(function(t){"function"==typeof t[r]&&t[r].call(t,a),t.trigger&&t.trigger(e,a)}))}},findHover:function(t,e,n){for(var i=this.storage.getDisplayList(),r={x:t,y:e},a=i.length-1;a>=0;a--){var o
if(i[a]!==n&&!i[a].ignore&&(o=c(i[a],t,e))&&(!r.topTarget&&(r.topTarget=i[a]),o!==s)){r.target=i[a]
break}}return r}},i.each(["click","mousedown","mouseup","mousewheel","dblclick","contextmenu"],function(t){h.prototype[t]=function(e){var n=this.findHover(e.zrX,e.zrY),i=n.target
if("mousedown"===t)this._downEl=i,this._downPoint=[e.zrX,e.zrY],this._upEl=i
else if("mouseup"===t)this._upEl=i
else if("click"===t){if(this._downEl!==this._upEl||!this._downPoint||r.dist(this._downPoint,[e.zrX,e.zrY])>4)return
this._downPoint=null}this.dispatchToElement(n,t,e)}}),i.mixin(h,o),i.mixin(h,a)
var f=h
t.exports=f},function(t,e){function n(){this.on("mousedown",this._dragStart,this),this.on("mousemove",this._drag,this),this.on("mouseup",this._dragEnd,this),this.on("globalout",this._dragEnd,this)}function i(t,e){return{target:t,topTarget:e&&e.topTarget}}n.prototype={constructor:n,_dragStart:function(t){var e=t.target
e&&e.draggable&&(this._draggingTarget=e,e.dragging=!0,this._x=t.offsetX,this._y=t.offsetY,this.dispatchToElement(i(e,t),"dragstart",t.event))},_drag:function(t){var e=this._draggingTarget
if(e){var n=t.offsetX,r=t.offsetY,a=n-this._x,o=r-this._y
this._x=n,this._y=r,e.drift(a,o,t),this.dispatchToElement(i(e,t),"drag",t.event)
var s=this.findHover(n,r,e).target,l=this._dropTarget
this._dropTarget=s,e!==s&&(l&&s!==l&&this.dispatchToElement(i(l,t),"dragleave",t.event),s&&s!==l&&this.dispatchToElement(i(s,t),"dragenter",t.event))}},_dragEnd:function(t){var e=this._draggingTarget
e&&(e.dragging=!1),this.dispatchToElement(i(e,t),"dragend",t.event),this._dropTarget&&this.dispatchToElement(i(this._dropTarget,t),"drop",t.event),this._draggingTarget=null,this._dropTarget=null}}
var r=n
t.exports=r},function(t,e,n){var i=n(264),r=n(270),a=n(289),o=n(297)
function s(t,e){return t.zlevel===e.zlevel?t.z===e.z?t.z2-e.z2:t.z-e.z:t.zlevel-e.zlevel}var l=function(){this._roots=[],this._displayList=[],this._displayListLen=0}
l.prototype={constructor:l,traverse:function(t,e){for(var n=0;n<this._roots.length;n++)this._roots[n].traverse(t,e)},getDisplayList:function(t,e){return e=e||!1,t&&this.updateDisplayList(e),this._displayList},updateDisplayList:function(t){this._displayListLen=0
for(var e=this._roots,n=this._displayList,i=0,a=e.length;i<a;i++)this._updateAndAddDisplayable(e[i],null,t)
n.length=this._displayListLen,r.canvasSupported&&o(n,s)},_updateAndAddDisplayable:function(t,e,n){if(!t.ignore||n){t.beforeUpdate(),t.__dirty&&t.update(),t.afterUpdate()
var i=t.clipPath
if(i){e=e?e.slice():[]
for(var r=i,a=t;r;)r.parent=a,r.updateTransform(),e.push(r),a=r,r=r.clipPath}if(t.isGroup){for(var o=t._children,s=0;s<o.length;s++){var l=o[s]
t.__dirty&&(l.__dirty=!0),this._updateAndAddDisplayable(l,e,n)}t.__dirty=!1}else t.__clipPaths=e,this._displayList[this._displayListLen++]=t}},addRoot:function(t){t.__storage!==this&&(t instanceof a&&t.addChildrenToStorage(this),this.addToStorage(t),this._roots.push(t))},delRoot:function(t){if(null==t){for(var e=0;e<this._roots.length;e++){var n=this._roots[e]
n instanceof a&&n.delChildrenFromStorage(this)}return this._roots=[],this._displayList=[],void(this._displayListLen=0)}if(t instanceof Array){e=0
for(var r=t.length;e<r;e++)this.delRoot(t[e])}else{var o=i.indexOf(this._roots,t)
o>=0&&(this.delFromStorage(t),this._roots.splice(o,1),t instanceof a&&t.delChildrenFromStorage(this))}},addToStorage:function(t){return t&&(t.__storage=this,t.dirty(!1)),this},delFromStorage:function(t){return t&&(t.__storage=null),this},dispose:function(){this._renderList=this._roots=null},displayableSortFunc:s}
var u=l
t.exports=u},function(t,e,n){var i=n(312),r=n(314),a=n(264),o=a.isString,s=a.isFunction,l=a.isObject,u=a.isArrayLike,h=a.indexOf,c=function(){this.animators=[]}
c.prototype={constructor:c,animate:function(t,e){var n,a=!1,o=this,s=this.__zr
if(t){var l=t.split("."),u=o
a="shape"===l[0]
for(var c=0,f=l.length;c<f;c++)u&&(u=u[l[c]])
u&&(n=u)}else n=o
if(n){var d=o.animators,p=new i(n,e)
return p.during(function(t){o.dirty(a)}).done(function(){d.splice(h(d,p),1)}),d.push(p),s&&s.animation.addAnimator(p),p}r('Property "'+t+'" is not existed in element '+o.id)},stopAnimation:function(t){for(var e=this.animators,n=e.length,i=0;i<n;i++)e[i].stop(t)
return e.length=0,this},animateTo:function(t,e,n,i,r,a){o(n)?(r=i,i=n,n=0):s(i)?(r=i,i="linear",n=0):s(n)?(r=n,n=0):s(e)?(r=e,e=500):e||(e=500),this.stopAnimation(),this._animateToShallow("",this,t,e,n)
var l=this.animators.slice(),u=l.length
function h(){--u||r&&r()}u||r&&r()
for(var c=0;c<l.length;c++)l[c].done(h).start(i,a)},_animateToShallow:function(t,e,n,i,r){var a={},o=0
for(var s in n)if(n.hasOwnProperty(s))if(null!=e[s])l(n[s])&&!u(n[s])?this._animateToShallow(t?t+"."+s:s,e[s],n[s],i,r):(a[s]=n[s],o++)
else if(null!=n[s])if(t){var h={}
h[t]={},h[t][s]=n[s],this.attr(h)}else this.attr(s,n[s])
return o>0&&this.animate(t,!1).when(null==i?500:i,a).delay(r||0),this}}
var f=c
t.exports=f},function(t,e,n){var i=n(356)
function r(t){this._target=t.target,this._life=t.life||1e3,this._delay=t.delay||0,this._initialized=!1,this.loop=null!=t.loop&&t.loop,this.gap=t.gap||0,this.easing=t.easing||"Linear",this.onframe=t.onframe,this.ondestroy=t.ondestroy,this.onrestart=t.onrestart,this._pausedTime=0,this._paused=!1}r.prototype={constructor:r,step:function(t,e){if(this._initialized||(this._startTime=t+this._delay,this._initialized=!0),this._paused)this._pausedTime+=e
else{var n=(t-this._startTime-this._pausedTime)/this._life
if(!(n<0)){n=Math.min(n,1)
var r=this.easing,a="string"==typeof r?i[r]:r,o="function"==typeof a?a(n):n
return this.fire("frame",o),1==n?this.loop?(this.restart(t),"restart"):(this._needsRemove=!0,"destroy"):null}}},restart:function(t){var e=(t-this._startTime-this._pausedTime)%this._life
this._startTime=t-e+this.gap,this._pausedTime=0,this._needsRemove=!1},fire:function(t,e){this[t="on"+t]&&this[t](this._target,e)},pause:function(){this._paused=!0},resume:function(){this._paused=!1}}
var a=r
t.exports=a},function(t,e){var n={linear:function(t){return t},quadraticIn:function(t){return t*t},quadraticOut:function(t){return t*(2-t)},quadraticInOut:function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)},cubicIn:function(t){return t*t*t},cubicOut:function(t){return--t*t*t+1},cubicInOut:function(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)},quarticIn:function(t){return t*t*t*t},quarticOut:function(t){return 1- --t*t*t*t},quarticInOut:function(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)},quinticIn:function(t){return t*t*t*t*t},quinticOut:function(t){return--t*t*t*t*t+1},quinticInOut:function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},sinusoidalIn:function(t){return 1-Math.cos(t*Math.PI/2)},sinusoidalOut:function(t){return Math.sin(t*Math.PI/2)},sinusoidalInOut:function(t){return.5*(1-Math.cos(Math.PI*t))},exponentialIn:function(t){return 0===t?0:Math.pow(1024,t-1)},exponentialOut:function(t){return 1===t?1:1-Math.pow(2,-10*t)},exponentialInOut:function(t){return 0===t?0:1===t?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(2-Math.pow(2,-10*(t-1)))},circularIn:function(t){return 1-Math.sqrt(1-t*t)},circularOut:function(t){return Math.sqrt(1- --t*t)},circularInOut:function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},elasticIn:function(t){var e,n=.1
return 0===t?0:1===t?1:(!n||n<1?(n=1,e=.1):e=.4*Math.asin(1/n)/(2*Math.PI),-n*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/.4))},elasticOut:function(t){var e,n=.1
return 0===t?0:1===t?1:(!n||n<1?(n=1,e=.1):e=.4*Math.asin(1/n)/(2*Math.PI),n*Math.pow(2,-10*t)*Math.sin((t-e)*(2*Math.PI)/.4)+1)},elasticInOut:function(t){var e,n=.1
return 0===t?0:1===t?1:(!n||n<1?(n=1,e=.1):e=.4*Math.asin(1/n)/(2*Math.PI),(t*=2)<1?n*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/.4)*-.5:n*Math.pow(2,-10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/.4)*.5+1)},backIn:function(t){var e=1.70158
return t*t*((e+1)*t-e)},backOut:function(t){var e=1.70158
return--t*t*((e+1)*t+e)+1},backInOut:function(t){var e=2.5949095
return(t*=2)<1?t*t*((e+1)*t-e)*.5:.5*((t-=2)*t*((e+1)*t+e)+2)},bounceIn:function(t){return 1-n.bounceOut(1-t)},bounceOut:function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},bounceInOut:function(t){return t<.5?.5*n.bounceIn(2*t):.5*n.bounceOut(2*t-1)+.5}},i=n
t.exports=i},function(t,e,n){var i=n(290).devicePixelRatio,r=n(264),a=n(314),o=n(272),s=n(297),l=n(358),u=n(318),h=n(319),c=n(270)
function f(t){return parseInt(t,10)}var d=new o(0,0,0,0),p=new o(0,0,0,0),g=function(t,e,n){this.type="canvas"
var a=!t.nodeName||"CANVAS"===t.nodeName.toUpperCase()
this._opts=n=r.extend({},n||{}),this.dpr=n.devicePixelRatio||i,this._singleCanvas=a,this.root=t
var o=t.style
o&&(o["-webkit-tap-highlight-color"]="transparent",o["-webkit-user-select"]=o["user-select"]=o["-webkit-touch-callout"]="none",t.innerHTML=""),this.storage=e
var s=this._zlevelList=[],u=this._layers={}
if(this._layerConfig={},this._needsManuallyCompositing=!1,a){var h=t.width,c=t.height
null!=n.width&&(h=n.width),null!=n.height&&(c=n.height),this.dpr=n.devicePixelRatio||1,t.width=h*this.dpr,t.height=c*this.dpr,this._width=h,this._height=c
var f=new l(t,this,this.dpr)
f.__builtin__=!0,f.initContext(),u[314159]=f,f.zlevel=314159,s.push(314159),this._domRoot=t}else{this._width=this._getSize(0),this._height=this._getSize(1)
var d=this._domRoot=function(t,e){var n=document.createElement("div")
return n.style.cssText=["position:relative","overflow:hidden","width:"+t+"px","height:"+e+"px","padding:0","margin:0","border-width:0"].join(";")+";",n}(this._width,this._height)
t.appendChild(d)}this._hoverlayer=null,this._hoverElements=[]}
g.prototype={constructor:g,getType:function(){return"canvas"},isSingleCanvas:function(){return this._singleCanvas},getViewportRoot:function(){return this._domRoot},getViewportRootOffset:function(){var t=this.getViewportRoot()
if(t)return{offsetLeft:t.offsetLeft||0,offsetTop:t.offsetTop||0}},refresh:function(t){var e=this.storage.getDisplayList(!0),n=this._zlevelList
this._redrawId=Math.random(),this._paintList(e,t,this._redrawId)
for(var i=0;i<n.length;i++){var r=n[i],a=this._layers[r]
if(!a.__builtin__&&a.refresh){var o=0===i?this._backgroundColor:null
a.refresh(o)}}return this.refreshHover(),this},addHover:function(t,e){if(!t.__hoverMir){var n=new t.constructor({style:t.style,shape:t.shape})
n.__from=t,t.__hoverMir=n,n.setStyle(e),this._hoverElements.push(n)}},removeHover:function(t){var e=t.__hoverMir,n=this._hoverElements,i=r.indexOf(n,e)
i>=0&&n.splice(i,1),t.__hoverMir=null},clearHover:function(t){for(var e=this._hoverElements,n=0;n<e.length;n++){var i=e[n].__from
i&&(i.__hoverMir=null)}e.length=0},refreshHover:function(){var t=this._hoverElements,e=t.length,n=this._hoverlayer
if(n&&n.clear(),e){s(t,this.storage.displayableSortFunc),n||(n=this._hoverlayer=this.getLayer(1e5))
var i={}
n.ctx.save()
for(var r=0;r<e;){var a=t[r],o=a.__from
o&&o.__zr?(r++,o.invisible||(a.transform=o.transform,a.invTransform=o.invTransform,a.__clipPaths=o.__clipPaths,this._doPaintEl(a,n,!0,i))):(t.splice(r,1),o.__hoverMir=null,e--)}n.ctx.restore()}},getHoverLayer:function(){return this.getLayer(1e5)},_paintList:function(t,e,n){if(this._redrawId===n){e=e||!1,this._updateLayerStatus(t)
var i=this._doPaintList(t,e)
if(this._needsManuallyCompositing&&this._compositeManually(),!i){var r=this
u(function(){r._paintList(t,e,n)})}}},_compositeManually:function(){var t=this.getLayer(314159).ctx,e=this._domRoot.width,n=this._domRoot.height
t.clearRect(0,0,e,n),this.eachBuiltinLayer(function(i){i.virtual&&t.drawImage(i.dom,0,0,e,n)})},_doPaintList:function(t,e){for(var n=[],i=0;i<this._zlevelList.length;i++){var a=this._zlevelList[i];(l=this._layers[a]).__builtin__&&l!==this._hoverlayer&&(l.__dirty||e)&&n.push(l)}for(var o=!0,s=0;s<n.length;s++){var l,u=(l=n[s]).ctx,h={}
u.save()
var f=e?l.__startIndex:l.__drawIndex,d=!e&&l.incremental&&Date.now,p=d&&Date.now(),g=l.zlevel===this._zlevelList[0]?this._backgroundColor:null
if(l.__startIndex===l.__endIndex)l.clear(!1,g)
else if(f===l.__startIndex){var v=t[f]
v.incremental&&v.notClear&&!e||l.clear(!1,g)}-1===f&&(console.error("For some unknown reason. drawIndex is -1"),f=l.__startIndex)
for(var m=f;m<l.__endIndex;m++){var _=t[m]
if(this._doPaintEl(_,l,e,h),_.__dirty=!1,d&&Date.now()-p>15)break}l.__drawIndex=m,l.__drawIndex<l.__endIndex&&(o=!1),h.prevElClipPaths&&u.restore(),u.restore()}return c.wxa&&r.each(this._layers,function(t){t&&t.ctx&&t.ctx.draw&&t.ctx.draw()}),o},_doPaintEl:function(t,e,n,i){var r=e.ctx,a=t.transform
if((e.__dirty||n)&&!t.invisible&&0!==t.style.opacity&&(!a||a[0]||a[3])&&(!t.culling||!function(t,e,n){return d.copy(t.getBoundingRect()),t.transform&&d.applyTransform(t.transform),p.width=e,p.height=n,!d.intersect(p)}(t,this._width,this._height))){var o=t.__clipPaths
i.prevElClipPaths&&!function(t,e){if(t==e)return!1
if(!t||!e||t.length!==e.length)return!0
for(var n=0;n<t.length;n++)if(t[n]!==e[n])return!0}(o,i.prevElClipPaths)||(i.prevElClipPaths&&(e.ctx.restore(),i.prevElClipPaths=null,i.prevEl=null),o&&(r.save(),function(t,e){for(var n=0;n<t.length;n++){var i=t[n]
i.setTransform(e),e.beginPath(),i.buildPath(e,i.shape),e.clip(),i.restoreTransform(e)}}(o,r),i.prevElClipPaths=o)),t.beforeBrush&&t.beforeBrush(r),t.brush(r,i.prevEl||null),i.prevEl=t,t.afterBrush&&t.afterBrush(r)}},getLayer:function(t,e){this._singleCanvas&&!this._needsManuallyCompositing&&(t=314159)
var n=this._layers[t]
return n||((n=new l("zr_"+t,this,this.dpr)).zlevel=t,n.__builtin__=!0,this._layerConfig[t]&&r.merge(n,this._layerConfig[t],!0),e&&(n.virtual=e),this.insertLayer(t,n),n.initContext()),n},insertLayer:function(t,e){var n=this._layers,i=this._zlevelList,r=i.length,o=null,s=-1,l=this._domRoot
if(n[t])a("ZLevel "+t+" has been used already")
else if(function(t){return!!t&&(!!t.__builtin__||"function"==typeof t.resize&&"function"==typeof t.refresh)}(e)){if(r>0&&t>i[0]){for(s=0;s<r-1&&!(i[s]<t&&i[s+1]>t);s++);o=n[i[s]]}if(i.splice(s+1,0,t),n[t]=e,!e.virtual)if(o){var u=o.dom
u.nextSibling?l.insertBefore(e.dom,u.nextSibling):l.appendChild(e.dom)}else l.firstChild?l.insertBefore(e.dom,l.firstChild):l.appendChild(e.dom)}else a("Layer of zlevel "+t+" is not valid")},eachLayer:function(t,e){var n,i,r=this._zlevelList
for(i=0;i<r.length;i++)n=r[i],t.call(e,this._layers[n],n)},eachBuiltinLayer:function(t,e){var n,i,r,a=this._zlevelList
for(r=0;r<a.length;r++)i=a[r],(n=this._layers[i]).__builtin__&&t.call(e,n,i)},eachOtherLayer:function(t,e){var n,i,r,a=this._zlevelList
for(r=0;r<a.length;r++)i=a[r],(n=this._layers[i]).__builtin__||t.call(e,n,i)},getLayers:function(){return this._layers},_updateLayerStatus:function(t){function e(t){i&&(i.__endIndex!==t&&(i.__dirty=!0),i.__endIndex=t)}if(this.eachBuiltinLayer(function(t,e){t.__dirty=t.__used=!1}),this._singleCanvas)for(var n=1;n<t.length;n++)if((o=t[n]).zlevel!==t[n-1].zlevel||o.incremental){this._needsManuallyCompositing=!0
break}var i=null,r=0
for(n=0;n<t.length;n++){var o,s,l=(o=t[n]).zlevel
o.incremental?((s=this.getLayer(l+.001,this._needsManuallyCompositing)).incremental=!0,r=1):s=this.getLayer(l+(r>0?.01:0),this._needsManuallyCompositing),s.__builtin__||a("ZLevel "+l+" has been used by unkown layer "+s.id),s!==i&&(s.__used=!0,s.__startIndex!==n&&(s.__dirty=!0),s.__startIndex=n,s.incremental?s.__drawIndex=-1:s.__drawIndex=n,e(n),i=s),o.__dirty&&(s.__dirty=!0,s.incremental&&s.__drawIndex<0&&(s.__drawIndex=n))}e(n),this.eachBuiltinLayer(function(t,e){!t.__used&&t.getElementCount()>0&&(t.__dirty=!0,t.__startIndex=t.__endIndex=t.__drawIndex=0),t.__dirty&&t.__drawIndex<0&&(t.__drawIndex=t.__startIndex)})},clear:function(){return this.eachBuiltinLayer(this._clearLayer),this},_clearLayer:function(t){t.clear()},setBackgroundColor:function(t){this._backgroundColor=t},configLayer:function(t,e){if(e){var n=this._layerConfig
n[t]?r.merge(n[t],e,!0):n[t]=e
for(var i=0;i<this._zlevelList.length;i++){var a=this._zlevelList[i]
if(a===t||a===t+.01){var o=this._layers[a]
r.merge(o,n[t],!0)}}}},delLayer:function(t){var e=this._layers,n=this._zlevelList,i=e[t]
i&&(i.dom.parentNode.removeChild(i.dom),delete e[t],n.splice(r.indexOf(n,t),1))},resize:function(t,e){if(this._domRoot.style){var n=this._domRoot
n.style.display="none"
var i=this._opts
if(null!=t&&(i.width=t),null!=e&&(i.height=e),t=this._getSize(0),e=this._getSize(1),n.style.display="",this._width!=t||e!=this._height){for(var a in n.style.width=t+"px",n.style.height=e+"px",this._layers)this._layers.hasOwnProperty(a)&&this._layers[a].resize(t,e)
r.each(this._progressiveLayers,function(n){n.resize(t,e)}),this.refresh(!0)}this._width=t,this._height=e}else{if(null==t||null==e)return
this._width=t,this._height=e,this.getLayer(314159).resize(t,e)}return this},clearLayer:function(t){var e=this._layers[t]
e&&e.clear()},dispose:function(){this.root.innerHTML="",this.root=this.storage=this._domRoot=this._layers=null},getRenderedCanvas:function(t){if(t=t||{},this._singleCanvas&&!this._compositeManually)return this._layers[314159].dom
var e=new l("image",this,t.pixelRatio||this.dpr)
if(e.initContext(),e.clear(!1,t.backgroundColor||this._backgroundColor),t.pixelRatio<=this.dpr){this.refresh()
var n=e.dom.width,i=e.dom.height,r=e.ctx
this.eachLayer(function(t){t.__builtin__?r.drawImage(t.dom,0,0,n,i):t.renderToCanvas&&(e.ctx.save(),t.renderToCanvas(e.ctx),e.ctx.restore())})}else for(var a={},o=this.storage.getDisplayList(!0),s=0;s<o.length;s++){var u=o[s]
this._doPaintEl(u,e,!0,a)}return e.dom},getWidth:function(){return this._width},getHeight:function(){return this._height},_getSize:function(t){var e=this._opts,n=["width","height"][t],i=["clientWidth","clientHeight"][t],r=["paddingLeft","paddingTop"][t],a=["paddingRight","paddingBottom"][t]
if(null!=e[n]&&"auto"!==e[n])return parseFloat(e[n])
var o=this.root,s=document.defaultView.getComputedStyle(o)
return(o[i]||f(s[n])||f(o.style[n]))-(f(s[r])||0)-(f(s[a])||0)|0},pathToImage:function(t,e){e=e||this.dpr
var n=document.createElement("canvas"),i=n.getContext("2d"),r=t.getBoundingRect(),a=t.style,o=a.shadowBlur*e,s=a.shadowOffsetX*e,l=a.shadowOffsetY*e,u=a.hasStroke()?a.lineWidth:0,c=Math.max(u/2,-s+o),f=Math.max(u/2,s+o),d=Math.max(u/2,-l+o),p=Math.max(u/2,l+o),g=r.width+c+f,v=r.height+d+p
n.width=g*e,n.height=v*e,i.scale(e,e),i.clearRect(0,0,g,v),i.dpr=e
var m={position:t.position,rotation:t.rotation,scale:t.scale}
t.position=[c-r.x,d-r.y],t.rotation=0,t.scale=[1,1],t.updateTransform(),t&&t.brush(i)
var _=new h({style:{x:0,y:0,image:n}})
return null!=m.position&&(_.position=t.position=m.position),null!=m.rotation&&(_.rotation=t.rotation=m.rotation),null!=m.scale&&(_.scale=t.scale=m.scale),_}}
var v=g
t.exports=v},function(t,e,n){var i=n(264),r=n(290).devicePixelRatio,a=n(315),o=n(317)
function s(){return!1}function l(t,e,n){var r=i.createCanvas(),a=e.getWidth(),o=e.getHeight(),s=r.style
return s&&(s.position="absolute",s.left=0,s.top=0,s.width=a+"px",s.height=o+"px",r.setAttribute("data-zr-dom-id",t)),r.width=a*n,r.height=o*n,r}var u=function(t,e,n){var a
n=n||r,"string"==typeof t?a=l(t,e,n):i.isObject(t)&&(t=(a=t).id),this.id=t,this.dom=a
var o=a.style
o&&(a.onselectstart=s,o["-webkit-user-select"]="none",o["user-select"]="none",o["-webkit-touch-callout"]="none",o["-webkit-tap-highlight-color"]="rgba(0,0,0,0)",o.padding=0,o.margin=0,o["border-width"]=0),this.domBack=null,this.ctxBack=null,this.painter=e,this.config=null,this.clearColor=0,this.motionBlur=!1,this.lastFrameAlpha=.7,this.dpr=n}
u.prototype={constructor:u,__dirty:!0,__used:!1,__drawIndex:0,__startIndex:0,__endIndex:0,incremental:!1,getElementCount:function(){return this.__endIndex-this.__startIndex},initContext:function(){this.ctx=this.dom.getContext("2d"),this.ctx.dpr=this.dpr},createBackBuffer:function(){var t=this.dpr
this.domBack=l("back-"+this.id,this.painter,t),this.ctxBack=this.domBack.getContext("2d"),1!=t&&this.ctxBack.scale(t,t)},resize:function(t,e){var n=this.dpr,i=this.dom,r=i.style,a=this.domBack
r&&(r.width=t+"px",r.height=e+"px"),i.width=t*n,i.height=e*n,a&&(a.width=t*n,a.height=e*n,1!=n&&this.ctxBack.scale(n,n))},clear:function(t,e){var n,i=this.dom,r=this.ctx,s=i.width,l=i.height,u=(e=e||this.clearColor,this.motionBlur&&!t),h=this.lastFrameAlpha,c=this.dpr
if(u&&(this.domBack||this.createBackBuffer(),this.ctxBack.globalCompositeOperation="copy",this.ctxBack.drawImage(i,0,0,s/c,l/c)),r.clearRect(0,0,s,l),e&&"transparent"!==e&&(e.colorStops?(n=e.__canvasGradient||a.getGradient(r,e,{x:0,y:0,width:s,height:l}),e.__canvasGradient=n):e.image&&(n=o.prototype.getCanvasPattern.call(e,r)),r.save(),r.fillStyle=n||e,r.fillRect(0,0,s,l),r.restore()),u){var f=this.domBack
r.save(),r.globalAlpha=h,r.drawImage(f,0,0,s,l),r.restore()}}}
var h=u
t.exports=h},function(t,e,n){var i=n(320),r=new(n(272)),a=function(){}
a.prototype={constructor:a,drawRectText:function(t,e){var n=this.style
e=n.textRect||e,this.__dirty&&i.normalizeTextStyle(n,!0)
var a=n.text
if(null!=a&&(a+=""),i.needDrawText(a,n)){t.save()
var o=this.transform
n.transformText?this.setTransform(t):o&&(r.copy(e),r.applyTransform(o),e=r),i.renderText(this,t,a,n,e),t.restore()}}}
var o=a
t.exports=o},function(t,e,n){var i=n(264),r=n(285).Dispatcher,a=n(318),o=n(312),s=function(t){t=t||{},this.stage=t.stage||{},this.onframe=t.onframe||function(){},this._clips=[],this._running=!1,this._time,this._pausedTime,this._pauseStart,this._paused=!1,r.call(this)}
s.prototype={constructor:s,addClip:function(t){this._clips.push(t)},addAnimator:function(t){t.animation=this
for(var e=t.getClips(),n=0;n<e.length;n++)this.addClip(e[n])},removeClip:function(t){var e=i.indexOf(this._clips,t)
e>=0&&this._clips.splice(e,1)},removeAnimator:function(t){for(var e=t.getClips(),n=0;n<e.length;n++)this.removeClip(e[n])
t.animation=null},_update:function(){for(var t=(new Date).getTime()-this._pausedTime,e=t-this._time,n=this._clips,i=n.length,r=[],a=[],o=0;o<i;o++){var s=n[o],l=s.step(t,e)
l&&(r.push(l),a.push(s))}for(o=0;o<i;)n[o]._needsRemove?(n[o]=n[i-1],n.pop(),i--):o++
for(i=r.length,o=0;o<i;o++)a[o].fire(r[o])
this._time=t,this.onframe(e),this.trigger("frame",e),this.stage.update&&this.stage.update()},_startLoop:function(){var t=this
this._running=!0,a(function e(){t._running&&(a(e),!t._paused&&t._update())})},start:function(){this._time=(new Date).getTime(),this._pausedTime=0,this._startLoop()},stop:function(){this._running=!1},pause:function(){this._paused||(this._pauseStart=(new Date).getTime(),this._paused=!0)},resume:function(){this._paused&&(this._pausedTime+=(new Date).getTime()-this._pauseStart,this._paused=!1)},clear:function(){this._clips=[]},isFinished:function(){return!this._clips.length},animate:function(t,e){var n=new o(t,(e=e||{}).loop,e.getter,e.setter)
return this.addAnimator(n),n}},i.mixin(s,r)
var l=s
t.exports=l},function(t,e,n){var i=n(285),r=i.addEventListener,a=i.removeEventListener,o=i.normalizeEvent,s=n(264),l=n(283),u=n(270),h=n(362),c=["click","dblclick","mousewheel","mouseout","mouseup","mousedown","mousemove","contextmenu"],f=["touchstart","touchend","touchmove"],d={pointerdown:1,pointerup:1,pointermove:1,pointerout:1},p=s.map(c,function(t){var e=t.replace("mouse","pointer")
return d[e]?e:t})
function g(t){return"mousewheel"===t&&u.browser.firefox?"DOMMouseScroll":t}function v(t,e,n){var i=t._gestureMgr
"start"===n&&i.clear()
var r=i.recognize(e,t.handler.findHover(e.zrX,e.zrY,null).target,t.dom)
if("end"===n&&i.clear(),r){var a=r.type
e.gestureEvent=a,t.handler.dispatchToElement({target:r.target},a,r.event)}}function m(t){t._touching=!0,clearTimeout(t._touchTimer),t._touchTimer=setTimeout(function(){t._touching=!1},700)}var _={mousemove:function(t){t=o(this.dom,t),this.trigger("mousemove",t)},mouseout:function(t){var e=(t=o(this.dom,t)).toElement||t.relatedTarget
if(e!=this.dom)for(;e&&9!=e.nodeType;){if(e===this.dom)return
e=e.parentNode}this.trigger("mouseout",t)},touchstart:function(t){(t=o(this.dom,t)).zrByTouch=!0,this._lastTouchMoment=new Date,v(this,t,"start"),_.mousemove.call(this,t),_.mousedown.call(this,t),m(this)},touchmove:function(t){(t=o(this.dom,t)).zrByTouch=!0,v(this,t,"change"),_.mousemove.call(this,t),m(this)},touchend:function(t){(t=o(this.dom,t)).zrByTouch=!0,v(this,t,"end"),_.mouseup.call(this,t),+new Date-this._lastTouchMoment<300&&_.click.call(this,t),m(this)},pointerdown:function(t){_.mousedown.call(this,t)},pointermove:function(t){y(t)||_.mousemove.call(this,t)},pointerup:function(t){_.mouseup.call(this,t)},pointerout:function(t){y(t)||_.mouseout.call(this,t)}}
function y(t){var e=t.pointerType
return"pen"===e||"touch"===e}function x(t){function e(e,n){s.each(e,function(e){r(t,g(e),n._handlers[e])},n)}l.call(this),this.dom=t,this._touching=!1,this._touchTimer,this._gestureMgr=new h,this._handlers={},function(t){s.each(f,function(e){t._handlers[e]=s.bind(_[e],t)}),s.each(p,function(e){t._handlers[e]=s.bind(_[e],t)}),s.each(c,function(e){t._handlers[e]=function(t,e){return function(){if(!e._touching)return t.apply(e,arguments)}}(_[e],t)})}(this),u.pointerEventsSupported?e(p,this):(u.touchEventsSupported&&e(f,this),e(c,this))}s.each(["click","mousedown","mouseup","mousewheel","dblclick","contextmenu"],function(t){_[t]=function(e){e=o(this.dom,e),this.trigger(t,e)}})
var w=x.prototype
w.dispose=function(){for(var t=c.concat(f),e=0;e<t.length;e++){var n=t[e]
a(this.dom,g(n),this._handlers[n])}},w.setCursor=function(t){this.dom.style&&(this.dom.style.cursor=t||"default")},s.mixin(x,l)
var b=x
t.exports=b},function(t,e,n){var i=n(285),r=function(){this._track=[]}
function a(t){var e=t[1][0]-t[0][0],n=t[1][1]-t[0][1]
return Math.sqrt(e*e+n*n)}r.prototype={constructor:r,recognize:function(t,e,n){return this._doTrack(t,e,n),this._recognize(t)},clear:function(){return this._track.length=0,this},_doTrack:function(t,e,n){var r=t.touches
if(r){for(var a={points:[],touches:[],target:e,event:t},o=0,s=r.length;o<s;o++){var l=r[o],u=i.clientToLocal(n,l,{})
a.points.push([u.zrX,u.zrY]),a.touches.push(l)}this._track.push(a)}},_recognize:function(t){for(var e in o)if(o.hasOwnProperty(e)){var n=o[e](this._track,t)
if(n)return n}}}
var o={pinch:function(t,e){var n=t.length
if(n){var i=(t[n-1]||{}).points,r=(t[n-2]||{}).points||i
if(r&&r.length>1&&i&&i.length>1){var o=a(i)/a(r)
!isFinite(o)&&(o=1),e.pinchScale=o
var s=function(t){return[(t[0][0]+t[1][0])/2,(t[0][1]+t[1][1])/2]}(i)
return e.pinchX=s[0],e.pinchY=s[1],{type:"pinch",target:t[0].target,event:e}}}}},s=r
t.exports=s},function(t,e,n){var i=n(299)([["lineWidth","width"],["stroke","color"],["opacity"],["shadowBlur"],["shadowOffsetX"],["shadowOffsetY"],["shadowColor"]]),r={getLineStyle:function(t){var e=i(this,t),n=this.getLineDash(e.lineWidth)
return n&&(e.lineDash=n),e},getLineDash:function(t){null==t&&(t=1)
var e=this.get("type"),n=Math.max(t,2),i=4*t
return"solid"===e||null==e?null:"dashed"===e?[i,i]:[n,n]}}
t.exports=r},function(t,e,n){var i=n(299)([["fill","color"],["shadowBlur"],["shadowOffsetX"],["shadowOffsetY"],["opacity"],["shadowColor"]]),r={getAreaStyle:function(t,e){return i(this,t,e)}}
t.exports=r},function(t,e,n){var i=n(278),r=n(268),a=["textStyle","color"],o={getTextColor:function(t){var e=this.ecModel
return this.getShallow("color")||(!t&&e?e.get(a):null)},getFont:function(){return r.getFont({fontStyle:this.getShallow("fontStyle"),fontWeight:this.getShallow("fontWeight"),fontSize:this.getShallow("fontSize"),fontFamily:this.getShallow("fontFamily")},this.ecModel)},getTextRect:function(t){return i.getBoundingRect(t,this.getFont(),this.getShallow("align"),this.getShallow("verticalAlign")||this.getShallow("baseline"),this.getShallow("padding"),this.getShallow("rich"),this.getShallow("truncateText"))}}
t.exports=o},function(t,e,n){var i=n(271),r=n(292),a=n(372),o=["m","M","l","L","v","V","h","H","z","Z","c","C","q","Q","t","T","s","S","a","A"],s=Math.sqrt,l=Math.sin,u=Math.cos,h=Math.PI,c=function(t){return Math.sqrt(t[0]*t[0]+t[1]*t[1])},f=function(t,e){return(t[0]*e[0]+t[1]*e[1])/(c(t)*c(e))},d=function(t,e){return(t[0]*e[1]<t[1]*e[0]?-1:1)*Math.acos(f(t,e))}
function p(t,e,n,i,r,a,o,c,p,g,v){var m=p*(h/180),_=u(m)*(t-n)/2+l(m)*(e-i)/2,y=-1*l(m)*(t-n)/2+u(m)*(e-i)/2,x=_*_/(o*o)+y*y/(c*c)
x>1&&(o*=s(x),c*=s(x))
var w=(r===a?-1:1)*s((o*o*(c*c)-o*o*(y*y)-c*c*(_*_))/(o*o*(y*y)+c*c*(_*_)))||0,b=w*o*y/c,S=w*-c*_/o,M=(t+n)/2+u(m)*b-l(m)*S,T=(e+i)/2+l(m)*b+u(m)*S,C=d([1,0],[(_-b)/o,(y-S)/c]),k=[(_-b)/o,(y-S)/c],D=[(-1*_-b)/o,(-1*y-S)/c],I=d(k,D)
f(k,D)<=-1&&(I=h),f(k,D)>=1&&(I=0),0===a&&I>0&&(I-=2*h),1===a&&I<0&&(I+=2*h),v.addData(g,M,T,o,c,C,I,m,a)}function g(t,e){var n=function(t){if(!t)return[]
var e,n=t.replace(/-/g," -").replace(/  /g," ").replace(/ /g,",").replace(/,,/g,",")
for(e=0;e<o.length;e++)n=n.replace(new RegExp(o[e],"g"),"|"+o[e])
var i,a=n.split("|"),s=0,l=0,u=new r,h=r.CMD
for(e=1;e<a.length;e++){var c,f=a[e],d=f.charAt(0),g=0,v=f.slice(1).replace(/e,-/g,"e-").split(",")
v.length>0&&""===v[0]&&v.shift()
for(var m=0;m<v.length;m++)v[m]=parseFloat(v[m])
for(;g<v.length&&!isNaN(v[g])&&!isNaN(v[0]);){var _,y,x,w,b,S,M,T=s,C=l
switch(d){case"l":s+=v[g++],l+=v[g++],c=h.L,u.addData(c,s,l)
break
case"L":s=v[g++],l=v[g++],c=h.L,u.addData(c,s,l)
break
case"m":s+=v[g++],l+=v[g++],c=h.M,u.addData(c,s,l),d="l"
break
case"M":s=v[g++],l=v[g++],c=h.M,u.addData(c,s,l),d="L"
break
case"h":s+=v[g++],c=h.L,u.addData(c,s,l)
break
case"H":s=v[g++],c=h.L,u.addData(c,s,l)
break
case"v":l+=v[g++],c=h.L,u.addData(c,s,l)
break
case"V":l=v[g++],c=h.L,u.addData(c,s,l)
break
case"C":c=h.C,u.addData(c,v[g++],v[g++],v[g++],v[g++],v[g++],v[g++]),s=v[g-2],l=v[g-1]
break
case"c":c=h.C,u.addData(c,v[g++]+s,v[g++]+l,v[g++]+s,v[g++]+l,v[g++]+s,v[g++]+l),s+=v[g-2],l+=v[g-1]
break
case"S":_=s,y=l
var k=u.len(),D=u.data
i===h.C&&(_+=s-D[k-4],y+=l-D[k-3]),c=h.C,T=v[g++],C=v[g++],s=v[g++],l=v[g++],u.addData(c,_,y,T,C,s,l)
break
case"s":_=s,y=l,k=u.len(),D=u.data,i===h.C&&(_+=s-D[k-4],y+=l-D[k-3]),c=h.C,T=s+v[g++],C=l+v[g++],s+=v[g++],l+=v[g++],u.addData(c,_,y,T,C,s,l)
break
case"Q":T=v[g++],C=v[g++],s=v[g++],l=v[g++],c=h.Q,u.addData(c,T,C,s,l)
break
case"q":T=v[g++]+s,C=v[g++]+l,s+=v[g++],l+=v[g++],c=h.Q,u.addData(c,T,C,s,l)
break
case"T":_=s,y=l,k=u.len(),D=u.data,i===h.Q&&(_+=s-D[k-4],y+=l-D[k-3]),s=v[g++],l=v[g++],c=h.Q,u.addData(c,_,y,s,l)
break
case"t":_=s,y=l,k=u.len(),D=u.data,i===h.Q&&(_+=s-D[k-4],y+=l-D[k-3]),s+=v[g++],l+=v[g++],c=h.Q,u.addData(c,_,y,s,l)
break
case"A":x=v[g++],w=v[g++],b=v[g++],S=v[g++],M=v[g++],p(T=s,C=l,s=v[g++],l=v[g++],S,M,x,w,b,c=h.A,u)
break
case"a":x=v[g++],w=v[g++],b=v[g++],S=v[g++],M=v[g++],p(T=s,C=l,s+=v[g++],l+=v[g++],S,M,x,w,b,c=h.A,u)}}"z"!==d&&"Z"!==d||(c=h.Z,u.addData(c)),i=c}return u.toStatic(),u}(t)
return(e=e||{}).buildPath=function(t){if(t.setData)t.setData(n.data),(e=t.getContext())&&t.rebuildPath(e)
else{var e=t
n.rebuildPath(e)}},e.applyTransform=function(t){a(n,t),this.dirty(!0)},e}e.createFromString=function(t,e){return new i(g(t,e))},e.extendFromString=function(t,e){return i.extend(g(t,e))},e.mergePath=function(t,e){for(var n=[],r=t.length,a=0;a<r;a++){var o=t[a]
o.path||o.createPathProxy(),o.__dirtyPath&&o.buildPath(o.path,o.shape,!0),n.push(o.path)}var s=new i(e)
return s.createPathProxy(),s.buildPath=function(t){t.appendPath(n)
var e=t.getContext()
e&&t.rebuildPath(e)},s}},function(t,e,n){var i=n(292),r=n(368),a=n(369),o=n(370),s=n(371),l=n(324).normalizeRadian,u=n(279),h=n(325),c=i.CMD,f=2*Math.PI,d=1e-4,p=[-1,-1,-1],g=[-1,-1]
function v(){var t=g[0]
g[0]=g[1],g[1]=t}function m(t,e,n,i,r,a,o,s,l,h){if(h>e&&h>i&&h>a&&h>s||h<e&&h<i&&h<a&&h<s)return 0
var c=u.cubicRootAt(e,i,a,s,h,p)
if(0===c)return 0
for(var f,d,m=0,_=-1,y=0;y<c;y++){var x=p[y],w=0===x||1===x?.5:1
u.cubicAt(t,n,r,o,x)<l||(_<0&&(_=u.cubicExtrema(e,i,a,s,g),g[1]<g[0]&&_>1&&v(),f=u.cubicAt(e,i,a,s,g[0]),_>1&&(d=u.cubicAt(e,i,a,s,g[1]))),2==_?x<g[0]?m+=f<e?w:-w:x<g[1]?m+=d<f?w:-w:m+=s<d?w:-w:x<g[0]?m+=f<e?w:-w:m+=s<f?w:-w)}return m}function _(t,e,n,i,r,a,o,s){if(s>e&&s>i&&s>a||s<e&&s<i&&s<a)return 0
var l=u.quadraticRootAt(e,i,a,s,p)
if(0===l)return 0
var h=u.quadraticExtremum(e,i,a)
if(h>=0&&h<=1){for(var c=0,f=u.quadraticAt(e,i,a,h),d=0;d<l;d++){var g=0===p[d]||1===p[d]?.5:1
u.quadraticAt(t,n,r,p[d])<o||(p[d]<h?c+=f<e?g:-g:c+=a<f?g:-g)}return c}return g=0===p[0]||1===p[0]?.5:1,u.quadraticAt(t,n,r,p[0])<o?0:a<e?g:-g}function y(t,e,n,i,r,a,o,s){if((s-=e)>n||s<-n)return 0
var u=Math.sqrt(n*n-s*s)
p[0]=-u,p[1]=u
var h=Math.abs(i-r)
if(h<1e-4)return 0
if(h%f<1e-4){i=0,r=f
var c=a?1:-1
return o>=p[0]+t&&o<=p[1]+t?c:0}a?(u=i,i=l(r),r=l(u)):(i=l(i),r=l(r)),i>r&&(r+=f)
for(var d=0,g=0;g<2;g++){var v=p[g]
if(v+t>o){var m=Math.atan2(s,v)
c=a?1:-1,m<0&&(m=f+m),(m>=i&&m<=r||m+f>=i&&m+f<=r)&&(m>Math.PI/2&&m<1.5*Math.PI&&(c=-c),d+=c)}}return d}function x(t,e,n,i,l){for(var u=0,f=0,p=0,g=0,v=0,x=0;x<t.length;){var w=t[x++]
switch(w===c.M&&x>1&&(n||(u+=h(f,p,g,v,i,l))),1==x&&(g=f=t[x],v=p=t[x+1]),w){case c.M:f=g=t[x++],p=v=t[x++]
break
case c.L:if(n){if(r.containStroke(f,p,t[x],t[x+1],e,i,l))return!0}else u+=h(f,p,t[x],t[x+1],i,l)||0
f=t[x++],p=t[x++]
break
case c.C:if(n){if(a.containStroke(f,p,t[x++],t[x++],t[x++],t[x++],t[x],t[x+1],e,i,l))return!0}else u+=m(f,p,t[x++],t[x++],t[x++],t[x++],t[x],t[x+1],i,l)||0
f=t[x++],p=t[x++]
break
case c.Q:if(n){if(o.containStroke(f,p,t[x++],t[x++],t[x],t[x+1],e,i,l))return!0}else u+=_(f,p,t[x++],t[x++],t[x],t[x+1],i,l)||0
f=t[x++],p=t[x++]
break
case c.A:var b=t[x++],S=t[x++],M=t[x++],T=t[x++],C=t[x++],k=t[x++],D=(t[x++],1-t[x++]),I=Math.cos(C)*M+b,A=Math.sin(C)*T+S
x>1?u+=h(f,p,I,A,i,l):(g=I,v=A)
var O=(i-b)*T/M+b
if(n){if(s.containStroke(b,S,T,C,C+k,D,e,O,l))return!0}else u+=y(b,S,T,C,C+k,D,O,l)
f=Math.cos(C+k)*M+b,p=Math.sin(C+k)*T+S
break
case c.R:if(g=f=t[x++],v=p=t[x++],I=g+t[x++],A=v+t[x++],n){if(r.containStroke(g,v,I,v,e,i,l)||r.containStroke(I,v,I,A,e,i,l)||r.containStroke(I,A,g,A,e,i,l)||r.containStroke(g,A,g,v,e,i,l))return!0}else u+=h(I,v,I,A,i,l),u+=h(g,A,g,v,i,l)
break
case c.Z:if(n){if(r.containStroke(f,p,g,v,e,i,l))return!0}else u+=h(f,p,g,v,i,l)
f=g,p=v}}return n||function(t,e){return Math.abs(t-e)<d}(p,v)||(u+=h(f,p,g,v,i,l)||0),0!==u}e.contain=function(t,e,n){return x(t,0,!1,e,n)},e.containStroke=function(t,e,n,i){return x(t,e,!0,n,i)}},function(t,e){e.containStroke=function(t,e,n,i,r,a,o){if(0===r)return!1
var s,l=r
if(o>e+l&&o>i+l||o<e-l&&o<i-l||a>t+l&&a>n+l||a<t-l&&a<n-l)return!1
if(t===n)return Math.abs(a-t)<=l/2
var u=(s=(e-i)/(t-n))*a-o+(t*i-n*e)/(t-n)
return u*u/(s*s+1)<=l/2*l/2}},function(t,e,n){var i=n(279)
e.containStroke=function(t,e,n,r,a,o,s,l,u,h,c){if(0===u)return!1
var f=u
return!(c>e+f&&c>r+f&&c>o+f&&c>l+f||c<e-f&&c<r-f&&c<o-f&&c<l-f||h>t+f&&h>n+f&&h>a+f&&h>s+f||h<t-f&&h<n-f&&h<a-f&&h<s-f)&&i.cubicProjectPoint(t,e,n,r,a,o,s,l,h,c,null)<=f/2}},function(t,e,n){var i=n(279).quadraticProjectPoint
e.containStroke=function(t,e,n,r,a,o,s,l,u){if(0===s)return!1
var h=s
return!(u>e+h&&u>r+h&&u>o+h||u<e-h&&u<r-h&&u<o-h||l>t+h&&l>n+h&&l>a+h||l<t-h&&l<n-h&&l<a-h)&&i(t,e,n,r,a,o,l,u,null)<=h/2}},function(t,e,n){var i=n(324).normalizeRadian,r=2*Math.PI
e.containStroke=function(t,e,n,a,o,s,l,u,h){if(0===l)return!1
var c=l
u-=t,h-=e
var f=Math.sqrt(u*u+h*h)
if(f-c>n||f+c<n)return!1
if(Math.abs(a-o)%r<1e-4)return!0
if(s){var d=a
a=i(o),o=i(d)}else a=i(a),o=i(o)
a>o&&(o+=r)
var p=Math.atan2(h,u)
return p<0&&(p+=r),p>=a&&p<=o||p+r>=a&&p+r<=o}},function(t,e,n){var i=n(292),r=n(267).applyTransform,a=i.CMD,o=[[],[],[]],s=Math.sqrt,l=Math.atan2
t.exports=function(t,e){var n,i,u,h,c,f=t.data,d=a.M,p=a.C,g=a.L,v=a.R,m=a.A,_=a.Q
for(u=0,h=0;u<f.length;){switch(n=f[u++],h=u,i=0,n){case d:case g:i=1
break
case p:i=3
break
case _:i=2
break
case m:var y=e[4],x=e[5],w=s(e[0]*e[0]+e[1]*e[1]),b=s(e[2]*e[2]+e[3]*e[3]),S=l(-e[1]/b,e[0]/w)
f[u]*=w,f[u++]+=y,f[u]*=b,f[u++]+=x,f[u++]*=w,f[u++]*=b,f[u++]+=S,f[u++]+=S,h=u+=2
break
case v:M[0]=f[u++],M[1]=f[u++],r(M,M,e),f[h++]=M[0],f[h++]=M[1],M[0]+=f[u++],M[1]+=f[u++],r(M,M,e),f[h++]=M[0],f[h++]=M[1]}for(c=0;c<i;c++){var M;(M=o[c])[0]=f[u++],M[1]=f[u++],r(M,M,e),f[h++]=M[0],f[h++]=M[1]}}}},function(t,e,n){var i=n(291),r=n(264),a=n(278),o=n(320),s=function(t){i.call(this,t)}
s.prototype={constructor:s,type:"text",brush:function(t,e){var n=this.style
this.__dirty&&o.normalizeTextStyle(n,!0),n.fill=n.stroke=n.shadowBlur=n.shadowColor=n.shadowOffsetX=n.shadowOffsetY=null
var i=n.text
null!=i&&(i+=""),n.bind(t,this,e),o.needDrawText(i,n)&&(this.setTransform(t),o.renderText(this,t,i,n),this.restoreTransform(t))},getBoundingRect:function(){var t=this.style
if(this.__dirty&&o.normalizeTextStyle(t,!0),!this._rect){var e=t.text
null!=e?e+="":e=""
var n=a.getBoundingRect(t.text+"",t.font,t.textAlign,t.textVerticalAlign,t.textPadding,t.rich)
if(n.x+=t.x||0,n.y+=t.y||0,o.getStroke(t.textStroke,t.textStrokeWidth)){var i=t.textStrokeWidth
n.x-=i/2,n.y-=i/2,n.width+=i,n.height+=i}this._rect=n}return this._rect}},r.inherits(s,i)
var l=s
t.exports=l},function(t,e,n){var i=n(271).extend({type:"circle",shape:{cx:0,cy:0,r:0},buildPath:function(t,e,n){n&&t.moveTo(e.cx+e.r,e.cy),t.arc(e.cx,e.cy,e.r,0,2*Math.PI,!0)}})
t.exports=i},function(t,e,n){var i=n(271),r=n(326),a=i.extend({type:"sector",shape:{cx:0,cy:0,r0:0,r:0,startAngle:0,endAngle:2*Math.PI,clockwise:!0},brush:r(i.prototype.brush),buildPath:function(t,e){var n=e.cx,i=e.cy,r=Math.max(e.r0||0,0),a=Math.max(e.r,0),o=e.startAngle,s=e.endAngle,l=e.clockwise,u=Math.cos(o),h=Math.sin(o)
t.moveTo(u*r+n,h*r+i),t.lineTo(u*a+n,h*a+i),t.arc(n,i,a,o,s,!l),t.lineTo(Math.cos(s)*r+n,Math.sin(s)*r+i),0!==r&&t.arc(n,i,r,s,o,l),t.closePath()}})
t.exports=a},function(t,e,n){var i=n(271).extend({type:"ring",shape:{cx:0,cy:0,r:0,r0:0},buildPath:function(t,e){var n=e.cx,i=e.cy,r=2*Math.PI
t.moveTo(n+e.r,i),t.arc(n,i,e.r,0,r,!1),t.moveTo(n+e.r0,i),t.arc(n,i,e.r0,0,r,!0)}})
t.exports=i},function(t,e,n){var i=n(271),r=n(327),a=i.extend({type:"polygon",shape:{points:null,smooth:!1,smoothConstraint:null},buildPath:function(t,e){r.buildPath(t,e,!0)}})
t.exports=a},function(t,e,n){var i=n(267).distance
function r(t,e,n,i,r,a,o){var s=.5*(n-t),l=.5*(i-e)
return(2*(e-n)+s+l)*o+(-3*(e-n)-2*s-l)*a+s*r+e}t.exports=function(t,e){for(var n=t.length,a=[],o=0,s=1;s<n;s++)o+=i(t[s-1],t[s])
var l=o/2
for(l=l<n?n:l,s=0;s<l;s++){var u,h,c,f=s/(l-1)*(e?n:n-1),d=Math.floor(f),p=f-d,g=t[d%n]
e?(u=t[(d-1+n)%n],h=t[(d+1)%n],c=t[(d+2)%n]):(u=t[0===d?d:d-1],h=t[d>n-2?n-1:d+1],c=t[d>n-3?n-1:d+2])
var v=p*p,m=p*v
a.push([r(u[0],g[0],h[0],c[0],p,v,m),r(u[1],g[1],h[1],c[1],p,v,m)])}return a}},function(t,e,n){var i=n(267),r=i.min,a=i.max,o=i.scale,s=i.distance,l=i.add,u=i.clone,h=i.sub
t.exports=function(t,e,n,i){var c,f,d,p,g=[],v=[],m=[],_=[]
if(i){d=[1/0,1/0],p=[-1/0,-1/0]
for(var y=0,x=t.length;y<x;y++)r(d,d,t[y]),a(p,p,t[y])
r(d,d,i[0]),a(p,p,i[1])}for(y=0,x=t.length;y<x;y++){var w=t[y]
if(n)c=t[y?y-1:x-1],f=t[(y+1)%x]
else{if(0===y||y===x-1){g.push(u(t[y]))
continue}c=t[y-1],f=t[y+1]}h(v,f,c),o(v,v,e)
var b=s(w,c),S=s(w,f),M=b+S
0!==M&&(b/=M,S/=M),o(m,v,-b),o(_,v,S)
var T=l([],w,m),C=l([],w,_)
i&&(a(T,T,d),r(T,T,p),a(C,C,d),r(C,C,p)),g.push(T),g.push(C)}return n&&g.push(g.shift()),g}},function(t,e,n){var i=n(271),r=n(327),a=i.extend({type:"polyline",shape:{points:null,smooth:!1,smoothConstraint:null},style:{stroke:"#000",fill:null},buildPath:function(t,e){r.buildPath(t,e,!1)}})
t.exports=a},function(t,e,n){var i=n(271),r=n(321),a=i.extend({type:"rect",shape:{r:0,x:0,y:0,width:0,height:0},buildPath:function(t,e){var n=e.x,i=e.y,a=e.width,o=e.height
e.r?r.buildPath(t,e):t.rect(n,i,a,o),t.closePath()}})
t.exports=a},function(t,e,n){var i=n(271).extend({type:"line",shape:{x1:0,y1:0,x2:0,y2:0,percent:1},style:{stroke:"#000",fill:null},buildPath:function(t,e){var n=e.x1,i=e.y1,r=e.x2,a=e.y2,o=e.percent
0!==o&&(t.moveTo(n,i),o<1&&(r=n*(1-o)+r*o,a=i*(1-o)+a*o),t.lineTo(r,a))},pointAt:function(t){var e=this.shape
return[e.x1*(1-t)+e.x2*t,e.y1*(1-t)+e.y2*t]}})
t.exports=i},function(t,e,n){var i=n(271),r=n(267),a=n(279),o=a.quadraticSubdivide,s=a.cubicSubdivide,l=a.quadraticAt,u=a.cubicAt,h=a.quadraticDerivativeAt,c=a.cubicDerivativeAt,f=[]
function d(t,e,n){var i=t.cpx2,r=t.cpy2
return null===i||null===r?[(n?c:u)(t.x1,t.cpx1,t.cpx2,t.x2,e),(n?c:u)(t.y1,t.cpy1,t.cpy2,t.y2,e)]:[(n?h:l)(t.x1,t.cpx1,t.x2,e),(n?h:l)(t.y1,t.cpy1,t.y2,e)]}var p=i.extend({type:"bezier-curve",shape:{x1:0,y1:0,x2:0,y2:0,cpx1:0,cpy1:0,percent:1},style:{stroke:"#000",fill:null},buildPath:function(t,e){var n=e.x1,i=e.y1,r=e.x2,a=e.y2,l=e.cpx1,u=e.cpy1,h=e.cpx2,c=e.cpy2,d=e.percent
0!==d&&(t.moveTo(n,i),null==h||null==c?(d<1&&(o(n,l,r,d,f),l=f[1],r=f[2],o(i,u,a,d,f),u=f[1],a=f[2]),t.quadraticCurveTo(l,u,r,a)):(d<1&&(s(n,l,h,r,d,f),l=f[1],h=f[2],r=f[3],s(i,u,c,a,d,f),u=f[1],c=f[2],a=f[3]),t.bezierCurveTo(l,u,h,c,r,a)))},pointAt:function(t){return d(this.shape,t,!1)},tangentAt:function(t){var e=d(this.shape,t,!0)
return r.normalize(e,e)}})
t.exports=p},function(t,e,n){var i=n(271).extend({type:"arc",shape:{cx:0,cy:0,r:0,startAngle:0,endAngle:2*Math.PI,clockwise:!0},style:{stroke:"#000",fill:null},buildPath:function(t,e){var n=e.cx,i=e.cy,r=Math.max(e.r,0),a=e.startAngle,o=e.endAngle,s=e.clockwise,l=Math.cos(a),u=Math.sin(a)
t.moveTo(l*r+n,u*r+i),t.arc(n,i,r,a,o,!s)}})
t.exports=i},function(t,e,n){var i=n(271),r=i.extend({type:"compound",shape:{paths:null},_updatePathDirty:function(){for(var t=this.__dirtyPath,e=this.shape.paths,n=0;n<e.length;n++)t=t||e[n].__dirtyPath
this.__dirtyPath=t,this.__dirty=this.__dirty||t},beforeBrush:function(){this._updatePathDirty()
for(var t=this.shape.paths||[],e=this.getGlobalScale(),n=0;n<t.length;n++)t[n].path||t[n].createPathProxy(),t[n].path.setScale(e[0],e[1])},buildPath:function(t,e){for(var n=e.paths||[],i=0;i<n.length;i++)n[i].buildPath(t,n[i].shape,!0)},afterBrush:function(){for(var t=this.shape.paths||[],e=0;e<t.length;e++)t[e].__dirtyPath=!1},getBoundingRect:function(){return this._updatePathDirty(),i.prototype.getBoundingRect.call(this)}})
t.exports=r},function(t,e,n){var i=n(264),r=n(300),a=function(t,e,n,i,a,o){this.x=null==t?0:t,this.y=null==e?0:e,this.x2=null==n?1:n,this.y2=null==i?0:i,this.type="linear",this.global=o||!1,r.call(this,a)}
a.prototype={constructor:a},i.inherits(a,r)
var o=a
t.exports=o},function(t,e,n){var i=n(264),r=n(300),a=function(t,e,n,i,a){this.x=null==t?.5:t,this.y=null==e?.5:e,this.r=null==n?.5:n,this.type="radial",this.global=a||!1,r.call(this,i)}
a.prototype={constructor:a},i.inherits(a,r)
var o=a
t.exports=o},function(t,e,n){var i=n(264).inherits,r=n(291),a=n(272)
function o(t){r.call(this,t),this._displayables=[],this._temporaryDisplayables=[],this._cursor=0,this.notClear=!0}o.prototype.incremental=!0,o.prototype.clearDisplaybles=function(){this._displayables=[],this._temporaryDisplayables=[],this._cursor=0,this.dirty(),this.notClear=!1},o.prototype.addDisplayable=function(t,e){e?this._temporaryDisplayables.push(t):this._displayables.push(t),this.dirty()},o.prototype.addDisplayables=function(t,e){e=e||!1
for(var n=0;n<t.length;n++)this.addDisplayable(t[n],e)},o.prototype.eachPendingDisplayable=function(t){for(var e=this._cursor;e<this._displayables.length;e++)t&&t(this._displayables[e])
for(e=0;e<this._temporaryDisplayables.length;e++)t&&t(this._temporaryDisplayables[e])},o.prototype.update=function(){this.updateTransform()
for(var t=this._cursor;t<this._displayables.length;t++)(e=this._displayables[t]).parent=this,e.update(),e.parent=null
for(t=0;t<this._temporaryDisplayables.length;t++){var e;(e=this._temporaryDisplayables[t]).parent=this,e.update(),e.parent=null}},o.prototype.brush=function(t,e){for(var n=this._cursor;n<this._displayables.length;n++)(i=this._displayables[n]).beforeBrush&&i.beforeBrush(t),i.brush(t,n===this._cursor?null:this._displayables[n-1]),i.afterBrush&&i.afterBrush(t)
for(this._cursor=n,n=0;n<this._temporaryDisplayables.length;n++){var i;(i=this._temporaryDisplayables[n]).beforeBrush&&i.beforeBrush(t),i.brush(t,0===n?null:this._temporaryDisplayables[n-1]),i.afterBrush&&i.afterBrush(t)}this._temporaryDisplayables=[],this.notClear=!0}
var s=[]
o.prototype.getBoundingRect=function(){if(!this._rect){for(var t=new a(1/0,1/0,-1/0,-1/0),e=0;e<this._displayables.length;e++){var n=this._displayables[e],i=n.getBoundingRect().clone()
n.needLocalTransform()&&i.applyTransform(n.getLocalTransform(s)),t.union(i)}this._rect=t}return this._rect},o.prototype.contain=function(t,e){var n=this.transformCoordToLocal(t,e)
if(this.getBoundingRect().contain(n[0],n[1]))for(var i=0;i<this._displayables.length;i++)if(this._displayables[i].contain(t,e))return!0
return!1},i(o,r)
var l=o
t.exports=l},function(t,e,n){var i=n(299)([["fill","color"],["stroke","borderColor"],["lineWidth","borderWidth"],["opacity"],["shadowBlur"],["shadowOffsetX"],["shadowOffsetY"],["shadowColor"],["textPosition"],["textAlign"]]),r={getItemStyle:function(t,e){var n=i(this,t,e),r=this.getBorderLineDash()
return r&&(n.lineDash=r),n},getBorderLineDash:function(){var t=this.get("borderType")
return"solid"===t||null==t?null:"dashed"===t?[5,5]:[1,1]}}
t.exports=r},function(t,e){t.exports={getBoxLayoutParams:function(){return{left:this.get("left"),top:this.get("top"),right:this.get("right"),bottom:this.get("bottom"),width:this.get("width"),height:this.get("height")}}}},function(t,e){var n=""
"undefined"!=typeof navigator&&(n=navigator.platform||"")
var i={color:["#c23531","#2f4554","#61a0a8","#d48265","#91c7ae","#749f83","#ca8622","#bda29a","#6e7074","#546570","#c4ccd3"],gradientColor:["#f6efa6","#d88273","#bf444c"],textStyle:{fontFamily:n.match(/^Win/)?"Microsoft YaHei":"sans-serif",fontSize:12,fontStyle:"normal",fontWeight:"normal"},blendMode:null,animation:"auto",animationDuration:1e3,animationDurationUpdate:300,animationEasing:"exponentialOut",animationEasingUpdate:"cubicOut",animationThreshold:2e3,progressiveThreshold:3e3,progressive:400,hoverLayerThreshold:3e3,useUTC:!1}
t.exports=i},function(t,e,n){var i=n(264),r=n(265),a=n(276),o=i.each,s=i.clone,l=i.map,u=i.merge,h=/^(min|max)?(.+)$/
function c(t){this._api=t,this._timelineOptions=[],this._mediaList=[],this._mediaDefault,this._currentMediaIndices=[],this._optionBackup,this._newBaseOption}function f(t,e,n){var r={width:e,height:n,aspectratio:e/n},a=!0
return i.each(t,function(t,e){var n=e.match(h)
if(n&&n[1]&&n[2]){var i=n[1],o=n[2].toLowerCase();(function(t,e,n){return"min"===i?t>=e:"max"===i?t<=e:t===e})(r[o],t)||(a=!1)}}),a}c.prototype={constructor:c,setOption:function(t,e){t&&i.each(r.normalizeToArray(t.series),function(t){t&&t.data&&i.isTypedArray(t.data)&&i.setAsPrimitive(t.data)}),t=s(t,!0)
var n=this._optionBackup,h=function(t,e,n){var r,a,s=[],l=[],u=t.timeline
if(t.baseOption&&(a=t.baseOption),(u||t.options)&&(a=a||{},s=(t.options||[]).slice()),t.media){a=a||{}
var h=t.media
o(h,function(t){t&&t.option&&(t.query?l.push(t):r||(r=t))})}return a||(a=t),a.timeline||(a.timeline=u),o([a].concat(s).concat(i.map(l,function(t){return t.option})),function(t){o(e,function(e){e(t,n)})}),{baseOption:a,timelineOptions:s,mediaDefault:r,mediaList:l}}.call(this,t,e,!n)
this._newBaseOption=h.baseOption,n?(function(t,e){o(e=e||{},function(e,n){if(null!=e){var i=t[n]
if(a.hasClass(n)){e=r.normalizeToArray(e),i=r.normalizeToArray(i)
var o=r.mappingToExists(i,e)
t[n]=l(o,function(t){return t.option&&t.exist?u(t.exist,t.option,!0):t.exist||t.option})}else t[n]=u(i,e,!0)}})}(n.baseOption,h.baseOption),h.timelineOptions.length&&(n.timelineOptions=h.timelineOptions),h.mediaList.length&&(n.mediaList=h.mediaList),h.mediaDefault&&(n.mediaDefault=h.mediaDefault)):this._optionBackup=h},mountOption:function(t){var e=this._optionBackup
return this._timelineOptions=l(e.timelineOptions,s),this._mediaList=l(e.mediaList,s),this._mediaDefault=s(e.mediaDefault),this._currentMediaIndices=[],s(t?e.baseOption:this._newBaseOption)},getTimelineOption:function(t){var e,n=this._timelineOptions
if(n.length){var i=t.getComponent("timeline")
i&&(e=s(n[i.getCurrentIndex()],!0))}return e},getMediaOption:function(t){var e=this._api.getWidth(),n=this._api.getHeight(),i=this._mediaList,r=this._mediaDefault,a=[],o=[]
if(!i.length&&!r)return o
for(var u=0,h=i.length;u<h;u++)f(i[u].query,e,n)&&a.push(u)
return!a.length&&r&&(a=[-1]),a.length&&!function(t,e){return t.join(",")===e.join(",")}(a,this._currentMediaIndices)&&(o=l(a,function(t){return s(-1===t?r.option:i[t].option)})),this._currentMediaIndices=a,o}}
var d=c
t.exports=d},function(t,e,n){var i=n(264),r=i.each,a=i.isArray,o=i.isObject,s=n(394),l=n(265).normalizeToArray
function u(t){r(h,function(e){e[0]in t&&!(e[1]in t)&&(t[e[1]]=t[e[0]])})}var h=[["x","left"],["y","top"],["x2","right"],["y2","bottom"]],c=["grid","geo","parallel","legend","toolbox","title","visualMap","dataZoom","timeline"]
t.exports=function(t,e){s(t,e),t.series=l(t.series),r(t.series,function(t){if(o(t)){var e=t.type
if("pie"!==e&&"gauge"!==e||null!=t.clockWise&&(t.clockwise=t.clockWise),"gauge"===e){var n=function(t,e){e=e.split(",")
for(var n=t,i=0;i<e.length&&null!=(n=n&&n[e[i]]);i++);return n}(t,"pointer.color")
null!=n&&function(t,e,n,i){e=e.split(",")
for(var r,a=t,o=0;o<e.length-1;o++)null==a[r=e[o]]&&(a[r]={}),a=a[r]
null==a[e[o]]&&(a[e[o]]=n)}(t,"itemStyle.normal.color",n)}u(t)}}),t.dataRange&&(t.visualMap=t.dataRange),r(c,function(e){var n=t[e]
n&&(a(n)||(n=[n]),r(n,function(t){u(t)}))})}},function(t,e,n){var i=n(264),r=n(265),a=i.each,o=i.isObject,s=["areaStyle","lineStyle","nodeStyle","linkStyle","chordStyle","label","labelLine"]
function l(t){var e=t&&t.itemStyle
if(e)for(var n=0,r=s.length;n<r;n++){var a=s[n],o=e.normal,l=e.emphasis
o&&o[a]&&(t[a]=t[a]||{},t[a].normal?i.merge(t[a].normal,o[a]):t[a].normal=o[a],o[a]=null),l&&l[a]&&(t[a]=t[a]||{},t[a].emphasis?i.merge(t[a].emphasis,l[a]):t[a].emphasis=l[a],l[a]=null)}}function u(t,e,n){if(t&&t[e]&&(t[e].normal||t[e].emphasis)){var r=t[e].normal,a=t[e].emphasis
r&&(n?(t[e].normal=t[e].emphasis=null,i.defaults(t[e],r)):t[e]=r),a&&(t.emphasis=t.emphasis||{},t.emphasis[e]=a)}}function h(t){u(t,"itemStyle"),u(t,"lineStyle"),u(t,"areaStyle"),u(t,"label"),u(t,"labelLine"),u(t,"upperLabel"),u(t,"edgeLabel")}function c(t,e){var n=o(t)&&t[e],i=o(n)&&n.textStyle
if(i)for(var a=0,s=r.TEXT_STYLE_OPTIONS.length;a<s;a++)e=r.TEXT_STYLE_OPTIONS[a],i.hasOwnProperty(e)&&(n[e]=i[e])}function f(t){t&&(h(t),c(t,"label"),t.emphasis&&c(t.emphasis,"label"))}function d(t){return i.isArray(t)?t:t?[t]:[]}function p(t){return(i.isArray(t)?t[0]:t)||{}}t.exports=function(t,e){a(d(t.series),function(t){o(t)&&function(t){if(o(t)){l(t),h(t),c(t,"label"),c(t,"upperLabel"),c(t,"edgeLabel"),t.emphasis&&(c(t.emphasis,"label"),c(t.emphasis,"upperLabel"),c(t.emphasis,"edgeLabel")),(n=t.markPoint)&&(l(n),f(n)),(r=t.markLine)&&(l(r),f(r))
var e=t.markArea
e&&f(e)
var n,r,a=t.data
if("graph"===t.type){a=a||t.nodes
var s=t.links||t.edges
if(s&&!i.isTypedArray(s))for(var d=0;d<s.length;d++)f(s[d])
i.each(t.categories,function(t){h(t)})}if(a&&!i.isTypedArray(a))for(d=0;d<a.length;d++)f(a[d])
if((n=t.markPoint)&&n.data){var p=n.data
for(d=0;d<p.length;d++)f(p[d])}if((r=t.markLine)&&r.data){var g=r.data
for(d=0;d<g.length;d++)i.isArray(g[d])?(f(g[d][0]),f(g[d][1])):f(g[d])}"gauge"===t.type?(c(t,"axisLabel"),c(t,"title"),c(t,"detail")):"treemap"===t.type?(u(t.breadcrumb,"itemStyle"),i.each(t.levels,function(t){h(t)})):"tree"===t.type&&h(t.leaves)}}(t)})
var n=["xAxis","yAxis","radiusAxis","angleAxis","singleAxis","parallelAxis","radar"]
e&&n.push("valueAxis","categoryAxis","logAxis","timeAxis"),a(n,function(e){a(d(t[e]),function(t){t&&(c(t,"axisLabel"),c(t.axisPointer,"label"))})}),a(d(t.parallel),function(t){var e=t&&t.parallelAxisDefault
c(e,"axisLabel"),c(e&&e.axisPointer,"label")}),a(d(t.calendar),function(t){u(t,"itemStyle"),c(t,"dayLabel"),c(t,"monthLabel"),c(t,"yearLabel")}),a(d(t.radar),function(t){c(t,"name")}),a(d(t.geo),function(t){o(t)&&(f(t),a(d(t.regions),function(t){f(t)}))}),a(d(t.timeline),function(t){f(t),u(t,"label"),u(t,"itemStyle"),u(t,"controlStyle",!0)
var e=t.data
i.isArray(e)&&i.each(e,function(t){i.isObject(t)&&(u(t,"label"),u(t,"itemStyle"))})}),a(d(t.toolbox),function(t){u(t,"iconStyle"),a(t.feature,function(t){u(t,"iconStyle")})}),c(p(t.axisPointer),"label"),c(p(t.tooltip).axisPointer,"label")}},function(t,e,n){var i=n(264),r=i.createHashMap,a=i.each
function o(t){a(t,function(e,n){var i=[],r=[NaN,NaN],a=[e.stackResultDimension,e.stackedOverDimension],o=e.data,s=e.isStackedByIndex,l=o.map(a,function(a,l,u){var h,c,f=o.get(e.stackedDimension,u)
if(isNaN(f))return r
s?c=o.getRawIndex(u):h=o.get(e.stackedByDimension,u)
for(var d=NaN,p=n-1;p>=0;p--){var g=t[p]
if(s||(c=g.data.rawIndexOf(g.stackedByDimension,h)),c>=0){var v=g.data.getByRawIndex(g.stackResultDimension,c)
if(f>=0&&v>0||f<=0&&v<0){f+=v,d=v
break}}}return i[0]=f,i[1]=d,i})
o.hostModel.setData(l),e.data=l})}t.exports=function(t){var e=r()
t.eachSeries(function(t){var n=t.get("stack")
if(n){var i=e.get(n)||e.set(n,[]),r=t.getData(),a={stackResultDimension:r.getCalculationInfo("stackResultDimension"),stackedOverDimension:r.getCalculationInfo("stackedOverDimension"),stackedDimension:r.getCalculationInfo("stackedDimension"),stackedByDimension:r.getCalculationInfo("stackedByDimension"),isStackedByIndex:r.getCalculationInfo("isStackedByIndex"),data:r,seriesModel:t}
if(!a.stackedDimension||!a.isStackedByIndex&&!a.stackedByDimension)return
i.length&&r.setCalculationInfo("stackedOnSeries",i[i.length-1].seriesModel),i.push(a)}}),e.each(o)}},function(t,e,n){var i=n(288).retrieveRawValue,r=n(273),a=r.getTooltipMarker,o=r.formatTpl,s=/\{@(.+?)\}/g,l={getDataParams:function(t,e){var n=this.getData(e),i=this.getRawValue(t,e),r=n.getRawIndex(t),o=n.getName(t),s=n.getRawDataItem(t),l=n.getItemVisual(t,"color")
return{componentType:this.mainType,componentSubType:this.subType,seriesType:"series"===this.mainType?this.subType:null,seriesIndex:this.seriesIndex,seriesId:this.id,seriesName:this.name,name:o,dataIndex:r,data:s,dataType:e,value:i,color:l,marker:a(l),$vars:["seriesName","name","value"]}},getFormattedLabel:function(t,e,n,r,a){e=e||"normal"
var l=this.getData(n),u=l.getItemModel(t),h=this.getDataParams(t,n)
null!=r&&h.value instanceof Array&&(h.value=h.value[r])
var c=u.get("normal"===e?[a||"label","formatter"]:[e,a||"label","formatter"])
return"function"==typeof c?(h.status=e,c(h)):"string"==typeof c?o(c,h).replace(s,function(e,n){var r=n.length
return"["===n.charAt(0)&&"]"===n.charAt(r-1)&&(n=+n.slice(1,r-1)),i(l,t,n)}):void 0},getRawValue:function(t,e){return i(this.getData(e),t)},formatTooltip:function(){}}
t.exports=l},function(t,e,n){var i=n(300),r={createOnAllSeries:!0,performRawSeries:!0,reset:function(t,e){var n=t.getData(),r=(t.visualColorAccessPath||"itemStyle.color").split("."),a=t.get(r)||t.getColorFromPalette(t.name,null,e.getSeriesCount())
if(n.setVisual("color",a),!e.isSeriesFiltered(t))return"function"!=typeof a||a instanceof i||n.each(function(e){n.setItemVisual(e,"color",a(t.getDataParams(e)))}),{dataEach:n.hasItemOption?function(t,e){var n=t.getItemModel(e).get(r,!0)
null!=n&&t.setItemVisual(e,"color",n)}:null}}}
t.exports=r},function(t,e,n){var i=n(264),r=n(399),a=n(288).retrieveRawValue
t.exports=function(t,e){var n=e.getModel("aria")
if(n.get("show"))if(n.get("description"))t.setAttribute("aria-label",n.get("description"))
else{var o=0
e.eachSeries(function(t,e){++o},this)
var s,l=n.get("data.maxCount")||10,u=n.get("series.maxCount")||10,h=Math.min(o,u)
if(!(o<1)){var c=function(){var t=e.getModel("title").option
return t&&t.length&&(t=t[0]),t&&t.text}()
s=c?d(p("general.withTitle"),{title:c}):p("general.withoutTitle")
var f=[]
s+=d(p(o>1?"series.multiple.prefix":"series.single.prefix"),{seriesCount:o}),e.eachSeries(function(t,e){if(e<h){var n,i=t.get("name"),s="series."+(o>1?"multiple":"single")+"."
n=d(n=p(i?s+"withName":s+"withoutName"),{seriesId:t.seriesIndex,seriesName:t.get("name"),seriesType:function(t){return r.series.typeNames[t]||"自定义图"}(t.subType)})
var u=t.getData()
window.data=u,u.count()>l?n+=d(p("data.partialData"),{displayCnt:l}):n+=p("data.allData")
for(var c=[],g=0;g<u.count();g++)if(g<l){var v=u.getName(g),m=a(u,g)
c.push(d(p(v?"data.withName":"data.withoutName"),{name:v,value:m}))}n+=c.join(p("data.separator.middle"))+p("data.separator.end"),f.push(n)}}),s+=f.join(p("series.multiple.separator.middle"))+p("series.multiple.separator.end"),t.setAttribute("aria-label",s)}}function d(t,e){if("string"!=typeof t)return t
var n=t
return i.each(e,function(t,e){n=n.replace(new RegExp("\\{\\s*"+e+"\\s*\\}","g"),t)}),n}function p(t){var e=n.get(t)
if(null==e){for(var i=t.split("."),a=r.aria,o=0;o<i.length;++o)a=a[i[o]]
return a}return e}}},function(t,e){t.exports={toolbox:{brush:{title:{rect:"矩形选择",polygon:"圈选",lineX:"横向选择",lineY:"纵向选择",keep:"保持选择",clear:"清除选择"}},dataView:{title:"数据视图",lang:["数据视图","关闭","刷新"]},dataZoom:{title:{zoom:"区域缩放",back:"区域缩放还原"}},magicType:{title:{line:"切换为折线图",bar:"切换为柱状图",stack:"切换为堆叠",tiled:"切换为平铺"}},restore:{title:"还原"},saveAsImage:{title:"保存为图片",lang:["右键另存为图片"]}},series:{typeNames:{pie:"饼图",bar:"柱状图",line:"折线图",scatter:"散点图",effectScatter:"涟漪散点图",radar:"雷达图",tree:"树图",treemap:"矩形树图",boxplot:"箱型图",candlestick:"K线图",k:"K线图",heatmap:"热力图",map:"地图",parallel:"平行坐标图",lines:"线图",graph:"关系图",sankey:"桑基图",funnel:"漏斗图",gauge:"仪表盘图",pictorialBar:"象形柱图",themeRiver:"主题河流图",sunburst:"旭日图"}},aria:{general:{withTitle:"这是一个关于“{title}”的图表。",withoutTitle:"这是一个图表，"},series:{single:{prefix:"",withName:"图表类型是{seriesType}，表示{seriesName}。",withoutName:"图表类型是{seriesType}。"},multiple:{prefix:"它由{seriesCount}个图表系列组成。",withName:"第{seriesId}个系列是一个表示{seriesName}的{seriesType}，",withoutName:"第{seriesId}个系列是一个{seriesType}，",separator:{middle:"；",end:"。"}}},data:{allData:"其数据是——",partialData:"其中，前{displayCnt}项是——",withName:"{name}的数据是{value}",withoutName:"{value}",separator:{middle:"，",end:""}}}}},function(t,e,n){var i=n(264),r=n(268),a=Math.PI
t.exports=function(t,e){e=e||{},i.defaults(e,{text:"loading",color:"#c23531",textColor:"#000",maskColor:"rgba(255, 255, 255, 0.8)",zlevel:0})
var n=new r.Rect({style:{fill:e.maskColor},zlevel:e.zlevel,z:1e4}),o=new r.Arc({shape:{startAngle:-a/2,endAngle:-a/2+.1,r:10},style:{stroke:e.color,lineCap:"round",lineWidth:5},zlevel:e.zlevel,z:10001}),s=new r.Rect({style:{fill:"none",text:e.text,textPosition:"right",textDistance:10,textFill:e.textColor},zlevel:e.zlevel,z:10001})
o.animateShape(!0).when(1e3,{endAngle:3*a/2}).start("circularInOut"),o.animateShape(!0).when(1e3,{startAngle:3*a/2}).delay(300).start("circularInOut")
var l=new r.Group
return l.add(o),l.add(s),l.add(n),l.resize=function(){var e=t.getWidth()/2,i=t.getHeight()/2
o.setShape({cx:e,cy:i})
var r=o.shape.r
s.setShape({x:e-r,y:i-r,width:2*r,height:2*r}),n.setShape({x:0,y:0,width:t.getWidth(),height:t.getHeight()})},l.resize(),l}},function(t,e,n){var i=n(264),r=i.each,a=i.map,o=(i.isArray,i.isFunction),s=i.createHashMap,l=i.noop,u=n(302).createTask,h=n(293).getUID,c=n(322),f=n(330),d=n(265).normalizeToArray
function p(t,e,n,i){this.ecInstance=t,this.api=e,this.unfinished,n=this._dataProcessorHandlers=n.slice(),i=this._visualHandlers=i.slice(),this._allHandlers=n.concat(i),this._stageTaskMap=s()}var g=p.prototype
function v(t,e,n,i,a){var o
function s(t,e){return t.setDirty&&(!t.dirtyMap||t.dirtyMap.get(e.__pipeline.id))}a=a||{},r(e,function(e,r){if(!a.visualType||a.visualType===e.visualType){var l=t._stageTaskMap.get(e.uid),u=l.seriesTaskMap,h=l.overallTask
if(h){var c,f=h.agentStubMap
f.each(function(t){s(a,t)&&(t.dirty(),c=!0)}),c&&h.dirty(),m(h,i)
var d=t.getPerformArgs(h,a.block)
f.each(function(t){t.perform(d)}),o|=h.perform(d)}else u&&u.each(function(r,l){s(a,r)&&r.dirty()
var u=t.getPerformArgs(r,a.block)
u.skip=!e.performRawSeries&&n.isSeriesFiltered(r.context.model),m(r,i),o|=r.perform(u)})}}),t.unfinished|=o}g.restoreData=function(t,e){t.restoreData(e),this._stageTaskMap.each(function(t){var e=t.overallTask
e&&e.dirty()})},g.getPerformArgs=function(t,e){if(t.__pipeline){var n=this._pipelineMap.get(t.__pipeline.id),i=n.context,r=!e&&n.progressiveEnabled&&(!i||i.progressiveRender)&&t.__idxInPipeline>n.blockIndex?n.step:null,a=i&&i.modDataCount
return{step:r,modBy:null!=a?Math.ceil(a/r):null,modDataCount:a}}},g.getPipeline=function(t){return this._pipelineMap.get(t)},g.updateStreamModes=function(t,e){var n=this._pipelineMap.get(t.uid),i=t.getData().count(),r=n.progressiveEnabled&&e.incrementalPrepareRender&&i>=n.threshold,a=t.get("large")&&i>=t.get("largeThreshold"),o="mod"===t.get("progressiveChunkMode")?i:null
t.pipelineContext=n.context={progressiveRender:r,modDataCount:o,large:a}},g.restorePipelines=function(t){var e=this,n=e._pipelineMap=s()
t.eachSeries(function(t){var i=t.getProgressive(),r=t.uid
n.set(r,{id:r,head:null,tail:null,threshold:t.getProgressiveThreshold(),progressiveEnabled:i&&!(t.preventIncremental&&t.preventIncremental()),blockIndex:-1,step:Math.round(i||700),count:0}),k(e,t,t.dataTask)})},g.prepareStageTasks=function(){var t=this._stageTaskMap,e=this.ecInstance.getModel(),n=this.api
r(this._allHandlers,function(i){var a=t.get(i.uid)||t.set(i.uid,[])
i.reset&&function(t,e,n,i,r){var a=n.seriesTaskMap||(n.seriesTaskMap=s()),o=e.seriesType,l=e.getTargetSeries
function h(n){var o=n.uid,s=a.get(o)||a.set(o,u({plan:b,reset:S,count:C}))
s.context={model:n,ecModel:i,api:r,useClearVisual:e.isVisual&&!e.isLayout,plan:e.plan,reset:e.reset,scheduler:t},k(t,n,s)}e.createOnAllSeries?i.eachRawSeries(h):o?i.eachRawSeriesByType(o,h):l&&l(i,r).each(h)
var c=t._pipelineMap
a.each(function(t,e){c.get(e)||(t.dispose(),a.removeKey(e))})}(this,i,a,e,n),i.overallReset&&function(t,e,n,i,a){var o=n.overallTask=n.overallTask||u({reset:_})
o.context={ecModel:i,api:a,overallReset:e.overallReset,scheduler:t}
var l=o.agentStubMap=o.agentStubMap||s(),h=e.seriesType,c=e.getTargetSeries,f=!0,d=e.modifyOutputEnd
function p(e){var n=e.uid,i=l.get(n)
i||(i=l.set(n,u({reset:y,onDirty:w})),o.dirty()),i.context={model:e,overallProgress:f,modifyOutputEnd:d},i.agent=o,i.__block=f,k(t,e,i)}h?i.eachRawSeriesByType(h,p):c?c(i,a).each(p):(f=!1,r(i.getSeries(),p))
var g=t._pipelineMap
l.each(function(t,e){g.get(e)||(t.dispose(),o.dirty(),l.removeKey(e))})}(this,i,a,e,n)},this)},g.prepareView=function(t,e,n,i){var r=t.renderTask,a=r.context
a.model=e,a.ecModel=n,a.api=i,r.__block=!t.incrementalPrepareRender,k(this,e,r)},g.performDataProcessorTasks=function(t,e){v(this,this._dataProcessorHandlers,t,e,{block:!0})},g.performVisualTasks=function(t,e,n){v(this,this._visualHandlers,t,e,n)},g.performSeriesTasks=function(t){var e
t.eachSeries(function(t){e|=t.dataTask.perform()}),this.unfinished|=e},g.plan=function(){this._pipelineMap.each(function(t){var e=t.tail
do{if(e.__block){t.blockIndex=e.__idxInPipeline
break}e=e.getUpstream()}while(e)})}
var m=g.updatePayload=function(t,e){"remain"!==e&&(t.context.payload=e)}
function _(t){t.overallReset(t.ecModel,t.api,t.payload)}function y(t,e){return t.overallProgress&&x}function x(){this.agent.dirty(),this.getDownstream().dirty()}function w(){this.agent&&this.agent.dirty()}function b(t){return t.plan&&t.plan(t.model,t.ecModel,t.api,t.payload)}function S(t){t.useClearVisual&&t.data.clearAllVisual()
var e=t.resetDefines=d(t.reset(t.model,t.ecModel,t.api,t.payload))
return e.length>1?a(e,function(t,e){return T(e)}):M}var M=T(0)
function T(t){return function(e,n){var i=n.data,r=n.resetDefines[t]
if(r&&r.dataEach)for(var a=e.start;a<e.end;a++)r.dataEach(i,a)
else r&&r.progress&&r.progress(e,i)}}function C(t){return t.data.count()}function k(t,e,n){var i=e.uid,r=t._pipelineMap.get(i)
!r.head&&(r.head=n),r.tail&&r.tail.pipe(n),r.tail=n,n.__idxInPipeline=r.count++,n.__pipeline=r}p.wrapStageHandler=function(t,e){return o(t)&&(t={overallReset:t,seriesType:function(t){D=null
try{t(I,A)}catch(t){}return D}(t)}),t.uid=h("stageHandler"),e&&(t.visualType=e),t}
var D,I={},A={}
function O(t,e){for(var n in e.prototype)t[n]=l}O(I,c),O(A,f),I.eachSeriesByType=I.eachRawSeriesByType=function(t){D=t},I.eachComponent=function(t){"series"===t.mainType&&t.subType&&(D=t.subType)}
var P=p
t.exports=P},function(t,e){var n=["#37A2DA","#32C5E9","#67E0E3","#9FE6B8","#FFDB5C","#ff9f7f","#fb7293","#E062AE","#E690D1","#e7bcf3","#9d96f5","#8378EA","#96BFFF"],i={color:n,colorLayer:[["#37A2DA","#ffd85c","#fd7b5f"],["#37A2DA","#67E0E3","#FFDB5C","#ff9f7f","#E062AE","#9d96f5"],["#37A2DA","#32C5E9","#9FE6B8","#FFDB5C","#ff9f7f","#fb7293","#e7bcf3","#8378EA","#96BFFF"],n]}
t.exports=i},function(t,e){var n=["#dd6b66","#759aa0","#e69d87","#8dc1a9","#ea7e53","#eedd78","#73a373","#73b9bc","#7289ab","#91ca8c","#f49f42"],i={color:n,backgroundColor:"#333",tooltip:{axisPointer:{lineStyle:{color:"#eee"},crossStyle:{color:"#eee"}}},legend:{textStyle:{color:"#eee"}},textStyle:{color:"#eee"},title:{textStyle:{color:"#eee"}},toolbox:{iconStyle:{normal:{borderColor:"#eee"}}},dataZoom:{textStyle:{color:"#eee"}},visualMap:{textStyle:{color:"#eee"}},timeline:{lineStyle:{color:"#eee"},itemStyle:{normal:{color:n[1]}},label:{normal:{textStyle:{color:"#eee"}}},controlStyle:{normal:{color:"#eee",borderColor:"#eee"}}},timeAxis:{axisLine:{lineStyle:{color:"#eee"}},axisTick:{lineStyle:{color:"#eee"}},axisLabel:{textStyle:{color:"#eee"}},splitLine:{lineStyle:{type:"dashed",color:"#aaa"}},splitArea:{areaStyle:{color:"#eee"}}},logAxis:{axisLine:{lineStyle:{color:"#eee"}},axisTick:{lineStyle:{color:"#eee"}},axisLabel:{textStyle:{color:"#eee"}},splitLine:{lineStyle:{type:"dashed",color:"#aaa"}},splitArea:{areaStyle:{color:"#eee"}}},valueAxis:{axisLine:{lineStyle:{color:"#eee"}},axisTick:{lineStyle:{color:"#eee"}},axisLabel:{textStyle:{color:"#eee"}},splitLine:{lineStyle:{type:"dashed",color:"#aaa"}},splitArea:{areaStyle:{color:"#eee"}}},categoryAxis:{axisLine:{lineStyle:{color:"#eee"}},axisTick:{lineStyle:{color:"#eee"}},axisLabel:{textStyle:{color:"#eee"}},splitLine:{lineStyle:{type:"dashed",color:"#aaa"}},splitArea:{areaStyle:{color:"#eee"}}},line:{symbol:"circle"},graph:{color:n},gauge:{title:{textStyle:{color:"#eee"}}},candlestick:{itemStyle:{normal:{color:"#FD1050",color0:"#0CF49B",borderColor:"#FD1050",borderColor0:"#0CF49B"}}}}
i.categoryAxis.splitLine.show=!1
var r=i
t.exports=r},function(t,e,n){var i=n(276),r=n(332),a=n(294).detectSourceFormat,o=n(287).SERIES_LAYOUT_BY_COLUMN
i.extend({type:"dataset",defaultOption:{seriesLayoutBy:o,sourceHeader:null,dimensions:null,source:null},optionUpdated:function(){a(this)}}),r.extend({type:"dataset"})},function(t,e,n){var i=n(308)
e.zrender=i
var r=n(277)
e.matrix=r
var a=n(267)
e.vector=a
var o=n(264),s=n(284)
e.color=s
var l=n(268)
e.graphic=l
var u=n(269)
e.number=u
var h=n(273)
e.format=h
var c=n(304)
c.throttle,e.throttle=c.throttle
var f=n(406)
e.helper=f
var d=n(412)
e.parseGeoJSON=d
var p=n(335)
e.List=p
var g=n(274)
e.Model=g
var v=n(341)
e.Axis=v
var m=n(270)
e.env=m
var _=d,y={}
o.each(["map","each","filter","indexOf","inherits","reduce","filter","bind","curry","isArray","isString","isObject","isFunction","extend","defaults","clone","merge"],function(t){y[t]=o[t]}),e.parseGeoJson=_,e.util=y},function(t,e,n){var i=n(264),r=n(334),a=n(282),o=n(340),s=n(274),l=n(280)
l.getLayoutRect,e.getLayoutRect=l.getLayoutRect
var u=n(281),h=u.enableDataStack,c=u.isDimensionStacked,f=u.getStackedDimension,d=n(337)
e.completeDimensions=d
var p=n(336)
e.createDimensions=p
var g=n(307)
e.createSymbol=g.createSymbol
var v={isDimensionStacked:c,enableDataStack:h,getStackedDimension:f}
e.createList=function(t){return r(t.getSource(),t)},e.dataStack=v,e.createScale=function(t,e){var n=e
s.isInstance(e)||(n=new s(e),i.mixin(n,o))
var r=a.createScaleByModel(n)
return r.setExtent(t[0],t[1]),a.niceScaleExtent(r,n),r},e.mixinAxisModelCommonMethods=function(t){i.mixin(t,o)}},function(t,e){function n(t){return t}function i(t,e,i,r,a){this._old=t,this._new=e,this._oldKeyGetter=i||n,this._newKeyGetter=r||n,this.context=a}function r(t,e,n,i,r){for(var a=0;a<t.length;a++){var o="_ec_"+r[i](t[a],a),s=e[o]
null==s?(n.push(o),e[o]=a):(s.length||(e[o]=s=[s]),s.push(a))}}i.prototype={constructor:i,add:function(t){return this._add=t,this},update:function(t){return this._update=t,this},remove:function(t){return this._remove=t,this},execute:function(){var t=this._old,e=this._new,n={},i=[],a=[]
for(r(t,{},i,"_oldKeyGetter",this),r(e,n,a,"_newKeyGetter",this),o=0;o<t.length;o++)null!=(l=n[s=i[o]])?((h=l.length)?(1===h&&(n[s]=null),l=l.unshift()):n[s]=null,this._update&&this._update(l,o)):this._remove&&this._remove(o)
for(var o=0;o<a.length;o++){var s=a[o]
if(n.hasOwnProperty(s)){var l
if(null==(l=n[s]))continue
if(l.length)for(var u=0,h=l.length;u<h;u++)this._add&&this._add(l[u])
else this._add&&this._add(l)}}}}
var a=i
t.exports=a},function(t,e,n){var i=n(264),r=n(295),a=n(338),o=r.prototype,s=r.extend({type:"ordinal",init:function(t,e){t&&!i.isArray(t)||(t=new a({categories:t})),this._ordinalMeta=t,this._extent=e||[0,t.categories.length-1]},parse:function(t){return"string"==typeof t?this._ordinalMeta.getOrdinal(t):Math.round(t)},contain:function(t){return t=this.parse(t),o.contain.call(this,t)&&null!=this._ordinalMeta.categories[t]},normalize:function(t){return o.normalize.call(this,this.parse(t))},scale:function(t){return Math.round(o.scale.call(this,t))},getTicks:function(){for(var t=[],e=this._extent,n=e[0];n<=e[1];)t.push(n),n++
return t},getLabel:function(t){if(!this.isBlank())return this._ordinalMeta.categories[t]},count:function(){return this._extent[1]-this._extent[0]+1},unionExtentFromData:function(t,e){this.unionExtent(t.getApproximateExtent(e))},getOrdinalMeta:function(){return this._ordinalMeta},niceTicks:i.noop,niceExtent:i.noop})
s.create=function(){return new s}
var l=s
t.exports=l},function(t,e,n){var i=n(264),r=n(269).parsePercent,a=n(281).isDimensionStacked,o=n(303),s="__ec_stack_",l="undefined"!=typeof Float32Array?Float32Array:Array
function u(t){return t.get("stack")||s+t.seriesIndex}function h(t){return t.dim+t.index}function c(t,e){var n=[]
return e.eachSeriesByType(t,function(t){v(t)&&!m(t)&&n.push(t)}),n}function f(t){var e=[]
return i.each(t,function(t){var n=t.getData(),i=t.coordinateSystem.getBaseAxis(),a=i.getExtent(),o="category"===i.type?i.getBandWidth():Math.abs(a[1]-a[0])/n.count(),s=r(t.get("barWidth"),o),l=r(t.get("barMaxWidth"),o),c=t.get("barGap"),f=t.get("barCategoryGap")
e.push({bandWidth:o,barWidth:s,barMaxWidth:l,barGap:c,barCategoryGap:f,axisKey:h(i),stackId:u(t)})}),d(e)}function d(t){var e={}
i.each(t,function(t,n){var i=t.axisKey,r=t.bandWidth,a=e[i]||{bandWidth:r,remainedWidth:r,autoWidthCount:0,categoryGap:"20%",gap:"30%",stacks:{}},o=a.stacks
e[i]=a
var s=t.stackId
o[s]||a.autoWidthCount++,o[s]=o[s]||{width:0,maxWidth:0}
var l=t.barWidth
l&&!o[s].width&&(o[s].width=l,l=Math.min(a.remainedWidth,l),a.remainedWidth-=l)
var u=t.barMaxWidth
u&&(o[s].maxWidth=u)
var h=t.barGap
null!=h&&(a.gap=h)
var c=t.barCategoryGap
null!=c&&(a.categoryGap=c)})
var n={}
return i.each(e,function(t,e){n[e]={}
var a=t.stacks,o=t.bandWidth,s=r(t.categoryGap,o),l=r(t.gap,1),u=t.remainedWidth,h=t.autoWidthCount,c=(u-s)/(h+(h-1)*l)
c=Math.max(c,0),i.each(a,function(t,e){var n=t.maxWidth
n&&n<c&&(n=Math.min(n,u),t.width&&(n=Math.min(n,t.width)),u-=n,t.width=n,h--)}),c=(u-s)/(h+(h-1)*l),c=Math.max(c,0)
var f,d=0
i.each(a,function(t,e){t.width||(t.width=c),f=t,d+=t.width*(1+l)}),f&&(d-=f.width*l)
var p=-d/2
i.each(a,function(t,i){n[e][i]=n[e][i]||{offset:p,width:t.width},p+=t.width*(1+l)})}),n}function p(t,e,n){if(t&&e){var i=t[h(e)]
return null!=i&&null!=n&&(i=i[u(n)]),i}}var g={seriesType:"bar",plan:o(),reset:function(t){if(v(t)&&m(t)){var e=t.getData(),n=t.coordinateSystem,i=n.getBaseAxis(),r=n.getOtherAxis(i),a=e.mapDimension(r.dim),o=e.mapDimension(i.dim),s=r.isHorizontal(),u=s?0:1,h=p(f([t]),i,t).width
return h>.5||(h=.5),{progress:function(t,e){for(var c,f=new l(2*t.count),d=[],p=[],g=0;null!=(c=t.next());)p[u]=e.get(a,c),p[1-u]=e.get(o,c),d=n.dataToPoint(p,null,d),f[g++]=d[0],f[g++]=d[1]
e.setLayout({largePoints:f,barWidth:h,valueAxisStart:_(i,r,!1),valueAxisHorizontal:s})}}}}}
function v(t){return t.coordinateSystem&&"cartesian2d"===t.coordinateSystem.type}function m(t){return t.pipelineContext&&t.pipelineContext.large}function _(t,e,n){return i.indexOf(t.getAxesOnZeroOf(),e)>=0||n?e.toGlobalCoord(e.dataToCoord(0)):e.getGlobalExtent()[0]}e.getLayoutOnAxis=function(t){var e=[],n=t.axis
if("category"===n.type){for(var r=n.getBandWidth(),a=0;a<t.count;a++)e.push(i.defaults({bandWidth:r,axisKey:"axis0",stackId:s+a},t))
var o=d(e),l=[]
for(a=0;a<t.count;a++){var u=o.axis0[s+a]
u.offsetCenter=u.offset+u.width/2,l.push(u)}return l}},e.prepareLayoutBarSeries=c,e.makeColumnLayout=f,e.retrieveColumnLayout=p,e.layout=function(t,e){var n=c(t,e),r=f(n),o={},s={}
i.each(n,function(t){var e=t.getData(),n=t.coordinateSystem,i=n.getBaseAxis(),l=u(t),c=r[h(i)][l],f=c.offset,d=c.width,p=n.getOtherAxis(i),g=t.get("barMinHeight")||0
o[l]=o[l]||[],s[l]=s[l]||[],e.setLayout({offset:f,size:d})
for(var v=e.mapDimension(p.dim),m=e.mapDimension(i.dim),y=a(e,v),x=p.isHorizontal(),w=_(i,p,y),b=0,S=e.count();b<S;b++){var M=e.get(v,b),T=e.get(m,b)
if(!isNaN(M)){var C,k,D,I,A,O=M>=0?"p":"n",P=w
y&&(o[l][T]||(o[l][T]={p:w,n:w}),P=o[l][T][O]),x?(C=P,k=(A=n.dataToPoint([M,T]))[1]+f,D=A[0]-w,I=d,Math.abs(D)<g&&(D=(D<0?-1:1)*g),y&&(o[l][T][O]+=D)):(C=(A=n.dataToPoint([T,M]))[0]+f,k=P,D=d,I=A[1]-w,Math.abs(I)<g&&(I=(I<=0?-1:1)*g),y&&(o[l][T][O]+=I)),e.setItemLayout(b,{x:C,y:k,width:D,height:I})}}},this)},e.largeLayout=g},function(t,e,n){var i=n(264),r=n(269),a=n(273),o=n(339),s=n(306),l=s.prototype,u=Math.ceil,h=Math.floor,c=s.extend({type:"time",getLabel:function(t){var e=this._stepLvl,n=new Date(t)
return a.formatTime(e[0],n,this.getSetting("useUTC"))},niceExtent:function(t){var e=this._extent
if(e[0]===e[1]&&(e[0]-=864e5,e[1]+=864e5),e[1]===-1/0&&e[0]===1/0){var n=new Date
e[1]=+new Date(n.getFullYear(),n.getMonth(),n.getDate()),e[0]=e[1]-864e5}this.niceTicks(t.splitNumber,t.minInterval,t.maxInterval)
var i=this._interval
t.fixMin||(e[0]=r.round(h(e[0]/i)*i)),t.fixMax||(e[1]=r.round(u(e[1]/i)*i))},niceTicks:function(t,e,n){t=t||10
var i=this._extent,a=i[1]-i[0],s=a/t
null!=e&&s<e&&(s=e),null!=n&&s>n&&(s=n)
var l=f.length,c=function(t,e,n,i){for(;n<i;){var r=n+i>>>1
t[r][1]<e?n=r+1:i=r}return n}(f,s,0,l),d=f[Math.min(c,l-1)],p=d[1]
if("year"===d[0]){var g=a/p
p*=r.nice(g/t,!0)}var v=this.getSetting("useUTC")?0:60*new Date(+i[0]||+i[1]).getTimezoneOffset()*1e3,m=[Math.round(u((i[0]-v)/p)*p+v),Math.round(h((i[1]-v)/p)*p+v)]
o.fixExtent(m,i),this._stepLvl=d,this._interval=p,this._niceExtent=m},parse:function(t){return+r.parseDate(t)}})
i.each(["contain","normalize"],function(t){c.prototype[t]=function(e){return l[t].call(this,this.parse(e))}})
var f=[["hh:mm:ss",1e3],["hh:mm:ss",5e3],["hh:mm:ss",1e4],["hh:mm:ss",15e3],["hh:mm:ss",3e4],["hh:mm\nMM-dd",6e4],["hh:mm\nMM-dd",3e5],["hh:mm\nMM-dd",6e5],["hh:mm\nMM-dd",9e5],["hh:mm\nMM-dd",18e5],["hh:mm\nMM-dd",36e5],["hh:mm\nMM-dd",72e5],["hh:mm\nMM-dd",216e5],["hh:mm\nMM-dd",432e5],["MM-dd\nyyyy",864e5],["MM-dd\nyyyy",1728e5],["MM-dd\nyyyy",2592e5],["MM-dd\nyyyy",3456e5],["MM-dd\nyyyy",432e6],["MM-dd\nyyyy",5184e5],["week",6048e5],["MM-dd\nyyyy",864e6],["week",12096e5],["week",18144e5],["month",26784e5],["week",36288e5],["month",53568e5],["week",36288e5],["quarter",8208e6],["month",107136e5],["month",13392e6],["half-year",16416e6],["month",214272e5],["month",26784e6],["year",32832e6]]
c.create=function(t){return new c({useUTC:t.ecModel.get("useUTC")})}
var d=c
t.exports=d},function(t,e,n){var i=n(264),r=n(295),a=n(269),o=n(306),s=r.prototype,l=o.prototype,u=a.getPrecisionSafe,h=a.round,c=Math.floor,f=Math.ceil,d=Math.pow,p=Math.log,g=r.extend({type:"log",base:10,$constructor:function(){r.apply(this,arguments),this._originalScale=new o},getTicks:function(){var t=this._originalScale,e=this._extent,n=t.getExtent()
return i.map(l.getTicks.call(this),function(i){var r=a.round(d(this.base,i))
return r=i===e[0]&&t.__fixMin?v(r,n[0]):r,i===e[1]&&t.__fixMax?v(r,n[1]):r},this)},getLabel:l.getLabel,scale:function(t){return t=s.scale.call(this,t),d(this.base,t)},setExtent:function(t,e){var n=this.base
t=p(t)/p(n),e=p(e)/p(n),l.setExtent.call(this,t,e)},getExtent:function(){var t=this.base,e=s.getExtent.call(this)
e[0]=d(t,e[0]),e[1]=d(t,e[1])
var n=this._originalScale,i=n.getExtent()
return n.__fixMin&&(e[0]=v(e[0],i[0])),n.__fixMax&&(e[1]=v(e[1],i[1])),e},unionExtent:function(t){this._originalScale.unionExtent(t)
var e=this.base
t[0]=p(t[0])/p(e),t[1]=p(t[1])/p(e),s.unionExtent.call(this,t)},unionExtentFromData:function(t,e){this.unionExtent(t.getApproximateExtent(e))},niceTicks:function(t){t=t||10
var e=this._extent,n=e[1]-e[0]
if(!(n===1/0||n<=0)){var i=a.quantity(n)
for(t/n*i<=.5&&(i*=10);!isNaN(i)&&Math.abs(i)<1&&Math.abs(i)>0;)i*=10
var r=[a.round(f(e[0]/i)*i),a.round(c(e[1]/i)*i)]
this._interval=i,this._niceExtent=r}},niceExtent:function(t){l.niceExtent.call(this,t)
var e=this._originalScale
e.__fixMin=t.fixMin,e.__fixMax=t.fixMax}})
function v(t,e){return h(t,u(e))}i.each(["contain","normalize"],function(t){g.prototype[t]=function(e){return e=p(e)/p(this.base),s[t].call(this,e)}}),g.create=function(){return new g}
var m=g
t.exports=m},function(t,e,n){var i=n(264),r=n(413)
function a(t,e,n){for(var i=[],r=e[0],a=e[1],o=0;o<t.length;o+=2){var s=t.charCodeAt(o)-64,l=t.charCodeAt(o+1)-64
s=s>>1^-(1&s),l=l>>1^-(1&l),r=s+=r,a=l+=a,i.push([s/n,l/n])}return i}t.exports=function(t){return function(t){if(!t.UTF8Encoding)return t
var e=t.UTF8Scale
null==e&&(e=1024)
for(var n=t.features,i=0;i<n.length;i++)for(var r=n[i].geometry,o=r.coordinates,s=r.encodeOffsets,l=0;l<o.length;l++){var u=o[l]
if("Polygon"===r.type)o[l]=a(u,s[l],e)
else if("MultiPolygon"===r.type)for(var h=0;h<u.length;h++){var c=u[h]
u[h]=a(c,s[l][h],e)}}t.UTF8Encoding=!1}(t),i.map(i.filter(t.features,function(t){return t.geometry&&t.properties&&t.geometry.coordinates.length>0}),function(t){var e=t.properties,n=t.geometry,a=n.coordinates,o=[]
"Polygon"===n.type&&o.push({type:"polygon",exterior:a[0],interiors:a.slice(1)}),"MultiPolygon"===n.type&&i.each(a,function(t){t[0]&&o.push({type:"polygon",exterior:t[0],interiors:t.slice(1)})})
var s=new r(e.name,o,e.cp)
return s.properties=e,s})}},function(t,e,n){var i=n(272),r=n(323),a=n(267),o=n(414)
function s(t,e,n){if(this.name=t,this.geometries=e,n)n=[n[0],n[1]]
else{var i=this.getBoundingRect()
n=[i.x+i.width/2,i.y+i.height/2]}this.center=n}s.prototype={constructor:s,properties:null,getBoundingRect:function(){var t=this._rect
if(t)return t
for(var e=Number.MAX_VALUE,n=[e,e],o=[-e,-e],s=[],l=[],u=this.geometries,h=0;h<u.length;h++)if("polygon"===u[h].type){var c=u[h].exterior
r.fromPoints(c,s,l),a.min(n,n,s),a.max(o,o,l)}return 0===h&&(n[0]=n[1]=o[0]=o[1]=0),this._rect=new i(n[0],n[1],o[0]-n[0],o[1]-n[1])},contain:function(t){var e=this.getBoundingRect(),n=this.geometries
if(!e.contain(t[0],t[1]))return!1
t:for(var i=0,r=n.length;i<r;i++)if("polygon"===n[i].type){var a=n[i].exterior,s=n[i].interiors
if(o.contain(a,t[0],t[1])){for(var l=0;l<(s?s.length:0);l++)if(o.contain(s[l]))continue t
return!0}}return!1},transformTo:function(t,e,n,r){var o=this.getBoundingRect(),s=o.width/o.height
n?r||(r=n/s):n=s*r
for(var l=new i(t,e,n,r),u=o.calculateTransform(l),h=this.geometries,c=0;c<h.length;c++)if("polygon"===h[c].type){for(var f=h[c].exterior,d=h[c].interiors,p=0;p<f.length;p++)a.applyTransform(f[p],f[p],u)
for(var g=0;g<(d?d.length:0);g++)for(p=0;p<d[g].length;p++)a.applyTransform(d[g][p],d[g][p],u)}(o=this._rect).copy(l),this.center=[o.x+o.width/2,o.y+o.height/2]}}
var l=s
t.exports=l},function(t,e,n){var i=n(325),r=1e-8
function a(t,e){return Math.abs(t-e)<r}e.contain=function(t,e,n){var r=0,o=t[0]
if(!o)return!1
for(var s=1;s<t.length;s++){var l=t[s]
r+=i(o[0],o[1],l[0],l[1],e,n),o=l}var u=t[0]
return a(o[0],u[0])&&a(o[1],u[1])||(r+=i(o[0],o[1],u[0],u[1],e,n)),0!==r}},function(t,e,n){var i=n(264),r=n(278),a=n(265).makeInner,o=n(282).makeLabelFormatter,s=a()
function l(t,e){var n,r=u(t,"labels"),a=p(e)
return h(r,a)||c(r,a,{labels:i.isFunction(a)?d(t,a):f(t,n="auto"===a?function(t){var e=s(t).autoInterval
return null!=e?e:s(t).autoInterval=t.calculateCategoryInterval()}(t):a),labelCategoryInterval:n})}function u(t,e){return s(t)[e]||(s(t)[e]=[])}function h(t,e){for(var n=0;n<t.length;n++)if(t[n].key===e)return t[n].value}function c(t,e,n){return t.push({key:e,value:n}),n}function f(t,e,n){var i=o(t),r=t.scale,a=r.getExtent(),s=t.getLabelModel(),l=[],u=Math.max((e||0)+1,1),h=a[0],c=r.count()
0!==h&&u>1&&c/u>2&&(h=Math.round(Math.ceil(h/u)*u))
var f=s.get("showMinLabel"),d=s.get("showMaxLabel")
f&&h!==a[0]&&g(a[0])
for(var p=h;p<=a[1];p+=u)g(p)
function g(t){l.push(n?t:{formattedLabel:i(t),rawLabel:r.getLabel(t),tickValue:t})}return d&&p!==a[1]&&g(a[1]),l}function d(t,e,n){var r=t.scale,a=o(t),s=[]
return i.each(r.getTicks(),function(t){var i=r.getLabel(t)
e(t,i)&&s.push(n?t:{formattedLabel:a(t),rawLabel:i,tickValue:t})}),s}function p(t){var e=t.get("interval")
return null==e?"auto":e}e.createAxisLabels=function(t){return"category"===t.type?function(t){var e=t.getLabelModel(),n=l(t,e)
return!e.get("show")||t.scale.isBlank()?{labels:[],labelCategoryInterval:n.labelCategoryInterval}:n}(t):function(t){var e=t.scale.getTicks(),n=o(t)
return{labels:i.map(e,function(e,i){return{formattedLabel:n(e,i),rawLabel:t.scale.getLabel(e),tickValue:e}})}}(t)},e.createAxisTicks=function(t,e){return"category"===t.type?function(t,e){var n,r,a=u(t,"ticks"),o=p(e),s=h(a,o)
if(s)return s
if(e.get("show")&&!t.scale.isBlank()||(n=[]),i.isFunction(o))n=d(t,o,!0)
else if("auto"===o){var g=l(t,t.getLabelModel())
r=g.labelCategoryInterval,n=i.map(g.labels,function(t){return t.tickValue})}else n=f(t,r=o,!0)
return c(a,o,{ticks:n,tickCategoryInterval:r})}(t,e):{ticks:t.scale.getTicks()}},e.calculateCategoryInterval=function(t){var e=function(t){var e=t.getLabelModel()
return{axisRotate:t.getRotate?t.getRotate():t.isHorizontal&&!t.isHorizontal()?90:0,labelRotate:e.get("rotate")||0,font:e.getFont()}}(t),n=o(t),i=(e.axisRotate-e.labelRotate)/180*Math.PI,a=t.scale,l=a.getExtent(),u=a.count()
if(l[1]-l[0]<1)return 0
var h=1
u>40&&(h=Math.max(1,Math.floor(u/40)))
for(var c=l[0],f=t.dataToCoord(c+1)-t.dataToCoord(c),d=Math.abs(f*Math.cos(i)),p=Math.abs(f*Math.sin(i)),g=0,v=0;c<=l[1];c+=h){var m,_,y=r.getBoundingRect(n(c),e.font,"center","top")
m=1.3*y.width,_=1.3*y.height,g=Math.max(g,m,7),v=Math.max(v,_,7)}var x=g/d,w=v/p
isNaN(x)&&(x=1/0),isNaN(w)&&(w=1/0)
var b=Math.max(0,Math.floor(Math.min(x,w))),S=s(t.model),M=S.lastAutoInterval,T=S.lastTickCount
return null!=M&&null!=T&&Math.abs(M-b)<=1&&Math.abs(T-u)<=1&&M>b?b=M:(S.lastTickCount=u,S.lastAutoInterval=b),b}}])])

//# sourceMappingURL=chunk.1d07b8b0facb0b41cb55-5b86b7a1b6c976ca7ad1a559ad463b7d.map