"use strict";(self["webpackChunkclient"]=self["webpackChunkclient"]||[]).push([[9431],{81885:function(e,t,i){i.d(t,{y:function(){return V}});var s=i(36663),r=i(33511),n=i(58811),a=i(70375),h=i(76868),o=i(81977),l=(i(7753),i(39994),i(7283),i(40266)),p=i(10530),d=i(72285);i(13802),i(33156);let u=class extends d.wq{};u=(0,s._)([(0,l.j)("esri.views.layers.support.ClipArea")],u);const c=u;var g;let y=g=class extends c{constructor(){super(...arguments),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new g({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}get version(){return(this._get("version")||0)+1}};(0,s._)([(0,o.Cb)({type:[Number,String],json:{write:!0}})],y.prototype,"left",void 0),(0,s._)([(0,o.Cb)({type:[Number,String],json:{write:!0}})],y.prototype,"right",void 0),(0,s._)([(0,o.Cb)({type:[Number,String],json:{write:!0}})],y.prototype,"top",void 0),(0,s._)([(0,o.Cb)({type:[Number,String],json:{write:!0}})],y.prototype,"bottom",void 0),(0,s._)([(0,o.Cb)({readOnly:!0})],y.prototype,"version",null),y=g=(0,s._)([(0,l.j)("esri.views.layers.support.ClipRect")],y);const _=y;i(91957);var v,w=i(20031),f=i(53736),b=i(91772),m=i(89542);const C={base:w.Z,key:"type",typeMap:{extent:b.Z,polygon:m.Z}};let R=v=class extends c{constructor(){super(...arguments),this.type="geometry",this.geometry=null}get version(){return(this._get("version")||0)+1}clone(){return new v({geometry:this.geometry.clone()})}};(0,s._)([(0,o.Cb)({types:C,json:{read:f.im,write:!0}})],R.prototype,"geometry",void 0),(0,s._)([(0,o.Cb)({readOnly:!0})],R.prototype,"version",null),R=v=(0,s._)([(0,l.j)("esri.views.layers.support.Geometry")],R);const k=R;let S=class extends c{constructor(){super(...arguments),this.type="path",this.path=[]}get version(){return(this._get("version")||0)+1}};(0,s._)([(0,o.Cb)({type:[[[Number]]],json:{write:!0}})],S.prototype,"path",void 0),(0,s._)([(0,o.Cb)({readOnly:!0})],S.prototype,"version",null),S=(0,s._)([(0,l.j)("esri.views.layers.support.Path")],S);const I=S,M=r.Z.ofType({key:"type",base:c,typeMap:{rect:_,path:I,geometry:k}}),V=e=>{let t=class extends e{constructor(){super(...arguments),this.attached=!1,this.clips=new M,this.lastUpdateId=-1,this.moving=!1,this.updateRequested=!1}initialize(){const e=this.view?.spatialReferenceLocked??!0,t=this.view?.spatialReference;t&&e&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new a.Z("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new p.W),this.container.fadeTransitionEnabled=!0,this.container.opacity=0,this.container.clips=this.clips,this.handles.add([(0,h.YP)((()=>this.suspended),(e=>{this.container&&(this.container.visible=!e),this.view&&!e&&this.updateRequested&&this.view.requestUpdate()}),h.tX),(0,h.YP)((()=>this.layer?.opacity??1),(e=>{this.container&&(this.container.opacity=e)}),h.tX),(0,h.YP)((()=>this.layer&&"blendMode"in this.layer?this.layer.blendMode:"normal"),(e=>{this.container&&(this.container.blendMode=e)}),h.tX),(0,h.YP)((()=>this.layer&&"effect"in this.layer?this.layer.effect:null),(e=>{this.container&&(this.container.effect=e)}),h.tX),(0,h.on)((()=>this.clips),"change",(()=>{this.container&&(this.container.clips=this.clips)}))]),this.view?.whenLayerView?this.view.whenLayerView(this.layer).then((e=>{e===this&&this.processAttach()}),(()=>{})):this.when().then((()=>{this.processAttach()}),(()=>{})))}destroy(){this.processDetach(),this.updateRequested=!1}get spatialReferenceSupported(){const e=this.view?.spatialReference;return null==e||this.supportsSpatialReference(e)}get updating(){return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!!this.updatingHandles?.updating)}get visibleAtCurrentScale(){return this.isVisibleAtScale(this.view.scale)}processAttach(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate())}processDetach(){this.attached&&(this.attached=!1,this.detach(),this.updateRequested=!1)}isVisibleAtScale(e){const t=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;if(!t)return!0;const{minScale:i,maxScale:s}=t;return(0===i||e<=i)&&(0===s||e>=s)}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())}processUpdate(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1}hitTest(e,t){return Promise.resolve(null)}supportsSpatialReference(e){return!0}canResume(){return!!this.spatialReferenceSupported&&!!super.canResume()&&this.visibleAtCurrentScale}getSuspendInfo(){const e=super.getSuspendInfo(),t=!this.spatialReferenceSupported,i=this.visibleAtCurrentScale;return t&&(e.spatialReferenceNotSupported=t),i&&(e.outsideScaleRange=i),e}};return(0,s._)([(0,o.Cb)()],t.prototype,"attached",void 0),(0,s._)([(0,o.Cb)({type:M,set(e){const t=(0,n.Z)(e,this._get("clips"),M);this._set("clips",t)}})],t.prototype,"clips",void 0),(0,s._)([(0,o.Cb)()],t.prototype,"container",void 0),(0,s._)([(0,o.Cb)()],t.prototype,"moving",void 0),(0,s._)([(0,o.Cb)({readOnly:!0})],t.prototype,"spatialReferenceSupported",null),(0,s._)([(0,o.Cb)({readOnly:!0})],t.prototype,"updateParameters",void 0),(0,s._)([(0,o.Cb)()],t.prototype,"updateRequested",void 0),(0,s._)([(0,o.Cb)()],t.prototype,"updating",null),(0,s._)([(0,o.Cb)()],t.prototype,"view",void 0),(0,s._)([(0,o.Cb)({readOnly:!0})],t.prototype,"visibleAtCurrentScale",null),t=(0,s._)([(0,l.j)("esri.views.2d.layers.LayerView2D")],t),t}},79431:function(e,t,i){i.r(t),i.d(t,{default:function(){return V}});var s=i(36663),r=i(33511),n=i(81739),a=i(61681),h=i(76868),o=i(81977),l=(i(7753),i(39994),i(7283),i(40266)),p=i(51801),d=i(45340),u=i(6199),c=i(52182),g=i(79259),y=i(92524),_=i(76045),v=i(81885),w=i(95599),f=i(9332),b=i(26216);const m=Object.freeze({remove(){},pause(){},resume(){}}),C=["route-info","direction-line","direction-point","polygon-barrier","polyline-barrier","point-barrier","stop"],R={graphic:null,property:null,oldValue:null,newValue:null};function k(e){return e instanceof p.Z||e instanceof d.Z||e instanceof u.Z||e instanceof c.Z||e instanceof g.Z||e instanceof y.Z||e instanceof _.Z}function S(e){return r.Z.isCollection(e)&&e.length&&k(e.getItemAt(0))}function I(e){return Array.isArray(e)&&e.length&&k(e[0])}let M=class extends((0,v.y)(b.Z)){constructor(){super(...arguments),this._graphics=new r.Z,this._highlightIds=new Map,this._networkFeatureMap=new Map,this._networkGraphicMap=new Map}get _routeItems(){return new n.Z({getCollections:()=>[(0,a.pC)(this.layer.routeInfo)?new r.Z([this.layer.routeInfo]):null,this.layer.directionLines,this.layer.directionPoints,this.layer.polygonBarriers,this.layer.polylineBarriers,this.layer.pointBarriers,this.layer.stops]})}initialize(){this.updatingHandles.addOnCollectionChange((()=>this._routeItems),(e=>this._routeItemsChanged(e)),h.nn)}destroy(){this.handles.removeAll(),this.updatingHandles.removeAll(),this._networkFeatureMap.clear(),this._networkGraphicMap.clear(),this._graphics.removeAll()}attach(){this._createGraphicsView()}detach(){this._destroyGraphicsView()}async fetchPopupFeatures(e){return this._graphicsView.hitTest(e).filter((e=>!!e.popupTemplate))}highlight(e){let t;t=k(e)?[this._getNetworkFeatureUid(e)]:I(e)?e.map((e=>this._getNetworkFeatureUid(e))):S(e)?e.map((e=>this._getNetworkFeatureUid(e))).toArray():[e.uid];const i=t.filter(a.pC);return i.length?(this._addHighlight(i),{remove:()=>this._removeHighlight(i)}):m}async hitTest(e,t){if(this.suspended)return null;const i=this._graphicsView.hitTest(e).filter(a.pC).map((e=>this._networkGraphicMap.get(e)));if(!i.length)return null;const{layer:s}=this;return i.reverse().map((t=>({type:"route",layer:s,mapPoint:e,networkFeature:t})))}isUpdating(){return this._graphicsView.updating}moveStart(){}moveEnd(){}update(e){this._graphicsView.processUpdate(e)}viewChange(){this._graphicsView.viewChange()}_addHighlight(e){for(const t of e)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t);this._highlightIds.set(t,e+1)}else this._highlightIds.set(t,1);this._updateHighlight()}_createGraphic(e){const t=e.toGraphic();return t.layer=this.layer,t.sourceLayer=this.layer,t}_createGraphicsView(){const e=this.view,t=()=>this.requestUpdate(),i=new w.Z(e.featuresTilingScheme);this._graphicsView=new f.Z({container:i,graphics:this._graphics,requestUpdateCallback:t,view:e}),this.container.addChild(i),this._updateHighlight()}_destroyGraphicsView(){this.container.removeChild(this._graphicsView.container),this._graphicsView.destroy()}_getDrawOrder(e){const t=this._networkGraphicMap.get(e);return C.indexOf(t.type)}_getNetworkFeatureUid(e){return this._networkFeatureMap.has(e)?this._networkFeatureMap.get(e).uid:null}_removeHighlight(e){for(const t of e)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t)-1;0===e?this._highlightIds.delete(t):this._highlightIds.set(t,e)}this._updateHighlight()}_routeItemsChanged(e){if(e.removed.length){this._graphics.removeMany(e.removed.map((e=>{const t=this._networkFeatureMap.get(e);return this._networkFeatureMap.delete(e),this._networkGraphicMap.delete(t),t})));for(const t of e.removed)this.handles.remove(t)}if(e.added.length){this._graphics.addMany(e.added.map((e=>{const t=this._createGraphic(e);return(0,a.Wi)(t.symbol)?null:(this._networkFeatureMap.set(e,t),this._networkGraphicMap.set(t,e),t)})).filter(a.pC));for(const t of e.added)this.handles.add([(0,h.YP)((()=>t.geometry),((e,i)=>{this._updateGraphic(t,"geometry",e,i)})),(0,h.YP)((()=>t.symbol),((e,i)=>{this._updateGraphic(t,"symbol",e,i)}))],t);this._graphics.sort(((e,t)=>this._getDrawOrder(e)-this._getDrawOrder(t)))}}_updateGraphic(e,t,i,s){if(!this._networkFeatureMap.has(e)){const t=this._createGraphic(e);return this._networkFeatureMap.set(e,t),this._networkGraphicMap.set(t,e),void this._graphics.add(t)}const r=this._networkFeatureMap.get(e);r[t]=i,R.graphic=r,R.property=t,R.oldValue=s,R.newValue=i,this._graphicsView.graphicUpdateHandler(R)}_updateHighlight(){const e=Array.from(this._highlightIds.keys());this._graphicsView.setHighlight(e)}};(0,s._)([(0,o.Cb)()],M.prototype,"_graphics",void 0),(0,s._)([(0,o.Cb)()],M.prototype,"_routeItems",null),M=(0,s._)([(0,l.j)("esri.views.2d.layers.RouteLayerView2D")],M);const V=M},95599:function(e,t,i){i.d(t,{Z:function(){return n}});var s=i(38716),r=i(76661);class n extends r.Z{renderChildren(e){this.attributeView.bindTextures(e.context,!1),this.children.some((e=>e.hasData))&&(super.renderChildren(e),e.drawPhase===s.jx.MAP&&this._renderChildren(e),this.hasHighlight()&&e.drawPhase===s.jx.HIGHLIGHT&&this._renderHighlight(e),this._boundsRenderer&&this._boundsRenderer.doRender(e))}_renderHighlight(e){const{painter:t}=e,i=t.effects.highlight;i.bind(e),this._renderChildren(e,i.defines),i.draw(e),i.unbind()}}},26216:function(e,t,i){i.d(t,{Z:function(){return g}});var s=i(36663),r=i(53404),n=i(31355),a=i(53280),h=i(86618),o=i(13802),l=i(61681),p=i(64189),d=i(81977),u=(i(7753),i(39994),i(7283),i(40266));let c=class extends((0,a.p)((0,h.IG)((0,p.v)(n.Z.EventedMixin(r.Z))))){constructor(e){super(e),this.layer=null,this.parent=null}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){const t=this.layer&&this.layer.id||"no id",i=this.layer&&this.layer.title||"no title";o.Z.getLogger(this.declaredClass).error("#resolve()",`Failed to resolve layer view (layer title: '${i}', id: '${t}')`,e)}}))}get fullOpacity(){return(0,l.Pt)(this.get("layer.opacity"),1)*(0,l.Pt)(this.get("parent.fullOpacity"),1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer?.legendEnabled}get updating(){return!(!this.updatingHandles?.updating&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){return!0===this.layer?.visible}set visible(e){void 0!==e?this._override("visible",e):this._clearOverride("visible")}canResume(){return this.visible&&this.layer?.loaded&&!this.parent?.suspended&&this.view?.ready||!1}getSuspendInfo(){const e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{},t=this;return t.view&&t.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}isUpdating(){return!1}};(0,s._)([(0,d.Cb)()],c.prototype,"fullOpacity",null),(0,s._)([(0,d.Cb)()],c.prototype,"layer",void 0),(0,s._)([(0,d.Cb)()],c.prototype,"parent",void 0),(0,s._)([(0,d.Cb)({readOnly:!0})],c.prototype,"suspended",null),(0,s._)([(0,d.Cb)({readOnly:!0})],c.prototype,"suspendInfo",null),(0,s._)([(0,d.Cb)({readOnly:!0})],c.prototype,"legendEnabled",null),(0,s._)([(0,d.Cb)({type:Boolean,readOnly:!0})],c.prototype,"updating",null),(0,s._)([(0,d.Cb)({readOnly:!0})],c.prototype,"updatingProgress",null),(0,s._)([(0,d.Cb)()],c.prototype,"visible",null),(0,s._)([(0,d.Cb)()],c.prototype,"view",void 0),c=(0,s._)([(0,u.j)("esri.views.layers.LayerView")],c);const g=c}}]);
//# sourceMappingURL=9431.684001f8.js.map