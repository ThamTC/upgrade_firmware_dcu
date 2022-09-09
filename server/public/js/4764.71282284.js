"use strict";(self["webpackChunkclient"]=self["webpackChunkclient"]||[]).push([[4764],{86602:function(e,t,i){i.d(t,{eY:function(){return g}});var s=i(61681),r=i(1662),n=i(19710),h=i(55542),a=i(51118),o=i(7349),l=i(91907),u=i(43487);function d(e){return e&&"render"in e}function c(e){return e&&!("render"in e)}function p(e){const t=document.createElement("canvas");return t.width=e.width,t.height=e.height,e.render(t.getContext("2d")),t}function f(e,t,i){const s={target:l.No.TEXTURE_2D,pixelFormat:l.VI.RGBA,internalFormat:l.VI.RGBA,dataType:l.Br.UNSIGNED_BYTE,wrapMode:l.e8.CLAMP_TO_EDGE};return t&&i&&(s.width=t,s.height=i),new u.x(e,s)}class g extends a.s{constructor(e=null,t,i=!0){super(),this.requestRenderOnSourceChangedEnabled=i,this._textureInvalidated=!0,this.stencilRef=0,this.coordScale=[1,1],this._height=void 0,this.pixelRatio=1,this.resolution=0,this.rotation=0,this._source=null,this._width=void 0,this.x=0,this.y=0,this.blendFunction=t,this.source=e,this.requestRender=this.requestRender.bind(this)}destroy(){this._texture&&(this._texture.dispose(),this._texture=null)}get isSourceScaled(){return this.width!==this.sourceWidth||this.height!==this.sourceHeight}get height(){return void 0!==this._height?this._height:this.sourceHeight}set height(e){this._height=e}get source(){return this._source}set source(e){this._source=e,this.invalidateTexture()}get sourceHeight(){return this._source instanceof HTMLImageElement?this._source.naturalHeight:this._source.height}get sourceWidth(){return this._source instanceof HTMLImageElement?this._source.naturalWidth:this._source.width}get width(){return void 0!==this._width?this._width:this.sourceWidth}set width(e){this._width=e}beforeRender(e){super.beforeRender(e),this.updateTexture(e.context)}invalidateTexture(){this._textureInvalidated||(this._textureInvalidated=!0,this.requestRenderOnSourceChangedEnabled&&this.requestRender())}_createTransforms(){return{dvs:(0,n.c)()}}setTransform(e){const t=(0,r.b)(this.transforms.dvs),[i,s]=e.toScreenNoRotation([0,0],[this.x,this.y]),n=this.resolution/this.pixelRatio/e.resolution,a=n*this.width,o=n*this.height,l=Math.PI*this.rotation/180;(0,r.c)(t,t,(0,h.f)(i,s)),(0,r.c)(t,t,(0,h.f)(a/2,o/2)),(0,r.r)(t,t,-l),(0,r.c)(t,t,(0,h.f)(-a/2,-o/2)),(0,r.j)(t,t,(0,h.f)(a,o)),(0,r.m)(this.transforms.dvs,e.displayViewMat3,t)}setSamplingProfile(e){this._texture&&(e.mips&&!this._texture.descriptor.hasMipmap&&this._texture.generateMipmap(),this._texture.setSamplingMode(e.samplingMode))}bind(e,t){this._texture&&e.bindTexture(this._texture,t)}updateTexture(e){if(!this.stage)return this._texture?.dispose(),void(this._texture=null);if(!this._textureInvalidated)return;this._textureInvalidated=!1,this._texture||(this.source?this._texture=f(e,this.sourceWidth,this.sourceHeight):this._texture=f(e));const t=this.source;if(t){if(this._texture.resize(this.sourceWidth,this.sourceHeight),d(t))if(t instanceof o.Z){const e=t.getRenderedRasterPixels();this._texture.setData((0,s.pC)(e)?e.renderedRasterPixels:null)}else this._texture.setData(p(t));else c(t)&&this._texture.setData(t);this.ready()}else this._texture.setData(null)}onAttach(){this.invalidateTexture()}onDetach(){this.invalidateTexture()}}},7909:function(e,t,i){i.d(t,{s:function(){return d}});var s=i(24568),r=i(19710),n=i(86602),h=i(27954);class a extends h.I{constructor(e,t,i,s,r,h=null){super(e,t,i,s,r),this.bitmap=new n.eY(h,"standard",!1),this.bitmap.coordScale=[s,r],this.bitmap.once("isReady",(()=>this.ready()))}destroy(){super.destroy(),this.bitmap.destroy()}beforeRender(e){super.beforeRender(e),this.bitmap.beforeRender(e)}afterRender(e){super.afterRender(e),this.bitmap.afterRender(e)}set stencilRef(e){this.bitmap.stencilRef=e}get stencilRef(){return this.bitmap.stencilRef}_createTransforms(){return{dvs:(0,r.c)(),tileMat3:(0,r.c)()}}setTransform(e,t){super.setTransform(e,t),this.bitmap.transforms.dvs=this.transforms.dvs}onAttach(){this.bitmap.stage=this.stage}onDetach(){this.bitmap&&(this.bitmap.stage=null)}}var o=i(64923),l=i(38716),u=i(70179);class d extends u.Z{get requiresDedicatedFBO(){return this.children.some((e=>"additive"===e.bitmap.blendFunction))}createTile(e){const t=this._tileInfoView.getTileBounds((0,s.Ue)(),e),[i,r]=this._tileInfoView.tileInfo.size;return new a(e,t[0],t[3],i,r)}prepareRenderPasses(e){const t=e.registerRenderPass({name:"bitmap (tile)",brushes:[o.U.bitmap],target:()=>this.children.map((e=>e.bitmap)),drawPhase:l.jx.MAP});return[...super.prepareRenderPasses(e),t]}doRender(e){this.visible&&e.drawPhase===l.jx.MAP&&super.doRender(e)}}},7349:function(e,t,i){i.d(t,{Z:function(){return r}});var s=i(61681);class r{constructor(e,t,i){this.pixelBlock=e,this.extent=t,this.originalPixelBlock=i}get width(){return(0,s.pC)(this.pixelBlock)?this.pixelBlock.width:0}get height(){return(0,s.pC)(this.pixelBlock)?this.pixelBlock.height:0}render(e){const t=this.pixelBlock;if((0,s.Wi)(t))return;const i=this.filter({pixelBlock:t});if((0,s.Wi)(i.pixelBlock))return;const r=i.pixelBlock.getAsRGBA(),n=e.createImageData(i.pixelBlock.width,i.pixelBlock.height);n.data.set(r),e.putImageData(n,0,0)}getRenderedRasterPixels(){const e=this.filter({pixelBlock:this.pixelBlock});return(0,s.Wi)(e.pixelBlock)?null:{width:e.pixelBlock.width,height:e.pixelBlock.height,renderedRasterPixels:new Uint8Array(e.pixelBlock.getAsRGBA().buffer)}}}},70179:function(e,t,i){i.d(t,{Z:function(){return l}});var s=i(39994),r=i(38716),n=i(2443),h=i(26894),a=i(22598);const o=(e,t)=>e.key.level-t.key.level!=0?e.key.level-t.key.level:e.key.row-t.key.row!=0?e.key.row-t.key.row:e.key.col-t.key.col;class l extends n.Z{constructor(e){super(),this._tileInfoView=e}get requiresDedicatedFBO(){return!1}renderChildren(e){this.sortChildren(o),this.setStencilReference(e),super.renderChildren(e)}createRenderParams(e){const{state:t}=e,i=super.createRenderParams(e);return i.requiredLevel=this._tileInfoView.getClosestInfoForScale(t.scale).level,i.displayLevel=this._tileInfoView.tileInfo.scaleToZoom(t.scale),i}prepareRenderPasses(e){const t=super.prepareRenderPasses(e);return t.push(e.registerRenderPass({name:"stencil",brushes:[a.Z],drawPhase:r.jx.DEBUG|r.jx.MAP|r.jx.HIGHLIGHT,target:()=>this.getStencilTarget()})),(0,s.Z)("esri-tiles-debug")&&t.push(e.registerRenderPass({name:"tileInfo",brushes:[h.Z],drawPhase:r.jx.DEBUG,target:()=>this.children})),t}getStencilTarget(){return this.children}updateTransforms(e){for(const t of this.children){const i=this._tileInfoView.getTileResolution(t.key);t.setTransform(e,i)}}setStencilReference(e){let t=1;for(const i of this.children)i.stencilRef=t++}}},27954:function(e,t,i){i.d(t,{I:function(){return h}});var s=i(1662),r=i(51118),n=i(87241);class h extends r.s{constructor(e,t,i,s,r,h=s,a=r){super(),this.triangleCountReportedInDebug=0,this.triangleCount=0,this.texture=null,this.key=new n.Z(e),this.x=t,this.y=i,this.width=s,this.height=r,this.rangeX=h,this.rangeY=a}destroy(){this.texture&&(this.texture.dispose(),this.texture=null)}setTransform(e,t){const i=t/(e.resolution*e.pixelRatio),r=this.transforms.tileMat3,[n,h]=e.toScreenNoRotation([0,0],[this.x,this.y]),a=this.width/this.rangeX*i,o=this.height/this.rangeY*i;(0,s.s)(r,a,0,0,0,o,0,n,h,1),(0,s.m)(this.transforms.dvs,e.displayViewMat3,r)}}},25970:function(e,t,i){i.d(t,{Z:function(){return o}});var s=i(36663),r=i(53280),n=i(81977),h=(i(7753),i(39994),i(7283),i(40266));let a=class extends r.r{constructor(e){super(e),this.tiles=new Map}destroy(){this.tiles.clear(),this.layer=this.layerView=this.tileInfoView=this.tiles=null}get updating(){return this.isUpdating()}acquireTile(e){const t=this.createTile(e);return t.once("isReady",(()=>this.notifyChange("updating"))),this.tiles.set(e.id,t),t}forceAttributeTextureUpload(){}forEachTile(e){this.tiles.forEach(e)}releaseTile(e){this.tiles.delete(e.key.id),this.disposeTile(e)}isUpdating(){let e=!0;return this.tiles.forEach((t=>{e=e&&t.isReady})),!e}setHighlight(){}invalidateLabels(){}requestUpdate(){this.layerView.requestUpdate()}};(0,s._)([(0,n.Cb)()],a.prototype,"layer",void 0),(0,s._)([(0,n.Cb)()],a.prototype,"layerView",void 0),(0,s._)([(0,n.Cb)()],a.prototype,"tileInfoView",void 0),(0,s._)([(0,n.Cb)()],a.prototype,"updating",null),a=(0,s._)([(0,h.j)("esri.views.2d.layers.features.tileRenderers.BaseTileRenderer")],a);const o=a},84764:function(e,t,i){i.r(t),i.d(t,{default:function(){return u}});var s=i(36663),r=(i(13802),i(7283),i(7753),i(39994),i(33156),i(40266)),n=i(94672),h=i(7909),a=i(25970);class o{constructor(){this.gradient=null,this.height=512,this.width=512}render(e){(0,n.hy)(e,512,this.intensities,this.gradient,this.minDensity,this.maxDensity)}}let l=class extends a.Z{constructor(e){super(e),this._intensityInfo={minDensity:0,maxDensity:0},this.type="heatmap",this.featuresView={attributeView:{initialize:()=>{},requestUpdate:()=>{}},requestRender:()=>{}},this._container=new h.s(e.tileInfoView)}createTile(e){const t=this._container.createTile(e);return this.tileInfoView.getTileCoords(t.bitmap,e),t.bitmap.resolution=this.tileInfoView.getTileResolution(e),t}onConfigUpdate(){const e=this.layer.renderer;if("heatmap"===e.type){const{minDensity:t,maxDensity:i,colorStops:s}=e;this._intensityInfo.minDensity=t,this._intensityInfo.maxDensity=i,this._gradient=(0,n.uI)(s),this.tiles.forEach((e=>{const s=e.bitmap.source;s&&(s.minDensity=t,s.maxDensity=i,s.gradient=this._gradient,e.bitmap.invalidateTexture())}))}}hitTest(){return Promise.resolve([])}install(e){e.addChild(this._container)}uninstall(e){this._container.removeAllChildren(),e.removeChild(this._container)}disposeTile(e){this._container.removeChild(e),e.destroy()}supportsRenderer(e){return e&&"heatmap"===e.type}onTileData(e){const t=this.tiles.get(e.tileKey);if(!t)return;const i=e.intensityInfo,{minDensity:s,maxDensity:r}=this._intensityInfo,n=t.bitmap.source||new o;n.intensities=i&&i.matrix||null,n.minDensity=s,n.maxDensity=r,n.gradient=this._gradient,t.bitmap.source=n,this._container.addChild(t),this._container.requestRender(),this.requestUpdate()}onTileError(e){console.error(e)}lockGPUUploads(){}unlockGPUUploads(){}fetchResource(e,t){return console.error(e),Promise.reject()}};l=(0,s._)([(0,r.j)("esri.views.2d.layers.features.tileRenderers.HeatmapTileRenderer")],l);const u=l}}]);
//# sourceMappingURL=4764.71282284.js.map