"use strict";(self["webpackChunkclient"]=self["webpackChunkclient"]||[]).push([[1288],{62755:function(e,t,i){i.d(t,{B:function(){return v}});var r=i(61681),o=i(71760),n=i(3466),s=i(12173),a=i(41610),p=i(65943),l=i(81977);function c(e){return u[y(e)]||h}function y(e){return e instanceof Blob?e.type:d(e.url)}function d(e){const t=(0,n.Ml)(e);return m[t]||f}const u={},f="text/plain",h=u[f],m={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg",bmp:"image/bmp",gif:"image/gif",json:"application/json",txt:"text/plain",xml:"application/xml",svg:"image/svg+xml",zip:"application/zip",pbf:"application/vnd.mapbox-vector-tile",gz:"application/gzip"};for(const U in m)u[m[U]]=U;var g=i(16641);function v(e){const t=(0,r.pC)(e)&&e.origins?e.origins:[void 0];return(i,r)=>{const o=w(e,i,r);for(const e of t){const t=(0,l.CJ)(i,e,r);for(const e in o)t[e]=o[e]}}}function w(e,t,i){if((0,r.pC)(e)&&"resource"===e.type)return S(e,t,i);switch((0,r.pC)(e)&&e.type?e.type:"other"){case"other":return{read:!0,write:!0};case"url":{const{read:e,write:t}=g.p;return{read:e,write:t}}}}function S(e,t,i){const s=(0,a.VZ)(t,i);return{type:String,read:(e,t,i)=>{const r=(0,g.r)(e,t,i);return s.type===String?r:"function"==typeof s.type?new s.type({url:r}):void 0},write:{writer(t,a,l,c){if(!c||!c.resources)return"string"==typeof t?void(a[l]=(0,g.t)(t,c)):void(a[l]=t.write({},c));const y=T(t),d=y?(0,g.t)(y,{...c,verifyItemRelativeUrls:c&&c.verifyItemRelativeUrls?{writtenUrls:c.verifyItemRelativeUrls.writtenUrls,rootPath:null}:null},g.M.NO):null,u=s.type!==String&&(!(0,o.l)(this)||c&&c.origin&&this.originIdOf(i)>(0,p.M9)(c.origin));c&&c.portalItem&&(0,r.pC)(d)&&!(0,n.YP)(d)?u?b(this,i,t,d,a,l,c,e):C(d,a,l,c):c&&c.portalItem&&((0,r.Wi)(d)||(0,r.pC)((0,g.i)(d))||(0,n.jc)(d)||u)?_(this,i,t,d,a,l,c,e):a[l]=d}}}}function _(e,t,i,o,a,p,l,y){const d=(0,s.D)(),u=O(i,o,l),f=(0,n.v_)((0,r.U2)(y,"prefix"),d),h=`${f}.${c(u)}`,m=l.portalItem.resourceFromPath(h);(0,n.jc)(o)&&l.resources.pendingOperations.push(I(o).then((e=>{m.path=`${f}.${c(e)}`,a[p]=m.itemRelativeUrl})).catch((()=>{}))),x(e,t,m,u,l.resources.toAdd),a[p]=m.itemRelativeUrl}function b(e,t,i,r,o,s,a,p){const l=a.portalItem.resourceFromPath(r),y=O(i,r,a);c(y)===(0,n.Ml)(l.path)?(x(e,t,l,y,a.resources.toUpdate),o[s]=r):_(e,t,i,r,o,s,a,p)}function C(e,t,i,r){r.resources.toKeep.push({resource:r.portalItem.resourceFromPath(e)}),t[i]=e}function x(e,t,i,r,o){o.push({resource:i,content:r,finish:i=>{R(e,t,i)}})}function O(e,t,i){return"string"==typeof e?{url:t}:new Blob([JSON.stringify(e.toJSON(i))],{type:"application/json"})}async function I(e){const t=(await Promise.resolve().then(i.bind(i,66341))).default,{data:r}=await t(e,{responseType:"blob"});return r}function T(e){return(0,r.Wi)(e)?null:"string"==typeof e?e:e.url}function R(e,t,i){"string"==typeof e[t]?e[t]=i.url:e[t].url=i.url}},31288:function(e,t,i){i.r(t),i.d(t,{default:function(){return z}});var r,o=i(36663),n=i(70375),s=i(44584),a=i(61681),p=i(63314),l=i(78668),c=i(76868),y=i(81977),d=(i(7753),i(39994),i(7283),i(34248)),u=i(40266),f=i(62755),h=i(48672),m=i(91223),g=i(87232),v=i(16908),w=i(18241),S=i(95874),_=i(19810),b=i(31e3),C=i(97304),x=i(66341),O=i(33511),I=i(72285),T=i(3466),R=(i(91957),i(67134)),U=i(96863),j=i(39835),N=i(4757),M=i(89542);let L=r=class extends I.wq{constructor(e){super(e),this.geometry=null,this.type="clip"}writeGeometry(e,t,i,r){if(r.layer&&r.layer.spatialReference&&!r.layer.spatialReference.equals(this.geometry.spatialReference)){if(!(0,N.Up)(e.spatialReference,r.layer.spatialReference))return void(r&&r.messages&&r.messages.push(new U.Z("scenemodification:unsupported","Scene modifications with incompatible spatial references are not supported",{modification:this,spatialReference:r.layer.spatialReference,context:r})));const o=new M.Z;(0,N.Wt)(e,o,r.layer.spatialReference),t[i]=o.toJSON(r)}else t[i]=e.toJSON(r);delete t[i].spatialReference}clone(){return new r({geometry:(0,R.d9)(this.geometry),type:this.type})}};(0,o._)([(0,y.Cb)({type:M.Z}),(0,f.B)()],L.prototype,"geometry",void 0),(0,o._)([(0,j.c)(["web-scene","portal-item"],"geometry")],L.prototype,"writeGeometry",null),(0,o._)([(0,y.Cb)({type:["clip","mask","replace"],nonNullable:!0}),(0,f.B)()],L.prototype,"type",void 0),L=r=(0,o._)([(0,u.j)("esri.layers.support.SceneModification")],L);const P=L;var J;let Z=J=class extends((0,I.eC)(O.Z.ofType(P))){constructor(e){super(e),this.url=null}clone(){return new J({url:this.url,items:this.items.map((e=>e.clone()))})}toJSON(e){return this.toArray().map((t=>t.toJSON(e))).filter((e=>!!e.geometry))}static fromJSON(e,t){const i=new J;for(const r of e)i.add(P.fromJSON(r,t));return i}static async fromUrl(e,t,i){const r={url:(0,T.mN)(e),origin:"service"},o=await(0,x["default"])(e,{responseType:"json",signal:(0,a.U2)(i,"signal")}),n=t.toJSON(),s=[];for(const a of o.data)s.push(P.fromJSON({...a,geometry:{...a.geometry,spatialReference:n}},r));return new J({url:e,items:s})}};(0,o._)([(0,y.Cb)({type:String})],Z.prototype,"url",void 0),Z=J=(0,o._)([(0,u.j)("esri.layers.support.SceneModifications")],Z);const V=Z;var A=i(16641);let D=class extends((0,_.Vt)((0,g.Y)((0,v.q)((0,w.I)((0,S.M)((0,p.R)((0,m.V)(h.Z)))))))){constructor(...e){super(...e),this._handles=new s.Z,this.geometryType="mesh",this.operationalLayerType="IntegratedMeshLayer",this.type="integrated-mesh",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.profile="mesh-pyramids",this.modifications=null,this._modificationsSource=null,this.elevationInfo=null,this.path=null}destroy(){this._handles.destroy()}initialize(){this._handles.add((0,c.on)((()=>this.modifications),"after-changes",(()=>this.modifications=this.modifications),c.Z_))}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}readModifications(e,t,i){this._modificationsSource={url:(0,A.f)(e,i),context:i}}async load(e){return this.addResolvingPromise(this._doLoad(e)),this}async _doLoad(e){const t=(0,a.U2)(e,"signal");try{await this.loadFromPortal({supportedTypes:["Scene Service"]},e)}catch(i){(0,l.r9)(i)}if(await this._fetchService(t),(0,a.pC)(this._modificationsSource)){const t=await V.fromUrl(this._modificationsSource.url,this.spatialReference,e);this.setAtOrigin("modifications",t,this._modificationsSource.context.origin),this._modificationsSource=null}await this._fetchIndexAndUpdateExtent(this.nodePages,t)}beforeSave(){if(!(0,a.Wi)(this._modificationsSource))return this.load().then((()=>{}),(()=>{}))}async saveAs(e,t){return this._debouncedSaveOperations(_.xp.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"};return this._debouncedSaveOperations(_.xp.SAVE,e)}validateLayer(e){if(e.layerType&&"IntegratedMesh"!==e.layerType)throw new n.Z("integrated-mesh-layer:layer-type-not-supported","IntegratedMeshLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new n.Z("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new n.Z("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})}_getTypeKeywords(){return["IntegratedMeshLayer"]}};(0,o._)([(0,y.Cb)({type:String,readOnly:!0})],D.prototype,"geometryType",void 0),(0,o._)([(0,y.Cb)({type:["show","hide"]})],D.prototype,"listMode",void 0),(0,o._)([(0,y.Cb)({type:["IntegratedMeshLayer"]})],D.prototype,"operationalLayerType",void 0),(0,o._)([(0,y.Cb)({json:{read:!1},readOnly:!0})],D.prototype,"type",void 0),(0,o._)([(0,y.Cb)({type:C.U4,readOnly:!0})],D.prototype,"nodePages",void 0),(0,o._)([(0,y.Cb)({type:[C.QI],readOnly:!0})],D.prototype,"materialDefinitions",void 0),(0,o._)([(0,y.Cb)({type:[C.Yh],readOnly:!0})],D.prototype,"textureSetDefinitions",void 0),(0,o._)([(0,y.Cb)({type:[C.H3],readOnly:!0})],D.prototype,"geometryDefinitions",void 0),(0,o._)([(0,y.Cb)({readOnly:!0})],D.prototype,"serviceUpdateTimeStamp",void 0),(0,o._)([(0,y.Cb)({type:V}),(0,f.B)({origins:["web-scene","portal-item"],type:"resource",prefix:"modifications"})],D.prototype,"modifications",void 0),(0,o._)([(0,d.r)(["web-scene","portal-item"],"modifications")],D.prototype,"readModifications",null),(0,o._)([(0,y.Cb)(b.PV)],D.prototype,"elevationInfo",void 0),(0,o._)([(0,y.Cb)({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],D.prototype,"path",void 0),D=(0,o._)([(0,u.j)("esri.layers.IntegratedMeshLayer")],D);const z=D}}]);
//# sourceMappingURL=1288.eedea743.js.map