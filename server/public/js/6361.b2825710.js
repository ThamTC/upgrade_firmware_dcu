"use strict";(self["webpackChunkclient"]=self["webpackChunkclient"]||[]).push([[6361],{66361:function(e,a,r){r.r(a),r.d(a,{fetchFeatureService:function(){return p},fromUrl:function(){return u}});var t=r(66341),n=r(70375),l=r(61681),s=r(3466),i=r(20692),y=r(92557);async function u(e){const a=e.properties?.customParameters,t=await d(e.url,a),n={...e.properties,url:e.url};if(!t.sublayerIds)return null!=t.layerOrTableId&&(n.layerId=t.layerOrTableId,n.sourceJSON=t.sourceJSON),new t.Constructor(n);const l=new(0,(await r.e(6753).then(r.bind(r,56753))).default)({title:t.parsedUrl.title});return c(l,t,n),l}function o(e,a){return e?e.find((e=>e.id===a)):null}function c(e,a,r){function t(e,t){const n={...r,layerId:e,sublayerTitleMode:"service-name"};return(0,l.pC)(t)&&(n.sourceJSON=t),new a.Constructor(n)}a.sublayerIds.forEach((r=>{const n=t(r,o(a.sublayerInfos,r));e.add(n)})),a.tableIds.forEach((r=>{const n=t(r,o(a.tableInfos,r));e.tables.add(n)}))}async function d(e,a){let r=(0,i.Qc)(e);if((0,l.Wi)(r)&&(r=await f(e,a)),(0,l.Wi)(r))throw new n.Z("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:e});const{serverType:t,sublayer:s}=r;let y;const u={FeatureServer:"FeatureLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer"};switch(t){case"MapServer":y=null!=s?"FeatureLayer":m(e,a).then((e=>e?"TileLayer":"MapImageLayer"));break;case"ImageServer":y=S(e,{customParameters:a}).then((e=>{const a=e.tileInfo&&e.tileInfo.format;return e.tileInfo?"LERC"!==a?.toUpperCase()||e.cacheType&&"elevation"!==e.cacheType.toLowerCase()?"ImageryTileLayer":"ElevationLayer":"ImageryLayer"}));break;case"SceneServer":y=S(r.url.path,{customParameters:a}).then((e=>{if(e){if("Voxel"===e?.layerType)return"VoxelLayer";if(e?.layers&&Array.isArray(e.layers)&&e.layers.length>0){const a={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"},r=e.layers[0]?.layerType;if(null!=a[r])return a[r]}}return"SceneLayer"}));break;default:y=u[t]}const o={FeatureLayer:!0,SceneLayer:!0},c="FeatureServer"===t,d={parsedUrl:r,Constructor:null,layerOrTableId:c?s:null,sublayerIds:null,tableIds:null},b=await y;if(o[b]&&null==s){const r=await h(e,t,a);c&&(d.sublayerInfos=r.layerInfos,d.tableInfos=r.tableInfos),1!==r.layerIds.length+r.tableIds.length?(d.sublayerIds=r.layerIds,d.tableIds=r.tableIds):c&&(d.layerOrTableId=r.layerIds[0]??r.tableIds[0],d.sourceJSON=r.layerInfos[0]??r.tableInfos[0])}return d.Constructor=await L(b),d}async function f(e,a){const r=await S(e,{customParameters:a});let t=null,n=null;const y=r.type;if("Feature Layer"===y||"Table"===y?(t="FeatureServer",n=r.id):"indexedVector"===y?t="VectorTileServer":r.hasOwnProperty("mapName")?t="MapServer":r.hasOwnProperty("bandCount")&&r.hasOwnProperty("pixelSizeX")?t="ImageServer":r.hasOwnProperty("maxRecordCount")&&r.hasOwnProperty("allowGeometryUpdates")?t="FeatureServer":r.hasOwnProperty("streamUrls")?t="StreamServer":b(r)?(t="SceneServer",n=r.id):r.hasOwnProperty("layers")&&b(r.layers?.[0])&&(t="SceneServer"),!t)return null;const u=null!=n?(0,i.DR)(e):null;return{title:(0,l.pC)(u)&&r.name||(0,s.vt)(e),serverType:t,sublayer:n,url:{path:(0,l.pC)(u)?u.serviceUrl:(0,s.mN)(e).path}}}function b(e){return e?.hasOwnProperty("store")&&e.hasOwnProperty("id")&&"number"==typeof e.id}async function h(e,a,r){let t,n=!1;if("FeatureServer"===a){const a=await p(e,{customParameters:r});n=!!a.layersJSON,t=a.layersJSON||a.serviceJSON}else t=await S(e,{customParameters:r});const l=t?.layers,s=t?.tables;return{layerIds:l?.map((e=>e.id)).reverse()||[],tableIds:s?.map((e=>e.id)).reverse()||[],layerInfos:n?l:[],tableInfos:n?s:[]}}function w(e){return!e.type||"Feature Layer"===e.type}async function p(e,a){let r=await S(e,a);r=r||{},r.layers=r.layers?.filter(w)||[];const t={serviceJSON:r};if(r.currentVersion<10.5)return t;const n=await S(e+"/layers",a);return t.layersJSON={layers:n?.layers?.filter(w)||[],tables:n?.tables||[]},t}async function L(e){return(0,y.T[e])()}async function m(e,a){return(await S(e,{customParameters:a})).tileInfo}async function S(e,a){return(await(0,t["default"])(e,{responseType:"json",query:{f:"json",...a?.customParameters,token:a?.apiKey}})).data}},92557:function(e,a,r){r.d(a,{T:function(){return t}});const t={BingMapsLayer:async()=>(await r.e(5505).then(r.bind(r,5505))).default,BuildingSceneLayer:async()=>(await Promise.all([r.e(2192),r.e(2175)]).then(r.bind(r,22175))).default,CSVLayer:async()=>(await r.e(4730).then(r.bind(r,64730))).default,ElevationLayer:async()=>(await r.e(8509).then(r.bind(r,8509))).default,FeatureLayer:async()=>(await Promise.resolve().then(r.bind(r,60691))).default,GroupLayer:async()=>(await r.e(6753).then(r.bind(r,56753))).default,GeoRSSLayer:async()=>(await r.e(4417).then(r.bind(r,84417))).default,GeoJSONLayer:async()=>(await r.e(6330).then(r.bind(r,66330))).default,ImageryLayer:async()=>(await Promise.all([r.e(1329),r.e(7678),r.e(8927),r.e(245)]).then(r.bind(r,245))).default,ImageryTileLayer:async()=>(await Promise.all([r.e(1329),r.e(8299),r.e(7678),r.e(8927),r.e(7317)]).then(r.bind(r,17317))).default,IntegratedMeshLayer:async()=>(await Promise.all([r.e(2192),r.e(1288)]).then(r.bind(r,31288))).default,KMLLayer:async()=>(await r.e(3931).then(r.bind(r,83931))).default,LineOfSightLayer:async()=>(await r.e(2005).then(r.bind(r,22005))).default,MapImageLayer:async()=>(await Promise.all([r.e(7153),r.e(9420)]).then(r.bind(r,69420))).default,MapNotesLayer:async()=>(await r.e(410).then(r.bind(r,410))).default,OGCFeatureLayer:async()=>(await r.e(8888).then(r.bind(r,98888))).default,OpenStreetMapLayer:async()=>(await r.e(3206).then(r.bind(r,33206))).default,PointCloudLayer:async()=>(await r.e(4949).then(r.bind(r,74949))).default,RouteLayer:async()=>(await Promise.all([r.e(3970),r.e(2983)]).then(r.bind(r,32983))).default,SceneLayer:async()=>(await Promise.all([r.e(2192),r.e(6115)]).then(r.bind(r,16115))).default,StreamLayer:async()=>(await r.e(1604).then(r.bind(r,91604))).default,TileLayer:async()=>(await Promise.all([r.e(7153),r.e(5369)]).then(r.bind(r,75369))).default,UnknownLayer:async()=>(await r.e(81).then(r.bind(r,40081))).default,UnsupportedLayer:async()=>(await r.e(4864).then(r.bind(r,74864))).default,VectorTileLayer:async()=>(await Promise.all([r.e(3043),r.e(4043)]).then(r.bind(r,59136))).default,VoxelLayer:async()=>(await r.e(9478).then(r.bind(r,39478))).default,WebTileLayer:async()=>(await r.e(9859).then(r.bind(r,89859))).default,WFSLayer:async()=>(await r.e(751).then(r.bind(r,10751))).default,WMSLayer:async()=>(await r.e(5734).then(r.bind(r,75734))).default,WMTSLayer:async()=>(await r.e(6642).then(r.bind(r,56642))).default}}}]);
//# sourceMappingURL=6361.b2825710.js.map