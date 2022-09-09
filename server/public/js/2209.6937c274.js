"use strict";(self["webpackChunkclient"]=self["webpackChunkclient"]||[]).push([[2209],{42209:function(n,e,t){t.r(e),t.d(e,{registerFunctions:function(){return c}});var r=t(19249),a=t(94837),o=t(68673);function i(n){return n&&n.domain?"coded-value"===n.domain.type||"codedValue"===n.domain.type?r.Z.convertObjectToArcadeDictionary({type:"codedValue",name:n.domain.name,dataType:o.yE[n.field.type],codedValues:n.domain.codedValues.map((n=>({name:n.name,code:n.code})))}):r.Z.convertObjectToArcadeDictionary({type:"range",name:n.domain.name,dataType:o.yE[n.field.type],min:n.domain.min,max:n.domain.max}):null}function c(n){"async"===n.mode&&(n.functions.domain=function(e,t){return n.standardFunctionAsync(e,t,(async function(n,e,t){if((0,a.p)(t,2,3),(0,a.s)(t[0]))return i((0,a.T)(t[0],(0,a.h)(t[1]),void 0===t[2]?void 0:(0,a.f)(t[2])));if((0,a.y)(t[0]))return await t[0]._ensureLoaded(),i((0,a.Z)((0,a.h)(t[1]),t[0],null,void 0===t[2]?void 0:(0,a.f)(t[2])));throw new Error("Invalid Parameter")}))},n.functions.subtypes=function(e,t){return n.standardFunctionAsync(e,t,(async function(n,e,t){if((0,a.p)(t,1,1),(0,a.s)(t[0])){const n=(0,a.Q)(t[0]);return n?r.Z.convertObjectToArcadeDictionary(n):null}if((0,a.y)(t[0])){await t[0]._ensureLoaded();const n=t[0].subtypes();return n?r.Z.convertObjectToArcadeDictionary(n):null}throw new Error("Invalid Parameter")}))},n.functions.domainname=function(e,t){return n.standardFunctionAsync(e,t,(async function(n,e,t){if((0,a.p)(t,2,4),(0,a.s)(t[0]))return(0,a.U)(t[0],(0,a.h)(t[1]),t[2],void 0===t[3]?void 0:(0,a.f)(t[3]));if((0,a.y)(t[0])){await t[0]._ensureLoaded();const n=(0,a.Z)((0,a.h)(t[1]),t[0],null,void 0===t[3]?void 0:(0,a.f)(t[3]));return(0,a._)(n,t[2])}throw new Error("Invalid Parameter")}))},n.signatures.push({name:"domainname",min:"2",max:"4"}),n.functions.domaincode=function(e,t){return n.standardFunctionAsync(e,t,(async function(n,e,t){if((0,a.p)(t,2,4),(0,a.s)(t[0]))return(0,a.V)(t[0],(0,a.h)(t[1]),t[2],void 0===t[3]?void 0:(0,a.f)(t[3]));if((0,a.y)(t[0])){await t[0]._ensureLoaded();const n=(0,a.Z)((0,a.h)(t[1]),t[0],null,void 0===t[3]?void 0:(0,a.f)(t[3]));return(0,a.$)(n,t[2])}throw new Error("Invalid Parameter")}))},n.signatures.push({name:"domaincode",min:"2",max:"4"})),n.functions.text=function(e,t){return n.standardFunctionAsync(e,t,(function(n,e,t){if((0,a.p)(t,1,2),!(0,a.y)(t[0]))return(0,a.t)(t[0],t[1]);{const e=(0,a.C)(t[1],"");if(""===e)return t[0].castToText();if("schema"===e.toLowerCase())return t[0].convertToText("schema",n.abortSignal);if("featureset"===e.toLowerCase())return t[0].convertToText("featureset",n.abortSignal)}}))},n.functions.gdbversion=function(e,t){return n.standardFunctionAsync(e,t,(async function(n,e,t){if((0,a.p)(t,1,1),(0,a.s)(t[0]))return t[0].gdbVersion();if((0,a.y)(t[0]))return(await t[0].load()).gdbVersion;throw new Error("Invalid Parameter")}))},n.functions.schema=function(e,t){return n.standardFunctionAsync(e,t,(async function(n,e,t){if((0,a.p)(t,1,1),(0,a.y)(t[0]))return await t[0].load(),r.Z.convertObjectToArcadeDictionary(t[0].schema());if((0,a.s)(t[0])){const n=(0,a.P)(t[0]);return n?r.Z.convertObjectToArcadeDictionary(n):null}throw new Error("Invalid Parameter")}))}}}}]);
//# sourceMappingURL=2209.6937c274.js.map