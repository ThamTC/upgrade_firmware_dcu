"use strict";(self["webpackChunkclient"]=self["webpackChunkclient"]||[]).push([[2278],{7505:function(n,e,t){t.d(e,{G6:function(){return S},Ie:function(){return N},J9:function(){return C},RF:function(){return I},U1:function(){return D},vY:function(){return s},ym:function(){return w}});var a=t(61681),i=t(53736);const l=(n,e,t)=>[e,t],o=(n,e,t)=>[e,t,n[2]],r=(n,e,t)=>[e,t,n[2],n[3]];function s(n){return n?{originPosition:"upper-left"===n.originPosition?"upperLeft":"lower-left"===n.originPosition?"lowerLeft":n.originPosition,scale:n.tolerance?[n.tolerance,n.tolerance]:[1,1],translate:(0,a.pC)(n.extent)?[n.extent.xmin,n.extent.ymax]:[0,0]}:null}function u({scale:n,translate:e},t){return Math.round((t-e[0])/n[0])}function c({scale:n,translate:e},t){return Math.round((e[1]-t)/n[1])}function f(n,e,t){const a=[];let i,l,o,r;for(let s=0;s<t.length;s++){const f=t[s];s>0?(o=u(n,f[0]),r=c(n,f[1]),o===i&&r===l||(a.push(e(f,o-i,r-l)),i=o,l=r)):(i=u(n,f[0]),l=c(n,f[1]),a.push(e(f,i,l)))}return a.length>0?a:null}function m(n,e,t,a){return f(n,t?a?r:o:a?o:l,e)}function d(n,e,t,a){const i=[],s=t?a?r:o:a?o:l;for(let l=0;l<e.length;l++){const t=f(n,s,e[l]);t&&t.length>=3&&i.push(t)}return i.length?i:null}function p(n,e,t,a){const i=[],s=t?a?r:o:a?o:l;for(let l=0;l<e.length;l++){const t=f(n,s,e[l]);t&&t.length>=2&&i.push(t)}return i.length?i:null}function h({scale:n,translate:e},t){return t*n[0]+e[0]}function v({scale:n,translate:e},t){return e[1]-t*n[1]}function b(n,e,t){const a=new Array(t.length);if(!t.length)return a;const[i,l]=n.scale;let o=h(n,t[0][0]),r=v(n,t[0][1]);a[0]=e(t[0],o,r);for(let s=1;s<t.length;s++){const n=t[s];o+=n[0]*i,r-=n[1]*l,a[s]=e(n,o,r)}return a}function y(n,e,t){const a=new Array(t.length);for(let i=0;i<t.length;i++)a[i]=b(n,e,t[i]);return a}function x(n,e,t,a){return b(n,t?a?r:o:a?o:l,e)}function V(n,e,t,a){return y(n,t?a?r:o:a?o:l,e)}function g(n,e,t,a){return y(n,t?a?r:o:a?o:l,e)}function z(n,e,t,a,i){return e.xmin=u(n,t.xmin),e.ymin=c(n,t.ymin),e.xmax=u(n,t.xmax),e.ymax=c(n,t.ymax),e!==t&&(a&&(e.zmin=t.zmin,e.zmax=t.zmax),i&&(e.mmin=t.mmin,e.mmax=t.mmax)),e}function T(n,e,t,a,i){return e.points=m(n,t.points,a,i),e}function I(n,e,t,a,i){return e.x=u(n,t.x),e.y=c(n,t.y),e!==t&&(a&&(e.z=t.z),i&&(e.m=t.m)),e}function F(n,e,t,a,i){const l=d(n,t.rings,a,i);return l?(e.rings=l,e):null}function M(n,e,t,a,i){const l=p(n,t.paths,a,i);return l?(e.paths=l,e):null}function w(n,e){return n&&e?(0,i.wp)(e)?I(n,{},e,!1,!1):(0,i.l9)(e)?M(n,{},e,!1,!1):(0,i.oU)(e)?F(n,{},e,!1,!1):(0,i.aW)(e)?T(n,{},e,!1,!1):(0,i.YX)(e)?z(n,{},e,!1,!1):null:null}function C(n,e,t,i,l){return(0,a.pC)(t)&&(e.points=x(n,t.points,i,l)),e}function D(n,e,t,i,l){return(0,a.Wi)(t)||(e.x=h(n,t.x),e.y=v(n,t.y),e!==t&&(i&&(e.z=t.z),l&&(e.m=t.m))),e}function N(n,e,t,i,l){return(0,a.pC)(t)&&(e.rings=g(n,t.rings,i,l)),e}function S(n,e,t,i,l){return(0,a.pC)(t)&&(e.paths=V(n,t.paths,i,l)),e}},64486:function(n,e,t){t.d(e,{Z:function(){return v}});var a=t(36663),i=t(25709),l=t(81977),o=(t(7753),t(39994),t(7283),t(40266)),r=t(72285),s=t(81657),u=t(18251);const c=new i.X({classBreaksDef:"class-breaks-definition",uniqueValueDef:"unique-value-definition"});let f=class extends r.wq{constructor(){super(...arguments),this.baseSymbol=null,this.colorRamp=null,this.type=null}};(0,a._)([(0,l.Cb)({type:u.Z,json:{write:!0}})],f.prototype,"baseSymbol",void 0),(0,a._)([(0,l.Cb)({types:s.V,json:{read:{reader:s.i},write:!0}})],f.prototype,"colorRamp",void 0),(0,a._)([(0,l.Cb)({json:{read:c.read,write:c.write}})],f.prototype,"type",void 0),f=(0,a._)([(0,o.j)("esri.rest.support.ClassificationDefinition")],f);const m=f,d=new i.X({esriClassifyEqualInterval:"equal-interval",esriClassifyManual:"manual",esriClassifyNaturalBreaks:"natural-breaks",esriClassifyQuantile:"quantile",esriClassifyStandardDeviation:"standard-deviation",esriClassifyDefinedInterval:"defined-interval"}),p=new i.X({esriNormalizeByLog:"log",esriNormalizeByPercentOfTotal:"percent-of-total",esriNormalizeByField:"field"});let h=class extends m{constructor(){super(...arguments),this.breakCount=null,this.classificationField=null,this.classificationMethod=null,this.normalizationField=null,this.normalizationType=null,this.type="class-breaks-definition"}set standardDeviationInterval(n){"standard-deviation"===this.classificationMethod&&this._set("standardDeviationInterval",n)}set definedInterval(n){"defined-interval"===this.classificationMethod&&this._set("definedInterval",n)}};(0,a._)([(0,l.Cb)({json:{write:!0}})],h.prototype,"breakCount",void 0),(0,a._)([(0,l.Cb)({json:{write:!0}})],h.prototype,"classificationField",void 0),(0,a._)([(0,l.Cb)({type:String,json:{read:d.read,write:d.write}})],h.prototype,"classificationMethod",void 0),(0,a._)([(0,l.Cb)({json:{write:!0}})],h.prototype,"normalizationField",void 0),(0,a._)([(0,l.Cb)({json:{read:p.read,write:p.write}})],h.prototype,"normalizationType",void 0),(0,a._)([(0,l.Cb)({value:null,json:{write:!0}})],h.prototype,"standardDeviationInterval",null),(0,a._)([(0,l.Cb)({value:null,json:{write:!0}})],h.prototype,"definedInterval",null),(0,a._)([(0,l.Cb)()],h.prototype,"type",void 0),h=(0,a._)([(0,o.j)("esri.rest.support.ClassBreaksDefinition")],h);const v=h},12278:function(n,e,t){t.r(e),t.d(e,{classBreaks:function(){return x},heatmapStatistics:function(){return g},histogram:function(){return V},summaryStatistics:function(){return b},uniqueValues:function(){return y}});t(91957),t(70375);var a=t(61681),i=t(95550),l=t(14685),o=t(7505),r=t(35925),s=(t(99294),t(94672)),u=t(33397),c=t(30879),f=t(86566);let m=null;function d(n,e,t){return n.x<0?n.x+=e:n.x>t&&(n.x-=e),n}function p(n,e,t,i){const l=(0,r.MP)(t)?(0,r.C5)(t):null,s=l?Math.round((l.valid[1]-l.valid[0])/e.scale[0]):null;return n.map((n=>{const t=new f.Z((0,a.Wg)(n.geometry));return(0,o.RF)(e,t,t,t.hasZ,t.hasM),n.geometry=l?d(t,s,i[0]):t,n}))}function h(n,e=18,t,a,l,o){const r=new Float64Array(l*o);e=Math.round((0,i.F2)(e));let u=Number.POSITIVE_INFINITY,c=Number.NEGATIVE_INFINITY,f=0,m=0,d=0,p=0;const h=(0,s.wx)(a,t);for(const{geometry:i,attributes:b}of n){const{x:n,y:t}=i,a=Math.max(0,n-e),v=Math.max(0,t-e),y=Math.min(o,t+e),x=Math.min(l,n+e),V=+h(b);for(let i=v;i<y;i++)for(let o=a;o<x;o++){const a=i*l+o,h=(0,s.If)(o-n,i-t,e),v=r[a];f=r[a]+=h*V;const b=f-v;m+=b,d+=b*b,f<u&&(u=f),f>c&&(c=f),p++}}if(!p)return{mean:0,stddev:0,min:0,max:0,mid:0,count:0};const v=(c-u)/2;return{mean:m/p,stdDev:Math.sqrt((d-m*m/p)/p),min:u,max:c,mid:v,count:p}}async function v(n,e){if(!e)return[];const t=n.field,a=n.valueExpression,i=n.normalizationType,o=n.normalizationField,r=n.normalizationTotal,s=[],f=n.viewInfoParams;let d=null,p=null;if(a){if(!m){const{arcadeUtils:n}=await(0,c.LC)();m=n}d=m.createFunction(a),p=f&&m.getViewInfo({viewingMode:f.viewingMode,scale:f.scale,spatialReference:new l.Z(f.spatialReference)})}const h=n.fieldInfos,v=e[0]&&"declaredClass"in e[0]&&"esri.Graphic"===e[0].declaredClass||!h?null:{fields:h};return e.forEach((n=>{const e=n.attributes;let l;if(a){const e=v?{...n,layer:v}:n,t=m.createExecContext(e,p);l=m.executeFunction(d,t)}else e&&(l=e[t]);if(i&&isFinite(l)){const n=e&&parseFloat(e[o]);l=(0,u.fk)(l,i,n,r)}s.push(l)})),s}async function b(n){const{attribute:e,features:t}=n,{normalizationType:a,normalizationField:i,minValue:l,maxValue:o,fieldType:r}=e,s=await v({field:e.field,valueExpression:e.valueExpression,normalizationType:a,normalizationField:i,normalizationTotal:e.normalizationTotal,viewInfoParams:e.viewInfoParams,fieldInfos:e.fieldInfos},t),c=(0,u.S5)({normalizationType:a,normalizationField:i,minValue:l,maxValue:o}),f={value:.5,fieldType:r},m="esriFieldTypeString"===r?(0,u.H0)({values:s,supportsNullCount:c,percentileParams:f}):(0,u.i5)({values:s,minValue:l,maxValue:o,useSampleStdDev:!a,supportsNullCount:c,percentileParams:f});return(0,u.F_)(m,"esriFieldTypeDate"===r)}async function y(n){const{attribute:e,features:t}=n,a=await v({field:e.field,valueExpression:e.valueExpression,viewInfoParams:e.viewInfoParams,fieldInfos:e.fieldInfos},t),i=(0,u.eT)(a);return(0,u.Qm)(i,e.domain,e.returnAllCodedValues)}async function x(n){const{attribute:e,features:t}=n,{field:a,normalizationType:i,normalizationField:l,normalizationTotal:o,classificationMethod:r}=e,s=await v({field:a,valueExpression:e.valueExpression,normalizationType:i,normalizationField:l,normalizationTotal:o,viewInfoParams:e.viewInfoParams,fieldInfos:e.fieldInfos},t),c=(0,u.G2)(s,{field:a,normalizationType:i,normalizationField:l,normalizationTotal:o,classificationMethod:r,standardDeviationInterval:e.standardDeviationInterval,numClasses:e.numClasses,minValue:e.minValue,maxValue:e.maxValue});return(0,u.DL)(c,r)}async function V(n){const{attribute:e,features:t}=n,{field:a,normalizationType:i,normalizationField:l,normalizationTotal:o,classificationMethod:r}=e,s=await v({field:a,valueExpression:e.valueExpression,normalizationType:i,normalizationField:l,normalizationTotal:o,viewInfoParams:e.viewInfoParams,fieldInfos:e.fieldInfos},t);return(0,u.oF)(s,{field:a,normalizationType:i,normalizationField:l,normalizationTotal:o,classificationMethod:r,standardDeviationInterval:e.standardDeviationInterval,numBins:e.numBins,minValue:e.minValue,maxValue:e.maxValue})}async function g(n){const{attribute:e,features:t}=n,{field:a,radius:i,fieldOffset:l,transform:o,spatialReference:r,size:s}=e,u=p(t,o,r,s),{count:c,min:f,max:m,mean:d,stdDev:v}=h(u,i,l,a,s[0],s[1]);return{count:c,min:f,max:m,avg:d,stddev:v}}},33397:function(n,e,t){t.d(e,{G2:function(){return P},oF:function(){return G},XL:function(){return M},i5:function(){return F},H0:function(){return I},eT:function(){return k},Qm:function(){return E},Lq:function(){return w},fk:function(){return q},S5:function(){return T},F_:function(){return S},DL:function(){return j}});var a=t(64486);function i(n,e){return Number(n.toFixed(e))}function l(n){const{normalizationTotal:e}=n;return{classBreaks:o(n),normalizationTotal:e}}function o(n){const e=n.definition,{classificationMethod:t,breakCount:a,normalizationType:l,definedInterval:o}=e,c=[];let f=n.values;if(0===f.length)return[];f=f.sort(((n,e)=>n-e));const h=f[0],v=f[f.length-1];if("equal-interval"===t)if(f.length>=a){const n=(v-h)/a;let e=h;for(let t=1;t<a;t++){const a=i(h+t*n,6);c.push({minValue:e,maxValue:a,label:r(e,a,l)}),e=a}c.push({minValue:e,maxValue:v,label:r(e,v,l)})}else f.forEach((n=>{c.push({minValue:n,maxValue:n,label:r(n,n,l)})}));else if("natural-breaks"===t){const e=s(f),t=n.valueFrequency||e.valueFrequency,o=u(e.uniqueValues,t,a);let m=h;for(let n=1;n<a;n++)if(e.uniqueValues.length>n){const t=i(e.uniqueValues[o[n]],6);c.push({minValue:m,maxValue:t,label:r(m,t,l)}),m=t}c.push({minValue:m,maxValue:v,label:r(m,v,l)})}else if("quantile"===t)if(f.length>=a&&h!==v){let n=h,e=Math.ceil(f.length/a),t=0;for(let i=1;i<a;i++){let o=e+t-1;o>f.length&&(o=f.length-1),o<0&&(o=0),c.push({minValue:n,maxValue:f[o],label:r(n,f[o],l)}),n=f[o],t+=e,e=Math.ceil((f.length-t)/(a-i))}c.push({minValue:n,maxValue:v,label:r(n,v,l)})}else{let n=-1;for(let e=0;e<f.length;e++){const t=f[e];t!==n&&(n=t,c.push({minValue:n,maxValue:t,label:r(n,t,l)}),n=t)}}else if("standard-deviation"===t){const n=d(f),e=p(f,n);if(0===e)c.push({minValue:f[0],maxValue:f[0],label:r(f[0],f[0],l)});else{const t=m(h,v,a,n,e)*e;let o=0,s=h;for(let e=a;e>=1;e--){const a=i(n-(e-.5)*t,6);c.push({minValue:s,maxValue:a,label:r(s,a,l)}),s=a,o++}let u=i(n+.5*t,6);c.push({minValue:s,maxValue:u,label:r(s,u,l)}),s=u,o++;for(let e=1;e<=a;e++)u=o===2*a?v:i(n+(e+.5)*t,6),c.push({minValue:s,maxValue:u,label:r(s,u,l)}),s=u,o++}}else if("defined-interval"===t){if(!o)return c;const n=f[0],e=f[f.length-1],t=Math.ceil((e-n)/o);let a=n;for(let s=1;s<t;s++){const e=i(n+s*o,6);c.push({minValue:a,maxValue:e,label:r(a,e,l)}),a=e}c.push({minValue:a,maxValue:e,label:r(a,e,l)})}return c}function r(n,e,t){let a=null;return a=n===e?t&&"percent-of-total"===t?n+"%":n.toString():t&&"percent-of-total"===t?n+"% - "+e+"%":n+" - "+e,a}function s(n){const e=[],t=[];let a=Number.MIN_VALUE,i=1,l=-1;for(let o=0;o<n.length;o++){const r=n[o];r===a?(i++,t[l]=i):null!==r&&(e.push(r),a=r,i=1,t.push(i),l++)}return{uniqueValues:e,valueFrequency:t}}function u(n,e,t){const a=n.length,i=[];t>a&&(t=a);for(let o=0;o<t;o++)i.push(Math.round(o*a/t-1));i.push(a-1);let l=c(i,n,e,t);return f(l.mean,l.sdcm,i,n,e,t)&&(l=c(i,n,e,t)),i}function c(n,e,t,a){let i=[],l=[],o=[],r=0;const s=[],u=[];for(let d=0;d<a;d++){const a=h(d,n,e,t);s.push(a.sbMean),u.push(a.sbSdcm),r+=u[d]}let c,f=r,m=!0;for(;m||r<f;){m=!1,i=[];for(let e=0;e<a;e++)i.push(n[e]);for(let t=0;t<a;t++)for(let i=n[t]+1;i<=n[t+1];i++)if(c=e[i],t>0&&i!==n[t+1]&&Math.abs(c-s[t])>Math.abs(c-s[t-1]))n[t]=i;else if(t<a-1&&n[t]!==i-1&&Math.abs(c-s[t])>Math.abs(c-s[t+1])){n[t+1]=i-1;break}f=r,r=0,l=[],o=[];for(let i=0;i<a;i++){l.push(s[i]),o.push(u[i]);const a=h(i,n,e,t);s[i]=a.sbMean,u[i]=a.sbSdcm,r+=u[i]}}if(r>f){for(let e=0;e<a;e++)n[e]=i[e],s[e]=l[e],u[e]=o[e];r=f}return{mean:s,sdcm:u}}function f(n,e,t,a,i,l){let o=0,r=0,s=0,u=0,c=!0;for(let f=0;f<2&&c;f++){0===f&&(c=!1);for(let f=0;f<l-1;f++)for(;t[f+1]+1!==t[f+2];){t[f+1]=t[f+1]+1;const l=h(f,t,a,i);s=l.sbMean,o=l.sbSdcm;const m=h(f+1,t,a,i);if(u=m.sbMean,r=m.sbSdcm,!(o+r<e[f]+e[f+1])){t[f+1]=t[f+1]-1;break}e[f]=o,e[f+1]=r,n[f]=s,n[f+1]=u,c=!0}for(let f=l-1;f>0;f--)for(;t[f]!==t[f-1]+1;){t[f]=t[f]-1;const l=h(f-1,t,a,i);s=l.sbMean,o=l.sbSdcm;const m=h(f,t,a,i);if(u=m.sbMean,r=m.sbSdcm,!(o+r<e[f-1]+e[f])){t[f]=t[f]+1;break}e[f-1]=o,e[f]=r,n[f-1]=s,n[f]=u,c=!0}}return c}function m(n,e,t,a,i){let l=Math.max(a-n,e-a)/i/t;return l=l>=1?1:l>=.5?.5:.25,l}function d(n){let e=0;for(let t=0;t<n.length;t++)e+=n[t];return e/=n.length,e}function p(n,e){let t=0;for(let a=0;a<n.length;a++){const i=n[a];t+=(i-e)*(i-e)}return t/=n.length,Math.sqrt(t)}function h(n,e,t,a){let i=0,l=0;for(let s=e[n]+1;s<=e[n+1];s++){const n=a[s];i+=t[s]*n,l+=n}l<=0&&console.log("Exception in Natural Breaks calculation");const o=i/l;let r=0;for(let s=e[n]+1;s<=e[n+1];s++)r+=a[s]*(t[s]-o)**2;return{sbMean:o,sbSdcm:r}}const v="equal-interval",b=1,y=5,x=10,V=/\s*(\+|-)?((\d+(\.\d+)?)|(\.\d+))\s*/gi,g=new Set(["esriFieldTypeInteger","esriFieldTypeSmallInteger","esriFieldTypeSingle","esriFieldTypeDouble"]),z=["min","max","avg","stddev","count","sum","variance","nullcount","median"];function T(n){const e=null!=n.normalizationField||null!=n.normalizationType,t=null!=n.minValue||null!=n.maxValue,a=!!n.sqlExpression&&n.supportsSQLExpression;return!e&&!t&&!a}function I(n){const e=n.returnDistinct?[...new Set(n.values)]:n.values,t=e.filter((n=>null!=n)).length,a={count:t};return n.supportsNullCount&&(a.nullcount=e.length-t),n.percentileParams&&(a.median=M(e,n.percentileParams)),a}function F(n){const{values:e,useSampleStdDev:t,supportsNullCount:a}=n;let i=Number.POSITIVE_INFINITY,l=Number.NEGATIVE_INFINITY,o=null,r=null,s=null,u=null,c=0;const f=null==n.minValue?-1/0:n.minValue,m=null==n.maxValue?1/0:n.maxValue;for(const p of e)Number.isFinite(p)?p>=f&&p<=m&&(o+=p,i=Math.min(i,p),l=Math.max(l,p),c++):"string"==typeof p&&c++;if(c&&null!=o){r=o/c;let n=0;for(const t of e)Number.isFinite(t)&&t>=f&&t<=m&&(n+=(t-r)**2);u=t?c>1?n/(c-1):0:c>0?n/c:0,s=Math.sqrt(u)}else i=null,l=null;const d={avg:r,count:c,max:l,min:i,stddev:s,sum:o,variance:u};return a&&(d.nullcount=e.length-c),n.percentileParams&&(d.median=M(e,n.percentileParams)),d}function M(n,e){const{fieldType:t,value:a,orderBy:i,isDiscrete:l}=e,o=w(t,"desc"===i);if(0===(n=[...n].filter((n=>null!=n)).sort(((n,e)=>o(n,e)))).length)return null;if(a<=0)return n[0];if(a>=1)return n[n.length-1];const r=(n.length-1)*a,s=Math.floor(r),u=s+1,c=r%1,f=n[s],m=n[u];return u>=n.length||l||"string"==typeof f||"string"==typeof m?f:f*(1-c)+m*c}function w(n,e){const t=e?1:-1,a=D(e),i=C(e);if(!n||!["esriFieldTypeDate","esriFieldTypeString","esriFieldTypeGUID","esriFieldTypeGlobalID",...g].includes(n))return(n,e)=>"number"==typeof n&&"number"==typeof e?a(n,e):"string"==typeof n&&"string"==typeof e?i(n,e):t;if("esriFieldTypeDate"===n)return(n,e)=>{const i=new Date(n).getTime(),l=new Date(e).getTime();return isNaN(i)||isNaN(l)?t:a(i,l)};if(g.has(n))return(n,e)=>a(n,e);if("esriFieldTypeString"===n)return(n,e)=>i(n,e);if("esriFieldTypeGUID"===n||"esriFieldTypeGlobalID"===n){const n=C(e);return(e,t)=>n(N(e),N(t))}return e?(n,e)=>1:(n,e)=>-1}function C(n){return n?(n,e)=>(n=n?.toUpperCase(),e=e?.toUpperCase(),n>e?-1:n<e?1:0):(n,e)=>(n=n?.toUpperCase(),e=e?.toUpperCase(),n<e?-1:n>e?1:0)}function D(n){return n?(n,e)=>e-n:(n,e)=>n-e}function N(n){return n.substr(24,12)+n.substr(19,4)+n.substr(16,2)+n.substr(14,2)+n.substr(11,2)+n.substr(9,2)+n.substr(6,2)+n.substr(4,2)+n.substr(2,2)+n.substr(0,2)}function S(n,e){let t;for(t in n)z.includes(t)&&(Number.isFinite(n[t])||(n[t]=null));return e?(["avg","stddev","variance"].forEach((e=>{null!=n[e]&&(n[e]=Math.ceil(n[e]))})),n):n}function k(n){const e={};for(let t of n)(null==t||"string"==typeof t&&""===t.trim())&&(t=null),null==e[t]?e[t]={count:1,data:t}:e[t].count++;return{count:e}}function E(n,e,t){const a=n.count,i=[];t&&e&&"coded-value"===e.type&&e.codedValues.forEach((n=>{const e=n.code;a.hasOwnProperty(e)||(a[e]={data:e,count:0})}));for(const l in a){const n=a[l];i.push({value:n.data,count:n.count,label:n.label})}return{uniqueValueInfos:i}}function q(n,e,t,a){let i=null;switch(e){case"log":0!==n&&(i=Math.log(n)*Math.LOG10E);break;case"percent-of-total":Number.isFinite(a)&&0!==a&&(i=n/a*100);break;case"field":Number.isFinite(t)&&0!==t&&(i=n/t);break;case"natural-log":n>0&&(i=Math.log(n));break;case"square-root":n>0&&(i=n**.5)}return i}function P(n,e){const t=B({field:e.field,normalizationType:e.normalizationType,normalizationField:e.normalizationField,classificationMethod:e.classificationMethod,standardDeviationInterval:e.standardDeviationInterval,breakCount:e.numClasses||y});return n=_(n,e.minValue,e.maxValue),l({definition:t,values:n,normalizationTotal:e.normalizationTotal})}function _(n,e,t){return e=null==e?-1/0:e,t=null==t?1/0:t,n.filter((n=>Number.isFinite(n)&&n>=e&&n<=t))}function B(n){const e=n.field,t=n.classificationMethod||v,i=n.normalizationType,l=n.normalizationField,o=new a.Z;return o.classificationField=e,o.breakCount=n.breakCount,o.classificationMethod=t,o.standardDeviationInterval="standard-deviation"===t?n.standardDeviationInterval||b:void 0,o.normalizationType=i,o.normalizationField="field"===i?l:void 0,o}function j(n,e){let t=n.classBreaks;const a=t.length,i=t[0].minValue,l=t[a-1].maxValue,o="standard-deviation"===e,r=V;return t=t.map((n=>{const e=n.label,t={minValue:n.minValue,maxValue:n.maxValue,label:e};if(o&&e){const n=e.match(r).map((n=>+n.trim()));2===n.length?(t.minStdDev=n[0],t.maxStdDev=n[1],n[0]<0&&n[1]>0&&(t.hasAvg=!0)):1===n.length&&(e.includes("<")?(t.minStdDev=null,t.maxStdDev=n[0]):e.includes(">")&&(t.minStdDev=n[0],t.maxStdDev=null))}return t})),{minValue:i,maxValue:l,classBreakInfos:t,normalizationTotal:n.normalizationTotal}}function G(n,e){const{min:t,max:a,intervals:i}=L(n,e),l=i.map(((n,e)=>({minValue:i[e][0],maxValue:i[e][1],count:0})));for(const o of n)if(null!=o&&o>=t&&o<=a){const n=U(i,o);n>-1&&l[n].count++}return{bins:l,minValue:t,maxValue:a,normalizationTotal:e.normalizationTotal}}function L(n,e){const{field:t,classificationMethod:a,standardDeviationInterval:i,normalizationType:l,normalizationField:o,normalizationTotal:r,minValue:s,maxValue:u}=e,c=e.numBins||x;let f=null,m=null,d=null;if(a&&"equal-interval"!==a||l){const{classBreaks:e}=P(n,{field:t,normalizationType:l,normalizationField:o,normalizationTotal:r,classificationMethod:a,standardDeviationInterval:i,minValue:s,maxValue:u,numClasses:c});f=e[0].minValue,m=e[e.length-1].maxValue,d=e.map((n=>[n.minValue,n.maxValue]))}else{if(null!=s&&null!=u)f=s,m=u;else{const e=F({values:n,minValue:s,maxValue:u,useSampleStdDev:!l,supportsNullCount:T({normalizationType:l,normalizationField:o,minValue:s,maxValue:u})});f=e.min,m=e.max}d=A(f,m,c)}return{min:f,max:m,intervals:d}}function U(n,e){let t=-1;for(let a=n.length-1;a>=0;a--)if(e>=n[a][0]){t=a;break}return t}function A(n,e,t){const a=(e-n)/t,i=[];let l,o=n;for(let r=1;r<=t;r++)l=o+a,l=Number(l.toFixed(16)),i.push([o,r===t?e:l]),o=l;return i}}}]);
//# sourceMappingURL=2278.2289e81a.js.map