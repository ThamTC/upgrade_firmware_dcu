"use strict";(self["webpackChunkclient"]=self["webpackChunkclient"]||[]).push([[515],{7505:function(t,e,n){n.d(e,{G6:function(){return Z},Ie:function(){return A},J9:function(){return R},RF:function(){return G},U1:function(){return T},vY:function(){return u},ym:function(){return k}});var r=n(61681),i=n(53736);const s=(t,e,n)=>[e,n],o=(t,e,n)=>[e,n,t[2]],a=(t,e,n)=>[e,n,t[2],t[3]];function u(t){return t?{originPosition:"upper-left"===t.originPosition?"upperLeft":"lower-left"===t.originPosition?"lowerLeft":t.originPosition,scale:t.tolerance?[t.tolerance,t.tolerance]:[1,1],translate:(0,r.pC)(t.extent)?[t.extent.xmin,t.extent.ymax]:[0,0]}:null}function l({scale:t,translate:e},n){return Math.round((n-e[0])/t[0])}function h({scale:t,translate:e},n){return Math.round((e[1]-n)/t[1])}function c(t,e,n){const r=[];let i,s,o,a;for(let u=0;u<n.length;u++){const c=n[u];u>0?(o=l(t,c[0]),a=h(t,c[1]),o===i&&a===s||(r.push(e(c,o-i,a-s)),i=o,s=a)):(i=l(t,c[0]),s=h(t,c[1]),r.push(e(c,i,s)))}return r.length>0?r:null}function f(t,e,n,r){return c(t,n?r?a:o:r?o:s,e)}function p(t,e,n,r){const i=[],u=n?r?a:o:r?o:s;for(let s=0;s<e.length;s++){const n=c(t,u,e[s]);n&&n.length>=3&&i.push(n)}return i.length?i:null}function d(t,e,n,r){const i=[],u=n?r?a:o:r?o:s;for(let s=0;s<e.length;s++){const n=c(t,u,e[s]);n&&n.length>=2&&i.push(n)}return i.length?i:null}function m({scale:t,translate:e},n){return n*t[0]+e[0]}function y({scale:t,translate:e},n){return e[1]-n*t[1]}function g(t,e,n){const r=new Array(n.length);if(!n.length)return r;const[i,s]=t.scale;let o=m(t,n[0][0]),a=y(t,n[0][1]);r[0]=e(n[0],o,a);for(let u=1;u<n.length;u++){const t=n[u];o+=t[0]*i,a-=t[1]*s,r[u]=e(t,o,a)}return r}function C(t,e,n){const r=new Array(n.length);for(let i=0;i<n.length;i++)r[i]=g(t,e,n[i]);return r}function P(t,e,n,r){return g(t,n?r?a:o:r?o:s,e)}function x(t,e,n,r){return C(t,n?r?a:o:r?o:s,e)}function b(t,e,n,r){return C(t,n?r?a:o:r?o:s,e)}function _(t,e,n,r,i){return e.xmin=l(t,n.xmin),e.ymin=h(t,n.ymin),e.xmax=l(t,n.xmax),e.ymax=h(t,n.ymax),e!==n&&(r&&(e.zmin=n.zmin,e.zmax=n.zmax),i&&(e.mmin=n.mmin,e.mmax=n.mmax)),e}function v(t,e,n,r,i){return e.points=f(t,n.points,r,i),e}function G(t,e,n,r,i){return e.x=l(t,n.x),e.y=h(t,n.y),e!==n&&(r&&(e.z=n.z),i&&(e.m=n.m)),e}function w(t,e,n,r,i){const s=p(t,n.rings,r,i);return s?(e.rings=s,e):null}function M(t,e,n,r,i){const s=d(t,n.paths,r,i);return s?(e.paths=s,e):null}function k(t,e){return t&&e?(0,i.wp)(e)?G(t,{},e,!1,!1):(0,i.l9)(e)?M(t,{},e,!1,!1):(0,i.oU)(e)?w(t,{},e,!1,!1):(0,i.aW)(e)?v(t,{},e,!1,!1):(0,i.YX)(e)?_(t,{},e,!1,!1):null:null}function R(t,e,n,i,s){return(0,r.pC)(n)&&(e.points=P(t,n.points,i,s)),e}function T(t,e,n,i,s){return(0,r.Wi)(n)||(e.x=m(t,n.x),e.y=y(t,n.y),e!==n&&(i&&(e.z=n.z),s&&(e.m=n.m))),e}function A(t,e,n,i,s){return(0,r.pC)(n)&&(e.rings=b(t,n.rings,i,s)),e}function Z(t,e,n,i,s){return(0,r.pC)(n)&&(e.paths=x(t,n.paths,i,s)),e}},80515:function(t,e,n){n.r(e),n.d(e,{default:function(){return G}});var r=n(27755),i=n(61681),s=n(7958),o=n(14685),a=n(95247),u=(n(4745),n(39994),n(37116)),l=n(24568),h=(n(7505),n(59659),n(12512));class c{constructor(t,e,n){this.uid=t,this.geometry=e,this.attributes=n,this.visible=!0,this.objectId=null,this.centroid=null}}class f{constructor(){this.exceededTransferLimit=!1,this.features=[],this.fields=[],this.hasM=!1,this.hasZ=!1,this.geometryType=null,this.objectIdFieldName=null,this.globalIdFieldName=null,this.geometryProperties=null,this.geohashFieldName=null,this.spatialReference=null,this.transform=null}}(0,u.Ue)(),(0,l.Ue)();var p=n(12065);function d(t,e){return e}function m(t,e,n,r){switch(n){case 0:return P(t,e+r,0);case 1:return"lowerLeft"===t.originPosition?P(t,e+r,1):x(t,e+r,1)}}function y(t,e,n,r){return 2===n?P(t,e,2):m(t,e,n,r)}function g(t,e,n,r){return 2===n?P(t,e,3):m(t,e,n,r)}function C(t,e,n,r){return 3===n?P(t,e,3):y(t,e,n,r)}function P({translate:t,scale:e},n,r){return t[r]+n*e[r]}function x({translate:t,scale:e},n,r){return t[r]-n*e[r]}class b{constructor(t){this.options=t,this.geometryTypes=["point","multipoint","polyline","polygon"],this.previousCoordinate=[0,0],this.transform=null,this.applyTransform=d,this.lengths=[],this.currentLengthIndex=0,this.toAddInCurrentPath=0,this.vertexDimension=0,this.coordinateBuffer=null,this.coordinateBufferPtr=0,this._attributesConstructor=()=>{}}createFeatureResult(){return new f}finishFeatureResult(t){if(this.options.applyTransform&&(t.transform=null),this._attributesConstructor=()=>{},this.coordinateBuffer=null,this.lengths.length=0,!t.hasZ)return;const e=(0,a.k)(t.geometryType,this.options.sourceSpatialReference,t.spatialReference);if(!(0,i.Wi)(e))for(const n of t.features)e(n.geometry)}createSpatialReference(){return new o.Z}addField(t,e){t.fields.push(h.Z.fromJSON(e));const n=t.fields.map((t=>t.name));this._attributesConstructor=function(){for(const t of n)this[t]=null}}addFeature(t,e){const n=this.options.maxStringAttributeLength?this.options.maxStringAttributeLength:0;if(n>0)for(const r in e.attributes){const t=e.attributes[r];"string"==typeof t&&t.length>n&&(e.attributes[r]="")}t.features.push(e)}addQueryGeometry(t,e){const{queryGeometry:n,queryGeometryType:r}=e,i=(0,p.$g)(n.clone(),n,!1,!1,this.transform),s=(0,p.di)(i,r,!1,!1);let o=null;switch(r){case"esriGeometryPoint":o="point";break;case"esriGeometryPolygon":o="polygon";break;case"esriGeometryPolyline":o="polyline";break;case"esriGeometryMultipoint":o="multipoint"}s.type=o,t.queryGeometryType=r,t.queryGeometry=s}prepareFeatures(t){switch(this.transform=t.transform,this.options.applyTransform&&t.transform&&(this.applyTransform=this._deriveApplyTransform(t)),this.vertexDimension=2,t.hasZ&&this.vertexDimension++,t.hasM&&this.vertexDimension++,t.geometryType){case"point":this.addCoordinate=(t,e,n)=>this.addCoordinatePoint(t,e,n),this.createGeometry=t=>this.createPointGeometry(t);break;case"polygon":this.addCoordinate=(t,e,n)=>this._addCoordinatePolygon(t,e,n),this.createGeometry=t=>this._createPolygonGeometry(t);break;case"polyline":this.addCoordinate=(t,e,n)=>this._addCoordinatePolyline(t,e,n),this.createGeometry=t=>this._createPolylineGeometry(t);break;case"multipoint":this.addCoordinate=(t,e,n)=>this._addCoordinateMultipoint(t,e,n),this.createGeometry=t=>this._createMultipointGeometry(t);break;case"mesh":case"extent":break;default:(0,r.Bg)(t.geometryType)}}createFeature(){return this.lengths.length=0,this.currentLengthIndex=0,this.previousCoordinate[0]=0,this.previousCoordinate[1]=0,new c((0,s.D)(),null,new this._attributesConstructor)}allocateCoordinates(){const t=this.lengths.reduce(((t,e)=>t+e),0);this.coordinateBuffer=new Float64Array(t*this.vertexDimension),this.coordinateBufferPtr=0}addLength(t,e,n){0===this.lengths.length&&(this.toAddInCurrentPath=e),this.lengths.push(e)}createPointGeometry(t){const e={type:"point",x:0,y:0,spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM};return e.hasZ&&(e.z=0),e.hasM&&(e.m=0),e}addCoordinatePoint(t,e,n){switch(e=this.applyTransform(this.transform,e,n,0),n){case 0:t.x=e;break;case 1:t.y=e;break;case 2:t.hasZ?t.z=e:t.m=e;break;case 3:t.m=e}}_transformPathLikeValue(t,e){let n=0;return e<=1&&(n=this.previousCoordinate[e],this.previousCoordinate[e]+=t),this.applyTransform(this.transform,t,e,n)}_addCoordinatePolyline(t,e,n){this._dehydratedAddPointsCoordinate(t.paths,e,n)}_addCoordinatePolygon(t,e,n){this._dehydratedAddPointsCoordinate(t.rings,e,n)}_addCoordinateMultipoint(t,e,n){0===n&&t.points.push([]);const r=this._transformPathLikeValue(e,n);t.points[t.points.length-1].push(r)}_createPolygonGeometry(t){return{type:"polygon",rings:[[]],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}_createPolylineGeometry(t){return{type:"polyline",paths:[[]],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}_createMultipointGeometry(t){return{type:"multipoint",points:[],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}_dehydratedAddPointsCoordinate(t,e,n){0===n&&0==this.toAddInCurrentPath--&&(t.push([]),this.toAddInCurrentPath=this.lengths[++this.currentLengthIndex]-1,this.previousCoordinate[0]=0,this.previousCoordinate[1]=0);const r=this._transformPathLikeValue(e,n),i=t[t.length-1];0===n&&i.push(new Float64Array(this.coordinateBuffer.buffer,this.coordinateBufferPtr*Float64Array.BYTES_PER_ELEMENT,this.vertexDimension)),this.coordinateBuffer[this.coordinateBufferPtr++]=r}_deriveApplyTransform(t){const{hasZ:e,hasM:n}=t;return e&&n?C:e?y:n?g:m}}var _=n(75844);class v{_parseFeatureQuery(t){const e=(0,_.C)(t.buffer,new b(t.options)),n={...e,spatialReference:e.spatialReference.toJSON(),fields:e.fields?e.fields.map((t=>t.toJSON())):void 0};return Promise.resolve(n)}}function G(){return new v}}}]);
//# sourceMappingURL=515.c1e33282.js.map