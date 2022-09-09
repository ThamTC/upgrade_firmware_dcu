"use strict";(self["webpackChunkclient"]=self["webpackChunkclient"]||[]).push([[3255],{49999:function(e,t,r){r.d(t,{j:function(){return h}});var s=r(36663),a=r(53404),i=r(53280),n=r(81977),o=(r(7753),r(39994),r(7283),r(40266));const l={visible:"visibleSublayers"};let h=class extends((0,i.p)(a.Z)){constructor(e){super(e),this.scale=0}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.handles.remove("layer"),e&&this.handles.add([e.sublayers.on("change",(()=>this.notifyChange("visibleSublayers"))),e.on("wms-sublayer-update",(e=>this.notifyChange(l[e.propertyName])))],"layer"))}get layers(){const{visibleSublayers:e}=this;return e.filter((e=>e.name)).map((e=>e.name)).join(",")}get version(){this.commitProperty("layers");const e=this.layer;return e&&e.commitProperty("imageTransparency"),(this._get("version")||0)+1}get visibleSublayers(){const{layer:e,scale:t}=this,r=e?.sublayers,s=[],a=e=>{const{minScale:r,maxScale:i,sublayers:n,visible:o}=e;o&&(0===t||(0===r||t<=r)&&(0===i||t>=i))&&(n?n.forEach(a):s.unshift(e))};return r?.forEach(a),s}toJSON(){const{layer:e,layers:t}=this,{imageFormat:r,imageTransparency:s,version:a}=e;return{format:r,request:"GetMap",service:"WMS",styles:"",transparent:s?"TRUE":"FALSE",version:a,layers:t}}};(0,s._)([(0,n.Cb)()],h.prototype,"layer",null),(0,s._)([(0,n.Cb)({readOnly:!0})],h.prototype,"layers",null),(0,s._)([(0,n.Cb)({type:Number})],h.prototype,"scale",void 0),(0,s._)([(0,n.Cb)({readOnly:!0})],h.prototype,"version",null),(0,s._)([(0,n.Cb)({readOnly:!0})],h.prototype,"visibleSublayers",null),h=(0,s._)([(0,o.j)("esri.layers.support.ExportWMSImageParameters")],h)},23255:function(e,t,r){r.r(t),r.d(t,{default:function(){return w}});var s=r(36663),a=r(13802),i=r(78668),n=r(76868),o=r(81977),l=(r(7753),r(39994),r(7283),r(40266)),h=r(91772),p=r(12688),u=r(81885),y=r(75291),c=r(26216),m=r(55068),d=r(70375),g=r(31e3),x=r(49999);const f=e=>{let t=class extends e{initialize(){this.exportImageParameters=new x.j({layer:this.layer})}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get exportImageVersion(){return this.exportImageParameters?.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}fetchPopupFeatures(e){const{layer:t}=this;if(!e)return Promise.reject(new d.Z("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:t}));const{popupEnabled:r}=t;if(!r)return Promise.reject(new d.Z("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:r}));const s=this.createFetchPopupFeaturesQuery(e);if(!s)return Promise.resolve([]);const{extent:a,width:i,height:n,x:o,y:l}=s;if(!(a&&i&&n))throw new d.Z("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:a,width:i,height:n});const h=t.fetchFeatureInfo(a,i,n,o,l);return Promise.resolve(h?[h]:[])}};return(0,s._)([(0,o.Cb)()],t.prototype,"exportImageParameters",void 0),(0,s._)([(0,o.Cb)({readOnly:!0})],t.prototype,"exportImageVersion",null),(0,s._)([(0,o.Cb)()],t.prototype,"layer",void 0),(0,s._)([(0,o.Cb)(g.qG)],t.prototype,"timeExtent",void 0),t=(0,s._)([(0,l.j)("esri.layers.mixins.WMSLayerView")],t),t},v=a.Z.getLogger("esri.views.2d.layers.WMSLayerView2D");let b=class extends(f((0,m.Z)((0,u.y)(c.Z)))){constructor(){super(...arguments),this.container=new p.c}supportsSpatialReference(e){return this.layer.serviceSupportsSpatialReference(e)}update(e){this.strategy.update(e).catch((e=>{(0,i.D_)(e)||v.error(e)}))}attach(){const{layer:e,container:t}=this,{imageMaxHeight:r,imageMaxWidth:s}=e;this.strategy=new y.Z({container:t,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:r,imageMaxWidth:s,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this.handles.add((0,n.YP)((()=>this.exportImageVersion),(()=>this.requestUpdate())),"exportImageVersion")}detach(){this.handles.remove("exportImageVersion"),this.strategy.destroy(),this.strategy=null,this.container.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}createFetchPopupFeaturesQuery(e){const{view:t,container:r}=this,{x:s,y:a}=e,{spatialReference:i}=t;let n=null,o=0,l=0;if(r.children.some((e=>{const{width:t,height:r,resolution:p,x:u,y:y}=e,c=u+p*t,m=y-p*r;return s>=u&&s<=c&&a<=y&&a>=m&&(n=new h.Z({xmin:u,ymin:m,xmax:c,ymax:y,spatialReference:i}),o=t,l=r,!0)})),!n)return null;const p=n.width/o,u=Math.round((s-n.xmin)/p),y=Math.round((n.ymax-a)/p);return{extent:n,width:o,height:l,x:u,y:y}}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(e,t,r,s){return this.layer.fetchImage(e,t,r,{timeExtent:this.timeExtent,...s})}};(0,s._)([(0,o.Cb)()],b.prototype,"strategy",void 0),(0,s._)([(0,o.Cb)()],b.prototype,"updating",void 0),b=(0,s._)([(0,l.j)("esri.views.2d.layers.WMSLayerView2D")],b);const w=b}}]);
//# sourceMappingURL=3255.49521b08.js.map