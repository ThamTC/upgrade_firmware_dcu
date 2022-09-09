"use strict";(self["webpackChunkclient"]=self["webpackChunkclient"]||[]).push([[6753],{56753:function(i,e,t){t.r(e),t.d(e,{default:function(){return m}});var s=t(36663),l=t(81739),r=t(63592),o=t(61681),n=t(63314),a=t(76868),h=t(81977),y=(t(7753),t(39994),t(95620)),d=(t(7283),t(40266)),b=t(39835),p=t(48672),v=t(27668),u=t(16908),c=t(18241),_=t(95874),f=t(42228),C=t(9008),w=t(98234),g=t(4e4);let L=class extends((0,v.h)((0,_.M)((0,u.q)((0,c.I)((0,w.Q)((0,C.K)((0,n.R)(p.Z)))))))){constructor(i){super(i),this._visibilityHandles={},this.allLayers=new l.Z({getCollections:()=>[this.layers],getChildrenFunction:i=>"layers"in i?i.layers:null}),this.allTables=(0,f.a)(this),this.fullExtent=void 0,this.operationalLayerType="GroupLayer",this.spatialReference=void 0,this.type="group"}initialize(){this._enforceVisibility(this.visibilityMode,this.visible),this.own((0,a.YP)((()=>this.visible),this._onVisibilityChange.bind(this),a.Z_))}_writeLayers(i,e,t,s){const l=[];if(!i)return l;i.forEach((i=>{const e=(0,g.Nw)(i,s.webmap?s.webmap.getLayerJSONFromResourceInfo(i):null,s);(0,o.pC)(e)&&e.layerType&&l.push(e)})),e.layers=l}set portalItem(i){this._set("portalItem",i)}set visibilityMode(i){const e=this._get("visibilityMode")!==i;this._set("visibilityMode",i),e&&this._enforceVisibility(i,this.visible)}load(i){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection","Scene Service"]},i)),Promise.resolve(this)}loadAll(){return(0,r.G)(this,(i=>{i(this.layers,this.tables)}))}layerAdded(i){i.visible&&"exclusive"===this.visibilityMode?this._turnOffOtherLayers(i):"inherited"===this.visibilityMode&&(i.visible=this.visible),this._visibilityHandles[i.uid]=(0,a.YP)((()=>i.visible),(e=>this._onChildVisibilityChange(i,e)),a.Z_)}layerRemoved(i){const e=this._visibilityHandles[i.uid];e&&(e.remove(),delete this._visibilityHandles[i.uid]),this._enforceVisibility(this.visibilityMode,this.visible)}_turnOffOtherLayers(i){this.layers.forEach((e=>{e!==i&&(e.visible=!1)}))}_enforceVisibility(i,e){if(!(0,y.vw)(this).initialized)return;const t=this.layers;let s=t.find((i=>i.visible));switch(i){case"exclusive":t.length&&!s&&(s=t.getItemAt(0),s.visible=!0),this._turnOffOtherLayers(s);break;case"inherited":t.forEach((i=>{i.visible=e}))}}_onVisibilityChange(i){"inherited"===this.visibilityMode&&this.layers.forEach((e=>{e.visible=i}))}_onChildVisibilityChange(i,e){switch(this.visibilityMode){case"exclusive":e?this._turnOffOtherLayers(i):this._isAnyLayerVisible()||(i.visible=!0);break;case"inherited":i.visible=this.visible}}_isAnyLayerVisible(){return this.layers.some((i=>i.visible))}};(0,s._)([(0,h.Cb)({readOnly:!0,dependsOn:[]})],L.prototype,"allLayers",void 0),(0,s._)([(0,h.Cb)({readOnly:!0})],L.prototype,"allTables",void 0),(0,s._)([(0,h.Cb)()],L.prototype,"fullExtent",void 0),(0,s._)([(0,h.Cb)({json:{read:!1,write:{ignoreOrigin:!0}}})],L.prototype,"layers",void 0),(0,s._)([(0,b.c)("layers")],L.prototype,"_writeLayers",null),(0,s._)([(0,h.Cb)({type:["GroupLayer"]})],L.prototype,"operationalLayerType",void 0),(0,s._)([(0,h.Cb)({json:{origins:{"web-document":{read:!1,write:!1}}}})],L.prototype,"portalItem",null),(0,s._)([(0,h.Cb)()],L.prototype,"spatialReference",void 0),(0,s._)([(0,h.Cb)({json:{read:!1},readOnly:!0,value:"group"})],L.prototype,"type",void 0),(0,s._)([(0,h.Cb)({type:["independent","inherited","exclusive"],value:"independent",json:{write:!0,origins:{"web-map":{read:!1,write:!1}}}})],L.prototype,"visibilityMode",null),L=(0,s._)([(0,d.j)("esri.layers.GroupLayer")],L);const m=L}}]);
//# sourceMappingURL=6753.a47e87f4.js.map