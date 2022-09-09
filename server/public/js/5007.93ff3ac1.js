"use strict";(self["webpackChunkclient"]=self["webpackChunkclient"]||[]).push([[5007],{15007:function(e,t,n){n.r(t),n.d(t,{registerFunctions:function(){return O}});var r=n(58780),a=n(19249),i=n(94634),l=n(33455),s=n(42167),o=n(30359),u=n(58830),c=n(94837),f=n(45712),d=n(62700),m=n(2441),p=n(81273),y=n(40581),h=n(20155),g=n(7429),w=n(68673),F=n(62294),E=n(45573),I=n(78668),b=n(99559),D=n(60691),N=n(12512);function x(e,t,n,r){if(1===r.length){if((0,c.l)(r[0]))return(0,E.t)(e,r[0],-1);if((0,c.n)(r[0]))return(0,E.t)(e,r[0].toArray(),-1)}return(0,E.t)(e,r,-1)}async function A(e,t,n){const r=e.getVariables();if(r.length>0){const a=[];for(let e=0;e<r.length;e++){const i={name:r[e]};a.push(await t.evaluateIdentifier(n,i))}const i={};for(let e=0;e<r.length;e++)i[r[e]]=a[e];return e.parameters=i,e}return e}function S(e,t,n=null){for(const r in e)if(r.toLowerCase()===t.toLowerCase())return e[r];return n}function C(e){if(null===e)return null;const t={type:S(e,"type",""),name:S(e,"name","")};if("range"===t.type)t.range=S(e,"range",[]);else{t.codedValues=[];for(const n of S(e,"codedValues",[]))t.codedValues.push({name:S(n,"name",""),code:S(n,"code",null)})}return t}function $(e){if(null===e)return null;const t={},n=S(e,"wkt",null);null!==n&&(t.wkt=n);const r=S(e,"wkid",null);return null!==r&&(t.wkid=r),t}function T(e){if(null===e)return null;const t={hasZ:S(e,"hasz",!1),hasM:S(e,"hasm",!1)},n=S(e,"spatialreference",null);n&&(t.spatialReference=$(n));const r=S(e,"x",null);if(null!==r)return t.x=r,t.y=S(e,"y",null),t;const a=S(e,"rings",null);if(null!==a)return t.rings=a,t;const i=S(e,"paths",null);if(null!==i)return t.paths=i,t;const l=S(e,"points",null);if(null!==l)return t.points=l,t;for(const s of["xmin","xmax","ymin","ymax","zmin","zmax","mmin","mmax"]){const n=S(e,s,null);null!==n&&(t[s]=n)}return t}function L(e,t){for(const n of t)if(n===e)return!0;return!1}function v(e){return!!e.layerDefinition&&!!e.featureSet&&!1!==L(e.layerDefinition.geometryType,["","esriGeometryPoint","esriGeometryPolyline","esriGeometryPolygon","esriGeometryMultipoint","esriGeometryEnvelope"])&&null!==e.layerDefinition.objectIdField&&""!==e.layerDefinition.objectIdField&&!1!==(0,c.l)(e.layerDefinition.fields)&&!1!==(0,c.l)(e.featureSet.features)}function O(e){"async"===e.mode&&(e.functions.getuser=function(t,n){return e.standardFunctionAsync(t,n,(async(e,n,i)=>{(0,c.p)(i,1,2);let l=(0,c.C)(i[1],""),o=!0===l;if(l=!0===l||!1===l?"":(0,c.h)(l),i[0]instanceof r.Z){let e=null;t.services&&t.services.portal&&(e=t.services.portal),e=(0,s.getPortal)(i[0],e);const n=await(0,s.lookupUser)(e,l,o);if(n){const e=JSON.parse(JSON.stringify(n));for(const t of["lastLogin","created","modified"])void 0!==e[t]&&null!==e[t]&&(e[t]=new Date(e[t]));return a.Z.convertObjectToArcadeDictionary(e)}return null}let u=null;if((0,c.y)(i[0])&&(u=i[0]),u){if(o=!1,l)return null;await u.load();const e=await u.getOwningSystemUrl();if(!e){if(!l){const e=await u.getIdentityUser();return e?a.Z.convertObjectToArcadeDictionary({username:e}):null}return null}let n=null;t.services&&t.services.portal&&(n=t.services.portal),n=(0,s.getPortal)(new r.Z(e),n);const i=await(0,s.lookupUser)(n,l,o);if(i){const e=JSON.parse(JSON.stringify(i));for(const t of["lastLogin","created","modified"])void 0!==e[t]&&null!==e[t]&&(e[t]=new Date(e[t]));return a.Z.convertObjectToArcadeDictionary(e)}return null}throw new Error("Invalid Parameter")}))},e.signatures.push({name:"getuser",min:"1",max:"2"}),e.functions.featuresetbyid=function(t,n){return e.standardFunctionAsync(t,n,((e,t,n)=>{if((0,c.p)(n,2,4),n[0]instanceof l.Z){const e=(0,c.h)(n[1]);let t=(0,c.C)(n[2],null);const r=(0,c.g)((0,c.C)(n[3],!0));if(null===t&&(t=["*"]),!1===(0,c.l)(t))throw new Error("Invalid Parameter");return n[0].featureSetById(e,r,t)}throw new Error("Invalid Parameter")}))},e.signatures.push({name:"featuresetbyid",min:"2",max:"4"}),e.functions.getfeatureset=function(t,n){return e.standardFunctionAsync(t,n,((e,n,r)=>{if((0,c.p)(r,1,2),(0,c.s)(r[0])){let e=(0,c.C)(r[1],"datasource");return null===e&&(e="datasource"),e=(0,c.h)(e).toLowerCase(),(0,s.convertToFeatureSet)(r[0].fullSchema(),e,t.lrucache,t.interceptor,t.spatialReference)}throw new Error("Invalid Parameter")}))},e.signatures.push({name:"getfeatureset",min:"1",max:"2"}),e.functions.featuresetbyportalitem=function(t,n){return e.standardFunctionAsync(t,n,((e,n,a)=>{if((0,c.p)(a,2,5),null===a[0])throw new Error("Portal is required");if(a[0]instanceof r.Z){const e=(0,c.h)(a[1]),n=(0,c.h)(a[2]);let r=(0,c.C)(a[3],null);const i=(0,c.g)((0,c.C)(a[4],!0));if(null===r&&(r=["*"]),!1===(0,c.l)(r))throw new Error("Invalid Parameter");let l=null;return t.services&&t.services.portal&&(l=t.services.portal),l=(0,s.getPortal)(a[0],l),(0,s.constructFeatureSetFromPortalItem)(e,n,t.spatialReference,r,i,l,t.lrucache,t.interceptor)}if(!1===(0,c.b)(a[0]))throw new Error("Portal is required");const i=(0,c.h)(a[0]),l=(0,c.h)(a[1]);let o=(0,c.C)(a[2],null);const u=(0,c.g)((0,c.C)(a[3],!0));if(null===o&&(o=["*"]),!1===(0,c.l)(o))throw new Error("Invalid Parameter");if(t.services&&t.services.portal)return(0,s.constructFeatureSetFromPortalItem)(i,l,t.spatialReference,o,u,t.services.portal,t.lrucache,t.interceptor);throw new Error("Portal is required")}))},e.signatures.push({name:"featuresetbyportalitem",min:"2",max:"5"}),e.functions.featuresetbyname=function(t,n){return e.standardFunctionAsync(t,n,((e,t,n)=>{if((0,c.p)(n,2,4),n[0]instanceof l.Z){const e=(0,c.h)(n[1]);let t=(0,c.C)(n[2],null);const r=(0,c.g)((0,c.C)(n[3],!0));if(null===t&&(t=["*"]),!1===(0,c.l)(t))throw new Error("Invalid Parameter");return n[0].featureSetByName(e,r,t)}throw new Error("Invalid Parameter")}))},e.signatures.push({name:"featuresetbyname",min:"2",max:"4"}),e.functions.featureset=function(t,n){return e.standardFunction(t,n,((e,n,r)=>{(0,c.p)(r,1,1);let i=r[0];const l={layerDefinition:{geometryType:"",objectIdField:"",globalIdField:"",typeIdField:"",fields:[]},featureSet:{geometryType:"",features:[]}};if((0,c.b)(i))i=JSON.parse(i),void 0!==i.layerDefinition?(l.layerDefinition=i.layerDefinition,l.featureSet=i.featureSet,i.layerDefinition.spatialReference&&(l.layerDefinition.spatialReference=i.layerDefinition.spatialReference)):(l.featureSet.features=i.features,l.featureSet.geometryType=i.geometryType,l.layerDefinition.geometryType=l.featureSet.geometryType,l.layerDefinition.objectIdField=i.objectIdFieldName,l.layerDefinition.typeIdField=i.typeIdFieldName,l.layerDefinition.globalIdField=i.globalIdFieldName,l.layerDefinition.fields=i.fields,i.spatialReference&&(l.layerDefinition.spatialReference=i.spatialReference));else{if(!(r[0]instanceof a.Z))throw new Error("Invalid Parameter");{i=JSON.parse(r[0].castToText());const e=S(i,"layerdefinition");if(null!==e){l.layerDefinition.geometryType=S(e,"geometrytype",""),l.featureSet.geometryType=l.layerDefinition.geometryType,l.layerDefinition.globalIdField=S(e,"globalidfield",""),l.layerDefinition.objectIdField=S(e,"objectidfield",""),l.layerDefinition.typeIdField=S(e,"typeidfield","");const t=S(e,"spatialreference",null);t&&(l.layerDefinition.spatialReference=$(t));for(const r of S(e,"fields",[])){const e={name:S(r,"name",""),alias:S(r,"alias",""),type:S(r,"type",""),nullable:S(r,"nullable",!0),editable:S(r,"editable",!0),length:S(r,"length",null),domain:C(S(r,"domain"))};l.layerDefinition.fields.push(e)}const n=S(i,"featureset",null);if(n){const e={};for(const t of l.layerDefinition.fields)e[t.name.toLowerCase()]=t.name;for(const t of S(n,"features",[])){const n={},r=S(t,"attributes",{});for(const t in r)n[e[t.toLowerCase()]]=r[t];l.featureSet.features.push({attributes:n,geometry:T(S(t,"geometry",null))})}}}else{l.layerDefinition.geometryType=S(i,"geometrytype",""),l.featureSet.geometryType=l.layerDefinition.geometryType,l.layerDefinition.objectIdField=S(i,"objectidfieldname",""),l.layerDefinition.typeIdField=S(i,"typeidfieldname","");const e=S(i,"spatialreference",null);e&&(l.layerDefinition.spatialReference=$(e));for(const n of S(i,"fields",[])){const e={name:S(n,"name",""),alias:S(n,"alias",""),type:S(n,"type",""),nullable:S(n,"nullable",!0),editable:S(n,"editable",!0),length:S(n,"length",null),domain:C(S(n,"domain"))};l.layerDefinition.fields.push(e)}const t={};for(const n of l.layerDefinition.fields)t[n.name.toLowerCase()]=n.name;for(const n of S(i,"features",[])){const e={},r=S(n,"attributes",{});for(const n in r)e[t[n.toLowerCase()]]=r[n];l.featureSet.features.push({attributes:e,geometry:T(S(n,"geometry",null))})}}}}if(!1===v(l))throw new Error("Invalid Parameter");return h.Z.create(l,t.spatialReference)}))},e.signatures.push({name:"featureset",min:"1",max:"1"}),e.functions.filter=function(t,n){return e.standardFunctionAsync(t,n,(async(n,r,a)=>{if((0,c.p)(a,2,2),(0,c.l)(a[0])||(0,c.n)(a[0])){const n=[];let r=a[0];r instanceof u.Z&&(r=r.toArray());let i=null;if(a[1]instanceof o.Z)i=e.arcadeCustomFunctionHandler(a[1]);else if(a[1]instanceof c.N)i=(...e)=>a[1].fn(t,{preparsed:!0,arguments:e});else{if(!(a[1]instanceof c.S))throw new Error("Invalid Parameter");i=(...e)=>{if(e.length!==a[1].paramCount)throw new Error("Invalid parameters");return a[1].fn(...e)}}for(const e of r){const t=i(e);(0,I.y8)(t)?!0===await t&&n.push(e):!0===t&&n.push(e)}return n}if((0,c.y)(a[0])){const n=await a[0].load(),r=b.WhereClause.create(a[1],n.getFieldsIndex()),i=r.getVariables();if(i.length>0){const n=[];for(let r=0;r<i.length;r++){const a={name:i[r]};n.push(await e.evaluateIdentifier(t,a))}const l={};for(let e=0;e<i.length;e++)l[i[e]]=n[e];return r.parameters=l,new d.Z({parentfeatureset:a[0],whereclause:r})}return new d.Z({parentfeatureset:a[0],whereclause:r})}throw new Error("Filter cannot accept this parameter type")}))},e.signatures.push({name:"filter",min:"2",max:"2"}),e.functions.orderby=function(t,n){return e.standardFunctionAsync(t,n,(async(e,t,n)=>{if((0,c.p)(n,2,2),(0,c.y)(n[0])){const e=new g.Z(n[1]);return new m.Z({parentfeatureset:n[0],orderbyclause:e})}throw new Error("Order cannot accept this parameter type")}))},e.signatures.push({name:"orderby",min:"2",max:"2"}),e.functions.top=function(t,n){return e.standardFunctionAsync(t,n,(async(e,t,n)=>{if((0,c.p)(n,2,2),(0,c.y)(n[0]))return new p.Z({parentfeatureset:n[0],topnum:n[1]});if((0,c.l)(n[0]))return(0,c.f)(n[1])>=n[0].length?n[0].slice(0):n[0].slice(0,(0,c.f)(n[1]));if((0,c.n)(n[0]))return(0,c.f)(n[1])>=n[0].length()?n[0].slice(0):n[0].slice(0,(0,c.f)(n[1]));throw new Error("Top cannot accept this parameter type")}))},e.signatures.push({name:"top",min:"2",max:"2"}),e.functions.first=function(t,n){return e.standardFunctionAsync(t,n,(async(e,t,n)=>{if((0,c.p)(n,1,1),(0,c.y)(n[0])){const t=await n[0].first(e.abortSignal);if(null!==t){const e=i.Z.createFromGraphicLikeObject(t.geometry,t.attributes,n[0]);return e._underlyingGraphic=t,e}return t}return(0,c.l)(n[0])?0===n[0].length?null:n[0][0]:(0,c.n)(n[0])?0===n[0].length()?null:n[0].get(0):null}))},e.signatures.push({name:"first",min:"1",max:"1"}),e.functions.attachments=function(t,n){return e.standardFunctionAsync(t,n,(async(e,n,r)=>{(0,c.p)(r,1,2);const i={minsize:-1,maxsize:-1,types:null,returnMetadata:!1};if(r.length>1)if(r[1]instanceof a.Z){if(r[1].hasField("minsize")&&(i.minsize=(0,c.f)(r[1].field("minsize"))),r[1].hasField("metadata")&&(i.returnMetadata=(0,c.g)(r[1].field("metadata"))),r[1].hasField("maxsize")&&(i.maxsize=(0,c.f)(r[1].field("maxsize"))),r[1].hasField("types")){const e=(0,c.Y)(r[1].field("types"),!1);e.length>0&&(i.types=e)}}else if(null!==r[1])throw new Error("Invalid Parameter");if((0,c.s)(r[0])){let e=r[0]._layer;return e instanceof D["default"]&&(e=(0,s.constructFeatureSet)(e,t.spatialReference,["*"],!0,t.lrucache,t.interceptor)),null===e||!1===(0,c.y)(e)?[]:(await e.load(),e.queryAttachments(r[0].field(e.objectIdField),i.minsize,i.maxsize,i.types,i.returnMetadata))}if(null===r[0])return[];throw new Error("Invalid Parameter")}))},e.signatures.push({name:"attachments",min:"1",max:"2"}),e.functions.featuresetbyrelationshipname=function(t,n){return e.standardFunctionAsync(t,n,(async(e,n,r)=>{(0,c.p)(r,2,4);const a=r[0],i=(0,c.h)(r[1]);let l=(0,c.C)(r[2],null);const o=(0,c.g)((0,c.C)(r[3],!0));if(null===l&&(l=["*"]),!1===(0,c.l)(l))throw new Error("Invalid Parameter");if(null===r[0])return null;if(!(0,c.s)(r[0]))throw new Error("Invalid Parameter");let u=a._layer;if(u instanceof D["default"]&&(u=(0,s.constructFeatureSet)(u,t.spatialReference,["*"],!0,t.lrucache,t.interceptor)),null===u)return null;if(!1===(0,c.y)(u))return null;u=await u.load();const f=u.relationshipMetaData().filter((e=>e.name===i));if(0===f.length)return null;if(void 0!==f[0].relationshipTableId&&null!==f[0].relationshipTableId&&f[0].relationshipTableId>-1)return(0,s.constructFeatureSetFromRelationship)(u,f[0],a.field(u.objectIdField),u.spatialReference,l,o,t.lrucache,t.interceptor);let d=u.serviceUrl();if(!d)return null;d="/"===d.charAt(d.length-1)?d+f[0].relatedTableId.toString():d+"/"+f[0].relatedTableId.toString();const m=await(0,s.constructFeatureSetFromUrl)(d,u.spatialReference,l,o,t.lrucache,t.interceptor);await m.load();let p=m.relationshipMetaData();if(p=p.filter((e=>e.id===f[0].id)),!1===a.hasField(f[0].keyField)||null===a.field(f[0].keyField)){const e=await u.getFeatureByObjectId(a.field(u.objectIdField),[f[0].keyField]);if(e){const t=b.WhereClause.create(p[0].keyField+"= @id",m.getFieldsIndex());return t.parameters={id:e.attributes[f[0].keyField]},m.filter(t)}return new y.Z({parentfeatureset:m})}const h=b.WhereClause.create(p[0].keyField+"= @id",m.getFieldsIndex());return h.parameters={id:a.field(f[0].keyField)},m.filter(h)}))},e.signatures.push({name:"featuresetbyrelationshipname",min:"2",max:"4"}),e.functions.featuresetbyassociation=function(t,n){return e.standardFunctionAsync(t,n,(async(e,n,r)=>{(0,c.p)(r,2,3);const a=r[0],i=(0,c.h)((0,c.C)(r[1],"")).toLowerCase(),l=(0,c.b)(r[2])?(0,c.h)(r[2]):null;if(null===r[0])return null;if(!(0,c.s)(r[0]))throw new Error("Invalid Parameter");let o=a._layer;if(o instanceof D["default"]&&(o=(0,s.constructFeatureSet)(o,t.spatialReference,["*"],!0,t.lrucache,t.interceptor)),null===o)return null;if(!1===(0,c.y)(o))return null;await o.load();const u=o.serviceUrl(),d=await(0,s.constructAssociationMetaDataFeatureSetFromUrl)(u,t.spatialReference);let m=null,p=null,y=!1;if(null!==l&&""!==l&&void 0!==l){for(const e of d.terminals)e.terminalName===l&&(p=e.terminalId);null===p&&(y=!0)}const h=d.associations.getFieldsIndex(),g=h.get("TOGLOBALID").name,F=h.get("FROMGLOBALID").name,E=h.get("TOTERMINALID").name,I=h.get("FROMTERMINALID").name,x=h.get("FROMNETWORKSOURCEID").name,A=h.get("TONETWORKSOURCEID").name,S=h.get("ASSOCIATIONTYPE").name,C=h.get("ISCONTENTVISIBLE").name,$=h.get("OBJECTID").name;for(const t of o.fields)if("global-id"===t.type){m=a.field(t.name);break}let T=null,L=new f.yN(new N.Z({name:"percentalong",alias:"percentalong",type:"double"}),b.WhereClause.create("0",d.associations.getFieldsIndex())),v=new f.yN(new N.Z({name:"side",alias:"side",type:"string"}),b.WhereClause.create("''",d.associations.getFieldsIndex()));const O="globalid",P="globalId",R={};for(const t in d.lkp)R[t]=d.lkp[t].sourceId;const Z=new f.TO(new N.Z({name:"classname",alias:"classname",type:"string"}),null,R);let W="";switch(i){case"midspan":{W=`((${g}='${m}') OR ( ${F}='${m}')) AND (${S} IN (5))`,Z.codefield=b.WhereClause.create(`CASE WHEN (${g}='${m}') THEN ${x} ELSE ${A} END`,d.associations.getFieldsIndex());const e=(0,w.JW)(f.Xx.findField(d.associations.fields,F));e.name=O,e.alias=O,T=new f.yN(e,b.WhereClause.create(`CASE WHEN (${F}='${m}') THEN ${g} ELSE ${F} END`,d.associations.getFieldsIndex())),L=d.unVersion>=4?new f.$X(f.Xx.findField(d.associations.fields,h.get("PERCENTALONG").name)):new f.yN(new N.Z({name:"percentalong",alias:"percentalong",type:"double"}),b.WhereClause.create("0",d.associations.getFieldsIndex()));break}case"junctionedge":{W=`((${g}='${m}') OR ( ${F}='${m}')) AND (${S} IN (4,6))`,Z.codefield=b.WhereClause.create(`CASE WHEN (${g}='${m}') THEN ${x} ELSE ${A} END`,d.associations.getFieldsIndex());const e=(0,w.JW)(f.Xx.findField(d.associations.fields,F));e.name=O,e.alias=O,T=new f.yN(e,b.WhereClause.create(`CASE WHEN (${F}='${m}') THEN ${g} ELSE ${F} END`,d.associations.getFieldsIndex())),v=new f.yN(new N.Z({name:"side",alias:"side",type:"string"}),b.WhereClause.create(`CASE WHEN (${S}=4) THEN 'from' ELSE 'to' END`,d.associations.getFieldsIndex()));break}case"connected":{let e=`${g}='@T'`,t=`${F}='@T'`;null!==p&&(e+=` AND ${E}=@A`,t+=` AND ${I}=@A`),W="(("+e+") OR ("+t+"))",W=(0,c.M)(W,"@T",m),e=(0,c.M)(e,"@T",m),null!==p&&(e=(0,c.M)(e,"@A",p.toString()),W=(0,c.M)(W,"@A",p.toString())),Z.codefield=b.WhereClause.create("CASE WHEN "+e+` THEN ${x} ELSE ${A} END`,d.associations.getFieldsIndex());const n=(0,w.JW)(f.Xx.findField(d.associations.fields,F));n.name=O,n.alias=O,T=new f.yN(n,b.WhereClause.create("CASE WHEN "+e+` THEN ${F} ELSE ${g} END`,d.associations.getFieldsIndex()));break}case"container":W=`${g}='${m}' AND ${S} = 2`,null!==p&&(W+=` AND ${E} = `+p.toString()),Z.codefield=x,W="( "+W+" )",T=new f.QP(f.Xx.findField(d.associations.fields,F),O,O);case"content":W=`(${F}='${m}' AND ${S} = 2)`,null!==p&&(W+=` AND ${I} = `+p.toString()),Z.codefield=A,W="( "+W+" )",T=new f.QP(f.Xx.findField(d.associations.fields,g),O,O);break;case"structure":W=`(${g}='${m}' AND ${S} = 3)`,null!==p&&(W+=` AND ${E} = `+p.toString()),Z.codefield=x,W="( "+W+" )",T=new f.QP(f.Xx.findField(d.associations.fields,F),O,P);break;case"attached":W=`(${F}='${m}' AND ${S} = 3)`,null!==p&&(W+=` AND ${I} = `+p.toString()),Z.codefield=A,W="( "+W+" )",T=new f.QP(f.Xx.findField(d.associations.fields,g),O,P);break;default:throw new Error("Invalid Parameter")}return y&&(W="1 <> 1"),new f.Xx({parentfeatureset:d.associations,adaptedFields:[new f.$X(f.Xx.findField(d.associations.fields,$)),new f.$X(f.Xx.findField(d.associations.fields,C)),T,v,Z,L],extraFilter:W?b.WhereClause.create(W,d.associations.getFieldsIndex()):null})}))},e.signatures.push({name:"featuresetbyassociation",min:"2",max:"6"}),e.functions.groupby=function(t,n){return e.standardFunctionAsync(t,n,(async(n,r,i)=>{if((0,c.p)(i,3,3),!(0,c.y)(i[0]))throw new Error("Illegal Value: GroupBy");const l=await i[0].load(),s=[],o=[];let u=!1,f=[];if((0,c.b)(i[1]))f.push(i[1]);else if(i[1]instanceof a.Z)f.push(i[1]);else if((0,c.l)(i[1]))f=i[1];else{if(!(0,c.n)(i[1]))throw new Error("Illegal Value: GroupBy");f=i[1].toArray()}for(const e of f)if((0,c.b)(e)){const t=b.WhereClause.create((0,c.h)(e),l.getFieldsIndex()),n=!0===(0,F.y5)(t)?(0,c.h)(e):"%%%%FIELDNAME";s.push({name:n,expression:t}),"%%%%FIELDNAME"===n&&(u=!0)}else{if(!(e instanceof a.Z))throw new Error("Illegal Value: GroupBy");{const t=e.hasField("name")?e.field("name"):"%%%%FIELDNAME",n=e.hasField("expression")?e.field("expression"):"";if("%%%%FIELDNAME"===t&&(u=!0),!t)throw new Error("Illegal Value: GroupBy");s.push({name:t,expression:b.WhereClause.create(n||t,l.getFieldsIndex())})}}if(f=[],(0,c.b)(i[2]))f.push(i[2]);else if((0,c.l)(i[2]))f=i[2];else if((0,c.n)(i[2]))f=i[2].toArray();else{if(!(i[2]instanceof a.Z))throw new Error("Illegal Value: GroupBy");f.push(i[2])}for(const e of f){if(!(e instanceof a.Z))throw new Error("Illegal Value: GroupBy");{const t=e.hasField("name")?e.field("name"):"",n=e.hasField("statistic")?e.field("statistic"):"",r=e.hasField("expression")?e.field("expression"):"";if(!t||!n||!r)throw new Error("Illegal Value: GroupBy");o.push({name:t,statistic:n.toLowerCase(),expression:b.WhereClause.create(r,l.getFieldsIndex())})}}if(u){const e={};for(const n of l.fields)e[n.name.toLowerCase()]=1;for(const n of s)"%%%%FIELDNAME"!==n.name&&(e[n.name.toLowerCase()]=1);for(const n of o)"%%%%FIELDNAME"!==n.name&&(e[n.name.toLowerCase()]=1);let t=0;for(const n of s)if("%%%%FIELDNAME"===n.name){for(;1===e["field_"+t.toString()];)t++;e["field_"+t.toString()]=1,n.name="FIELD_"+t.toString()}}for(const a of s)await A(a.expression,e,t);for(const a of o)await A(a.expression,e,t);return i[0].groupby(s,o)}))},e.signatures.push({name:"groupby",min:"3",max:"3"}),e.functions.distinct=function(t,n){return e.standardFunctionAsync(t,n,(async(n,r,i)=>{if((0,c.y)(i[0])){(0,c.p)(i,2,2);const n=await i[0].load(),r=[];let l=[];if((0,c.b)(i[1]))l.push(i[1]);else if(i[1]instanceof a.Z)l.push(i[1]);else if((0,c.l)(i[1]))l=i[1];else{if(!(0,c.n)(i[1]))throw new Error("Illegal Value: GroupBy");l=i[1].toArray()}let s=!1;for(const e of l)if((0,c.b)(e)){const t=b.WhereClause.create((0,c.h)(e),n.getFieldsIndex()),a=!0===(0,F.y5)(t)?(0,c.h)(e):"%%%%FIELDNAME";r.push({name:a,expression:t}),"%%%%FIELDNAME"===a&&(s=!0)}else{if(!(e instanceof a.Z))throw new Error("Illegal Value: GroupBy");{const t=e.hasField("name")?e.field("name"):"%%%%FIELDNAME",a=e.hasField("expression")?e.field("expression"):"";if("%%%%FIELDNAME"===t&&(s=!0),!t)throw new Error("Illegal Value: GroupBy");r.push({name:t,expression:b.WhereClause.create(a||t,n.getFieldsIndex())})}}if(s){const e={};for(const r of n.fields)e[r.name.toLowerCase()]=1;for(const n of r)"%%%%FIELDNAME"!==n.name&&(e[n.name.toLowerCase()]=1);let t=0;for(const n of r)if("%%%%FIELDNAME"===n.name){for(;1===e["field_"+t.toString()];)t++;e["field_"+t.toString()]=1,n.name="FIELD_"+t.toString()}}for(const a of r)await A(a.expression,e,t);return i[0].groupby(r,[])}return x("distinct",n,r,i)}))})}}}]);
//# sourceMappingURL=5007.93ff3ac1.js.map