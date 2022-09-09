"use strict";(self["webpackChunkclient"]=self["webpackChunkclient"]||[]).push([[7152],{7505:function(e,t,n){n.d(t,{G6:function(){return M},Ie:function(){return D},J9:function(){return w},RF:function(){return T},U1:function(){return C},vY:function(){return o},ym:function(){return z}});var i=n(61681),s=n(53736);const a=(e,t,n)=>[t,n],r=(e,t,n)=>[t,n,e[2]],l=(e,t,n)=>[t,n,e[2],e[3]];function o(e){return e?{originPosition:"upper-left"===e.originPosition?"upperLeft":"lower-left"===e.originPosition?"lowerLeft":e.originPosition,scale:e.tolerance?[e.tolerance,e.tolerance]:[1,1],translate:(0,i.pC)(e.extent)?[e.extent.xmin,e.extent.ymax]:[0,0]}:null}function u({scale:e,translate:t},n){return Math.round((n-t[0])/e[0])}function c({scale:e,translate:t},n){return Math.round((t[1]-n)/e[1])}function f(e,t,n){const i=[];let s,a,r,l;for(let o=0;o<n.length;o++){const f=n[o];o>0?(r=u(e,f[0]),l=c(e,f[1]),r===s&&l===a||(i.push(t(f,r-s,l-a)),s=r,a=l)):(s=u(e,f[0]),a=c(e,f[1]),i.push(t(f,s,a)))}return i.length>0?i:null}function d(e,t,n,i){return f(e,n?i?l:r:i?r:a,t)}function m(e,t,n,i){const s=[],o=n?i?l:r:i?r:a;for(let a=0;a<t.length;a++){const n=f(e,o,t[a]);n&&n.length>=3&&s.push(n)}return s.length?s:null}function h(e,t,n,i){const s=[],o=n?i?l:r:i?r:a;for(let a=0;a<t.length;a++){const n=f(e,o,t[a]);n&&n.length>=2&&s.push(n)}return s.length?s:null}function p({scale:e,translate:t},n){return n*e[0]+t[0]}function g({scale:e,translate:t},n){return t[1]-n*e[1]}function y(e,t,n){const i=new Array(n.length);if(!n.length)return i;const[s,a]=e.scale;let r=p(e,n[0][0]),l=g(e,n[0][1]);i[0]=t(n[0],r,l);for(let o=1;o<n.length;o++){const e=n[o];r+=e[0]*s,l-=e[1]*a,i[o]=t(e,r,l)}return i}function x(e,t,n){const i=new Array(n.length);for(let s=0;s<n.length;s++)i[s]=y(e,t,n[s]);return i}function b(e,t,n,i){return y(e,n?i?l:r:i?r:a,t)}function v(e,t,n,i){return x(e,n?i?l:r:i?r:a,t)}function V(e,t,n,i){return x(e,n?i?l:r:i?r:a,t)}function F(e,t,n,i,s){return t.xmin=u(e,n.xmin),t.ymin=c(e,n.ymin),t.xmax=u(e,n.xmax),t.ymax=c(e,n.ymax),t!==n&&(i&&(t.zmin=n.zmin,t.zmax=n.zmax),s&&(t.mmin=n.mmin,t.mmax=n.mmax)),t}function I(e,t,n,i,s){return t.points=d(e,n.points,i,s),t}function T(e,t,n,i,s){return t.x=u(e,n.x),t.y=c(e,n.y),t!==n&&(i&&(t.z=n.z),s&&(t.m=n.m)),t}function S(e,t,n,i,s){const a=m(e,n.rings,i,s);return a?(t.rings=a,t):null}function _(e,t,n,i,s){const a=h(e,n.paths,i,s);return a?(t.paths=a,t):null}function z(e,t){return e&&t?(0,s.wp)(t)?T(e,{},t,!1,!1):(0,s.l9)(t)?_(e,{},t,!1,!1):(0,s.oU)(t)?S(e,{},t,!1,!1):(0,s.aW)(t)?I(e,{},t,!1,!1):(0,s.YX)(t)?F(e,{},t,!1,!1):null:null}function w(e,t,n,s,a){return(0,i.pC)(n)&&(t.points=b(e,n.points,s,a)),t}function C(e,t,n,s,a){return(0,i.Wi)(n)||(t.x=p(e,n.x),t.y=g(e,n.y),t!==n&&(s&&(t.z=n.z),a&&(t.m=n.m))),t}function D(e,t,n,s,a){return(0,i.pC)(n)&&(t.rings=V(e,n.rings,s,a)),t}function M(e,t,n,s,a){return(0,i.pC)(n)&&(t.paths=v(e,n.paths,s,a)),t}},57152:function(e,t,n){n.d(t,{y:function(){return g},r:function(){return f}});var i=n(61681),s=n(18449),a=n(50842),r=n(7505),l=n(35925),o=n(85587),u=n(33397);class c{constructor(e,t,n){this._fieldDataCache=new Map,this._returnDistinctMap=new Map,this.returnDistinctValues=e.returnDistinctValues,this.fieldsIndex=n,this.featureAdapter=t;const i=e.outFields;if(i&&!i.includes("*")){this.outFields=i;let e=0;for(const t of i){const i=(0,o.hr)(t),s=this.fieldsIndex.get(i),a=s?null:(0,o.Jc)(i,n),r=s?s.name:(0,o.nu)(t)||"FIELD_EXP_"+e++;this._fieldDataCache.set(t,{alias:r,clause:a})}}}countDistinctValues(e){return this.returnDistinctValues?(e.forEach((e=>this.getAttributes(e))),this._returnDistinctMap.size):e.length}getAttributes(e){const t=this._processAttributesForOutFields(e);return this._processAttributesForDistinctValues(t)}getFieldValue(e,t,n){const i=n?n.name:t;let s=null;return this._fieldDataCache.has(i)?s=this._fieldDataCache.get(i).clause:n||(s=(0,o.Jc)(t,this.fieldsIndex),this._fieldDataCache.set(i,{alias:i,clause:s})),n?this.featureAdapter.getAttribute(e,i):s.calculateValue(e,this.featureAdapter)}getNormalizedValue(e,t){const n=t.normalizationType,i=t.normalizationTotal;let s=this.getFieldValue(e,t.field,t.fieldInfo);if(n&&Number.isFinite(s)){const a=this.getFieldValue(e,t.normalizationField,t.normalizationFieldInfo);s=(0,u.fk)(s,n,a,i)}return s}getExpressionValue(e,t,n,i){const s={attributes:this.featureAdapter.getAttributes(e),layer:{fields:this.fieldsIndex.fields}},a=i.createExecContext(s,n);return i.executeFunction(t,a)}getExpressionValues(e,t,n,i){const s={fields:this.fieldsIndex.fields};return e.map((e=>{const a={attributes:this.featureAdapter.getAttributes(e),layer:s},r=i.createExecContext(a,n);return i.executeFunction(t,r)}))}validateItem(e,t){return this._fieldDataCache.has(t)||this._fieldDataCache.set(t,{alias:t,clause:(0,o.Jc)(t,this.fieldsIndex)}),this._fieldDataCache.get(t).clause.testFeature(e,this.featureAdapter)}validateItems(e,t){return this._fieldDataCache.has(t)||this._fieldDataCache.set(t,{alias:t,clause:(0,o.Jc)(t,this.fieldsIndex)}),this._fieldDataCache.get(t).clause.testSet(e,this.featureAdapter)}_processAttributesForOutFields(e){const t=this.outFields;if(!t||!t.length)return this.featureAdapter.getAttributes(e);const n={};for(const i of t){const{alias:t,clause:s}=this._fieldDataCache.get(i);n[t]=s?s.calculateValue(e,this.featureAdapter):this.featureAdapter.getAttribute(e,t)}return n}_processAttributesForDistinctValues(e){if((0,i.Wi)(e)||!this.returnDistinctValues)return e;const t=this.outFields,n=[];if(t)for(const i of t){const{alias:t}=this._fieldDataCache.get(i);n.push(e[t])}else for(const i in e)n.push(e[i]);const s=`${(t||["*"]).join(",")}=${n.join(",")}`;let a=this._returnDistinctMap.get(s)||0;return this._returnDistinctMap.set(s,++a),a>1?null:e}}var f,d=n(66069),m=n(34398),h=n(99294),p=n(30879);class g{constructor(e,t,n){this.items=e,this.query=t,this.geometryType=n.geometryType,this.hasM=n.hasM,this.hasZ=n.hasZ,this.fieldsIndex=n.fieldsIndex,this.objectIdField=n.objectIdField,this.spatialReference=n.spatialReference,this.featureAdapter=n.featureAdapter}get size(){return this.items.length}createQueryResponseForCount(){const e=new c(this.query,this.featureAdapter,this.fieldsIndex);if(!this.query.outStatistics)return e.countDistinctValues(this.items);const{groupByFieldsForStatistics:t,having:n,outStatistics:i}=this.query,s=t?.length;if(!s)return 1;const a=new Map,r=new Map,l=new Set;for(const o of i){const{statisticType:i}=o,s="exceedslimit"!==i?o.onStatisticField:void 0;if(!r.has(s)){const n=[];for(const i of t){const t=this._getAttributeValues(e,i,a);n.push(t)}r.set(s,this._calculateUniqueValues(n,e.returnDistinctValues))}const u=r.get(s);for(const t in u){const{data:i,items:s}=u[t],a=i.join(",");n&&!e.validateItems(s,n)||l.add(a)}}return l.size}async createQueryResponse(){let e;return e=this.query.outStatistics?this.query.outStatistics.some((e=>"exceedslimit"===e.statisticType))?this._createExceedsLimitQueryResponse(this.query):await this._createStatisticsQueryResponse(this.query):this._createFeatureQueryResponse(this.query),this.query.returnQueryGeometry&&((0,l.JY)(this.query.outSR)&&!(0,l.fS)(this.query.geometry.spatialReference,this.query.outSR)?e.queryGeometry=(0,m.S2)({spatialReference:this.query.outSR,...(0,d.iV)(this.query.geometry,this.query.geometry.spatialReference,this.query.outSR)}):e.queryGeometry=(0,m.S2)({spatialReference:this.query.outSR,...this.query.geometry})),e}createSnappingResponse(e,t){const n=this.featureAdapter,s=x(this.hasZ,this.hasM),{x:a,y:r}=e.point,l="number"==typeof e.distance?e.distance:e.distance.x,o="number"==typeof e.distance?e.distance:e.distance.y,u={candidates:[]},c="esriGeometryPolygon"===this.geometryType,d=this._getPointCreator(e.point,this.spatialReference,t);for(const m of this.items){const t=n.getGeometry(m);if((0,i.Wi)(t))continue;const{coords:h,lengths:p}=t;if(e.types&f.EDGE){let e=0;for(let t=0;t<p.length;t++){const i=p[t];for(let t=0;t<i;t++,e+=s){const c=h[e],f=h[e+1];if(t!==i-1){const t=h[e+s],i=h[e+s+1],{x:p,y:g}=y(a,r,c,f,t,i),x=(a-p)/l,b=(r-g)/o,v=x*x+b*b;v<=1&&u.candidates.push({type:"edge",objectId:n.getObjectId(m),distance:Math.sqrt(v),target:d(p,g),start:d(c,f),end:d(t,i)})}}}}if(e.types&f.VERTEX){const e=c?h.length-s:h.length;for(let t=0;t<e;t+=s){const e=h[t],i=h[t+1],s=(a-e)/l,c=(r-i)/o,f=s*s+c*c;f<=1&&u.candidates.push({type:"vertex",objectId:n.getObjectId(m),distance:Math.sqrt(f),target:d(e,i)})}}}return u.candidates.sort(((e,t)=>e.distance-t.distance)),u}_getPointCreator(e,t,n){const s=(0,i.pC)(n)&&!(0,l.fS)(t,n)?e=>(0,d.iV)(e,t,n):e=>e;return null!=e.z&&null!=e.m?(t,n)=>s({x:t,y:n,z:e.z,m:e.m}):null!=e.z?(t,n)=>s({x:t,y:n,z:e.z}):null!=e.m?(t,n)=>s({x:t,y:n,m:e.m}):(e,t)=>s({x:e,y:t})}async createSummaryStatisticsResponse(e){const{field:t,valueExpression:n,normalizationField:i,normalizationType:s,normalizationTotal:a,minValue:r,maxValue:l,scale:o}=e,c=this.fieldsIndex.isDateField(t),f=await this._getDataValues({field:t,valueExpression:n,normalizationField:i,normalizationType:s,normalizationTotal:a,scale:o}),d=(0,u.S5)({normalizationType:s,normalizationField:i,minValue:r,maxValue:l}),m=this.fieldsIndex.get(t),p={value:.5,fieldType:m?.type},g=(0,h.qN)(m)?(0,u.H0)({values:f,supportsNullCount:d,percentileParams:p}):(0,u.i5)({values:f,minValue:r,maxValue:l,useSampleStdDev:!s,supportsNullCount:d,percentileParams:p});return(0,u.F_)(g,c)}async createUniqueValuesResponse(e){const{field:t,valueExpression:n,domain:i,returnAllCodedValues:s,scale:a}=e,r=await this._getDataValues({field:t,valueExpression:n,scale:a}),l=(0,u.eT)(r);return(0,u.Qm)(l,i,s)}async createClassBreaksResponse(e){const{field:t,valueExpression:n,normalizationField:i,normalizationType:s,normalizationTotal:a,classificationMethod:r,standardDeviationInterval:l,minValue:o,maxValue:c,numClasses:f,scale:d}=e,m=await this._getDataValues({field:t,valueExpression:n,normalizationField:i,normalizationType:s,normalizationTotal:a,scale:d}),h=(0,u.G2)(m,{field:t,normalizationField:i,normalizationType:s,normalizationTotal:a,classificationMethod:r,standardDeviationInterval:l,minValue:o,maxValue:c,numClasses:f});return(0,u.DL)(h,r)}async createHistogramResponse(e){const{field:t,valueExpression:n,normalizationField:i,normalizationType:s,normalizationTotal:a,classificationMethod:r,standardDeviationInterval:l,minValue:o,maxValue:c,numBins:f,scale:d}=e,m=await this._getDataValues({field:t,valueExpression:n,normalizationField:i,normalizationType:s,normalizationTotal:a,scale:d});return(0,u.oF)(m,{field:t,normalizationField:i,normalizationType:s,normalizationTotal:a,classificationMethod:r,standardDeviationInterval:l,minValue:o,maxValue:c,numBins:f})}_sortFeatures(e,t,n){if(e.length>1&&t&&t.length)for(const i of t.reverse()){const t=i.split(" "),s=t[0],a=this.fieldsIndex.get(s),r=t[1]&&"desc"===t[1].toLowerCase(),l=(0,u.Lq)(a?.type,r);e.sort(((e,t)=>{const i=n(e,s,a),r=n(t,s,a);return l(i,r)}))}}_createFeatureQueryResponse(e){const t=this.items,{geometryType:n,hasM:i,hasZ:s,objectIdField:a,spatialReference:l}=this,{outFields:o,outSR:u,quantizationParameters:c,resultRecordCount:f,resultOffset:d,returnZ:h,returnM:p}=e,g=null!=f&&t.length>(d||0)+f,y=o&&(o.includes("*")?[...this.fieldsIndex.fields]:o.map((e=>this.fieldsIndex.get(e))));return{exceededTransferLimit:g,features:this._createFeatures(e,t),fields:y,geometryType:n,hasM:i&&p,hasZ:s&&h,objectIdFieldName:a,spatialReference:(0,m.S2)(u||l),transform:c&&(0,r.vY)(c)||null}}_createFeatures(e,t){const n=new c(e,this.featureAdapter,this.fieldsIndex),{hasM:i,hasZ:s}=this,{orderByFields:a,quantizationParameters:l,returnGeometry:o,returnCentroid:u,maxAllowableOffset:f,resultOffset:d,resultRecordCount:h,returnZ:p=!1,returnM:g=!1}=e,y=s&&p,x=i&&g;let b=[],v=0;const V=[...t];if(this._sortFeatures(V,a,((e,t,i)=>n.getFieldValue(e,t,i))),o||u){const e=(0,r.vY)(l);if(o&&!u)for(const t of V)b[v++]={attributes:n.getAttributes(t),geometry:(0,m.Op)(this.geometryType,this.hasZ,this.hasM,this.featureAdapter.getGeometry(t),f,e,y,x)};else if(!o&&u)for(const t of V)b[v++]={attributes:n.getAttributes(t),centroid:(0,m.EG)(this,this.featureAdapter.getCentroid(t,this),e)};else for(const t of V)b[v++]={attributes:n.getAttributes(t),centroid:(0,m.EG)(this,this.featureAdapter.getCentroid(t,this),e),geometry:(0,m.Op)(this.geometryType,this.hasZ,this.hasM,this.featureAdapter.getGeometry(t),f,e,y,x)}}else for(const r of V){const e=n.getAttributes(r);e&&(b[v++]={attributes:e})}const F=d||0;if(null!=h){const e=F+h;b=b.slice(F,Math.min(b.length,e))}return b}_createExceedsLimitQueryResponse(e){let t=!1,n=Number.POSITIVE_INFINITY,s=Number.POSITIVE_INFINITY,a=Number.POSITIVE_INFINITY;for(const i of e.outStatistics)if("exceedslimit"===i.statisticType){n=null!=i.maxPointCount?i.maxPointCount:Number.POSITIVE_INFINITY,s=null!=i.maxRecordCount?i.maxRecordCount:Number.POSITIVE_INFINITY,a=null!=i.maxVertexCount?i.maxVertexCount:Number.POSITIVE_INFINITY;break}if("esriGeometryPoint"===this.geometryType)t=this.items.length>n;else if(this.items.length>s)t=!0;else{const e=this.hasZ?this.hasM?4:3:this.hasM?3:2,n=this.featureAdapter;t=this.items.reduce(((e,t)=>{const s=n.getGeometry(t);return e+((0,i.pC)(s)&&s.coords.length||0)}),0)/e>a}return{fields:[{name:"exceedslimit",type:"esriFieldTypeInteger",alias:"exceedslimit",sqlType:"sqlTypeInteger",domain:null,defaultValue:null}],features:[{attributes:{exceedslimit:Number(t)}}]}}async _createStatisticsQueryResponse(e){const t={attributes:{}},n=[],i=new Map,s=new Map,a=new Map,r=new Map,l=new c(e,this.featureAdapter,this.fieldsIndex),o=e.outStatistics,{groupByFieldsForStatistics:u,having:f,orderByFields:d}=e,m=u&&u.length,h=!!m,p=h&&u[0],g=h&&!this.fieldsIndex.get(p);for(const c of o){const{outStatisticFieldName:e,statisticType:o}=c,d=c,y="exceedslimit"!==o?c.onStatisticField:void 0,x="percentile_disc"===o||"percentile_cont"===o,b="EnvelopeAggregate"===o||"CentroidAggregate"===o||"ConvexHullAggregate"===o,v=h&&1===m&&(y===p||g)&&"count"===o;if(h){if(!a.has(y)){const e=[];for(const t of u){const n=this._getAttributeValues(l,t,i);e.push(n)}a.set(y,this._calculateUniqueValues(e,l.returnDistinctValues))}const t=a.get(y);for(const n in t){const{count:s,data:a,items:o,itemPositions:c}=t[n],m=a.join(",");if(!f||l.validateItems(o,f)){const t=r.get(m)||{attributes:{}};if(b){t.aggregateGeometries||(t.aggregateGeometries={});const{aggregateGeometries:e,outStatisticFieldName:n}=await this._getAggregateGeometry(d,o);t.aggregateGeometries[n]=e}else{let n=null;if(v)n=s;else{const e=this._getAttributeValues(l,y,i),t=c.map((t=>e[t]));n=x&&"statisticParameters"in d?this._getPercentileValue(d,t):this._getStatisticValue(d,t,null,l.returnDistinctValues)}t.attributes[e]=n}u.forEach(((e,n)=>t.attributes[this.fieldsIndex.get(e)?e:`EXPR_${n+1}`]=a[n])),r.set(m,t)}}}else if(b){t.aggregateGeometries||(t.aggregateGeometries={});const{aggregateGeometries:e,outStatisticFieldName:n}=await this._getAggregateGeometry(d,this.items);t.aggregateGeometries[n]=e}else{const n=this._getAttributeValues(l,y,i);t.attributes[e]=x&&"statisticParameters"in d?this._getPercentileValue(d,n):this._getStatisticValue(d,n,s,l.returnDistinctValues)}n.push({name:e,alias:e,type:"esriFieldTypeDouble"})}const y=h?Array.from(r.values()):[t];return this._sortFeatures(y,d,((e,t)=>e.attributes[t])),{fields:n,features:y}}async _getAggregateGeometry(e,t){const i=await Promise.all([n.e(9067),n.e(8923)]).then(n.bind(n,8923)),{statisticType:r,outStatisticFieldName:l}=e,{featureAdapter:o,spatialReference:u,geometryType:c,hasZ:f,hasM:d}=this,h=t.map((e=>(0,m.Op)(c,f,d,o.getGeometry(e)))),p=i.convexHull(u,h,!0)[0],g={aggregateGeometries:null,outStatisticFieldName:null};if("EnvelopeAggregate"===r){const e=p?(0,a._w)(p):(0,a.aO)(i.union(u,h));g.aggregateGeometries={...e,spatialReference:u},g.outStatisticFieldName=l||"extent"}else if("CentroidAggregate"===r){const e=p?(0,s.tO)(p):(0,s.$G)((0,a.aO)(i.union(u,h)));g.aggregateGeometries={x:e[0],y:e[1],spatialReference:u},g.outStatisticFieldName=l||"centroid"}else"ConvexHullAggregate"===r&&(g.aggregateGeometries=p,g.outStatisticFieldName=l||"convexHull");return g}_getStatisticValue(e,t,n,i){const{onStatisticField:s,statisticType:a}=e;let r=null;return r=n?.has(s)?n.get(s):(0,h.qN)(this.fieldsIndex.get(s))?(0,u.H0)({values:t,returnDistinct:i}):(0,u.i5)({values:t,minValue:null,maxValue:null,useSampleStdDev:!0}),n&&n.set(s,r),r["var"===a?"variance":a]}_getPercentileValue(e,t){const{onStatisticField:n,statisticParameters:i,statisticType:s}=e,{value:a,orderBy:r}=i,l=this.fieldsIndex.get(n);return(0,u.XL)(t,{value:a,orderBy:r,fieldType:l?.type,isDiscrete:"percentile_disc"===s})}_getAttributeValues(e,t,n){if(n.has(t))return n.get(t);const i=this.fieldsIndex.get(t),s=this.items.map((n=>e.getFieldValue(n,t,i)));return n.set(t,s),s}_getAttributeNormalizedValues(e,t){return this.items.map((n=>e.getNormalizedValue(n,{field:t.field,fieldInfo:this.fieldsIndex.get(t.field),normalizationField:t.normalizationField,normalizationFieldInfo:this.fieldsIndex.get(t.normalizationField),normalizationType:t.normalizationType,normalizationTotal:t.normalizationTotal})))}async _getAttributeExpressionValues(e,t,n){const{arcadeUtils:i}=await(0,p.LC)(),s=i.createFunction(t),a=n&&i.getViewInfo(n);return e.getExpressionValues(this.items,s,a,i)}_calculateUniqueValues(e,t){const n={},i=this.items,s=i.length;for(let a=0;a<s;a++){const s=i[a],r=[];for(const t of e)r.push(t[a]);const l=r.join(",");t?null==n[l]&&(n[l]={count:1,data:r,items:[s],itemPositions:[a]}):null==n[l]?n[l]={count:1,data:r,items:[s],itemPositions:[a]}:(n[l].count++,n[l].items.push(s),n[l].itemPositions.push(a))}return n}async _getDataValues(e){const t=new c(this.query,this.featureAdapter,this.fieldsIndex),{valueExpression:n,field:i,normalizationField:s,normalizationType:a,normalizationTotal:r,scale:l}=e,o=n?{viewingMode:"map",scale:l,spatialReference:this.query.outSR||this.spatialReference}:null;return n?this._getAttributeExpressionValues(t,n,o):this._getAttributeNormalizedValues(t,{field:i,normalizationField:s,normalizationType:a,normalizationTotal:r})}}function y(e,t,n,i,s,a){const r=s-n,l=a-i,o=r*r+l*l,u=(e-n)*r+(t-i)*l,c=Math.min(1,Math.max(0,u/o));return{x:n+r*c,y:i+l*c}}function x(e,t){return e?t?4:3:t?3:2}!function(e){e[e.NONE=0]="NONE",e[e.EDGE=1]="EDGE",e[e.VERTEX=2]="VERTEX"}(f||(f={}))},85587:function(e,t,n){n.d(t,{nu:function(){return g},hr:function(){return p},Jc:function(){return m},G3:function(){return y},Of:function(){return h},z4:function(){return d},hO:function(){return f}});var i=n(70375),s=n(77234),a=n(99559);class r{constructor(e,t){this._cache=new s.Z(e),this._invalidCache=new s.Z(t)}get(e,t){const n=`${t.uid}:${e}`,i=this._cache.get(n);if(i)return i;if(void 0!==this._invalidCache.get(n))return null;try{const i=a.WhereClause.create(e,t);return this._cache.put(n,i),i}catch{return this._invalidCache.put(n,null),null}}}const l=new r(50,500),o="feature-store:unsupported-query",u=" as ",c=new Set(["esriFieldTypeOID","esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeLong","esriFieldTypeDate"]);function f(e,t){if(!t)return!0;const n=l.get(t,e);if(!n)throw new i.Z(o,"invalid SQL expression",{where:t});if(!n.isStandardized)throw new i.Z(o,"where clause is not standard",{where:t});return h(e,n.fieldNames,"where clause contains missing fields"),!0}function d(e,t,n){if(!t)return!0;const s=l.get(t,e);if(!s)throw new i.Z(o,"invalid SQL expression",{having:t});if(!s.isAggregate)throw new i.Z(o,"having does not contain a valid aggregate function",{having:t});const a=s.fieldNames;if(h(e,a,"having contains missing fields"),!s.getExpressions().every((t=>{const{aggregateType:i,field:s}=t,a=e.has(s)&&e.get(s).name;return n.some((t=>{const{onStatisticField:n,statisticType:s}=t;return(e.has(n)&&e.get(n).name)===a&&s.toLowerCase().trim()===i}))})))throw new i.Z(o,"expressions in having should also exist in outStatistics",{having:t});return!0}function m(e,t){return e?l.get(e,t):null}function h(e,t,n,s=!0){const a=[];for(const r of t)if("*"!==r&&!e.has(r))if(s){const t=p(r);try{const n=m(t,e);if(!n)throw new i.Z(o,"invalid SQL expression",{where:t});if(!n.isStandardized)throw new i.Z(o,"expression is not standard",{clause:n});h(e,n.fieldNames,"expression contains missing fields")}catch(d){const t=d&&d.details;if(t&&(t.clause||t.where))throw d;t&&t.missingFields?a.push(...t.missingFields):a.push(r)}}else a.push(r);if(a.length)throw new i.Z(o,n,{missingFields:a})}function p(e){return e.split(u)[0]}function g(e){return e.split(u)[1]}function y(e,t){const n=t.get(e);return!!n&&!c.has(n.type)}},34398:function(e,t,n){n.d(t,{EG:function(){return b},Op:function(){return v},S2:function(){return S},Up:function(){return V},j6:function(){return F},vF:function(){return h}});var i=n(25709),s=n(61681),a=n(17321),r=n(50842),l=n(53736),o=n(5146),u=n(35925),c=n(12065),f=n(15540),d=n(66069);const m=new i.X({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"}),h=Object.freeze({}),p=new f.Z,g=new f.Z,y=new f.Z,x={esriGeometryPoint:c.fQ,esriGeometryPolyline:c.J6,esriGeometryPolygon:c.eG,esriGeometryMultipoint:c.Iv};function b(e,t,n,i=e.hasZ,a=e.hasM){if((0,s.Wi)(t))return null;const r=e.hasZ&&i,l=e.hasM&&a;if(n){const s=(0,c.Nh)(y,t,e.hasZ,e.hasM,"esriGeometryPoint",n,i,a);return(0,c.fQ)(s,r,l)}return(0,c.fQ)(t,r,l)}function v(e,t,n,i,a,r,l=t,o=n){const u=t&&l,f=n&&o,d=(0,s.pC)(i)?"coords"in i?i:i.geometry:null;if((0,s.Wi)(d))return null;if(a){let i=(0,c.zj)(g,d,t,n,e,a,l,o);return r&&(i=(0,c.Nh)(y,i,u,f,e,r)),x[e](i,u,f)}if(r){const i=(0,c.Nh)(y,d,t,n,e,r,l,o);return x[e](i,u,f)}return(0,c.hY)(p,d,t,n,l,o),x[e](p,u,f)}async function V(e,t,n){const{outFields:i,orderByFields:s,groupByFieldsForStatistics:a,outStatistics:r}=e;if(i)for(let l=0;l<i.length;l++)i[l]=i[l].trim();if(s)for(let l=0;l<s.length;l++)s[l]=s[l].trim();if(a)for(let l=0;l<a.length;l++)a[l]=a[l].trim();if(r)for(let l=0;l<r.length;l++)r[l].onStatisticField&&(r[l].onStatisticField=r[l].onStatisticField.trim());return e.geometry&&!e.outSR&&(e.outSR=e.geometry.spatialReference),F(e,t,n)}async function F(e,t,n){if(!e)return null;let{where:i}=e;if(e.where=i=i&&i.trim(),(!i||/^1 *= *1$/.test(i)||t&&t===i)&&(e.where=null),!e.geometry)return e;let a=await I(e);if(e.distance=0,e.units=null,"esriSpatialRelEnvelopeIntersects"===e.spatialRel){const{spatialReference:t}=e.geometry;a=(0,r.aO)(a),a.spatialReference=t}e.geometry=a,await(0,d._W)(a.spatialReference,n);const u=(await(0,o.aX)((0,l.im)(a)))[0];if((0,s.Wi)(u))throw h;const c=u.toJSON(),f=await(0,d.iV)(c,c.spatialReference,n);if(!f)throw h;return f.spatialReference=n,e.geometry=f,e}async function I(e){const{geometry:t,distance:n,units:i}=e;if(null==n||"vertexAttributes"in t)return t;const s=t.spatialReference,r=i?m.fromJSON(i):(0,a.qE)(s),l=s&&((0,u.sT)(s)||(0,u.sS)(s))?t:await(0,d._W)(s,u.Zn).then((()=>(0,d.iV)(t,u.Zn)));return(await T())(l.spatialReference,l,n,r)}async function T(){return(await Promise.all([n.e(9067),n.e(8923)]).then(n.bind(n,8923))).geodesicBuffer}function S(e){return e&&_ in e?JSON.parse(JSON.stringify(e,z)):e}const _="_geVersion",z=(e,t)=>e!==_?t:void 0},64486:function(e,t,n){n.d(t,{Z:function(){return g}});var i=n(36663),s=n(25709),a=n(81977),r=(n(7753),n(39994),n(7283),n(40266)),l=n(72285),o=n(81657),u=n(18251);const c=new s.X({classBreaksDef:"class-breaks-definition",uniqueValueDef:"unique-value-definition"});let f=class extends l.wq{constructor(){super(...arguments),this.baseSymbol=null,this.colorRamp=null,this.type=null}};(0,i._)([(0,a.Cb)({type:u.Z,json:{write:!0}})],f.prototype,"baseSymbol",void 0),(0,i._)([(0,a.Cb)({types:o.V,json:{read:{reader:o.i},write:!0}})],f.prototype,"colorRamp",void 0),(0,i._)([(0,a.Cb)({json:{read:c.read,write:c.write}})],f.prototype,"type",void 0),f=(0,i._)([(0,r.j)("esri.rest.support.ClassificationDefinition")],f);const d=f,m=new s.X({esriClassifyEqualInterval:"equal-interval",esriClassifyManual:"manual",esriClassifyNaturalBreaks:"natural-breaks",esriClassifyQuantile:"quantile",esriClassifyStandardDeviation:"standard-deviation",esriClassifyDefinedInterval:"defined-interval"}),h=new s.X({esriNormalizeByLog:"log",esriNormalizeByPercentOfTotal:"percent-of-total",esriNormalizeByField:"field"});let p=class extends d{constructor(){super(...arguments),this.breakCount=null,this.classificationField=null,this.classificationMethod=null,this.normalizationField=null,this.normalizationType=null,this.type="class-breaks-definition"}set standardDeviationInterval(e){"standard-deviation"===this.classificationMethod&&this._set("standardDeviationInterval",e)}set definedInterval(e){"defined-interval"===this.classificationMethod&&this._set("definedInterval",e)}};(0,i._)([(0,a.Cb)({json:{write:!0}})],p.prototype,"breakCount",void 0),(0,i._)([(0,a.Cb)({json:{write:!0}})],p.prototype,"classificationField",void 0),(0,i._)([(0,a.Cb)({type:String,json:{read:m.read,write:m.write}})],p.prototype,"classificationMethod",void 0),(0,i._)([(0,a.Cb)({json:{write:!0}})],p.prototype,"normalizationField",void 0),(0,i._)([(0,a.Cb)({json:{read:h.read,write:h.write}})],p.prototype,"normalizationType",void 0),(0,i._)([(0,a.Cb)({value:null,json:{write:!0}})],p.prototype,"standardDeviationInterval",null),(0,i._)([(0,a.Cb)({value:null,json:{write:!0}})],p.prototype,"definedInterval",null),(0,i._)([(0,a.Cb)()],p.prototype,"type",void 0),p=(0,i._)([(0,r.j)("esri.rest.support.ClassBreaksDefinition")],p);const g=p},33397:function(e,t,n){n.d(t,{G2:function(){return R},oF:function(){return k},XL:function(){return _},i5:function(){return S},H0:function(){return T},eT:function(){return N},Qm:function(){return A},Lq:function(){return z},fk:function(){return E},S5:function(){return I},F_:function(){return M},DL:function(){return P}});var i=n(64486);function s(e,t){return Number(e.toFixed(t))}function a(e){const{normalizationTotal:t}=e;return{classBreaks:r(e),normalizationTotal:t}}function r(e){const t=e.definition,{classificationMethod:n,breakCount:i,normalizationType:a,definedInterval:r}=t,c=[];let f=e.values;if(0===f.length)return[];f=f.sort(((e,t)=>e-t));const p=f[0],g=f[f.length-1];if("equal-interval"===n)if(f.length>=i){const e=(g-p)/i;let t=p;for(let n=1;n<i;n++){const i=s(p+n*e,6);c.push({minValue:t,maxValue:i,label:l(t,i,a)}),t=i}c.push({minValue:t,maxValue:g,label:l(t,g,a)})}else f.forEach((e=>{c.push({minValue:e,maxValue:e,label:l(e,e,a)})}));else if("natural-breaks"===n){const t=o(f),n=e.valueFrequency||t.valueFrequency,r=u(t.uniqueValues,n,i);let d=p;for(let e=1;e<i;e++)if(t.uniqueValues.length>e){const n=s(t.uniqueValues[r[e]],6);c.push({minValue:d,maxValue:n,label:l(d,n,a)}),d=n}c.push({minValue:d,maxValue:g,label:l(d,g,a)})}else if("quantile"===n)if(f.length>=i&&p!==g){let e=p,t=Math.ceil(f.length/i),n=0;for(let s=1;s<i;s++){let r=t+n-1;r>f.length&&(r=f.length-1),r<0&&(r=0),c.push({minValue:e,maxValue:f[r],label:l(e,f[r],a)}),e=f[r],n+=t,t=Math.ceil((f.length-n)/(i-s))}c.push({minValue:e,maxValue:g,label:l(e,g,a)})}else{let e=-1;for(let t=0;t<f.length;t++){const n=f[t];n!==e&&(e=n,c.push({minValue:e,maxValue:n,label:l(e,n,a)}),e=n)}}else if("standard-deviation"===n){const e=m(f),t=h(f,e);if(0===t)c.push({minValue:f[0],maxValue:f[0],label:l(f[0],f[0],a)});else{const n=d(p,g,i,e,t)*t;let r=0,o=p;for(let t=i;t>=1;t--){const i=s(e-(t-.5)*n,6);c.push({minValue:o,maxValue:i,label:l(o,i,a)}),o=i,r++}let u=s(e+.5*n,6);c.push({minValue:o,maxValue:u,label:l(o,u,a)}),o=u,r++;for(let t=1;t<=i;t++)u=r===2*i?g:s(e+(t+.5)*n,6),c.push({minValue:o,maxValue:u,label:l(o,u,a)}),o=u,r++}}else if("defined-interval"===n){if(!r)return c;const e=f[0],t=f[f.length-1],n=Math.ceil((t-e)/r);let i=e;for(let o=1;o<n;o++){const t=s(e+o*r,6);c.push({minValue:i,maxValue:t,label:l(i,t,a)}),i=t}c.push({minValue:i,maxValue:t,label:l(i,t,a)})}return c}function l(e,t,n){let i=null;return i=e===t?n&&"percent-of-total"===n?e+"%":e.toString():n&&"percent-of-total"===n?e+"% - "+t+"%":e+" - "+t,i}function o(e){const t=[],n=[];let i=Number.MIN_VALUE,s=1,a=-1;for(let r=0;r<e.length;r++){const l=e[r];l===i?(s++,n[a]=s):null!==l&&(t.push(l),i=l,s=1,n.push(s),a++)}return{uniqueValues:t,valueFrequency:n}}function u(e,t,n){const i=e.length,s=[];n>i&&(n=i);for(let r=0;r<n;r++)s.push(Math.round(r*i/n-1));s.push(i-1);let a=c(s,e,t,n);return f(a.mean,a.sdcm,s,e,t,n)&&(a=c(s,e,t,n)),s}function c(e,t,n,i){let s=[],a=[],r=[],l=0;const o=[],u=[];for(let m=0;m<i;m++){const i=p(m,e,t,n);o.push(i.sbMean),u.push(i.sbSdcm),l+=u[m]}let c,f=l,d=!0;for(;d||l<f;){d=!1,s=[];for(let t=0;t<i;t++)s.push(e[t]);for(let n=0;n<i;n++)for(let s=e[n]+1;s<=e[n+1];s++)if(c=t[s],n>0&&s!==e[n+1]&&Math.abs(c-o[n])>Math.abs(c-o[n-1]))e[n]=s;else if(n<i-1&&e[n]!==s-1&&Math.abs(c-o[n])>Math.abs(c-o[n+1])){e[n+1]=s-1;break}f=l,l=0,a=[],r=[];for(let s=0;s<i;s++){a.push(o[s]),r.push(u[s]);const i=p(s,e,t,n);o[s]=i.sbMean,u[s]=i.sbSdcm,l+=u[s]}}if(l>f){for(let t=0;t<i;t++)e[t]=s[t],o[t]=a[t],u[t]=r[t];l=f}return{mean:o,sdcm:u}}function f(e,t,n,i,s,a){let r=0,l=0,o=0,u=0,c=!0;for(let f=0;f<2&&c;f++){0===f&&(c=!1);for(let f=0;f<a-1;f++)for(;n[f+1]+1!==n[f+2];){n[f+1]=n[f+1]+1;const a=p(f,n,i,s);o=a.sbMean,r=a.sbSdcm;const d=p(f+1,n,i,s);if(u=d.sbMean,l=d.sbSdcm,!(r+l<t[f]+t[f+1])){n[f+1]=n[f+1]-1;break}t[f]=r,t[f+1]=l,e[f]=o,e[f+1]=u,c=!0}for(let f=a-1;f>0;f--)for(;n[f]!==n[f-1]+1;){n[f]=n[f]-1;const a=p(f-1,n,i,s);o=a.sbMean,r=a.sbSdcm;const d=p(f,n,i,s);if(u=d.sbMean,l=d.sbSdcm,!(r+l<t[f-1]+t[f])){n[f]=n[f]+1;break}t[f-1]=r,t[f]=l,e[f-1]=o,e[f]=u,c=!0}}return c}function d(e,t,n,i,s){let a=Math.max(i-e,t-i)/s/n;return a=a>=1?1:a>=.5?.5:.25,a}function m(e){let t=0;for(let n=0;n<e.length;n++)t+=e[n];return t/=e.length,t}function h(e,t){let n=0;for(let i=0;i<e.length;i++){const s=e[i];n+=(s-t)*(s-t)}return n/=e.length,Math.sqrt(n)}function p(e,t,n,i){let s=0,a=0;for(let o=t[e]+1;o<=t[e+1];o++){const e=i[o];s+=n[o]*e,a+=e}a<=0&&console.log("Exception in Natural Breaks calculation");const r=s/a;let l=0;for(let o=t[e]+1;o<=t[e+1];o++)l+=i[o]*(n[o]-r)**2;return{sbMean:r,sbSdcm:l}}const g="equal-interval",y=1,x=5,b=10,v=/\s*(\+|-)?((\d+(\.\d+)?)|(\.\d+))\s*/gi,V=new Set(["esriFieldTypeInteger","esriFieldTypeSmallInteger","esriFieldTypeSingle","esriFieldTypeDouble"]),F=["min","max","avg","stddev","count","sum","variance","nullcount","median"];function I(e){const t=null!=e.normalizationField||null!=e.normalizationType,n=null!=e.minValue||null!=e.maxValue,i=!!e.sqlExpression&&e.supportsSQLExpression;return!t&&!n&&!i}function T(e){const t=e.returnDistinct?[...new Set(e.values)]:e.values,n=t.filter((e=>null!=e)).length,i={count:n};return e.supportsNullCount&&(i.nullcount=t.length-n),e.percentileParams&&(i.median=_(t,e.percentileParams)),i}function S(e){const{values:t,useSampleStdDev:n,supportsNullCount:i}=e;let s=Number.POSITIVE_INFINITY,a=Number.NEGATIVE_INFINITY,r=null,l=null,o=null,u=null,c=0;const f=null==e.minValue?-1/0:e.minValue,d=null==e.maxValue?1/0:e.maxValue;for(const h of t)Number.isFinite(h)?h>=f&&h<=d&&(r+=h,s=Math.min(s,h),a=Math.max(a,h),c++):"string"==typeof h&&c++;if(c&&null!=r){l=r/c;let e=0;for(const n of t)Number.isFinite(n)&&n>=f&&n<=d&&(e+=(n-l)**2);u=n?c>1?e/(c-1):0:c>0?e/c:0,o=Math.sqrt(u)}else s=null,a=null;const m={avg:l,count:c,max:a,min:s,stddev:o,sum:r,variance:u};return i&&(m.nullcount=t.length-c),e.percentileParams&&(m.median=_(t,e.percentileParams)),m}function _(e,t){const{fieldType:n,value:i,orderBy:s,isDiscrete:a}=t,r=z(n,"desc"===s);if(0===(e=[...e].filter((e=>null!=e)).sort(((e,t)=>r(e,t)))).length)return null;if(i<=0)return e[0];if(i>=1)return e[e.length-1];const l=(e.length-1)*i,o=Math.floor(l),u=o+1,c=l%1,f=e[o],d=e[u];return u>=e.length||a||"string"==typeof f||"string"==typeof d?f:f*(1-c)+d*c}function z(e,t){const n=t?1:-1,i=C(t),s=w(t);if(!e||!["esriFieldTypeDate","esriFieldTypeString","esriFieldTypeGUID","esriFieldTypeGlobalID",...V].includes(e))return(e,t)=>"number"==typeof e&&"number"==typeof t?i(e,t):"string"==typeof e&&"string"==typeof t?s(e,t):n;if("esriFieldTypeDate"===e)return(e,t)=>{const s=new Date(e).getTime(),a=new Date(t).getTime();return isNaN(s)||isNaN(a)?n:i(s,a)};if(V.has(e))return(e,t)=>i(e,t);if("esriFieldTypeString"===e)return(e,t)=>s(e,t);if("esriFieldTypeGUID"===e||"esriFieldTypeGlobalID"===e){const e=w(t);return(t,n)=>e(D(t),D(n))}return t?(e,t)=>1:(e,t)=>-1}function w(e){return e?(e,t)=>(e=e?.toUpperCase(),t=t?.toUpperCase(),e>t?-1:e<t?1:0):(e,t)=>(e=e?.toUpperCase(),t=t?.toUpperCase(),e<t?-1:e>t?1:0)}function C(e){return e?(e,t)=>t-e:(e,t)=>e-t}function D(e){return e.substr(24,12)+e.substr(19,4)+e.substr(16,2)+e.substr(14,2)+e.substr(11,2)+e.substr(9,2)+e.substr(6,2)+e.substr(4,2)+e.substr(2,2)+e.substr(0,2)}function M(e,t){let n;for(n in e)F.includes(n)&&(Number.isFinite(e[n])||(e[n]=null));return t?(["avg","stddev","variance"].forEach((t=>{null!=e[t]&&(e[t]=Math.ceil(e[t]))})),e):e}function N(e){const t={};for(let n of e)(null==n||"string"==typeof n&&""===n.trim())&&(n=null),null==t[n]?t[n]={count:1,data:n}:t[n].count++;return{count:t}}function A(e,t,n){const i=e.count,s=[];n&&t&&"coded-value"===t.type&&t.codedValues.forEach((e=>{const t=e.code;i.hasOwnProperty(t)||(i[t]={data:t,count:0})}));for(const a in i){const e=i[a];s.push({value:e.data,count:e.count,label:e.label})}return{uniqueValueInfos:s}}function E(e,t,n,i){let s=null;switch(t){case"log":0!==e&&(s=Math.log(e)*Math.LOG10E);break;case"percent-of-total":Number.isFinite(i)&&0!==i&&(s=e/i*100);break;case"field":Number.isFinite(n)&&0!==n&&(s=e/n);break;case"natural-log":e>0&&(s=Math.log(e));break;case"square-root":e>0&&(s=e**.5)}return s}function R(e,t){const n=G({field:t.field,normalizationType:t.normalizationType,normalizationField:t.normalizationField,classificationMethod:t.classificationMethod,standardDeviationInterval:t.standardDeviationInterval,breakCount:t.numClasses||x});return e=q(e,t.minValue,t.maxValue),a({definition:n,values:e,normalizationTotal:t.normalizationTotal})}function q(e,t,n){return t=null==t?-1/0:t,n=null==n?1/0:n,e.filter((e=>Number.isFinite(e)&&e>=t&&e<=n))}function G(e){const t=e.field,n=e.classificationMethod||g,s=e.normalizationType,a=e.normalizationField,r=new i.Z;return r.classificationField=t,r.breakCount=e.breakCount,r.classificationMethod=n,r.standardDeviationInterval="standard-deviation"===n?e.standardDeviationInterval||y:void 0,r.normalizationType=s,r.normalizationField="field"===s?a:void 0,r}function P(e,t){let n=e.classBreaks;const i=n.length,s=n[0].minValue,a=n[i-1].maxValue,r="standard-deviation"===t,l=v;return n=n.map((e=>{const t=e.label,n={minValue:e.minValue,maxValue:e.maxValue,label:t};if(r&&t){const e=t.match(l).map((e=>+e.trim()));2===e.length?(n.minStdDev=e[0],n.maxStdDev=e[1],e[0]<0&&e[1]>0&&(n.hasAvg=!0)):1===e.length&&(t.includes("<")?(n.minStdDev=null,n.maxStdDev=e[0]):t.includes(">")&&(n.minStdDev=e[0],n.maxStdDev=null))}return n})),{minValue:s,maxValue:a,classBreakInfos:n,normalizationTotal:e.normalizationTotal}}function k(e,t){const{min:n,max:i,intervals:s}=O(e,t),a=s.map(((e,t)=>({minValue:s[t][0],maxValue:s[t][1],count:0})));for(const r of e)if(null!=r&&r>=n&&r<=i){const e=Z(s,r);e>-1&&a[e].count++}return{bins:a,minValue:n,maxValue:i,normalizationTotal:t.normalizationTotal}}function O(e,t){const{field:n,classificationMethod:i,standardDeviationInterval:s,normalizationType:a,normalizationField:r,normalizationTotal:l,minValue:o,maxValue:u}=t,c=t.numBins||b;let f=null,d=null,m=null;if(i&&"equal-interval"!==i||a){const{classBreaks:t}=R(e,{field:n,normalizationType:a,normalizationField:r,normalizationTotal:l,classificationMethod:i,standardDeviationInterval:s,minValue:o,maxValue:u,numClasses:c});f=t[0].minValue,d=t[t.length-1].maxValue,m=t.map((e=>[e.minValue,e.maxValue]))}else{if(null!=o&&null!=u)f=o,d=u;else{const t=S({values:e,minValue:o,maxValue:u,useSampleStdDev:!a,supportsNullCount:I({normalizationType:a,normalizationField:r,minValue:o,maxValue:u})});f=t.min,d=t.max}m=j(f,d,c)}return{min:f,max:d,intervals:m}}function Z(e,t){let n=-1;for(let i=e.length-1;i>=0;i--)if(t>=e[i][0]){n=i;break}return n}function j(e,t,n){const i=(t-e)/n,s=[];let a,r=e;for(let l=1;l<=n;l++)a=r+i,a=Number(a.toFixed(16)),s.push([r,l===n?t:a]),r=a;return s}}}]);
//# sourceMappingURL=7152.cacc572f.js.map